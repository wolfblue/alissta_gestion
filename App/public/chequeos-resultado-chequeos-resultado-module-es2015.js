(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chequeos-resultado-chequeos-resultado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-resultado/chequeos-resultado.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-resultado/chequeos-resultado.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n\n  <div class=\"clearfix logo-wrapper\">\n\n    <!-- Logo de Positiva -->\n    <ion-img class=\"logo place-left\" [src]=\"'assets/img/positiva-compania-de-seguros.png'\"></ion-img>\n\n    <!-- Logo de Alissta -->\n    <ion-img class=\"logo place-right\" [src]=\"'assets/img/alissta_logo.svg'\"></ion-img>\n\n  </div>\n\n  <ion-list lines=\"none\" *ngIf=\"showResult\">\n\n    <!-- Nombre de usuario -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Nombre Usuario</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.userData.firstName + ' ' + poll.userData.middleName + ' ' + poll.userData.surname + ' ' + poll.userData.secondSurname }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Identificación de usuario -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Identificación de Usuario</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.userData.idType + ' ' + poll.userData.idNumber }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Razón social de la empresa o contratante -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Razón Social Empresa</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.companyData.businessName }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Identificación de la empresa o contratante -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Identificación Empresa</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.companyData.idType + ' ' + poll.companyData.idNumber }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Fecha de aplicación del chequeo médico -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Fecha encuesta chequeo médico</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.date | date: 'dd-MM-yyyy hh:mm a' }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Código de la aplicación del chequeo médico -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Código ID</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.id }}\n      </ion-label>\n    </ion-item>\n\n    <div class=\"qr-wrapper\">\n      <qrcode [qrdata]=\"getQRData()\"></qrcode>\n    </div>\n\n  </ion-list>\n\n  <div>\n    <ion-card>\n      <ion-card-header class=\"text-center\">\n        Referencias\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"justificar\">\n          Enlaces de interés y referencias sobre recomendaciones para la prevención COVID-19\n        </p>\n        <ul class=\"unstyled-list\">\n          <li><a href=\"https://covid19.minsalud.gov.co/\">Ministerio de Salud y Protección Social</a></li>\n          <li><a href=\"https://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx\">Instituto Nacional de Salud</a></li>\n          <li><a href=\"https://www.paho.org/col/index.php?option=com_docman&view=download&category_slug=publicaciones-ops-oms-colombia&alias=856-mopece4&Itemid=688\">Organización Panamericana de la Salud / Organización Mundial de la Salud</a></li>\n        </ul>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Botones de acción -->\n  <div class=\"text-center\">\n    <ion-button color=\"primary\" (click)=\"goToHome()\">Continuar</ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/chequeos-resultado/chequeos-resultado-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/chequeos-resultado/chequeos-resultado-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ChequeosResultadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosResultadoPageRoutingModule", function() { return ChequeosResultadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequeos-resultado.page */ "./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts");




const routes = [
    {
        path: '',
        component: _chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_3__["ChequeosResultadoPage"]
    }
];
let ChequeosResultadoPageRoutingModule = class ChequeosResultadoPageRoutingModule {
};
ChequeosResultadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChequeosResultadoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chequeos-resultado/chequeos-resultado.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/chequeos-resultado/chequeos-resultado.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChequeosResultadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosResultadoPageModule", function() { return ChequeosResultadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _chequeos_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequeos-resultado-routing.module */ "./src/app/pages/chequeos-resultado/chequeos-resultado-routing.module.ts");
/* harmony import */ var _chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chequeos-resultado.page */ "./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts");





let ChequeosResultadoPageModule = class ChequeosResultadoPageModule {
};
ChequeosResultadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _chequeos_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChequeosResultadoPageRoutingModule"]
        ],
        declarations: [_chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_4__["ChequeosResultadoPage"]]
    })
], ChequeosResultadoPageModule);



/***/ }),

/***/ "./src/app/pages/chequeos-resultado/chequeos-resultado.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/chequeos-resultado/chequeos-resultado.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-color: #eeeeee !important;\n  --padding-top: calc(var(--ion-padding, 16px) + env(safe-area-inset-top));\n}\nion-content .logo-wrapper {\n  margin-top: 25px;\n}\nion-content .logo-wrapper .logo {\n  width: 150px;\n  height: 50px;\n}\nion-content ion-list ion-item {\n  background-color: transparent !important;\n}\nion-content ion-list ion-item ion-label {\n  font-size: 1.2rem !important;\n}\nion-content ion-list .qr-wrapper {\n  margin-top: 25px;\n}\nion-content ion-list .qr-wrapper qrcode {\n  display: block;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-content ion-card {\n  margin: 20px 0 !important;\n  width: 100% !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\nion-content ion-card-header {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content ion-card-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content .justificar {\n  text-align: justify;\n}\nion-content .unstyled-list {\n  list-style: none;\n  padding-left: 0px;\n}\nion-content .unstyled-list li {\n  margin-bottom: 10px;\n}\nion-content button {\n  padding: 25px 35px !important;\n}\nion-content .green {\n  background-color: #00b050;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlcXVlb3MtcmVzdWx0YWRvL2NoZXF1ZW9zLXJlc3VsdGFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHdFQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ047QUFJSTtFQUNFLHdDQUFBO0FBRk47QUFJTTtFQUNFLDRCQUFBO0FBRlI7QUFNSTtFQUNFLGdCQUFBO0FBSk47QUFNTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUpSO0FBU0U7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFHQSwyQkFBQTtBQVBKO0FBVUU7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBUko7QUFXRTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFUSjtBQVlFO0VBQ0UsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhKO0FBWUk7RUFDRSxtQkFBQTtBQVZOO0FBY0U7RUFDRSw2QkFBQTtBQVpKO0FBZUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFiSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXF1ZW9zLXJlc3VsdGFkby9jaGVxdWVvcy1yZXN1bHRhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcblxuICAmIC5sb2dvLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAmIC5sb2dvIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gIH1cblxuICAmIGlvbi1saXN0IHtcbiAgICAmIGlvbi1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICYgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIC5xci13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAgICYgcXJjb2RlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMjBweCAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gICYgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJiBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJiAuanVzdGlmaWNhciB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gICYgLnVuc3R5bGVkLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgJiBsaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gICYgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAyNXB4IDM1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gICYgLmdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xuICAgIGNvbG9yOiAjZWVlZWVlO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts ***!
  \*********************************************************************/
/*! exports provided: ChequeosResultadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosResultadoPage", function() { return ChequeosResultadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/chequeo-covid19.service */ "./src/app/services/chequeo-covid19.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/entities/condiciones-salud */ "./src/app/entities/condiciones-salud.ts");












/**
 * Componente de la vista de resultado para el módulo de encuesta de chequeos médicos.
 */
let ChequeosResultadoPage = class ChequeosResultadoPage {
    constructor(utils, geolocation, nativeGeocoder, provider, alertCtrl, datePipe, router) {
        this.utils = utils;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.router = router;
    }
    ngOnInit() {
        this.poll = this.router.getCurrentNavigation().extras.state.poll;
        if (!!this.poll.id) {
            this.showResult = true;
            return;
        }
        this.getIPAddress();
    }
    /**
     * Redirige a la vista de inicio de la aplicación.
     */
    goToHome() {
        this.router.navigate(['/home']);
    }
    /**
     * Obtiene los datos para construir el código _QR_.
     */
    getQRData() {
        const userData = this.poll.userData;
        const companyData = this.poll.companyData;
        const name = `${userData.firstName} ${userData.middleName} ${userData.surname} ${userData.secondSurname}`;
        const id = `${userData.idType} ${userData.idNumber}`;
        const businessName = companyData.businessName;
        const companyID = `${companyData.idType} ${companyData.idNumber}`;
        const applicationDate = this.datePipe.transform(this.poll.date, 'dd-MM-yyyy hh:mm a');
        const applicationCode = `${this.poll.id}`;
        return `${name};${id};${businessName};${companyID};${applicationDate};${applicationCode}`;
    }
    /**
     * Obtiene la dirección _IP_ pública desde la cual se realizan las peticiones.
     */
    getIPAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.utils.getIPAddress()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.utils.dismissLoading()))
                .subscribe(r => {
                const body = r;
                const ip = body.ip;
                this.poll.userData.ip = ip;
                this.getCurrentPosition();
            }, () => this.getCurrentPosition());
        });
    }
    /**
     * Obtiene las coordenadas de ubicación física del dispositivo.
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
            let body = this.poll.deserialize();
            yield this.utils.presentLoading();
            this.provider.submitPoll(body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.utils.dismissLoading()))
                .subscribe(r => {
                body = r;
                this.poll.date = body.FechaAplicacion;
                this.poll.id = body.CodigoAPP;
                this.showResult = true;
            }, () => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
            });
        });
    }
};
ChequeosResultadoPage.ctorParameters = () => [
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_9__["ChequeosCOVID19Service"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ChequeosResultadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chequeos-resultado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chequeos-resultado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-resultado/chequeos-resultado.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chequeos-resultado.page.scss */ "./src/app/pages/chequeos-resultado/chequeos-resultado.page.scss")).default]
    })
], ChequeosResultadoPage);



/***/ })

}]);
//# sourceMappingURL=chequeos-resultado-chequeos-resultado-module-es2015.js.map