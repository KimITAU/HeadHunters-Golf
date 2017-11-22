import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PlayerDetailPage } from '../pages/player-detail/player-detail';
import { TeamPage } from '../pages/team/team';
import { GamePage } from '../pages/game/game';
import { InfoPage } from '../pages/info/info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayerProvider } from '../providers/player/player';
import { TeamProvider } from '../providers/team/team';
import { GameProvider } from '../providers/game/game';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TeamPage,
    PlayerDetailPage,
    GamePage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PlayerDetailPage,
    TeamPage,
    GamePage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerProvider,
    TeamProvider,
    GameProvider,
  ]
})
export class AppModule {}
