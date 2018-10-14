import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnNewWordsPage } from './learn-new-words';

@NgModule({
  declarations: [
    LearnNewWordsPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnNewWordsPage),
  ],
})
export class LearnNewWordsPageModule {}
