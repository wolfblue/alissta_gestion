(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["condiciones-salud-datos-personales-condiciones-salud-datos-personales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Título de la vista -->\n  <app-title-bar [title]=\"title\" [iconName]=\"'assets/icon/nurse.svg'\"></app-title-bar>\n\n  <!-- Formulario -->\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"next()\" *ngIf=\"formGroup\">\n\n    <!-- Nombre del usuario -->\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Nombre del usuario</ion-label>\n      <ion-input formControlName=\"name\"></ion-input>\n    </ion-item>\n\n    <!-- Tipo de documento de identificación -->\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Tipo de documento</ion-label>\n      <ion-input formControlName=\"idType\"></ion-input>\n    </ion-item>\n\n    <!-- Número de documento de identificación -->\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Número de documento</ion-label>\n      <ion-input formControlName=\"id\"></ion-input>\n    </ion-item>\n\n    <!-- Nombre del empleador o contratante -->\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">Empleador/contratante</ion-label>\n      <ion-input formControlName=\"employer\"></ion-input>\n    </ion-item>\n\n    <!-- Correo electrónico -->\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">\n        <span class=\"required-field\">*</span>\n        Correo electrónico de contacto\n      </ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\"\n      *ngIf=\"formGroup.controls.email.errors && (submitted || formGroup.controls.email.dirty)\">\n      <ng-container *ngIf=\"formGroup.controls.email.errors.email\">\n        Correo electrónico inválido.\n      </ng-container>\n    </div>\n\n    <!-- Número de teléfono -->\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\">\n        <span class=\"required-field\">*</span>\n        Número de teléfono\n      </ion-label>\n      <ion-input type=\"tel\" formControlName=\"phone\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\"\n      *ngIf=\"formGroup.controls.phone.errors && (submitted || formGroup.controls.phone.dirty)\">\n      <ng-container *ngIf=\"formGroup.controls.phone.errors.pattern\">\n        Número de teléfono inválido.\n      </ng-container>\n    </div>\n\n    <!-- Botones de acción -->\n    <ion-item class=\"action-buttons\" lines=\"none\">\n      <ion-button type=\"submit\" size=\"default\">Continuar</ion-button>\n    </ion-item>\n\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales-routing.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales-routing.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CondicionesSaludDatosPersonalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesSaludDatosPersonalesPageRoutingModule", function() { return CondicionesSaludDatosPersonalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _condiciones_salud_datos_personales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condiciones-salud-datos-personales.page */ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.ts");




const routes = [
    {
        path: '',
        component: _condiciones_salud_datos_personales_page__WEBPACK_IMPORTED_MODULE_3__["CondicionesSaludDatosPersonalesPage"]
    }
];
let CondicionesSaludDatosPersonalesPageRoutingModule = class CondicionesSaludDatosPersonalesPageRoutingModule {
};
CondicionesSaludDatosPersonalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CondicionesSaludDatosPersonalesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CondicionesSaludDatosPersonalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesSaludDatosPersonalesPageModule", function() { return CondicionesSaludDatosPersonalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _condiciones_salud_datos_personales_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condiciones-salud-datos-personales-routing.module */ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales-routing.module.ts");
/* harmony import */ var _condiciones_salud_datos_personales_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condiciones-salud-datos-personales.page */ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.ts");





let CondicionesSaludDatosPersonalesPageModule = class CondicionesSaludDatosPersonalesPageModule {
};
CondicionesSaludDatosPersonalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _condiciones_salud_datos_personales_routing_module__WEBPACK_IMPORTED_MODULE_3__["CondicionesSaludDatosPersonalesPageRoutingModule"]
        ],
        declarations: [_condiciones_salud_datos_personales_page__WEBPACK_IMPORTED_MODULE_4__["CondicionesSaludDatosPersonalesPage"]]
    })
], CondicionesSaludDatosPersonalesPageModule);



/***/ }),

/***/ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\nion-content {\n  background-color: #eeeeee !important;\n}\nion-content ion-label {\n  font-size: inherit !important;\n  margin-bottom: 5px !important;\n}\nion-content ion-label span.required-field {\n  color: red;\n}\nion-content ion-input {\n  border: 1px solid #7e8a97;\n  border-radius: 5px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\nion-content ion-input input {\n  margin-left: 8px !important;\n}\nion-content ion-item.action-buttons {\n  margin: 25px 0;\n}\nion-content ion-item.action-buttons ion-button {\n  margin: auto;\n}\nion-content .validation-error {\n  padding-left: 16px;\n  padding-top: 5px;\n  color: #ab022b;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZGljaW9uZXMtc2FsdWQtZGF0b3MtcGVyc29uYWxlcy9jb25kaWNpb25lcy1zYWx1ZC1kYXRvcy1wZXJzb25hbGVzLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEIsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURURjtBQ1lBLHVDQUFBO0FBNkRBOzs7RUFBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEOUVGO0FDaUZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsOEJBQUE7QURuRkY7QUNzRkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRG5GRjtBQ3NGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsaUNBQUE7RUFFQSxpQ0FBQTtFQUVBLDhCQUFBO0FEM0ZGO0FBek1BO0VBQ0Usb0NBQUE7QUE0TUY7QUExTUU7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0FBNE1KO0FBek1NO0VBQ0UsVUFBQTtBQTJNUjtBQXRNRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBd01KO0FBdE1JO0VBQ0UsMkJBQUE7QUF3TU47QUFuTUk7RUFDRSxjQUFBO0FBcU1OO0FBbk1NO0VBQ0UsWUFBQTtBQXFNUjtBQWhNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFrTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25kaWNpb25lcy1zYWx1ZC1kYXRvcy1wZXJzb25hbGVzL2NvbmRpY2lvbmVzLXNhbHVkLWRhdG9zLXBlcnNvbmFsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1sYWJlbCBzcGFuLnJlcXVpcmVkLWZpZWxkIHtcbiAgY29sb3I6IHJlZDtcbn1cbmlvbi1jb250ZW50IGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZThhOTc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pbnB1dCBpbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtLmFjdGlvbi1idXR0b25zIHtcbiAgbWFyZ2luOiAyNXB4IDA7XG59XG5pb24tY29udGVudCBpb24taXRlbS5hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLnZhbGlkYXRpb24tZXJyb3Ige1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGNvbG9yOiAjYWIwMjJiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CondicionesSaludDatosPersonalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesSaludDatosPersonalesPage", function() { return CondicionesSaludDatosPersonalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/autoevaluacion-covid19.service */ "./src/app/services/autoevaluacion-covid19.service.ts");
/* harmony import */ var src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/chequeo-covid19.service */ "./src/app/services/chequeo-covid19.service.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/entities/autoevaluacion-covid19 */ "./src/app/entities/autoevaluacion-covid19.ts");
/* harmony import */ var src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/entities/chequeo-covid19 */ "./src/app/entities/chequeo-covid19.ts");
/* harmony import */ var src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/entities/condiciones-salud */ "./src/app/entities/condiciones-salud.ts");














/**
 * Componente para la vista de solicitud de datos personales para los submódulos de condiciones
 * de salud.
 */
let CondicionesSaludDatosPersonalesPage = class CondicionesSaludDatosPersonalesPage {
    constructor(context, diagnostic, autoevaluacionService, utils, alertCtrl, chequeosProvider, router) {
        this.context = context;
        this.diagnostic = diagnostic;
        this.autoevaluacionService = autoevaluacionService;
        this.utils = utils;
        this.alertCtrl = alertCtrl;
        this.chequeosProvider = chequeosProvider;
        this.router = router;
        /**
         * Expresión regular para números de teléfonos.
         */
        this.PHONE_REGEX = /^[3][\d]{9}$/;
        /**
         * Mapa de códigos y descripción de los tipos de identificación.
         */
        this.ID_TYPES = {
            CC: 'Cédula de ciudadanía',
            NIT: 'NIT',
            CE: 'Cédula de extranjería',
            NUIP: 'NUIP',
            PASAPORTE: 'PASAPORTE',
            TARJETA_IDENTIDAD: 'Tarjeta de identidad',
            PEP: 'Permiso especial de permanencia'
        };
    }
    ngOnInit() {
        this.title = this.router.getCurrentNavigation().extras.state.title;
        this.nextPage = this.router.getCurrentNavigation().extras.state.nextPage;
        switch (this.nextPage) {
            case 'covid-consentimiento':
                this.poll = new src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_11__["Poll"]();
                break;
            case 'chequeo-consentimiento':
                this.poll = new src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_12__["Poll"]();
                break;
        }
        this.checkLocationPermissions();
    }
    /**
     * Muestra la vista de políticas de tratamiento de datos personales.
     */
    next() {
        let email = this.user.correo;
        let phone = this.user.numeroTelefono;
        let idType = this.user.tipoDocumento;
        let idNumber = `${this.user.id}`;
        if (this.formGroup) {
            this.submitted = true;
            if (this.formGroup.invalid) {
                return;
            }
            email = this.formGroup.controls.email.value;
            phone = this.formGroup.controls.phone.value;
            idType = Object.keys(this.ID_TYPES).find(k => this.ID_TYPES[k] === this.formGroup.controls.idType.value);
            idNumber = this.formGroup.controls.id.value;
        }
        let userData;
        let companyData;
        switch (this.nextPage) {
            case 'covid-consentimiento':
                userData = new src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_13__["UserData"]();
                companyData = new src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_13__["CompanyData"]();
                break;
            case 'chequeo-consentimiento':
                userData = new src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_12__["UserData"]();
                companyData = new src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_12__["CompanyData"]();
                break;
        }
        userData.firstName = this.user.primerNombre;
        userData.middleName = this.user.segundoNombre;
        userData.surname = this.user.primerApellido;
        userData.secondSurname = this.user.segundoApellido;
        userData.email = email;
        userData.phone = phone;
        userData.idType = idType;
        userData.idNumber = idNumber;
        userData.sex = this.user.sexo;
        userData.birthday = this.user.fechaNacimiento;
        userData.idEPS = this.user.idEPS;
        userData.nameEPS = this.user.nombreEPS;
        userData.address = this.user.direccion;
        userData.bussinessID = this.user.idOcupacion;
        userData.businessName = this.user.nombreOcupacion;
        userData.idAdminArea = this.user.idDepartamento;
        userData.nameAdminArea = this.user.nombreDepartamento;
        userData.idSubAdminArea = this.user.idMunicipio;
        userData.nameSubAdminArea = this.user.nombreMunicipio;
        companyData.idType = this.employer.tipoDocumento;
        companyData.idNumber = `${this.employer.documentoEmp}`;
        companyData.businessName = this.employer.razonSocial;
        companyData.businessID = this.employer.idActividadEconomica;
        companyData.businessDescription = this.employer.descripcionActividadEconomica;
        companyData.idAdminArea = this.employer.idDepartamento;
        companyData.nameAdminArea = this.employer.nombreDepartamento;
        companyData.idSubAdminArea = this.employer.idMunicipio;
        companyData.nameSubAdminArea = this.employer.nombreMunicipio;
        companyData.address = this.employer.direccionSedePrincipal;
        this.poll.userData = userData;
        this.poll.companyData = companyData;
        const page = this.nextPage === 'covid-consentimiento' ?
            'health-conditions/covid19-agreement' : 'health-conditions/medical-check-agreement';
        this.router.navigate([page], { state: { poll: this.poll } });
    }
    /**
     * Comprueba que la aplicación tiene permisos para determinar la ubicación física del dispositivo.
     */
    checkLocationPermissions() {
        this.diagnostic.isLocationEnabled()
            .then(isEnabled => {
            if (!isEnabled) {
                // El dispositivo tiene desactivadas las características de ubicación
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__["presentAlert"])('Alerta', '', 'Debe activar los servicios de ubicación en su dispositivo para utilizar este módulo.', this.alertCtrl);
                this.router.navigate(['/home']);
                return;
            }
            this.diagnostic.isLocationAuthorized()
                .then(isAuthorized => {
                if (!isAuthorized) {
                    this.diagnostic.requestLocationAuthorization()
                        .then(r => {
                        if (r !== 'authorized_when_in_use') {
                            // El usuario no concedió permisos de ubicación a la aplicación.
                            // Se redirige a la pantalla de inicio
                            this.router.navigate(['/home']);
                            return;
                        }
                        // El usuario concedió permisos de ubicación a la aplicación.
                        // Se continúa
                        this.checkPollType();
                    })
                        .catch(() => this.router.navigate(['/home'])); // No se pudo determinar la respuesta del usuario
                    return;
                }
                // La aplicación tiene permisos de ubicación.
                // Se continúa
                this.checkPollType();
            })
                // No se pudo determinar si la aplicación tiene o no permisos de ubicación
                .catch(() => this.router.navigate(['/home']));
        })
            // No se pudo determinar el estado actual de configuración del dispositivo
            .catch(() => this.router.navigate(['/home']));
    }
    /**
     * Comprueba el tipo de formulario en cuestión y realiza la siguiente acción apropiada.
     */
    checkPollType() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setUser();
            let shouldContinue;
            switch (this.nextPage) {
                case 'covid-consentimiento':
                    shouldContinue = true;
                    break;
                case 'chequeo-consentimiento':
                    shouldContinue = yield this.checkLastPollDate();
                    break;
            }
            return shouldContinue ? this.initForm() : this.next();
        });
    }
    /**
     * Inicializa el formulario.
     */
    initForm() {
        // Nombre del usuario
        const name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.user.nombre,
            disabled: true
        });
        // Tipo de documento de identificación
        const idType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.ID_TYPES[this.user.tipoDocumento],
            disabled: true
        });
        // Número de documento de identificación
        const id = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.user.id,
            disabled: true
        });
        // Empleador o contratante
        const employer = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.employer.razonSocial,
            disabled: true
        });
        // Correo electrónico
        const email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.correo, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        // Número de teléfono
        const phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.user.numeroTelefono, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.PHONE_REGEX)
        ]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name,
            idType,
            id,
            employer,
            email,
            phone
        });
    }
    /**
     * Establece el usuario actual.
     */
    setUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const context = yield this.context.get();
            this.user = context.trabajador;
            this.employer = context.empresa;
            return this.getUpdatedUserData();
        });
    }
    /**
     * Obtiene los datos actualizados del usuario, si existen.
     */
    getUpdatedUserData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userData = {
                NumeroDocumentoTrabajador: this.user.id,
                TipoDocumentoTrabajador: this.user.tipoDocumento,
                tipoDocEmpresa: this.employer.tipoDocumento,
                NitEmpresa: this.employer.documentoEmp
            };
            try {
                yield this.utils.presentLoading();
                const response = yield this.autoevaluacionService.getUpdatedUserData(userData).toPromise();
                const body = response;
                this.user.correo = body.CorreoTrabajador || this.user.correo;
                this.user.numeroTelefono = body.numeroTelefono || this.user.numeroTelefono;
            }
            catch (error) {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
            }
            finally {
                this.utils.dismissLoading();
            }
        });
    }
    /**
     * Comprueba la última fecha de aplicación del cuestionario de chequeo médico.
     * Si la última fecha de aplicación es menor que un día, devuelve un valor falso para indicar
     * que no debe solicitarse más datos al usuario.
     */
    checkLastPollDate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userData = {
                NumeroDocumentoTrabajador: this.user.id,
                TipoDocumentoTrabajador: this.user.tipoDocumento,
                tipoDocEmpresa: this.employer.tipoDocumento,
                NitEmpresa: this.employer.documentoEmp
            };
            try {
                yield this.utils.presentLoading();
                const response = yield this.chequeosProvider.checkPoll(userData).toPromise();
                const body = response;
                const date = new Date(body.FechaAplicacion);
                date.setHours(0, 0, 0, 0); // Se elimina el componente de tiempo
                const today = new Date();
                today.setHours(0, 0, 0, 0); // Se elimina el componente de tiempo
                if (date >= today) {
                    const poll = this.poll;
                    poll.date = body.FechaAplicacion;
                    poll.id = body.CodigoAPP;
                    return false;
                }
                return true;
            }
            catch (error) {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
                return false;
            }
            finally {
                this.utils.dismissLoading();
            }
        });
    }
};
CondicionesSaludDatosPersonalesPage.ctorParameters = () => [
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_9__["ContextService"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"] },
    { type: src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_7__["AutoevaluacionCOVID19Service"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_8__["ChequeosCOVID19Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CondicionesSaludDatosPersonalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-condiciones-salud-datos-personales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./condiciones-salud-datos-personales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./condiciones-salud-datos-personales.page.scss */ "./src/app/pages/condiciones-salud-datos-personales/condiciones-salud-datos-personales.page.scss")).default]
    })
], CondicionesSaludDatosPersonalesPage);



/***/ })

}]);
//# sourceMappingURL=condiciones-salud-datos-personales-condiciones-salud-datos-personales-module-es2015.js.map