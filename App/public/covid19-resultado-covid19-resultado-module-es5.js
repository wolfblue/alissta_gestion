(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["covid19-resultado-covid19-resultado-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-resultado/covid19-resultado.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-resultado/covid19-resultado.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCovid19ResultadoCovid19ResultadoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n\n  <!-- Logo de Alissta -->\n  <div class=\"clearfix\">\n    <ion-img class=\"logo place-right\" [src]=\"'assets/img/alissta_logo.svg'\"></ion-img>\n  </div>\n\n  <div class=\"result\" *ngIf=\"showResult\">\n    <p class=\"text-center\">¡Reporte de autoevaluación exitoso!</p>\n    <p>Los síntomas informados a tu empleador o contratante se guardaron correctamente.</p>\n    <p class=\"suggestion\" *ngIf=\"showSuggestion\">Conforme a los resultados de tu\n      AUTOEVALUACIÓN, quédate en casa y contacta a tu empleador o contratante.\n    </p>\n    <p class=\"text-center\">{{ pollDate }}</p>\n  </div>\n\n  <div class=\"error\" *ngIf=\"showError\">\n    <p class=\"text-center\">Servicio temporalmente no disponible. Intente más tarde.</p>\n  </div>\n\n  <div>\n    <ion-card>\n      <ion-card-header class=\"text-center\">\n        Referencias\n      </ion-card-header>\n      <ion-card-content>\n        <p class=\"justificar\">\n          Enlaces de interés y referencias sobre recomendaciones para la prevención COVID-19\n        </p>\n        <ul class=\"unstyled-list\">\n          <li><a href=\"https://covid19.minsalud.gov.co/\">Ministerio de Salud y Protección Social</a></li>\n          <li><a href=\"https://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx\">Instituto Nacional de Salud</a></li>\n          <li><a href=\"https://www.paho.org/col/index.php?option=com_docman&view=download&category_slug=publicaciones-ops-oms-colombia&alias=856-mopece4&Itemid=688\">Organización Panamericana de la Salud / Organización Mundial de la Salud</a></li>\n        </ul>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Botones de acción -->\n  <div class=\"text-center\">\n    <ion-button color=\"primary\" (click)=\"goToHome()\">Finalizar</ion-button>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/covid19-resultado/covid19-resultado-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/covid19-resultado/covid19-resultado-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: Covid19ResultadoPageRoutingModule */

    /***/
    function srcAppPagesCovid19ResultadoCovid19ResultadoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Covid19ResultadoPageRoutingModule", function () {
        return Covid19ResultadoPageRoutingModule;
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


      var _covid19_resultado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./covid19-resultado.page */
      "./src/app/pages/covid19-resultado/covid19-resultado.page.ts");

      var routes = [{
        path: '',
        component: _covid19_resultado_page__WEBPACK_IMPORTED_MODULE_3__["Covid19ResultadoPage"]
      }];

      var Covid19ResultadoPageRoutingModule = /*#__PURE__*/_createClass(function Covid19ResultadoPageRoutingModule() {
        _classCallCheck(this, Covid19ResultadoPageRoutingModule);
      });

      Covid19ResultadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Covid19ResultadoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/covid19-resultado/covid19-resultado.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/covid19-resultado/covid19-resultado.module.ts ***!
      \*********************************************************************/

    /*! exports provided: Covid19ResultadoPageModule */

    /***/
    function srcAppPagesCovid19ResultadoCovid19ResultadoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Covid19ResultadoPageModule", function () {
        return Covid19ResultadoPageModule;
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


      var _covid19_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./covid19-resultado-routing.module */
      "./src/app/pages/covid19-resultado/covid19-resultado-routing.module.ts");
      /* harmony import */


      var _covid19_resultado_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./covid19-resultado.page */
      "./src/app/pages/covid19-resultado/covid19-resultado.page.ts");

      var Covid19ResultadoPageModule = /*#__PURE__*/_createClass(function Covid19ResultadoPageModule() {
        _classCallCheck(this, Covid19ResultadoPageModule);
      });

      Covid19ResultadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _covid19_resultado_routing_module__WEBPACK_IMPORTED_MODULE_3__["Covid19ResultadoPageRoutingModule"]],
        declarations: [_covid19_resultado_page__WEBPACK_IMPORTED_MODULE_4__["Covid19ResultadoPage"]]
      })], Covid19ResultadoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/covid19-resultado/covid19-resultado.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/covid19-resultado/covid19-resultado.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCovid19ResultadoCovid19ResultadoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  background-color: #eeeeee !important;\n  --padding-top: calc(var(--ion-padding, 16px) + env(safe-area-inset-top));\n}\nion-content .logo {\n  width: 200px;\n  height: 80px;\n}\nion-content .result, ion-content .error {\n  margin-top: 50px;\n}\nion-content .result p, ion-content .error p {\n  margin: initial;\n  font-size: inherit !important;\n  margin-bottom: 1em;\n}\nion-content .result p.suggestion, ion-content .error p.suggestion {\n  color: #ff7500;\n}\nion-content .result p:not(.text-center), ion-content .error p:not(.text-center) {\n  text-align: justify;\n}\nion-content .error {\n  color: red;\n}\nion-content ion-card {\n  margin: 20px 0 !important;\n  width: 100% !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\nion-content ion-card-header {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content ion-card-content {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\nion-content .justificar {\n  text-align: justify;\n}\nion-content .unstyled-list {\n  list-style: none;\n  padding-left: 0px;\n}\nion-content .unstyled-list li {\n  margin-bottom: 10px;\n}\nion-content button {\n  padding: 25px 35px !important;\n}\nion-content .green {\n  background-color: #00b050;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY292aWQxOS1yZXN1bHRhZG8vY292aWQxOS1yZXN1bHRhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx3RUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFFRSxnQkFBQTtBQURKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUROO0FBR007RUFDRSxjQUFBO0FBRFI7QUFJTTtFQUNFLG1CQUFBO0FBRlI7QUFPRTtFQUNFLFVBQUE7QUFMSjtBQVFFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBR0EsMkJBQUE7QUFOSjtBQVNFO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQVBKO0FBVUU7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBUko7QUFXRTtFQUNFLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVdJO0VBQ0UsbUJBQUE7QUFUTjtBQWFFO0VBQ0UsNkJBQUE7QUFYSjtBQWNFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3ZpZDE5LXJlc3VsdGFkby9jb3ZpZDE5LXJlc3VsdGFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pb24tcGFkZGluZywgMTZweCkgKyBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xuXG4gICYgLmxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICAmIC5yZXN1bHQsXG4gICYgLmVycm9yIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgJiBwIHtcbiAgICAgIG1hcmdpbjogaW5pdGlhbDtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuXG4gICAgICAmLnN1Z2dlc3Rpb24ge1xuICAgICAgICBjb2xvcjogI2ZmNzUwMDtcbiAgICAgIH1cblxuICAgICAgJjpub3QoLnRleHQtY2VudGVyKSB7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAmIGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDIwcHggMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gICYgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gICYgLmp1c3RpZmljYXIge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cblxuICAmIC51bnN0eWxlZC1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICYgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAmIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMjVweCAzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmIC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcbiAgICBjb2xvcjogI2VlZWVlZTtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/covid19-resultado/covid19-resultado.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/covid19-resultado/covid19-resultado.page.ts ***!
      \*******************************************************************/

    /*! exports provided: Covid19ResultadoPage */

    /***/
    function srcAppPagesCovid19ResultadoCovid19ResultadoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Covid19ResultadoPage", function () {
        return Covid19ResultadoPage;
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commons/user-feedback */
      "./src/app/commons/user-feedback.ts");
      /* harmony import */


      var src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/entities/autoevaluacion-covid19 */
      "./src/app/entities/autoevaluacion-covid19.ts");
      /* harmony import */


      var src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/entities/condiciones-salud */
      "./src/app/entities/condiciones-salud.ts");
      /* harmony import */


      var src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/autoevaluacion-covid19.service */
      "./src/app/services/autoevaluacion-covid19.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /**
       * Componente de la vista de resultado para el módulo de autoevaluación COVID-19.
       */


      var Covid19ResultadoPage = /*#__PURE__*/function () {
        function Covid19ResultadoPage(utils, provider, geolocation, nativeGeocoder, alertCtrl, router) {
          _classCallCheck(this, Covid19ResultadoPage);

          this.utils = utils;
          this.provider = provider;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.alertCtrl = alertCtrl;
          this.router = router;
        }

        return _createClass(Covid19ResultadoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.poll = this.router.getCurrentNavigation().extras.state.poll;
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
                    if (!this.poll) {
                      this.poll = new src_app_entities_autoevaluacion_covid19__WEBPACK_IMPORTED_MODULE_8__["Poll"]();
                    }

                    _context.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    this.utils.getIPAddress().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                      return _this.utils.dismissLoading();
                    })).subscribe(function (r) {
                      var body = r;
                      var ip = body.ip;
                      _this.poll.userData.ip = ip;

                      _this.getCurrentPosition(_this.poll);
                    }, function () {
                      return _this.getCurrentPosition(_this.poll);
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
           * Obtiene las coordenadas de ubicación física del dispositivo.
           *
           * @param poll Encuesta.
           */

        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition(poll) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var onFinally;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    onFinally = function onFinally(latitude, longitude) {
                      _this2.utils.dismissLoading();

                      var geolocation = new src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]();
                      geolocation.latitude = latitude;
                      geolocation.longitude = longitude;
                      poll.geolocation = geolocation;

                      _this2.getAddress(poll);
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
          value: function getAddress(poll) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this3 = this;

              var onFinally, latitude, longitude;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    onFinally = function onFinally(address) {
                      _this3.utils.dismissLoading();

                      poll.geolocation.address = address;

                      _this3.sendPoll(poll);
                    };

                    latitude = poll.geolocation.latitude;
                    longitude = poll.geolocation.longitude;

                    if (!(!latitude || !longitude)) {
                      _context3.next = 5;
                      break;
                    }

                    return _context3.abrupt("return", this.sendPoll(poll));

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
          value: function sendPoll(poll) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this4 = this;

              var body;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    body = poll.deserialize();
                    _context4.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    this.provider.submitPoll(body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                      return _this4.utils.dismissLoading();
                    })).subscribe(function (r) {
                      var b = r;
                      _this4.showSuggestion = b.esSospechoso;
                      _this4.pollDate = b.fechaStr;
                      _this4.showResult = true;
                    }, function () {
                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_7__["alertCommunicationError"])(_this4.alertCtrl);

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

      Covid19ResultadoPage.ctorParameters = function () {
        return [{
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"]
        }, {
          type: src_app_services_autoevaluacion_covid19_service__WEBPACK_IMPORTED_MODULE_10__["AutoevaluacionCOVID19Service"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      Covid19ResultadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-covid19-resultado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./covid19-resultado.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/covid19-resultado/covid19-resultado.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./covid19-resultado.page.scss */
        "./src/app/pages/covid19-resultado/covid19-resultado.page.scss"))["default"]]
      })], Covid19ResultadoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=covid19-resultado-covid19-resultado-module-es5.js.map