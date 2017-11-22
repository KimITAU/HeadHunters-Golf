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
    console.log(player);
    this.teams[team].push(player);
  }
  removePlayer(team,player){
    var indexOfItem = this.teams[team].findIndex(i => i.id === player.id);
    if(indexOfItem > -1){
     this.teams[team].splice(indexOfItem,1);
    }
  }
  removeAllPlayers(){
    this.teams = [[{id:-1,name:'No Team'}],[],[]];
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
  getTeamPlayers(team:number){
    var playersArray = [];
    this.teams[team].forEach(function(player){
      playersArray.push(player);
    })
    return playersArray;
  }
  getTeamPlayerNames(team:number){
    var playersArray = this.getTeamPlayers(team);
    var returnString = '';
    playersArray.forEach(function(player){
      returnString += player.name + ' ';
    });
    return returnString;
  }

}
