import { Injectable } from '@angular/core';

/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerProvider {

  private players;
  private i:number;

  constructor() {
    this.players = [{id:1,name:'John'},{id:2,name:'Kim'},{id:3,name:'Gavin'},{id:4,name:'Sue'}];
    this.i = 5;
  }

  getRows(){
    return this.players;
  }

  addPlayer(name:string){
    var newPlayer = {id:this.i++,name:name};
    this.players.push(newPlayer);
    return newPlayer;
  }
  deletePlayer(item){
    var indexOfItem = this.players.findIndex(i => i.id === item.id);
    if(indexOfItem > -1){
     this.players.splice(indexOfItem,1);
    }
  }
}
