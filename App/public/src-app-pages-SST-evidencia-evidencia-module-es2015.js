(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-evidencia-evidencia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/evidencia/evidencia.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/evidencia/evidencia.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e\"><strong> Registro Permiso</strong></ion-title>\n  </div>\n</ion-header>\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Adjuntar Evidencias</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-row>\n      <ion-col>\n        <div class=\"take-photo\" (click)=\"selectMultiplePhotos()\">\n          <span><strong> Seleccionar Foto</strong></span>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"take-photo\" (click)=\"takePhoto()\">\n          <span><strong>Tomar Foto</strong> </span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-text-center icon-color\">\n      <ion-col>\n        <ion-icon name=\"image\" size=\"large\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"camera\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-list *ngIf=\"photos.length > 0\">\n      <ion-item *ngFor=\"let photo of photos\" class=\"photo-item\">\n        <div class=\"photo-content\">\n          <!-- Muestra el nombre de la foto -->\n          <div class=\"titulo-foto\">{{ photo.strNombreImagen }}</div>\n          <div>\n            <ion-button (click)=\"deletePhoto(photo)\" fill=\"clear\" slot=\"end\">\n              <ion-icon name=\"trash-outline\" color=\"primary\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-text-center\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/evidencia/evidencia-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/SST/evidencia/evidencia-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EvidenciaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenciaPageRoutingModule", function() { return EvidenciaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _evidencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evidencia.page */ "./src/app/pages/SST/evidencia/evidencia.page.ts");




const routes = [
    {
        path: '',
        component: _evidencia_page__WEBPACK_IMPORTED_MODULE_3__["EvidenciaPage"],
    },
    {
        path: 'aceptar-terminos',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-SST-aceptar-terminos-aceptar-terminos-module */ "src-app-pages-SST-aceptar-terminos-aceptar-terminos-module").then(__webpack_require__.bind(null, /*! src/app/pages/SST/aceptar-terminos/aceptar-terminos.module */ "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.module.ts")).then(m => m.AceptarTerminosPageModule),
    },
];
let EvidenciaPageRoutingModule = class EvidenciaPageRoutingModule {
};
EvidenciaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EvidenciaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/evidencia/evidencia.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/SST/evidencia/evidencia.module.ts ***!
  \*********************************************************/
/*! exports provided: EvidenciaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenciaPageModule", function() { return EvidenciaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _evidencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evidencia-routing.module */ "./src/app/pages/SST/evidencia/evidencia-routing.module.ts");
/* harmony import */ var _evidencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evidencia.page */ "./src/app/pages/SST/evidencia/evidencia.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let EvidenciaPageModule = class EvidenciaPageModule {
};
EvidenciaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _evidencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["EvidenciaPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_evidencia_page__WEBPACK_IMPORTED_MODULE_6__["EvidenciaPage"]],
    })
], EvidenciaPageModule);



/***/ }),

/***/ "./src/app/pages/SST/evidencia/evidencia.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/SST/evidencia/evidencia.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-row div.take-photo {\n  margin-bottom: 4px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 50%;\n  color: #000;\n  background: #dedede !important;\n  border-radius: 24px;\n  width: 95%;\n  height: 40px;\n  font-size: 12px;\n  font-weight: 500;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.icon-color {\n  color: #ff7500;\n}\n.photo-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-item .photo-content {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-item .titulo-foto {\n  width: 80%;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 18px;\n  padding-right: 18px;\n  background: #dedede;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);\n  border-radius: 50px;\n  text-align: center;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\nion-fab-button.float-button {\n  --padding: 0;\n  --margin: 0;\n  --size: 44px;\n  --background: #ff7500;\n}\nion-icon.float-button {\n  --background: #ff7500;\n}\n.custom-icon-float {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2V2aWRlbmNpYS9ldmlkZW5jaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFBRTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFHQTtFQUNFLGNBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2V2aWRlbmNpYS9ldmlkZW5jaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjYmViMmIyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmLnRvb2xjb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHBhZGRpbmc6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5pb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiBkaXYudGFrZS1waG90byB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxufVxuXG4uaWNvbi1jb2xvciB7XG4gIGNvbG9yOiAjZmY3NTAwO1xufVxuXG4ucGhvdG8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgLnBob3RvLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgJiAudGl0dWxvLWZvdG8ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1mYWItYnV0dG9uLmZsb2F0LWJ1dHRvbiB7XG4gIC0tcGFkZGluZzogMDtcbiAgLS1tYXJnaW46IDA7XG4gIC0tc2l6ZTogNDRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3NTAwO1xufVxuXG5pb24taWNvbi5mbG9hdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZjc1MDA7XG59XG5cbi5jdXN0b20taWNvbi1mbG9hdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/SST/evidencia/evidencia.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/SST/evidencia/evidencia.page.ts ***!
  \*******************************************************/
/*! exports provided: EvidenciaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenciaPage", function() { return EvidenciaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/SST/tabla-trabajadores.service */ "./src/app/services/SST/tabla-trabajadores.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/camera */ "./node_modules/@capacitor/camera/dist/esm/index.js");









let EvidenciaPage = class EvidenciaPage {
    constructor(modalController, router, dataService, alertController, utils, tablaTrabajadoresService) {
        this.modalController = modalController;
        this.router = router;
        this.dataService = dataService;
        this.alertController = alertController;
        this.utils = utils;
        this.tablaTrabajadoresService = tablaTrabajadoresService;
        this.photos = [
        // {
        //   strNombreImagen: 'Foto 1',
        //   strBase64Image: 'file:///storage/emulated/0/Android/data/io.ionic.starter/cache/1589394485483.jpg',
        // },
        // {
        //   strNombreImagen: 'Foto 1',
        //   strBase64Image: 'file:///storage/emulated/0/Android/data/io.ionic.starter/cache/1589394485483.jpg',
        // },
        ];
        this.counterPhoto = 0;
    }
    ngOnInit() {
        this.precargarDatos();
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
    takePhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const capturePicture = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"].getPhoto({
                    promptLabelPicture: 'Tomar foto',
                    promptLabelPhoto: 'Seleccionar foto',
                    promptLabelHeader: 'Seleccionar foto',
                    promptLabelCancel: 'Cancelar',
                    quality: 80,
                    allowEditing: false,
                    resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Base64,
                    width: 400,
                    height: 400,
                    source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera,
                });
                if (capturePicture == null) {
                    return;
                }
                const photo = {
                    strNombreImagen: 'Foto ' + (this.photos.length + 1),
                    strBase64Image: capturePicture.base64String,
                };
                this.photos.push(photo);
                this.counterPhoto++;
            }
            catch (error) {
                console.error('Error al tomar la foto:', error);
                // this.mostrarError(error);
            }
        });
    }
    selectMultiplePhotos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.utils.presentLoading();
                let fotos = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"].pickImages({ quality: 50, height: 400, width: 400, correctOrientation: true });
                if (fotos == null) {
                    return;
                }
                yield this.addPhotos(fotos);
            }
            catch (error) {
                console.error('Error al seleccionar las fotos:', error);
                // this.mostrarError(error);
            }
            finally {
                this.utils.dismissLoading();
            }
        });
    }
    addPhotos(fotosCargadas) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let index = 0; index < fotosCargadas.photos.length; index++) {
                const image = fotosCargadas.photos[index];
                try {
                    const response = yield fetch(image.webPath);
                    const blob = yield response.blob();
                    const reader = new FileReader();
                    yield new Promise(resolve => {
                        reader.onloadend = () => {
                            const base64data = reader.result.toString().split(',')[1];
                            const photo = {
                                strNombreImagen: 'Foto ' + (this.counterPhoto + 1),
                                strBase64Image: base64data.toString(),
                            };
                            this.photos.push(photo);
                            this.counterPhoto++; // Incrementa el contador
                            resolve();
                        };
                        reader.readAsDataURL(blob);
                    });
                }
                catch (error) {
                    console.error('Error al cargar imagen:', error);
                }
            }
        });
    }
    deletePhoto(photo) {
        // Elimina la foto del array
        this.photos.splice(this.photos.indexOf(photo), 1);
        if (this.photos.length === 0) {
            this.counterPhoto = 0;
        }
    }
    continuar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.photos.length === 0) {
                this.mostrarError('Debe agregar al menos una imagen');
                return;
            }
            yield this.guardarDatos();
            this.router.navigate([
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos',
            ]);
        });
    }
    guardarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data['listaAnexoImagenes'] = this.photos;
            this.data['lastRoute'] =
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia';
            this.dataService.setData(this.data);
            this.dataService.saveData();
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
    precargarDatos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dataUrl = history.state.data;
            console.log(dataUrl);
            yield this.utils.presentLoading();
            if (dataUrl) {
                this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                this.counterPhoto = dataUrl['listaAnexoImagenes'].length;
                this.photos = dataUrl['listaAnexoImagenes'];
                this.dataService.setData(dataUrl);
                this.data = dataUrl;
            }
            else {
                this.data = this.dataService.getData();
                this.photos = this.data['listaAnexoImagenes'];
                this.dataService.setData(this.data);
            }
            console.log(this.data);
            this.utils.dismissLoading();
        });
    }
    back() {
        this.router.navigate([
            '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva',
        ], { state: { data: this.data } });
    }
    pushPermisosSST() {
        this.router.navigate(['/home/permisos']);
    }
};
EvidenciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__["SaveDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_6__["TablaTrabajadoresService"] }
];
EvidenciaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evidencia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./evidencia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/evidencia/evidencia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./evidencia.page.scss */ "./src/app/pages/SST/evidencia/evidencia.page.scss")).default]
    })
], EvidenciaPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-evidencia-evidencia-module-es2015.js.map