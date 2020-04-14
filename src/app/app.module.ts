import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import * as firebase from 'firebase/app';
const config = {
  apiKey: 'AIzaSyASWLjhB0fBCV4y2ZZvWoLqNYO4swGlGRo',
  authDomain: 'ionicmapapp-bf871.firebaseapp.com',
  databaseURL: 'https://ionicmapapp-bf871.firebaseio.com',
  projectId: 'ionicmapapp-bf871',
  storageBucket: 'ionicmapapp-bf871.appspot.com',
  messagingSenderId: '417895518758',
  appId: "1:417895518758:web:5992cd227f22e939028ce7",
  measurementId: "G-FLQLS7ZF3V"
}
firebase.initializeApp(config);

import firebaseConfig from './firebase';
import { ModalPageModule } from './pages/modal/modal.module';
import { ModalPage } from './pages/modal/modal.page';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, 'IonicMapApp'),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalPageModule
  ],
  providers: [
    EmailComposer,
    SpinnerDialog,
    StatusBar,
    Geolocation,
    SplashScreen,
    Facebook,
    GooglePlus,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}