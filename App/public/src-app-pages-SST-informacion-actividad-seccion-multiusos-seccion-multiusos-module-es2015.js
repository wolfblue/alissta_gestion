(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-informacion-actividad-seccion-multiusos-seccion-multiusos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong>Registro de permiso</strong> </ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Información actividad</ion-title>\n  </div>\n  <div *ngIf=\"questions\" class=\"ion-padding\">\n    <ion-row *ngFor=\"let question of questions\">\n      <ion-card-title>{{question.strDescripcion}}</ion-card-title>\n      <ion-card-content>\n        <ion-radio-group [(ngModel)]=\"question.strRespuesta\" class=\"horizontal\" mode=\"md\">\n          <ion-item>\n            <ion-label>SI</ion-label>\n            <ion-radio slot=\"start\" value=\"SI\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NO</ion-label>\n            <ion-radio slot=\"start\" value=\"NO\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NA</ion-label>\n            <ion-radio slot=\"start\" value=\"NA\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n        <div *ngIf=\"submitted && !question.strRespuesta\" class=\"error-message\">Ingrese el campo</div>\n      </ion-card-content>\n    </ion-row>\n    <div *ngIf=\"questions\" class=\"ion-text-center\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n  <div *ngIf=\"!questions\"></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SeccionMultiusosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionMultiusosPageRoutingModule", function() { return SeccionMultiusosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _seccion_multiusos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seccion-multiusos.page */ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.ts");




const routes = [
    {
        path: '',
        component: _seccion_multiusos_page__WEBPACK_IMPORTED_MODULE_3__["SeccionMultiusosPage"],
    },
    {
        path: 'seccion-plataforma',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-informacion-actividad-seccion-plataforma-seccion-plataforma-module */ "src-app-pages-SST-informacion-actividad-seccion-plataforma-seccion-plataforma-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.module */ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.module.ts")).then(m => m.SeccionPlataformaPageModule),
    },
];
let SeccionMultiusosPageRoutingModule = class SeccionMultiusosPageRoutingModule {
};
SeccionMultiusosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeccionMultiusosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SeccionMultiusosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionMultiusosPageModule", function() { return SeccionMultiusosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _seccion_multiusos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seccion-multiusos-routing.module */ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos-routing.module.ts");
/* harmony import */ var _seccion_multiusos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seccion-multiusos.page */ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let SeccionMultiusosPageModule = class SeccionMultiusosPageModule {
};
SeccionMultiusosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seccion_multiusos_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeccionMultiusosPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_seccion_multiusos_page__WEBPACK_IMPORTED_MODULE_6__["SeccionMultiusosPage"]],
    })
], SeccionMultiusosPageModule);



/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-radio-group.horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\nion-radio-group.horizontal ion-item {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio-group.horizontal ion-item ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio {\n  margin-right: 12px !important;\n}\nion-card-content,\nion-card {\n  /* quitar padin izq der */\n  padding: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 100%;\n}\nion-row.question {\n  margin-bottom: 14px;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-row {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n}\ndiv.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-card-title {\n  padding: 8px;\n  justify-content: center;\n  text-align: justify;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.error-message {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2luZm9ybWFjaW9uLWFjdGl2aWRhZC9zZWNjaW9uLW11bHRpdXNvcy9zZWNjaW9uLW11bHRpdXNvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFBRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHTjtBQUNBO0VBQ0UsNkJBQUE7QUFFRjtBQUFBOztFQUVFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBR0Y7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHRjtBQUZFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBSUo7QUFGRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSUo7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQUZFO0VBQ0UsV0FBQTtBQUlKO0FBRkU7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlKO0FBQUE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBR0Y7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQURBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFJRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSUY7QUFEQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2luZm9ybWFjaW9uLWFjdGl2aWRhZC9zZWNjaW9uLW11bHRpdXNvcy9zZWNjaW9uLW11bHRpdXNvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmFkaW8tZ3JvdXAuaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5pb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQsXG5pb24tY2FyZCB7XG4gIC8qIHF1aXRhciBwYWRpbiBpenEgZGVyICovXG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tcm93LnF1ZXN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgaW9uLXJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG5kaXYudG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNiZWIyYjI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICYudG9vbGNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgcGFkZGluZzogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1jYXJkLXRpdGxlIHtcbiAgcGFkZGluZzogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: SeccionMultiusosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionMultiusosPage", function() { return SeccionMultiusosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/SST/data-questions.service */ "./src/app/services/SST/data-questions.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");








let SeccionMultiusosPage = class SeccionMultiusosPage {
    constructor(questionService, utils, alertController, router, modalController, dataService) {
        this.questionService = questionService;
        this.utils = utils;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.dataService = dataService;
        this.isDataQuestion = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.getQuestions();
    }
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
            this.data = this.dataService.getData();
            let isCuestion = this.data['listaMaestroCuestionario'].filter(item => item.strTitulo === 'SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN');
            yield this.utils.presentLoading();
            if (isCuestion.length > 0) {
                this.questions = isCuestion;
                this.isDataQuestion = true;
            }
            else {
                const multi = yield this.questionService.getMultiusos();
                this.questions = multi;
            }
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
    continuar() {
        this.submitted = true;
        this.checkQuestions(this.questions).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result) {
                yield this.guardarDatos();
                this.router.navigate([
                    '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma',
                ]);
            }
        }));
    }
    guardarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = this.dataService.getData();
            if (this.isDataQuestion) {
                let filtro = data['listaMaestroCuestionario'].filter(item => item.strTitulo !== 'SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN');
                data['listaMaestroCuestionario'] = filtro.concat(this.questions);
            }
            else {
                data['listaMaestroCuestionario'] = [...data['listaMaestroCuestionario'], ...this.questions];
            }
            this.dataService.setData(data);
        });
    }
    back() {
        this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general'], { state: { data: this.data } });
    }
};
SeccionMultiusosPage.ctorParameters = () => [
    { type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_4__["DataQuestionsService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_7__["SaveDataService"] }
];
SeccionMultiusosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seccion-multiusos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seccion-multiusos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seccion-multiusos.page.scss */ "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.page.scss")).default]
    })
], SeccionMultiusosPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-informacion-actividad-seccion-multiusos-seccion-multiusos-module-es2015.js.map