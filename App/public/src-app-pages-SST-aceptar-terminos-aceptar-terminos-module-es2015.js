(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-aceptar-terminos-aceptar-terminos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div style=\"display: flex; align-items: center\" class=\"toolbar\">\n    <span> <ion-img style=\"width: 32px; height: 32px; margin-right: 12px\" src=\"assets/img/carbon_result-draft.svg\"></ion-img> </span>\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> PERMISOS DE TRABAJO</strong></ion-title>\n    <ion-icon style=\"color: #ff7500; width: 24px; height: 24px\" name=\"chevron-down-outline\"></ion-icon>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <ion-icon style=\"width: 24px; height: 24px\" name=\"checkmark-done-outline\"></ion-icon>\n    <ion-title>Resultado del Permiso</ion-title>\n  </div>\n  <ion-card-title class=\"title-dy ion-padding\" style=\"text-align: center !important; color: #ff7500\">\n    <ion-label style=\"color: #ff7500; text-transform: none\">\n      ¿La persona que autoriza el permiso de trabajo en alturas tambien es responsable de activar el plan de emergencia?\n    </ion-label>\n  </ion-card-title>\n  <ion-card-content>\n    <ion-radio-group [(ngModel)]=\"reponsble\" class=\"horizontal\" mode=\"md\">\n      <ion-item>\n        <ion-label>SI</ion-label>\n        <ion-radio slot=\"start\" value=\"si\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>NO</ion-label>\n        <ion-radio slot=\"start\" value=\"no\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-card-content>\n  <ion-card-title>\n    <ion-label class=\"title-dy\">\n      <span style=\"color: #ff7500\">*</span> Una vez verificada las condiciones de trabajo para el desarrollo de la actividad, el estado del\n      permiso de trabajo en alturas es\n    </ion-label>\n  </ion-card-title>\n  <ion-card-content>\n    <ion-radio-group [(ngModel)]=\"autorizado\" class=\"horizontal\" mode=\"md\">\n      <ion-item>\n        <ion-label style=\"display: flex !important\" class=\"text-auto\"\n          >Autorizado <ion-icon style=\"color: green; font-size: 19px\" name=\"happy\"></ion-icon\n        ></ion-label>\n        <ion-radio slot=\"start\" value=\"Autorizado 😀\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"display: flex !important\" class=\"text-auto\"\n          >Negado <ion-icon style=\"color: red; font-size: 19px\" name=\"sad\"></ion-icon\n        ></ion-label>\n        <ion-radio slot=\"start\" value=\"Negado 😕\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-card-content>\n  <!--  -->\n  <div class=\"ion-padding\">\n    <button class=\"guardar-continuar\" expand=\"block\" color=\"primary\" (click)=\"visualizar()\">Visualizar Permiso</button>\n    <br />\n    <br />\n    <button *ngIf=\"reponsble === 'no'\" class=\"guardar-firmar\" expand=\"block\" color=\"success\" (click)=\"firmar()\">\n      Firmar Permiso Trabajo\n    </button>\n  </div>\n  <br />\n  <ion-card-title style=\"padding: 32px\">\n    <ion-label class=\"title-dy\">\n      <span style=\"color: #ff7500\">*</span> Al enviar el formulario está autorizando el uso de su firma únicamente para el permiso de\n      trabajo para la actividad descrita previamente. La política de tratamiento de la información la puede consultar en\n      <a href=\"https://www.positiva.gov.co\" style=\"color: #000 !important\"><u>https://www.positiva.gov.co</u></a>\n    </ion-label>\n  </ion-card-title>\n  <br />\n  <div class=\"ion-padding ion-text-center\">\n    <button class=\"guardar-enviar\" style=\"width: 40%\" color=\"secondary\" (click)=\"preenviar()\">\n      <ion-icon style=\"transform: rotate(308deg)\" name=\"send\"></ion-icon>Enviar\n    </button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/SST/aceptar-terminos/aceptar-terminos-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AceptarTerminosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarTerminosPageRoutingModule", function() { return AceptarTerminosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aceptar_terminos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aceptar-terminos.page */ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.ts");




const routes = [
    {
        path: '',
        component: _aceptar_terminos_page__WEBPACK_IMPORTED_MODULE_3__["AceptarTerminosPage"],
    },
    {
        path: 'preview',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-preview-preview-module */ "src-app-pages-SST-preview-preview-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/preview/preview.module */ "./src/app/pages/SST/preview/preview.module.ts")).then(m => m.PreviewPageModule),
    },
    {
        path: 'firmar',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-firmar-firmar-module */ "src-app-pages-SST-firmar-firmar-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/firmar/firmar.module */ "./src/app/pages/SST/firmar/firmar.module.ts")).then(m => m.FirmarPageModule),
    },
    {
        path: 'firmar-si',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-firmar-si-firmar-si-module */ "src-app-pages-SST-firmar-si-firmar-si-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/firmar-si/firmar-si.module */ "./src/app/pages/SST/firmar-si/firmar-si.module.ts")).then(m => m.FirmarSiPageModule),
    },
];
let AceptarTerminosPageRoutingModule = class AceptarTerminosPageRoutingModule {
};
AceptarTerminosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AceptarTerminosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/SST/aceptar-terminos/aceptar-terminos.module.ts ***!
  \***********************************************************************/
/*! exports provided: AceptarTerminosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarTerminosPageModule", function() { return AceptarTerminosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _aceptar_terminos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aceptar-terminos-routing.module */ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos-routing.module.ts");
/* harmony import */ var _aceptar_terminos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aceptar-terminos.page */ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let AceptarTerminosPageModule = class AceptarTerminosPageModule {
};
AceptarTerminosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _aceptar_terminos_routing_module__WEBPACK_IMPORTED_MODULE_5__["AceptarTerminosPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_aceptar_terminos_page__WEBPACK_IMPORTED_MODULE_6__["AceptarTerminosPage"]],
    })
], AceptarTerminosPageModule);



/***/ }),

/***/ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nbutton {\n  color: #fff;\n  border-radius: 24px;\n  width: 100%;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nbutton.guardar-continuar {\n  background: var(--ion-color-primary);\n}\nbutton.guardar-firmar {\n  background: var(--ion-color-success);\n}\nbutton.guardar-enviar {\n  background: var(--ion-color-primary);\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-label .text-auto {\n  font-size: 8px;\n  text-transform: none;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  text-transform: none;\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: #000;\n  text-align: justify;\n}\nion-radio-group.horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\nion-radio-group.horizontal ion-item {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio-group.horizontal ion-item ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 14px;\n}\nion-radio {\n  margin-right: 8px !important;\n}\nion-card-content,\nion-card {\n  /* quitar padin izq der */\n  padding: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 100%;\n}\nion-card-title {\n  padding: 8px;\n  justify-content: center;\n  text-align: justify;\n}\nion-label.title-dy {\n  color: var(--ion-text-color);\n  text-transform: none;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\nion-card-content {\n  display: flex !important;\n}\nion-radio-group {\n  display: flex !important;\n  align-items: center;\n  justify-content: center !important;\n}\nion-radio-group ion-item {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2FjZXB0YXItdGVybWlub3MvYWNlcHRhci10ZXJtaW5vcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUFFO0VBQ0UsMENBQUE7QUFFSjtBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQUU7RUFDRSxvQ0FBQTtBQUVKO0FBQUU7RUFDRSxvQ0FBQTtBQUVKO0FBQUU7RUFDRSxvQ0FBQTtBQUVKO0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUVKO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHTjtBQUNBO0VBQ0UsNEJBQUE7QUFFRjtBQUFBOztFQUVFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBR0Y7QUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFBQTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRSx3QkFBQTtBQUlGO0FBRkE7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUFLRjtBQUpFO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1NTVC9hY2VwdGFyLXRlcm1pbm9zL2FjZXB0YXItdGVybWlub3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjYmViMmIyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmLnRvb2xjb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICYuZ3VhcmRhci1jb250aW51YXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAmLmd1YXJkYXItZmlybWFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIH1cbiAgJi5ndWFyZGFyLWVudmlhciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHBhZGRpbmc6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICYgLnRleHQtYXV0byB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5pb24tcmFkaW8tZ3JvdXAuaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG5pb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQtY29udGVudCxcbmlvbi1jYXJkIHtcbiAgLyogcXVpdGFyIHBhZGluIGl6cSBkZXIgKi9cbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgcGFkZGluZzogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLWxhYmVsLnRpdGxlLWR5IHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5pb24tcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGlvbi1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.ts ***!
  \*********************************************************************/
/*! exports provided: AceptarTerminosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarTerminosPage", function() { return AceptarTerminosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/SST/data-base.service */ "./src/app/services/SST/data-base.service.ts");
/* harmony import */ var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/data.service */ "./src/app/services/SST/data.service.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/SST/tabla-trabajadores.service */ "./src/app/services/SST/tabla-trabajadores.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
/* harmony import */ var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/context.service */ "./src/app/services/context.service.ts");
/* harmony import */ var src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/SST/sekected-items-service.service */ "./src/app/services/SST/sekected-items-service.service.ts");












let AceptarTerminosPage = class AceptarTerminosPage {
    constructor(router, alertController, saveDataService, utils, dataService, dataBaseService, tablaTrabajadoresService, modalController, context, selectedItemsService) {
        this.router = router;
        this.alertController = alertController;
        this.saveDataService = saveDataService;
        this.utils = utils;
        this.dataService = dataService;
        this.dataBaseService = dataBaseService;
        this.tablaTrabajadoresService = tablaTrabajadoresService;
        this.modalController = modalController;
        this.context = context;
        this.selectedItemsService = selectedItemsService;
    }
    ngOnInit() {
        this.getData();
        this.context.get().then(response => {
            console.log(response['_trabajador']);
            this.usuario = response['_trabajador'];
        });
    }
    verTrabajadores() {
        this.modalController
            .create({
            component: src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_9__["ModalTrabajadoresComponent"],
        })
            .then(modal => {
            modal.present();
        });
    }
    visualizar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.reponsble === 'si') {
                let lat = this.data['edInfoAuditoria'].strLatitud;
                let lng = this.data['edInfoAuditoria'].strLongitud;
                let autorizacion = {
                    strCargo: this.usuario._cargo,
                    strNombreCompleto: this.usuario._nombre,
                    strTipoDocumento: this.usuario._tipoDocumento,
                    strDocumentoIdentificacion: this.usuario._id,
                    strFirmaBase64: '',
                    strLatitud: lat,
                    strLongitud: lng,
                };
                this.data['edResponsableActivarPlanEmergencia'] = autorizacion;
                this.data['edCoordinadorTrabajoAlturas'] = autorizacion;
                this.data['edAutorizadoPermisoTrabajo'] = autorizacion;
                this.data['enviar'] = true;
                this.saveDataService.setData(this.data);
            }
            if (this.autorizado == null) {
                this.mostrarError('Debes llenar el estado del permiso');
                return;
            }
            this.router.navigate([
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos/preview',
            ]);
            this.data['Autorizado'] = this.autorizado;
            if (this.autorizado === 'Autorizado 😀') {
                this.data['blnPermisoAutorizado'] = true;
            }
            else {
                this.data['blnPermisoAutorizado'] = false;
            }
        });
    }
    firmar() {
        if (this.reponsble == null || this.autorizado == null) {
            this.mostrarError('Debes llenar todos los campos anteriores');
            return;
        }
        if (this.tablaTrabajadoresService.getTablaTrabajadores().length === 0) {
            this.mostrarError('Debes agregar trabajadores');
            return;
        }
        if (this.reponsble === 'si') {
            this.router.navigate([
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos/firmar-si',
            ]);
            return;
        }
        this.router.navigate([
            '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos/firmar',
        ]);
    }
    preenviar() {
        this.data = this.saveDataService.getData();
        if (this.autorizado === 'Autorizado 😀') {
            this.data['blnPermisoAutorizado'] = true;
        }
        else {
            this.data['blnPermisoAutorizado'] = false;
        }
        this.saveDataService.setData(this.data);
        if (this.reponsble == null || this.autorizado == null) {
            this.mostrarError('Debes llenar todos los campos anteriores');
            return;
        }
        if (!this.data['enviar']) {
            this.mostrarError('Visualiza el permiso antes de enviarlo o firmarlo');
            return;
        }
        let listaItemSeleccionados = this.data['listaItemSeleccionados'];
        listaItemSeleccionados.forEach((element, index) => {
            console.log(JSON);
        });
        let aplanar = [].concat(...listaItemSeleccionados.map(subArray => (Array.isArray(subArray) ? subArray.filter(item => item !== null) : subArray)));
        this.data['listaItemSeleccionados'] = aplanar;
        console.log(JSON.stringify(this.data['listaItemSeleccionados']));
        this.enviar();
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
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dataUrl = history.state.data;
            yield this.utils.presentLoading();
            if (dataUrl) {
                this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                this.saveDataService.setData(dataUrl);
                this.data = dataUrl;
            }
            else {
                console.log('dataUrl else');
                this.data = this.saveDataService.getData();
                this.saveDataService.setData(this.data);
            }
            console.log(this.data);
            this.utils.dismissLoading();
        });
    }
    enviar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.utils.presentLoading();
                yield this.saveDataService.saveData();
                // await this.saveDataService.porLiberar(this.usuariosPorLiberar);
                const { status, data } = yield this.dataService.enviarPermisoTrabajo(this.data);
                if (status === 200) {
                    this.alertController
                        .create({
                        header: 'Alerta',
                        message: 'Permiso enviado correctamente',
                        buttons: ['Aceptar'],
                    })
                        .then(alert => {
                        alert.present();
                    });
                    console.log('Permiso enviado:', data);
                    this.data['link'] = data;
                    this.dataBaseService.open().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        let usuarios = this.data['listaTrabajadoresMigrados'];
                        usuarios.forEach((usuario) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.dataBaseService.deleteTrabajadorMigrado(usuario);
                        }));
                        yield this.dataBaseService.deleteEDGuardarPermisoTrabajoAPP(this.data);
                        this.utils.dismissLoading();
                        this.selectedItemsService.setSelectedItems([]);
                        this.router.navigate(['/home/permisos'], { replaceUrl: true });
                    }));
                }
                else {
                    this.alertController
                        .create({
                        header: 'Alerta',
                        message: 'No pudimos enviar el permiso, intenta nuevamente más tarde',
                        buttons: ['Aceptar'],
                    })
                        .then(alert => {
                        alert.present();
                        this.router.navigate(['/home/permisos'], { replaceUrl: true });
                    });
                }
            }
            catch (error) {
                console.error('Error al enviar el permiso:', error);
                this.alertController
                    .create({
                    header: 'Alerta',
                    message: 'No pudimos enviar el permiso, intenta nuevamente más tarde revisalo en pendientes',
                    buttons: ['Aceptar'],
                })
                    .then(alert => {
                    alert.present();
                });
                this.router.navigate(['/home/permisos'], { replaceUrl: true });
            }
            finally {
                this.utils.dismissLoading();
            }
        });
    }
    back() {
        this.router.navigate([
            '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia',
        ], { state: { data: this.data } });
    }
};
AceptarTerminosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
    { type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__["DataBaseService"] },
    { type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__["TablaTrabajadoresService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_10__["ContextService"] },
    { type: src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_11__["SekectedItemsServiceService"] }
];
AceptarTerminosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aceptar-terminos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aceptar-terminos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./aceptar-terminos.page.scss */ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.page.scss")).default]
    })
], AceptarTerminosPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-aceptar-terminos-aceptar-terminos-module-es2015.js.map