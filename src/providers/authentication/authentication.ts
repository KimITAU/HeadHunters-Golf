import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  token :string;
  username:string;
  password:string;

  private apiHost;
  private apiHostAuthetication;
    constructor(public http: HttpClient,private storage: Storage) {
      this.apiHostAuthetication = 'http://headhunters.uziwa.com/wp-json/jwt-auth/v1/token';
      this.apiHost = 'http://headhunters.uziwa.com/wp-json/wp/v2/posts';
      this.username = 'headhunters';
      this.password = 'headhunters';
    }

    isAuthenticated(){
      return new Promise(resolve=>{
        if(this.token){
          resolve(true);
        }
        else{
          this.login(this.username, this.password).then((data)=>{
            console.log("timing");
            resolve(true);
          });
        }

      });

    }

    login(username:string, password: string){
      return new Promise(resolve=>{
        this.http.post( this.apiHostAuthetication, {
            username: username,
            password: password
          })
          .subscribe((data)=>{
            if('token' in data){
              this.token = data['token']
              console.log(this.token);
              console.log('authenticated');
              resolve(true);
            }else{
              console.log(data);
              console.log('token not found');
              resolve(false)}
            });
        });
    }

    uploadPost(data:string){
      console.log('upload post');
      let body = { "title": "Scores Posted", "content": data,"status":"publish" };
      let headers = new HttpHeaders();
      //headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization','Bearer '+this.token)
      console.log('Your token is', this.token);
      this.http.post( this.apiHost,body,{headers: headers}
      ).subscribe((data)=>{
          console.log(data);
        });

    }

}
