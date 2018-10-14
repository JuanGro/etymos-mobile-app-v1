import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Service
import { HttpService } from '../../services/http.service';

// Model
import { Option } from './../../models/option.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public option: Option;

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService
    ) {}

  ionViewDidLoad() {
    this.getList();
  }

  getList() {
    this.httpService.get('https://etymos.herokuapp.com/options/1').subscribe(dataReceived => {
      if (dataReceived) {
        // for (let option of dataReceived) {
        //   this.options.push(new Option(option));
        // }
        this.option = new Option(dataReceived);
        console.log(this.option);
      }
    })
  }
}
