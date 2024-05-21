(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chequeos-encuesta-chequeos-encuesta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Título de la vista -->\n  <app-title-bar [title]=\"'ENCUESTA CHEQUEO MÉDICO'\" [iconName]=\"'assets/icon/nurse.svg'\"></app-title-bar>\n\n  <p class=\"message\">Por favor, contesta las siguientes preguntas con relación a tu estado de salud el día de hoy</p>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\" *ngIf=\"formGroupReady\">\n\n    <!-- Formulario -->\n    <ion-list lines=\"none\">\n\n      <!-- Selectores de labor habitual y específica -->\n      <ion-grid class=\"p-0\">\n\n        <!-- Labor habitual -->\n        <ion-row>\n          <ion-col>\n            <ion-item class=\"p-0\">\n              <ion-label position=\"stacked\">\n                <span class=\"required-field\">*</span>\n                Labor habitual\n              </ion-label>\n              <ion-select formControlName=\"habitualWork\" interface=\"action-sheet\" cancelText=\"Cancelar\"\n                (ionChange)=\"setSpecificWorks($event.detail.value)\">\n                <ion-select-option [value]=\"w.value\" *ngFor=\"let w of HABITUAL_WORKS\">\n                  {{ w.label }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.habitualWork.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.habitualWork.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- Labor específica -->\n        <ion-row>\n          <ion-col>\n            <ion-item class=\"p-0\">\n              <ion-label position=\"stacked\">\n                <span class=\"required-field\">*</span>\n                Labor específica\n              </ion-label>\n              <ion-select formControlName=\"specificWork\" interface=\"action-sheet\" cancelText=\"Cancelar\">\n                <ion-select-option [value]=\"w.value\" *ngFor=\"let w of specificWorks\">\n                  {{ w.label }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.specificWork.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.specificWork.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      <!-- Sección Exposición -->\n      <div class=\"section-title\">Exposición</div>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">1.</span>\n                ¿Ha estado en contacto con una persona diagnosticada con COVID-19 en los últimos 14 días?\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionOne.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionOne.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-list lines=\"none\">\n              <ion-radio-group formControlName=\"questionOne\">\n                <ion-item *ngFor=\"let o of RADIO_OPTIONS\">\n                  <ion-label>{{ o.label }}</ion-label>\n                  <ion-radio [value]=\"o.value\" (click)=\"updateQuestionValidators(1)\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">2.</span>\n                Si estado en contacto con una persona diagnosticada con COVID-19 en los últimos\n                14 días, por favor confirmar la fecha de contacto\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionTwo.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionTwo.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-item class=\"date-picker-wrapper\">\n              <ion-label class=\"m-0\" [class.hide]=\"formGroup.controls.questionTwo.value\">\n                <img src=\"assets/img/fecha.png\">\n              </ion-label>\n              <ion-datetime formControlName=\"questionTwo\" [displayFormat]=\"DISPLAY_DATE_FORMAT\"\n                [pickerFormat]=\"PICKER_DATE_FORMAT\" cancelText=\"Cancelar\" doneText=\"OK\" [min]=\"minDate\" [max]=\"maxDate\"\n                [disabled]=\"isFieldDisabled(2)\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">3.</span>\n                ¿Ha estado en contacto con persona(s) con enfermedades respiratorias, fiebre o gastrointestinales?\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionThree.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionThree.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-list lines=\"none\">\n              <ion-radio-group formControlName=\"questionThree\">\n                <ion-item *ngFor=\"let o of RADIO_OPTIONS\">\n                  <ion-label>{{ o.label }}</ion-label>\n                  <ion-radio [value]=\"o.value\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- Sección estado personal -->\n      <div class=\"section-title\">Estado personal</div>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">4.</span>\n                ¿En el día de hoy ha presentado síntomas relacionados con enfermedad COVID 19?\n                <span class=\"text-help\">\n                  (fiebre mayor o igual a 38°C, tos seca, pérdida del aliento, dificultad para respirar,\n                  malestar o dolor en el pecho, congestión nasal, dolor de cabeza, entre otros)\n                </span>\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionFour.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionFour.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-list lines=\"none\">\n              <ion-radio-group formControlName=\"questionFour\">\n                <ion-item *ngFor=\"let o of RADIO_OPTIONS\">\n                  <ion-label>{{ o.label }}</ion-label>\n                  <ion-radio [value]=\"o.value\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">5.</span>\n                En los últimos 14 días anteriores a la fecha de aplicación, ¿ha presentado alguno\n                de los siguientes síntomas?\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-grid>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    ¿Ha presentado tos constante?\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionFive\"\n                    (ionChange)=\"setAnswers($event.detail.checked, 5); updateQuestionValidators(5)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    ¿Ha tenido fiebre mayor o igual a 38° Celsius (centígrados)?\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionSix\"\n                    (ionChange)=\"setAnswers($event.detail.checked, 6); updateQuestionValidators(6)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    ¿Ha presentado dificultad de respiración nueva o inusual en los últimos siete (7)\n                    días anterior a la fecha de aplicación?\n                    <span class=\"text-help\">\n                      (dificultad para completar una oración sin falta de aire, o necesidad de detenerse\n                      para recuperar la respiración cuando se camina por una habitación)\n                    </span>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionSeven\"\n                    (ionChange)=\"setAnswers($event.detail.checked, 7); updateQuestionValidators(7)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    ¿Ha tenido dolor de garganta?\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionEight\"\n                    (ionChange)=\"setAnswers($event.detail.checked, 8); updateQuestionValidators(8)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    ¿Sientes que has dejado de percibir olores y/o sabores?\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionNine\"\n                    (ionChange)=\"setAnswers($event.detail.checked, 9); updateQuestionValidators(9)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Ningún síntoma\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"clearQuestionFive\"\n                    (ionChange)=\"setAnswers($event.detail.checked, 50); updateQuestionValidators(50)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">6.</span>\n                Confirme la fecha de inicio de síntomas señalados previamente\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionTen.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionTen.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-item>\n              <ion-label class=\"m-0\" [class.hide]=\"formGroup.controls.questionTen.value\">\n                <img src=\"assets/img/fecha.png\">\n              </ion-label>\n              <ion-datetime formControlName=\"questionTen\" [displayFormat]=\"DISPLAY_DATE_FORMAT\"\n                [pickerFormat]=\"PICKER_DATE_FORMAT\" cancelText=\"Cancelar\" doneText=\"OK\" [min]=\"minDate\" [max]=\"maxDate\"\n                [disabled]=\"isFieldDisabled(10)\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- Sección antecedentes -->\n      <div class=\"section-title\">Antecedentes</div>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">7.</span>\n                ¿Usted fuma o ha fumado?\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionEleven.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionEleven.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-list lines=\"none\">\n              <ion-radio-group formControlName=\"questionEleven\">\n                <ion-item *ngFor=\"let o of RADIO_OPTIONS\">\n                  <ion-label>{{ o.label }}</ion-label>\n                  <ion-radio [value]=\"o.value\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">8.</span>\n                ¿Sufre alguna de las siguientes condiciones médicas?\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-grid>\n\n            <ion-row>\n              <ion-col col-9>\n                <ion-item>\n                  <ion-label>\n                    Hipertensión arterial sistémica\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col col-3>\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionTwelve\" (ionChange)=\"setAnswers($event.detail.checked, 12)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Diabetes mellitus\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionThirdteen\" (ionChange)=\"setAnswers($event.detail.checked, 13)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Enfermedad cardiaca\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionFourteen\" (ionChange)=\"setAnswers($event.detail.checked, 14)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Enfermedad cerebrovascular\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionFifteen\" (ionChange)=\"setAnswers($event.detail.checked, 15)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Enfermedad hepática\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionSixteen\" (ionChange)=\"setAnswers($event.detail.checked, 16)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Enfermedad pulmonar\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionSeventeen\" (ionChange)=\"setAnswers($event.detail.checked, 17)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Enfermedad renal crónica\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionEighteen\" (ionChange)=\"setAnswers($event.detail.checked, 18)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Obesidad\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"questionNineteen\" (ionChange)=\"setAnswers($event.detail.checked, 19)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"9\">\n                <ion-item>\n                  <ion-label>\n                    Ninguna\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item>\n                  <ion-checkbox class=\"ion-no-margin\" slot=\"end\" formControlName=\"clearQuestionEight\" (ionChange)=\"setAnswers($event.detail.checked, 80)\">\n                  </ion-checkbox>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"question\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">9.</span>\n                ¿Tiene alguna condición de inmusupresión?\n                <span class=\"text-help\">\n                  (VIH, terapias inmunomoduladoras, cáncer, uso de corticoides, quimioterapia,\n                  terapia biológica, transplante de órganos)\n                </span>\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionTwenty.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionTwenty.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-list lines=\"none\">\n              <ion-radio-group formControlName=\"questionTwenty\">\n                <ion-item *ngFor=\"let o of RADIO_OPTIONS\">\n                  <ion-label>{{ o.label }}</ion-label>\n                  <ion-radio [value]=\"o.value\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid class=\"question\" *ngIf=\"poll.userData.sex === 'F'\">\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-item>\n              <ion-label class=\"justify\">\n                <span class=\"number\">10.</span>\n                ¿Se encuentra usted en estado de embarazo?\n              </ion-label>\n            </ion-item>\n            <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls.questionTwentyOne.dirty\">\n              <ng-container *ngIf=\"formGroup.controls.questionTwentyOne.errors?.required\">\n                Este campo es requerido.\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-list lines=\"none\">\n              <ion-radio-group formControlName=\"questionTwentyOne\">\n                <ion-item *ngFor=\"let o of RADIO_OPTIONS\">\n                  <ion-label>{{ o.label }}</ion-label>\n                  <ion-radio [value]=\"o.value\"></ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-list>\n\n    <!-- Botones de acción -->\n    <div class=\"buttons-wrapper text-center\">\n      <ion-button color=\"primary\" type=\"submit\">Guardar</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/chequeos-encuesta/chequeos-encuesta-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/chequeos-encuesta/chequeos-encuesta-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChequeosEncuestaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosEncuestaPageRoutingModule", function() { return ChequeosEncuestaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chequeos_encuesta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequeos-encuesta.page */ "./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.ts");




const routes = [
    {
        path: '',
        component: _chequeos_encuesta_page__WEBPACK_IMPORTED_MODULE_3__["ChequeosEncuestaPage"]
    }
];
let ChequeosEncuestaPageRoutingModule = class ChequeosEncuestaPageRoutingModule {
};
ChequeosEncuestaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChequeosEncuestaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chequeos-encuesta/chequeos-encuesta.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/chequeos-encuesta/chequeos-encuesta.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChequeosEncuestaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosEncuestaPageModule", function() { return ChequeosEncuestaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _chequeos_encuesta_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequeos-encuesta-routing.module */ "./src/app/pages/chequeos-encuesta/chequeos-encuesta-routing.module.ts");
/* harmony import */ var _chequeos_encuesta_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chequeos-encuesta.page */ "./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.ts");





let ChequeosEncuestaPageModule = class ChequeosEncuestaPageModule {
};
ChequeosEncuestaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _chequeos_encuesta_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChequeosEncuestaPageRoutingModule"]
        ],
        declarations: [_chequeos_encuesta_page__WEBPACK_IMPORTED_MODULE_4__["ChequeosEncuestaPage"]]
    })
], ChequeosEncuestaPageModule);



/***/ }),

/***/ "./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\nion-content .message {\n  padding: 8px 16px;\n  background-color: #ff7500;\n  color: #ffffff;\n}\nion-content ion-list {\n  padding: 0 5px;\n}\nion-content ion-list ion-item {\n  --highlight-background: none;\n}\nion-content ion-list ion-item ion-label {\n  font-size: inherit !important;\n  margin-bottom: 5px !important;\n}\nion-content ion-list ion-item ion-label span.required-field {\n  color: red;\n}\nion-content ion-list .validation-errors {\n  color: red;\n}\nion-content .section-title {\n  border: 1px solid black;\n  background-color: #999999;\n  padding: 5px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  color: #ffffff;\n}\nion-content .question {\n  border: 2px solid black;\n  margin-bottom: 5px;\n  padding: 0 !important;\n}\nion-content .question ion-item {\n  padding: 0 !important;\n}\nion-content .question ion-item.date-picker-wrapper {\n  margin-top: 30%;\n}\nion-content .question ion-item .item-inner {\n  padding: 0 !important;\n}\nion-content .question ion-item ion-label {\n  word-break: break-word;\n  white-space: initial;\n  margin: 9px 0 !important;\n}\nion-content .question ion-item ion-label img {\n  margin: 0 auto !important;\n  display: block;\n}\nion-content .question ion-item ion-label .number {\n  font-weight: bold;\n  font-size: 20px;\n}\nion-content .question ion-item ion-label .text-help {\n  display: block;\n  font-size: 14px;\n  font-style: italic;\n}\nion-content .question ion-item ion-datetime {\n  padding: 0;\n}\nion-content .question ion-item ion-datetime .datetime-text {\n  color: #ff7500;\n}\nion-content .question ion-list {\n  padding: 0 !important;\n  margin: 0 !important;\n}\nion-content .question ion-list ion-item {\n  padding: 0 !important;\n}\nion-content .question ion-list ion-item .item-inner {\n  padding: 0 !important;\n}\nion-content .question ion-list ion-item .item-inner ion-label {\n  margin: 9px 10px 9px 0 !important;\n}\nion-content .buttons-wrapper {\n  margin-bottom: 16px;\n}\nion-content .buttons-wrapper button {\n  padding: 25px 35px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlcXVlb3MtZW5jdWVzdGEvY2hlcXVlb3MtZW5jdWVzdGEucGFnZS5zY3NzIiwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQiwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRFRGO0FDWUEsdUNBQUE7QUE2REE7OztFQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUQ5RUY7QUNpRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFFQSw4QkFBQTtBRG5GRjtBQ3NGQTtFQUNFLGlEQUFBO0VBQ0EsbURBQUE7RUFDQSxxREFBQTtFQUNBLGdEQUFBO0FEbkZGO0FDc0ZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxzQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFFQSxpQ0FBQTtFQUVBLGlDQUFBO0VBRUEsOEJBQUE7QUQzRkY7QUF4TUU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQTJNSjtBQXhNRTtFQUNFLGNBQUE7QUEwTUo7QUF4TUk7RUFDRSw0QkFBQTtBQTBNTjtBQXhNTTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7QUEwTVI7QUF2TVU7RUFDRSxVQUFBO0FBeU1aO0FBbk1JO0VBQ0UsVUFBQTtBQXFNTjtBQWpNRTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQW1NSjtBQWhNRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWtNSjtBQWhNSTtFQUNFLHFCQUFBO0FBa01OO0FBaE1NO0VBQ0UsZUFBQTtBQWtNUjtBQS9MTTtFQUNFLHFCQUFBO0FBaU1SO0FBOUxNO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBZ01SO0FBOUxRO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBZ01WO0FBN0xRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBK0xWO0FBNUxRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQThMVjtBQTFMTTtFQUNFLFVBQUE7QUE0TFI7QUExTFE7RUFDRSxjQUFBO0FBNExWO0FBdkxJO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQXlMTjtBQXZMTTtFQUNFLHFCQUFBO0FBeUxSO0FBdkxRO0VBQ0UscUJBQUE7QUF5TFY7QUF2TFU7RUFDRSxpQ0FBQTtBQXlMWjtBQWxMRTtFQUNFLG1CQUFBO0FBb0xKO0FBbExJO0VBQ0UsNkJBQUE7QUFvTE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVxdWVvcy1lbmN1ZXN0YS9jaGVxdWVvcy1lbmN1ZXN0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbi8qKiBWYXJpYWJsZXMgZGUgbGEgdmVyc2nDs24gYW50ZXJpb3IgKiovXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcbiAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbn1cblxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG5cbmlvbi1jb250ZW50IC5tZXNzYWdlIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBzcGFuLnJlcXVpcmVkLWZpZWxkIHtcbiAgY29sb3I6IHJlZDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IC52YWxpZGF0aW9uLWVycm9ycyB7XG4gIGNvbG9yOiByZWQ7XG59XG5pb24tY29udGVudCAuc2VjdGlvbi10aXRsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiBpb24taXRlbS5kYXRlLXBpY2tlci13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuaW9uLWNvbnRlbnQgLnF1ZXN0aW9uIGlvbi1pdGVtIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnF1ZXN0aW9uIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICBtYXJnaW46IDlweCAwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAucXVlc3Rpb24gaW9uLWl0ZW0gaW9uLWxhYmVsIGltZyB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnF1ZXN0aW9uIGlvbi1pdGVtIGlvbi1sYWJlbCAubnVtYmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiBpb24taXRlbSBpb24tbGFiZWwgLnRleHQtaGVscCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiBpb24taXRlbSBpb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgLnF1ZXN0aW9uIGlvbi1pdGVtIGlvbi1kYXRldGltZSAuZGF0ZXRpbWUtdGV4dCB7XG4gIGNvbG9yOiAjZmY3NTAwO1xufVxuaW9uLWNvbnRlbnQgLnF1ZXN0aW9uIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiBpb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiBpb24tbGlzdCBpb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5xdWVzdGlvbiBpb24tbGlzdCBpb24taXRlbSAuaXRlbS1pbm5lciBpb24tbGFiZWwge1xuICBtYXJnaW46IDlweCAxMHB4IDlweCAwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuYnV0dG9ucy13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5idXR0b25zLXdyYXBwZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMjVweCAzNXB4ICFpbXBvcnRhbnQ7XG59IiwiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbi8qKiBWYXJpYWJsZXMgZGUgbGEgdmVyc2nDs24gYW50ZXJpb3IgKiovXG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMnO1xuJGFwcC1kaXJlY3Rpb246IGx0cjtcbiRmb250LXNpemU6IDE2cHg7XG4kZm9udC13ZWlnaHQ6IDQwMDtcbiRjb250ZW50LWltZy1zaXplOiAyLjVyZW07XG5cbiRjb2xvcnM6IChcbiAgYmFzZS0xOiAjZTZlYWVlLFxuICBiYXNlLTI6ICNjYWQxZGEsXG4gIGJhc2UtMzogI2FmYjhjNCxcbiAgYmFzZS00OiAjOTZhMGFjLFxuICBiYXNlLTU6ICM3ZThhOTcsXG4gIGJhc2UtNjogIzY4NzY4NCxcbiAgYmFzZS03OiAjNTI2MjcwLFxuICBiYXNlLTg6ICMyODRlNWEsXG4gIHByaW1hcnk6ICNmZjc1MDAsXG4gIGJ0bi1wcmltYXJ5OiAjNTliYWE4LFxuKTtcblxuJHRleHQtaW5wdXQtaW9zLXNob3ctZm9jdWUtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1pb3MtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItaW9zLW9wdGlvbi1zZWxlY3RlZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzZWxlY3QtaW9zLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8taW9zLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYnV0dG9uLWlvcy1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctaW9zLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLWlvcy1hY3RpdmUtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtaW9zLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY2lyY2xlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWlvcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwb3BvdmVyLWlvcy13aWR0aDogMzEwcHg7XG5cbiR0ZXh0LWlucHV0LW1kLXNob3ctZm9jdXMtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1tZC10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuJHBpY2tlci1tZC1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LW1kLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8tbWQtY29sb3Itb246IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcGlja2VyLW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1tZC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiR0b2dnbGUtbWQtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiRhY3Rpb24tc2hlZXQtbWQtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1tZC1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtYnViYmxlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWRvdHMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1tZC13aWR0aDogMzEwcHg7XG5cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbn1cblxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG5cbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.ts ***!
  \*******************************************************************/
/*! exports provided: ChequeosEncuestaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosEncuestaPage", function() { return ChequeosEncuestaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/entities/chequeo-covid19 */ "./src/app/entities/chequeo-covid19.ts");






/**
 * Componente para la vista de encuesta de encuesta de chequeos médicos.
 */
let ChequeosEncuestaPage = class ChequeosEncuestaPage {
    constructor(router) {
        this.router = router;
        /**
         * Opciones de labores específicas.
         */
        this.specificWorks = [];
        /**
         * Formato de fecha para el valor seleccionado.
         */
        this.DISPLAY_DATE_FORMAT = 'DD/MM';
        /**
         * Formato de fecha para el selector de fechas.
         */
        this.PICKER_DATE_FORMAT = 'DD MM';
        /**
         * Opciones de los controles de usuario radio.
         */
        this.RADIO_OPTIONS = [
            { label: 'Sí', value: 'SI' },
            { label: 'No', value: 'NO' }
        ];
        /**
         * Tipos de labores habituales.
         */
        this.HABITUAL_WORKS = [
            { label: 'Salud', value: 'Salud' },
            { label: 'Aseo/Vigilancia/Alimentación/IPS', value: 'Aseo/Vigilancia/Alimentación/IPS' },
            { label: 'Emergencias', value: 'Emergencias' },
            { label: 'Control fronterizo', value: 'Control fronterizo' },
            { label: 'Terminales', value: 'Terminales' },
            { label: 'Atención población privada de libertad', value: 'Atención población privada de libertad' },
            { label: 'Otros sectores', value: 'Otros sectores' }
        ];
        /**
         * Tipos de labores específicas para salud.
         */
        this.SPECIFIC_WORKS_SALUD = [
            { label: 'Labor asistencial servicio de urgencias', value: 'Labor asistencial servicio de urgencias' },
            { label: 'Labor asistencial servicio de hospitalización general con pabellones de pacientes con COVID-19', value: 'Labor asistencial servicio de hospitalización general con pabellones de pacientes con COVID-19' },
            { label: 'Labor asistencial unidades de cuidado intensivo adulto, pediátrica y neonatal', value: 'Labor asistencial unidades de cuidado intensivo adulto, pediátrica y neonatal' },
            { label: 'Unidades de cuidado intermedio adulto y pediátrica', value: 'Unidades de cuidado intermedio adulto y pediátrica' },
            { label: 'Labor administrativa y de apoyo a los servicios de urgencias', value: 'Labor administrativa y de apoyo a los servicios de urgencias' },
            { label: 'Labor administrativa y de apoyo a los servicios de hospitalización general con pabellones de pacientes con COVID-19', value: 'Labor administrativa y de apoyo a los servicios de hospitalización general con pabellones de pacientes con COVID-19' },
            { label: 'Labor administrativa y de apoyo a unidades de cuidado intensivo adulto, pediátrica y neonatal', value: 'Labor administrativa y de apoyo a unidades de cuidado intensivo adulto, pediátrica y neonatal' },
            { label: 'Labor administrativa y de apoyo a unidades de cuidado intermedio adulto y pediátrica', value: 'Labor administrativa y de apoyo a unidades de cuidado intermedio adulto y pediátrica' },
            { label: 'Labor asistencial de otros servicios con riesgo de exposición directa', value: 'Labor asistencial de otros servicios con riesgo de exposición directa' },
            { label: 'Labor administrativa y de apoyo de otros servicios con riesgo de exposición directa', value: 'Labor administrativa y de apoyo de otros servicios con riesgo de exposición directa' }
        ];
        /**
         * Tipos de labores específicas para aseo, vigilancia y alimentación de las ips, de los servicios donde
         * haya riesgo de exposición directa.
         */
        this.SPECIFIC_WORKS_ASEO = [
            { label: 'Labor aseo de las IPS, de los servicios donde haya Riesgo de Exposición Directa', value: 'Labor aseo de las IPS, de los servicios donde haya Riesgo de Exposición Directa' },
            { label: 'Labor vigilancia de las IPS, de los servicios donde haya Riesgo de Exposición Directa', value: 'Labor vigilancia de las IPS, de los servicios donde haya Riesgo de Exposición Directa' },
            { label: 'Labor de alimentación de las IPS, de los servicios donde haya Riesgo de Exposición Directa', value: 'Labor de alimentación de las IPS, de los servicios donde haya Riesgo de Exposición Directa' }
        ];
        /**
         * Tipos de labores específicas para emergencias.
         */
        this.SPECIFIC_WORKS_EMERGENCIAS = [
            { label: 'Cuerpos de Bomberos', value: 'Cuerpos de Bomberos' },
            { label: 'Cruz Roja', value: 'Cruz Roja' },
            { label: 'Defensa Civil', value: 'Defensa Civil' }
        ];
        /**
         * Tipos de labores específicas para control fronterizo.
         */
        this.SPECIFIC_WORKS_CONTROL_FRONTERIZO = [
            { label: 'Migración Colombia', value: 'Migración Colombia' },
            { label: 'DIAN', value: 'DIAN' }
        ];
        /**
         * Tipos de labores específicas para trabajadores de terminales.
         */
        this.SPECIFIC_WORKS_TRABAJORES_TERMINALES = [
            { label: 'Terminales Aéreos', value: 'Terminales Aéreos' },
            { label: 'Terminales Terrestres', value: 'Terminales Terrestres' },
            { label: 'Terminales Marítimos', value: 'Terminales Marítimos' },
            { label: 'Fluviales', value: 'Fluviales' }
        ];
        /**
         * Tipos de labores específicas para trabajadores que atienden población privada de libertad.
         */
        this.SPECIFIC_WORKS_TRABAJORES_POBLACION_PRIVADA = [
            { label: 'INPEC', value: 'INPEC' },
            { label: 'Servicio Médico de PPL', value: 'Servicio Médico de PPL' }
        ];
        /**
         * Tipos de labores específicas para otros sectores.
         */
        this.SPECIFIC_WORKS_OTROS = [
            { label: 'Otros Sectores', value: 'Otros Sectores' }
        ];
        const today = new Date();
        let month = today.getMonth() + 1;
        month = month >= 10 ? `${month}` : `0${month}`;
        let day = today.getDate();
        day = day >= 10 ? `${day}` : `0${day}`;
        this.maxDate = `${today.getFullYear()}-${month}-${day}`;
        const fourteenDaysAgo = new Date();
        fourteenDaysAgo.setDate(today.getDate() - 14);
        month = fourteenDaysAgo.getMonth() + 1;
        month = month >= 10 ? `${month}` : `0${month}`;
        day = fourteenDaysAgo.getDate();
        day = day >= 10 ? `${day}` : `0${day}`;
        this.minDate = `${fourteenDaysAgo.getFullYear()}-${month}-${day}`;
    }
    ngOnInit() {
        this.poll = this.router.getCurrentNavigation().extras.state.poll;
        if (!!this.poll.id) {
            return this.save();
        }
        this.initForm();
    }
    /**
     * Inicializa el formulario
     */
    initForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        const habitualWork = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        const specificWork = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        const questionOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        const questionTwo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [this.isQuestionTwoRequired(this.formGroup)]);
        const questionThree = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        const questionFour = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        const questionFive = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionSix = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionSeven = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionEight = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionNine = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionTen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [this.isQuestionTenRequired(this.formGroup)]);
        const questionEleven = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        const questionTwelve = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionThirdteen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionFourteen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionFifteen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionSixteen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionSeventeen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionEighteen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionNineteen = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        const questionTwenty = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        const questionTwentyOne = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
        const clearQuestionFive = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
        const clearQuestionEight = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true);
        if (this.poll.userData.sex === 'F') {
            // Pregunta de embarazo obligatoria solo para mujeres
            questionTwentyOne.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
        this.formGroup.addControl('habitualWork', habitualWork);
        this.formGroup.addControl('specificWork', specificWork);
        this.formGroup.addControl('questionOne', questionOne);
        this.formGroup.addControl('questionTwo', questionTwo);
        this.formGroup.addControl('questionThree', questionThree);
        this.formGroup.addControl('questionFour', questionFour);
        this.formGroup.addControl('questionFive', questionFive);
        this.formGroup.addControl('questionSix', questionSix);
        this.formGroup.addControl('questionSeven', questionSeven);
        this.formGroup.addControl('questionEight', questionEight);
        this.formGroup.addControl('questionNine', questionNine);
        this.formGroup.addControl('questionTen', questionTen);
        this.formGroup.addControl('questionEleven', questionEleven);
        this.formGroup.addControl('questionTwelve', questionTwelve);
        this.formGroup.addControl('questionThirdteen', questionThirdteen);
        this.formGroup.addControl('questionFourteen', questionFourteen);
        this.formGroup.addControl('questionFifteen', questionFifteen);
        this.formGroup.addControl('questionSixteen', questionSixteen);
        this.formGroup.addControl('questionSeventeen', questionSeventeen);
        this.formGroup.addControl('questionEighteen', questionEighteen);
        this.formGroup.addControl('questionNineteen', questionNineteen);
        this.formGroup.addControl('questionTwenty', questionTwenty);
        this.formGroup.addControl('clearQuestionFive', clearQuestionFive);
        this.formGroup.addControl('clearQuestionEight', clearQuestionEight);
        this.formGroup.addControl('questionTwentyOne', questionTwentyOne);
        this.formGroupReady = true;
    }
    /**
     * Guarda las respuestas de la encuesta y redirige a la vista de resultados.
     */
    save() {
        if (this.formGroup) {
            this.submitted = true;
            if (this.formGroup.invalid) {
                this.content.scrollToTop(1000);
                return;
            }
            const questions = [];
            Object.keys(this.formGroup.controls).forEach(k => {
                const control = this.formGroup.controls[k];
                const v = this.getValue(control);
                const question = new src_app_entities_chequeo_covid19__WEBPACK_IMPORTED_MODULE_5__["Question"](k, v);
                questions.push(question);
            });
            this.poll.questions = questions;
        }
        this.router.navigate(['/health-conditions/medical-check-results'], { state: { poll: this.poll } });
    }
    /**
     * Establece el valor de las respuestas para la pregunta indicada de acuerdo al control de usuario
     * seleccionado.
     *
     * @param event Evento.
     * @param question Número de la pregunta.
     */
    setAnswers(event, question) {
        if (!event) {
            return;
        }
        let questions;
        switch (question) {
            case 50:
                // Opción de restablecimiento de respuestas para la pregunta cinco
                questions = [
                    'questionFive',
                    'questionSix',
                    'questionSeven',
                    'questionEight',
                    'questionNine'
                ];
                break;
            case 80:
                // Opción de restablecimiento de respuestas para la pregunta ocho
                questions = [
                    'questionTwelve',
                    'questionThirdteen',
                    'questionFourteen',
                    'questionFifteen',
                    'questionSixteen',
                    'questionSeventeen',
                    'questionEighteen',
                    'questionNineteen'
                ];
                break;
            default:
                if (question < 10) {
                    // El usuario ha seleccionado alguna de las respuestas de la pregunta cinco.
                    // Se restablece la opción de limpiar todas las respuestas
                    questions = [
                        'clearQuestionFive'
                    ];
                }
                else {
                    // El usuario ha seleccionado alguna de las respuestas de la pregunta ocho.
                    // Se restablece la opción de limpiar todas las respuestas
                    questions = [
                        'clearQuestionEight'
                    ];
                }
        }
        this.clearAnswers(questions);
    }
    /**
     * Actualiza los validadores del control de usuario relacionado.
     *
     * @param question Número de la pregunta.
     */
    updateQuestionValidators(question) {
        let controlName;
        switch (question) {
            case 1:
                controlName = 'questionTwo';
                break;
            default:
                controlName = 'questionTen';
        }
        setTimeout(() => this.formGroup.controls[controlName].updateValueAndValidity(), 500);
    }
    /**
     * Indica si el control de usuario está deshabilitado para la pregunta indicada.
     *
     * @param question Número de la pregunta.
     */
    isFieldDisabled(question) {
        let isDisabled;
        switch (question) {
            case 2:
                isDisabled = this.formGroup.controls.questionOne.value !== 'SI';
                break;
            case 10:
                isDisabled = !this.formGroup.controls.questionFive.value &&
                    !this.formGroup.controls.questionSix.value &&
                    !this.formGroup.controls.questionSeven.value &&
                    !this.formGroup.controls.questionEight.value &&
                    !this.formGroup.controls.questionNine.value;
        }
        return isDisabled;
    }
    /**
     * Establece las opciones de labor específica disponibles de acuerdo a la labor habitual seleccionada.
     *
     * @param habitualWork Nombre de la labor habitual.
     */
    setSpecificWorks(habitualWork) {
        this.formGroup.controls.specificWork.setValue(undefined);
        switch (habitualWork) {
            case 'Salud':
                this.specificWorks = this.SPECIFIC_WORKS_SALUD;
                break;
            case 'Aseo/Vigilancia/Alimentación/IPS':
                this.specificWorks = this.SPECIFIC_WORKS_ASEO;
                break;
            case 'Emergencias':
                this.specificWorks = this.SPECIFIC_WORKS_EMERGENCIAS;
                break;
            case 'Control fronterizo':
                this.specificWorks = this.SPECIFIC_WORKS_CONTROL_FRONTERIZO;
                break;
            case 'Terminales':
                this.specificWorks = this.SPECIFIC_WORKS_TRABAJORES_TERMINALES;
                break;
            case 'Atención población privada de libertad':
                this.specificWorks = this.SPECIFIC_WORKS_TRABAJORES_POBLACION_PRIVADA;
                break;
            case 'Otros sectores':
                this.specificWorks = this.SPECIFIC_WORKS_OTROS;
                break;
        }
    }
    /**
     * Limpia las respuestas para las preguntas indicadas.
     *
     * @param questions Arreglo de nombres de preguntas.
     */
    clearAnswers(questions) {
        questions.forEach(q => {
            this.formGroup.controls[q].setValue(false);
        });
    }
    /**
     * Evalúa si la respuesta de la segunda pregunta es válida o no.
     *
     * Si el usuario ha indicado que ha tenido contacto con una persona contagiada con COVID-19 en los
     * últimos catorce (14) días, el campo para indicar la fecha de contacto es requerido. En caso
     * contrario, el control de usuario está deshabilitado.
     *
     * @param formGroup Formulario.
     */
    isQuestionTwoRequired(formGroup) {
        const validator = (control) => {
            const question = formGroup.controls.questionOne;
            if (question && question.value === 'SI') {
                if (!control.value) {
                    return { required: true };
                }
            }
            return null;
        };
        return validator;
    }
    /**
     * Evalúa si la respuesta de la pregunta diez (10) es válida o no.
     *
     * Si el usuario ha indicado algún síntoma de la pregunta cinco (5), esta pregunta es obligatoria.
     * De lo contrario, el control de usuario está deshabilitado.
     *
     * @param formGroup Formulario.
     */
    isQuestionTenRequired(formGroup) {
        const validator = (control) => {
            const questionFive = formGroup.controls.questionFive;
            const questionSix = formGroup.controls.questionSix;
            const questionSeven = formGroup.controls.questionSeven;
            const questionEight = formGroup.controls.questionEight;
            const questionNine = formGroup.controls.questionNine;
            const hasAnyAnswer = questionFive && questionFive.value ||
                questionSix && questionSix.value ||
                questionSeven && questionSeven.value ||
                questionEight && questionEight.value ||
                questionNine && questionNine.value;
            if (hasAnyAnswer) {
                if (!control.value) {
                    return { required: true };
                }
            }
            return null;
        };
        return validator;
    }
    /**
     * Obtiene el valor del control de usuario.
     *
     * @param control Control de usuario.
     */
    getValue(control) {
        const dateHandler = () => {
            if (value === 'No Aplica') {
                return value;
            }
            const date = value.split('-');
            return `${date[2]}-${date[1]}-${date[0]}`;
        };
        const name = Object.keys(this.formGroup.controls).find(c => this.formGroup.controls[c] === control);
        let value = control.value;
        switch (name) {
            case 'questionTwo':
                value = value || 'No Aplica'; // Campo de fecha opcional
                value = dateHandler();
                break;
            case 'questionFive':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionSix':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionSeven':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionEight':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionNine':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionTen':
                value = value || 'No Aplica'; // Campo de fecha opcional
                value = dateHandler();
                break;
            case 'questionTwelve':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionThirdteen':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionFourteen':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionFifteen':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionSixteen':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionSeventeen':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionEighteen':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionNineteen':
                value = value ? 'SI' : 'NO';
                break;
            case 'questionTwentyOne':
                value = value || 'No Aplica'; // Campo de embarazo opcional
                break;
            case 'clearQuestionFive':
                value = value ? 'SI' : 'NO';
                break;
            case 'clearQuestionEight':
                value = value ? 'SI' : 'NO';
                break;
        }
        return value;
    }
};
ChequeosEncuestaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ChequeosEncuestaPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: true },] }]
};
ChequeosEncuestaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chequeos-encuesta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chequeos-encuesta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chequeos-encuesta.page.scss */ "./src/app/pages/chequeos-encuesta/chequeos-encuesta.page.scss")).default]
    })
], ChequeosEncuestaPage);



/***/ })

}]);
//# sourceMappingURL=chequeos-encuesta-chequeos-encuesta-module-es2015.js.map