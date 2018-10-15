import { Component } from '@angular/core';
import { IonicPage, ModalController, ViewController, NavParams } from 'ionic-angular';
import { Word } from '../../models/word.model';

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
    public viewCtrl: ViewController
    ) {
    this.words_answered_correctly = navParams.get('words_answered_correctly');
    this.words_to_practice = navParams.get('words_to_practice');
  }

  private practiceWords() {
    
  }

  private sendToHome() {
    this.viewCtrl.dismiss();
  }
}
