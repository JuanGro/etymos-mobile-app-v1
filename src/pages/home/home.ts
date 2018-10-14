import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Pages
import { TestOrthographyPage } from './../../pages/test-orthography/test-orthography';
import { LearnNewWordsPage } from './../../pages/learn-new-words/learn-new-words';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController
    ) {}

  redirectToPage(page: string) {
    if (page == 'testOrthography') this.navCtrl.push(TestOrthographyPage);
    else if (page == 'learnNewWords') this.navCtrl.push(LearnNewWordsPage);
  }
}
