(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-incidentes-incidentes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidentes/incidentes.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidentes/incidentes.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-no-padding\" lines=\"none\">\n    <app-title-bar [title]=\"'REPORTE DE INCIDENTES'\" [imgUrl]=\"'assets/img/incidentes-light.png'\"></app-title-bar>\n\n    <form [formGroup]=\"formGroup\">\n      <ion-item>\n        <h2>SEDE DONDE LABORA EL TRABAJADOR</h2>\n        <hr>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isSedeInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/empresa-nombre.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Sede</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"sedeFormControl\">\n\n          <ion-spinner *ngIf=\"!sedes\"></ion-spinner>\n\n          <ion-select-option *ngFor=\"let sede of sedes\" [value]=\"sede\">\n            {{sede.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isVinculacionLaboralInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/cargo.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Vinculación Laboral</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"vinculacionLaboralFormControl\">\n          <ion-select-option *ngFor=\"let vinculacionLaboral of vinculacionesLaborales\" [value]=\"vinculacionLaboral\">\n            {{vinculacionLaboral.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isZonaTrabajadorInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/lugar.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Zona</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"zonaTrabajadorFormControl\">\n          <ion-select-option *ngFor=\"let zonaTrabajador of zonas\" [value]=\"zonaTrabajador\">\n            {{zonaTrabajador.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isJornadaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/jornada.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Jornada</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"jornadaFormControl\">\n          <ion-select-option *ngFor=\"let jornada of jornadas\" [value]=\"jornada\">\n            {{jornada.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <h2>INFORMACIÓN DEL INCIDENTE</h2>\n        <hr>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isFechaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/fecha.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Fecha</span>\n        </ion-label>\n        <ion-datetime [(ngModel)]=\"fechaOcurrencia\" displayFormat=\"DD MMM YYYY\" min=\"{{getDate(WHICH_DATE_ENUM.MIN)}}\"\n          max=\"{{getDate(WHICH_DATE_ENUM.MAX)}}\" cancelText=\"Cancelar\" doneText=\"Hecho\"\n          formControlName=\"fechaFormControl\" [monthShortNames]=\"MONTH_SHORT_NAMES\"></ion-datetime>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isHoraInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/hora.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Hora</span>\n        </ion-label>\n        <ion-datetime displayFormat=\"hh:mm A\" min=\"{{getDate(WHICH_DATE_ENUM.MIN)}}\"\n          max=\"{{getDate(WHICH_DATE_ENUM.MAX)}}\" cancelText=\"Cancelar\" doneText=\"Hecho\"\n          formControlName=\"horaFormControl\"></ion-datetime>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isJornadaNormalInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/jornada.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Jornada</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" multiple=\"false\" formControlName=\"jornadaNormalFormControl\">\n          <ion-select-option>Normal</ion-select-option>\n          <ion-select-option>Extra</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isLaborInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/pregunta.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>¿Estaba Realizando Su Labor Habitual?</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"laborFormControl\">\n          <ion-select-option>Sí</ion-select-option>\n          <ion-select-option>No</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"isLaborNoHabitual()\" [class.invalid]=\"isLaborNoHabitualInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/pregunta.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>¿Cual?</span>\n        </ion-label>\n        <ion-textarea formControlName=\"laborNoHabitualFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isTiempoPrevioLaborandoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/hora.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Tiempo Laborado Previo</span>\n        </ion-label>\n        <ion-datetime displayFormat=\"HH:mm\" cancelText=\"Cancelar\" doneText=\"Hecho\"\n          formControlName=\"tiempoPrevioLaborandoFormControl\"></ion-datetime>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isDepartamentoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/territorio.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Departamento</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" (ionChange)=\"onDepartamentoChanged($event.detail.value)\" [compareWith]=\"compareEntities\"\n          multiple=\"false\" formControlName=\"departamentoFormControl\">\n          <ion-select-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento\">\n            {{departamento.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isMunicipioInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/territorio.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Municipio</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"municipioFormControl\">\n          <ion-select-option *ngFor=\"let municipio of municipios\" [value]=\"municipio\">\n            {{municipio.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isTipoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/tipo.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Tipo</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"tipoFormControl\">\n          <ion-select-option *ngFor=\"let tipo of tipos\" [value]=\"tipo\">\n            {{tipo.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isZonaIncidenteInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/lugar.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Zona</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"zonaIncidenteFormControl\">\n          <ion-select-option *ngFor=\"let zonaIncidente of zonas\" [value]=\"zonaIncidente\">\n            {{zonaIncidente.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isLugarInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/direccion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Lugar</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" multiple=\"false\" formControlName=\"lugarFormControl\">\n          <ion-select-option>Dentro De La Empresa</ion-select-option>\n          <ion-select-option>Fuera De La Empresa</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isSitioInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/direccion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Sitio</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"sitioFormControl\">\n          <ion-select-option *ngFor=\"let sitio of sitios\" [value]=\"sitio\">\n            {{sitio.nombre}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"isSitioOtro()\" [class.invalid]=\"isSitioOtroInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/pregunta.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>¿Cual?</span>\n        </ion-label>\n        <ion-textarea formControlName=\"sitioOtroFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isConsecuenciaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/causa.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Posible Consecuencia</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"consecuenciaFormControl\">\n          <ion-select-option *ngFor=\"let consecuencia of consecuencias\" [value]=\"consecuencia\">\n            {{consecuencia.nombre}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isDescripcionInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/descripcion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Descripción</span>\n        </ion-label>\n        <ion-textarea formControlName=\"descripcionFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-button (click)=\"reportar()\">\n        Generar Reporte\n      </ion-button>\n    </form>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"opcion\" *ngIf=\"opcion\"></app-menu-operativo>\n</ion-footer>");

/***/ }),

/***/ "./src/app/entities/consecuencia-incidente.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/consecuencia-incidente.ts ***!
  \****************************************************/
/*! exports provided: ConsecuenciaIncidente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsecuenciaIncidente", function() { return ConsecuenciaIncidente; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class ConsecuenciaIncidente extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Pk_Id_Incidente_Consecuencia);
        this._nombre = json.Nombre_consecuencia;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.IncidenteConsecuencias.map((item) => {
            return new ConsecuenciaIncidente(item);
        });
    }
}


/***/ }),

/***/ "./src/app/entities/departamento.ts":
/*!******************************************!*\
  !*** ./src/app/entities/departamento.ts ***!
  \******************************************/
/*! exports provided: Departamento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Departamento", function() { return Departamento; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Departamento extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Pk_Id_Departamento);
        this._nombre = json.Nombre_Departamento;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new Departamento(item));
    }
}


/***/ }),

/***/ "./src/app/entities/incidente.ts":
/*!***************************************!*\
  !*** ./src/app/entities/incidente.ts ***!
  \***************************************/
/*! exports provided: Incidente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Incidente", function() { return Incidente; });
class Incidente {
    constructor() { }
    get sede() {
        return this._sede;
    }
    set sede(sede) {
        this._sede = sede;
    }
    get vinculacionLaboral() {
        return this._vinculacionLaboral;
    }
    set vinculacionLaboral(vinculacionLaboral) {
        this._vinculacionLaboral = vinculacionLaboral;
    }
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
    get zonaTrabajador() {
        return this._zonaTrabajador;
    }
    set zonaTrabajador(zona) {
        this._zonaTrabajador = zona;
    }
    get jornada() {
        return this._jornada;
    }
    set jornada(jornada) {
        this._jornada = jornada;
    }
    get fechaHora() {
        return this._fechaHora;
    }
    set fechaHora(fecha) {
        this._fechaHora = fecha;
    }
    get jornadaNormal() {
        return this._jornadaNormal;
    }
    set jornadaNormal(jornadaNormal) {
        this._jornadaNormal = jornadaNormal;
    }
    get flagLaborHabitual() {
        return this._flagLaborHabitual;
    }
    set flagLaborHabitual(flagLaborHabitual) {
        this._flagLaborHabitual = flagLaborHabitual;
    }
    get incidenteNoLaborHabitual() {
        return this._incidenteNoLaborHabitual;
    }
    set incidenteNoLaborHabitual(incidenteNoLaborHabitual) {
        this._incidenteNoLaborHabitual = incidenteNoLaborHabitual;
    }
    get tiempoPrevioLaborando() {
        return this._tiempoPrevioLaborando;
    }
    set tiempoPrevioLaborando(tiempoPrevioLaborando) {
        this._tiempoPrevioLaborando = tiempoPrevioLaborando;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    get municipio() {
        return this._municipio;
    }
    set municipio(municipio) {
        this._municipio = municipio;
    }
    get zonaIncidente() {
        return this._zonaIncidente;
    }
    set zonaIncidente(zona) {
        this._zonaIncidente = zona;
    }
    get lugarIncidente() {
        return this._lugarIncidente;
    }
    set lugarIncidente(lugarIncidente) {
        this._lugarIncidente = lugarIncidente;
    }
    get sitioIncidente() {
        return this._sitioIncidente;
    }
    set sitioIncidente(sitio) {
        this._sitioIncidente = sitio;
    }
    get sitioOtro() {
        return this._sitioOtro;
    }
    set sitioOtro(sitioOtro) {
        this._sitioOtro = sitioOtro;
    }
    get consecuencia() {
        return this._consecuencia;
    }
    set consecuencia(consecuencia) {
        this._consecuencia = consecuencia;
    }
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    toUrlSearchParams() {
        const params = new URLSearchParams();
        params.append('FK_id_sede_general', String(this._sede.id));
        params.append('FK_id_vinculacionlaboral_persona', String(this._vinculacionLaboral.id));
        params.append('Persona_numero_identificacion', String(this._idTrabajador));
        params.append('General_numero_identificacion', String(this._idEmpresa));
        params.append('FK_id_zonalugar_persona', String(this._zonaTrabajador.id));
        params.append('FK_id_jornada_habitual_persona', String(this._jornada.id));
        params.append('strIncidente_fecha', this._fechaHora.getFullYear() +
            '/' +
            (this._fechaHora.getMonth() + 1) +
            '/' +
            this._fechaHora.getDate() +
            ' ' +
            this._fechaHora.getHours() +
            ':' +
            this._fechaHora.getMinutes());
        params.append('Incidentejornadanormal', this._jornadaNormal);
        params.append('Incidenterealizabalaborhabitual', String(this._flagLaborHabitual));
        params.append('Incidente_nombre_labor', this._incidenteNoLaborHabitual);
        params.append('Incidente_tiempo_previo_al_incidente', String(60 * this._tiempoPrevioLaborando.getHours() + this._tiempoPrevioLaborando.getMinutes()));
        params.append('FK_id_incidente_tipo_incidente', String(this._tipo.id));
        params.append('FK_id_departamento_incidente', String(this._departamento.id));
        params.append('FK_id_municipio_incidente', String(this._municipio.id));
        params.append('FK_id_zonalugar_incidente', String(this._zonaIncidente.id));
        params.append('incidenteOcurreEnLaEmpresa', this._lugarIncidente);
        params.append('FK_id_sitio_incidente', String(this._sitioIncidente.id));
        params.append('Incidente_sitio_incidente_otro', this._sitioOtro);
        params.append('FK_id_consecuencia_incidente', String(this._consecuencia.id));
        params.append('Incidente_descripcion', this._descripcion);
        return params;
    }
    toJson() {
        return {
            idSede: String(this._sede.id),
            fecha: this._fechaHora,
            idJornada: String(this._jornada.id),
            flagLaborHabitual: String(this._flagLaborHabitual),
            idDepartamento: String(this._departamento.id),
            idMunicipio: this._municipio.id,
            idTipo: this._tipo.id,
            idLugar: '',
            idConsecuencia: this._consecuencia.id,
            descripcion: this._descripcion,
        };
    }
}


/***/ }),

/***/ "./src/app/entities/jornada.ts":
/*!*************************************!*\
  !*** ./src/app/entities/jornada.ts ***!
  \*************************************/
/*! exports provided: Jornada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jornada", function() { return Jornada; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Jornada extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Pk_Id_Tipo_Jornada);
        this._nombre = json.Nombre_Jornada;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.Jornadas.map((item) => new Jornada(item));
    }
}


/***/ }),

/***/ "./src/app/entities/municipio.ts":
/*!***************************************!*\
  !*** ./src/app/entities/municipio.ts ***!
  \***************************************/
/*! exports provided: Municipio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Municipio", function() { return Municipio; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Municipio extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.IdMunicipio);
        this._nombre = json.NombreMunicipio;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new Municipio(item));
    }
}


/***/ }),

/***/ "./src/app/entities/sitio.ts":
/*!***********************************!*\
  !*** ./src/app/entities/sitio.ts ***!
  \***********************************/
/*! exports provided: Sitio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sitio", function() { return Sitio; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Sitio extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Pk_Id_Sitio_Incidente);
        this._nombre = json.Nombre_Sitio;
        this._isOtro = json.EsOtro;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get isOtro() {
        return this._isOtro;
    }
    set isOtro(value) {
        this._isOtro = value;
    }
    static parse(json) {
        return json.SitiosIncidente.map((item) => new Sitio(item));
    }
}


/***/ }),

/***/ "./src/app/entities/tipo-incidente.ts":
/*!********************************************!*\
  !*** ./src/app/entities/tipo-incidente.ts ***!
  \********************************************/
/*! exports provided: TipoIncidente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoIncidente", function() { return TipoIncidente; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class TipoIncidente extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Pk_Id_Tipo_Incidente);
        this._nombre = json.Nombre_Incidente;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.TiposIncidente.map((item) => {
            return new TipoIncidente(item);
        });
    }
}


/***/ }),

/***/ "./src/app/entities/vinculacion-laboral.ts":
/*!*************************************************!*\
  !*** ./src/app/entities/vinculacion-laboral.ts ***!
  \*************************************************/
/*! exports provided: VinculacionLaboral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculacionLaboral", function() { return VinculacionLaboral; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class VinculacionLaboral extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.PK_VinculacionLaboral);
        this._nombre = json.Descripcion_VinculacionLaboral;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.VinculacionLaboral.map((item) => {
            return new VinculacionLaboral(item);
        });
    }
}


/***/ }),

/***/ "./src/app/entities/zona.ts":
/*!**********************************!*\
  !*** ./src/app/entities/zona.ts ***!
  \**********************************/
/*! exports provided: Zona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zona", function() { return Zona; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Zona extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(id, nombre) {
        super(id);
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}


/***/ }),

/***/ "./src/app/pages/incidentes/incidentes-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/incidentes/incidentes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: IncidentesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentesPageRoutingModule", function() { return IncidentesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _incidentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incidentes.page */ "./src/app/pages/incidentes/incidentes.page.ts");




const routes = [
    {
        path: '',
        component: _incidentes_page__WEBPACK_IMPORTED_MODULE_3__["IncidentesPage"]
    }
];
let IncidentesPageRoutingModule = class IncidentesPageRoutingModule {
};
IncidentesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IncidentesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/incidentes/incidentes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/incidentes/incidentes.module.ts ***!
  \*******************************************************/
/*! exports provided: IncidentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentesPageModule", function() { return IncidentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _incidentes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incidentes-routing.module */ "./src/app/pages/incidentes/incidentes-routing.module.ts");
/* harmony import */ var _incidentes_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incidentes.page */ "./src/app/pages/incidentes/incidentes.page.ts");





let IncidentesPageModule = class IncidentesPageModule {
};
IncidentesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _incidentes_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncidentesPageRoutingModule"]
        ],
        declarations: [_incidentes_page__WEBPACK_IMPORTED_MODULE_4__["IncidentesPage"]]
    })
], IncidentesPageModule);



/***/ }),

/***/ "./src/app/pages/incidentes/incidentes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/incidentes/incidentes.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\n.list {\n  margin: 1px 0 7rem;\n}\nion-content ion-list form {\n  text-align: center;\n}\nion-content ion-list form ion-item {\n  background-color: inherit !important;\n}\nion-content ion-list form ion-item.ion-invalid, ion-content ion-list form ion-item.ion-valid {\n  --highlight-background: none;\n}\nion-content ion-list form ion-item ion-label img {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-list form ion-item ion-label span {\n  color: #96a0ac;\n  margin-top: auto;\n  margin-bottom: auto;\n}\nion-content ion-list form ion-item h2 {\n  white-space: pre-wrap;\n  text-align: center;\n  color: #ff7500;\n  font-weight: 500 !important;\n}\nion-content ion-list ion-button {\n  margin-bottom: 20px;\n}\nion-item.sc-ion-textarea-md-h,\nion-item .sc-ion-textarea-md-h,\nion-item.sc-ion-textarea-ios-h,\nion-item .sc-ion-textarea-ios-h {\n  align-self: auto;\n  margin-top: 10px;\n}\nion-thumbnail.thumb {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5jaWRlbnRlcy9pbmNpZGVudGVzLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEIsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURURjtBQ1lBLHVDQUFBO0FBNkRBOzs7RUFBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEOUVGO0FDaUZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsOEJBQUE7QURuRkY7QUNzRkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRG5GRjtBQ3NGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsaUNBQUE7RUFFQSxpQ0FBQTtFQUVBLDhCQUFBO0FEM0ZGO0FBek1BO0VBQ0Usa0JBQUE7QUE0TUY7QUF2TUk7RUFDRSxrQkFBQTtBQTBNTjtBQXhNTTtFQUNFLG9DQUFBO0FBME1SO0FBeE1RO0VBRUUsNEJBQUE7QUF5TVY7QUFyTVU7RUFDRSxhQ2dFTztFRC9EUCxjQytETztBRHdJbkI7QUFwTVU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXNNWjtBQWxNUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFvTVY7QUEvTEk7RUFDRSxtQkFBQTtBQWlNTjtBQTVMQTs7OztFQUlFLGdCQUFBO0VBQ0EsZ0JBQUE7QUErTEY7QUE1TEE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQStMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luY2lkZW50ZXMvaW5jaWRlbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbi8qKiBWYXJpYWJsZXMgZGUgbGEgdmVyc2nDs24gYW50ZXJpb3IgKiovXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcbiAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbn1cblxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luOiAxcHggMCA3cmVtO1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0uaW9uLWludmFsaWQsIGlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0uaW9uLXZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIGltZyB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSBpb24tbGFiZWwgc3BhbiB7XG4gIGNvbG9yOiAjOTZhMGFjO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSBoMiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmNzUwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1pdGVtLnNjLWlvbi10ZXh0YXJlYS1tZC1oLFxuaW9uLWl0ZW0gLnNjLWlvbi10ZXh0YXJlYS1tZC1oLFxuaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLWlvcy1oLFxuaW9uLWl0ZW0gLnNjLWlvbi10ZXh0YXJlYS1pb3MtaCB7XG4gIGFsaWduLXNlbGY6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi10aHVtYm5haWwudGh1bWIge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn0iLCIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuLyoqIFZhcmlhYmxlcyBkZSBsYSB2ZXJzacOzbiBhbnRlcmlvciAqKi9cblxuJGZvbnQtcGF0aDogJy4uL2Fzc2V0cy9mb250cyc7XG4kYXBwLWRpcmVjdGlvbjogbHRyO1xuJGZvbnQtc2l6ZTogMTZweDtcbiRmb250LXdlaWdodDogNDAwO1xuJGNvbnRlbnQtaW1nLXNpemU6IDIuNXJlbTtcblxuJGNvbG9yczogKFxuICBiYXNlLTE6ICNlNmVhZWUsXG4gIGJhc2UtMjogI2NhZDFkYSxcbiAgYmFzZS0zOiAjYWZiOGM0LFxuICBiYXNlLTQ6ICM5NmEwYWMsXG4gIGJhc2UtNTogIzdlOGE5NyxcbiAgYmFzZS02OiAjNjg3Njg0LFxuICBiYXNlLTc6ICM1MjYyNzAsXG4gIGJhc2UtODogIzI4NGU1YSxcbiAgcHJpbWFyeTogI2ZmNzUwMCxcbiAgYnRuLXByaW1hcnk6ICM1OWJhYTgsXG4pO1xuXG4kdGV4dC1pbnB1dC1pb3Mtc2hvdy1mb2N1ZS1oaWdobGlnaHQ6IGZhbHNlICFkZWZhdWx0O1xuJGxhYmVsLWlvcy10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuJHBpY2tlci1pb3Mtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1pb3MtaWNvbi1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRyYWRpby1pb3MtY29sb3Itb246IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcGlja2VyLWlvcy1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24taW9zLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiR0b2dnbGUtaW9zLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiRhY3Rpb24tc2hlZXQtaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctaW9zLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtYnViYmxlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNyZXNjZW50LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWRvdHMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItaW9zLXdpZHRoOiAzMTBweDtcblxuJHRleHQtaW5wdXQtbWQtc2hvdy1mb2N1cy1oaWdobGlnaHQ6IGZhbHNlICFkZWZhdWx0O1xuJGxhYmVsLW1kLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLW1kLW9wdGlvbi1zZWxlY3RlZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzZWxlY3QtbWQtaWNvbi1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRyYWRpby1tZC1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItbWQtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYnV0dG9uLW1kLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1tZC1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1tZC1hY3RpdmUtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtbWQtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtbWQtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY2lyY2xlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWNyZXNjZW50LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWlvcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwb3BvdmVyLW1kLXdpZHRoOiAzMTBweDtcblxuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG5cbiAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG5cbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xufVxuXG4uaW9zIGJvZHkuZGFyayBpb24tbW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG5cbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/incidentes/incidentes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/incidentes/incidentes.page.ts ***!
  \*****************************************************/
/*! exports provided: IncidentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentesPage", function() { return IncidentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_commons_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/commons/locale */ "./src/app/commons/locale.ts");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_entities_consecuencia_incidente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/entities/consecuencia-incidente */ "./src/app/entities/consecuencia-incidente.ts");
/* harmony import */ var src_app_entities_departamento__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entities/departamento */ "./src/app/entities/departamento.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var src_app_entities_incidente__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/entities/incidente */ "./src/app/entities/incidente.ts");
/* harmony import */ var src_app_entities_jornada__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/entities/jornada */ "./src/app/entities/jornada.ts");
/* harmony import */ var src_app_entities_municipio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/entities/municipio */ "./src/app/entities/municipio.ts");
/* harmony import */ var src_app_entities_sede__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/entities/sede */ "./src/app/entities/sede.ts");
/* harmony import */ var src_app_entities_sitio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/entities/sitio */ "./src/app/entities/sitio.ts");
/* harmony import */ var src_app_entities_tipo_incidente__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/entities/tipo-incidente */ "./src/app/entities/tipo-incidente.ts");
/* harmony import */ var src_app_entities_vinculacion_laboral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/entities/vinculacion-laboral */ "./src/app/entities/vinculacion-laboral.ts");
/* harmony import */ var src_app_entities_zona__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/entities/zona */ "./src/app/entities/zona.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/empresa.service */ "./src/app/services/empresa.service.ts");
/* harmony import */ var src_app_services_incidente_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/incidente.service */ "./src/app/services/incidente.service.ts");
/* harmony import */ var src_app_services_territorio_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/territorio.service */ "./src/app/services/territorio.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");






















var WHICH_DATE;
(function (WHICH_DATE) {
    WHICH_DATE[WHICH_DATE["MIN"] = 0] = "MIN";
    WHICH_DATE[WHICH_DATE["MAX"] = 1] = "MAX";
    WHICH_DATE[WHICH_DATE["NOW"] = 2] = "NOW";
})(WHICH_DATE || (WHICH_DATE = {}));
let IncidentesPage = class IncidentesPage {
    constructor(formBuilder, context, empresaService, territorioService, incidenteService, alertCtrl, utils) {
        this.formBuilder = formBuilder;
        this.context = context;
        this.empresaService = empresaService;
        this.territorioService = territorioService;
        this.incidenteService = incidenteService;
        this.alertCtrl = alertCtrl;
        this.utils = utils;
        this.zonas = [
            new src_app_entities_zona__WEBPACK_IMPORTED_MODULE_16__["Zona"](1, 'Urbano'),
            new src_app_entities_zona__WEBPACK_IMPORTED_MODULE_16__["Zona"](2, 'Rural')
        ];
        this.fechaOcurrencia = (new Date()).toISOString();
        this.WHICH_DATE_ENUM = WHICH_DATE;
        this.compareEntities = src_app_entities_entity__WEBPACK_IMPORTED_MODULE_8__["Entity"].compare;
        this.MONTH_SHORT_NAMES = src_app_commons_locale__WEBPACK_IMPORTED_MODULE_4__["MONTHS_SHORT"];
        this.formGroup = formBuilder.group({
            sedeFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            vinculacionLaboralFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            zonaTrabajadorFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            fechaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            horaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            jornadaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            jornadaNormalFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            laborFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            laborNoHabitualFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            tiempoPrevioLaborandoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            departamentoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            municipioFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tipoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            zonaIncidenteFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lugarFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sitioFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sitioOtroFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            consecuenciaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            descripcionFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)])]
        });
    }
    ngOnInit() {
        const getData = (nit) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.sedesSubscription = this.empresaService.getSedes(nit).subscribe((response) => {
                this.sedes = src_app_entities_sede__WEBPACK_IMPORTED_MODULE_12__["Sede"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
            yield this.utils.presentLoading();
            this.listasAuxiliaresSubscription = this.incidenteService.getListasAuxiliares().subscribe((response) => {
                this.vinculacionesLaborales = src_app_entities_vinculacion_laboral__WEBPACK_IMPORTED_MODULE_15__["VinculacionLaboral"].parse(response);
                this.jornadas = src_app_entities_jornada__WEBPACK_IMPORTED_MODULE_10__["Jornada"].parse(response);
                this.tipos = src_app_entities_tipo_incidente__WEBPACK_IMPORTED_MODULE_14__["TipoIncidente"].parse(response);
                this.sitios = src_app_entities_sitio__WEBPACK_IMPORTED_MODULE_13__["Sitio"].parse(response);
                this.consecuencias = src_app_entities_consecuencia_incidente__WEBPACK_IMPORTED_MODULE_6__["ConsecuenciaIncidente"].parse(response);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
            yield this.utils.presentLoading();
            this.departamentosSubscription = this.territorioService.getDepartamentos().subscribe((response) => {
                this.departamentos = src_app_entities_departamento__WEBPACK_IMPORTED_MODULE_7__["Departamento"].parse(response);
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
        this.opcion = 'incidents';
    }
    ionViewDidLeave() {
        this.opcion = undefined;
    }
    onDepartamentoChanged(departamento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!departamento) {
                return;
            }
            yield this.utils.presentLoading();
            this.municipiosSubscription = this.territorioService.getMunicipios(departamento.id)
                .subscribe((response) => {
                this.municipios = src_app_entities_municipio__WEBPACK_IMPORTED_MODULE_11__["Municipio"].parse(response);
                console.log(this.municipios);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
        });
    }
    isSedeInvalid() {
        return !this.formGroup.controls.sedeFormControl.valid
            && this.submitAttempt;
    }
    isVinculacionLaboralInvalid() {
        return !this.formGroup.controls.vinculacionLaboralFormControl.valid
            && this.submitAttempt;
    }
    isZonaTrabajadorInvalid() {
        return !this.formGroup.controls.zonaTrabajadorFormControl.valid
            && this.submitAttempt;
    }
    isFechaInvalid() {
        return !this.formGroup.controls.fechaFormControl.valid
            && this.submitAttempt;
    }
    isHoraInvalid() {
        return !this.formGroup.controls.horaFormControl.valid
            && this.submitAttempt;
    }
    isJornadaInvalid() {
        return !this.formGroup.controls.jornadaFormControl.valid
            && this.submitAttempt;
    }
    isJornadaNormalInvalid() {
        return !this.formGroup.controls.jornadaNormalFormControl.valid
            && this.submitAttempt;
    }
    isLaborInvalid() {
        return !this.formGroup.controls.laborFormControl.valid
            && this.submitAttempt;
    }
    isLaborNoHabitualInvalid() {
        return !this.formGroup.controls.laborNoHabitualFormControl.valid
            && this.submitAttempt;
    }
    isTiempoPrevioLaborandoInvalid() {
        return !this.formGroup.controls.tiempoPrevioLaborandoFormControl.valid
            && this.submitAttempt;
    }
    isDepartamentoInvalid() {
        return !this.formGroup.controls.departamentoFormControl.valid
            && this.submitAttempt;
    }
    isMunicipioInvalid() {
        return !this.formGroup.controls.municipioFormControl.valid
            && this.submitAttempt;
    }
    isTipoInvalid() {
        return !this.formGroup.controls.tipoFormControl.valid
            && this.submitAttempt;
    }
    isZonaIncidenteInvalid() {
        return !this.formGroup.controls.zonaIncidenteFormControl.valid
            && this.submitAttempt;
    }
    isLugarInvalid() {
        return !this.formGroup.controls.lugarFormControl.valid
            && this.submitAttempt;
    }
    isSitioInvalid() {
        return !this.formGroup.controls.sitioFormControl.valid
            && this.submitAttempt;
    }
    isSitioOtroInvalid() {
        return !this.formGroup.controls.sitioOtroFormControl.valid
            && this.submitAttempt;
    }
    isConsecuenciaInvalid() {
        return !this.formGroup.controls.consecuenciaFormControl.valid
            && this.submitAttempt;
    }
    isDescripcionInvalid() {
        return !this.formGroup.controls.descripcionFormControl.valid
            && this.submitAttempt;
    }
    isLaborNoHabitual() {
        return this.formGroup.controls.laborFormControl.value === 'No';
    }
    isSitioOtro() {
        return this.formGroup.controls.sitioFormControl.value.isOtro === true;
    }
    reportar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitAttempt = true;
            if (!this.formGroup.valid) {
                this.alert('Alerta', '', 'Los campos señalados son requeridos.');
                return;
            }
            yield this.utils.presentLoading();
            this.incidenteService.postIncidente(yield this.getDataFromInputs()).subscribe((response) => {
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
            return this.context.get().then(c => {
                const incidente = new src_app_entities_incidente__WEBPACK_IMPORTED_MODULE_9__["Incidente"]();
                incidente.sede = this.formGroup.controls.sedeFormControl.value;
                incidente.vinculacionLaboral = this.formGroup.controls.vinculacionLaboralFormControl.value;
                incidente.idTrabajador = c.trabajador.id;
                incidente.idEmpresa = c.empresa.id;
                incidente.zonaTrabajador = this.formGroup.controls.zonaTrabajadorFormControl.value;
                const fecha = this.fechaOcurrencia.split('T')[0].split('-');
                const hora = this.formGroup.controls.horaFormControl.value.split('T')[1].split(':');
                incidente.fechaHora = new Date(parseInt(fecha[0], 10), parseInt(fecha[1], 10) - 1, parseInt(fecha[2], 10), hora[0], hora[1]);
                incidente.jornada = this.formGroup.controls.jornadaFormControl.value;
                incidente.jornadaNormal = this.formGroup.controls.jornadaNormalFormControl.value;
                incidente.flagLaborHabitual = this.formGroup.controls.laborFormControl.value;
                incidente.incidenteNoLaborHabitual = (this.isLaborNoHabitual())
                    ? this.formGroup.controls.laborNoHabitualFormControl.value
                    : '';
                const tiempoPrevioLaborando = this.formGroup.controls.tiempoPrevioLaborandoFormControl.value.split('T')[1].split(':');
                incidente.tiempoPrevioLaborando = new Date(0, 0, 0, tiempoPrevioLaborando[0], tiempoPrevioLaborando[1]);
                incidente.departamento = this.formGroup.controls.departamentoFormControl.value;
                incidente.municipio = this.formGroup.controls.municipioFormControl.value;
                incidente.tipo = this.formGroup.controls.tipoFormControl.value;
                incidente.zonaIncidente = this.formGroup.controls.zonaIncidenteFormControl.value;
                incidente.consecuencia = this.formGroup.controls.consecuenciaFormControl.value;
                incidente.lugarIncidente = this.formGroup.controls.lugarFormControl.value;
                incidente.sitioIncidente = this.formGroup.controls.sitioFormControl.value;
                incidente.sitioOtro = (this.isSitioOtro())
                    ? this.formGroup.controls.sitioOtroFormControl.value
                    : '';
                incidente.descripcion = this.formGroup.controls.descripcionFormControl.value;
                return incidente;
            });
        });
    }
    cleanInputs() {
        this.formGroup.controls.sedeFormControl.setValue('');
        this.formGroup.controls.vinculacionLaboralFormControl.setValue('');
        this.formGroup.controls.zonaTrabajadorFormControl.setValue('');
        this.formGroup.controls.fechaFormControl.setValue('');
        this.formGroup.controls.horaFormControl.setValue('');
        this.formGroup.controls.jornadaFormControl.setValue('');
        this.formGroup.controls.jornadaNormalFormControl.setValue('');
        this.formGroup.controls.laborFormControl.setValue('');
        this.formGroup.controls.laborNoHabitualFormControl.setValue('');
        this.formGroup.controls.tiempoPrevioLaborandoFormControl.setValue('');
        this.formGroup.controls.departamentoFormControl.setValue('');
        this.formGroup.controls.municipioFormControl.setValue('');
        this.formGroup.controls.tipoFormControl.setValue('');
        this.formGroup.controls.zonaIncidenteFormControl.setValue('');
        this.formGroup.controls.consecuenciaFormControl.setValue('');
        this.formGroup.controls.lugarFormControl.setValue('');
        this.formGroup.controls.sitioFormControl.setValue('');
        this.formGroup.controls.sitioOtroFormControl.setValue('');
        this.formGroup.controls.descripcionFormControl.setValue('');
    }
};
IncidentesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_17__["ContextService"] },
    { type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_18__["EmpresaService"] },
    { type: src_app_services_territorio_service__WEBPACK_IMPORTED_MODULE_20__["TerritorioService"] },
    { type: src_app_services_incidente_service__WEBPACK_IMPORTED_MODULE_19__["IncidenteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_21__["UtilsService"] }
];
IncidentesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incidentes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./incidentes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidentes/incidentes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./incidentes.page.scss */ "./src/app/pages/incidentes/incidentes.page.scss")).default]
    })
], IncidentesPage);



/***/ }),

/***/ "./src/app/services/incidente.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/incidente.service.ts ***!
  \***********************************************/
/*! exports provided: IncidenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidenteService", function() { return IncidenteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");






let IncidenteService = class IncidenteService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getListasAuxiliares() {
        const promise = this.context.get().then(c => {
            const url = this.context.getEnvUrl().call(null, 'incidenteinvestigacion') + '/incidente/Obtener-listas'
                + '?Nit=' + c.empresa.id;
            return url;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(p => this.http.get(p)));
    }
    postIncidente(incidente) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/guardar-incidente-app';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, incidente.toUrlSearchParams().toString(), { headers });
    }
};
IncidenteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_5__["ContextService"] }
];
IncidenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], IncidenteService);



/***/ }),

/***/ "./src/app/services/territorio.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/territorio.service.ts ***!
  \************************************************/
/*! exports provided: TerritorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerritorioService", function() { return TerritorioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let TerritorioService = class TerritorioService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getDepartamentos() {
        const url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/tranversal-Departamentos';
        return this.http.get(url);
    }
    getMunicipios(idDepartamento) {
        const url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/tranversal-Municipios'
            + '?IdDepartamento=' + idDepartamento;
        return this.http.get(url);
    }
};
TerritorioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
TerritorioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TerritorioService);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-incidentes-incidentes-module-es2015.js.map