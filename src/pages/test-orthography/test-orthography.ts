import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';

// Model
import { TestComplete } from './../../models/test-complete.model';
import { TestModalPage } from '../test-modal/test-modal';

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
  public tests: TestComplete[]

  constructor(
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
    this.tests = navParams.get('tests');
  }

  ionViewDidLoad() {
    this.getTest();
  }

  private getTest() {
    this.test = this.tests.pop();
  }

  public sendAnswer(option: string) {
    console.log(option);
    if (this.tests.length > 0) {
      let modal = this.modalCtrl.create(TestOrthographyPage, { tests: this.tests });
      modal.present();
      this.viewCtrl.dismiss();
    } else {
      let modal = this.modalCtrl.create(TestModalPage);
      modal.present();
      this.viewCtrl.dismiss();
    }
  }
}
