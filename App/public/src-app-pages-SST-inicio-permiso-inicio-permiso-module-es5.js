(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-inicio-permiso-inicio-permiso-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/inicio-permiso/inicio-permiso.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/inicio-permiso/inicio-permiso.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTInicioPermisoInicioPermisoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title style=\"color: #7e7e7e; padding: 0\"><strong> Registro Permiso</strong></ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <!-- Botón para visualizar trabajadores. lae una opción “Ver Trabajadores”\n    través de un modal los datos de los listado de trabajadores-->\n  <div>\n    <ion-item class=\"mostrar-usuarios\">\n      <p class=\"center-trabajadores\" (click)=\"verTrabajadores()\">\n        <ion-icon style=\"font-size: 1.1rem\" name=\"people\"></ion-icon>Ver Trabajadores\n      </p>\n      <ion-icon (click)=\"back()\" name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"toolbar toolcontent\">\n    <span> <ion-img style=\"width: 32px; height: 32px\" src=\"assets/img/clarity_book-solid.svg\"></ion-img> </span>\n    <ion-title>Información Actividad a Realizar</ion-title>\n  </div>\n  <div class=\"ion-padding\">\n    <div *ngIf=\"boolLocationDivice\" class=\"error-message\">Ingrese el campo</div>\n    <ion-row>\n      <div class=\"col-8 center-ubi\"><strong class=\"requieredQues\">*</strong>{{location ? location : 'Posición'}}</div>\n      <div class=\"btn-position\" (click)=\"authCurrentPosition()\">\n        <ion-icon name=\"location\" slot=\"end\"></ion-icon>\n      </div>\n    </ion-row>\n    <div (click)=\"authCurrentPosition()\" class=\"ion-text-center ion-padding\" style=\"padding: 0\">\n      <button style=\"width: 50%\" class=\"guardar-continuar\" expand=\"block\" color=\"secondary\">Iniciar</button>\n    </div>\n    <br />\n\n    <!-- boton para obtener latitud longitud -->\n\n    <ion-label class=\"ion-padding\" style=\"font-weight: 800\" position=\"floating\">Fecha Realización Actividad </ion-label>\n    <ion-input style=\"background: #cfcfcf; border-radius: 10px; opacity: 0.5\" type=\"text\" [(ngModel)]=\"fechaInicio\" disabled></ion-input>\n    <br />\n    <!-- hora inicio *obligatorio -->\n    <ion-label class=\"ion-padding\" style=\"font-weight: 800\" position=\"floating\"\n      ><strong class=\"requieredQues\">*</strong>Hora Inicio\n    </ion-label>\n    <ion-item class=\"border\">\n      <ion-datetime\n        style=\"opacity: 0.5\"\n        displayFormat=\"HH:mm\"\n        pickerFormat=\"HH:mm\"\n        [(ngModel)]=\"strHoraInicioActividad\"\n        doneText=\"Aceptar\"\n        cancelText=\"Cancelar\"\n        disabled\n      ></ion-datetime>\n    </ion-item>\n    <br />\n    <!-- hora fin acticidad -->\n\n    <div *ngIf=\"boolHoraInicioActividad\" class=\"error-message\">Ingrese el campo</div>\n    <ion-label class=\"ion-padding\" style=\"font-weight: 800\" position=\"floating\"><strong class=\"requieredQues\">*</strong>Hora Fin</ion-label>\n    <ion-item class=\"border\">\n      <ion-datetime\n        (ionChange)=\"onChangeFin($event)\"\n        displayFormat=\"HH:mm\"\n        pickerFormat=\"HH:mm\"\n        [(ngModel)]=\"horaFinActividad\"\n        doneText=\"Aceptar\"\n        cancelText=\"Cancelar\"\n      ></ion-datetime>\n    </ion-item>\n    <br />\n\n    <!-- ubicacion del trabajo es un textform maximo 200 caracteres-->\n    <div *ngIf=\"boolUbicacionTrabajo\" class=\"error-message\">Ingrese el campo</div>\n\n    <ion-label class=\"ion-padding\" style=\"font-weight: 800; color: #ff7500\" position=\"floating\">\n      <strong class=\"requieredQues\">*</strong>Ubicación del Trabajo\n    </ion-label>\n    <ion-item class=\"border\">\n      <ion-input (ionChange)=\"actualizarContador($event)\" type=\"text\" maxlength=\"200\" [(ngModel)]=\"ubicacionTrabajo\"></ion-input>\n    </ion-item>\n    <p class=\"counter\">{{contadorUbicion}}/200</p>\n    <div *ngIf=\"boolAlturaActividad\" class=\"error-message\">Ingrese el campo</div>\n\n    <!-- input y al lado derecho lebel Metros -->\n    <ion-label class=\"ion-padding\" style=\"font-weight: 800; color: #ff7500\" position=\"floating\"\n      ><strong class=\"requieredQues\">*</strong>Altura de la actividad\n    </ion-label>\n\n    <ion-grid>\n      <ion-row class=\"\">\n        <ion-col size=\"3\">\n          <ion-label style=\"font-size: 12px !important\" position=\"floating\">Metros</ion-label>\n          <ion-item style=\"width: 80px\" class=\"border\">\n            <ion-input type=\"number\" [(ngModel)]=\"metros\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label style=\"font-size: 12px !important\" position=\"floating\">Centímetros</ion-label>\n          <ion-item style=\"width: 80px\" class=\"border\">\n            <ion-input [(ngModel)]=\"centimetros\" type=\"number\" max=\"99\" maxlength=\"3\" value=\"0\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br />\n\n    <!-- bton continuar -->\n    <div class=\"ion-text-center ion-padding\">\n      <button class=\"guardar-continuar\" expand=\"block\" color=\"secondary\" (click)=\"continuar()\">Guardar y Continuar</button>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/SST/inicio-permiso/inicio-permiso-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/SST/inicio-permiso/inicio-permiso-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: InicioPermisoPageRoutingModule */

    /***/
    function srcAppPagesSSTInicioPermisoInicioPermisoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPermisoPageRoutingModule", function () {
        return InicioPermisoPageRoutingModule;
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


      var _inicio_permiso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inicio-permiso.page */
      "./src/app/pages/SST/inicio-permiso/inicio-permiso.page.ts");

      var routes = [{
        path: '',
        component: _inicio_permiso_page__WEBPACK_IMPORTED_MODULE_3__["InicioPermisoPage"]
      }, {
        path: 'seccion-general',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-SST-informacion-actividad-seccion-general-seccion-general-module */
          "src-app-pages-SST-informacion-actividad-seccion-general-seccion-general-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.module */
          "./src/app/pages/SST/informacion-actividad/seccion-general/seccion-general.module.ts")).then(function (m) {
            return m.SeccionGeneralPageModule;
          });
        }
      }];

      var InicioPermisoPageRoutingModule = /*#__PURE__*/_createClass(function InicioPermisoPageRoutingModule() {
        _classCallCheck(this, InicioPermisoPageRoutingModule);
      });

      InicioPermisoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InicioPermisoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/inicio-permiso/inicio-permiso.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/SST/inicio-permiso/inicio-permiso.module.ts ***!
      \*******************************************************************/

    /*! exports provided: InicioPermisoPageModule */

    /***/
    function srcAppPagesSSTInicioPermisoInicioPermisoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPermisoPageModule", function () {
        return InicioPermisoPageModule;
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


      var _inicio_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inicio-permiso-routing.module */
      "./src/app/pages/SST/inicio-permiso/inicio-permiso-routing.module.ts");
      /* harmony import */


      var _inicio_permiso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inicio-permiso.page */
      "./src/app/pages/SST/inicio-permiso/inicio-permiso.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var InicioPermisoPageModule = /*#__PURE__*/_createClass(function InicioPermisoPageModule() {
        _classCallCheck(this, InicioPermisoPageModule);
      });

      InicioPermisoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPermisoPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_inicio_permiso_page__WEBPACK_IMPORTED_MODULE_6__["InicioPermisoPage"]]
      })], InicioPermisoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/inicio-permiso/inicio-permiso.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/SST/inicio-permiso/inicio-permiso.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTInicioPermisoInicioPermisoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div.toolbar {\n  background: #beb2b2;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\ndiv.toolbar.toolcontent {\n  background-color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\nion-item.mostrar-usuarios {\n  /* quitar estilos */\n  --background: none;\n  --border-color: none;\n  --border-style: none;\n  width: 100%;\n  background: var(--ion-background-color);\n  color: var(--ion-color-primary);\n  padding: 0 16px;\n  height: 48px;\n  width: 100%;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-position {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  color: var(--ion-color-primary);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  font-size: 24px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  height: 20px;\n}\n.requieredQues {\n  color: red;\n}\nion-col.label-bottom {\n  align-self: flex-end !important;\n  margin-top: auto !important;\n}\nion-item.border {\n  height: 45px;\n  border: 1px solid #808080;\n  border-radius: 10px;\n}\np.counter {\n  display: flex;\n  margin-top: 0;\n  color: var(--ion-color-primary);\n}\n.center-ubi {\n  width: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: 1px solid #808080;\n  height: 40px;\n}\n.center-trabajadores {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  font-size: 17px;\n}\n.error-message {\n  color: red;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2luaWNpby1wZXJtaXNvL2luaWNpby1wZXJtaXNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQUU7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0FBRUY7QUFDQTtFQUNFLCtCQUFBO0VBQ0EsMkJBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUdGO0FBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2luaWNpby1wZXJtaXNvL2luaWNpby1wZXJtaXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi50b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2JlYjJiMjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgJi50b29sY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuaW9uLWl0ZW0ubW9zdHJhci11c3VhcmlvcyB7XG4gIC8qIHF1aXRhciBlc3RpbG9zICovXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1ib3JkZXItY29sb3I6IG5vbmU7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ0bi1wb3NpdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5yZXF1aWVyZWRRdWVzIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWNvbC5sYWJlbC1ib3R0b20ge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtLmJvcmRlciB7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbnAuY291bnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5jZW50ZXItdWJpIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uY2VudGVyLXRyYWJhamFkb3JlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/SST/inicio-permiso/inicio-permiso.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/SST/inicio-permiso/inicio-permiso.page.ts ***!
      \*****************************************************************/

    /*! exports provided: InicioPermisoPage */

    /***/
    function srcAppPagesSSTInicioPermisoInicioPermisoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPermisoPage", function () {
        return InicioPermisoPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/modal-trabajadores/modal-trabajadores.component */
      "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
      /* harmony import */


      var src_app_services_SST_current_postition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/SST/current-postition.service */
      "./src/app/services/SST/current-postition.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/SST/tabla-trabajadores.service */
      "./src/app/services/SST/tabla-trabajadores.service.ts");
      /* harmony import */


      var src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/SST/sekected-items-service.service */
      "./src/app/services/SST/sekected-items-service.service.ts");

      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };

      var InicioPermisoPage = /*#__PURE__*/function () {
        function InicioPermisoPage(modalController, currentPostitionService, alertController, router, dataService, context, device, tablaTrabajadoresService, selectedItemsService) {
          _classCallCheck(this, InicioPermisoPage);

          this.modalController = modalController;
          this.currentPostitionService = currentPostitionService;
          this.alertController = alertController;
          this.router = router;
          this.dataService = dataService;
          this.context = context;
          this.device = device;
          this.tablaTrabajadoresService = tablaTrabajadoresService;
          this.selectedItemsService = selectedItemsService;
          this.locationDivice = null;
          this.boolLocationDivice = false;
          this.location = ' Ubicación';
          this.horaInicioActividad = null;
          this.boolHoraInicioActividad = false;
          this.horaFinActividad = null;
          this.ubicacionTrabajo = null;
          this.boolUbicacionTrabajo = false;
          this.alturaActividad = null;
          this.alturaActividadNumber = null;
          this.boolAlturaActividad = false;
          this.contadorUbicion = 0;
          this.metros = 0;
          this.centimetros = 0;
          this.precargarDatos();
        }

        return _createClass(InicioPermisoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.permisoUbicacion = localStorage.getItem('permisoUbicacion') == 'true' ? true : false;
          }
        }, {
          key: "verTrabajadores",
          value: function verTrabajadores() {
            this.modalController.create({
              component: src_app_components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_3__["ModalTrabajadoresComponent"]
            }).then(function (modal) {
              modal.present();
            });
          }
        }, {
          key: "authCurrentPosition",
          value: function authCurrentPosition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.permisoUbicacion) {
                      _context.next = 3;
                      break;
                    }

                    this.getCurrentPosition();
                    return _context.abrupt("return");

                  case 3:
                    _context.next = 5;
                    return this.alertController.create({
                      header: '¿Autorizas el acceso a la ubicación de este dispositivo para registrarla en el permiso?',
                      buttons: [{
                        text: 'Aceptar',
                        handler: function handler() {
                          _this.getCurrentPosition();

                          localStorage.setItem('permisoUbicacion', 'true');
                          _this.boolLocationDivice = false;
                        }
                      }, 'Cancelar']
                    });

                  case 5:
                    alert = _context.sent;
                    alert.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition() {
            var _this2 = this;

            console.log('getCurrentPosition');
            this.currentPostitionService.verificarPermisos().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var latitud, longitud;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.currentPostitionService.getCurrentPosition();

                    case 2:
                      this.locationDivice = this.currentPostitionService.getLocationDevice();

                      if (this.locationDivice) {
                        _context2.next = 7;
                        break;
                      }

                      this.boolLocationDivice = true;
                      this.mostrarError('No se pudo obtener la ubicación del dispositivo, intenta nuevamente. Verifica que el GPS este activado.');
                      return _context2.abrupt("return");

                    case 7:
                      latitud = this.locationDivice.coords.latitude.toString().length > 10 ? this.locationDivice.coords.latitude.toString().substring(0, 10) : this.locationDivice.coords.latitude.toString();
                      longitud = this.locationDivice.coords.longitude.toString().length > 10 ? this.locationDivice.coords.longitude.toString().substring(0, 10) : this.locationDivice.coords.longitude.toString();
                      this.location = "  ".concat(latitud, ", ").concat(longitud);
                      this.boolLocationDivice = false;

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "continuar",
          value: function continuar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.locationDivice) {
                      _context3.next = 4;
                      break;
                    }

                    this.boolLocationDivice = true;
                    this.mostrarError('Debes autorizar el acceso a la ubicación de este dispositivo para continuar.');
                    return _context3.abrupt("return");

                  case 4:
                    _context3.next = 6;
                    return this.compararFechas();

                  case 6:
                    if (_context3.sent) {
                      _context3.next = 8;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 8:
                    this.boolUbicacionTrabajo = false;

                    if (this.ubicacionTrabajo) {
                      _context3.next = 13;
                      break;
                    }

                    this.mostrarError('Debes ingresar la dirección del trabajo para continuar.');
                    this.boolUbicacionTrabajo = true;
                    return _context3.abrupt("return");

                  case 13:
                    if (!(this.chechNumberAltura() == false)) {
                      _context3.next = 15;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 15:
                    _context3.next = 17;
                    return this.guardarDatos();

                  case 17:
                    this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso/seccion-general']);

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "compararFechas",
          value: function compararFechas() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var hi, hf, alert, _alert, _alert2;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    hi = new Date(this.horaInicioActividad);
                    hf = new Date(this.horaFinActividad);

                    if (!(this.horaInicioActividad == null || this.horaFinActividad == null)) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.next = 5;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: 'Debes ingresar la hora de inicio y la hora de fin de la actividad para continuar.',
                      buttons: ['OK']
                    });

                  case 5:
                    alert = _context4.sent;
                    alert.present();
                    this.boolHoraInicioActividad = true;
                    return _context4.abrupt("return", false);

                  case 9:
                    if (!(hi > hf)) {
                      _context4.next = 16;
                      break;
                    }

                    _context4.next = 12;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: 'La hora de inicio no puede ser mayor o igual a la hora de fin.',
                      buttons: ['OK']
                    });

                  case 12:
                    _alert = _context4.sent;

                    _alert.present();

                    this.boolHoraInicioActividad = true;
                    return _context4.abrupt("return", false);

                  case 16:
                    if (!(hi.getHours() === hf.getHours() && hi.getMinutes() === hf.getMinutes())) {
                      _context4.next = 23;
                      break;
                    }

                    _context4.next = 19;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: 'La hora de inicio no puede ser mayor o igual a la hora de fin.',
                      buttons: ['OK']
                    });

                  case 19:
                    _alert2 = _context4.sent;

                    _alert2.present();

                    this.boolHoraInicioActividad = true;
                    return _context4.abrupt("return", false);

                  case 23:
                    this.boolHoraInicioActividad = false;
                    return _context4.abrupt("return", true);

                  case 25:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "mostrarError",
          value: function mostrarError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Alerta',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "guardarDatos",
          value: function guardarDatos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.infoAuditoria();

                  case 2:
                    this.selectedItemsService.selectedItems = [];
                    this.data.FechaYHoraFinActDate = this.horaFinActividad;
                    this.data['dtmFechaYHoraFinAct'] = this.horaFinActividad;
                    this.data['strFechaYHoraFinAct'] = new Date(this.horaFinActividad).toLocaleDateString('es-ES', options);
                    this.data['strFechaYHoraInicioAct'] = this.data['strFechaRegistro'];
                    this.data['strUbicacionTrabajo'] = this.ubicacionTrabajo;
                    this.data['dblAlturaActividad'] = this.alturaActividadNumber;
                    this.data['lastRoute'] = '/home/permisos/registro-permiso/crear-permiso/inicio-permiso';
                    this.data['metros'] = this.metros;
                    this.data['centimetros'] = this.centimetros;
                    this.dataService.setData(this.data);
                    this.dataService.saveData();

                  case 14:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "precargarDatos",
          value: function precargarDatos() {
            var dataUrl = history.state.data;
            console.log(dataUrl, 'dataUrl-inicio-permiso');

            if (dataUrl) {
              console.log('entro a precargar datos');
              this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
              this.dataService.setData(dataUrl);
              this.data = dataUrl;
              console.log(this.data);
              this.horaInicioActividad = dataUrl.dtmFechaYHoraInicioAct;
              this.horaFinActividad = dataUrl.dtmFechaYHoraFinAct;
              this.ubicacionTrabajo = dataUrl.strUbicacionTrabajo;
              this.alturaActividad = dataUrl.dblAlturaActividad;
              this.metros = dataUrl.metros;
              this.centimetros = dataUrl.centimetros;
              this.location = "  ".concat(dataUrl.edInfoAuditoria.strLatitud, ", ").concat(dataUrl.edInfoAuditoria.strLongitud);
              this.contadorUbicion = this.ubicacionTrabajo.length;
              this.locationDivice = {
                coords: {
                  latitude: dataUrl.edInfoAuditoria.strLatitud,
                  longitude: dataUrl.edInfoAuditoria.strLongitud
                }
              };
            } else {
              this.data = this.dataService.getData();
              this.tablaTrabajadoresService.setListaTrabajadores(this.data['listaTrabajadoresMigrados']); // this.horaInicioActividad = this.data['dtmFechaYHoraInicioAct'];
              // this.horaFinActividad = this.data['dtmFechaYHoraFinAct'];

              this.ubicacionTrabajo = this.data['strUbicacionTrabajo'];
              this.metros = this.data['metros'];
              this.centimetros = this.data['centimetros']; // this.location = `  ${this.data['edInfoAuditoria'].strLatitud}, ${this.data['edInfoAuditoria'].strLongitud}`;
            }

            this.fechaInicio = this.formatearFecha(this.data['dtmFechaRegistro'].toString());
            this.horaInicioActividad = this.data['dtmFechaRegistro'];
            this.strHoraInicioActividad = this.formatearHora(this.data['dtmFechaRegistro']);
          }
        }, {
          key: "infoAuditoria",
          value: function infoAuditoria() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var user;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.context.get();

                  case 2:
                    user = _context7.sent;
                    this.data['edInfoAuditoria'].strLatitud = this.locationDivice.coords.latitude.toString();
                    this.data['edInfoAuditoria'].strLongitud = this.locationDivice.coords.longitude.toString();
                    this.data['edInfoAuditoria'].strDocumentoEmpresa = user['_empresa'].documentoEmp;
                    this.data['edInfoAuditoria'].strNombreEmpresa = user['_empresa'].razonSocial;
                    this.data['edInfoAuditoria'].strTipoDocEmpresa = user['_empresa'].tipoDocumento;
                    this.data['edInfoAuditoria'].strIdentificacionUsuario = user['_trabajador'].id.toString();
                    this.data['edInfoAuditoria'].strNombreUsuario = user['_trabajador'].nombre;
                    this.data['strCorreoUsuarioElaboroPermiso'] = user['_trabajador'].correo;
                    this.data['edInfoAuditoria'].strUUID = this.device.uuid ? this.device.uuid : 'web';
                    this.data['strNumeroDocumento'] = user['_empresa'].id.toString();
                    this.data['strRazonSocial'] = user['_empresa'].razonSocial;
                    this.data['strTipoDocumento'] = user['_empresa'].tipoDocumento;
                    this.data['CorreoUsuarioElaboroPermiso'] = user['_trabajador'].correo;

                  case 16:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "onChangeFin",
          value: function onChangeFin(event) {
            this.horaFinActividad = event.detail.value;
          }
        }, {
          key: "chechNumberAltura",
          value: function chechNumberAltura() {
            if (this.metros == null || this.centimetros == null) {
              this.mostrarError('Debes ingresar la altura de la actividad para continuar.');
              this.boolAlturaActividad = true;
              return false;
            }

            if (this.centimetros > 99) {
              this.mostrarError('Los centimetros no pueden ser mayor a 99');
              this.boolAlturaActividad = true;
              return false;
            }

            this.metros = Math.floor(this.metros);
            this.alturaActividadNumber = this.metros + this.centimetros / 100;

            if (this.alturaActividadNumber <= 1.49) {
              this.mostrarError('La altura de la actividad debe ser mayor a 1.50');
              this.boolAlturaActividad = true;
              return false;
            }

            this.alturaActividad = this.alturaActividadNumber.toString();
            this.boolAlturaActividad = false;
            return true;
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home/permisos/registro-permiso/crear-permiso'], {
              state: {
                data: this.data
              }
            });
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
          key: "formatearHora",
          value: function formatearHora(fecha) {
            var date = new Date(fecha);
            var hora = date.getHours();
            var minutos = date.getMinutes();
            var horaFormateada = "".concat(hora.toString().padStart(2, '0'), ":").concat(minutos.toString().padStart(2, '0'));
            return horaFormateada;
          }
        }, {
          key: "actualizarContador",
          value: function actualizarContador(event) {
            if (event.target.value.length == 0) {
              this.contadorUbicion = 0;
              return;
            }

            this.contadorUbicion = event.target.value.length;
          }
        }]);
      }();

      InicioPermisoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_SST_current_postition_service__WEBPACK_IMPORTED_MODULE_4__["CurrentPostitionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_7__["ContextService"]
        }, {
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"]
        }, {
          type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_9__["TablaTrabajadoresService"]
        }, {
          type: src_app_services_SST_sekected_items_service_service__WEBPACK_IMPORTED_MODULE_10__["SekectedItemsServiceService"]
        }];
      };

      InicioPermisoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio-permiso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inicio-permiso.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/inicio-permiso/inicio-permiso.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inicio-permiso.page.scss */
        "./src/app/pages/SST/inicio-permiso/inicio-permiso.page.scss"))["default"]]
      })], InicioPermisoPage);
      /***/
    },

    /***/
    "./src/app/services/SST/current-postition.service.ts":
    /*!***********************************************************!*\
      !*** ./src/app/services/SST/current-postition.service.ts ***!
      \***********************************************************/

    /*! exports provided: CurrentPostitionService */

    /***/
    function srcAppServicesSSTCurrentPostitionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentPostitionService", function () {
        return CurrentPostitionService;
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


      var src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/entities/condiciones-salud */
      "./src/app/entities/condiciones-salud.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var CurrentPostitionService = /*#__PURE__*/function () {
        function CurrentPostitionService(utils, geolocation) {
          _classCallCheck(this, CurrentPostitionService);

          this.utils = utils;
          this.geolocation = geolocation;
          this.locationDevice = null;
        }

        return _createClass(CurrentPostitionService, [{
          key: "getLocationDevice",
          value: function getLocationDevice() {
            return this.locationDevice;
          }
        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    this.geolocation.getCurrentPosition().then(function (resp) {
                      _this3.onFinally(resp.coords.latitude.toString(), resp.coords.longitude.toString());

                      _this3.locationDevice = resp;
                    })["catch"](function (error) {
                      console.log('Error getting location', error);
                    });
                    _context8.next = 10;
                    break;

                  case 6:
                    _context8.prev = 6;
                    _context8.t0 = _context8["catch"](0);
                    console.error('Error al obtener la ubicación:', _context8.t0);
                    this.onFinally();

                  case 10:
                    _context8.prev = 10;
                    this.utils.dismissLoading();
                    return _context8.finish(10);

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this, [[0, 6, 10, 13]]);
            }));
          }
        }, {
          key: "onFinally",
          value: function onFinally(latitude, longitude) {
            this.utils.dismissLoading();
            var geolocation = new src_app_entities_condiciones_salud__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]();
            geolocation.latitude = latitude;
            geolocation.longitude = longitude;
          }
        }, {
          key: "verificarPermisos",
          value: function verificarPermisos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var result;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    console.log('El navegador admite la API de permisos de geolocalización');

                    if (!('permissions' in navigator)) {
                      _context9.next = 12;
                      break;
                    }

                    _context9.prev = 2;
                    _context9.next = 5;
                    return navigator.permissions.query({
                      name: 'geolocation'
                    });

                  case 5:
                    result = _context9.sent;

                    if (result.state === 'granted') {
                      this.getCurrentPosition();
                    } else if (result.state === 'prompt') {
                      console.log('Los permisos aún no se han otorgado');
                    } else if (result.state === 'denied') {
                      console.log('Los permisos están denegados');
                      window.location.href = 'app-settings:';
                    }

                    _context9.next = 12;
                    break;

                  case 9:
                    _context9.prev = 9;
                    _context9.t0 = _context9["catch"](2);
                    console.error('Error al verificar los permisos de geolocalización:', _context9.t0);

                  case 12:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this, [[2, 9]]);
            }));
          }
        }]);
      }();

      CurrentPostitionService.ctorParameters = function () {
        return [{
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
        }];
      };

      CurrentPostitionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CurrentPostitionService);
      /***/
    },

    /***/
    "./src/app/services/SST/sekected-items-service.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/services/SST/sekected-items-service.service.ts ***!
      \****************************************************************/

    /*! exports provided: SekectedItemsServiceService */

    /***/
    function srcAppServicesSSTSekectedItemsServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SekectedItemsServiceService", function () {
        return SekectedItemsServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SekectedItemsServiceService = /*#__PURE__*/function () {
        function SekectedItemsServiceService() {
          _classCallCheck(this, SekectedItemsServiceService);

          this.selectedItems = {};
        }

        return _createClass(SekectedItemsServiceService, [{
          key: "getSelectedItems",
          value: function getSelectedItems() {
            return this.selectedItems;
          }
        }, {
          key: "setSelectedItems",
          value: function setSelectedItems(items) {
            this.selectedItems = items;
          }
        }]);
      }();

      SekectedItemsServiceService.ctorParameters = function () {
        return [];
      };

      SekectedItemsServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SekectedItemsServiceService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-inicio-permiso-inicio-permiso-module-es5.js.map