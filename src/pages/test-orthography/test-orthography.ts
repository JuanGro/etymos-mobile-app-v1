import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';

// Model
import { TestComplete } from './../../models/test-complete.model';
import { Word } from '../../models/word.model';
import { ResultTestsPage } from '../result-tests/result-tests';

@IonicPage()
@Component({
  selector: 'page-test-orthography',
  templateUrl: 'test-orthography.html',
})
export class TestOrthographyPage {
  private test: TestComplete;
  private tests: TestComplete[];
  private words_to_practice: Word[];
  private words_answered_correctly: Word[];

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private viewCtrl: ViewController
    ) {
    this.tests = this.navParams.get('tests');
    this.words_answered_correctly = this.navParams.get('words_answered_correctly');
    this.words_to_practice = this.navParams.get('words_to_practice');
  }

  ionViewDidLoad() {
    this.getTest();
  }

  /**
   * Method that gets a single test to display
   */
  private getTest() {
    this.test = this.tests.pop();
  }

  /**
   * Method that checks if the answer is correct
   * @param option: Option selected by the user
   */
  public sendAnswer(option: boolean) {
    if (option == false) this.words_to_practice.push(new Word(this.test.word));
    else this.words_answered_correctly.push(new Word(this.test.word));

    if (this.tests.length > 0) {
      let modal = this.modalCtrl.create(TestOrthographyPage,
        { 
          tests: this.tests,
          words_answered_correctly: this.words_answered_correctly,
          words_to_practice: this.words_to_practice
        });
      modal.present();
      this.viewCtrl.dismiss();
    } else {
      let modal = this.modalCtrl.create(ResultTestsPage,
        {
          words_answered_correctly: this.words_answered_correctly,
          words_to_practice: this.words_to_practice
        });
      modal.present();
      this.viewCtrl.dismiss();
    }
  }
}
