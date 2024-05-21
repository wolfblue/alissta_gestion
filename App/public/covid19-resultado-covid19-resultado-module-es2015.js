(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["covid19-resultado-covid19-resultado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-resultado/covid19-resultado.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-resultado/covid19-resultado.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n\n  <!-- Logo de Alissta -->\n  <div class=\"clearfix\">\n    <ion-img class=\"logo place-right\" [src]=\"'assets/img/alissta_logo.svg'\"></ion-img>\n  </div>\n\n  <div class=\"result\" *ngIf=\"showResult\">\n    <p class=\"text-center\">¡Reporte de autoevaluación exitoso!</p>\n    <p>Los síntomas informados a tu empleador o contratante se guardaron correctamente.</p>\n    <p class=\"suggestion\" *ngIf=\"showSuggestion\">Conforme a los resultados de tu\n      AUTOEVALUACIÓN, quédate en casa y contacta a tu empleador o contratante.\n    </p>\n    <p class=\"text-center\">{{ pollDate }}</p>\n  </div>\n\n  <div class=\"error\" *ngIf=\"showError\">\n    <p class=\"text-center\">Servicio temporalmente no disponible. Intente más tarde.</p>\n  </div>\n\n  <div>\n    <ion-card>\n      <ion-card-header class=\"text-center\">\n        Referencias\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"justificar\">\n          Enlaces de interés y referencias sobre recomendaciones para la prevención COVID-19\n        </p>\n        <ul class=\"unstyled-list\">\n          <li><a href=\"https://covid19.minsalud.gov.co/\">Ministerio de Salud y Protección Social</a></li>\n          <li><a href=\"https://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx\">Instituto Nacional de Salud</a></li>\n          <li><a href=\"https://www.paho.org/col/index.php?option=com_docman&view=download&category_slug=publicaciones-ops-oms-colombia&alias=856-mopece4&Itemid=688\">Organización Panamericana de la Salud / Organización Mundial de la Salud</a></li>\n        </ul>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Botones de acción -->\n  <div class=\"text-center\">\n    <ion-button color=\"primary\" (click)=\"goToHome()\">Finalizar</ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/covid19-resultado/covid19-resultado-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/covid19-resultado/covid19-resultado-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: Covid19ResultadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19ResultadoPageRoutingModule", function() { return Covid19ResultadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _covid19_resultado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./covid19-resultado.page */ "./src/app/pages/covid19-resultado/covid19-resultado.page.ts");




const routes = [
    {
        path: '',
        component: _covid19_resultado_page__WEBPACK_IMPORTED_MODULE_3__["Covid19ResultadoPage"]
    }
];
let Covid19ResultadoPageRoutingModule = class Covid19ResultadoPageRoutingModule {
};
Covid19ResultadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Covid19ResultadoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/covid19-resultado/covid19-resultado.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/covid19-resultado/covid19-resultado.module.ts ***!
  \*********************************************************************/
/*! exports provided: Covid19ResultadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19ResultadoPageModule", function() { return Covid19ResultadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _covid19_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./covid19-resultado-routing.module */ "./src/app/pages/covid19-resultado/covid19-resultado-routing.module.ts");
/* harmony import */ var _covid19_resultado_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./covid19-resultado.page */ "./src/app/pages/covid19-resultado/covid19-resultado.page.ts");





let Covid19ResultadoPageModule = class Covid19ResultadoPageModule {
};
Covid19ResultadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _covid19_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__["Covid19ResultadoPageRoutingModule"]
        ],
        declarations: [_covid19_resultado_page__WEBPACK_IMPORTED_MODULE_4__["Covid19ResultadoPage"]]
    })
], Covid19ResultadoPageModule);



/***/ }),

/***/ "./src/app/pages/covid19-resultado/covid19-resultado.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/covid19-resultado/covid19-resultado.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-color: #eeeeee !important;\n  --padding-top: calc(var(--ion-padding, 16px) + env(safe-area-inset-top));\n}\nion-content .logo {\n  width: 200px;\n  height: 80px;\n}\nion-content .result, ion-content .error {\n  margin-top: 50px;\n}\nion-content .result p, ion-content .error p {\n  margin: initial;\n  font-size: inherit !important;\n  margin-bottom: 1em;\n}\nion-content .result p.suggestion, ion-content .error p.suggestion {\n  color: #ff7500;\n}\nion-content .result p:not(.text-center), ion-content .error p:not(.text-center) {\n  text-align: justify;\n}\nion-content .error {\n  color: red;\n}\nion-content ion-card {\n  margin: 20px 0 !important;\n  width: 100% !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\nion-content ion-card-header {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content ion-card-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content .justificar {\n  text-align: justify;\n}\nion-content .unstyled-list {\n  list-style: none;\n  padding-left: 0px;\n}\nion-content .unstyled-list li {\n  margin-bottom: 10px;\n}\nion-content button {\n  padding: 25px 35px !important;\n}\nion-content .green {\n  background-color: #00b050;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY292aWQxOS1yZXN1bHRhZG8vY292aWQxOS1yZXN1bHRhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx3RUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFFRSxnQkFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUROO0FBR007RUFDRSxjQUFBO0FBRFI7QUFJTTtFQUNFLG1CQUFBO0FBRlI7QUFPRTtFQUNFLFVBQUE7QUFMSjtBQVFFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBR0EsMkJBQUE7QUFOSjtBQVNFO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQVBKO0FBVUU7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBUko7QUFXRTtFQUNFLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVdJO0VBQ0UsbUJBQUE7QUFUTjtBQWFFO0VBQ0UsNkJBQUE7QUFYSjtBQWNFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3ZpZDE5LXJlc3VsdGFkby9jb3ZpZDE5LXJlc3VsdGFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pb24tcGFkZGluZywgMTZweCkgKyBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xuXG4gICYgLmxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICAmIC5yZXN1bHQsXG4gICYgLmVycm9yIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgJiBwIHtcbiAgICAgIG1hcmdpbjogaW5pdGlhbDtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuXG4gICAgICAmLnN1Z2dlc3Rpb24ge1xuICAgICAgICBjb2xvcjogI2ZmNzUwMDtcbiAgICAgIH1cblxuICAgICAgJjpub3QoLnRleHQtY2VudGVyKSB7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAmIGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDIwcHggMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gICYgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gICYgLmp1c3RpZmljYXIge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cblxuICAmIC51bnN0eWxlZC1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICYgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAmIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMjVweCAzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmIC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcbiAgICBjb2xvcjogI2VlZWVlZTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/covid19-resultado/covid19-resultado.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/covid19-resultado/covid19-resultado.page.ts ***!
  \*******************************************************************/
/*! exports provided: Covid19ResultadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19ResultadoPage", function() { return Covid19ResultadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/entities/autoevaluacion-covid19 */ "./src/app/entities/autoevaluacion-covid19.ts");
/* harmony import */ var src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/entities/condiciones-salud */ "./src/app/entities/condiciones-salud.ts");
/* harmony import */ var src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/autoevaluacion-covid19.service */ "./src/app/services/autoevaluacion-covid19.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");












/**
 * Componente de la vista de resultado para el módulo de autoevaluación COVID-19.
 */
let Covid19ResultadoPage = class Covid19ResultadoPage {
    constructor(utils, provider, geolocation, nativeGeocoder, alertCtrl, router) {
        this.utils = utils;
        this.provider = provider;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertCtrl = alertCtrl;
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
            if (!this.poll) {
                this.poll = new src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_8__["Poll"]();
            }
            yield this.utils.presentLoading();
            this.utils.getIPAddress()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => this.utils.dismissLoading()))
                .subscribe(r => {
                const body = r;
                const ip = body.ip;
                this.poll.userData.ip = ip;
                this.getCurrentPosition(this.poll);
            }, () => this.getCurrentPosition(this.poll));
        });
    }
    /**
     * Obtiene las coordenadas de ubicación física del dispositivo.
     *
     * @param poll Encuesta.
     */
    getCurrentPosition(poll) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onFinally = (latitude, longitude) => {
                this.utils.dismissLoading();
                const geolocation = new src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]();
                geolocation.latitude = latitude;
                geolocation.longitude = longitude;
                poll.geolocation = geolocation;
                this.getAddress(poll);
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
    getAddress(poll) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onFinally = (address) => {
                this.utils.dismissLoading();
                poll.geolocation.address = address;
                this.sendPoll(poll);
            };
            const latitude = poll.geolocation.latitude;
            const longitude = poll.geolocation.longitude;
            if (!latitude || !longitude) {
                return this.sendPoll(poll);
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
    sendPoll(poll) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const body = poll.deserialize();
            yield this.utils.presentLoading();
            this.provider.submitPoll(body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => this.utils.dismissLoading()))
                .subscribe(r => {
                const b = r;
                this.showSuggestion = b.esSospechoso;
                this.pollDate = b.fechaStr;
                this.showResult = true;
            }, () => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_7__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
            });
        });
    }
};
Covid19ResultadoPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"] },
    { type: src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_10__["AutoevaluacionCOVID19Service"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Covid19ResultadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-covid19-resultado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./covid19-resultado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-resultado/covid19-resultado.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./covid19-resultado.page.scss */ "./src/app/pages/covid19-resultado/covid19-resultado.page.scss")).default]
    })
], Covid19ResultadoPage);



/***/ })

}]);
//# sourceMappingURL=covid19-resultado-covid19-resultado-module-es2015.js.map