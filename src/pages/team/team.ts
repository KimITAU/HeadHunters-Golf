import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GamePage } from '../game/game';
import { PlayerProvider } from '../../providers/player/player';
import { TeamProvider } from '../../providers/team/team';
/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  team1;
  team2;
  private players;
  constructor(public teamProvider:TeamProvider,public navCtrl: NavController, public navParams: NavParams, private playerPro : PlayerProvider) {
    this.players = playerPro.getRows();
    this.team1 = {player1:1,player2:2};
    this.team2 = {player1:3,player2:4};;
  }

  ionViewDidLoad() {
  }

  saveTeams(form){
    this.teamProvider.removeAllPlayers();
    var player1 = this.playerPro.getPlayer(this.team1.player1);
    console.log(this.team1.player1);
    this.teamProvider.addPlayer(1,this.playerPro.getPlayer(parseInt(this.team1.player2)));
    this.teamProvider.addPlayer(1,this.playerPro.getPlayer(parseInt(this.team1.player1)));
    this.teamProvider.addPlayer(2,this.playerPro.getPlayer(parseInt(this.team2.player1)));
    this.teamProvider.addPlayer(2,this.playerPro.getPlayer(parseInt(this.team2.player2)));

    this.navCtrl.push(GamePage);
  }

}
