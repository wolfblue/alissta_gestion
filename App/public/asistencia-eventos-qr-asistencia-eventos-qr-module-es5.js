(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asistencia-eventos-qr-asistencia-eventos-qr-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAsistenciaEventosQrAsistenciaEventosQrPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <app-title-bar [title]=\"'ASISTENCIA EVENTOS POSITIVA'\" [iconName]=\"'assets/icon/eventos.svg'\">\n  </app-title-bar>\n\n  <qrcode [qrdata]=\"qrData\" *ngIf=\"qrData\"></qrcode>\n\n  <div class=\"button-wrapper\">\n    <ion-button routerLink=\"/home\">Regresar</ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"opcion\" *ngIf=\"opcion\"></app-menu-operativo>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: AsistenciaEventosQrPageRoutingModule */

    /***/
    function srcAppPagesAsistenciaEventosQrAsistenciaEventosQrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsistenciaEventosQrPageRoutingModule", function () {
        return AsistenciaEventosQrPageRoutingModule;
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


      var _asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./asistencia-eventos-qr.page */
      "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts");

      var routes = [{
        path: '',
        component: _asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_3__["AsistenciaEventosQrPage"]
      }];

      var AsistenciaEventosQrPageRoutingModule = /*#__PURE__*/_createClass(function AsistenciaEventosQrPageRoutingModule() {
        _classCallCheck(this, AsistenciaEventosQrPageRoutingModule);
      });

      AsistenciaEventosQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AsistenciaEventosQrPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AsistenciaEventosQrPageModule */

    /***/
    function srcAppPagesAsistenciaEventosQrAsistenciaEventosQrModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsistenciaEventosQrPageModule", function () {
        return AsistenciaEventosQrPageModule;
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


      var _asistencia_eventos_qr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./asistencia-eventos-qr-routing.module */
      "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr-routing.module.ts");
      /* harmony import */


      var _asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./asistencia-eventos-qr.page */
      "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts");

      var AsistenciaEventosQrPageModule = /*#__PURE__*/_createClass(function AsistenciaEventosQrPageModule() {
        _classCallCheck(this, AsistenciaEventosQrPageModule);
      });

      AsistenciaEventosQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _asistencia_eventos_qr_routing_module__WEBPACK_IMPORTED_MODULE_3__["AsistenciaEventosQrPageRoutingModule"]],
        declarations: [_asistencia_eventos_qr_page__WEBPACK_IMPORTED_MODULE_4__["AsistenciaEventosQrPage"]]
      })], AsistenciaEventosQrPageModule);
      /***/
    },

    /***/
    "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAsistenciaEventosQrAsistenciaEventosQrPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "qrcode {\n  display: block;\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.button-wrapper {\n  text-align: center;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNpc3RlbmNpYS1ldmVudG9zLXFyL2FzaXN0ZW5jaWEtZXZlbnRvcy1xci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNpc3RlbmNpYS1ldmVudG9zLXFyL2FzaXN0ZW5jaWEtZXZlbnRvcy1xci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJxcmNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.ts ***!
      \***************************************************************************/

    /*! exports provided: AsistenciaEventosQrPage */

    /***/
    function srcAppPagesAsistenciaEventosQrAsistenciaEventosQrPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsistenciaEventosQrPage", function () {
        return AsistenciaEventosQrPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commons/user-feedback */
      "./src/app/commons/user-feedback.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var AsistenciaEventosQrPage = /*#__PURE__*/function () {
        function AsistenciaEventosQrPage(context, datePipe, alertCtrl, router, utils) {
          _classCallCheck(this, AsistenciaEventosQrPage);

          this.context = context;
          this.datePipe = datePipe;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.utils = utils;
        }

        return _createClass(AsistenciaEventosQrPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildQRData();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.opcion = 'asistenciaEventos';
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.opcion = undefined;
          }
        }, {
          key: "buildQRData",
          value: function buildQRData() {
            var _a, _b, _c, _d;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var context, trabajador, empresa, primerNombre, segundoNombre, primerApellido, segundoApellido, nombreCompleto, fecha, data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.utils.presentLoading();

                  case 2:
                    _context.next = 4;
                    return this.context.get();

                  case 4:
                    context = _context.sent;
                    this.utils.dismissLoading();

                    if (context) {
                      _context.next = 10;
                      break;
                    }

                    Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(this.alertCtrl);
                    this.router.navigate(['/home']);
                    return _context.abrupt("return");

                  case 10:
                    trabajador = context.trabajador;
                    empresa = context.empresa;
                    primerNombre = (_a = trabajador.primerNombre) !== null && _a !== void 0 ? _a : '';
                    segundoNombre = (_b = trabajador.segundoNombre) !== null && _b !== void 0 ? _b : '';
                    primerApellido = (_c = trabajador.primerApellido) !== null && _c !== void 0 ? _c : '';
                    segundoApellido = (_d = trabajador.segundoApellido) !== null && _d !== void 0 ? _d : '';
                    nombreCompleto = "".concat(primerNombre, " ").concat(segundoNombre, " ").concat(primerApellido, " ").concat(segundoApellido);
                    nombreCompleto = nombreCompleto.replace(/\s+/g, ' ');
                    nombreCompleto = nombreCompleto.trim();
                    fecha = this.datePipe.transform(trabajador.fechaNacimiento, 'dd/MM/yyyy');
                    data = {
                      tiEmpr: empresa.tipoDocumento,
                      numEmpr: empresa.documentoEmp,
                      razonEmpr: empresa.razonSocial,
                      tiAsistente: trabajador.tipoDocumento,
                      numAsistente: "".concat(trabajador.id),
                      nomAsist: nombreCompleto,
                      sexo: trabajador.sexo === 'M' ? "Masculino" : "Femenino",
                      cargo: "3",
                      tele: "".concat(trabajador.numeroTelefono),
                      email: trabajador.correo,
                      fchnac: fecha
                    };
                    this.qrData = JSON.stringify(data);

                  case 22:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      AsistenciaEventosQrPage.ctorParameters = function () {
        return [{
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_6__["ContextService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
        }];
      };

      AsistenciaEventosQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-asistencia-eventos-qr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./asistencia-eventos-qr.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./asistencia-eventos-qr.page.scss */
        "./src/app/pages/asistencia-eventos-qr/asistencia-eventos-qr.page.scss"))["default"]]
      })], AsistenciaEventosQrPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=asistencia-eventos-qr-asistencia-eventos-qr-module-es5.js.map