(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-informacion-actividad-seccion-general-seccion-general-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> Registro Permiso</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Información actividad</ion-title>\n  </div>\n  <div *ngIf=\"questions\" class=\"ion-padding\">\n    <ion-row *ngFor=\"let question of questions\">\n      <ion-card-title>{{question.strDescripcion}}</ion-card-title>\n      <ion-card-content>\n        <ion-radio-group [(ngModel)]=\"question.strRespuesta\" class=\"horizontal\" mode=\"md\">\n          <ion-item>\n            <ion-label>SI</ion-label>\n            <ion-radio slot=\"start\" value=\"SI\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NO</ion-label>\n            <ion-radio slot=\"start\" value=\"NO\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NA</ion-label>\n            <ion-radio slot=\"start\" value=\"NA\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n        <div *ngIf=\"submitted && !question.strRespuesta\" class=\"error-message\">Ingrese el campo</div>\n      </ion-card-content>\n    </ion-row>\n    <div *ngIf=\"questions\" class=\"ion-text-center\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n  <div *ngIf=\"!questions\"></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: SeccionGeneralPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionGeneralPageRoutingModule", function() { return SeccionGeneralPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _seccion_general_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seccion-general.page */ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts");




const routes = [
    {
        path: '',
        component: _seccion_general_page__WEBPACK_IMPORTED_MODULE_3__["SeccionGeneralPage"],
    },
    {
        path: 'seccion-multiusos',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-informacion-actividad-seccion-multiusos-seccion-multiusos-module */ "src-app-pages-SST-informacion-actividad-seccion-multiusos-seccion-multiusos-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.module */ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.module.ts")).then(m => m.SeccionMultiusosPageModule),
    },
];
let SeccionGeneralPageRoutingModule = class SeccionGeneralPageRoutingModule {
};
SeccionGeneralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeccionGeneralPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: SeccionGeneralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionGeneralPageModule", function() { return SeccionGeneralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _seccion_general_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seccion-general-routing.module */ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general-routing.module.ts");
/* harmony import */ var _seccion_general_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seccion-general.page */ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let SeccionGeneralPageModule = class SeccionGeneralPageModule {
};
SeccionGeneralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seccion_general_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeccionGeneralPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_seccion_general_page__WEBPACK_IMPORTED_MODULE_6__["SeccionGeneralPage"]],
    })
], SeccionGeneralPageModule);



/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-radio-group.horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\nion-radio-group.horizontal ion-item {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio-group.horizontal ion-item ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio {\n  margin-right: 12px !important;\n}\nion-card-content,\nion-card {\n  /* quitar padin izq der */\n  padding: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 100%;\n}\nion-card-title {\n  padding: 8px;\n  justify-content: center;\n  text-align: justify;\n}\nion-row.question {\n  margin-bottom: 14px;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 10px;\n}\nion-row.question ion-row {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n}\ndiv.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.error-message {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2luZm9ybWFjaW9uLWFjdGl2aWRhZC9zZWNjaW9uLWdlbmVyYWwvc2VjY2lvbi1nZW5lcmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdOO0FBQ0E7RUFDRSw2QkFBQTtBQUVGO0FBQUE7O0VBRUUseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHRjtBQURBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlGO0FBSEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS0o7QUFIRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0o7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQUhFO0VBQ0UsV0FBQTtBQUtKO0FBSEU7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUtKO0FBREE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSUY7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTUY7QUFIQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFNRjtBQUhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFNRjtBQUhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQU1GO0FBSEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2luZm9ybWFjaW9uLWFjdGl2aWRhZC9zZWNjaW9uLWdlbmVyYWwvc2VjY2lvbi1nZW5lcmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby1ncm91cC5ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBpb24taXRlbSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbmlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQtY29udGVudCxcbmlvbi1jYXJkIHtcbiAgLyogcXVpdGFyIHBhZGluIGl6cSBkZXIgKi9cbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY2FyZC10aXRsZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmlvbi1yb3cucXVlc3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgaW9uLXJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG5kaXYudG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNiZWIyYjI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICYudG9vbGNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgcGFkZGluZzogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1pdGVtLm1vc3RyYXItdXN1YXJpb3Mge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmNlbnRlci10cmFiYWphZG9yZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: SeccionGeneralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionGeneralPage", function() { return SeccionGeneralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/SST/data-questions.service */ "./src/app/services/SST/data-questions.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/SST/tabla-trabajadores.service */ "./src/app/services/SST/tabla-trabajadores.service.ts");









let SeccionGeneralPage = class SeccionGeneralPage {
    constructor(questionService, utils, alertController, router, platform, modalController, dataService, tablaTrabajadoresService) {
        this.questionService = questionService;
        this.utils = utils;
        this.alertController = alertController;
        this.router = router;
        this.platform = platform;
        this.modalController = modalController;
        this.dataService = dataService;
        this.tablaTrabajadoresService = tablaTrabajadoresService;
        this.submitted = false;
        this.precargarDatos();
    }
    ngOnInit() { }
    verTrabajadores() {
        this.modalController
            .create({
            component: src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_6__["ModalTrabajadoresComponent"],
        })
            .then(modal => {
            modal.present();
        });
    }
    getQuestions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            const seccio = yield this.questionService.getSeccionGeneral();
            this.questions = seccio;
            this.questions.forEach(question => {
                question.strRespuesta = '';
            });
            this.utils.dismissLoading();
        });
    }
    checkQuestions(questions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const question of questions) {
                if (!question.strRespuesta) {
                    yield this.mostrarError('Debe responder todas las preguntas');
                    return false;
                }
            }
            return true;
        });
    }
    continuar() {
        this.submitted = true;
        this.checkQuestions(this.questions).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result) {
                yield this.guardarDatos();
                this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos']);
            }
        }));
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
    guardarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('guardarDatos');
            if (this.data['listaMaestroCuestionario'].length === 0) {
                this.data['listaMaestroCuestionario'] = this.questions;
            }
            else {
                let filtro = this.data['listaMaestroCuestionario'].filter(item => item.strTitulo !== 'SECCIÓN GENERAL');
                this.data['listaMaestroCuestionario'] = filtro.concat(this.questions);
            }
            this.dataService.setData(this.data);
        });
    }
    precargarDatos() {
        const dataUrl = history.state.data;
        console.log(dataUrl);
        if (dataUrl) {
            this.dataService.clearData();
            this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
            this.dataService.setData(dataUrl);
            this.data = dataUrl;
            this.questions = dataUrl['listaMaestroCuestionario'].filter(item => item.strTitulo === 'SECCIÓN GENERAL');
        }
        else {
            this.data = this.dataService.getData();
            let isQuestion = this.data['listaMaestroCuestionario'].filter(item => item.strTitulo === 'SECCIÓN GENERAL');
            if (isQuestion.length > 0) {
                this.questions = isQuestion;
            }
            else {
                this.getQuestions();
            }
        }
    }
    back() {
        this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso'], { state: { data: this.data } });
    }
};
SeccionGeneralPage.ctorParameters = () => [
    { type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_4__["DataQuestionsService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_7__["SaveDataService"] },
    { type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_8__["TablaTrabajadoresService"] }
];
SeccionGeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seccion-general',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seccion-general.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seccion-general.page.scss */ "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.scss")).default]
    })
], SeccionGeneralPage);



/***/ }),

/***/ "./src/app/services/SST/data-questions.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/SST/data-questions.service.ts ***!
  \********************************************************/
/*! exports provided: DataQuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataQuestionsService", function() { return DataQuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-base.service */ "./src/app/services/SST/data-base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let DataQuestionsService = class DataQuestionsService {
    constructor(dbservice, http) {
        this.dbservice = dbservice;
        this.http = http;
    }
    getSeccionGeneral() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dbservice.open();
                return new Promise((resolve, reject) => {
                    const transaction = this.dbservice.db.transaction(['maestroCuestionario'], 'readonly');
                    const store = transaction.objectStore('maestroCuestionario');
                    const request = store.getAll();
                    console.log({ request });
                    request.onsuccess = () => {
                        const all = request.result;
                        const filtered = all.filter(item => item.strTitulo === 'SECCIÓN GENERAL');
                        resolve(filtered);
                    };
                    request.onerror = () => {
                        reject(request.error);
                    };
                });
            }
            catch (error) {
                console.log(error);
                this.dbservice.close();
                return [];
            }
        });
    }
    /* SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN */
    // getMultiusos(): Observable<MaestroCuestionario[]> {
    //   return this.http.get<{ info_actividad: MaestroCuestionario[] }>('/assets/data/questionSST.json').pipe(
    //     map(data => {
    //       if (Array.isArray(data.info_actividad)) {
    //         return data.info_actividad.filter(item => item.strTitulo === 'SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN');
    //       } else return [];
    //     })
    //   );
    // }
    getMultiusos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dbservice.open();
                return new Promise((resolve, reject) => {
                    const transaction = this.dbservice.db.transaction(['maestroCuestionario'], 'readonly');
                    const store = transaction.objectStore('maestroCuestionario');
                    const request = store.getAll();
                    console.log({ request });
                    request.onsuccess = () => {
                        const all = request.result;
                        const filtered = all.filter(item => item.strTitulo === 'SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN');
                        resolve(filtered);
                    };
                    request.onerror = () => {
                        reject(request.error);
                    };
                });
            }
            catch (error) {
                console.log(error);
                this.dbservice.close();
                return [];
            }
        });
    }
    // /* SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA */
    // getPlataforma(): Observable<MaestroCuestionario[]> {
    //   return this.http.get<{ info_actividad: MaestroCuestionario[] }>('/assets/data/questionSST.json').pipe(
    //     map(data => {
    //       if (Array.isArray(data.info_actividad)) {
    //         return data.info_actividad.filter(item => item.strTitulo === 'SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA');
    //       } else return [];
    //     })
    //   );
    // }
    getPlataforma() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dbservice.open();
                return new Promise((resolve, reject) => {
                    const transaction = this.dbservice.db.transaction(['maestroCuestionario'], 'readonly');
                    const store = transaction.objectStore('maestroCuestionario');
                    const request = store.getAll();
                    console.log({ request });
                    request.onsuccess = () => {
                        const all = request.result;
                        const filtered = all.filter(item => item.strTitulo === 'SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA');
                        resolve(filtered);
                    };
                    request.onerror = () => {
                        reject(request.error);
                    };
                });
            }
            catch (error) {
                console.log(error);
                this.dbservice.close();
                return [];
            }
        });
    }
    /* Descripción de la Actividad */
    getDescripcionActividad() {
        return this.http.get('/assets/data/questionSST.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            if (Array.isArray(data.desc_actividad)) {
                return data.desc_actividad;
            }
            else
                return [];
        }));
    }
    getAllMaestroPadres() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dbservice.open();
                return new Promise((resolve, reject) => {
                    const transaction = this.dbservice.db.transaction(['maestroPadres'], 'readonly');
                    const store = transaction.objectStore('maestroPadres');
                    const request = store.getAll();
                    console.log({ request });
                    request.onsuccess = () => {
                        const all = request.result;
                        resolve(all);
                    };
                    request.onerror = () => {
                        reject(request.error);
                    };
                });
            }
            catch (error) {
                console.log(error);
                this.dbservice.close();
                return [];
            }
        });
    }
    getAllMaestroHijos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.dbservice.open();
                return new Promise((resolve, reject) => {
                    const transaction = this.dbservice.db.transaction(['maestroHijos'], 'readonly');
                    const store = transaction.objectStore('maestroHijos');
                    const request = store.getAll();
                    console.log({ request });
                    request.onsuccess = () => {
                        const all = request.result;
                        resolve(all);
                    };
                    request.onerror = () => {
                        reject(request.error);
                    };
                });
            }
            catch (error) {
                console.log(error);
                this.dbservice.close();
                return [];
            }
        });
    }
};
DataQuestionsService.ctorParameters = () => [
    { type: _data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
DataQuestionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DataQuestionsService);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-informacion-actividad-seccion-general-seccion-general-module-es2015.js.map