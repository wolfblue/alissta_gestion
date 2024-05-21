(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-liberar-trabajadores-liberar-trabajadores-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div style=\"display: flex; align-items: center\" class=\"toolbar\">\n    <span> <ion-img style=\"width: 32px; height: 32px; margin-right: 12px\" src=\"assets/img/carbon_result-draft.svg\"></ion-img> </span>\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> PERMISOS DE TRABAJO</strong></ion-title>\n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"toolbar toolcontent\">\n    <ion-title> <ion-icon style=\"transform: rotate(308deg)\" name=\"send\"></ion-icon> Liberar Trabajadores</ion-title>\n  </div>\n\n  <ion-item *ngIf=\"trabajadores.length > 0\" style=\"padding-bottom: 0\" class=\"ion-padding\">\n    <ion-checkbox [(ngModel)]=\"marcarTodos\" (ionChange)=\"onChangeMarcarTodos($event)\"></ion-checkbox>\n    <ion-label>&nbsp;<strong> Seleccionar toda la página</strong></ion-label>\n  </ion-item>\n\n  <div style=\"padding-top: 0\" class=\"ion-padding\" *ngIf=\"trabajadores.length > 0\">\n    <!-- <ion-item *ngFor=\"let trabajador of trabajadores\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{trabajador.}}</ion-card-title>\n          <ion-card-subtitle>{{trabajador}} : {{trabajador}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-button (click)=\"liberarUser(trabajador, trbajador)\" fill=\"clear\" color=\"danger\">liberar</ion-button>\n      </ion-card>\n    </ion-item> -->\n\n    <ion-grid>\n      <ion-row class=\"header-table\">\n        <ion-col size=\"3\">\n          <ion-label>Nombre </ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>ID</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>Cargo</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>Liberar</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngFor=\"let trabajador of trabajadores | slice:(currentPage - 1) * workersPerPage:currentPage * workersPerPage\"\n        class=\"body-table\"\n      >\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strNombreTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strNumeroDocumeto}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>{{trabajador.strCargoTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"check\">\n          <ion-checkbox [(ngModel)]=\"trabajador.accion\"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"pagination-buttons ion-text-center\">\n      <ion-button (click)=\"previousPage()\" [disabled]=\"currentPage === 1\"><ion-icon name=\"chevron-back\"></ion-icon></ion-button>\n      <ion-button [disabled]=\"true\">{{currentPage}}/{{totalPage}}</ion-button>\n      <ion-button (click)=\"nextPage()\" [disabled]=\"currentPage * workersPerPage >= trabajadores.length\"\n        ><ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></ion-button>\n    </div>\n    <div class=\"ion-text-center ion-padding\">\n      <button class=\"guardar-continuar\" *ngIf=\"trabajadores.length > 0\" color=\"secondary\" (click)=\"liberarUser()\">Liberar</button>\n    </div>\n  </div>\n  <div class=\"ion-text-center ion-padding\">\n    <br />\n    <br />\n    <br />\n\n    <button class=\"guardar-continuar\" *ngIf=\"trabajadores.length === 0\" color=\"secondary\" (click)=\"volver()\">Volver</button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: LiberarTrabajadoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiberarTrabajadoresPageRoutingModule", function() { return LiberarTrabajadoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liberar-trabajadores.page */ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts");




const routes = [
    {
        path: '',
        component: _liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_3__["LiberarTrabajadoresPage"],
    },
];
let LiberarTrabajadoresPageRoutingModule = class LiberarTrabajadoresPageRoutingModule {
};
LiberarTrabajadoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LiberarTrabajadoresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.module.ts ***!
  \*******************************************************************************/
/*! exports provided: LiberarTrabajadoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiberarTrabajadoresPageModule", function() { return LiberarTrabajadoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _liberar_trabajadores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liberar-trabajadores-routing.module */ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores-routing.module.ts");
/* harmony import */ var _liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liberar-trabajadores.page */ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let LiberarTrabajadoresPageModule = class LiberarTrabajadoresPageModule {
};
LiberarTrabajadoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _liberar_trabajadores_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiberarTrabajadoresPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_6__["LiberarTrabajadoresPage"]],
    })
], LiberarTrabajadoresPageModule);



/***/ }),

/***/ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\ndiv.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nion-card {\n  width: 100%;\n}\n.botonCancelar {\n  color: green;\n  /* Cambia el color de texto del botón \"Cancelar\" a verde */\n}\n.botonAceptar {\n  color: red;\n  /* Cambia el color de texto del botón \"Aceptar\" a rojo */\n}\n.header-table {\n  font-size: 0.7rem;\n  font-weight: bold;\n  background-color: #b1b7bd;\n  color: black;\n  text-align: center;\n  padding: 2px;\n  border: 1px solid #b1b7bd;\n  border-radius: 5px 5px 0px 0px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin: 0 auto;\n  align-items: center;\n}\n.body-table {\n  font-size: 0.65rem;\n  font-weight: 400;\n  background-color: #e9ecef;\n  color: black;\n  text-align: start;\n  align-items: center;\n  padding-bottom: 2px;\n  border: 1px solid #b1b7bd;\n}\n.body-table .check {\n  text-align: center;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 50%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-fab-button.float-button {\n  --padding: 0;\n  --margin: 0;\n  --size: 44px;\n  --background: #ff7500;\n}\nion-icon.float-button {\n  --background: #ff7500;\n}\n.custom-icon-float {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2xpYmVyYXItdHJhYmFqYWRvcmVzL2xpYmVyYXItdHJhYmFqYWRvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUY7QUFERTtFQUNFLFdBQUE7QUFHSjtBQURFO0VBQ0UsMENBQUE7QUFHSjtBQUNBO0VBQ0UsV0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQWMsMERBQUE7QUFHaEI7QUFBQTtFQUNFLFVBQUE7RUFBWSx3REFBQTtBQUlkO0FBREE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSUY7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUlGO0FBSEU7RUFDRSxrQkFBQTtBQUtKO0FBRkE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBS0Y7QUFGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBS0Y7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvbGliZXJhci10cmFiYWphZG9yZXMvbGliZXJhci10cmFiYWphZG9yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjYmViMmIyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi50b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZGl2LnRvb2xiYXIudG9vbGNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3RvbkNhbmNlbGFyIHtcbiAgY29sb3I6IGdyZWVuO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGUgdGV4dG8gZGVsIGJvdMOzbiBcIkNhbmNlbGFyXCIgYSB2ZXJkZSAqL1xufVxuXG4uYm90b25BY2VwdGFyIHtcbiAgY29sb3I6IHJlZDtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIHRleHRvIGRlbCBib3TDs24gXCJBY2VwdGFyXCIgYSByb2pvICovXG59XG5cbi5oZWFkZXItdGFibGUge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWI3YmQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMWI3YmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvZHktdGFibGUge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMWI3YmQ7XG59XG4uYm9keS10YWJsZSAuY2hlY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmlvbi1mYWItYnV0dG9uLmZsb2F0LWJ1dHRvbiB7XG4gIC0tcGFkZGluZzogMDtcbiAgLS1tYXJnaW46IDA7XG4gIC0tc2l6ZTogNDRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3NTAwO1xufVxuXG5pb24taWNvbi5mbG9hdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZjc1MDA7XG59XG5cbi5jdXN0b20taWNvbi1mbG9hdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts ***!
  \*****************************************************************************/
/*! exports provided: LiberarTrabajadoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiberarTrabajadoresPage", function() { return LiberarTrabajadoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_interfaces_edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/edinfo-auditoria-app */ "./src/app/interfaces/edinfo-auditoria-app.ts");
/* harmony import */ var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/data-base.service */ "./src/app/services/SST/data-base.service.ts");
/* harmony import */ var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/SST/data.service */ "./src/app/services/SST/data.service.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");










let LiberarTrabajadoresPage = class LiberarTrabajadoresPage {
    constructor(dataBaseService, utils, context, device, alertController, dataService, router) {
        this.dataBaseService = dataBaseService;
        this.utils = utils;
        this.context = context;
        this.device = device;
        this.alertController = alertController;
        this.dataService = dataService;
        this.router = router;
        this.trabajadores = [];
        this.auditoria = new src_app_interfaces_edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_5__["EDInfoAuditoriaAPP"]();
        this.currentPage = 1;
        this.workersPerPage = 10;
        this.trabajadoresMarcados = [];
        this.totalPage = 0;
    }
    ngOnInit() {
        this.trabajadoresPorLiberar();
        this.dataBaseService.open().then(() => {
            this.dataBaseService.getAllData().subscribe({
                next: (data) => {
                    this.data = data;
                    this.updateTrabajadores();
                },
                error: error => {
                    this.dataBaseService.close();
                },
            });
        });
    }
    trabajadoresPorLiberar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('trabajadoresPorLiberar');
            try {
                yield this.utils.presentLoading();
                this.user = yield this.context.get();
                yield this.dataBaseService.open().then(() => {
                    this.dataBaseService.getAllTrabajadoresMigrados().subscribe({
                        next: (trabajadores) => {
                            this.utils.dismissLoading();
                            trabajadores.forEach((trabajador) => {
                                trabajador.accion = false;
                            });
                            this.trabajadores = trabajadores;
                            this.totalPage = Math.ceil(this.trabajadores.length / this.workersPerPage);
                        },
                        error: error => {
                            console.error('Error al obtener los trabajadores disponibles:', error);
                            this.dataBaseService.close();
                        },
                        complete: () => {
                            console.log('Trabajadores disponibles completados');
                            this.utils.dismissLoading();
                        },
                    });
                });
            }
            catch (error) {
                console.error('Error al liberar trabajadores:', error);
                this.dataBaseService.close();
                this.utils.dismissLoading();
            }
        });
    }
    liberarUser() {
        let idsUser = [];
        let usuariosUtiliados = [];
        this.trabajadores.forEach((trabajador) => {
            if (trabajador.accion) {
                idsUser.push(trabajador.PK_ID_PermisoAlturas_PersonasAMigrar);
            }
            return idsUser;
        });
        this.trabajadores.forEach((trabajador) => {
            if (trabajador.blnActivo && trabajador.accion) {
                usuariosUtiliados.push(trabajador);
            }
            return usuariosUtiliados;
        });
        if (usuariosUtiliados.length > 0) {
            let nombres = usuariosUtiliados.map((trabajador) => {
                return trabajador.strNombreTrabajador;
            });
            return this.mesaageAlert('No se pueden liberar trabajadores que esten en un permiso pendiente: \n' + nombres);
        }
        if (idsUser.length === 0)
            return this.mesaageAlert('Debe seleccionar al menos un trabajador');
        let permios;
        /* estas seguro de eliminar el usuario */
        /* si es cordova colocar web */
        this.auditoria.strUUID = this.device.uuid ? this.device.uuid : 'web';
        this.auditoria.strIdentificacionUsuario = this.user['_trabajador']._id;
        this.auditoria.strNombreUsuario = this.user['_trabajador'].nombre;
        this.auditoria.strNombreEmpresa = this.user['_empresa']._razonSocial;
        this.auditoria.strTipoDocEmpresa = this.user['_empresa']._tipoDocumento;
        this.auditoria.strDocumentoEmpresa = this.user['_empresa']._id;
        this.alertController
            .create({
            header: 'Liberar trabajador',
            message: `¿Estas seguro de liberar a los trabajadores?`,
            buttons: [
                {
                    text: 'Cancelar',
                    cssClass: 'color: green !important',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelado');
                    },
                },
                {
                    text: 'Aceptar',
                    cssClass: 'color: red !important',
                    handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.utils.presentLoading();
                        yield this.dataService.liberarTrabajador(idsUser, this.auditoria);
                        yield this.trabajadoresPorLiberar();
                        this.utils.dismissLoading();
                    }),
                },
            ],
        })
            .then(alert => {
            alert.present();
        });
    }
    onChangeMarcarTodos(event) {
        const isChecked = event.detail.checked;
        this.trabajadores = this.trabajadores.map(trabajador => {
            if (this.isOnCurrentPage(trabajador)) {
                trabajador.accion = isChecked;
            }
            return trabajador;
        });
        if (isChecked) {
            this.trabajadores
                .filter(trabajador => !this.trabajadoresMarcados.includes(trabajador))
                .forEach(trabajador => this.trabajadoresMarcados.push(trabajador));
        }
        else {
            this.trabajadoresMarcados = this.trabajadoresMarcados.filter(trabajador => !trabajador.accion);
        }
    }
    isOnCurrentPage(trabajador) {
        const index = this.trabajadores.indexOf(trabajador);
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
        if (this.currentPage * this.workersPerPage < this.trabajadores.length) {
            this.currentPage++;
            this.updatePage();
        }
    }
    updatePage() {
        const trabajadoresEnPaginaActual = this.trabajadores.slice((this.currentPage - 1) * this.workersPerPage, this.currentPage * this.workersPerPage);
        const todosMarcados = trabajadoresEnPaginaActual.every(trabajador => trabajador.accion);
        const otrosMarcados = this.trabajadoresMarcados.every(trabajador => trabajador.accion);
        this.marcarTodos = todosMarcados && otrosMarcados;
    }
    mesaageAlert(message) {
        this.alertController
            .create({
            header: 'Información',
            message,
            buttons: ['Aceptar'],
        })
            .then(alert => {
            alert.present();
        });
    }
    pushPermisosSST() {
        this.router.navigate(['/home/permisos']);
    }
    updateTrabajadores() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.data.forEach(permisoIncompleto => {
                    permisoIncompleto['listaTrabajadoresMigrados'].forEach((trabajador) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        console.log(trabajador);
                        yield this.dataBaseService.updateTrabajadorMigrado(trabajador);
                    }));
                });
            }
            catch (error) { }
        });
    }
    volver() {
        this.router.navigate(['/home/permisos']);
    }
    back() {
        this.router.navigate(['/home/permisos']);
    }
};
LiberarTrabajadoresPage.ctorParameters = () => [
    { type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_6__["DataBaseService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"] },
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_8__["ContextService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LiberarTrabajadoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liberar-trabajadores',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./liberar-trabajadores.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./liberar-trabajadores.page.scss */ "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.scss")).default]
    })
], LiberarTrabajadoresPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-liberar-trabajadores-liberar-trabajadores-module-es2015.js.map