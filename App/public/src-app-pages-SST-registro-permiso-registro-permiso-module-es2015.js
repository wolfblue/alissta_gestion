(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-registro-permiso-registro-permiso-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/registro-permiso/registro-permiso.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/registro-permiso/registro-permiso.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar\">\n    <ion-title>Registro Permiso</ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-label class=\"ion-padding\" style=\"font-weight: 800\">Permiso de Trabajo</ion-label>\n  <ion-item class=\"border\">\n    <ion-select (ionChange)=\"onChangePermiso($event)\" okText=\"Aceptar\" cancelText=\"Cancelar\">\n      <ion-item *ngFor=\"let permiso of listaTipoPermiso\">\n        <ion-select-option value=\"{{permiso.PK_ID_PermisoAlturas_MaestroTipoPermiso}}\">{{permiso.strDescripcion}}</ion-select-option>\n      </ion-item>\n    </ion-select>\n  </ion-item>\n\n  <!-- select -->\n  <ion-card>\n    <ion-card-content class=\"ion-padding ion-text-center\">\n      <div\n        style=\"\n          width: 220px;\n          background: #ff7500;\n          height: 220px;\n          justify-content: center;\n          border-radius: 250px;\n          display: flex;\n          align-items: center;\n          margin: auto;\n          margin-bottom: 8px;\n        \"\n        class=\"container ion-padding ion-text-center\"\n      >\n        <img src=\"../../../../assets/img/tipo-incidente.png\" alt=\"img tipo incidente\" />\n      </div>\n      <!-- svg -->\n      <ion-row>\n        <ion-label class=\"ion-text-center\" style=\"font-weight: 800; font-size: 1.2rem; color: black\"\n          ><strong> Recuerde sincronizar la aplicación móvil con la web del sistema en la siguiente opción. </strong>\n        </ion-label>\n      </ion-row>\n      <ion-row class=\"ion-padding\">\n        <ion-icon style=\"font-size: 4rem\" name=\"arrow-down-outline\"></ion-icon>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row class=\"ion-text-center\">\n    <ion-col class=\"col-12\">\n      <img width=\"100\" height=\"100\" src=\"assets/img/nube-sync.png\" (click)=\"getData()\" alt=\"Sincronizar\" />\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/registro-permiso/registro-permiso-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/SST/registro-permiso/registro-permiso-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RegistroPermisoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPermisoPageRoutingModule", function() { return RegistroPermisoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_permiso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-permiso.page */ "./src/app/pages/SST/registro-permiso/registro-permiso.page.ts");




const routes = [
    {
        path: '',
        component: _registro_permiso_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPermisoPage"],
    },
    {
        path: 'crear-permiso',
        loadChildren: () => Promise.all(/*! import() | src-app-pages-SST-crear-permiso-crear-permiso-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-SST-crear-permiso-crear-permiso-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/SST/crear-permiso/crear-permiso.module */ "./src/app/pages/SST/crear-permiso/crear-permiso.module.ts")).then(m => m.CrearPermisoPageModule),
    },
];
let RegistroPermisoPageRoutingModule = class RegistroPermisoPageRoutingModule {
};
RegistroPermisoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPermisoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/registro-permiso/registro-permiso.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/SST/registro-permiso/registro-permiso.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegistroPermisoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPermisoPageModule", function() { return RegistroPermisoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-permiso-routing.module */ "./src/app/pages/SST/registro-permiso/registro-permiso-routing.module.ts");
/* harmony import */ var _registro_permiso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-permiso.page */ "./src/app/pages/SST/registro-permiso/registro-permiso.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let RegistroPermisoPageModule = class RegistroPermisoPageModule {
};
RegistroPermisoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPermisoPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_registro_permiso_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPermisoPage"]],
    })
], RegistroPermisoPageModule);



/***/ }),

/***/ "./src/app/pages/SST/registro-permiso/registro-permiso.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/SST/registro-permiso/registro-permiso.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-toolbar ion-title {\n  --background: #beb2b2;\n  --color: #fff;\n}\n\nion-button .button-inner {\n  justify-content: space-evenly;\n}\n\ndiv.toolbar {\n  background: #ff7500;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\n\ndiv.toolbar ion-title {\n  color: #fff;\n}\n\nion-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\nion-item.border {\n  padding: 4px;\n  border: 1px solid #808080;\n  margin: 24px;\n  border-radius: 10px;\n}\n\nion-select {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL3JlZ2lzdHJvLXBlcm1pc28vcmVnaXN0cm8tcGVybWlzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvcmVnaXN0cm8tcGVybWlzby9yZWdpc3Ryby1wZXJtaXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi10b29sYmFyIHtcbiAgaW9uLXRpdGxlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNiZWIyYjI7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgfVxufVxuaW9uLWJ1dHRvbiAuYnV0dG9uLWlubmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbmRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2ZmNzUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWl0ZW0uYm9yZGVyIHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/SST/registro-permiso/registro-permiso.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/SST/registro-permiso/registro-permiso.page.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroPermisoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPermisoPage", function() { return RegistroPermisoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/SST/data-base.service */ "./src/app/services/SST/data-base.service.ts");
/* harmony import */ var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/data.service */ "./src/app/services/SST/data.service.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");








let RegistroPermisoPage = class RegistroPermisoPage {
    constructor(dataService, utils, router, alertController, dataBaseService, platform, chekInternet) {
        this.dataService = dataService;
        this.utils = utils;
        this.router = router;
        this.alertController = alertController;
        this.dataBaseService = dataBaseService;
        this.platform = platform;
        this.chekInternet = chekInternet;
        this.listaTipoPermiso = [];
    }
    ngOnInit() {
        // this.getFechaMigracion();
        this.tiposDePermiso();
    }
    onChangePermiso(event) {
        this.tipoPermiso = event.detail.value;
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            let internet = yield this.chekInternet.testNetworkConnection();
            if (!this.tipoPermiso) {
                const alert = yield this.alertController.create({
                    header: 'Alerta',
                    message: 'Debe seleccionar un tipo de permiso',
                    buttons: ['OK'],
                });
                yield alert.present();
                this.utils.dismissLoading();
                return;
            }
            try {
                if (internet) {
                    yield this.dataService.infoTrabajo(this.tipoPermiso);
                    yield this.dataService.infoPermisoTrabajo();
                    this.navegarToCrearPermiso();
                }
                else {
                    this.navegarToCrearPermiso();
                }
            }
            catch (error) {
                console.log(error);
                let alert = this.alertController.create({
                    header: 'Error',
                    message: 'Se ha presentado un error al sincronizar la información',
                    buttons: ['OK'],
                });
                (yield alert).present();
            }
            finally {
                this.utils.dismissLoading();
            }
        });
    }
    getFechaMigracion() {
        const lastSync = localStorage.getItem('lastSync');
        if (!lastSync) {
            this.fechaMigracion = 'No se ha realizado la migración';
            this.tipoDeMigrar = false;
            return this.fechaMigracion;
        }
        const date = new Date(lastSync);
        const currentDate = new Date();
        const daysDifference = this.utils.getDaysDifference(date, currentDate);
        const optionsDate = { month: 'short', day: '2-digit', year: 'numeric' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };
        const formattedDate = date.toLocaleDateString('en-US', optionsDate);
        const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
        const fechaMigracion = `${formattedDate} - ${formattedTime}`;
        this.fechaMigracion = fechaMigracion;
        this.tipoDeMigrar = true;
        return this.fechaMigracion;
    }
    tiposDePermiso() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let internet = yield this.chekInternet.testNetworkConnection();
                if (internet) {
                    yield this.dataService.infoPermisoTrabajo();
                }
                this.dataBaseService.open().then(() => {
                    this.dataBaseService.getAllTipoPermiso().subscribe({
                        next: (listaTipoPermiso) => {
                            this.listaTipoPermiso = listaTipoPermiso;
                        },
                        error: error => {
                            console.error('Error al obtener los tipos de permiso:', error);
                        },
                    });
                });
            }
            catch (er) {
                this.dataBaseService.close();
            }
        });
    }
    navegarToCrearPermiso() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let strTipoPermiso = this.listaTipoPermiso.filter(tipoPermiso => tipoPermiso.PK_ID_PermisoAlturas_MaestroTipoPermiso.toString() === this.tipoPermiso);
            this.router.navigate(['/home/permisos/registro-permiso/crear-permiso'], { state: { tipo: strTipoPermiso[0].strDescripcion } });
        });
    }
    sysConnectedCheked() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let platform = this.platform.platforms()[0];
            let conection = yield this.chekInternet.testNetworkConnection();
            if (conection) {
                return { connected: true, platform };
            }
            return { connected: false, platform };
        });
    }
    back() {
        this.router.navigate(['/home/permisos']);
    }
};
RegistroPermisoPage.ctorParameters = () => [
    { type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__["DataBaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] }
];
RegistroPermisoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-permiso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro-permiso.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/registro-permiso/registro-permiso.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro-permiso.page.scss */ "./src/app/pages/SST/registro-permiso/registro-permiso.page.scss")).default]
    })
], RegistroPermisoPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-registro-permiso-registro-permiso-module-es2015.js.map