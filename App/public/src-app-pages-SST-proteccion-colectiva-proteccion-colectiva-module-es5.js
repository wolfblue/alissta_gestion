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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-proteccion-colectiva-proteccion-colectiva-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTProteccionColectivaProteccionColectivaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> Registro Permiso</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <ion-icon style=\"width: 24px; height: 24px\" name=\"shield-half-outline\"></ion-icon>\n    <ion-title>Proteccion Colectiva e Individual</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-list *ngFor=\"let maestro of maestroPadre\">\n      <ion-card-header>\n        <ion-card-title>{{maestro.strDescricionPermiso}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-item\n        *ngIf=\"tituloEitmes[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre].length ===0\"\n        class=\"ion-padding-start ion-padding-end border\"\n      >\n        <ion-label>Ésta protección colectiva no tiene items creados</ion-label>\n        <ion-select multiple=\"true\" cancelText=\"Cancelar\" okText=\"Aceptar\"></ion-select>\n      </ion-item>\n      <ion-item\n        *ngIf=\"tituloEitmes[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre].length !==0\"\n        class=\"ion-padding-start ion-padding-end border\"\n      >\n        <ionic-selectable\n          item-content\n          [(ngModel)]=\"selectedItems[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre]\"\n          [itemValueField]=\"'Pk_ID_PermisoAlturas_ProteccionHijos'\"\n          [itemTextField]=\"'strDescricionPermiso'\"\n          [items]=\"tituloEitmes[maestro.Pk_ID_PermisoAlturas_ItemProteccionPadre]\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\"\n          [isMultiple]=\"true\"\n          closeButtonText=\"Cancelar\"\n          closeButtonSlot=\"end\"\n          placeholder=\"Seleccione...\"\n          [searchFailText]=\"'No encontramos el item buscado'\"\n          searchPlaceholder=\"Buscar\"\n        >\n        </ionic-selectable>\n      </ion-item>\n    </ion-list>\n    <ion-col class=\"question\">\n      <ion-card-header>\n        <ion-card-title> <strong class=\"requieredQues\">*</strong> Observaciones</ion-card-title>\n      </ion-card-header>\n      <div *ngIf=\"submited && !observaciones\" class=\"error-message\">Campo requerido</div>\n      <ion-card-content>\n        <ion-row>\n          <ion-textarea (ionChange)=\"actualizarContador($event)\" [(ngModel)]=\"observaciones\" maxlength=\"2000\"></ion-textarea>\n        </ion-row>\n        <p class=\"counter\">{{contadorObs}}/2000</p>\n      </ion-card-content>\n    </ion-col>\n\n    <div class=\"ion-text-center ion-padding\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva-routing.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: ProteccionColectivaPageRoutingModule */

    /***/
    function srcAppPagesSSTProteccionColectivaProteccionColectivaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProteccionColectivaPageRoutingModule", function () {
        return ProteccionColectivaPageRoutingModule;
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


      var _proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./proteccion-colectiva.page */
      "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts");

      var routes = [{
        path: '',
        component: _proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_3__["ProteccionColectivaPage"]
      }, {
        path: 'evidencia',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-SST-evidencia-evidencia-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-SST-evidencia-evidencia-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/SST/evidencia/evidencia.module */
          "./src/app/pages/SST/evidencia/evidencia.module.ts")).then(function (m) {
            return m.EvidenciaPageModule;
          });
        }
      }];

      var ProteccionColectivaPageRoutingModule = /*#__PURE__*/_createClass(function ProteccionColectivaPageRoutingModule() {
        _classCallCheck(this, ProteccionColectivaPageRoutingModule);
      });

      ProteccionColectivaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProteccionColectivaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ProteccionColectivaPageModule */

    /***/
    function srcAppPagesSSTProteccionColectivaProteccionColectivaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProteccionColectivaPageModule", function () {
        return ProteccionColectivaPageModule;
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


      var _proteccion_colectiva_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./proteccion-colectiva-routing.module */
      "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva-routing.module.ts");
      /* harmony import */


      var _proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./proteccion-colectiva.page */
      "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var ProteccionColectivaPageModule = /*#__PURE__*/_createClass(function ProteccionColectivaPageModule() {
        _classCallCheck(this, ProteccionColectivaPageModule);
      });

      ProteccionColectivaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _proteccion_colectiva_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProteccionColectivaPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_proteccion_colectiva_page__WEBPACK_IMPORTED_MODULE_6__["ProteccionColectivaPage"]]
      })], ProteccionColectivaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTProteccionColectivaProteccionColectivaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-card-title {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.scroll-custom {\n  text-overflow: clip !important;\n  white-space: nowrap !important;\n  overflow: scroll !important;\n}\ndiv.alert-checkbox-label {\n  text-overflow: clip !important;\n  white-space: nowrap !important;\n  overflow: scroll !important;\n}\nion-textarea {\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 0;\n  width: 100%;\n  height: 80px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 5px;\n}\nion-card {\n  width: 100%;\n}\n.requieredQues {\n  color: red !important;\n}\nion-item.border {\n  height: 45px;\n  border: 1px solid #808080;\n  border-radius: 10px;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\nion-select {\n  width: 100%;\n}\np.counter {\n  display: flex;\n  color: #85b3e1 !important;\n  justify-content: end;\n  margin-top: 0;\n  color: var(--ion-color-primary);\n}\n.select-icon {\n  width: 12px;\n  height: 26px;\n  opacity: 1;\n}\nalert-checkbox-label.sc-ion-alert-md {\n  padding-left: 53px;\n  padding-right: 26px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n  flex: 1;\n  color: var(--ion-color-step-850, #262626);\n  font-size: 16px;\n  text-overflow: clip;\n  white-space: nowrap;\n  overflow: auto;\n}\n.error-message {\n  color: red;\n  font-size: 12px;\n}\nion-modal.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md,\nion-modal.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-ios {\n  width: 80% !important;\n  height: 80% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL3Byb3RlY2Npb24tY29sZWN0aXZhL3Byb3RlY2Npb24tY29sZWN0aXZhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQUU7RUFDRSwwQ0FBQTtBQUVKO0FBRUE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBR0Y7QUFEQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQUlGO0FBREE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FBSUY7QUFEQTtFQUNFLFdBQUE7QUFJRjtBQURBO0VBQ0UscUJBQUE7QUFJRjtBQURBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRSxXQUFBO0FBSUY7QUFEQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBSUY7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUlGO0FBREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUVBLE9BQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlGO0FBREE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7O0VBRUUscUJBQUE7RUFDQSxzQkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL3Byb3RlY2Npb24tY29sZWN0aXZhL3Byb3RlY2Npb24tY29sZWN0aXZhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2JlYjJiMjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJi50b29sY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBwYWRkaW5nOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2Nyb2xsLWN1c3RvbSB7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXAgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7XG59XG5kaXYuYWxlcnQtY2hlY2tib3gtbGFiZWwge1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHNjcm9sbCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXF1aWVyZWRRdWVzIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbS5ib3JkZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jZW50ZXItdHJhYmFqYWRvcmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5wLmNvdW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogcmdiKDEzMywgMTc5LCAyMjUpICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2VsZWN0LWljb24ge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xuICBwYWRkaW5nLWxlZnQ6IDUzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI2cHg7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsICMyNjI2MjYpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLW1vZGFsLm1vZGFsLXdyYXBwZXIuaW9uLW92ZXJsYXktd3JhcHBlci5zYy1pb24tbW9kYWwtbWQsXG5pb24tbW9kYWwubW9kYWwtd3JhcHBlci5pb24tb3ZlcmxheS13cmFwcGVyLnNjLWlvbi1tb2RhbC1pb3Mge1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProteccionColectivaPage */

    /***/
    function srcAppPagesSSTProteccionColectivaProteccionColectivaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProteccionColectivaPage", function () {
        return ProteccionColectivaPage;
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


      var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/modal-trabajadores/modal-trabajadores.component */
      "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
      /* harmony import */


      var src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/SST/data-questions.service */
      "./src/app/services/SST/data-questions.service.ts");
      /* harmony import */


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/SST/tabla-trabajadores.service */
      "./src/app/services/SST/tabla-trabajadores.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /* harmony import */


      var src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/SST/sekected-items-service.service */
      "./src/app/services/SST/sekected-items-service.service.ts");

      var ProteccionColectivaPage = /*#__PURE__*/function () {
        function ProteccionColectivaPage(router, modalController, utils, questionService, dataService, alertController, tablaTrabajadoresService, selectedItemsService) {
          _classCallCheck(this, ProteccionColectivaPage);

          this.router = router;
          this.modalController = modalController;
          this.utils = utils;
          this.questionService = questionService;
          this.dataService = dataService;
          this.alertController = alertController;
          this.tablaTrabajadoresService = tablaTrabajadoresService;
          this.selectedItemsService = selectedItemsService;
          this.maestroPadre = [];
          this.maestroHijo = [];
          this.tituloEitmes = [];
          this.selectedItems = {};
          this.numerObligarorios = 0;
          this.observaciones = '';
          this.contadorObs = 0;
          this.filtradosItems = [];
          this.submited = false;
        }

        return _createClass(ProteccionColectivaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.selectedItems = this.selectedItemsService.getSelectedItems();
          }
        }, {
          key: "portChange",
          value: function portChange(event) {
            if (!event.value) {
              console.log('event.value is undefined');
              return;
            }

            if (event.value.id === undefined) {
              console.log('event.value.id is undefined');
              return;
            }

            if (!this.selectedItems) {
              console.log('this.selectedItems is undefined');
              return;
            }

            console.log('port:', event.value);
            this.selectedItems[event.value.id] = event.value;
            this.selectedItemsService.setSelectedItems(this.selectedItems);
            console.log(this.selectedItems);
          }
        }, {
          key: "verTrabajadores",
          value: function verTrabajadores() {
            this.modalController.create({
              component: src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_4__["ModalTrabajadoresComponent"]
            }).then(function (modal) {
              modal.present();
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var dataUrl, map;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    dataUrl = history.state.data;

                    if (dataUrl) {
                      this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                      this.dataService.setData(dataUrl);
                      this.observaciones = dataUrl['strObservaciones'];
                      this.contadorObs = this.observaciones.length;
                      console.log(dataUrl);
                      map = dataUrl['listaItemSeleccionados'].reduce(function (acc, items) {
                        /* si items.leng === 0  eliminar esa lista */
                        if (items.length === 0) {
                          return acc;
                        }

                        acc[items[0].Fk_ID_PermisoAlturas_ItemProteccionPadre] = items;
                        return acc;
                      }, {});
                      this.selectedItems = map;
                      this.selectedItemsService.setSelectedItems(this.selectedItems);
                    }

                    _context.next = 4;
                    return this.utils.presentLoading();

                  case 4:
                    _context.next = 6;
                    return this.questionService.getAllMaestroPadres();

                  case 6:
                    this.maestroPadre = _context.sent;
                    _context.next = 9;
                    return this.questionService.getAllMaestroHijos();

                  case 9:
                    this.maestroHijo = _context.sent;
                    this.maestroPadre.forEach(function (padre) {
                      _this.maestroHijo.forEach(function (hijo) {
                        if (padre.Pk_ID_PermisoAlturas_ItemProteccionPadre === hijo.Fk_ID_PermisoAlturas_ItemProteccionPadre) {
                          if (!_this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre]) {
                            _this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre] = [];
                          }

                          if (hijo.boolObligatorio) {
                            _this.numerObligarorios++;
                            hijo.strDescricionPermiso = '* ' + hijo.strDescricionPermiso;
                          }

                          _this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre].push(hijo);
                        } else {
                          if (!_this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre]) {
                            _this.tituloEitmes[padre.Pk_ID_PermisoAlturas_ItemProteccionPadre] = [];
                          }
                        }
                      });
                    });
                    this.utils.dismissLoading();
                    console.log(this.tituloEitmes);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "continuar",
          value: function continuar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var check;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this.submited = true;
                    _context2.next = 3;
                    return this.checkQuestions();

                  case 3:
                    check = _context2.sent;

                    if (check) {
                      _context2.next = 6;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 6:
                    this.quitarAsterisco();

                    if (!(this.observaciones.length === 0)) {
                      _context2.next = 11;
                      break;
                    }

                    _context2.next = 10;
                    return this.mostrarError('Debe ingresar las observaciones');

                  case 10:
                    return _context2.abrupt("return");

                  case 11:
                    _context2.next = 13;
                    return this.guardarDatos();

                  case 13:
                    this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia']);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "guardarDatos",
          value: function guardarDatos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var data;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    data = this.dataService.getData();
                    data['listaItemSeleccionados'] = this.filtradosItems;
                    this.filtradosItems.forEach(function (element) {
                      console.log(element);
                    });
                    data['lastRoute'] = '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva';
                    data['strObservaciones'] = this.observaciones;
                    this.dataService.setData(data);
                    _context3.next = 8;
                    return this.dataService.saveData();

                  case 8:
                    this.selectedItems = {};

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "quitarAsterisco",
          value: function quitarAsterisco() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var obj, i, j;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    /* quitar asteriscos y eliminar uilimo array[] */
                    obj = Object.values(this.selectedItems).filter(function (item) {
                      return item !== undefined;
                    });

                    for (i = 0; i < obj.length; i++) {
                      for (j = 0; j < obj[i].length; j++) {
                        obj[i][j].strDescricionPermiso = obj[i][j].strDescricionPermiso.replace('* ', '');
                      }
                    }
                    /* aplanar any[] a [] */


                    this.filtradosItems = obj;
                    console.log(this.filtradosItems);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "checkQuestions",
          value: function checkQuestions() {
            var _a, _b;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this2 = this;

              var numeroContestados, numeroObligatorios, TodosTitulosConHijos, _loop, key, titulosIncompletos;

              return _regeneratorRuntime().wrap(function _callee5$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    numeroContestados = 0;
                    numeroObligatorios = this.numerObligarorios;
                    TodosTitulosConHijos = [];
                    this.maestroPadre.forEach(function (padre) {
                      _this2.maestroHijo.forEach(function (hijo) {
                        if (padre.Pk_ID_PermisoAlturas_ItemProteccionPadre === hijo.Fk_ID_PermisoAlturas_ItemProteccionPadre) {
                          if (!TodosTitulosConHijos.includes(padre.strDescricionPermiso)) {
                            TodosTitulosConHijos.push(padre.strDescricionPermiso);
                          }
                        }
                      });
                    });
                    console.log(this.tituloEitmes);
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(key) {
                      var preguntasObligatorias, elements, preguntasObligatoriasRespondidas, tituloItem, _iterator, _step, element;

                      return _regeneratorRuntime().wrap(function _loop$(_context5) {
                        while (1) switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!(key === 'undefined')) {
                              _context5.next = 2;
                              break;
                            }

                            return _context5.abrupt("return", 1);

                          case 2:
                            if (_this2.selectedItems.hasOwnProperty(key)) {
                              preguntasObligatorias = (((_a = _this2.tituloEitmes[key]) === null || _a === void 0 ? void 0 : _a.filter(function (element) {
                                return element.boolObligatorio;
                              })) || []).length;
                              elements = _this2.selectedItems[key];
                              preguntasObligatoriasRespondidas = (((_b = _this2.selectedItems[key]) === null || _b === void 0 ? void 0 : _b.filter(function (element) {
                                return element.boolObligatorio;
                              })) || []).length;
                              /* si las elementos selecionados es mayor a las obligatorias eliminar del arreglo el titulo padre */

                              if (preguntasObligatorias <= preguntasObligatoriasRespondidas || preguntasObligatorias === 0) {
                                tituloItem = _this2.maestroPadre.find(function (item) {
                                  return item.Pk_ID_PermisoAlturas_ItemProteccionPadre.toString() == key;
                                });
                                /* todos los titulos exepto los qu no tienene hijos */

                                TodosTitulosConHijos = TodosTitulosConHijos.filter(function (item) {
                                  return item !== tituloItem.strDescricionPermiso;
                                });
                              }

                              _iterator = _createForOfIteratorHelper(elements);

                              try {
                                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                  element = _step.value;

                                  if (element.boolObligatorio) {
                                    numeroContestados++;
                                  }
                                }
                              } catch (err) {
                                _iterator.e(err);
                              } finally {
                                _iterator.f();
                              }
                            }

                          case 3:
                          case "end":
                            return _context5.stop();
                        }
                      }, _loop);
                    });
                    _context6.t0 = _regeneratorRuntime().keys(this.selectedItems);

                  case 7:
                    if ((_context6.t1 = _context6.t0()).done) {
                      _context6.next = 14;
                      break;
                    }

                    key = _context6.t1.value;
                    return _context6.delegateYield(_loop(key), "t2", 10);

                  case 10:
                    if (!_context6.t2) {
                      _context6.next = 12;
                      break;
                    }

                    return _context6.abrupt("continue", 7);

                  case 12:
                    _context6.next = 7;
                    break;

                  case 14:
                    if (!(numeroContestados < numeroObligatorios)) {
                      _context6.next = 19;
                      break;
                    }

                    titulosIncompletos = TodosTitulosConHijos.join('<br>');
                    _context6.next = 18;
                    return this.mostrarError("Debe responder todas las preguntas obligatorias en los siguientes t\xEDtulos: <br><br><strong>".concat(titulosIncompletos, "</strong>"));

                  case 18:
                    return _context6.abrupt("return", false);

                  case 19:
                    return _context6.abrupt("return", true);

                  case 20:
                  case "end":
                    return _context6.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "mostrarError",
          value: function mostrarError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee6$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context7.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            var data = this.dataService.getData();
            this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad'], {
              state: {
                data: data
              }
            });
          }
        }, {
          key: "actualizarContador",
          value: function actualizarContador(event) {
            if (event.target.value.length == 0) {
              this.contadorObs = 0;
              return;
            }

            this.contadorObs = event.target.value.length;
          }
        }]);
      }();

      ProteccionColectivaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]
        }, {
          type: src_app_services_SST_data_questions_service__WEBPACK_IMPORTED_MODULE_5__["DataQuestionsService"]
        }, {
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_7__["TablaTrabajadoresService"]
        }, {
          type: src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_9__["SekectedItemsServiceService"]
        }];
      };

      ProteccionColectivaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proteccion-colectiva',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./proteccion-colectiva.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./proteccion-colectiva.page.scss */
        "./src/app/pages/SST/proteccion-colectiva/proteccion-colectiva.page.scss"))["default"]]
      })], ProteccionColectivaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-proteccion-colectiva-proteccion-colectiva-module-es5.js.map