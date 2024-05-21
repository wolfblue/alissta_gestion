(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-registro-permiso-registro-permiso-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/registro-permiso/registro-permiso.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/registro-permiso/registro-permiso.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTRegistroPermisoRegistroPermisoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar\">\n    <ion-title>Registro Permiso</ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-label class=\"ion-padding\" style=\"font-weight: 800\">Permiso de Trabajo</ion-label>\n  <ion-item class=\"border\">\n    <ion-select (ionChange)=\"onChangePermiso($event)\" okText=\"Aceptar\" cancelText=\"Cancelar\">\n      <ion-item *ngFor=\"let permiso of listaTipoPermiso\">\n        <ion-select-option value=\"{{permiso.PK_ID_PermisoAlturas_MaestroTipoPermiso}}\">{{permiso.strDescripcion}}</ion-select-option>\n      </ion-item>\n    </ion-select>\n  </ion-item>\n\n  <!-- select -->\n  <ion-card>\n    <ion-card-content class=\"ion-padding ion-text-center\">\n      <div\n        style=\"\n          width: 220px;\n          background: #ff7500;\n          height: 220px;\n          justify-content: center;\n          border-radius: 250px;\n          display: flex;\n          align-items: center;\n          margin: auto;\n          margin-bottom: 8px;\n        \"\n        class=\"container ion-padding ion-text-center\"\n      >\n        <img src=\"../../../../assets/img/tipo-incidente.png\" alt=\"img tipo incidente\" />\n      </div>\n      <!-- svg -->\n      <ion-row>\n        <ion-label class=\"ion-text-center\" style=\"font-weight: 800; font-size: 1.2rem; color: black\"\n          ><strong> Recuerde sincronizar la aplicación móvil con la web del sistema en la siguiente opción. </strong>\n        </ion-label>\n      </ion-row>\n      <ion-row class=\"ion-padding\">\n        <ion-icon style=\"font-size: 4rem\" name=\"arrow-down-outline\"></ion-icon>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row class=\"ion-text-center\">\n    <ion-col class=\"col-12\">\n      <img width=\"100\" height=\"100\" src=\"assets/img/nube-sync.png\" (click)=\"getData()\" alt=\"Sincronizar\" />\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/registro-permiso/registro-permiso-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/SST/registro-permiso/registro-permiso-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: RegistroPermisoPageRoutingModule */

    /***/
    function srcAppPagesSSTRegistroPermisoRegistroPermisoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPermisoPageRoutingModule", function () {
        return RegistroPermisoPageRoutingModule;
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


      var _registro_permiso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registro-permiso.page */
      "./src/app/pages/SST/registro-permiso/registro-permiso.page.ts");

      var routes = [{
        path: '',
        component: _registro_permiso_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPermisoPage"]
      }, {
        path: 'crear-permiso',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-SST-crear-permiso-crear-permiso-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-SST-crear-permiso-crear-permiso-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/SST/crear-permiso/crear-permiso.module */
          "./src/app/pages/SST/crear-permiso/crear-permiso.module.ts")).then(function (m) {
            return m.CrearPermisoPageModule;
          });
        }
      }];

      var RegistroPermisoPageRoutingModule = /*#__PURE__*/_createClass(function RegistroPermisoPageRoutingModule() {
        _classCallCheck(this, RegistroPermisoPageRoutingModule);
      });

      RegistroPermisoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistroPermisoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/registro-permiso/registro-permiso.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/SST/registro-permiso/registro-permiso.module.ts ***!
      \***********************************************************************/

    /*! exports provided: RegistroPermisoPageModule */

    /***/
    function srcAppPagesSSTRegistroPermisoRegistroPermisoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPermisoPageModule", function () {
        return RegistroPermisoPageModule;
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


      var _registro_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registro-permiso-routing.module */
      "./src/app/pages/SST/registro-permiso/registro-permiso-routing.module.ts");
      /* harmony import */


      var _registro_permiso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registro-permiso.page */
      "./src/app/pages/SST/registro-permiso/registro-permiso.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var RegistroPermisoPageModule = /*#__PURE__*/_createClass(function RegistroPermisoPageModule() {
        _classCallCheck(this, RegistroPermisoPageModule);
      });

      RegistroPermisoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPermisoPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_registro_permiso_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPermisoPage"]]
      })], RegistroPermisoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/registro-permiso/registro-permiso.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/SST/registro-permiso/registro-permiso.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTRegistroPermisoRegistroPermisoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-toolbar ion-title {\n  --background: #beb2b2;\n  --color: #fff;\n}\n\nion-button .button-inner {\n  justify-content: space-evenly;\n}\n\ndiv.toolbar {\n  background: #ff7500;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\n\ndiv.toolbar ion-title {\n  color: #fff;\n}\n\nion-card {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\nion-item.border {\n  padding: 4px;\n  border: 1px solid #808080;\n  margin: 24px;\n  border-radius: 10px;\n}\n\nion-select {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL3JlZ2lzdHJvLXBlcm1pc28vcmVnaXN0cm8tcGVybWlzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvcmVnaXN0cm8tcGVybWlzby9yZWdpc3Ryby1wZXJtaXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi10b29sYmFyIHtcbiAgaW9uLXRpdGxlIHtcbiAgICAtLWJhY2tncm91bmQ6ICNiZWIyYjI7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgfVxufVxuaW9uLWJ1dHRvbiAuYnV0dG9uLWlubmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbmRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2ZmNzUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWl0ZW0uYm9yZGVyIHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/SST/registro-permiso/registro-permiso.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/SST/registro-permiso/registro-permiso.page.ts ***!
      \*********************************************************************/

    /*! exports provided: RegistroPermisoPage */

    /***/
    function srcAppPagesSSTRegistroPermisoRegistroPermisoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPermisoPage", function () {
        return RegistroPermisoPage;
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


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network.service */
      "./src/app/services/network.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var RegistroPermisoPage = /*#__PURE__*/function () {
        function RegistroPermisoPage(dataService, utils, router, alertController, dataBaseService, platform, chekInternet) {
          _classCallCheck(this, RegistroPermisoPage);

          this.dataService = dataService;
          this.utils = utils;
          this.router = router;
          this.alertController = alertController;
          this.dataBaseService = dataBaseService;
          this.platform = platform;
          this.chekInternet = chekInternet;
          this.listaTipoPermiso = [];
        }

        return _createClass(RegistroPermisoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.getFechaMigracion();
            this.tiposDePermiso();
          }
        }, {
          key: "onChangePermiso",
          value: function onChangePermiso(event) {
            this.tipoPermiso = event.detail.value;
          }
        }, {
          key: "getData",
          value: function getData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var internet, alert, _alert;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utils.presentLoading();

                  case 2:
                    _context.next = 4;
                    return this.chekInternet.testNetworkConnection();

                  case 4:
                    internet = _context.sent;

                    if (this.tipoPermiso) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 8;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: 'Debe seleccionar un tipo de permiso',
                      buttons: ['OK']
                    });

                  case 8:
                    alert = _context.sent;
                    _context.next = 11;
                    return alert.present();

                  case 11:
                    this.utils.dismissLoading();
                    return _context.abrupt("return");

                  case 13:
                    _context.prev = 13;

                    if (!internet) {
                      _context.next = 22;
                      break;
                    }

                    _context.next = 17;
                    return this.dataService.infoTrabajo(this.tipoPermiso);

                  case 17:
                    _context.next = 19;
                    return this.dataService.infoPermisoTrabajo();

                  case 19:
                    this.navegarToCrearPermiso();
                    _context.next = 23;
                    break;

                  case 22:
                    this.navegarToCrearPermiso();

                  case 23:
                    _context.next = 32;
                    break;

                  case 25:
                    _context.prev = 25;
                    _context.t0 = _context["catch"](13);
                    console.log(_context.t0);
                    _alert = this.alertController.create({
                      header: 'Error',
                      message: 'Se ha presentado un error al sincronizar la información',
                      buttons: ['OK']
                    });
                    _context.next = 31;
                    return _alert;

                  case 31:
                    _context.sent.present();

                  case 32:
                    _context.prev = 32;
                    this.utils.dismissLoading();
                    return _context.finish(32);

                  case 35:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[13, 25, 32, 35]]);
            }));
          }
        }, {
          key: "getFechaMigracion",
          value: function getFechaMigracion() {
            var lastSync = localStorage.getItem('lastSync');

            if (!lastSync) {
              this.fechaMigracion = 'No se ha realizado la migración';
              this.tipoDeMigrar = false;
              return this.fechaMigracion;
            }

            var date = new Date(lastSync);
            var currentDate = new Date();
            var daysDifference = this.utils.getDaysDifference(date, currentDate);
            var optionsDate = {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            };
            var optionsTime = {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            };
            var formattedDate = date.toLocaleDateString('en-US', optionsDate);
            var formattedTime = date.toLocaleTimeString('en-US', optionsTime);
            var fechaMigracion = "".concat(formattedDate, " - ").concat(formattedTime);
            this.fechaMigracion = fechaMigracion;
            this.tipoDeMigrar = true;
            return this.fechaMigracion;
          }
        }, {
          key: "tiposDePermiso",
          value: function tiposDePermiso() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this = this;

              var internet;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.chekInternet.testNetworkConnection();

                  case 3:
                    internet = _context2.sent;

                    if (!internet) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 7;
                    return this.dataService.infoPermisoTrabajo();

                  case 7:
                    this.dataBaseService.open().then(function () {
                      _this.dataBaseService.getAllTipoPermiso().subscribe({
                        next: function next(listaTipoPermiso) {
                          _this.listaTipoPermiso = listaTipoPermiso;
                        },
                        error: function error(_error) {
                          console.error('Error al obtener los tipos de permiso:', _error);
                        }
                      });
                    });
                    _context2.next = 13;
                    break;

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](0);
                    this.dataBaseService.close();

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[0, 10]]);
            }));
          }
        }, {
          key: "navegarToCrearPermiso",
          value: function navegarToCrearPermiso() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this2 = this;

              var strTipoPermiso;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    strTipoPermiso = this.listaTipoPermiso.filter(function (tipoPermiso) {
                      return tipoPermiso.PK_ID_PermisoAlturas_MaestroTipoPermiso.toString() === _this2.tipoPermiso;
                    });
                    this.router.navigate(['/home/permisos/registro-permiso/crear-permiso'], {
                      state: {
                        tipo: strTipoPermiso[0].strDescripcion
                      }
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "sysConnectedCheked",
          value: function sysConnectedCheked() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var platform, conection;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    platform = this.platform.platforms()[0];
                    _context4.next = 3;
                    return this.chekInternet.testNetworkConnection();

                  case 3:
                    conection = _context4.sent;

                    if (!conection) {
                      _context4.next = 6;
                      break;
                    }

                    return _context4.abrupt("return", {
                      connected: true,
                      platform: platform
                    });

                  case 6:
                    return _context4.abrupt("return", {
                      connected: false,
                      platform: platform
                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos']);
          }
        }]);
      }();

      RegistroPermisoPage.ctorParameters = function () {
        return [{
          type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_4__["DataBaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]
        }];
      };

      RegistroPermisoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-permiso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registro-permiso.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/registro-permiso/registro-permiso.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registro-permiso.page.scss */
        "./src/app/pages/SST/registro-permiso/registro-permiso.page.scss"))["default"]]
      })], RegistroPermisoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-registro-permiso-registro-permiso-module-es5.js.map