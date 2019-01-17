import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

// Model
import { Etymology } from '../../models/etymology.model';

@IonicPage()
@Component({
  selector: 'page-learn-new-etymologies',
  templateUrl: 'learn-new-etymologies.html',
})
export class LearnNewEtymologiesPage {
  private etymologies: Etymology[];

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController
    ) {
    this.etymologies = navParams.get('etymologies');
  }

  /**
   * Method to dismiss the current modal
   */
  private continue() {
    this.viewCtrl.dismiss();
  }
}
