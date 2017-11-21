import { Injectable } from '@angular/core';
import { Output }  from '@angular/core';
/*
  Generated class for the GameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameProvider {
  private currentHole = 0;
  private holes = [1,2,3,4,5,6,7,8,9];
  private score = [];
  @Output() score1;
  @Output() score2;

  constructor() {
    this.score1 = 0;
    this.score2 = 0;
  }

  getCurrentHole(){
    console.log(this.currentHole);
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

  setScore(hole:number,team){
    this.score[hole] = team;
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
    var startIndex = this.currentHole-1;
    if(startIndex in this.score){
      var tempTeam = this.score[startIndex];
      var returnRes = tempTeam > 0;
      for(var i=0; i<=2; i++){
        returnRes = returnRes && tempTeam == this.score[startIndex+i];
      }
      return returnRes;
    }
    return false;
  }
}
