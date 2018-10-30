import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Etymology } from '../../models/etymology.model';

@IonicPage()
@Component({
  selector: 'page-learn-new-etymologies',
  templateUrl: 'learn-new-etymologies.html',
})
export class LearnNewEtymologiesPage {
  public etymologies: Etymology[];
  public etymology: Etymology;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
    ) {
    this.etymologies = navParams.get('etymologies');
  }

  public continue() {
    this.viewCtrl.dismiss();
  }
}
