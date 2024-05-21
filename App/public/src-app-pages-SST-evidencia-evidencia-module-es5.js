(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-evidencia-evidencia-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/evidencia/evidencia.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/evidencia/evidencia.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTEvidenciaEvidenciaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e\"><strong> Registro Permiso</strong></ion-title>\n  </div>\n</ion-header>\n<ion-content>\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Adjuntar Evidencias</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <ion-row>\n      <ion-col>\n        <div class=\"take-photo\" (click)=\"selectMultiplePhotos()\">\n          <span><strong> Seleccionar Foto</strong></span>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"take-photo\" (click)=\"takePhoto()\">\n          <span><strong>Tomar Foto</strong> </span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-text-center icon-color\">\n      <ion-col>\n        <ion-icon name=\"image\" size=\"large\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"camera\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-list *ngIf=\"photos.length > 0\">\n      <ion-item *ngFor=\"let photo of photos\" class=\"photo-item\">\n        <div class=\"photo-content\">\n          <!-- Muestra el nombre de la foto -->\n          <div class=\"titulo-foto\">{{ photo.strNombreImagen }}</div>\n          <div>\n            <ion-button (click)=\"deletePhoto(photo)\" fill=\"clear\" slot=\"end\">\n              <ion-icon name=\"trash-outline\" color=\"primary\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-text-center\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/evidencia/evidencia-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/SST/evidencia/evidencia-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: EvidenciaPageRoutingModule */

    /***/
    function srcAppPagesSSTEvidenciaEvidenciaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvidenciaPageRoutingModule", function () {
        return EvidenciaPageRoutingModule;
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


      var _evidencia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./evidencia.page */
      "./src/app/pages/SST/evidencia/evidencia.page.ts");

      var routes = [{
        path: '',
        component: _evidencia_page__WEBPACK_IMPORTED_MODULE_3__["EvidenciaPage"]
      }, {
        path: 'aceptar-terminos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-SST-aceptar-terminos-aceptar-terminos-module */
          "src-app-pages-SST-aceptar-terminos-aceptar-terminos-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/SST/aceptar-terminos/aceptar-terminos.module */
          "./src/app/pages/SST/aceptar-terminos/aceptar-terminos.module.ts")).then(function (m) {
            return m.AceptarTerminosPageModule;
          });
        }
      }];

      var EvidenciaPageRoutingModule = /*#__PURE__*/_createClass(function EvidenciaPageRoutingModule() {
        _classCallCheck(this, EvidenciaPageRoutingModule);
      });

      EvidenciaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EvidenciaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/evidencia/evidencia.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/SST/evidencia/evidencia.module.ts ***!
      \*********************************************************/

    /*! exports provided: EvidenciaPageModule */

    /***/
    function srcAppPagesSSTEvidenciaEvidenciaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvidenciaPageModule", function () {
        return EvidenciaPageModule;
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


      var _evidencia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./evidencia-routing.module */
      "./src/app/pages/SST/evidencia/evidencia-routing.module.ts");
      /* harmony import */


      var _evidencia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./evidencia.page */
      "./src/app/pages/SST/evidencia/evidencia.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var EvidenciaPageModule = /*#__PURE__*/_createClass(function EvidenciaPageModule() {
        _classCallCheck(this, EvidenciaPageModule);
      });

      EvidenciaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _evidencia_routing_module__WEBPACK_IMPORTED_MODULE_5__["EvidenciaPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_evidencia_page__WEBPACK_IMPORTED_MODULE_6__["EvidenciaPage"]]
      })], EvidenciaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/evidencia/evidencia.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/SST/evidencia/evidencia.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTEvidenciaEvidenciaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nion-label {\n  margin-top: 12px;\n  margin-bottom: auto;\n  padding: auto;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #000;\n  text-align: justify;\n}\nion-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-row div.take-photo {\n  margin-bottom: 4px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 50%;\n  color: #000;\n  background: #dedede !important;\n  border-radius: 24px;\n  width: 95%;\n  height: 40px;\n  font-size: 12px;\n  font-weight: 500;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.icon-color {\n  color: #ff7500;\n}\n.photo-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nion-item {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-item .photo-content {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-item .titulo-foto {\n  width: 80%;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 18px;\n  padding-right: 18px;\n  background: #dedede;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);\n  border-radius: 50px;\n  text-align: center;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\nion-fab-button.float-button {\n  --padding: 0;\n  --margin: 0;\n  --size: 44px;\n  --background: #ff7500;\n}\nion-icon.float-button {\n  --background: #ff7500;\n}\n.custom-icon-float {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2V2aWRlbmNpYS9ldmlkZW5jaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFBRTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFHQTtFQUNFLGNBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2V2aWRlbmNpYS9ldmlkZW5jaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjYmViMmIyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmLnRvb2xjb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHBhZGRpbmc6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5pb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiBkaXYudGFrZS1waG90byB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxufVxuXG4uaWNvbi1jb2xvciB7XG4gIGNvbG9yOiAjZmY3NTAwO1xufVxuXG4ucGhvdG8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICAvKiBxdWl0YXIgZXN0aWxvcyAqL1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm9yZGVyLWNvbG9yOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgLnBob3RvLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgJiAudGl0dWxvLWZvdG8ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmlvbi1mYWItYnV0dG9uLmZsb2F0LWJ1dHRvbiB7XG4gIC0tcGFkZGluZzogMDtcbiAgLS1tYXJnaW46IDA7XG4gIC0tc2l6ZTogNDRweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3NTAwO1xufVxuXG5pb24taWNvbi5mbG9hdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZjc1MDA7XG59XG5cbi5jdXN0b20taWNvbi1mbG9hdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/SST/evidencia/evidencia.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/SST/evidencia/evidencia.page.ts ***!
      \*******************************************************/

    /*! exports provided: EvidenciaPage */

    /***/
    function srcAppPagesSSTEvidenciaEvidenciaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EvidenciaPage", function () {
        return EvidenciaPage;
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


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/SST/tabla-trabajadores.service */
      "./src/app/services/SST/tabla-trabajadores.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/camera */
      "./node_modules/@capacitor/camera/dist/esm/index.js");

      var EvidenciaPage = /*#__PURE__*/function () {
        function EvidenciaPage(modalController, router, dataService, alertController, utils, tablaTrabajadoresService) {
          _classCallCheck(this, EvidenciaPage);

          this.modalController = modalController;
          this.router = router;
          this.dataService = dataService;
          this.alertController = alertController;
          this.utils = utils;
          this.tablaTrabajadoresService = tablaTrabajadoresService;
          this.photos = [// {
            //   strNombreImagen: 'Foto 1',
            //   strBase64Image: 'file:///storage/emulated/0/Android/data/io.ionic.starter/cache/1589394485483.jpg',
            // },
            // {
            //   strNombreImagen: 'Foto 1',
            //   strBase64Image: 'file:///storage/emulated/0/Android/data/io.ionic.starter/cache/1589394485483.jpg',
            // },
          ];
          this.counterPhoto = 0;
        }

        return _createClass(EvidenciaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.precargarDatos();
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
          key: "takePhoto",
          value: function takePhoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var capturePicture, photo;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"].getPhoto({
                      promptLabelPicture: 'Tomar foto',
                      promptLabelPhoto: 'Seleccionar foto',
                      promptLabelHeader: 'Seleccionar foto',
                      promptLabelCancel: 'Cancelar',
                      quality: 80,
                      allowEditing: false,
                      resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["CameraResultType"].Base64,
                      width: 400,
                      height: 400,
                      source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["CameraSource"].Camera
                    });

                  case 3:
                    capturePicture = _context.sent;

                    if (!(capturePicture == null)) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return");

                  case 6:
                    photo = {
                      strNombreImagen: 'Foto ' + (this.photos.length + 1),
                      strBase64Image: capturePicture.base64String
                    };
                    this.photos.push(photo);
                    this.counterPhoto++;
                    _context.next = 14;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](0);
                    console.error('Error al tomar la foto:', _context.t0); // this.mostrarError(error);

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 11]]);
            }));
          }
        }, {
          key: "selectMultiplePhotos",
          value: function selectMultiplePhotos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var fotos;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    _context2.next = 5;
                    return _capacitor_camera__WEBPACK_IMPORTED_MODULE_8__["Camera"].pickImages({
                      quality: 50,
                      height: 400,
                      width: 400,
                      correctOrientation: true
                    });

                  case 5:
                    fotos = _context2.sent;

                    if (!(fotos == null)) {
                      _context2.next = 8;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 8:
                    _context2.next = 10;
                    return this.addPhotos(fotos);

                  case 10:
                    _context2.next = 15;
                    break;

                  case 12:
                    _context2.prev = 12;
                    _context2.t0 = _context2["catch"](0);
                    console.error('Error al seleccionar las fotos:', _context2.t0); // this.mostrarError(error);

                  case 15:
                    _context2.prev = 15;
                    this.utils.dismissLoading();
                    return _context2.finish(15);

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[0, 12, 15, 18]]);
            }));
          }
        }, {
          key: "addPhotos",
          value: function addPhotos(fotosCargadas) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this = this;

              var _loop, index;

              return _regeneratorRuntime().wrap(function _callee3$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                      var image, response, blob, reader;
                      return _regeneratorRuntime().wrap(function _loop$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            image = fotosCargadas.photos[index];
                            _context3.prev = 1;
                            _context3.next = 4;
                            return fetch(image.webPath);

                          case 4:
                            response = _context3.sent;
                            _context3.next = 7;
                            return response.blob();

                          case 7:
                            blob = _context3.sent;
                            reader = new FileReader();
                            _context3.next = 11;
                            return new Promise(function (resolve) {
                              reader.onloadend = function () {
                                var base64data = reader.result.toString().split(',')[1];
                                var photo = {
                                  strNombreImagen: 'Foto ' + (_this.counterPhoto + 1),
                                  strBase64Image: base64data.toString()
                                };

                                _this.photos.push(photo);

                                _this.counterPhoto++; // Incrementa el contador

                                resolve();
                              };

                              reader.readAsDataURL(blob);
                            });

                          case 11:
                            _context3.next = 16;
                            break;

                          case 13:
                            _context3.prev = 13;
                            _context3.t0 = _context3["catch"](1);
                            console.error('Error al cargar imagen:', _context3.t0);

                          case 16:
                          case "end":
                            return _context3.stop();
                        }
                      }, _loop, null, [[1, 13]]);
                    });
                    index = 0;

                  case 2:
                    if (!(index < fotosCargadas.photos.length)) {
                      _context4.next = 7;
                      break;
                    }

                    return _context4.delegateYield(_loop(), "t0", 4);

                  case 4:
                    index++;
                    _context4.next = 2;
                    break;

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }, _callee3);
            }));
          }
        }, {
          key: "deletePhoto",
          value: function deletePhoto(photo) {
            // Elimina la foto del array
            this.photos.splice(this.photos.indexOf(photo), 1);

            if (this.photos.length === 0) {
              this.counterPhoto = 0;
            }
          }
        }, {
          key: "continuar",
          value: function continuar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(this.photos.length === 0)) {
                      _context5.next = 3;
                      break;
                    }

                    this.mostrarError('Debe agregar al menos una imagen');
                    return _context5.abrupt("return");

                  case 3:
                    _context5.next = 5;
                    return this.guardarDatos();

                  case 5:
                    this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia/aceptar-terminos']);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "guardarDatos",
          value: function guardarDatos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    this.data['listaAnexoImagenes'] = this.photos;
                    this.data['lastRoute'] = '/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva/evidencia';
                    this.dataService.setData(this.data);
                    this.dataService.saveData();

                  case 4:
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
          key: "precargarDatos",
          value: function precargarDatos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var dataUrl;
              return _regeneratorRuntime().wrap(function _callee7$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    dataUrl = history.state.data;
                    console.log(dataUrl);
                    _context8.next = 4;
                    return this.utils.presentLoading();

                  case 4:
                    if (dataUrl) {
                      this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                      this.counterPhoto = dataUrl['listaAnexoImagenes'].length;
                      this.photos = dataUrl['listaAnexoImagenes'];
                      this.dataService.setData(dataUrl);
                      this.data = dataUrl;
                    } else {
                      this.data = this.dataService.getData();
                      this.photos = this.data['listaAnexoImagenes'];
                      this.dataService.setData(this.data);
                    }

                    console.log(this.data);
                    this.utils.dismissLoading();

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general/seccion-multiusos/seccion-plataforma/descripcion-actividad/proteccion-colectiva'], {
              state: {
                data: this.data
              }
            });
          }
        }, {
          key: "pushPermisosSST",
          value: function pushPermisosSST() {
            this.router.navigate(['/home/permisos']);
          }
        }]);
      }();

      EvidenciaPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_5__["SaveDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]
        }, {
          type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_6__["TablaTrabajadoresService"]
        }];
      };

      EvidenciaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evidencia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./evidencia.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/evidencia/evidencia.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./evidencia.page.scss */
        "./src/app/pages/SST/evidencia/evidencia.page.scss"))["default"]]
      })], EvidenciaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-evidencia-evidencia-module-es5.js.map