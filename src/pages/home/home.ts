import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';

// Service
import { HttpService } from '../../services/http.service';

// Model
import { TestComplete } from './../../models/test-complete.model';

// Pages
import { TestOrthographyPage } from './../../pages/test-orthography/test-orthography';
import { LearnNewWordsPage } from './../../pages/learn-new-words/learn-new-words';
import { WordComplete } from '../../models/word-complete.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  }

  private getTests() {
    this.httpService.get('https://etymos.herokuapp.com/random_tests')
    .subscribe(
      tests => {
        const loader = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loader.present();

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
          modal.present();
        } else {
          this.showAlert('Error :(', '¡No existen tests!', 'OK');
        }
        loader.dismiss();
      },
      error => {
        this.showAlert('Error :(', 'Verifique su conexión a internet', 'OK');
      }
    );
  }

  private getWords() {
    this.httpService.get('https://etymos.herokuapp.com/random_words')
    .subscribe(
      words => {
        const loader = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loader.present();

        let wordList: WordComplete[] = [];

        if (words) {
          for (let word of words) {
            wordList.push(new WordComplete(word));
          }
          let modal = this.modalCtrl.create(LearnNewWordsPage,
            { 
              words: wordList
            });
          modal.present();
        } else {
          this.showAlert('Error :(', '¡No existen palabras!', 'OK');
        }
        loader.dismiss();
      },
      error => {
        this.showAlert('Error :(', 'Verifique su conexión a internet', 'OK');
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
