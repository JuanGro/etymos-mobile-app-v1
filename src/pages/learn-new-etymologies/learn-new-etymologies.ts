import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

// Model
import { Etymology } from '../../models/etymology.model';

@Component({
  selector: 'page-learn-new-etymologies',
  templateUrl: 'learn-new-etymologies.html',
})
export class LearnNewEtymologiesPage {
  public etymologies: Etymology[];

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController
    ) {
    this.etymologies = this.navParams.get('etymologies');
  }

  /**
   * Method to dismiss the current modal
   */
  public continue() {
    this.viewCtrl.dismiss();
  }
}
