(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@capacitor/camera/dist/esm/definitions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
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
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/camera/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "./node_modules/@capacitor/camera/dist/esm/definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"]; });


const Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
    web: () => Promise.all(/*! import() | web */[__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null, /*! ./web */ "./node_modules/@capacitor/camera/dist/esm/web.js")).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./src/app/commons/asunto-mensaje.ts":
/*!*******************************************!*\
  !*** ./src/app/commons/asunto-mensaje.ts ***!
  \*******************************************/
/*! exports provided: ASUNTO_MENSAJE_RENDICION_CUENTAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASUNTO_MENSAJE_RENDICION_CUENTAS", function() { return ASUNTO_MENSAJE_RENDICION_CUENTAS; });
const ASUNTO_MENSAJE_RENDICION_CUENTAS = 'Rendición de Cuentas';


/***/ }),

/***/ "./src/app/entities/autoevaluacion-covid19.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/autoevaluacion-covid19.ts ***!
  \****************************************************/
/*! exports provided: Question, Poll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poll", function() { return Poll; });
/* harmony import */ var _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./condiciones-salud */ "./src/app/entities/condiciones-salud.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");


/**
 * Pregunta de la encuesta para autoevaluación COVID-19.
 */
class Question extends _entity__WEBPACK_IMPORTED_MODULE_1__["Entity"] {
    constructor(json) {
        super(json.PK_ID_AutoEvaluacionCovidPreguntas);
        /**
         * Nombres de los campos de las preguntas. Esto concuerda con el nombre que recibe el servicio.
         */
        this.FIELD_NAMES = {
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
            15: 'PreguntaQuince',
        };
        this.description = json.descripcionPregunta;
        this.options = json.opciones;
        this._name = this.FIELD_NAMES[this.id];
    }
    /**
     * Nombre del campo de la pregunta.
     */
    get name() {
        return this._name;
    }
    /**
     * Convierte el objeto en su representación lista para el consumo.
     */
    deserialize() {
        if (this.id === 3) {
            this.answer = [undefined, ''].indexOf(this.answer) > -1 ? 'No Aplica' : this.answer;
        }
        return { [this.name]: this.answer };
    }
}
/**
 * Cuestionario de autoevaluación COVID-19.
 */
class Poll extends _entity__WEBPACK_IMPORTED_MODULE_1__["Entity"] {
    /**
     * Convierte el objeto en su representación lista para el consumo.
     */
    deserialize() {
        let ret = {};
        this.questions = this.questions ? this.questions : [];
        this.geolocation = this.geolocation ? this.geolocation : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["Geolocation"]();
        this.userData = this.userData ? this.userData : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["UserData"]();
        this.companyData = this.companyData ? this.companyData : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["CompanyData"]();
        this.questions.forEach(q => {
            ret = Object.assign(Object.assign({}, ret), q.deserialize());
        });
        ret = Object.assign(Object.assign({}, ret), this.geolocation.deserialize());
        ret = Object.assign(Object.assign({}, ret), this.userData.deserialize());
        ret = Object.assign(Object.assign({}, ret), this.companyData.deserialize());
        return ret;
    }
}


/***/ }),

/***/ "./src/app/entities/chequeo-covid19.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/chequeo-covid19.ts ***!
  \*********************************************/
/*! exports provided: Question, UserData, CompanyData, Poll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyData", function() { return CompanyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poll", function() { return Poll; });
/* harmony import */ var _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./condiciones-salud */ "./src/app/entities/condiciones-salud.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");


/**
 * Pregunta de la encuesta para chequeo médico COVID-19.
 */
class Question {
    constructor(name, answer) {
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
            questionTwentyOne: 'PreguntaDiez',
        };
        this._name = name;
        this.answer = answer;
    }
    /**
     * Nombre del campo de la pregunta.
     */
    get name() {
        return this._name;
    }
    /**
     * Convierte el objeto en su representación lista para el consumo.
     */
    deserialize() {
        return { [this.FIELD_NAMES[this.name]]: this.answer };
    }
}
/**
 * Datos del usuario que realiza el cuestionario de chequeo médico COVID-19.
 */
class UserData extends _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["UserData"] {
    constructor() {
        super(...arguments);
        this.FIELD_NAMES = {
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
            agree: 'AceptaParticipacion',
        };
    }
    deserialize() {
        const ret = super.deserialize();
        // Campos no necesarios para este consumo
        delete ret[this.FIELD_NAMES.bussinessID];
        delete ret[this.FIELD_NAMES.businessName];
        return ret;
    }
}
/**
 * Datos de la compañía o contratante que emplea al usuario que realiza la encuesta.
 */
class CompanyData extends _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["CompanyData"] {
    constructor() {
        super(...arguments);
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
            address: 'DireccionEmpresa',
        };
    }
}
/**
 * Cuestionario de chequeo médico COVID-19.
 */
class Poll extends _entity__WEBPACK_IMPORTED_MODULE_1__["Entity"] {
    /**
     * Convierte el objeto en su representación lista para el consumo.
     */
    deserialize() {
        let ret = {};
        this.questions = this.questions ? this.questions : [];
        this.geolocation = this.geolocation ? this.geolocation : new _condiciones_salud__WEBPACK_IMPORTED_MODULE_0__["Geolocation"]();
        this.userData = this.userData ? this.userData : new UserData();
        this.companyData = this.companyData ? this.companyData : new CompanyData();
        this.questions.forEach(q => {
            ret = Object.assign(Object.assign({}, ret), q.deserialize());
        });
        ret = Object.assign(Object.assign({}, ret), this.geolocation.deserialize());
        ret = Object.assign(Object.assign({}, ret), this.userData.deserialize());
        ret = Object.assign(Object.assign({}, ret), this.companyData.deserialize());
        return ret;
    }
}


/***/ }),

/***/ "./src/app/entities/condiciones-salud.ts":
/*!***********************************************!*\
  !*** ./src/app/entities/condiciones-salud.ts ***!
  \***********************************************/
/*! exports provided: Geolocation, UserData, CompanyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyData", function() { return CompanyData; });
/**
 * Parámetros de ubicación física.
 */
class Geolocation {
    constructor() {
        /**
         * Nombres de los campos de las preguntas. Esto concuerda con el nombre que recibe el servicio.
         */
        this.FIELD_NAMES = {
            latitude: 'Latitud',
            longitude: 'Longitud',
            address: 'Direccion',
        };
    }
    /**
     * Convierte el objeto en su representación lista para el consumo.
     */
    deserialize() {
        return {
            [this.FIELD_NAMES.latitude]: this.latitude,
            [this.FIELD_NAMES.longitude]: this.longitude,
            [this.FIELD_NAMES.address]: this.address,
        };
    }
}
/**
 * Datos del usuario que realiza el cuestionario de autoevaluación COVID-19.
 */
class UserData {
    constructor() {
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
            agree: 'AceptaParticipacion',
        };
    }
    /**
     * Convierte el objeto en su representación lista para el consumo.
     */
    deserialize() {
        return {
            [this.FIELD_NAMES.firstName]: this.firstName,
            [this.FIELD_NAMES.middleName]: this.middleName,
            [this.FIELD_NAMES.surname]: this.surname,
            [this.FIELD_NAMES.secondSurname]: this.secondSurname,
            [this.FIELD_NAMES.email]: this.email,
            [this.FIELD_NAMES.phone]: this.phone,
            [this.FIELD_NAMES.ip]: this.ip,
            [this.FIELD_NAMES.idType]: this.idType,
            [this.FIELD_NAMES.idNumber]: this.idNumber,
            [this.FIELD_NAMES.sex]: this.sex,
            [this.FIELD_NAMES.birthday]: this.birthday,
            [this.FIELD_NAMES.idEPS]: this.idEPS,
            [this.FIELD_NAMES.nameEPS]: this.nameEPS,
            [this.FIELD_NAMES.address]: this.address,
            [this.FIELD_NAMES.bussinessID]: this.bussinessID,
            [this.FIELD_NAMES.businessName]: this.businessName,
            [this.FIELD_NAMES.idAdminArea]: this.idAdminArea,
            [this.FIELD_NAMES.nameAdminArea]: this.nameAdminArea,
            [this.FIELD_NAMES.idSubAdminArea]: this.idSubAdminArea,
            [this.FIELD_NAMES.nameSubAdminArea]: this.nameSubAdminArea,
            [this.FIELD_NAMES.agree]: this.agree,
        };
    }
}
/**
 * Datos de la compañía o contratante que emplea al usuario que realiza la encuesta.
 */
class CompanyData {
    constructor() {
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
            address: 'DireccionEmpresa',
        };
    }
    /**
     * Convierte el objeto en su representación lista para el consumo.
     */
    deserialize() {
        return {
            [this.FIELD_NAMES.idType]: this.idType,
            [this.FIELD_NAMES.idNumber]: this.idNumber,
            [this.FIELD_NAMES.businessName]: this.businessName,
            [this.FIELD_NAMES.businessID]: this.businessID,
            [this.FIELD_NAMES.businessDescription]: this.businessDescription,
            [this.FIELD_NAMES.idAdminArea]: this.idAdminArea,
            [this.FIELD_NAMES.nameAdminArea]: this.nameAdminArea,
            [this.FIELD_NAMES.idSubAdminArea]: this.idSubAdminArea,
            [this.FIELD_NAMES.nameSubAdminArea]: this.nameSubAdminArea,
            [this.FIELD_NAMES.address]: this.address,
        };
    }
}


/***/ }),

/***/ "./src/app/entities/proceso.ts":
/*!*************************************!*\
  !*** ./src/app/entities/proceso.ts ***!
  \*************************************/
/*! exports provided: Proceso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proceso", function() { return Proceso; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Proceso extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.Id_Proceso);
        this._nombre = json.Descripcion;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new Proceso(item));
    }
}


/***/ }),

/***/ "./src/app/entities/sede.ts":
/*!**********************************!*\
  !*** ./src/app/entities/sede.ts ***!
  \**********************************/
/*! exports provided: Sede */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sede", function() { return Sede; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class Sede extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.IdSede);
        this._nombre = json.NombreSede;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static parse(json) {
        return json.map((item) => new Sede(item));
    }
}


/***/ }),

/***/ "./src/app/entities/tema-asesoria.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/tema-asesoria.ts ***!
  \*******************************************/
/*! exports provided: TemaAsesoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaAsesoria", function() { return TemaAsesoria; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entities/entity.ts");

class TemaAsesoria extends _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor(json) {
        super(json.PK_ID_EVTemasAgendamiento);
        this._nombre = json.strDescripcionTemaEvento;
        this._observacion = json.strObservacionesTemaEvento;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get observacion() {
        return this._observacion;
    }
    set observacion(observacion) {
        this._observacion = observacion;
    }
    static parse(json) {
        return json.map((item) => new TemaAsesoria(item));
    }
}


/***/ }),

/***/ "./src/app/interfaces/edinfo-auditoria-app.ts":
/*!****************************************************!*\
  !*** ./src/app/interfaces/edinfo-auditoria-app.ts ***!
  \****************************************************/
/*! exports provided: EDInfoAuditoriaAPP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDInfoAuditoriaAPP", function() { return EDInfoAuditoriaAPP; });
class EDInfoAuditoriaAPP {
    constructor() {
        this.strIdentificacionUsuario = '';
        this.strNombreUsuario = '';
        this.strNombreEmpresa = '';
        this.strTipoDocEmpresa = '';
        this.strDocumentoEmpresa = '';
        this.strUUID = '';
        this.strLatitud = '';
        this.strLongitud = '';
    }
}


/***/ }),

/***/ "./src/app/services/SST/menu-sstservice.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/SST/menu-sstservice.service.ts ***!
  \*********************************************************/
/*! exports provided: MenuSSTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSSTService", function() { return MenuSSTService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MenuSSTService = class MenuSSTService {
    constructor() {
        this.menuSSTSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.menuPlanEmergencia = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.menuSST = this.menuSSTSource.asObservable();
        this.menuPlan = this.menuPlanEmergencia.asObservable();
    }
    changeMenuSST(menuSST) {
        this.menuSSTSource.next(menuSST);
    }
    changeMenuPlan(menuPlan) {
        this.menuPlanEmergencia.next(menuPlan);
    }
};
MenuSSTService.ctorParameters = () => [];
MenuSSTService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MenuSSTService);



/***/ }),

/***/ "./src/app/services/asesoria-sst.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/asesoria-sst.service.ts ***!
  \**************************************************/
/*! exports provided: AsesoriaSstService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesoriaSstService", function() { return AsesoriaSstService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let AsesoriaSstService = class AsesoriaSstService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getListaMaestros() {
        const url = `${this.context.getEnvUrl().call(null, 'participacion')}/EnVivoServicio/listar-Maestros-EnVivo`;
        return this.http.get(url);
    }
    getExpertosTecnicos(idTema) {
        const url = `${this.context.getEnvUrl().call(null, 'participacion')}/EnVivoServicio/listar-ExpertoTecnico?Fk_Id_Tema=${idTema}`;
        return this.http.get(url);
    }
    getAgendaDisponible(intFk_Id_Tema, intIDUsuarioExpertoTecnico, strFechaConsulta, strTipoAgenda, strToken) {
        const url = `${this.context.getEnvUrl().call(null, 'participacion')}/EnVivoServicio/listar-AgendaExpertoTecnicoAPP`;
        const data = {
            strTipoAgenda,
            strFechaConsulta,
            intIDUsuarioExpertoTecnico,
            strToken,
            intFk_Id_Tema
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, data, { headers });
    }
    agendar(data) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/guardar-CitaUsuaroAPP';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, data, { headers });
    }
    reagendar(data) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/reagendar-CitaUsuaroAPP';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, data, { headers });
    }
    consultar(strFechaInicioBusqueda, strFechaFinalBusqueda, strNumeroDocumentoUsuario, strDocumentoEmpresa, intFk_ID_Tema_Agendamiento) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/listar-HistorialAgemdamiento';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const data = {
            strFechaInicioBusqueda,
            strFechaFinalBusqueda,
            strNumeroDocumentoUsuario,
            strDocumentoEmpresa,
            intFk_ID_Tema_Agendamiento,
            intNumeroPagina: "1",
            intPageSize: "10"
        };
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, data, { headers });
    }
    cancelar(strToken, strIP) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/cancelar-cita-APP';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, { strToken, strIP }, { headers });
    }
    recordarPIN(strToken) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/recordar-PIN-APP';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, { strToken }, { headers });
    }
    reconfirmar(strToken) {
        const url = this.context.getEnvUrl().call(null, 'participacion') + '/EnVivoServicio/reconfirmar-cita-APP';
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json;charset=UTF-8');
        return this.http.post(url, { strToken }, { headers });
    }
};
AsesoriaSstService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
AsesoriaSstService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AsesoriaSstService);



/***/ }),

/***/ "./src/app/services/autoevaluacion-covid19.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/autoevaluacion-covid19.service.ts ***!
  \************************************************************/
/*! exports provided: AutoevaluacionCOVID19Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoevaluacionCOVID19Service", function() { return AutoevaluacionCOVID19Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




/**
 * Proveedor de servicios para el módulo de autoevaluación COVID-19.
 */
let AutoevaluacionCOVID19Service = class AutoevaluacionCOVID19Service {
    constructor(http, context) {
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
    getQuestions() {
        const domain = this.context.getEnvUrl().call(null, 'covid');
        const url = `${domain}${this.QUESTIONS_URI}`;
        return this.http.get(url);
    }
    /**
     * Envía la encuesta al servicio para su registro.
     *
     * @param poll Parámetros de la encuesta.
     */
    submitPoll(poll) {
        const domain = this.context.getEnvUrl().call(null, 'covid');
        const url = `${domain}${this.POLL_URI}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: poll });
        return this.http.post(url, body, { headers });
    }
    /**
     * Obtiene correo electrónico y número de teléfono actualizado del usuario.
     *
     * @param data Datos de usuario.
     */
    getUpdatedUserData(data) {
        const domain = this.context.getEnvUrl().call(null, 'covid');
        const url = `${domain}${this.UPDATED_DATA_URI}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: data });
        return this.http.post(url, body, { headers });
    }
};
AutoevaluacionCOVID19Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
AutoevaluacionCOVID19Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AutoevaluacionCOVID19Service);



/***/ }),

/***/ "./src/app/services/chequeo-covid19.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/chequeo-covid19.service.ts ***!
  \*****************************************************/
/*! exports provided: ChequeosCOVID19Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeosCOVID19Service", function() { return ChequeosCOVID19Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




/**
 * Proveedor de servicios para el módulo de encuesta de chequeos médicos.
 */
let ChequeosCOVID19Service = class ChequeosCOVID19Service {
    constructor(http, context) {
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
    submitPoll(poll) {
        const domain = this.context.getEnvUrl().call(null, 'covid');
        const url = `${domain}${this.POLL_URI}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: poll });
        return this.http.post(url, body, { headers });
    }
    /**
     * Comprueba la fecha del último chequeo médico.
     *
     * @param data Datos de la petición.
     */
    checkPoll(data) {
        const domain = this.context.getEnvUrl().call(null, 'covid');
        const url = `${domain}${this.CHECK_POLL_URI}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: data });
        return this.http.post(url, body, { headers });
    }
};
ChequeosCOVID19Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
ChequeosCOVID19Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ChequeosCOVID19Service);



/***/ }),

/***/ "./src/app/services/empresa.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/empresa.service.ts ***!
  \*********************************************/
/*! exports provided: EmpresaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaService", function() { return EmpresaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.service */ "./src/app/services/context.service.ts");




let EmpresaService = class EmpresaService {
    constructor(http, context) {
        this.http = http;
        this.context = context;
    }
    getSedes(nit) {
        const url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/empresa-sedesnit?NIT=' + nit;
        return this.http.get(url);
    }
    getProcesos(nit) {
        const url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/empresa-procesos?NIT=' + nit;
        return this.http.get(url);
    }
    getNombreLogo(nit) {
        const url = this.context.getEnvUrl().call(null, 'empresa') + '/Empresa/Obtener-Logo-Empresa?nitempresa=' + nit;
        console.log('url: ' + url);
        return this.http.get(url);
    }
    getUrlLogo(nombre) {
        return this.context.getAlisstaWeb() + "/Logo_Empresa/" + nombre;
    }
};
EmpresaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _context_service__WEBPACK_IMPORTED_MODULE_3__["ContextService"] }
];
EmpresaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EmpresaService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map