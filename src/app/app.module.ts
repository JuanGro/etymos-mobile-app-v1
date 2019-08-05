import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';
import { AppRate } from '@ionic-native/app-rate';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestOrthographyPage } from '../pages/test-orthography/test-orthography';
import { LearnNewWordsPage } from '../pages/learn-new-words/learn-new-words';
import { ResultTestsPage } from '../pages/result-tests/result-tests';
import { LearnNewEtymologiesPage } from '../pages/learn-new-etymologies/learn-new-etymologies';

// Services
import { HttpService } from './../services/http.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestOrthographyPage,
    LearnNewWordsPage,
    ResultTestsPage,
    LearnNewEtymologiesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestOrthographyPage,
    LearnNewWordsPage,
    ResultTestsPage,
    LearnNewEtymologiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppRate,
    HTTP,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
