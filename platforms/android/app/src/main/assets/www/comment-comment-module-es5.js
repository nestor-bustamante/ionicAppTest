(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comment-comment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommentCommentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"large\">Publica!</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid size=\"12\">\n    <ion-row>\n      <ion-col>\n        <ion-textarea maxlength=\"100\" rows=\"4\" placeholder=\"Escribe tu comentario aquí...\" [(ngModel)]=\"description\" (keyup)=\"getDescription()\"></ion-textarea>\n        <div class=\"count-chars\">{{ description.length }} / 100</div>\n\n        <ion-button color=\"primary\" id=\"save\" disabled (click)=\"saveDescription()\">Aceptar</ion-button>\n        <ion-button color=\"medium\" fill=\"outline\" (click)=\"close()\">Cancelar</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/comment/comment-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/comment/comment-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CommentPageRoutingModule */

  /***/
  function srcAppCommentCommentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentPageRoutingModule", function () {
      return CommentPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _comment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comment.page */
    "./src/app/comment/comment.page.ts");

    const routes = [{
      path: '',
      component: _comment_page__WEBPACK_IMPORTED_MODULE_3__["CommentPage"]
    }];
    let CommentPageRoutingModule = class CommentPageRoutingModule {};
    CommentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/comment/comment.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/comment/comment.module.ts ***!
    \*******************************************/

  /*! exports provided: CommentPageModule */

  /***/
  function srcAppCommentCommentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentPageModule", function () {
      return CommentPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _comment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comment-routing.module */
    "./src/app/comment/comment-routing.module.ts");
    /* harmony import */


    var _comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comment.page */
    "./src/app/comment/comment.page.ts");

    let CommentPageModule = class CommentPageModule {};
    CommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comment_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentPageRoutingModule"]],
      declarations: [_comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"]]
    })], CommentPageModule);
    /***/
  },

  /***/
  "./src/app/comment/comment.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/comment/comment.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommentCommentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQvY29tbWVudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/comment/comment.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/comment/comment.page.ts ***!
    \*****************************************/

  /*! exports provided: CommentPage */

  /***/
  function srcAppCommentCommentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentPage", function () {
      return CommentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../firestore.service */
    "./src/app/firestore.service.ts");

    let CommentPage = class CommentPage {
      constructor(toastController, router, activatedRoute, firestoreService) {
        this.toastController = toastController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.firestoreService = firestoreService;
        this.comment = null;
        this.description = '';
        this.user = JSON.parse(window.localStorage.getItem('fb'));
      }

      presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toast = yield this.toastController.create({
            message: 'Perfecto!',
            duration: 1600
          });
          toast.present();
        });
      }

      saveDescription() {
        this.presentToast();
        this.dataToSave = {
          user: window.localStorage.getItem('userName'),
          userImg: window.localStorage.getItem('userImg'),
          comment: this.description,
          latlang: window.localStorage.getItem('latlang')
        };
        this.firestoreService.insertar("comments", this.dataToSave).then(() => {
          this.dataToSave = {};
          console.log('Tarea creada correctamente!');
        }, error => {
          console.error(error);
        });
        setTimeout(() => {
          this.router.navigateByUrl('/map', {
            state: {
              data: {
                message: this.description
              }
            }
          });
        }, 2000);
      }

      getDescription() {
        const getButton = window.document.getElementById('save');

        if (this.description.length >= 10) {
          getButton.removeAttribute('disabled');
        }
      }

      close() {
        this.router.navigate(["/map"]);
      }

      saveMessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const getButton = window.document.getElementById('save');

          if (this.description.length >= 10) {
            getButton.removeAttribute('disabled');
          }
        });
      }

      ngOnInit() {
        this.state$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.router.getCurrentNavigation().extras.state));
      }

    };

    CommentPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]
    }];

    CommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comment/comment.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment.page.scss */
      "./src/app/comment/comment.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])], CommentPage);
    /***/
  }
}]);
//# sourceMappingURL=comment-comment-module-es5.js.map