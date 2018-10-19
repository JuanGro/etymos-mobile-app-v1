import { Component } from '@angular/core';
import { IonicPage, ModalController, ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';

// Service
import { HttpService } from '../../services/http.service';

// Model
import { Word } from '../../models/word.model';
import { WordComplete } from '../../models/word-complete.model';
import { LearnNewWordsPage } from '../learn-new-words/learn-new-words';

@IonicPage()
@Component({
  selector: 'page-result-tests',
  templateUrl: 'result-tests.html',
})
export class ResultTestsPage {
  public words_to_practice: Word[];
  public words_answered_correctly: Word[];

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public httpService: HttpService
    ) {
    this.words_answered_correctly = navParams.get('words_answered_correctly');
    this.words_to_practice = navParams.get('words_to_practice');
  }

  private practiceWords() {
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    this.httpService.postWords(this.words_to_practice, "complete_words")
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
          modal.present();
          this.viewCtrl.dismiss();
        } else {
          if (loader) loader.dismiss();
          this.showAlert('Error :(', '¡No existen palabras!', 'OK');
        }
      },
      error => {
        if (loader) loader.dismiss();
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

  private sendToHome() {
    this.viewCtrl.dismiss();
  }
}
