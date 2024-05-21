(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-preview-preview-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/preview/preview.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/preview/preview.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTPreviewPreviewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong>Elaboración del permiso de trabajo</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/iconamoon_profile-fill.svg\"></ion-img> </span>\n    <ion-title>Trabajadores</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <!-- nombre y cedula -->\n\n    <div style=\"display: flex; flex-direction: column\" *ngFor=\"let item of listaTrabajadoresMigrados\">\n      <div class=\"nombre\">{{item.strNombreTrabajador}}</div>\n      <div class=\"info\">\n        <div>{{item.strTipoDocumento}} {{item.strNumeroDocumeto}}</div>\n        <div class=\"cargo\">{{recortarCargo(item.strCargoTrabajador)}}</div>\n      </div>\n      <br />\n    </div>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Información de la Actividad</ion-title>\n  </div>\n  <!-- tittule input no editable -->\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Ubicación del trabajo</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"strUbicacionTrabajo\" disabled></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Altura de la Actividad</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"strgAlturaActividad\" disabled></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Fecha y Hora Actividad Inicio</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"strFechaYHoraInicioAct\" disabled></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Fecha y Hora Actividad Fin</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"strFechaYHoraFinAct\" disabled></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <!-- tittule input no editable -->\n  <div class=\"ion-padding\">\n    <ion-row *ngFor=\"let question of cuestionario\">\n      <ion-card>\n        <ion-card-title style=\"color: #f58500 !important; opacity: 1 !important; font-size: 16px\"\n          >{{question.strDescripcion}}</ion-card-title\n        >\n        <ion-card-content>\n          <ion-radio-group [(ngModel)]=\"question.strRespuesta\" class=\"horizontal\" mode=\"md\">\n            <ion-item>\n              <ion-label>SI</ion-label>\n              <ion-radio slot=\"start\" value=\"SI\" [disabled]=\"question.strRespuesta !== 'SI'\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>NO</ion-label>\n              <ion-radio slot=\"start\" value=\"NO\" [disabled]=\"question.strRespuesta !== 'NO'\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>NA</ion-label>\n              <ion-radio slot=\"start\" value=\"NA\" [disabled]=\"question.strRespuesta !== 'NA'\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </div>\n\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/fluent_organization-28-filled.svg\"></ion-img> </span>\n    <ion-title>Descripción de la Actividad</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Tipo de trabajo</ion-label>\n        <p style=\"margin-top: 30px; margin-bottom: 0; font-size: 14px; color: #7e7e7e\">{{strTipoTrabajo}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Antes de la actividad</ion-label>\n        <p style=\"margin-top: 30px; margin-bottom: 0; font-size: 14px; color: #7e7e7e\">{{strAntesActividad}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Después de la actividad</ion-label>\n        <p style=\"margin-top: 30px; margin-bottom: 0; font-size: 14px; color: #7e7e7e\">{{strDespuesActividad}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Durante la actividad</ion-label>\n        <p style=\"margin-top: 30px; margin-bottom: 0; font-size: 14px; color: #7e7e7e\">{{strDuranteActividad}}</p>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <ion-icon style=\"width: 24px; height: 24px\" name=\"shield-half-outline\"></ion-icon>\n    <ion-title>Proteccion Colectiva e Individual</ion-title>\n  </div>\n  <div>\n    <ion-list>\n      <ion-card>\n        <ng-container *ngFor=\"let tituloPadre of getTitulosPadres()\">\n          <ion-card-header style=\"padding-bottom: 0px\">\n            <ion-card-title style=\"color: #f58500 !important; opacity: 1 !important; font-size: 16px\">{{ tituloPadre }}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div style=\"padding-left: 8px\" *ngFor=\"let hijo of maestrosOrganizados[tituloPadre]\">\n              <p style=\"font-size: 14px; font-weight: 500\">-{{ hijo.strDescricionPermiso }}</p>\n            </div>\n          </ion-card-content>\n        </ng-container>\n      </ion-card>\n    </ion-list>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <ion-title>Observaciones</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list>\n      <ion-item>\n        <ion-label style=\"color: #f58500 !important; opacity: 1 !important\" position=\"floating\">Observaciones</ion-label>\n        <ion-textarea rows=\"5\" type=\"text\" [(ngModel)]=\"strObservaciones\" disabled></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <ion-title>Responsables</ion-title>\n  </div>\n\n  <ion-card class=\"img\">\n    <img alt=\"Responsables trabajos\" [src]=\" 'assets/img/firma-no.png'\" />\n    <ion-card-header>\n      <ion-card-title>{{responsables1?.strNombreCompleto}}</ion-card-title>\n      <ion-card-subtitle>{{responsables1?.strTipoDocumento}} : {{responsables1?.strDocumentoIdentificacion}}</ion-card-subtitle>\n      <ion-card-subtitle>Autorizado</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n  <ion-card class=\"img\">\n    <img\n      alt=\"Responsables trabajos\"\n      [src]=\"responsables2?.strFirmaBase64  !==  '' ? 'data:image/png;base64,' + responsables2?.strFirmaBase64 : 'assets/img/firma-no.png'\"\n    />\n    <ion-card-header>\n      <ion-card-title>{{responsables2?.strNombreCompleto}}</ion-card-title>\n      <ion-card-subtitle>{{responsables2?.strTipoDocumento}} : {{responsables2?.strDocumentoIdentificacion}}</ion-card-subtitle>\n      <ion-card-subtitle>Coordinador Alturas</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n  <ion-card class=\"img\">\n    <img\n      alt=\"Responsables trabajos\"\n      [src]=\"responsables3?.strFirmaBase64  !==  '' ? 'data:image/png;base64,' + responsables3?.strFirmaBase64 : 'assets/img/firma-no.png'\"\n    />\n    <ion-card-header>\n      <ion-card-title>{{responsables3?.strNombreCompleto}}</ion-card-title>\n      <ion-card-subtitle>{{responsables3?.strTipoDocumento}} : {{responsables3?.strDocumentoIdentificacion}}</ion-card-subtitle>\n      <ion-card-subtitle>Responsable Plan Emergecia</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n  <div class=\"toolbar toolcontent\">\n    <ion-title>Autorizado</ion-title>\n  </div>\n  <ion-card>\n    <ion-card-header style=\"align-items: center; text-align: center\">\n      <ion-card-subtitle style=\"font-size: 19px\" [ngClass]=\"{'autorizado-si': autorizado === 'SI', 'autorizado-no': autorizado === 'NO'}\">\n        {{autorizado}} <ion-icon [name]=\"autorizado === 'SI' ? 'happy' : 'sad'\"></ion-icon>\n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n  <div class=\"ion-text-center ion-padding\">\n    <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"back()\">Regresar</button>\n  </div>\n  <br />\n  <br />\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/preview/preview-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/SST/preview/preview-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: PreviewPageRoutingModule */

    /***/
    function srcAppPagesSSTPreviewPreviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewPageRoutingModule", function () {
        return PreviewPageRoutingModule;
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


      var _preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./preview.page */
      "./src/app/pages/SST/preview/preview.page.ts");

      var routes = [{
        path: '',
        component: _preview_page__WEBPACK_IMPORTED_MODULE_3__["PreviewPage"]
      }];

      var PreviewPageRoutingModule = /*#__PURE__*/_createClass(function PreviewPageRoutingModule() {
        _classCallCheck(this, PreviewPageRoutingModule);
      });

      PreviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PreviewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/preview/preview.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/SST/preview/preview.module.ts ***!
      \*****************************************************/

    /*! exports provided: PreviewPageModule */

    /***/
    function srcAppPagesSSTPreviewPreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewPageModule", function () {
        return PreviewPageModule;
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


      var _preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./preview-routing.module */
      "./src/app/pages/SST/preview/preview-routing.module.ts");
      /* harmony import */


      var _preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./preview.page */
      "./src/app/pages/SST/preview/preview.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var PreviewPageModule = /*#__PURE__*/_createClass(function PreviewPageModule() {
        _classCallCheck(this, PreviewPageModule);
      });

      PreviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreviewPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_preview_page__WEBPACK_IMPORTED_MODULE_6__["PreviewPage"]]
      })], PreviewPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/preview/preview.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/SST/preview/preview.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTPreviewPreviewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nion-row.question {\n  margin-bottom: 14px;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-row.question ion-row {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n}\nion-radio-group.horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n}\nion-radio-group.horizontal ion-item {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio-group.horizontal ion-item ion-label {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\nion-radio {\n  margin-right: 12px !important;\n}\nion-card-content,\nion-card {\n  /* quitar padin izq der */\n  padding: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  width: 100%;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n}\nion-card-title {\n  padding: 8px;\n  justify-content: center;\n  text-align: justify;\n}\nion-card.img {\n  text-align: center;\n}\n.mostrar-usuarios {\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-text-color, #000);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nlabel.title-orange {\n  color: #f58500 !important;\n  opacity: 1 !important;\n}\n.autorizado-si {\n  color: green;\n}\n.autorizado-no {\n  color: red;\n}\ndiv .nombre {\n  font-weight: bold;\n}\ndiv .info {\n  align-items: flex-start !important;\n  display: flex !important;\n  justify-content: space-between !important;\n}\ndiv .cargo {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL3ByZXZpZXcvcHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7QUFFSjtBQUFFO0VBQ0UsMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVGO0FBREU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFHSjtBQURFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHRjtBQUZFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBSUo7QUFISTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUtOO0FBREE7RUFDRSw2QkFBQTtBQUlGO0FBRkE7O0VBRUUseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFLRjtBQUZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFLRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLRjtBQUZBO0VBQ0Usa0JBQUE7QUFLRjtBQUZBO0VBQ0UsV0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUtGO0FBRkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBS0Y7QUFIQTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFNRjtBQUhBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQU1GO0FBSEE7RUFDRSxZQUFBO0FBTUY7QUFIQTtFQUNFLFVBQUE7QUFNRjtBQUZFO0VBQ0UsaUJBQUE7QUFLSjtBQUZFO0VBQ0Usa0NBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0FBSUo7QUFERTtFQUNFLGlCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvcHJldmlldy9wcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2JlYjJiMjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJi50b29sY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuaW9uLXJvdy5xdWVzdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbmlvbi1yYWRpby1ncm91cC5ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGlvbi1pdGVtIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuaW9uLXJhZGlvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1jb250ZW50LFxuaW9uLWNhcmQge1xuICAvKiBxdWl0YXIgcGFkaW4gaXpxIGRlciAqL1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBwYWRkaW5nOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5pb24tY2FyZC5pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb3N0cmFyLXVzdWFyaW9zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItdHJhYmFqYWRvcmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmxhYmVsLnRpdGxlLW9yYW5nZSB7XG4gIGNvbG9yOiAjZjU4NTAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLmF1dG9yaXphZG8tc2kge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5hdXRvcml6YWRvLW5vIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuZGl2IHtcbiAgLm5vbWJyZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuaW5mbyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2FyZ28ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/SST/preview/preview.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/SST/preview/preview.page.ts ***!
      \***************************************************/

    /*! exports provided: PreviewPage */

    /***/
    function srcAppPagesSSTPreviewPreviewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreviewPage", function () {
        return PreviewPage;
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


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /* harmony import */


      var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/modal-trabajadores/modal-trabajadores.component */
      "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");

      var PreviewPage = /*#__PURE__*/function () {
        function PreviewPage(saveDataService, utils, questionService, router, modalController) {
          _classCallCheck(this, PreviewPage);

          this.saveDataService = saveDataService;
          this.utils = utils;
          this.questionService = questionService;
          this.router = router;
          this.modalController = modalController;
          /*  */

          this.listaTrabajadoresMigrados = [];
          /*  */

          this.strUbicacionTrabajo = '';
          /*  */

          this.strgAlturaActividad = '';
          this.strFechaYHoraInicioAct = '';
          this.strFechaYHoraFinAct = '';
          this.cuestionario = [];
          this.listaAnexoImagenes = [];
          this.maestrosOrganizados = {};
          this.maestrosPadres = [];
          this.tituloMaestro = [];
          this.strTipoTrabajo = '';
          this.strAntesActividad = '';
          this.strDespuesActividad = '';
          this.strDuranteActividad = '';
          this.strObservaciones = '';
          this.responsables = {};
          this.autorizado = '';
        }

        return _createClass(PreviewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "verTrabajadores",
          value: function verTrabajadores() {
            this.modalController.create({
              component: src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_7__["ModalTrabajadoresComponent"]
            }).then(function (modal) {
              modal.present();
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var dataUrl, listaCompleta, i, _loop, j;

              return _regeneratorRuntime().wrap(function _callee$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    console.log('getData');
                    _context2.next = 4;
                    return this.questionService.getAllMaestroPadres();

                  case 4:
                    this.maestrosPadres = _context2.sent;
                    _context2.next = 7;
                    return this.utils.presentLoading();

                  case 7:
                    dataUrl = history.state.data;

                    if (dataUrl) {
                      console.log('dataUrl');
                      this.saveDataService.setData(dataUrl);
                      this.data = this.saveDataService.getData();
                    } else {
                      console.log('dataUrl else');
                      this.data = this.saveDataService.getData();
                      this.saveDataService.setData(this.data);
                    }

                    console.log(this.data);
                    this.listaAnexoImagenes = this.data['listaAnexoImagenes'];
                    this.listaTrabajadoresMigrados = this.data['listaTrabajadoresMigrados'];
                    this.strUbicacionTrabajo = this.data['strUbicacionTrabajo'];
                    this.strgAlturaActividad = "".concat(this.data['dblAlturaActividad'].toString(), " metros");
                    this.strAntesActividad = this.data['strAntesActividad'];
                    this.strDespuesActividad = this.data['strDespuesActividad'];
                    this.strDuranteActividad = this.data['strDuranteActividad'];
                    this.data['strFechaYHoraInicioAct'] = this.data['strFechaRegistro'];
                    this.strFechaYHoraInicioAct = this.data['strFechaYHoraInicioAct'];
                    this.strFechaYHoraFinAct = this.data['strFechaYHoraFinAct'];
                    listaCompleta = [this.data['listaItemSeleccionados']];
                    this.cuestionario = this.data['listaMaestroCuestionario'];
                    this.strObservaciones = this.data['strObservaciones'];
                    this.strTipoTrabajo = this.data['strTipoTrabajo'];
                    i = 0;

                  case 25:
                    if (!(i < listaCompleta.length)) {
                      _context2.next = 36;
                      break;
                    }

                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                      var hijos, padre;
                      return _regeneratorRuntime().wrap(function _loop$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            hijos = listaCompleta[i][j];
                            padre = _this.maestrosPadres.find(function (padre) {
                              return padre.Pk_ID_PermisoAlturas_ItemProteccionPadre == hijos[0].Fk_ID_PermisoAlturas_ItemProteccionPadre;
                            });

                            if (_this.maestrosOrganizados[padre.strDescricionPermiso]) {
                              _this.maestrosOrganizados[padre.strDescricionPermiso].push(hijos[j]);
                            } else {
                              _this.maestrosOrganizados[padre.strDescricionPermiso] = hijos;
                            }

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }, _loop);
                    });
                    j = 0;

                  case 28:
                    if (!(j < listaCompleta[i].length)) {
                      _context2.next = 33;
                      break;
                    }

                    return _context2.delegateYield(_loop(), "t0", 30);

                  case 30:
                    j++;
                    _context2.next = 28;
                    break;

                  case 33:
                    i++;
                    _context2.next = 25;
                    break;

                  case 36:
                    // console.log(this.data['edAutorizadoPermisoTrabajo']);
                    // this.responsables = {
                    //   'Responsable de la Actividad': this.data['edAutorizadoPermisoTrabajo'],
                    //   'Coordinador Alturas': this.data['edCoordinadorTrabajoAlturas'],
                    //   'Responsable Plan Emergecia': this.data['edResponsableActivarPlanEmergencia'],
                    // };
                    // this.keysArray = Object.keys(this.responsables);
                    // for (let i = 0; i < this.keysArray.length; i++) {
                    //   console.log(JSON.stringify(this.responsables[this.keysArray[i]]));
                    // }
                    this.responsables1 = this.data['edAutorizadoPermisoTrabajo'];
                    this.responsables2 = this.data['edCoordinadorTrabajoAlturas'];
                    this.responsables3 = this.data['edResponsableActivarPlanEmergencia'];
                    console.log(JSON.stringify(this.responsables1));
                    this.autorizado = this.data['Autorizado'] === 'Autorizado 😀' ? 'SI' : 'NO';
                    this.utils.dismissLoading();

                  case 42:
                    _context2.prev = 42;
                    this.utils.dismissLoading();
                    return _context2.finish(42);

                  case 45:
                  case "end":
                    return _context2.stop();
                }
              }, _callee, this, [[0,, 42, 45]]);
            }));
          }
        }, {
          key: "getTitulosPadres",
          value: function getTitulosPadres() {
            return Object.keys(this.maestrosOrganizados);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos'], {
              state: {
                data: this.data
              }
            });
          }
        }, {
          key: "recortarCargo",
          value: function recortarCargo(cargo) {
            var maxLength = 20;

            if (cargo.length > maxLength) {
              return "".concat(cargo.slice(0, maxLength), "...");
            }

            return cargo;
          }
        }]);
      }();

      PreviewPage.ctorParameters = function () {
        return [{
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__["SaveDataService"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]
        }, {
          type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_4__["DataQuestionsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      PreviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./preview.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/preview/preview.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./preview.page.scss */
        "./src/app/pages/SST/preview/preview.page.scss"))["default"]]
      })], PreviewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-preview-preview-module-es5.js.map