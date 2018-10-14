import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';

// Model
import { TestComplete } from './../../models/test-complete.model';
import { Word } from '../../models/word.model';
import { ResultTestsPage } from '../result-tests/result-tests';

/**
 * Generated class for the TestOrthographyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-orthography',
  templateUrl: 'test-orthography.html',
})
export class TestOrthographyPage {
  public test: TestComplete;
  public tests: TestComplete[];
  public words_to_practice: Word[];
  public words_answered_correctly: Word[];

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
    this.tests = navParams.get('tests');
    this.words_answered_correctly = navParams.get('words_answered_correctly');
    this.words_to_practice = navParams.get('words_to_practice');
  }

  ionViewDidLoad() {
    this.getTest();
  }

  private getTest() {
    this.test = this.tests.pop();
  }

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
