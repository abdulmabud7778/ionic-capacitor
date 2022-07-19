import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { GeolocationInfoPageRoutingModule } from './geolocation-info-routing.module';

import { GeolocationInfoPage } from './geolocation-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocationInfoPageRoutingModule
  ],
  declarations: [GeolocationInfoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeolocationInfoPageModule {}
