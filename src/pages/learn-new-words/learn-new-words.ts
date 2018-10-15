import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { WordComplete } from '../../models/word-complete.model';

@IonicPage()
@Component({
  selector: 'page-learn-new-words',
  templateUrl: 'learn-new-words.html',
})
export class LearnNewWordsPage {
  public words: WordComplete[];
  public word: WordComplete;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
    ) {
    this.words = navParams.get('words');
  }

  ionViewDidLoad() {
    this.getWord();
  }

  private getWord() {
    this.word = this.words.pop();
  }

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
