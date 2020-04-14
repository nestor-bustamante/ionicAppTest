import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  getLat: any;
  getLong: any;
  loading = false;
  users = {
    id: '', name: '', email: '', picture: { data: { url: '' } }, location: { location: { city: '', state: '', region_id: '' } }, gender: '', friends: {},
  };

  constructor(
    private afAuth: AngularFireAuth,
    public geolocation: Geolocation,
    private fb: Facebook,
    private router: Router,
    private platform: Platform,
    private google: GooglePlus
  ) { }
  
  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture,gender,friends,location', ['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday'])
      .then(res => {
        window.localStorage.setItem('user', res.id)
        this.users = res;
        this.router.navigate(["/map"]);
      })
      .catch(e => {
        console.log(e);
      });
  }

  async fbLogin() {
    this.loading = true;
    this.fb.login(['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday', 'email'])
      .then((res: FacebookLoginResponse) => {

        const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

        firebase.auth().signInWithCredential(credential)
          .then(info => {
          /* tslint:disable */
            window.localStorage.setItem('userName', info.user.displayName);
            window.localStorage.setItem('userImg', info.user.providerData["0"].photoURL);

            this.getUserDetail(res.authResponse.userID);
            this.loading = false;
            this.router.navigate(['/map']);
          }
          )
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  async login() {

    let params: any;

    console.log("this.platform.is('android'): ", this.platform.is('android'));
    this.loading = true;

    if (this.platform.is('android')) {
      console.log(this.platform);
      params = {
        'scopes': 'profile',
        'webClientId': '417895518758-737c2rn4s51k1is9foq2sv8jdfde7lqk.apps.googleusercontent.com',
        'offline': true
      }
    } else {
      params = {}
    }

    await this.google.login(params)
      .then(response => {
        
        window.localStorage.setItem('userName', response.displayName);
        window.localStorage.setItem('userImg', response.imageUrl);
        
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);

      }).catch((error: any) => {
        console.log(error)
        alert('error: ' + JSON.stringify(error))
      });
  }

  async getGeolocation() {

    this.geolocation.getCurrentPosition().then((resp) => {
      
      this.getLat = resp.coords.latitude;
      this.getLong = resp.coords.longitude;

      window.localStorage.setItem('latlang', `${resp.coords.latitude}, ${resp.coords.longitude}`);

      const date = new Date(resp.timestamp);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      window.localStorage.setItem('latlang', `${data.coords.latitude}, ${data.coords.longitude}`)
      // console.log(data.coords.latitude);
      // console.log(data.coords.longitude);
    });
  }

  onLoginSuccess(accessToken: any, accessSecret: any) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider.credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider.credential(accessToken);

    this.afAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.loading = false;
        this.router.navigate(["/map"]);
      })
  }

  ngOnInit() {
    this.getGeolocation();
  }

}
