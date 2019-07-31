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
  private loadingMessage: string = "Por favor espere...";
  private errorTitle: string = "¡Error!";
  private errorInternetMessage: string = "Verifique su conexión a internet";
  private errorServerMessage: string = "Intente de nuevo más tarde";
  private okOption: string = "OK";

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private httpService: HttpService
    ) {
    this.words_answered_correctly = this.navParams.get('words_answered_correctly');
    this.words_to_practice = this.navParams.get('words_to_practice');
  }

  /**
   * Method to get the words to practice if there were mistakes
   */
  public practiceWords() {
    const loader = this.loadingCtrl.create({
      content: this.loadingMessage
    });
    loader.present();

    this.httpService.postWords(this.words_to_practice, "complete_words")
    .then(
      words => {
        if (words) {
          let wordList: WordComplete[] = JSON.parse(words.data);
          let modal = this.modalCtrl.create(LearnNewWordsPage,
            { 
              words: wordList
            });
          if (loader) loader.dismiss();
          modal.present();
          this.viewCtrl.dismiss();
        } else {
          if (loader) loader.dismiss();
          this.showAlert(this.errorTitle, this.errorServerMessage, this.okOption);
        }
      })
    .catch(error => {
        // console.log(error.error);
        if (loader) loader.dismiss();
        this.showAlert(this.errorTitle, this.errorInternetMessage, this.okOption);
      }
    );
  }

  /**
   * Method to show an alert with the message specified
   * @param title: Title of the alert
   * @param msg: Text that explains the alert
   * @param buttonMsg: Message that includes the button
   */
  private showAlert(title: string, msg: string, buttonMsg: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: [buttonMsg]
    });
    alert.present();
  }

  /**
   * Method to hide the current modal
   */
  public sendToHome() {
    this.viewCtrl.dismiss();
  }
}
