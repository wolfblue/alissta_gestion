(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-riesgos-riesgos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/riesgos/riesgos.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/riesgos/riesgos.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content #content>\n  <ion-list class=\"ion-no-padding\" lines=\"none\">\n    <app-title-bar [title]=\"'PELIGROS Y RIESGOS'\" [imgUrl]=\"'assets/img/riesgos-light.png'\"></app-title-bar>\n\n    <form [formGroup]=\"formGroup\">\n      <ion-item [class.invalid]=\"isSedeInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/empresa-nombre.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Sede</span>\n        </ion-label>\n        <ion-select #select (ionChange)=\"onSedeChanged($event.detail.value)\" interface=\"action-sheet\"\n          [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"sedeFormControl\">\n          <ion-select-option *ngFor=\"let sede of sedes\" [value]=\"sede\">\n            {{sede.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isMetodologiaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/metodologia.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Metodología</span>\n        </ion-label>\n        <ion-select #select cancelText=\"Cancelar\" (ionChange)=\"onMetodologiaChanged($event.detail.value)\" interface=\"action-sheet\"\n          [compareWith]=\"compareEntities\" multiple=\"false\" formControlName=\"metodologiaFormControl\">\n          <ion-select-option *ngFor=\"let metodologia of metodologias\" [value]=\"metodologia\">\n            {{metodologia.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isProcesoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/proceso.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Proceso</span>\n        </ion-label>\n        <ion-select #select (ionChange)=\"onProcesoChanged($event.detail.value)\" interface=\"action-sheet\"\n          [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"procesoFormControl\">\n          <ion-select-option *ngFor=\"let proceso of procesos\" [value]=\"proceso\">\n            {{proceso.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isLugarInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/lugar.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Lugar</span>\n        </ion-label>\n        <ion-select #select (ionChange)=\"onLugarChanged($event.detail.value)\" interface=\"action-sheet\"\n          [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"lugarFormControl\">\n          <ion-select-option *ngFor=\"let lugar of lugares\" [value]=\"lugar\">\n            {{lugar.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isActividadInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/actividad.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Actividad</span>\n        </ion-label>\n        <ion-select #select (ionChange)=\"onActividadChanged($event.detail.value)\" interface=\"action-sheet\"\n          [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"actividadFormControl\">\n          <ion-select-option *ngFor=\"let actividad of actividades\" [value]=\"actividad\">\n            {{actividad.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </form>\n\n    <ion-spinner *ngIf=\"loadingPeligros\"></ion-spinner>\n\n    <ion-item *ngIf=\"showMessageNoData()\">\n      <h3>No existe información a su consulta.</h3>\n    </ion-item>\n\n    <ion-item id=\"pie-chart-scroll\" [class.hide]=\"hideItemPeligros()\">\n      <h2>PELIGROS IDENTIFICADOS</h2>\n      <hr>\n    </ion-item>\n\n    <ion-grid [class.hide-chart]=\"hideItemPeligros()\">\n      <ion-row>\n        <ion-col size=\"12\" sizeSm=\"12\" sizeMd=\"8\">\n          <div id=\"pie-chart\"></div>\n        </ion-col>\n\n        <ion-col class=\"col-legend\">\n          <div class=\"div-legend\">\n            <div *ngFor=\"let peligro of peligros; let i=index\" (click)=\"onPeligroLegendSelected(i)\">\n              <span class=\"span-legend-color\" [style.background-color]=\"colors[i]\"></span>\n              <span>{{peligro.nombre}}</span>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-spinner *ngIf=\"loadingRiesgos\"></ion-spinner>\n\n    <ion-item id=\"bar-chart-scroll\" [class.hide]=\"!showRiesgos\">\n      <h2>VALORACIÓN DEL RIESGO</h2>\n      <hr>\n    </ion-item>\n\n    <div id=\"bar-chart\" [class.hide-chart]=\"!showRiesgos\"></div>\n\n    <ion-spinner *ngIf=\"loadingDetalleRiesgos\"></ion-spinner>\n\n    <ion-item id=\"riesgo-detalles-scroll\" [class.hide]=\"!showRiesgoDetalles\">\n      <h2>DETALLES DE LA VALORACIÓN DEL RIESGO</h2>\n      <hr>\n    </ion-item>\n\n    <ion-item class=\"riesgo\" *ngFor=\"let riesgoDetalle of riesgoDetalles\" [class.hide]=\"!showRiesgoDetalles\">\n      <div>\n        <div class=\"div-img-text\">\n          <img src=\"assets/img/descripcion.png\">\n          <span><strong>Descripción:</strong> {{riesgoDetalle.descripcion}}</span>\n        </div>\n\n        <h3>Controles Existentes</h3>\n\n        <div class=\"div-img-text\">\n          <img src=\"assets/img/control-fuente.png\">\n          <span><strong>Fuente:</strong> {{riesgoDetalle.controlFuente}}</span>\n        </div>\n\n        <div class=\"div-img-text\">\n          <img src=\"assets/img/control-medio.png\">\n          <span><strong>Medio:</strong> {{riesgoDetalle.controlMedio}}</span>\n        </div>\n\n        <div class=\"div-img-text\">\n          <img src=\"assets/img/control-individuo.png\">\n          <span><strong>Individuo:</strong> {{riesgoDetalle.controlIndividuo}}</span>\n        </div>\n\n        <hr>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" [class.hide]=\"!showScrollButton()\">\n    <ion-fab-button size=\"small\" (click)=\"scrollTo()\">\n      <ion-icon name=\"arrow-down\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"opcion\" *ngIf=\"opcion\"></app-menu-operativo>\n</ion-footer>");

/***/ }),

/***/ "./src/app/entities/actividad.ts":
/*!***************************************!*\
  !*** ./src/app/entities/actividad.ts ***!
  \***************************************/
/*! exports provided: Actividad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actividad", function() { return Actividad; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Actividad extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super();
        this._nombre = json.descripcionProceso;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.reduce((acc, curr, currIndex) => {
            const actividad = new Actividad(curr);
            actividad.id = currIndex;
            return acc.concat(actividad);
        }, []);
    }
}


/***/ }),

/***/ "./src/app/entities/lugar.ts":
/*!***********************************!*\
  !*** ./src/app/entities/lugar.ts ***!
  \***********************************/
/*! exports provided: Lugar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lugar", function() { return Lugar; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Lugar extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super();
        this._nombre = json.Descripcion_ZonaLugar;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.reduce((acc, curr, currIndex) => {
            const lugar = new Lugar(curr);
            lugar.id = currIndex;
            return acc.concat(lugar);
        }, []);
    }
}


/***/ }),

/***/ "./src/app/entities/metodologia.ts":
/*!*****************************************!*\
  !*** ./src/app/entities/metodologia.ts ***!
  \*****************************************/
/*! exports provided: Metodologia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metodologia", function() { return Metodologia; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Metodologia extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.PK_Metodologia);
        this._nombre = json.Descripcion_Metodologia;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new Metodologia(item));
    }
}


/***/ }),

/***/ "./src/app/entities/peligro.ts":
/*!*************************************!*\
  !*** ./src/app/entities/peligro.ts ***!
  \*************************************/
/*! exports provided: Peligro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Peligro", function() { return Peligro; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Peligro extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.idClasificacionPeligro);
        this._nombre = json.descripcionClasificacion;
        this._cantidad = +json.cantidadDeClasifiacion;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    static parse(json) {
        return json.map((item) => new Peligro(item));
    }
}


/***/ }),

/***/ "./src/app/entities/riesgo-detalle.ts":
/*!********************************************!*\
  !*** ./src/app/entities/riesgo-detalle.ts ***!
  \********************************************/
/*! exports provided: RiesgoDetalle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiesgoDetalle", function() { return RiesgoDetalle; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class RiesgoDetalle extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super();
        this._descripcion = json.Descripcion;
        this._controlFuente = json.Crtl_Exist_Fuente;
        this._controlMedio = json.Crtl_Exist_Medio;
        this._controlIndividuo = json.Crtl_Exist_Individuo;
    }
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    get controlFuente() {
        return this._controlFuente;
    }
    set controlFuente(controlFuente) {
        this._controlFuente = controlFuente;
    }
    get controlMedio() {
        return this._controlMedio;
    }
    set controlMedio(controlMedio) {
        this._controlMedio = controlMedio;
    }
    get controlIndividuo() {
        return this._controlIndividuo;
    }
    set controlIndividuo(controlIndividuo) {
        this._controlIndividuo = controlIndividuo;
    }
    static parse(json) {
        return json.map((item) => new RiesgoDetalle(item));
    }
}


/***/ }),

/***/ "./src/app/entities/riesgo.ts":
/*!************************************!*\
  !*** ./src/app/entities/riesgo.ts ***!
  \************************************/
/*! exports provided: Riesgo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Riesgo", function() { return Riesgo; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Riesgo extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super();
        this._nombre = json.InterpretacionRiesgos;
        this._cantidad = json.totalInterpretacion;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    static parse(json) {
        return json.map((item) => new Riesgo(item));
    }
}


/***/ }),

/***/ "./src/app/pages/riesgos/riesgos-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/riesgos/riesgos-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RiesgosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiesgosPageRoutingModule", function() { return RiesgosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _riesgos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riesgos.page */ "./src/app/pages/riesgos/riesgos.page.ts");




const routes = [
    {
        path: '',
        component: _riesgos_page__WEBPACK_IMPORTED_MODULE_3__["RiesgosPage"]
    }
];
let RiesgosPageRoutingModule = class RiesgosPageRoutingModule {
};
RiesgosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RiesgosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/riesgos/riesgos.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/riesgos/riesgos.module.ts ***!
  \*************************************************/
/*! exports provided: RiesgosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiesgosPageModule", function() { return RiesgosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _riesgos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riesgos-routing.module */ "./src/app/pages/riesgos/riesgos-routing.module.ts");
/* harmony import */ var _riesgos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./riesgos.page */ "./src/app/pages/riesgos/riesgos.page.ts");





let RiesgosPageModule = class RiesgosPageModule {
};
RiesgosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _riesgos_routing_module__WEBPACK_IMPORTED_MODULE_3__["RiesgosPageRoutingModule"]
        ],
        declarations: [_riesgos_page__WEBPACK_IMPORTED_MODULE_4__["RiesgosPage"]]
    })
], RiesgosPageModule);



/***/ }),

/***/ "./src/app/pages/riesgos/riesgos.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/riesgos/riesgos.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\n.list {\n  margin: 1px 0 10rem;\n}\nion-content ion-list form ion-item ion-label img {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-list form ion-item ion-label span {\n  margin-top: auto;\n  margin-bottom: auto;\n  white-space: break-spaces;\n}\nion-content ion-list ion-spinner {\n  margin: 3rem auto;\n  display: inherit;\n}\nion-content ion-list div div div {\n  margin: 0 auto;\n}\nion-content ion-list ion-item.riesgo:not(:last-child) {\n  margin-bottom: 3rem;\n}\nion-content ion-list ion-item.riesgo > div {\n  width: 100%;\n}\nion-content ion-list ion-item div img {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n}\nion-content ion-list ion-item div span {\n  font-weight: 400;\n  font-size: 16px;\n  color: #96a0ac;\n  white-space: pre-line;\n  text-align: justify;\n  margin-top: auto;\n  margin-bottom: auto;\n}\nion-content ion-list ion-item div span strong {\n  font-weight: 500;\n  color: black;\n}\nion-content ion-list ion-item h2 {\n  white-space: pre-wrap;\n  text-align: center;\n  color: #ff7500;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n}\nion-content ion-list ion-item h3 {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  font-style: italic;\n  display: table;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n}\n.col-legend {\n  display: flex;\n  align-items: center;\n}\n.div-legend {\n  margin: 0 auto;\n  color: #96a0ac;\n  text-align: justify;\n}\n.span-legend-color {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: inline-block;\n  border-radius: 50%;\n}\n#pie-chart {\n  margin-left: -10px;\n}\n#bar-chart {\n  margin-left: 0.4rem;\n}\n.hide {\n  display: none;\n}\n.hide-chart {\n  visibility: hidden;\n}\nion-thumbnail.thumb {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmllc2dvcy9yaWVzZ29zLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEIsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURURjtBQ1lBLHVDQUFBO0FBNkRBOzs7RUFBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEOUVGO0FDaUZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsOEJBQUE7QURuRkY7QUNzRkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRG5GRjtBQ3NGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsaUNBQUE7RUFFQSxpQ0FBQTtFQUVBLDhCQUFBO0FEM0ZGO0FBeE1BO0VBQ0UsbUJBQUE7QUEyTUY7QUFuTVU7RUFDRSxhQ3dFTztFRHZFUCxjQ3VFTztBRCtIbkI7QUFuTVU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFxTVo7QUEvTEk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBaU1OO0FBNUxRO0VBQ0UsY0FBQTtBQThMVjtBQXZMUTtFQUNFLG1CQUFBO0FBeUxWO0FBdExRO0VBQ0UsV0FBQTtBQXdMVjtBQW5MUTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUFxTFY7QUFsTFE7RUFDRSxnQkMyQkk7RUQxQkosZUN5QkU7RUR4QkYsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBb0xWO0FBbExVO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBb0xaO0FBL0tNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBaUxSO0FBOUtNO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFnTFI7QUExS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUE2S0Y7QUExS0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBNktGO0FBMUtBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBNktGO0FBMUtBO0VBQ0Usa0JBQUE7QUE2S0Y7QUExS0E7RUFDRSxtQkFBQTtBQTZLRjtBQTFLQTtFQUNFLGFBQUE7QUE2S0Y7QUExS0E7RUFDRSxrQkFBQTtBQTZLRjtBQTFLQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBNktGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmllc2dvcy9yaWVzZ29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuLyoqIFZhcmlhYmxlcyBkZSBsYSB2ZXJzacOzbiBhbnRlcmlvciAqKi9cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xufVxuXG4uaW9zIGJvZHkuZGFyayBpb24tbW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW46IDFweCAwIDEwcmVtO1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCBpbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLXNwaW5uZXIge1xuICBtYXJnaW46IDNyZW0gYXV0bztcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGRpdiBkaXYgZGl2IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbS5yaWVzZ286bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbS5yaWVzZ28gPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGRpdiBpbWcge1xuICB3aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBkaXYgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5NmEwYWM7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGRpdiBzcGFuIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGgyIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmY3NTAwO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaDMge1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1sZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGl2LWxlZ2VuZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogIzk2YTBhYztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNwYW4tbGVnZW5kLWNvbG9yIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jcGllLWNoYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4jYmFyLWNoYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZS1jaGFydCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuaW9uLXRodW1ibmFpbC50aHVtYiB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/riesgos/riesgos.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/riesgos/riesgos.page.ts ***!
  \***********************************************/
/*! exports provided: RiesgosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiesgosPage", function() { return RiesgosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_entities_actividad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/actividad */ "./src/app/entities/actividad.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var src_app_entities_lugar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entities/lugar */ "./src/app/entities/lugar.ts");
/* harmony import */ var src_app_entities_metodologia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/entities/metodologia */ "./src/app/entities/metodologia.ts");
/* harmony import */ var src_app_entities_peligro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/entities/peligro */ "./src/app/entities/peligro.ts");
/* harmony import */ var src_app_entities_proceso__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/entities/proceso */ "./src/app/entities/proceso.ts");
/* harmony import */ var src_app_entities_riesgo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/entities/riesgo */ "./src/app/entities/riesgo.ts");
/* harmony import */ var src_app_entities_riesgo_detalle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/entities/riesgo-detalle */ "./src/app/entities/riesgo-detalle.ts");
/* harmony import */ var src_app_entities_sede__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/entities/sede */ "./src/app/entities/sede.ts");
/* harmony import */ var src_app_services_actividad_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/actividad.service */ "./src/app/services/actividad.service.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/empresa.service */ "./src/app/services/empresa.service.ts");
/* harmony import */ var src_app_services_lugar_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/lugar.service */ "./src/app/services/lugar.service.ts");
/* harmony import */ var src_app_services_metodologia_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/metodologia.service */ "./src/app/services/metodologia.service.ts");
/* harmony import */ var src_app_services_peligro_riesgo_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/peligro-riesgo.service */ "./src/app/services/peligro-riesgo.service.ts");
/* harmony import */ var src_app_services_proceso_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/proceso.service */ "./src/app/services/proceso.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");






















let RiesgosPage = class RiesgosPage {
    constructor(formBuilder, context, empresaService, metodologiaService, procesoService, lugarService, actividadService, peligroRiesgoService, platform, alertCtrl, utils) {
        this.formBuilder = formBuilder;
        this.context = context;
        this.empresaService = empresaService;
        this.metodologiaService = metodologiaService;
        this.procesoService = procesoService;
        this.lugarService = lugarService;
        this.actividadService = actividadService;
        this.peligroRiesgoService = peligroRiesgoService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.utils = utils;
        this.colors = [
            '#3366cc',
            '#dc3912',
            '#ff9900',
            '#109618',
            '#990099',
            '#0099c6',
            '#dd4477',
            '#66aa00',
            '#b82e2e',
            '#316395',
            '#3366cc',
            '#994499',
            '#22aa99',
            '#aaaa11',
            '#6633cc',
            '#e67300',
            '#8b0707',
            '#651067',
            '#329262',
            '#5574a6',
            '#3b3eac',
            '#b77322',
            '#16d620',
            '#b91383',
            '#f4359e',
            '#9c5935',
            '#a9c413',
            '#2a778d',
            '#668d1c',
            '#bea413',
            '#0c5922',
            '#743411'
        ];
        this._showScrollButton = false;
        this.indexPeligroSelected = -1;
        this.indexRiesgoSelected = -1;
        this.showPeligros = false;
        this.showRiesgos = false;
        this.showRiesgoDetalles = false;
        this.compareEntities = src_app_entities_entity__WEBPACK_IMPORTED_MODULE_6__["Entity"].compare;
        this.submitAttempt = false;
        this.formGroup = formBuilder.group({
            sedeFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            metodologiaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            procesoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            lugarFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            actividadFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])]
        });
        this.chartSize = this.getChartSize();
    }
    ngOnInit() {
        const getData = (nit) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.sedesSubscription = this.empresaService.getSedes(nit).subscribe((response) => {
                this.sedes = src_app_entities_sede__WEBPACK_IMPORTED_MODULE_13__["Sede"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
        this.context.get().then(c => {
            const nit = c.empresa.id.toString();
            getData(nit);
        });
    }
    ionViewWillEnter() {
        this.opcion = 'risks';
    }
    ionViewDidLeave() {
        this.opcion = undefined;
    }
    onSedeChanged(sede) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showItems(false, false, false);
            this.formGroup.controls.metodologiaFormControl.setValue('');
            this.formGroup.controls.procesoFormControl.setValue('');
            this.formGroup.controls.lugarFormControl.setValue('');
            this.formGroup.controls.actividadFormControl.setValue('');
            this.metodologias = [];
            this.procesos = [];
            this.lugares = [];
            this.actividades = [];
            yield this.utils.presentLoading();
            this.metodologiasSubscription = this.metodologiaService.getMetodologiasBySede(sede.id)
                .subscribe((response) => {
                this.metodologias = src_app_entities_metodologia__WEBPACK_IMPORTED_MODULE_8__["Metodologia"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
    }
    onMetodologiaChanged(metodologia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!metodologia) {
                return;
            }
            this.formGroup.controls.procesoFormControl.setValue('');
            this.formGroup.controls.lugarFormControl.setValue('');
            this.formGroup.controls.actividadFormControl.setValue('');
            this.procesos = [];
            this.lugares = [];
            this.actividades = [];
            this.subscribeToDrawPeligros(this.getIdSede(), metodologia.id);
            yield this.utils.presentLoading();
            this.procesosSubscription = this.procesoService
                .getProcesosBySedeMetodologia(this.getIdSede(), metodologia.id).subscribe((response) => {
                this.procesos = src_app_entities_proceso__WEBPACK_IMPORTED_MODULE_10__["Proceso"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
    }
    onProcesoChanged(proceso) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!proceso) {
                return;
            }
            this.formGroup.controls.lugarFormControl.setValue('');
            this.formGroup.controls.actividadFormControl.setValue('');
            this.lugares = [];
            this.actividades = [];
            this.subscribeToDrawPeligros(this.getIdSede(), this.getIdMetodologia(), proceso.id);
            yield this.utils.presentLoading();
            this.lugaresSubscription = this.lugarService
                .getLugares(this.getIdSede(), this.getIdMetodologia(), proceso.id).subscribe((response) => {
                this.lugares = src_app_entities_lugar__WEBPACK_IMPORTED_MODULE_7__["Lugar"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
    }
    onLugarChanged(lugar) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!lugar) {
                return;
            }
            this.formGroup.controls.actividadFormControl.setValue('');
            this.actividades = [];
            this.subscribeToDrawPeligros(this.getIdSede(), this.getIdMetodologia(), this.getIdProceso(), lugar.nombre);
            yield this.utils.presentLoading();
            this.actividadesSubscription = this.actividadService
                .getActividades(this.getIdSede(), this.getIdMetodologia(), this.getIdProceso(), lugar.nombre)
                .subscribe((response) => {
                this.actividades = src_app_entities_actividad__WEBPACK_IMPORTED_MODULE_5__["Actividad"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
    }
    onActividadChanged(actividad) {
        if (!actividad) {
            return;
        }
        this.subscribeToDrawPeligros(this.getIdSede(), this.getIdMetodologia(), this.getIdProceso(), this.getLugar(), actividad.nombre);
    }
    subscribeToDrawPeligros(idSede, idMetodologia, idProceso, lugar, actividad) {
        this.showItems(false, false, false);
        this.loadingPeligros = true;
        this.peligrosSubscription = this.peligroRiesgoService
            .getPeligrosIdentificados(idSede, idMetodologia, idProceso, lugar, actividad)
            .subscribe((response) => {
            this.peligros = src_app_entities_peligro__WEBPACK_IMPORTED_MODULE_9__["Peligro"].parse(response);
            const totalPeligros = this.peligros.reduce((acc, peligro) => acc + peligro.cantidad, 0);
            const peligrosDataTable = new google.visualization.DataTable();
            peligrosDataTable.addColumn('string', 'Peligros');
            peligrosDataTable.addColumn('number', 'Cantidad');
            peligrosDataTable.addColumn({ type: 'string', role: 'tooltip' });
            peligrosDataTable.addRows(this.peligros.map((peligro) => {
                const porcentaje = peligro.cantidad / totalPeligros;
                const tooltip = peligro.nombre
                    + '\n' + peligro.cantidad
                    + ' (' + (100 * porcentaje).toFixed(1) + '%)';
                return [peligro.nombre, peligro.cantidad, tooltip];
            }));
            this.drawPeligros(peligrosDataTable);
        }, (error) => {
            Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
            this.loadingPeligros = false;
        });
    }
    drawPeligros(dataTable) {
        this.loadingPeligros = false;
        this.showItems(true, false, false);
        this.peligrosChart = new google.visualization
            .PieChart(document.getElementById('pie-chart'));
        this.peligrosChart.draw(dataTable, this.pieOptions());
        google.visualization.events.addListener(this.peligrosChart, 'select', this.onPeligroSelected.bind(this));
        this._showScrollButton = true;
        this._scrollTo = 'pie-chart-scroll';
    }
    onPeligroSelected() {
        this.loadingRiesgos = true;
        this.riesgosSubscription = this.peligroRiesgoService
            .getValoracionRiesgos(this.getIdSede(), this.getIdMetodologia(), this.getIdPeligro())
            .subscribe((response) => {
            this.riesgos = src_app_entities_riesgo__WEBPACK_IMPORTED_MODULE_11__["Riesgo"].parse(response);
            const totalRiesgos = this.riesgos.reduce((acc, riesgo) => acc + riesgo.cantidad, 0);
            const riesgosDataTable = new google.visualization.DataTable();
            riesgosDataTable.addColumn('string', 'Riesgos');
            riesgosDataTable.addColumn('number', 'Porcentaje');
            riesgosDataTable.addColumn({ type: 'string', role: 'tooltip' });
            riesgosDataTable.addRows(this.riesgos.map((riesgo) => {
                const porcentaje = riesgo.cantidad / totalRiesgos;
                const tooltip = riesgo.nombre + '\n' + Math.round(100 * porcentaje) + '%';
                return [riesgo.nombre, porcentaje, tooltip];
            }));
            this.drawRiesgos(riesgosDataTable);
        }, (error) => {
            Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
            this.loadingRiesgos = false;
        });
    }
    onPeligroLegendSelected(index) {
        this.peligrosChart.setSelection([{ column: null, row: index }]);
        this.onPeligroSelected();
    }
    drawRiesgos(riesgosDataTable) {
        this.loadingRiesgos = false;
        this.showItems(true, true, false);
        this.riesgosChart = new google.visualization
            .BarChart(document.getElementById('bar-chart'));
        this.riesgosChart.draw(riesgosDataTable, this.barOptions());
        google.visualization.events.addListener(this.riesgosChart, 'select', this.onRiesgoSelected.bind(this));
        this._showScrollButton = true;
        this._scrollTo = 'bar-chart-scroll';
    }
    onRiesgoSelected() {
        this.showItems(true, true, false);
        this.loadingDetalleRiesgos = true;
        this.riesgoDetalleSubscription = this.peligroRiesgoService
            .getDetalleValoracionRiesgo(this.getIdSede(), this.getIdMetodologia(), this.getIdPeligro(), this.getNombreRiesgo())
            .subscribe((response) => {
            this.riesgoDetalles = src_app_entities_riesgo_detalle__WEBPACK_IMPORTED_MODULE_12__["RiesgoDetalle"].parse(response);
            this.loadingDetalleRiesgos = false;
            this.showItems(true, true, true);
            this._showScrollButton = true;
            this._scrollTo = 'riesgo-detalles-scroll';
        }, (error) => {
            Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_4__["alertCommunicationError"])(this.alertCtrl);
            this.loadingDetalleRiesgos = false;
        });
    }
    pieOptions() {
        return {
            colors: this.colors,
            chartArea: {
                width: '80%',
                height: '80%',
                top: 12
            },
            height: this.chartSize,
            fontName: 'Roboto',
            fontSize: 14,
            legend: {
                position: 'none'
            },
            pieHole: 0.4,
            tooltip: {
                textStyle: {
                    fontSize: 13,
                    fontName: 'Roboto'
                },
                trigger: 'selection'
            },
            width: this.chartSize
        };
    }
    barOptions() {
        const title = this.peligros[this.indexPeligroSelected].nombre;
        return {
            animation: {
                startup: true,
                duration: 1000,
                easing: 'out'
            },
            chartArea: {
                // width: '65%',
                right: 40
            },
            colors: [this.colors[this.indexPeligroSelected]],
            fontName: 'Roboto',
            fontSize: 14,
            legend: {
                position: 'none'
            },
            hAxis: {
                format: '##%',
                textStyle: {
                    color: '#96a0ac'
                },
                minValue: 0,
                maxValue: 1
            },
            title,
            titleTextStyle: {
                fontName: 'Roboto',
                italic: true,
                fontSize: 16
            },
            tooltip: {
                textStyle: {
                    fontSize: 13,
                    fontName: 'Roboto'
                },
                isHtml: false,
            },
            vAxis: {
                textStyle: {
                    color: '#96a0ac'
                },
                showTextEvery: 0
            },
            width: this.chartSize
        };
    }
    getChartSize() {
        return Math.min(this.platform.width(), this.platform.height(), 500);
    }
    isSedeInvalid() {
        return !this.formGroup.controls.sedeFormControl.valid
            && this.submitAttempt;
    }
    isMetodologiaInvalid() {
        return !this.formGroup.controls.metodologiaFormControl.valid
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
    isActividadInvalid() {
        return !this.formGroup.controls.actividadFormControl.valid
            && this.submitAttempt;
    }
    scrollTo() {
        this._showScrollButton = false;
        const htmlElement = this.content.nativeElement;
        const element = htmlElement.querySelector('#' + this._scrollTo);
        element.scrollIntoView();
    }
    showItems(peligros, riesgos, riesgoDetalles) {
        this.showRiesgoDetalles = riesgoDetalles;
        this.showRiesgos = riesgos;
        this.showPeligros = peligros;
    }
    hideItemPeligros() {
        return !this.showPeligros || this.showMessageNoData();
    }
    showMessageNoData() {
        return this.peligros !== undefined && this.peligros.length === 0;
    }
    showScrollButton() {
        return !this.showMessageNoData() && this._showScrollButton;
    }
    isLoadingPeligros() {
        return this.peligros === undefined;
    }
    getIdSede() { return this.formGroup.controls.sedeFormControl.value.id; }
    getIdMetodologia() { return this.formGroup.controls.metodologiaFormControl.value.id; }
    getIdProceso() { return this.formGroup.controls.procesoFormControl.value.id; }
    getLugar() { return this.formGroup.controls.lugarFormControl.value.nombre; }
    getActividad() { return this.formGroup.controls.actividadFormControl.value.nombre; }
    getIdPeligro() {
        if (this.peligrosChart.getSelection()[0]) {
            this.indexPeligroSelected = this.peligrosChart.getSelection()[0].row;
        }
        return this.peligros[this.indexPeligroSelected].id;
    }
    getNombreRiesgo() {
        if (this.riesgosChart.getSelection()[0]) {
            this.indexRiesgoSelected = this.riesgosChart.getSelection()[0].row;
        }
        return this.riesgos[this.indexRiesgoSelected].nombre;
    }
};
RiesgosPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_15__["ContextService"] },
    { type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_16__["EmpresaService"] },
    { type: src_app_services_metodologia_service__WEBPACK_IMPORTED_MODULE_18__["MetodologiaService"] },
    { type: src_app_services_proceso_service__WEBPACK_IMPORTED_MODULE_20__["ProcesoService"] },
    { type: src_app_services_lugar_service__WEBPACK_IMPORTED_MODULE_17__["LugarService"] },
    { type: src_app_services_actividad_service__WEBPACK_IMPORTED_MODULE_14__["ActividadService"] },
    { type: src_app_services_peligro_riesgo_service__WEBPACK_IMPORTED_MODULE_19__["PeligroRiesgoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_21__["UtilsService"] }
];
RiesgosPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }]
};
RiesgosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-riesgos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./riesgos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/riesgos/riesgos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./riesgos.page.scss */ "./src/app/pages/riesgos/riesgos.page.scss")).default]
    })
], RiesgosPage);



/***/ }),

/***/ "./src/app/services/actividad.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/actividad.service.ts ***!
  \***********************************************/
/*! exports provided: ActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadService", function() { return ActividadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let ActividadService = class ActividadService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getActividades(idSede, idMetodologia, idProceso, lugar) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/actividades-metodologia'
            + '?id_Sede=' + idSede
            + '&idMetodologia=' + idMetodologia
            + '&id_Proceso=' + idProceso
            + '&zonaLugar=' + lugar;
        return this.http.get(url);
    }
};
ActividadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
ActividadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ActividadService);



/***/ }),

/***/ "./src/app/services/lugar.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/lugar.service.ts ***!
  \*******************************************/
/*! exports provided: LugarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LugarService", function() { return LugarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let LugarService = class LugarService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getLugares(idSede, idMetodologia, idProceso) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/zona-lugar'
            + '?id_Sede=' + idSede
            + '&idMetodologia=' + idMetodologia
            + '&id_Proceso=' + idProceso;
        return this.http.get(url);
    }
};
LugarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
LugarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LugarService);



/***/ }),

/***/ "./src/app/services/metodologia.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/metodologia.service.ts ***!
  \*************************************************/
/*! exports provided: MetodologiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodologiaService", function() { return MetodologiaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let MetodologiaService = class MetodologiaService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getMetodologiasBySede(idSede) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/metodologiasPorSede'
            + '?id_Sede=' + idSede;
        return this.http.get(url);
    }
};
MetodologiaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
MetodologiaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MetodologiaService);



/***/ }),

/***/ "./src/app/services/peligro-riesgo.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/peligro-riesgo.service.ts ***!
  \****************************************************/
/*! exports provided: PeligroRiesgoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeligroRiesgoService", function() { return PeligroRiesgoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let PeligroRiesgoService = class PeligroRiesgoService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getPeligrosIdentificados(idSede, idMetodologia, idProceso, lugar, actividad) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/peligros-identificados-filtro'
            + '?id_Sede=' + idSede
            + '&idMetodologia=' + idMetodologia
            + ((idProceso === undefined) ? '' : '&id_Proceso=' + idProceso)
            + ((lugar === undefined) ? '' : '&zonaLugar=' + lugar)
            + ((actividad === undefined) ? '' : '&actividad=' + actividad);
        return this.http.get(url);
    }
    getValoracionRiesgos(idSede, idMetodologia, idPeligro) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/valoracion-de-riesgos'
            + '?id_Sede=' + idSede
            + '&idMetodologia=' + idMetodologia
            + '&idTipoPeligro=' + idPeligro;
        return this.http.get(url);
    }
    getDetalleValoracionRiesgo(idSede, idMetodologia, idPeligro, riesgo) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/detalle-valoracion-de-riesgos'
            + '?id_Sede=' + idSede
            + '&idMetodologia=' + idMetodologia
            + '&idTipoPeligro=' + idPeligro
            + '&intepretacionRiesgo=' + riesgo;
        return this.http.get(url);
    }
};
PeligroRiesgoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
PeligroRiesgoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PeligroRiesgoService);



/***/ }),

/***/ "./src/app/services/proceso.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/proceso.service.ts ***!
  \*********************************************/
/*! exports provided: ProcesoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcesoService", function() { return ProcesoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let ProcesoService = class ProcesoService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getProcesosByNit(nit) {
        const url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/empresa-procesos?NIT=' + nit;
        return this.http.get(url);
    }
    getProcesosBySedeMetodologia(idSede, idMetodologia) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/Procesos-Metodologia'
            + '?id_Sede=' + idSede
            + '&idMetodologia=' + idMetodologia;
        return this.http.get(url);
    }
};
ProcesoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
ProcesoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProcesoService);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-riesgos-riesgos-module-es2015.js.map