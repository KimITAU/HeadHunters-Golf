import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayerProvider } from '../../providers/player/player';
import { PlayerDetailPage } from '../player-detail/player-detail';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{name: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private playerPro:PlayerProvider) {
    this.items = playerPro.getRows();
  }

  addPlayer(name:string){
    var item = this.playerPro.addPlayer('New Player');
    this.navCtrl.push(PlayerDetailPage, {
      item: item
    });
  }

  viewPlayer(event, item) {
    this.navCtrl.push(PlayerDetailPage, {
      item: item
    });
  }
}
