(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-SST-crear-permiso-crear-permiso-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/crear-permiso/crear-permiso.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/crear-permiso/crear-permiso.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSSTCrearPermisoCrearPermisoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n  <div class=\"toolbar\">\n    <ion-title>Registro permiso</ion-title>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-label class=\"ion-padding\" style=\"font-weight: 700\">Permiso de Trabajo</ion-label>\n    <ion-item class=\"border\">\n      <ion-select [(ngModel)]=\"tipoPermiso\" (ionChange)=\"onChangePermiso($event)\" okText=\"Aceptar\" cancelText=\"Cancelar\">\n        <ion-item *ngFor=\"let permiso of listaTipoPermiso\">\n          <ion-select-option value=\"{{permiso.strDescripcion}}\">{{permiso.strDescripcion}}</ion-select-option>\n        </ion-item>\n      </ion-select>\n    </ion-item>\n    <br />\n    <ion-label class=\"ion-padding\" style=\"font-weight: 700\">Tipo Documento</ion-label>\n    <ion-item class=\"border\">\n      <ion-select [(ngModel)]=\"tipoDeDocumento\" okText=\"Aceptar\" cancelText=\"Cancelar\">\n        <ion-select-option value=\"CC\">Cédula de Ciudadanía</ion-select-option>\n        <ion-select-option value=\"CE\">Cédula de Extranjería</ion-select-option>\n        <ion-select-option value=\"PA\">Pasaporte</ion-select-option>\n        <ion-select-option value=\"TI\">Tarjeta de Identidad</ion-select-option>\n        <ion-select-option value=\"PT\">Permiso Trabajo</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <br />\n    <ion-label class=\"ion-padding\" style=\"font-weight: 700\" position=\"floating\">Número Identificación</ion-label>\n    <ion-row>\n      <ion-col size=\"10\">\n        <!-- label: numero de documento -->\n        <ion-item class=\"border\" *ngIf=\"tipoDeDocumento !== 'PA'\">\n          <ion-input\n            type=\"number\"\n            inputmode=\"numeric\"\n            pattern=\"^[0-9]*$\"\n            [(ngModel)]=\"numeroDeDocumento\"\n            (keyup)=\"numberOnly($event)\"\n          ></ion-input>\n        </ion-item>\n        <ion-item class=\"border\" *ngIf=\"tipoDeDocumento === 'PA'\">\n          <ion-input type=\"text\" [(ngModel)]=\"numeroDeDocumento\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"2\" style=\"margin: 0; padding: 0\">\n        <!-- btn buscar -->\n        <ion-button style=\"font-size: 0\" fill=\"outline\" class=\"ion-text-end\" expand=\"block\" color=\"primary\" (click)=\"buscarTrabajador()\"\n          ><ion-icon style=\"font-size: 1.5rem\" name=\"search\"></ion-icon\n        ></ion-button>\n      </ion-col>\n    </ion-row>\n    <br />\n    <!-- btn adicionar trabajador -->\n\n    <div (click)=\"leerQr()\">\n      <button class=\"qr\" expand=\"block\" color=\"secondary\" (click)=\"addTrabajador()\">\n        Escanear QR <ion-icon style=\"font-size: 28px\" name=\"help-circle-outline\"></ion-icon>\n      </button>\n    </div>\n    <br />\n\n    <!-- un checkbox para poder marcar todos los usuarios  -->\n    <div class=\"ion-text-center titulo-tabla\">\n      <ion-label style=\"font-weight: 700\">Trabajadores Agregados al Permiso de Trabajo</ion-label>\n    </div>\n    <!-- tabla -->\n    <ion-grid>\n      <ion-row class=\"header-table\">\n        <ion-col size=\"3\">\n          <ion-label>Nombre </ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>ID</ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>Cargo</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>Ayudante de Seguridad</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>Trabajador Autorizado</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngFor=\"let trabajador of tablaTrabajadores | slice:(currentPage - 1) * workersPerPage:currentPage * workersPerPage\"\n        class=\"body-table\"\n      >\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strNombreTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>{{trabajador.strNumeroDocumeto}}</ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>{{trabajador.strCargoTrabajador}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" class=\"check\">\n          <ion-checkbox [(ngModel)]=\"trabajador.blnAyudanteSeguridad\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"2\" class=\"check\">\n          <ion-checkbox [(ngModel)]=\"trabajador.accion\"></ion-checkbox>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"pagination-buttons ion-text-center\">\n      <ion-button style=\"height: 24px\" (click)=\"previousPage()\" [disabled]=\"currentPage === 1\"\n        ><ion-icon name=\"chevron-back\"></ion-icon\n      ></ion-button>\n      <ion-button style=\"height: 24px\" [disabled]=\"true\">{{currentPage}}/{{totalPage}}</ion-button>\n      <ion-button style=\"height: 24px\" (click)=\"nextPage()\" [disabled]=\"currentPage * workersPerPage >= tablaTrabajadores.length\"\n        ><ion-icon name=\"chevron-forward-outline\"></ion-icon\n      ></ion-button>\n    </div>\n    <div class=\"ion-padding\">Total de trabajadores: {{tablaTrabajadores.length}}</div>\n    <!-- btn guardar -->\n    <div class=\"ion-text-center\">\n      <button class=\"guardar-continuar\" *ngIf=\"tablaTrabajadores.length > 0\" expand=\"block\" color=\"secondary\" (click)=\"guardar()\">\n        Guardar y Continuar\n      </button>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts ***!
      \*******************************************************************/

    /*! exports provided: EDFirmaResponsablePermisoTrabajo */

    /***/
    function srcAppInterfacesEdfirmaResponsablePermisoTrabajoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EDFirmaResponsablePermisoTrabajo", function () {
        return EDFirmaResponsablePermisoTrabajo;
      });

      var EDFirmaResponsablePermisoTrabajo = /*#__PURE__*/_createClass(function EDFirmaResponsablePermisoTrabajo() {
        _classCallCheck(this, EDFirmaResponsablePermisoTrabajo);

        this.strTipoDocumento = '';
        this.strNombreCompleto = '';
        this.strDocumentoIdentificacion = '';
        this.strCargo = '';
        this.strFirmaBase64 = '';
        this.strLatitud = '';
        this.strLongitud = '';
      });
      /***/

    },

    /***/
    "./src/app/interfaces/edguardar-permiso-trabajo-app.ts":
    /*!*************************************************************!*\
      !*** ./src/app/interfaces/edguardar-permiso-trabajo-app.ts ***!
      \*************************************************************/

    /*! exports provided: EDGuardarPermisoTrabajoAPP */

    /***/
    function srcAppInterfacesEdguardarPermisoTrabajoAppTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EDGuardarPermisoTrabajoAPP", function () {
        return EDGuardarPermisoTrabajoAPP;
      });
      /* harmony import */


      var _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edfirma-responsable-permiso-trabajo */
      "./src/app/interfaces/edfirma-responsable-permiso-trabajo.ts");
      /* harmony import */


      var _edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./edinfo-auditoria-app */
      "./src/app/interfaces/edinfo-auditoria-app.ts");

      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };

      var EDGuardarPermisoTrabajoAPP = /*#__PURE__*/function () {
        function EDGuardarPermisoTrabajoAPP() {
          _classCallCheck(this, EDGuardarPermisoTrabajoAPP);

          this.uniqueId = Date.now().toString();
          this.enviar = false;
          this.lastRoute = '';
          this.fk_ID_PermisoAlturas_MaestroTipoPermiso = 0;
          this.strRazonSocial = '';
          this.strTipoDocumento = '';
          this.strNumeroDocumento = '';
          this.strFechaRegistro = '';
          this.FechaRegistroDate = new Date();
          this.strFechaYHoraInicioAct = '';
          this.dtmFechaYHoraInicioAct = new Date();
          this.strFechaYHoraFinAct = '';
          this.dtmFechaYHoraFinAct = new Date();
          this.strUbicacionTrabajo = '';
          this.dblAlturaActividad = 0;
          this.metros = 0;
          this.centimetros = 0;
          this.listaMaestroCuestionario = [];
          this.strTipoTrabajo = '';
          this.strAntesActividad = '';
          this.strDuranteActividad = '';
          this.strDespuesActividad = '';
          this.listaItemSeleccionados = [];
          this.listaTrabajadoresMigrados = [];
          this.strObservaciones = '';
          this.blnPermisoAutorizado = false;
          this.edAutorizadoPermisoTrabajo = new _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__["EDFirmaResponsablePermisoTrabajo"]();
          this.edResponsableActivarPlanEmergencia = new _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__["EDFirmaResponsablePermisoTrabajo"]();
          this.edCoordinadorTrabajoAlturas = new _edfirma_responsable_permiso_trabajo__WEBPACK_IMPORTED_MODULE_0__["EDFirmaResponsablePermisoTrabajo"]();
          this.listaAnexoImagenes = [];
          this.strCorreoUsuarioElaboroPermiso = '';
          this.edInfoAuditoria = new _edinfo_auditoria_app__WEBPACK_IMPORTED_MODULE_1__["EDInfoAuditoriaAPP"]();
        }

        return _createClass(EDGuardarPermisoTrabajoAPP, [{
          key: "UniqueId",
          get: function get() {
            return this.uniqueId;
          }
        }, {
          key: "Enviar",
          get: function get() {
            return this.enviar;
          },
          set: function set(enviar) {
            this.enviar = enviar;
          }
        }, {
          key: "LastRoute",
          get: function get() {
            return this.lastRoute;
          },
          set: function set(lastRoute) {
            this.lastRoute = lastRoute;
          }
        }, {
          key: "FK_ID_PermisoAlturas_MaestroTipoPermiso",
          get: function get() {
            return this.fk_ID_PermisoAlturas_MaestroTipoPermiso;
          },
          set: function set(fk_ID_PermisoAlturas_MaestroTipoPermiso) {
            this.fk_ID_PermisoAlturas_MaestroTipoPermiso = fk_ID_PermisoAlturas_MaestroTipoPermiso;
          }
        }, {
          key: "RazonSocial",
          get: function get() {
            return this.strRazonSocial;
          },
          set: function set(razonSocial) {
            this.strRazonSocial = razonSocial;
          }
        }, {
          key: "TipoDocumento",
          get: function get() {
            return this.strTipoDocumento;
          },
          set: function set(tipoDocumento) {
            this.strTipoDocumento = tipoDocumento;
          }
        }, {
          key: "NumeroDocumento",
          get: function get() {
            return this.strNumeroDocumento;
          },
          set: function set(numeroDocumento) {
            this.strNumeroDocumento = numeroDocumento;
          }
        }, {
          key: "FechaRegistro",
          get: function get() {
            return this.strFechaRegistro;
          },
          set: function set(fechaRegistro) {
            this.strFechaRegistro = fechaRegistro;
          }
        }, {
          key: "FechaRegistroDate",
          get: function get() {
            return this.dtmFechaRegistro;
          },
          set: function set(fechaRegistro) {
            this.dtmFechaRegistro = new Date(fechaRegistro);
            this.strFechaRegistro = new Date(fechaRegistro).toLocaleDateString('es-ES', options);
            this.strFechaYHoraInicioAct = new Date(fechaRegistro).toLocaleDateString('es-ES', options);
          }
        }, {
          key: "FechaYHoraInicioAct",
          get: function get() {
            return this.strFechaYHoraInicioAct;
          },
          set: function set(fechaYHoraInicioAct) {
            this.strFechaYHoraInicioAct = fechaYHoraInicioAct;
          }
        }, {
          key: "FechaYHoraInicioActDate",
          get: function get() {
            return this.dtmFechaYHoraInicioAct;
          },
          set: function set(fechaYHoraInicioAct) {
            this.dtmFechaYHoraInicioAct = fechaYHoraInicioAct;
            this.strFechaYHoraInicioAct = new Date(fechaYHoraInicioAct).toLocaleDateString('es-ES', options);
          }
        }, {
          key: "FechaYHoraFinAct",
          get: function get() {
            return this.strFechaYHoraFinAct;
          },
          set: function set(fechaYHoraFinAct) {
            this.strFechaYHoraFinAct = fechaYHoraFinAct;
          }
        }, {
          key: "FechaYHoraFinActDate",
          get: function get() {
            return this.dtmFechaYHoraFinAct;
          },
          set: function set(fechaYHoraFinAct) {
            this.dtmFechaYHoraFinAct = fechaYHoraFinAct;
            this.strFechaYHoraFinAct = new Date(fechaYHoraFinAct).toLocaleDateString('es-ES', options);
          }
        }, {
          key: "UbicacionTrabajo",
          get: function get() {
            return this.strUbicacionTrabajo;
          },
          set: function set(ubicacionTrabajo) {
            this.strUbicacionTrabajo = ubicacionTrabajo;
          }
        }, {
          key: "AlturaActividad",
          get: function get() {
            return this.dblAlturaActividad;
          },
          set: function set(alturaActividad) {
            this.dblAlturaActividad = alturaActividad;
          }
        }, {
          key: "Metros",
          get: function get() {
            return this.metros;
          },
          set: function set(metros) {
            this.metros = metros;
          }
        }, {
          key: "Centimetros",
          get: function get() {
            return this.centimetros;
          }
        }, {
          key: "MaestroCuestionario",
          get: function get() {
            return this.listaMaestroCuestionario;
          },
          set: function set(maestroCuestionario) {
            this.listaMaestroCuestionario = maestroCuestionario;
          }
        }, {
          key: "TipoTrabajo",
          get: function get() {
            return this.strTipoTrabajo;
          },
          set: function set(tipoTrabajo) {
            this.strTipoTrabajo = tipoTrabajo;
          }
        }, {
          key: "AntesActividad",
          get: function get() {
            return this.strAntesActividad;
          },
          set: function set(antesActividad) {
            this.strAntesActividad = antesActividad;
          }
        }, {
          key: "DuranteActividad",
          get: function get() {
            return this.strDuranteActividad;
          },
          set: function set(duranteActividad) {
            this.strDuranteActividad = duranteActividad;
          }
        }, {
          key: "DespuesActividad",
          get: function get() {
            return this.strDespuesActividad;
          },
          set: function set(despuesActividad) {
            this.strDespuesActividad = despuesActividad;
          }
        }, {
          key: "ItemSeleccionados",
          get: function get() {
            return this.listaItemSeleccionados;
          },
          set: function set(itemSeleccionados) {
            this.listaItemSeleccionados = itemSeleccionados;
          }
        }, {
          key: "TrabajadoresMigrados",
          get: function get() {
            return this.listaTrabajadoresMigrados;
          },
          set: function set(trabajadoresMigrados) {
            this.listaTrabajadoresMigrados = trabajadoresMigrados;
          }
        }, {
          key: "Observaciones",
          get: function get() {
            return this.strObservaciones;
          },
          set: function set(observaciones) {
            this.strObservaciones = observaciones;
          }
        }, {
          key: "PermisoAutorizado",
          get: function get() {
            return this.blnPermisoAutorizado;
          },
          set: function set(permisoAutorizado) {
            this.blnPermisoAutorizado = permisoAutorizado;
          }
        }, {
          key: "AutorizadoPermisoTrabajo",
          get: function get() {
            return this.edAutorizadoPermisoTrabajo;
          },
          set: function set(autorizadoPermisoTrabajo) {
            this.edAutorizadoPermisoTrabajo = autorizadoPermisoTrabajo;
          }
        }, {
          key: "ResponsableActivarPlanEmergencia",
          get: function get() {
            return this.edResponsableActivarPlanEmergencia;
          },
          set: function set(responsableActivarPlanEmergencia) {
            this.edResponsableActivarPlanEmergencia = responsableActivarPlanEmergencia;
          }
        }, {
          key: "CoordinadorTrabajoAlturas",
          get: function get() {
            return this.edCoordinadorTrabajoAlturas;
          },
          set: function set(coordinadorTrabajoAlturas) {
            this.edCoordinadorTrabajoAlturas = coordinadorTrabajoAlturas;
          }
        }, {
          key: "AnexoImagenes",
          get: function get() {
            return this.listaAnexoImagenes;
          },
          set: function set(anexoImagenes) {
            this.listaAnexoImagenes = anexoImagenes;
          }
        }, {
          key: "CorreoUsuarioElaboroPermiso",
          get: function get() {
            return this.strCorreoUsuarioElaboroPermiso;
          },
          set: function set(correoUsuarioElaboroPermiso) {
            this.strCorreoUsuarioElaboroPermiso = correoUsuarioElaboroPermiso;
          }
        }, {
          key: "InfoAuditoria",
          get: function get() {
            return this.edInfoAuditoria;
          },
          set: function set(infoAuditoria) {
            this.edInfoAuditoria = infoAuditoria;
          }
        }]);
      }();
      /***/

    },

    /***/
    "./src/app/pages/SST/crear-permiso/crear-permiso-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/SST/crear-permiso/crear-permiso-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CrearPermisoPageRoutingModule */

    /***/
    function srcAppPagesSSTCrearPermisoCrearPermisoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearPermisoPageRoutingModule", function () {
        return CrearPermisoPageRoutingModule;
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


      var _crear_permiso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crear-permiso.page */
      "./src/app/pages/SST/crear-permiso/crear-permiso.page.ts");

      var routes = [{
        path: '',
        component: _crear_permiso_page__WEBPACK_IMPORTED_MODULE_3__["CrearPermisoPage"]
      }, {
        path: 'inicio-permiso',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-SST-inicio-permiso-inicio-permiso-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-SST-inicio-permiso-inicio-permiso-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/SST/inicio-permiso/inicio-permiso.module */
          "./src/app/pages/SST/inicio-permiso/inicio-permiso.module.ts")).then(function (m) {
            return m.InicioPermisoPageModule;
          });
        }
      }];

      var CrearPermisoPageRoutingModule = /*#__PURE__*/_createClass(function CrearPermisoPageRoutingModule() {
        _classCallCheck(this, CrearPermisoPageRoutingModule);
      });

      CrearPermisoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CrearPermisoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/crear-permiso/crear-permiso.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/SST/crear-permiso/crear-permiso.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CrearPermisoPageModule */

    /***/
    function srcAppPagesSSTCrearPermisoCrearPermisoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearPermisoPageModule", function () {
        return CrearPermisoPageModule;
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


      var _crear_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crear-permiso-routing.module */
      "./src/app/pages/SST/crear-permiso/crear-permiso-routing.module.ts");
      /* harmony import */


      var _crear_permiso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./crear-permiso.page */
      "./src/app/pages/SST/crear-permiso/crear-permiso.page.ts");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");

      var CrearPermisoPageModule = /*#__PURE__*/_createClass(function CrearPermisoPageModule() {
        _classCallCheck(this, CrearPermisoPageModule);
      });

      CrearPermisoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_permiso_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearPermisoPageRoutingModule"], src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_crear_permiso_page__WEBPACK_IMPORTED_MODULE_6__["CrearPermisoPage"]]
      })], CrearPermisoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/SST/crear-permiso/crear-permiso.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/SST/crear-permiso/crear-permiso.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSSTCrearPermisoCrearPermisoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-table {\n  font-size: 0.59rem;\n  font-weight: bold;\n  background-color: #b1b7bd;\n  color: black;\n  text-align: center;\n  padding: 2px;\n  border: 1px solid #b1b7bd;\n  border-radius: 0px 0px 0px 0px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  margin: 0 auto;\n  align-items: center;\n}\n.header-table ion-label {\n  display: flex;\n  justify-content: center;\n}\n.body-table {\n  font-size: 0.5rem;\n  font-weight: 400;\n  background-color: #e9ecef;\n  color: black;\n  text-align: start;\n  align-items: center;\n  padding-bottom: 2px;\n  border: 1px solid #b1b7bd;\n  min-height: 42px;\n}\n.body-table .check {\n  text-align: center;\n}\n.titulo-tabla {\n  background-color: #b1b7bd;\n  margin-top: 10px;\n  padding: 5px;\n  font-size: 0.9rem;\n  border-radius: 8px 8px 0px 0px;\n}\nion-grid {\n  padding: 0px;\n}\nion-col {\n  padding-top: 0;\n}\ndiv.toolbar {\n  background: #ff7500;\n  color: #fff;\n  padding: 0 16px;\n  height: 48px;\n  align-items: center;\n  display: flex;\n  text-align: center;\n}\ndiv.toolbar ion-title {\n  color: #fff;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nbutton.adicionar {\n  font-weight: 800;\n  color: #000;\n  background: #ff7500 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 40%;\n  height: 24px;\n  font-size: 14px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nbutton.qr {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  color: #fff;\n  background: #0027ff !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  transition: all 0.3s ease;\n}\nion-item.border {\n  height: 45px;\n  border: 1px solid #808080;\n  border-radius: 10px;\n}\nion-select {\n  width: 100%;\n}\nion-select div.select-icon {\n  opacity: 1 !important;\n}\ndialog {\n  background-color: white;\n  color: black;\n  border-color: transparent;\n  overflow: hidden;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: 0 0 20px 8px #d0d0d0;\n  height: 100%;\n  width: 100%;\n}\ndialog .header {\n  color: black;\n  padding: 10px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: center;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #b1b7bd;\n}\ndialog .header .close {\n  float: right;\n  cursor: pointer;\n  background: transparent !important;\n  color: black;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\ndialog .body {\n  padding: 10px;\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvU1NUL2NyZWFyLXBlcm1pc28vY3JlYXItcGVybWlzby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVKO0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtBQUVKO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtBQUVKO0FBRUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvU1NUL2NyZWFyLXBlcm1pc28vY3JlYXItcGVybWlzby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRhYmxlIHtcbiAgZm9udC1zaXplOiAwLjU5cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjdiZDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IxYjdiZDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBpb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLmJvZHktdGFibGUge1xuICBmb250LXNpemU6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IxYjdiZDtcbiAgbWluLWhlaWdodDogNDJweDtcbiAgLmNoZWNrIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnRpdHVsby10YWJsYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWI3YmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuZGl2LnRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjZmY3NTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuYnV0dG9uLmd1YXJkYXItY29udGludWFyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YjlhNDkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uLmFkaWNpb25hciB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmY3NTAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uLnFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDI3ZmYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5pb24taXRlbS5ib3JkZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGl2LnNlbGVjdC1pY29uIHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDhweCAjZDBkMGQwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaWFsb2cgLmhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiMWI3YmQ7XG4gIC5jbG9zZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5kaWFsb2cgLmJvZHkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/SST/crear-permiso/crear-permiso.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/SST/crear-permiso/crear-permiso.page.ts ***!
      \***************************************************************/

    /*! exports provided: CrearPermisoPage */

    /***/
    function srcAppPagesSSTCrearPermisoCrearPermisoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearPermisoPage", function () {
        return CrearPermisoPage;
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


      var src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/SST/data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/SST/tabla-trabajadores.service */
      "./src/app/services/SST/tabla-trabajadores.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_interfaces_edguardar_permiso_trabajo_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/interfaces/edguardar-permiso-trabajo-app */
      "./src/app/interfaces/edguardar-permiso-trabajo-app.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");
      /* harmony import */


      var src_app_components_qr_qr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/components/qr/qr.component */
      "./src/app/components/qr/qr.component.ts");
      /* harmony import */


      var src_app_components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/components/modal-add-trabajador/modal-add-trabajador.component */
      "./src/app/components/modal-add-trabajador/modal-add-trabajador.component.ts");
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/network.service */
      "./src/app/services/network.service.ts");
      /* harmony import */


      var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/SST/data.service */
      "./src/app/services/SST/data.service.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");

      var CrearPermisoPage = /*#__PURE__*/function () {
        function CrearPermisoPage(dataBaseService, tablaTrabajadoresService, router, alertController, saveDataService, utils, modalController, modalController2, modalControllerQr, chekInternet, dataService, context) {
          _classCallCheck(this, CrearPermisoPage);

          this.dataBaseService = dataBaseService;
          this.tablaTrabajadoresService = tablaTrabajadoresService;
          this.router = router;
          this.alertController = alertController;
          this.saveDataService = saveDataService;
          this.utils = utils;
          this.modalController = modalController;
          this.modalController2 = modalController2;
          this.modalControllerQr = modalControllerQr;
          this.chekInternet = chekInternet;
          this.dataService = dataService;
          this.context = context;
          this.tablaTrabajadores = [];
          this.listaTipoPermiso = [];
          this.tipoDeDocumento = 'CC';
          this.showDialog = false;
          this.trabajadoresMarcados = [];
          this.currentPage = 1;
          this.workersPerPage = 10;
          this.habilitarEdicionCargo = false;
          this.trabajador = {
            blnCodigoQR: false,
            strCargoTrabajador: '',
            strNombreTrabajador: '',
            blnAyudanteSeguridad: false,
            accion: false,
            Fk_ID_Empresa: 0,
            PK_ID_PermisoAlturas_PersonasAMigrar: 0,
            strNumeroDocumeto: '',
            strTipoDocumento: ''
          };
        }

        return _createClass(CrearPermisoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log('ngOnInit');
            this.tiposDePermiso();
            this.context.get().then(function (response) {
              _this.idEMpresa = response['_empresa'].id.toString();
              console.log('id empresa', _this.idEMpresa);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('ionViewWillEnter');
            this.precargarDatos();
          }
        }, {
          key: "buscarTrabajador",
          value: function buscarTrabajador() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.numeroDeDocumento === undefined || this.numeroDeDocumento === '' || this.tipoDeDocumento === undefined)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    try {
                      this.dataBaseService.open().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          var trabajador, internet, user;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return this.dataBaseService.getTrabajador("".concat(this.numeroDeDocumento), this.tipoDeDocumento);

                              case 2:
                                trabajador = _context.sent;

                                if (!(trabajador === null)) {
                                  _context.next = 31;
                                  break;
                                }

                                _context.next = 6;
                                return this.chekInternet.testNetworkConnection();

                              case 6:
                                internet = _context.sent;

                                if (internet) {
                                  _context.next = 11;
                                  break;
                                }

                                this.mostrarError('No se encontró el trabajador');
                                this.limpiaCampos();
                                return _context.abrupt("return");

                              case 11:
                                console.log('buscado web');
                                _context.next = 14;
                                return this.utils.presentLoading();

                              case 14:
                                _context.next = 16;
                                return this.dataService.getTrabajador("".concat(this.numeroDeDocumento), this.tipoDeDocumento);

                              case 16:
                                user = _context.sent;
                                console.log('user', user);

                                if (user.blnAfiliadoEmpresaActivo) {
                                  _context.next = 23;
                                  break;
                                }

                                this.mostrarError('Estimado usuario, el trabajador consultado no cuenta con relación laboral en la empresa con la que se inició sesión.');
                                this.limpiaCampos();
                                this.utils.dismissLoading();
                                return _context.abrupt("return");

                              case 23:
                                this.trabajador = user;
                                this.trabajador.accion = true;
                                this.trabajador.strTipoDocumento = user.strTipoDocumento;
                                console.log('trabajador', this.trabajador);
                                _context.next = 29;
                                return this.dataBaseService.addTrabajadorMigrado(user);

                              case 29:
                                _context.next = 33;
                                break;

                              case 31:
                                this.trabajador = trabajador;
                                this.trabajador.accion = true;

                              case 33:
                                this.utils.dismissLoading();
                                this.prepararUser();

                              case 35:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee, this);
                        }));
                      });
                    } catch (error) {
                      this.dataBaseService.close();
                    } finally {
                      this.utils.dismissLoading();
                    }

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cerrarModal",
          value: function cerrarModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController2.create({
                      component: src_app_components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_10__["ModalAddTrabajadorComponent"]
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.dismiss();
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "prepararUser",
          value: function prepararUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this3 = this;

              var modal;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    if (this.modalControllerQr) this.modalControllerQr.dismiss();
                    this.trabajador.strCargoTrabajador = 'Trabajador';
                    _context4.next = 4;
                    return this.modalController.create({
                      component: src_app_components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_10__["ModalAddTrabajadorComponent"],
                      componentProps: {
                        trabajador: this.trabajador
                      }
                    });

                  case 4:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (result) {
                      console.log('result', result);

                      if (result.data !== undefined) {
                        var trabajadorActualizado = result.data.trabajador;
                        _this3.trabajador = trabajadorActualizado;
                        _this3.cargoTrabajador = trabajadorActualizado.strCargoTrabajador;

                        _this3.addTrabajador();
                      } else {
                        _this3.limpiaCampos();
                      }
                    });
                    _context4.next = 8;
                    return modal.present();

                  case 8:
                    return _context4.abrupt("return", _context4.sent);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "limpiaCampos",
          value: function limpiaCampos() {
            this.habilitarEdicionCargo = false;
            this.tipoDeDocumento = 'CC';
            this.numeroDeDocumento = '';
            this.cargoTrabajador = '';
            this.trabajador = {
              strCargoTrabajador: '',
              strNombreTrabajador: '',
              blnAyudanteSeguridad: false,
              accion: false,
              Fk_ID_Empresa: 0,
              PK_ID_PermisoAlturas_PersonasAMigrar: 0,
              strNumeroDocumeto: '',
              strTipoDocumento: ''
            };
          }
        }, {
          key: "addTrabajador",
          value: function addTrabajador() {
            if (this.trabajador.strNombreTrabajador === '') return;
            this.trabajador.strCargoTrabajador = this.cargoTrabajador;
            this.tablaTrabajadoresService.addTrabajador(this.trabajador);
            this.tablaTrabajadores = this.tablaTrabajadoresService.getTablaTrabajadores();
            this.totalPage = Math.ceil(this.tablaTrabajadores.length / this.workersPerPage);
            this.limpiaCampos();
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(this.tablaTrabajadores.length === 0)) {
                      _context5.next = 3;
                      break;
                    }

                    this.mostrarError('Debe agregar al menos un trabajador');
                    return _context5.abrupt("return");

                  case 3:
                    if (!(this.tipoPermiso === undefined)) {
                      _context5.next = 6;
                      break;
                    }

                    this.mostrarError('Debe seleccionar un tipo de permiso');
                    return _context5.abrupt("return");

                  case 6:
                    if (!(this.getTrabajadoresChecked().length === 0)) {
                      _context5.next = 9;
                      break;
                    }

                    this.mostrarError('Debe seleccionar al menos un trabajador');
                    return _context5.abrupt("return");

                  case 9:
                    if (!(this.getTrabajadoresNotChecked().length > 0)) {
                      _context5.next = 12;
                      break;
                    }

                    this.mostrarError('Hay trabajadores sin seleccionar');
                    return _context5.abrupt("return");

                  case 12:
                    _context5.next = 14;
                    return this.guardarDatos();

                  case 14:
                    this.router.navigate(['/home/permisos/registro-permiso/crear-permiso/inicio-permiso']);

                  case 15:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "leerQr",
          value: function leerQr() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this4 = this;

              var usuario, modalQr;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return this.modalControllerQr.create({
                      component: src_app_components_qr_qr_component__WEBPACK_IMPORTED_MODULE_9__["QRComponent"]
                    });

                  case 3:
                    modalQr = _context7.sent;
                    _context7.next = 6;
                    return modalQr.present();

                  case 6:
                    modalQr.onDidDismiss().then(function (result) {
                      console.log('result', result.data);

                      if (!result.data) {
                        _this4.mostrarError('No pudimos leer la información', 'Alerta');

                        return false;
                      }

                      try {
                        usuario = JSON.parse(result.data['response']);
                      } catch (e) {
                        _this4.mostrarError('El QR no contiene un trabajador');

                        return false;
                      }

                      if (!usuario['nomAsist']) {
                        _this4.mostrarError('El QR no contiene un trabajador valido');

                        return false;
                      }

                      if (usuario['numEmpr'] != _this4.idEMpresa) {
                        _this4.mostrarError('Estimado usuario, el trabajador consultado no cuenta con relación laboral en la empresa con la que se inició sesión.');

                        return false;
                      } else {
                        return true;
                      }
                    }).then(function (verdad) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                          while (1) switch (_context6.prev = _context6.next) {
                            case 0:
                              if (!this.modalControllerQr) {
                                _context6.next = 3;
                                break;
                              }

                              _context6.next = 3;
                              return this.modalControllerQr.dismiss();

                            case 3:
                              if (!this.trabajador) {
                                this.trabajador = {
                                  PK_ID_PermisoAlturas_PersonasAMigrar: null,
                                  strTipoDocumento: null,
                                  strNumeroDocumeto: null,
                                  strNombreTrabajador: null,
                                  strCargoTrabajador: null,
                                  Fk_ID_Empresa: null,
                                  blnAyudanteSeguridad: null,
                                  accion: null
                                };
                              }

                              console.log('verdad', JSON.stringify(usuario));
                              console.log('trabajador', JSON.stringify(this.trabajador));

                              if (verdad) {
                                this.trabajador.strNombreTrabajador = usuario.nomAsist;
                                this.trabajador.strNumeroDocumeto = usuario.numAsistente;
                                this.trabajador.strCargoTrabajador = usuario.cargo.toString();
                                this.trabajador.strTipoDocumento = usuario.tiAsistente;
                                this.cargoTrabajador = usuario.cargo.toString();
                                this.numeroDeDocumento = usuario.numAsistente;
                                this.trabajador.blnCodigoQR = true;
                                this.trabajador.strNumeroDocumentoEmpresa = usuario.numEmpr;
                                this.trabajador.strTipoDocumentoEmpresa = usuario.tiEmpr;
                                this.habilitarEdicionCargo = true;
                                this.prepararUser();
                              }

                            case 7:
                            case "end":
                              return _context6.stop();
                          }
                        }, _callee6, this);
                      }));
                    });
                    _context7.next = 12;
                    break;

                  case 9:
                    _context7.prev = 9;
                    _context7.t0 = _context7["catch"](0);
                    this.mostrarError('No se puedo leer QR');

                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this, [[0, 9]]);
            }));
          }
        }, {
          key: "guardarDatos",
          value: function guardarDatos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this5 = this;

              var trabajadoresChecked;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    console.log('guardando datos');
                    _context9.next = 4;
                    return this.utils.presentLoading();

                  case 4:
                    _context9.next = 6;
                    return this.dataBaseService.open();

                  case 6:
                    this.data['dtmFechaRegistro'] = new Date();
                    this.data['dtmFechaYHoraInicioAct'] = new Date();
                    trabajadoresChecked = this.getTrabajadoresChecked();
                    this.data['listaTrabajadoresMigrados'] = trabajadoresChecked;
                    this.tablaTrabajadoresService.setListaTrabajadores(trabajadoresChecked);
                    this.data['listaTrabajadoresMigrados'].forEach(function (trabajador) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                            case 0:
                              if (trabajador.blnCodigoQR) {
                                _context8.next = 6;
                                break;
                              }

                              trabajador.blnActivo = true;
                              console.log(JSON.stringify(trabajador));
                              _context8.next = 5;
                              return this.dataBaseService.updateTrabajadorMigrado(trabajador);

                            case 5:
                              console.log('trabajador actualizado');

                            case 6:
                            case "end":
                              return _context8.stop();
                          }
                        }, _callee8, this);
                      }));
                    });
                    this.data['strTipoTrabajo'] = this.tipoPermiso;
                    this.data['lastRoute'] = '/home/permisos/registro-permiso/crear-permiso';
                    this.data['fk_ID_PermisoAlturas_MaestroTipoPermiso'] = this.listaTipoPermiso.find(function (tipoPermiso) {
                      return tipoPermiso.strDescripcion === _this5.tipoPermiso;
                    }).PK_ID_PermisoAlturas_MaestroTipoPermiso;
                    this.saveDataService.setData(this.data);
                    this.saveDataService.saveData();
                    this.utils.dismissLoading();
                    _context9.next = 25;
                    break;

                  case 20:
                    _context9.prev = 20;
                    _context9.t0 = _context9["catch"](0);
                    this.utils.dismissLoading();
                    this.dataBaseService.close();
                    console.error('Error al guardar los datos:', _context9.t0);

                  case 25:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this, [[0, 20]]);
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
            var _this6 = this;

            this.dataBaseService.open().then(function () {
              _this6.dataBaseService.getAllTipoPermiso().subscribe({
                next: function next(listaTipoPermiso) {
                  _this6.listaTipoPermiso = listaTipoPermiso;
                },
                error: function error(_error) {
                  _this6.dataBaseService.close();
                },
                complete: function complete() {
                  console.log('Tipos de permiso completados');
                }
              });
            });
          }
        }, {
          key: "allTrabajadores",
          value: function allTrabajadores() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this7 = this;

              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    _context10.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    this.dataBaseService.open().then(function () {
                      _this7.dataBaseService.getAllTrabajadoresMigrados().subscribe({
                        next: function next(listaTrabajadores) {
                          // this.tablaTrabajadores = listaTrabajadores;
                          _this7.tablaTrabajadores.forEach(function (trabajador) {
                            trabajador.accion = false;
                          });

                          _this7.tablaTrabajadoresService.setListaTrabajadores(_this7.tablaTrabajadores);

                          _this7.totalPage = Math.ceil(_this7.tablaTrabajadores.length / _this7.workersPerPage);

                          _this7.utils.dismissLoading();
                        },
                        error: function error(_error2) {
                          console.error('Error al obtener los tipos de permiso:', _error2);
                        }
                      });
                    });
                    _context10.next = 11;
                    break;

                  case 6:
                    _context10.prev = 6;
                    _context10.t0 = _context10["catch"](0);
                    this.dataBaseService.close();
                    this.utils.dismissLoading();
                    console.error('Error al obtener los tipos de permiso:', _context10.t0);

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this, [[0, 6]]);
            }));
          }
        }, {
          key: "getTrabajadoresChecked",
          value: function getTrabajadoresChecked() {
            return this.tablaTrabajadores.filter(function (trabajador) {
              return trabajador.accion || trabajador.blnAyudanteSeguridad;
            });
          }
        }, {
          key: "getTrabajadoresNotChecked",
          value: function getTrabajadoresNotChecked() {
            return this.tablaTrabajadores.filter(function (trabajador) {
              return !trabajador.accion && !trabajador.blnAyudanteSeguridad;
            });
          }
        }, {
          key: "onChangeMarcarTodos",
          value: function onChangeMarcarTodos(event) {
            var _this8 = this;

            var isChecked = event.detail.checked;
            this.tablaTrabajadores = this.tablaTrabajadores.map(function (trabajador) {
              if (_this8.isOnCurrentPage(trabajador)) {
                trabajador.accion = isChecked;
              }

              return trabajador;
            });

            if (isChecked) {
              this.tablaTrabajadores.filter(function (trabajador) {
                return !_this8.trabajadoresMarcados.includes(trabajador);
              }).forEach(function (trabajador) {
                return _this8.trabajadoresMarcados.push(trabajador);
              });
            } else {
              this.trabajadoresMarcados = this.trabajadoresMarcados.filter(function (trabajador) {
                return !trabajador.accion;
              });
            }
          }
        }, {
          key: "isOnCurrentPage",
          value: function isOnCurrentPage(trabajador) {
            var index = this.tablaTrabajadores.indexOf(trabajador);
            var startIndex = (this.currentPage - 1) * this.workersPerPage;
            var endIndex = this.currentPage * this.workersPerPage;
            return index >= startIndex && index < endIndex;
          }
        }, {
          key: "previousPage",
          value: function previousPage() {
            if (this.currentPage > 1) {
              this.currentPage--;
              this.updatePage();
            }
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            if (this.currentPage * this.workersPerPage < this.tablaTrabajadores.length) {
              this.currentPage++;
              this.updatePage();
            }
          }
        }, {
          key: "updatePage",
          value: function updatePage() {
            var trabajadoresEnPaginaActual = this.tablaTrabajadores.slice((this.currentPage - 1) * this.workersPerPage, this.currentPage * this.workersPerPage);
            var todosMarcados = trabajadoresEnPaginaActual.every(function (trabajador) {
              return trabajador.accion;
            });
            var otrosMarcados = this.trabajadoresMarcados.every(function (trabajador) {
              return trabajador.accion;
            });
            this.marcarTodos = todosMarcados && otrosMarcados;
          }
        }, {
          key: "mostrarError",
          value: function mostrarError(message, header) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertController.create({
                      header: header || 'Alerta',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context11.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "precargarDatos",
          value: function precargarDatos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var dataUrl, tipoPermiso;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    dataUrl = history.state.data;
                    tipoPermiso = history.state.tipo;
                    _context12.next = 4;
                    return this.utils.presentLoading();

                  case 4:
                    console.log('dataUrl', dataUrl);

                    if (!dataUrl) {
                      _context12.next = 13;
                      break;
                    }

                    this.data = dataUrl;
                    this.tablaTrabajadoresService.setListaTrabajadores(dataUrl['listaTrabajadoresMigrados']);
                    this.tipoPermiso = dataUrl['strTipoTrabajo'];
                    this.tablaTrabajadores = dataUrl['listaTrabajadoresMigrados'];
                    this.saveDataService.setData(dataUrl);
                    _context12.next = 18;
                    break;

                  case 13:
                    this.data = new src_app_interfaces_edguardar_permiso_trabajo_app__WEBPACK_IMPORTED_MODULE_7__["EDGuardarPermisoTrabajoAPP"]();
                    _context12.next = 16;
                    return this.allTrabajadores();

                  case 16:
                    this.saveDataService.setData(this.data);
                    this.tipoPermiso = tipoPermiso;

                  case 18:
                    this.totalPage = Math.ceil(this.tablaTrabajadores.length / this.workersPerPage);
                    this.utils.dismissLoading();

                  case 20:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this);
            }));
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
          key: "cleanInput",
          value: function cleanInput(event) {
            console.log('event', event);

            if (this.numeroDeDocumento) {
              this.numeroDeDocumento = this.numeroDeDocumento.replace(/[^0-9]/g, '');
            }
          }
        }]);
      }();

      CrearPermisoPage.ctorParameters = function () {
        return [{
          type: src_app_services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"]
        }, {
          type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_4__["TablaTrabajadoresService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_6__["SaveDataService"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"]
        }, {
          type: src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_13__["ContextService"]
        }];
      };

      CrearPermisoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-permiso',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./crear-permiso.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/SST/crear-permiso/crear-permiso.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./crear-permiso.page.scss */
        "./src/app/pages/SST/crear-permiso/crear-permiso.page.scss"))["default"]]
      })], CrearPermisoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-SST-crear-permiso-crear-permiso-module-es5.js.map