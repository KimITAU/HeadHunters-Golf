import { Injectable } from '@angular/core';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamProvider {

  private players=[];
  private teams = [[],[],[]];

  constructor( ) {

  }
  addPlayer(team,player){
    this.teams[team].push(player);
  }
  removePlayer(team,player){
    var indexOfItem = this.teams[team].findIndex(i => i.id === player.id);
    if(indexOfItem > -1){
     this.teams[team].splice(indexOfItem,1);
    }
  }
  getAllPlayers(){
    var playersArray = [];
    console.log(this.teams);
    this.teams.forEach(function(players){

      players.forEach(function(player){
        playersArray.push(player);
      })
    });
    return playersArray;
  }

}
