(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-firmar-si-firmar-si-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/firmar-si/firmar-si.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/firmar-si/firmar-si.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">Autorizado Por:</div>\n  <!-- nombre -->\n  <ion-item>\n    <ion-label>Tipo Documento</ion-label>\n    <ion-select (ionChange)=\"onChangePermiso1($event)\">\n      <ion-select-option value=\"CC\">Cédula Ciudadania</ion-select-option>\n      <ion-select-option value=\"CE\">Cédula Extranjeria</ion-select-option>\n      <ion-select-option value=\"TI\">Tarjeta Identidad</ion-select-option>\n      <ion-select-option value=\"PA\">Pasaporte</ion-select-option>\n      <ion-select-option value=\"PT\">Permiso Trabajo</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <!-- cedula -->\n  <ion-item *ngIf=\"tipoDocuemento1 !== 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"documentoAutorizo1\"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf=\"tipoDocuemento1 === 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"documentoAutorizo1\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"nombreAutorizo1\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Cargo</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"cargoAutorizo1\"></ion-input>\n  </ion-item>\n\n  <app-signature-pad (onSignatureChange)=\"onSignatureChange($event)\"></app-signature-pad>\n  <div class=\"toolbar toolcontent\">Coordinador Trabajo Alturas y Responsable Plan Emergencia</div>\n\n  <!-- Segunda instancia -->\n  <!-- nombre -->\n  <ion-item>\n    <ion-label>Tipo Documento</ion-label>\n    <ion-select (ionChange)=\"onChangePermiso2($event)\">\n      <ion-select-option value=\"CC\">Cédula Ciudadania</ion-select-option>\n      <ion-select-option value=\"CE\">Cédula Extranjeria</ion-select-option>\n      <ion-select-option value=\"TI\">Tarjeta Identidad</ion-select-option>\n      <ion-select-option value=\"PA\">Pasaporte</ion-select-option>\n      <ion-select-option value=\"PT\">Permiso Trabajo</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <!-- cedula -->\n  <ion-item *ngIf=\"tipoDocuemento2 !== 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"documentoAutorizo2\"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf=\"tipoDocuemento2 === 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"documentoAutorizo2\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"nombreAutorizo2\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Cargo</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"cargoAutorizo2\"></ion-input>\n  </ion-item>\n  <app-signature-pad (onSignatureChange)=\"onSignatureChange2($event)\"></app-signature-pad>\n\n  <div *ngIf=\"firmas\" class=\"ion-padding ion-text-center\">\n    <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Continuar</button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/SST/firmar-si/firmar-si-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/SST/firmar-si/firmar-si-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FirmarSiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmarSiPageRoutingModule", function() { return FirmarSiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _firmar_si_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firmar-si.page */ "./src/app/pages/SST/firmar-si/firmar-si.page.ts");




const routes = [
    {
        path: '',
        component: _firmar_si_page__WEBPACK_IMPORTED_MODULE_3__["FirmarSiPage"],
    },
];
let FirmarSiPageRoutingModule = class FirmarSiPageRoutingModule {
};
FirmarSiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FirmarSiPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/SST/firmar-si/firmar-si.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/SST/firmar-si/firmar-si.module.ts ***!
  \*********************************************************/
/*! exports provided: FirmarSiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmarSiPageModule", function() { return FirmarSiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _firmar_si_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firmar-si-routing.module */ "./src/app/pages/SST/firmar-si/firmar-si-routing.module.ts");
/* harmony import */ var _firmar_si_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firmar-si.page */ "./src/app/pages/SST/firmar-si/firmar-si.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








let FirmarSiPageModule = class FirmarSiPageModule {
};
FirmarSiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _firmar_si_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirmarSiPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_firmar_si_page__WEBPACK_IMPORTED_MODULE_6__["FirmarSiPage"]],
    })
], FirmarSiPageModule);



/***/ }),

/***/ "./src/app/pages/SST/firmar-si/firmar-si.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/SST/firmar-si/firmar-si.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-row div.take-photo {\n  margin-bottom: 4px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 50%;\n  color: #fff;\n  background: #4d4c4c !important;\n  border-radius: 24px;\n  width: 50%;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-row div.select-photo {\n  margin-top: 4px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 50%;\n  color: #fff;\n  background: var(--ion-color-primary);\n  border-radius: 24px;\n  width: 50%;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.photo-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-item .photo-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 18px;\n  padding-right: 18px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);\n  border-radius: 50px;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2Zpcm1hci1zaS9maXJtYXItc2kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFBRTtFQUNFLDBDQUFBO0FBRUo7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtBQUNKO0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvZmlybWFyLXNpL2Zpcm1hci1zaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYudG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNiZWIyYjI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICYudG9vbGNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgcGFkZGluZzogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmIGRpdi50YWtlLXBob3RvIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICM0ZDRjNGMgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbiAgJiBkaXYuc2VsZWN0LXBob3RvIHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbn1cblxuLnBob3RvLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgLnBob3RvLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxufVxuXG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/SST/firmar-si/firmar-si.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/SST/firmar-si/firmar-si.page.ts ***!
  \*******************************************************/
/*! exports provided: FirmarSiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmarSiPage", function() { return FirmarSiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_interfaces_edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/edfirma-responsable-permiso-trabajo */ "./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts");
/* harmony import */ var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/SST/save-data.service */ "./src/app/services/SST/save-data.service.ts");
/* harmony import */ var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/modal-trabajadores/modal-trabajadores.component */ "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");







let FirmarSiPage = class FirmarSiPage {
    constructor(alertController, saveDataService, router, modalController) {
        this.alertController = alertController;
        this.saveDataService = saveDataService;
        this.router = router;
        this.modalController = modalController;
        this.autorizaciones = [];
        this.firmas = false;
        this.firmasCompletas = false;
    }
    ngOnInit() {
        this.autorizaciones = [new src_app_interfaces_edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_4__["EDFirmaResponsablePermisoTrabajo"](), new src_app_interfaces_edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_4__["EDFirmaResponsablePermisoTrabajo"]()];
        this.data = this.saveDataService.getData();
        console.log(this.data['uniqueId']);
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
    onSignatureChange(signatureData) {
        this.autorizaciones[0].strFirmaBase64 = signatureData;
        this.firmas = true;
    }
    onSignatureChange2(signatureData) {
        this.autorizaciones[1].strFirmaBase64 = signatureData;
        this.firmas = true;
    }
    onSignatureChange3(signatureData) {
        this.autorizaciones[2].strFirmaBase64 = signatureData;
        this.firmas = true;
    }
    onChangePermiso1(event) {
        this.autorizaciones[0].strTipoDocumento = event.target.value;
        this.tipoDocuemento1 = event.target.value;
    }
    onChangePermiso2(event) {
        this.autorizaciones[1].strTipoDocumento = event.target.value;
        this.tipoDocuemento2 = event.target.value;
    }
    validarFirmasCompletas() {
        this.firmasCompletas = this.autorizaciones.every(autorizacion => {
            return (autorizacion.strCargo !== undefined &&
                autorizacion.strCargo !== '' &&
                autorizacion.strNombreCompleto !== undefined &&
                autorizacion.strNombreCompleto !== '' &&
                autorizacion.strTipoDocumento !== undefined &&
                autorizacion.strTipoDocumento !== '' &&
                autorizacion.strDocumentoIdentificacion !== null &&
                autorizacion.strDocumentoIdentificacion !== undefined &&
                autorizacion.strFirmaBase64.trim() !== '');
        });
    }
    continuar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.autorizaciones[0].strCargo = this.cargoAutorizo1;
            this.autorizaciones[0].strNombreCompleto = this.nombreAutorizo1;
            this.autorizaciones[0].strDocumentoIdentificacion = this.documentoAutorizo1;
            if (this.autorizaciones[0].strTipoDocumento === 'PA' && !/[A-Za-z].*[0-9]+/.test(this.autorizaciones[0].strDocumentoIdentificacion)) {
                this.mostrarError('Verifica el Número de pasaporte');
                return;
            }
            this.autorizaciones[1].strCargo = this.cargoAutorizo2;
            this.autorizaciones[1].strNombreCompleto = this.nombreAutorizo2;
            this.autorizaciones[1].strDocumentoIdentificacion = this.documentoAutorizo2;
            if (this.autorizaciones[1].strTipoDocumento === 'PA' && !/[A-Za-z].*[0-9]+/.test(this.autorizaciones[1].strDocumentoIdentificacion)) {
                this.mostrarError('Verifica el Número de pasaporte');
                return;
            }
            this.validarFirmasCompletas();
            if (!this.firmasCompletas) {
                this.mostrarError('Debes completar todas las firmas para continuar.');
                return;
            }
            let lat = this.data['edInfoAuditoria'].strLatitud;
            let lng = this.data['edInfoAuditoria'].strLongitud;
            this.data['edAutorizadoPermisoTrabajo'] = this.autorizaciones[0];
            this.data['edAutorizadoPermisoTrabajo'].strLatitud = lat;
            this.data['edAutorizadoPermisoTrabajo'].strLongitud = lng;
            this.data['edCoordinadorTrabajoAlturas'] = this.autorizaciones[1];
            this.data['edCoordinadorTrabajoAlturas'].strLatitud = lat;
            this.data['edCoordinadorTrabajoAlturas'].strLongitud = lng;
            this.data['edResponsableActivarPlanEmergencia'] = this.autorizaciones[1];
            this.data['edResponsableActivarPlanEmergencia'].strLatitud = lat;
            this.data['edResponsableActivarPlanEmergencia'].strLongitud = lng;
            this.data['lastRoute'] =
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos';
            this.saveDataService.setData(this.data);
            console.log(this.data);
            this.data['enviar'] = true;
            this.saveDataService.saveData();
            this.router.navigate([
                '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos',
            ]);
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
        this.router.navigate([
            '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos',
        ], { state: { data: this.data } });
    }
};
FirmarSiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__["SaveDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
FirmarSiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firmar-si',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./firmar-si.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/firmar-si/firmar-si.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./firmar-si.page.scss */ "./src/app/pages/SST/firmar-si/firmar-si.page.scss")).default]
    })
], FirmarSiPage);



/***/ })

}]);
//# sourceMappingURL=src-app-pages-SST-firmar-si-firmar-si-module-es2015.js.map