import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestModalPage } from './test-modal';

@NgModule({
  declarations: [
    TestModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TestModalPage),
  ],
})
export class TestModalPageModule {}
