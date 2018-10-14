import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Service
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any[];

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService
    ) {}

  ionViewDidLoad() {
    this.items = [];
    this.getList();
  }

  getList() {
    this.httpService.get('https://etymos.herokuapp.com/options').subscribe(dataReceived => {
      if (dataReceived) {
        for (let item of dataReceived) {
          this.items.push(item);
        }
        console.log(this.items)
      } else {
        console.log('error');
      }
    })
  }
}
