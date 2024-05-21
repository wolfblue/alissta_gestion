(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["condiciones-salud-rechazo-condiciones-salud-rechazo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n\n  <!-- Logo de Alissta -->\n  <div class=\"clearfix\">\n    <ion-img class=\"logo place-right\" [src]=\"'assets/img/alissta_logo.svg'\"></ion-img>\n  </div>\n\n  <!-- Texto de política rechazada -->\n  <div class=\"message\">\n    <p class=\"text-center\">Señor trabajador</p>\n    <p>\n      Esperamos contar en una próxima oportunidad con su participación en la prevención del riesgo\n      de contagio por COVID-19.\n    </p>\n    <p>Es muy importante conocer su estado de salud.</p>\n  </div>\n\n  <div class=\"error\" *ngIf=\"showError\">\n    <p class=\"text-center\">Servicio temporalmente no disponible. Intente más tarde.</p>\n  </div>\n\n  <!-- Botones de acción -->\n  <ion-item class=\"action-buttons\" lines=\"none\">\n    <div class=\"text-center w-100\">\n      <ion-button size=\"default\" color=\"secondary\" (click)=\"goToHome()\">Volver al inicio</ion-button>\n    </div>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CondicionesSaludRechazoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesSaludRechazoPageRoutingModule", function() { return CondicionesSaludRechazoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _condiciones_salud_rechazo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condiciones-salud-rechazo.page */ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.ts");




const routes = [
    {
        path: '',
        component: _condiciones_salud_rechazo_page__WEBPACK_IMPORTED_MODULE_3__["CondicionesSaludRechazoPage"]
    }
];
let CondicionesSaludRechazoPageRoutingModule = class CondicionesSaludRechazoPageRoutingModule {
};
CondicionesSaludRechazoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CondicionesSaludRechazoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CondicionesSaludRechazoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesSaludRechazoPageModule", function() { return CondicionesSaludRechazoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _condiciones_salud_rechazo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condiciones-salud-rechazo-routing.module */ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo-routing.module.ts");
/* harmony import */ var _condiciones_salud_rechazo_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condiciones-salud-rechazo.page */ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.ts");





let CondicionesSaludRechazoPageModule = class CondicionesSaludRechazoPageModule {
};
CondicionesSaludRechazoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _condiciones_salud_rechazo_routing_module__WEBPACK_IMPORTED_MODULE_3__["CondicionesSaludRechazoPageRoutingModule"]
        ],
        declarations: [_condiciones_salud_rechazo_page__WEBPACK_IMPORTED_MODULE_4__["CondicionesSaludRechazoPage"]]
    })
], CondicionesSaludRechazoPageModule);



/***/ }),

/***/ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-color: #eeeeee !important;\n  --padding-top: calc(var(--ion-padding, 16px) + env(safe-area-inset-top));\n}\nion-content .logo {\n  width: 200px;\n  height: 80px;\n}\nion-content .message, ion-content .error {\n  margin-top: 50px;\n}\nion-content .message p, ion-content .error p {\n  margin: initial;\n  font-size: inherit !important;\n  margin-bottom: 1em;\n}\nion-content .error {\n  color: red;\n}\nion-content .action-buttons {\n  background-color: transparent;\n}\nion-content .action-buttons ion-button {\n  margin: auto 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZGljaW9uZXMtc2FsdWQtcmVjaGF6by9jb25kaWNpb25lcy1zYWx1ZC1yZWNoYXpvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0Esd0VBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBRUUsZ0JBQUE7QUFESjtBQUdJO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUtFO0VBQ0UsVUFBQTtBQUhKO0FBTUU7RUFDRSw2QkFBQTtBQUpKO0FBTUk7RUFDRSxjQUFBO0FBSk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25kaWNpb25lcy1zYWx1ZC1yZWNoYXpvL2NvbmRpY2lvbmVzLXNhbHVkLXJlY2hhem8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcblxuICAmIC5sb2dvIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5cbiAgJiAubWVzc2FnZSxcbiAgJiAuZXJyb3Ige1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAmIHAge1xuICAgICAgbWFyZ2luOiBpbml0aWFsO1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICB9XG5cbiAgJiAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAmIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.ts ***!
  \***********************************************************************************/
/*! exports provided: CondicionesSaludRechazoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesSaludRechazoPage", function() { return CondicionesSaludRechazoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/entities/chequeo-covid19 */ "./src/app/entities/chequeo-covid19.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/autoevaluacion-covid19.service */ "./src/app/services/autoevaluacion-covid19.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/chequeo-covid19.service */ "./src/app/services/chequeo-covid19.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/entities/condiciones-salud */ "./src/app/entities/condiciones-salud.ts");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");













/**
 * Componente de la vista de rechazo a las políticas de tratamiento de datos personales.
 */
let CondicionesSaludRechazoPage = class CondicionesSaludRechazoPage {
    constructor(utils, autoevaluacionService, geolocation, nativeGeocoder, alertCtrl, chequeoService, router) {
        this.utils = utils;
        this.autoevaluacionService = autoevaluacionService;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertCtrl = alertCtrl;
        this.chequeoService = chequeoService;
        this.router = router;
    }
    ngOnInit() {
        this.poll = this.router.getCurrentNavigation().extras.state.poll;
        this.getIPAddress();
    }
    /**
     * Redirige a la vista de inicio de la aplicación.
     */
    goToHome() {
        this.router.navigate(['/home']);
    }
    /**
     * Obtiene la dirección _IP_ pública desde la cual se realizan las peticiones.
     */
    getIPAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.utils.getIPAddress()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => this.utils.dismissLoading()))
                .subscribe(r => {
                const body = r;
                const ip = body.query;
                this.poll.userData.ip = ip;
                this.getCurrentPosition();
            }, () => this.getCurrentPosition());
        });
    }
    /**
     * Obtiene las coordenadas de ubicación física del dispositivo.
     *
     * @param poll Encuesta.
     */
    getCurrentPosition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onFinally = (latitude, longitude) => {
                this.utils.dismissLoading();
                const geolocation = new src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]();
                geolocation.latitude = latitude;
                geolocation.longitude = longitude;
                this.poll.geolocation = geolocation;
                this.getAddress();
            };
            yield this.utils.presentLoading();
            this.geolocation.getCurrentPosition()
                .then(r => onFinally(`${r.coords.latitude}`, `${r.coords.longitude}`))
                .catch(() => onFinally());
        });
    }
    /**
     * Obtiene la dirección descriptiva a partir de las coordenadas obtenidas del dispositivo.
     *
     * @param poll Encuesta.
     */
    getAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onFinally = (address) => {
                this.utils.dismissLoading();
                this.poll.geolocation.address = address;
                this.sendPoll();
            };
            const latitude = this.poll.geolocation.latitude;
            const longitude = this.poll.geolocation.longitude;
            if (!latitude || !longitude) {
                return this.sendPoll();
            }
            yield this.utils.presentLoading();
            this.nativeGeocoder.reverseGeocode(+latitude, +longitude)
                .then(r => {
                // Calle o carrera
                let address = !!r[0].thoroughfare ? r[0].thoroughfare : '';
                // Número
                address = !!r[0].subThoroughfare ?
                    address !== '' ? `${address} #${r[0].subThoroughfare}` : `#${r[0].subThoroughfare}`
                    : address;
                // Ciudad
                address = !!r[0].administrativeArea ?
                    address !== '' ? `${address}, ${r[0].subAdministrativeArea}` : `${r[0].subAdministrativeArea}`
                    : address;
                // Departamento
                address = !!r[0].administrativeArea ?
                    address !== '' ? `${address}, ${r[0].administrativeArea}` : `${r[0].administrativeArea}`
                    : address;
                onFinally(address);
            })
                .catch(() => onFinally());
        });
    }
    /**
     * Envía la encuesta para su registro.
     *
     * @param poll Encuesta.
     */
    sendPoll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const body = this.poll.deserialize();
            let submitFn;
            let provider;
            if (this.poll instanceof src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_2__["Poll"]) {
                submitFn = this.chequeoService.submitPoll;
                provider = this.chequeoService;
            }
            else {
                submitFn = this.autoevaluacionService.submitPoll;
                provider = this.autoevaluacionService;
            }
            yield this.utils.presentLoading();
            submitFn.call(provider, body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => this.utils.dismissLoading()))
                .subscribe(() => { }, () => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_12__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
            });
        });
    }
};
CondicionesSaludRechazoPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] },
    { type: src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_4__["AutoevaluacionCOVID19Service"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_8__["ChequeosCOVID19Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
CondicionesSaludRechazoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-condiciones-salud-rechazo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./condiciones-salud-rechazo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./condiciones-salud-rechazo.page.scss */ "./src/app/pages/condiciones-salud-rechazo/condiciones-salud-rechazo.page.scss")).default]
    })
], CondicionesSaludRechazoPage);



/***/ })

}]);
//# sourceMappingURL=condiciones-salud-rechazo-condiciones-salud-rechazo-module-es2015.js.map