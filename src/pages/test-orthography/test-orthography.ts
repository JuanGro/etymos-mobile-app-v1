import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { TestModalPage } from './../test-modal/test-modal';
import { LoadingController } from 'ionic-angular';

// Service
import { HttpService } from '../../services/http.service';

// Model
import { TestComplete } from './../../models/test-complete.model';

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
  public tests: TestComplete[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    this.getTests();
  }

  getTests() {
    this.tests = [];

    this.httpService.get('https://etymos.herokuapp.com/tests')
    .subscribe(
      tests => {
        const loader = this.loadingCtrl.create({
          content: "Please wait..."
        });
        loader.present();
        
        if (tests) {
          for (let test of tests) {
            this.tests.push(new TestComplete(test));
          }
        }

        loader.dismiss();
      },
      error => {

      }
    );
  }

  presentModal() {
    const modal = this.modalCtrl.create(TestModalPage);
    modal.present();
  }
}
