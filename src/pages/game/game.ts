import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { GameProvider } from '../../providers/game/game';
import { PlayerProvider } from '../../providers/player/player';
import { TeamProvider } from '../../providers/team/team';
import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';
/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  hole:number;
  bob = "#f44";
  backgroundColor=['#eee','#eee','#eee','#eee','#eee','#eee','#eee','#eee','#eee'];
  players = [];
  longestDrive;
  private teamColor = ['#aaa','#00f','#f00'];
  team1Players;
  team2Players;

  constructor(public playerProvider: PlayerProvider,public teamProvider:TeamProvider,public alertCtrl: AlertController,public gameProvider: GameProvider,public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.players = this.teamProvider.getAllPlayers();
    this.team1Players = this.teamProvider.getTeamPlayerNames(1);
    this.team2Players = this.teamProvider.getTeamPlayerNames(2);
    this.longestDrive = 1;
    this.hole = gameProvider.getCurrentHole();
  }

  ionViewDidLoad() {
  }

  showPopover(){
    let popover = this.popoverCtrl.create(InfoPage);
    popover.present();
  }

  addHole(increment){
    this.hole = this.gameProvider.nextCurrentHole(increment);
  }
  setScore(team:number){

    //check that longest Drive has been set
    if(!this.longestDrive){
      this.showAlertNoLongestDrive();
      return;
    }

    this.backgroundColor[this.hole-1] = this.teamColor[team];
    this.gameProvider.setScore(this.hole,team, this.playerProvider.getPlayer(parseInt(this.longestDrive)));

    if(this.gameProvider.checkTeamWonLast3Holes()){
      this.showAlert('Team',' for winning 3 consecutive holes');
    }
    var longestDriveCheck = this.gameProvider.checkLongestDrive()
    if(longestDriveCheck){
      this.showAlert(longestDriveCheck.name,' for 2 consecutive longest drives')
    }
    this.longestDrive = null;
    this.addHole(1);
  }

  showAlert(name, reason='') {
    let alert = this.alertCtrl.create({
      title: 'Remove Club',
      subTitle: name+' needs to have a club removed '+reason,
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertNoLongestDrive() {
    let alert = this.alertCtrl.create({
      title: 'Longest Drive',
      subTitle: 'Please select the player with the longest drive',
      buttons: ['OK']
    });
    alert.present();
  }
}
