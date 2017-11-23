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

  private apiHost;
  private apiHostAuthetication;
    constructor(public http: HttpClient,private storage: Storage) {
      this.apiHostAuthetication = 'http://headhunters.uziwa.com/wp-json/jwt-auth/v1/token';
      this.apiHost = 'http://headhunters.uziwa.com/wp-json/wp/v2/posts';
    }

    isAuthenticated(){
      return  this.token;
        /*
      return new Promise(resolve=>{
          this.storage.get('auth.token').then((val) => {
            if(val!==null){
              console.log(val);
              resolve(true)}
              else{
                resolve(false);
              }
            });
          });*/
    }

    login(username:string, password: string){
      this.http.post( this.apiHostAuthetication, {
          username: username,
          password: password
        })
        .subscribe((data)=>{
          if('token' in data){
            this.storage.set('auth.token',data['token']);
            this.storage.get('auth.token').then((val) => {
              this.token = val;
            console.log('Your token is', val)});
          }else{
            console.log(data);
            console.log('token not found');
          }

        });
    }

    uploadPost(data:string){
      console.log('upload post');
      let body = { "title": "test", "content": "abc123","status":"publish" };
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
