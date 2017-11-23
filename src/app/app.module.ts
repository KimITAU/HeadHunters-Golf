import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PlayerDetailPage } from '../pages/player-detail/player-detail';
import { TeamPage } from '../pages/team/team';
import { GamePage } from '../pages/game/game';
import { InfoPage } from '../pages/info/info';
import { FinishPage } from '../pages/finish/finish';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayerProvider } from '../providers/player/player';
import { TeamProvider } from '../providers/team/team';
import { GameProvider } from '../providers/game/game';
import { AuthenticationProvider } from '../providers/authentication/authentication';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TeamPage,
    PlayerDetailPage,
    GamePage,
    InfoPage,
    FinishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    FormsModule,
    HttpClientModule,
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
    InfoPage,
    FinishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerProvider,
    TeamProvider,
    GameProvider,
    AuthenticationProvider,
  ]
})
export class AppModule {}
