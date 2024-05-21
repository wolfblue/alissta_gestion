(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-crear-permiso-crear-permiso-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/crear-permiso/crear-permiso.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/crear-permiso/crear-permiso.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title>Registro permiso</ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-label class=\"ion-padding\" style=\"font-weight: 700\">Permiso de Trabajo</ion-label>\n    <ion-item class=\"border\">\n      <ion-select [(ngModel)]=\"tipoPermiso\" (ionChange)=\"onChangePermiso($event)\" okText=\"Aceptar\" cancelText=\"Cancelar\">\n        <ion-item *ngFor=\"let permiso of listaTipoPermiso\">\n          <ion-select-option value=\"{{permiso.strDescripcion}}\">{{permiso.strDescripcion}}</ion-select-option>\n        </ion-item>\n      </ion-select>\n    </ion-item>\n    <br />\n    <ion-label class=\"ion-padding\" style=\"font-weight: 700\">Tipo Documento</ion-label>\n    <ion-item class=\"border\">\n      <ion-select [(ngModel)]=\"tipoDeDocumento\" okText=\"Aceptar\" cancelText=\"Cancelar\">\n        <ion-select-option value=\"CC\">Cédula de Ciudadanía</ion-select-option>\n        <ion-select-option value=\"CE\">Cédula de Extranjería</ion-select-option>\n        <ion-select-option value=\"PA\">Pasaporte</ion-select-option>\n        <ion-select-option value=\"TI\">Tarjeta de Identidad</ion-select-option>\n        <ion-select-option value=\"PT\">Permiso Trabajo</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <br />\n    <ion-label class=\"ion-padding\" style=\"font-weight: 700\" position=\"floating\">Número Identificación</ion-label>\n    <ion-row>\n      <ion-col size=\"10\">\n        <!-- label: numero de documento -->\n        <ion-item class=\"border\" *ngIf=\"tipoDeDocumento !== 'PA'\">\n          <ion-input\n            type=\"number\"\n            inputmode=\"numeric\"\n            pattern=\"^[0-9]*$\"\n            [(ngModel)]=\"numeroDeDocumento\"\n            (keyup)=\"numberOnly($event)\"\n          ></ion-input>\n        </ion-item>\n        <ion-item class=\"border\" *ngIf=\"tipoDeDocumento === 'PA'\">\n          <ion-input type=\"text\" [(ngModel)]=\"numeroDeDocumento\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"2\" style=\"margin: 0; padding: 0\">\n        <!-- btn buscar -->\n        <ion-button style=\"font-size: 0\" fill=\"outline\" class=\"ion-text-end\" expand=\"block\" color=\"primary\" (click)=\"buscarTrabajador()\"\n          ><ion-icon style=\"font-size: 1.5rem\" name=\"search\"></ion-icon\n        ></ion-button>\n      </ion-col>\n    </ion-row>\n    <br />\n    <!-- btn adicionar trabajador -->\n\n    <div (click)=\"leerQr()\">\n      <button class=\"qr\" expand=\"block\" color=\"secondary\" (click)=\"addTrabajador()\">\n        Escanear QR <ion-icon style=\"font-size: 28px\" name=\"help-circle-outline\"></ion-icon>\n      </button>\n    </div>\n    <br />\n\n    <!-- un checkbox para poder marcar todos los usuarios  -->\n    <div class=\"ion-text-center titulo-tabla\">\n      <ion-label style=\"font-weight: 700\">Trabajadores Agregados al Permiso de Trabajo</ion-label>\n    </div>\n    <!-- tabla -->\n    <ion-grid>\n      <ion-row class=\"header-table\">\n        <ion-col size=\"3\">\n          <ion-label>Nombre </ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>ID</ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>Cargo</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>Ayudante de Seguridad</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>Trabajador Autorizado</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngFor=\"let trabajador of tablaTrabajadores | slice:(currentPage - 1) * workersPerPage:currentPage * workersPerPage\"\n        class=\"body-table\"\n      >\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strNombreTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>{{trabajador.strNumeroDocumeto}}</ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strCargoTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"check\">\n          <ion-checkbox [(ngModel)]=\"trabajador.blnAyudanteSeguridad\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"2\" class=\"check\">\n          <ion-checkbox [(ngModel)]=\"trabajador.accion\"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"pagination-buttons ion-text-center\">\n      <ion-button style=\"height: 24px\" (click)=\"previousPage()\" [disabled]=\"currentPage === 1\"\n        ><ion-icon name=\"chevron-back\"></ion-icon\n      ></ion-button>\n      <ion-button style=\"height: 24px\" [disabled]=\"true\">{{currentPage}}/{{totalPage}}</ion-button>\n      <ion-button style=\"height: 24px\" (click)=\"nextPage()\" [disabled]=\"currentPage * workersPerPage >= tablaTrabajadores.length\"\n        ><ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></ion-button>\n    </div>\n    <div class=\"ion-padding\">Total de trabajadores: {{tablaTrabajadores.length}}</div>\n    <!-- btn guardar -->\n    <div class=\"ion-text-center\">\n      <button class=\"guardar-continuar\" *ngIf=\"tablaTrabajadores.length > 0\" expand=\"block\" color=\"secondary\" (click)=\"guardar()\">\n        Guardar y Continuar\n      </button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts":
/*!*******************************************************************!*\
  !*** ./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts ***!
  \*******************************************************************/
/*! exports provided: EDFirmaResponsablePermisoTrabajo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDFirmaResponsablePermisoTrabajo", function() { return EDFirmaResponsablePermisoTrabajo; });
class EDFirmaResponsablePermisoTrabajo {
    constructor() {
        this.strTipoDocumento = '';
        this.strNombreCompleto = '';
        this.strDocumentoIdentificacion = '';
        this.strCargo = '';
        this.strFirmaBase64 = '';
        this.strLatitud = '';
        this.strLongitud = '';
    }
}


/***/ }),

/***/ "./src/app/interfaces/edguardar-permiso-trabajo-app.ts":
/*!*************************************************************!*\
  !*** ./src/app/interfaces/edguardar-permiso-trabajo-app.ts ***!
  \*************************************************************/
/*! exports provided: EDGuardarPermisoTrabajoAPP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDGuardarPermisoTrabajoAPP", function() { return EDGuardarPermisoTrabajoAPP; });
/* harmony import */ var _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edfirma-responsable-permiso-trabajo */ "./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts");
/* harmony import */ var _edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edinfo-auditoria-app */ "./src/app/interfaces/edinfo-auditoria-app.ts");


const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
};
class EDGuardarPermisoTrabajoAPP {
    constructor() {
        this.uniqueId = Date.now().toString();
        this.enviar = false;
        this.lastRoute = '';
        this.fk_ID_PermisoAlturas_MaestroTipoPermiso = 0;
        this.strRazonSocial = '';
        this.strTipoDocumento = '';
        this.strNumeroDocumento = '';
        this.strFechaRegistro = '';
        this.FechaRegistroDate = new Date();
        this.strFechaYHoraInicioAct = '';
        this.dtmFechaYHoraInicioAct = new Date();
        this.strFechaYHoraFinAct = '';
        this.dtmFechaYHoraFinAct = new Date();
        this.strUbicacionTrabajo = '';
        this.dblAlturaActividad = 0;
        this.metros = 0;
        this.centimetros = 0;
        this.listaMaestroCuestionario = [];
        this.strTipoTrabajo = '';
        this.strAntesActividad = '';
        this.strDuranteActividad = '';
        this.strDespuesActividad = '';
        this.listaItemSeleccionados = [];
        this.listaTrabajadoresMigrados = [];
        this.strObservaciones = '';
        this.blnPermisoAutorizado = false;
        this.edAutorizadoPermisoTrabajo = new _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__["EDFirmaResponsablePermisoTrabajo"]();
        this.edResponsableActivarPlanEmergencia = new _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__["EDFirmaResponsablePermisoTrabajo"]();
        this.edCoordinadorTrabajoAlturas = new _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__["EDFirmaResponsablePermisoTrabajo"]();
        this.listaAnexoImagenes = [];
        this.strCorreoUsuarioElaboroPermiso = '';
        this.edInfoAuditoria = new _edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_1__["EDInfoAuditoriaAPP"]();
    }
    get UniqueId() {
        return this.uniqueId;
    }
    get Enviar() {
        return this.enviar;
    }
    set Enviar(enviar) {
        this.enviar = enviar;
    }
    get LastRoute() {
        return this.lastRoute;
    }
    set LastRoute(lastRoute) {
        this.lastRoute = lastRoute;
    }
    get FK_ID_PermisoAlturas_MaestroTipoPermiso() {
        return this.fk_ID_PermisoAlturas_MaestroTipoPermiso;
    }
    set FK_ID_PermisoAlturas_MaestroTipoPermiso(fk_ID_PermisoAlturas_MaestroTipoPermiso) {
        this.fk_ID_PermisoAlturas_MaestroTipoPermiso = fk_ID_PermisoAlturas_MaestroTipoPermiso;
    }
    get RazonSocial() {
        return this.strRazonSocial;
    }
    set RazonSocial(razonSocial) {
        this.strRazonSocial = razonSocial;
    }
    get TipoDocumento() {
        return this.strTipoDocumento;
    }
    set TipoDocumento(tipoDocumento) {
        this.strTipoDocumento = tipoDocumento;
    }
    get NumeroDocumento() {
        return this.strNumeroDocumento;
    }
    set NumeroDocumento(numeroDocumento) {
        this.strNumeroDocumento = numeroDocumento;
    }
    get FechaRegistro() {
        return this.strFechaRegistro;
    }
    set FechaRegistro(fechaRegistro) {
        this.strFechaRegistro = fechaRegistro;
    }
    get FechaRegistroDate() {
        return this.dtmFechaRegistro;
    }
    set FechaRegistroDate(fechaRegistro) {
        this.dtmFechaRegistro = new Date(fechaRegistro);
        this.strFechaRegistro = new Date(fechaRegistro).toLocaleDateString('es-ES', options);
        this.strFechaYHoraInicioAct = new Date(fechaRegistro).toLocaleDateString('es-ES', options);
    }
    get FechaYHoraInicioAct() {
        return this.strFechaYHoraInicioAct;
    }
    set FechaYHoraInicioAct(fechaYHoraInicioAct) {
        this.strFechaYHoraInicioAct = fechaYHoraInicioAct;
    }
    get FechaYHoraInicioActDate() {
        return this.dtmFechaYHoraInicioAct;
    }
    set FechaYHoraInicioActDate(fechaYHoraInicioAct) {
        this.dtmFechaYHoraInicioAct = fechaYHoraInicioAct;
        this.strFechaYHoraInicioAct = new Date(fechaYHoraInicioAct).toLocaleDateString('es-ES', options);
    }
    get FechaYHoraFinAct() {
        return this.strFechaYHoraFinAct;
    }
    set FechaYHoraFinAct(fechaYHoraFinAct) {
        this.strFechaYHoraFinAct = fechaYHoraFinAct;
    }
    get FechaYHoraFinActDate() {
        return this.dtmFechaYHoraFinAct;
    }
    set FechaYHoraFinActDate(fechaYHoraFinAct) {
        this.dtmFechaYHoraFinAct = fechaYHoraFinAct;
        this.strFechaYHoraFinAct = new Date(fechaYHoraFinAct).toLocaleDateString('es-ES', options);
    }
    get UbicacionTrabajo() {
        return this.strUbicacionTrabajo;
    }
    set UbicacionTrabajo(ubicacionTrabajo) {
        this.strUbicacionTrabajo = ubicacionTrabajo;
    }
    get AlturaActividad() {
        return this.dblAlturaActividad;
    }
    set AlturaActividad(alturaActividad) {
        this.dblAlturaActividad = alturaActividad;
    }
    get Metros() {
        return this.metros;
    }
    set Metros(metros) {
        this.metros = metros;
    }
    get Centimetros() {
        return this.centimetros;
    }
    get MaestroCuestionario() {
        return this.listaMaestroCuestionario;
    }
    set MaestroCuestionario(maestroCuestionario) {
        this.listaMaestroCuestionario = maestroCuestionario;
    }
    get TipoTrabajo() {
        return this.strTipoTrabajo;
    }
    set TipoTrabajo(tipoTrabajo) {
        this.strTipoTrabajo = tipoTrabajo;
    }
    get AntesActividad() {
        return this.strAntesActividad;
    }
    set AntesActividad(antesActividad) {
        this.strAntesActividad = antesActividad;
    }
    get DuranteActividad() {
        return this.strDuranteActividad;
    }
    set DuranteActividad(duranteActividad) {
        this.strDuranteActividad = duranteActividad;
    }
    get DespuesActividad() {
        return this.strDespuesActividad;
    }
    set DespuesActividad(despuesActividad) {
        this.strDespuesActividad = despuesActividad;
    }
    get ItemSeleccionados() {
        return this.listaItemSeleccionados;
    }
    set ItemSeleccionados(itemSeleccionados) {
        this.listaItemSeleccionados = itemSeleccionados;
    }
    get TrabajadoresMigrados() {
        return this.listaTrabajadoresMigrados;
    }
    set TrabajadoresMigrados(trabajadoresMigrados) {
        this.listaTrabajadoresMigrados = trabajadoresMigrados;
    }
    get Observaciones() {
        return this.strObservaciones;
    }
    set Observaciones(observaciones) {
        this.strObservaciones = observaciones;
    }
    get PermisoAutorizado() {
        return this.blnPermisoAutorizado;
    }
    set PermisoAutorizado(permisoAutorizado) {
        this.blnPermisoAutorizado = permisoAutorizado;
    }
    get AutorizadoPermisoTrabajo() {
        return this.edAutorizadoPermisoTrabajo;
    }
    set AutorizadoPermisoTrabajo(autorizadoPermisoTrabajo) {
        this.edAutorizadoPermisoTrabajo = autorizadoPermisoTrabajo;
    }
    get ResponsableActivarPlanEmergencia() {
        return this.edResponsableActivarPlanEmergencia;
    }
    set ResponsableActivarPlanEmergencia(responsableActivarPlanEmergencia) {
        this.edResponsableActivarPlanEmergencia = responsableActivarPlanEmergencia;
    }
    get CoordinadorTrabajoAlturas() {
        return this.edCoordinadorTrabajoAlturas;
    }
    set CoordinadorTrabajoAlturas(coordinadorTrabajoAlturas) {
        this.edCoordinadorTrabajoAlturas = coordinadorTrabajoAlturas;
    }
    get AnexoImagenes() {
        return this.listaAnexoImagenes;
    }
    set AnexoImagenes(anexoImagenes) {
        this.listaAnexoImagenes = anexoImagenes;
    }
    get CorreoUsuarioElaboroPermiso() {
        return this.strCorreoUsuarioElaboroPermiso;
    }
    set CorreoUsuarioElaboroPermiso(correoUsuarioElaboroPermiso) {
        this.strCorreoUsuarioElaboroPermiso = correoUsuarioElaboroPermiso;
    }
    get InfoAuditoria() {
        return this.edInfoAuditoria;
    }
    set InfoAuditoria(infoAuditoria) {
        this.edInfoAuditoria = infoAuditoria;
    }
}


/***/ }),

/***/ "./src/app/pages/SST/crear-permiso/crear-permiso-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/SST/crear-permiso/crear-permiso-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CrearPermisoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPermisoPageRoutingModule", function() { return CrearPermisoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_permiso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-permiso.page */ "./src/app/pages/SST/crear-permiso/crear-permiso.page.ts");




const routes = [
    {
        path: '',
        component: _crear_permiso_page__WEBPACK_IMPORTED_MODULE_3__["CrearPermisoPage"],
    },
    {
        path: 'inicio-permiso',
        loadChildren: () => Promise.all(/*! import() | src-app-pages-SST-inicio-permiso-inicio-permiso-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-SST-inicio-permiso-inicio-permiso-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/SST/inicio-permiso/inicio-permiso.module */ "./src/app/pages/SST/inicio-permiso/inicio-permiso.module.ts")).then(m => m.InicioPermisoPageModule),
    },
];
let CrearPermisoPageRoutingModule = class CrearPermisoPageRoutingModule {
};
CrearPermisoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearPermisoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/crear-permiso/crear-permiso.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/SST/crear-permiso/crear-permiso.module.ts ***!
  \*****************************************************************/
/*! exports provided: CrearPermisoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPermisoPageModule", function() { return CrearPermisoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-permiso-routing.module */ "./src/app/pages/SST/crear-permiso/crear-permiso-routing.module.ts");
/* harmony import */ var _crear_permiso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-permiso.page */ "./src/app/pages/SST/crear-permiso/crear-permiso.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let CrearPermisoPageModule = class CrearPermisoPageModule {
};
CrearPermisoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearPermisoPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_crear_permiso_page__WEBPACK_IMPORTED_MODULE_6__["CrearPermisoPage"]],
    })
], CrearPermisoPageModule);



/***/ }),

/***/ "./src/app/pages/SST/crear-permiso/crear-permiso.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/SST/crear-permiso/crear-permiso.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-table {\n  font-size: 0.59rem;\n  font-weight: bold;\n  background-color: #b1b7bd;\n  color: black;\n  text-align: center;\n  padding: 2px;\n  border: 1px solid #b1b7bd;\n  border-radius: 0px 0px 0px 0px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin: 0 auto;\n  align-items: center;\n}\n.header-table ion-label {\n  display: flex;\n  justify-content: center;\n}\n.body-table {\n  font-size: 0.5rem;\n  font-weight: 400;\n  background-color: #e9ecef;\n  color: black;\n  text-align: start;\n  align-items: center;\n  padding-bottom: 2px;\n  border: 1px solid #b1b7bd;\n  min-height: 42px;\n}\n.body-table .check {\n  text-align: center;\n}\n.titulo-tabla {\n  background-color: #b1b7bd;\n  margin-top: 10px;\n  padding: 5px;\n  font-size: 0.9rem;\n  border-radius: 8px 8px 0px 0px;\n}\nion-grid {\n  padding: 0px;\n}\nion-col {\n  padding-top: 0;\n}\ndiv.toolbar {\n  background: #ff7500;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nbutton.adicionar {\n  font-weight: 800;\n  color: #000;\n  background: #ff7500 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 40%;\n  height: 24px;\n  font-size: 14px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nbutton.qr {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  color: #fff;\n  background: #0027ff !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  transition: all 0.3s ease;\n}\nion-item.border {\n  height: 45px;\n  border: 1px solid #808080;\n  border-radius: 10px;\n}\nion-select {\n  width: 100%;\n}\nion-select div.select-icon {\n  opacity: 1 !important;\n}\ndialog {\n  background-color: white;\n  color: black;\n  border-color: transparent;\n  overflow: hidden;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: 0 0 20px 8px #d0d0d0;\n  height: 100%;\n  width: 100%;\n}\ndialog .header {\n  color: black;\n  padding: 10px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #b1b7bd;\n}\ndialog .header .close {\n  float: right;\n  cursor: pointer;\n  background: transparent !important;\n  color: black;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\ndialog .body {\n  padding: 10px;\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2NyZWFyLXBlcm1pc28vY3JlYXItcGVybWlzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVKO0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtBQUVKO0FBRUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2NyZWFyLXBlcm1pc28vY3JlYXItcGVybWlzby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRhYmxlIHtcbiAgZm9udC1zaXplOiAwLjU5cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjdiZDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IxYjdiZDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmJvZHktdGFibGUge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IxYjdiZDtcbiAgbWluLWhlaWdodDogNDJweDtcbiAgLmNoZWNrIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnRpdHVsby10YWJsYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWI3YmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjZmY3NTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uLmFkaWNpb25hciB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmY3NTAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uLnFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDI3ZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5pb24taXRlbS5ib3JkZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGl2LnNlbGVjdC1pY29uIHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDhweCAjZDBkMGQwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaWFsb2cgLmhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiMWI3YmQ7XG4gIC5jbG9zZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5kaWFsb2cgLmJvZHkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/SST/crear-permiso/crear-permiso.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/SST/crear-permiso/crear-permiso.page.ts ***!
  \***************************************************************/
/*! exports provided: CrearPermisoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPermisoPage", function() { return CrearPermisoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/SST/data-base.service */ "./src/app/services/SST/data-base.service.ts");
/* harmony import */ var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/SST/tabla-trabajadores.service */ "./src/app/services/SST/tabla-trabajadores.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_interfaces_edguardar_permiso_trabajo_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/interfaces/edguardar-permiso-trabajo-app */ "./src/app/interfaces/edguardar-permiso-trabajo-app.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_components_qr_qr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/qr/qr.component */ "./src/app/components/qr/qr.component.ts");
/* harmony import */ var src_app_components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-add-trabajador/modal-add-trabajador.component */ "./src/app/components/modal-add-trabajador/modal-add-trabajador.component.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/SST/data.service */ "./src/app/services/SST/data.service.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");














let CrearPermisoPage = class CrearPermisoPage {
    constructor(dataBaseService, tablaTrabajadoresService, router, alertController, saveDataService, utils, modalController, modalController2, modalControllerQr, chekInternet, dataService, context) {
        this.dataBaseService = dataBaseService;
        this.tablaTrabajadoresService = tablaTrabajadoresService;
        this.router = router;
        this.alertController = alertController;
        this.saveDataService = saveDataService;
        this.utils = utils;
        this.modalController = modalController;
        this.modalController2 = modalController2;
        this.modalControllerQr = modalControllerQr;
        this.chekInternet = chekInternet;
        this.dataService = dataService;
        this.context = context;
        this.tablaTrabajadores = [];
        this.listaTipoPermiso = [];
        this.tipoDeDocumento = 'CC';
        this.showDialog = false;
        this.trabajadoresMarcados = [];
        this.currentPage = 1;
        this.workersPerPage = 10;
        this.habilitarEdicionCargo = false;
        this.trabajador = {
            blnCodigoQR: false,
            strCargoTrabajador: '',
            strNombreTrabajador: '',
            blnAyudanteSeguridad: false,
            accion: false,
            Fk_ID_Empresa: 0,
            PK_ID_PermisoAlturas_PersonasAMigrar: 0,
            strNumeroDocumeto: '',
            strTipoDocumento: '',
        };
    }
    ngOnInit() {
        console.log('ngOnInit');
        this.tiposDePermiso();
        this.context.get().then(response => {
            this.idEMpresa = response['_empresa'].id.toString();
            console.log('id empresa', this.idEMpresa);
        });
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.precargarDatos();
    }
    buscarTrabajador() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.numeroDeDocumento === undefined || this.numeroDeDocumento === '' || this.tipoDeDocumento === undefined)
                return;
            try {
                this.dataBaseService.open().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const trabajador = yield this.dataBaseService.getTrabajador(`${this.numeroDeDocumento}`, this.tipoDeDocumento);
                    if (trabajador === null) {
                        let internet = yield this.chekInternet.testNetworkConnection();
                        if (!internet) {
                            this.mostrarError('No se encontró el trabajador');
                            this.limpiaCampos();
                            return;
                        }
                        console.log('buscado web');
                        yield this.utils.presentLoading();
                        const user = yield this.dataService.getTrabajador(`${this.numeroDeDocumento}`, this.tipoDeDocumento);
                        console.log('user', user);
                        if (!user.blnAfiliadoEmpresaActivo) {
                            this.mostrarError('Estimado usuario, el trabajador consultado no cuenta con relación laboral en la empresa con la que se inició sesión.');
                            this.limpiaCampos();
                            this.utils.dismissLoading();
                            return;
                        }
                        this.trabajador = user;
                        this.trabajador.accion = true;
                        this.trabajador.strTipoDocumento = user.strTipoDocumento;
                        console.log('trabajador', this.trabajador);
                        yield this.dataBaseService.addTrabajadorMigrado(user);
                    }
                    else {
                        this.trabajador = trabajador;
                        this.trabajador.accion = true;
                    }
                    this.utils.dismissLoading();
                    this.prepararUser();
                }));
            }
            catch (error) {
                this.dataBaseService.close();
            }
            finally {
                this.utils.dismissLoading();
            }
        });
    }
    cerrarModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController2.create({
                component: src_app_components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_10__["ModalAddTrabajadorComponent"],
            });
            modal.dismiss();
            return yield modal.present();
        });
    }
    prepararUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.modalControllerQr)
                this.modalControllerQr.dismiss();
            this.trabajador.strCargoTrabajador = 'Trabajador';
            const modal = yield this.modalController.create({
                component: src_app_components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_10__["ModalAddTrabajadorComponent"],
                componentProps: {
                    trabajador: this.trabajador,
                },
            });
            modal.onDidDismiss().then(result => {
                console.log('result', result);
                if (result.data !== undefined) {
                    const trabajadorActualizado = result.data.trabajador;
                    this.trabajador = trabajadorActualizado;
                    this.cargoTrabajador = trabajadorActualizado.strCargoTrabajador;
                    this.addTrabajador();
                }
                else {
                    this.limpiaCampos();
                }
            });
            return yield modal.present();
        });
    }
    limpiaCampos() {
        this.habilitarEdicionCargo = false;
        this.tipoDeDocumento = 'CC';
        this.numeroDeDocumento = '';
        this.cargoTrabajador = '';
        this.trabajador = {
            strCargoTrabajador: '',
            strNombreTrabajador: '',
            blnAyudanteSeguridad: false,
            accion: false,
            Fk_ID_Empresa: 0,
            PK_ID_PermisoAlturas_PersonasAMigrar: 0,
            strNumeroDocumeto: '',
            strTipoDocumento: '',
        };
    }
    addTrabajador() {
        if (this.trabajador.strNombreTrabajador === '')
            return;
        this.trabajador.strCargoTrabajador = this.cargoTrabajador;
        this.tablaTrabajadoresService.addTrabajador(this.trabajador);
        this.tablaTrabajadores = this.tablaTrabajadoresService.getTablaTrabajadores();
        this.totalPage = Math.ceil(this.tablaTrabajadores.length / this.workersPerPage);
        this.limpiaCampos();
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tablaTrabajadores.length === 0) {
                this.mostrarError('Debe agregar al menos un trabajador');
                return;
            }
            if (this.tipoPermiso === undefined) {
                this.mostrarError('Debe seleccionar un tipo de permiso');
                return;
            }
            if (this.getTrabajadoresChecked().length === 0) {
                this.mostrarError('Debe seleccionar al menos un trabajador');
                return;
            }
            if (this.getTrabajadoresNotChecked().length > 0) {
                this.mostrarError('Hay trabajadores sin seleccionar');
                return;
            }
            yield this.guardarDatos();
            this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso']);
        });
    }
    leerQr() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let usuario;
            try {
                const modalQr = yield this.modalControllerQr.create({
                    component: src_app_components_qr_qr_component__WEBPACK_IMPORTED_MODULE_9__["QRComponent"],
                });
                yield modalQr.present();
                modalQr
                    .onDidDismiss()
                    .then(result => {
                    console.log('result', result.data);
                    if (!result.data) {
                        this.mostrarError('No pudimos leer la información', 'Alerta');
                        return false;
                    }
                    try {
                        usuario = JSON.parse(result.data['response']);
                    }
                    catch (e) {
                        this.mostrarError('El QR no contiene un trabajador');
                        return false;
                    }
                    if (!usuario['nomAsist']) {
                        this.mostrarError('El QR no contiene un trabajador valido');
                        return false;
                    }
                    if (usuario['numEmpr'] != this.idEMpresa) {
                        this.mostrarError('Estimado usuario, el trabajador consultado no cuenta con relación laboral en la empresa con la que se inició sesión.');
                        return false;
                    }
                    else {
                        return true;
                    }
                })
                    .then((verdad) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (this.modalControllerQr)
                        yield this.modalControllerQr.dismiss();
                    if (!this.trabajador) {
                        this.trabajador = {
                            PK_ID_PermisoAlturas_PersonasAMigrar: null,
                            strTipoDocumento: null,
                            strNumeroDocumeto: null,
                            strNombreTrabajador: null,
                            strCargoTrabajador: null,
                            Fk_ID_Empresa: null,
                            blnAyudanteSeguridad: null,
                            accion: null,
                        };
                    }
                    console.log('verdad', JSON.stringify(usuario));
                    console.log('trabajador', JSON.stringify(this.trabajador));
                    if (verdad) {
                        this.trabajador.strNombreTrabajador = usuario.nomAsist;
                        this.trabajador.strNumeroDocumeto = usuario.numAsistente;
                        this.trabajador.strCargoTrabajador = usuario.cargo.toString();
                        this.trabajador.strTipoDocumento = usuario.tiAsistente;
                        this.cargoTrabajador = usuario.cargo.toString();
                        this.numeroDeDocumento = usuario.numAsistente;
                        this.trabajador.blnCodigoQR = true;
                        this.trabajador.strNumeroDocumentoEmpresa = usuario.numEmpr;
                        this.trabajador.strTipoDocumentoEmpresa = usuario.tiEmpr;
                        this.habilitarEdicionCargo = true;
                        this.prepararUser();
                    }
                }));
            }
            catch (error) {
                this.mostrarError('No se puedo leer QR');
            }
        });
    }
    guardarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log('guardando datos');
                yield this.utils.presentLoading();
                yield this.dataBaseService.open();
                this.data['dtmFechaRegistro'] = new Date();
                this.data['dtmFechaYHoraInicioAct'] = new Date();
                let trabajadoresChecked = this.getTrabajadoresChecked();
                this.data['listaTrabajadoresMigrados'] = trabajadoresChecked;
                this.tablaTrabajadoresService.setListaTrabajadores(trabajadoresChecked);
                this.data['listaTrabajadoresMigrados'].forEach((trabajador) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!trabajador.blnCodigoQR) {
                        trabajador.blnActivo = true;
                        console.log(JSON.stringify(trabajador));
                        yield this.dataBaseService.updateTrabajadorMigrado(trabajador);
                        console.log('trabajador actualizado');
                    }
                }));
                this.data['strTipoTrabajo'] = this.tipoPermiso;
                this.data['lastRoute'] = '/home/permisos/registro-permiso/crear-permiso';
                this.data['fk_ID_PermisoAlturas_MaestroTipoPermiso'] = this.listaTipoPermiso.find(tipoPermiso => tipoPermiso.strDescripcion === this.tipoPermiso).PK_ID_PermisoAlturas_MaestroTipoPermiso;
                this.saveDataService.setData(this.data);
                this.saveDataService.saveData();
                this.utils.dismissLoading();
            }
            catch (error) {
                this.utils.dismissLoading();
                this.dataBaseService.close();
                console.error('Error al guardar los datos:', error);
            }
        });
    }
    onChangePermiso(event) {
        this.tipoPermiso = event.detail.value;
    }
    tiposDePermiso() {
        this.dataBaseService.open().then(() => {
            this.dataBaseService.getAllTipoPermiso().subscribe({
                next: (listaTipoPermiso) => {
                    this.listaTipoPermiso = listaTipoPermiso;
                },
                error: error => {
                    this.dataBaseService.close();
                },
                complete: () => {
                    console.log('Tipos de permiso completados');
                },
            });
        });
    }
    allTrabajadores() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.utils.presentLoading();
                this.dataBaseService.open().then(() => {
                    this.dataBaseService.getAllTrabajadoresMigrados().subscribe({
                        next: (listaTrabajadores) => {
                            // this.tablaTrabajadores = listaTrabajadores;
                            this.tablaTrabajadores.forEach(trabajador => {
                                trabajador.accion = false;
                            });
                            this.tablaTrabajadoresService.setListaTrabajadores(this.tablaTrabajadores);
                            this.totalPage = Math.ceil(this.tablaTrabajadores.length / this.workersPerPage);
                            this.utils.dismissLoading();
                        },
                        error: error => {
                            console.error('Error al obtener los tipos de permiso:', error);
                        },
                    });
                });
            }
            catch (error) {
                this.dataBaseService.close();
                this.utils.dismissLoading();
                console.error('Error al obtener los tipos de permiso:', error);
            }
        });
    }
    getTrabajadoresChecked() {
        return this.tablaTrabajadores.filter(trabajador => trabajador.accion || trabajador.blnAyudanteSeguridad);
    }
    getTrabajadoresNotChecked() {
        return this.tablaTrabajadores.filter(trabajador => !trabajador.accion && !trabajador.blnAyudanteSeguridad);
    }
    onChangeMarcarTodos(event) {
        const isChecked = event.detail.checked;
        this.tablaTrabajadores = this.tablaTrabajadores.map(trabajador => {
            if (this.isOnCurrentPage(trabajador)) {
                trabajador.accion = isChecked;
            }
            return trabajador;
        });
        if (isChecked) {
            this.tablaTrabajadores
                .filter(trabajador => !this.trabajadoresMarcados.includes(trabajador))
                .forEach(trabajador => this.trabajadoresMarcados.push(trabajador));
        }
        else {
            this.trabajadoresMarcados = this.trabajadoresMarcados.filter(trabajador => !trabajador.accion);
        }
    }
    isOnCurrentPage(trabajador) {
        const index = this.tablaTrabajadores.indexOf(trabajador);
        const startIndex = (this.currentPage - 1) * this.workersPerPage;
        const endIndex = this.currentPage * this.workersPerPage;
        return index >= startIndex && index < endIndex;
    }
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePage();
        }
    }
    nextPage() {
        if (this.currentPage * this.workersPerPage < this.tablaTrabajadores.length) {
            this.currentPage++;
            this.updatePage();
        }
    }
    updatePage() {
        const trabajadoresEnPaginaActual = this.tablaTrabajadores.slice((this.currentPage - 1) * this.workersPerPage, this.currentPage * this.workersPerPage);
        const todosMarcados = trabajadoresEnPaginaActual.every(trabajador => trabajador.accion);
        const otrosMarcados = this.trabajadoresMarcados.every(trabajador => trabajador.accion);
        this.marcarTodos = todosMarcados && otrosMarcados;
    }
    mostrarError(message, header) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header || 'Alerta',
                message: message,
                buttons: ['OK'],
            });
            alert.present();
        });
    }
    precargarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dataUrl = history.state.data;
            const tipoPermiso = history.state.tipo;
            yield this.utils.presentLoading();
            console.log('dataUrl', dataUrl);
            if (dataUrl) {
                this.data = dataUrl;
                this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                this.tipoPermiso = dataUrl['strTipoTrabajo'];
                this.tablaTrabajadores = dataUrl['listaTrabajadoresMigrados'];
                this.saveDataService.setData(dataUrl);
            }
            else {
                this.data = new src_app_interfaces_edguardar_permiso_trabajo_app__WEBPACK_IMPORTED_MODULE_7__["EDGuardarPermisoTrabajoAPP"]();
                yield this.allTrabajadores();
                this.saveDataService.setData(this.data);
                this.tipoPermiso = tipoPermiso;
            }
            this.totalPage = Math.ceil(this.tablaTrabajadores.length / this.workersPerPage);
            this.utils.dismissLoading();
        });
    }
    numberOnly(event) {
        console.log('event', event.key);
        if (event.key === 'Unidentified') {
            event.target.value = '';
        }
        const regex = new RegExp(/^\d+$/);
        if (!regex.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
        }
    }
    cleanInput(event) {
        console.log('event', event);
        if (this.numeroDeDocumento) {
            this.numeroDeDocumento = this.numeroDeDocumento.replace(/[^0-9]/g, '');
        }
    }
};
CrearPermisoPage.ctorParameters = () => [
    { type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"] },
    { type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_4__["TablaTrabajadoresService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"] },
    { type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"] },
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__["ContextService"] }
];
CrearPermisoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-permiso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-permiso.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/crear-permiso/crear-permiso.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-permiso.page.scss */ "./src/app/pages/SST/crear-permiso/crear-permiso.page.scss")).default]
    })
], CrearPermisoPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-crear-permiso-crear-permiso-module-es2015.js.map