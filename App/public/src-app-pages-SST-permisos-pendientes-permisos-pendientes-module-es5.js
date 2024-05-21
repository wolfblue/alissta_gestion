(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-permisos-pendientes-permisos-pendientes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTPermisosPendientesPermisosPendientesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div style=\"display: flex; align-items: center\" class=\"toolbar\">\n    <span> <ion-img style=\"width: 32px; height: 32px; margin-right: 12px\" src=\"assets/img/carbon_result-draft.svg\"></ion-img> </span>\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> PERMISOS DE TRABAJO</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Permisos Pendientes</ion-title>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-list>\n      <div *ngFor=\"let item of pendientes\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle> <strong>Ubicación del Trabajado :</strong> {{item.strUbicacionTrabajo}}</ion-card-subtitle>\n            <ion-card-subtitle> <strong>Cantidad de Trabajadores :</strong> {{item.listaTrabajadoresMigrados.length}}</ion-card-subtitle>\n            <ion-card-title>{{formatearFecha(item.dtmFechaRegistro)}}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <button *ngIf=\"item.enviar\" class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"enviar(item)\">Enviar</button\n            ><button *ngIf=\"!item.enviar\" class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar(item)\">\n              Continuar\n            </button>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-list>\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"getPermisosPendientes()\">Consultar</ion-button>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/permisos-pendientes/permisos-pendientes-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: PermisosPendientesPageRoutingModule */

    /***/
    function srcAppPagesSSTPermisosPendientesPermisosPendientesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermisosPendientesPageRoutingModule", function () {
        return PermisosPendientesPageRoutingModule;
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


      var _permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./permisos-pendientes.page */
      "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts");

      var routes = [{
        path: '',
        component: _permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_3__["PermisosPendientesPage"]
      }];

      var PermisosPendientesPageRoutingModule = /*#__PURE__*/_createClass(function PermisosPendientesPageRoutingModule() {
        _classCallCheck(this, PermisosPendientesPageRoutingModule);
      });

      PermisosPendientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PermisosPendientesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: PermisosPendientesPageModule */

    /***/
    function srcAppPagesSSTPermisosPendientesPermisosPendientesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermisosPendientesPageModule", function () {
        return PermisosPendientesPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _permisos_pendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./permisos-pendientes-routing.module */
      "./src/app/pages/SST/permisos-pendientes/permisos-pendientes-routing.module.ts");
      /* harmony import */


      var _permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./permisos-pendientes.page */
      "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var PermisosPendientesPageModule = /*#__PURE__*/_createClass(function PermisosPendientesPageModule() {
        _classCallCheck(this, PermisosPendientesPageModule);
      });

      PermisosPendientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _permisos_pendientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermisosPendientesPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_permisos_pendientes_page__WEBPACK_IMPORTED_MODULE_6__["PermisosPendientesPage"]]
      })], PermisosPendientesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTPermisosPendientesPermisosPendientesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 8px;\n  height: 32px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL3Blcm1pc29zLXBlbmRpZW50ZXMvcGVybWlzb3MtcGVuZGllbnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUFFO0VBQ0UsMENBQUE7QUFFSjtBQUVBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvcGVybWlzb3MtcGVuZGllbnRlcy9wZXJtaXNvcy1wZW5kaWVudGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2JlYjJiMjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJi50b29sY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.ts ***!
      \***************************************************************************/

    /*! exports provided: PermisosPendientesPage */

    /***/
    function srcAppPagesSSTPermisosPendientesPermisosPendientesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermisosPendientesPage", function () {
        return PermisosPendientesPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/SST/data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/SST/data.service */
      "./src/app/services/SST/data.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var PermisosPendientesPage = /*#__PURE__*/function () {
        function PermisosPendientesPage(data, utils, router, dataService, alertControoler) {
          _classCallCheck(this, PermisosPendientesPage);

          this.data = data;
          this.utils = utils;
          this.router = router;
          this.dataService = dataService;
          this.alertControoler = alertControoler;
          this.pendientes = [];
        }

        return _createClass(PermisosPendientesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPermisosPendientes();
          }
        }, {
          key: "getPermisosPendientes",
          value: function getPermisosPendientes() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    this.data.open().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var _this2 = this;

                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              this.data.getAllEDGuardarPermisoTrabajoAPP().subscribe({
                                next: function next(permisos) {
                                  _this2.utils.dismissLoading();

                                  if (permisos.length === 0) {
                                    _this2.alertControoler.create({}).then(function (alert) {
                                      alert.header = 'Información';
                                      alert.message = 'No hay permisos pendientes';
                                      alert.buttons = ['Aceptar'];
                                      alert.present();
                                    });
                                  }

                                  _this2.pendientes = permisos;
                                  console.log('Permisos pendientes:', permisos);
                                },
                                error: function error(_error) {
                                  console.error('Error al obtener los permisos pendientes:', _error);

                                  _this2.data.close();
                                },
                                complete: function complete() {
                                  console.log('Permisos pendientes completados');

                                  _this2.utils.dismissLoading();
                                }
                              });

                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee, this);
                      }));
                    });

                  case 4:
                    _context2.prev = 4;
                    this.utils.dismissLoading();
                    return _context2.finish(4);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[0,, 4, 7]]);
            }));
          }
        }, {
          key: "continuar",
          value: function continuar(item) {
            // let ruta = item['rutas'][item['rutas'].length - 1];
            this.router.navigate([item['lastRoute']], {
              state: {
                data: item
              }
            });
          }
        }, {
          key: "enviar",
          value: function enviar(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this3 = this;

              var _yield$this$dataServi, status, data;

              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    // this.selectedItemsService.setSelectedItems([]);
                    item['strFechaYHoraInicioAct'] = item['strFechaRegistro'];
                    _context5.next = 4;
                    return this.utils.presentLoading();

                  case 4:
                    _context5.next = 6;
                    return this.dataService.enviarPermisoTrabajo(item);

                  case 6:
                    _yield$this$dataServi = _context5.sent;
                    status = _yield$this$dataServi.status;
                    data = _yield$this$dataServi.data;
                    this.utils.dismissLoading();

                    if (status === 200) {
                      this.alertControoler.create({
                        header: 'Alerta',
                        message: 'Permiso enviado correctamente',
                        buttons: ['Aceptar']
                      }).then(function (alert) {
                        alert.present();
                      });
                      this.data.open().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                          var _this4 = this;

                          var usuarios;
                          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                            while (1) switch (_context4.prev = _context4.next) {
                              case 0:
                                usuarios = item['listaTrabajadoresMigrados'];
                                usuarios.forEach(function (usuario) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                      while (1) switch (_context3.prev = _context3.next) {
                                        case 0:
                                          _context3.next = 2;
                                          return this.data.deleteTrabajadorMigrado(usuario);

                                        case 2:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }, _callee3, this);
                                  }));
                                });
                                this.data.deleteEDGuardarPermisoTrabajoAPP(item).then(function () {
                                  _this4.utils.dismissLoading();

                                  _this4.pendientes = _this4.pendientes.filter(function (permiso) {
                                    return permiso !== item;
                                  });
                                });

                              case 3:
                              case "end":
                                return _context4.stop();
                            }
                          }, _callee4, this);
                        }));
                      });
                    } else {
                      this.alertControoler.create({
                        header: 'Alerta',
                        message: "Error al enviar el permiso: ".concat(data, " "),
                        buttons: ['Aceptar']
                      }).then(function (alert) {
                        alert.present();
                      });
                    }

                    _context5.next = 18;
                    break;

                  case 13:
                    _context5.prev = 13;
                    _context5.t0 = _context5["catch"](0);
                    this.utils.dismissLoading();
                    console.error('Error al enviar el permiso:', _context5.t0);
                    this.alertControoler.create({
                      header: 'Alerta',
                      message: 'Error al enviar el permiso intenta más tarde',
                      buttons: ['Aceptar']
                    }).then(function (alert) {
                      alert.present();
                    });

                  case 18:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[0, 13]]);
            }));
          }
        }, {
          key: "formatearFecha",
          value: function formatearFecha(fecha) {
            var date = new Date(fecha);
            var dia = date.getDate();
            var mes = date.getMonth() + 1;
            var anio = date.getFullYear();
            var hora = date.getHours().toString().padStart(2, '0');
            var minutos = date.getMinutes().toString().padStart(2, '0');
            var fechaFormateada = "".concat(dia.toString().padStart(2, '0'), "/").concat(mes.toString().padStart(2, '0'), "/").concat(anio.toString(), "  ").concat(hora, ":").concat(minutos);
            return fechaFormateada;
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos']);
          }
        }]);
      }();

      PermisosPendientesPage.ctorParameters = function () {
        return [{
          type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__["DataBaseService"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      PermisosPendientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permisos-pendientes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./permisos-pendientes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./permisos-pendientes.page.scss */
        "./src/app/pages/SST/permisos-pendientes/permisos-pendientes.page.scss"))["default"]]
      })], PermisosPendientesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-permisos-pendientes-permisos-pendientes-module-es5.js.map