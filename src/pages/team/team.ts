import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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

  }

}
