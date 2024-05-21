(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-asistencia-eventos-asistencia-eventos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos/asistencia-eventos.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos/asistencia-eventos.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <app-title-bar [title]=\"'ASISTENCIA EVENTOS POSITIVA'\" [iconName]=\"'assets/icon/eventos.svg'\">\n  </app-title-bar>\n\n  <ion-card>\n    <ion-card-header>\n      Hola, {{ user?.nombre }}\n    </ion-card-header>\n    <ion-card-content>\n      <p>Si tienes un evento presencial con Positiva Compañía de Seguros S.A. no olvides mostrar tu Código QR.</p>\n      <ion-button routerLink=\"./qr\">Visualizar QR</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"button-wrapper\">\n    <ion-button routerLink=\"/home\">Regresar</ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"opcion\" *ngIf=\"opcion\"></app-menu-operativo>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/asistencia-eventos/asistencia-eventos-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos/asistencia-eventos-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AsistenciaEventosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaEventosPageRoutingModule", function() { return AsistenciaEventosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asistencia_eventos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asistencia-eventos.page */ "./src/app/pages/asistencia-eventos/asistencia-eventos.page.ts");




const routes = [
    {
        path: '',
        component: _asistencia_eventos_page__WEBPACK_IMPORTED_MODULE_3__["AsistenciaEventosPage"]
    },
    {
        path: 'qr',
        loadChildren: () => __webpack_require__.e(/*! import() | asistencia-eventos-qr-asistencia-eventos-qr-module */ "asistencia-eventos-qr-asistencia-eventos-qr-module").then(__webpack_require__.bind(null, /*! ../asistencia-eventos-qr/asistencia-eventos-qr.module */ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.module.ts")).then(m => m.AsistenciaEventosQrPageModule)
    }
];
let AsistenciaEventosPageRoutingModule = class AsistenciaEventosPageRoutingModule {
};
AsistenciaEventosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AsistenciaEventosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/asistencia-eventos/asistencia-eventos.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos/asistencia-eventos.module.ts ***!
  \***********************************************************************/
/*! exports provided: AsistenciaEventosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaEventosPageModule", function() { return AsistenciaEventosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _asistencia_eventos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asistencia-eventos-routing.module */ "./src/app/pages/asistencia-eventos/asistencia-eventos-routing.module.ts");
/* harmony import */ var _asistencia_eventos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asistencia-eventos.page */ "./src/app/pages/asistencia-eventos/asistencia-eventos.page.ts");





let AsistenciaEventosPageModule = class AsistenciaEventosPageModule {
};
AsistenciaEventosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _asistencia_eventos_routing_module__WEBPACK_IMPORTED_MODULE_3__["AsistenciaEventosPageRoutingModule"]
        ],
        declarations: [_asistencia_eventos_page__WEBPACK_IMPORTED_MODULE_4__["AsistenciaEventosPage"]]
    })
], AsistenciaEventosPageModule);



/***/ }),

/***/ "./src/app/pages/asistencia-eventos/asistencia-eventos.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos/asistencia-eventos.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border: 1px solid var(--ion-color-dark);\n  border-radius: 20px;\n}\nion-card ion-card-header {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  text-align: center;\n}\nion-card ion-card-content {\n  text-align: center;\n}\nion-card ion-card-content ion-button {\n  margin: 2rem 0;\n}\n.button-wrapper {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNpc3RlbmNpYS1ldmVudG9zL2FzaXN0ZW5jaWEtZXZlbnRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0FBQU47QUFLQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc2lzdGVuY2lhLWV2ZW50b3MvYXNpc3RlbmNpYS1ldmVudG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICYgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICYgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICB9XG4gIH1cbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/asistencia-eventos/asistencia-eventos.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos/asistencia-eventos.page.ts ***!
  \*********************************************************************/
/*! exports provided: AsistenciaEventosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaEventosPage", function() { return AsistenciaEventosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");







let AsistenciaEventosPage = class AsistenciaEventosPage {
    constructor(context, alertCtrl, router, utils) {
        this.context = context;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.utils = utils;
    }
    ngOnInit() {
        this.setUser();
    }
    ionViewWillEnter() {
        this.opcion = 'asistenciaEventos';
    }
    ionViewWillLeave() {
        this.opcion = undefined;
    }
    setUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            const context = yield this.context.get();
            this.utils.dismissLoading();
            if (!context) {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
                return;
            }
            this.user = context.trabajador;
        });
    }
};
AsistenciaEventosPage.ctorParameters = () => [
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_5__["ContextService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
];
AsistenciaEventosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asistencia-eventos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asistencia-eventos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos/asistencia-eventos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asistencia-eventos.page.scss */ "./src/app/pages/asistencia-eventos/asistencia-eventos.page.scss")).default]
    })
], AsistenciaEventosPage);



/***/ })

}]);
//# sourceMappingURL=app-pages-asistencia-eventos-asistencia-eventos-module-es2015.js.map