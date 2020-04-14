function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ingresar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"background-color: red;\">\n\n  <ion-card>\n\n    <ion-progress-bar *ngIf=\"loading\" type=\"indeterminate\"></ion-progress-bar>\n\n    <div class=\"ion-padding-top ion-padding-start ion-padding-end\">\n      <h3 class=\"ion-no-margin\">Accede a la aplicación</h3>\n    </div>\n\n    <!-- \n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Correo</ion-label>\n        <ion-input type=\"mail\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n    </ion-list>\n    -->\n\n    <div class=\"ion-padding-top ion-padding-start ion-padding-end\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"fbLogin()\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n        <span class=\"ion-padding-start\">Ingresar con Facebook</span>\n      </ion-button>\n    </div>\n\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"login()\">\n        <ion-icon name=\"logo-google\"></ion-icon>\n        <span class=\"ion-padding-start\">Ingresar con Google</span>\n      </ion-button>\n    </div>\n\n  </ion-card>\n  \n  <!--\n    <div class=\"ion-padding\">¿Eres nuevo? <a href=\"register\">Regístrate</a></div>\n  -->\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js"); // import { auth } from 'firebase/app';
    // import { EmailComposer } from '@ionic-native/email-composer/ngx';
    // import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
    // import { LoadingController } from '@ionic/angular';


    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(afAuth, toastController, router, // private emailComposer: EmailComposer,
      // private spinnerDialog: SpinnerDialog,
      fb, platform, google) {
        var _this = this;

        _classCallCheck(this, LoginPage);

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
        this.users = {
          id: '',
          name: '',
          email: '',
          picture: {
            data: {
              url: ''
            }
          },
          location: {
            location: {
              city: '',
              state: '',
              region_id: ''
            }
          },
          gender: '',
          friends: {}
        };
        fb.getLoginStatus().then(function (res) {
          console.log(res.status);

          if (res.status === 'connect') {
            _this.isLoggedIn = true;
          } else {
            _this.isLoggedIn = false;
          }
        }).catch(function (e) {
          return console.log(e);
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.loading = await this.loadingController.create({
          //   message: 'Connecting ...'
          // });
        }
      }, {
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var params;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("this.platform.is('android'): ", this.platform.is('android'));
                    this.loading = true;

                    if (this.platform.is('android')) {
                      console.log(this.platform);
                      params = {
                        'scopes': 'profile',
                        'webClientId': '417895518758-737c2rn4s51k1is9foq2sv8jdfde7lqk.apps.googleusercontent.com',
                        'offline': true
                      };
                    } else {
                      params = {};
                    }

                    console.log('PARAMS: ', params);
                    _context.next = 6;
                    return this.google.login(params).then(function (response) {
                      console.log('response: ', response);
                      var idToken = response.idToken,
                          accessToken = response.accessToken;

                      _this2.onLoginSuccess(idToken, accessToken);
                    }).catch(function (error) {
                      console.log(error);
                      alert('error: ' + JSON.stringify(error));
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onLoginSuccess",
        value: function onLoginSuccess(accessToken, accessSecret) {
          var _this3 = this;

          var credential = accessSecret ? firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(accessToken, accessSecret) : firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(accessToken);
          this.afAuth.auth.signInWithCredential(credential).then(function (response) {
            _this3.loading = false;

            _this3.router.navigate(["/home"]);
          });
        }
      }, {
        key: "onLoginError",
        value: function onLoginError(err) {
          console.log(err);
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: message,
                      position: 'bottom',
                      color: 'dark',
                      showCloseButton: true,
                      closeButtonText: 'Ok'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "sendEmailVerification",
        value: function sendEmailVerification(email) {
          this.afAuth.authState.subscribe(function (user) {
            user.sendEmailVerification().then(function () {
              console.log('email sent');
            });
          });
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail(userid) {
          var _this4 = this;

          this.fb.api('/' + userid + '/?fields=id,email,name,picture,gender,friends,location', ['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday']).then(function (res) {
            window.localStorage.setItem('user', res.id);
            _this4.users = res;

            _this4.router.navigate(["/home"]);
          }).catch(function (e) {
            console.log(e);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          this.fb.logout().then(function (res) {
            return _this5.isLoggedIn = false;
          }).catch(function (e) {
            return console.log('Error logout from Facebook', e);
          });
        }
      }, {
        key: "fbLogin",
        value: function fbLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.loading = true;
                    this.fb.login(['public_profile', 'user_friends', 'user_location', 'user_gender', 'instagram_basic', 'user_age_range', 'user_birthday', 'email']).then(function (res) {
                      var credential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                      firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithCredential(credential).then(function (info) {
                        window.localStorage.setItem('fb', JSON.stringify(info));

                        _this6.getUserDetail(res.authResponse.userID);

                        _this6.loading = false;

                        _this6.router.navigate(['/home']);
                      }); // console.log('login res', res);
                      // if (res.status === 'connected') {
                      //   this.isLoggedIn = true;
                      //   this.getUserDetail(res.authResponse.userID);
                      // } else {
                      //   this.isLoggedIn = false;
                      // }
                    }).catch(function (e) {
                      return console.log('Error logging into Facebook', e);
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map