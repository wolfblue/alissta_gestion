(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-consultar-permiso-consultar-permiso-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/consultar-permiso/consultar-permiso.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/consultar-permiso/consultar-permiso.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTConsultarPermisoConsultarPermisoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"row-superior\">\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <img src=\"assets/img/franja.png\" />\n\n            <div class=\"user-data\">\n              <img src=\"assets/img/perfil.png\" />\n              <h1>{{ user?.nombre | customTitlecase }}</h1>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <div class=\"device-uuid\">UUID del Móvil: {{getUuid()}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div style=\"display: flex; align-items: center\" class=\"toolbar\">\n    <span> <ion-img style=\"width: 32px; height: 32px; margin-right: 12px\" src=\"assets/img/material-symbols-light_box.svg\"></ion-img> </span>\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong>Consulta Permiso Trabajo</strong></ion-title>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-item>\n      <ion-label>Permiso de Trabajo</ion-label>\n      <ion-select (ionChange)=\"onChangePermiso($event)\" okText=\"Aceptar\" cancelText=\"Cancelar\">\n        <ion-item *ngFor=\"let permiso of listaTipoPermiso\">\n          <ion-select-option value=\"{{permiso.PK_ID_PermisoAlturas_MaestroTipoPermiso}}\">{{permiso.strDescripcion}}</ion-select-option>\n        </ion-item>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Inicio</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"fechaInicio\" doneText=\"Aceptar\" cancelText=\"Cancelar\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Fin</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"fechaFin\" doneText=\"Aceptar\" cancelText=\"Cancelar\"></ion-datetime>\n    </ion-item>\n    <!-- identicacion  -->\n    <ion-item>\n      <ion-label position=\"floating\">Identificación Empleado</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"identificacion\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">ID Permiso</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"permiso\"></ion-input>\n    </ion-item>\n\n    <div class=\"ion-text-center ion-padding\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">BUSCAR</button>\n    </div>\n  </div>\n\n  <ion-grid style=\"padding: 4px !important\" *ngIf=\"terminados.length > 0\">\n    <ion-row class=\"header-table\">\n      <ion-col size=\"3\">\n        <ion-label>Nombre Permiso</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label>Trabajador</ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-label>Estado</ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-label>ID</ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-label>Acciones</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of terminados | slice:(currentPage - 1) * workersPerPage:currentPage * workersPerPage\" class=\"body-table\">\n      <ion-col size=\"3\">\n        <ion-label>{{item.strNombrePermiso}}</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-label>{{item.strNombreTrabajador}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-label>{{item.strEstadoPermiso}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-label>{{item.strActa}}</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"check\">\n        <ion-icon name=\"document-attach-outline\" (click)=\"preDescargar(item.strRutaArchivo)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <br />\n  <div *ngIf=\"terminados.length > 0\" class=\"pagination-buttons ion-text-center\">\n    <ion-button style=\"height: 24px\" (click)=\"previousPage()\" [disabled]=\"currentPage === 1\"\n      ><ion-icon name=\"chevron-back\"></ion-icon\n    ></ion-button>\n    <ion-button style=\"height: 24px\" [disabled]=\"true\">{{currentPage}}/{{totalPage}}</ion-button>\n    <ion-button style=\"height: 24px\" (click)=\"nextPage()\" [disabled]=\"currentPage * workersPerPage >= terminados.length\"\n      ><ion-icon name=\"chevron-forward-outline\"></ion-icon\n    ></ion-button>\n  </div>\n  <div *ngIf=\"terminados.length > 0\" class=\"ion-padding\">Total de Permisos: {{terminados.length}}</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/consultar-permiso/consultar-permiso-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/SST/consultar-permiso/consultar-permiso-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ConsultarPermisoPageRoutingModule */

    /***/
    function srcAppPagesSSTConsultarPermisoConsultarPermisoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultarPermisoPageRoutingModule", function () {
        return ConsultarPermisoPageRoutingModule;
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


      var _consultar_permiso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./consultar-permiso.page */
      "./src/app/pages/SST/consultar-permiso/consultar-permiso.page.ts");

      var routes = [{
        path: '',
        component: _consultar_permiso_page__WEBPACK_IMPORTED_MODULE_3__["ConsultarPermisoPage"]
      }];

      var ConsultarPermisoPageRoutingModule = /*#__PURE__*/_createClass(function ConsultarPermisoPageRoutingModule() {
        _classCallCheck(this, ConsultarPermisoPageRoutingModule);
      });

      ConsultarPermisoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConsultarPermisoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/consultar-permiso/consultar-permiso.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/SST/consultar-permiso/consultar-permiso.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ConsultarPermisoPageModule */

    /***/
    function srcAppPagesSSTConsultarPermisoConsultarPermisoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultarPermisoPageModule", function () {
        return ConsultarPermisoPageModule;
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


      var _consultar_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./consultar-permiso-routing.module */
      "./src/app/pages/SST/consultar-permiso/consultar-permiso-routing.module.ts");
      /* harmony import */


      var _consultar_permiso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./consultar-permiso.page */
      "./src/app/pages/SST/consultar-permiso/consultar-permiso.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var ConsultarPermisoPageModule = /*#__PURE__*/_createClass(function ConsultarPermisoPageModule() {
        _classCallCheck(this, ConsultarPermisoPageModule);
      });

      ConsultarPermisoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _consultar_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultarPermisoPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_consultar_permiso_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarPermisoPage"]]
      })], ConsultarPermisoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/consultar-permiso/consultar-permiso.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/SST/consultar-permiso/consultar-permiso.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTConsultarPermisoConsultarPermisoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\nion-content {\n  background-color: #284e5a !important;\n}\nion-content ion-grid {\n  background-color: white;\n  padding: 0 !important;\n}\nion-content ion-grid ion-row ion-col {\n  --ion-grid-column-padding: 0;\n}\nion-content ion-grid ion-row ion-col ion-row ion-col img {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-grid ion-row ion-col ion-row ion-col div {\n  max-width: 80%;\n  float: right;\n  display: flex;\n}\nion-content ion-grid ion-row ion-col ion-row ion-col div h1 {\n  margin-top: 1rem;\n  margin-bottom: 0;\n  font-size: 16px;\n}\nion-content ion-grid ion-row ion-col ion-row ion-col span {\n  float: right;\n  color: #96a0ac;\n}\ndiv.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\n.header-table {\n  font-size: 0.65rem;\n  font-weight: bold;\n  background-color: #b1b7bd;\n  color: black;\n  text-align: center;\n  padding: 2px;\n  border: 1px solid #b1b7bd;\n  border-radius: 5px 5px 0px 0px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin: 0 auto;\n  align-items: center;\n}\n.body-table {\n  font-size: 0.5rem;\n  font-weight: 400;\n  background-color: #e9ecef;\n  color: black;\n  text-align: center;\n  align-items: center;\n  padding-bottom: 2px;\n  border: 1px solid #b1b7bd;\n  min-height: 42px;\n}\n.body-table .check {\n  display: flex;\n  justify-content: space-evenly;\n  color: var(--ion-color-primary);\n  font-size: 24px;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2NvbnN1bHRhci1wZXJtaXNvL2NvbnN1bHRhci1wZXJtaXNvLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEIsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURURjtBQ1lBLHVDQUFBO0FBNkRBOzs7RUFBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEOUVGO0FDaUZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsOEJBQUE7QURuRkY7QUNzRkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRG5GRjtBQ3NGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsaUNBQUE7RUFFQSxpQ0FBQTtFQUVBLDhCQUFBO0FEM0ZGO0FBek1BO0VBQ0Usb0NBQUE7QUE0TUY7QUExTUU7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0FBNE1KO0FBek1NO0VBQ0UsNEJBQUE7QUEyTVI7QUF2TVk7RUFDRSxhQ3FFSztFRHBFTCxjQ29FSztBRHFJbkI7QUF0TVk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUF3TWQ7QUF0TWM7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUN1REo7QURpSlo7QUFwTVk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQXNNZDtBQTdMQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFnTUY7QUEvTEU7RUFDRSxXQUFBO0FBaU1KO0FBL0xFO0VBQ0UsMENBQUE7QUFpTUo7QUE3TEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBZ01GO0FBN0xBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFnTUY7QUEvTEU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFpTUo7QUE3TEE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBZ01GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2NvbnN1bHRhci1wZXJtaXNvL2NvbnN1bHRhci1wZXJtaXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuLyoqIFZhcmlhYmxlcyBkZSBsYSB2ZXJzacOzbiBhbnRlcmlvciAqKi9cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xufVxuXG4uaW9zIGJvZHkuZGFyayBpb24tbW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg0ZTVhICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1yb3cgaW9uLWNvbCBpbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tcm93IGlvbi1jb2wgZGl2IHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tcm93IGlvbi1jb2wgZGl2IGgxIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1yb3cgaW9uLWNvbCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzk2YTBhYztcbn1cblxuZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjYmViMmIyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi50b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZGl2LnRvb2xiYXIudG9vbGNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5oZWFkZXItdGFibGUge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFiN2JkO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiN2JkO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2R5LXRhYmxlIHtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiN2JkO1xuICBtaW4taGVpZ2h0OiA0MnB4O1xufVxuLmJvZHktdGFibGUgLmNoZWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn0iLCIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuLyoqIFZhcmlhYmxlcyBkZSBsYSB2ZXJzacOzbiBhbnRlcmlvciAqKi9cblxuJGZvbnQtcGF0aDogJy4uL2Fzc2V0cy9mb250cyc7XG4kYXBwLWRpcmVjdGlvbjogbHRyO1xuJGZvbnQtc2l6ZTogMTZweDtcbiRmb250LXdlaWdodDogNDAwO1xuJGNvbnRlbnQtaW1nLXNpemU6IDIuNXJlbTtcblxuJGNvbG9yczogKFxuICBiYXNlLTE6ICNlNmVhZWUsXG4gIGJhc2UtMjogI2NhZDFkYSxcbiAgYmFzZS0zOiAjYWZiOGM0LFxuICBiYXNlLTQ6ICM5NmEwYWMsXG4gIGJhc2UtNTogIzdlOGE5NyxcbiAgYmFzZS02OiAjNjg3Njg0LFxuICBiYXNlLTc6ICM1MjYyNzAsXG4gIGJhc2UtODogIzI4NGU1YSxcbiAgcHJpbWFyeTogI2ZmNzUwMCxcbiAgYnRuLXByaW1hcnk6ICM1OWJhYTgsXG4pO1xuXG4kdGV4dC1pbnB1dC1pb3Mtc2hvdy1mb2N1ZS1oaWdobGlnaHQ6IGZhbHNlICFkZWZhdWx0O1xuJGxhYmVsLWlvcy10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuJHBpY2tlci1pb3Mtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1pb3MtaWNvbi1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRyYWRpby1pb3MtY29sb3Itb246IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcGlja2VyLWlvcy1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24taW9zLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiR0b2dnbGUtaW9zLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiRhY3Rpb24tc2hlZXQtaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctaW9zLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtYnViYmxlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNyZXNjZW50LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWRvdHMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItaW9zLXdpZHRoOiAzMTBweDtcblxuJHRleHQtaW5wdXQtbWQtc2hvdy1mb2N1cy1oaWdobGlnaHQ6IGZhbHNlICFkZWZhdWx0O1xuJGxhYmVsLW1kLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLW1kLW9wdGlvbi1zZWxlY3RlZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzZWxlY3QtbWQtaWNvbi1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRyYWRpby1tZC1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItbWQtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYnV0dG9uLW1kLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1tZC1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1tZC1hY3RpdmUtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtbWQtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtbWQtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY2lyY2xlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWNyZXNjZW50LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWlvcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwb3BvdmVyLW1kLXdpZHRoOiAzMTBweDtcblxuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG5cbiAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG5cbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xufVxuXG4uaW9zIGJvZHkuZGFyayBpb24tbW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG5cbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/SST/consultar-permiso/consultar-permiso.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/SST/consultar-permiso/consultar-permiso.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ConsultarPermisoPage */

    /***/
    function srcAppPagesSSTConsultarPermisoConsultarPermisoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsultarPermisoPage", function () {
        return ConsultarPermisoPage;
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


      var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/SST/data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/SST/data.service */
      "./src/app/services/SST/data.service.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var ConsultarPermisoPage = /*#__PURE__*/function () {
        function ConsultarPermisoPage(data, utils, alertController, context, dataService, device, router) {
          _classCallCheck(this, ConsultarPermisoPage);

          this.data = data;
          this.utils = utils;
          this.alertController = alertController;
          this.context = context;
          this.dataService = dataService;
          this.device = device;
          this.router = router;
          this.terminados = [];
          this.listaTipoPermiso = [];
          this.currentPage = 1;
          this.workersPerPage = 10;
          this.totalPage = 0;
        }

        return _createClass(ConsultarPermisoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.context.get().then(function (c) {
              _this.user = c.trabajador;
            });
            this.tiposDePermiso();
          }
        }, {
          key: "getUuid",
          value: function getUuid() {
            return this.device.uuid;
          }
        }, {
          key: "preDescargar",
          value: function preDescargar(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    alert = this.alertController.create({
                      message: '¿Desea descargar el archivo?',
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel'
                      }, {
                        text: 'Descargar',
                        handler: function handler() {
                          window.open(link, '_system');
                        }
                      }]
                    });
                    _context.next = 3;
                    return alert;

                  case 3:
                    _context.sent.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onChangePermiso",
          value: function onChangePermiso(event) {
            this.tipoPermiso = event.detail.value;
          }
        }, {
          key: "tiposDePermiso",
          value: function tiposDePermiso() {
            var _this2 = this;

            this.data.open().then(function () {
              _this2.data.getAllTipoPermiso().subscribe({
                next: function next(listaTipoPermiso) {
                  _this2.listaTipoPermiso = listaTipoPermiso;
                  console.log('Lista de tipo de permiso:', _this2.listaTipoPermiso);
                },
                error: function error(_error) {
                  console.error('Error al obtener los tipos de permiso:', _error);

                  _this2.data.close();
                },
                complete: function complete() {
                  console.log('Tipos de permiso completados');
                }
              });
            });
          }
        }, {
          key: "continuar",
          value: function continuar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var user, fechaInicio, fechaFin, tipoPermiso, numUserEmpleado, permiso, _yield$this$dataServi, status, data, shorted;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    _context2.next = 5;
                    return this.context.get();

                  case 5:
                    user = _context2.sent;
                    fechaInicio = this.fechaInicio ? this.formatearFecha(this.fechaInicio.toString()) : '';
                    fechaFin = this.fechaFin ? this.formatearFecha(this.fechaFin.toString()) : '';
                    tipoPermiso = this.tipoPermiso ? this.tipoPermiso : '';
                    numUserEmpleado = this.identificacion ? this.identificacion : '';
                    permiso = this.permiso ? this.permiso : ''; //  datos no obligatorios para dataActa fechaInicio, fechaFin, tipoPermiso

                    this.dataActa = {
                      intTipoPermiso: tipoPermiso,
                      strFechaInicio: fechaInicio,
                      strFechaFin: fechaFin,
                      strIdentificacionTrabajador: numUserEmpleado,
                      strNumIdentificacionUsuario: user['_trabajador'].id.toString(),
                      strTipoDocEmpresa: user['_empresa'].tipoDocumento,
                      strNumIdentificacionEmpresa: user['_empresa'].id.toString(),
                      strIdActa: permiso
                    };
                    _context2.next = 14;
                    return this.dataService.listarActas(this.dataActa);

                  case 14:
                    _yield$this$dataServi = _context2.sent;
                    status = _yield$this$dataServi.status;
                    data = _yield$this$dataServi.data;

                    if (status === 200) {
                      if (data.length === 0) {
                        this.alertController.create({
                          header: 'Información',
                          message: 'No se encontraron resultados',
                          buttons: ['Aceptar']
                        }).then(function (alert) {
                          alert.present();
                        });
                      }

                      console.log('data');
                      shorted = data.sort(function (a, b) {
                        return Number(b['strActa']) - Number(a['strActa']);
                      });
                      this.terminados = shorted;
                      this.totalPage = Math.ceil(this.terminados.length / this.workersPerPage);
                    }

                    _context2.next = 23;
                    break;

                  case 20:
                    _context2.prev = 20;
                    _context2.t0 = _context2["catch"](0);
                    console.log(_context2.t0);

                  case 23:
                    _context2.prev = 23;
                    this.utils.dismissLoading();
                    return _context2.finish(23);

                  case 26:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[0, 20, 23, 26]]);
            }));
          }
        }, {
          key: "formatearFecha",
          value: function formatearFecha(fecha) {
            var date = new Date(fecha);
            var dia = date.getDate();
            var mes = date.getMonth() + 1;
            var anio = date.getFullYear();
            var fechaFormateada = "".concat(dia.toString().padStart(2, '0'), "/").concat(mes.toString().padStart(2, '0'), "/").concat(anio.toString());
            return fechaFormateada;
          }
        }, {
          key: "previousPage",
          value: function previousPage() {
            if (this.currentPage > 1) {
              this.currentPage--;
            }
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            if (this.currentPage * this.workersPerPage < this.terminados.length) {
              this.currentPage++;
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos']);
          }
        }]);
      }();

      ConsultarPermisoPage.ctorParameters = function () {
        return [{
          type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_5__["DataBaseService"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_7__["ContextService"]
        }, {
          type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ConsultarPermisoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultar-permiso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./consultar-permiso.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/consultar-permiso/consultar-permiso.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./consultar-permiso.page.scss */
        "./src/app/pages/SST/consultar-permiso/consultar-permiso.page.scss"))["default"]]
      })], ConsultarPermisoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-consultar-permiso-consultar-permiso-module-es5.js.map