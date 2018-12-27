import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';

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
  public loadingMessage: string = "Por favor espere..."
  public errorTitle: string = "¡Error!"
  public errorInternetMessage: string = "Verifique su conexión a internet"
  public errorServerMessage: string = "Intente de nuevo más tarde"
  public okOption: string = "OK";

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {}

  private redirectToPage(page: string) {
    if (page == 'testOrthography') this.getTests();
    else if (page == 'learnNewWords') this.getWords();
    else if (page == 'learnNewEtymologies') this.getEtymologies();
  }

  private getTests() {
    const loader = this.loadingCtrl.create({
      content: this.loadingMessage
    });
    loader.present();

    this.httpService.get('lite_random_tests')
    .subscribe(
      tests => {
        let testList: TestComplete[] = [];

        if (tests) {
          for (let test of tests) {
            testList.push(new TestComplete(test));
          }
          let modal = this.modalCtrl.create(TestOrthographyPage,
            { 
              tests: testList,
              words_answered_correctly: [],
              words_to_practice: []
            });
          if (loader) loader.dismiss();
          if (testList.length > 0) {
            modal.present();
          } else {
            this.showAlert(this.errorTitle, this.errorServerMessage, this.okOption);
          }
        } else {
          if (loader) loader.dismiss();
          this.showAlert(this.errorTitle, this.errorServerMessage, this.okOption);
        }
      },
      error => {
        if (loader) loader.dismiss();
        this.showAlert(this.errorTitle, this.errorInternetMessage, this.okOption);
      }
    );
  }

  private getWords() {
    const loader = this.loadingCtrl.create({
      content: this.loadingMessage
    });
    loader.present();

    this.httpService.get('lite_random_words')
    .subscribe(
      words => {
        let wordList: WordComplete[] = [];

        if (words) {
          for (let word of words) {
            wordList.push(new WordComplete(word));
          }
          let modal = this.modalCtrl.create(LearnNewWordsPage,
            { 
              words: wordList
            });
          if (loader) loader.dismiss();
          if (wordList.length > 0) {
            modal.present();
          } else {
            this.showAlert(this.errorTitle, this.errorServerMessage, this.okOption);
          }
        } else {
          if (loader) loader.dismiss();
          this.showAlert(this.errorTitle, this.errorServerMessage, this.okOption);
        }
      },
      error => {
        if (loader) loader.dismiss();
        this.showAlert(this.errorTitle, this.errorInternetMessage, this.okOption);
      }
    );
  }

  private getEtymologies() {
    const loader = this.loadingCtrl.create({
      content: this.loadingMessage
    });
    loader.present();

    this.httpService.get('lite_random_etymologies')
    .subscribe(
      etymologies => {
        let etymologyList: Etymology[] = [];

        if (etymologies) {
          for (let etymology of etymologies) {
            etymologyList.push(new Etymology(etymology));
          }
          let modal = this.modalCtrl.create(LearnNewEtymologiesPage,
            { 
              etymologies: etymologyList
            });
          if (loader) loader.dismiss();
          if (etymologyList.length > 0) {
            modal.present();
          } else {
            this.showAlert(this.errorTitle, this.errorServerMessage, this.okOption);
          }
        } else {
          if (loader) loader.dismiss();
          this.showAlert(this.errorTitle, this.errorServerMessage, this.okOption);
        }
      },
      error => {
        if (loader) loader.dismiss();
        this.showAlert(this.errorTitle, this.errorInternetMessage, this.okOption);
      }
    );
  }

  public showAlert(title: string, msg: string, buttonMsg: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: [buttonMsg]
    });
    alert.present();
  }
}
