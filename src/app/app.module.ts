import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, 
    IonicStorageModule.forRoot({
      name: 'mydatabase'
    }
    )],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FileOpener],
  bootstrap: [AppComponent],
})
export class AppModule {}
