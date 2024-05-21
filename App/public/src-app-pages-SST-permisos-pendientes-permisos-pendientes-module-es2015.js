(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-permisos-pendientes-permisos-pendientes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div style=\"display: flex; align-items: center\" class=\"toolbar\">\n    <span> <ion-img style=\"width: 32px; height: 32px; margin-right: 12px\" src=\"assets/img/carbon_result-draft.svg\"></ion-img> </span>\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> PERMISOS DE TRABAJO</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Permisos Pendientes</ion-title>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-list>\n      <div *ngFor=\"let item of pendientes\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle> <strong>Ubicación del Trabajado :</strong> {{item.strUbicacionTrabajo}}</ion-card-subtitle>\n            <ion-card-subtitle> <strong>Cantidad de Trabajadores :</strong> {{item.listaTrabajadoresMigrados.length}}</ion-card-subtitle>\n            <ion-card-title>{{formatearFecha(item.dtmFechaRegistro)}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <button *ngIf=\"item.enviar\" class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"enviar(item)\">Enviar</button\n            ><button *ngIf=\"!item.enviar\" class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar(item)\">\n              Continuar\n            </button>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-list>\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"getPermisosPendientes()\">Consultar</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PermisosPendientesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisosPendientesPageRoutingModule", function() { return PermisosPendientesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permisos-pendientes.page */ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts");




const routes = [
    {
        path: '',
        component: _permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_3__["PermisosPendientesPage"],
    },
];
let PermisosPendientesPageRoutingModule = class PermisosPendientesPageRoutingModule {
};
PermisosPendientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PermisosPendientesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PermisosPendientesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisosPendientesPageModule", function() { return PermisosPendientesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _permisos_pendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permisos-pendientes-routing.module */ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes-routing.module.ts");
/* harmony import */ var _permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permisos-pendientes.page */ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let PermisosPendientesPageModule = class PermisosPendientesPageModule {
};
PermisosPendientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _permisos_pendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermisosPendientesPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_6__["PermisosPendientesPage"]],
    })
], PermisosPendientesPageModule);



/***/ }),

/***/ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 8px;\n  height: 32px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL3Blcm1pc29zLXBlbmRpZW50ZXMvcGVybWlzb3MtcGVuZGllbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUFFO0VBQ0UsMENBQUE7QUFFSjtBQUVBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvcGVybWlzb3MtcGVuZGllbnRlcy9wZXJtaXNvcy1wZW5kaWVudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2JlYjJiMjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJi50b29sY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts ***!
  \***************************************************************************/
/*! exports provided: PermisosPendientesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermisosPendientesPage", function() { return PermisosPendientesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/SST/data-base.service */ "./src/app/services/SST/data-base.service.ts");
/* harmony import */ var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/data.service */ "./src/app/services/SST/data.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");







let PermisosPendientesPage = class PermisosPendientesPage {
    constructor(data, utils, router, dataService, alertControoler) {
        this.data = data;
        this.utils = utils;
        this.router = router;
        this.dataService = dataService;
        this.alertControoler = alertControoler;
        this.pendientes = [];
    }
    ngOnInit() {
        this.getPermisosPendientes();
    }
    getPermisosPendientes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.utils.presentLoading();
                this.data.open().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.data.getAllEDGuardarPermisoTrabajoAPP().subscribe({
                        next: (permisos) => {
                            this.utils.dismissLoading();
                            if (permisos.length === 0) {
                                this.alertControoler.create({}).then(alert => {
                                    alert.header = 'Información';
                                    alert.message = 'No hay permisos pendientes';
                                    alert.buttons = ['Aceptar'];
                                    alert.present();
                                });
                            }
                            this.pendientes = permisos;
                            console.log('Permisos pendientes:', permisos);
                        },
                        error: error => {
                            console.error('Error al obtener los permisos pendientes:', error);
                            this.data.close();
                        },
                        complete: () => {
                            console.log('Permisos pendientes completados');
                            this.utils.dismissLoading();
                        },
                    });
                }));
            }
            finally {
                this.utils.dismissLoading();
            }
        });
    }
    continuar(item) {
        // let ruta = item['rutas'][item['rutas'].length - 1];
        this.router.navigate([item['lastRoute']], { state: { data: item } });
    }
    enviar(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // this.selectedItemsService.setSelectedItems([]);
                item['strFechaYHoraInicioAct'] = item['strFechaRegistro'];
                yield this.utils.presentLoading();
                const { status, data } = yield this.dataService.enviarPermisoTrabajo(item);
                this.utils.dismissLoading();
                if (status === 200) {
                    this.alertControoler
                        .create({
                        header: 'Alerta',
                        message: 'Permiso enviado correctamente',
                        buttons: ['Aceptar'],
                    })
                        .then(alert => {
                        alert.present();
                    });
                    this.data.open().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let usuarios = item['listaTrabajadoresMigrados'];
                        usuarios.forEach((usuario) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.data.deleteTrabajadorMigrado(usuario);
                        }));
                        this.data.deleteEDGuardarPermisoTrabajoAPP(item).then(() => {
                            this.utils.dismissLoading();
                            this.pendientes = this.pendientes.filter(permiso => permiso !== item);
                        });
                    }));
                }
                else {
                    this.alertControoler
                        .create({
                        header: 'Alerta',
                        message: `Error al enviar el permiso: ${data} `,
                        buttons: ['Aceptar'],
                    })
                        .then(alert => {
                        alert.present();
                    });
                }
            }
            catch (error) {
                this.utils.dismissLoading();
                console.error('Error al enviar el permiso:', error);
                this.alertControoler
                    .create({
                    header: 'Alerta',
                    message: 'Error al enviar el permiso intenta más tarde',
                    buttons: ['Aceptar'],
                })
                    .then(alert => {
                    alert.present();
                });
            }
        });
    }
    formatearFecha(fecha) {
        const date = new Date(fecha);
        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const anio = date.getFullYear();
        const hora = date.getHours().toString().padStart(2, '0');
        const minutos = date.getMinutes().toString().padStart(2, '0');
        const fechaFormateada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio.toString()}  ${hora}:${minutos}`;
        return fechaFormateada;
    }
    back() {
        this.router.navigate(['/home/permisos']);
    }
};
PermisosPendientesPage.ctorParameters = () => [
    { type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__["DataBaseService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
PermisosPendientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permisos-pendientes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./permisos-pendientes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./permisos-pendientes.page.scss */ "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.scss")).default]
    })
], PermisosPendientesPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-permisos-pendientes-permisos-pendientes-module-es2015.js.map