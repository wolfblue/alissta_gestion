(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["covid19-encuesta-covid19-encuesta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-encuesta/covid19-encuesta.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-encuesta/covid19-encuesta.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Título de la vista -->\n  <app-title-bar [title]=\"'AUTOEVALUACIÓN SÍNTOMAS COVID-19'\" [iconName]=\"'assets/icon/nurse.svg'\"></app-title-bar>\n\n  <p class=\"message\">Por favor, contesta las siguientes preguntas con relación a tu estado de salud el día de hoy</p>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\" *ngIf=\"formGroupReady\">\n\n    <!-- Sección de preguntas -->\n    <ion-list lines=\"none\">\n      <ion-item class=\"mb-5 question-wrapper ion-no-padding\" *ngFor=\"let q of poll.questions; let i = index\">\n        <ion-grid>\n          <ion-row>\n\n            <!-- Número de la pregunta -->\n            <ion-col size=\"2\">\n              <h3 class=\"number\">{{ i + 1 }}</h3>\n            </ion-col>\n\n            <ion-col size=\"10\">\n\n              <!-- Pregunta -->\n              <div class=\"question\">{{ q.description }}</div>\n\n              <!-- Opciones -->\n              <ng-container\n                *ngTemplateOutlet=\"optionsTemplate; context: { options: q.options, name: q.name, formGroup: formGroup }\">\n              </ng-container>\n\n              <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls[q.name].dirty\">\n                <ng-container *ngIf=\"formGroup.controls[q.name].errors?.required\">\n                  Este campo es requerido.\n                </ng-container>\n                <ng-container *ngIf=\"formGroup.controls[q.name].errors?.min\">\n                  El valor no puede ser menor que 35.\n                </ng-container>\n                <ng-container *ngIf=\"formGroup.controls[q.name].errors?.max\">\n                  El valor no puede ser mayor que 42.\n                </ng-container>\n              </div>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <!-- Botones de acción -->\n    <div class=\"buttons-wrapper text-center\">\n      <div class=\"text-center w-100\">\n        <ion-button type=\"submit\">Guardar</ion-button>\n      </div>\n    </div>\n\n  </form>\n\n</ion-content>\n\n<!-- Plantilla de opciones -->\n<ng-template #optionsTemplate let-options=\"options\" let-name=\"name\" let-formGroup=\"formGroup\">\n  <ng-container [formGroup]=\"formGroup\">\n\n    <!-- Opciones de selección -->\n    <ion-list class=\"options\" lines=\"none\" *ngIf=\"options\">\n      <ion-radio-group [formControlName]=\"name\" (ngModelChange)=\"onValueChange(name, $event)\">\n        <ion-item class=\"radio\" *ngFor=\"let option of options\">\n          <ion-label>{{ option.label }}</ion-label>\n          <ion-radio [value]=\"option.value\" (click)=\"updateTemperatureValidators(name)\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <!-- Opción para el caso de grados de temperatura, pregunta número tres -->\n    <ion-list class=\"options\" *ngIf=\"!options\">\n      <ion-item class=\"input\">\n        <ion-label>Resultado (°C)</ion-label>\n        <ion-input type=\"number\" [formControlName]=\"name\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n  </ng-container>\n</ng-template>");

/***/ }),

/***/ "./src/app/pages/covid19-encuesta/covid19-encuesta-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/covid19-encuesta/covid19-encuesta-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: Covid19EncuestaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19EncuestaPageRoutingModule", function() { return Covid19EncuestaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./covid19-encuesta.page */ "./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts");




const routes = [
    {
        path: '',
        component: _covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_3__["Covid19EncuestaPage"]
    }
];
let Covid19EncuestaPageRoutingModule = class Covid19EncuestaPageRoutingModule {
};
Covid19EncuestaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Covid19EncuestaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/covid19-encuesta/covid19-encuesta.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/covid19-encuesta/covid19-encuesta.module.ts ***!
  \*******************************************************************/
/*! exports provided: Covid19EncuestaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19EncuestaPageModule", function() { return Covid19EncuestaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _covid19_encuesta_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./covid19-encuesta-routing.module */ "./src/app/pages/covid19-encuesta/covid19-encuesta-routing.module.ts");
/* harmony import */ var _covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./covid19-encuesta.page */ "./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts");





let Covid19EncuestaPageModule = class Covid19EncuestaPageModule {
};
Covid19EncuestaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _covid19_encuesta_routing_module__WEBPACK_IMPORTED_MODULE_3__["Covid19EncuestaPageRoutingModule"]
        ],
        declarations: [_covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_4__["Covid19EncuestaPage"]]
    })
], Covid19EncuestaPageModule);



/***/ }),

/***/ "./src/app/pages/covid19-encuesta/covid19-encuesta.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/covid19-encuesta/covid19-encuesta.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .message {\n  padding: 8px 16px;\n  background-color: #ff7500;\n  color: #ffffff;\n}\nion-content ion-list {\n  padding: 0 5px;\n}\nion-content ion-list.options {\n  padding: 0 !important;\n  margin: 0 !important;\n}\nion-content ion-list.options ion-item {\n  border: 0 !important;\n  padding: 0 !important;\n  background-color: transparent;\n}\nion-content ion-list.options ion-item.radio {\n  min-height: auto;\n}\nion-content ion-list.options ion-item.input {\n  --highlight-background: none;\n}\nion-content ion-list ion-item {\n  border: 2px solid #c0c0c0 !important;\n}\nion-content ion-list ion-item.question-wrapper {\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item.question-wrapper:nth-child(even) {\n  --background: #e3e9ec;\n}\nion-content ion-list ion-item.question-wrapper:nth-child(even) .options ion-item {\n  --background: #e3e9ec;\n}\nion-content ion-list ion-item ion-grid .number {\n  font-size: 2.5rem;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-content ion-list ion-item ion-grid .question {\n  white-space: break-spaces;\n}\nion-content ion-list ion-item ion-grid .validation-errors {\n  color: red;\n}\nion-content ion-list ion-item ion-input {\n  border: 2px solid #c0c0c0 !important;\n  margin-left: 5px;\n  max-width: 50px;\n}\nion-content ion-list ion-item ion-input input {\n  margin: 2px;\n}\nion-content .buttons-wrapper {\n  margin-bottom: 16px;\n}\nion-content .buttons-wrapper button {\n  padding: 25px 35px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY292aWQxOS1lbmN1ZXN0YS9jb3ZpZDE5LWVuY3Vlc3RhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQUROO0FBR007RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFEUjtBQUdRO0VBQ0UsZ0JBQUE7QUFEVjtBQUlRO0VBQ0UsNEJBQUE7QUFGVjtBQU9JO0VBQ0Usb0NBQUE7QUFMTjtBQU9NO0VBQ0Usc0JBQUE7QUFMUjtBQU9RO0VBQ0UscUJBQUE7QUFMVjtBQVFZO0VBQ0UscUJBQUE7QUFOZDtBQWFRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUFYVjtBQWNRO0VBQ0UseUJBQUE7QUFaVjtBQWVRO0VBQ0UsVUFBQTtBQWJWO0FBaUJNO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFmUjtBQWlCUTtFQUNFLFdBQUE7QUFmVjtBQXFCRTtFQUNFLG1CQUFBO0FBbkJKO0FBcUJJO0VBQ0UsNkJBQUE7QUFuQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3ZpZDE5LWVuY3Vlc3RhL2NvdmlkMTktZW5jdWVzdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAmIC5tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NTAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgJiBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMCA1cHg7XG5cbiAgICAmLm9wdGlvbnMge1xuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAmLnJhZGlvIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbnB1dCB7XG4gICAgICAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYgaW9uLWl0ZW0ge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2MwYzBjMCAhaW1wb3J0YW50O1xuXG4gICAgICAmLnF1ZXN0aW9uLXdyYXBwZXIge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICNlM2U5ZWM7XG5cbiAgICAgICAgICAmIC5vcHRpb25zIHtcbiAgICAgICAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNlM2U5ZWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgaW9uLWdyaWQge1xuICAgICAgICAmIC5udW1iZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiAucXVlc3Rpb24ge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gICAgICAgIH1cblxuICAgICAgICAmIC52YWxpZGF0aW9uLWVycm9ycyB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjMGMwYzAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuXG4gICAgICAgICYgaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiAuYnV0dG9ucy13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgcGFkZGluZzogMjVweCAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts ***!
  \*****************************************************************/
/*! exports provided: Covid19EncuestaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Covid19EncuestaPage", function() { return Covid19EncuestaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/commons/user-feedback */ "./src/app/commons/user-feedback.ts");
/* harmony import */ var src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/entities/autoevaluacion-covid19 */ "./src/app/entities/autoevaluacion-covid19.ts");
/* harmony import */ var src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/autoevaluacion-covid19.service */ "./src/app/services/autoevaluacion-covid19.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");










/**
 * Componente para la vista de encuesta de autoevaluación COVID-19.
 */
let Covid19EncuestaPage = class Covid19EncuestaPage {
    constructor(autoevaluacionCOVID19Service, utils, alertCtrl, router) {
        this.autoevaluacionCOVID19Service = autoevaluacionCOVID19Service;
        this.utils = utils;
        this.alertCtrl = alertCtrl;
        this.router = router;
        /**
         * Opciones de respuesta disponibles para cada pregunta de la encuesta.
         */
        this.QUESTIONS_OPTIONS_MAP = {
            1: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ],
            2: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Tengo Termómetro' }
            ],
            4: [
                { label: 'Sin tos seca', value: 'Sin tos seca' },
                { label: 'Poca tos', value: 'Poca tos' },
                { label: 'Tos persistente', value: 'Tos Persistente' }
            ],
            5: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ],
            6: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ],
            7: [
                { label: 'Sin dolor', value: 'Sin dolor' },
                { label: 'Poco dolor', value: 'Poco dolor' },
                { label: 'Fuerte dolor', value: 'Fuerte dolor' }
            ],
            8: [
                { label: 'Sin dolor', value: 'Sin dolor' },
                { label: 'Poco dolor', value: 'Poco dolor' },
                { label: 'Fuerte dolor', value: 'Fuerte dolor' }
            ],
            9: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ],
            10: [
                { label: 'Ninguna molestia', value: 'Ninguna Molestia' },
                { label: 'Poca molestia', value: 'Poca Molestia' },
                { label: 'Fuerte molestia', value: 'Fuerte Molestia' }
            ],
            11: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ],
            12: [
                { label: 'Sin dolor', value: 'Sin dolor' },
                { label: 'Poco dolor', value: 'Poco dolor' },
                { label: 'Fuerte dolor', value: 'Fuerte dolor' }
            ],
            13: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ],
            14: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ],
            15: [
                { label: 'Sí', value: 'SI' },
                { label: 'No', value: 'NO' },
                { label: 'No estoy segur@', value: 'NO Estoy Seguro' }
            ]
        };
    }
    ngOnInit() {
        this.poll = this.router.getCurrentNavigation().extras.state.poll;
        this.getQuestions();
    }
    /**
     * Guarda las respuestas de la encuesta y redirige a la vista de resultados.
     */
    save() {
        this.submitted = true;
        if (this.formGroup.invalid) {
            this.content.scrollToTop(1000);
            return;
        }
        Object.keys(this.formGroup.controls).forEach(k => {
            const control = this.formGroup.controls[k];
            const question = this.poll.questions.find(q => q.name === k);
            question.answer = control.value;
        });
        this.router.navigate(['/health-conditions/covid19-results'], { state: { poll: this.poll } });
    }
    /**
     * Actualiza los validadores del campo de temperatura.
     *
     * @param fieldName Nombre del campo que hace la llamada.
     */
    updateTemperatureValidators(fieldName) {
        const secondQuestionName = this.getFieldNameByQuestionID(2);
        if (fieldName !== secondQuestionName) {
            return;
        }
        const thirdQuestionName = this.getFieldNameByQuestionID(3);
        setTimeout(() => this.formGroup.controls[thirdQuestionName].updateValueAndValidity(), 500);
    }
    /**
     * Captura el evento de cambio de valor en alguna de las opciones de selección.
     *
     * @param value Valor.
     */
    onValueChange(name, value) {
        const secondQuestionName = this.getFieldNameByQuestionID(2);
        if (name !== secondQuestionName) {
            return;
        }
        const action = value === 'SI' ? 'enable' : 'disable';
        const thirdQuestionName = this.getFieldNameByQuestionID(3);
        this.formGroup.controls[thirdQuestionName][action]();
    }
    /**
     * Obtiene las preguntas de la encuesta.
     */
    getQuestions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.utils.presentLoading();
            this.autoevaluacionCOVID19Service.getQuestions()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.utils.dismissLoading()))
                .subscribe(response => {
                const body = response;
                const questions = [];
                body.forEach((q) => {
                    q.opciones = this.QUESTIONS_OPTIONS_MAP[q.PK_ID_AutoEvaluacionCovidPreguntas];
                    const question = new src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_7__["Question"](q);
                    questions.push(question);
                });
                this.poll.questions = questions;
                this.initForm();
            }, () => {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__["alertCommunicationError"])(this.alertCtrl);
                this.router.navigate(['/home']);
            });
        });
    }
    /**
     * Inicializa el formulario.
     */
    initForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.poll.questions.forEach(q => {
            if (q.id === 3) {
                // El tratamiento de la pregunta número tres es ad-hoc y se hace por separado
                return;
            }
            const c = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            this.formGroup.addControl(q.name, c);
        });
        const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            this.isTemperatureRequired(this.formGroup),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(35),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(42)
        ]);
        const thirdQuestionName = this.getFieldNameByQuestionID(3);
        this.formGroup.addControl(thirdQuestionName, control);
        this.formGroupReady = true;
    }
    /**
     * Evalúa si la respuesta de temperatura es válida o no.
     *
     * Si el usuario ha indicado que se ha medido la temperatura con un termómetro, el campo para indicar
     * los grados de temperatura es requerido. En caso contrario, está deshabilitado.
     *
     * @param formGroup Formulario.
     */
    isTemperatureRequired(formGroup) {
        const validator = (control) => {
            const secondQuestionName = 'PreguntaDos';
            const secondQuestionValue = 'SI';
            if (formGroup.controls[secondQuestionName].value === secondQuestionValue) {
                if (!control.value) {
                    return { required: true };
                }
            }
            return null;
        };
        return validator;
    }
    /**
     * Obtiene el nombre del campo de la pregunta definida por el identificador proporcionado.
     *
     * @param id Identificador de la pregunta.
     */
    getFieldNameByQuestionID(id) {
        const question = this.poll.questions.find(q => q.id === id);
        return question ? question.name : undefined;
    }
};
Covid19EncuestaPage.ctorParameters = () => [
    { type: src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_8__["AutoevaluacionCOVID19Service"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Covid19EncuestaPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: true },] }]
};
Covid19EncuestaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-covid19-encuesta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./covid19-encuesta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-encuesta/covid19-encuesta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./covid19-encuesta.page.scss */ "./src/app/pages/covid19-encuesta/covid19-encuesta.page.scss")).default]
    })
], Covid19EncuestaPage);



/***/ })

}]);
//# sourceMappingURL=covid19-encuesta-covid19-encuesta-module-es2015.js.map