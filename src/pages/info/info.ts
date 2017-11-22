import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../providers/game/game';
import { TeamProvider } from '../../providers/team/team';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public gameProvider:GameProvider,public teamProvider:TeamProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.gameProvider.longestDrive);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
