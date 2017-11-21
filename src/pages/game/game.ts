import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { GameProvider } from '../../providers/game/game';
import { PlayerProvider } from '../../providers/player/player';
import { AlertController } from 'ionic-angular';
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
  private teamColor = ['#eee','#00f','#f00'];

  constructor(public playerProvider: PlayerProvider,public alertCtrl: AlertController,public gameProvider: GameProvider,public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.players = this.playerProvider.getRows();
    console.log(this.players);
    this.longestDrive = {id:1,name:'john'};
    this.hole = gameProvider.getCurrentHole();
  }

  ionViewDidLoad() {
  }

  showPopover(){
    console.log('show poperver');
    let popover = this.popoverCtrl.create(ListPage);
    console.log(popover);
    popover.present();
    console.log('show popover end');
  }

  addHole(increment){
    this.hole = this.gameProvider.nextCurrentHole(increment);
  }
  setScore(team:number){
    this.backgroundColor[this.hole-1] = this.teamColor[team];
    this.gameProvider.setScore(this.hole,team);
    if(this.gameProvider.checkTeamWonLast3Holes()){
      this.showAlert('Team')
    }
    this.addHole(1);
  }

  showAlert(name) {
    let alert = this.alertCtrl.create({
      title: 'Remove Club',
      subTitle: name+' needs to have a club removed',
      buttons: ['OK']
    });
    alert.present();
  }
}
