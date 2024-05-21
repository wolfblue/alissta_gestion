(function () {
  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@capacitor/camera/dist/esm/definitions.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
      \****************************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType */

    /***/
    function node_modulesCapacitorCameraDistEsmDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return CameraSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return CameraDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return CameraResultType;
      });

      var CameraSource;

      (function (CameraSource) {
        /**
         * Prompts the user to select either the photo album or take a photo.
         */
        CameraSource["Prompt"] = "PROMPT";
        /**
         * Take a new photo using the camera.
         */

        CameraSource["Camera"] = "CAMERA";
        /**
         * Pick an existing photo from the gallery or photo album.
         */

        CameraSource["Photos"] = "PHOTOS";
      })(CameraSource || (CameraSource = {}));

      var CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(CameraDirection || (CameraDirection = {}));

      var CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(CameraResultType || (CameraResultType = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/camera/dist/esm/index.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
      \**********************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */

    /***/
    function node_modulesCapacitorCameraDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/index.js");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "./node_modules/@capacitor/camera/dist/esm/definitions.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"];
      });

      var Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
        web: function web() {
          return Promise.all(
          /*! import() | web */
          [__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null,
          /*! ./web */
          "./node_modules/@capacitor/camera/dist/esm/web.js")).then(function (m) {
            return new m.CameraWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActiveD4bd4f74Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate94e770ccJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);
                _context.next = 10;
                return new Promise(function (resolve) {
                  return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                });

              case 10:
                return _context.abrupt("return", el);

              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, ev, direction, animation) {
          var router;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/commons/asunto-mensaje.ts":
    /*!*******************************************!*\
      !*** ./src/app/commons/asunto-mensaje.ts ***!
      \*******************************************/

    /*! exports provided: ASUNTO_MENSAJE_RENDICION_CUENTAS */

    /***/
    function srcAppCommonsAsuntoMensajeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ASUNTO_MENSAJE_RENDICION_CUENTAS", function () {
        return ASUNTO_MENSAJE_RENDICION_CUENTAS;
      });

      var ASUNTO_MENSAJE_RENDICION_CUENTAS = 'Rendición de Cuentas';
      /***/
    },

    /***/
    "./src/app/entities/autoevaluacion-covid19.ts":
    /*!****************************************************!*\
      !*** ./src/app/entities/autoevaluacion-covid19.ts ***!
      \****************************************************/

    /*! exports provided: Question, Poll */

    /***/
    function srcAppEntitiesAutoevaluacionCovid19Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Question", function () {
        return Question;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Poll", function () {
        return Poll;
      });
      /* harmony import */


      var _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./condiciones-salud */
      "./src/app/entities/condiciones-salud.ts");
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");
      /**
       * Pregunta de la encuesta para autoevaluación COVID-19.
       */


      var Question = /*#__PURE__*/function (_entity__WEBPACK_IMPO) {
        function Question(json) {
          var _this;

          _classCallCheck(this, Question);

          _this = _callSuper(this, Question, [json.PK_ID_AutoEvaluacionCovidPreguntas]);
          /**
           * Nombres de los campos de las preguntas. Esto concuerda con el nombre que recibe el servicio.
           */

          _this.FIELD_NAMES = {
            1: 'PreguntaUno',
            2: 'PreguntaDos',
            3: 'PreguntaTres',
            4: 'PreguntaCuatro',
            5: 'PreguntaCinco',
            6: 'PreguntaSeis',
            7: 'PreguntaSiete',
            8: 'PreguntaOcho',
            9: 'PreguntaNueve',
            10: 'PreguntaDiez',
            11: 'PreguntaOnce',
            12: 'PreguntaDoce',
            13: 'PreguntaTrece',
            14: 'PreguntaCatorce',
            15: 'PreguntaQuince'
          };
          _this.description = json.descripcionPregunta;
          _this.options = json.opciones;
          _this._name = _this.FIELD_NAMES[_this.id];
          return _this;
        }
        /**
         * Nombre del campo de la pregunta.
         */


        _inherits(Question, _entity__WEBPACK_IMPO);

        return _createClass(Question, [{
          key: "name",
          get: function get() {
            return this._name;
          }
          /**
           * Convierte el objeto en su representación lista para el consumo.
           */

        }, {
          key: "deserialize",
          value: function deserialize() {
            if (this.id === 3) {
              this.answer = [undefined, ''].indexOf(this.answer) > -1 ? 'No Aplica' : this.answer;
            }

            return _defineProperty({}, this.name, this.answer);
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]);
      /**
       * Cuestionario de autoevaluación COVID-19.
       */


      var Poll = /*#__PURE__*/function (_entity__WEBPACK_IMPO2) {
        function Poll() {
          _classCallCheck(this, Poll);

          return _callSuper(this, Poll, arguments);
        }

        _inherits(Poll, _entity__WEBPACK_IMPO2);

        return _createClass(Poll, [{
          key: "deserialize",
          value:
          /**
           * Convierte el objeto en su representación lista para el consumo.
           */
          function deserialize() {
            var ret = {};
            this.questions = this.questions ? this.questions : [];
            this.geolocation = this.geolocation ? this.geolocation : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["Geolocation"]();
            this.userData = this.userData ? this.userData : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["UserData"]();
            this.companyData = this.companyData ? this.companyData : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["CompanyData"]();
            this.questions.forEach(function (q) {
              ret = Object.assign(Object.assign({}, ret), q.deserialize());
            });
            ret = Object.assign(Object.assign({}, ret), this.geolocation.deserialize());
            ret = Object.assign(Object.assign({}, ret), this.userData.deserialize());
            ret = Object.assign(Object.assign({}, ret), this.companyData.deserialize());
            return ret;
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/chequeo-covid19.ts":
    /*!*********************************************!*\
      !*** ./src/app/entities/chequeo-covid19.ts ***!
      \*********************************************/

    /*! exports provided: Question, UserData, CompanyData, Poll */

    /***/
    function srcAppEntitiesChequeoCovid19Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Question", function () {
        return Question;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserData", function () {
        return UserData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyData", function () {
        return CompanyData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Poll", function () {
        return Poll;
      });
      /* harmony import */


      var _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./condiciones-salud */
      "./src/app/entities/condiciones-salud.ts");
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");
      /**
       * Pregunta de la encuesta para chequeo médico COVID-19.
       */


      var Question = /*#__PURE__*/function () {
        function Question(name, answer) {
          _classCallCheck(this, Question);

          /**
           * Nombres de los campos de las preguntas. Esto concuerda con el nombre que recibe el servicio.
           */
          this.FIELD_NAMES = {
            habitualWork: 'SectorLabolHabitual',
            specificWork: 'DetalleLabolHabitual',
            questionOne: 'PreguntaUno',
            questionTwo: 'PreguntaDos',
            questionThree: 'PreguntaTres',
            questionFour: 'PreguntaCuatro',
            questionFive: 'PreguntaCincoUno',
            questionSix: 'PreguntaCincoDos',
            questionSeven: 'PreguntaCincoTres',
            questionEight: 'PreguntaCincoCuatro',
            questionNine: 'PreguntaCincoCinco',
            clearQuestionFive: 'PreguntaCincoSeis',
            questionTen: 'PreguntaSeis',
            questionEleven: 'PreguntaSiete',
            questionTwelve: 'PreguntaOchoUno',
            questionThirdteen: 'PreguntaOchoDos',
            questionFourteen: 'PreguntaOchoTres',
            questionFifteen: 'PreguntaOchoCuatro',
            questionSixteen: 'PreguntaOchoCinco',
            questionSeventeen: 'PreguntaOchoSeis',
            questionEighteen: 'PreguntaOchoSiete',
            questionNineteen: 'PreguntaOchoOcho',
            clearQuestionEight: 'PreguntaOchoNueve',
            questionTwenty: 'PreguntaNueve',
            questionTwentyOne: 'PreguntaDiez'
          };
          this._name = name;
          this.answer = answer;
        }
        /**
         * Nombre del campo de la pregunta.
         */


        return _createClass(Question, [{
          key: "name",
          get: function get() {
            return this._name;
          }
          /**
           * Convierte el objeto en su representación lista para el consumo.
           */

        }, {
          key: "deserialize",
          value: function deserialize() {
            return _defineProperty({}, this.FIELD_NAMES[this.name], this.answer);
          }
        }]);
      }();
      /**
       * Datos del usuario que realiza el cuestionario de chequeo médico COVID-19.
       */


      var UserData = /*#__PURE__*/function (_condiciones_salud__W) {
        function UserData() {
          var _this2;

          _classCallCheck(this, UserData);

          _this2 = _callSuper(this, UserData, arguments);
          _this2.FIELD_NAMES = {
            firstName: 'PrimerNombreTrabajador',
            middleName: 'SegundoNombreTrabajador',
            surname: 'PrimerApellidoTrabajador',
            secondSurname: 'SegundoApellidoTrabajador',
            email: 'CorreoTrabajador',
            phone: 'NumeroTelefono',
            ip: 'IP',
            idType: 'TipoDocTrabajador',
            idNumber: 'NumeroDocumentoTrabajador',
            sex: 'SexoTrabajador',
            birthday: 'FechaNacimiento',
            idEPS: 'IdEPS',
            nameEPS: 'NombreEPS',
            address: 'DireccionTrabajador',
            bussinessID: 'ID_OCUPACION',
            businessName: 'NOMBRE_OCUPACION',
            idAdminArea: 'IDDepartamentoTrabajador',
            nameAdminArea: 'NombreDepartamentoTrabajador',
            idSubAdminArea: 'IDMunicipioTrabajador',
            nameSubAdminArea: 'NombreMunicipioTrabajador',
            agree: 'AceptaParticipacion'
          };
          return _this2;
        }

        _inherits(UserData, _condiciones_salud__W);

        return _createClass(UserData, [{
          key: "deserialize",
          value: function deserialize() {
            var ret = _get(_getPrototypeOf(UserData.prototype), "deserialize", this).call(this); // Campos no necesarios para este consumo


            delete ret[this.FIELD_NAMES.bussinessID];
            delete ret[this.FIELD_NAMES.businessName];
            return ret;
          }
        }]);
      }(_condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["UserData"]);
      /**
       * Datos de la compañía o contratante que emplea al usuario que realiza la encuesta.
       */


      var CompanyData = /*#__PURE__*/function (_condiciones_salud__W2) {
        function CompanyData() {
          var _this3;

          _classCallCheck(this, CompanyData);

          _this3 = _callSuper(this, CompanyData, arguments);
          _this3.FIELD_NAMES = {
            idType: 'tipoDocEmpresa',
            idNumber: 'NitEmpresa',
            businessName: 'RazonSocial',
            businessID: 'ActividadEconomicaPrincipal',
            businessDescription: 'DescripcionActivdadEconomicaPrincipal',
            idAdminArea: 'IDDepartamentoEmpresa',
            nameAdminArea: 'NombreDepartamentoEmpresa',
            idSubAdminArea: 'IDMunicipioEmpresa',
            nameSubAdminArea: 'NombreMunicipioEmpresa',
            address: 'DireccionEmpresa'
          };
          return _this3;
        }

        _inherits(CompanyData, _condiciones_salud__W2);

        return _createClass(CompanyData);
      }(_condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["CompanyData"]);
      /**
       * Cuestionario de chequeo médico COVID-19.
       */


      var Poll = /*#__PURE__*/function (_entity__WEBPACK_IMPO3) {
        function Poll() {
          _classCallCheck(this, Poll);

          return _callSuper(this, Poll, arguments);
        }

        _inherits(Poll, _entity__WEBPACK_IMPO3);

        return _createClass(Poll, [{
          key: "deserialize",
          value:
          /**
           * Convierte el objeto en su representación lista para el consumo.
           */
          function deserialize() {
            var ret = {};
            this.questions = this.questions ? this.questions : [];
            this.geolocation = this.geolocation ? this.geolocation : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["Geolocation"]();
            this.userData = this.userData ? this.userData : new UserData();
            this.companyData = this.companyData ? this.companyData : new CompanyData();
            this.questions.forEach(function (q) {
              ret = Object.assign(Object.assign({}, ret), q.deserialize());
            });
            ret = Object.assign(Object.assign({}, ret), this.geolocation.deserialize());
            ret = Object.assign(Object.assign({}, ret), this.userData.deserialize());
            ret = Object.assign(Object.assign({}, ret), this.companyData.deserialize());
            return ret;
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/condiciones-salud.ts":
    /*!***********************************************!*\
      !*** ./src/app/entities/condiciones-salud.ts ***!
      \***********************************************/

    /*! exports provided: Geolocation, UserData, CompanyData */

    /***/
    function srcAppEntitiesCondicionesSaludTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return Geolocation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserData", function () {
        return UserData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyData", function () {
        return CompanyData;
      });
      /**
       * Parámetros de ubicación física.
       */


      var Geolocation = /*#__PURE__*/function () {
        function Geolocation() {
          _classCallCheck(this, Geolocation);

          /**
           * Nombres de los campos de las preguntas. Esto concuerda con el nombre que recibe el servicio.
           */
          this.FIELD_NAMES = {
            latitude: 'Latitud',
            longitude: 'Longitud',
            address: 'Direccion'
          };
        }
        /**
         * Convierte el objeto en su representación lista para el consumo.
         */


        return _createClass(Geolocation, [{
          key: "deserialize",
          value: function deserialize() {
            return _defineProperty(_defineProperty(_defineProperty({}, this.FIELD_NAMES.latitude, this.latitude), this.FIELD_NAMES.longitude, this.longitude), this.FIELD_NAMES.address, this.address);
          }
        }]);
      }();
      /**
       * Datos del usuario que realiza el cuestionario de autoevaluación COVID-19.
       */


      var UserData = /*#__PURE__*/function () {
        function UserData() {
          _classCallCheck(this, UserData);

          /**
           * Nombres de los campos de las preguntas. Esto concuerda con el nombre que recibe el servicio.
           */
          this.FIELD_NAMES = {
            firstName: 'NombreTrabajador',
            middleName: 'SegundoNombreTrabajador',
            surname: 'ApellidosUsuario',
            secondSurname: 'SegundoApellidoTrabajador',
            email: 'CorreoTrabajador',
            phone: 'telefonoTrabajador',
            ip: 'Direccion_Ip',
            idType: 'TipoDocumentoTrabajador',
            idNumber: 'NumeroDocumentoTrabajador',
            sex: 'SEXO',
            birthday: 'FECHA_NACIMIENTO',
            idEPS: 'ID_EPS',
            nameEPS: 'NOMBRE_EPS',
            address: 'DIRECCION_PERSONA',
            bussinessID: 'ID_OCUPACION',
            businessName: 'NOMBRE_OCUPACION',
            idAdminArea: 'ID_DEPARTAMENTO',
            nameAdminArea: 'NOMBRE_DEPARTAMENTO',
            idSubAdminArea: 'ID_MUNICIPIO',
            nameSubAdminArea: 'NOMBRE_MUNICIPIO',
            agree: 'AceptaParticipacion'
          };
        }
        /**
         * Convierte el objeto en su representación lista para el consumo.
         */


        return _createClass(UserData, [{
          key: "deserialize",
          value: function deserialize() {
            var _ref6;

            return _ref6 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref6, this.FIELD_NAMES.firstName, this.firstName), this.FIELD_NAMES.middleName, this.middleName), this.FIELD_NAMES.surname, this.surname), this.FIELD_NAMES.secondSurname, this.secondSurname), this.FIELD_NAMES.email, this.email), this.FIELD_NAMES.phone, this.phone), this.FIELD_NAMES.ip, this.ip), this.FIELD_NAMES.idType, this.idType), this.FIELD_NAMES.idNumber, this.idNumber), this.FIELD_NAMES.sex, this.sex), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref6, this.FIELD_NAMES.birthday, this.birthday), this.FIELD_NAMES.idEPS, this.idEPS), this.FIELD_NAMES.nameEPS, this.nameEPS), this.FIELD_NAMES.address, this.address), this.FIELD_NAMES.bussinessID, this.bussinessID), this.FIELD_NAMES.businessName, this.businessName), this.FIELD_NAMES.idAdminArea, this.idAdminArea), this.FIELD_NAMES.nameAdminArea, this.nameAdminArea), this.FIELD_NAMES.idSubAdminArea, this.idSubAdminArea), this.FIELD_NAMES.nameSubAdminArea, this.nameSubAdminArea), _defineProperty(_ref6, this.FIELD_NAMES.agree, this.agree);
          }
        }]);
      }();
      /**
       * Datos de la compañía o contratante que emplea al usuario que realiza la encuesta.
       */


      var CompanyData = /*#__PURE__*/function () {
        function CompanyData() {
          _classCallCheck(this, CompanyData);

          /**
           * Nombres de los campos de las preguntas. Esto concuerda con el nombre que recibe el servicio.
           */
          this.FIELD_NAMES = {
            idType: 'tipoDocEmpresa',
            idNumber: 'NitEmpresa',
            businessName: 'RazonSocial',
            businessID: 'ActividadEconomicaPrincipal',
            businessDescription: 'DescripcionActivdadEconomicaPrincipal',
            idAdminArea: 'IDDepartamentoEmpresa',
            nameAdminArea: 'NombreDepartamentoEmpresa',
            idSubAdminArea: 'IDMunicipioEmpresa',
            nameSubAdminArea: 'NombreMunicipioEmpresa',
            address: 'DireccionEmpresa'
          };
        }
        /**
         * Convierte el objeto en su representación lista para el consumo.
         */


        return _createClass(CompanyData, [{
          key: "deserialize",
          value: function deserialize() {
            return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, this.FIELD_NAMES.idType, this.idType), this.FIELD_NAMES.idNumber, this.idNumber), this.FIELD_NAMES.businessName, this.businessName), this.FIELD_NAMES.businessID, this.businessID), this.FIELD_NAMES.businessDescription, this.businessDescription), this.FIELD_NAMES.idAdminArea, this.idAdminArea), this.FIELD_NAMES.nameAdminArea, this.nameAdminArea), this.FIELD_NAMES.idSubAdminArea, this.idSubAdminArea), this.FIELD_NAMES.nameSubAdminArea, this.nameSubAdminArea), this.FIELD_NAMES.address, this.address);
          }
        }]);
      }();
      /***/

    },

    /***/
    "./src/app/entities/proceso.ts":
    /*!*************************************!*\
      !*** ./src/app/entities/proceso.ts ***!
      \*************************************/

    /*! exports provided: Proceso */

    /***/
    function srcAppEntitiesProcesoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Proceso", function () {
        return Proceso;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Proceso = /*#__PURE__*/function (_entity__WEBPACK_IMPO4) {
        function Proceso(json) {
          var _this4;

          _classCallCheck(this, Proceso);

          _this4 = _callSuper(this, Proceso, [json.Id_Proceso]);
          _this4._nombre = json.Descripcion;
          return _this4;
        }

        _inherits(Proceso, _entity__WEBPACK_IMPO4);

        return _createClass(Proceso, [{
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
              return new Proceso(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/sede.ts":
    /*!**********************************!*\
      !*** ./src/app/entities/sede.ts ***!
      \**********************************/

    /*! exports provided: Sede */

    /***/
    function srcAppEntitiesSedeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sede", function () {
        return Sede;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var Sede = /*#__PURE__*/function (_entity__WEBPACK_IMPO5) {
        function Sede(json) {
          var _this5;

          _classCallCheck(this, Sede);

          _this5 = _callSuper(this, Sede, [json.IdSede]);
          _this5._nombre = json.NombreSede;
          return _this5;
        }

        _inherits(Sede, _entity__WEBPACK_IMPO5);

        return _createClass(Sede, [{
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
              return new Sede(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/entities/tema-asesoria.ts":
    /*!*******************************************!*\
      !*** ./src/app/entities/tema-asesoria.ts ***!
      \*******************************************/

    /*! exports provided: TemaAsesoria */

    /***/
    function srcAppEntitiesTemaAsesoriaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemaAsesoria", function () {
        return TemaAsesoria;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "./src/app/entities/entity.ts");

      var TemaAsesoria = /*#__PURE__*/function (_entity__WEBPACK_IMPO6) {
        function TemaAsesoria(json) {
          var _this6;

          _classCallCheck(this, TemaAsesoria);

          _this6 = _callSuper(this, TemaAsesoria, [json.PK_ID_EVTemasAgendamiento]);
          _this6._nombre = json.strDescripcionTemaEvento;
          _this6._observacion = json.strObservacionesTemaEvento;
          return _this6;
        }

        _inherits(TemaAsesoria, _entity__WEBPACK_IMPO6);

        return _createClass(TemaAsesoria, [{
          key: "nombre",
          get: function get() {
            return this._nombre;
          },
          set: function set(nombre) {
            this._nombre = nombre;
          }
        }, {
          key: "observacion",
          get: function get() {
            return this._observacion;
          },
          set: function set(observacion) {
            this._observacion = observacion;
          }
        }], [{
          key: "parse",
          value: function parse(json) {
            return json.map(function (item) {
              return new TemaAsesoria(item);
            });
          }
        }]);
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "./src/app/interfaces/edinfo-auditoria-app.ts":
    /*!****************************************************!*\
      !*** ./src/app/interfaces/edinfo-auditoria-app.ts ***!
      \****************************************************/

    /*! exports provided: EDInfoAuditoriaAPP */

    /***/
    function srcAppInterfacesEdinfoAuditoriaAppTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EDInfoAuditoriaAPP", function () {
        return EDInfoAuditoriaAPP;
      });

      var EDInfoAuditoriaAPP = /*#__PURE__*/_createClass(function EDInfoAuditoriaAPP() {
        _classCallCheck(this, EDInfoAuditoriaAPP);

        this.strIdentificacionUsuario = '';
        this.strNombreUsuario = '';
        this.strNombreEmpresa = '';
        this.strTipoDocEmpresa = '';
        this.strDocumentoEmpresa = '';
        this.strUUID = '';
        this.strLatitud = '';
        this.strLongitud = '';
      });
      /***/

    },

    /***/
    "./src/app/services/SST/menu-sstservice.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/services/SST/menu-sstservice.service.ts ***!
      \*********************************************************/

    /*! exports provided: MenuSSTService */

    /***/
    function srcAppServicesSSTMenuSstserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuSSTService", function () {
        return MenuSSTService;
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

      var MenuSSTService = /*#__PURE__*/function () {
        function MenuSSTService() {
          _classCallCheck(this, MenuSSTService);

          this.menuSSTSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.menuPlanEmergencia = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.menuSST = this.menuSSTSource.asObservable();
          this.menuPlan = this.menuPlanEmergencia.asObservable();
        }

        return _createClass(MenuSSTService, [{
          key: "changeMenuSST",
          value: function changeMenuSST(menuSST) {
            this.menuSSTSource.next(menuSST);
          }
        }, {
          key: "changeMenuPlan",
          value: function changeMenuPlan(menuPlan) {
            this.menuPlanEmergencia.next(menuPlan);
          }
        }]);
      }();

      MenuSSTService.ctorParameters = function () {
        return [];
      };

      MenuSSTService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MenuSSTService);
      /***/
    },

    /***/
    "./src/app/services/asesoria-sst.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/asesoria-sst.service.ts ***!
      \**************************************************/

    /*! exports provided: AsesoriaSstService */

    /***/
    function srcAppServicesAsesoriaSstServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsesoriaSstService", function () {
        return AsesoriaSstService;
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

      var AsesoriaSstService = /*#__PURE__*/function () {
        function AsesoriaSstService(http, context) {
          _classCallCheck(this, AsesoriaSstService);

          this.http = http;
          this.context = context;
        }

        return _createClass(AsesoriaSstService, [{
          key: "getListaMaestros",
          value: function getListaMaestros() {
            var url = "".concat(this.context.getEnvUrl().call(null, 'participacion'), "/EnVivoServicio/listar-Maestros-EnVivo");
            return this.http.get(url);
          }
        }, {
          key: "getExpertosTecnicos",
          value: function getExpertosTecnicos(idTema) {
            var url = "".concat(this.context.getEnvUrl().call(null, 'participacion'), "/EnVivoServicio/listar-ExpertoTecnico?Fk_Id_Tema=").concat(idTema);
            return this.http.get(url);
          }
        }, {
          key: "getAgendaDisponible",
          value: function getAgendaDisponible(intFk_Id_Tema, intIDUsuarioExpertoTecnico, strFechaConsulta, strTipoAgenda, strToken) {
            var url = "".concat(this.context.getEnvUrl().call(null, 'participacion'), "/EnVivoServicio/listar-AgendaExpertoTecnicoAPP");
            var data = {
              strTipoAgenda: strTipoAgenda,
              strFechaConsulta: strFechaConsulta,
              intIDUsuarioExpertoTecnico: intIDUsuarioExpertoTecnico,
              strToken: strToken,
              intFk_Id_Tema: intFk_Id_Tema
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }, {
          key: "agendar",
          value: function agendar(data) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/guardar-CitaUsuaroAPP';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }, {
          key: "reagendar",
          value: function reagendar(data) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/reagendar-CitaUsuaroAPP';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }, {
          key: "consultar",
          value: function consultar(strFechaInicioBusqueda, strFechaFinalBusqueda, strNumeroDocumentoUsuario, strDocumentoEmpresa, intFk_ID_Tema_Agendamiento) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/listar-HistorialAgemdamiento';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            var data = {
              strFechaInicioBusqueda: strFechaInicioBusqueda,
              strFechaFinalBusqueda: strFechaFinalBusqueda,
              strNumeroDocumentoUsuario: strNumeroDocumentoUsuario,
              strDocumentoEmpresa: strDocumentoEmpresa,
              intFk_ID_Tema_Agendamiento: intFk_ID_Tema_Agendamiento,
              intNumeroPagina: "1",
              intPageSize: "10"
            };
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }, {
          key: "cancelar",
          value: function cancelar(strToken, strIP) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/cancelar-cita-APP';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            return this.http.post(url, {
              strToken: strToken,
              strIP: strIP
            }, {
              headers: headers
            });
          }
        }, {
          key: "recordarPIN",
          value: function recordarPIN(strToken) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/recordar-PIN-APP';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            return this.http.post(url, {
              strToken: strToken
            }, {
              headers: headers
            });
          }
        }, {
          key: "reconfirmar",
          value: function reconfirmar(strToken) {
            var url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/reconfirmar-cita-APP';
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
            return this.http.post(url, {
              strToken: strToken
            }, {
              headers: headers
            });
          }
        }]);
      }();

      AsesoriaSstService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"]
        }];
      };

      AsesoriaSstService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AsesoriaSstService);
      /***/
    },

    /***/
    "./src/app/services/autoevaluacion-covid19.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/services/autoevaluacion-covid19.service.ts ***!
      \************************************************************/

    /*! exports provided: AutoevaluacionCOVID19Service */

    /***/
    function srcAppServicesAutoevaluacionCovid19ServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoevaluacionCOVID19Service", function () {
        return AutoevaluacionCOVID19Service;
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
      /**
       * Proveedor de servicios para el módulo de autoevaluación COVID-19.
       */


      var AutoevaluacionCOVID19Service = /*#__PURE__*/function () {
        function AutoevaluacionCOVID19Service(http, context) {
          _classCallCheck(this, AutoevaluacionCOVID19Service);

          this.http = http;
          this.context = context;
          /**
           * URI del servicio para obtener las preguntas del cuestionario de autoevaluación COVID-19.
           */

          this.QUESTIONS_URI = '/Covid/preguntas-covid';
          /**
           * URI del servicio para guardar la autoevaluación COVID-19.
           */

          this.POLL_URI = '/Covid/guardar-covid-app';
          /**
           * URI del servicio para obtener correo electrónico y número de teléfono actualizado del usuario.
           */

          this.UPDATED_DATA_URI = '/Covid/validar-correo-covid-app';
        }
        /**
         * Obtiene las preguntas de la encuesta de autoevaluación COVID-19.
         */


        return _createClass(AutoevaluacionCOVID19Service, [{
          key: "getQuestions",
          value: function getQuestions() {
            var domain = this.context.getEnvUrl().call(null, 'covid');
            var url = "".concat(domain).concat(this.QUESTIONS_URI);
            return this.http.get(url);
          }
          /**
           * Envía la encuesta al servicio para su registro.
           *
           * @param poll Parámetros de la encuesta.
           */

        }, {
          key: "submitPoll",
          value: function submitPoll(poll) {
            var domain = this.context.getEnvUrl().call(null, 'covid');
            var url = "".concat(domain).concat(this.POLL_URI);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            });
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              fromObject: poll
            });
            return this.http.post(url, body, {
              headers: headers
            });
          }
          /**
           * Obtiene correo electrónico y número de teléfono actualizado del usuario.
           *
           * @param data Datos de usuario.
           */

        }, {
          key: "getUpdatedUserData",
          value: function getUpdatedUserData(data) {
            var domain = this.context.getEnvUrl().call(null, 'covid');
            var url = "".concat(domain).concat(this.UPDATED_DATA_URI);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            });
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              fromObject: data
            });
            return this.http.post(url, body, {
              headers: headers
            });
          }
        }]);
      }();

      AutoevaluacionCOVID19Service.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"]
        }];
      };

      AutoevaluacionCOVID19Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AutoevaluacionCOVID19Service);
      /***/
    },

    /***/
    "./src/app/services/chequeo-covid19.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/chequeo-covid19.service.ts ***!
      \*****************************************************/

    /*! exports provided: ChequeosCOVID19Service */

    /***/
    function srcAppServicesChequeoCovid19ServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChequeosCOVID19Service", function () {
        return ChequeosCOVID19Service;
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
      /**
       * Proveedor de servicios para el módulo de encuesta de chequeos médicos.
       */


      var ChequeosCOVID19Service = /*#__PURE__*/function () {
        function ChequeosCOVID19Service(http, context) {
          _classCallCheck(this, ChequeosCOVID19Service);

          this.http = http;
          this.context = context;
          /**
           * URI del servicio para guardar las encuesta de chequeos médicos.
           */

          this.POLL_URI = '/Covid/guardar-chequeosMedicos-app';
          /**
           * URI del servicio para verificar última fecha de encuesta de chequeo médico.
           */

          this.CHECK_POLL_URI = '/Covid/validar-ventana-chequeo-medico';
        }
        /**
         * Envía la encuesta al servicio para su registro.
         *
         * @param poll Parámetros de la encuesta.
         */


        return _createClass(ChequeosCOVID19Service, [{
          key: "submitPoll",
          value: function submitPoll(poll) {
            var domain = this.context.getEnvUrl().call(null, 'covid');
            var url = "".concat(domain).concat(this.POLL_URI);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            });
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              fromObject: poll
            });
            return this.http.post(url, body, {
              headers: headers
            });
          }
          /**
           * Comprueba la fecha del último chequeo médico.
           *
           * @param data Datos de la petición.
           */

        }, {
          key: "checkPoll",
          value: function checkPoll(data) {
            var domain = this.context.getEnvUrl().call(null, 'covid');
            var url = "".concat(domain).concat(this.CHECK_POLL_URI);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded'
            });
            var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              fromObject: data
            });
            return this.http.post(url, body, {
              headers: headers
            });
          }
        }]);
      }();

      ChequeosCOVID19Service.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"]
        }];
      };

      ChequeosCOVID19Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ChequeosCOVID19Service);
      /***/
    },

    /***/
    "./src/app/services/empresa.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/empresa.service.ts ***!
      \*********************************************/

    /*! exports provided: EmpresaService */

    /***/
    function srcAppServicesEmpresaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmpresaService", function () {
        return EmpresaService;
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

      var EmpresaService = /*#__PURE__*/function () {
        function EmpresaService(http, context) {
          _classCallCheck(this, EmpresaService);

          this.http = http;
          this.context = context;
        }

        return _createClass(EmpresaService, [{
          key: "getSedes",
          value: function getSedes(nit) {
            var url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/empresa-sedesnit?NIT=' + nit;
            return this.http.get(url);
          }
        }, {
          key: "getProcesos",
          value: function getProcesos(nit) {
            var url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/empresa-procesos?NIT=' + nit;
            return this.http.get(url);
          }
        }, {
          key: "getNombreLogo",
          value: function getNombreLogo(nit) {
            var url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/Obtener-Logo-Empresa?nitempresa=' + nit;
            console.log('url: ' + url);
            return this.http.get(url);
          }
        }, {
          key: "getUrlLogo",
          value: function getUrlLogo(nombre) {
            return this.context.getAlisstaWeb() + "/Logo_Empresa/" + nombre;
          }
        }]);
      }();

      EmpresaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"]
        }];
      };

      EmpresaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], EmpresaService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map