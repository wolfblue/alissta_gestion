(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-firmar-firmar-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/firmar/firmar.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/firmar/firmar.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTFirmarFirmarPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">Coordinador Trabajo Alturas</div>\n\n  <!-- Segunda instancia -->\n  <ion-item>\n    <ion-label>Tipo Documento</ion-label>\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"onChangePermiso1($event)\">\n      <ion-select-option value=\"CC\">Cedúla Ciudadania</ion-select-option>\n      <ion-select-option value=\"CE\">Cedúla Extranjeria</ion-select-option>\n      <ion-select-option value=\"TI\">Tarjeta Identidad</ion-select-option>\n      <ion-select-option value=\"PA\">Pasaporte</ion-select-option>\n      <ion-select-option value=\"PT\">Permiso Trabajo</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"tipoDocuemento1 !== 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input\n      (keyup)=\"numberOnly($event)\"\n      type=\"number\"\n      inputmode=\"numeric\"\n      pattern=\"^[0-9]*$\"\n      [(ngModel)]=\"documentoAutorizo1\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf=\"tipoDocuemento1 === 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"documentoAutorizo1\"></ion-input>\n  </ion-item>\n  <!-- nombre -->\n  <ion-item>\n    <ion-label position=\"floating\">Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"nombreAutorizo1\"></ion-input>\n  </ion-item>\n  <!-- cedula -->\n  <ion-item>\n    <ion-label position=\"floating\">Cargo</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"cargoAutorizo1\"></ion-input>\n  </ion-item>\n\n  <app-signature-pad (onSignatureChange)=\"onSignatureChange($event)\"></app-signature-pad>\n  <div class=\"toolbar toolcontent\">Responsable Plan Emergencia</div>\n  <!-- Tercera instancia -->\n  <!-- nombre -->\n  <!-- cedula -->\n  <ion-item>\n    <ion-label>Tipo Documento</ion-label>\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"onChangePermiso2($event)\">\n      <ion-select-option value=\"CC\">Cedúla Ciudadania</ion-select-option>\n      <ion-select-option value=\"CE\">Cedúla Extranjeria</ion-select-option>\n      <ion-select-option value=\"TI\">Tarjeta Identidad</ion-select-option>\n      <ion-select-option value=\"PA\">Pasaporte</ion-select-option>\n      <ion-select-option value=\"PT\">Permiso Trabajo</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"tipoDocuemento2 !== 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input\n      (keyup)=\"numberOnly2($event)\"\n      type=\"number\"\n      inputmode=\"numeric\"\n      pattern=\"^[0-9]*$\"\n      [(ngModel)]=\"documentoAutorizo2\"\n    ></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf=\"tipoDocuemento2 === 'PA'\">\n    <ion-label position=\"floating\">N° Documento</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"documentoAutorizo2\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"nombreAutorizo2\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Cargo</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"cargoAutorizo2\"></ion-input>\n  </ion-item>\n  <app-signature-pad (onSignatureChange)=\"onSignatureChange2($event)\"></app-signature-pad>\n\n  <div *ngIf=\"firmas\" class=\"ion-padding ion-text-center\">\n    <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Continuar</button>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/firmar/firmar-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/SST/firmar/firmar-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: FirmarPageRoutingModule */

    /***/
    function srcAppPagesSSTFirmarFirmarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirmarPageRoutingModule", function () {
        return FirmarPageRoutingModule;
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


      var _firmar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./firmar.page */
      "./src/app/pages/SST/firmar/firmar.page.ts");

      var routes = [{
        path: '',
        component: _firmar_page__WEBPACK_IMPORTED_MODULE_3__["FirmarPage"]
      }];

      var FirmarPageRoutingModule = /*#__PURE__*/_createClass(function FirmarPageRoutingModule() {
        _classCallCheck(this, FirmarPageRoutingModule);
      });

      FirmarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FirmarPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/firmar/firmar.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/SST/firmar/firmar.module.ts ***!
      \***************************************************/

    /*! exports provided: FirmarPageModule */

    /***/
    function srcAppPagesSSTFirmarFirmarModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirmarPageModule", function () {
        return FirmarPageModule;
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


      var _firmar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./firmar-routing.module */
      "./src/app/pages/SST/firmar/firmar-routing.module.ts");
      /* harmony import */


      var _firmar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./firmar.page */
      "./src/app/pages/SST/firmar/firmar.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var FirmarPageModule = /*#__PURE__*/_createClass(function FirmarPageModule() {
        _classCallCheck(this, FirmarPageModule);
      });

      FirmarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _firmar_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirmarPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_firmar_page__WEBPACK_IMPORTED_MODULE_6__["FirmarPage"]]
      })], FirmarPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/firmar/firmar.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/SST/firmar/firmar.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTFirmarFirmarPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-row div.take-photo {\n  margin-bottom: 4px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 50%;\n  color: #fff;\n  background: #4d4c4c !important;\n  border-radius: 24px;\n  width: 50%;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-row div.select-photo {\n  margin-top: 4px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 50%;\n  color: #fff;\n  background: var(--ion-color-primary);\n  border-radius: 24px;\n  width: 50%;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.photo-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-item .photo-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 18px;\n  padding-right: 18px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);\n  border-radius: 50px;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2Zpcm1hci9maXJtYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFBRTtFQUNFLDBDQUFBO0FBRUo7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUY7QUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtBQUNKO0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9TU1QvZmlybWFyL2Zpcm1hci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYudG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNiZWIyYjI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICYudG9vbGNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgcGFkZGluZzogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmIGRpdi50YWtlLXBob3RvIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICM0ZDRjNGMgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbiAgJiBkaXYuc2VsZWN0LXBob3RvIHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbn1cblxuLnBob3RvLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgLnBob3RvLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxufVxuXG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/SST/firmar/firmar.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/SST/firmar/firmar.page.ts ***!
      \*************************************************/

    /*! exports provided: FirmarPage */

    /***/
    function srcAppPagesSSTFirmarFirmarPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirmarPage", function () {
        return FirmarPage;
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


      var src_app_interfaces_edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/interfaces/edfirma-responsable-permiso-trabajo */
      "./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts");
      /* harmony import */


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/modal-trabajadores/modal-trabajadores.component */
      "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");

      var FirmarPage = /*#__PURE__*/function () {
        function FirmarPage(alertController, saveDataService, router, modalController, context) {
          _classCallCheck(this, FirmarPage);

          this.alertController = alertController;
          this.saveDataService = saveDataService;
          this.router = router;
          this.modalController = modalController;
          this.context = context;
          this.autorizaciones = [];
          this.firmas = false;
          this.firmasCompletas = false;
        }

        return _createClass(FirmarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.context.get().then(function (response) {
              console.log(response['_trabajador']);
              _this.usuario = response['_trabajador'];
            });
            this.autorizaciones = [new src_app_interfaces_edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_4__["EDFirmaResponsablePermisoTrabajo"](), new src_app_interfaces_edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_4__["EDFirmaResponsablePermisoTrabajo"]()];
            this.data = this.saveDataService.getData();
            console.log(this.data['uniqueId']);
          }
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
          key: "onSignatureChange",
          value: function onSignatureChange(signatureData) {
            this.autorizaciones[0].strFirmaBase64 = signatureData;
            this.firmas = true;
          }
        }, {
          key: "onSignatureChange2",
          value: function onSignatureChange2(signatureData) {
            this.autorizaciones[1].strFirmaBase64 = signatureData;
            this.firmas = true;
          }
        }, {
          key: "onSignatureChange3",
          value: function onSignatureChange3(signatureData) {
            this.autorizaciones[2].strFirmaBase64 = signatureData;
            this.firmas = true;
          }
        }, {
          key: "onChangePermiso1",
          value: function onChangePermiso1(event) {
            this.autorizaciones[0].strTipoDocumento = event.target.value;
            this.tipoDocuemento1 = event.target.value;
          }
        }, {
          key: "onChangePermiso2",
          value: function onChangePermiso2(event) {
            this.autorizaciones[1].strTipoDocumento = event.target.value;
            this.tipoDocuemento2 = event.target.value;
          }
        }, {
          key: "onChangePermiso3",
          value: function onChangePermiso3(event) {
            this.autorizaciones[2].strTipoDocumento = event.target.value;
            this.tipoDocuemento3 = event.target.value;
          }
        }, {
          key: "validarFirmasCompletas",
          value: function validarFirmasCompletas() {
            this.firmasCompletas = this.autorizaciones.every(function (autorizacion) {
              return autorizacion.strCargo !== undefined && autorizacion.strCargo !== '' && autorizacion.strNombreCompleto !== undefined && autorizacion.strNombreCompleto !== '' && autorizacion.strTipoDocumento !== undefined && autorizacion.strTipoDocumento !== '' && autorizacion.strDocumentoIdentificacion !== null && autorizacion.strDocumentoIdentificacion !== undefined && autorizacion.strFirmaBase64.trim() !== '';
            });
          }
        }, {
          key: "continuar",
          value: function continuar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var lat, lng, edAutorizadoPermisoTrabajo;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.autorizaciones);
                    this.autorizaciones[0].strCargo = this.cargoAutorizo1;
                    this.autorizaciones[0].strNombreCompleto = this.nombreAutorizo1;
                    this.autorizaciones[0].strDocumentoIdentificacion = this.documentoAutorizo1;

                    if (!(this.autorizaciones[0].strTipoDocumento === 'PA' && !/[A-Za-z].*[0-9]+/.test(this.autorizaciones[0].strDocumentoIdentificacion))) {
                      _context.next = 7;
                      break;
                    }

                    this.mostrarError('Verifica el Número de pasaporte');
                    return _context.abrupt("return");

                  case 7:
                    this.autorizaciones[1].strCargo = this.cargoAutorizo2;
                    this.autorizaciones[1].strNombreCompleto = this.nombreAutorizo2;
                    this.autorizaciones[1].strDocumentoIdentificacion = this.documentoAutorizo2;

                    if (!(this.autorizaciones[1].strTipoDocumento === 'PA' && !/[A-Za-z].*[0-9]+/.test(this.autorizaciones[1].strDocumentoIdentificacion))) {
                      _context.next = 13;
                      break;
                    }

                    this.mostrarError('Verifica el Número de pasaporte');
                    return _context.abrupt("return");

                  case 13:
                    this.validarFirmasCompletas();

                    if (this.firmasCompletas) {
                      _context.next = 17;
                      break;
                    }

                    this.mostrarError('Debes completar todas las firmas para continuar.');
                    return _context.abrupt("return");

                  case 17:
                    lat = this.data['edInfoAuditoria'].strLatitud;
                    lng = this.data['edInfoAuditoria'].strLongitud;
                    edAutorizadoPermisoTrabajo = new src_app_interfaces_edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_4__["EDFirmaResponsablePermisoTrabajo"]();
                    edAutorizadoPermisoTrabajo.strCargo = this.usuario._cargo;
                    edAutorizadoPermisoTrabajo.strDocumentoIdentificacion = this.usuario._id;
                    edAutorizadoPermisoTrabajo.strFirmaBase64 = '';
                    edAutorizadoPermisoTrabajo.strNombreCompleto = this.usuario._nombre;
                    edAutorizadoPermisoTrabajo.strTipoDocumento = this.usuario._tipoDocumento;
                    this.data['edAutorizadoPermisoTrabajo'] = edAutorizadoPermisoTrabajo;
                    this.data['edAutorizadoPermisoTrabajo'].strLatitud = lat;
                    this.data['edAutorizadoPermisoTrabajo'].strLongitud = lng;
                    this.data['edCoordinadorTrabajoAlturas'] = this.autorizaciones[0];
                    this.data['edCoordinadorTrabajoAlturas'].strLatitud = lat;
                    this.data['edCoordinadorTrabajoAlturas'].strLongitud = lng;
                    this.data['edResponsableActivarPlanEmergencia'] = this.autorizaciones[1];
                    this.data['edResponsableActivarPlanEmergencia'].strLatitud = lat;
                    this.data['edResponsableActivarPlanEmergencia'].strLongitud = lng;
                    this.data['lastRoute'] = '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos';
                    this.saveDataService.setData(this.data);
                    console.log(this.data);
                    this.data['enviar'] = true;
                    _context.next = 40;
                    return this.saveDataService.saveData();

                  case 40:
                    this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos']);

                  case 41:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "mostrarError",
          value: function mostrarError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
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
          key: "numberOnly",
          value: function numberOnly(event) {
            console.log('event', event.key);

            if (event.key === 'Unidentified') {
              event.target.value = '';
            }

            var regex = new RegExp(/^\d+$/);

            if (!regex.test(event.target.value)) {
              event.target.value = event.target.value.replace(/[^0-9]/g, '');
            }
          }
        }, {
          key: "numberOnly2",
          value: function numberOnly2(event) {
            console.log('event', event.key);

            if (event.key === 'Unidentified') {
              event.target.value = '';
            }

            var regex = new RegExp(/^\d+$/);

            if (!regex.test(event.target.value)) {
              event.target.value = event.target.value.replace(/[^0-9]/g, '');
            }
          }
        }]);
      }();

      FirmarPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__["SaveDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_7__["ContextService"]
        }];
      };

      FirmarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firmar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./firmar.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/firmar/firmar.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./firmar.page.scss */
        "./src/app/pages/SST/firmar/firmar.page.scss"))["default"]]
      })], FirmarPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-firmar-firmar-module-es5.js.map