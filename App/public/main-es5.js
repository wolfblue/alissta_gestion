(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app.component.html":
    /*!**********************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app.component.html ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-letter/avatar-letter.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-letter/avatar-letter.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsAvatarLetterAvatarLetterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <h1>{{ getAvatarLetter() }}</h1>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/go-to-home-sst/go-to-home-sst.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/go-to-home-sst/go-to-home-sst.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsGoToHomeSstGoToHomeSstComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-fab class=\"float-button\" color=\"primary\" vertical=\"center\" horizontal=\"end\" slot=\"fixed\" (click)=\"pushPermisosSST()\">\n  <ion-fab-button class=\"float-button\" color=\"primary\">\n    <ion-icon class=\"custom-icon-float\" src=\"../../../assets/img/BOTON-FLOTANTE-SST.svg\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensaje-lista/mensaje-lista.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensaje-lista/mensaje-lista.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMensajeListaMensajeListaComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-spinner *ngIf=\"isLoading()\"></ion-spinner>\n\n<ion-item *ngIf=\"noData()\">\n  <h3>Buzón vacío.</h3>\n</ion-item>\n\n<!--\n<span *ngFor=\"let messageToken of tokenizeMessage(message5)\">\n    <u *ngIf=\"isLink(messageToken)\"\n          (click)=\"showInBrowser(extractLinkUrl(messageToken))\">{{extractLinkName(messageToken)}}</u>\n    <span *ngIf=\"!isLink(messageToken)\">{{messageToken}}</span>\n</span>\n-->\n<ion-grid>\n  <ion-card *ngFor=\"let mensaje of mensajes; let i=index\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <app-avatar-letter [letter]=\"mensaje.texto\"></app-avatar-letter>\n      </ion-col>\n\n      <ion-col>\n        <ion-row>\n          <ion-col size=\"9\" sizeSm=\"10\" sizeMd=\"10\" [class.show-more]=\"isShowingMore(i)\">\n            <span class=\"span-asunto\" [class.span-read]=\"isMensajeRead(mensaje.estado)\">{{mensaje.asunto}}</span>\n          </ion-col>\n\n          <ion-col>\n            <span class=\"span-fecha-hora\"\n              [class.span-read]=\"isMensajeRead(mensaje.estado)\">{{ mensaje.fechaHoraEnvio | dateOrHour }}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col [class.show-more]=\"isShowingMore(i)\">\n            <span *ngFor=\"let messageToken of tokenizeMessage(mensaje.texto)\">\n              <u *ngIf=\"isLink(messageToken)\" (click)=\"showInBrowser(extractLinkUrl(messageToken))\">{{extractLinkName(messageToken)}}</u>\n              <pre *ngIf=\"isLink(messageToken)\"> </pre>\n              <span *ngIf=\"!isLink(messageToken)\">{{messageToken}}</span>\n            </span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"!isShowingMore(i)\">\n          <ion-col class=\"col-ver-mas\" (click)=\"showMore(i, mensaje)\">\n            <span>Ver más</span>\n            <ion-icon name=\"arrow-down\"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"isShowingMore(i)\">\n          <ion-col class=\"col-ver-menos\" (click)=\"showMore(i)\">\n            <span>Ver menos</span>\n            <ion-icon name=\"arrow-up\"></ion-icon>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <ion-fab bottom right>\n              <button ion-fab mini (click)=\"eliminarMensaje(mensaje.id)\">\n                <img src=\"assets/img/eliminar.png\">\n              </button>\n            </ion-fab>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-grid>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-operativo/menu-operativo.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-operativo/menu-operativo.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuOperativoMenuOperativoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-footer class=\"footer\">\n  <ion-buttons>\n    <!-- <button class=\"button\" icon-only id=\"asistenciaEventos\" (click)=\"pushPage('asistenciaEventos')\"\n      [ngClass]=\"getStyleClass('asistenciaEventos')\">\n      <img *ngIf=\"isOpcionSeleccionada('asistenciaEventos')\" src=\"assets/img/comunicaciones-light.png\">\n      <img *ngIf=\"!isOpcionSeleccionada('asistenciaEventos')\" src=\"assets/img/comunicaciones-dark.png\">\n    </button> -->\n    <button class=\"button\" icon-only id=\"sstAdvisory\" (click)=\"pushPage('sstAdvisory')\" [ngClass]=\"getStyleClass('sstAdvisory')\">\n      <img *ngIf=\"isOpcionSeleccionada('sstAdvisory')\" src=\"assets/img/asesoria-sst-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('sstAdvisory')\" src=\"assets/img/asesoria-sst-dark.png\" />\n    </button>\n\n    <button class=\"button\" id=\"asistenciaEventos\" (click)=\"pushPage('asistenciaEventos')\" [ngClass]=\"getStyleClass('asistenciaEventos')\">\n      <ion-icon slot=\"icon-only\" [ngClass]=\"getStyleClass('asistenciaEventos')\" [src]=\"'assets/icon/eventos.svg'\"></ion-icon>\n    </button>\n\n    <button class=\"button\" icon-only id=\"risks\" (click)=\"pushPage('risks')\" [ngClass]=\"getStyleClass('risks')\">\n      <img *ngIf=\"isOpcionSeleccionada('risks')\" src=\"assets/img/riesgos-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('risks')\" src=\"assets/img/riesgos-dark.png\" />\n    </button>\n\n    <button class=\"button\" id=\"healthConditions\" (click)=\"pushPage('healthConditions')\" [ngClass]=\"getStyleClass('healthConditions')\">\n      <ion-icon slot=\"icon-only\" [ngClass]=\"getStyleClass('healthConditions')\" [src]=\"'assets/icon/nurse.svg'\"></ion-icon>\n    </button>\n\n    <button class=\"button\" icon-only id=\"epp\" (click)=\"pushPage('epp')\" [ngClass]=\"getStyleClass('epp')\">\n      <img *ngIf=\"isOpcionSeleccionada('epp')\" src=\"assets/img/epp-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('epp')\" src=\"assets/img/epp-dark.png\" />\n    </button>\n\n    <button class=\"button\" icon-only id=\"incidents\" (click)=\"pushPage('incidents')\" [ngClass]=\"getStyleClass('incidents')\">\n      <img *ngIf=\"isOpcionSeleccionada('incidents')\" src=\"assets/img/incidentes-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('incidents')\" src=\"assets/img/incidentes-dark.png\" />\n    </button>\n\n    <button\n      class=\"button\"\n      icon-only\n      id=\"unsafeConditions\"\n      (click)=\"pushPage('unsafeConditions')\"\n      [ngClass]=\"getStyleClass('unsafeConditions')\"\n    >\n      <img *ngIf=\"isOpcionSeleccionada('unsafeConditions')\" src=\"assets/img/actos-condiciones-inseguras-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('unsafeConditions')\" src=\"assets/img/actos-condiciones-inseguras-dark.png\" />\n    </button>\n\n    <button class=\"button\" icon-only id=\"communications\" (click)=\"pushPage('communications')\" [ngClass]=\"getStyleClass('communications')\">\n      <img *ngIf=\"isOpcionSeleccionada('communications')\" src=\"assets/img/comunicaciones-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('communications')\" src=\"assets/img/comunicaciones-dark.png\" />\n    </button>\n\n    <button class=\"button\" icon-only id=\"accountability\" (click)=\"pushPage('accountability')\" [ngClass]=\"getStyleClass('accountability')\">\n      <img *ngIf=\"isOpcionSeleccionada('accountability')\" src=\"assets/img/rendicion-cuentas-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('accountability')\" src=\"assets/img/rendicion-cuentas-dark.png\" />\n    </button>\n\n    <button class=\"button\" icon-only id=\"sstInquiries\" (click)=\"pushPage('sstInquiries')\" [ngClass]=\"getStyleClass('sstInquiries')\">\n      <img *ngIf=\"isOpcionSeleccionada('sstInquiries')\" src=\"assets/img/consultas-light.png\" />\n      <img *ngIf=\"!isOpcionSeleccionada('sstInquiries')\" src=\"assets/img/consultas-dark.png\" />\n    </button>\n  </ion-buttons>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-add-trabajador/modal-add-trabajador.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-add-trabajador/modal-add-trabajador.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalAddTrabajadorModalAddTrabajadorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title> Datos Trabajador </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-label class=\"ion-padding\" style=\"font-weight: 800\" position=\"floating\">Tipo Documento</ion-label>\n  <ion-input\n    style=\"background: #cfcfcf; border-radius: 10px; opacity: 0.5\"\n    type=\"text\"\n    [(ngModel)]=\"trabajador.strTipoDocumento\"\n    disabled\n  ></ion-input>\n  <br />\n  <ion-label class=\"ion-padding\" style=\"font-weight: 800\" position=\"floating\">Número Identificación</ion-label>\n  <ion-input\n    style=\"background: #cfcfcf; border-radius: 10px; opacity: 0.5\"\n    type=\"text\"\n    [(ngModel)]=\"trabajador.strNumeroDocumeto\"\n    disabled\n  ></ion-input>\n  <br />\n  <ion-label class=\"ion-padding\" style=\"font-weight: 800\" position=\"floating\">Nombre Completo</ion-label>\n  <ion-input\n    style=\"background: #cfcfcf; border-radius: 10px; opacity: 0.5\"\n    type=\"text\"\n    [(ngModel)]=\"trabajador.strNombreTrabajador\"\n    disabled\n  ></ion-input>\n  <br />\n\n  <ion-label class=\"ion-padding\" style=\"font-weight: 800\" position=\"floating\">Cargo</ion-label>\n\n  <ion-input\n    style=\"border-radius: 10px; opacity: 1; border: 1px solid gray; padding-left: 4px; padding-right: 4px; font-weight: 600\"\n    type=\"text\"\n    [(ngModel)]=\"trabajador.strCargoTrabajador\"\n  ></ion-input>\n  <br />\n  <!-- dos botones check para escoger si es ayudadnte y trabajador -->\n  <div class=\"ion-text-center\">\n    <ion-label class=\"ion-padding \" style=\"font-weight: 800\" position=\"\">Rol</ion-label>\n  </div>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item>\n        <ion-label>Ayudante de Seguridad</ion-label>\n        <ion-checkbox [(ngModel)]=\"trabajador.blnAyudanteSeguridad\" (ionChange)=\"onChangeAyudante($event)\"></ion-checkbox>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item>\n        <ion-label>Trabajador Autorizado</ion-label>\n        <ion-checkbox [(ngModel)]=\"trabajador.accion\" (ionChange)=\"onChangeTrabajador($event)\"></ion-checkbox>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"ion-text-center\">\n    <button class=\"guardar-continuar\" (click)=\"add()\">Agregar al Permiso de Trabajo</button>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-data-emergencia/modal-data-emergencia.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-data-emergencia/modal-data-emergencia.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalDataEmergenciaModalDataEmergenciaComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header lines=\"none\">\n  <ion-toolbar>\n    <ion-title> Datos de Acceso </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"> X </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- sede -->\n  <!-- Fecha -->\n  <!-- Acction / seleccionable ingreso o egreso  -->\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon class=\"style-icon\" name=\"business\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"11\">\n            <ion-label class=\"style-title\">Sede</ion-label>\n          </ion-col>\n        </ion-row>\n        <div class=\"border-input\">\n          <p>{{dataQr.NombreSede}}</p>\n        </div>\n      </ion-grid>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon class=\"style-icon\" name=\"calendar\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"11\">\n            <ion-label class=\"style-title\">Fecha y Hora</ion-label>\n          </ion-col>\n        </ion-row>\n        <div class=\"border-input\">\n          <p>{{getFechaYHora()}}</p>\n        </div>\n      </ion-grid>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon class=\"style-icon\" name=\"exit\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"11\">\n            <ion-label class=\"style-title\">Acción</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item style=\"height: 40px; padding-right: 10px; padding-left: 10px\" lines=\"none\">\n      <ion-label style=\"display: none\" position=\"floating\"> </ion-label>\n      <ion-select [(ngModel)]=\"accionEmergencia\" id=\"accion-emergencia\" mode=\"md\" cancelText=\"Cancelar\" okText=\"Aceptar\">\n        <ion-select-option value=\"ingreso\">Ingreso</ion-select-option>\n        <ion-select-option value=\"egreso\">Salida</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-icon class=\"style-icon\" name=\"exit\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label class=\"style-title\">Geoposición</ion-label>\n          </ion-col>\n          <ion-col style=\"display: flex; justify-content: flex-end\" size=\"5\">\n            <ion-toggle mode=\"ios\" (ionChange)=\"onToggleChange($event)\"></ion-toggle>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <div style=\"display: flex; justify-content: center; align-items: center; position: absolute; bottom: 0; width: 100%;\">\n    <ion-item lines=\"none\">\n      <ion-button style=\"background: transparent; color: #ff7500 !important; width: 80px;\" (click)=\"confirmarAcceso()\" fill=\"clear\">ACEPTAR</ion-button>\n    </ion-item>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-trabajadores/modal-trabajadores.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-trabajadores/modal-trabajadores.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalTrabajadoresModalTrabajadoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- crear modal flotante par disositivos movil -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title> TRABAJADORES AGREGADOS AL PERMISO </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card *ngFor=\"let trabajador of trabajadores\">\n    <ion-card-header>\n      <ion-card-title> 👷‍♂️ {{ trabajador.strNombreTrabajador }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label><strong>Cédula</strong></ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{ trabajador.strNumeroDocumeto }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label><strong>Cargo</strong></ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{ trabajador.strCargoTrabajador }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"trabajador.blnAyudanteSeguridad\">\n          <ion-col>\n            <ion-label><strong>Ayudante</strong></ion-label>\n          </ion-col>\n        </ion-row>\n        <!-- eliminar color danger -->\n        <ion-row>\n          <ion-button color=\"danger\" (click)=\"eliminarTrabajador(trabajador)\">Eliminar</ion-button>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar hideBackButton=\"true\">\n  <ion-row>\n    <ion-col>\n      <img *ngIf=\"isSetPageToGoBack()\" src=\"assets/img/back.png\" (click)=\"pushBackPage()\">\n\n      <img src=\"assets/img/man.png\" (click)=\"pushDatosGeneralesRelacionLaboral()\">\n    </ion-col>\n\n    <ion-col class=\"img-center\">\n      <img src=\"assets/img/ss.png\" (click)=\"pushHome()\">\n    </ion-col>\n\n    <ion-col>\n      <img class=\"img-right\" src=\"assets/img/configuracion.png\" (click)=\"pushConfiguracion()\">\n    </ion-col>\n  </ion-row>\n</ion-toolbar>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr-emergencia/qr-emergencia.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr-emergencia/qr-emergencia.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsQrEmergenciaQrEmergenciaComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" [hidden]=\"scanActive\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cerrarModal()\">Cerrar</ion-button>\n    </ion-buttons>\n    <ion-title>Escanear QR</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"scan-box\"></div>\n\n  <ion-grid>\n    <ion-row class=\"ion-text-center\" [hidden]=\"scanActive\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <ion-button mode=\"ios\" class=\"btn\" color=\"primary\" (click)=\"startBarcode()\">\n          <ion-icon slot=\"start\" name=\"scan\"></ion-icon>\n          <ion-label>Escanear</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-text-center\" *ngIf=\"result && !scanActive\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <p class=\"ion-text-center\">{{ result }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"scanner-buttons\" [hidden]=\"!scanActive\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <ion-button mode=\"ios\" color=\"secondary\" class=\"btn\" (click)=\"stopBarcodeRemove('')\">\n          <ion-label>Cancelar</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr/qr.component.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr/qr.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsQrQrComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" [hidden]=\"scanActive\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"cerrarModal()\">Cerrar</ion-button>\n    </ion-buttons>\n    <ion-title>Escanear QR</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"scan-box\"></div>\n\n  <ion-grid>\n    <ion-row class=\"ion-text-center\" [hidden]=\"scanActive\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <ion-button mode=\"ios\" class=\"btn\" color=\"primary\" (click)=\"startBarcode()\">\n          <ion-icon slot=\"start\" name=\"scan\"></ion-icon>\n          <ion-label>Escanear</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-text-center\" *ngIf=\"result && !scanActive\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <p class=\"ion-text-center\">{{ result }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"scanner-buttons\" [hidden]=\"!scanActive\">\n      <ion-col size=\"12\" sizeMd=\"8\" sizeLg=\"6\">\n        <ion-button mode=\"ios\" color=\"secondary\" class=\"btn\" (click)=\"stopBarcodeRemove('')\">\n          <ion-label>Cancelar</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signature-pad/signature-pad.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signature-pad/signature-pad.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignaturePadSignaturePadComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons style=\"width: 100%; display: flex; justify-content: center\" slot=\"end\">\n      <ion-button color=\"light\" expand=\"full\" [disabled]=\"isCanvasBlank()\" (click)=\"save()\"> Guardar</ion-button>\n      <ion-button color=\"light\" expand=\"full\" (click)=\"undo()\"> Deshacer</ion-button>\n      <ion-button color=\"light\" expand=\"full\" (click)=\"clear()\"> Limpiar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"signature-pad\">\n    <canvas class=\"signature-pad-canvas\" #canvas style=\"touch-action: none\"></canvas>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/title-bar/title-bar.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/title-bar/title-bar.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTitleBarTitleBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"div-accent-color\">\n  <ion-item lines=\"none\">\n    <div class=\"div-img-title\">\n      <img src=\"{{imgUrl}}\" *ngIf=\"imgUrl\">\n      <ion-icon [src]=\"iconName\" *ngIf=\"iconName\"></ion-icon>\n      <span class=\"title-wrapper\">\n        <h1>{{title}}</h1>\n      </span>\n    </div>\n  </ion-item>\n</div>";
      /***/
    },

    /***/
    "./src/app-routing.module.ts":
    /*!***********************************!*\
      !*** ./src/app-routing.module.ts ***!
      \***********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'auth',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-autenticacion-autenticacion-module */
          [__webpack_require__.e("default~src-app-pages-autenticacion-autenticacion-module~src-app-pages-home-home-module"), __webpack_require__.e("src-app-pages-autenticacion-autenticacion-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/autenticacion/autenticacion.module */
          "./src/app/pages/autenticacion/autenticacion.module.ts")).then(function (m) {
            return m.AutenticacionPageModule;
          });
        }
      }, {
        path: 'asistencia-eventos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | app-pages-asistencia-eventos-asistencia-eventos-module */
          "app-pages-asistencia-eventos-asistencia-eventos-module").then(__webpack_require__.bind(null,
          /*! ./app/pages/asistencia-eventos/asistencia-eventos.module */
          "./src/app/pages/asistencia-eventos/asistencia-eventos.module.ts")).then(function (m) {
            return m.AsistenciaEventosPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-home-home-module */
          [__webpack_require__.e("default~src-app-pages-autenticacion-autenticacion-module~src-app-pages-home-home-module"), __webpack_require__.e("common"), __webpack_require__.e("src-app-pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-configuracion-configuracion-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-configuracion-configuracion-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/configuracion/configuracion.module */
          "./src/app/pages/configuracion/configuracion.module.ts")).then(function (m) {
            return m.ConfiguracionPageModule;
          });
        }
      }, {
        path: 'communications',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-comunicaciones-comunicaciones-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-comunicaciones-comunicaciones-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/comunicaciones/comunicaciones.module */
          "./src/app/pages/comunicaciones/comunicaciones.module.ts")).then(function (m) {
            return m.ComunicacionesPageModule;
          });
        }
      }, {
        path: 'accountability',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-redicion-cuentas-redicion-cuentas-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-redicion-cuentas-redicion-cuentas-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/redicion-cuentas/redicion-cuentas.module */
          "./src/app/pages/redicion-cuentas/redicion-cuentas.module.ts")).then(function (m) {
            return m.RedicionCuentasPageModule;
          });
        }
      }, {
        path: 'sst-inquiries',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-consultas-consultas-module */
          "src-app-pages-consultas-consultas-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/consultas/consultas.module */
          "./src/app/pages/consultas/consultas.module.ts")).then(function (m) {
            return m.ConsultasPageModule;
          });
        }
      }, {
        path: 'risks',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-riesgos-riesgos-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-riesgos-riesgos-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/riesgos/riesgos.module */
          "./src/app/pages/riesgos/riesgos.module.ts")).then(function (m) {
            return m.RiesgosPageModule;
          });
        }
      }, {
        path: 'health-conditions',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-condiciones-salud-condiciones-salud-module */
          "src-app-pages-condiciones-salud-condiciones-salud-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/condiciones-salud/condiciones-salud.module */
          "./src/app/pages/condiciones-salud/condiciones-salud.module.ts")).then(function (m) {
            return m.CondicionesSaludPageModule;
          });
        }
      }, {
        path: 'epp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-epp-epp-module */
          "src-app-pages-epp-epp-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/epp/epp.module */
          "./src/app/pages/epp/epp.module.ts")).then(function (m) {
            return m.EppPageModule;
          });
        }
      }, {
        path: 'epp-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-epp-detalle-epp-detalle-module */
          "src-app-pages-epp-detalle-epp-detalle-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/epp-detalle/epp-detalle.module */
          "./src/app/pages/epp-detalle/epp-detalle.module.ts")).then(function (m) {
            return m.EppDetallePageModule;
          });
        }
      }, {
        path: 'incidents',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-incidentes-incidentes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-incidentes-incidentes-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/incidentes/incidentes.module */
          "./src/app/pages/incidentes/incidentes.module.ts")).then(function (m) {
            return m.IncidentesPageModule;
          });
        }
      }, {
        path: 'unsafe-conditions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | src-app-pages-actos-condiciones-inseguras-actos-condiciones-inseguras-module */
          [__webpack_require__.e("common"), __webpack_require__.e("src-app-pages-actos-condiciones-inseguras-actos-condiciones-inseguras-module")]).then(__webpack_require__.bind(null,
          /*! src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.module */
          "./src/app/pages/actos-condiciones-inseguras/actos-condiciones-inseguras.module.ts")).then(function (m) {
            return m.ActosCondicionesInsegurasPageModule;
          });
        }
      }, {
        path: 'sst-advisory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | src-app-pages-asesoria-sst-asesoria-sst-module */
          "src-app-pages-asesoria-sst-asesoria-sst-module").then(__webpack_require__.bind(null,
          /*! src/app/pages/asesoria-sst/asesoria-sst.module */
          "./src/app/pages/asesoria-sst/asesoria-sst.module.ts")).then(function (m) {
            return m.AsesoriaSstPageModule;
          });
        }
      }, {
        path: 'inicio-emergencia',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | app-pages-emergencia-inicio-emergencia-inicio-emergencia-module */
          "app-pages-emergencia-inicio-emergencia-inicio-emergencia-module").then(__webpack_require__.bind(null,
          /*! ./app/pages/emergencia/inicio-emergencia/inicio-emergencia.module */
          "./src/app/pages/emergencia/inicio-emergencia/inicio-emergencia.module.ts")).then(function (m) {
            return m.InicioEmergenciaPageModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'auth'
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app.component.scss":
    /*!********************************!*\
      !*** ./src/app.component.scss ***!
      \********************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app.component.ts":
    /*!******************************!*\
      !*** ./src/app.component.ts ***!
      \******************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_commons_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/commons/environment */
      "./src/app/commons/environment.ts");
      /* harmony import */


      var src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/commons/preferences-keys */
      "./src/app/commons/preferences-keys.ts");
      /* harmony import */


      var src_app_services_context_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var _app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app/services/network.service */
      "./src/app/services/network.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, statusBar, context, oneSignal, router, networkService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.statusBar = statusBar;
          this.context = context;
          this.oneSignal = oneSignal;
          this.router = router;
          this.networkService = networkService;
          this.initializeApp();
        }

        return _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            /* cambiar Environments en DataService SST : PATH */
            this.context.setEnvironment(src_app_commons_environment__WEBPACK_IMPORTED_MODULE_6__["Environments"].PreProd);
            this.platform.ready().then(function () {
              // this.checkDarkTheme();
              _this.statusBar.styleDefault();

              _this.statusBar.overlaysWebView(false);

              _this.oneSignalSetup();

              _this.networkService.initializeNetworkEvents();

              _this.networkService.testNetworkConnection();
            });
          }
        }, {
          key: "checkDarkTheme",
          value: function checkDarkTheme() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
          }
        }, {
          key: "oneSignalSetup",
          value: function oneSignalSetup() {
            var _this2 = this;

            this.oneSignal.startInit(this.context.getOneSignalAppKey(), this.context.getGoogleProjectApiKey());
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationOpened().subscribe(function (result) {
              console.log(result);

              _this2.context.get().then(function (c) {
                if (result.notification.isAppInFocus || c !== undefined) {
                  if (result.notification.payload.title === 'Rendición de Cuentas') {
                    _this2.router.navigate(['/accountability']);
                  } else {
                    _this2.router.navigate(['/communications']);
                  }
                } else {
                  var pageToPush;

                  if (result.notification.payload.title === 'Rendición de Cuentas') {
                    pageToPush = '/accountability';
                  } else {
                    pageToPush = '/communications';
                  }

                  localStorage.setItem(src_app_commons_preferences_keys__WEBPACK_IMPORTED_MODULE_7__["PAGE_TO_PUSH"], pageToPush);
                }
              });
            });
            this.oneSignal.endInit();
          }
          /**
           * Alterna el modo oscuro en base al parámetro indicado.
           *
           * @param shouldAdd Indica si activar o no el modo oscuro.
           */

        }, {
          key: "toggleDarkTheme",
          value: function toggleDarkTheme(shouldAdd) {
            document.body.classList.toggle('dark', shouldAdd);
          }
        }]);
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: src_app_services_context_service__WEBPACK_IMPORTED_MODULE_8__["ContextService"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _app_services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app.module.ts":
    /*!***************************!*\
      !*** ./src/app.module.ts ***!
      \***************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared.module */
      "./src/app/shared.module.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app.component.ts");
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      "./node_modules/@ionic-native/app-rate/__ivy_ngcc__/ngx/index.js");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot(), src_app_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        providers: [_ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_8__["AppRate"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/commons/enum-estado-mensaje.ts":
    /*!************************************************!*\
      !*** ./src/app/commons/enum-estado-mensaje.ts ***!
      \************************************************/

    /*! exports provided: ESTADO_MENSAJE */

    /***/
    function srcAppCommonsEnumEstadoMensajeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ESTADO_MENSAJE", function () {
        return ESTADO_MENSAJE;
      });

      var ESTADO_MENSAJE;

      (function (ESTADO_MENSAJE) {
        ESTADO_MENSAJE[ESTADO_MENSAJE["Read"] = 2] = "Read";
        ESTADO_MENSAJE[ESTADO_MENSAJE["Deleted"] = 3] = "Deleted";
        ESTADO_MENSAJE[ESTADO_MENSAJE["Sent"] = 1] = "Sent";
      })(ESTADO_MENSAJE || (ESTADO_MENSAJE = {}));
      /***/

    },

    /***/
    "./src/app/commons/environment.ts":
    /*!****************************************!*\
      !*** ./src/app/commons/environment.ts ***!
      \****************************************/

    /*! exports provided: ALISSTA_MOCK_UPS, ALISSTA_TEST, SIARP_TEST, SIARP_PRE_PROD, Environments, getAlisstaTest, getAlisstaPreProd, getAlisstaProd, getAlisstaV2019, getAlisstaWebTest, getAlisstaWebProd, getAlisstaWebV2019, getGoogleProjectKeyProd, getGoogleProjectKeyTest, getOneSignalKeyProd, getOneSignalKeyTest, getIPApi */

    /***/
    function srcAppCommonsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALISSTA_MOCK_UPS", function () {
        return ALISSTA_MOCK_UPS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ALISSTA_TEST", function () {
        return ALISSTA_TEST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIARP_TEST", function () {
        return SIARP_TEST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SIARP_PRE_PROD", function () {
        return SIARP_PRE_PROD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Environments", function () {
        return Environments;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlisstaTest", function () {
        return getAlisstaTest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlisstaPreProd", function () {
        return getAlisstaPreProd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlisstaProd", function () {
        return getAlisstaProd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlisstaV2019", function () {
        return getAlisstaV2019;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlisstaWebTest", function () {
        return getAlisstaWebTest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlisstaWebProd", function () {
        return getAlisstaWebProd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAlisstaWebV2019", function () {
        return getAlisstaWebV2019;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGoogleProjectKeyProd", function () {
        return getGoogleProjectKeyProd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGoogleProjectKeyTest", function () {
        return getGoogleProjectKeyTest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getOneSignalKeyProd", function () {
        return getOneSignalKeyProd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getOneSignalKeyTest", function () {
        return getOneSignalKeyTest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIPApi", function () {
        return getIPApi;
      });

      var ALISSTA_MOCK_UPS = 'http://amigos-web.adacsc.co';
      var ALISSTA_TEST = 'http://test-positiva-webservice-';
      var ALISSTA_PROD = '';
      var SIARP_TEST = 'http://190.26.216.121:8080/wssst';
      var SIARP_PRE_PROD = 'http://190.26.216.109:8080/wssst';
      var Environments;

      (function (Environments) {
        Environments[Environments["Test"] = 0] = "Test";
        Environments[Environments["PreProd"] = 1] = "PreProd";
        Environments[Environments["Prod"] = 2] = "Prod";
        Environments[Environments["V2019"] = 3] = "V2019";
      })(Environments || (Environments = {}));

      function getAlisstaTest(serviceName) {
        console.log('1. ************', serviceName);
        return 'https://s' + serviceName + '-test.adacsc.co/sg-sst';
      }

      function getAlisstaPreProd(serviceName) {
        console.log('3. ************', serviceName);
        return 'https://test-positiva-webservice-' + serviceName + '-pre.adacsc.co/sg-sst';
      }

      function getAlisstaProd(serviceName) {
        console.log('2. ************', serviceName);
        return 'https://s' + serviceName + '.adacsc.co/sg-sst';
      }

      function getAlisstaV2019(serviceName) {
        console.log('4. ************', serviceName);
        return 'https://v2019s' + serviceName + '.adacsc.co/sg-sst';
      }

      function getAlisstaWebTest() {
        return 'http://test-positiva.adacsc.co';
      }

      function getAlisstaWebProd() {
        return 'https://www.alissta.gov.co';
      }

      function getAlisstaWebV2019() {
        return 'https://test2019-positiva.adacsc.co/';
      }

      function getGoogleProjectKeyProd() {
        return '765750792443';
      }

      function getGoogleProjectKeyTest() {
        return '655808559893';
      }

      function getOneSignalKeyProd() {
        return '117eabf4-4cdd-4bf9-ad76-c9e62d373568';
      }

      function getOneSignalKeyTest() {
        return 'bd642783-b718-4ae0-8dee-bf8e9b634d9e';
      }
      /**
       * Obtiene la _URL_ para el descubrimiento de la _IP_ pública.
       */


      function getIPApi() {
        return 'https://api.ipify.org/?format=json';
      }
      /***/

    },

    /***/
    "./src/app/commons/locale.ts":
    /*!***********************************!*\
      !*** ./src/app/commons/locale.ts ***!
      \***********************************/

    /*! exports provided: MONTHS_SHORT, MONTHS */

    /***/
    function srcAppCommonsLocaleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MONTHS_SHORT", function () {
        return MONTHS_SHORT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MONTHS", function () {
        return MONTHS;
      });

      var MONTHS_SHORT = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      var MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      /***/
    },

    /***/
    "./src/app/commons/preferences-keys.ts":
    /*!*********************************************!*\
      !*** ./src/app/commons/preferences-keys.ts ***!
      \*********************************************/

    /*! exports provided: ID_EMPRESA, ID_TRABAJADOR, USER_PASS, NOTIFICACIONES, PAGE_TO_PUSH, TUTORIAL_DISPLAYED */

    /***/
    function srcAppCommonsPreferencesKeysTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ID_EMPRESA", function () {
        return ID_EMPRESA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ID_TRABAJADOR", function () {
        return ID_TRABAJADOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USER_PASS", function () {
        return USER_PASS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NOTIFICACIONES", function () {
        return NOTIFICACIONES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PAGE_TO_PUSH", function () {
        return PAGE_TO_PUSH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TUTORIAL_DISPLAYED", function () {
        return TUTORIAL_DISPLAYED;
      });

      var ID_EMPRESA = 'idEmpresa';
      var ID_TRABAJADOR = 'idEmpleado';
      var USER_PASS = 'userPass';
      var NOTIFICACIONES = 'notificaciones';
      var PAGE_TO_PUSH = 'pageToPush';
      var TUTORIAL_DISPLAYED = 'tutorialDdisplayed';
      /***/
    },

    /***/
    "./src/app/commons/user-feedback.ts":
    /*!******************************************!*\
      !*** ./src/app/commons/user-feedback.ts ***!
      \******************************************/

    /*! exports provided: presentAlert, alertCommunicationError */

    /***/
    function srcAppCommonsUserFeedbackTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "presentAlert", function () {
        return presentAlert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "alertCommunicationError", function () {
        return alertCommunicationError;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");

      function presentAlert(title, subTitle, message, alertCtrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var alert;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return alertCtrl.create({
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
                alert = _context2.sent;
                _context2.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
      }

      function alertCommunicationError(alertCtrl) {
        var msg = 'No se logró la conexión. Intente más tarde.';
        presentAlert('Alerta', '', msg, alertCtrl);
      }
      /***/

    },

    /***/
    "./src/app/components/avatar-letter/avatar-letter.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/avatar-letter/avatar-letter.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsAvatarLetterAvatarLetterComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\ndiv {\n  width: 4rem;\n  height: 4rem;\n  display: flex;\n  border-radius: 50%;\n  background-color: #687684;\n  margin: auto;\n}\ndiv h1 {\n  margin: auto !important;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItbGV0dGVyL2F2YXRhci1sZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEVEY7QUNZQSx1Q0FBQTtBQTZEQTs7O0VBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRDlFRjtBQ2lGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0EsbUNBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLDhCQUFBO0FEbkZGO0FDc0ZBO0VBQ0UsaURBQUE7RUFDQSxtREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7QURuRkY7QUNzRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLHNDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLGlDQUFBO0VBRUEsaUNBQUE7RUFFQSw4QkFBQTtBRDNGRjtBQXpNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBNE1GO0FBMU1FO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE0TUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F2YXRhci1sZXR0ZXIvYXZhdGFyLWxldHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuLyoqIFZhcmlhYmxlcyBkZSBsYSB2ZXJzacOzbiBhbnRlcmlvciAqKi9cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLCAyMDAsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjEzLCA1MjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xufVxuXG4uaW9zIGJvZHkuZGFyayBpb24tbW9kYWwge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cblxuZGl2IHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg3Njg0O1xuICBtYXJnaW46IGF1dG87XG59XG5kaXYgaDEge1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDAuN3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59IiwiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbi8qKiBWYXJpYWJsZXMgZGUgbGEgdmVyc2nDs24gYW50ZXJpb3IgKiovXG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMnO1xuJGFwcC1kaXJlY3Rpb246IGx0cjtcbiRmb250LXNpemU6IDE2cHg7XG4kZm9udC13ZWlnaHQ6IDQwMDtcbiRjb250ZW50LWltZy1zaXplOiAyLjVyZW07XG5cbiRjb2xvcnM6IChcbiAgYmFzZS0xOiAjZTZlYWVlLFxuICBiYXNlLTI6ICNjYWQxZGEsXG4gIGJhc2UtMzogI2FmYjhjNCxcbiAgYmFzZS00OiAjOTZhMGFjLFxuICBiYXNlLTU6ICM3ZThhOTcsXG4gIGJhc2UtNjogIzY4NzY4NCxcbiAgYmFzZS03OiAjNTI2MjcwLFxuICBiYXNlLTg6ICMyODRlNWEsXG4gIHByaW1hcnk6ICNmZjc1MDAsXG4gIGJ0bi1wcmltYXJ5OiAjNTliYWE4LFxuKTtcblxuJHRleHQtaW5wdXQtaW9zLXNob3ctZm9jdWUtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1pb3MtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItaW9zLW9wdGlvbi1zZWxlY3RlZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzZWxlY3QtaW9zLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8taW9zLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYnV0dG9uLWlvcy1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctaW9zLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLWlvcy1hY3RpdmUtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtaW9zLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY2lyY2xlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWlvcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwb3BvdmVyLWlvcy13aWR0aDogMzEwcHg7XG5cbiR0ZXh0LWlucHV0LW1kLXNob3ctZm9jdXMtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1tZC10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuJHBpY2tlci1tZC1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LW1kLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8tbWQtY29sb3Itb246IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcGlja2VyLW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1tZC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiR0b2dnbGUtbWQtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiRhY3Rpb24tc2hlZXQtbWQtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1tZC1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtYnViYmxlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWRvdHMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1tZC13aWR0aDogMzEwcHg7XG5cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbn1cblxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG5cbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/avatar-letter/avatar-letter.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/avatar-letter/avatar-letter.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AvatarLetterComponent */

    /***/
    function srcAppComponentsAvatarLetterAvatarLetterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvatarLetterComponent", function () {
        return AvatarLetterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AvatarLetterComponent = /*#__PURE__*/function () {
        function AvatarLetterComponent() {
          _classCallCheck(this, AvatarLetterComponent);
        }

        return _createClass(AvatarLetterComponent, [{
          key: "getAvatarLetter",
          value: function getAvatarLetter() {
            return this.letter && this.letter.length > 0 ? this.letter.substr(0, 1) : '';
          }
        }]);
      }();

      AvatarLetterComponent.propDecorators = {
        letter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      AvatarLetterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avatar-letter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./avatar-letter.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/avatar-letter/avatar-letter.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./avatar-letter.component.scss */
        "./src/app/components/avatar-letter/avatar-letter.component.scss"))["default"]]
      })], AvatarLetterComponent);
      /***/
    },

    /***/
    "./src/app/components/go-to-home-sst/go-to-home-sst.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/components/go-to-home-sst/go-to-home-sst.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsGoToHomeSstGoToHomeSstComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab-button.float-button {\n  --padding: 0;\n  --margin: 0;\n  --size: 44px;\n  --background: #ff7500;\n}\n\nion-icon.float-button {\n  --background: #ff7500;\n}\n\n.custom-icon-float {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nby10by1ob21lLXNzdC9nby10by1ob21lLXNzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ28tdG8taG9tZS1zc3QvZ28tdG8taG9tZS1zc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbi5mbG9hdC1idXR0b24ge1xuICAtLXBhZGRpbmc6IDA7XG4gIC0tbWFyZ2luOiAwO1xuICAtLXNpemU6IDQ0cHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmNzUwMDtcbn1cblxuaW9uLWljb24uZmxvYXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY3NTAwO1xufVxuXG4uY3VzdG9tLWljb24tZmxvYXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/go-to-home-sst/go-to-home-sst.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/go-to-home-sst/go-to-home-sst.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GoToHomeSstComponent */

    /***/
    function srcAppComponentsGoToHomeSstGoToHomeSstComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoToHomeSstComponent", function () {
        return GoToHomeSstComponent;
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

      var GoToHomeSstComponent = /*#__PURE__*/function () {
        function GoToHomeSstComponent(router) {
          _classCallCheck(this, GoToHomeSstComponent);

          this.router = router;
        }

        return _createClass(GoToHomeSstComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "pushPermisosSST",
          value: function pushPermisosSST() {
            this.router.navigate(['/home']);
          }
        }]);
      }();

      GoToHomeSstComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      GoToHomeSstComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-go-to-home-sst',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./go-to-home-sst.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/go-to-home-sst/go-to-home-sst.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./go-to-home-sst.component.scss */
        "./src/app/components/go-to-home-sst/go-to-home-sst.component.scss"))["default"]]
      })], GoToHomeSstComponent);
      /***/
    },

    /***/
    "./src/app/components/mensaje-lista/mensaje-lista.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/mensaje-lista/mensaje-lista.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMensajeListaMensajeListaComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\nion-spinner {\n  margin: 3rem auto;\n  display: block;\n}\n.span-fecha-hora,\n.span-asunto {\n  font-weight: bolder;\n}\n.span-fecha-hora {\n  float: right;\n  color: #ff7500;\n}\n.span-texto {\n  color: #96a0ac;\n}\n.col-ver-mas,\n.col-ver-menos {\n  font-size: 12px;\n  color: #ff7500;\n}\n.col-ver-menos {\n  margin-bottom: 3rem;\n}\n.show-more {\n  white-space: normal !important;\n}\n.span-read {\n  color: #96a0ac;\n}\npre {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW5zYWplLWxpc3RhL21lbnNhamUtbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEVEY7QUNZQSx1Q0FBQTtBQTZEQTs7O0VBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRDlFRjtBQ2lGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0EsbUNBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLDhCQUFBO0FEbkZGO0FDc0ZBO0VBQ0UsaURBQUE7RUFDQSxtREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7QURuRkY7QUNzRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLHNDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLGlDQUFBO0VBRUEsaUNBQUE7RUFFQSw4QkFBQTtBRDNGRjtBQXpNQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQTRNRjtBQTNKQTs7RUFFRSxtQkFBQTtBQThKRjtBQTNKQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBOEpGO0FBM0pBO0VBQ0UsY0FBQTtBQThKRjtBQTNKQTs7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQThKRjtBQTNKQTtFQUNFLG1CQUFBO0FBOEpGO0FBM0pBO0VBQ0UsOEJBQUE7QUE4SkY7QUEzSkE7RUFDRSxjQUFBO0FBOEpGO0FBM0pBO0VBQ0UsZUFBQTtBQThKRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVuc2FqZS1saXN0YS9tZW5zYWplLWxpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNwYW4tZmVjaGEtaG9yYSxcbi5zcGFuLWFzdW50byB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5zcGFuLWZlY2hhLWhvcmEge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZmY3NTAwO1xufVxuXG4uc3Bhbi10ZXh0byB7XG4gIGNvbG9yOiAjOTZhMGFjO1xufVxuXG4uY29sLXZlci1tYXMsXG4uY29sLXZlci1tZW5vcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZjc1MDA7XG59XG5cbi5jb2wtdmVyLW1lbm9zIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLnNob3ctbW9yZSB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnNwYW4tcmVhZCB7XG4gIGNvbG9yOiAjOTZhMGFjO1xufVxuXG5wcmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59IiwiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogI2ZmNzUwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDI1NSwgMTE3LCAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI2UwNjcwMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmY4MzFhO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbi8qKiBWYXJpYWJsZXMgZGUgbGEgdmVyc2nDs24gYW50ZXJpb3IgKiovXG5cbiRmb250LXBhdGg6ICcuLi9hc3NldHMvZm9udHMnO1xuJGFwcC1kaXJlY3Rpb246IGx0cjtcbiRmb250LXNpemU6IDE2cHg7XG4kZm9udC13ZWlnaHQ6IDQwMDtcbiRjb250ZW50LWltZy1zaXplOiAyLjVyZW07XG5cbiRjb2xvcnM6IChcbiAgYmFzZS0xOiAjZTZlYWVlLFxuICBiYXNlLTI6ICNjYWQxZGEsXG4gIGJhc2UtMzogI2FmYjhjNCxcbiAgYmFzZS00OiAjOTZhMGFjLFxuICBiYXNlLTU6ICM3ZThhOTcsXG4gIGJhc2UtNjogIzY4NzY4NCxcbiAgYmFzZS03OiAjNTI2MjcwLFxuICBiYXNlLTg6ICMyODRlNWEsXG4gIHByaW1hcnk6ICNmZjc1MDAsXG4gIGJ0bi1wcmltYXJ5OiAjNTliYWE4LFxuKTtcblxuJHRleHQtaW5wdXQtaW9zLXNob3ctZm9jdWUtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1pb3MtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItaW9zLW9wdGlvbi1zZWxlY3RlZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzZWxlY3QtaW9zLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8taW9zLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYnV0dG9uLWlvcy1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctaW9zLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLWlvcy1hY3RpdmUtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kYWxlcnQtaW9zLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LWlvcy1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY2lyY2xlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWlvcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwb3BvdmVyLWlvcy13aWR0aDogMzEwcHg7XG5cbiR0ZXh0LWlucHV0LW1kLXNob3ctZm9jdXMtaGlnaGxpZ2h0OiBmYWxzZSAhZGVmYXVsdDtcbiRsYWJlbC1tZC10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xuJHBpY2tlci1tZC1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LW1kLWljb24tY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcmFkaW8tbWQtY29sb3Itb246IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcGlja2VyLW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1tZC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiR0b2dnbGUtbWQtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiB3aGl0ZTtcbiRhY3Rpb24tc2hlZXQtbWQtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1tZC1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtYnViYmxlcy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jcmVzY2VudC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWRvdHMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1tZC13aWR0aDogMzEwcHg7XG5cbi8qXG4gKiBEYXJrIENvbG9yc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwgMjAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsIDEwMCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIxMywgNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsIDczLCA5NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xufVxuXG4vKlxuICogaU9TIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbn1cblxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LCAxOCwgMTg7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG5cbiAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/mensaje-lista/mensaje-lista.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/mensaje-lista/mensaje-lista.component.ts ***!
      \*********************************************************************/

    /*! exports provided: MensajeListaComponent */

    /***/
    function srcAppComponentsMensajeListaMensajeListaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MensajeListaComponent", function () {
        return MensajeListaComponent;
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


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/commons/enum-estado-mensaje */
      "./src/app/commons/enum-estado-mensaje.ts");
      /* harmony import */


      var src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/commons/user-feedback */
      "./src/app/commons/user-feedback.ts");
      /* harmony import */


      var src_app_entities_mensaje__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/entities/mensaje */
      "./src/app/entities/mensaje.ts");
      /* harmony import */


      var src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/mensaje.service */
      "./src/app/services/mensaje.service.ts");

      var MensajeListaComponent = /*#__PURE__*/function () {
        function MensajeListaComponent(mensajeService, alertCtrl, browser) {
          _classCallCheck(this, MensajeListaComponent);

          this.mensajeService = mensajeService;
          this.alertCtrl = alertCtrl;
          this.browser = browser;
          this.indexShowMore = -1;
        }

        return _createClass(MensajeListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.mensajeService.getByMensajeState(src_app_commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_4__["ESTADO_MENSAJE"].Sent).subscribe(function (response) {
              _this3.mensajeService.getByMensajeState(src_app_commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_4__["ESTADO_MENSAJE"].Read).subscribe(function (_response) {
                _this3.mensajes = src_app_entities_mensaje__WEBPACK_IMPORTED_MODULE_6__["Mensaje"].parse(response).concat(src_app_entities_mensaje__WEBPACK_IMPORTED_MODULE_6__["Mensaje"].parse(_response)).filter(_this3.filterFunction).sort(_this3.sortByDatePredicate);
              }, function (error) {
                Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this3.alertCtrl);
              });
            }, function (error) {
              Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this3.alertCtrl);
            });
          }
        }, {
          key: "sortByDatePredicate",
          value: function sortByDatePredicate(m1, m2) {
            return m2.fechaHoraEnvio.getTime() - m1.fechaHoraEnvio.getTime();
          }
        }, {
          key: "isLoading",
          value: function isLoading() {
            return !this.mensajes;
          }
        }, {
          key: "showMore",
          value: function showMore(index, mensaje) {
            if (index === this.indexShowMore) {
              this.indexShowMore = -1;
            } else {
              this.indexShowMore = index;

              if (mensaje) {
                this.leerMensaje(mensaje);
              }
            }
          }
        }, {
          key: "isShowingMore",
          value: function isShowingMore(index) {
            return index === this.indexShowMore;
          }
        }, {
          key: "leerMensaje",
          value: function leerMensaje(mensaje) {
            var _this4 = this;

            mensaje.estado = src_app_commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_4__["ESTADO_MENSAJE"].Read;

            if (this.leerMensajeSubscription) {
              this.leerMensajeSubscription.unsubscribe();
            }

            this.leerMensajeSubscription = this.mensajeService.updateMensajeState(mensaje.id, src_app_commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_4__["ESTADO_MENSAJE"].Read).subscribe(function (response) {}, function (error) {
              return Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this4.alertCtrl);
            });
          }
        }, {
          key: "isMensajeRead",
          value: function isMensajeRead(estado) {
            return estado === src_app_commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_4__["ESTADO_MENSAJE"].Read;
          }
        }, {
          key: "eliminarMensaje",
          value: function eliminarMensaje(idMensaje) {
            var _this5 = this;

            this.eliminarMensajeSubscription = this.mensajeService.updateMensajeState(idMensaje, src_app_commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_4__["ESTADO_MENSAJE"].Deleted).subscribe(function (response) {
              _this5.mensajes = _this5.mensajes.filter(function (mensaje) {
                return mensaje.id !== idMensaje;
              });
            }, function (error) {
              return Object(src_app_commons_user_feedback__WEBPACK_IMPORTED_MODULE_5__["alertCommunicationError"])(_this5.alertCtrl);
            });
          }
        }, {
          key: "noData",
          value: function noData() {
            return this.mensajes && this.mensajes.length === 0;
          }
        }, {
          key: "showInBrowser",
          value: function showInBrowser(url) {
            var target = '_system';
            var options = '';
            this.browser.create(url, target, options);
          }
        }, {
          key: "isLink",
          value: function isLink(str) {
            return str.includes('<a') && str.includes('</a>');
          }
        }, {
          key: "extractLinkName",
          value: function extractLinkName(str) {
            return str.split('>')[1].split('<')[0];
          }
        }, {
          key: "extractLinkUrl",
          value: function extractLinkUrl(str) {
            return str.split('href=\"')[1].split('\"')[0];
          }
        }, {
          key: "tokenizeMessage",
          value: function tokenizeMessage(message) {
            var startIndex = message.indexOf('<a');
            var endIndex = message.indexOf('</a>') + 4;

            if (startIndex === -1) {
              return [message];
            } else {
              return [message.substring(0, startIndex), message.substring(startIndex, endIndex)].concat(this.tokenizeMessage(message.substring(endIndex + 1)));
            }
          }
        }]);
      }();

      MensajeListaComponent.ctorParameters = function () {
        return [{
          type: src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__["MensajeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
        }];
      };

      MensajeListaComponent.propDecorators = {
        filterFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      MensajeListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mensaje-lista',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mensaje-lista.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensaje-lista/mensaje-lista.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mensaje-lista.component.scss */
        "./src/app/components/mensaje-lista/mensaje-lista.component.scss"))["default"]]
      })], MensajeListaComponent);
      /***/
    },

    /***/
    "./src/app/components/menu-operativo/menu-operativo.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/components/menu-operativo/menu-operativo.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMenuOperativoMenuOperativoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\n.footer {\n  width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n  overflow-x: scroll;\n  background-color: #96a0ac;\n  text-align: center;\n}\n.footer ion-buttons {\n  display: inline-flex;\n  margin: 0 auto;\n}\n.footer ion-buttons .button {\n  margin-top: 0;\n  margin-bottom: 0;\n  border-radius: 0;\n  display: inline-flex;\n  box-shadow: none;\n  padding: 5px 15px;\n}\n.footer ion-buttons .button img {\n  width: 3rem;\n  max-width: initial;\n}\n.footer ion-buttons .button ion-icon {\n  width: 3rem;\n  height: 3rem;\n  color: #627783;\n}\n.footer ion-buttons .button ion-icon.opcion-seleccionada {\n  color: #ffffff !important;\n  border: none !important;\n}\n.opcion-seleccionada {\n  background-color: #284e5a !important;\n  border-top: 3px solid #ff7500;\n  padding-top: 2px !important;\n}\n.opcion-no-seleccionada {\n  background-color: #96a0ac;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LW9wZXJhdGl2by9tZW51LW9wZXJhdGl2by5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEIsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURURjtBQ1lBLHVDQUFBO0FBNkRBOzs7RUFBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEOUVGO0FDaUZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxtQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsOEJBQUE7QURuRkY7QUNzRkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRG5GRjtBQ3NGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esc0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsaUNBQUE7RUFFQSxpQ0FBQTtFQUVBLDhCQUFBO0FEM0ZGO0FBek1BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBNE1GO0FBMU1FO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBNE1KO0FBMU1JO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE0TU47QUExTU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUE0TVI7QUF6TU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUEyTVI7QUF6TVE7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FBMk1WO0FBcE1BO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBdU1GO0FBcE1BO0VBQ0UseUJBQUE7QUF1TUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUtb3BlcmF0aXZvL21lbnUtb3BlcmF0aXZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG4uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk2YTBhYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3RlciBpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5mb290ZXIgaW9uLWJ1dHRvbnMgLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cbi5mb290ZXIgaW9uLWJ1dHRvbnMgLmJ1dHRvbiBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xufVxuLmZvb3RlciBpb24tYnV0dG9ucyAuYnV0dG9uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgY29sb3I6ICM2Mjc3ODM7XG59XG4uZm9vdGVyIGlvbi1idXR0b25zIC5idXR0b24gaW9uLWljb24ub3BjaW9uLXNlbGVjY2lvbmFkYSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ub3BjaW9uLXNlbGVjY2lvbmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODRlNWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZjc1MDA7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbn1cblxuLm9wY2lvbi1uby1zZWxlY2Npb25hZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZhMGFjO1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/menu-operativo/menu-operativo.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/menu-operativo/menu-operativo.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MenuOperativoComponent */

    /***/
    function srcAppComponentsMenuOperativoMenuOperativoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuOperativoComponent", function () {
        return MenuOperativoComponent;
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

      var MenuOperativoComponent = /*#__PURE__*/function () {
        function MenuOperativoComponent(router) {
          _classCallCheck(this, MenuOperativoComponent);

          this.router = router;
          this.PAGES_MAP = {
            auth: '/auth',
            asistenciaEventos: '/asistencia-eventos',
            home: '/home',
            settings: '/settings',
            communications: '/communications',
            accountability: '/accountability',
            sstInquiries: '/sst-inquiries',
            risks: '/risks',
            healthConditions: '/health-conditions',
            epp: '/epp',
            incidents: '/incidents',
            unsafeConditions: '/unsafe-conditions',
            sstAdvisory: '/sst-advisory'
          };
        }

        return _createClass(MenuOperativoComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            if (this.opcionSeleccionada) {
              setTimeout(function () {
                return _this6.makeOptionVisible(_this6.opcionSeleccionada);
              }, 1000);
            }
          }
        }, {
          key: "pushPage",
          value: function pushPage(page) {
            this.opcionSeleccionada = page;
            this.router.navigate([this.PAGES_MAP[page]]);
          }
        }, {
          key: "getStyleClass",
          value: function getStyleClass(opcion) {
            return opcion === this.opcionSeleccionada ? 'opcion-seleccionada' : 'opcion-no-seleccionada';
          }
        }, {
          key: "isOpcionSeleccionada",
          value: function isOpcionSeleccionada(opcion) {
            return opcion === this.opcionSeleccionada;
          }
        }, {
          key: "makeOptionVisible",
          value: function makeOptionVisible(opcionSeleccionada) {
            var _opcionSeleccionada;

            if (opcionSeleccionada === 'incidents') {
              _opcionSeleccionada = 'unsafeConditions';
            } else {
              _opcionSeleccionada = opcionSeleccionada;
            }

            var element = document.getElementById(_opcionSeleccionada);
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }]);
      }();

      MenuOperativoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      MenuOperativoComponent.propDecorators = {
        opcionSeleccionada: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      MenuOperativoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-operativo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menu-operativo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu-operativo/menu-operativo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menu-operativo.component.scss */
        "./src/app/components/menu-operativo/menu-operativo.component.scss"))["default"]]
      })], MenuOperativoComponent);
      /***/
    },

    /***/
    "./src/app/components/modal-add-trabajador/modal-add-trabajador.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/modal-add-trabajador/modal-add-trabajador.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsModalAddTrabajadorModalAddTrabajadorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  background: #fff;\n  color: black;\n  border-radius: 0px 0px 4px 4px;\n  text-align: center;\n}\nion-toolbar ion-title {\n  font-weight: 600;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1hZGQtdHJhYmFqYWRvci9tb2RhbC1hZGQtdHJhYmFqYWRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSjtBQUVBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1hZGQtdHJhYmFqYWRvci9tb2RhbC1hZGQtdHJhYmFqYWRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbmJ1dHRvbi5ndWFyZGFyLWNvbnRpbnVhciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGI5YTQ5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/modal-add-trabajador/modal-add-trabajador.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/modal-add-trabajador/modal-add-trabajador.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ModalAddTrabajadorComponent */

    /***/
    function srcAppComponentsModalAddTrabajadorModalAddTrabajadorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalAddTrabajadorComponent", function () {
        return ModalAddTrabajadorComponent;
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

      var ModalAddTrabajadorComponent = /*#__PURE__*/function () {
        function ModalAddTrabajadorComponent(modalController, navParams, alerController) {
          _classCallCheck(this, ModalAddTrabajadorComponent);

          this.modalController = modalController;
          this.navParams = navParams;
          this.alerController = alerController;
        }

        return _createClass(ModalAddTrabajadorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.trabajador = this.navParams.get('trabajador');
            console.log('trabajador en modal _DDDDDD' + JSON.stringify(this.trabajador));
            this.trabajador.accion = true;
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            /* limpiar user */
            this.modalController.dismiss();
          }
        }, {
          key: "add",
          value: function add() {
            if (this.trabajador.accion == true || this.trabajador.blnAyudanteSeguridad == true) {
              this.trabajador.blnActivo = true;
              this.modalController.dismiss({
                trabajador: this.trabajador
              });
            } else {
              this.alerController.create({
                header: 'Alerta',
                message: 'Debes seleccionar un roll Ayudante y/o Trabajador',
                buttons: ['Aceptar']
              }).then(function (alert) {
                alert.present();
              });
            }
          }
        }, {
          key: "onChangeAyudante",
          value: function onChangeAyudante(event) {
            this.trabajador.blnAyudanteSeguridad = event.detail.checked;
          }
        }, {
          key: "onChangeTrabajador",
          value: function onChangeTrabajador(event) {
            this.trabajador.accion = event.detail.checked;
            console.log(this.trabajador);
          }
        }]);
      }();

      ModalAddTrabajadorComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      ModalAddTrabajadorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-add-trabajador',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-add-trabajador.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-add-trabajador/modal-add-trabajador.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-add-trabajador.component.scss */
        "./src/app/components/modal-add-trabajador/modal-add-trabajador.component.scss"))["default"]]
      })], ModalAddTrabajadorComponent);
      /***/
    },

    /***/
    "./src/app/components/modal-data-emergencia/modal-data-emergencia.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/modal-data-emergencia/modal-data-emergencia.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsModalDataEmergenciaModalDataEmergenciaComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  background: #d8d8d8;\n  color: white !important;\n  border-radius: 100px;\n  height: 30px;\n  width: 30px;\n  margin: 0px 5px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  color: black !important;\n}\n\n.style-icon {\n  font-size: 20px;\n  color: #ff7500;\n  margin: 0px 5px;\n}\n\n.style-title {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 0px 5px;\n  color: black !important;\n}\n\n.border-input {\n  border: 1px solid #d8d8d8;\n  border-radius: 5px;\n  margin: 0px 5px;\n  padding: auto;\n}\n\n.border-input p {\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0px 5px;\n  color: grey !important;\n  margin: 4px 5px;\n}\n\nion-select {\n  background: #d8d8d8;\n  border-radius: 5px;\n}\n\nion-select div div.select-icon-inner {\n  left: 0px !important;\n  margin-top: 0 !important;\n}\n\n.select-icon-inner {\n  left: 0px !important;\n  margin-top: 0 !important;\n}\n\nion-toggle {\n  height: 25px;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1kYXRhLWVtZXJnZW5jaWEvbW9kYWwtZGF0YS1lbWVyZ2VuY2lhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkk7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0FBSU47O0FBQUE7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFsLWRhdGEtZW1lcmdlbmNpYS9tb2RhbC1kYXRhLWVtZXJnZW5jaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uc3R5bGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZjc1MDA7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cbi5zdHlsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgcGFkZGluZzogYXV0bztcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA0cHggNXB4O1xuICB9XG59XG5pb24tc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXYge1xuICAgIGRpdi5zZWxlY3QtaWNvbi1pbm5lciB7XG4gICAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbi5zZWxlY3QtaWNvbi1pbm5lciB7XG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b2dnbGUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/modal-data-emergencia/modal-data-emergencia.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/modal-data-emergencia/modal-data-emergencia.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ModalDataEmergenciaComponent */

    /***/
    function srcAppComponentsModalDataEmergenciaModalDataEmergenciaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDataEmergenciaComponent", function () {
        return ModalDataEmergenciaComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_services_qr_emergencia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/qr-emergencia.service */
      "./src/app/services/qr-emergencia.service.ts");
      /* harmony import */


      var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utils.service */
      "./src/app/services/utils.service.ts");

      var ModalDataEmergenciaComponent = /*#__PURE__*/function () {
        function ModalDataEmergenciaComponent(modalController, navParams, utils, alertController, qrEmergenciaService) {
          _classCallCheck(this, ModalDataEmergenciaComponent);

          this.modalController = modalController;
          this.navParams = navParams;
          this.utils = utils;
          this.alertController = alertController;
          this.qrEmergenciaService = qrEmergenciaService;
        }

        return _createClass(ModalDataEmergenciaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataQr = this.navParams.get('dataQr');
            this.suscribirAlertaIngreso();
            this.fechaYHora = new Date().toISOString();
            this.getCurrentLocation();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.showAlertSubscriptionIngreso) {
              this.showAlertSubscriptionIngreso.unsubscribe();
            }

            if (this.showAlertSubscriptionEgreso) {
              this.showAlertSubscriptionEgreso.unsubscribe();
            }

            if (this.showAlertSendDataSucces) {
              this.showAlertSendDataSucces.unsubscribe();
            }
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalController.dismiss();
          }
        }, {
          key: "suscribirAlertaIngreso",
          value: function suscribirAlertaIngreso() {
            var _this7 = this;

            this.showAlertSubscriptionIngreso = this.qrEmergenciaService.showAlert.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              return _this7.mostrarAlertaConfirmacion('¿Desea confirmar la salida?', 'Alerta', function () {
                return _this7.qrEmergenciaService.ingresoNuevaSede(_this7.dataQr);
              });
            })).subscribe();
            this.showAlertSubscriptionEgreso = this.qrEmergenciaService.showAlertEgreso.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              return _this7.mostrarAlertaConfirmacion('¿Desea confirmar la salida?', 'Alerta', function () {
                return _this7.qrEmergenciaService.egresoNuevaSede(_this7.dataQr);
              });
            })).subscribe();
            this.showAlertSendDataSucces = this.qrEmergenciaService.showAlertSendDataSucces.subscribe(function (envioIngreso) {
              _this7.mostrarError(envioIngreso ? 'Se ha generado la notificación con éxito' : 'No se ha generado la notificación con éxito', envioIngreso ? 'Confirmación' : 'Alerta');
            });
          }
        }, {
          key: "onToggleChange",
          value: function onToggleChange(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;

                    if (!event.detail.checked) {
                      _context3.next = 6;
                      break;
                    }

                    _context3.next = 4;
                    return this.getCurrentLocation();

                  case 4:
                    _context3.next = 8;
                    break;

                  case 6:
                    // TODO :  limpiar latitud y longitud
                    this.dataQr.latitud = '';
                    this.dataQr.longitud = '';

                  case 8:
                    _context3.next = 13;
                    break;

                  case 10:
                    _context3.prev = 10;
                    _context3.t0 = _context3["catch"](0);
                    console.log(_context3.t0);

                  case 13:
                    _context3.prev = 13;
                    this.utils.dismissLoading();
                    return _context3.finish(13);

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 10, 13, 16]]);
            }));
          }
        }, {
          key: "getCurrentLocation",
          value: function getCurrentLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this8 = this;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.utils.presentLoading();

                  case 3:
                    navigator.geolocation.getCurrentPosition(function (position) {
                      console.log("Latitude: ".concat(position.coords.latitude, ", Longitude: ").concat(position.coords.longitude));
                      _this8.dataQr.latitud = position.coords.latitude.toString();
                      _this8.dataQr.longitud = position.coords.longitude.toString();
                      _this8.toggle.checked = true;
                    }, function (error) {
                      console.log('Error getting location', JSON.stringify(error));
                      _this8.toggle.checked = false;

                      _this8.mostrarError('No pudimos capturar tú ubicación vuelve a intentarlo');
                    }, {
                      timeout: 2000
                    });
                    _context4.next = 9;
                    break;

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](0);
                    console.log(_context4.t0);

                  case 9:
                    _context4.prev = 9;
                    this.utils.dismissLoading();
                    return _context4.finish(9);

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this, [[0, 6, 9, 12]]);
            }));
          }
        }, {
          key: "confirmarAcceso",
          value: function confirmarAcceso() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;

                    if (this.accionEmergencia) {
                      _context5.next = 4;
                      break;
                    }

                    this.mostrarError('El campo acción es requerido');
                    return _context5.abrupt("return");

                  case 4:
                    if (!(this.dataQr.latitud === '' || this.dataQr.longitud === '' || this.dataQr.latitud === undefined || this.dataQr.longitud === undefined)) {
                      _context5.next = 7;
                      break;
                    }

                    this.mostrarError('Debes darnos tú ubicación para poder continuar');
                    return _context5.abrupt("return");

                  case 7:
                    _context5.next = 9;
                    return this.utils.presentLoading();

                  case 9:
                    this.dataQr.FechaYHoraIngreso = this.fechaYHora;
                    this.dataQr.accion = this.accionEmergencia;
                    this.qrEmergenciaService.setQrEmergencia(this.dataQr);
                    _context5.next = 17;
                    break;

                  case 14:
                    _context5.prev = 14;
                    _context5.t0 = _context5["catch"](0);
                    console.log(_context5.t0);

                  case 17:
                    _context5.prev = 17;
                    this.utils.dismissLoading();
                    return _context5.finish(17);

                  case 20:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[0, 14, 17, 20]]);
            }));
          }
        }, {
          key: "mostrarError",
          value: function mostrarError(message, header) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: header || 'Alerta',
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context6.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
          /* alerta para confirmar accion */

        }, {
          key: "mostrarAlertaConfirmacion",
          value: function mostrarAlertaConfirmacion(message, header, fun) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this9 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertController.create({
                      header: header || 'Alerta',
                      message: message,
                      buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Aceptar',
                        handler: function handler() {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                              while (1) switch (_context7.prev = _context7.next) {
                                case 0:
                                  _context7.next = 2;
                                  return fun();

                                case 2:
                                case "end":
                                  return _context7.stop();
                              }
                            }, _callee7);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
          /* formato fecha */

        }, {
          key: "getFechaYHora",
          value: function getFechaYHora() {
            var fechaYHora = new Date(this.fechaYHora);
            var dia = String(fechaYHora.getDate()).padStart(2, '0');
            var mes = String(fechaYHora.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript comienzan desde 0

            var ano = fechaYHora.getFullYear();
            var horas = fechaYHora.getHours() > 12 ? fechaYHora.getHours() - 12 : fechaYHora.getHours();
            var minutos = String(fechaYHora.getMinutes()).padStart(2, '0');
            var segundos = String(fechaYHora.getSeconds()).padStart(2, '0');
            var ampm = fechaYHora.getHours() >= 12 ? 'PM' : 'AM';
            var fechaFormateada = "".concat(dia, "/").concat(mes, "/").concat(ano, " ").concat(horas, ":").concat(minutos, " : ").concat(segundos, " ").concat(ampm);
            return fechaFormateada;
          }
        }]);
      }();

      ModalDataEmergenciaComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: src_app_services_qr_emergencia_service__WEBPACK_IMPORTED_MODULE_4__["QrEmergenciaService"]
        }];
      };

      ModalDataEmergenciaComponent.propDecorators = {
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToggle"]]
        }]
      };
      ModalDataEmergenciaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-data-emergencia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-data-emergencia.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-data-emergencia/modal-data-emergencia.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-data-emergencia.component.scss */
        "./src/app/components/modal-data-emergencia/modal-data-emergencia.component.scss"))["default"]]
      })], ModalDataEmergenciaComponent);
      /***/
    },

    /***/
    "./src/app/components/modal-trabajadores/modal-trabajadores.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/modal-trabajadores/modal-trabajadores.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsModalTrabajadoresModalTrabajadoresComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ion-toolbar de color primario */\nion-toolbar {\n  --background: var(--ion-color-primary);\n  color: white;\n  border-radius: 0px 0px 4px 4px;\n}\nbutton.guardar-continuar {\n  color: #fff;\n  background: #4b9a49 !important;\n  margin-top: 10px;\n  border-radius: 24px;\n  width: 80%;\n  height: 24px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\nion-title {\n  padding-inline: 0 !important;\n  font-size: 13px;\n  padding-left: 12px;\n  margin-left: 4px;\n}\nion-buttons ion-button {\n  --color: #fff;\n}\n.card-content-ios {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC10cmFiYWphZG9yZXMvbW9kYWwtdHJhYmFqYWRvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFBO0FBQ0E7RUFDRSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNBO0VBQ0UsYUFBQTtBQUVGO0FBQUE7RUFDRSwwQkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC10cmFiYWphZG9yZXMvbW9kYWwtdHJhYmFqYWRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW9uLXRvb2xiYXIgZGUgY29sb3IgcHJpbWFyaW8gKi9cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuXG5idXR0b24uZ3VhcmRhci1jb250aW51YXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzRiOWE0OSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmctaW5saW5lOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG4uY2FyZC1jb250ZW50LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/modal-trabajadores/modal-trabajadores.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ModalTrabajadoresComponent */

    /***/
    function srcAppComponentsModalTrabajadoresModalTrabajadoresComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalTrabajadoresComponent", function () {
        return ModalTrabajadoresComponent;
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


      var src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/SST/save-data.service */
      "./src/app/services/SST/save-data.service.ts");
      /* harmony import */


      var src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/SST/tabla-trabajadores.service */
      "./src/app/services/SST/tabla-trabajadores.service.ts");

      var ModalTrabajadoresComponent = /*#__PURE__*/function () {
        function ModalTrabajadoresComponent(modalController, tablaTrabajadoresService, saveDataService, router, allertController) {
          _classCallCheck(this, ModalTrabajadoresComponent);

          this.modalController = modalController;
          this.tablaTrabajadoresService = tablaTrabajadoresService;
          this.saveDataService = saveDataService;
          this.router = router;
          this.allertController = allertController;
          this.pendietesEliminar = [];
        }

        return _createClass(ModalTrabajadoresComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.trabajadores = this.tablaTrabajadoresService.getTablaTrabajadores();

            if (this.trabajadores.length == 0) {
              this.router.navigate(['/home/permisos']);
            }
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.pendietesEliminar = [];
            this.modalController.dismiss();
          }
        }, {
          key: "eliminarTrabajador",
          value: function eliminarTrabajador(trabajador) {
            var _this10 = this;

            trabajador.blnActivo = false;
            this.allertController.create({
              header: 'Eliminar trabajador',
              message: '¿Está seguro que desea eliminar este trabajador?',
              buttons: [{
                text: 'Cancelar',
                role: 'cancel',
                handler: function handler() {
                  console.log('Cancelado');
                }
              }, {
                text: 'Aceptar',
                handler: function handler() {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                    var data;
                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                        case 0:
                          data = this.saveDataService.getData();
                          console.log('Eliminado');
                          this.tablaTrabajadoresService.deleteTrabajador(trabajador);
                          this.trabajadores = this.tablaTrabajadoresService.getTablaTrabajadores();
                          data['listaTrabajadoresMigrados'] = this.tablaTrabajadoresService.getTablaTrabajadores();
                          _context9.next = 7;
                          return this.saveDataService.updateTrabajador(trabajador);

                        case 7:
                          _context9.next = 9;
                          return this.saveDataService.saveData();

                        case 9:
                          if (this.trabajadores.length === 0) {
                            this.confirmDel();
                          }

                        case 10:
                        case "end":
                          return _context9.stop();
                      }
                    }, _callee9, this);
                  }));
                }
              }]
            }).then(function (alert) {
              alert.present();
            });
          }
        }, {
          key: "confirmDel",
          value: function confirmDel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var data;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    data = this.saveDataService.getData();

                    if (!(this.trabajadores.length == 0)) {
                      _context10.next = 10;
                      break;
                    }

                    _context10.next = 5;
                    return this.saveDataService.deleData(data);

                  case 5:
                    _context10.next = 7;
                    return this.saveDataService.porLiberar(this.pendietesEliminar);

                  case 7:
                    this.modalController.dismiss();
                    /* navegar a home y no volver a esta pagina */
                    // this.router.navigateByUrl('/home', { replaceUrl: true });

                    this.router.navigate(['/home/permisos']);
                    return _context10.abrupt("return");

                  case 10:
                    console.log(data);
                    data['listaTrabajadoresMigrados'] = this.tablaTrabajadoresService.getTablaTrabajadores();
                    this.saveDataService.setData(data);
                    _context10.next = 15;
                    return this.saveDataService.saveData();

                  case 15:
                    _context10.next = 17;
                    return this.saveDataService.porLiberar(this.pendietesEliminar);

                  case 17:
                    this.modalController.dismiss();
                    _context10.next = 24;
                    break;

                  case 20:
                    _context10.prev = 20;
                    _context10.t0 = _context10["catch"](0);
                    console.error('Error al guardar los trabajadores disponibles:', _context10.t0);
                    this.modalController.dismiss();

                  case 24:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this, [[0, 20]]);
            }));
          }
        }]);
      }();

      ModalTrabajadoresComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_services_SST_tabla_trabajadores_service__WEBPACK_IMPORTED_MODULE_5__["TablaTrabajadoresService"]
        }, {
          type: src_app_services_SST_save_data_service__WEBPACK_IMPORTED_MODULE_4__["SaveDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      ModalTrabajadoresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-trabajadores',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-trabajadores.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-trabajadores/modal-trabajadores.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-trabajadores.component.scss */
        "./src/app/components/modal-trabajadores/modal-trabajadores.component.scss"))["default"]]
      })], ModalTrabajadoresComponent);
      /***/
    },

    /***/
    "./src/app/components/nav-bar/nav-bar.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/nav-bar/nav-bar.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\nion-row ion-col img {\n  width: 2.5rem;\n  height: 2.5rem;\n}\nion-row ion-col ion-icon {\n  color: #ff7500;\n  font-size: 3.5rem;\n}\n.img-center {\n  text-align: center;\n}\n.img-right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FEVEY7QUNZQSx1Q0FBQTtBQTZEQTs7O0VBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRDlFRjtBQ2lGQTs7O0VBQUE7QUFLQTtFQUNFLCtCQUFBO0VBQ0EsbUNBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLDhCQUFBO0FEbkZGO0FDc0ZBO0VBQ0UsaURBQUE7RUFDQSxtREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7QURuRkY7QUNzRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLHNDQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLGlDQUFBO0VBRUEsaUNBQUE7RUFFQSw4QkFBQTtBRDNGRjtBQXZNSTtFQUNFLGFDZ0ZhO0VEL0ViLGNDK0VhO0FEMkhuQjtBQXZNSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQXlNTjtBQXBNQTtFQUNFLGtCQUFBO0FBdU1GO0FBcE1BO0VBQ0UsWUFBQTtBQXVNRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG5pb24tcm93IGlvbi1jb2wgaW1nIHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG5pb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmNzUwMDtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5pbWctY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/nav-bar/nav-bar.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function srcAppComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
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

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent(router) {
          _classCallCheck(this, NavBarComponent);

          this.router = router;
        }

        return _createClass(NavBarComponent, [{
          key: "pushDatosGeneralesRelacionLaboral",
          value: function pushDatosGeneralesRelacionLaboral() {
            this.router.navigate(['/auth/account']);
          }
        }, {
          key: "pushHome",
          value: function pushHome() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "pushConfiguracion",
          value: function pushConfiguracion() {
            this.router.navigate(['/settings']);
          }
        }, {
          key: "pushBackPage",
          value: function pushBackPage() {
            this.router.navigate([this.pageToGoBack]);
          }
        }, {
          key: "isSetPageToGoBack",
          value: function isSetPageToGoBack() {
            return this.pageToGoBack !== undefined;
          }
        }]);
      }();

      NavBarComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      NavBarComponent.propDecorators = {
        pageToGoBack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./nav-bar.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./nav-bar.component.scss */
        "./src/app/components/nav-bar/nav-bar.component.scss"))["default"]]
      })], NavBarComponent);
      /***/
    },

    /***/
    "./src/app/components/qr-emergencia/qr-emergencia.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/qr-emergencia/qr-emergencia.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsQrEmergenciaQrEmergenciaComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scanner-buttons {\n  margin: 0px auto;\n  position: absolute;\n  bottom: 2rem;\n  width: 90vw;\n  height: 3rem;\n  z-index: 11;\n  text-align: center;\n  opacity: 1;\n}\n\n.scan-box {\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  width: 15rem;\n  height: 15rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nbody.scanner-active {\n  --background: transparent !important;\n  --ion-background-color: transparent !important;\n  background: transparent !important;\n}\n\n.modal-wrapper {\n  --height: 50% !important;\n  --width: 50% !important;\n}\n\nion-modal {\n  --height: 50% !important;\n  --width: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xci1lbWVyZ2VuY2lhL3FyLWVtZXJnZW5jaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUNFO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFFO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xci1lbWVyZ2VuY2lhL3FyLWVtZXJnZW5jaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nhbm5lci1idXR0b25zIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDJyZW07XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHotaW5kZXg6IDExO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAuc2Nhbi1ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTAwdm1heCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgYm9keS5zY2FubmVyLWFjdGl2ZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtd3JhcHBlcntcbiAgICAtLWhlaWdodDogNTAlICFpbXBvcnRhbnQ7XG4gICAgLS13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLW1vZGFse1xuICAgIC0taGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgICAtLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/qr-emergencia/qr-emergencia.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/qr-emergencia/qr-emergencia.component.ts ***!
      \*********************************************************************/

    /*! exports provided: QrEmergenciaComponent */

    /***/
    function srcAppComponentsQrEmergenciaQrEmergenciaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrEmergenciaComponent", function () {
        return QrEmergenciaComponent;
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


      var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor-community/barcode-scanner */
      "./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js");

      var QrEmergenciaComponent = /*#__PURE__*/function () {
        function QrEmergenciaComponent(modalCtrl, alertCtl) {
          _classCallCheck(this, QrEmergenciaComponent);

          this.modalCtrl = modalCtrl;
          this.alertCtl = alertCtl;
          this.result = null;
          this.scanActive = false;
        }

        return _createClass(QrEmergenciaComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// BarcodeScanner.prepare();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stopBarcodeRemove('');
          }
        }, {
          key: "startBarcode",
          value: function startBarcode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var allowed, body, result, app;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.checkPermission();

                  case 2:
                    allowed = _context11.sent;

                    if (allowed) {
                      _context11.next = 5;
                      break;
                    }

                    return _context11.abrupt("return");

                  case 5:
                    body = document.querySelector('body');
                    body.style.setProperty('--background', 'transparent', 'important');
                    body.style.setProperty('--ion-background-color', 'transparent', 'important');
                    this.scanActive = true;
                    _context11.next = 11;
                    return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].startScan();

                  case 11:
                    result = _context11.sent;
                    app = document.querySelector("app-ingreso-sede");
                    app.style.opacity = "0";

                    if (result.hasContent) {
                      console.log('result', JSON.stringify(result));
                      this.result = result.content;
                      this.stopBarcodeRemove(result.content);
                    }

                  case 15:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "checkPermission",
          value: function checkPermission() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var _this11 = this;

              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    return _context13.abrupt("return", new Promise(function (resolve, reject) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                        var status, alert;
                        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                          while (1) switch (_context12.prev = _context12.next) {
                            case 0:
                              _context12.next = 2;
                              return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].checkPermission({
                                force: true
                              });

                            case 2:
                              status = _context12.sent;

                              if (!status.granted) {
                                _context12.next = 6;
                                break;
                              }

                              resolve(true);
                              return _context12.abrupt("return");

                            case 6:
                              if (!status.denied) {
                                _context12.next = 13;
                                break;
                              }

                              _context12.next = 9;
                              return this.alertCtl.create({
                                header: 'Sin autorización',
                                message: 'Por favor permita el acceso a la cámara en su configuración',
                                buttons: [{
                                  text: 'No',
                                  role: 'cancel'
                                }, {
                                  text: 'Abrir configuración',
                                  handler: function handler() {
                                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].openAppSettings();

                                    resolve(false);
                                  }
                                }]
                              });

                            case 9:
                              alert = _context12.sent;
                              _context12.next = 12;
                              return alert.present();

                            case 12:
                              return _context12.abrupt("return");

                            case 13:
                              resolve(false);
                              return _context12.abrupt("return");

                            case 15:
                            case "end":
                              return _context12.stop();
                          }
                        }, _callee12, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }));
          }
        }, {
          key: "stopBarcodeRemove",
          value: function stopBarcodeRemove(msg) {
            try {
              _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].stopScan();

              _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].showBackground();

              this.scanActive = false;
              var body = document.querySelector('body');
              body.style.removeProperty('--background');
              body.style.removeProperty('--ion-background-color');
              body.style.backgroundColor = '';
              body.style.opacity = '';
              console.log("deospues");
              var app = document.querySelector("app-ingreso-sede");
              app.style.opacity = "1"; // app2.style.opacity = '1';

              this.modalCtrl.dismiss({
                response: msg ? msg : null
              });
            } catch (e) {
              console.error('Error al cerrar el escaner', e);
            }
          }
        }, {
          key: "cerrarModal",
          value: function cerrarModal() {
            return this.modalCtrl.dismiss();
          }
        }]);
      }();

      QrEmergenciaComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      QrEmergenciaComponent.propDecorators = {
        app: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      QrEmergenciaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qr-emergencia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./qr-emergencia.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr-emergencia/qr-emergencia.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./qr-emergencia.component.scss */
        "./src/app/components/qr-emergencia/qr-emergencia.component.scss"))["default"]]
      })], QrEmergenciaComponent);
      /***/
    },

    /***/
    "./src/app/components/qr/qr.component.scss":
    /*!*************************************************!*\
      !*** ./src/app/components/qr/qr.component.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsQrQrComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scanner-buttons {\n  margin: 0px auto;\n  position: absolute;\n  bottom: 2rem;\n  width: 90vw;\n  height: 3rem;\n  z-index: 11;\n  text-align: center;\n  opacity: 1;\n}\n\n.scan-box {\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  width: 15rem;\n  height: 15rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nbody.scanner-active {\n  --background: transparent !important;\n  --ion-background-color: transparent !important;\n  background: transparent !important;\n}\n\n.modal-wrapper {\n  --height: 50% !important;\n  --width: 50% !important;\n}\n\nion-modal {\n  --height: 50% !important;\n  --width: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xci9xci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3FyL3FyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYW5uZXItYnV0dG9ucyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAycmVtO1xuICB3aWR0aDogOTB2dztcbiAgaGVpZ2h0OiAzcmVtO1xuICB6LWluZGV4OiAxMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2Nhbi1ib3gge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAxMDB2bWF4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogMTVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmJvZHkuc2Nhbm5lci1hY3RpdmUge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtd3JhcHBlciB7XG4gIC0taGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgLS13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG59XG5pb24tbW9kYWwge1xuICAtLWhlaWdodDogNTAlICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/qr/qr.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/components/qr/qr.component.ts ***!
      \***********************************************/

    /*! exports provided: QRComponent */

    /***/
    function srcAppComponentsQrQrComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QRComponent", function () {
        return QRComponent;
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


      var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor-community/barcode-scanner */
      "./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js");

      var QRComponent = /*#__PURE__*/function () {
        function QRComponent(modalCtrl, alertCtl) {
          _classCallCheck(this, QRComponent);

          this.modalCtrl = modalCtrl;
          this.alertCtl = alertCtl;
          this.result = null;
          this.scanActive = false;
        }

        return _createClass(QRComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stopBarcodeRemove('');
          }
        }, {
          key: "startBarcode",
          value: function startBarcode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var allowed, body, app, result;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.checkPermission();

                  case 2:
                    allowed = _context14.sent;

                    if (allowed) {
                      _context14.next = 5;
                      break;
                    }

                    return _context14.abrupt("return");

                  case 5:
                    body = document.querySelector('body');
                    body.style.setProperty('--background', 'transparent', 'important');
                    body.style.setProperty('--ion-background-color', 'transparent', 'important');
                    app = document.querySelector('app-crear-permiso');
                    app.style.opacity = '0.0'; // make background of WebView transparent
                    // note: if you are using ionic this might not be enough, check below

                    document;

                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].hideBackground();

                    this.scanActive = true;
                    _context14.next = 15;
                    return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].startScan();

                  case 15:
                    result = _context14.sent;

                    // start scanning and wait for a result
                    // if the result has content
                    if (result.hasContent) {
                      this.result = result.content;
                      this.stopBarcodeRemove(result.content);
                    }

                  case 17:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "checkPermission",
          value: function checkPermission() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var _this12 = this;

              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    return _context16.abrupt("return", new Promise(function (resolve, reject) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                        var status, alert;
                        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                          while (1) switch (_context15.prev = _context15.next) {
                            case 0:
                              _context15.next = 2;
                              return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].checkPermission({
                                force: true
                              });

                            case 2:
                              status = _context15.sent;

                              if (!status.granted) {
                                _context15.next = 6;
                                break;
                              }

                              resolve(true);
                              return _context15.abrupt("return");

                            case 6:
                              if (!status.denied) {
                                _context15.next = 13;
                                break;
                              }

                              _context15.next = 9;
                              return this.alertCtl.create({
                                header: 'Sin autorización',
                                message: 'Por favor permita el acceso a la cámara en su configuración',
                                buttons: [{
                                  text: 'No',
                                  role: 'cancel'
                                }, {
                                  text: 'Abrir configuración',
                                  handler: function handler() {
                                    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].openAppSettings();

                                    resolve(false);
                                  }
                                }]
                              });

                            case 9:
                              alert = _context15.sent;
                              _context15.next = 12;
                              return alert.present();

                            case 12:
                              return _context15.abrupt("return");

                            case 13:
                              resolve(false);
                              return _context15.abrupt("return");

                            case 15:
                            case "end":
                              return _context15.stop();
                          }
                        }, _callee15, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            }));
          }
        }, {
          key: "stopBarcodeRemove",
          value: function stopBarcodeRemove(msg) {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].stopScan();

            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"].showBackground();

            this.scanActive = false;
            var body = document.querySelector('body');
            body.style.removeProperty('--background');
            body.style.removeProperty('--ion-background-color');
            body.style.backgroundColor = '';
            body.style.opacity = '';
            var app = document.querySelector('app-crear-permiso');
            app.style.opacity = '1';
            this.modalCtrl.dismiss({
              response: msg ? msg : null
            });
          }
        }, {
          key: "cerrarModal",
          value: function cerrarModal() {
            return this.modalCtrl.dismiss();
          }
        }]);
      }();

      QRComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      QRComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./qr.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr/qr.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./qr.component.scss */
        "./src/app/components/qr/qr.component.scss"))["default"]]
      })], QRComponent);
      /***/
    },

    /***/
    "./src/app/components/signature-pad/signature-pad.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/signature-pad/signature-pad.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSignaturePadSignaturePadComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "canvas {\n  border: 3px dashed gray;\n  width: 100%;\n  background-color: whitesmoke;\n}\n\nion-content {\n  height: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduYXR1cmUtcGFkL3NpZ25hdHVyZS1wYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduYXR1cmUtcGFkL3NpZ25hdHVyZS1wYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBib3JkZXI6IDNweCBkYXNoZWQgZ3JheTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5pb24tY29udGVudCB7XG4gIGhlaWdodDogMTYwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/signature-pad/signature-pad.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/signature-pad/signature-pad.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SignaturePadComponent */

    /***/
    function srcAppComponentsSignaturePadSignaturePadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignaturePadComponent", function () {
        return SignaturePadComponent;
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


      var signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! signature_pad */
      "./node_modules/signature_pad/dist/signature_pad.js");

      var SignaturePadComponent = /*#__PURE__*/function () {
        function SignaturePadComponent() {
          _classCallCheck(this, SignaturePadComponent);

          this.guardado = false;
          this.onSignatureChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onSignatureChange2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.onSignatureChange3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        return _createClass(SignaturePadComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_2__["default"](this.signaturePadElement.nativeElement);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var canvas = document.querySelectorAll('canvas');
            canvas.forEach(function (element) {
              element.width = window.innerWidth;
              element.height = 150;
            });

            if (this.signaturePad) {
              this.signaturePad.clear(); // Clear the pad on init
            }
          }
        }, {
          key: "isCanvasBlank",
          value: function isCanvasBlank() {
            if (this.signaturePad) {
              return this.signaturePad.isEmpty() ? true : false;
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            if (this.guardado) {
              this.signaturePad.clear();
              this.guardado = false;
              this.signaturePad.on();
            }
          }
        }, {
          key: "undo",
          value: function undo() {
            var data = this.signaturePad.toData();

            if (data) {
              data.pop(); // remove the last dot or line

              this.signaturePad.fromData(data);
            }
          }
        }, {
          key: "save",
          value: function save() {
            if (!this.guardado) {
              var data = this.signaturePad.toDataURL();
              var cadenaLimpia = data.split(',')[1];
              this.onSignatureChange.emit(cadenaLimpia);
              this.guardado = true;
              this.signaturePad.off();
            }
          }
        }]);
      }();

      SignaturePadComponent.ctorParameters = function () {
        return [];
      };

      SignaturePadComponent.propDecorators = {
        signaturePadElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['canvas', {
            "static": true
          }]
        }],
        onSignatureChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onSignatureChange2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onSignatureChange3: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      SignaturePadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signature-pad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signature-pad.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signature-pad/signature-pad.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signature-pad.component.scss */
        "./src/app/components/signature-pad/signature-pad.component.scss"))["default"]]
      })], SignaturePadComponent);
      /***/
    },

    /***/
    "./src/app/components/title-bar/title-bar.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/title-bar/title-bar.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTitleBarTitleBarComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ff7500;\n  --ion-color-primary-rgb: 255, 117, 0;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e06700;\n  --ion-color-primary-tint: #ff831a;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/** Variables de la versión anterior **/\n/*\n * Dark Colors\n * -------------------------------------------\n */\nbody.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66, 140, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80, 200, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106, 100, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47, 223, 117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0, 0, 0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255, 213, 52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255, 73, 97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244, 245, 248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0, 0, 0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0, 0, 0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34, 36, 40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255, 255, 255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0, 0, 0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n}\n.ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n}\n/*\n * Material Design Dark Theme\n * -------------------------------------------\n */\n.md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18, 18, 18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255, 255, 255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n}\ndiv.div-accent-color ion-item {\n  --background: transparent;\n  padding: 0 !important;\n}\ndiv.div-accent-color ion-item div div ion-label {\n  margin-right: 0 !important;\n}\ndiv.div-accent-color ion-item div div ion-label div {\n  padding-right: 0 !important;\n}\ndiv.div-accent-color img {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-left: auto;\n  margin-right: 0.5rem;\n}\ndiv.div-accent-color span.title-wrapper {\n  display: table;\n  height: 2.5rem;\n  min-width: 70%;\n  max-width: calc(100vw - var(--padding-start) - var(--inner-padding-end) - 2.5rem - 0.5rem);\n}\ndiv.div-accent-color span.title-wrapper h1 {\n  color: white;\n  margin-left: 0.5rem !important;\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  margin-right: auto !important;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: break-spaces;\n  display: table-cell;\n  vertical-align: middle;\n}\n.div-accent-color {\n  background-color: #ff7500;\n}\n.div-img-title {\n  display: flex;\n  margin: auto;\n  background-color: #ff7500;\n  padding: 8px 0 !important;\n}\n.div-img-title ion-icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-left: auto;\n  margin-right: 0.5rem;\n  color: #ffffff;\n}\n.input-wrapper {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXRsZS1iYXIvdGl0bGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQiwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRFRGO0FDWUEsdUNBQUE7QUE2REE7OztFQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUQ5RUY7QUNpRkE7OztFQUFBO0FBS0E7RUFDRSwrQkFBQTtFQUNBLG1DQUFBO0VBRUEseUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFFQSw4QkFBQTtBRG5GRjtBQ3NGQTtFQUNFLGlEQUFBO0VBQ0EsbURBQUE7RUFDQSxxREFBQTtFQUNBLGdEQUFBO0FEbkZGO0FDc0ZBOzs7RUFBQTtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxzQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFFQSxpQ0FBQTtFQUVBLGlDQUFBO0VBRUEsOEJBQUE7QUQzRkY7QUF4TUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBMk1KO0FBbk1RO0VBQ0UsMEJBQUE7QUFxTVY7QUFuTVU7RUFDRSwyQkFBQTtBQXFNWjtBQTlMRTtFQUNFLGFDNERlO0VEM0RmLGNDMkRlO0VEMURmLGlCQUFBO0VBQ0Esb0JBQUE7QUFnTUo7QUE3TEU7RUFDRSxjQUFBO0VBQ0EsY0NvRGU7RURuRGYsY0FBQTtFQUNBLDBGQUFBO0FBK0xKO0FBN0xJO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBK0xOO0FBMUxBO0VBQ0UseUJBQUE7QUE2TEY7QUExTEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUE2TEY7QUEzTEU7RUFDRSxhQ3FCZTtFRHBCZixjQ29CZTtFRG5CZixpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQTZMSjtBQXpMQTtFQUNFLDJCQUFBO0FBNExGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aXRsZS1iYXIvdGl0bGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjZmY3NTAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAxMTcsIDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTA2NzAwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICNmZjgzMWE7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuLypcbiAqIERhcmsgQ29sb3JzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwgMTQwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwgMTAwLCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsIDIyMywgMTE3O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSwgNzMsIDk3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG59XG5cbi8qXG4gKiBpT1MgRGFyayBUaGVtZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4uaW9zIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLCAwLCAwO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5tZCBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsIDE4LCAxODtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xufVxuXG5kaXYuZGl2LWFjY2VudC1jb2xvciBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbmRpdi5kaXYtYWNjZW50LWNvbG9yIGlvbi1pdGVtIGRpdiBkaXYgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5kaXYuZGl2LWFjY2VudC1jb2xvciBpb24taXRlbSBkaXYgZGl2IGlvbi1sYWJlbCBkaXYge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5kaXYuZGl2LWFjY2VudC1jb2xvciBpbWcge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuZGl2LmRpdi1hY2NlbnQtY29sb3Igc3Bhbi50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGhlaWdodDogMi41cmVtO1xuICBtaW4td2lkdGg6IDcwJTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tcGFkZGluZy1zdGFydCkgLSB2YXIoLS1pbm5lci1wYWRkaW5nLWVuZCkgLSAyLjVyZW0gLSAwLjVyZW0pO1xufVxuZGl2LmRpdi1hY2NlbnQtY29sb3Igc3Bhbi50aXRsZS13cmFwcGVyIGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRpdi1hY2NlbnQtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NTAwO1xufVxuXG4uZGl2LWltZy10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzUwMDtcbiAgcGFkZGluZzogOHB4IDAgIWltcG9ydGFudDtcbn1cbi5kaXYtaW1nLXRpdGxlIGlvbi1pY29uIHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufSIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZjc1MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDExNywgMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNlMDY3MDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogI2ZmODMxYTtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG4vKiogVmFyaWFibGVzIGRlIGxhIHZlcnNpw7NuIGFudGVyaW9yICoqL1xuXG4kZm9udC1wYXRoOiAnLi4vYXNzZXRzL2ZvbnRzJztcbiRhcHAtZGlyZWN0aW9uOiBsdHI7XG4kZm9udC1zaXplOiAxNnB4O1xuJGZvbnQtd2VpZ2h0OiA0MDA7XG4kY29udGVudC1pbWctc2l6ZTogMi41cmVtO1xuXG4kY29sb3JzOiAoXG4gIGJhc2UtMTogI2U2ZWFlZSxcbiAgYmFzZS0yOiAjY2FkMWRhLFxuICBiYXNlLTM6ICNhZmI4YzQsXG4gIGJhc2UtNDogIzk2YTBhYyxcbiAgYmFzZS01OiAjN2U4YTk3LFxuICBiYXNlLTY6ICM2ODc2ODQsXG4gIGJhc2UtNzogIzUyNjI3MCxcbiAgYmFzZS04OiAjMjg0ZTVhLFxuICBwcmltYXJ5OiAjZmY3NTAwLFxuICBidG4tcHJpbWFyeTogIzU5YmFhOCxcbik7XG5cbiR0ZXh0LWlucHV0LWlvcy1zaG93LWZvY3VlLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtaW9zLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XG4kcGlja2VyLWlvcy1vcHRpb24tc2VsZWN0ZWQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc2VsZWN0LWlvcy1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLWlvcy1jb2xvci1vbjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRwaWNrZXItaW9zLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGJ1dHRvbi1pb3MtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLWlvcy1zcGlubmVyLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHRvZ2dsZS1pb3MtYWN0aXZlLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGFsZXJ0LWlvcy1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IHdoaXRlO1xuJGFjdGlvbi1zaGVldC1pb3MtYnV0dG9uLXRleHQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kbG9hZGluZy1pb3Mtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1idWJibGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItaW9zLWNpcmNsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1pb3MtZG90cy1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLWlvcy1pb3MtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kcG9wb3Zlci1pb3Mtd2lkdGg6IDMxMHB4O1xuXG4kdGV4dC1pbnB1dC1tZC1zaG93LWZvY3VzLWhpZ2hsaWdodDogZmFsc2UgIWRlZmF1bHQ7XG4kbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcbiRwaWNrZXItbWQtb3B0aW9uLXNlbGVjdGVkLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNlbGVjdC1tZC1pY29uLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHJhZGlvLW1kLWNvbG9yLW9uOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBpY2tlci1tZC1idXR0b24tdGV4dC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRidXR0b24tbWQtYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRsb2FkaW5nLW1kLXNwaW5uZXItY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kdG9nZ2xlLW1kLWFjdGl2ZS1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRhbGVydC1tZC1idXR0b24tdGV4dC1jb2xvcjogd2hpdGU7XG4kYWN0aW9uLXNoZWV0LW1kLWJ1dHRvbi10ZXh0LWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJGxvYWRpbmctbWQtc3Bpbm5lci1jb2xvcjogbWFwLWdldCgkY29sb3JzLCBwcmltYXJ5KTtcbiRzcGlubmVyLW1kLWJ1YmJsZXMtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1jaXJjbGVzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtY3Jlc2NlbnQtY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgcHJpbWFyeSk7XG4kc3Bpbm5lci1tZC1kb3RzLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHNwaW5uZXItbWQtaW9zLWNvbG9yOiBtYXAtZ2V0KCRjb2xvcnMsIHByaW1hcnkpO1xuJHBvcG92ZXItbWQtd2lkdGg6IDMxMHB4O1xuXG4vKlxuICogRGFyayBDb2xvcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsIDE0MCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsIDIwMCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LCAxMDAsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LCAyMjMsIDExNztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMTMsIDUyO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LCA3MywgOTc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwgMCwgMDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LCAyNTUsIDI1NTtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG59XG5cbi5pb3MgYm9keS5kYXJrIGlvbi1tb2RhbCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLm1kIGJvZHkuZGFyayB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwgMTgsIDE4O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsIDI1NSwgMjU1O1xuXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/title-bar/title-bar.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/title-bar/title-bar.component.ts ***!
      \*************************************************************/

    /*! exports provided: TitleBarComponent */

    /***/
    function srcAppComponentsTitleBarTitleBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleBarComponent", function () {
        return TitleBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TitleBarComponent = /*#__PURE__*/_createClass(function TitleBarComponent() {
        _classCallCheck(this, TitleBarComponent);
      });

      TitleBarComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imgUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iconName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      TitleBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-title-bar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./title-bar.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/title-bar/title-bar.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./title-bar.component.scss */
        "./src/app/components/title-bar/title-bar.component.scss"))["default"]]
      })], TitleBarComponent);
      /***/
    },

    /***/
    "./src/app/entities/context.ts":
    /*!*************************************!*\
      !*** ./src/app/entities/context.ts ***!
      \*************************************/

    /*! exports provided: Context */

    /***/
    function srcAppEntitiesContextTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Context", function () {
        return Context;
      });
      /* harmony import */


      var _trabajador__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./trabajador */
      "./src/app/entities/trabajador.ts");
      /* harmony import */


      var _empresa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./empresa */
      "./src/app/entities/empresa.ts");

      var Context = /*#__PURE__*/function () {
        function Context(json) {
          _classCallCheck(this, Context);

          this.trabajador = new _trabajador__WEBPACK_IMPORTED_MODULE_0__["Trabajador"](json[0]);
          this.empresa = new _empresa__WEBPACK_IMPORTED_MODULE_1__["Empresa"](json[0]);
        }

        return _createClass(Context, [{
          key: "trabajador",
          get: function get() {
            return this._trabajador;
          },
          set: function set(trabajador) {
            this._trabajador = trabajador;
          }
        }, {
          key: "empresa",
          get: function get() {
            return this._empresa;
          },
          set: function set(empresa) {
            this._empresa = empresa;
          }
        }]);
      }();
      /***/

    },

    /***/
    "./src/app/entities/empresa.ts":
    /*!*************************************!*\
      !*** ./src/app/entities/empresa.ts ***!
      \*************************************/

    /*! exports provided: Empresa */

    /***/
    function srcAppEntitiesEmpresaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Empresa", function () {
        return Empresa;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Empresa = /*#__PURE__*/function (_entity__WEBPACK_IMPO) {
        function Empresa(json) {
          var _this13;

          _classCallCheck(this, Empresa);

          _this13 = _callSuper(this, Empresa, [parseInt(json.documentoEmp, 10)]);
          _this13.razonSocial = json.razonSocial;
          _this13.tipoDocumento = json.tipoDocEmp;
          _this13.idActividadEconomica = json.idActividadEconomica;
          _this13.direccionSedePrincipal = json.dirEmpresa;
          _this13.documentoEmp = json.documentoEmp;
          _this13.idMunicipio = json.idMuniEmpresa;
          _this13.idDepartamento = json.idDeparEmpresa;
          _this13.nombreDepartamento = json.nomDepEmpresa;
          _this13.nombreMunicipio = json.nomMunEmpresa;
          _this13.descripcionActividadEconomica = json.actividadEconomica;
          _this13.correo = json.emailEmpresa;
          _this13.telefono = json.telefonoEmpresa;
          return _this13;
        }

        _inherits(Empresa, _entity__WEBPACK_IMPO);

        return _createClass(Empresa, [{
          key: "nombreLogo",
          get: function get() {
            return this._nombreLogo;
          },
          set: function set(nombreLogo) {
            this._nombreLogo = nombreLogo;
          }
        }, {
          key: "razonSocial",
          get: function get() {
            return this._razonSocial;
          },
          set: function set(razonSocial) {
            this._razonSocial = razonSocial;
          }
        }, {
          key: "tipoDocumento",
          get: function get() {
            return this._tipoDocumento;
          },
          set: function set(tipoDocumento) {
            this._tipoDocumento = tipoDocumento;
          }
        }, {
          key: "idActividadEconomica",
          get: function get() {
            return this._idActividadEconomica;
          },
          set: function set(idActividadEconomica) {
            this._idActividadEconomica = idActividadEconomica;
          }
        }, {
          key: "direccionSedePrincipal",
          get: function get() {
            return this._direccionSedePrincipal;
          },
          set: function set(direccionSedePrincipal) {
            this._direccionSedePrincipal = direccionSedePrincipal;
          }
        }, {
          key: "documentoEmp",
          get: function get() {
            return this._documentoEmp;
          },
          set: function set(documentoEmp) {
            this._documentoEmp = documentoEmp;
          }
        }, {
          key: "idMunicipio",
          get: function get() {
            return this._idMunicipio;
          },
          set: function set(value) {
            this._idMunicipio = value;
          }
        }, {
          key: "idDepartamento",
          get: function get() {
            return this._idDepartamento;
          },
          set: function set(value) {
            this._idDepartamento = value;
          }
        }, {
          key: "nombreDepartamento",
          get: function get() {
            return this._nombreDepartamento;
          },
          set: function set(value) {
            this._nombreDepartamento = value;
          }
        }, {
          key: "nombreMunicipio",
          get: function get() {
            return this._nombreMunicipio;
          },
          set: function set(value) {
            this._nombreMunicipio = value;
          }
        }, {
          key: "descripcionActividadEconomica",
          get: function get() {
            return this._descripcionActividadEconomica;
          },
          set: function set(value) {
            this._descripcionActividadEconomica = value;
          }
        }, {
          key: "correo",
          get: function get() {
            return this._correo;
          },
          set: function set(value) {
            this._correo = value;
          }
        }, {
          key: "telefono",
          get: function get() {
            return this._telefono;
          },
          set: function set(value) {
            this._telefono = value;
          }
        }, {
          key: "parseNombreLogo",
          value: function parseNombreLogo(json) {
            this._nombreLogo = json.NombreArchivo;
            console.log('json' + JSON.stringify(json));
            console.log(this._nombreLogo);
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return new Empresa(json);
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/entity.ts":
    /*!************************************!*\
      !*** ./src/app/entities/entity.ts ***!
      \************************************/

    /*! exports provided: Entity */

    /***/
    function srcAppEntitiesEntityTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Entity", function () {
        return Entity;
      });

      var Entity = /*#__PURE__*/function () {
        function Entity(id) {
          _classCallCheck(this, Entity);

          if (id == null) {
            return;
          }

          this.id = id;
        }

        return _createClass(Entity, [{
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            this._id = id;
          }
        }], [{
          key: "compare",
          value: function compare(e1, e2) {
            return e1 && e2 ? e1.id === e2.id : e1 === e2;
          }
        }]);
      }();
      /***/

    },

    /***/
    "./src/app/entities/mensaje.ts":
    /*!*************************************!*\
      !*** ./src/app/entities/mensaje.ts ***!
      \*************************************/

    /*! exports provided: Mensaje */

    /***/
    function srcAppEntitiesMensajeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mensaje", function () {
        return Mensaje;
      });
      /* harmony import */


      var _commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../commons/enum-estado-mensaje */
      "./src/app/commons/enum-estado-mensaje.ts");
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Mensaje = /*#__PURE__*/function (_entity__WEBPACK_IMPO2) {
        function Mensaje(json) {
          var _this14;

          _classCallCheck(this, Mensaje);

          _this14 = _callSuper(this, Mensaje, [json.PK_Id_Mensaje]);
          _this14._asunto = json.Titulo;
          _this14._texto = json.Asunto.replace(new RegExp('</?strong>', 'g'), '');
          var textarea = document.createElement('textarea');
          textarea.innerHTML = _this14._texto;
          _this14._texto = textarea.value;
          var fecha = json.FechaEnvio.split(' ')[0].split('/');
          var horaAndFormat = json.FechaEnvio.split(' ');
          horaAndFormat.shift();
          var hora = horaAndFormat[0].split(':');
          _this14._fechaHoraEnvio = new Date(fecha[2], fecha[1] - 1, fecha[0], horaAndFormat[1] === 'a.' ? hora[0] : hora[0] < 12 ? parseInt(hora[0], 10) + 12 : hora[0], hora[1], hora[2]);

          if (json.EstadoComunicado === 'Enviado') {
            _this14._estado = _commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_0__["ESTADO_MENSAJE"].Sent;
          } else {
            if (json.EstadoComunicado === 'Leido') {
              _this14._estado = _commons_enum_estado_mensaje__WEBPACK_IMPORTED_MODULE_0__["ESTADO_MENSAJE"].Read;
            }
          }

          return _this14;
        }

        _inherits(Mensaje, _entity__WEBPACK_IMPO2);

        return _createClass(Mensaje, [{
          key: "asunto",
          get: function get() {
            return this._asunto;
          },
          set: function set(asunto) {
            this._asunto = asunto;
          }
        }, {
          key: "texto",
          get: function get() {
            return this._texto;
          },
          set: function set(texto) {
            this._texto = texto;
          }
        }, {
          key: "fechaHoraEnvio",
          get: function get() {
            return this._fechaHoraEnvio;
          },
          set: function set(fechaHoraEnvio) {
            this._fechaHoraEnvio = fechaHoraEnvio;
          }
        }, {
          key: "estado",
          get: function get() {
            return this._estado;
          },
          set: function set(estado) {
            this._estado = estado;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.map(function (item) {
              return new Mensaje(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/trabajador.ts":
    /*!****************************************!*\
      !*** ./src/app/entities/trabajador.ts ***!
      \****************************************/

    /*! exports provided: Trabajador */

    /***/
    function srcAppEntitiesTrabajadorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Trabajador", function () {
        return Trabajador;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Trabajador = /*#__PURE__*/function (_entity__WEBPACK_IMPO3) {
        function Trabajador(json) {
          var _this15;

          _classCallCheck(this, Trabajador);

          _this15 = _callSuper(this, Trabajador, [parseInt(json.idPersona, 10)]);
          _this15.nombre = json.nombre1 + ' ' + json.apellido1 + ' ' + json.apellido2;
          _this15.tipoDocumento = json.tipoDoc;
          _this15.cargo = json.cargo;
          _this15.correo = json.emailPersona;
          _this15.numeroTelefono = json.telPersona;
          _this15.sexo = json.sexoPersona;
          _this15.fechaNacimiento = json.fechaNacimiento;
          _this15.idEPS = json.idEps;
          _this15.nombreEPS = json.nombreEps;
          _this15.direccion = json.dirPersona;
          _this15.idOcupacion = json.idOcupacion;
          _this15.nombreOcupacion = json.ocupacion;
          _this15.nombreDepartamento = json.nomDepAfiliado;
          _this15.nombreMunicipio = json.nomMunAfiliado;
          _this15.idMunicipio = json.idMunAfiliado;
          _this15.idDepartamento = json.idDepAfiliado;
          _this15.primerNombre = json.nombre1;
          _this15.segundoNombre = json.nombre2;
          _this15.primerApellido = json.apellido1;
          _this15.segundoApellido = json.apellido2;
          _this15.idRegistro = json.idRegistro;
          return _this15;
        }

        _inherits(Trabajador, _entity__WEBPACK_IMPO3);

        return _createClass(Trabajador, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }, {
          key: "tipoDocumento",
          get: function get() {
            return this._tipoDocumento;
          },
          set: function set(tipoDocumento) {
            this._tipoDocumento = tipoDocumento;
          }
        }, {
          key: "cargo",
          get: function get() {
            return this._cargo;
          },
          set: function set(cargo) {
            this._cargo = cargo;
          }
        }, {
          key: "correo",
          get: function get() {
            return this._correo;
          },
          set: function set(correo) {
            this._correo = correo;
          }
        }, {
          key: "numeroTelefono",
          get: function get() {
            return this._numeroTelefono;
          },
          set: function set(numeroTelefono) {
            this._numeroTelefono = numeroTelefono;
          }
        }, {
          key: "sexo",
          get: function get() {
            return this._sexo;
          },
          set: function set(sexo) {
            this._sexo = sexo;
          }
        }, {
          key: "fechaNacimiento",
          get: function get() {
            return this._fechaNacimiento;
          },
          set: function set(value) {
            this._fechaNacimiento = value;
          }
        }, {
          key: "idEPS",
          get: function get() {
            return this._idEPS;
          },
          set: function set(value) {
            this._idEPS = value;
          }
        }, {
          key: "nombreEPS",
          get: function get() {
            return this._nombreEPS;
          },
          set: function set(value) {
            this._nombreEPS = value;
          }
        }, {
          key: "direccion",
          get: function get() {
            return this._direccion;
          },
          set: function set(value) {
            this._direccion = value;
          }
        }, {
          key: "idOcupacion",
          get: function get() {
            return this._idOcupacion;
          },
          set: function set(value) {
            this._idOcupacion = value;
          }
        }, {
          key: "nombreOcupacion",
          get: function get() {
            return this._nombreOcupacion;
          },
          set: function set(value) {
            this._nombreOcupacion = value;
          }
        }, {
          key: "nombreDepartamento",
          get: function get() {
            return this._nombreDepartamento;
          },
          set: function set(value) {
            this._nombreDepartamento = value;
          }
        }, {
          key: "nombreMunicipio",
          get: function get() {
            return this._nombreMunicipio;
          },
          set: function set(value) {
            this._nombreMunicipio = value;
          }
        }, {
          key: "idMunicipio",
          get: function get() {
            return this._idMunicipio;
          },
          set: function set(value) {
            this._idMunicipio = value;
          }
        }, {
          key: "idDepartamento",
          get: function get() {
            return this._idDepartamento;
          },
          set: function set(value) {
            this._idDepartamento = value;
          }
        }, {
          key: "primerNombre",
          get: function get() {
            return this._primerNombre;
          },
          set: function set(value) {
            this._primerNombre = value;
          }
        }, {
          key: "segundoNombre",
          get: function get() {
            return this._segundoNombre;
          },
          set: function set(value) {
            this._segundoNombre = value;
          }
        }, {
          key: "primerApellido",
          get: function get() {
            return this._primerApellido;
          },
          set: function set(value) {
            this._primerApellido = value;
          }
        }, {
          key: "segundoApellido",
          get: function get() {
            return this._segundoApellido;
          },
          set: function set(value) {
            this._segundoApellido = value;
          }
        }, {
          key: "idRegistro",
          get: function get() {
            return this._idRegistro;
          },
          set: function set(value) {
            this._idRegistro = value;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return new Trabajador(json);
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/pipes/custom-titlecase.pipe.ts":
    /*!************************************************!*\
      !*** ./src/app/pipes/custom-titlecase.pipe.ts ***!
      \************************************************/

    /*! exports provided: CustomTitlecasePipe */

    /***/
    function srcAppPipesCustomTitlecasePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomTitlecasePipe", function () {
        return CustomTitlecasePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CustomTitlecasePipe = /*#__PURE__*/function () {
        function CustomTitlecasePipe() {
          _classCallCheck(this, CustomTitlecasePipe);
        }

        return _createClass(CustomTitlecasePipe, [{
          key: "transform",
          value: function transform(value) {
            if (!value) {
              return value;
            }

            if (typeof value !== 'string') {
              throw Error('Error: invalid argument for CustomTitlecase pipe');
            }

            return value.split(' ').filter(function (word) {
              return word !== '';
            }).map(function (word) {
              return word[0].toUpperCase() + word.substr(1).toLowerCase();
            }).join(' ');
          }
        }]);
      }();

      CustomTitlecasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customTitlecase'
      })], CustomTitlecasePipe);
      /***/
    },

    /***/
    "./src/app/pipes/date-or-hour.pipe.ts":
    /*!********************************************!*\
      !*** ./src/app/pipes/date-or-hour.pipe.ts ***!
      \********************************************/

    /*! exports provided: DateOrHourPipe */

    /***/
    function srcAppPipesDateOrHourPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateOrHourPipe", function () {
        return DateOrHourPipe;
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


      var _commons_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../commons/locale */
      "./src/app/commons/locale.ts");

      var DateOrHourPipe = /*#__PURE__*/function () {
        function DateOrHourPipe() {
          _classCallCheck(this, DateOrHourPipe);
        }

        return _createClass(DateOrHourPipe, [{
          key: "transform",
          value: function transform(fechaHora) {
            var fechaHoy = new Date();
            var dateHourString;

            if (this.compareDates(fechaHora, fechaHoy) !== -1) {
              dateHourString = fechaHora.getHours() + ':';

              if (fechaHora.getMinutes() < 10) {
                dateHourString += '0' + fechaHora.getMinutes();
              } else {
                dateHourString += fechaHora.getMinutes();
              }
            } else {
              dateHourString = fechaHora.getDate() + ' ' + _commons_locale__WEBPACK_IMPORTED_MODULE_2__["MONTHS_SHORT"][fechaHora.getMonth()];
            }

            return dateHourString;
          }
        }, {
          key: "compareDates",
          value: function compareDates(d1, d2) {
            var d1Value = 10000 * d1.getFullYear() + 100 * d1.getMonth() + d1.getDate();
            var d2Value = 10000 * d2.getFullYear() + 100 * d2.getMonth() + d2.getDate();

            if (d1Value > d2Value) {
              return 1;
            } else {
              if (d1Value < d2Value) {
                return -1;
              } else {
                return 0;
              }
            }
          }
        }]);
      }();

      DateOrHourPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateOrHour'
      })], DateOrHourPipe);
      /***/
    },

    /***/
    "./src/app/pipes/groups-of-three.pipe.ts":
    /*!***********************************************!*\
      !*** ./src/app/pipes/groups-of-three.pipe.ts ***!
      \***********************************************/

    /*! exports provided: GroupsOfThreePipe */

    /***/
    function srcAppPipesGroupsOfThreePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupsOfThreePipe", function () {
        return GroupsOfThreePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GroupsOfThreePipe = /*#__PURE__*/function () {
        function GroupsOfThreePipe() {
          _classCallCheck(this, GroupsOfThreePipe);
        }

        return _createClass(GroupsOfThreePipe, [{
          key: "transform",
          value: function transform(value) {
            // porque la variable value es de tipo number?
            var strValue = String(value);
            var reminderIndex = strValue.length % 3;
            var transformedValue = strValue.substr(0, reminderIndex);

            for (var i = reminderIndex; i < strValue.length; i += 3) {
              transformedValue += ' ' + strValue.substr(i, 3);
            }

            return transformedValue;
          }
        }]);
      }();

      GroupsOfThreePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'groupsOfThree'
      })], GroupsOfThreePipe);
      /***/
    },

    /***/
    "./src/app/services/SST/data-base.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/SST/data-base.service.ts ***!
      \***************************************************/

    /*! exports provided: DataBaseService */

    /***/
    function srcAppServicesSSTDataBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataBaseService", function () {
        return DataBaseService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var DataBaseService = /*#__PURE__*/function () {
        function DataBaseService() {
          _classCallCheck(this, DataBaseService);

          this.dbName = 'SST';
        }

        return _createClass(DataBaseService, [{
          key: "open",
          value: function open() {
            var _this16 = this;

            if (this.db) {
              return Promise.resolve(this.db);
            }

            return new Promise(function (resolve, reject) {
              var request = indexedDB.open(_this16.dbName, 42);

              request.onerror = function (event) {
                console.error('Error al abrir la base de datos:', event);
                reject(event);
              };
              /* crear tablas en indexdb */


              request.onupgradeneeded = function (event) {
                _this16.db = event.target.result;

                if (!_this16.db.objectStoreNames.contains('trabajadores')) {
                  var store = _this16.db.createObjectStore('trabajadores', {
                    keyPath: 'PK_ID_PermisoAlturas_PersonasAMigrar'
                  });

                  store.createIndex('strNumeroDocumeto', 'strNumeroDocumeto', {
                    unique: true
                  }); // this.db.deleteObjectStore('trabajadores');
                }

                if (!_this16.db.objectStoreNames.contains('maestroPadres')) {
                  _this16.db.createObjectStore('maestroPadres', {
                    keyPath: 'Pk_ID_PermisoAlturas_ItemProteccionPadre'
                  }); // this.db.deleteObjectStore('maestroPadres');

                }

                if (!_this16.db.objectStoreNames.contains('maestroHijos')) {
                  _this16.db.createObjectStore('maestroHijos', {
                    keyPath: 'Pk_ID_PermisoAlturas_ProteccionHijos'
                  }); // this.db.deleteObjectStore('maestroHijos');

                }

                if (!_this16.db.objectStoreNames.contains('maestroCuestionario')) {
                  _this16.db.createObjectStore('maestroCuestionario', {
                    keyPath: 'Pk_ID_MaestroCuestionarioHijos'
                  }); // this.db.deleteObjectStore('maestroCuestionario');

                }

                if (!_this16.db.objectStoreNames.contains('data')) {
                  _this16.db.createObjectStore('data', {
                    keyPath: 'uniqueId'
                  }); // this.db.deleteObjectStore('data');

                }

                if (!_this16.db.objectStoreNames.contains('porLiberar')) {
                  _this16.db.createObjectStore('porLiberar', {
                    keyPath: 'PK_ID_PermisoAlturas_PersonasAMigrar'
                  }); // this.db.deleteObjectStore('porLiberar');

                }

                if (!_this16.db.objectStoreNames.contains('tipoPermiso')) {
                  _this16.db.createObjectStore('tipoPermiso', {
                    keyPath: 'PK_ID_PermisoAlturas_MaestroTipoPermiso'
                  });
                }
                /* permisos enviados */


                if (!_this16.db.objectStoreNames.contains('permisosEnviados')) {
                  _this16.db.createObjectStore('permisosEnviados', {
                    keyPath: 'uniqueId'
                  });
                }
                /* QR EMERGENCIA */


                if (!_this16.db.objectStoreNames.contains('qrEmergencia')) {
                  _this16.db.createObjectStore('qrEmergencia', {
                    autoIncrement: true
                  }); // this.db.deleteObjectStore('qrEmergencia');

                }
              };

              request.onsuccess = function (event) {
                _this16.db = event.target.result;
                resolve(_this16.db);
              };
            });
          }
          /* close db  */

        }, {
          key: "close",
          value: function close() {
            if (!this.db) return;
            this.db.close();
          }
          /* añadir localmente los trabajadores a indedb */

        }, {
          key: "addTrabajadorMigrado",
          value: function addTrabajadorMigrado(trabajador) {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this17.db.transaction(['trabajadores'], 'readwrite');

              var objectStore = transaction.objectStore('trabajadores');
              trabajador.blnActivo = false;
              var request = objectStore.put(trabajador);
              console.log('addTrabajadorMigrado', request);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada addTrabajadorMigrado');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "deleteTrabajadorMigrado",
          value: function deleteTrabajadorMigrado(trabajador) {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this18.db.transaction(['trabajadores'], 'readwrite');

              var objectStore = transaction.objectStore('trabajadores');
              var request = objectStore["delete"](trabajador.PK_ID_PermisoAlturas_PersonasAMigrar);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada deleteTrabajadorMigrado');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción deleteTrabajadorMigrado:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "updateTrabajadorMigrado",
          value: function updateTrabajadorMigrado(trabajador) {
            var _this19 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this19.db.transaction(['trabajadores'], 'readwrite');

              var objectStore = transaction.objectStore('trabajadores');
              var request = objectStore.put(trabajador);
              console.log('updateTrabajadorMigrado', request);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada updateTrabajadorMigrado');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción updateTrabajadorMigrado:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "getAllTrabajadoresMigrados",
          value: function getAllTrabajadoresMigrados() {
            var _this20 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this20.db.transaction(['trabajadores'], 'readonly');

              var store = transaction.objectStore('trabajadores');
              var request = store.getAll();

              request.onsuccess = function () {
                if (request.result === undefined) {
                  observer.error('No se encontró el maestro padre');
                  return;
                }

                observer.next(request.result);
                observer.complete();
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
        }, {
          key: "deleteAllTrabajadoresMigrados",
          value: function deleteAllTrabajadoresMigrados() {
            var _this21 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this21.db.transaction(['trabajadores'], 'readwrite');

              var objectStoreTrabajadores = transaction.objectStore('trabajadores');
              var requestTrabajadores = objectStoreTrabajadores.clear();

              requestTrabajadores.onsuccess = function () {
                console.log('Trabajadores eliminados');
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada eliminar trabajadores');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción eliminar trabajadores:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "getTrabajador",
          value: function getTrabajador(numeroDeDocumento, tipoDeDocumento) {
            var _this22 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this22.db.transaction(['trabajadores'], 'readonly');

              var store = transaction.objectStore('trabajadores');
              var index = store.index('strNumeroDocumeto');
              var request = index.get(numeroDeDocumento);

              request.onsuccess = function () {
                if (request.result === undefined) {
                  resolve(null);
                  return;
                }

                if (request.result.strTipoDocumento !== tipoDeDocumento) {
                  resolve(null);
                  return;
                }

                console.log('getTrabajador', request.result);
                resolve(request.result);
              };

              request.onerror = function () {
                reject(request.error);
              };
            });
          }
          /* usuarios disponible */

        }, {
          key: "setPorLiberar",
          value: function setPorLiberar(disponible) {
            var _this23 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this23.db.transaction(['porLiberar'], 'readwrite');

              var objectStore = transaction.objectStore('porLiberar');
              var request = objectStore.put(disponible);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada setDisponible');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "deleteAllPorLiberar",
          value: function deleteAllPorLiberar() {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this24.db.transaction(['porLiberar'], 'readwrite');

              var objectStore = transaction.objectStore('porLiberar');
              var request = objectStore.clear();

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada deleteAllPorLiberar');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción deleteAllPorLiberar:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "getAllPorLiberar",
          value: function getAllPorLiberar() {
            var _this25 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this25.db.transaction(['porLiberar'], 'readonly');

              var store = transaction.objectStore('porLiberar');
              var request = store.getAll();

              request.onsuccess = function () {
                if (request.result === undefined) {
                  observer.error('No se encontró el maestro padre');
                  return;
                }

                observer.next(request.result);
                observer.complete();
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
        }, {
          key: "liberarUsuario",
          value: function liberarUsuario(id) {
            var _this26 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this26.db.transaction(['porLiberar'], 'readwrite');

              var objectStore = transaction.objectStore('porLiberar');
              var request = objectStore["delete"](id);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada deleteDisponible');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "addMaeastroPadre",
          value: function addMaeastroPadre(maestroPadre) {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this27.db.transaction(['maestroPadres'], 'readwrite');

              var objectStore = transaction.objectStore('maestroPadres');
              var request = objectStore.put(maestroPadre);
              console.log('addMaeastroPadre', request);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada padre');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "buscarMaestroPAdre",
          value: function buscarMaestroPAdre(id) {
            var _this28 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this28.db.transaction(['maestroPadres'], 'readonly');

              var store = transaction.objectStore('maestroPadres');
              var request = store.get(id);

              request.onsuccess = function () {
                if (request.result === undefined) {
                  observer.error('No se encontró el maestro padre');
                  return;
                }

                observer.next(request.result);
                observer.complete();
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
        }, {
          key: "addMaestroHijo",
          value: function addMaestroHijo(maestroHijo) {
            var _this29 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this29.db.transaction(['maestroHijos'], 'readwrite');

              var objectStore = transaction.objectStore('maestroHijos');
              var request = objectStore.put(maestroHijo);
              console.log('addMaestroHijo', request);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada hijo');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "addMaestroCuestionario",
          value: function addMaestroCuestionario(maestroCuestionario) {
            var _this30 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this30.db.transaction(['maestroCuestionario'], 'readwrite');

              var objectStore = transaction.objectStore('maestroCuestionario');
              var request = objectStore.put(maestroCuestionario);
              console.log('addMaestroCuestionario', request);

              request.onsuccess = function () {
                console.log('Maestro cuestionario agregado');
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada cuestionario');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "addEDGuardarPermisoTrabajoAPP",
          value: function addEDGuardarPermisoTrabajoAPP(data) {
            var _this31 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this31.db.transaction(['data'], 'readwrite');

              var objectStore = transaction.objectStore('data');
              var request = objectStore.put(data);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "getAllEDGuardarPermisoTrabajoAPP",
          value: function getAllEDGuardarPermisoTrabajoAPP() {
            var _this32 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this32.db.transaction(['data'], 'readonly');

              var store = transaction.objectStore('data');
              var request = store.getAll();

              request.onsuccess = function () {
                if (request.result === undefined) {
                  observer.error('No se encontró el maestro padre');
                  return;
                }

                observer.next(request.result);
                observer.complete();
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
        }, {
          key: "deleteEDGuardarPermisoTrabajoAPP",
          value: function deleteEDGuardarPermisoTrabajoAPP(data) {
            var _this33 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this33.db.transaction(['data'], 'readwrite');

              var objectStore = transaction.objectStore('data');
              var request = objectStore["delete"](data['uniqueId']);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada deleteEDGuardarPermisoTrabajoAPP');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "getAllPermisoEnviado",
          value: function getAllPermisoEnviado() {
            var _this34 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this34.db.transaction(['permisosEnviados'], 'readonly');

              var store = transaction.objectStore('permisosEnviados');
              var request = store.getAll();

              request.onsuccess = function () {
                if (request.result === undefined) {
                  observer.error('No se encontró el maestro padre');
                  return;
                }

                observer.next(request.result);
                observer.complete();
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
          /* eliminar todos los datos de SST */

        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this35 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this35.db.transaction(['data'], 'readonly');

              var store = transaction.objectStore('data');
              var request = store.getAll();

              request.onsuccess = function () {
                if (request.result === undefined) {
                  observer.error('No se encontró el maestro padre');
                  return;
                }

                console.log('getAllData', request.result);
                observer.next(request.result);
                observer.complete();
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
        }, {
          key: "deleteAllData",
          value: function deleteAllData() {
            var _this36 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this36.db.transaction(['trabajadores', 'maestroPadres', 'maestroHijos', 'maestroCuestionario'], 'readwrite');

              var objectStoreTrabajadores = transaction.objectStore('trabajadores');
              var objectStoreMaestroPadres = transaction.objectStore('maestroPadres');
              var objectStoreMaestroHijos = transaction.objectStore('maestroHijos');
              var objectStoreMaestroCuestionario = transaction.objectStore('maestroCuestionario');
              var requestTrabajadores = objectStoreTrabajadores.clear();
              var requestMaestroPadres = objectStoreMaestroPadres.clear();
              var requestMaestroHijos = objectStoreMaestroHijos.clear();
              var requestMaestroCuestionario = objectStoreMaestroCuestionario.clear();

              requestTrabajadores.onsuccess = function () {
                console.log('Trabajadores eliminados');
              };

              requestMaestroPadres.onsuccess = function () {
                console.log('Maestro padres eliminados');
              };

              requestMaestroHijos.onsuccess = function () {
                console.log('Maestro hijos eliminados');
              };

              requestMaestroCuestionario.onsuccess = function () {
                console.log('Maestro cuestionario eliminados');
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada eliminar');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "addTipoPermiso",
          value: function addTipoPermiso(tipoPermiso) {
            var _this37 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this37.db.transaction(['tipoPermiso'], 'readwrite');

              var objectStore = transaction.objectStore('tipoPermiso');
              var request = objectStore.put(tipoPermiso);

              request.onsuccess = function () {
                resolve();
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada tipoPermiso');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "getAllTipoPermiso",
          value: function getAllTipoPermiso() {
            var _this38 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this38.db.transaction(['tipoPermiso'], 'readonly');

              var store = transaction.objectStore('tipoPermiso');
              var request = store.getAll();

              request.onsuccess = function () {
                if (request.result === undefined) {
                  observer.error('No se encontró el maestro padre');
                  return;
                }

                observer.next(request.result);
                observer.complete();
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
        }, {
          key: "deleteAllTipoPermiso",
          value: function deleteAllTipoPermiso() {
            var _this39 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this39.db.transaction(['tipoPermiso'], 'readwrite');

              var objectStoreTipoPermiso = transaction.objectStore('tipoPermiso');
              var requestTipoPermiso = objectStoreTipoPermiso.clear();

              requestTipoPermiso.onsuccess = function () {
                console.log('Tipo permiso eliminados');
              };

              transaction.oncomplete = function () {
                console.log('Transacción completada eliminar tipo permiso');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción:', event.target);
                reject(event.target);
              };
            });
          }
          /* QR EMERGENCIAS */

        }, {
          key: "saveVisit",
          value: function saveVisit(data) {
            var _this40 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this40.db.transaction(['qrEmergencia'], 'readwrite');

              var objectStore = transaction.objectStore('qrEmergencia');
              var request = objectStore.put(data);

              request.onsuccess = function () {
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción qrEmergencia:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "upDateVisit",
          value: function upDateVisit(data, key) {
            var _this41 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this41.db.transaction(['qrEmergencia'], 'readwrite');

              var objectStore = transaction.objectStore('qrEmergencia');
              var request = objectStore.put(data, key);

              request.onsuccess = function () {
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción qrEmergencia:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "deleteVisit",
          value: function deleteVisit(key) {
            var _this42 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this42.db.transaction(['qrEmergencia'], 'readwrite');

              var objectStore = transaction.objectStore('qrEmergencia');
              var request = objectStore["delete"](key);

              request.onsuccess = function () {
                console.log('Visita eliminada');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción qrEmergencia:', event.target);
                reject(event.target);
              };
            });
          }
        }, {
          key: "getLastVisit",
          value: function getLastVisit() {
            var _this43 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this43.db.transaction(['qrEmergencia'], 'readonly');

              var store = transaction.objectStore('qrEmergencia');
              var request = store.openCursor(null, 'prev');

              request.onsuccess = function () {
                var cursor = request.result;
                console.log('getLastVisit', cursor);

                if (cursor === null) {
                  resolve(undefined);
                  return;
                }

                if (cursor) {
                  resolve({
                    data: cursor.value,
                    key: cursor.key
                  });
                } else {
                  resolve(undefined);
                }
              };

              request.onerror = function () {
                reject(request.error);
              };
            });
          }
        }, {
          key: "getAllVisits",
          value: function getAllVisits() {
            var _this44 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var transaction = _this44.db.transaction(['qrEmergencia'], 'readonly');

              var store = transaction.objectStore('qrEmergencia');
              var request = store.openCursor();
              var results = [];

              request.onsuccess = function (event) {
                var cursor = event.target.result;

                if (cursor) {
                  var data = cursor.value;
                  results.push({
                    id: cursor.primaryKey,
                    data: data
                  });
                  cursor["continue"]();
                } else {
                  if (results.length === 0) {
                    observer.error('No se encontró el maestro padre');
                    return;
                  }

                  observer.next(results);
                  observer.complete();
                }
              };

              request.onerror = function () {
                observer.error(request.error);
              };
            });
          }
        }, {
          key: "deleteAllVisits",
          value: function deleteAllVisits() {
            var _this45 = this;

            return new Promise(function (resolve, reject) {
              var transaction = _this45.db.transaction(['qrEmergencia'], 'readwrite');

              var objectStore = transaction.objectStore('qrEmergencia');
              var request = objectStore.clear();

              request.onsuccess = function () {
                console.log('Visitas eliminadas');
                resolve();
              };

              transaction.onerror = function (event) {
                console.error('Error en la transacción qrEmergencia:', event.target);
                reject(event.target);
              };
            });
          }
        }]);
      }();

      DataBaseService.ctorParameters = function () {
        return [];
      };

      DataBaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataBaseService);
      /***/
    },

    /***/
    "./src/app/services/SST/data.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/SST/data.service.ts ***!
      \**********************************************/

    /*! exports provided: DataService */

    /***/
    function srcAppServicesSSTDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../context.service */
      "./src/app/services/context.service.ts");

      var DataService = /*#__PURE__*/function () {
        function DataService(http, db, context) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.db = db;
          this.context = context;
          this.PATH = this.context.getEnvUrl().call(null, 'participacion') + '/PermisoDeTrabajoServicio/';
          this.INFO_TRABAJO = "".concat(this.PATH, "Consultar_Informacion-PermisoDeTrabajo");
          this.GET_TRABAJADOR = "".concat(this.PATH, "Validar-RelacionLaboralUsuarioMigrar");
          this.INFO_PERMISO_TRABAJO = "".concat(this.PATH, "listar-Permisos-Trabajo");
          this.LIBERAR_TRABAJADOR = "".concat(this.PATH, "Liberar_EmpleadosAPP");
          this.ENVIAR_PERMISO = "".concat(this.PATH, "Guardar_PermisoTrabajoAPP");
          this.LISTAR_ACTAS = "".concat(this.PATH, "listar-actas");
        }

        return _createClass(DataService, [{
          key: "infoTrabajo",
          value: function infoTrabajo(intId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _this46 = this;

              var user, body;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.prev = 0;
                    console.log('user:');
                    _context17.next = 4;
                    return this.context.get();

                  case 4:
                    user = _context17.sent;
                    body = {
                      intIDPemiso: intId,
                      strDocumentoEmpresa: user.empresa.id,
                      strTipoDocEmpresa: user.empresa.tipoDocumento
                    };
                    return _context17.abrupt("return", new Promise(function (resolve, reject) {
                      _this46.db.open().then(function () {
                        _this46.http.post(_this46.INFO_TRABAJO, body).subscribe(function (data) {
                          console.log('Información de trabajo:', data);
                          var listaMaestroPadres = data.listaMaestroPadres;
                          var listaMaestroHijos = data.listaMaestroHijos;
                          var listaTrabajadoresMigrados = data.listaTrabajadoresMigrados;
                          var listaMaestroCuestionario = data.listaMaestroCuestionario;
                          var promises = [_this46.db.deleteAllData()].concat(_toConsumableArray(listaTrabajadoresMigrados.map(function (trabajador) {
                            return _this46.db.addTrabajadorMigrado(trabajador);
                          })), _toConsumableArray(listaMaestroPadres.map(function (padre) {
                            return _this46.db.addMaeastroPadre(padre);
                          })), _toConsumableArray(listaMaestroHijos.map(function (hijo) {
                            return _this46.db.addMaestroHijo(hijo);
                          })), _toConsumableArray(listaMaestroCuestionario.map(function (cuestionario) {
                            return _this46.db.addMaestroCuestionario(cuestionario);
                          })));
                          Promise.all(promises).then(function () {
                            var now = new Date();
                            localStorage.setItem('lastSync', now.toString());
                            resolve();
                          })["catch"](function (error) {
                            reject(error);
                          });
                        }, function (error) {
                          reject(error);
                        });
                      });
                    }));

                  case 9:
                    _context17.prev = 9;
                    _context17.t0 = _context17["catch"](0);
                    console.error('Error al obtener los datos:', _context17.t0);
                    this.db.close();

                  case 13:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17, this, [[0, 9]]);
            }));
          }
        }, {
          key: "getTrabajador",
          value: function getTrabajador(strDocumento, tipoDocumento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var _this47 = this;

              var user, body;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.context.get();

                  case 2:
                    user = _context18.sent;
                    body = {
                      strTipoDocEmpresa: user.empresa.tipoDocumento,
                      strNumIdentificacionEmpresa: user.empresa.id,
                      strTipoDocumentacionUsuario: tipoDocumento,
                      strNumIdentificacionUsuario: strDocumento
                    };
                    console.log('body:', body);
                    return _context18.abrupt("return", new Promise(function (resolve, reject) {
                      _this47.http.post(_this47.GET_TRABAJADOR, body, {
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }).subscribe(function (data) {
                        console.log('Trabajador: web web ', JSON.stringify(data));

                        if (data) {
                          resolve(data);
                        } else {
                          resolve(null);
                        }
                      }, function (error) {
                        console.error('Error en la petición HTTP:', error);
                        reject(error);
                      });
                    }));

                  case 6:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "infoPermisoTrabajo",
          value: function infoPermisoTrabajo() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var _this48 = this;

              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.prev = 0;
                    return _context19.abrupt("return", new Promise(function (resolve, reject) {
                      _this48.db.open().then(function () {
                        _this48.http.get(_this48.INFO_PERMISO_TRABAJO, {
                          headers: {
                            'Content-Type': 'application/json'
                          }
                        }).subscribe(function (data) {
                          var promises = [_this48.db.deleteAllTipoPermiso()].concat(_toConsumableArray(data.map(function (permiso) {
                            return _this48.db.addTipoPermiso(permiso);
                          })));
                          Promise.all(promises).then(function () {
                            console.log('Todos los permisos agregados');
                            var now = new Date();
                            localStorage.setItem('lastSync', now.toString());
                            resolve();
                          })["catch"](function (error) {
                            console.log('Error al agregar los permisos:', error);
                            reject(error);
                          });
                        });
                      });
                    }));

                  case 4:
                    _context19.prev = 4;
                    _context19.t0 = _context19["catch"](0);
                    console.error('Error al obtener los datos:', _context19.t0);
                    this.db.close();

                  case 8:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19, this, [[0, 4]]);
            }));
          }
        }, {
          key: "liberarTrabajador",
          value: function liberarTrabajador(id, audi) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              var _this49 = this;

              var body;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    body = {
                      intTipoPermiso: 1,
                      listaIDTrabajadoreLiberar: id,
                      edInfoAuditoria: audi
                    };
                    _context22.prev = 1;
                    return _context22.abrupt("return", new Promise(function (resolve, reject) {
                      _this49.http.post(_this49.LIBERAR_TRABAJADOR, body, {
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }).subscribe(function (data) {
                        console.log('Trabajador liberado:', data);

                        if (data) {
                          _this49.db.open().then(function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this49, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
                              var _this50 = this;

                              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                                while (1) switch (_context21.prev = _context21.next) {
                                  case 0:
                                    _context21.next = 2;
                                    return this.db.deleteAllTrabajadoresMigrados();

                                  case 2:
                                    _context21.next = 4;
                                    return this.db.deleteAllPorLiberar();

                                  case 4:
                                    data.forEach(function (trabajador) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this50, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                                        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                                          while (1) switch (_context20.prev = _context20.next) {
                                            case 0:
                                              _context20.next = 2;
                                              return this.db.addTrabajadorMigrado(trabajador);

                                            case 2:
                                              _context20.next = 4;
                                              return this.db.setPorLiberar(trabajador);

                                            case 4:
                                            case "end":
                                              return _context20.stop();
                                          }
                                        }, _callee20, this);
                                      }));
                                    });
                                    resolve();

                                  case 6:
                                  case "end":
                                    return _context21.stop();
                                }
                              }, _callee21, this);
                            }));
                          });
                        }
                      }, function (error) {
                        console.error('Error en la petición HTTP:', error);
                        reject(error);
                      });
                    }));

                  case 5:
                    _context22.prev = 5;
                    _context22.t0 = _context22["catch"](1);
                    console.error('Error al obtener los datos:', _context22.t0);
                    this.db.close();

                  case 9:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22, this, [[1, 5]]);
            }));
          }
          /* enviar */

          /* promesa que retorna estatus code es 200 y data o 404 no found */

        }, {
          key: "enviarPermisoTrabajo",
          value: function enviarPermisoTrabajo(dataPermiso) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              var _this51 = this;

              var body, key;
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) switch (_context23.prev = _context23.next) {
                  case 0:
                    body = dataPermiso;
                    console.log('body:', JSON.stringify(body));

                    for (key in body) {
                      if (Object.hasOwnProperty.call(body, key)) {
                        console.log("body[".concat(key, "]:"), JSON.stringify(body[key]));
                      }
                    } // console.log(body);


                    _context23.prev = 3;
                    return _context23.abrupt("return", new Promise(function (resolve, reject) {
                      _this51.http.post(_this51.ENVIAR_PERMISO, body, {
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }).subscribe(function (data) {
                        console.log('Permiso enviado:', JSON.stringify(data));

                        if (data) {
                          resolve({
                            status: 200,
                            data: data
                          });
                        } else {
                          resolve({
                            status: 404,
                            data: 'data not found'
                          });
                        }
                      }, function (error) {
                        console.error('Error en la petición HTTP:', error);
                        reject(error);
                      });
                    }));

                  case 7:
                    _context23.prev = 7;
                    _context23.t0 = _context23["catch"](3);
                    console.error('Error al obtener los datos:', _context23.t0);

                  case 10:
                  case "end":
                    return _context23.stop();
                }
              }, _callee23, null, [[3, 7]]);
            }));
          }
        }, {
          key: "listarActas",
          value: function listarActas(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
              var _this52 = this;

              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.prev = 0;
                    return _context24.abrupt("return", new Promise(function (resolve, reject) {
                      console.log('url', _this52.LISTAR_ACTAS);

                      _this52.http.post(_this52.LISTAR_ACTAS, data, {
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }).subscribe(function (data) {
                        console.log('Actas:', data);

                        if (data) {
                          resolve({
                            status: 200,
                            data: data
                          });
                        } else {
                          resolve({
                            status: 404,
                            data: []
                          });
                        }
                      }, function (error) {
                        console.error('Error en la petición HTTP:', error);
                        reject(error);
                      });
                    }));

                  case 4:
                    _context24.prev = 4;
                    _context24.t0 = _context24["catch"](0);

                  case 6:
                  case "end":
                    return _context24.stop();
                }
              }, _callee24, null, [[0, 4]]);
            }));
          }
        }]);
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataService);
      /***/
    },

    /***/
    "./src/app/services/SST/save-data.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/SST/save-data.service.ts ***!
      \***************************************************/

    /*! exports provided: SaveDataService */

    /***/
    function srcAppServicesSSTSaveDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaveDataService", function () {
        return SaveDataService;
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


      var _data_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data-base.service */
      "./src/app/services/SST/data-base.service.ts");

      var SaveDataService = /*#__PURE__*/function () {
        function SaveDataService(db) {
          _classCallCheck(this, SaveDataService);

          this.db = db;
        }

        return _createClass(SaveDataService, [{
          key: "setData",
          value: function setData(data) {
            this.data = data;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "clearData",
          value: function clearData() {
            this.data = null;
          }
        }, {
          key: "saveData",
          value: function saveData() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
              var _this53 = this;

              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    try {
                      this.db.open().then(function () {
                        console.log('abriendo base de datos');
                        console.log(_this53.data);

                        _this53.db.addEDGuardarPermisoTrabajoAPP(_this53.data);
                      });
                    } catch (error) {
                      console.error('Error al guardar el permiso de trabajo:', error);
                      this.db.close();
                    }

                  case 1:
                  case "end":
                    return _context25.stop();
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "porLiberar",
          value: function porLiberar(trabajadores) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
              var _this54 = this;

              return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                while (1) switch (_context27.prev = _context27.next) {
                  case 0:
                    try {
                      this.db.open().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this54, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                          var _this55 = this;

                          return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                            while (1) switch (_context26.prev = _context26.next) {
                              case 0:
                                _context26.next = 2;
                                return this.db.deleteAllPorLiberar();

                              case 2:
                                trabajadores.forEach(function (trabajador) {
                                  _this55.db.setPorLiberar(trabajador);
                                });

                              case 3:
                              case "end":
                                return _context26.stop();
                            }
                          }, _callee26, this);
                        }));
                      });
                    } catch (error) {
                      console.error('Error al guardar los trabajadores disponibles:', error);
                      this.db.close();
                    }

                  case 1:
                  case "end":
                    return _context27.stop();
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "updateTrabajador",
          value: function updateTrabajador(trabajador) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
              var _this56 = this;

              return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                while (1) switch (_context28.prev = _context28.next) {
                  case 0:
                    try {
                      this.db.open().then(function () {
                        _this56.db.updateTrabajadorMigrado(trabajador);
                      });
                    } catch (error) {
                      console.error('Error al actualizar el trabajador:', error);
                      this.db.close();
                    }

                  case 1:
                  case "end":
                    return _context28.stop();
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "deleData",
          value: function deleData(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
              var _this57 = this;

              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) switch (_context29.prev = _context29.next) {
                  case 0:
                    try {
                      this.db.open().then(function () {
                        _this57.db.deleteEDGuardarPermisoTrabajoAPP(data);
                      });
                    } catch (error) {
                      console.error('Error al eliminar el permiso de trabajo:', error);
                      this.db.close();
                    }

                  case 1:
                  case "end":
                    return _context29.stop();
                }
              }, _callee29, this);
            }));
          }
        }]);
      }();

      SaveDataService.ctorParameters = function () {
        return [{
          type: _data_base_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseService"]
        }];
      };

      SaveDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SaveDataService);
      /***/
    },

    /***/
    "./src/app/services/SST/tabla-trabajadores.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/services/SST/tabla-trabajadores.service.ts ***!
      \************************************************************/

    /*! exports provided: TablaTrabajadoresService */

    /***/
    function srcAppServicesSSTTablaTrabajadoresServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablaTrabajadoresService", function () {
        return TablaTrabajadoresService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TablaTrabajadoresService = /*#__PURE__*/function () {
        function TablaTrabajadoresService() {
          _classCallCheck(this, TablaTrabajadoresService);

          this.tablaTrabajadores = [];
        }

        return _createClass(TablaTrabajadoresService, [{
          key: "setListaTrabajadores",
          value: function setListaTrabajadores(trabajadores) {
            this.tablaTrabajadores = trabajadores;
          }
        }, {
          key: "getTablaTrabajadores",
          value: function getTablaTrabajadores() {
            if (this.tablaTrabajadores === undefined) {
              return [];
            }

            return this.tablaTrabajadores;
          }
        }, {
          key: "addTrabajador",
          value: function addTrabajador(trabajador) {
            /* actualizar el dato que viene con uno que ya esxiste */
            if (trabajador.strNombreTrabajador === '') return;
            var existe = this.tablaTrabajadores.some(function (t) {
              return t.strNumeroDocumeto === trabajador.strNumeroDocumeto;
            });

            if (existe) {
              // Encontrar el índice del trabajador existente
              var index = this.tablaTrabajadores.findIndex(function (t) {
                return t.strNumeroDocumeto === trabajador.strNumeroDocumeto;
              });

              if (index !== -1) {
                // Reemplazar el trabajador existente con el trabajador actualizado
                this.tablaTrabajadores[index] = trabajador; // Mover el trabajador al principio de la lista

                this.tablaTrabajadores = [trabajador].concat(_toConsumableArray(this.tablaTrabajadores.slice(0, index)), _toConsumableArray(this.tablaTrabajadores.slice(index + 1)));
              }
            } else {
              // Si el trabajador no existe, agrégalo al principio
              this.tablaTrabajadores = [trabajador].concat(_toConsumableArray(this.tablaTrabajadores));
            }
          }
        }, {
          key: "deleteTrabajador",
          value: function deleteTrabajador(trabajador) {
            this.tablaTrabajadores = this.tablaTrabajadores.filter(function (t) {
              return t.strNumeroDocumeto !== trabajador.strNumeroDocumeto;
            });
          }
        }, {
          key: "deleteAll",
          value: function deleteAll() {
            this.tablaTrabajadores = [];
          }
        }]);
      }();

      TablaTrabajadoresService.ctorParameters = function () {
        return [];
      };

      TablaTrabajadoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TablaTrabajadoresService);
      /***/
    },

    /***/
    "./src/app/services/context.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/context.service.ts ***!
      \*********************************************/

    /*! exports provided: ContextService */

    /***/
    function srcAppServicesContextServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContextService", function () {
        return ContextService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/commons/environment */
      "./src/app/commons/environment.ts");
      /* harmony import */


      var _entities_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../entities/context */
      "./src/app/entities/context.ts");

      var ContextService = /*#__PURE__*/function () {
        function ContextService(storage) {
          _classCallCheck(this, ContextService);

          this.storage = storage;
          this.recoverSession();
        }

        return _createClass(ContextService, [{
          key: "get",
          value: function get() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) switch (_context30.prev = _context30.next) {
                  case 0:
                    if (!this.isFetching) {
                      _context30.next = 6;
                      break;
                    }

                    _context30.next = 3;
                    return this.wait(1000);

                  case 3:
                    _context30.next = 5;
                    return this.get();

                  case 5:
                    return _context30.abrupt("return", _context30.sent);

                  case 6:
                    return _context30.abrupt("return", this.context);

                  case 7:
                  case "end":
                    return _context30.stop();
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "set",
          value: function set(json) {
            this.context = new _entities_context__WEBPACK_IMPORTED_MODULE_4__["Context"](json); // Almacena la sesión

            this.storage.set('session', json);
          }
        }, {
          key: "getEnvUrl",
          value: function getEnvUrl() {
            return this.envFunct;
          }
        }, {
          key: "getAlisstaWeb",
          value: function getAlisstaWeb() {
            return this.alisstaWeb;
          }
        }, {
          key: "getOneSignalAppKey",
          value: function getOneSignalAppKey() {
            return this.oneSignalApiKeyFunct;
          }
        }, {
          key: "getGoogleProjectApiKey",
          value: function getGoogleProjectApiKey() {
            return this.googleProjectKeyFunct;
          }
          /**
           * Obtiene la _URL_ para el descubrimiento de la _IP_ pública.
           */

        }, {
          key: "getIPApi",
          value: function getIPApi() {
            return this.ipApi;
          }
        }, {
          key: "setEnvironment",
          value: function setEnvironment(environment) {
            console.log('-----------------------', environment, this.context);

            switch (environment) {
              case src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["Environments"].Test:
                this.envFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getAlisstaTest"];
                this.alisstaWeb = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getAlisstaWebTest"]();
                this.googleProjectKeyFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getGoogleProjectKeyTest"]();
                this.oneSignalApiKeyFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getOneSignalKeyTest"]();
                break;

              case src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["Environments"].PreProd:
                this.envFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getAlisstaPreProd"];
                break;

              case src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["Environments"].Prod:
                this.envFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getAlisstaProd"];
                this.alisstaWeb = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getAlisstaWebProd"]();
                this.googleProjectKeyFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getGoogleProjectKeyProd"]();
                this.oneSignalApiKeyFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getOneSignalKeyProd"]();
                break;

              case src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["Environments"].V2019:
                this.envFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getAlisstaV2019"];
                this.alisstaWeb = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getAlisstaWebV2019"]();
                this.googleProjectKeyFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getGoogleProjectKeyTest"]();
                this.oneSignalApiKeyFunct = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getOneSignalKeyTest"]();
                break;
            }

            console.log('-----------------------', this.envFunct, this.alisstaWeb);
            this.ipApi = src_app_commons_environment__WEBPACK_IMPORTED_MODULE_3__["getIPApi"]();
          }
          /**
           * Recupera la sesión del usuario, si existe, del almacén de datos.
           */

        }, {
          key: "recoverSession",
          value: function recoverSession() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
              var session;
              return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                while (1) switch (_context31.prev = _context31.next) {
                  case 0:
                    this.isFetching = true;
                    _context31.next = 3;
                    return this.storage.get('session');

                  case 3:
                    session = _context31.sent;

                    if (session) {
                      _context31.next = 7;
                      break;
                    }

                    // No hay sesión registrada.
                    this.isFetching = false;
                    return _context31.abrupt("return");

                  case 7:
                    this.context = new _entities_context__WEBPACK_IMPORTED_MODULE_4__["Context"](session);
                    this.isFetching = false;

                  case 9:
                  case "end":
                    return _context31.stop();
                }
              }, _callee31, this);
            }));
          }
          /**
           * Método utilitario que permite retrasar la ejecución del flujo.
           *
           * @param timeout Tiempo de espera.
           */

        }, {
          key: "wait",
          value: function wait(timeout) {
            return new Promise(function (resolve) {
              setTimeout(resolve, timeout);
            });
          }
        }]);
      }();

      ContextService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      ContextService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ContextService);
      /***/
    },

    /***/
    "./src/app/services/mensaje.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/mensaje.service.ts ***!
      \*********************************************/

    /*! exports provided: MensajeService */

    /***/
    function srcAppServicesMensajeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MensajeService", function () {
        return MensajeService;
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


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _context_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./context.service */
      "./src/app/services/context.service.ts");

      var MensajeService = /*#__PURE__*/function () {
        function MensajeService(context, http, oneSignal) {
          _classCallCheck(this, MensajeService);

          this.context = context;
          this.http = http;
          this.oneSignal = oneSignal;
        }

        return _createClass(MensajeService, [{
          key: "getUrlByMensajeState",
          value: function getUrlByMensajeState(estadoMensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
              var context, idTrabajador;
              return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                while (1) switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.next = 2;
                    return this.context.get();

                  case 2:
                    context = _context32.sent;
                    idTrabajador = context.trabajador.id;
                    return _context32.abrupt("return", this.context.getEnvUrl().call(null, 'plananual') + '/ComunicadosAPP/Listar-Comunicados-Usuario-Por-Estado' + '?Estado=' + estadoMensaje + '&IdentificacionUsuario=' + idTrabajador);

                  case 5:
                  case "end":
                    return _context32.stop();
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "getByMensajeState",
          value: function getByMensajeState(estadoMensaje) {
            var _this58 = this;

            var promise = this.getUrlByMensajeState(estadoMensaje).then(function (p) {
              return p;
            });
            console.log(promise);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (url) {
              return _this58.http.get(url);
            }));
          }
        }, {
          key: "updateMensajeState",
          value: function updateMensajeState(idMensaje, state) {
            var url = this.context.getEnvUrl().call(null, 'plananual') + '/ComunicadosAPP/Actualizar-Usuario-Comunicado-APP' + '?PK_Id_Mensaje=' + idMensaje + '&Estado=' + state;
            return this.http.get(url);
          }
        }, {
          key: "updateOneSignalPlayerId",
          value: function updateOneSignalPlayerId(idPlayer) {
            var _this59 = this;

            var promise = this.context.get().then(function (c) {
              var idTrabajador = c.trabajador.id;
              var url = _this59.context.getEnvUrl().call(null, 'plananual') + '/ComunicadosAPP/Actualizar-PlayerID-Comunicado-APP' + '?IdentificacionUsuario=' + idTrabajador + '&PlayerID=' + idPlayer;
              return url;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (url) {
              return _this59.http.get(url);
            }));
          }
        }]);
      }();

      MensajeService.ctorParameters = function () {
        return [{
          type: _context_service__WEBPACK_IMPORTED_MODULE_6__["ContextService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"]
        }];
      };

      MensajeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], MensajeService);
      /***/
    },

    /***/
    "./src/app/services/network.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/network.service.ts ***!
      \*********************************************/

    /*! exports provided: ConnectionStatusEnum, NetworkService */

    /***/
    function srcAppServicesNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionStatusEnum", function () {
        return ConnectionStatusEnum;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
        return NetworkService;
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


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ConnectionStatusEnum;

      (function (ConnectionStatusEnum) {
        ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
        ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
      })(ConnectionStatusEnum || (ConnectionStatusEnum = {}));

      var NetworkService = /*#__PURE__*/function () {
        function NetworkService(network, http, plt) {
          _classCallCheck(this, NetworkService);

          this.network = network;
          this.http = http;
          this.plt = plt;
          this.hasConnection = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
          this.connectionStatus = ConnectionStatusEnum.Offline;
          this.showIPAddress();
        }

        return _createClass(NetworkService, [{
          key: "showIPAddress",
          value: function showIPAddress() {
            var _this60 = this;

            this.http.get('https://api.ipify.org/?format=json').subscribe(function (ip) {
              _this60.connectionStatus = ConnectionStatusEnum.Online;
              _this60.ipAddress = ip;
            });
          }
        }, {
          key: "getNetworkTestRequest",
          value: function getNetworkTestRequest() {
            return this.http.get('https://api.ipify.org/?format=json');
          }
        }, {
          key: "getNetworkType",
          value: function getNetworkType() {
            return this.network.type;
          }
        }, {
          key: "getNetworkStatus",
          value: function getNetworkStatus() {
            return this.connectionStatus;
          }
        }, {
          key: "testNetworkConnection",
          value: function testNetworkConnection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
              var success;
              return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                while (1) switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.prev = 0;
                    _context33.next = 3;
                    return this.getNetworkTestRequest().toPromise();

                  case 3:
                    success = _context33.sent;
                    this.hasConnection.next(true);
                    return _context33.abrupt("return", true);

                  case 8:
                    _context33.prev = 8;
                    _context33.t0 = _context33["catch"](0);
                    console.log('err testNetworkConnection', _context33.t0);
                    this.hasConnection.next(false);
                    return _context33.abrupt("return", false);

                  case 13:
                  case "end":
                    return _context33.stop();
                }
              }, _callee33, this, [[0, 8]]);
            }));
          }
        }, {
          key: "initializeNetworkEvents",
          value: function initializeNetworkEvents() {
            var _this61 = this;

            this.network.onConnect().subscribe(function () {
              return _this61.connectionStatus = ConnectionStatusEnum.Online;
            });
            this.network.onDisconnect().subscribe(function () {
              return _this61.connectionStatus = ConnectionStatusEnum.Offline;
            });
          }
        }]);
      }();

      NetworkService.ctorParameters = function () {
        return [{
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], NetworkService);
      /***/
    },

    /***/
    "./src/app/services/qr-emergencia.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/qr-emergencia.service.ts ***!
      \***************************************************/

    /*! exports provided: QrEmergenciaService */

    /***/
    function srcAppServicesQrEmergenciaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrEmergenciaService", function () {
        return QrEmergenciaService;
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


      var _SST_data_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./SST/data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./context.service */
      "./src/app/services/context.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var QrEmergenciaService = /*#__PURE__*/function () {
        function QrEmergenciaService(dbLocal, context, http) {
          _classCallCheck(this, QrEmergenciaService);

          this.dbLocal = dbLocal;
          this.context = context;
          this.http = http;
          this.showAlert = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.showAlertEgreso = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.showAlertSendDataSucces = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.showAlertSendDataFail = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        return _createClass(QrEmergenciaService, [{
          key: "setQrEmergencia",
          value: function setQrEmergencia(dataQrEmergencia) {
            console.log('setQrEmergencia', JSON.stringify(dataQrEmergencia));

            switch (dataQrEmergencia.accion) {
              case 'ingreso':
                console.log('ingreso switch');
                this.ingresoSede(dataQrEmergencia);
                break;

              case 'egreso':
                console.log('egreso switch');
                this.egresoSede(dataQrEmergencia);
                break;

              default:
                break;
            }
          }
        }, {
          key: "ingresoSede",
          value: function ingresoSede(dataQrEmergencia) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
              var _this62 = this;

              return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                while (1) switch (_context39.prev = _context39.next) {
                  case 0:
                    try {
                      this.dbLocal.open().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this62, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
                          var _this63 = this;

                          var ultimaVisita;
                          return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                            while (1) switch (_context38.prev = _context38.next) {
                              case 0:
                                _context38.next = 2;
                                return this.dbLocal.getLastVisit();

                              case 2:
                                ultimaVisita = _context38.sent;

                                if (ultimaVisita === undefined) {
                                  console.log('ingreso no hay visitas anteriores');
                                  dataQrEmergencia.terminado = false;
                                  this.sendDataQrIngreso(dataQrEmergencia).then(function (envioIngreso) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this63, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
                                      return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                                        while (1) switch (_context34.prev = _context34.next) {
                                          case 0:
                                            dataQrEmergencia.envioIngreso = envioIngreso;
                                            console.log('envio exitoso', envioIngreso);
                                            _context34.next = 4;
                                            return this.dbLocal.saveVisit(dataQrEmergencia);

                                          case 4:
                                            this.showAlertSendDataSucces.next(envioIngreso);

                                          case 5:
                                          case "end":
                                            return _context34.stop();
                                        }
                                      }, _callee34, this);
                                    }));
                                  })["catch"](function (error) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this63, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
                                      return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                                        while (1) switch (_context35.prev = _context35.next) {
                                          case 0:
                                            console.log('error en el envio', error);
                                            dataQrEmergencia.envioIngreso = false;
                                            _context35.next = 4;
                                            return this.dbLocal.saveVisit(dataQrEmergencia);

                                          case 4:
                                            this.showAlertSendDataSucces.next(false);

                                          case 5:
                                          case "end":
                                            return _context35.stop();
                                        }
                                      }, _callee35, this);
                                    }));
                                  });
                                } else if (ultimaVisita !== undefined && ultimaVisita.data.terminado) {
                                  console.log('ingreso terminado visita anterior');
                                  console.log('qr data ', JSON.stringify(dataQrEmergencia));
                                  dataQrEmergencia.terminado = false;
                                  dataQrEmergencia.envioIngreso = false;
                                  this.sendDataQrIngreso(dataQrEmergencia).then(function (envioIngreso) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this63, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
                                      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                                        while (1) switch (_context36.prev = _context36.next) {
                                          case 0:
                                            dataQrEmergencia.envioIngreso = envioIngreso;
                                            console.log('envio exitoso', envioIngreso);
                                            _context36.next = 4;
                                            return this.dbLocal.saveVisit(dataQrEmergencia);

                                          case 4:
                                            this.showAlertSendDataSucces.next(envioIngreso);

                                          case 5:
                                          case "end":
                                            return _context36.stop();
                                        }
                                      }, _callee36, this);
                                    }));
                                  })["catch"](function (error) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this63, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
                                      return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                                        while (1) switch (_context37.prev = _context37.next) {
                                          case 0:
                                            console.log('error en el envio', error);
                                            dataQrEmergencia.envioIngreso = false;
                                            _context37.next = 4;
                                            return this.dbLocal.saveVisit(dataQrEmergencia);

                                          case 4:
                                            this.showAlertSendDataSucces.next(false);

                                          case 5:
                                          case "end":
                                            return _context37.stop();
                                        }
                                      }, _callee37, this);
                                    }));
                                  });
                                } else {
                                  this.showAlert.next();
                                }

                              case 4:
                              case "end":
                                return _context38.stop();
                            }
                          }, _callee38, this);
                        }));
                      });
                    } catch (error) {
                      console.log(error);
                    }

                  case 1:
                  case "end":
                    return _context39.stop();
                }
              }, _callee39, this);
            }));
          }
        }, {
          key: "ingresoNuevaSede",
          value: function ingresoNuevaSede(dataQrEmergencia) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
              var _this64 = this;

              return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                while (1) switch (_context43.prev = _context43.next) {
                  case 0:
                    try {
                      this.dbLocal.open().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this64, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
                          var _this65 = this;

                          var _yield$this$dbLocal$g, data, key;

                          return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                            while (1) switch (_context42.prev = _context42.next) {
                              case 0:
                                _context42.next = 2;
                                return this.dbLocal.getLastVisit();

                              case 2:
                                _yield$this$dbLocal$g = _context42.sent;
                                data = _yield$this$dbLocal$g.data;
                                key = _yield$this$dbLocal$g.key;
                                console.log(data, 'ultima visita');
                                data.terminado = true;
                                data.latitudSalida = data.latitud;
                                data.longitudSalida = data.longitud;
                                data.FechaYHoraSalida = dataQrEmergencia.FechaYHoraIngreso;
                                dataQrEmergencia.terminado = false;
                                dataQrEmergencia.envioIngreso = false;
                                this.sendDataQrEgreso(data).then(function (envio) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this65, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
                                    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                                      while (1) switch (_context40.prev = _context40.next) {
                                        case 0:
                                          console.log('envio exitoso', envio);

                                          if (!envio) {
                                            _context40.next = 7;
                                            break;
                                          }

                                          _context40.next = 4;
                                          return this.dbLocal.deleteVisit(key);

                                        case 4:
                                          console.log('se borro la visita');
                                          this.showAlertSendDataSucces.next(envio);
                                          this.ingresoSede(dataQrEmergencia);

                                        case 7:
                                        case "end":
                                          return _context40.stop();
                                      }
                                    }, _callee40, this);
                                  }));
                                })["catch"](function (error) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this65, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
                                    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                                      while (1) switch (_context41.prev = _context41.next) {
                                        case 0:
                                          console.log('error en el envio', error);
                                          data.envioSalida = false;
                                          _context41.next = 4;
                                          return this.dbLocal.upDateVisit(data, key);

                                        case 4:
                                          console.log('se actualizo la visita');
                                          this.showAlertSendDataSucces.next(false);
                                          this.dbLocal.saveVisit(dataQrEmergencia);

                                        case 7:
                                        case "end":
                                          return _context41.stop();
                                      }
                                    }, _callee41, this);
                                  }));
                                }); // await this.dbLocal.upDateVisit(data, key);
                                // await this.dbLocal.saveVisit(dataQrEmergencia);

                              case 13:
                              case "end":
                                return _context42.stop();
                            }
                          }, _callee42, this);
                        }));
                      });
                    } catch (error) {
                      console.log(error);
                    }

                  case 1:
                  case "end":
                    return _context43.stop();
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "egresoSede",
          value: function egresoSede(dataQrEmergencia) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
              var _this66 = this;

              return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                while (1) switch (_context51.prev = _context51.next) {
                  case 0:
                    try {
                      this.dbLocal.open().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this66, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
                          var _this67 = this;

                          var _yield$this$dbLocal$g2, data, key, fechaSalida;

                          return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                            while (1) switch (_context49.prev = _context49.next) {
                              case 0:
                                _context49.next = 2;
                                return this.dbLocal.getLastVisit();

                              case 2:
                                _yield$this$dbLocal$g2 = _context49.sent;
                                data = _yield$this$dbLocal$g2.data;
                                key = _yield$this$dbLocal$g2.key;

                                if (!(data === undefined)) {
                                  _context49.next = 18;
                                  break;
                                }

                                console.log('egreso no hay visitas anteriores');
                                dataQrEmergencia.terminado = true;
                                dataQrEmergencia.FechaYHoraSalida = dataQrEmergencia.FechaYHoraIngreso;
                                fechaSalida = new Date(String(dataQrEmergencia.FechaYHoraIngreso));
                                fechaSalida.setHours(fechaSalida.getHours() - 1);
                                dataQrEmergencia.FechaYHoraIngreso = fechaSalida.toISOString();
                                dataQrEmergencia.envioSalida = false;
                                dataQrEmergencia.latitudSalida = dataQrEmergencia.latitud;
                                dataQrEmergencia.longitudSalida = dataQrEmergencia.longitud;
                                this.sendDataQrIngreso(dataQrEmergencia).then(function (envioIngreso) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this67, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
                                    var _this68 = this;

                                    return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                                      while (1) switch (_context45.prev = _context45.next) {
                                        case 0:
                                          if (envioIngreso) {
                                            dataQrEmergencia.envioIngreso = envioIngreso;
                                            this.sendDataQrEgreso(dataQrEmergencia).then(function (envioEgreso) {
                                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this68, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
                                                return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                                                  while (1) switch (_context44.prev = _context44.next) {
                                                    case 0:
                                                      this.showAlertSendDataSucces.next(envioEgreso);

                                                    case 1:
                                                    case "end":
                                                      return _context44.stop();
                                                  }
                                                }, _callee44, this);
                                              }));
                                            });
                                          } else {
                                            this.showAlertSendDataSucces.next(envioIngreso);
                                          }

                                        case 1:
                                        case "end":
                                          return _context45.stop();
                                      }
                                    }, _callee45, this);
                                  }));
                                })["catch"](function (error) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this67, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
                                    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                                      while (1) switch (_context46.prev = _context46.next) {
                                        case 0:
                                          dataQrEmergencia.envioIngreso = false;
                                          _context46.next = 3;
                                          return this.dbLocal.saveVisit(dataQrEmergencia);

                                        case 3:
                                          this.showAlertSendDataSucces.next(false);

                                        case 4:
                                        case "end":
                                          return _context46.stop();
                                      }
                                    }, _callee46, this);
                                  }));
                                });
                                _context49.next = 43;
                                break;

                              case 18:
                                if (!(data.NombreSede === dataQrEmergencia.NombreSede && !data.terminado)) {
                                  _context49.next = 29;
                                  break;
                                }

                                console.log('egreso visita anterior no terminada');
                                data.terminado = true;
                                data.FechaYHoraSalida = dataQrEmergencia.FechaYHoraIngreso;
                                dataQrEmergencia.envioSalida = false;
                                dataQrEmergencia.latitudSalida = dataQrEmergencia.latitud;
                                dataQrEmergencia.longitudSalida = dataQrEmergencia.longitud;
                                dataQrEmergencia.FechaYHoraSalida = dataQrEmergencia.FechaYHoraIngreso;
                                this.sendDataQrEgreso(dataQrEmergencia).then(function (envio) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this67, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
                                    return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                                      while (1) switch (_context47.prev = _context47.next) {
                                        case 0:
                                          _context47.next = 2;
                                          return this.dbLocal.deleteVisit(key);

                                        case 2:
                                          this.showAlertSendDataSucces.next(envio);

                                        case 3:
                                        case "end":
                                          return _context47.stop();
                                      }
                                    }, _callee47, this);
                                  }));
                                })["catch"](function (error) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this67, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
                                    return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                                      while (1) switch (_context48.prev = _context48.next) {
                                        case 0:
                                          data.envioSalida = false;
                                          _context48.next = 3;
                                          return this.dbLocal.upDateVisit(data, key);

                                        case 3:
                                          this.showAlertSendDataSucces.next(false);

                                        case 4:
                                        case "end":
                                          return _context48.stop();
                                      }
                                    }, _callee48, this);
                                  }));
                                });
                                _context49.next = 43;
                                break;

                              case 29:
                                if (!(data.NombreSede !== dataQrEmergencia.NombreSede && !data.terminado)) {
                                  _context49.next = 42;
                                  break;
                                }

                                console.log('egreso visita anterior no terminada nueva sede');
                                data.terminado = true;
                                data.latitudSalida = data.latitud;
                                data.longitudSalida = data.longitud;
                                data.FechaYHoraSalida = dataQrEmergencia.FechaYHoraIngreso;
                                console.log('qr data ', JSON.stringify(dataQrEmergencia));
                                console.log('qr data local ', JSON.stringify(data));
                                _context49.next = 39;
                                return this.egresoSede(data);

                              case 39:
                                this.egresoNuevaSede(dataQrEmergencia);
                                _context49.next = 43;
                                break;

                              case 42:
                                this.showAlertEgreso.next();

                              case 43:
                              case "end":
                                return _context49.stop();
                            }
                          }, _callee49, this);
                        }));
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this66, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
                          return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                            while (1) switch (_context50.prev = _context50.next) {
                              case 0:
                                if (error.message === "Cannot destructure property 'data' of '(intermediate value)' as it is undefined.") {
                                  // Handle the case when there's no data
                                  // For example, create a new record
                                  this.showAlertEgreso.next();
                                }

                              case 1:
                              case "end":
                                return _context50.stop();
                            }
                          }, _callee50, this);
                        }));
                      });
                    } catch (error) {
                      console.log(error, 'error egreso sede');
                    }

                  case 1:
                  case "end":
                    return _context51.stop();
                }
              }, _callee51, this);
            }));
          }
        }, {
          key: "egresoNuevaSede",
          value: function egresoNuevaSede(dataQrEmergencia) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
              var _this69 = this;

              return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                while (1) switch (_context56.prev = _context56.next) {
                  case 0:
                    try {
                      this.dbLocal.open().then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this69, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
                          var _this70 = this;

                          var fechaSalida;
                          return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                            while (1) switch (_context55.prev = _context55.next) {
                              case 0:
                                console.log('egreso nueva sede');
                                dataQrEmergencia.terminado = true;
                                dataQrEmergencia.FechaYHoraSalida = dataQrEmergencia.FechaYHoraIngreso;
                                fechaSalida = new Date(String(dataQrEmergencia.FechaYHoraIngreso));
                                fechaSalida.setHours(fechaSalida.getHours() - 1);
                                dataQrEmergencia.FechaYHoraIngreso = fechaSalida.toISOString();
                                console.log('enviando ingreso');
                                this.sendDataQrIngreso(dataQrEmergencia).then(function (envioIngreso) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this70, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
                                    var _this71 = this;

                                    return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                                      while (1) switch (_context53.prev = _context53.next) {
                                        case 0:
                                          console.log('enviando egreso');

                                          if (envioIngreso) {
                                            console.log('envio ingreso exitoso');
                                            dataQrEmergencia.envioIngreso = envioIngreso;
                                            dataQrEmergencia.latitudSalida = dataQrEmergencia.latitud;
                                            dataQrEmergencia.longitudSalida = dataQrEmergencia.longitud;
                                            this.sendDataQrEgreso(dataQrEmergencia).then(function (envioEgreso) {
                                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this71, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
                                                return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                                                  while (1) switch (_context52.prev = _context52.next) {
                                                    case 0:
                                                      console.log('envio egreso exitoso');
                                                      this.showAlertSendDataSucces.next(envioEgreso);

                                                    case 2:
                                                    case "end":
                                                      return _context52.stop();
                                                  }
                                                }, _callee52, this);
                                              }));
                                            });
                                          } else {
                                            this.showAlertSendDataSucces.next(envioIngreso);
                                          }

                                        case 2:
                                        case "end":
                                          return _context53.stop();
                                      }
                                    }, _callee53, this);
                                  }));
                                })["catch"](function (error) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this70, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
                                    return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                                      while (1) switch (_context54.prev = _context54.next) {
                                        case 0:
                                          console.log('error en el envio', error);
                                          dataQrEmergencia.envioIngreso = false;
                                          _context54.next = 4;
                                          return this.dbLocal.saveVisit(dataQrEmergencia);

                                        case 4:
                                          this.showAlertSendDataSucces.next(false);

                                        case 5:
                                        case "end":
                                          return _context54.stop();
                                      }
                                    }, _callee54, this);
                                  }));
                                }); // await this.dbLocal.saveVisit(dataQrEmergencia);

                              case 8:
                              case "end":
                                return _context55.stop();
                            }
                          }, _callee55, this);
                        }));
                      });
                    } catch (error) {
                      console.log(error);
                    }

                  case 1:
                  case "end":
                    return _context56.stop();
                }
              }, _callee56, this);
            }));
          }
        }, {
          key: "addDataQr",
          value: function addDataQr(dataQrEmergencia) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
              return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                while (1) switch (_context57.prev = _context57.next) {
                  case 0:
                  case "end":
                    return _context57.stop();
                }
              }, _callee57);
            }));
          }
        }, {
          key: "getDataQrAll",
          value: function getDataQrAll() {
            var _this72 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              _this72.dbLocal.open().then(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this72, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
                  return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                    while (1) switch (_context58.prev = _context58.next) {
                      case 0:
                        this.dbLocal.getAllVisits().subscribe(function (data) {
                          observer.next(data);
                        });

                      case 1:
                      case "end":
                        return _context58.stop();
                    }
                  }, _callee58, this);
                }));
              });
            });
          }
        }, {
          key: "deleteAllDataQr",
          value: function deleteAllDataQr() {
            var _this73 = this;

            this.dbLocal.open().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this73, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
                return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                  while (1) switch (_context59.prev = _context59.next) {
                    case 0:
                      this.dbLocal.deleteAllVisits();

                    case 1:
                    case "end":
                      return _context59.stop();
                  }
                }, _callee59, this);
              }));
            });
          }
        }, {
          key: "deleteDataQr",
          value: function deleteDataQr(id) {
            var _this74 = this;

            this.dbLocal.open().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this74, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
                return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                  while (1) switch (_context60.prev = _context60.next) {
                    case 0:
                      this.dbLocal.deleteVisit(id);

                    case 1:
                    case "end":
                      return _context60.stop();
                  }
                }, _callee60, this);
              }));
            });
          }
        }, {
          key: "sendDataQrIngreso",
          value: function sendDataQrIngreso(dataQrLc) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
              var _this75 = this;

              return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                while (1) switch (_context62.prev = _context62.next) {
                  case 0:
                    return _context62.abrupt("return", new Promise(function (resolve, reject) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this75, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
                        var _yield$this$context$g, trabajador, dataQr, url, response;

                        return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                          while (1) switch (_context61.prev = _context61.next) {
                            case 0:
                              _context61.prev = 0;
                              _context61.next = 3;
                              return this.context.get();

                            case 3:
                              _yield$this$context$g = _context61.sent;
                              trabajador = _yield$this$context$g.trabajador;
                              console.log('qr', JSON.stringify(dataQrLc));
                              dataQr = {
                                Accion: 'INGRESO',
                                SedeId: dataQrLc.SedeId,
                                UsuarioSistemaId: trabajador.idRegistro,
                                FechaHoraEvento: dataQrLc.FechaYHoraIngreso.toString(),
                                Latitud: dataQrLc.latitud,
                                Longitud: dataQrLc.longitud
                              };
                              console.log('dataQr', JSON.stringify(dataQr));
                              url = this.context.getEnvUrl().call(null, 'empresa') + '/Emergencia/Guardar-Informacion-ingreso-Salida-Sede';
                              _context61.next = 11;
                              return this.http.post(url, dataQr).toPromise()["catch"](function (error) {
                                console.log('error en la peticion https', JSON.stringify(error));
                                reject(false);
                              });

                            case 11:
                              response = _context61.sent;

                              if (response) {
                                console.log('peticion correcta');
                                resolve(true);
                              } else {
                                console.log('error en la peticion y status', JSON.stringify(response));
                                reject(false);
                              }

                              _context61.next = 19;
                              break;

                            case 15:
                              _context61.prev = 15;
                              _context61.t0 = _context61["catch"](0);
                              console.log('error en la peticion https', _context61.t0);
                              reject(false);

                            case 19:
                            case "end":
                              return _context61.stop();
                          }
                        }, _callee61, this, [[0, 15]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context62.stop();
                }
              }, _callee62);
            }));
          }
        }, {
          key: "sendDataQrEgreso",
          value: function sendDataQrEgreso(dataQrLc) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
              var _this76 = this;

              return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                while (1) switch (_context64.prev = _context64.next) {
                  case 0:
                    return _context64.abrupt("return", new Promise(function (resolve, reject) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this76, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                        var _yield$this$context$g2, trabajador, dataQr, url, response;

                        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                          while (1) switch (_context63.prev = _context63.next) {
                            case 0:
                              _context63.prev = 0;
                              _context63.next = 3;
                              return this.context.get();

                            case 3:
                              _yield$this$context$g2 = _context63.sent;
                              trabajador = _yield$this$context$g2.trabajador;
                              console.log('dalocal', JSON.stringify(dataQrLc));
                              dataQr = {
                                Accion: 'SALIDA',
                                SedeId: dataQrLc.SedeId,
                                UsuarioSistemaId: trabajador.idRegistro,
                                FechaHoraEvento: dataQrLc.FechaYHoraSalida.toString(),
                                Latitud: dataQrLc.latitudSalida,
                                Longitud: dataQrLc.longitudSalida
                              };
                              url = this.context.getEnvUrl().call(null, 'empresa') + '/Emergencia/Guardar-Informacion-ingreso-Salida-Sede';
                              _context63.next = 10;
                              return this.http.post(url, dataQr).toPromise()["catch"](function (error) {
                                console.log('error en la peticion https', JSON.stringify(error));
                                reject(false);
                              });

                            case 10:
                              response = _context63.sent;

                              if (response) {
                                console.log('peticion correcta');
                                resolve(true);
                              } else {
                                console.log('error en la peticion y status', JSON.stringify(response));
                                reject(false);
                              }

                              _context63.next = 18;
                              break;

                            case 14:
                              _context63.prev = 14;
                              _context63.t0 = _context63["catch"](0);
                              console.log('error en la peticion https', _context63.t0);
                              reject(false);

                            case 18:
                            case "end":
                              return _context63.stop();
                          }
                        }, _callee63, this, [[0, 14]]);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context64.stop();
                }
              }, _callee64);
            }));
          }
        }]);
      }();

      QrEmergenciaService.ctorParameters = function () {
        return [{
          type: _SST_data_base_service__WEBPACK_IMPORTED_MODULE_2__["DataBaseService"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      QrEmergenciaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], QrEmergenciaService);
      /***/
    },

    /***/
    "./src/app/services/utils.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/utils.service.ts ***!
      \*******************************************/

    /*! exports provided: UtilsService */

    /***/
    function srcAppServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
        return UtilsService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./context.service */
      "./src/app/services/context.service.ts");

      var UtilsService = /*#__PURE__*/function () {
        function UtilsService(loadingCtrl, context, http) {
          _classCallCheck(this, UtilsService);

          this.loadingCtrl = loadingCtrl;
          this.context = context;
          this.http = http;
        }

        return _createClass(UtilsService, [{
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
              return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                while (1) switch (_context65.prev = _context65.next) {
                  case 0:
                    this.dismissLoading();
                    _context65.next = 3;
                    return this.loadingCtrl.create({
                      message: 'Cargando...'
                    });

                  case 3:
                    this.loading = _context65.sent;
                    _context65.next = 6;
                    return this.loading.present();

                  case 6:
                  case "end":
                    return _context65.stop();
                }
              }, _callee65, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            if (!this.loading) {
              return;
            }

            this.loading.dismiss();
            this.loading = undefined;
          }
          /**
           * Obtiene la dirección IP pública desde la cual se realizan las peticiones.
           */

        }, {
          key: "getIPAddress",
          value: function getIPAddress() {
            var url = this.context.getIPApi();
            return this.http.get(url);
          }
        }, {
          key: "getDaysDifference",
          value: function getDaysDifference(date1, date2) {
            // Un día en milisegundos
            var oneDay = 1000 * 60 * 60 * 24; // Calculando la diferencia en tiempo entre dos fechas

            var diffInTime = date2.getTime() - date1.getTime(); // Calculando la diferencia en días entre dos fechas

            var diffInDays = Math.round(diffInTime / oneDay);
            return diffInDays;
          }
        }]);
      }();

      UtilsService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      UtilsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], UtilsService);
      /***/
    },

    /***/
    "./src/app/shared.module.ts":
    /*!**********************************!*\
      !*** ./src/app/shared.module.ts ***!
      \**********************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/app-rate/ngx */
      "./node_modules/@ionic-native/app-rate/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! angularx-qrcode */
      "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
      /* harmony import */


      var src_app_components_avatar_letter_avatar_letter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/components/avatar-letter/avatar-letter.component */
      "./src/app/components/avatar-letter/avatar-letter.component.ts");
      /* harmony import */


      var src_app_components_mensaje_lista_mensaje_lista_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/components/mensaje-lista/mensaje-lista.component */
      "./src/app/components/mensaje-lista/mensaje-lista.component.ts");
      /* harmony import */


      var src_app_components_menu_operativo_menu_operativo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/components/menu-operativo/menu-operativo.component */
      "./src/app/components/menu-operativo/menu-operativo.component.ts");
      /* harmony import */


      var src_app_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/components/nav-bar/nav-bar.component */
      "./src/app/components/nav-bar/nav-bar.component.ts");
      /* harmony import */


      var src_app_components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/components/title-bar/title-bar.component */
      "./src/app/components/title-bar/title-bar.component.ts");
      /* harmony import */


      var src_app_pipes_custom_titlecase_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/pipes/custom-titlecase.pipe */
      "./src/app/pipes/custom-titlecase.pipe.ts");
      /* harmony import */


      var src_app_pipes_date_or_hour_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/pipes/date-or-hour.pipe */
      "./src/app/pipes/date-or-hour.pipe.ts");
      /* harmony import */


      var src_app_pipes_groups_of_three_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/pipes/groups-of-three.pipe */
      "./src/app/pipes/groups-of-three.pipe.ts");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! src/app/services/SST/data.service */
      "./src/app/services/SST/data.service.ts");
      /* harmony import */


      var _services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./services/SST/data-base.service */
      "./src/app/services/SST/data-base.service.ts");
      /* harmony import */


      var _components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/modal-trabajadores/modal-trabajadores.component */
      "./src/app/components/modal-trabajadores/modal-trabajadores.component.ts");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _components_signature_pad_signature_pad_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/signature-pad/signature-pad.component */
      "./src/app/components/signature-pad/signature-pad.component.ts");
      /* harmony import */


      var _components_qr_qr_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/qr/qr.component */
      "./src/app/components/qr/qr.component.ts");
      /* harmony import */


      var _components_go_to_home_sst_go_to_home_sst_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/go-to-home-sst/go-to-home-sst.component */
      "./src/app/components/go-to-home-sst/go-to-home-sst.component.ts");
      /* harmony import */


      var _components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/modal-add-trabajador/modal-add-trabajador.component */
      "./src/app/components/modal-add-trabajador/modal-add-trabajador.component.ts");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ionic-selectable */
      "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
      /* harmony import */


      var _components_modal_data_emergencia_modal_data_emergencia_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/modal-data-emergencia/modal-data-emergencia.component */
      "./src/app/components/modal-data-emergencia/modal-data-emergencia.component.ts");
      /* harmony import */


      var _services_qr_emergencia_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./services/qr-emergencia.service */
      "./src/app/services/qr-emergencia.service.ts");
      /* harmony import */


      var _components_qr_emergencia_qr_emergencia_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/qr-emergencia/qr-emergencia.component */
      "./src/app/components/qr-emergencia/qr-emergencia.component.ts");

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [src_app_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_21__["NavBarComponent"], src_app_components_menu_operativo_menu_operativo_component__WEBPACK_IMPORTED_MODULE_20__["MenuOperativoComponent"], src_app_components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_22__["TitleBarComponent"], src_app_components_mensaje_lista_mensaje_lista_component__WEBPACK_IMPORTED_MODULE_19__["MensajeListaComponent"], src_app_components_avatar_letter_avatar_letter_component__WEBPACK_IMPORTED_MODULE_18__["AvatarLetterComponent"], src_app_pipes_custom_titlecase_pipe__WEBPACK_IMPORTED_MODULE_23__["CustomTitlecasePipe"], src_app_pipes_groups_of_three_pipe__WEBPACK_IMPORTED_MODULE_25__["GroupsOfThreePipe"], src_app_pipes_date_or_hour_pipe__WEBPACK_IMPORTED_MODULE_24__["DateOrHourPipe"], _components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_29__["ModalTrabajadoresComponent"], _components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_34__["ModalAddTrabajadorComponent"], _components_signature_pad_signature_pad_component__WEBPACK_IMPORTED_MODULE_31__["SignaturePadComponent"], _components_qr_qr_component__WEBPACK_IMPORTED_MODULE_32__["QRComponent"], _components_qr_emergencia_qr_emergencia_component__WEBPACK_IMPORTED_MODULE_38__["QrEmergenciaComponent"], _components_go_to_home_sst_go_to_home_sst_component__WEBPACK_IMPORTED_MODULE_33__["GoToHomeSstComponent"], _components_modal_data_emergencia_modal_data_emergencia_component__WEBPACK_IMPORTED_MODULE_36__["ModalDataEmergenciaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_17__["QRCodeModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_35__["IonicSelectableModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_17__["QRCodeModule"], src_app_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_21__["NavBarComponent"], src_app_components_menu_operativo_menu_operativo_component__WEBPACK_IMPORTED_MODULE_20__["MenuOperativoComponent"], src_app_components_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_22__["TitleBarComponent"], src_app_components_mensaje_lista_mensaje_lista_component__WEBPACK_IMPORTED_MODULE_19__["MensajeListaComponent"], src_app_components_avatar_letter_avatar_letter_component__WEBPACK_IMPORTED_MODULE_18__["AvatarLetterComponent"], src_app_pipes_custom_titlecase_pipe__WEBPACK_IMPORTED_MODULE_23__["CustomTitlecasePipe"], src_app_pipes_groups_of_three_pipe__WEBPACK_IMPORTED_MODULE_25__["GroupsOfThreePipe"], src_app_pipes_date_or_hour_pipe__WEBPACK_IMPORTED_MODULE_24__["DateOrHourPipe"], _components_modal_trabajadores_modal_trabajadores_component__WEBPACK_IMPORTED_MODULE_29__["ModalTrabajadoresComponent"], _components_modal_add_trabajador_modal_add_trabajador_component__WEBPACK_IMPORTED_MODULE_34__["ModalAddTrabajadorComponent"], _components_signature_pad_signature_pad_component__WEBPACK_IMPORTED_MODULE_31__["SignaturePadComponent"], _components_go_to_home_sst_go_to_home_sst_component__WEBPACK_IMPORTED_MODULE_33__["GoToHomeSstComponent"], ionic_selectable__WEBPACK_IMPORTED_MODULE_35__["IonicSelectableModule"], _components_modal_data_emergencia_modal_data_emergencia_component__WEBPACK_IMPORTED_MODULE_36__["ModalDataEmergenciaComponent"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["IonicRouteStrategy"]
        }, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__["StatusBar"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__["Device"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__["OneSignal"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_6__["AppRate"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_10__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeGeocoder"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_26__["Network"], src_app_services_SST_data_service__WEBPACK_IMPORTED_MODULE_27__["DataService"], _services_SST_data_base_service__WEBPACK_IMPORTED_MODULE_28__["DataBaseService"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_30__["ImagePicker"], _services_qr_emergencia_service__WEBPACK_IMPORTED_MODULE_37__["QrEmergenciaService"]]
      })], SharedModule);
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.module */
      "./src/app.module.ts");

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\ASUS\Desktop\Proyectos\ADA\Desarrollo\alissta_gestion\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map