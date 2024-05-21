(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acerca-de-acerca-de-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca-de/acerca-de.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca-de/acerca-de.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAcercaDeAcercaDePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-slides>\n    <ion-slide>\n      <div class=\"contenedor\">\n        <img src=\"assets/img/view-acerca-de.jpg\" />\n        <div class=\"texto-encima\">\n          <div class=\"centrado\">\n            <h5>Versión {{ version }}</h5>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button size=\"small\" class=\"colorFabButton\" (click)=\"skip()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/acerca-de/acerca-de-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/acerca-de/acerca-de-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AcercaDePageRoutingModule */

    /***/
    function srcAppPagesAcercaDeAcercaDeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AcercaDePageRoutingModule", function () {
        return AcercaDePageRoutingModule;
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


      var _acerca_de_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./acerca-de.page */
      "./src/app/pages/acerca-de/acerca-de.page.ts");

      var routes = [{
        path: '',
        component: _acerca_de_page__WEBPACK_IMPORTED_MODULE_3__["AcercaDePage"]
      }];

      var AcercaDePageRoutingModule = /*#__PURE__*/_createClass(function AcercaDePageRoutingModule() {
        _classCallCheck(this, AcercaDePageRoutingModule);
      });

      AcercaDePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AcercaDePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/acerca-de/acerca-de.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/acerca-de/acerca-de.module.ts ***!
      \*****************************************************/

    /*! exports provided: AcercaDePageModule */

    /***/
    function srcAppPagesAcercaDeAcercaDeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AcercaDePageModule", function () {
        return AcercaDePageModule;
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


      var _acerca_de_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./acerca-de-routing.module */
      "./src/app/pages/acerca-de/acerca-de-routing.module.ts");
      /* harmony import */


      var _acerca_de_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./acerca-de.page */
      "./src/app/pages/acerca-de/acerca-de.page.ts");

      var AcercaDePageModule = /*#__PURE__*/_createClass(function AcercaDePageModule() {
        _classCallCheck(this, AcercaDePageModule);
      });

      AcercaDePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _acerca_de_routing_module__WEBPACK_IMPORTED_MODULE_3__["AcercaDePageRoutingModule"]],
        declarations: [_acerca_de_page__WEBPACK_IMPORTED_MODULE_4__["AcercaDePage"]]
      })], AcercaDePageModule);
      /***/
    },

    /***/
    "./src/app/pages/acerca-de/acerca-de.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/acerca-de/acerca-de.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAcercaDeAcercaDePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  height: 100% !important;\n}\nion-slides .contenedor {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  height: 100% !important;\n}\nion-slides .texto-encima {\n  position: absolute;\n  top: 40%;\n  left: 0;\n  width: 100%;\n}\nion-slides .centrado {\n  position: relative;\n  margin-top: 40px;\n}\nion-slides img {\n  height: 100% !important;\n}\n.colorFabButton {\n  --background: #ff7500 !important;\n  --background-activated: #ff7500 !important;\n  --color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNlcmNhLWRlL2FjZXJjYS1kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBREo7QUFJRTtFQUNFLHVCQUFBO0FBRko7QUFNQTtFQUNFLGdDQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNlcmNhLWRlL2FjZXJjYS1kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgJiAuY29udGVuZWRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmIC50ZXh0by1lbmNpbWEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJiAuY2VudHJhZG8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY29sb3JGYWJCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZjc1MDAgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmNzUwMCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/acerca-de/acerca-de.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/acerca-de/acerca-de.page.ts ***!
      \***************************************************/

    /*! exports provided: AcercaDePage */

    /***/
    function srcAppPagesAcercaDeAcercaDePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AcercaDePage", function () {
        return AcercaDePage;
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


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");

      var AcercaDePage = /*#__PURE__*/function () {
        function AcercaDePage(router, appVersion) {
          _classCallCheck(this, AcercaDePage);

          this.router = router;
          this.appVersion = appVersion;
        }

        return _createClass(AcercaDePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.appVersion.getVersionNumber().then(function (version) {
              return _this.version = version;
            });
          }
        }, {
          key: "skip",
          value: function skip() {
            this.router.navigateByUrl('settings');
          }
        }]);
      }();

      AcercaDePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]
        }];
      };

      AcercaDePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acerca-de',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./acerca-de.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acerca-de/acerca-de.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./acerca-de.page.scss */
        "./src/app/pages/acerca-de/acerca-de.page.scss"))["default"]]
      })], AcercaDePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=acerca-de-acerca-de-module-es5.js.map