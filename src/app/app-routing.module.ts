import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'device-info',
    loadChildren: () => import('./pages/device-info/device-info.module').then( m => m.DeviceInfoPageModule)
  },
  {
    path: 'geolocation-info',
    loadChildren: () => import('./pages/geolocation-info/geolocation-info.module').then( m => m.GeolocationInfoPageModule)
  },
  {
    path: 'file-opener',
    loadChildren: () => import('./pages/file-opener/file-opener.module').then( m => m.FileOpenerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
