import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileOpenerPageRoutingModule } from './file-opener-routing.module';

import { FileOpenerPage } from './file-opener.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileOpenerPageRoutingModule
  ],
  declarations: [FileOpenerPage]
})
export class FileOpenerPageModule {}
