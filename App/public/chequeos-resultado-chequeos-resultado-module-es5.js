(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chequeos-resultado-chequeos-resultado-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-resultado/chequeos-resultado.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-resultado/chequeos-resultado.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChequeosResultadoChequeosResultadoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n\n  <div class=\"clearfix logo-wrapper\">\n\n    <!-- Logo de Positiva -->\n    <ion-img class=\"logo place-left\" [src]=\"'assets/img/positiva-compania-de-seguros.png'\"></ion-img>\n\n    <!-- Logo de Alissta -->\n    <ion-img class=\"logo place-right\" [src]=\"'assets/img/alissta_logo.svg'\"></ion-img>\n\n  </div>\n\n  <ion-list lines=\"none\" *ngIf=\"showResult\">\n\n    <!-- Nombre de usuario -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Nombre Usuario</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.userData.firstName + ' ' + poll.userData.middleName + ' ' + poll.userData.surname + ' ' + poll.userData.secondSurname }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Identificación de usuario -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Identificación de Usuario</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.userData.idType + ' ' + poll.userData.idNumber }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Razón social de la empresa o contratante -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Razón Social Empresa</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.companyData.businessName }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Identificación de la empresa o contratante -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Identificación Empresa</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.companyData.idType + ' ' + poll.companyData.idNumber }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Fecha de aplicación del chequeo médico -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Fecha encuesta chequeo médico</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.date | date: 'dd-MM-yyyy hh:mm a' }}\n      </ion-label>\n    </ion-item>\n\n    <!-- Código de la aplicación del chequeo médico -->\n    <ion-item>\n      <ion-label class=\"text-bold\" position=\"stacked\">Código ID</ion-label>\n      <ion-label position=\"stacked\">\n        {{ poll.id }}\n      </ion-label>\n    </ion-item>\n\n    <div class=\"qr-wrapper\">\n      <qrcode [qrdata]=\"getQRData()\"></qrcode>\n    </div>\n\n  </ion-list>\n\n  <div>\n    <ion-card>\n      <ion-card-header class=\"text-center\">\n        Referencias\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"justificar\">\n          Enlaces de interés y referencias sobre recomendaciones para la prevención COVID-19\n        </p>\n        <ul class=\"unstyled-list\">\n          <li><a href=\"https://covid19.minsalud.gov.co/\">Ministerio de Salud y Protección Social</a></li>\n          <li><a href=\"https://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx\">Instituto Nacional de Salud</a></li>\n          <li><a href=\"https://www.paho.org/col/index.php?option=com_docman&view=download&category_slug=publicaciones-ops-oms-colombia&alias=856-mopece4&Itemid=688\">Organización Panamericana de la Salud / Organización Mundial de la Salud</a></li>\n        </ul>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Botones de acción -->\n  <div class=\"text-center\">\n    <ion-button color=\"primary\" (click)=\"goToHome()\">Continuar</ion-button>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/chequeos-resultado/chequeos-resultado-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/chequeos-resultado/chequeos-resultado-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChequeosResultadoPageRoutingModule */

    /***/
    function srcAppPagesChequeosResultadoChequeosResultadoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeosResultadoPageRoutingModule", function () {
        return ChequeosResultadoPageRoutingModule;
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


      var _chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chequeos-resultado.page */
      "./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts");

      var routes = [{
        path: '',
        component: _chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_3__["ChequeosResultadoPage"]
      }];

      var ChequeosResultadoPageRoutingModule = /*#__PURE__*/_createClass(function ChequeosResultadoPageRoutingModule() {
        _classCallCheck(this, ChequeosResultadoPageRoutingModule);
      });

      ChequeosResultadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChequeosResultadoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/chequeos-resultado/chequeos-resultado.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/chequeos-resultado/chequeos-resultado.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ChequeosResultadoPageModule */

    /***/
    function srcAppPagesChequeosResultadoChequeosResultadoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeosResultadoPageModule", function () {
        return ChequeosResultadoPageModule;
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


      var _chequeos_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chequeos-resultado-routing.module */
      "./src/app/pages/chequeos-resultado/chequeos-resultado-routing.module.ts");
      /* harmony import */


      var _chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chequeos-resultado.page */
      "./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts");

      var ChequeosResultadoPageModule = /*#__PURE__*/_createClass(function ChequeosResultadoPageModule() {
        _classCallCheck(this, ChequeosResultadoPageModule);
      });

      ChequeosResultadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _chequeos_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChequeosResultadoPageRoutingModule"]],
        declarations: [_chequeos_resultado_page__WEBPACK_IMPORTED_MODULE_4__["ChequeosResultadoPage"]]
      })], ChequeosResultadoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/chequeos-resultado/chequeos-resultado.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/chequeos-resultado/chequeos-resultado.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChequeosResultadoChequeosResultadoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  background-color: #eeeeee !important;\n  --padding-top: calc(var(--ion-padding, 16px) + env(safe-area-inset-top));\n}\nion-content .logo-wrapper {\n  margin-top: 25px;\n}\nion-content .logo-wrapper .logo {\n  width: 150px;\n  height: 50px;\n}\nion-content ion-list ion-item {\n  background-color: transparent !important;\n}\nion-content ion-list ion-item ion-label {\n  font-size: 1.2rem !important;\n}\nion-content ion-list .qr-wrapper {\n  margin-top: 25px;\n}\nion-content ion-list .qr-wrapper qrcode {\n  display: block;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-content ion-card {\n  margin: 20px 0 !important;\n  width: 100% !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\nion-content ion-card-header {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content ion-card-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content .justificar {\n  text-align: justify;\n}\nion-content .unstyled-list {\n  list-style: none;\n  padding-left: 0px;\n}\nion-content .unstyled-list li {\n  margin-bottom: 10px;\n}\nion-content button {\n  padding: 25px 35px !important;\n}\nion-content .green {\n  background-color: #00b050;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlcXVlb3MtcmVzdWx0YWRvL2NoZXF1ZW9zLXJlc3VsdGFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHdFQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ047QUFJSTtFQUNFLHdDQUFBO0FBRk47QUFJTTtFQUNFLDRCQUFBO0FBRlI7QUFNSTtFQUNFLGdCQUFBO0FBSk47QUFNTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUpSO0FBU0U7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFHQSwyQkFBQTtBQVBKO0FBVUU7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBUko7QUFXRTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFUSjtBQVlFO0VBQ0UsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhKO0FBWUk7RUFDRSxtQkFBQTtBQVZOO0FBY0U7RUFDRSw2QkFBQTtBQVpKO0FBZUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFiSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZXF1ZW9zLXJlc3VsdGFkby9jaGVxdWVvcy1yZXN1bHRhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcblxuICAmIC5sb2dvLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAmIC5sb2dvIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gIH1cblxuICAmIGlvbi1saXN0IHtcbiAgICAmIGlvbi1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICYgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIC5xci13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAgICYgcXJjb2RlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMjBweCAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gICYgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJiBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJiAuanVzdGlmaWNhciB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gICYgLnVuc3R5bGVkLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgJiBsaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gICYgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAyNXB4IDM1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gICYgLmdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwO1xuICAgIGNvbG9yOiAjZWVlZWVlO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/chequeos-resultado/chequeos-resultado.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ChequeosResultadoPage */

    /***/
    function srcAppPagesChequeosResultadoChequeosResultadoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeosResultadoPage", function () {
        return ChequeosResultadoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commons/user-feedback */
      "./src/app/commons/user-feedback.ts");
      /* harmony import */


      var src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/chequeo-covid19.service */
      "./src/app/services/chequeo-covid19.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /* harmony import */


      var src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/entities/condiciones-salud */
      "./src/app/entities/condiciones-salud.ts");
      /**
       * Componente de la vista de resultado para el módulo de encuesta de chequeos médicos.
       */


      var ChequeosResultadoPage = /*#__PURE__*/function () {
        function ChequeosResultadoPage(utils, geolocation, nativeGeocoder, provider, alertCtrl, datePipe, router) {
          _classCallCheck(this, ChequeosResultadoPage);

          this.utils = utils;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.provider = provider;
          this.alertCtrl = alertCtrl;
          this.datePipe = datePipe;
          this.router = router;
        }

        return _createClass(ChequeosResultadoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.poll = this.router.getCurrentNavigation().extras.state.poll;

            if (!!this.poll.id) {
              this.showResult = true;
              return;
            }

            this.getIPAddress();
          }
          /**
           * Redirige a la vista de inicio de la aplicación.
           */

        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/home']);
          }
          /**
           * Obtiene los datos para construir el código _QR_.
           */

        }, {
          key: "getQRData",
          value: function getQRData() {
            var userData = this.poll.userData;
            var companyData = this.poll.companyData;
            var name = "".concat(userData.firstName, " ").concat(userData.middleName, " ").concat(userData.surname, " ").concat(userData.secondSurname);
            var id = "".concat(userData.idType, " ").concat(userData.idNumber);
            var businessName = companyData.businessName;
            var companyID = "".concat(companyData.idType, " ").concat(companyData.idNumber);
            var applicationDate = this.datePipe.transform(this.poll.date, 'dd-MM-yyyy hh:mm a');
            var applicationCode = "".concat(this.poll.id);
            return "".concat(name, ";").concat(id, ";").concat(businessName, ";").concat(companyID, ";").concat(applicationDate, ";").concat(applicationCode);
          }
          /**
           * Obtiene la dirección _IP_ pública desde la cual se realizan las peticiones.
           */

        }, {
          key: "getIPAddress",
          value: function getIPAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utils.presentLoading();

                  case 2:
                    this.utils.getIPAddress().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                      return _this.utils.dismissLoading();
                    })).subscribe(function (r) {
                      var body = r;
                      var ip = body.ip;
                      _this.poll.userData.ip = ip;

                      _this.getCurrentPosition();
                    }, function () {
                      return _this.getCurrentPosition();
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
           * Obtiene las coordenadas de ubicación física del dispositivo.
           */

        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var onFinally;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    onFinally = function onFinally(latitude, longitude) {
                      _this2.utils.dismissLoading();

                      var geolocation = new src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]();
                      geolocation.latitude = latitude;
                      geolocation.longitude = longitude;
                      _this2.poll.geolocation = geolocation;

                      _this2.getAddress();
                    };

                    _context2.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    this.geolocation.getCurrentPosition().then(function (r) {
                      return onFinally("".concat(r.coords.latitude), "".concat(r.coords.longitude));
                    })["catch"](function () {
                      return onFinally();
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
          /**
           * Obtiene la dirección descriptiva a partir de las coordenadas obtenidas del dispositivo.
           *
           * @param poll Encuesta.
           */

        }, {
          key: "getAddress",
          value: function getAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this3 = this;

              var onFinally, latitude, longitude;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    onFinally = function onFinally(address) {
                      _this3.utils.dismissLoading();

                      _this3.poll.geolocation.address = address;

                      _this3.sendPoll();
                    };

                    latitude = this.poll.geolocation.latitude;
                    longitude = this.poll.geolocation.longitude;

                    if (!(!latitude || !longitude)) {
                      _context3.next = 5;
                      break;
                    }

                    return _context3.abrupt("return", this.sendPoll());

                  case 5:
                    _context3.next = 7;
                    return this.utils.presentLoading();

                  case 7:
                    this.nativeGeocoder.reverseGeocode(+latitude, +longitude).then(function (r) {
                      // Calle o carrera
                      var address = !!r[0].thoroughfare ? r[0].thoroughfare : ''; // Número

                      address = !!r[0].subThoroughfare ? address !== '' ? "".concat(address, " #").concat(r[0].subThoroughfare) : "#".concat(r[0].subThoroughfare) : address; // Ciudad

                      address = !!r[0].administrativeArea ? address !== '' ? "".concat(address, ", ").concat(r[0].subAdministrativeArea) : "".concat(r[0].subAdministrativeArea) : address; // Departamento

                      address = !!r[0].administrativeArea ? address !== '' ? "".concat(address, ", ").concat(r[0].administrativeArea) : "".concat(r[0].administrativeArea) : address;
                      onFinally(address);
                    })["catch"](function () {
                      return onFinally();
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
          /**
           * Envía la encuesta para su registro.
           *
           * @param poll Encuesta.
           */

        }, {
          key: "sendPoll",
          value: function sendPoll() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this4 = this;

              var body;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    body = this.poll.deserialize();
                    _context4.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    this.provider.submitPoll(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                      return _this4.utils.dismissLoading();
                    })).subscribe(function (r) {
                      body = r;
                      _this4.poll.date = body.FechaAplicacion;
                      _this4.poll.id = body.CodigoAPP;
                      _this4.showResult = true;
                    }, function () {
                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_8__["alertCommunicationError"])(_this4.alertCtrl);

                      _this4.router.navigate(['/home']);
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }]);
      }();

      ChequeosResultadoPage.ctorParameters = function () {
        return [{
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
        }, {
          type: src_app_services_chequeo_covid19_service__WEBPACK_IMPORTED_MODULE_9__["ChequeosCOVID19Service"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ChequeosResultadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chequeos-resultado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chequeos-resultado.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chequeos-resultado/chequeos-resultado.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chequeos-resultado.page.scss */
        "./src/app/pages/chequeos-resultado/chequeos-resultado.page.scss"))["default"]]
      })], ChequeosResultadoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=chequeos-resultado-chequeos-resultado-module-es5.js.map