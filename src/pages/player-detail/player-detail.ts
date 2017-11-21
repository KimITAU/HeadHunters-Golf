import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayerProvider } from '../../providers/player/player';
/**
 * Generated class for the PlayerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-detail',
  templateUrl: 'player-detail.html',
})
export class PlayerDetailPage {

  player;

  constructor(private navCtrl:NavController, public navParams: NavParams,private playerPro:PlayerProvider) {
    this.player = this.navParams.get('item');
  }

  ionViewDidLoad() {
  }

  deletePlayer(event, item)
  {
    this.playerPro.deletePlayer(item);
    //this.navCtrl.pop();
  }
  logForm() {
    this.navCtrl.pop();
  }
}
