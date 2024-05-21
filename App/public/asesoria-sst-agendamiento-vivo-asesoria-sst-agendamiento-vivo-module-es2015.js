(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asesoria-sst-agendamiento-vivo-asesoria-sst-agendamiento-vivo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cita-item-accordion/cita-item-accordion.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cita-item-accordion/cita-item-accordion.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-accordion>\n  <ion-item slot=\"header\" color=\"light\" (click)=\"onClickHiddenAccordion(!isHiddenAccordion)\">\n    <ion-label>{{citaDisponible?.fechaTexto | customTitlecase}}</ion-label>\n    <ion-icon name=\"caret-down-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n  <div slot=\"content\" [hidden]=\"isHiddenAccordion\">\n    <ion-grid>\n      <ion-row *ngIf=\"citaDisponible.mensaje===''; else noHayDisponibilidad\">\n        <ion-col size=\"3\" *ngFor=\"let horaDisponible of citaDisponible?.citas\" [value]=\"horaDisponible\">\n          <ion-label class=\"label-hora\" (click)=\"onClickHora(horaDisponible.id)\" [ngClass]=\"{'hora-seleccionada': horaDisponible.id===hourSelected}\" value=\"\">{{horaDisponible.hora}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-accordion>\n\n<ng-template #noHayDisponibilidad>\n  <ion-col>{{citaDisponible.mensaje}}</ion-col>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-no-padding\" lines=\"none\">\n    <app-title-bar [title]=\"'AGENDAMIENTO ENVIVO'\" imgUrl=\"assets/img/asesoria-en-vivo.png\"></app-title-bar>\n\n    <ion-card class=\"card-empresa\">\n      <ion-card-header>\n        <ion-card-subtitle class=\"titleCardEmpresa\">Empresa</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content class=\"titleEmpresa\">\n        {{ empresa?.razonSocial }}<br />\n        {{ empresa?.tipoDocumento }} {{ empresa?.documentoEmp }}<br />\n        Departamento: {{ empresa?.nombreDepartamento }}\n      </ion-card-content>\n    </ion-card>\n\n    <form [formGroup]=\"formGroup1\" [hidden]=\"isHiddenForm1\">\n      <ion-card class=\"card-solicitante\">\n        <ion-card-content class=\"titleCardSolicitante\" style=\"align-items: flex-start;\">\n          <div class=\"div-item-solicitante\">\n            <ion-label class=\"my-item-label-Solicitante\">Identificación Solicitante</ion-label><br />\n            <ion-label class=\"input-solicitante\">{{identificacionSolicitante}}</ion-label><br />\n          </div>\n\n          <div class=\"div-item-solicitante\">\n            <ion-label class=\"my-item-label-Solicitante\">Nombre Solicitante</ion-label><br />\n            <ion-label class=\"input-solicitante\">{{nombreSolicitante}}</ion-label><br />\n          </div>\n\n          <div class=\"div-item-solicitante\">\n            <ion-label class=\"my-item-label-Solicitante\">Correo Electrónico</ion-label><br />\n            <ion-label class=\"input-solicitante\">{{correElectronicoSolicitante}}</ion-label><br />\n          </div>\n\n          <ion-label class=\"my-item-label-Solicitante\">Cargo</ion-label><br />\n          <ion-input formControlName=\"cargoFormControl\" type=\"text\" class=\"input-solicitante\"></ion-input>\n\n\n        </ion-card-content>\n      </ion-card>\n\n      <ion-item>\n        <ion-radio-group formControlName=\"contactoFormControl\" value=\"celular\" class=\"ion-grid-contacto\">\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label position=\"stacked\" class=\"label-contacto\">\n                  <span [ngStyle]=\"{'color':colorLabel}\">Contacto</span>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"6\" class=\"ion-align-items-center ion-justify-content-center\">\n                <div class=\"div-radio-contacto\">\n                  <ion-item class=\"ion-align-items-center ion-justify-content-center\">\n                    <ion-label class=\"label-radio-contacto\">Teléfono</ion-label>\n                    <ion-radio slot=\"start\" value=\"telefono\" (click)=\"onClickContacto('T')\" class=\"radio-contacto\"></ion-radio>\n                  </ion-item>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\" class=\"ion-align-items-center ion-justify-content-center\">\n                <ion-item class=\"ion-align-items-center ion-justify-content-center\">\n                  <ion-label class=\"label-radio-contacto\">Celular</ion-label>\n                  <ion-radio slot=\"start\" value=\"celular\" (click)=\"onClickContacto('C')\" checked class=\"radio-contacto\"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-radio-group>\n      </ion-item>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"5\" [hidden]=\"isHiddenIndicativo\">\n            <ion-item [class.invalid]=\"isNumeroContactoInvalid()\">\n              <ion-label position=\"stacked\" class=\"label-contacto-numero\">\n                <span [ngStyle]=\"{'color':colorLabel}\">Indicativo</span>\n              </ion-label>\n              <ion-row>\n                <ion-col size=\"5\" [hidden]=\"isHiddenIndicativo\">\n                  <ion-input type=\"hidden\" value=\"60\"></ion-input>\n                  <div class=\"input-contacto-indicativo\" [ngStyle]=\"{'border-color':colorLabel}\">60</div>\n                </ion-col>\n                <ion-col [hidden]=\"isHiddenIndicativo\">\n                  <ion-input type=\"number\" (ionChange)=\"onChangeIndicativo($event)\" maxlength=\"1\" formControlName=\"indicativoFormControl\" (keydown)=\"validarMaximoCaracteres($event, 1)\" class=\"input-contacto input-contacto-indinum\" [ngStyle]=\"{'border-color':colorLabel}\"></ion-input>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-col>\n          <ion-col class=\"col-numero-contacto\">\n            <ion-row>\n              <ion-col>\n                <ion-item [class.invalid]=\"isNumeroContactoInvalid()\">\n                  <ion-label position=\"stacked\" class=\"label-contacto-numero\">\n                    <span [ngStyle]=\"{'color':colorLabel}\">Número Contacto</span>\n                  </ion-label>\n                  <ion-input formControlName=\"numeroContactoFormControl\" type=\"number\" (ionChange)=\"onChangeNumero($event)\" (keydown)=\"validarMaximoCaracteres($event, maximoCaracteresNumero)\" class=\"input-contacto input-contacto-numero input-contacto-indinum\" [ngStyle]=\"{'border-color':colorLabel}\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item [class.invalid]=\"isTemaAsesoriaInvalid()\">\n        <div class=\"div-ion-select\">\n          <ion-label position=\"stacked\" class=\"div-ion-select-label\">\n            <span class=\"div-ion-select-label-span\">Tema Asesoría/Asistencia en SST</span>\n          </ion-label>\n          <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"temaAsesoriaFormControl\" (ionChange)=\"onChangeTema($event)\">\n            <ion-select-option *ngFor=\"let temaAsesoria of temasAsesoria\" [value]=\"temaAsesoria\">\n              {{temaAsesoria.nombre}}\n            </ion-select-option>\n          </ion-select>\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">\n          <span [ngStyle]=\"{'color':colorLabel}\">Descripción Tema Seleccionado</span>\n        </ion-label>\n        <ion-textarea disabled class=\"tema-observaciones\">{{temaObservaciones}}</ion-textarea>\n      </ion-item>\n\n      <ion-button (click)=\"siguiente()\" class=\"btn-aceptar\">Aceptar</ion-button>\n      &nbsp;&nbsp;\n      <ion-button (click)=\"cancelar()\" class=\"btn-cancelar\">Cancelar</ion-button>\n    </form>\n\n    <form [formGroup]=\"formGroup2\" [hidden]=\"isHiddenForm2\">\n\n      <!--<ion-item [class.invalid]=\"isExpertoTecnicoInvalid()\">-->\n      <ion-item>\n        <div class=\"div-ion-select\">\n          <ion-label position=\"stacked\" class=\"div-ion-select-label\">\n            <span class=\"div-ion-select-label-span\">Experto Técnico SST</span>\n          </ion-label>\n          <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"expertoTecnicoFormControl\" [(ngModel)]=\"expertoSeleccionado\" (ionChange)=\"onChangeExperto($event)\">\n            <ion-select-option *ngFor=\"let expertoTecnico of expertosTecnicos\" [value]=\"expertoTecnico\">\n              {{expertoTecnico.nombre | customTitlecase }}\n            </ion-select-option>\n          </ion-select>\n        </div>\n      </ion-item>\n\n      <!--<ion-item [class.invalid]=\"isFechaInvalid()\">-->\n      <ion-item>\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/fecha.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span [ngStyle]=\"{'color':colorLabel}\" class=\"label-seleccione-fecha\">Seleccione fecha disponible para tu cita</span>\n        </ion-label>\n        <ion-datetime [(ngModel)]=\"fechaOcurrencia\" displayFormat=\"DD MMM YYYY\" min=\"{{getDate(WHICH_DATE_ENUM.MIN)}}\" max=\"{{getDate(WHICH_DATE_ENUM.MAX)}}\" cancelText=\"Cancelar\" doneText=\"Hecho\" formControlName=\"fechaFormControl\" [monthShortNames]=\"MONTH_SHORT_NAMES\" (ionChange)=\"onChangeFecha()\"></ion-datetime>\n      </ion-item>\n\n      <ion-accordion-group #accordionGroup>\n        <div>\n          <app-cita-item-accordion *ngFor=\"let citaDisponible of citasDisponibles\" [citaDisponible]=\"citaDisponible\" (horaSeleccionada)=\"recibirFechaHoraSeleccionada($event)\"></app-cita-item-accordion>\n        </div>\n      </ion-accordion-group>\n\n      <!--<ion-item [class.invalid]=\"isTipoCanalInvalid()\"></ion-item>-->\n      <ion-item>\n        <div class=\"div-ion-select\">\n          <ion-label position=\"stacked\" class=\"div-ion-select-label\">\n            <span class=\"div-ion-select-label-span\">Tipo Canal</span>\n          </ion-label>\n          <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"tipoCanalFormControl\" (ionChange)=\"onChangeTipoCanal($event)\">\n            <ion-select-option *ngFor=\"let tipoCanal of tiposCanal\" [value]=\"tipoCanal\">\n              {{tipoCanal.nombre | customTitlecase }}\n            </ion-select-option>\n          </ion-select>\n        </div>\n      </ion-item>\n\n      <!--<ion-item [class.invalid]=\"isObservacionInvalid()\">-->\n      <ion-item>\n        <ion-label position=\"stacked\">\n          <span [ngStyle]=\"{'color':colorLabel}\">Observaciones</span>\n        </ion-label>\n        <ion-textarea formControlName=\"observacionFormControl\" class=\"tema-observaciones\" [ngStyle]=\"{'border-color':colorLabel}\"></ion-textarea>\n      </ion-item>\n\n      <ion-button (click)=\"agendarCita()\" [disabled]=\"isDisabledAgendarCita\" class=\"btn-agendar\">{{isReagendar?'Reagendar':'Agendar'}} Cita</ion-button>\n      &nbsp;&nbsp;\n      <ion-button (click)=\"regresar()\" class=\"btn-regresar\">Regresar</ion-button>\n    </form>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/cita-item-accordion/cita-item-accordion.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cita-item-accordion/cita-item-accordion.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-hora {\n  display: block;\n  border-radius: 20px;\n  border: #ff7500 2px solid;\n  padding: 3px 0;\n}\n\n.hora-seleccionada {\n  background-color: #ff7500;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaXRhLWl0ZW0tYWNjb3JkaW9uL2NpdGEtaXRlbS1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaXRhLWl0ZW0tYWNjb3JkaW9uL2NpdGEtaXRlbS1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtaG9yYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6ICNmZjc1MDAgMnB4IHNvbGlkO1xuICBwYWRkaW5nOiAzcHggMDtcbn1cblxuLmhvcmEtc2VsZWNjaW9uYWRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzUwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/cita-item-accordion/cita-item-accordion.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cita-item-accordion/cita-item-accordion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CitaItemAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitaItemAccordionComponent", function() { return CitaItemAccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_pages_asesoria_sst_agendamiento_vivo_asesoria_sst_agendamiento_vivo_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page */ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.ts");



let CitaItemAccordionComponent = class CitaItemAccordionComponent {
    constructor(compPadre) {
        this.compPadre = compPadre;
        this.horaSeleccionada = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.compPadre.refrescarAgendaSubject.subscribe((pId) => {
            this.hourSelected = pId;
        });
    }
    ngOnInit() {
        this.isHiddenAccordion = false;
        this.hourSelected = 0;
    }
    onClickHiddenAccordion(hide) {
        this.isHiddenAccordion = hide;
    }
    onClickHora(pId) {
        this.horaSeleccionada.emit(pId);
    }
};
CitaItemAccordionComponent.ctorParameters = () => [
    { type: src_app_pages_asesoria_sst_agendamiento_vivo_asesoria_sst_agendamiento_vivo_page__WEBPACK_IMPORTED_MODULE_2__["AsesoriaSstAgendamientoVivoPage"] }
];
CitaItemAccordionComponent.propDecorators = {
    citaDisponible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    horaSeleccionada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
CitaItemAccordionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cita-item-accordion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cita-item-accordion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cita-item-accordion/cita-item-accordion.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cita-item-accordion.component.scss */ "./src/app/components/cita-item-accordion/cita-item-accordion.component.scss")).default]
    })
], CitaItemAccordionComponent);



/***/ }),

/***/ "./src/app/entities/asesoria-sst.ts":
/*!******************************************!*\
  !*** ./src/app/entities/asesoria-sst.ts ***!
  \******************************************/
/*! exports provided: AsesoriaSst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaSst", function() { return AsesoriaSst; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");
/* harmony import */ var _tema_asesoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tema-asesoria */ "./src/app/entities/tema-asesoria.ts");


class AsesoriaSst extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(id = 0) {
        super(id);
    }
    get idEmpresa() {
        return this._idEmpresa;
    }
    set idEmpresa(idEmpresa) {
        this._idEmpresa = idEmpresa;
    }
    get idTrabajador() {
        return this._idTrabajador;
    }
    set idTrabajador(idTrabajador) {
        this._idTrabajador = idTrabajador;
    }
    get contacto() {
        return this._contacto;
    }
    set contacto(contacto) {
        this._contacto = contacto;
    }
    get indicativo() {
        return this._indicativo;
    }
    set indicativo(indicativo) {
        this._indicativo = indicativo;
    }
    get numeroContacto() {
        return this._numeroContacto;
    }
    set numeroContacto(numeroContacto) {
        this._numeroContacto = numeroContacto;
    }
    get idTema() {
        return this._idTema;
    }
    set idTema(idTema) {
        this._idTema = idTema;
    }
    get temaAsesoria() {
        return this._temaAsesoria;
    }
    set temaAsesoria(temaAsesoria) {
        this._temaAsesoria = temaAsesoria;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get hora() {
        return this._hora;
    }
    set hora(hora) {
        this._hora = hora;
    }
    get canalAsistencia() {
        return this._canalAsistencia;
    }
    set canalAsistencia(canalAsistencia) {
        this._canalAsistencia = canalAsistencia;
    }
    get idExpertoTecnico() {
        return this._idExpertoTecnico;
    }
    set idExpertoTecnico(idExpertoTecnico) {
        this._idExpertoTecnico = idExpertoTecnico;
    }
    get expertoTecnico() {
        return this._expertoTecnico;
    }
    set expertoTecnico(expertoTecnico) {
        this._expertoTecnico = expertoTecnico;
    }
    static parse(json) {
        return json.map((item) => {
            const asesoria = new AsesoriaSst(item.id);
            const jsonTema = item.tema;
            asesoria.temaAsesoria = new _tema_asesoria__WEBPACK_IMPORTED_MODULE_1__["TemaAsesoria"](jsonTema);
            asesoria.fecha = item.fecha;
            asesoria.idTema = item.idTema;
            asesoria.idExpertoTecnico = item.idExpertoTecnico;
            return asesoria;
        });
    }
    toUrlSearchParams() {
        const params = new URLSearchParams();
        params.append('contacto', this._contacto);
        params.append('indicativo', String(this._indicativo));
        params.append('numeroContacto', String(this._numeroContacto));
        params.append('idTemaAsesoria', String(this._temaAsesoria.id));
        return params;
    }
    toJson() {
        return JSON.stringify({
            nitEmpresa: String(this.idEmpresa),
            cedulaQuienReporta: String(this.idTrabajador),
            contacto: this._contacto,
            indicativo: this._indicativo,
            numeroContacto: this._numeroContacto,
            temaAsesoria: String(this._temaAsesoria.id),
            fecha: this._fecha,
            hora: this._hora,
            canalAsistencia: this._canalAsistencia,
            expertoTecnico: String(this._expertoTecnico.id),
        });
    }
}


/***/ }),

/***/ "./src/app/entities/cita-disponible.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/cita-disponible.ts ***!
  \*********************************************/
/*! exports provided: CitaDisponible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitaDisponible", function() { return CitaDisponible; });
/* harmony import */ var _cita_hora_disponible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cita-hora-disponible */ "./src/app/entities/cita-hora-disponible.ts");

class CitaDisponible {
    constructor(json, fechaSeleccionada) {
        if (json.edRespuestaServicio !== null && json.edRespuestaServicio.intRespuesta === 3) {
            this._mensaje = json.edRespuestaServicio.strRespuesta;
            this._fecha = fechaSeleccionada;
        }
        else {
            const tFecha = json.Dtm_FechaCita;
            this._fecha = tFecha.replace('T00:00:00', '');
            this._citas = _cita_hora_disponible__WEBPACK_IMPORTED_MODULE_0__["CitaHoraDisponible"].parse(json.listaHorasFecha);
            this.mensaje = '';
        }
        const date = new Date(this._fecha + 'T00:00:00-05:00');
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        this._fechaTexto = date.toLocaleDateString('es-ES', options).replace(/ de /g, ' ');
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get fechaTexto() {
        return this._fechaTexto;
    }
    set fechaTexto(fechaTexto) {
        this._fechaTexto = fechaTexto;
    }
    get citas() {
        return this._citas;
    }
    set citas(citas) {
        this._citas = citas;
    }
    get mensaje() {
        return this._mensaje;
    }
    set mensaje(mensaje) {
        this._mensaje = mensaje;
    }
    static parse(json, fechaSeleccionada) {
        return json.map((item) => new CitaDisponible(item, fechaSeleccionada));
    }
}


/***/ }),

/***/ "./src/app/entities/cita-hora-disponible.ts":
/*!**************************************************!*\
  !*** ./src/app/entities/cita-hora-disponible.ts ***!
  \**************************************************/
/*! exports provided: CitaHoraDisponible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitaHoraDisponible", function() { return CitaHoraDisponible; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class CitaHoraDisponible extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Pk_Id_ExpertoTecnicoAgenda);
        this._hora = json.strHoraCita;
    }
    get hora() {
        return this._hora;
    }
    set hora(hora) {
        this._hora = hora;
    }
    static parse(json) {
        return json.map((item) => new CitaHoraDisponible(item));
    }
}


/***/ }),

/***/ "./src/app/entities/experto-tecnico.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/experto-tecnico.ts ***!
  \*********************************************/
/*! exports provided: ExpertoTecnico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertoTecnico", function() { return ExpertoTecnico; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class ExpertoTecnico extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Fk_ID_Usuario);
        this._nombre = json.strNombreExpertoTecnico;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new ExpertoTecnico(item));
    }
}


/***/ }),

/***/ "./src/app/entities/tipo-canal.ts":
/*!****************************************!*\
  !*** ./src/app/entities/tipo-canal.ts ***!
  \****************************************/
/*! exports provided: TipoCanal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoCanal", function() { return TipoCanal; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class TipoCanal extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Pk_ID_EV_TipoCanal);
        this._nombre = json.strDescripcionCanal;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new TipoCanal(item));
    }
}


/***/ }),

/***/ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AsesoriaSstAgendamientoVivoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaSstAgendamientoVivoPageRoutingModule", function() { return AsesoriaSstAgendamientoVivoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asesoria_sst_agendamiento_vivo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asesoria-sst-agendamiento-vivo.page */ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.ts");




const routes = [
    {
        path: '',
        component: _asesoria_sst_agendamiento_vivo_page__WEBPACK_IMPORTED_MODULE_3__["AsesoriaSstAgendamientoVivoPage"]
    },
];
let AsesoriaSstAgendamientoVivoPageRoutingModule = class AsesoriaSstAgendamientoVivoPageRoutingModule {
};
AsesoriaSstAgendamientoVivoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AsesoriaSstAgendamientoVivoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AsesoriaSstAgendamientoVivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaSstAgendamientoVivoPageModule", function() { return AsesoriaSstAgendamientoVivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_cita_item_accordion_cita_item_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/cita-item-accordion/cita-item-accordion.component */ "./src/app/components/cita-item-accordion/cita-item-accordion.component.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _asesoria_sst_agendamiento_vivo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asesoria-sst-agendamiento-vivo-routing.module */ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo-routing.module.ts");
/* harmony import */ var _asesoria_sst_agendamiento_vivo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asesoria-sst-agendamiento-vivo.page */ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.ts");






let AsesoriaSstAgendamientoVivoPageModule = class AsesoriaSstAgendamientoVivoPageModule {
};
AsesoriaSstAgendamientoVivoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _asesoria_sst_agendamiento_vivo_page__WEBPACK_IMPORTED_MODULE_5__["AsesoriaSstAgendamientoVivoPage"],
            src_app_components_cita_item_accordion_cita_item_accordion_component__WEBPACK_IMPORTED_MODULE_2__["CitaItemAccordionComponent"]
        ],
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _asesoria_sst_agendamiento_vivo_routing_module__WEBPACK_IMPORTED_MODULE_4__["AsesoriaSstAgendamientoVivoPageRoutingModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AsesoriaSstAgendamientoVivoPageModule);



/***/ }),

/***/ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\n.list {\n  margin: 1px 0 7rem;\n}\nion-content ion-list form {\n  text-align: center;\n}\nion-content ion-list form ion-item {\n  background-color: inherit !important;\n}\nion-content ion-list form ion-item.ion-invalid, ion-content ion-list form ion-item.ion-valid {\n  --highlight-background: none;\n}\nion-content ion-list form ion-item ion-label img {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-list form ion-item ion-label span {\n  color: #283a49;\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: auto;\n  margin-bottom: auto;\n  white-space: break-spaces;\n}\nion-content ion-list form ion-item h2 {\n  white-space: pre-wrap;\n  text-align: center;\n  color: #ff7500;\n  font-weight: 500 !important;\n  font-size: 16px !important;\n}\nion-content ion-list form button {\n  padding-bottom: 0.5rem;\n}\nion-content ion-list form button span img {\n  width: 4.5rem;\n}\n.label {\n  font-size: 18px;\n  color: #283a49 !important;\n  font-weight: bold !important;\n}\n.label-hora {\n  display: block;\n  border-radius: 20px;\n  border: #ff7500 2px solid;\n  padding: 3px 0;\n}\n.titleCardEmpresa {\n  color: #ffffff;\n  font-weight: bold;\n}\n.titleEmpresa {\n  opacity: 1;\n  color: white;\n  font-weight: bold;\n}\n.card-empresa {\n  box-shadow: 0px 8px 8px -2px rgba(0, 0, 0, 0.71);\n  margin-inline: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #283a49;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.titleCardSolicitante {\n  color: #ffffff;\n  font-weight: bold;\n  text-align: left;\n}\n.card-solicitante {\n  box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.71);\n  border-radius: 20px;\n  background-color: #283a49;\n  margin: 15px 20px;\n}\n.my-item-Solicitante {\n  --background: #283a49;\n  color: #ffffff;\n  font-weight: bold;\n  height: 54px;\n  opacity: 1 !important;\n}\n.input-solicitante {\n  --padding-top: 3px;\n  --padding-bottom: 4px;\n  opacity: 1 !important;\n  color: #ff7500 !important;\n  --padding-start: 0px;\n}\n.my-item-label-Solicitante {\n  color: #ffffff !important;\n  font-weight: bold !important;\n}\n.my-solicitante[disabled] {\n  opacity: 1;\n}\n.div-item-solicitante {\n  border-bottom: 1px #d2d0d0 solid;\n  margin-bottom: 10px;\n}\n.font-black {\n  color: black;\n}\nion-button {\n  margin: 30px 0;\n}\nion-item.sc-ion-textarea-md-h,\nion-item .sc-ion-textarea-md-h,\nion-item.sc-ion-textarea-ios-h,\nion-item .sc-ion-textarea-ios-h {\n  align-self: auto;\n  margin-top: 10px;\n}\nion-thumbnail.thumb {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.item-interactive-disabled:not(.item-multiple-inputs) .sc-ion-label-md-h {\n  opacity: 1 !important;\n}\n.label-contacto {\n  margin-left: 10px;\n}\n.ion-grid-contacto {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.radio-contacto {\n  margin-inline-end: 10px;\n}\n.div-radio-contacto {\n  width: 135px;\n  margin-left: 30px;\n}\n.label-radio-contacto {\n  font-weight: bold;\n}\n.input-contacto {\n  border: 1px solid;\n  border-radius: 10px;\n  text-align: left;\n  height: 34px;\n  max-height: 34px;\n}\n.input-contacto-indicativo {\n  background-color: #d2cfcf !important;\n  border: 1px solid;\n  border-radius: 10px;\n  text-align: left;\n  color: #ff7500 !important;\n  opacity: 1 !important;\n  height: 34px !important;\n  max-height: 34px !important;\n  text-align: center;\n  padding-top: 6px;\n  font-weight: bold;\n}\n.input-contacto-indicativo {\n  --opacity: 1 !important;\n}\n.input-contacto-indinum {\n  --padding-start: 5px;\n}\n.col-numero-contacto {\n  margin: 0px;\n  padding-left: 0px;\n}\n.label-contacto-numero {\n  position: relative;\n  top: -5px;\n}\n.div-ion-select {\n  background-color: #283a49;\n  color: white;\n  border-radius: 9px;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 100%;\n  max-width: 100%;\n  height: 50px;\n}\nion-select {\n  width: 100%;\n  max-width: 100%;\n  margin-top: 15px;\n  padding-left: 0px;\n  font-size: 14px;\n}\n.div-ion-select-label {\n  position: absolute !important;\n  top: 12%;\n}\n.div-ion-select-label-span {\n  color: white !important;\n  font-weight: bold !important;\n  font-size: 15px !important;\n}\n.label-seleccione-fecha {\n  font-size: 14px !important;\n}\nion-textarea {\n  border: 1px black SOLID;\n  border-radius: 10px;\n  padding: 8px;\n}\n.btn-aceptar {\n  --background: green !important;\n  --border-radius: 12px;\n}\n.btn-cancelar {\n  --background: red !important;\n  --border-radius: 12px;\n}\n.btn-agendar {\n  --background: #ff7500 !important;\n  --border-radius: 12px;\n}\n.btn-regresar {\n  --background: #283a49 !important;\n  --border-radius: 12px;\n}\n.tema-observaciones {\n  text-align: justify;\n  border: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNlc29yaWEtc3N0LWFnZW5kYW1pZW50by12aXZvL2FzZXNvcmlhLXNzdC1hZ2VuZGFtaWVudG8tdml2by5wYWdlLnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEVEY7QUNZQSx1Q0FBQTtBQTZEQTs7O0VBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRDlFRjtBQ2lGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0EsbUNBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLDhCQUFBO0FEbkZGO0FDc0ZBO0VBQ0UsaURBQUE7RUFDQSxtREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7QURuRkY7QUNzRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLHNDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLGlDQUFBO0VBRUEsaUNBQUE7RUFFQSw4QkFBQTtBRDNGRjtBQXhNQTtFQUNFLGtCQUFBO0FBMk1GO0FBdE1JO0VBQ0Usa0JBQUE7QUF5TU47QUF2TU07RUFDRSxvQ0FBQTtBQXlNUjtBQXZNUTtFQUVFLDRCQUFBO0FBd01WO0FBcE1VO0VBQ0UsYUMrRE87RUQ5RFAsY0M4RE87QUR3SW5CO0FBbk1VO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQXFNWjtBQWpNUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQW1NVjtBQS9MTTtFQUNFLHNCQUFBO0FBaU1SO0FBOUxVO0VBQ0UsYUFBQTtBQWdNWjtBQXhMQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBMkxGO0FBeExBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBMkxGO0FBeExBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBMkxGO0FBeExBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTJMRjtBQXhMQTtFQUVFLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBMkxGO0FBeExBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUEyTEY7QUF4TEE7RUFFRSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQTJMRjtBQXhMQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBMkxGO0FBeExBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQTJMRjtBQXhMQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUEyTEY7QUF4TEE7RUFDRSxVQUFBO0FBMkxGO0FBeExBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtBQTJMRjtBQXhMQTtFQUNFLFlBQUE7QUEyTEY7QUF4TEE7RUFDRSxjQUFBO0FBMkxGO0FBeExBOzs7O0VBSUUsZ0JBQUE7RUFDQSxnQkFBQTtBQTJMRjtBQXhMQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBMkxGO0FBeExBO0VBQ0UscUJBQUE7QUEyTEY7QUF4TEE7RUFDRSxpQkFBQTtBQTJMRjtBQXhMQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTJMRjtBQXhMQTtFQUNFLHVCQUFBO0FBMkxGO0FBeExBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBMkxGO0FBeExBO0VBQ0UsaUJBQUE7QUEyTEY7QUF4TEE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEyTEY7QUF4TEE7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBMkxGO0FBeExBO0VBQ0UsdUJBQUE7QUEyTEY7QUF4TEE7RUFDRSxvQkFBQTtBQTJMRjtBQXhMQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQTJMRjtBQXhMQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQTJMRjtBQXhMQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQTJMRjtBQXhMQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUEyTEY7QUF4TEE7RUFDRSw2QkFBQTtFQUNBLFFBQUE7QUEyTEY7QUF4TEE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUEyTEY7QUF4TEE7RUFDRSwwQkFBQTtBQTJMRjtBQXhMQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBMkxGO0FBeExBO0VBQ0UsOEJBQUE7RUFDQSxxQkFBQTtBQTJMRjtBQXhMQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7QUEyTEY7QUF4TEE7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBMkxGO0FBeExBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQTJMRjtBQXhMQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUEyTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc2Vzb3JpYS1zc3QtYWdlbmRhbWllbnRvLXZpdm8vYXNlc29yaWEtc3N0LWFnZW5kYW1pZW50by12aXZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuLyoqIFZhcmlhYmxlcyBkZSBsYSB2ZXJzacOzbiBhbnRlcmlvciAqKi9cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xufVxuXG4uaW9zIGJvZHkuZGFyayBpb24tbW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW46IDFweCAwIDdyZW07XG59XG5cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbS5pb24taW52YWxpZCwgaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbS5pb24tdmFsaWQge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSBpb24tbGFiZWwgaW1nIHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCBzcGFuIHtcbiAgY29sb3I6ICMyODNhNDk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtIGgyIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmY3NTAwO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBidXR0b24ge1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBidXR0b24gc3BhbiBpbWcge1xuICB3aWR0aDogNC41cmVtO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjgzYTQ5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1ob3JhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogI2ZmNzUwMCAycHggc29saWQ7XG4gIHBhZGRpbmc6IDNweCAwO1xufVxuXG4udGl0bGVDYXJkRW1wcmVzYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpdGxlRW1wcmVzYSB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLWVtcHJlc2Ege1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggOHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjcxKTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA4cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNzEpO1xuICBtYXJnaW4taW5saW5lOiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODNhNDk7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aXRsZUNhcmRTb2xpY2l0YW50ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQtc29saWNpdGFudGUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggOHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjcxKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA4cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNzEpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzYTQ5O1xuICBtYXJnaW46IDE1cHggMjBweDtcbn1cblxuLm15LWl0ZW0tU29saWNpdGFudGUge1xuICAtLWJhY2tncm91bmQ6ICMyODNhNDk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1zb2xpY2l0YW50ZSB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmY3NTAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4ubXktaXRlbS1sYWJlbC1Tb2xpY2l0YW50ZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5teS1zb2xpY2l0YW50ZVtkaXNhYmxlZF0ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZGl2LWl0ZW0tc29saWNpdGFudGUge1xuICBib3JkZXItYm90dG9tOiAxcHggI2QyZDBkMCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvbnQtYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46IDMwcHggMDtcbn1cblxuaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLW1kLWgsXG5pb24taXRlbSAuc2MtaW9uLXRleHRhcmVhLW1kLWgsXG5pb24taXRlbS5zYy1pb24tdGV4dGFyZWEtaW9zLWgsXG5pb24taXRlbSAuc2MtaW9uLXRleHRhcmVhLWlvcy1oIHtcbiAgYWxpZ24tc2VsZjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLXRodW1ibmFpbC50aHVtYiB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuXG4uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZDpub3QoLml0ZW0tbXVsdGlwbGUtaW5wdXRzKSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1jb250YWN0byB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaW9uLWdyaWQtY29udGFjdG8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmFkaW8tY29udGFjdG8ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcbn1cblxuLmRpdi1yYWRpby1jb250YWN0byB7XG4gIHdpZHRoOiAxMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5sYWJlbC1yYWRpby1jb250YWN0byB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5wdXQtY29udGFjdG8ge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXgtaGVpZ2h0OiAzNHB4O1xufVxuXG4uaW5wdXQtY29udGFjdG8taW5kaWNhdGl2byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmNmY2YgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmY3NTAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlucHV0LWNvbnRhY3RvLWluZGljYXRpdm8ge1xuICAtLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLmlucHV0LWNvbnRhY3RvLWluZGludW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbn1cblxuLmNvbC1udW1lcm8tY29udGFjdG8ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5sYWJlbC1jb250YWN0by1udW1lcm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuLmRpdi1pb24tc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4M2E0OTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdi1pb24tc2VsZWN0LWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogMTIlO1xufVxuXG4uZGl2LWlvbi1zZWxlY3QtbGFiZWwtc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXNlbGVjY2lvbmUtZmVjaGEge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggYmxhY2sgU09MSUQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmJ0bi1hY2VwdGFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5idG4tY2FuY2VsYXIge1xuICAtLWJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5idG4tYWdlbmRhciB7XG4gIC0tYmFja2dyb3VuZDogI2ZmNzUwMCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5idG4tcmVncmVzYXIge1xuICAtLWJhY2tncm91bmQ6ICMyODNhNDkgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4udGVtYS1vYnNlcnZhY2lvbmVzIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59IiwiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbi8qKiBWYXJpYWJsZXMgZGUgbGEgdmVyc2nDs24gYW50ZXJpb3IgKiovXG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMnO1xuJGFwcC1kaXJlY3Rpb246IGx0cjtcbiRmb250LXNpemU6IDE2cHg7XG4kZm9udC13ZWlnaHQ6IDQwMDtcbiRjb250ZW50LWltZy1zaXplOiAyLjVyZW07XG5cbiRjb2xvcnM6IChcbiAgYmFzZS0xOiAjZTZlYWVlLFxuICBiYXNlLTI6ICNjYWQxZGEsXG4gIGJhc2UtMzogI2FmYjhjNCxcbiAgYmFzZS00OiAjOTZhMGFjLFxuICBiYXNlLTU6ICM3ZThhOTcsXG4gIGJhc2UtNjogIzY4NzY4NCxcbiAgYmFzZS03OiAjNTI2MjcwLFxuICBiYXNlLTg6ICMyODRlNWEsXG4gIHByaW1hcnk6ICNmZjc1MDAsXG4gIGJ0bi1wcmltYXJ5OiAjNTliYWE4LFxuKTtcblxuJHRleHQtaW5wdXQtaW9zLXNob3ctZm9jdWUtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1pb3MtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItaW9zLW9wdGlvbi1zZWxlY3RlZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzZWxlY3QtaW9zLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8taW9zLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYnV0dG9uLWlvcy1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctaW9zLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLWlvcy1hY3RpdmUtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtaW9zLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY2lyY2xlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWlvcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwb3BvdmVyLWlvcy13aWR0aDogMzEwcHg7XG5cbiR0ZXh0LWlucHV0LW1kLXNob3ctZm9jdXMtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1tZC10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuJHBpY2tlci1tZC1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LW1kLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8tbWQtY29sb3Itb246IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcGlja2VyLW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1tZC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiR0b2dnbGUtbWQtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiRhY3Rpb24tc2hlZXQtbWQtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1tZC1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtYnViYmxlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWRvdHMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1tZC13aWR0aDogMzEwcHg7XG5cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbn1cblxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG5cbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: AsesoriaSstAgendamientoVivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaSstAgendamientoVivoPage", function() { return AsesoriaSstAgendamientoVivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_commons_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/commons/locale */ "./src/app/commons/locale.ts");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/entities/entity */ "./src/app/entities/entity.ts");
/* harmony import */ var src_app_entities_asesoria_sst__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/entities/asesoria-sst */ "./src/app/entities/asesoria-sst.ts");
/* harmony import */ var src_app_entities_tema_asesoria__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/entities/tema-asesoria */ "./src/app/entities/tema-asesoria.ts");
/* harmony import */ var _entities_experto_tecnico__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entities/experto-tecnico */ "./src/app/entities/experto-tecnico.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_asesoria_sst_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/asesoria-sst.service */ "./src/app/services/asesoria-sst.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_entities_cita_disponible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/entities/cita-disponible */ "./src/app/entities/cita-disponible.ts");
/* harmony import */ var src_app_entities_tipo_canal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/entities/tipo-canal */ "./src/app/entities/tipo-canal.ts");


















var WHICH_DATE;
(function (WHICH_DATE) {
    WHICH_DATE[WHICH_DATE["MIN"] = 0] = "MIN";
    WHICH_DATE[WHICH_DATE["MAX"] = 1] = "MAX";
    WHICH_DATE[WHICH_DATE["NOW"] = 2] = "NOW";
})(WHICH_DATE || (WHICH_DATE = {}));
let AsesoriaSstAgendamientoVivoPage = class AsesoriaSstAgendamientoVivoPage {
    constructor(formBuilder, actionSheetCtrl, context, asesoriaSstService, alertCtrl, utils, router, route, device) {
        this.formBuilder = formBuilder;
        this.actionSheetCtrl = actionSheetCtrl;
        this.context = context;
        this.asesoriaSstService = asesoriaSstService;
        this.alertCtrl = alertCtrl;
        this.utils = utils;
        this.router = router;
        this.route = route;
        this.device = device;
        this.WHICH_DATE_ENUM = WHICH_DATE;
        this.fechaOcurrencia = (new Date()).toISOString();
        this.MONTH_SHORT_NAMES = src_app_commons_locale__WEBPACK_IMPORTED_MODULE_7__["MONTHS_SHORT"];
        this.refrescarAgendaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.submitAttempt = false;
        this.asesoriaSst = new src_app_entities_asesoria_sst__WEBPACK_IMPORTED_MODULE_10__["AsesoriaSst"]();
        this.compareEntities = src_app_entities_entity__WEBPACK_IMPORTED_MODULE_9__["Entity"].compare;
        this.formGroup1 = formBuilder.group({
            identificacionFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            nombreFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            cargoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)])],
            contactoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            indicativoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)])],
            numeroContactoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])],
            temaAsesoriaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.formGroup2 = formBuilder.group({
            expertoTecnicoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            fechaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tipoCanalFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            observacionFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
        });
    }
    ngOnInit() {
        const bodyClasses = document.body.classList;
        this.colorLabel = '#283a49';
        if (bodyClasses.length >= 1 && bodyClasses[0] === 'dark') {
            this.colorLabel = '#ffffff';
        }
        const getData = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.listaMaestrosSubscription = this.asesoriaSstService.getListaMaestros().subscribe((response) => {
                this.temasAsesoria = src_app_entities_tema_asesoria__WEBPACK_IMPORTED_MODULE_11__["TemaAsesoria"].parse(response.listaTemaAgendamiento);
                this.tiposCanal = src_app_entities_tipo_canal__WEBPACK_IMPORTED_MODULE_17__["TipoCanal"].parse(response.listaTipoCanal);
                this.utils.dismissLoading();
            }, (error) => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__["alertCommunicationError"])(this.alertCtrl);
                this.utils.dismissLoading();
            });
            this.formGroup1.controls.contactoFormControl.setValue('celular');
        });
        this.context.get().then((c) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            getData();
            this.initForms();
            this.empresa = c.empresa;
            this.user = c.trabajador;
            this.identificacionSolicitante = this.user.id.toString();
            this.nombreSolicitante = this.user.nombre;
            this.correElectronicoSolicitante = this.user.correo;
            this.formGroup1.controls.cargoFormControl.setValue(this.user.cargo);
            this.maximoCaracteresNumero = 10;
        }));
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.initForms();
            yield this.validateDataParams();
            if (this.idAsesoria !== -1) {
                this.buscarAgenda();
            }
        });
    }
    validateDataParams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.paramMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.idAsesoria = Number(params.get('id'));
                if (this.idAsesoria === -1) {
                    this.isHiddenForm1 = false;
                    this.isHiddenForm2 = true;
                    this.isReagendar = false;
                    this.strToken = '';
                }
                else {
                    this.isHiddenForm1 = true;
                    this.isHiddenForm2 = false;
                    this.isLoadingParams = true;
                    this.strToken = params.get('token');
                    this.idTema = Number(params.get('idTema'));
                    this.fechaSeleccionada = params.get('fecha');
                    this.fechaOcurrencia = (new Date(this.fechaSeleccionada + 'T00:00:00-05:00')).toISOString();
                    this.isReagendar = true;
                    this.isDisabledAgendarCita = true;
                    yield this.getExpertosTecnicos(this.idTema);
                    setTimeout(() => {
                        this.formGroup2.controls.fechaFormControl.setValue(this.fechaOcurrencia);
                        this.formGroup2.controls.observacionFormControl.setValue('');
                        this.isLoadingParams = false;
                    }, 500);
                }
            }));
        });
    }
    onChangeNumero(event) {
        //this.validForm1();
    }
    onChangeIndicativo(event) {
        //this.validForm1();
    }
    validarMaximoCaracteres(event, maximoCaracteres) {
        const input = event.target;
        if (input.value.length >= maximoCaracteres && event.keyCode !== 8) {
            event.preventDefault();
        }
    }
    onChangeTema(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const temaSeleccionado = event.detail.value;
            this.temaObservaciones = temaSeleccionado.observacion;
            this.formGroup2.controls.expertoTecnicoFormControl.setValue('');
            this.formGroup2.controls.tipoCanalFormControl.setValue('');
            this.formGroup2.controls.fechaFormControl.setValue('');
            this.citasDisponibles = [];
            yield this.getExpertosTecnicos(temaSeleccionado.id);
            // this.validForm1();
        });
    }
    onChangeTipoCanal(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.validForm2();
        });
    }
    onChangeExperto(event) {
        if (!this.isLoadingParams) {
            this.expertoSeleccionado = event.detail.value;
            this.idExpertoTecnico = this.expertoSeleccionado.id;
            this.buscarAgenda();
        }
    }
    onChangeFecha() {
        if (this.fechaOcurrencia) {
            const date = new Date(this.fechaOcurrencia);
            const year = date.getFullYear();
            const month = (1 + date.getMonth()).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            this.fechaSeleccionada = day + '/' + month + '/' + year;
            if (!this.isLoadingParams) {
                this.buscarAgenda();
            }
        }
    }
    isNumeroContactoInvalid() {
        return !this.formGroup1.controls.numeroContactoFormControl.valid
            && this.submitAttempt;
    }
    isCargoInvalid() {
        return !this.formGroup1.controls.numeroContactoFormControl.valid
            && this.submitAttempt;
    }
    isTemaAsesoriaInvalid() {
        return !this.formGroup1.controls.temaAsesoriaFormControl.valid
            && this.submitAttempt;
    }
    isExpertoTecnicoInvalid() {
        return !this.formGroup2.controls.expertoTecnicoFormControl.valid
            && this.submitAttempt;
    }
    isFechaInvalid() {
        return !this.formGroup2.controls.fechaFormControl.valid
            && this.submitAttempt;
    }
    isTipoCanalInvalid() {
        return !this.formGroup2.controls.tipoCanalFormControl.valid
            && this.submitAttempt;
    }
    isObservacionInvalid() {
        return !this.formGroup2.controls.observacionFormControl.valid
            && this.submitAttempt;
    }
    onClickContacto(pContacto) {
        this.isHiddenIndicativo = true;
        this.contacto = 'Celular';
        this.maximoCaracteresNumero = 10;
        this.formGroup1.controls.numeroContactoFormControl.setValue('');
        if (pContacto === 'T') {
            this.isHiddenIndicativo = false;
            this.formGroup1.controls.indicativoFormControl.setValue('');
            this.contacto = 'Telefono';
            this.maximoCaracteresNumero = 7;
        }
        // this.validForm1();
    }
    recibirFechaHoraSeleccionada(pIdHora) {
        this.horaSeleccionada = pIdHora;
        this.refrescarAgenda(pIdHora);
        this.validForm2();
    }
    refrescarAgenda(pIdHora) {
        this.refrescarAgendaSubject.next(pIdHora);
    }
    siguiente() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.validForm1();
            if (!this.formGroup1.valid) {
                this.alert('Alerta', '', 'Los campos señalados son requeridos.');
                return;
            }
            this.isHiddenForm1 = true;
            this.isHiddenForm2 = false;
        });
    }
    getExpertosTecnicos(idTema) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (idTema) {
                yield this.utils.presentLoading();
                this.expertoTecnicoSubscription = this.asesoriaSstService.getExpertosTecnicos(idTema).subscribe((response) => {
                    // No existen expertos
                    if (response.length === 1 && response[0].edRespuestaServicio.intRespuesta === 2) {
                        this.expertosTecnicos = [];
                        this.utils.dismissLoading();
                        this.alert('Atención', '', response[0].edRespuestaServicio.strRespuesta);
                    }
                    else {
                        this.expertosTecnicos = _entities_experto_tecnico__WEBPACK_IMPORTED_MODULE_12__["ExpertoTecnico"].parse(response);
                        this.utils.dismissLoading();
                    }
                    // this.validForm1();
                }, (error) => {
                    Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__["alertCommunicationError"])(this.alertCtrl);
                    this.utils.dismissLoading();
                });
            }
        });
    }
    buscarAgenda() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const temaSelected = this.formGroup1.controls.temaAsesoriaFormControl.value;
            this.horaSeleccionada = 0;
            this.isDisabledAgendarCita = true;
            if (this.idExpertoTecnico && this.fechaSeleccionada && (temaSelected || this.isReagendar)) {
                //await this.utils.presentLoading();
                const tipoAgenda = this.isReagendar ? 2 : 1;
                const idTema = this.isReagendar ? this.idTema : temaSelected.id;
                this.buscarAgendaSubscription = this.asesoriaSstService.getAgendaDisponible(idTema, this.idExpertoTecnico, this.fechaSeleccionada, tipoAgenda, this.strToken).subscribe((response) => {
                    const date = new Date(this.fechaOcurrencia);
                    const year = date.getFullYear();
                    const month = (1 + date.getMonth()).toString().padStart(2, '0');
                    const day = date.getDate().toString().padStart(2, '0');
                    const fechaAgenda = year + '-' + month + '-' + day;
                    this.citasDisponibles = src_app_entities_cita_disponible__WEBPACK_IMPORTED_MODULE_16__["CitaDisponible"].parse(response, fechaAgenda);
                    this.utils.dismissLoading();
                }, (error) => {
                    Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__["alertCommunicationError"])(this.alertCtrl);
                    this.utils.dismissLoading();
                });
            }
        });
    }
    agendarCita() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitAttempt = true;
            if (!this.formGroup2.valid) {
                this.alert('Alerta', '', 'Los campos señalados son requeridos.');
                return;
            }
            yield this.utils.presentLoading();
            // Si es reagendar
            if (this.isReagendar) {
                const data = {
                    Fk_Id_ExpertoTecnicoAgenda: this.horaSeleccionada,
                    intTipoCanal: this.formGroup2.controls.tipoCanalFormControl.value.id,
                    strToken: this.strToken,
                    str_Observaciones: this.formGroup2.controls.observacionFormControl.value,
                    strIP: this.device.uuid
                };
                this.asesoriaSstService.reagendar(data).subscribe((response) => {
                    this.alert('Atención', '', response.edRespuestaServicio.strRespuesta);
                    this.submitAttempt = false;
                    this.utils.dismissLoading();
                    if (response.edRespuestaServicio.intRespuesta === 1) {
                        this.regresar();
                    }
                }, (error) => {
                    Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__["alertCommunicationError"])(this.alertCtrl);
                    this.utils.dismissLoading();
                });
            }
            else {
                const data = this.getDataFromInputs();
                this.asesoriaSstService.agendar(data).subscribe((response) => {
                    this.alert('Atención', '', response.edRespuestaServicio.strRespuesta);
                    this.submitAttempt = false;
                    this.utils.dismissLoading();
                    if (response.edRespuestaServicio.intRespuesta === 1) {
                        this.initForms();
                        this.router.navigate(['/home']);
                    }
                }, (error) => {
                    Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__["alertCommunicationError"])(this.alertCtrl);
                    this.utils.dismissLoading();
                });
            }
        });
    }
    regresar() {
        if (this.isReagendar) {
            this.router.navigate(['/sst-advisory/history-scheduling']);
        }
        else {
            this.isHiddenForm1 = false;
            this.isHiddenForm2 = true;
            this.fechaOcurrencia = '';
            this.fechaSeleccionada = '';
            this.citasDisponibles = [];
        }
    }
    cancelar() {
        this.router.navigate(['sst-advisory']);
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
        return {
            strDocumentoEmpresa: this.empresa.documentoEmp,
            Fk_Id_ExpertoTecnicoAgenda: this.horaSeleccionada,
            intTipoCanal: this.formGroup2.controls.tipoCanalFormControl.value.id,
            strNumeroDocumento: this.user.id,
            FK_ID_EVTemasAgendamiento: this.formGroup1.controls.temaAsesoriaFormControl.value.id,
            Fk_ID_Municipio: this.user.idMunicipio,
            strTipoDocumento: this.user.tipoDocumento,
            strNombres: `${this.user.primerNombre} ${this.user.segundoNombre}`,
            strApellidos: `${this.user.primerApellido} ${this.user.segundoApellido}`,
            strTipoDocumentoEmpresa: this.empresa.tipoDocumento,
            strRazonEmpleador: this.empresa.razonSocial,
            strCorreoElectronicoUsuario: this.user.correo,
            strContacto: this.contacto,
            strNumeroContacto: `${this.contacto == 'Telefono' ? this.formGroup1.controls.indicativoFormControl.value : ''}${this.formGroup1.controls.numeroContactoFormControl.value}`,
            strIP: this.device.uuid,
            strDireccionEmpresa: this.empresa.direccionSedePrincipal,
            strCorreoEmpresa: this.empresa.correo,
            strTelefonoEmpresa: this.empresa.telefono,
            strCargoSolicitante: this.formGroup1.controls.cargoFormControl.value,
            str_Observaciones: this.formGroup2.controls.observacionFormControl.value,
            idDepAfiliado: this.user.idDepartamento
        };
    }
    validForm1() {
        const numero = `${this.formGroup1.controls.numeroContactoFormControl.value}`;
        const tema = this.formGroup1.controls.temaAsesoriaFormControl.value;
        this.disabledSiguiente = true;
        if (numero) {
            if (this.contacto === 'Celular') {
                if (numero.length !== 10) {
                    this.disabledSiguiente = true;
                }
            }
            else {
                const indicativo = `${this.formGroup1.controls.indicativoFormControl.value}`;
                if (indicativo && indicativo.length !== 1) {
                    this.disabledSiguiente = true;
                }
                if (numero && numero.length !== 7) {
                    this.disabledSiguiente = true;
                }
            }
        }
        this.submitAttempt = true;
        if (!this.formGroup1.valid) {
            return;
        }
        if (numero && tema && this.expertosTecnicos && this.expertosTecnicos.length > 0) {
            this.disabledSiguiente = false;
        }
    }
    validForm2() {
        const idExperto = this.formGroup2.controls.expertoTecnicoFormControl.value;
        const tipoCanal = this.formGroup2.controls.tipoCanalFormControl.value;
        this.isDisabledAgendarCita = true;
        if (idExperto && this.fechaSeleccionada && this.horaSeleccionada !== 0 && tipoCanal) {
            this.isDisabledAgendarCita = false;
        }
        this.submitAttempt = true;
        if (!this.formGroup2.valid) {
            return;
        }
    }
    initForms() {
        this.isHiddenIndicativo = true;
        this.fechaOcurrencia = '';
        this.horaSeleccionada = 0;
        this.maximoCaracteresNumero = 10;
        this.temaObservaciones = '';
        this.mensajeDisponible = '';
        this.hayDisponibilidad = false;
        this.isHiddenOtrosCitas = true;
        this.isDisabledAgendarCita = true;
        this.isLoadingParams = false;
        this.disabledSiguiente = true;
        this.contacto = 'Celular';
        this.strToken = '';
        this.formGroup1.controls.contactoFormControl.setValue('celular');
        this.formGroup1.controls.indicativoFormControl.setValue('');
        this.formGroup1.controls.numeroContactoFormControl.setValue('');
        this.formGroup1.controls.temaAsesoriaFormControl.setValue('');
        this.formGroup2.controls.expertoTecnicoFormControl.setValue('');
        this.formGroup2.controls.fechaFormControl.setValue('');
    }
    getDate(whichDate) {
        const date = new Date();
        switch (whichDate) {
            case WHICH_DATE.MIN:
                return date.getFullYear()
                    + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
                    + '-' + ('0' + date.getDate()).slice(-2);
            case WHICH_DATE.MAX:
                return '' + (date.getFullYear() + 1);
        }
    }
};
AsesoriaSstAgendamientoVivoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__["ContextService"] },
    { type: src_app_services_asesoria_sst_service__WEBPACK_IMPORTED_MODULE_14__["AsesoriaSstService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_15__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"] }
];
AsesoriaSstAgendamientoVivoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asesoria-sst-agendamiento-vivo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./asesoria-sst-agendamiento-vivo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./asesoria-sst-agendamiento-vivo.page.scss */ "./src/app/pages/asesoria-sst-agendamiento-vivo/asesoria-sst-agendamiento-vivo.page.scss")).default]
    })
], AsesoriaSstAgendamientoVivoPage);



/***/ })

}]);
//# sourceMappingURL=asesoria-sst-agendamiento-vivo-asesoria-sst-agendamiento-vivo-module-es2015.js.map