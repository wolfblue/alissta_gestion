(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-informacion-actividad-seccion-general-seccion-general-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTInformacionActividadSeccionGeneralSeccionGeneralPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> Registro Permiso</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Información actividad</ion-title>\n  </div>\n  <div *ngIf=\"questions\" class=\"ion-padding\">\n    <ion-row *ngFor=\"let question of questions\">\n      <ion-card-title>{{question.strDescripcion}}</ion-card-title>\n      <ion-card-content>\n        <ion-radio-group [(ngModel)]=\"question.strRespuesta\" class=\"horizontal\" mode=\"md\">\n          <ion-item>\n            <ion-label>SI</ion-label>\n            <ion-radio slot=\"start\" value=\"SI\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NO</ion-label>\n            <ion-radio slot=\"start\" value=\"NO\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>NA</ion-label>\n            <ion-radio slot=\"start\" value=\"NA\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n        <div *ngIf=\"submitted && !question.strRespuesta\" class=\"error-message\">Ingrese el campo</div>\n      </ion-card-content>\n    </ion-row>\n    <div *ngIf=\"questions\" class=\"ion-text-center\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n  <div *ngIf=\"!questions\"></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general-routing.module.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: SeccionGeneralPageRoutingModule */

    /***/
    function srcAppPagesSSTInformacionActividadSeccionGeneralSeccionGeneralRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeccionGeneralPageRoutingModule", function () {
        return SeccionGeneralPageRoutingModule;
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


      var _seccion_general_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seccion-general.page */
      "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts");

      var routes = [{
        path: '',
        component: _seccion_general_page__WEBPACK_IMPORTED_MODULE_3__["SeccionGeneralPage"]
      }, {
        path: 'seccion-multiusos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-SST-informacion-actividad-seccion-multiusos-seccion-multiusos-module */
          "src-app-pages-SST-informacion-actividad-seccion-multiusos-seccion-multiusos-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.module */
          "./src/app/pages/SST/informacion-actividad/seccion-multiusos/seccion-multiusos.module.ts")).then(function (m) {
            return m.SeccionMultiusosPageModule;
          });
        }
      }];

      var SeccionGeneralPageRoutingModule = /*#__PURE__*/_createClass(function SeccionGeneralPageRoutingModule() {
        _classCallCheck(this, SeccionGeneralPageRoutingModule);
      });

      SeccionGeneralPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SeccionGeneralPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.module.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: SeccionGeneralPageModule */

    /***/
    function srcAppPagesSSTInformacionActividadSeccionGeneralSeccionGeneralModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeccionGeneralPageModule", function () {
        return SeccionGeneralPageModule;
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


      var _seccion_general_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seccion-general-routing.module */
      "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general-routing.module.ts");
      /* harmony import */


      var _seccion_general_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seccion-general.page */
      "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var SeccionGeneralPageModule = /*#__PURE__*/_createClass(function SeccionGeneralPageModule() {
        _classCallCheck(this, SeccionGeneralPageModule);
      });

      SeccionGeneralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seccion_general_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeccionGeneralPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_seccion_general_page__WEBPACK_IMPORTED_MODULE_6__["SeccionGeneralPage"]]
      })], SeccionGeneralPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTInformacionActividadSeccionGeneralSeccionGeneralPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-radio-group.horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\nion-radio-group.horizontal ion-item {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio-group.horizontal ion-item ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio {\n  margin-right: 12px !important;\n}\nion-card-content,\nion-card {\n  /* quitar padin izq der */\n  padding: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 100%;\n}\nion-card-title {\n  padding: 8px;\n  justify-content: center;\n  text-align: justify;\n}\nion-row.question {\n  margin-bottom: 14px;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 10px;\n}\nion-row.question ion-row {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n}\ndiv.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.error-message {\n  color: red;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2luZm9ybWFjaW9uLWFjdGl2aWRhZC9zZWNjaW9uLWdlbmVyYWwvc2VjY2lvbi1nZW5lcmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUdOO0FBQ0E7RUFDRSw2QkFBQTtBQUVGO0FBQUE7O0VBRUUseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFHRjtBQURBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQURBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUlGO0FBSEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS0o7QUFIRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0o7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFJRjtBQUhFO0VBQ0UsV0FBQTtBQUtKO0FBSEU7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUtKO0FBREE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBSUY7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTUY7QUFIQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFNRjtBQUhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFNRjtBQUhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQU1GO0FBSEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2luZm9ybWFjaW9uLWFjdGl2aWRhZC9zZWNjaW9uLWdlbmVyYWwvc2VjY2lvbi1nZW5lcmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby1ncm91cC5ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBpb24taXRlbSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbmlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQtY29udGVudCxcbmlvbi1jYXJkIHtcbiAgLyogcXVpdGFyIHBhZGluIGl6cSBkZXIgKi9cbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY2FyZC10aXRsZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmlvbi1yb3cucXVlc3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgaW9uLXJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG5kaXYudG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNiZWIyYjI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICYudG9vbGNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgcGFkZGluZzogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1pdGVtLm1vc3RyYXItdXN1YXJpb3Mge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmNlbnRlci10cmFiYWphZG9yZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SeccionGeneralPage */

    /***/
    function srcAppPagesSSTInformacionActividadSeccionGeneralSeccionGeneralPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeccionGeneralPage", function () {
        return SeccionGeneralPage;
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


      var src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/SST/data-questions.service */
      "./src/app/services/SST/data-questions.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /* harmony import */


      var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/modal-trabajadores/modal-trabajadores.component */
      "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
      /* harmony import */


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/SST/tabla-trabajadores.service */
      "./src/app/services/SST/tabla-trabajadores.service.ts");

      var SeccionGeneralPage = /*#__PURE__*/function () {
        function SeccionGeneralPage(questionService, utils, alertController, router, platform, modalController, dataService, tablaTrabajadoresService) {
          _classCallCheck(this, SeccionGeneralPage);

          this.questionService = questionService;
          this.utils = utils;
          this.alertController = alertController;
          this.router = router;
          this.platform = platform;
          this.modalController = modalController;
          this.dataService = dataService;
          this.tablaTrabajadoresService = tablaTrabajadoresService;
          this.submitted = false;
          this.precargarDatos();
        }

        return _createClass(SeccionGeneralPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verTrabajadores",
          value: function verTrabajadores() {
            this.modalController.create({
              component: src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_6__["ModalTrabajadoresComponent"]
            }).then(function (modal) {
              modal.present();
            });
          }
        }, {
          key: "getQuestions",
          value: function getQuestions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var seccio;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utils.presentLoading();

                  case 2:
                    _context.next = 4;
                    return this.questionService.getSeccionGeneral();

                  case 4:
                    seccio = _context.sent;
                    this.questions = seccio;
                    this.questions.forEach(function (question) {
                      question.strRespuesta = '';
                    });
                    this.utils.dismissLoading();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "checkQuestions",
          value: function checkQuestions(questions) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _iterator, _step, question;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _iterator = _createForOfIteratorHelper(questions);
                    _context2.prev = 1;

                    _iterator.s();

                  case 3:
                    if ((_step = _iterator.n()).done) {
                      _context2.next = 11;
                      break;
                    }

                    question = _step.value;

                    if (question.strRespuesta) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.next = 8;
                    return this.mostrarError('Debe responder todas las preguntas');

                  case 8:
                    return _context2.abrupt("return", false);

                  case 9:
                    _context2.next = 3;
                    break;

                  case 11:
                    _context2.next = 16;
                    break;

                  case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2["catch"](1);

                    _iterator.e(_context2.t0);

                  case 16:
                    _context2.prev = 16;

                    _iterator.f();

                    return _context2.finish(16);

                  case 19:
                    return _context2.abrupt("return", true);

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[1, 13, 16, 19]]);
            }));
          }
        }, {
          key: "continuar",
          value: function continuar() {
            var _this = this;

            this.submitted = true;
            this.checkQuestions(this.questions).then(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!result) {
                        _context3.next = 4;
                        break;
                      }

                      _context3.next = 3;
                      return this.guardarDatos();

                    case 3:
                      this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos']);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "mostrarError",
          value: function mostrarError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context4.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "guardarDatos",
          value: function guardarDatos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var filtro;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log('guardarDatos');

                    if (this.data['listaMaestroCuestionario'].length === 0) {
                      this.data['listaMaestroCuestionario'] = this.questions;
                    } else {
                      filtro = this.data['listaMaestroCuestionario'].filter(function (item) {
                        return item.strTitulo !== 'SECCIÓN GENERAL';
                      });
                      this.data['listaMaestroCuestionario'] = filtro.concat(this.questions);
                    }

                    this.dataService.setData(this.data);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "precargarDatos",
          value: function precargarDatos() {
            var dataUrl = history.state.data;
            console.log(dataUrl);

            if (dataUrl) {
              this.dataService.clearData();
              this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
              this.dataService.setData(dataUrl);
              this.data = dataUrl;
              this.questions = dataUrl['listaMaestroCuestionario'].filter(function (item) {
                return item.strTitulo === 'SECCIÓN GENERAL';
              });
            } else {
              this.data = this.dataService.getData();
              var isQuestion = this.data['listaMaestroCuestionario'].filter(function (item) {
                return item.strTitulo === 'SECCIÓN GENERAL';
              });

              if (isQuestion.length > 0) {
                this.questions = isQuestion;
              } else {
                this.getQuestions();
              }
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso'], {
              state: {
                data: this.data
              }
            });
          }
        }]);
      }();

      SeccionGeneralPage.ctorParameters = function () {
        return [{
          type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_4__["DataQuestionsService"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_7__["SaveDataService"]
        }, {
          type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_8__["TablaTrabajadoresService"]
        }];
      };

      SeccionGeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seccion-general',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./seccion-general.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./seccion-general.page.scss */
        "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.page.scss"))["default"]]
      })], SeccionGeneralPage);
      /***/
    },

    /***/
    "./src/app/services/SST/data-questions.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/services/SST/data-questions.service.ts ***!
      \********************************************************/

    /*! exports provided: DataQuestionsService */

    /***/
    function srcAppServicesSSTDataQuestionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataQuestionsService", function () {
        return DataQuestionsService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var DataQuestionsService = /*#__PURE__*/function () {
        function DataQuestionsService(dbservice, http) {
          _classCallCheck(this, DataQuestionsService);

          this.dbservice = dbservice;
          this.http = http;
        }

        return _createClass(DataQuestionsService, [{
          key: "getSeccionGeneral",
          value: function getSeccionGeneral() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return this.dbservice.open();

                  case 3:
                    return _context6.abrupt("return", new Promise(function (resolve, reject) {
                      var transaction = _this2.dbservice.db.transaction(['maestroCuestionario'], 'readonly');

                      var store = transaction.objectStore('maestroCuestionario');
                      var request = store.getAll();
                      console.log({
                        request: request
                      });

                      request.onsuccess = function () {
                        var all = request.result;
                        var filtered = all.filter(function (item) {
                          return item.strTitulo === 'SECCIÓN GENERAL';
                        });
                        resolve(filtered);
                      };

                      request.onerror = function () {
                        reject(request.error);
                      };
                    }));

                  case 6:
                    _context6.prev = 6;
                    _context6.t0 = _context6["catch"](0);
                    console.log(_context6.t0);
                    this.dbservice.close();
                    return _context6.abrupt("return", []);

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this, [[0, 6]]);
            }));
          }
          /* SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN */
          // getMultiusos(): Observable<MaestroCuestionario[]> {
          //   return this.http.get<{ info_actividad: MaestroCuestionario[] }>('/assets/data/questionSST.json').pipe(
          //     map(data => {
          //       if (Array.isArray(data.info_actividad)) {
          //         return data.info_actividad.filter(item => item.strTitulo === 'SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN');
          //       } else return [];
          //     })
          //   );
          // }

        }, {
          key: "getMultiusos",
          value: function getMultiusos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return this.dbservice.open();

                  case 3:
                    return _context7.abrupt("return", new Promise(function (resolve, reject) {
                      var transaction = _this3.dbservice.db.transaction(['maestroCuestionario'], 'readonly');

                      var store = transaction.objectStore('maestroCuestionario');
                      var request = store.getAll();
                      console.log({
                        request: request
                      });

                      request.onsuccess = function () {
                        var all = request.result;
                        var filtered = all.filter(function (item) {
                          return item.strTitulo === 'SECCIÓN ESCALERA PORTÁTIL TIPO TIJERA - MULTIUSOS - EXTENSIÓN';
                        });
                        resolve(filtered);
                      };

                      request.onerror = function () {
                        reject(request.error);
                      };
                    }));

                  case 6:
                    _context7.prev = 6;
                    _context7.t0 = _context7["catch"](0);
                    console.log(_context7.t0);
                    this.dbservice.close();
                    return _context7.abrupt("return", []);

                  case 11:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this, [[0, 6]]);
            }));
          } // /* SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA */
          // getPlataforma(): Observable<MaestroCuestionario[]> {
          //   return this.http.get<{ info_actividad: MaestroCuestionario[] }>('/assets/data/questionSST.json').pipe(
          //     map(data => {
          //       if (Array.isArray(data.info_actividad)) {
          //         return data.info_actividad.filter(item => item.strTitulo === 'SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA');
          //       } else return [];
          //     })
          //   );
          // }

        }, {
          key: "getPlataforma",
          value: function getPlataforma() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return this.dbservice.open();

                  case 3:
                    return _context8.abrupt("return", new Promise(function (resolve, reject) {
                      var transaction = _this4.dbservice.db.transaction(['maestroCuestionario'], 'readonly');

                      var store = transaction.objectStore('maestroCuestionario');
                      var request = store.getAll();
                      console.log({
                        request: request
                      });

                      request.onsuccess = function () {
                        var all = request.result;
                        var filtered = all.filter(function (item) {
                          return item.strTitulo === 'SECCIÓN ANDAMIO DE SISTEMA - PLATAFORMA';
                        });
                        resolve(filtered);
                      };

                      request.onerror = function () {
                        reject(request.error);
                      };
                    }));

                  case 6:
                    _context8.prev = 6;
                    _context8.t0 = _context8["catch"](0);
                    console.log(_context8.t0);
                    this.dbservice.close();
                    return _context8.abrupt("return", []);

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this, [[0, 6]]);
            }));
          }
          /* Descripción de la Actividad */

        }, {
          key: "getDescripcionActividad",
          value: function getDescripcionActividad() {
            return this.http.get('/assets/data/questionSST.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              if (Array.isArray(data.desc_actividad)) {
                return data.desc_actividad;
              } else return [];
            }));
          }
        }, {
          key: "getAllMaestroPadres",
          value: function getAllMaestroPadres() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this5 = this;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return this.dbservice.open();

                  case 3:
                    return _context9.abrupt("return", new Promise(function (resolve, reject) {
                      var transaction = _this5.dbservice.db.transaction(['maestroPadres'], 'readonly');

                      var store = transaction.objectStore('maestroPadres');
                      var request = store.getAll();
                      console.log({
                        request: request
                      });

                      request.onsuccess = function () {
                        var all = request.result;
                        resolve(all);
                      };

                      request.onerror = function () {
                        reject(request.error);
                      };
                    }));

                  case 6:
                    _context9.prev = 6;
                    _context9.t0 = _context9["catch"](0);
                    console.log(_context9.t0);
                    this.dbservice.close();
                    return _context9.abrupt("return", []);

                  case 11:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this, [[0, 6]]);
            }));
          }
        }, {
          key: "getAllMaestroHijos",
          value: function getAllMaestroHijos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this6 = this;

              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    _context10.next = 3;
                    return this.dbservice.open();

                  case 3:
                    return _context10.abrupt("return", new Promise(function (resolve, reject) {
                      var transaction = _this6.dbservice.db.transaction(['maestroHijos'], 'readonly');

                      var store = transaction.objectStore('maestroHijos');
                      var request = store.getAll();
                      console.log({
                        request: request
                      });

                      request.onsuccess = function () {
                        var all = request.result;
                        resolve(all);
                      };

                      request.onerror = function () {
                        reject(request.error);
                      };
                    }));

                  case 6:
                    _context10.prev = 6;
                    _context10.t0 = _context10["catch"](0);
                    console.log(_context10.t0);
                    this.dbservice.close();
                    return _context10.abrupt("return", []);

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this, [[0, 6]]);
            }));
          }
        }]);
      }();

      DataQuestionsService.ctorParameters = function () {
        return [{
          type: _data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      DataQuestionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataQuestionsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-informacion-actividad-seccion-general-seccion-general-module-es5.js.map