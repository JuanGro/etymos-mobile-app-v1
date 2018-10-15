import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { WordComplete } from '../../models/word-complete.model';

/**
 * Generated class for the LearnNewWordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  ionViewDidLoad() {}

  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
