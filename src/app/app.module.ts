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
import { ResultTestsPage } from '../pages/result-tests/result-tests';
import { LearnNewEtymologiesPage } from '../pages/learn-new-etymologies/learn-new-etymologies';

// Services
import { HttpService } from './../services/http.service';
import { LearnNewWordsPageModule } from '../pages/learn-new-words/learn-new-words.module';
import { ResultTestsPageModule } from '../pages/result-tests/result-tests.module';
import { TestOrthographyPageModule } from '../pages/test-orthography/test-orthography.module';
import { LearnNewEtymologiesPageModule } from '../pages/learn-new-etymologies/learn-new-etymologies.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    LearnNewWordsPageModule,
    ResultTestsPageModule,
    TestOrthographyPageModule,
    LearnNewEtymologiesPageModule
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
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
