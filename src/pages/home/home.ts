import { Component } from '@angular/core';
import { ModalController, LoadingController, AlertController } from 'ionic-angular';

// Service
import { HttpService } from '../../services/http.service';

// Model
import { TestComplete } from './../../models/test-complete.model';
import { WordComplete } from '../../models/word-complete.model';
import { Etymology } from '../../models/etymology.model';

// Pages
import { TestOrthographyPage } from './../../pages/test-orthography/test-orthography';
import { LearnNewWordsPage } from './../../pages/learn-new-words/learn-new-words';
import { LearnNewEtymologiesPage } from './../../pages/learn-new-etymologies/learn-new-etymologies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private httpService: HttpService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}

  /**
   * Method to redirect to page and make the GET Request of the resource needed
   * @param page: Page to redirect
   */
  public redirectToPage(page: string) {
    if (page == 'testOrthography') this.getTests();
    else if (page == 'learnNewWords') this.getWords();
    else if (page == 'learnNewEtymologies') this.getEtymologies();
  }

  private getTests() {
    const loader = this.loadingCtrl.create({
      content: this.httpService.loadingMessage
    });
    loader.present();

    this.httpService.get('lite_random_tests')
    .then(
      tests => {
        if (tests) {
          const testList: TestComplete[] = JSON.parse(tests.data);
          const modal = this.modalCtrl.create(TestOrthographyPage,
            { 
              tests: testList,
              words_answered_correctly: [],
              words_to_practice: []
            });
          if (loader) loader.dismiss();
          if (testList.length > 0) {
            modal.present();
          } else {
            this.showAlert(this.httpService.errorTitle, this.httpService.errorServerMessage, this.httpService.okOption);
          }
        } else {
          if (loader) loader.dismiss();
          this.showAlert(this.httpService.errorTitle, this.httpService.errorServerMessage, this.httpService.okOption);
        }
      })
    .catch(error => {
        // error.error to get the reason
        if (loader) loader.dismiss();
        this.showAlert(this.httpService.errorTitle, error.error, this.httpService.okOption);
      }
    );
  }

  /**
   * Method to request a number of random words
   */
  private getWords() {
    const loader = this.loadingCtrl.create({
      content: this.httpService.loadingMessage
    });
    loader.present();

    this.httpService.get('lite_random_words')
    .then(
      words => {
        if (words.data) {
          const wordList: WordComplete[] = JSON.parse(words.data);
          const modal = this.modalCtrl.create(LearnNewWordsPage,
            { 
              words: wordList
            });
          if (loader) loader.dismiss();
          if (wordList.length > 0) {
            modal.present();
          } else {
            this.showAlert(this.httpService.errorTitle, this.httpService.errorServerMessage, this.httpService.okOption);
          }
        } else {
          if (loader) loader.dismiss();
          this.showAlert(this.httpService.errorTitle, this.httpService.errorServerMessage, this.httpService.okOption);
        }
      })
    .catch(error => {
        if (loader) loader.dismiss();
        this.showAlert(this.httpService.errorTitle, error.error, this.httpService.okOption);
      }
    );
  }

  /**
   * Method to request a number of random etymologies
   */
  private getEtymologies() {
    const loader = this.loadingCtrl.create({
      content: this.httpService.loadingMessage
    });
    loader.present();

    this.httpService.get('lite_random_etymologies')
    .then(
      etymologies => {
        if (etymologies.data) {
          let etymologyList: Etymology[] = JSON.parse(etymologies.data);
          let modal = this.modalCtrl.create(LearnNewEtymologiesPage,
            { 
              etymologies: etymologyList
            });
          if (loader) loader.dismiss();
          if (etymologyList.length > 0) {
            modal.present();
          } else {
            this.showAlert(this.httpService.errorTitle, this.httpService.errorServerMessage, this.httpService.okOption);
          }
        } else {
          if (loader) loader.dismiss();
          this.showAlert(this.httpService.errorTitle, this.httpService.errorServerMessage, this.httpService.okOption);
        }
      })
    .catch(error => {
        if (loader) loader.dismiss();
        this.showAlert(this.httpService.errorTitle, error.error, this.httpService.okOption);
      }
    );
  }

  /**
   * Method to show an alert banner with the text specified
   * @param title: Title of the alert
   * @param msg: Text that explains the alert
   * @param buttonMsg: Text that the main button will include
   */
  private showAlert(title: string, msg: string, buttonMsg: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: [buttonMsg]
    });
    alert.present();
  }
}
