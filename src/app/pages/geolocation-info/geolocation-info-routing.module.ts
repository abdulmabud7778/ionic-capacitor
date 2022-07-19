import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocationInfoPage } from './geolocation-info.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocationInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocationInfoPageRoutingModule {}
