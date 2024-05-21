(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chequeos-consentimiento-chequeos-consentimiento-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChequeosConsentimientoChequeosConsentimientoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Título de la vista -->\n  <app-title-bar [title]=\"'ENCUESTA CHEQUEO MÉDICO'\" [iconName]=\"'assets/icon/nurse.svg'\"></app-title-bar>\n\n  <!-- Política de tratamiento de datos -->\n  <div class=\"policy\">\n    <h2 class=\"text-center\">CONSENTIMIENTO INFORMADO Y AUTORIZACIÓN TRATAMIENTO DE DATOS PERSONALES Y SENSIBLES</h2>\n    <p>\n      Para POSITIVA COMPAÑÍA DE SEGUROS S.A. es muy importante la protección y el manejo de los Datos Personales,\n      Sensibles, Comerciales, niñas, niños y adolescentes de nuestros clientes, es por eso que POSITIVA ha diseñado\n      políticas y procedimientos que se encuentran publicados en nuestro sitio web, para su consulta de acuerdo con el\n      marco normativo establecido en la Ley 1581 de 2012: <span class=\"text-underline c-primary\" href=\"#\"\n        (click)=\"openLink('https://www.positiva.gov.co/web/guest/politica-de-tratamiento-de-la-informacion')\">Positiva.gov.co</span>;\n      que junto con la presente autorización nos permiten hacer uso responsable de sus datos conforme a la ley. Lo\n      invitamos a leer cuidadosamente el siguiente texto mediante el cual usted autoriza el tratamiento de sus datos.\n    </p>\n    <p>\n      Toda la información se recoge con fines estrictamente de interés público ante la situación decretada por las\n      Autoridades Públicas, para proteger y salvaguardar un interés esencial para la vida de las personas, en\n      consecuencia, autorizo a la POSITIVA COMPAÑÍA DE SEGUROS S.A y a la Empresa, para el manejo de la información\n      aportada en esta encuesta para desarrollar acciones de promoción y prevención frente al riesgo de contagio por\n      COVID-19 acorde con lo normado por el Ministerio de Salud y las demás autoridades competentes.\n    </p>\n    <p>\n      <strong>(a)</strong> Toda la información se recoge con fines estrictamente de interés público ante la situación\n      decretada por las\n      Autoridades Públicas, para proteger y salvaguardar un interés esencial para la vida de las personas, en\n      consecuencia, autorizo a la POSITIVA COMPAÑÍA DE SEGUROS S.A y a la Empresa, para el manejo de la información\n      aportada en esta encuesta para desarrollar acciones de promoción y prevención frente al riesgo de contagio por\n      COVID-19 acorde con lo normado por el Ministerio de Salud y las demás autoridades competentes.\n      <strong>(b)</strong> De conformidad con lo establecido en la Ley 1581 de 2012 de protección de datos personales y\n      sensibles, se podrá suministrar información a las entidades públicas o administrativas que en\n      el ejercicio de sus funciones legales así lo requieran, o a las personas establecidas en el artículo 13 de la ley.\n      <strong>(c)</strong> Los datos proporcionados por el usuario deben ser veraces, completos, exactos, actualizados,\n      comprobables y comprensibles y en consecuencia el usuario asume toda la responsabilidad sobre la falta de\n      veracidad o exactitud de éstos. <strong>(d)</strong> <strong class=\"text-underline\">Dato Sensible:</strong> estado\n      de salud, valoración preanestésica, exámenes médicos, historia clínica, patologías reconocidas, antecedentes\n      médicos, datos biométricos, relativos a la vida sexual, religión, política, y será tratada de acuerdo a la Ley y\n      el usuario no está obligado a entregar esta información. <strong>(e)</strong> El cuestionario de Tamizaje y\n      Búsqueda Activa COVID-19 es una herramienta utilizada por POSITIVA, para identificación personas enfermas en un\n      grupo de personas sanas, pero en ningún caso reemplaza la atención médica.<strong>(f)</strong> Con el fin de realizar un análisis epidemiológico por zonas geográficas se capturarán los datos de ubicación (latitud y longitud).\n    </p>\n    <p>\n      <strong>CONSENTIMIENTO INFORMADO:</strong> Declaro haber sido plenamente informado sobre el proceso de tamizaje y\n      búsqueda activa COVID-19 y la realización de una <strong>Rápida de Tamizaje para Covid-19</strong>. La metodología\n      consiste en una toma de gota de sangre en pulpejo de dedo, entendiendo que se trata de una prueba de tamizaje y\n      que no corresponde a una prueba Diagnóstica confirmatoria, que debo estar asintomático y que el resultado me será\n      entregado a través de correo electrónico y/o mensajería. La realización se estas pruebas cumple los Lineamientos\n      para el uso de pruebas diagnósticas de SARS-COV-2 (COVID19) en Colombia del Ministerio de salud. Mi participación\n      en esta prueba rápida es estrictamente voluntaria; es decir que yo puedo libremente decidir participar en el\n      proceso o rehusarme a hacerlo, sin que esta decisión represente ningún perjuicio para mi persona. Me han informado\n      que puedo formular las preguntas sobre el proceso, en cualquier momento. En el evento que se requiera podre ser\n      contactado por vía telefónica o correo electrónico.\n    </p>\n    <p>\n      <span class=\"text-underline\">DECLARO QUE HE SIDO INFORMADO SOBRE LOS DERECHOS QUE ME ASISTEN COMO TITULAR O\n        REPRESENTANTE LEGAL:</span> actualizar, conocer, rectificar, revocar, acceder, solicitar prueba de la\n      autorización otorgada, realizar consultas gratuitas de mis Datos Personales y Datos Sensibles, y los demás\n      derechos consagrados en la Política de tratamiento de datos personales de POSITIVA COMPAÑÍA DE SEGUROS S.A., a la\n      dirección: Avenida Carrera 45 No. 94 – 72, Bogota; correo electrónico: <a\n        href=\"mailto:servicioalcliente@positiva.gov.co\">servicioalcliente@positiva.gov.co</a> Teléfono: <a\n        href=\"tel:6502200\">6502200</a> en Bogotá y <a href=\"tel:018000111170\">018000111170</a> para el resto del país.\n      Contacto: Oficial de Habeas Data / Jefe Oficina de Estrategia y Desarrollo.\n    </p>\n    <p>\n      <strong>(1)</strong> La política de protección de datos es exclusiva de Positiva Compañía de Seguros S.A.; para conocer la política de protección de datos de su empresa, contacte a su empleador o contratante.\n    </p>\n  </div>\n\n  <!-- Botones de acción -->\n  <ion-item lines=\"none\">\n    <div class=\"text-center w-100\">\n      <button class=\"primary\" (click)=\"agree()\">Autorizo</button>\n      <button class=\"secondary\" (click)=\"dontAgree()\">No autorizo</button>\n    </div>\n  </ion-item>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/chequeos-consentimiento/chequeos-consentimiento-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ChequeosConsentimientoPageRoutingModule */

    /***/
    function srcAppPagesChequeosConsentimientoChequeosConsentimientoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeosConsentimientoPageRoutingModule", function () {
        return ChequeosConsentimientoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _chequeos_consentimiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chequeos-consentimiento.page */
      "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.ts");

      var routes = [{
        path: '',
        component: _chequeos_consentimiento_page__WEBPACK_IMPORTED_MODULE_3__["ChequeosConsentimientoPage"]
      }];

      var ChequeosConsentimientoPageRoutingModule = /*#__PURE__*/_createClass(function ChequeosConsentimientoPageRoutingModule() {
        _classCallCheck(this, ChequeosConsentimientoPageRoutingModule);
      });

      ChequeosConsentimientoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChequeosConsentimientoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ChequeosConsentimientoPageModule */

    /***/
    function srcAppPagesChequeosConsentimientoChequeosConsentimientoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeosConsentimientoPageModule", function () {
        return ChequeosConsentimientoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");
      /* harmony import */


      var _chequeos_consentimiento_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chequeos-consentimiento-routing.module */
      "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento-routing.module.ts");
      /* harmony import */


      var _chequeos_consentimiento_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chequeos-consentimiento.page */
      "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.ts");

      var ChequeosConsentimientoPageModule = /*#__PURE__*/_createClass(function ChequeosConsentimientoPageModule() {
        _classCallCheck(this, ChequeosConsentimientoPageModule);
      });

      ChequeosConsentimientoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _chequeos_consentimiento_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChequeosConsentimientoPageRoutingModule"]],
        declarations: [_chequeos_consentimiento_page__WEBPACK_IMPORTED_MODULE_4__["ChequeosConsentimientoPage"]]
      })], ChequeosConsentimientoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChequeosConsentimientoChequeosConsentimientoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .policy {\n  margin-top: 50px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-content .policy h2 {\n  margin-bottom: 1em;\n}\nion-content .policy p {\n  margin: initial;\n  font-size: inherit !important;\n  margin-bottom: 1em;\n  text-align: justify;\n}\nion-content ion-item {\n  margin: 25px 0;\n}\nion-content ion-item button {\n  padding: 10px 25px !important;\n  height: auto !important;\n  min-width: auto;\n  background-color: transparent !important;\n  border: 1px solid;\n  line-height: 25px;\n  padding: 5px 30px 0px 5px;\n  text-transform: uppercase;\n  transition: all ease-in-out 0.5s;\n  display: inline-block;\n  font-size: 12px !important;\n}\nion-content ion-item button.primary {\n  margin-right: 15px !important;\n  border-color: #4b9a49;\n  color: #4b9a49 !important;\n}\nion-content ion-item button.secondary {\n  border-color: #ab022b;\n  color: #ab022b !important;\n}\nion-content ion-item button:before {\n  border-top: 15px solid;\n  content: \"\";\n  width: 17px;\n  border-left: 0px solid transparent;\n  border-right: 10px solid transparent;\n  top: 2px;\n  position: relative;\n  transition: all ease-in-out 0.5s;\n  float: left;\n}\nion-content ion-item button .button-inner {\n  display: inline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlcXVlb3MtY29uc2VudGltaWVudG8vY2hlcXVlb3MtY29uc2VudGltaWVudG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLGtCQUFBO0FBQU47QUFHSTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBS0k7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFHQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QUFITjtBQUtNO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFNTTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFKUjtBQU9NO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQ0FBQTtFQUNBLFdBQUE7QUFMUjtBQVFNO0VBQ0UsMEJBQUE7QUFOUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXF1ZW9zLWNvbnNlbnRpbWllbnRvL2NoZXF1ZW9zLWNvbnNlbnRpbWllbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgJiAucG9saWN5IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gICAgJiBoMiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuXG4gICAgJiBwIHtcbiAgICAgIG1hcmdpbjogaW5pdGlhbDtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gIH1cblxuICAmIGlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDI1cHggMDtcblxuICAgICYgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjVweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIHBhZGRpbmc6IDVweCAzMHB4IDBweCA1cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcblxuICAgICAgJi5wcmltYXJ5IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRiOWE0OTtcbiAgICAgICAgY29sb3I6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgJi5zZWNvbmRhcnkge1xuICAgICAgICBib3JkZXItY29sb3I6ICNhYjAyMmI7XG4gICAgICAgIGNvbG9yOiAjYWIwMjJiICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNXM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjVzO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC41cztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgICYgLmJ1dHRvbi1pbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChequeosConsentimientoPage */

    /***/
    function srcAppPagesChequeosConsentimientoChequeosConsentimientoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeosConsentimientoPage", function () {
        return ChequeosConsentimientoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /**
       * Componente de la vista de consentimiento de uso de datos personales para el módulo de
       * encuesta de chequeos médicos.
       */


      var ChequeosConsentimientoPage = /*#__PURE__*/function () {
        function ChequeosConsentimientoPage(iab, router) {
          _classCallCheck(this, ChequeosConsentimientoPage);

          this.iab = iab;
          this.router = router;
        }

        return _createClass(ChequeosConsentimientoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.poll = this.router.getCurrentNavigation().extras.state.poll;

            if (!!this.poll.id) {
              this.agree();
            }
          }
          /**
           * Redirección a la vista de encuesta de chequeo médico.
           */

        }, {
          key: "agree",
          value: function agree() {
            this.poll.userData.agree = true;
            this.router.navigate(['health-conditions/medical-check-poll'], {
              state: {
                poll: this.poll
              }
            });
          }
          /**
           * El usuario no acepta los términos y condiciones para el tratamiendo de datos personales, se
           * redirige a la vista de mensaje de rechazo a la política de tratamiento de datos personales.
           */

        }, {
          key: "dontAgree",
          value: function dontAgree() {
            this.poll.userData.agree = false;
            this.router.navigate(['health-conditions/disagreement'], {
              state: {
                poll: this.poll
              }
            });
          }
          /**
           * Abre un navegador con la dirección _URL_ indicada.
           *
           * @param url Dirección _URL_.
           */

        }, {
          key: "openLink",
          value: function openLink(url) {
            this.iab.create(url, '_system');
          }
        }]);
      }();

      ChequeosConsentimientoPage.ctorParameters = function () {
        return [{
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ChequeosConsentimientoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chequeos-consentimiento',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chequeos-consentimiento.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chequeos-consentimiento.page.scss */
        "./src/app/pages/chequeos-consentimiento/chequeos-consentimiento.page.scss"))["default"]]
      })], ChequeosConsentimientoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=chequeos-consentimiento-chequeos-consentimiento-module-es5.js.map