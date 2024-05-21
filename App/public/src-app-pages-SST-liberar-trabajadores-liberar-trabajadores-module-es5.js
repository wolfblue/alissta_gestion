(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-liberar-trabajadores-liberar-trabajadores-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTLiberarTrabajadoresLiberarTrabajadoresPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div style=\"display: flex; align-items: center\" class=\"toolbar\">\n    <span> <ion-img style=\"width: 32px; height: 32px; margin-right: 12px\" src=\"assets/img/carbon_result-draft.svg\"></ion-img> </span>\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> PERMISOS DE TRABAJO</strong></ion-title>\n  </div>\n</ion-header>\n<ion-content>\n  <div class=\"toolbar toolcontent\">\n    <ion-title> <ion-icon style=\"transform: rotate(308deg)\" name=\"send\"></ion-icon> Liberar Trabajadores</ion-title>\n  </div>\n\n  <ion-item *ngIf=\"trabajadores.length > 0\" style=\"padding-bottom: 0\" class=\"ion-padding\">\n    <ion-checkbox [(ngModel)]=\"marcarTodos\" (ionChange)=\"onChangeMarcarTodos($event)\"></ion-checkbox>\n    <ion-label>&nbsp;<strong> Seleccionar toda la página</strong></ion-label>\n  </ion-item>\n\n  <div style=\"padding-top: 0\" class=\"ion-padding\" *ngIf=\"trabajadores.length > 0\">\n    <!-- <ion-item *ngFor=\"let trabajador of trabajadores\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{trabajador.}}</ion-card-title>\n          <ion-card-subtitle>{{trabajador}} : {{trabajador}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-button (click)=\"liberarUser(trabajador, trbajador)\" fill=\"clear\" color=\"danger\">liberar</ion-button>\n      </ion-card>\n    </ion-item> -->\n\n    <ion-grid>\n      <ion-row class=\"header-table\">\n        <ion-col size=\"3\">\n          <ion-label>Nombre </ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>ID</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>Cargo</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>Liberar</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngFor=\"let trabajador of trabajadores | slice:(currentPage - 1) * workersPerPage:currentPage * workersPerPage\"\n        class=\"body-table\"\n      >\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strNombreTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strNumeroDocumeto}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>{{trabajador.strCargoTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"check\">\n          <ion-checkbox [(ngModel)]=\"trabajador.accion\"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"pagination-buttons ion-text-center\">\n      <ion-button (click)=\"previousPage()\" [disabled]=\"currentPage === 1\"><ion-icon name=\"chevron-back\"></ion-icon></ion-button>\n      <ion-button [disabled]=\"true\">{{currentPage}}/{{totalPage}}</ion-button>\n      <ion-button (click)=\"nextPage()\" [disabled]=\"currentPage * workersPerPage >= trabajadores.length\"\n        ><ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></ion-button>\n    </div>\n    <div class=\"ion-text-center ion-padding\">\n      <button class=\"guardar-continuar\" *ngIf=\"trabajadores.length > 0\" color=\"secondary\" (click)=\"liberarUser()\">Liberar</button>\n    </div>\n  </div>\n  <div class=\"ion-text-center ion-padding\">\n    <br />\n    <br />\n    <br />\n\n    <button class=\"guardar-continuar\" *ngIf=\"trabajadores.length === 0\" color=\"secondary\" (click)=\"volver()\">Volver</button>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores-routing.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: LiberarTrabajadoresPageRoutingModule */

    /***/
    function srcAppPagesSSTLiberarTrabajadoresLiberarTrabajadoresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiberarTrabajadoresPageRoutingModule", function () {
        return LiberarTrabajadoresPageRoutingModule;
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


      var _liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./liberar-trabajadores.page */
      "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts");

      var routes = [{
        path: '',
        component: _liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_3__["LiberarTrabajadoresPage"]
      }];

      var LiberarTrabajadoresPageRoutingModule = /*#__PURE__*/_createClass(function LiberarTrabajadoresPageRoutingModule() {
        _classCallCheck(this, LiberarTrabajadoresPageRoutingModule);
      });

      LiberarTrabajadoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LiberarTrabajadoresPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: LiberarTrabajadoresPageModule */

    /***/
    function srcAppPagesSSTLiberarTrabajadoresLiberarTrabajadoresModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiberarTrabajadoresPageModule", function () {
        return LiberarTrabajadoresPageModule;
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


      var _liberar_trabajadores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./liberar-trabajadores-routing.module */
      "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores-routing.module.ts");
      /* harmony import */


      var _liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./liberar-trabajadores.page */
      "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var LiberarTrabajadoresPageModule = /*#__PURE__*/_createClass(function LiberarTrabajadoresPageModule() {
        _classCallCheck(this, LiberarTrabajadoresPageModule);
      });

      LiberarTrabajadoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _liberar_trabajadores_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiberarTrabajadoresPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_liberar_trabajadores_page__WEBPACK_IMPORTED_MODULE_6__["LiberarTrabajadoresPage"]]
      })], LiberarTrabajadoresPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTLiberarTrabajadoresLiberarTrabajadoresPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\ndiv.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nion-card {\n  width: 100%;\n}\n.botonCancelar {\n  color: green;\n  /* Cambia el color de texto del botón \"Cancelar\" a verde */\n}\n.botonAceptar {\n  color: red;\n  /* Cambia el color de texto del botón \"Aceptar\" a rojo */\n}\n.header-table {\n  font-size: 0.7rem;\n  font-weight: bold;\n  background-color: #b1b7bd;\n  color: black;\n  text-align: center;\n  padding: 2px;\n  border: 1px solid #b1b7bd;\n  border-radius: 5px 5px 0px 0px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin: 0 auto;\n  align-items: center;\n}\n.body-table {\n  font-size: 0.65rem;\n  font-weight: 400;\n  background-color: #e9ecef;\n  color: black;\n  text-align: start;\n  align-items: center;\n  padding-bottom: 2px;\n  border: 1px solid #b1b7bd;\n}\n.body-table .check {\n  text-align: center;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 50%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-fab-button.float-button {\n  --padding: 0;\n  --margin: 0;\n  --size: 44px;\n  --background: #ff7500;\n}\nion-icon.float-button {\n  --background: #ff7500;\n}\n.custom-icon-float {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2xpYmVyYXItdHJhYmFqYWRvcmVzL2xpYmVyYXItdHJhYmFqYWRvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUY7QUFERTtFQUNFLFdBQUE7QUFHSjtBQURFO0VBQ0UsMENBQUE7QUFHSjtBQUNBO0VBQ0UsV0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQWMsMERBQUE7QUFHaEI7QUFBQTtFQUNFLFVBQUE7RUFBWSx3REFBQTtBQUlkO0FBREE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSUY7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUlGO0FBSEU7RUFDRSxrQkFBQTtBQUtKO0FBRkE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBS0Y7QUFGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBS0Y7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvbGliZXJhci10cmFiYWphZG9yZXMvbGliZXJhci10cmFiYWphZG9yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjYmViMmIyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi50b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZGl2LnRvb2xiYXIudG9vbGNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3RvbkNhbmNlbGFyIHtcbiAgY29sb3I6IGdyZWVuO1xuICAvKiBDYW1iaWEgZWwgY29sb3IgZGUgdGV4dG8gZGVsIGJvdMOzbiBcIkNhbmNlbGFyXCIgYSB2ZXJkZSAqL1xufVxuXG4uYm90b25BY2VwdGFyIHtcbiAgY29sb3I6IHJlZDtcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIHRleHRvIGRlbCBib3TDs24gXCJBY2VwdGFyXCIgYSByb2pvICovXG59XG5cbi5oZWFkZXItdGFibGUge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWI3YmQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMWI3YmQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvZHktdGFibGUge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMWI3YmQ7XG59XG4uYm9keS10YWJsZSAuY2hlY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmlvbi1mYWItYnV0dG9uLmZsb2F0LWJ1dHRvbiB7XG4gIC0tcGFkZGluZzogMDtcbiAgLS1tYXJnaW46IDA7XG4gIC0tc2l6ZTogNDRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3NTAwO1xufVxuXG5pb24taWNvbi5mbG9hdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZjc1MDA7XG59XG5cbi5jdXN0b20taWNvbi1mbG9hdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: LiberarTrabajadoresPage */

    /***/
    function srcAppPagesSSTLiberarTrabajadoresLiberarTrabajadoresPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiberarTrabajadoresPage", function () {
        return LiberarTrabajadoresPage;
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


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_interfaces_edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/interfaces/edinfo-auditoria-app */
      "./src/app/interfaces/edinfo-auditoria-app.ts");
      /* harmony import */


      var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/SST/data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/SST/data.service */
      "./src/app/services/SST/data.service.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var LiberarTrabajadoresPage = /*#__PURE__*/function () {
        function LiberarTrabajadoresPage(dataBaseService, utils, context, device, alertController, dataService, router) {
          _classCallCheck(this, LiberarTrabajadoresPage);

          this.dataBaseService = dataBaseService;
          this.utils = utils;
          this.context = context;
          this.device = device;
          this.alertController = alertController;
          this.dataService = dataService;
          this.router = router;
          this.trabajadores = [];
          this.auditoria = new src_app_interfaces_edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_5__["EDInfoAuditoriaAPP"]();
          this.currentPage = 1;
          this.workersPerPage = 10;
          this.trabajadoresMarcados = [];
          this.totalPage = 0;
        }

        return _createClass(LiberarTrabajadoresPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.trabajadoresPorLiberar();
            this.dataBaseService.open().then(function () {
              _this.dataBaseService.getAllData().subscribe({
                next: function next(data) {
                  _this.data = data;

                  _this.updateTrabajadores();
                },
                error: function error(_error) {
                  _this.dataBaseService.close();
                }
              });
            });
          }
        }, {
          key: "trabajadoresPorLiberar",
          value: function trabajadoresPorLiberar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    console.log('trabajadoresPorLiberar');
                    _context.prev = 1;
                    _context.next = 4;
                    return this.utils.presentLoading();

                  case 4:
                    _context.next = 6;
                    return this.context.get();

                  case 6:
                    this.user = _context.sent;
                    _context.next = 9;
                    return this.dataBaseService.open().then(function () {
                      _this2.dataBaseService.getAllTrabajadoresMigrados().subscribe({
                        next: function next(trabajadores) {
                          _this2.utils.dismissLoading();

                          trabajadores.forEach(function (trabajador) {
                            trabajador.accion = false;
                          });
                          _this2.trabajadores = trabajadores;
                          _this2.totalPage = Math.ceil(_this2.trabajadores.length / _this2.workersPerPage);
                        },
                        error: function error(_error2) {
                          console.error('Error al obtener los trabajadores disponibles:', _error2);

                          _this2.dataBaseService.close();
                        },
                        complete: function complete() {
                          console.log('Trabajadores disponibles completados');

                          _this2.utils.dismissLoading();
                        }
                      });
                    });

                  case 9:
                    _context.next = 16;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](1);
                    console.error('Error al liberar trabajadores:', _context.t0);
                    this.dataBaseService.close();
                    this.utils.dismissLoading();

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[1, 11]]);
            }));
          }
        }, {
          key: "liberarUser",
          value: function liberarUser() {
            var _this3 = this;

            var idsUser = [];
            var usuariosUtiliados = [];
            this.trabajadores.forEach(function (trabajador) {
              if (trabajador.accion) {
                idsUser.push(trabajador.PK_ID_PermisoAlturas_PersonasAMigrar);
              }

              return idsUser;
            });
            this.trabajadores.forEach(function (trabajador) {
              if (trabajador.blnActivo && trabajador.accion) {
                usuariosUtiliados.push(trabajador);
              }

              return usuariosUtiliados;
            });

            if (usuariosUtiliados.length > 0) {
              var nombres = usuariosUtiliados.map(function (trabajador) {
                return trabajador.strNombreTrabajador;
              });
              return this.mesaageAlert('No se pueden liberar trabajadores que esten en un permiso pendiente: \n' + nombres);
            }

            if (idsUser.length === 0) return this.mesaageAlert('Debe seleccionar al menos un trabajador');
            var permios;
            /* estas seguro de eliminar el usuario */

            /* si es cordova colocar web */

            this.auditoria.strUUID = this.device.uuid ? this.device.uuid : 'web';
            this.auditoria.strIdentificacionUsuario = this.user['_trabajador']._id;
            this.auditoria.strNombreUsuario = this.user['_trabajador'].nombre;
            this.auditoria.strNombreEmpresa = this.user['_empresa']._razonSocial;
            this.auditoria.strTipoDocEmpresa = this.user['_empresa']._tipoDocumento;
            this.auditoria.strDocumentoEmpresa = this.user['_empresa']._id;
            this.alertController.create({
              header: 'Liberar trabajador',
              message: "\xBFEstas seguro de liberar a los trabajadores?",
              buttons: [{
                text: 'Cancelar',
                cssClass: 'color: green !important',
                role: 'cancel',
                handler: function handler() {
                  console.log('Cancelado');
                }
              }, {
                text: 'Aceptar',
                cssClass: 'color: red !important',
                handler: function handler() {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return this.utils.presentLoading();

                        case 2:
                          _context2.next = 4;
                          return this.dataService.liberarTrabajador(idsUser, this.auditoria);

                        case 4:
                          _context2.next = 6;
                          return this.trabajadoresPorLiberar();

                        case 6:
                          this.utils.dismissLoading();

                        case 7:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2, this);
                  }));
                }
              }]
            }).then(function (alert) {
              alert.present();
            });
          }
        }, {
          key: "onChangeMarcarTodos",
          value: function onChangeMarcarTodos(event) {
            var _this4 = this;

            var isChecked = event.detail.checked;
            this.trabajadores = this.trabajadores.map(function (trabajador) {
              if (_this4.isOnCurrentPage(trabajador)) {
                trabajador.accion = isChecked;
              }

              return trabajador;
            });

            if (isChecked) {
              this.trabajadores.filter(function (trabajador) {
                return !_this4.trabajadoresMarcados.includes(trabajador);
              }).forEach(function (trabajador) {
                return _this4.trabajadoresMarcados.push(trabajador);
              });
            } else {
              this.trabajadoresMarcados = this.trabajadoresMarcados.filter(function (trabajador) {
                return !trabajador.accion;
              });
            }
          }
        }, {
          key: "isOnCurrentPage",
          value: function isOnCurrentPage(trabajador) {
            var index = this.trabajadores.indexOf(trabajador);
            var startIndex = (this.currentPage - 1) * this.workersPerPage;
            var endIndex = this.currentPage * this.workersPerPage;
            return index >= startIndex && index < endIndex;
          }
        }, {
          key: "previousPage",
          value: function previousPage() {
            if (this.currentPage > 1) {
              this.currentPage--;
              this.updatePage();
            }
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            if (this.currentPage * this.workersPerPage < this.trabajadores.length) {
              this.currentPage++;
              this.updatePage();
            }
          }
        }, {
          key: "updatePage",
          value: function updatePage() {
            var trabajadoresEnPaginaActual = this.trabajadores.slice((this.currentPage - 1) * this.workersPerPage, this.currentPage * this.workersPerPage);
            var todosMarcados = trabajadoresEnPaginaActual.every(function (trabajador) {
              return trabajador.accion;
            });
            var otrosMarcados = this.trabajadoresMarcados.every(function (trabajador) {
              return trabajador.accion;
            });
            this.marcarTodos = todosMarcados && otrosMarcados;
          }
        }, {
          key: "mesaageAlert",
          value: function mesaageAlert(message) {
            this.alertController.create({
              header: 'Información',
              message: message,
              buttons: ['Aceptar']
            }).then(function (alert) {
              alert.present();
            });
          }
        }, {
          key: "pushPermisosSST",
          value: function pushPermisosSST() {
            this.router.navigate(['/home/permisos']);
          }
        }, {
          key: "updateTrabajadores",
          value: function updateTrabajadores() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this5 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    try {
                      this.data.forEach(function (permisoIncompleto) {
                        permisoIncompleto['listaTrabajadoresMigrados'].forEach(function (trabajador) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                              while (1) switch (_context3.prev = _context3.next) {
                                case 0:
                                  console.log(trabajador);
                                  _context3.next = 3;
                                  return this.dataBaseService.updateTrabajadorMigrado(trabajador);

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }, _callee3, this);
                          }));
                        });
                      });
                    } catch (error) {}

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "volver",
          value: function volver() {
            this.router.navigate(['/home/permisos']);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos']);
          }
        }]);
      }();

      LiberarTrabajadoresPage.ctorParameters = function () {
        return [{
          type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_6__["DataBaseService"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_8__["ContextService"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LiberarTrabajadoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-liberar-trabajadores',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./liberar-trabajadores.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./liberar-trabajadores.page.scss */
        "./src/app/pages/SST/liberar-trabajadores/liberar-trabajadores.page.scss"))["default"]]
      })], LiberarTrabajadoresPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-liberar-trabajadores-liberar-trabajadores-module-es5.js.map