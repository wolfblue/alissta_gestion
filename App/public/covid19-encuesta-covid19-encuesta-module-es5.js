(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["covid19-encuesta-covid19-encuesta-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-encuesta/covid19-encuesta.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-encuesta/covid19-encuesta.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCovid19EncuestaCovid19EncuestaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Título de la vista -->\n  <app-title-bar [title]=\"'AUTOEVALUACIÓN SÍNTOMAS COVID-19'\" [iconName]=\"'assets/icon/nurse.svg'\"></app-title-bar>\n\n  <p class=\"message\">Por favor, contesta las siguientes preguntas con relación a tu estado de salud el día de hoy</p>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\" *ngIf=\"formGroupReady\">\n\n    <!-- Sección de preguntas -->\n    <ion-list lines=\"none\">\n      <ion-item class=\"mb-5 question-wrapper ion-no-padding\" *ngFor=\"let q of poll.questions; let i = index\">\n        <ion-grid>\n          <ion-row>\n\n            <!-- Número de la pregunta -->\n            <ion-col size=\"2\">\n              <h3 class=\"number\">{{ i + 1 }}</h3>\n            </ion-col>\n\n            <ion-col size=\"10\">\n\n              <!-- Pregunta -->\n              <div class=\"question\">{{ q.description }}</div>\n\n              <!-- Opciones -->\n              <ng-container\n                *ngTemplateOutlet=\"optionsTemplate; context: { options: q.options, name: q.name, formGroup: formGroup }\">\n              </ng-container>\n\n              <div class=\"validation-errors\" *ngIf=\"submitted || formGroup.controls[q.name].dirty\">\n                <ng-container *ngIf=\"formGroup.controls[q.name].errors?.required\">\n                  Este campo es requerido.\n                </ng-container>\n                <ng-container *ngIf=\"formGroup.controls[q.name].errors?.min\">\n                  El valor no puede ser menor que 35.\n                </ng-container>\n                <ng-container *ngIf=\"formGroup.controls[q.name].errors?.max\">\n                  El valor no puede ser mayor que 42.\n                </ng-container>\n              </div>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <!-- Botones de acción -->\n    <div class=\"buttons-wrapper text-center\">\n      <div class=\"text-center w-100\">\n        <ion-button type=\"submit\">Guardar</ion-button>\n      </div>\n    </div>\n\n  </form>\n\n</ion-content>\n\n<!-- Plantilla de opciones -->\n<ng-template #optionsTemplate let-options=\"options\" let-name=\"name\" let-formGroup=\"formGroup\">\n  <ng-container [formGroup]=\"formGroup\">\n\n    <!-- Opciones de selección -->\n    <ion-list class=\"options\" lines=\"none\" *ngIf=\"options\">\n      <ion-radio-group [formControlName]=\"name\" (ngModelChange)=\"onValueChange(name, $event)\">\n        <ion-item class=\"radio\" *ngFor=\"let option of options\">\n          <ion-label>{{ option.label }}</ion-label>\n          <ion-radio [value]=\"option.value\" (click)=\"updateTemperatureValidators(name)\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <!-- Opción para el caso de grados de temperatura, pregunta número tres -->\n    <ion-list class=\"options\" *ngIf=\"!options\">\n      <ion-item class=\"input\">\n        <ion-label>Resultado (°C)</ion-label>\n        <ion-input type=\"number\" [formControlName]=\"name\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n  </ng-container>\n</ng-template>";
      /***/
    },

    /***/
    "./src/app/pages/covid19-encuesta/covid19-encuesta-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/covid19-encuesta/covid19-encuesta-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: Covid19EncuestaPageRoutingModule */

    /***/
    function srcAppPagesCovid19EncuestaCovid19EncuestaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Covid19EncuestaPageRoutingModule", function () {
        return Covid19EncuestaPageRoutingModule;
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


      var _covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./covid19-encuesta.page */
      "./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts");

      var routes = [{
        path: '',
        component: _covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_3__["Covid19EncuestaPage"]
      }];

      var Covid19EncuestaPageRoutingModule = /*#__PURE__*/_createClass(function Covid19EncuestaPageRoutingModule() {
        _classCallCheck(this, Covid19EncuestaPageRoutingModule);
      });

      Covid19EncuestaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Covid19EncuestaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/covid19-encuesta/covid19-encuesta.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/covid19-encuesta/covid19-encuesta.module.ts ***!
      \*******************************************************************/

    /*! exports provided: Covid19EncuestaPageModule */

    /***/
    function srcAppPagesCovid19EncuestaCovid19EncuestaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Covid19EncuestaPageModule", function () {
        return Covid19EncuestaPageModule;
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


      var _covid19_encuesta_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./covid19-encuesta-routing.module */
      "./src/app/pages/covid19-encuesta/covid19-encuesta-routing.module.ts");
      /* harmony import */


      var _covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./covid19-encuesta.page */
      "./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts");

      var Covid19EncuestaPageModule = /*#__PURE__*/_createClass(function Covid19EncuestaPageModule() {
        _classCallCheck(this, Covid19EncuestaPageModule);
      });

      Covid19EncuestaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _covid19_encuesta_routing_module__WEBPACK_IMPORTED_MODULE_3__["Covid19EncuestaPageRoutingModule"]],
        declarations: [_covid19_encuesta_page__WEBPACK_IMPORTED_MODULE_4__["Covid19EncuestaPage"]]
      })], Covid19EncuestaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/covid19-encuesta/covid19-encuesta.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/covid19-encuesta/covid19-encuesta.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCovid19EncuestaCovid19EncuestaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .message {\n  padding: 8px 16px;\n  background-color: #ff7500;\n  color: #ffffff;\n}\nion-content ion-list {\n  padding: 0 5px;\n}\nion-content ion-list.options {\n  padding: 0 !important;\n  margin: 0 !important;\n}\nion-content ion-list.options ion-item {\n  border: 0 !important;\n  padding: 0 !important;\n  background-color: transparent;\n}\nion-content ion-list.options ion-item.radio {\n  min-height: auto;\n}\nion-content ion-list.options ion-item.input {\n  --highlight-background: none;\n}\nion-content ion-list ion-item {\n  border: 2px solid #c0c0c0 !important;\n}\nion-content ion-list ion-item.question-wrapper {\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item.question-wrapper:nth-child(even) {\n  --background: #e3e9ec;\n}\nion-content ion-list ion-item.question-wrapper:nth-child(even) .options ion-item {\n  --background: #e3e9ec;\n}\nion-content ion-list ion-item ion-grid .number {\n  font-size: 2.5rem;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-content ion-list ion-item ion-grid .question {\n  white-space: break-spaces;\n}\nion-content ion-list ion-item ion-grid .validation-errors {\n  color: red;\n}\nion-content ion-list ion-item ion-input {\n  border: 2px solid #c0c0c0 !important;\n  margin-left: 5px;\n  max-width: 50px;\n}\nion-content ion-list ion-item ion-input input {\n  margin: 2px;\n}\nion-content .buttons-wrapper {\n  margin-bottom: 16px;\n}\nion-content .buttons-wrapper button {\n  padding: 25px 35px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY292aWQxOS1lbmN1ZXN0YS9jb3ZpZDE5LWVuY3Vlc3RhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLGNBQUE7QUFESjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQUROO0FBR007RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFEUjtBQUdRO0VBQ0UsZ0JBQUE7QUFEVjtBQUlRO0VBQ0UsNEJBQUE7QUFGVjtBQU9JO0VBQ0Usb0NBQUE7QUFMTjtBQU9NO0VBQ0Usc0JBQUE7QUFMUjtBQU9RO0VBQ0UscUJBQUE7QUFMVjtBQVFZO0VBQ0UscUJBQUE7QUFOZDtBQWFRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUFYVjtBQWNRO0VBQ0UseUJBQUE7QUFaVjtBQWVRO0VBQ0UsVUFBQTtBQWJWO0FBaUJNO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFmUjtBQWlCUTtFQUNFLFdBQUE7QUFmVjtBQXFCRTtFQUNFLG1CQUFBO0FBbkJKO0FBcUJJO0VBQ0UsNkJBQUE7QUFuQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3ZpZDE5LWVuY3Vlc3RhL2NvdmlkMTktZW5jdWVzdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAmIC5tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NTAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgJiBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMCA1cHg7XG5cbiAgICAmLm9wdGlvbnMge1xuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAmLnJhZGlvIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbnB1dCB7XG4gICAgICAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYgaW9uLWl0ZW0ge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2MwYzBjMCAhaW1wb3J0YW50O1xuXG4gICAgICAmLnF1ZXN0aW9uLXdyYXBwZXIge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICNlM2U5ZWM7XG5cbiAgICAgICAgICAmIC5vcHRpb25zIHtcbiAgICAgICAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNlM2U5ZWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgaW9uLWdyaWQge1xuICAgICAgICAmIC5udW1iZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiAucXVlc3Rpb24ge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gICAgICAgIH1cblxuICAgICAgICAmIC52YWxpZGF0aW9uLWVycm9ycyB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjMGMwYzAgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuXG4gICAgICAgICYgaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiAuYnV0dG9ucy13cmFwcGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgcGFkZGluZzogMjVweCAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/covid19-encuesta/covid19-encuesta.page.ts ***!
      \*****************************************************************/

    /*! exports provided: Covid19EncuestaPage */

    /***/
    function srcAppPagesCovid19EncuestaCovid19EncuestaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Covid19EncuestaPage", function () {
        return Covid19EncuestaPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commons/user-feedback */
      "./src/app/commons/user-feedback.ts");
      /* harmony import */


      var src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/entities/autoevaluacion-covid19 */
      "./src/app/entities/autoevaluacion-covid19.ts");
      /* harmony import */


      var src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/autoevaluacion-covid19.service */
      "./src/app/services/autoevaluacion-covid19.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /**
       * Componente para la vista de encuesta de autoevaluación COVID-19.
       */


      var Covid19EncuestaPage = /*#__PURE__*/function () {
        function Covid19EncuestaPage(autoevaluacionCOVID19Service, utils, alertCtrl, router) {
          _classCallCheck(this, Covid19EncuestaPage);

          this.autoevaluacionCOVID19Service = autoevaluacionCOVID19Service;
          this.utils = utils;
          this.alertCtrl = alertCtrl;
          this.router = router;
          /**
           * Opciones de respuesta disponibles para cada pregunta de la encuesta.
           */

          this.QUESTIONS_OPTIONS_MAP = {
            1: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }],
            2: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Tengo Termómetro'
            }],
            4: [{
              label: 'Sin tos seca',
              value: 'Sin tos seca'
            }, {
              label: 'Poca tos',
              value: 'Poca tos'
            }, {
              label: 'Tos persistente',
              value: 'Tos Persistente'
            }],
            5: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }],
            6: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }],
            7: [{
              label: 'Sin dolor',
              value: 'Sin dolor'
            }, {
              label: 'Poco dolor',
              value: 'Poco dolor'
            }, {
              label: 'Fuerte dolor',
              value: 'Fuerte dolor'
            }],
            8: [{
              label: 'Sin dolor',
              value: 'Sin dolor'
            }, {
              label: 'Poco dolor',
              value: 'Poco dolor'
            }, {
              label: 'Fuerte dolor',
              value: 'Fuerte dolor'
            }],
            9: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }],
            10: [{
              label: 'Ninguna molestia',
              value: 'Ninguna Molestia'
            }, {
              label: 'Poca molestia',
              value: 'Poca Molestia'
            }, {
              label: 'Fuerte molestia',
              value: 'Fuerte Molestia'
            }],
            11: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }],
            12: [{
              label: 'Sin dolor',
              value: 'Sin dolor'
            }, {
              label: 'Poco dolor',
              value: 'Poco dolor'
            }, {
              label: 'Fuerte dolor',
              value: 'Fuerte dolor'
            }],
            13: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }],
            14: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }],
            15: [{
              label: 'Sí',
              value: 'SI'
            }, {
              label: 'No',
              value: 'NO'
            }, {
              label: 'No estoy segur@',
              value: 'NO Estoy Seguro'
            }]
          };
        }

        return _createClass(Covid19EncuestaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.poll = this.router.getCurrentNavigation().extras.state.poll;
            this.getQuestions();
          }
          /**
           * Guarda las respuestas de la encuesta y redirige a la vista de resultados.
           */

        }, {
          key: "save",
          value: function save() {
            var _this = this;

            this.submitted = true;

            if (this.formGroup.invalid) {
              this.content.scrollToTop(1000);
              return;
            }

            Object.keys(this.formGroup.controls).forEach(function (k) {
              var control = _this.formGroup.controls[k];

              var question = _this.poll.questions.find(function (q) {
                return q.name === k;
              });

              question.answer = control.value;
            });
            this.router.navigate(['/health-conditions/covid19-results'], {
              state: {
                poll: this.poll
              }
            });
          }
          /**
           * Actualiza los validadores del campo de temperatura.
           *
           * @param fieldName Nombre del campo que hace la llamada.
           */

        }, {
          key: "updateTemperatureValidators",
          value: function updateTemperatureValidators(fieldName) {
            var _this2 = this;

            var secondQuestionName = this.getFieldNameByQuestionID(2);

            if (fieldName !== secondQuestionName) {
              return;
            }

            var thirdQuestionName = this.getFieldNameByQuestionID(3);
            setTimeout(function () {
              return _this2.formGroup.controls[thirdQuestionName].updateValueAndValidity();
            }, 500);
          }
          /**
           * Captura el evento de cambio de valor en alguna de las opciones de selección.
           *
           * @param value Valor.
           */

        }, {
          key: "onValueChange",
          value: function onValueChange(name, value) {
            var secondQuestionName = this.getFieldNameByQuestionID(2);

            if (name !== secondQuestionName) {
              return;
            }

            var action = value === 'SI' ? 'enable' : 'disable';
            var thirdQuestionName = this.getFieldNameByQuestionID(3);
            this.formGroup.controls[thirdQuestionName][action]();
          }
          /**
           * Obtiene las preguntas de la encuesta.
           */

        }, {
          key: "getQuestions",
          value: function getQuestions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utils.presentLoading();

                  case 2:
                    this.autoevaluacionCOVID19Service.getQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                      return _this3.utils.dismissLoading();
                    })).subscribe(function (response) {
                      var body = response;
                      var questions = [];
                      body.forEach(function (q) {
                        q.opciones = _this3.QUESTIONS_OPTIONS_MAP[q.PK_ID_AutoEvaluacionCovidPreguntas];
                        var question = new src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_7__["Question"](q);
                        questions.push(question);
                      });
                      _this3.poll.questions = questions;

                      _this3.initForm();
                    }, function () {
                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_6__["alertCommunicationError"])(_this3.alertCtrl);

                      _this3.router.navigate(['/home']);
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
           * Inicializa el formulario.
           */

        }, {
          key: "initForm",
          value: function initForm() {
            var _this4 = this;

            this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
            this.poll.questions.forEach(function (q) {
              if (q.id === 3) {
                // El tratamiento de la pregunta número tres es ad-hoc y se hace por separado
                return;
              }

              var c = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);

              _this4.formGroup.addControl(q.name, c);
            });
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [this.isTemperatureRequired(this.formGroup), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(35), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(42)]);
            var thirdQuestionName = this.getFieldNameByQuestionID(3);
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

        }, {
          key: "isTemperatureRequired",
          value: function isTemperatureRequired(formGroup) {
            var validator = function validator(control) {
              var secondQuestionName = 'PreguntaDos';
              var secondQuestionValue = 'SI';

              if (formGroup.controls[secondQuestionName].value === secondQuestionValue) {
                if (!control.value) {
                  return {
                    required: true
                  };
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

        }, {
          key: "getFieldNameByQuestionID",
          value: function getFieldNameByQuestionID(id) {
            var question = this.poll.questions.find(function (q) {
              return q.id === id;
            });
            return question ? question.name : undefined;
          }
        }]);
      }();

      Covid19EncuestaPage.ctorParameters = function () {
        return [{
          type: src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_8__["AutoevaluacionCOVID19Service"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      Covid19EncuestaPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], {
            "static": true
          }]
        }]
      };
      Covid19EncuestaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-covid19-encuesta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./covid19-encuesta.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-encuesta/covid19-encuesta.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./covid19-encuesta.page.scss */
        "./src/app/pages/covid19-encuesta/covid19-encuesta.page.scss"))["default"]]
      })], Covid19EncuestaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=covid19-encuesta-covid19-encuesta-module-es5.js.map