(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-informacion-actividad-seccion-plataforma-seccion-plataforma-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> Registro de permiso</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Información actividad</ion-title>\n  </div>\n  <div *ngIf=\"questions\" class=\"ion-padding\">\n    <ion-row *ngFor=\"let question of questions\">\n      <ion-card-title>{{question.strDescripcion}}</ion-card-title>\n      <ion-card-content>\n        <ion-radio-group [(ngModel)]=\"question.strRespuesta\" class=\"horizontal\" mode=\"md\">\n          <ion-item>\n            <ion-label>SI</ion-label>\n            <ion-radio slot=\"start\" value=\"SI\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NO</ion-label>\n            <ion-radio slot=\"start\" value=\"NO\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NA</ion-label>\n            <ion-radio slot=\"start\" value=\"NA\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n        <div *ngIf=\"submitted && !question.strRespuesta\" class=\"error-message\">Ingrese el campo</div>\n      </ion-card-content>\n    </ion-row>\n    <div *ngIf=\"questions\" class=\"ion-padding ion-text-center\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n  <div *ngIf=\"!questions\"></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SeccionPlataformaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionPlataformaPageRoutingModule", function() { return SeccionPlataformaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _seccion_plataforma_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seccion-plataforma.page */ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.ts");




const routes = [
    {
        path: '',
        component: _seccion_plataforma_page__WEBPACK_IMPORTED_MODULE_3__["SeccionPlataformaPage"],
    },
    {
        path: 'descripcion-actividad',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-descripcion-actividad-descripcion-actividad-module */ "src-app-pages-SST-descripcion-actividad-descripcion-actividad-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/descripcion-actividad/descripcion-actividad.module */ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad.module.ts")).then(m => m.DescripcionActividadPageModule),
    },
];
let SeccionPlataformaPageRoutingModule = class SeccionPlataformaPageRoutingModule {
};
SeccionPlataformaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeccionPlataformaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: SeccionPlataformaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionPlataformaPageModule", function() { return SeccionPlataformaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _seccion_plataforma_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seccion-plataforma-routing.module */ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma-routing.module.ts");
/* harmony import */ var _seccion_plataforma_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seccion-plataforma.page */ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let SeccionPlataformaPageModule = class SeccionPlataformaPageModule {
};
SeccionPlataformaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seccion_plataforma_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeccionPlataformaPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_seccion_plataforma_page__WEBPACK_IMPORTED_MODULE_6__["SeccionPlataformaPage"]],
    })
], SeccionPlataformaPageModule);



/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-radio-group.horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\nion-radio-group.horizontal ion-item {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio-group.horizontal ion-item ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio {\n  margin-right: 12px !important;\n}\nion-card-content,\nion-card {\n  /* quitar padin izq der */\n  padding: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 100%;\n}\nion-row.question {\n  margin-bottom: 14px;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-row {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n}\ndiv.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-card-title {\n  padding: 8px;\n  justify-content: center;\n  text-align: justify;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.error-message {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2luZm9ybWFjaW9uLWFjdGl2aWRhZC9zZWNjaW9uLXBsYXRhZm9ybWEvc2VjY2lvbi1wbGF0YWZvcm1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdOO0FBQ0E7RUFDRSw2QkFBQTtBQUVGO0FBQUE7O0VBRUUseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHRjtBQUFBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdGO0FBRkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFJSjtBQUZFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFJSjtBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdGO0FBRkU7RUFDRSxXQUFBO0FBSUo7QUFGRTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSUo7QUFBQTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFHRjtBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUdGO0FBREE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlGO0FBREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQUlGO0FBREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQURBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQUlGO0FBREE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSUY7QUFEQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvaW5mb3JtYWNpb24tYWN0aXZpZGFkL3NlY2Npb24tcGxhdGFmb3JtYS9zZWNjaW9uLXBsYXRhZm9ybWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJhZGlvLWdyb3VwLmhvcml6b250YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50LFxuaW9uLWNhcmQge1xuICAvKiBxdWl0YXIgcGFkaW4gaXpxIGRlciAqL1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLXJvdy5xdWVzdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cblxuZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjYmViMmIyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmLnRvb2xjb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHBhZGRpbmc6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5pb24tY2FyZC10aXRsZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLyogcXVpdGFyIGVzdGlsb3MgKi9cbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1jb2xvcjogbm9uZTtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbmlvbi1pdGVtLm1vc3RyYXItdXN1YXJpb3Mge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNlbnRlci10cmFiYWphZG9yZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: SeccionPlataformaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionPlataformaPage", function() { return SeccionPlataformaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
/* harmony import */ var src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/data-questions.service */ "./src/app/services/SST/data-questions.service.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");








let SeccionPlataformaPage = class SeccionPlataformaPage {
    constructor(questionService, utils, alertController, router, modalController, dataService, platform) {
        this.questionService = questionService;
        this.utils = utils;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.dataService = dataService;
        this.platform = platform;
        this.isDataQuestion = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.getQuestions();
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
    getQuestions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.data = this.dataService.getData();
            let isCuestion = this.data['listaMaestroCuestionario'].filter(item => item.strTitulo === 'SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA');
            if (isCuestion.length > 0) {
                this.questions = isCuestion;
                this.isDataQuestion = true;
            }
            else {
                const multi = yield this.questionService.getPlataforma();
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
                    '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad',
                ]);
            }
        }));
    }
    guardarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('guardarDatos platefoma');
            this.data = this.dataService.getData();
            if (this.isDataQuestion) {
                let filtro = this.data['listaMaestroCuestionario'].filter(item => item.strTitulo !== 'SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA');
                this.data['listaMaestroCuestionario'] = filtro.concat(this.questions);
            }
            else {
                this.data['listaMaestroCuestionario'] = this.data['listaMaestroCuestionario'].concat(this.questions);
            }
            this.data['lastRoute'] = '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general';
            this.dataService.setData(this.data);
            this.dataService.saveData();
        });
    }
    back() {
        this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos'], {
            state: { data: this.data },
        });
    }
};
SeccionPlataformaPage.ctorParameters = () => [
    { type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__["DataQuestionsService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
SeccionPlataformaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seccion-plataforma',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seccion-plataforma.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seccion-plataforma.page.scss */ "./src/app/pages/SST/informacion-actividad/seccion-plataforma/seccion-plataforma.page.scss")).default]
    })
], SeccionPlataformaPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-informacion-actividad-seccion-plataforma-seccion-plataforma-module-es2015.js.map