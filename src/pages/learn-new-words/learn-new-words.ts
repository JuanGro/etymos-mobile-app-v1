import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { WordComplete } from '../../models/word-complete.model';

@IonicPage()
@Component({
  selector: 'page-learn-new-words',
  templateUrl: 'learn-new-words.html',
})
export class LearnNewWordsPage {
  private words: WordComplete[];
  public word: WordComplete;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private modalCtrl: ModalController
    ) {
    this.words = this.navParams.get('words');
  }

  ionViewDidLoad() {
    this.getWord();
  }

  /**
   * Method to get the current word to see
   */
  private getWord() {
    this.word = this.words.pop();
  }

  /**
   * Method to create a new modal with the next word to see
   */
  public continue() {
    if (this.words.length > 0) {
      let modal = this.modalCtrl.create(LearnNewWordsPage,
        { 
          words: this.words
        });
      modal.present();
      this.viewCtrl.dismiss();
    } else {
      this.viewCtrl.dismiss();
    }
  }
}
