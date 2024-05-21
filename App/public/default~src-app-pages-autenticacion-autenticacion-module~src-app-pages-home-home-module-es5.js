(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-pages-autenticacion-autenticacion-module~src-app-pages-home-home-module"], {
    /***/
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js":
    /*!******************************************************************************!*\
      !*** ./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js ***!
      \******************************************************************************/

    /*! exports provided: FingerprintAIO */

    /***/
    function node_modulesIonicNativeFingerprintAio__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FingerprintAIO", function () {
        return FingerprintAIO;
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var FingerprintAIO =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FingerprintAIO, _super);

        function FingerprintAIO() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * Convenience constant
           * @type {number}
           */


          _this.BIOMETRIC_UNKNOWN_ERROR = -100;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_UNAVAILABLE = -101;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_AUTHENTICATION_FAILED = -102;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_SDK_NOT_SUPPORTED = -103;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_NOT_ENROLLED = -106;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_DISMISSED = -108;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_LOCKED_OUT = -111;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
          /**
           * Convenience constant
           * @type {number}
           */

          _this.BIOMETRIC_SECRET_NOT_FOUND = -113;
          return _this;
        }

        FingerprintAIO.prototype.isAvailable = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isAvailable", {}, arguments);
        };

        FingerprintAIO.prototype.registerBiometricSecret = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerBiometricSecret", {}, arguments);
        };

        FingerprintAIO.prototype.loadBiometricSecret = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "loadBiometricSecret", {}, arguments);
        };

        FingerprintAIO.prototype.show = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {}, arguments);
        };

        FingerprintAIO.pluginName = "FingerprintAIO";
        FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
        FingerprintAIO.pluginRef = "Fingerprint";
        FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
        FingerprintAIO.platforms = ["Android", "iOS"];

        FingerprintAIO.ɵfac = function FingerprintAIO_Factory(t) {
          return ɵFingerprintAIO_BaseFactory(t || FingerprintAIO);
        };

        FingerprintAIO.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: FingerprintAIO,
          factory: function factory(t) {
            return FingerprintAIO.ɵfac(t);
          }
        });

        var ɵFingerprintAIO_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FingerprintAIO);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerprintAIO, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return FingerprintAIO;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmluZ2VycHJpbnQtYWlvL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUdXLElBK0d5QixrQ0FBaUI7QUFBQztBQUU5QjtBQUtkLFFBTlI7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsNkJBQXVCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDakMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSwyQkFBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMvQixRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLHFDQUErQixHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ3pDLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsaUNBQTJCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDckMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMxQyxRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLHNDQUFnQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzFDLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsNEJBQXNCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxxQ0FBK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN6QyxRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLHlCQUFtQixHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzdCLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsd0NBQWtDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDNUMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMxQyxRQUFFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLDBCQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzlCLFFBQUU7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQUUsb0NBQThCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDeEMsUUFBRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBRSxnQ0FBMEIsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNwQztBQUVlO0FBQU0sSUFJbkIsb0NBQVc7QUFLaUIsSUFLNUIsZ0RBQXVCLGFBQUMsT0FBaUM7QUFLN0IsSUFLNUIsNENBQW1CLGFBQUMsT0FBMkI7QUFLMUIsSUFLckIsNkJBQUksYUFBQyxPQUEyQjtBQUlsQjtBQUFrRDtBQUE4RDtBQUE4QztBQUEwRjtrREFoSHZRLFVBQVU7Ozs7OzBCQUNMO0FBQUMseUJBcEhQO0FBQUUsRUFvSGtDLGlCQUFpQjtBQUNwRCxTQURZLGNBQWM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaXRsZSBpbiBiaW9tZXRyaWMgcHJvbXB0IChhbmRyb2lkIG9ubHkpXG4gICAqIEBkZWZhdWx0IHtBUFBfTkFNRX0gQmlvbWV0cmljIFNpZ24gT25cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdWJ0aXRsZSBpbiBiaW9tZXRyaWMgUHJvbXB0IChhbmRyb2lkIG9ubHkpXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvbiBpbiBiaW9tZXRyaWMgUHJvbXB0XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiBmYWxsYmFjayBidXR0b24uXG4gICAqIEBkZWZhdWx0IFwiVXNlIFBpblwiXG4gICAqL1xuICBmYWxsYmFja0J1dHRvblRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBmb3IgY2FuY2VsIGJ1dHRvbiBvbiBBbmRyb2lkXG4gICAqIEBkZWZhdWx0IFwiQ2FuY2VsXCJcbiAgICovXG4gIGNhbmNlbEJ1dHRvblRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlICd1c2UgYmFja3VwJyBvcHRpb24uXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkaXNhYmxlQmFja3VwPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludFNlY3JldE9wdGlvbnMgZXh0ZW5kcyBGaW5nZXJwcmludE9wdGlvbnMge1xuICAvKipcbiAgICogU3RyaW5nIHNlY3JldCB0byBlbmNyeXB0IGFuZCBzYXZlLCB1c2Ugc2ltcGxlIHN0cmluZ3MgbWF0Y2hpbmcgdGhlIHJlZ2V4IFthLXpBLVowLTlcXC1dK1xuICAgKi9cbiAgc2VjcmV0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCBzZWNyZXQgd2lsbCBiZSBkZWxldGVkIHdoZW4gYmlvbWV0cnkgaXRlbXMgYXJlIGRlbGV0ZWQgb3IgZW5yb2xsZWRcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGludmFsaWRhdGVPbkVucm9sbG1lbnQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEZpbmdlcnByaW50IEFJT1xuICogQGRlc2NyaXB0aW9uXG4gKiBVc2Ugc2ltcGxlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8uIEZvciBtb3JlIGluZm8gYWJvdXQgcGx1Z2luLCB2aXN0OiBodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW9cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbmdlcnByaW50QUlPIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maW5nZXJwcmludC1haW8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhaW86IEZpbmdlcnByaW50QUlPKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZhaW8uc2hvdygpLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKS5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiAgT1Igd2l0aCBvcHRpb25zLi4uXG4gKlxuICogdGhpcy5mYWlvLnNob3coe1xuICogICAgIHRpdGxlOiAnQmlvbWV0cmljIEF1dGhlbnRpY2F0aW9uJywgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IFwiPEFQUF9OQU1FPiBCaW9tZXRyaWMgU2lnbiBPblwiXG4gKiAgICAgc3VidGl0bGU6ICdDb29sZXN0IFBsdWdpbiBldmVyJyAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgIGRlc2NyaXB0aW9uOiAnUGxlYXNlIGF1dGhlbnRpY2F0ZScgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgZmFsbGJhY2tCdXR0b25UaXRsZTogJ1VzZSBCYWNrdXAnLCAvLyBvcHRpb25hbCB8IFdoZW4gZGlzYWJsZUJhY2t1cCBpcyBmYWxzZSBkZWZhdWx0cyB0byBcIlVzZSBQaW5cIi5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZGlzYWJsZUJhY2t1cCBpcyB0cnVlIGRlZmF1bHRzIHRvIFwiQ2FuY2VsXCJcbiAqICAgICBkaXNhYmxlQmFja3VwOnRydWUsICAvLyBvcHRpb25hbCB8IGRlZmF1bHQ6IGZhbHNlXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmFpby5yZWdpc3RlckJpb21ldHJpY1NlY3JldCh7XG4gKiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgYmlvbWV0cmljIGRlc2NyaXB0aW9uXCIsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxuICogICAgICBzZWNyZXQ6IFwibXktc3VwZXItc2VjcmV0XCIsIC8vIG1hbmRhdG9yeVxuICogICAgICBpbnZhbGlkYXRlT25FbnJvbGxtZW50OiB0cnVlLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IGZhbHNlXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBhbHdheXMgYHRydWVgIG9uIEFuZHJvaWRcbiAqIH0pXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gKlxuICogIC4uLlxuICpcbiAqIHRoaXMuZmFpby5sb2FkQmlvbWV0cmljU2VjcmV0KHtcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIGFsd2F5cyBkaXNhYmxlZCBvbiBBbmRyb2lkXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEZpbmdlcnByaW50T3B0aW9uc1xuICogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmluZ2VycHJpbnRBSU8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbHVnaW5SZWY6ICdGaW5nZXJwcmludCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmluZ2VycHJpbnRBSU8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1VOS05PV05fRVJST1IgPSAtMTAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19VTkFWQUlMQUJMRSA9IC0xMDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0FVVEhFTlRJQ0FUSU9OX0ZBSUxFRCA9IC0xMDI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1NES19OT1RfU1VQUE9SVEVEID0gLTEwMztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfSEFSRFdBUkVfTk9UX1NVUFBPUlRFRCA9IC0xMDQ7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX1BFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAtMTA1O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19OT1RfRU5ST0xMRUQgPSAtMTA2O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19JTlRFUk5BTF9QTFVHSU5fRVJST1IgPSAtMTA3O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19ESVNNSVNTRUQgPSAtMTA4O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19QSU5fT1JfUEFUVEVSTl9ESVNNSVNTRUQgPSAtMTA5O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEJJT01FVFJJQ19TQ1JFRU5fR1VBUkRfVU5TRUNVUkVEID0gLTExMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfTE9DS0VEX09VVCA9IC0xMTE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgQklPTUVUUklDX0xPQ0tFRF9PVVRfUEVSTUFORU5UID0gLTExMjtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBCSU9NRVRSSUNfU0VDUkVUX05PVF9GT1VORCA9IC0xMTM7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGlzIGF2YWlsYWJsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIHJlZ2lzdGVyIHNlY3JldFxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50U2VjcmV0T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZSBhbmQgbG9hZCBzZWNyZXRcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvYWRCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZVxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    "./src/app/storage.service.ts":
    /*!************************************!*\
      !*** ./src/app/storage.service.ts ***!
      \************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
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

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
        } // set a key/value


        return _createClass(StorageService, [{
          key: "set",
          value: function set(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var result;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.storage.set(key, value);

                  case 3:
                    result = _context.sent;
                    console.log('set string in storage: ' + result);
                    return _context.abrupt("return", true);

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    console.log(_context.t0);
                    return _context.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this, [[0, 8]]);
            }));
          } // to get a key/value pair

        }, {
          key: "get",
          value: function get(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var result;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.storage.get(key);

                  case 3:
                    result = _context2.sent;
                    console.log('storageGET: ' + key + ': ' + result);

                    if (!(result != null)) {
                      _context2.next = 7;
                      break;
                    }

                    return _context2.abrupt("return", result);

                  case 7:
                    return _context2.abrupt("return", null);

                  case 10:
                    _context2.prev = 10;
                    _context2.t0 = _context2["catch"](0);
                    console.log(_context2.t0);
                    return _context2.abrupt("return", null);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this, [[0, 10]]);
            }));
          } // set a key/value object

        }, {
          key: "setObject",
          value: function setObject(key, object) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var result;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return this.storage.set(key, JSON.stringify(object));

                  case 3:
                    result = _context3.sent;
                    console.log('set Object in storage: ' + result);
                    return _context3.abrupt("return", true);

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](0);
                    console.log(_context3.t0);
                    return _context3.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 8]]);
            }));
          } // get a key/value object

        }, {
          key: "getObject",
          value: function getObject(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var result;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return this.storage.get(key);

                  case 3:
                    result = _context4.sent;

                    if (!(result != null)) {
                      _context4.next = 6;
                      break;
                    }

                    return _context4.abrupt("return", JSON.parse(result));

                  case 6:
                    return _context4.abrupt("return", null);

                  case 9:
                    _context4.prev = 9;
                    _context4.t0 = _context4["catch"](0);
                    console.log(_context4.t0);
                    return _context4.abrupt("return", null);

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this, [[0, 9]]);
            }));
          } // remove a single key value:

        }, {
          key: "remove",
          value: function remove(key) {
            this.storage.remove(key);
          } //  delete all data from your application:

        }, {
          key: "clear",
          value: function clear() {
            this.storage.clear();
          }
        }]);
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~src-app-pages-autenticacion-autenticacion-module~src-app-pages-home-home-module-es5.js.map