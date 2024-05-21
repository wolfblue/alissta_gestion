(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datos-generales-relacion-laboral-datos-generales-relacion-laboral-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"title\">\n      <div class=\"div-img-text\">\n        <img src=\"assets/img/perfil.png\" />\n        <h1>MI PERFIL</h1>\n      </div>\n      <hr />\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/trabajador-nombre.png\" />\n      <span>{{ user?.nombre | customTitlecase }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/tipo-documento.png\" />\n      <span>{{ user?.tipoDocumento }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/id.png\" />\n      <span>{{ user?.id | groupsOfThree }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/cargo.png\" />\n      <span>{{ user?.cargo | customTitlecase }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon class=\"custom-icon\" src=\"assets/icon/mail.svg\"></ion-icon>\n      <span>{{ user?.correo }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon class=\"custom-icon\" src=\"assets/icon/phone.svg\"></ion-icon>\n      <span>{{ user?.numeroTelefono }}</span>\n    </ion-item>\n\n    <ion-item class=\"title ion-padding-top ion-text-center\">\n      <h1>INFORMACIÓN PERSONAL EN CASO DE EMERGENCIA</h1>\n      <hr />\n    </ion-item>\n    <!-- grupo sanguineo -->\n    <p class=\"req-emer\" *ngIf=\"requiredFields.GrupoSanguineo\">* Requerido</p>\n    <ion-grid>\n      <ion-row class=\"p-0\">\n        <ion-col class=\"p-0\" size=\"2\" style=\"display: flex; align-items: center; justify-content: center; padding-left: 18px\">\n          <img style=\"height: 70% !important\" src=\"assets/img/grupo-sanguineo.svg\" />\n        </ion-col>\n        <ion-col style=\"display: grid\" class=\"p-0\" size=\"10\">\n          <ion-item style=\"height: 80px; padding-right: 10px; padding-left: 10px\" lines=\"none\">\n            <ion-label position=\"floating\"> Grupo Sanguíneo </ion-label>\n            <ion-select\n              [(ngModel)]=\"emergencia['GrupoSanguineo']\"\n              id=\"grupo-sanguineo\"\n              (ngModelChange)=\"hasChanges = true\"\n              mode=\"md\"\n              cancelText=\"Cancelar\"\n              okText=\"Aceptar\"\n            >\n              <ion-select-option value=\"O\">O</ion-select-option>\n              <ion-select-option value=\"A\">A</ion-select-option>\n              <ion-select-option value=\"B\">B</ion-select-option>\n              <ion-select-option value=\"AB\">AB</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Rh -->\n    <p class=\"req-emer\" *ngIf=\"requiredFields.Rh\">* Requerido</p>\n\n    <ion-grid class=\"p-0\">\n      <ion-row class=\"p-0\">\n        <ion-col class=\"p-0\" size=\"2\" style=\"display: flex; align-items: center; justify-content: center; padding-left: 20px\">\n          <img style=\"height: 70% !important\" src=\"assets/img/tipo-de-sangre.svg\" />\n        </ion-col>\n        <ion-col style=\"display: grid\" class=\"p-0\" size=\"10\">\n          <ion-item style=\"height: 80px; padding-right: 10px; padding-left: 10px\" lines=\"none\">\n            <ion-label position=\"floating\"> RH </ion-label>\n            <ion-select [(ngModel)]=\"emergencia['Rh']\" (ngModelChange)=\"hasChanges = true\" mode=\"md\" cancelText=\"Cancelar\" okText=\"Aceptar\">\n              <ion-select-option value=\"+\">Positivo</ion-select-option>\n              <ion-select-option value=\"-\">Negativo</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p class=\"req-emer\" *ngIf=\"requiredFields.NombreContactoEmergencia\">* Requerido</p>\n\n    <ion-item lines=\"none\">\n      <img class=\"custom-icon\" src=\"assets/img/trabajador-nombre.png\" />\n      <ion-grid>\n        <ion-row>\n          <span style=\"font-size: 12px\"> Nombre Contacto de Emergencia </span>\n        </ion-row>\n        <ion-row>\n          <span>\n            <ion-input\n              [(ngModel)]=\"emergencia['NombreContactoEmergencia']\"\n              (ngModelChange)=\"hasChanges = true\"\n              style=\"color: black\"\n              (ionInput)=\"emergencia['NombreContactoEmergencia'] = onlyLetters($event.target.value); hasChanges = true\"\n              (ionBlur)=\"emergencia['NombreContactoEmergencia'] = onlyLetters(emergencia['NombreContactoEmergencia'])\"\n              rows=\"3\"\n              pattern=\"^[a-zA-Z ]*$\"\n              placeholder=\"Escriba aquí\"\n            ></ion-input>\n          </span>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <p class=\"req-emer\" *ngIf=\"requiredFields.TelefonoContactoEmergencia\">* Requerido</p>\n\n    <ion-item lines=\"none\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon class=\"custom-icon\" src=\"assets/img/llamada-de-emergencia.svg\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" style=\"padding: 0; padding-left: 4px\">\n          <ion-label style=\"color: gray; font-size: 14px\"> Contacto de Emergencia</ion-label>\n          <ion-radio-group [(ngModel)]=\"telefono\" (ngModelChange)=\"changeTipoTelefono()\" style=\"display: flex\" mode=\"md\">\n            <ion-item lines=\"none\">\n              <ion-label>Teléfono</ion-label>\n              <ion-radio slot=\"start\" value=\"telefono\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label>Celular</ion-label>\n              <ion-radio slot=\"start\" value=\"celular\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <p class=\"req-emer\" *ngIf=\"requiredFields.TelefonoContactoEmergencia\">* Requerido</p>\n\n    <ion-item lines=\"none\" *ngIf=\"telefono === 'celular'\">\n      <ion-grid>\n        <ion-row>\n          <span style=\"margin: 0\">\n            <ion-label style=\"color: gray; font-size: 14px\">Número Contacto </ion-label>\n          </span>\n        </ion-row>\n        <span>\n          <ion-row>\n            <ion-input\n              [(ngModel)]=\"emergencia['TelefonoContactoEmergencia']\"\n              (ngModelChange)=\"hasChanges = true\"\n              style=\"padding: 4px !important; height: 40px !important\"\n              type=\"tel\"\n              class=\"border-input\"\n              [minlength]=\"10\"\n              maxlength=\"10\"\n              (ionChange)=\"emergencia['TelefonoContactoEmergencia'] = numberOnlyMovil(emergencia['TelefonoContactoEmergencia'])\"\n            ></ion-input>\n          </ion-row>\n        </span>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"telefono === 'telefono'\">\n      <ion-grid>\n        <ion-row style=\"width: 100%\">\n          <ion-col size=\"4\">\n            <span style=\"margin: 0\">Indicativo</span>\n          </ion-col>\n          <ion-col size=\"1\"> </ion-col>\n          <ion-col size=\"7\">\n            <span style=\"margin: 0\">Número Contacto</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-row>\n              <ion-input\n                type=\"number\"\n                class=\"border-input\"\n                [minlength]=\"1\"\n                maxlength=\"2\"\n                value=\"60\"\n                pattern=\"^[0-9]*$\"\n                inputmode=\"numeric\"\n                style=\"color: #ff7400 !important; font-weight: 700; padding-left: 8px !important; margin-right: 4px\"\n              ></ion-input>\n\n              <ion-input\n                [(ngModel)]=\"indicativo\"\n                type=\"number\"\n                class=\"border-input\"\n                [minlength]=\"1\"\n                maxlength=\"1\"\n                style=\"padding-left: 8px !important\"\n              ></ion-input>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"1\"> </ion-col>\n          <ion-col size=\"7\">\n            <ion-input\n              [(ngModel)]=\"emergencia['TelefonoContactoEmergencia']\"\n              (ngModelChange)=\"hasChanges = true\"\n              style=\"padding-left: 8px !important\"\n              type=\"tel\"\n              class=\"border-input\"\n              [minlength]=\"7\"\n              maxlength=\"7\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <p class=\"req-emer\" *ngIf=\"requiredFields.CondicionesMedicas\">* Requerido</p>\n\n    <ion-item lines=\"none\">\n      <img style=\"height: 60% !important\" class=\"custom-icon\" src=\"assets/img/prueba-de-alergia.svg\" />\n      <ion-grid>\n        <ion-row>\n          <span style=\"font-size: 12px\"> ¿Alergias, otras condiciones médicas o consume algún medicamento? </span>\n        </ion-row>\n        <ion-row>\n          <span>\n            <ion-input\n              [(ngModel)]=\"emergencia['CondicionesMedicas'] \"\n              (ngModelChange)=\"hasChanges = true\"\n              style=\"color: black\"\n              rows=\"3\"\n              pattern=\"^[a-zA-Z ]*$\"\n              (ionInput)=\"emergencia['CondicionesMedicas'] = onlyLetters($event.target.value);hasChanges = true\"\n              (ionBlur)=\"emergencia['CondicionesMedicas'] = onlyLetters(emergencia['CondicionesMedicas'])\"\n              placeholder=\"Escriba aquí\"\n            ></ion-input>\n          </span>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <p class=\"req-emer\" *ngIf=\"requiredFields.EPS\">* Requerido</p>\n\n    <ion-grid class=\"p-0\">\n      <ion-row class=\"p-0\">\n        <ion-col class=\"p-0\" size=\"2\" style=\"display: flex; align-items: center; justify-content: center; padding-left: 20px\">\n          <img style=\"height: 60% !important\" class=\"custom-icon\" src=\"assets/img/eps.svg\" />\n        </ion-col>\n        <ion-col style=\"display: grid\" class=\"p-0\" size=\"10\">\n          <ion-item\n            [style]=\"!epsName ? 'padding-top : 10px' : 'padding-top : 0px'\"\n            style=\"height: 80px; padding-right: 10px; padding-left: 10px\"\n            lines=\"none\"\n          >\n            <ion-label *ngIf=\"epsName\" position=\"floating\"> EPS </ion-label>\n            <ionic-selectable\n              (ngModelChange)=\"hasChanges = true\"\n              item-content\n              [(ngModel)]=\"epsName\"\n              [canSearch]=\"true\"\n              [items]=\"eps || []\"\n              (onChange)=\"changeEps($event)\"\n              [isMultiple]=\"false\"\n              closeButtonText=\"Cancelar\"\n              closeButtonSlot=\"end\"\n              placeholder=\"Seleccione...\"\n              [searchFailText]=\"'No encontramos el item buscado'\"\n              searchPlaceholder=\"Buscar\"\n            >\n            </ionic-selectable>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item lines=\"none\">\n      <img style=\"height: 80% !important\" class=\"custom-icon\" src=\"assets/img/arl.svg\" />\n      <span>Positiva Compañia Seguros S.A</span>\n    </ion-item>\n\n    <div *ngIf=\"hasChanges\" class=\"ion-text-center\">\n      <ion-button color=\"primary\" (click)=\"guardarCasoEmergecia()\">GUARDAR INFORMACIÓN</ion-button>\n    </div>\n\n    <ion-item class=\"title ion-padding-top\">\n      <div class=\"div-img-text\">\n        <img src=\"assets/img/empresa.png\" />\n        <h1>MI EMPRESA</h1>\n      </div>\n      <hr />\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img *ngIf=\"!employer?.nombreLogo\" class=\"logo-empresa\" src=\"assets/img/marca-agua-empresa.png\" />\n      <img *ngIf=\"employer?.nombreLogo\" class=\"logo-empresa\" [src]=\"urlEmpresaLogo\" />\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/empresa-nombre.png\" />\n      <span>{{ employer?.razonSocial }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/tipo-documento.png\" />\n      <span>{{ employer?.tipoDocumento }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/id.png\" />\n      <span>{{ employer?.id | groupsOfThree }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/actividad-economica.png\" />\n      <span>{{ employer?.idActividadEconomica | groupsOfThree }}</span>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <img src=\"assets/img/direccion.png\" />\n      <span>{{ employer?.direccionSedePrincipal | customTitlecase }}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"\"></app-menu-operativo>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DatosGeneralesRelacionLaboralPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosGeneralesRelacionLaboralPageRoutingModule", function() { return DatosGeneralesRelacionLaboralPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _datos_generales_relacion_laboral_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datos-generales-relacion-laboral.page */ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.ts");




const routes = [
    {
        path: '',
        component: _datos_generales_relacion_laboral_page__WEBPACK_IMPORTED_MODULE_3__["DatosGeneralesRelacionLaboralPage"]
    }
];
let DatosGeneralesRelacionLaboralPageRoutingModule = class DatosGeneralesRelacionLaboralPageRoutingModule {
};
DatosGeneralesRelacionLaboralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatosGeneralesRelacionLaboralPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: DatosGeneralesRelacionLaboralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosGeneralesRelacionLaboralPageModule", function() { return DatosGeneralesRelacionLaboralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _datos_generales_relacion_laboral_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datos-generales-relacion-laboral-routing.module */ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral-routing.module.ts");
/* harmony import */ var _datos_generales_relacion_laboral_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datos-generales-relacion-laboral.page */ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.ts");





let DatosGeneralesRelacionLaboralPageModule = class DatosGeneralesRelacionLaboralPageModule {
};
DatosGeneralesRelacionLaboralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _datos_generales_relacion_laboral_routing_module__WEBPACK_IMPORTED_MODULE_3__["DatosGeneralesRelacionLaboralPageRoutingModule"]
        ],
        declarations: [_datos_generales_relacion_laboral_page__WEBPACK_IMPORTED_MODULE_4__["DatosGeneralesRelacionLaboralPage"]]
    })
], DatosGeneralesRelacionLaboralPageModule);



/***/ }),

/***/ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\n.list {\n  margin-bottom: 7rem;\n}\nion-content ion-list ion-item {\n  background-color: inherit !important;\n}\nion-content ion-list ion-item.title {\n  --padding-start: 0;\n  --inner-padding-start: 16px;\n}\nion-content ion-list ion-item img {\n  width: 3.5rem !important;\n  height: 3.5rem !important;\n}\nion-content ion-list ion-item img.logo-empresa {\n  margin: auto !important;\n  width: 100% !important;\n  height: auto !important;\n}\nion-content ion-list ion-item ion-icon {\n  padding: 8px;\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n  opacity: 0.5;\n}\nion-content ion-list ion-item span {\n  font-weight: 400;\n  font-size: 16px;\n  color: #96a0ac;\n  white-space: pre-line;\n  text-align: justify;\n  margin-left: 1rem;\n}\nion-content ion-list ion-item h1 {\n  color: #ff7500;\n  margin-top: 1rem !important;\n  margin-left: 1rem !important;\n  font-size: 16px !important;\n  font-weight: 500 !important;\n}\nion-content ion-list ion-item hr {\n  background-color: #96a0ac !important;\n}\n.border-input {\n  border: 1px solid #7e7e7e;\n  border-radius: 5px;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n.req-emer {\n  color: red;\n  font-size: 12px;\n  margin: 0;\n  padding-right: 8px;\n  text-align: end;\n}\nion-radio {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0b3MtZ2VuZXJhbGVzLXJlbGFjaW9uLWxhYm9yYWwvZGF0b3MtZ2VuZXJhbGVzLXJlbGFjaW9uLWxhYm9yYWwucGFnZS5zY3NzIiwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQiwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRFRGO0FDWUEsdUNBQUE7QUE2REE7OztFQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUQ5RUY7QUNpRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFFQSw4QkFBQTtBRG5GRjtBQ3NGQTtFQUNFLGlEQUFBO0VBQ0EsbURBQUE7RUFDQSxxREFBQTtFQUNBLGdEQUFBO0FEbkZGO0FDc0ZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxzQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFFQSxpQ0FBQTtFQUVBLGlDQUFBO0VBRUEsOEJBQUE7QUQzRkY7QUF6TUE7RUFDRSxtQkFBQTtBQTRNRjtBQXZNSTtFQUNFLG9DQUFBO0FBME1OO0FBeE1NO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQTBNUjtBQXZNTTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUF5TVI7QUF2TVE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUF5TVY7QUFyTU07RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUF1TVI7QUFwTU07RUFDRSxnQkNpRE07RURoRE4sZUMrQ0k7RUQ5Q0osY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXNNUjtBQW5NTTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQXFNUjtBQWxNTTtFQUNFLG9DQUFBO0FBb01SO0FBN0xBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWdNRjtBQTdMQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWdNRjtBQTlMQTtFQUNFLGtCQUFBO0FBaU1GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0b3MtZ2VuZXJhbGVzLXJlbGFjaW9uLWxhYm9yYWwvZGF0b3MtZ2VuZXJhbGVzLXJlbGFjaW9uLWxhYm9yYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDdyZW07XG59XG5cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0udGl0bGUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGltZyB7XG4gIHdpZHRoOiAzLjVyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzLjVyZW0gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGltZy5sb2dvLWVtcHJlc2Ege1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzk2YTBhYztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGgxIHtcbiAgY29sb3I6ICNmZjc1MDA7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2YTBhYyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdlN2U3ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yZXEtZW1lciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.ts ***!
  \*************************************************************************************************/
/*! exports provided: DatosGeneralesRelacionLaboralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosGeneralesRelacionLaboralPage", function() { return DatosGeneralesRelacionLaboralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/empresa.service */ "./src/app/services/empresa.service.ts");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_SST_menu_sstservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/menu-sstservice.service */ "./src/app/services/SST/menu-sstservice.service.ts");
/* harmony import */ var src_app_services_info_emergencia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/info-emergencia.service */ "./src/app/services/info-emergencia.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");










let DatosGeneralesRelacionLaboralPage = class DatosGeneralesRelacionLaboralPage {
    constructor(context, empresaProvider, storageService, alertController, munuSSTService, infoEmergenciaService, utilsService) {
        this.context = context;
        this.empresaProvider = empresaProvider;
        this.storageService = storageService;
        this.alertController = alertController;
        this.munuSSTService = munuSSTService;
        this.infoEmergenciaService = infoEmergenciaService;
        this.utilsService = utilsService;
        this.emergencia = {};
        this.epsName = '';
        this.hasChanges = false;
        this.eps = [];
        this.requiredFields = {
            GrupoSanguineo: false,
            Rh: false,
            NombreContactoEmergencia: false,
            TelefonoContactoEmergencia: false,
            CondicionesMedicas: false,
            EPS: false,
        };
    }
    ngOnInit() {
        this.context.get().then(c => {
            this.user = c.trabajador;
            this.employer = c.empresa;
            this.empresaProvider.getNombreLogo(String(c.empresa.id)).subscribe((response) => {
                c.empresa.parseNombreLogo(response);
                this.urlEmpresaLogo = this.empresaProvider.getUrlLogo(c.empresa.nombreLogo);
            });
        });
        /*
        this.storageService.get('emergencia').then(val => {
          if (val) {
            this.emergencia = val;
            this.epsName = this.emergencia['EPS'];
            this.telelPhone();
          }
        });
        this.infoEmergenciaService.getEPS().subscribe((response: any) => {
          this.eps = response['EPS'];
        });
        */
        this.consultarDatosEmergencia();
    }
    changeEps(event) {
        console.log(event);
        if (event.value) {
            this.emergencia['EPS'] = event.value;
            console.log(this.emergencia);
        }
    }
    checkData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const fieldsToCheck = [
                { field: 'GrupoSanguineo', message: 'Debe seleccionar un grupo sanguíneo' },
                { field: 'Rh', message: 'Debe seleccionar un RH' },
                { field: 'NombreContactoEmergencia', message: 'Debe ingresar un nombre de contacto' },
                {
                    field: 'CondicionesMedicas',
                    message: 'Debe ingresar una condición médica o escribe por ejemplo "Ninguna"',
                },
                { field: 'EPS', message: 'Debe seleccionar una EPS' },
            ];
            for (let field in this.requiredFields) {
                if (!this.emergencia[field]) {
                    this.requiredFields[field] = true;
                }
                else {
                    this.requiredFields[field] = false;
                }
            }
            for (let check of fieldsToCheck) {
                if (!this.emergencia[check.field]) {
                    yield this.mostrarAlerta(check.message);
                    return false;
                }
            }
            if (this.emergencia['TelefonoContactoEmergencia'] === null || this.emergencia['TelefonoContactoEmergencia'] === undefined) {
                yield this.mostrarAlerta('Debe ingresar un número de contacto');
                return false;
            }
            if (this.emergencia['TelefonoContactoEmergencia']) {
                console.log(this.telefono);
                switch (this.telefono) {
                    case 'celular':
                        let tel = this.emergencia['TelefonoContactoEmergencia'];
                        if (tel.length < 10 || tel.charAt(0) !== '3' || tel.length > 10) {
                            yield this.mostrarAlerta('Debe ingresar un número de celular valido');
                            this.requiredFields.TelefonoContactoEmergencia = true;
                            this.emergencia['TelefonoContactoEmergencia'] = null;
                            return false;
                        }
                        break;
                    case 'telefono':
                        console.log(this.indicativo);
                        if (this.indicativo === null || this.indicativo === undefined || isNaN(this.indicativo)) {
                            yield this.mostrarAlerta('debe ingresar un indicativo valido');
                            this.emergencia['TelefonoContactoEmergencia'] = null;
                            this.indicativo = null;
                            return false;
                        }
                        if (this.emergencia['TelefonoContactoEmergencia'].length < 7) {
                            yield this.mostrarAlerta('debe ingresar un número de telefono valido');
                            this.emergencia['TelefonoContactoEmergencia'] = null;
                            this.indicativo = null;
                            return false;
                        }
                        this.emergencia['TelefonoContactoEmergencia'] = '60' + this.indicativo + this.emergencia['TelefonoContactoEmergencia'];
                        break;
                }
            }
            this.emergencia['ARL'] = 'Positiva Compañia de Seguros S.A';
            return true;
        });
    }
    guardarCasoEmergecia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let data = yield this.checkData();
                if (data) {
                    yield this.utilsService.presentLoading();
                    this.emergencia['Fk_Id_UsuarioSistema'] = this.user.idRegistro;
                    const { data, status } = yield this.infoEmergenciaService.saveInfoEmergencia(this.emergencia);
                    if (status !== 201) {
                        this.mostrarAlerta('No se pudo guardar la información de emergencia');
                    }
                    else {
                        this.mostrarAlerta('Se ha guardado la información para ser usada en caso de emergencias');
                        this.storageService.set('emergencia', this.emergencia);
                        this.storageService.set('emergencia-completa', true);
                        this.munuSSTService.changeMenuPlan(true);
                        this.hasChanges = false;
                        this.telelPhone();
                    }
                    this.utilsService.dismissLoading();
                }
            }
            catch (error) {
                console.error(error);
            }
            finally {
                this.utilsService.dismissLoading();
            }
        });
    }
    telelPhone() {
        if (this.emergencia['TelefonoContactoEmergencia'] !== null) {
            let tel = this.emergencia['TelefonoContactoEmergencia'];
            let emergenciaCopy = Object.assign({}, this.emergencia);
            if (tel.charAt(0) === '3') {
                this.telefono = 'celular';
            }
            if (tel.charAt(0) !== '3') {
                this.telefono = 'telefono';
                this.indicativo = tel.substring(2, 3);
                emergenciaCopy['TelefonoContactoEmergencia'] = tel.substring(3, tel.length);
            }
            this.emergencia = emergenciaCopy; // Asignar la copia a this.emergencia
        }
    }
    onlyLetters(inputValue) {
        console.log(inputValue);
        let ultmaLetra = inputValue.charAt(inputValue.length - 1);
        let isNumber = /\d/.test(ultmaLetra);
        if (isNumber) {
            inputValue = '';
        }
        return inputValue.replace(/[^a-zA-Zá-úÁ-Ú\s]/g, '');
    }
    letterOnly(event) {
        let char = event;
        console.log(JSON.stringify(char), 'char');
        let isNumber = /\d/.test(char);
        console.log(isNumber, 'isNumber');
        if (isNumber) {
            event = event.replace(/[^a-zA-Zá-úÁ-Ú\s]/g, '');
        }
    }
    numberOnlyMovil(inputValue) {
        let ultmaLetra = inputValue.charAt(inputValue.length - 1);
        let isNumber = /\d/.test(ultmaLetra);
        if (!isNumber) {
            inputValue = '';
        }
        return inputValue.replace(/[^0-9]/g, '');
    }
    changeTipoTelefono() {
        switch (this.telefono) {
            case 'celular':
                this.indicativo = null;
                this.emergencia['TelefonoContactoEmergencia'] = null;
                break;
            case 'telefono':
                this.emergencia['TelefonoContactoEmergencia'] = null;
                break;
        }
    }
    mostrarAlerta(message, header) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header || 'Alerta',
                message: message,
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => { },
                    },
                ],
            });
            alert.present();
        });
    }
    consultarDatosEmergencia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _this = this;
            var grupoSanguineo = "";
            var rh = "";
            var nombreContactoEmergencia = "";
            var numeroContacto = "";
            var alergias = "";
            var eps = "";
            var arl = "";
            let data = [];
            data["idUsuario"] = "";
            const url = this.context.getEnvUrl().call(null, 'empresa') + '/Emergencia/Consultar-Informacion-Emergencia-Usuario?idUsuario=' + sessionStorage.getItem("idUsuario");
            yield _capacitor_core__WEBPACK_IMPORTED_MODULE_9__["CapacitorHttp"].get({
                url: url,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            }).then(response => {
                if (response.status === 200) {
                    grupoSanguineo = response.data.GrupoSanguineo;
                    rh = response.data.Rh;
                    nombreContactoEmergencia = response.data.NombreContactoEmergencia;
                    numeroContacto = response.data.TelefonoContactoEmergencia;
                    alergias = response.data.CondicionesMedicas;
                    eps = response.data.EPS;
                    arl = response.data.ARL;
                    _this.emergencia = {
                        GrupoSanguineo: grupoSanguineo,
                        Rh: rh,
                        NombreContactoEmergencia: nombreContactoEmergencia,
                        TelefonoContactoEmergencia: numeroContacto,
                        CondicionesMedicas: alergias,
                        EPS: eps,
                        ARL: arl
                    };
                    _this.epsName = this.emergencia['EPS'];
                    _this.telelPhone();
                    this.infoEmergenciaService.getEPS().subscribe((response) => {
                        this.eps = response['EPS'];
                    });
                }
            });
        });
    }
};
DatosGeneralesRelacionLaboralPage.ctorParameters = () => [
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_2__["ContextService"] },
    { type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_3__["EmpresaService"] },
    { type: src_app_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_SST_menu_sstservice_service__WEBPACK_IMPORTED_MODULE_6__["MenuSSTService"] },
    { type: src_app_services_info_emergencia_service__WEBPACK_IMPORTED_MODULE_7__["InfoEmergenciaService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
];
DatosGeneralesRelacionLaboralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datos-generales-relacion-laboral',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./datos-generales-relacion-laboral.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./datos-generales-relacion-laboral.page.scss */ "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.page.scss")).default]
    })
], DatosGeneralesRelacionLaboralPage);



/***/ }),

/***/ "./src/app/services/info-emergencia.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/info-emergencia.service.ts ***!
  \*****************************************************/
/*! exports provided: InfoEmergenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoEmergenciaService", function() { return InfoEmergenciaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");





let InfoEmergenciaService = class InfoEmergenciaService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    saveInfoEmergencia(infoEmergencia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return new Promise((resolve, reject) => {
                    const url = this.context.getEnvUrl().call(null, 'empresa') + '/Emergencia/Guardar-Informacion-Emergencia-Usuario';
                    console.log(url, 'url');
                    console.log(infoEmergencia, 'infoEmergencia');
                    _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CapacitorHttp"].post({
                        url: url,
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                        },
                        data: infoEmergencia,
                    })
                        .then(response => {
                        console.log(response, 'response');
                        resolve({ data: response.data, status: response.status });
                    })
                        .catch(error => {
                        console.log(error, 'error');
                        reject({ data: error, status: 500 });
                    });
                });
            }
            catch (error) {
                return { data: error, status: 500 };
            }
        });
    }
    getEPS() {
        return this.http.get('/assets/data/eps.json');
    }
};
InfoEmergenciaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
InfoEmergenciaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], InfoEmergenciaService);



/***/ })

}]);
//# sourceMappingURL=datos-generales-relacion-laboral-datos-generales-relacion-laboral-module-es2015.js.map