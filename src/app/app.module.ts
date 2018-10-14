import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestOrthographyPage } from '../pages/test-orthography/test-orthography';
import { LearnNewWordsPage } from '../pages/learn-new-words/learn-new-words';
import { TestModalPage } from '../pages/test-modal/test-modal';

// Services
import { HttpService } from './../services/http.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestOrthographyPage,
    LearnNewWordsPage,
    TestModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestOrthographyPage,
    LearnNewWordsPage,
    TestModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
