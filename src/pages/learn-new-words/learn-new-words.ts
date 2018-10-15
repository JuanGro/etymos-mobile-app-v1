import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
    public viewCtrl: ViewController
    ) {
    this.words = navParams.get('words');
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
