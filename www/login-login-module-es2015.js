(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Ingresar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"background-color: red;\">\n\n  <ion-card>\n\n    <ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n    <div class=\"ion-padding-top ion-padding-start ion-padding-end\">\n      <h3 class=\"ion-no-margin\">Accede a la aplicación</h3>\n    </div>\n\n    <!-- \n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Correo</ion-label>\n        <ion-input type=\"mail\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n    </ion-list>\n    -->\n\n    <div class=\"ion-padding-top ion-padding-start ion-padding-end\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"fbLogin()\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n        <span class=\"ion-padding-start\">Ingresar con Facebook</span>\n      </ion-button>\n    </div>\n\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"login()\">\n        <ion-icon name=\"logo-google\"></ion-icon>\n        <span class=\"ion-padding-start\">Ingresar con Google</span>\n      </ion-button>\n    </div>\n\n  </ion-card>\n  \n  <!--\n    <div class=\"ion-padding\">¿Eres nuevo? <a href=\"register\">Regístrate</a></div>\n  -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");



// import { auth } from 'firebase/app';



// import { EmailComposer } from '@ionic-native/email-composer/ngx';
// import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

// import { LoadingController } from '@ionic/angular';


let LoginPage = class LoginPage {
    constructor(afAuth, toastController, router, 
    // private emailComposer: EmailComposer,
    // private spinnerDialog: SpinnerDialog,
    fb, platform, google) {
        this.afAuth = afAuth;
        this.toastController = toastController;
        this.router = router;
        this.fb = fb;
        this.platform = platform;
        this.google = google;
        this.loading = false;
        this.username = '';
        this.password = '';
        this.isLoggedIn = false;
        this.users = { id: '', name: '', email: '', picture: { data: { url: '' } }, location: { location: { city: '', state: '', region_id: '' } }, gender: '', friends: {}, };
        fb.getLoginStatus()
            .then(res => {
            console.log(res.status);
            if (res.status === 'connect') {
                this.isLoggedIn = true;
            }
            else {
                this.isLoggedIn = false;
            }
        })
            .catch(e => console.log(e));
    }
    ngOnInit() {
        // this.loading = await this.loadingController.create({
        //   message: 'Connecting ...'
        // });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params;
            console.log("this.platform.is('android'): ", this.platform.is('android'));
            this.loading = true;
            if (this.platform.is('android')) {
                console.log(this.platform);
                params = {
                    'scopes': 'profile',
                    'webClientId': '417895518758-737c2rn4s51k1is9foq2sv8jdfde7lqk.apps.googleusercontent.com',
                    'offline': true
                };
            }
            else {
                params = {};
            }
            console.log('PARAMS: ', params);
            yield this.google.login(params)
                .then(response => {
                console.log('response: ', response);
                const { idToken, accessToken } = response;
                this.onLoginSuccess(idToken, accessToken);
            }).catch((error) => {
                console.log(error);
                alert('error: ' + JSON.stringify(error));
            });
        });
    }
    onLoginSuccess(accessToken, accessSecret) {
        const credential = accessSecret ? firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(accessToken, accessSecret) : firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(accessToken);
        this.afAuth.auth.signInWithCredential(credential)
            .then((response) => {
            this.loading = false;
            this.router.navigate(["/home"]);
        });
    }
    onLoginError(err) {
        console.log(err);
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: 'bottom',
                color: 'dark',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        });
    }
    sendEmailVerification(email) {
        this.afAuth.authState.subscribe(user => {
            user.sendEmailVerification()
                .then(() => {
                console.log('email sent');
            });
        });
    }
    getUserDetail(userid) {
        this.fb.api('/' + userid + '/?fields=id,email,name,picture,gender,friends,location', ['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday'])
            .then(res => {
            window.localStorage.setItem('user', res.id);
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
    fbLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.fb.login(['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday', 'email'])
                .then((res) => {
                const credential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithCredential(credential)
                    .then(info => {
                    window.localStorage.setItem('fb', JSON.stringify(info));
                    this.getUserDetail(res.authResponse.userID);
                    this.loading = false;
                    this.router.navigate(['/home']);
                });
                // console.log('login res', res);
                // if (res.status === 'connected') {
                //   this.isLoggedIn = true;
                //   this.getUserDetail(res.authResponse.userID);
                // } else {
                //   this.isLoggedIn = false;
                // }
            })
                .catch(e => console.log('Error logging into Facebook', e));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map