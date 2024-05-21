(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-incidentes-incidentes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidentes/incidentes.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidentes/incidentes.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIncidentesIncidentesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-nav-bar></app-nav-bar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-no-padding\" lines=\"none\">\n    <app-title-bar [title]=\"'REPORTE DE INCIDENTES'\" [imgUrl]=\"'assets/img/incidentes-light.png'\"></app-title-bar>\n\n    <form [formGroup]=\"formGroup\">\n      <ion-item>\n        <h2>SEDE DONDE LABORA EL TRABAJADOR</h2>\n        <hr>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isSedeInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/empresa-nombre.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Sede</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"sedeFormControl\">\n\n          <ion-spinner *ngIf=\"!sedes\"></ion-spinner>\n\n          <ion-select-option *ngFor=\"let sede of sedes\" [value]=\"sede\">\n            {{sede.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isVinculacionLaboralInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/cargo.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Vinculación Laboral</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"vinculacionLaboralFormControl\">\n          <ion-select-option *ngFor=\"let vinculacionLaboral of vinculacionesLaborales\" [value]=\"vinculacionLaboral\">\n            {{vinculacionLaboral.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isZonaTrabajadorInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/lugar.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Zona</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"zonaTrabajadorFormControl\">\n          <ion-select-option *ngFor=\"let zonaTrabajador of zonas\" [value]=\"zonaTrabajador\">\n            {{zonaTrabajador.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isJornadaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/jornada.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Jornada</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"jornadaFormControl\">\n          <ion-select-option *ngFor=\"let jornada of jornadas\" [value]=\"jornada\">\n            {{jornada.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <h2>INFORMACIÓN DEL INCIDENTE</h2>\n        <hr>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isFechaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/fecha.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Fecha</span>\n        </ion-label>\n        <ion-datetime [(ngModel)]=\"fechaOcurrencia\" displayFormat=\"DD MMM YYYY\" min=\"{{getDate(WHICH_DATE_ENUM.MIN)}}\"\n          max=\"{{getDate(WHICH_DATE_ENUM.MAX)}}\" cancelText=\"Cancelar\" doneText=\"Hecho\"\n          formControlName=\"fechaFormControl\" [monthShortNames]=\"MONTH_SHORT_NAMES\"></ion-datetime>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isHoraInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/hora.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Hora</span>\n        </ion-label>\n        <ion-datetime displayFormat=\"hh:mm A\" min=\"{{getDate(WHICH_DATE_ENUM.MIN)}}\"\n          max=\"{{getDate(WHICH_DATE_ENUM.MAX)}}\" cancelText=\"Cancelar\" doneText=\"Hecho\"\n          formControlName=\"horaFormControl\"></ion-datetime>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isJornadaNormalInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/jornada.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Jornada</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" multiple=\"false\" formControlName=\"jornadaNormalFormControl\">\n          <ion-select-option>Normal</ion-select-option>\n          <ion-select-option>Extra</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isLaborInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/pregunta.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>¿Estaba Realizando Su Labor Habitual?</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" multiple=\"false\" cancelText=\"Cancelar\" formControlName=\"laborFormControl\">\n          <ion-select-option>Sí</ion-select-option>\n          <ion-select-option>No</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"isLaborNoHabitual()\" [class.invalid]=\"isLaborNoHabitualInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/pregunta.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>¿Cual?</span>\n        </ion-label>\n        <ion-textarea formControlName=\"laborNoHabitualFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isTiempoPrevioLaborandoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/hora.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Tiempo Laborado Previo</span>\n        </ion-label>\n        <ion-datetime displayFormat=\"HH:mm\" cancelText=\"Cancelar\" doneText=\"Hecho\"\n          formControlName=\"tiempoPrevioLaborandoFormControl\"></ion-datetime>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isDepartamentoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/territorio.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Departamento</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" (ionChange)=\"onDepartamentoChanged($event.detail.value)\" [compareWith]=\"compareEntities\"\n          multiple=\"false\" formControlName=\"departamentoFormControl\">\n          <ion-select-option *ngFor=\"let departamento of departamentos\" [value]=\"departamento\">\n            {{departamento.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isMunicipioInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/territorio.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Municipio</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"municipioFormControl\">\n          <ion-select-option *ngFor=\"let municipio of municipios\" [value]=\"municipio\">\n            {{municipio.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isTipoInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/tipo.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Tipo</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"tipoFormControl\">\n          <ion-select-option *ngFor=\"let tipo of tipos\" [value]=\"tipo\">\n            {{tipo.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isZonaIncidenteInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/lugar.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Zona</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\"\n          formControlName=\"zonaIncidenteFormControl\">\n          <ion-select-option *ngFor=\"let zonaIncidente of zonas\" [value]=\"zonaIncidente\">\n            {{zonaIncidente.nombre | customTitlecase }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isLugarInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/direccion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Lugar</span>\n        </ion-label>\n        <ion-select cancelText=\"Cancelar\" interface=\"action-sheet\" multiple=\"false\" formControlName=\"lugarFormControl\">\n          <ion-select-option>Dentro De La Empresa</ion-select-option>\n          <ion-select-option>Fuera De La Empresa</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isSitioInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/direccion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Sitio</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"sitioFormControl\">\n          <ion-select-option *ngFor=\"let sitio of sitios\" [value]=\"sitio\">\n            {{sitio.nombre}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"isSitioOtro()\" [class.invalid]=\"isSitioOtroInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/pregunta.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>¿Cual?</span>\n        </ion-label>\n        <ion-textarea formControlName=\"sitioOtroFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isConsecuenciaInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/causa.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Posible Consecuencia</span>\n        </ion-label>\n        <ion-select interface=\"action-sheet\" [compareWith]=\"compareEntities\" multiple=\"false\" cancelText=\"Cancelar\"\n          formControlName=\"consecuenciaFormControl\">\n          <ion-select-option *ngFor=\"let consecuencia of consecuencias\" [value]=\"consecuencia\">\n            {{consecuencia.nombre}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [class.invalid]=\"isDescripcionInvalid()\">\n        <ion-thumbnail class=\"thumb\" slot=\"start\">\n          <ion-img src=\"assets/img/descripcion.png\"></ion-img>\n        </ion-thumbnail>\n        <ion-label position=\"floating\">\n          <span>Descripción</span>\n        </ion-label>\n        <ion-textarea formControlName=\"descripcionFormControl\"></ion-textarea>\n      </ion-item>\n\n      <ion-button (click)=\"reportar()\">\n        Generar Reporte\n      </ion-button>\n    </form>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <app-menu-operativo [opcionSeleccionada]=\"opcion\" *ngIf=\"opcion\"></app-menu-operativo>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/entities/consecuencia-incidente.ts":
    /*!****************************************************!*\
      !*** ./src/app/entities/consecuencia-incidente.ts ***!
      \****************************************************/

    /*! exports provided: ConsecuenciaIncidente */

    /***/
    function srcAppEntitiesConsecuenciaIncidenteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConsecuenciaIncidente", function () {
        return ConsecuenciaIncidente;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var ConsecuenciaIncidente = /*#__PURE__*/function (_entity__WEBPACK_IMPO) {
        function ConsecuenciaIncidente(json) {
          var _this;

          _classCallCheck(this, ConsecuenciaIncidente);

          _this = _callSuper(this, ConsecuenciaIncidente, [json.Pk_Id_Incidente_Consecuencia]);
          _this._nombre = json.Nombre_consecuencia;
          return _this;
        }

        _inherits(ConsecuenciaIncidente, _entity__WEBPACK_IMPO);

        return _createClass(ConsecuenciaIncidente, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.IncidenteConsecuencias.map(function (item) {
              return new ConsecuenciaIncidente(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/departamento.ts":
    /*!******************************************!*\
      !*** ./src/app/entities/departamento.ts ***!
      \******************************************/

    /*! exports provided: Departamento */

    /***/
    function srcAppEntitiesDepartamentoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Departamento", function () {
        return Departamento;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Departamento = /*#__PURE__*/function (_entity__WEBPACK_IMPO2) {
        function Departamento(json) {
          var _this2;

          _classCallCheck(this, Departamento);

          _this2 = _callSuper(this, Departamento, [json.Pk_Id_Departamento]);
          _this2._nombre = json.Nombre_Departamento;
          return _this2;
        }

        _inherits(Departamento, _entity__WEBPACK_IMPO2);

        return _createClass(Departamento, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.map(function (item) {
              return new Departamento(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/incidente.ts":
    /*!***************************************!*\
      !*** ./src/app/entities/incidente.ts ***!
      \***************************************/

    /*! exports provided: Incidente */

    /***/
    function srcAppEntitiesIncidenteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Incidente", function () {
        return Incidente;
      });

      var Incidente = /*#__PURE__*/function () {
        function Incidente() {
          _classCallCheck(this, Incidente);
        }

        return _createClass(Incidente, [{
          key: "sede",
          get: function get() {
            return this._sede;
          },
          set: function set(sede) {
            this._sede = sede;
          }
        }, {
          key: "vinculacionLaboral",
          get: function get() {
            return this._vinculacionLaboral;
          },
          set: function set(vinculacionLaboral) {
            this._vinculacionLaboral = vinculacionLaboral;
          }
        }, {
          key: "idTrabajador",
          get: function get() {
            return this._idTrabajador;
          },
          set: function set(idTrabajador) {
            this._idTrabajador = idTrabajador;
          }
        }, {
          key: "idEmpresa",
          get: function get() {
            return this._idEmpresa;
          },
          set: function set(idEmpresa) {
            this._idEmpresa = idEmpresa;
          }
        }, {
          key: "zonaTrabajador",
          get: function get() {
            return this._zonaTrabajador;
          },
          set: function set(zona) {
            this._zonaTrabajador = zona;
          }
        }, {
          key: "jornada",
          get: function get() {
            return this._jornada;
          },
          set: function set(jornada) {
            this._jornada = jornada;
          }
        }, {
          key: "fechaHora",
          get: function get() {
            return this._fechaHora;
          },
          set: function set(fecha) {
            this._fechaHora = fecha;
          }
        }, {
          key: "jornadaNormal",
          get: function get() {
            return this._jornadaNormal;
          },
          set: function set(jornadaNormal) {
            this._jornadaNormal = jornadaNormal;
          }
        }, {
          key: "flagLaborHabitual",
          get: function get() {
            return this._flagLaborHabitual;
          },
          set: function set(flagLaborHabitual) {
            this._flagLaborHabitual = flagLaborHabitual;
          }
        }, {
          key: "incidenteNoLaborHabitual",
          get: function get() {
            return this._incidenteNoLaborHabitual;
          },
          set: function set(incidenteNoLaborHabitual) {
            this._incidenteNoLaborHabitual = incidenteNoLaborHabitual;
          }
        }, {
          key: "tiempoPrevioLaborando",
          get: function get() {
            return this._tiempoPrevioLaborando;
          },
          set: function set(tiempoPrevioLaborando) {
            this._tiempoPrevioLaborando = tiempoPrevioLaborando;
          }
        }, {
          key: "tipo",
          get: function get() {
            return this._tipo;
          },
          set: function set(tipo) {
            this._tipo = tipo;
          }
        }, {
          key: "departamento",
          get: function get() {
            return this._departamento;
          },
          set: function set(departamento) {
            this._departamento = departamento;
          }
        }, {
          key: "municipio",
          get: function get() {
            return this._municipio;
          },
          set: function set(municipio) {
            this._municipio = municipio;
          }
        }, {
          key: "zonaIncidente",
          get: function get() {
            return this._zonaIncidente;
          },
          set: function set(zona) {
            this._zonaIncidente = zona;
          }
        }, {
          key: "lugarIncidente",
          get: function get() {
            return this._lugarIncidente;
          },
          set: function set(lugarIncidente) {
            this._lugarIncidente = lugarIncidente;
          }
        }, {
          key: "sitioIncidente",
          get: function get() {
            return this._sitioIncidente;
          },
          set: function set(sitio) {
            this._sitioIncidente = sitio;
          }
        }, {
          key: "sitioOtro",
          get: function get() {
            return this._sitioOtro;
          },
          set: function set(sitioOtro) {
            this._sitioOtro = sitioOtro;
          }
        }, {
          key: "consecuencia",
          get: function get() {
            return this._consecuencia;
          },
          set: function set(consecuencia) {
            this._consecuencia = consecuencia;
          }
        }, {
          key: "descripcion",
          get: function get() {
            return this._descripcion;
          },
          set: function set(descripcion) {
            this._descripcion = descripcion;
          }
        }, {
          key: "toUrlSearchParams",
          value: function toUrlSearchParams() {
            var params = new URLSearchParams();
            params.append('FK_id_sede_general', String(this._sede.id));
            params.append('FK_id_vinculacionlaboral_persona', String(this._vinculacionLaboral.id));
            params.append('Persona_numero_identificacion', String(this._idTrabajador));
            params.append('General_numero_identificacion', String(this._idEmpresa));
            params.append('FK_id_zonalugar_persona', String(this._zonaTrabajador.id));
            params.append('FK_id_jornada_habitual_persona', String(this._jornada.id));
            params.append('strIncidente_fecha', this._fechaHora.getFullYear() + '/' + (this._fechaHora.getMonth() + 1) + '/' + this._fechaHora.getDate() + ' ' + this._fechaHora.getHours() + ':' + this._fechaHora.getMinutes());
            params.append('Incidentejornadanormal', this._jornadaNormal);
            params.append('Incidenterealizabalaborhabitual', String(this._flagLaborHabitual));
            params.append('Incidente_nombre_labor', this._incidenteNoLaborHabitual);
            params.append('Incidente_tiempo_previo_al_incidente', String(60 * this._tiempoPrevioLaborando.getHours() + this._tiempoPrevioLaborando.getMinutes()));
            params.append('FK_id_incidente_tipo_incidente', String(this._tipo.id));
            params.append('FK_id_departamento_incidente', String(this._departamento.id));
            params.append('FK_id_municipio_incidente', String(this._municipio.id));
            params.append('FK_id_zonalugar_incidente', String(this._zonaIncidente.id));
            params.append('incidenteOcurreEnLaEmpresa', this._lugarIncidente);
            params.append('FK_id_sitio_incidente', String(this._sitioIncidente.id));
            params.append('Incidente_sitio_incidente_otro', this._sitioOtro);
            params.append('FK_id_consecuencia_incidente', String(this._consecuencia.id));
            params.append('Incidente_descripcion', this._descripcion);
            return params;
          }
        }, {
          key: "toJson",
          value: function toJson() {
            return {
              idSede: String(this._sede.id),
              fecha: this._fechaHora,
              idJornada: String(this._jornada.id),
              flagLaborHabitual: String(this._flagLaborHabitual),
              idDepartamento: String(this._departamento.id),
              idMunicipio: this._municipio.id,
              idTipo: this._tipo.id,
              idLugar: '',
              idConsecuencia: this._consecuencia.id,
              descripcion: this._descripcion
            };
          }
        }]);
      }();
      /***/

    },

    /***/
    "./src/app/entities/jornada.ts":
    /*!*************************************!*\
      !*** ./src/app/entities/jornada.ts ***!
      \*************************************/

    /*! exports provided: Jornada */

    /***/
    function srcAppEntitiesJornadaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Jornada", function () {
        return Jornada;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Jornada = /*#__PURE__*/function (_entity__WEBPACK_IMPO3) {
        function Jornada(json) {
          var _this3;

          _classCallCheck(this, Jornada);

          _this3 = _callSuper(this, Jornada, [json.Pk_Id_Tipo_Jornada]);
          _this3._nombre = json.Nombre_Jornada;
          return _this3;
        }

        _inherits(Jornada, _entity__WEBPACK_IMPO3);

        return _createClass(Jornada, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.Jornadas.map(function (item) {
              return new Jornada(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/municipio.ts":
    /*!***************************************!*\
      !*** ./src/app/entities/municipio.ts ***!
      \***************************************/

    /*! exports provided: Municipio */

    /***/
    function srcAppEntitiesMunicipioTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Municipio", function () {
        return Municipio;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Municipio = /*#__PURE__*/function (_entity__WEBPACK_IMPO4) {
        function Municipio(json) {
          var _this4;

          _classCallCheck(this, Municipio);

          _this4 = _callSuper(this, Municipio, [json.IdMunicipio]);
          _this4._nombre = json.NombreMunicipio;
          return _this4;
        }

        _inherits(Municipio, _entity__WEBPACK_IMPO4);

        return _createClass(Municipio, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.map(function (item) {
              return new Municipio(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/sitio.ts":
    /*!***********************************!*\
      !*** ./src/app/entities/sitio.ts ***!
      \***********************************/

    /*! exports provided: Sitio */

    /***/
    function srcAppEntitiesSitioTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sitio", function () {
        return Sitio;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Sitio = /*#__PURE__*/function (_entity__WEBPACK_IMPO5) {
        function Sitio(json) {
          var _this5;

          _classCallCheck(this, Sitio);

          _this5 = _callSuper(this, Sitio, [json.Pk_Id_Sitio_Incidente]);
          _this5._nombre = json.Nombre_Sitio;
          _this5._isOtro = json.EsOtro;
          return _this5;
        }

        _inherits(Sitio, _entity__WEBPACK_IMPO5);

        return _createClass(Sitio, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }, {
          key: "isOtro",
          get: function get() {
            return this._isOtro;
          },
          set: function set(value) {
            this._isOtro = value;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.SitiosIncidente.map(function (item) {
              return new Sitio(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/tipo-incidente.ts":
    /*!********************************************!*\
      !*** ./src/app/entities/tipo-incidente.ts ***!
      \********************************************/

    /*! exports provided: TipoIncidente */

    /***/
    function srcAppEntitiesTipoIncidenteTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoIncidente", function () {
        return TipoIncidente;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var TipoIncidente = /*#__PURE__*/function (_entity__WEBPACK_IMPO6) {
        function TipoIncidente(json) {
          var _this6;

          _classCallCheck(this, TipoIncidente);

          _this6 = _callSuper(this, TipoIncidente, [json.Pk_Id_Tipo_Incidente]);
          _this6._nombre = json.Nombre_Incidente;
          return _this6;
        }

        _inherits(TipoIncidente, _entity__WEBPACK_IMPO6);

        return _createClass(TipoIncidente, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.TiposIncidente.map(function (item) {
              return new TipoIncidente(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/vinculacion-laboral.ts":
    /*!*************************************************!*\
      !*** ./src/app/entities/vinculacion-laboral.ts ***!
      \*************************************************/

    /*! exports provided: VinculacionLaboral */

    /***/
    function srcAppEntitiesVinculacionLaboralTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VinculacionLaboral", function () {
        return VinculacionLaboral;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var VinculacionLaboral = /*#__PURE__*/function (_entity__WEBPACK_IMPO7) {
        function VinculacionLaboral(json) {
          var _this7;

          _classCallCheck(this, VinculacionLaboral);

          _this7 = _callSuper(this, VinculacionLaboral, [json.PK_VinculacionLaboral]);
          _this7._nombre = json.Descripcion_VinculacionLaboral;
          return _this7;
        }

        _inherits(VinculacionLaboral, _entity__WEBPACK_IMPO7);

        return _createClass(VinculacionLaboral, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.VinculacionLaboral.map(function (item) {
              return new VinculacionLaboral(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/zona.ts":
    /*!**********************************!*\
      !*** ./src/app/entities/zona.ts ***!
      \**********************************/

    /*! exports provided: Zona */

    /***/
    function srcAppEntitiesZonaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Zona", function () {
        return Zona;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Zona = /*#__PURE__*/function (_entity__WEBPACK_IMPO8) {
        function Zona(id, nombre) {
          var _this8;

          _classCallCheck(this, Zona);

          _this8 = _callSuper(this, Zona, [id]);
          _this8._nombre = nombre;
          return _this8;
        }

        _inherits(Zona, _entity__WEBPACK_IMPO8);

        return _createClass(Zona, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/pages/incidentes/incidentes-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/incidentes/incidentes-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: IncidentesPageRoutingModule */

    /***/
    function srcAppPagesIncidentesIncidentesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncidentesPageRoutingModule", function () {
        return IncidentesPageRoutingModule;
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


      var _incidentes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./incidentes.page */
      "./src/app/pages/incidentes/incidentes.page.ts");

      var routes = [{
        path: '',
        component: _incidentes_page__WEBPACK_IMPORTED_MODULE_3__["IncidentesPage"]
      }];

      var IncidentesPageRoutingModule = /*#__PURE__*/_createClass(function IncidentesPageRoutingModule() {
        _classCallCheck(this, IncidentesPageRoutingModule);
      });

      IncidentesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IncidentesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/incidentes/incidentes.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/incidentes/incidentes.module.ts ***!
      \*******************************************************/

    /*! exports provided: IncidentesPageModule */

    /***/
    function srcAppPagesIncidentesIncidentesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncidentesPageModule", function () {
        return IncidentesPageModule;
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


      var _incidentes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./incidentes-routing.module */
      "./src/app/pages/incidentes/incidentes-routing.module.ts");
      /* harmony import */


      var _incidentes_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./incidentes.page */
      "./src/app/pages/incidentes/incidentes.page.ts");

      var IncidentesPageModule = /*#__PURE__*/_createClass(function IncidentesPageModule() {
        _classCallCheck(this, IncidentesPageModule);
      });

      IncidentesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _incidentes_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncidentesPageRoutingModule"]],
        declarations: [_incidentes_page__WEBPACK_IMPORTED_MODULE_4__["IncidentesPage"]]
      })], IncidentesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/incidentes/incidentes.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/incidentes/incidentes.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIncidentesIncidentesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\n.list {\n  margin: 1px 0 7rem;\n}\nion-content ion-list form {\n  text-align: center;\n}\nion-content ion-list form ion-item {\n  background-color: inherit !important;\n}\nion-content ion-list form ion-item.ion-invalid, ion-content ion-list form ion-item.ion-valid {\n  --highlight-background: none;\n}\nion-content ion-list form ion-item ion-label img {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-content ion-list form ion-item ion-label span {\n  color: #96a0ac;\n  margin-top: auto;\n  margin-bottom: auto;\n}\nion-content ion-list form ion-item h2 {\n  white-space: pre-wrap;\n  text-align: center;\n  color: #ff7500;\n  font-weight: 500 !important;\n}\nion-content ion-list ion-button {\n  margin-bottom: 20px;\n}\nion-item.sc-ion-textarea-md-h,\nion-item .sc-ion-textarea-md-h,\nion-item.sc-ion-textarea-ios-h,\nion-item .sc-ion-textarea-ios-h {\n  align-self: auto;\n  margin-top: 10px;\n}\nion-thumbnail.thumb {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5jaWRlbnRlcy9pbmNpZGVudGVzLnBhZ2Uuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEIsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURURjtBQ1lBLHVDQUFBO0FBNkRBOzs7RUFBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEOUVGO0FDaUZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsOEJBQUE7QURuRkY7QUNzRkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRG5GRjtBQ3NGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsaUNBQUE7RUFFQSxpQ0FBQTtFQUVBLDhCQUFBO0FEM0ZGO0FBek1BO0VBQ0Usa0JBQUE7QUE0TUY7QUF2TUk7RUFDRSxrQkFBQTtBQTBNTjtBQXhNTTtFQUNFLG9DQUFBO0FBME1SO0FBeE1RO0VBRUUsNEJBQUE7QUF5TVY7QUFyTVU7RUFDRSxhQ2dFTztFRC9EUCxjQytETztBRHdJbkI7QUFwTVU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXNNWjtBQWxNUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFvTVY7QUEvTEk7RUFDRSxtQkFBQTtBQWlNTjtBQTVMQTs7OztFQUlFLGdCQUFBO0VBQ0EsZ0JBQUE7QUErTEY7QUE1TEE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQStMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luY2lkZW50ZXMvaW5jaWRlbnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbi8qKiBWYXJpYWJsZXMgZGUgbGEgdmVyc2nDs24gYW50ZXJpb3IgKiovXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcbiAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbn1cblxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luOiAxcHggMCA3cmVtO1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0uaW9uLWludmFsaWQsIGlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0uaW9uLXZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIGltZyB7XG4gIHdpZHRoOiAyLjVyZW07XG4gIGhlaWdodDogMi41cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSBpb24tbGFiZWwgc3BhbiB7XG4gIGNvbG9yOiAjOTZhMGFjO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgZm9ybSBpb24taXRlbSBoMiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmNzUwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1pdGVtLnNjLWlvbi10ZXh0YXJlYS1tZC1oLFxuaW9uLWl0ZW0gLnNjLWlvbi10ZXh0YXJlYS1tZC1oLFxuaW9uLWl0ZW0uc2MtaW9uLXRleHRhcmVhLWlvcy1oLFxuaW9uLWl0ZW0gLnNjLWlvbi10ZXh0YXJlYS1pb3MtaCB7XG4gIGFsaWduLXNlbGY6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi10aHVtYm5haWwudGh1bWIge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbn0iLCIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuLyoqIFZhcmlhYmxlcyBkZSBsYSB2ZXJzacOzbiBhbnRlcmlvciAqKi9cblxuJGZvbnQtcGF0aDogJy4uL2Fzc2V0cy9mb250cyc7XG4kYXBwLWRpcmVjdGlvbjogbHRyO1xuJGZvbnQtc2l6ZTogMTZweDtcbiRmb250LXdlaWdodDogNDAwO1xuJGNvbnRlbnQtaW1nLXNpemU6IDIuNXJlbTtcblxuJGNvbG9yczogKFxuICBiYXNlLTE6ICNlNmVhZWUsXG4gIGJhc2UtMjogI2NhZDFkYSxcbiAgYmFzZS0zOiAjYWZiOGM0LFxuICBiYXNlLTQ6ICM5NmEwYWMsXG4gIGJhc2UtNTogIzdlOGE5NyxcbiAgYmFzZS02OiAjNjg3Njg0LFxuICBiYXNlLTc6ICM1MjYyNzAsXG4gIGJhc2UtODogIzI4NGU1YSxcbiAgcHJpbWFyeTogI2ZmNzUwMCxcbiAgYnRuLXByaW1hcnk6ICM1OWJhYTgsXG4pO1xuXG4kdGV4dC1pbnB1dC1pb3Mtc2hvdy1mb2N1ZS1oaWdobGlnaHQ6IGZhbHNlICFkZWZhdWx0O1xuJGxhYmVsLWlvcy10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuJHBpY2tlci1pb3Mtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1pb3MtaWNvbi1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRyYWRpby1pb3MtY29sb3Itb246IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcGlja2VyLWlvcy1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24taW9zLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiR0b2dnbGUtaW9zLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiRhY3Rpb24tc2hlZXQtaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctaW9zLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtYnViYmxlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNyZXNjZW50LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWRvdHMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItaW9zLXdpZHRoOiAzMTBweDtcblxuJHRleHQtaW5wdXQtbWQtc2hvdy1mb2N1cy1oaWdobGlnaHQ6IGZhbHNlICFkZWZhdWx0O1xuJGxhYmVsLW1kLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLW1kLW9wdGlvbi1zZWxlY3RlZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzZWxlY3QtbWQtaWNvbi1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRyYWRpby1tZC1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItbWQtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYnV0dG9uLW1kLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1tZC1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1tZC1hY3RpdmUtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtbWQtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtbWQtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY2lyY2xlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWNyZXNjZW50LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWlvcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwb3BvdmVyLW1kLXdpZHRoOiAzMTBweDtcblxuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LCAxNDAsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywgMjIzLCAxMTc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG5cbiAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsIDAsIDA7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG5cbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xufVxuXG4uaW9zIGJvZHkuZGFyayBpb24tbW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG5cbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/incidentes/incidentes.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/incidentes/incidentes.page.ts ***!
      \*****************************************************/

    /*! exports provided: IncidentesPage */

    /***/
    function srcAppPagesIncidentesIncidentesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncidentesPage", function () {
        return IncidentesPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_commons_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commons/locale */
      "./src/app/commons/locale.ts");
      /* harmony import */


      var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commons/user-feedback */
      "./src/app/commons/user-feedback.ts");
      /* harmony import */


      var src_app_entities_consecuencia_incidente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/entities/consecuencia-incidente */
      "./src/app/entities/consecuencia-incidente.ts");
      /* harmony import */


      var src_app_entities_departamento__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/entities/departamento */
      "./src/app/entities/departamento.ts");
      /* harmony import */


      var src_app_entities_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/entities/entity */
      "./src/app/entities/entity.ts");
      /* harmony import */


      var src_app_entities_incidente__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/entities/incidente */
      "./src/app/entities/incidente.ts");
      /* harmony import */


      var src_app_entities_jornada__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/entities/jornada */
      "./src/app/entities/jornada.ts");
      /* harmony import */


      var src_app_entities_municipio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/entities/municipio */
      "./src/app/entities/municipio.ts");
      /* harmony import */


      var src_app_entities_sede__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/entities/sede */
      "./src/app/entities/sede.ts");
      /* harmony import */


      var src_app_entities_sitio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/entities/sitio */
      "./src/app/entities/sitio.ts");
      /* harmony import */


      var src_app_entities_tipo_incidente__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/entities/tipo-incidente */
      "./src/app/entities/tipo-incidente.ts");
      /* harmony import */


      var src_app_entities_vinculacion_laboral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/entities/vinculacion-laboral */
      "./src/app/entities/vinculacion-laboral.ts");
      /* harmony import */


      var src_app_entities_zona__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/entities/zona */
      "./src/app/entities/zona.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/services/empresa.service */
      "./src/app/services/empresa.service.ts");
      /* harmony import */


      var src_app_services_incidente_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/services/incidente.service */
      "./src/app/services/incidente.service.ts");
      /* harmony import */


      var src_app_services_territorio_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/services/territorio.service */
      "./src/app/services/territorio.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var WHICH_DATE;

      (function (WHICH_DATE) {
        WHICH_DATE[WHICH_DATE["MIN"] = 0] = "MIN";
        WHICH_DATE[WHICH_DATE["MAX"] = 1] = "MAX";
        WHICH_DATE[WHICH_DATE["NOW"] = 2] = "NOW";
      })(WHICH_DATE || (WHICH_DATE = {}));

      var IncidentesPage = /*#__PURE__*/function () {
        function IncidentesPage(formBuilder, context, empresaService, territorioService, incidenteService, alertCtrl, utils) {
          _classCallCheck(this, IncidentesPage);

          this.formBuilder = formBuilder;
          this.context = context;
          this.empresaService = empresaService;
          this.territorioService = territorioService;
          this.incidenteService = incidenteService;
          this.alertCtrl = alertCtrl;
          this.utils = utils;
          this.zonas = [new src_app_entities_zona__WEBPACK_IMPORTED_MODULE_16__["Zona"](1, 'Urbano'), new src_app_entities_zona__WEBPACK_IMPORTED_MODULE_16__["Zona"](2, 'Rural')];
          this.fechaOcurrencia = new Date().toISOString();
          this.WHICH_DATE_ENUM = WHICH_DATE;
          this.compareEntities = src_app_entities_entity__WEBPACK_IMPORTED_MODULE_8__["Entity"].compare;
          this.MONTH_SHORT_NAMES = src_app_commons_locale__WEBPACK_IMPORTED_MODULE_4__["MONTHS_SHORT"];
          this.formGroup = formBuilder.group({
            sedeFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            vinculacionLaboralFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            zonaTrabajadorFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            fechaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            horaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            jornadaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            jornadaNormalFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            laborFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            laborNoHabitualFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            tiempoPrevioLaborandoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            departamentoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            municipioFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tipoFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            zonaIncidenteFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lugarFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sitioFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            sitioOtroFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            consecuenciaFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            descripcionFormControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)])]
          });
        }

        return _createClass(IncidentesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            var getData = function getData(nit) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this10 = this;

                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.utils.presentLoading();

                    case 2:
                      this.sedesSubscription = this.empresaService.getSedes(nit).subscribe(function (response) {
                        _this10.sedes = src_app_entities_sede__WEBPACK_IMPORTED_MODULE_12__["Sede"].parse(response);

                        _this10.utils.dismissLoading();
                      }, function (error) {
                        Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this10.alertCtrl);

                        _this10.utils.dismissLoading();
                      });
                      _context.next = 5;
                      return this.utils.presentLoading();

                    case 5:
                      this.listasAuxiliaresSubscription = this.incidenteService.getListasAuxiliares().subscribe(function (response) {
                        _this10.vinculacionesLaborales = src_app_entities_vinculacion_laboral__WEBPACK_IMPORTED_MODULE_15__["VinculacionLaboral"].parse(response);
                        _this10.jornadas = src_app_entities_jornada__WEBPACK_IMPORTED_MODULE_10__["Jornada"].parse(response);
                        _this10.tipos = src_app_entities_tipo_incidente__WEBPACK_IMPORTED_MODULE_14__["TipoIncidente"].parse(response);
                        _this10.sitios = src_app_entities_sitio__WEBPACK_IMPORTED_MODULE_13__["Sitio"].parse(response);
                        _this10.consecuencias = src_app_entities_consecuencia_incidente__WEBPACK_IMPORTED_MODULE_6__["ConsecuenciaIncidente"].parse(response);

                        _this10.utils.dismissLoading();
                      }, function (error) {
                        Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this10.alertCtrl);

                        _this10.utils.dismissLoading();
                      });
                      _context.next = 8;
                      return this.utils.presentLoading();

                    case 8:
                      this.departamentosSubscription = this.territorioService.getDepartamentos().subscribe(function (response) {
                        _this10.departamentos = src_app_entities_departamento__WEBPACK_IMPORTED_MODULE_7__["Departamento"].parse(response);

                        _this10.utils.dismissLoading();
                      }, function (error) {
                        Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this10.alertCtrl);

                        _this10.utils.dismissLoading();
                      });

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            };

            this.context.get().then(function (c) {
              var nit = c.empresa.id.toString();
              getData(nit);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.opcion = 'incidents';
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.opcion = undefined;
          }
        }, {
          key: "onDepartamentoChanged",
          value: function onDepartamentoChanged(departamento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this11 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (departamento) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.next = 4;
                    return this.utils.presentLoading();

                  case 4:
                    this.municipiosSubscription = this.territorioService.getMunicipios(departamento.id).subscribe(function (response) {
                      _this11.municipios = src_app_entities_municipio__WEBPACK_IMPORTED_MODULE_11__["Municipio"].parse(response);
                      console.log(_this11.municipios);

                      _this11.utils.dismissLoading();
                    }, function (error) {
                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this11.alertCtrl);

                      _this11.utils.dismissLoading();
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "isSedeInvalid",
          value: function isSedeInvalid() {
            return !this.formGroup.controls.sedeFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isVinculacionLaboralInvalid",
          value: function isVinculacionLaboralInvalid() {
            return !this.formGroup.controls.vinculacionLaboralFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isZonaTrabajadorInvalid",
          value: function isZonaTrabajadorInvalid() {
            return !this.formGroup.controls.zonaTrabajadorFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isFechaInvalid",
          value: function isFechaInvalid() {
            return !this.formGroup.controls.fechaFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isHoraInvalid",
          value: function isHoraInvalid() {
            return !this.formGroup.controls.horaFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isJornadaInvalid",
          value: function isJornadaInvalid() {
            return !this.formGroup.controls.jornadaFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isJornadaNormalInvalid",
          value: function isJornadaNormalInvalid() {
            return !this.formGroup.controls.jornadaNormalFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isLaborInvalid",
          value: function isLaborInvalid() {
            return !this.formGroup.controls.laborFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isLaborNoHabitualInvalid",
          value: function isLaborNoHabitualInvalid() {
            return !this.formGroup.controls.laborNoHabitualFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isTiempoPrevioLaborandoInvalid",
          value: function isTiempoPrevioLaborandoInvalid() {
            return !this.formGroup.controls.tiempoPrevioLaborandoFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isDepartamentoInvalid",
          value: function isDepartamentoInvalid() {
            return !this.formGroup.controls.departamentoFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isMunicipioInvalid",
          value: function isMunicipioInvalid() {
            return !this.formGroup.controls.municipioFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isTipoInvalid",
          value: function isTipoInvalid() {
            return !this.formGroup.controls.tipoFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isZonaIncidenteInvalid",
          value: function isZonaIncidenteInvalid() {
            return !this.formGroup.controls.zonaIncidenteFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isLugarInvalid",
          value: function isLugarInvalid() {
            return !this.formGroup.controls.lugarFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isSitioInvalid",
          value: function isSitioInvalid() {
            return !this.formGroup.controls.sitioFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isSitioOtroInvalid",
          value: function isSitioOtroInvalid() {
            return !this.formGroup.controls.sitioOtroFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isConsecuenciaInvalid",
          value: function isConsecuenciaInvalid() {
            return !this.formGroup.controls.consecuenciaFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isDescripcionInvalid",
          value: function isDescripcionInvalid() {
            return !this.formGroup.controls.descripcionFormControl.valid && this.submitAttempt;
          }
        }, {
          key: "isLaborNoHabitual",
          value: function isLaborNoHabitual() {
            return this.formGroup.controls.laborFormControl.value === 'No';
          }
        }, {
          key: "isSitioOtro",
          value: function isSitioOtro() {
            return this.formGroup.controls.sitioFormControl.value.isOtro === true;
          }
        }, {
          key: "reportar",
          value: function reportar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this12 = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    this.submitAttempt = true;

                    if (this.formGroup.valid) {
                      _context3.next = 4;
                      break;
                    }

                    this.alert('Alerta', '', 'Los campos señalados son requeridos.');
                    return _context3.abrupt("return");

                  case 4:
                    _context3.next = 6;
                    return this.utils.presentLoading();

                  case 6:
                    _context3.t0 = this.incidenteService;
                    _context3.next = 9;
                    return this.getDataFromInputs();

                  case 9:
                    _context3.t1 = _context3.sent;

                    _context3.t0.postIncidente.call(_context3.t0, _context3.t1).subscribe(function (response) {
                      _this12.alert('Confirmación', '', 'Se ha generado el reporte exitosamente.');

                      _this12.submitAttempt = false;

                      _this12.formGroup.markAsPristine();

                      _this12.cleanInputs();

                      _this12.utils.dismissLoading();
                    }, function (error) {
                      Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this12.alertCtrl);

                      _this12.utils.dismissLoading();
                    });

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDate",
          value: function getDate(whichDate) {
            var date = new Date();

            switch (whichDate) {
              case WHICH_DATE.MIN:
                return '' + (date.getFullYear() - 1);

              case WHICH_DATE.MAX:
              case WHICH_DATE.NOW:
                return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
            }
          }
        }, {
          key: "alert",
          value: function alert(title, subTitle, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      subHeader: subTitle,
                      message: message,
                      buttons: [{
                        text: 'Aceptar',
                        role: 'null'
                      }],
                      backdropDismiss: true
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                    return _context4.abrupt("return", alert);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getDataFromInputs",
          value: function getDataFromInputs() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this13 = this;

              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", this.context.get().then(function (c) {
                      var incidente = new src_app_entities_incidente__WEBPACK_IMPORTED_MODULE_9__["Incidente"]();
                      incidente.sede = _this13.formGroup.controls.sedeFormControl.value;
                      incidente.vinculacionLaboral = _this13.formGroup.controls.vinculacionLaboralFormControl.value;
                      incidente.idTrabajador = c.trabajador.id;
                      incidente.idEmpresa = c.empresa.id;
                      incidente.zonaTrabajador = _this13.formGroup.controls.zonaTrabajadorFormControl.value;

                      var fecha = _this13.fechaOcurrencia.split('T')[0].split('-');

                      var hora = _this13.formGroup.controls.horaFormControl.value.split('T')[1].split(':');

                      incidente.fechaHora = new Date(parseInt(fecha[0], 10), parseInt(fecha[1], 10) - 1, parseInt(fecha[2], 10), hora[0], hora[1]);
                      incidente.jornada = _this13.formGroup.controls.jornadaFormControl.value;
                      incidente.jornadaNormal = _this13.formGroup.controls.jornadaNormalFormControl.value;
                      incidente.flagLaborHabitual = _this13.formGroup.controls.laborFormControl.value;
                      incidente.incidenteNoLaborHabitual = _this13.isLaborNoHabitual() ? _this13.formGroup.controls.laborNoHabitualFormControl.value : '';

                      var tiempoPrevioLaborando = _this13.formGroup.controls.tiempoPrevioLaborandoFormControl.value.split('T')[1].split(':');

                      incidente.tiempoPrevioLaborando = new Date(0, 0, 0, tiempoPrevioLaborando[0], tiempoPrevioLaborando[1]);
                      incidente.departamento = _this13.formGroup.controls.departamentoFormControl.value;
                      incidente.municipio = _this13.formGroup.controls.municipioFormControl.value;
                      incidente.tipo = _this13.formGroup.controls.tipoFormControl.value;
                      incidente.zonaIncidente = _this13.formGroup.controls.zonaIncidenteFormControl.value;
                      incidente.consecuencia = _this13.formGroup.controls.consecuenciaFormControl.value;
                      incidente.lugarIncidente = _this13.formGroup.controls.lugarFormControl.value;
                      incidente.sitioIncidente = _this13.formGroup.controls.sitioFormControl.value;
                      incidente.sitioOtro = _this13.isSitioOtro() ? _this13.formGroup.controls.sitioOtroFormControl.value : '';
                      incidente.descripcion = _this13.formGroup.controls.descripcionFormControl.value;
                      return incidente;
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "cleanInputs",
          value: function cleanInputs() {
            this.formGroup.controls.sedeFormControl.setValue('');
            this.formGroup.controls.vinculacionLaboralFormControl.setValue('');
            this.formGroup.controls.zonaTrabajadorFormControl.setValue('');
            this.formGroup.controls.fechaFormControl.setValue('');
            this.formGroup.controls.horaFormControl.setValue('');
            this.formGroup.controls.jornadaFormControl.setValue('');
            this.formGroup.controls.jornadaNormalFormControl.setValue('');
            this.formGroup.controls.laborFormControl.setValue('');
            this.formGroup.controls.laborNoHabitualFormControl.setValue('');
            this.formGroup.controls.tiempoPrevioLaborandoFormControl.setValue('');
            this.formGroup.controls.departamentoFormControl.setValue('');
            this.formGroup.controls.municipioFormControl.setValue('');
            this.formGroup.controls.tipoFormControl.setValue('');
            this.formGroup.controls.zonaIncidenteFormControl.setValue('');
            this.formGroup.controls.consecuenciaFormControl.setValue('');
            this.formGroup.controls.lugarFormControl.setValue('');
            this.formGroup.controls.sitioFormControl.setValue('');
            this.formGroup.controls.sitioOtroFormControl.setValue('');
            this.formGroup.controls.descripcionFormControl.setValue('');
          }
        }]);
      }();

      IncidentesPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_17__["ContextService"]
        }, {
          type: src_app_services_empresa_service__WEBPACK_IMPORTED_MODULE_18__["EmpresaService"]
        }, {
          type: src_app_services_territorio_service__WEBPACK_IMPORTED_MODULE_20__["TerritorioService"]
        }, {
          type: src_app_services_incidente_service__WEBPACK_IMPORTED_MODULE_19__["IncidenteService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_21__["UtilsService"]
        }];
      };

      IncidentesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incidentes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./incidentes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidentes/incidentes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./incidentes.page.scss */
        "./src/app/pages/incidentes/incidentes.page.scss"))["default"]]
      })], IncidentesPage);
      /***/
    },

    /***/
    "./src/app/services/incidente.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/incidente.service.ts ***!
      \***********************************************/

    /*! exports provided: IncidenteService */

    /***/
    function srcAppServicesIncidenteServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncidenteService", function () {
        return IncidenteService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./context.service */
      "./src/app/services/context.service.ts");

      var IncidenteService = /*#__PURE__*/function () {
        function IncidenteService(http, context) {
          _classCallCheck(this, IncidenteService);

          this.http = http;
          this.context = context;
        }

        return _createClass(IncidenteService, [{
          key: "getListasAuxiliares",
          value: function getListasAuxiliares() {
            var _this14 = this;

            var promise = this.context.get().then(function (c) {
              var url = _this14.context.getEnvUrl().call(null, 'incidenteinvestigacion') + '/incidente/Obtener-listas' + '?Nit=' + c.empresa.id;
              return url;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (p) {
              return _this14.http.get(p);
            }));
          }
        }, {
          key: "postIncidente",
          value: function postIncidente(incidente) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/ReporteServicio/guardar-incidente-app';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return this.http.post(url, incidente.toUrlSearchParams().toString(), {
              headers: headers
            });
          }
        }]);
      }();

      IncidenteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_5__["ContextService"]
        }];
      };

      IncidenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], IncidenteService);
      /***/
    },

    /***/
    "./src/app/services/territorio.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/territorio.service.ts ***!
      \************************************************/

    /*! exports provided: TerritorioService */

    /***/
    function srcAppServicesTerritorioServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TerritorioService", function () {
        return TerritorioService;
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

      var TerritorioService = /*#__PURE__*/function () {
        function TerritorioService(http, context) {
          _classCallCheck(this, TerritorioService);

          this.http = http;
          this.context = context;
        }

        return _createClass(TerritorioService, [{
          key: "getDepartamentos",
          value: function getDepartamentos() {
            var url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/tranversal-Departamentos';
            return this.http.get(url);
          }
        }, {
          key: "getMunicipios",
          value: function getMunicipios(idDepartamento) {
            var url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/tranversal-Municipios' + '?IdDepartamento=' + idDepartamento;
            return this.http.get(url);
          }
        }]);
      }();

      TerritorioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"]
        }];
      };

      TerritorioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TerritorioService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-incidentes-incidentes-module-es5.js.map