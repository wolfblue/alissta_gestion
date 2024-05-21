(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asistencia-eventos-qr-asistencia-eventos-qr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <app-title-bar [title]=\"'ASISTENCIA EVENTOS POSITIVA'\" [iconName]=\"'assets/icon/eventos.svg'\">\n  </app-title-bar>\n\n  <qrcode [qrdata]=\"qrData\" *ngIf=\"qrData\"></qrcode>\n\n  <div class=\"button-wrapper\">\n    <ion-button routerLink=\"/home\">Regresar</ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"opcion\" *ngIf=\"opcion\"></app-menu-operativo>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AsistenciaEventosQrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaEventosQrPageRoutingModule", function() { return AsistenciaEventosQrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asistencia-eventos-qr.page */ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts");




const routes = [
    {
        path: '',
        component: _asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_3__["AsistenciaEventosQrPage"]
    }
];
let AsistenciaEventosQrPageRoutingModule = class AsistenciaEventosQrPageRoutingModule {
};
AsistenciaEventosQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AsistenciaEventosQrPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AsistenciaEventosQrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaEventosQrPageModule", function() { return AsistenciaEventosQrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _asistencia_eventos_qr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asistencia-eventos-qr-routing.module */ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr-routing.module.ts");
/* harmony import */ var _asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asistencia-eventos-qr.page */ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts");





let AsistenciaEventosQrPageModule = class AsistenciaEventosQrPageModule {
};
AsistenciaEventosQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _asistencia_eventos_qr_routing_module__WEBPACK_IMPORTED_MODULE_3__["AsistenciaEventosQrPageRoutingModule"]
        ],
        declarations: [_asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_4__["AsistenciaEventosQrPage"]]
    })
], AsistenciaEventosQrPageModule);



/***/ }),

/***/ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("qrcode {\n  display: block;\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.button-wrapper {\n  text-align: center;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNpc3RlbmNpYS1ldmVudG9zLXFyL2FzaXN0ZW5jaWEtZXZlbnRvcy1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNpc3RlbmNpYS1ldmVudG9zLXFyL2FzaXN0ZW5jaWEtZXZlbnRvcy1xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJxcmNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts ***!
  \***************************************************************************/
/*! exports provided: AsistenciaEventosQrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaEventosQrPage", function() { return AsistenciaEventosQrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");








let AsistenciaEventosQrPage = class AsistenciaEventosQrPage {
    constructor(context, datePipe, alertCtrl, router, utils) {
        this.context = context;
        this.datePipe = datePipe;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.utils = utils;
    }
    ngOnInit() {
        this.buildQRData();
    }
    ionViewWillEnter() {
        this.opcion = 'asistenciaEventos';
    }
    ionViewWillLeave() {
        this.opcion = undefined;
    }
    buildQRData() {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            const context = yield this.context.get();
            this.utils.dismissLoading();
            if (!context) {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
                return;
            }
            const trabajador = context.trabajador;
            const empresa = context.empresa;
            const primerNombre = (_a = trabajador.primerNombre) !== null && _a !== void 0 ? _a : '';
            const segundoNombre = (_b = trabajador.segundoNombre) !== null && _b !== void 0 ? _b : '';
            const primerApellido = (_c = trabajador.primerApellido) !== null && _c !== void 0 ? _c : '';
            const segundoApellido = (_d = trabajador.segundoApellido) !== null && _d !== void 0 ? _d : '';
            let nombreCompleto = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
            nombreCompleto = nombreCompleto.replace(/\s+/g, ' ');
            nombreCompleto = nombreCompleto.trim();
            const fecha = this.datePipe.transform(trabajador.fechaNacimiento, 'dd/MM/yyyy');
            const data = {
                tiEmpr: empresa.tipoDocumento,
                numEmpr: empresa.documentoEmp,
                razonEmpr: empresa.razonSocial,
                tiAsistente: trabajador.tipoDocumento,
                numAsistente: `${trabajador.id}`,
                nomAsist: nombreCompleto,
                sexo: trabajador.sexo === 'M' ? "Masculino" : "Femenino",
                cargo: "3",
                tele: `${trabajador.numeroTelefono}`,
                email: trabajador.correo,
                fchnac: fecha
            };
            this.qrData = JSON.stringify(data);
        });
    }
};
AsistenciaEventosQrPage.ctorParameters = () => [
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_6__["ContextService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] }
];
AsistenciaEventosQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-asistencia-eventos-qr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asistencia-eventos-qr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asistencia-eventos-qr.page.scss */ "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.scss")).default]
    })
], AsistenciaEventosQrPage);



/***/ })

}]);
//# sourceMappingURL=asistencia-eventos-qr-asistencia-eventos-qr-module-es2015.js.map