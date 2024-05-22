(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-autenticacion-autenticacion-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/autenticacion/autenticacion.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/autenticacion/autenticacion.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAutenticacionAutenticacionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding>\n  <div class=\"max-size-content\">\n\n    <img class=\"alista-gestion-a-tu-alcance\" src=\"assets/img/alissta-gestion-a-tu-alcance.png\">\n\n    <ion-card>\n      <ion-list lines=\"none\">\n        <h1>Bienvenido (a)</h1>\n        <form [formGroup]=\"formGroup\">\n\n          <ion-item [class.invalid]=\"isNitInvalid()\">\n            <ion-input class=\"ion-text-center\" placeholder=\"Documento Empleador\" type=\"number\"\n              formControlName=\"nitFormControl\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item [class.invalid]=\"isCedulaInvalid()\">\n            <ion-input class=\"ion-text-center\" placeholder=\"Documento Usuario\" type=\"number\"\n              formControlName=\"cedulaFormControl\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item [class.invalid]=\"isPasswordValid()\">\n            <ion-input class=\"ion-text-center\" placeholder=\"Digite clave\" [type]=\"showPassword ? 'text' : 'password'\"\n              formControlName=\"passFormControl\">\n            </ion-input>\n            <button class=\"button-eye\" type=\"button\" (click)=\"togglePassword()\" item-end>\n              <ion-icon [name]=\"passwordToggleIcon\"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div class=\"button-wrapper\">\n            <ion-button (click)=\"login()\">Ingresar</ion-button>\n          </div>\n\n        </form>\n\n        <ion-row class=\"row-superior\">\n\n          <ion-col>\n            <ion-row>\n              <ion-col class=\"get-user\">\n                <span class=\"ion-float-left\" (click)=\"openGetUserUrl()\">Solicite su usuario aquí</span>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col>\n            <ion-row>\n              <ion-col class=\"restore-password\">\n                <span class=\"ion-float-right\" (click)=\"openRestorePasswordUrl()\">¿Olvidó su clave?</span>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n      <div class=\"button-finger-face\" *ngIf=\"showFinger && activateFinger\">\n        <ion-button (click)=\"launchFingerprintModal()\">Ingresar con FaceID/TouchID</ion-button>\n      </div>\n    </ion-card>\n\n    <img class=\"positiva-compania-de-seguros\" src=\"assets/img/positiva-compania-de-seguros.png\">\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/entities/authentication-entity.ts":
    /*!***************************************************!*\
      !*** ./src/app/entities/authentication-entity.ts ***!
      \***************************************************/

    /*! exports provided: AuthenticationEntity */

    /***/
    function srcAppEntitiesAuthenticationEntityTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationEntity", function () {
        return AuthenticationEntity;
      });

      var AuthenticationEntity = /*#__PURE__*/function () {
        function AuthenticationEntity() {
          _classCallCheck(this, AuthenticationEntity);
        }

        return _createClass(AuthenticationEntity, [{
          key: "getNitEmpresa",
          get: function get() {
            return this._nitEmpresa;
          }
        }, {
          key: "setNitEmpresa",
          set: function set(nitEmpresa) {
            this._nitEmpresa = nitEmpresa;
          }
        }, {
          key: "getDocumentoEmpleado",
          get: function get() {
            return this._documentoEmpleado;
          }
        }, {
          key: "setDocumentoEmpleado",
          set: function set(documentoEmpleado) {
            this._documentoEmpleado = documentoEmpleado;
          }
        }, {
          key: "getPass",
          get: function get() {
            return this._pass;
          }
        }, {
          key: "setPass",
          set: function set(pass) {
            this._pass = pass;
          }
        }, {
          key: "toJson",
          value: function toJson() {
            return JSON.stringify({
              nitEmpresa: String(this.getNitEmpresa),
              documentoEmpleado: String(this.getDocumentoEmpleado),
              pass: this._pass
            });
          }
        }]);
      }();
      /***/

    },

    /***/
    "./src/app/pages/autenticacion/autenticacion-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/autenticacion/autenticacion-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AutenticacionPageRoutingModule */

    /***/
    function srcAppPagesAutenticacionAutenticacionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutenticacionPageRoutingModule", function () {
        return AutenticacionPageRoutingModule;
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


      var _autenticacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./autenticacion.page */
      "./src/app/pages/autenticacion/autenticacion.page.ts");

      var routes = [{
        path: 'login',
        component: _autenticacion_page__WEBPACK_IMPORTED_MODULE_3__["AutenticacionPage"]
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | datos-generales-relacion-laboral-datos-generales-relacion-laboral-module */
          [__webpack_require__.e("common"), __webpack_require__.e("datos-generales-relacion-laboral-datos-generales-relacion-laboral-module")]).then(__webpack_require__.bind(null,
          /*! ../datos-generales-relacion-laboral/datos-generales-relacion-laboral.module */
          "./src/app/pages/datos-generales-relacion-laboral/datos-generales-relacion-laboral.module.ts")).then(function (m) {
            return m.DatosGeneralesRelacionLaboralPageModule;
          });
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
      }];

      var AutenticacionPageRoutingModule = /*#__PURE__*/_createClass(function AutenticacionPageRoutingModule() {
        _classCallCheck(this, AutenticacionPageRoutingModule);
      });

      AutenticacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AutenticacionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/autenticacion/autenticacion.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/autenticacion/autenticacion.module.ts ***!
      \*************************************************************/

    /*! exports provided: AutenticacionPageModule */

    /***/
    function srcAppPagesAutenticacionAutenticacionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutenticacionPageModule", function () {
        return AutenticacionPageModule;
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


      var _autenticacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./autenticacion-routing.module */
      "./src/app/pages/autenticacion/autenticacion-routing.module.ts");
      /* harmony import */


      var _autenticacion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./autenticacion.page */
      "./src/app/pages/autenticacion/autenticacion.page.ts");
      /* harmony import */


      var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/fingerprint-aio/ngx */
      "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      "./node_modules/@ionic-native/app-rate/__ivy_ngcc__/ngx/index.js");

      var AutenticacionPageModule = /*#__PURE__*/_createClass(function AutenticacionPageModule() {
        _classCallCheck(this, AutenticacionPageModule);
      });

      AutenticacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _autenticacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["AutenticacionPageRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__["AppRate"]],
        declarations: [_autenticacion_page__WEBPACK_IMPORTED_MODULE_4__["AutenticacionPage"]]
      })], AutenticacionPageModule);
      /***/
    },

    /***/
    "./src/app/pages/autenticacion/autenticacion.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/autenticacion/autenticacion.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAutenticacionAutenticacionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\nion-content {\n  min-width: 300px;\n  min-height: 300px;\n}\nion-content img {\n  height: auto;\n  display: block;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content ion-card {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  --background: var(--ion-color-primary);\n}\nion-content ion-card ion-list {\n  background-color: var(--ion-color-primary);\n}\nion-content ion-card ion-list h1 {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  color: #334d5a;\n}\nion-content ion-card ion-list form ion-item {\n  border-radius: 30px;\n}\nion-content ion-card ion-list form ion-item:not(:first-child) {\n  margin-top: 1rem !important;\n}\nion-content ion-card ion-list form ion-item.ion-invalid, ion-content ion-card ion-list form ion-item.ion-valid {\n  --highlight-background: none;\n}\nion-content ion-card ion-list form ion-item.invalid {\n  border: 3px var(--highlight-color-invalid) solid;\n}\nion-content ion-card ion-list form .button-wrapper {\n  width: 100%;\n  text-align: center;\n}\nion-content ion-card ion-list form .button-wrapper ion-button {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n  --background: #334d5a;\n  --border-radius: 30px;\n  --padding-start: 50px;\n  --padding-end: 50px;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n}\nion-content ion-card ion-list form .button-wrapper {\n  width: 100%;\n  text-align: center;\n}\nion-content ion-card ion-list form .button-wrapper ion-button {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n  --background: #334d5a;\n  --border-radius: 30px;\n  --padding-start: 50px;\n  --padding-end: 50px;\n  --padding-top: 25px;\n  --padding-bottom: 25px;\n}\nion-content ion-card ion-list .row-superior {\n  color: #ffffff;\n}\n@media screen and (min-width: 500px) {\n  .max-size-content {\n    max-width: 500px;\n    position: relative !important;\n    margin: 0 auto;\n  }\n}\n@media screen and (min-height: 684px) {\n  .scroll-content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: auto;\n  }\n}\n.alista-gestion-a-tu-alcance {\n  width: 66%;\n}\n.positiva-compania-de-seguros {\n  width: 45%;\n}\n.finger-img {\n  height: 50px !important;\n  width: 50px !important;\n}\n.label-terminos-condiciones {\n  display: block;\n  text-align: center;\n  margin-top: 6rem !important;\n}\n.button-eye {\n  right: 20px;\n  bottom: 10px;\n  background: transparent;\n}\n.button-eye:focus {\n  outline: none !important;\n}\n.button-eye ion-icon {\n  font-size: 22px;\n  color: #757575;\n}\n.my-custom-class {\n  --background: #e5e5e5;\n}\n.button-finger-face {\n  text-align: center;\n  margin: auto;\n}\n.button-finger-face ion-button {\n  margin-top: 2px !important;\n  margin-bottom: 2px !important;\n  text-transform: none !important;\n  --border-radius: 30px;\n  --border-color: white;\n  --border-style: solid;\n  --border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0ZW50aWNhY2lvbi9hdXRlbnRpY2FjaW9uLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEIsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURURjtBQ1lBLHVDQUFBO0FBNkRBOzs7RUFBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEOUVGO0FDaUZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsOEJBQUE7QURuRkY7QUNzRkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRG5GRjtBQ3NGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsaUNBQUE7RUFFQSxpQ0FBQTtFQUVBLDhCQUFBO0FEM0ZGO0FBek1BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQTRNRjtBQTFNRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE0TUo7QUF6TUU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FBMk1KO0FBek1JO0VBQ0UsMENBQUE7QUEyTU47QUF6TU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBMk1SO0FBdk1RO0VBQ0UsbUJBQUE7QUF5TVY7QUF2TVU7RUFDRSwyQkFBQTtBQXlNWjtBQXRNVTtFQUVFLDRCQUFBO0FBdU1aO0FBcE1VO0VBQ0UsZ0RBQUE7QUFzTVo7QUFsTVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFvTVY7QUFsTVU7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBb01aO0FBaE1RO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBa01WO0FBaE1VO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWtNWjtBQTdMTTtFQUNFLGNBQUE7QUErTFI7QUF6TEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsNkJBQUE7SUFDQSxjQUFBO0VBNExGO0FBQ0Y7QUF6TEE7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtFQTJMRjtBQUNGO0FBeExBO0VBQ0UsVUFBQTtBQTBMRjtBQXZMQTtFQUNFLFVBQUE7QUEwTEY7QUF2TEE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FBMExGO0FBdkxBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUEwTEY7QUF2TEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBMExGO0FBeExFO0VBQ0Usd0JBQUE7QUEwTEo7QUF2TEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXlMSjtBQXJMQTtFQUNFLHFCQUFBO0FBd0xGO0FBckxBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBd0xGO0FBdExFO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUF3TEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRlbnRpY2FjaW9uL2F1dGVudGljYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG5pb24tY29udGVudCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuaW9uLWNvbnRlbnQgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAjMzM0ZDVhO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBmb3JtIGlvbi1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgZm9ybSBpb24taXRlbS5pb24taW52YWxpZCwgaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgZm9ybSBpb24taXRlbS5pb24tdmFsaWQge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgZm9ybSBpb24taXRlbS5pbnZhbGlkIHtcbiAgYm9yZGVyOiAzcHggdmFyKC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQpIHNvbGlkO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgZm9ybSAuYnV0dG9uLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgZm9ybSAuYnV0dG9uLXdyYXBwZXIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiAjMzM0ZDVhO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNTBweDtcbiAgLS1wYWRkaW5nLWVuZDogNTBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGZvcm0gLmJ1dHRvbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGZvcm0gLmJ1dHRvbi13cmFwcGVyIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogIzMzNGQ1YTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDUwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDUwcHg7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCAucm93LXN1cGVyaW9yIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5tYXgtc2l6ZS1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjg0cHgpIHtcbiAgLnNjcm9sbC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG4uYWxpc3RhLWdlc3Rpb24tYS10dS1hbGNhbmNlIHtcbiAgd2lkdGg6IDY2JTtcbn1cblxuLnBvc2l0aXZhLWNvbXBhbmlhLWRlLXNlZ3Vyb3Mge1xuICB3aWR0aDogNDUlO1xufVxuXG4uZmluZ2VyLWltZyB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtdGVybWlub3MtY29uZGljaW9uZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tZXllIHtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYnV0dG9uLWV5ZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5idXR0b24tZXllIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLmJ1dHRvbi1maW5nZXItZmFjZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmJ1dHRvbi1maW5nZXItZmFjZSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/autenticacion/autenticacion.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/autenticacion/autenticacion.page.ts ***!
      \***********************************************************/

    /*! exports provided: AutenticacionPage */

    /***/
    function srcAppPagesAutenticacionAutenticacionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutenticacionPage", function () {
        return AutenticacionPage;
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


      var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/fingerprint-aio/ngx */
      "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/commons/preferences-keys */
      "./src/app/commons/preferences-keys.ts");
      /* harmony import */


      var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/commons/user-feedback */
      "./src/app/commons/user-feedback.ts");
      /* harmony import */


      var src_app_entities_authentication_entity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/entities/authentication-entity */
      "./src/app/entities/authentication-entity.ts");
      /* harmony import */


      var src_app_services_afiliado_empresa_activo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/afiliado-empresa-activo.service */
      "./src/app/services/afiliado-empresa-activo.service.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/mensaje.service */
      "./src/app/services/mensaje.service.ts");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../storage.service */
      "./src/app/storage.service.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/index.js");

      var CapacitorHttp = _capacitor_core__WEBPACK_IMPORTED_MODULE_15__["Plugins"].CapacitorHttp;

      var AutenticacionPage = /*#__PURE__*/function () {
        function AutenticacionPage(afiliadoEmpresaActivoService, platform, alertCtrl, formBuilder, context, loadingCtrl, oneSignal, mensajeService, router, iab, faio, storageService) {
          var _this = this;

          _classCallCheck(this, AutenticacionPage);

          this.afiliadoEmpresaActivoService = afiliadoEmpresaActivoService;
          this.platform = platform;
          this.alertCtrl = alertCtrl;
          this.formBuilder = formBuilder;
          this.context = context;
          this.loadingCtrl = loadingCtrl;
          this.oneSignal = oneSignal;
          this.mensajeService = mensajeService;
          this.router = router;
          this.iab = iab;
          this.faio = faio;
          this.storageService = storageService;
          this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Cerrar',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'fullscreen',
            fullscreen: 'yes'
          };
          this.showPassword = false;
          this.passwordToggleIcon = 'eye';
          this.showFinger = false;
          this.activateFinger = false;
          this.mensajeNoAutenticado = 'Señor Trabajador su usuario o contraseña no son correctos. Por favor intente nuevamente si el error persiste comuníquese con el responsable del Sistema de Gestión en Seguridad y Salud en el Trabajo de su empresa para validar acceso al APP';
          this.submitAttempt = false;
          this.authenticationEntity = new src_app_entities_authentication_entity__WEBPACK_IMPORTED_MODULE_10__["AuthenticationEntity"]();
          this.platform.ready().then(function () {
            _this.faio.isAvailable().then(function (ava) {
              _this.storageService.set('isFingerFaceAvailable', true);

              _this.storageService.get('showLoginWithFinger').then(function (result) {
                if (result != null) {
                  _this.showFinger = result;
                }
              })["catch"](function (e) {
                console.log('error: ' + e);
              });

              _this.storageService.get('activateFinger').then(function (result) {
                if (result != null) {
                  _this.activateFinger = result;
                }
              })["catch"](function (e) {
                console.log('error: ' + e);
              });

              _this.storageService.get('autologin').then(function (result) {
                if (result != null) {
                  if (result) {
                    _this.autologin();
                  } else if (_this.showFinger && _this.activateFinger && ava == 'face') {
                    _this.launchFingerprintModal();
                  }
                }
              })["catch"](function (e) {
                console.log('error: ' + e);
              });
            })["catch"](function (error) {
              console.log(error);
            });
          });
          this.formGroup = this.formBuilder.group({
            cedulaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            nitFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            passFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
        }

        return _createClass(AutenticacionPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.validateShowFinger();
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var loading;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Autenticando...',
                      showBackdrop: true,
                      backdropDismiss: false
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    return _context.abrupt("return", loading);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "autologin",
          value: function autologin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var idEmpresa, idTrabajador, userPass, recibirNotificaciones;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this.validateShowFinger();
                    idEmpresa = localStorage.getItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["ID_EMPRESA"]);
                    idTrabajador = localStorage.getItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["ID_TRABAJADOR"]);
                    userPass = localStorage.getItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["USER_PASS"]);

                    if (!(!idEmpresa || !idTrabajador || !userPass)) {
                      _context2.next = 6;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 6:
                    this.authenticationEntity.setNitEmpresa = idEmpresa;
                    this.authenticationEntity.setDocumentoEmpleado = idTrabajador;
                    this.authenticationEntity.setPass = userPass;
                    recibirNotificaciones = localStorage.getItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["NOTIFICACIONES"]) === 'true';
                    _context2.next = 12;
                    return this.presentLoading();

                  case 12:
                    this.loading = _context2.sent;
                    this.afiliadoEmpresaActivoService.login(this.authenticationEntity).subscribe(function (response) {
                      console.log(response);

                      if (response.length === 0) {
                        _this2.loading.dismiss();
                      } else {
                        _this2.oneSignal.setSubscription(recibirNotificaciones);

                        _this2.afterLoginSuccess(response);
                      }
                    }, function (error) {
                      _this2.loading.dismiss();

                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__["alertCommunicationError"])(_this2.alertCtrl);
                    });

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "validateShowFinger",
          value: function validateShowFinger() {
            var _this3 = this;

            this.storageService.get('showLoginWithFinger').then(function (result) {
              if (result != null) {
                _this3.showFinger = result;
              } else {
                _this3.showFinger = false;
              }
            })["catch"](function (e) {
              console.log(e);
              _this3.showFinger = false;
            });
            this.storageService.get('activateFinger').then(function (result) {
              if (result != null) {
                _this3.activateFinger = result;
              } else {
                _this3.activateFinger = false;
              }
            })["catch"](function (e) {
              console.log(e);
              _this3.activateFinger = false;
            });
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    this.submitAttempt = true;

                    if (this.formGroup.valid) {
                      _context3.next = 5;
                      break;
                    }

                    Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__["presentAlert"])('Alerta', '', 'Los campos señalados son requeridos', this.alertCtrl);
                    this.cleanInputs();
                    return _context3.abrupt("return");

                  case 5:
                    this.getLoginData();
                    _context3.next = 8;
                    return this.presentLoading();

                  case 8:
                    this.loading = _context3.sent;
                    this.disableCertificateValidation();
                    this.afiliadoEmpresaActivoService.login(this.authenticationEntity).subscribe(function (response) {
                      console.log(response);

                      if (response.length === 0) {
                        _this4.loading.dismiss();

                        Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__["presentAlert"])('Alerta', '', _this4.mensajeNoAutenticado, _this4.alertCtrl);
                        _this4.submitAttempt = false;

                        _this4.formGroup.markAsPristine();

                        _this4.cleanInputs();
                      } else {
                        _this4.oneSignal.setSubscription(true);

                        localStorage.setItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["NOTIFICACIONES"], 'true');

                        _this4.storageService.set('isLoginWithFinger', false);

                        _this4.storageService.set('valueOne', _this4.authenticationEntity.getNitEmpresa);

                        _this4.storageService.set('valueTwo', _this4.authenticationEntity.getDocumentoEmpleado);

                        _this4.storageService.set('valueThree', _this4.authenticationEntity.getPass);

                        _this4.afterLoginSuccess(response);
                      }
                    }, function (error) {
                      _this4.loading.dismiss();

                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__["alertCommunicationError"])(_this4.alertCtrl);
                    });

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loginByFinger",
          value: function loginByFinger() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this5 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    this.submitAttempt = true;
                    this.getLoginFingerData();
                    _context4.next = 4;
                    return this.presentLoading();

                  case 4:
                    this.loading = _context4.sent;
                    this.afiliadoEmpresaActivoService.login(this.authenticationEntity).subscribe(function (response) {
                      if (response.length === 0) {
                        _this5.loading.dismiss();

                        Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__["presentAlert"])('Alerta', '', _this5.mensajeNoAutenticado, _this5.alertCtrl);
                        _this5.submitAttempt = false;

                        _this5.formGroup.markAsPristine();

                        _this5.cleanInputs();
                      } else {
                        _this5.oneSignal.setSubscription(true);

                        localStorage.setItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["NOTIFICACIONES"], 'true');

                        _this5.storageService.set('isLoginWithFinger', true);

                        _this5.afterLoginSuccess(response);
                      }
                    }, function (error) {
                      _this5.loading.dismiss();

                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__["alertCommunicationError"])(_this5.alertCtrl);
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "launchFingerprintModal",
          value: function launchFingerprintModal() {
            var _this6 = this;

            this.faio.isAvailable().then(function (result) {
              console.log(result);

              _this6.faio.show({
                cancelButtonTitle: 'Cancelar',
                //description: "Descripcion",
                disableBackup: true,
                title: 'INGRESAR CON HUELLA'
              }).then(function (result) {
                console.log(result);

                _this6.loginByFinger();
              })["catch"](function (error) {
                console.log(error);

                _this6.alertErrorLoginFinger();
              });
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "afterLoginSuccess",
          value: function afterLoginSuccess(result) {
            var _this7 = this;

            this.loading.dismiss();
            this.context.set(result);
            this.storeLogin();
            this.idEmpresa = localStorage.getItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["ID_EMPRESA"]);
            this.oneSignal.getIds().then(function (ids) {
              _this7.mensajeService.updateOneSignalPlayerId(ids.userId).subscribe(function () {}, function () {
                return Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_9__["alertCommunicationError"])(_this7.alertCtrl);
              });
            })["catch"](function (error) {
              return console.log('Error: ' + JSON.stringify(error));
            });
            this.pushPage();
          }
        }, {
          key: "storeLogin",
          value: function storeLogin() {
            localStorage.setItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["ID_EMPRESA"], this.authenticationEntity.getNitEmpresa);
            localStorage.setItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["ID_TRABAJADOR"], this.authenticationEntity.getDocumentoEmpleado);
            localStorage.setItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["USER_PASS"], this.authenticationEntity.getPass);
          }
        }, {
          key: "pushPage",
          value: function pushPage() {
            var page = localStorage.getItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["PAGE_TO_PUSH"]) || '/home';
            localStorage.removeItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_8__["PAGE_TO_PUSH"]);
            this.router.navigate([page]);
          }
        }, {
          key: "isCedulaInvalid",
          value: function isCedulaInvalid() {
            return !this.formGroup.controls.cedulaFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isNitInvalid",
          value: function isNitInvalid() {
            return !this.formGroup.controls.nitFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isPasswordValid",
          value: function isPasswordValid() {
            return !this.formGroup.controls.passFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "cleanInputs",
          value: function cleanInputs() {
            this.formGroup.controls.cedulaFormControl.setValue('');
            this.formGroup.controls.nitFormControl.setValue('');
            this.formGroup.controls.passFormControl.setValue('');
          }
        }, {
          key: "getLoginData",
          value: function getLoginData() {
            this.authenticationEntity.setNitEmpresa = this.formGroup.controls.nitFormControl.value;
            this.authenticationEntity.setDocumentoEmpleado = this.formGroup.controls.cedulaFormControl.value;
            this.authenticationEntity.setPass = this.formGroup.controls.passFormControl.value;
          }
        }, {
          key: "getLoginFingerData",
          value: function getLoginFingerData() {
            var _this8 = this;

            this.storageService.get('valueOne').then(function (result) {
              if (result != null) {
                _this8.authenticationEntity.setNitEmpresa = result;
              }
            })["catch"](function (e) {
              console.log('error: ' + e);
              alert('¡Lo sentimos! No pudimos iniciar sesión');
            });
            this.storageService.get('valueTwo').then(function (result) {
              if (result != null) {
                _this8.authenticationEntity.setDocumentoEmpleado = result;
              }
            })["catch"](function (e) {
              console.log('error: ' + e);
              alert('¡Lo sentimos! No pudimos iniciar sesión');
            });
            this.storageService.get('valueThree').then(function (result) {
              if (result != null) {
                _this8.authenticationEntity.setPass = result;
              }
            })["catch"](function (e) {
              console.log('error: ' + e);
              alert('¡Lo sentimos! No pudimos iniciar sesión');
            });
          }
        }, {
          key: "openGetUserUrl",
          value: function openGetUserUrl() {
            var url = this.context.getEnvUrl().call(null, 'positiva');

            if (url.indexOf('-test') > -1) {
              url = 'http://test-positiva.adacsc.co/AdminUsuarios/RegistrarSolicitudUsuarioApp';
            } else {
              url = 'https://alissta.gov.co/AdminUsuarios/RegistrarSolicitudUsuarioApp';
            }

            this.iab.create(url, '_blank', this.options);
          }
        }, {
          key: "openRestorePasswordUrl",
          value: function openRestorePasswordUrl() {
            var url = this.context.getEnvUrl().call(null, 'positiva');

            if (url.indexOf('-test') > -1) {
              url = 'http://test-positiva.adacsc.co/AdminUsuarios/RecuperarClaveUsuarioApp';
            } else {
              url = 'https://alissta.gov.co/AdminUsuarios/RecuperarClaveUsuarioApp';
            }

            this.iab.create(url, '_blank', this.options);
          }
        }, {
          key: "togglePassword",
          value: function togglePassword() {
            this.showPassword = !this.showPassword;

            if (this.passwordToggleIcon === 'eye') {
              this.passwordToggleIcon = 'eye-off';
            } else {
              this.passwordToggleIcon = 'eye';
            }
          }
        }, {
          key: "alertErrorLoginFinger",
          value: function alertErrorLoginFinger() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      message: 'Intenta nuevamente por favor',
                      buttons: [{
                        text: 'Ok'
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "disableCertificateValidation",
          value: function disableCertificateValidation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_15__["Capacitor"].platform === 'android')) {
                      _context6.next = 12;
                      break;
                    }

                    _context6.prev = 1;
                    _context6.next = 4;
                    return CapacitorHttp.setServerTrustMode({
                      mode: 'nocheck'
                    });

                  case 4:
                    console.log('AVT=>Validación de certificado deshabilitada con éxito en Android');
                    _context6.next = 10;
                    break;

                  case 7:
                    _context6.prev = 7;
                    _context6.t0 = _context6["catch"](1);
                    console.error('AVT=>Error al deshabilitar la validación de certificado en Android:', _context6.t0);

                  case 10:
                    _context6.next = 13;
                    break;

                  case 12:
                    console.warn('AVT=>La desactivación de la validación del certificado no es compatible con esta plataforma');

                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, null, [[1, 7]]);
            }));
          }
        }]);
      }();

      AutenticacionPage.ctorParameters = function () {
        return [{
          type: src_app_services_afiliado_empresa_activo_service__WEBPACK_IMPORTED_MODULE_11__["AfiliadoEmpresaActivoService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_12__["ContextService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
        }, {
          type: src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_13__["MensajeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
        }, {
          type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__["FingerprintAIO"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"]
        }];
      };

      AutenticacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-autenticacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./autenticacion.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/autenticacion/autenticacion.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./autenticacion.page.scss */
        "./src/app/pages/autenticacion/autenticacion.page.scss"))["default"]]
      })], AutenticacionPage);
      /***/
    },

    /***/
    "./src/app/services/afiliado-empresa-activo.service.ts":
    /*!*************************************************************!*\
      !*** ./src/app/services/afiliado-empresa-activo.service.ts ***!
      \*************************************************************/

    /*! exports provided: AfiliadoEmpresaActivoService */

    /***/
    function srcAppServicesAfiliadoEmpresaActivoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AfiliadoEmpresaActivoService", function () {
        return AfiliadoEmpresaActivoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/index.js");

      var AfiliadoEmpresaActivoService = /*#__PURE__*/function () {
        function AfiliadoEmpresaActivoService(http, context) {
          _classCallCheck(this, AfiliadoEmpresaActivoService);

          this.http = http;
          this.context = context;
        }

        return _createClass(AfiliadoEmpresaActivoService, [{
          key: "get",
          value: function get(idEmpresa, idTrabajador) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/autentificar_app' + '?nitEmpresa=' + idEmpresa + '&documentoEmpleado=' + idTrabajador;
            return this.http.get(url);
          }
        }, {
          key: "login",
          value: function login(authenticationEntity) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/autentificar_app';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            console.log('url: ', url);

            var response = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CapacitorHttp"].post({
              url: url,
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              },
              data: authenticationEntity.toJson()
            }).then(function (response) {
              console.log(response);
              sessionStorage.setItem('idUsuario', response.data[0].idRegistro);
            })["catch"](function (error) {
              console.log(error);
            }); //return from(response).pipe(map(response => response.data));


            return this.http.post(url, authenticationEntity.toJson(), {
              headers: headers
            });
          }
        }]);
      }();

      AfiliadoEmpresaActivoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"]
        }];
      };

      AfiliadoEmpresaActivoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AfiliadoEmpresaActivoService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-autenticacion-autenticacion-module-es5.js.map