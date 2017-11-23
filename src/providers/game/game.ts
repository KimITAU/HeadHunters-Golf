import { Injectable } from '@angular/core';
import { Output }  from '@angular/core';
import { AuthenticationProvider } from '../authentication/authentication';
import { TeamProvider } from '../team/team';
/*
  Generated class for the GameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameProvider {
  private currentHole = 0;
  private holes = [1,2,3,4,5,6,7,8,9];
  @Output() score = [];
  @Output() longestDrive = [{name:''}];
  @Output() score1;
  @Output() score2;

  constructor(private teamProvider:TeamProvider, private authProvider:AuthenticationProvider) {
    this.score1 = 0;
    this.score2 = 0;
  }

  getCurrentHole(){
    return this.holes[this.currentHole];
  }
  nextCurrentHole(increment:number = 1){
    if( (this.currentHole + increment) in  this.holes){
      this.currentHole =  this.currentHole + increment;
      return this.holes[this.currentHole];
    }else{
      return this.holes[this.currentHole];
    }
  }

  setCurrentHole(hole:number){
    if( (hole -1) in  this.holes){
      this.currentHole = hole;
      return this.holes[this.currentHole];
    }else{
      return this.holes[this.currentHole];
    }
  }

  setScore(hole:number,team, longestDrivePlayer=null){
    this.score[hole] = team;
    this.longestDrive[hole] = longestDrivePlayer;
    this.getTeamScores();
  }
  getTeamScores(){
    var tempscore1=0;
    var tempscore2=0;
    this.score.forEach(function($val){
      if($val===1){
        tempscore1++;
      }else{if($val===2){
        tempscore2++;
      }}
    });
    this.score1 = tempscore1;
    this.score2 = tempscore2;
  }

  checkTeamWonLast3Holes(){
    var startIndex = this.currentHole;
    if(startIndex in this.score){
      var startIndex = this.currentHole-1;
      var tempTeam = this.score[startIndex];
      var returnRes = tempTeam > 0;
      for(var i=0; i<=2; i++){
        returnRes = returnRes && tempTeam == this.score[startIndex+i];
      }
      return returnRes;
    }
    return false;
  }
  checkLongestDrive(){
    var startIndex = this.currentHole;
    if(this.longestDrive[startIndex] == this.longestDrive[startIndex+1]){
      return this.longestDrive[startIndex];
    }
    return false;
  }

  uploadGameDetails(){
    var postContent = this.getGameDataViewable();
    this.authProvider.isAuthenticated().then((data)=>{
      this.authProvider.uploadPost(postContent);
    });
  }

  getGameDataViewable(){
    var returnString = '';
    var winningTeamId = this.score1>this.score2 ? 1 : this.score1==this.score2 ? 0 : 2;
    var WinningTeam = this.teamProvider.getTeamPlayerNames(winningTeamId);

    returnString += 'Team "'+ WinningTeam + '" won ' + '\r\n';
    returnString += 'Scores were : Team "'+ this.teamProvider.getTeamPlayerNames(1) + '" won '+this.score1 + ' holes and Team "'+this.teamProvider.getTeamPlayerNames(2)+ '" won '+ this.score2 +' holes' + '\r\n'+ '\r\n'+ '\r\n';
    returnString += 'Longest Drives ' + '\r\n';
    this.longestDrive.forEach(function(player){
      returnString += player.name+ '\r\n';
    });

    return returnString;
  }
}
