(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-proteccion-colectiva-proteccion-colectiva-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> Registro Permiso</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <ion-icon style=\"width: 24px; height: 24px\" name=\"shield-half-outline\"></ion-icon>\n    <ion-title>Proteccion Colectiva e Individual</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list *ngFor=\"let maestro of maestroPadre\">\n      <ion-card-header>\n        <ion-card-title>{{maestro.strDescricionPermiso}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-item\n        *ngIf=\"tituloEitmes[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre].length ===0\"\n        class=\"ion-padding-start ion-padding-end border\"\n      >\n        <ion-label>Ésta protección colectiva no tiene items creados</ion-label>\n        <ion-select multiple=\"true\" cancelText=\"Cancelar\" okText=\"Aceptar\"></ion-select>\n      </ion-item>\n      <ion-item\n        *ngIf=\"tituloEitmes[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre].length !==0\"\n        class=\"ion-padding-start ion-padding-end border\"\n      >\n        <ionic-selectable\n          item-content\n          [(ngModel)]=\"selectedItems[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre]\"\n          [itemValueField]=\"'Pk_ID_PermisoAlturas_ProteccionHijos'\"\n          [itemTextField]=\"'strDescricionPermiso'\"\n          [items]=\"tituloEitmes[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre]\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\"\n          [isMultiple]=\"true\"\n          closeButtonText=\"Cancelar\"\n          closeButtonSlot=\"end\"\n          placeholder=\"Seleccione...\"\n          [searchFailText]=\"'No encontramos el item buscado'\"\n          searchPlaceholder=\"Buscar\"\n        >\n        </ionic-selectable>\n      </ion-item>\n    </ion-list>\n    <ion-col class=\"question\">\n      <ion-card-header>\n        <ion-card-title> <strong class=\"requieredQues\">*</strong> Observaciones</ion-card-title>\n      </ion-card-header>\n      <div *ngIf=\"submited && !observaciones\" class=\"error-message\">Campo requerido</div>\n      <ion-card-content>\n        <ion-row>\n          <ion-textarea (ionChange)=\"actualizarContador($event)\" [(ngModel)]=\"observaciones\" maxlength=\"2000\"></ion-textarea>\n        </ion-row>\n        <p class=\"counter\">{{contadorObs}}/2000</p>\n      </ion-card-content>\n    </ion-col>\n\n    <div class=\"ion-text-center ion-padding\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ProteccionColectivaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteccionColectivaPageRoutingModule", function() { return ProteccionColectivaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proteccion-colectiva.page */ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts");




const routes = [
    {
        path: '',
        component: _proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_3__["ProteccionColectivaPage"],
    },
    {
        path: 'evidencia',
        loadChildren: () => Promise.all(/*! import() | src-app-pages-SST-evidencia-evidencia-module */[__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-SST-evidencia-evidencia-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/SST/evidencia/evidencia.module */ "./src/app/pages/SST/evidencia/evidencia.module.ts")).then(m => m.EvidenciaPageModule),
    },
];
let ProteccionColectivaPageRoutingModule = class ProteccionColectivaPageRoutingModule {
};
ProteccionColectivaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProteccionColectivaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ProteccionColectivaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteccionColectivaPageModule", function() { return ProteccionColectivaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _proteccion_colectiva_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proteccion-colectiva-routing.module */ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva-routing.module.ts");
/* harmony import */ var _proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proteccion-colectiva.page */ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let ProteccionColectivaPageModule = class ProteccionColectivaPageModule {
};
ProteccionColectivaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _proteccion_colectiva_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProteccionColectivaPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_6__["ProteccionColectivaPage"]],
    })
], ProteccionColectivaPageModule);



/***/ }),

/***/ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.scroll-custom {\n  text-overflow: clip !important;\n  white-space: nowrap !important;\n  overflow: scroll !important;\n}\ndiv.alert-checkbox-label {\n  text-overflow: clip !important;\n  white-space: nowrap !important;\n  overflow: scroll !important;\n}\nion-textarea {\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 0;\n  width: 100%;\n  height: 80px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 5px;\n}\nion-card {\n  width: 100%;\n}\n.requieredQues {\n  color: red !important;\n}\nion-item.border {\n  height: 45px;\n  border: 1px solid #808080;\n  border-radius: 10px;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\nion-select {\n  width: 100%;\n}\np.counter {\n  display: flex;\n  color: #85b3e1 !important;\n  justify-content: end;\n  margin-top: 0;\n  color: var(--ion-color-primary);\n}\n.select-icon {\n  width: 12px;\n  height: 26px;\n  opacity: 1;\n}\nalert-checkbox-label.sc-ion-alert-md {\n  padding-left: 53px;\n  padding-right: 26px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  flex: 1;\n  color: var(--ion-color-step-850, #262626);\n  font-size: 16px;\n  text-overflow: clip;\n  white-space: nowrap;\n  overflow: auto;\n}\n.error-message {\n  color: red;\n  font-size: 12px;\n}\nion-modal.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md,\nion-modal.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-ios {\n  width: 80% !important;\n  height: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL3Byb3RlY2Npb24tY29sZWN0aXZhL3Byb3RlY2Npb24tY29sZWN0aXZhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQUU7RUFDRSwwQ0FBQTtBQUVKO0FBRUE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBR0Y7QUFEQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQUlGO0FBREE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBSUY7QUFEQTtFQUNFLFdBQUE7QUFJRjtBQURBO0VBQ0UscUJBQUE7QUFJRjtBQURBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRSxXQUFBO0FBSUY7QUFEQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBSUY7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUlGO0FBREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLE9BQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlGO0FBREE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7O0VBRUUscUJBQUE7RUFDQSxzQkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL3Byb3RlY2Npb24tY29sZWN0aXZhL3Byb3RlY2Npb24tY29sZWN0aXZhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2JlYjJiMjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJi50b29sY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBwYWRkaW5nOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2Nyb2xsLWN1c3RvbSB7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXAgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XG59XG5kaXYuYWxlcnQtY2hlY2tib3gtbGFiZWwge1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXF1aWVyZWRRdWVzIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbS5ib3JkZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jZW50ZXItdHJhYmFqYWRvcmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5wLmNvdW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogcmdiKDEzMywgMTc5LCAyMjUpICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2VsZWN0LWljb24ge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDUzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI2cHg7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsICMyNjI2MjYpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLW1vZGFsLm1vZGFsLXdyYXBwZXIuaW9uLW92ZXJsYXktd3JhcHBlci5zYy1pb24tbW9kYWwtbWQsXG5pb24tbW9kYWwubW9kYWwtd3JhcHBlci5pb24tb3ZlcmxheS13cmFwcGVyLnNjLWlvbi1tb2RhbC1pb3Mge1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ProteccionColectivaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProteccionColectivaPage", function() { return ProteccionColectivaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
/* harmony import */ var src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/data-questions.service */ "./src/app/services/SST/data-questions.service.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/SST/tabla-trabajadores.service */ "./src/app/services/SST/tabla-trabajadores.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/SST/sekected-items-service.service */ "./src/app/services/SST/sekected-items-service.service.ts");










let ProteccionColectivaPage = class ProteccionColectivaPage {
    constructor(router, modalController, utils, questionService, dataService, alertController, tablaTrabajadoresService, selectedItemsService) {
        this.router = router;
        this.modalController = modalController;
        this.utils = utils;
        this.questionService = questionService;
        this.dataService = dataService;
        this.alertController = alertController;
        this.tablaTrabajadoresService = tablaTrabajadoresService;
        this.selectedItemsService = selectedItemsService;
        this.maestroPadre = [];
        this.maestroHijo = [];
        this.tituloEitmes = [];
        this.selectedItems = {};
        this.numerObligarorios = 0;
        this.observaciones = '';
        this.contadorObs = 0;
        this.filtradosItems = [];
        this.submited = false;
    }
    ngOnInit() {
        this.getData();
    }
    ionViewWillEnter() {
        this.selectedItems = this.selectedItemsService.getSelectedItems();
    }
    portChange(event) {
        if (!event.value) {
            console.log('event.value is undefined');
            return;
        }
        if (event.value.id === undefined) {
            console.log('event.value.id is undefined');
            return;
        }
        if (!this.selectedItems) {
            console.log('this.selectedItems is undefined');
            return;
        }
        console.log('port:', event.value);
        this.selectedItems[event.value.id] = event.value;
        this.selectedItemsService.setSelectedItems(this.selectedItems);
        console.log(this.selectedItems);
    }
    verTrabajadores() {
        this.modalController
            .create({
            component: src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_4__["ModalTrabajadoresComponent"],
        })
            .then(modal => {
            modal.present();
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dataUrl = history.state.data;
            if (dataUrl) {
                this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                this.dataService.setData(dataUrl);
                this.observaciones = dataUrl['strObservaciones'];
                this.contadorObs = this.observaciones.length;
                console.log(dataUrl);
                let map = dataUrl['listaItemSeleccionados'].reduce((acc, items) => {
                    /* si items.leng === 0  eliminar esa lista */
                    if (items.length === 0) {
                        return acc;
                    }
                    acc[items[0].Fk_ID_PermisoAlturas_ItemProteccionPadre] = items;
                    return acc;
                }, {});
                this.selectedItems = map;
                this.selectedItemsService.setSelectedItems(this.selectedItems);
            }
            yield this.utils.presentLoading();
            this.maestroPadre = yield this.questionService.getAllMaestroPadres();
            this.maestroHijo = yield this.questionService.getAllMaestroHijos();
            this.maestroPadre.forEach((padre) => {
                this.maestroHijo.forEach((hijo) => {
                    if (padre.Pk_ID_PermisoAlturas_ItemProteccionPadre === hijo.Fk_ID_PermisoAlturas_ItemProteccionPadre) {
                        if (!this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre]) {
                            this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre] = [];
                        }
                        if (hijo.boolObligatorio) {
                            this.numerObligarorios++;
                            hijo.strDescricionPermiso = '* ' + hijo.strDescricionPermiso;
                        }
                        this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre].push(hijo);
                    }
                    else {
                        if (!this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre]) {
                            this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre] = [];
                        }
                    }
                });
            });
            this.utils.dismissLoading();
            console.log(this.tituloEitmes);
        });
    }
    continuar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submited = true;
            let check = yield this.checkQuestions();
            if (!check) {
                return;
            }
            this.quitarAsterisco();
            if (this.observaciones.length === 0) {
                yield this.mostrarError('Debe ingresar las observaciones');
                return;
            }
            yield this.guardarDatos();
            this.router.navigate([
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia',
            ]);
        });
    }
    guardarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = this.dataService.getData();
            data['listaItemSeleccionados'] = this.filtradosItems;
            this.filtradosItems.forEach(element => {
                console.log(element);
            });
            data['lastRoute'] =
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva';
            data['strObservaciones'] = this.observaciones;
            this.dataService.setData(data);
            yield this.dataService.saveData();
            this.selectedItems = {};
        });
    }
    quitarAsterisco() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /* quitar asteriscos y eliminar uilimo array[] */
            let obj = Object.values(this.selectedItems).filter(item => item !== undefined);
            for (let i = 0; i < obj.length; i++) {
                for (let j = 0; j < obj[i].length; j++) {
                    obj[i][j].strDescricionPermiso = obj[i][j].strDescricionPermiso.replace('* ', '');
                }
            }
            /* aplanar any[] a [] */
            this.filtradosItems = obj;
            console.log(this.filtradosItems);
        });
    }
    checkQuestions() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let numeroContestados = 0;
            let numeroObligatorios = this.numerObligarorios;
            let TodosTitulosConHijos = [];
            this.maestroPadre.forEach((padre) => {
                this.maestroHijo.forEach((hijo) => {
                    if (padre.Pk_ID_PermisoAlturas_ItemProteccionPadre === hijo.Fk_ID_PermisoAlturas_ItemProteccionPadre) {
                        if (!TodosTitulosConHijos.includes(padre.strDescricionPermiso)) {
                            TodosTitulosConHijos.push(padre.strDescricionPermiso);
                        }
                    }
                });
            });
            console.log(this.tituloEitmes);
            for (const key in this.selectedItems) {
                if (key === 'undefined') {
                    continue;
                }
                if (this.selectedItems.hasOwnProperty(key)) {
                    const preguntasObligatorias = (((_a = this.tituloEitmes[key]) === null || _a === void 0 ? void 0 : _a.filter(element => element.boolObligatorio)) || []).length;
                    let elements = this.selectedItems[key];
                    const preguntasObligatoriasRespondidas = (((_b = this.selectedItems[key]) === null || _b === void 0 ? void 0 : _b.filter(element => element.boolObligatorio)) || []).length;
                    /* si las elementos selecionados es mayor a las obligatorias eliminar del arreglo el titulo padre */
                    if (preguntasObligatorias <= preguntasObligatoriasRespondidas || preguntasObligatorias === 0) {
                        let tituloItem = this.maestroPadre.find(item => item.Pk_ID_PermisoAlturas_ItemProteccionPadre.toString() == key);
                        /* todos los titulos exepto los qu no tienene hijos */
                        TodosTitulosConHijos = TodosTitulosConHijos.filter(item => item !== tituloItem.strDescricionPermiso);
                    }
                    for (let element of elements) {
                        if (element.boolObligatorio) {
                            numeroContestados++;
                        }
                    }
                }
            }
            if (numeroContestados < numeroObligatorios) {
                const titulosIncompletos = TodosTitulosConHijos.join('<br>');
                yield this.mostrarError(`Debe responder todas las preguntas obligatorias en los siguientes títulos: <br><br><strong>${titulosIncompletos}</strong>`);
                return false;
            }
            return true;
        });
    }
    mostrarError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alerta',
                message: message,
                buttons: ['OK'],
            });
            alert.present();
        });
    }
    back() {
        let data = this.dataService.getData();
        this.router.navigate([
            '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad',
        ], { state: { data } });
    }
    actualizarContador(event) {
        if (event.target.value.length == 0) {
            this.contadorObs = 0;
            return;
        }
        this.contadorObs = event.target.value.length;
    }
};
ProteccionColectivaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
    { type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__["DataQuestionsService"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__["TablaTrabajadoresService"] },
    { type: src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_9__["SekectedItemsServiceService"] }
];
ProteccionColectivaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proteccion-colectiva',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./proteccion-colectiva.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./proteccion-colectiva.page.scss */ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.scss")).default]
    })
], ProteccionColectivaPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-proteccion-colectiva-proteccion-colectiva-module-es2015.js.map