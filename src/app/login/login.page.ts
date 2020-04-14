import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { EmailComposer } from '@ionic-native/email-composer/ngx';
// import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

// import { LoadingController } from '@ionic/angular';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: boolean = false;
  username: string = '';
  password: string = '';

  constructor(
    public afAuth: AngularFireAuth,
    private toastController: ToastController,
    private router: Router,
    // private emailComposer: EmailComposer,
    // private spinnerDialog: SpinnerDialog,
    private fb: Facebook,

    private platform: Platform,
    private google: GooglePlus
  ) {
    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === 'connect') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
  }

  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } }, location: { location: { city:'', state:'', region_id:'' }}, gender: '', friends: {}, };

  ngOnInit() {
    // this.loading = await this.loadingController.create({
    //   message: 'Connecting ...'
    // });
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
    }
    else {
      params = {}
    }

    console.log('PARAMS: ', params);

    await this.google.login(params)
      .then( response => {
        console.log('response: ', response);
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);

      }).catch((error: any) => {
        console.log(error)
        alert('error: ' + JSON.stringify(error))
      });
  }

  onLoginSuccess(accessToken: any, accessSecret: any) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider.credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider.credential(accessToken);

    this.afAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.loading = false;
        this.router.navigate(["/home"]);
      })
  }

  onLoginError(err) {
    console.log(err);
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      color: 'dark',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  sendEmailVerification( email: any) {
    this.afAuth.authState.subscribe( user => {
      user.sendEmailVerification()
        .then(() => {
          console.log('email sent');
        })
    });
  }

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture,gender,friends,location', ['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday'])
      .then(res => {
        window.localStorage.setItem('user', res.id)
        this.users = res;
        this.router.navigate(["/home"]);
      })
      .catch(e => {
        console.log(e);
      });
  }

  logout() {
    this.fb.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }

  async fbLogin() {
    this.loading = true;
    this.fb.login(['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday', 'email'])
      .then((res: FacebookLoginResponse) => {
        
        const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

        firebase.auth().signInWithCredential(credential)
          .then( info => {
            window.localStorage.setItem('fb', JSON.stringify(info));
            this.getUserDetail(res.authResponse.userID);
            this.loading = false;
            this.router.navigate(['/home']);
            }
          )


        // console.log('login res', res);
        // if (res.status === 'connected') {
        //   this.isLoggedIn = true;
        //   this.getUserDetail(res.authResponse.userID);
        // } else {
        //   this.isLoggedIn = false;
        // }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  // com.maptest.myapp

  

  // async login() {
  //   const { username, password } = this;
  //   this.spinnerDialog.show();
  //   try {
  //     // tipo de hack
  //     console.log('username, password ', username, password);
  //     const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password).then(data => {

  //       console.log('data: ', data);
  //       console.log('data.user.emailVerified: ', data.user.emailVerified)

  //       if (data.user.emailVerified) {
  //         // console.log(res);

  //         this.spinnerDialog.hide();

  //         console.log('logueado!!!');

  //         // let email = {
  //         //   to: `${username}@gmail.com`,
  //         //   attachments: [],
  //         //   subject: 'emailComposer',
  //         //   body: 'Texto enviado desde la app de ionic',
  //         //   isHtml: true
  //         // }

  //         // // Send a text message using default options
  //         // this.emailComposer.open(email);

  //         this.router.navigate(['/home']);
  //       } else {
  //         this.spinnerDialog.hide();
  //         // this.emailComposer.isAvailable().then((available: boolean) => {
  //         //   if (available) {
  //         //     console.log(available);
  //         //     //Now we know we can send
  //         //   }
  //         // });

  //         // console.log(res);

  //         // let email = {
  //         //   to: `${username}@gmail.com`,
  //         //   attachments: [],
  //         //   subject: 'emailComposer',
  //         //   body: 'Texto enviado desde la app de ionic',
  //         //   isHtml: true
  //         // }

  //         // // Send a text message using default options
  //         // this.emailComposer.open(email);
  //       }
  //     });


  //     return false;

  //   } catch (err) {
      
  //     const errMessages = [
  //       'Correo inválido',
  //       'Favor verifique su correo o contraseña'
  //     ]

  //     if (err.code == "auth/invalid-email") {
  //       this.presentToast(errMessages[0]);
  //     } else {
  //       this.presentToast(errMessages[1]);
  //     }
  //   }
    
  // }

}


