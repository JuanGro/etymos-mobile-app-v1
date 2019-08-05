import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRate } from '@ionic-native/app-rate';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    appRate: AppRate
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.askUserRateApp(appRate);
    });
  }

  private askUserRateApp(appRate: AppRate) {
    if (appRate) {
      if (appRate.preferences) {
        appRate.preferences.storeAppURL = {
          ios: '1439656044',
          android: 'market://details?id=com.etymos.app'
        };
        appRate.preferences.customLocale = {
          title: '¿Deseas calificarnos?',
          message: '¡Con esto ayudarás a que siga gratis!',
          cancelButtonLabel: 'No',
          laterButtonLabel: 'Después',
          rateButtonLabel: '¡Claro!',
          yesButtonLabel: "¡Si!",
          noButtonLabel: "No",
          appRatePromptTitle: '¿Te gusta Etymos?',
          feedbackPromptTitle: '¡Ayúdanos!',
        };
        appRate.promptForRating(true);
      }
    }
  }
}
