(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-descripcion-actividad-descripcion-actividad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> Elaboración del permiso de trabajo</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/fluent_organization-28-filled.svg\"></ion-img> </span>\n    <ion-title>Descripción de la Actividad</ion-title>\n  </div>\n  <div *ngIf=\"questions\">\n    <ion-col *ngFor=\"let question of questions\" class=\"question\">\n      <ion-card-header>\n        <ion-card-title><strong class=\"requieredQues\">*</strong>{{question.strDescripcion}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <div *ngIf=\"submitted && !question.strRespuesta\" class=\"error-message\">Ingrese el campo</div>\n        <ion-row>\n          <ion-textarea\n            (ionChange)=\"actualizarContador($event,question )\"\n            [(ngModel)]=\"question.strRespuesta\"\n            maxlength=\"2000\"\n          ></ion-textarea>\n        </ion-row>\n        <p class=\"counter\">{{question.contador ? question.contador : 0}}/2000</p>\n      </ion-card-content>\n    </ion-col>\n\n    <div *ngIf=\"questions\" class=\"ion-padding ion-text-center\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n  <div *ngIf=\"!questions\"></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/SST/descripcion-actividad/descripcion-actividad-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DescripcionActividadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescripcionActividadPageRoutingModule", function() { return DescripcionActividadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _descripcion_actividad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./descripcion-actividad.page */ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.ts");




const routes = [
    {
        path: '',
        component: _descripcion_actividad_page__WEBPACK_IMPORTED_MODULE_3__["DescripcionActividadPage"],
    },
    {
        path: 'proteccion-colectiva',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-proteccion-colectiva-proteccion-colectiva-module */ "src-app-pages-SST-proteccion-colectiva-proteccion-colectiva-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.module */ "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.module.ts")).then(m => m.ProteccionColectivaPageModule),
    },
];
let DescripcionActividadPageRoutingModule = class DescripcionActividadPageRoutingModule {
};
DescripcionActividadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DescripcionActividadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/SST/descripcion-actividad/descripcion-actividad.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DescripcionActividadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescripcionActividadPageModule", function() { return DescripcionActividadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _descripcion_actividad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./descripcion-actividad-routing.module */ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad-routing.module.ts");
/* harmony import */ var _descripcion_actividad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descripcion-actividad.page */ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let DescripcionActividadPageModule = class DescripcionActividadPageModule {
};
DescripcionActividadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _descripcion_actividad_routing_module__WEBPACK_IMPORTED_MODULE_5__["DescripcionActividadPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_descripcion_actividad_page__WEBPACK_IMPORTED_MODULE_6__["DescripcionActividadPage"]],
    })
], DescripcionActividadPageModule);



/***/ }),

/***/ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col.question {\n  margin-top: 12px;\n  padding: 0;\n  width: 100%;\n}\nion-col.question ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-col.question ion-row {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n}\nion-col.question ion-row ion-textarea {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 80px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 5px;\n}\ndiv.toolbar {\n  background: #beb2b2;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\n.requieredQues {\n  color: red;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.counter {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.error-message {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2Rlc2NyaXBjaW9uLWFjdGl2aWRhZC9kZXNjcmlwY2lvbi1hY3RpdmlkYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRUo7QUFESTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBR047QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFBRTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdGO0FBQUE7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFHRjtBQURBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlGO0FBREE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2Rlc2NyaXBjaW9uLWFjdGl2aWRhZC9kZXNjcmlwY2lvbi1hY3RpdmlkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbC5xdWVzdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaW9uLXRleHRhcmVhIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxufVxuXG5kaXYudG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNiZWIyYjI7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJi50b29sY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4ucmVxdWllcmVkUXVlcyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBwYWRkaW5nOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uY291bnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DescripcionActividadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescripcionActividadPage", function() { return DescripcionActividadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
/* harmony import */ var src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/data-questions.service */ "./src/app/services/SST/data-questions.service.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/SST/tabla-trabajadores.service */ "./src/app/services/SST/tabla-trabajadores.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");









let DescripcionActividadPage = class DescripcionActividadPage {
    constructor(questionService, utils, alertController, router, modalController, dataService, tablaTrabajadoresService) {
        this.questionService = questionService;
        this.utils = utils;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.dataService = dataService;
        this.tablaTrabajadoresService = tablaTrabajadoresService;
        this.submitted = false;
    }
    actualizarContador(event, question) {
        const contador = event.target.value.length;
        question.contador = contador;
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
            /* data por URL */
            const dataUrl = history.state.data;
            yield this.utils.presentLoading();
            this.questionService.getDescripcionActividad().subscribe(data => {
                this.questions = data;
                this.questions.forEach(question => (question.isValid = true));
                if (dataUrl) {
                    this.questions[0].strRespuesta = dataUrl.strTipoTrabajo;
                    this.questions[0].contador = dataUrl.strTipoTrabajo.length;
                    this.questions[1].strRespuesta = dataUrl.strAntesActividad;
                    this.questions[1].contador = dataUrl.strAntesActividad.length;
                    this.questions[2].strRespuesta = dataUrl.strDuranteActividad;
                    this.questions[2].contador = dataUrl.strDuranteActividad.length;
                    this.questions[3].strRespuesta = dataUrl.strDespuesActividad;
                    this.questions[3].contador = dataUrl.strDespuesActividad.length;
                    this.dataService.setData(dataUrl);
                    this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                }
                this.utils.dismissLoading();
            }, error => {
                console.log(error);
            });
        });
    }
    checkQuestions(questions) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            for (const question of questions) {
                this.questions.forEach(question => this.checkValidity(question));
                if (!question.strRespuesta) {
                    yield this.mostrarError('Debe responder todas las preguntas');
                    return false;
                }
            }
            return true;
        });
    }
    continuar() {
        this.checkQuestions(this.questions).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result) {
                yield this.guardarDatos();
                this.router.navigate([
                    '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva',
                ]);
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
            this.data = this.dataService.getData();
            this.data['strTipoTrabajo'] = this.questions[0].strRespuesta;
            this.data['strAntesActividad'] = this.questions[1].strRespuesta;
            this.data['strDuranteActividad'] = this.questions[2].strRespuesta;
            this.data['strDespuesActividad'] = this.questions[3].strRespuesta;
            this.data['lastRoute'] =
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad';
            this.dataService.setData(this.data);
            this.dataService.saveData();
        });
    }
    back() {
        this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma'], { state: { data: this.data } });
    }
    checkValidity(question) {
        // Aquí va tu lógica para verificar la validez de la respuesta
        // Por ejemplo, si una respuesta es inválida si está vacía, podrías hacer algo como esto:
        if (!question.strRespuesta || question.strRespuesta.trim() === '') {
            question.isValid = false;
        }
        else {
            question.isValid = true;
        }
    }
};
DescripcionActividadPage.ctorParameters = () => [
    { type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__["DataQuestionsService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"] },
    { type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__["TablaTrabajadoresService"] }
];
DescripcionActividadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-descripcion-actividad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./descripcion-actividad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./descripcion-actividad.page.scss */ "./src/app/pages/SST/descripcion-actividad/descripcion-actividad.page.scss")).default]
    })
], DescripcionActividadPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-descripcion-actividad-descripcion-actividad-module-es2015.js.map