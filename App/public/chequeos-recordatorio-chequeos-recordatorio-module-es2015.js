(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chequeos-recordatorio-chequeos-recordatorio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Título de la vista -->\n  <app-title-bar [title]=\"'ENCUESTA CHEQUEO MÉDICO'\" [iconName]=\"'assets/icon/nurse.svg'\"></app-title-bar>\n\n  <!-- Recordatorio de labores a las que está orientada la encuesta de chequeo médico -->\n  <div class=\"reminder\">\n    <h2 class=\"text-center text-bold\">SEÑOR TRABAJADOR</h2>\n    <p>\n      Esta funcionalidad está destinada exclusivamente para trabajadores con exposición directa al contagio del\n      CORONAVIRUS. Tales como, trabajadores de la salud tanto asistenciales como administrativo y de apoyo; terminales\n      de transporte, control fronterizo, cuerpo de bomberos, defensa civil y cruz roja entre otros.\n    </p>\n    <p>\n      En ningún caso constituye una obligación de POSITIVA, para la aplicación de pruebas de diagnóstico, las cuales son\n      concertadas con su empleador o contratante.\n    </p>\n  </div>\n\n  <!-- Botones de acción -->\n  <ion-item lines=\"none\" class=\"text-center\">\n    <a class=\"orange\" slot=\"start\" (click)=\"dontAgree()\">REGRESAR</a>\n    <a class=\"green\" slot=\"end\" (click)=\"agree()\">ACEPTAR</a>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/chequeos-recordatorio/chequeos-recordatorio-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ChequeosRecordatorioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosRecordatorioPageRoutingModule", function() { return ChequeosRecordatorioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chequeos_recordatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequeos-recordatorio.page */ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.ts");




const routes = [
    {
        path: '',
        component: _chequeos_recordatorio_page__WEBPACK_IMPORTED_MODULE_3__["ChequeosRecordatorioPage"]
    }
];
let ChequeosRecordatorioPageRoutingModule = class ChequeosRecordatorioPageRoutingModule {
};
ChequeosRecordatorioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChequeosRecordatorioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChequeosRecordatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosRecordatorioPageModule", function() { return ChequeosRecordatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _chequeos_recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequeos-recordatorio-routing.module */ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio-routing.module.ts");
/* harmony import */ var _chequeos_recordatorio_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chequeos-recordatorio.page */ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.ts");





let ChequeosRecordatorioPageModule = class ChequeosRecordatorioPageModule {
};
ChequeosRecordatorioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _chequeos_recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChequeosRecordatorioPageRoutingModule"]
        ],
        declarations: [_chequeos_recordatorio_page__WEBPACK_IMPORTED_MODULE_4__["ChequeosRecordatorioPage"]]
    })
], ChequeosRecordatorioPageModule);



/***/ }),

/***/ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .reminder {\n  margin-top: 50px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-content h2 {\n  margin-bottom: 1em;\n}\nion-content p {\n  margin: initial;\n  font-size: inherit !important;\n  margin-bottom: 1em;\n  text-align: justify;\n}\nion-content ion-item {\n  border-bottom: 0 !important;\n  margin: 25px 0;\n}\nion-content ion-item a {\n  margin: 0 15px;\n}\nion-content .green {\n  color: #00b050;\n}\nion-content .orange {\n  color: #c55a11;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlcXVlb3MtcmVjb3JkYXRvcmlvL2NoZXF1ZW9zLXJlY29yZGF0b3Jpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSwyQkFBQTtFQUNBLGNBQUE7QUFISjtBQUtJO0VBQ0UsY0FBQTtBQUhOO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFRRTtFQUNFLGNBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXF1ZW9zLXJlY29yZGF0b3Jpby9jaGVxdWVvcy1yZWNvcmRhdG9yaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAmIC5yZW1pbmRlciB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuXG4gICYgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gICYgcCB7XG4gICAgbWFyZ2luOiBpbml0aWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG5cbiAgJiBpb24taXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMjVweCAwO1xuXG4gICAgJiBhIHtcbiAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIH1cbiAgfVxuXG4gICYgLmdyZWVuIHtcbiAgICBjb2xvcjogIzAwYjA1MDtcbiAgfVxuXG4gICYgLm9yYW5nZSB7XG4gICAgY29sb3I6ICNjNTVhMTE7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.ts ***!
  \***************************************************************************/
/*! exports provided: ChequeosRecordatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosRecordatorioPage", function() { return ChequeosRecordatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



/**
 * Vista con mensaje para el usuario para recordarle que el módulo de chequeos médicos está
 * orientado a ciertas áreas laborales.
 */
let ChequeosRecordatorioPage = class ChequeosRecordatorioPage {
    constructor(router) {
        this.router = router;
    }
    /**
     * Redirección a la vista de aceptación o rechazo de políticas de uso de datos privados.
     */
    agree() {
        this.router.navigate(['health-conditions/personal-information'], { state: { title: 'ENCUESTA CHEQUEO MÉDICO', nextPage: 'chequeo-consentimiento' } });
    }
    /**
     * Redireccion al inicio de la aplicación.
     */
    dontAgree() {
        this.router.navigate(['/home']);
    }
};
ChequeosRecordatorioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChequeosRecordatorioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chequeos-recordatorio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chequeos-recordatorio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chequeos-recordatorio.page.scss */ "./src/app/pages/chequeos-recordatorio/chequeos-recordatorio.page.scss")).default]
    })
], ChequeosRecordatorioPage);



/***/ })

}]);
//# sourceMappingURL=chequeos-recordatorio-chequeos-recordatorio-module-es2015.js.map