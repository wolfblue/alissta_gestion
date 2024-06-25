(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-actos-condiciones-inseguras-actos-condiciones-inseguras-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-no-padding\" lines=\"none\">\n    <app-title-bar [title]=\"'ACTOS Y CONDICIONES INSEGURAS'\"\n      [imgUrl]=\"'assets/img/actos-condiciones-inseguras-light.png'\">\n    </app-title-bar>\n\n    <form [formGroup]=\"formGroup\">\n      <ion-item [class.invalid]=\"isSedeInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/empresa-nombre.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Sede</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"sedeFormControl\">\n          <ion-select-option *ngFor=\"let sede of sedes\" [value]=\"sede\">\n            {{sede.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isTipoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/tipo.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Tipo</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"tipoFormControl\">\n          <ion-select-option *ngFor=\"let tipo of tipos\" [value]=\"tipo\">\n            {{tipo.nombre}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isProcesoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/proceso.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Proceso</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"procesoFormControl\">\n          <ion-select-option *ngFor=\"let proceso of procesos\" [value]=\"proceso\">\n            {{proceso.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isLugarInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/direccion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Area O Lugar</span>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"lugarFormControl\"></ion-input>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isFechaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/fecha.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Fecha De Ocurrencia</span>\n        </ion-label>\n        <ion-datetime [(ngModel)]=\"fechaOcurrencia\" displayFormat=\"DD MMM YYYY\" min=\"{{getDate(WHICH_DATE_ENUM.MIN)}}\"\n          max=\"{{getDate(WHICH_DATE_ENUM.MAX)}}\" cancelText=\"Cancelar\" doneText=\"Hecho\"\n          formControlName=\"fechaFormControl\" [monthShortNames]=\"MONTH_SHORT_NAMES\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <h2>INFORMACIÓN DE LA CONDICIÓN O ACTO INSEGURO</h2>\n        <hr>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isDescripcionInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/descripcion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Descripción</span>\n        </ion-label>\n        <ion-textarea formControlName=\"descripcionFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isCausaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/causa.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Causa</span>\n        </ion-label>\n        <ion-textarea formControlName=\"causaFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isSugerenciaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/sugerencia.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Sugerencia</span>\n        </ion-label>\n        <ion-textarea formControlName=\"sugerenciaFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-item (click)=\"presentCameraGalleryActionSheet()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/camara.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          <span *ngIf=\"!imageSelected\">Evidencia</span>\n          <span class=\"font-black\" *ngIf=\"imageSelected\">Imagen Seleccionada</span>\n        </ion-label>\n      </ion-item>\n\n      <ion-button (click)=\"reportar()\">\n        Generar Reporte\n      </ion-button>\n    </form>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"opcion\" *ngIf=\"opcion\"></app-menu-operativo>\n</ion-footer>");

/***/ }),

/***/ "./src/app/entities/acto-condicion-insegura.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/acto-condicion-insegura.ts ***!
  \*****************************************************/
/*! exports provided: ActoCondicionInsegura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoCondicionInsegura", function() { return ActoCondicionInsegura; });
class ActoCondicionInsegura {
    constructor() { }
    get idTrabajador() {
        return this._idTrabajador;
    }
    set idTrabajador(idTrabajador) {
        this._idTrabajador = idTrabajador;
    }
    get idEmpresa() {
        return this._idEmpresa;
    }
    set idEmpresa(idEmpresa) {
        this._idEmpresa = idEmpresa;
    }
    get sede() {
        return this._sede;
    }
    set sede(sede) {
        this._sede = sede;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get proceso() {
        return this._proceso;
    }
    set proceso(proceso) {
        this._proceso = proceso;
    }
    get lugar() {
        return this._lugar;
    }
    set lugar(lugar) {
        this._lugar = lugar;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    get causa() {
        return this._causa;
    }
    set causa(causa) {
        this._causa = causa;
    }
    get sugerencia() {
        return this._sugerencia;
    }
    set sugerencia(sugerencia) {
        this._sugerencia = sugerencia;
    }
    get evidenciaImagePath() {
        return this._evidenciaImagePath;
    }
    set evidenciaImagePath(evidenciaImagePath) {
        this._evidenciaImagePath = evidenciaImagePath;
    }
    set imagen(imagen) {
        this._imagen = imagen;
    }
    toUrlSearchParams() {
        const params = new URLSearchParams();
        params.append('idSede', String(this._sede.id));
        params.append('idTipo', String(this._tipo.id));
        params.append('idProceso', String(this._proceso.id));
        params.append('lugar', this._lugar);
        params.append('descripcion', this._descripcion);
        params.append('causa', this._causa);
        params.append('sugerencia', this._sugerencia);
        params.append('evidencia', this._evidenciaImagePath);
        return params;
    }
    toJson() {
        return JSON.stringify({
            nitEmpresa: String(this.idEmpresa),
            cedulaQuienReporta: String(this.idTrabajador),
            sede: String(this._sede.id),
            tipo: String(this._tipo.id),
            proceso: this._proceso.id === undefined ? undefined : String(this._proceso.id),
            area: this._lugar,
            fechaOcurrencia: this._fecha.getFullYear() + '/' + (this._fecha.getMonth() + 1) + '/' + this._fecha.getDate(),
            descripcion: this._descripcion,
            causa: this._causa,
            sugerencia: this._sugerencia,
            imagen: this._imagen,
        });
    }
}


/***/ }),

/***/ "./src/app/entities/tipo.ts":
/*!**********************************!*\
  !*** ./src/app/entities/tipo.ts ***!
  \**********************************/
/*! exports provided: Tipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipo", function() { return Tipo; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Tipo extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.IdTipoReporte);
        this._nombre = json.DescripcionTipoReporte;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new Tipo(item));
    }
}


/***/ }),

/***/ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ActosCondicionesInsegurasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActosCondicionesInsegurasPageRoutingModule", function() { return ActosCondicionesInsegurasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _actos_condiciones_inseguras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actos-condiciones-inseguras.page */ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.ts");




const routes = [
    {
        path: '',
        component: _actos_condiciones_inseguras_page__WEBPACK_IMPORTED_MODULE_3__["ActosCondicionesInsegurasPage"]
    }
];
let ActosCondicionesInsegurasPageRoutingModule = class ActosCondicionesInsegurasPageRoutingModule {
};
ActosCondicionesInsegurasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActosCondicionesInsegurasPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActosCondicionesInsegurasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActosCondicionesInsegurasPageModule", function() { return ActosCondicionesInsegurasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _actos_condiciones_inseguras_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actos-condiciones-inseguras-routing.module */ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras-routing.module.ts");
/* harmony import */ var _actos_condiciones_inseguras_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actos-condiciones-inseguras.page */ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.ts");





let ActosCondicionesInsegurasPageModule = class ActosCondicionesInsegurasPageModule {
};
ActosCondicionesInsegurasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _actos_condiciones_inseguras_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActosCondicionesInsegurasPageRoutingModule"]
        ],
        declarations: [_actos_condiciones_inseguras_page__WEBPACK_IMPORTED_MODULE_4__["ActosCondicionesInsegurasPage"]]
    })
], ActosCondicionesInsegurasPageModule);



/***/ }),

/***/ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\n.list {\n  margin: 1px 0 7rem;\n}\nion-content ion-list form {\n  text-align: center;\n}\nion-content ion-list form ion-item {\n  background-color: inherit !important;\n}\nion-content ion-list form ion-item.ion-invalid, ion-content ion-list form ion-item.ion-valid {\n  --highlight-background: none;\n}\nion-content ion-list form ion-item ion-label img {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-list form ion-item ion-label span {\n  color: #96a0ac;\n  font-size: 16px;\n  margin-top: auto;\n  margin-bottom: auto;\n  white-space: break-spaces;\n}\nion-content ion-list form ion-item h2 {\n  white-space: pre-wrap;\n  text-align: center;\n  color: #ff7500;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n}\nion-content ion-list form button {\n  padding-bottom: 0.5rem;\n}\nion-content ion-list form button span img {\n  width: 4.5rem;\n}\n.button-camara {\n  margin: 16px auto;\n  display: block;\n  border-radius: 50%;\n  height: 100%;\n  width: 5.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.font-black {\n  color: black;\n}\nion-button {\n  margin: 30px 0;\n}\nion-item.sc-ion-textarea-md-h,\nion-item .sc-ion-textarea-md-h,\nion-item.sc-ion-textarea-ios-h,\nion-item .sc-ion-textarea-ios-h {\n  align-self: auto;\n  margin-top: 10px;\n}\nion-thumbnail.thumb {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0b3MtY29uZGljaW9uZXMtaW5zZWd1cmFzL2FjdG9zLWNvbmRpY2lvbmVzLWluc2VndXJhcy5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEVEY7QUNZQSx1Q0FBQTtBQTZEQTs7O0VBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRDlFRjtBQ2lGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0EsbUNBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLDhCQUFBO0FEbkZGO0FDc0ZBO0VBQ0UsaURBQUE7RUFDQSxtREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7QURuRkY7QUNzRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLHNDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLGlDQUFBO0VBRUEsaUNBQUE7RUFFQSw4QkFBQTtBRDNGRjtBQXpNQTtFQUNFLGtCQUFBO0FBNE1GO0FBdk1JO0VBQ0Usa0JBQUE7QUEwTU47QUF4TU07RUFDRSxvQ0FBQTtBQTBNUjtBQXhNUTtFQUVFLDRCQUFBO0FBeU1WO0FBck1VO0VBQ0UsYUNnRU87RUQvRFAsY0MrRE87QUR3SW5CO0FBcE1VO0VBQ0UsY0FBQTtFQUNBLGVDd0RBO0VEdkRBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXNNWjtBQWxNUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQW9NVjtBQWhNTTtFQUNFLHNCQUFBO0FBa01SO0FBL0xVO0VBQ0UsYUFBQTtBQWlNWjtBQXpMQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7QUE0TEY7QUF6TEE7RUFDRSxZQUFBO0FBNExGO0FBekxBO0VBQ0UsY0FBQTtBQTRMRjtBQXpMQTs7OztFQUlFLGdCQUFBO0VBQ0EsZ0JBQUE7QUE0TEY7QUF6TEE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQTRMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdG9zLWNvbmRpY2lvbmVzLWluc2VndXJhcy9hY3Rvcy1jb25kaWNpb25lcy1pbnNlZ3VyYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbjogMXB4IDAgN3JlbTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtLmlvbi1pbnZhbGlkLCBpb24tY29udGVudCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtLmlvbi12YWxpZCB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCBpbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzk2YTBhYztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSBoMiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmNzUwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gYnV0dG9uIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gYnV0dG9uIHNwYW4gaW1nIHtcbiAgd2lkdGg6IDQuNXJlbTtcbn1cblxuLmJ1dHRvbi1jYW1hcmEge1xuICBtYXJnaW46IDE2cHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNS41cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmZvbnQtYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLW1kLWgsXG5pb24taXRlbSAuc2MtaW9uLXRleHRhcmVhLW1kLWgsXG5pb24taXRlbS5zYy1pb24tdGV4dGFyZWEtaW9zLWgsXG5pb24taXRlbSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oIHtcbiAgYWxpZ24tc2VsZjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLXRodW1ibmFpbC50aHVtYiB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ActosCondicionesInsegurasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActosCondicionesInsegurasPage", function() { return ActosCondicionesInsegurasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_commons_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/locale */ "./src/app/commons/locale.ts");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_entities_acto_condicion_insegura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entities/acto-condicion-insegura */ "./src/app/entities/acto-condicion-insegura.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var src_app_entities_proceso__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/entities/proceso */ "./src/app/entities/proceso.ts");
/* harmony import */ var src_app_entities_sede__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/entities/sede */ "./src/app/entities/sede.ts");
/* harmony import */ var src_app_entities_tipo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/entities/tipo */ "./src/app/entities/tipo.ts");
/* harmony import */ var src_app_services_acto_condicion_insegura_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/acto-condicion-insegura.service */ "./src/app/services/acto-condicion-insegura.service.ts");
/* harmony import */ var src_app_services_camera_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/camera.service */ "./src/app/services/camera.service.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/empresa.service */ "./src/app/services/empresa.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @capacitor/camera */ "./node_modules/@capacitor/camera/dist/esm/index.js");

















var WHICH_DATE;
(function (WHICH_DATE) {
    WHICH_DATE[WHICH_DATE["MIN"] = 0] = "MIN";
    WHICH_DATE[WHICH_DATE["MAX"] = 1] = "MAX";
    WHICH_DATE[WHICH_DATE["NOW"] = 2] = "NOW";
})(WHICH_DATE || (WHICH_DATE = {}));
let ActosCondicionesInsegurasPage = class ActosCondicionesInsegurasPage {
    constructor(formBuilder, actionSheetCtrl, context, empresaService, cameraService, actoCondicionInseguraService, alertCtrl, utils) {
        this.formBuilder = formBuilder;
        this.actionSheetCtrl = actionSheetCtrl;
        this.context = context;
        this.empresaService = empresaService;
        this.cameraService = cameraService;
        this.actoCondicionInseguraService = actoCondicionInseguraService;
        this.alertCtrl = alertCtrl;
        this.utils = utils;
        this.WHICH_DATE_ENUM = WHICH_DATE;
        this.MONTH_SHORT_NAMES = src_app_commons_locale__WEBPACK_IMPORTED_MODULE_4__["MONTHS_SHORT"];
        this.imageSelected = false;
        this.submitAttempt = false;
        this.fechaOcurrencia = (new Date()).toISOString();
        this.actoCondicionInsegura = new src_app_entities_acto_condicion_insegura__WEBPACK_IMPORTED_MODULE_6__["ActoCondicionInsegura"]();
        this.compareEntities = src_app_entities_entity__WEBPACK_IMPORTED_MODULE_7__["Entity"].compare;
        this.formGroup = formBuilder.group({
            sedeFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tipoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            procesoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            lugarFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])],
            fechaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            descripcionFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)])],
            causaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)])],
            sugerenciaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)])]
        });
    }
    ngOnInit() {
        const getData = (nit) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.sedesSubscription = this.empresaService.getSedes(nit).subscribe((response) => {
                this.sedes = src_app_entities_sede__WEBPACK_IMPORTED_MODULE_9__["Sede"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
            yield this.utils.presentLoading();
            this.procesosSubscription = this.empresaService.getProcesos(nit).subscribe((response) => {
                this.procesos = src_app_entities_proceso__WEBPACK_IMPORTED_MODULE_8__["Proceso"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
            yield this.utils.presentLoading();
            this.tipoSubscription = this.actoCondicionInseguraService.getTipos().subscribe((response) => {
                this.tipos = src_app_entities_tipo__WEBPACK_IMPORTED_MODULE_10__["Tipo"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
        this.context.get().then(c => {
            const nit = c.empresa.id.toString();
            getData(nit);
        });
    }
    ionViewWillEnter() {
        this.opcion = 'unsafeConditions';
    }
    ionViewDidLeave() {
        this.opcion = undefined;
    }
    isSedeInvalid() {
        return !this.formGroup.controls.sedeFormControl.valid
            && this.submitAttempt;
    }
    isTipoInvalid() {
        return !this.formGroup.controls.tipoFormControl.valid
            && this.submitAttempt;
    }
    isProcesoInvalid() {
        return !this.formGroup.controls.procesoFormControl.valid
            && this.submitAttempt;
    }
    isLugarInvalid() {
        return !this.formGroup.controls.lugarFormControl.valid
            && this.submitAttempt;
    }
    isFechaInvalid() {
        return !this.formGroup.controls.fechaFormControl.valid
            && this.submitAttempt;
    }
    isDescripcionInvalid() {
        return !this.formGroup.controls.descripcionFormControl.valid
            && this.submitAttempt;
    }
    isCausaInvalid() {
        return !this.formGroup.controls.causaFormControl.valid
            && this.submitAttempt;
    }
    isSugerenciaInvalid() {
        return !this.formGroup.controls.sugerenciaFormControl.valid
            && this.submitAttempt;
    }
    presentCameraGalleryActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.takePicture();
            /*
            const actionSheet = await this.actionSheetCtrl.create({
              header: 'Seleccione una Opción',
              backdropDismiss: true,
              buttons: [
                {
                  text: 'Usar Cámara',
                  icon: '',
                  //handler: () => this.getPicture(PictureSourceType.CAMERA)
                  handler: () => this.takePicture()
                },
                {
                  text: 'Cargar Desde Galería',
                  icon: '',
                  handler: () => this.getPicture(PictureSourceType.PHOTOLIBRARY)
                }
              ]
            });
            await actionSheet.present();
            */
        });
    }
    getPicture(pictureSourceType) {
        this.cameraService.getPicture(pictureSourceType)
            .then((imgData) => {
            this.actoCondicionInsegura.evidenciaImagePath = imgData;
            this.imageSelected = true;
        })
            .catch((err) => this.imageSelected = false);
    }
    reportar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitAttempt = true;
            if (!this.formGroup.valid) {
                this.alert('Alerta', '', 'Los campos señalados son requeridos.');
                return;
            }
            //  Evidencia obligatoria
            if (this.imageSelected == false) {
                this.alert('Alerta', '', 'La evidencia es obligatoria para generar el reporte.');
                return;
            }
            yield this.utils.presentLoading();
            yield this.getDataFromInputs();
            this.actoCondicionInsegura.imagen = this.base64Img;
            console.log('Reportar: ' + JSON.stringify(this.actoCondicionInsegura));
            this.actoCondicionInseguraService.post(this.actoCondicionInsegura).subscribe((result) => {
                this.alert('Confirmación', '', 'Se ha generado el reporte exitosamente.');
                this.submitAttempt = false;
                this.formGroup.markAsPristine();
                this.cleanInputs();
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
    }
    getDate(whichDate) {
        const date = new Date();
        switch (whichDate) {
            case WHICH_DATE.MIN:
                return '' + (date.getFullYear() - 1);
            case WHICH_DATE.MAX:
            case WHICH_DATE.NOW:
                return date.getFullYear()
                    + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
                    + '-' + ('0' + date.getDate()).slice(-2);
        }
    }
    alert(title, subTitle, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                subHeader: subTitle,
                message,
                buttons: [
                    { text: 'Aceptar', role: 'null' }
                ],
                backdropDismiss: true
            });
            yield alert.present();
            return alert;
        });
    }
    getDataFromInputs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const c = yield this.context.get();
            this.actoCondicionInsegura.idEmpresa = c.empresa.id;
            this.actoCondicionInsegura.idTrabajador = c.trabajador.id;
            this.actoCondicionInsegura.causa = this.formGroup.controls.causaFormControl.value;
            this.actoCondicionInsegura.descripcion = this.formGroup.controls.descripcionFormControl.value;
            const fecha = this.fechaOcurrencia.split('T')[0].split('-');
            this.actoCondicionInsegura.fecha = new Date(parseInt(fecha[0], 10), parseInt(fecha[1], 10) - 1, parseInt(fecha[2], 10));
            this.actoCondicionInsegura.lugar = this.formGroup.controls.lugarFormControl.value;
            this.actoCondicionInsegura.proceso = this.formGroup.controls.procesoFormControl.value;
            this.actoCondicionInsegura.sede = this.formGroup.controls.sedeFormControl.value;
            this.actoCondicionInsegura.sugerencia = this.formGroup.controls.sugerenciaFormControl.value;
            this.actoCondicionInsegura.tipo = this.formGroup.controls.tipoFormControl.value;
        });
    }
    cleanInputs() {
        this.formGroup.controls.causaFormControl.setValue('');
        this.formGroup.controls.descripcionFormControl.setValue('');
        this.formGroup.controls.fechaFormControl.setValue('');
        this.formGroup.controls.lugarFormControl.setValue('');
        this.formGroup.controls.procesoFormControl.setValue('');
        this.formGroup.controls.sedeFormControl.setValue('');
        this.formGroup.controls.sugerenciaFormControl.setValue('');
        this.formGroup.controls.tipoFormControl.setValue('');
        this.imageSelected = false;
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__["Camera"].getPhoto({
                    quality: 90,
                    allowEditing: false,
                    resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__["CameraResultType"].Base64
                });
                this.base64Img = image.base64String;
                this.imageSelected = true;
                console.log('Evidencia: ' + JSON.stringify(this.base64Img));
            }
            catch (error) {
                console.error('Error al capturar la foto:', error);
            }
        });
    }
};
ActosCondicionesInsegurasPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__["ContextService"] },
    { type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_14__["EmpresaService"] },
    { type: src_app_services_camera_service__WEBPACK_IMPORTED_MODULE_12__["CameraService"] },
    { type: src_app_services_acto_condicion_insegura_service__WEBPACK_IMPORTED_MODULE_11__["ActoCondicionInseguraService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_15__["UtilsService"] }
];
ActosCondicionesInsegurasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actos-condiciones-inseguras',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./actos-condiciones-inseguras.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./actos-condiciones-inseguras.page.scss */ "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.page.scss")).default]
    })
], ActosCondicionesInsegurasPage);



/***/ }),

/***/ "./src/app/services/acto-condicion-insegura.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/acto-condicion-insegura.service.ts ***!
  \*************************************************************/
/*! exports provided: ActoCondicionInseguraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActoCondicionInseguraService", function() { return ActoCondicionInseguraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let ActoCondicionInseguraService = class ActoCondicionInseguraService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getTipos() {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/tipo-reporte';
        return this.http.get(url);
    }
    post(actoCondicionInsegura) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/guardar-reporte-app';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, actoCondicionInsegura.toJson(), { headers });
    }
};
ActoCondicionInseguraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
ActoCondicionInseguraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ActoCondicionInseguraService);



/***/ }),

/***/ "./src/app/services/camera.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/camera.service.ts ***!
  \********************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");



let CameraService = class CameraService {
    constructor(camera) {
        this.camera = camera;
    }
    cameraOptions(sourceType) {
        return {
            //  quality: 100,
            //  destinationType: this.camera.DestinationType.NATIVE_URI,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 480,
            targetHeight: 678,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: false,
            cameraDirection: this.camera.Direction.BACK
        };
    }
    getPicture(pictureSourceType) {
        return this.camera.getPicture(this.cameraOptions(pictureSourceType));
        /*
    
      // Get the data of an image
      this.camera.getPicture(options).then((imagePath) => {
        console.log(imagePath);
        // Special handling for Android library
        if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
              let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
              let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            });
        } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
      }, (err) => {
        console.log(err);
        this.presentToast('Error while selecting image.');
      });
      */
    }
};
CameraService.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] }
];
CameraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CameraService);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-actos-condiciones-inseguras-actos-condiciones-inseguras-module-es2015.js.map