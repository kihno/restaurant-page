/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SemyonSoviet.woff */ "./src/SemyonSoviet.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./SemyonSoviet.woff2 */ "./src/SemyonSoviet.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./home-pancake.jpg */ "./src/home-pancake.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'semyonSoviet';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff2');\n}\n\nbody {\n    color: #e0a21d;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 100vw;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    height: 100vh;\n}\n\nh1, h2, p, body, #navbar {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    display: grid;\n    justify-items: center;\n    align-items: start;\n    gap: 80px;\n    width: 100vw;\n}\n\n#navbar {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-content: space-between;\n    gap: 100px;\n    list-style-type: none;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    border-bottom: 1px solid white;\n    background-color: rgba(0,0,0,0.5);\n}\n\nli {\n    cursor: pointer;\n    text-transform: capitalize;\n    font-size: 20px;\n}\n\n#logo {\n    display: grid;\n    place-items: center;\n    width: 100%;\n    padding-bottom: 20px;\n    gap: 10px;\n    background-color: rgba(0,0,0,0.5);\n}\n\nh1 {\n    font-size: 100px;\n    font-family: 'semyonSoviet';\n}\n\n#background {\n    padding-top: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-bottom: 50px;\n    background-color: rgba(0,0,0,0.5);\n    justify-self: center;\n    display: grid;\n    place-items: center;\n}\n\n#menuItems {\n    justify-self: center;\n    display: grid;\n    place-items: center;\n    grid: 1fr auto / 1fr 1fr;\n    gap: 80px;\n}\n\n#menuTitle {\n    grid-area: 1 / 1 / 2 / 3;\n    margin-bottom: 30px;\n}\n\n.item {\n    display: grid;\n    justify-items: end;\n    gap: 5px;\n}\n\n.name {\n    font-weight: bold;\n}\n\nimg {\n    width: 300px;\n}\n\n#form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 20px;\n    place-items: center;\n    background-color: rgba(0,0,0,0.5);\n    padding: 20px;\n}\n\n.row {\n    display: flex;\n    justify-content: flex-start;\n    gap: 40px;\n}\n\n.row input, .row textarea {\n    width: 250px;\n    height: initial;\n    border: none;\n    border-radius: 5px;\n}\n\n.row label {\n    text-align: right;\n    width: 120px;\n    text-transform: capitalize;\n    font-size: 20px;\n}\n\nbutton {\n    cursor: pointer;\n    justify-self: start;\n    margin-right: 20px;\n    color: #e0a21d;\n    background-color: rgba(0,0,0,0.3);\n    border: 1px solid #e0a21d;\n    border-radius: 5px;\n    font-size: 20px;\n}\n\nbutton:hover {\n    background-color: rgba(0,0,0,1);\n}\n\n#footer {\n    margin-top: 10px;\n    text-align: center;\n    align-self: end;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,2BAA2B;IAC3B;+DAC+C;AACnD;;AAEA;IACI,cAAc;IACd,yDAA2C;IAC3C,sBAAsB;IACtB,iCAAiC;IACjC,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,4BAA4B;IAC5B,UAAU;IACV,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;IACpB,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,iCAAiC;IACjC,oBAAoB;IACpB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,mBAAmB;IACnB,wBAAwB;IACxB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,iCAAiC;IACjC,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n@font-face {\n    font-family: 'semyonSoviet';\n    src: url('./SemyonSoviet.woff') format('woff'),\n        url('./SemyonSoviet.woff2') format('woff2');\n}\n\nbody {\n    color: #e0a21d;\n    background-image: url('./home-pancake.jpg');\n    background-size: 100vw;\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    height: 100vh;\n}\n\nh1, h2, p, body, #navbar {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    display: grid;\n    justify-items: center;\n    align-items: start;\n    gap: 80px;\n    width: 100vw;\n}\n\n#navbar {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-content: space-between;\n    gap: 100px;\n    list-style-type: none;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    border-bottom: 1px solid white;\n    background-color: rgba(0,0,0,0.5);\n}\n\nli {\n    cursor: pointer;\n    text-transform: capitalize;\n    font-size: 20px;\n}\n\n#logo {\n    display: grid;\n    place-items: center;\n    width: 100%;\n    padding-bottom: 20px;\n    gap: 10px;\n    background-color: rgba(0,0,0,0.5);\n}\n\nh1 {\n    font-size: 100px;\n    font-family: 'semyonSoviet';\n}\n\n#background {\n    padding-top: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n    padding-bottom: 50px;\n    background-color: rgba(0,0,0,0.5);\n    justify-self: center;\n    display: grid;\n    place-items: center;\n}\n\n#menuItems {\n    justify-self: center;\n    display: grid;\n    place-items: center;\n    grid: 1fr auto / 1fr 1fr;\n    gap: 80px;\n}\n\n#menuTitle {\n    grid-area: 1 / 1 / 2 / 3;\n    margin-bottom: 30px;\n}\n\n.item {\n    display: grid;\n    justify-items: end;\n    gap: 5px;\n}\n\n.name {\n    font-weight: bold;\n}\n\nimg {\n    width: 300px;\n}\n\n#form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 20px;\n    place-items: center;\n    background-color: rgba(0,0,0,0.5);\n    padding: 20px;\n}\n\n.row {\n    display: flex;\n    justify-content: flex-start;\n    gap: 40px;\n}\n\n.row input, .row textarea {\n    width: 250px;\n    height: initial;\n    border: none;\n    border-radius: 5px;\n}\n\n.row label {\n    text-align: right;\n    width: 120px;\n    text-transform: capitalize;\n    font-size: 20px;\n}\n\nbutton {\n    cursor: pointer;\n    justify-self: start;\n    margin-right: 20px;\n    color: #e0a21d;\n    background-color: rgba(0,0,0,0.3);\n    border: 1px solid #e0a21d;\n    border-radius: 5px;\n    font-size: 20px;\n}\n\nbutton:hover {\n    background-color: rgba(0,0,0,1);\n}\n\n#footer {\n    margin-top: 10px;\n    text-align: center;\n    align-self: end;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


function renderContact() {
    // renderNavbar();

    const form = document.createElement('form');
    form.setAttribute('id', 'form');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    form.appendChild(h2);

    const formArray = ['name', 'email', 'message'];

    formArray.forEach(item => {
        const row = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const textarea = document.createElement('textarea');

        if (item === 'message') {
            label.textContent = item + ':'
            label.setAttribute('for', item)
            textarea.setAttribute('id', item)
            textarea.setAttribute('required', '')
            row.setAttribute('class', 'row')

            row.appendChild(label)
            row.appendChild(textarea)
            form.appendChild(row)
        } else {
            label.textContent = item + ':'
            label.setAttribute('for', item)
            input.setAttribute('id', item)
            input.setAttribute('required', '');
            row.setAttribute('class', 'row')

            row.appendChild(label)
            row.appendChild(input)
            form.appendChild(row)
        }
    });

    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.setAttribute('type', 'submit');
    form.appendChild(button);

    _home_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(form);

    form.addEventListener('submit', () => {
        alert('Message successfully sent')
    });
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "renderHome": () => (/* binding */ renderHome),
/* harmony export */   "renderLogo": () => (/* binding */ renderLogo),
/* harmony export */   "renderNavbar": () => (/* binding */ renderNavbar)
/* harmony export */ });
const content = document.getElementById('content');

function renderNavbar() {
    const navbar = document.createElement('ul');

    const links = ['home', 'menu', 'contact'];

    navbar.setAttribute('id', 'navbar');
    for (let i = 0; i < links.length; i++) {
        const li = document.createElement('li');

        li.textContent = links[i];
        li.setAttribute('id', `${links[i]}`)
        navbar.appendChild(li);
    }

    content.appendChild(navbar);
}

function renderLogo() {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const container = document.createElement('div');

    container.setAttribute('id', "logo");

    h1.textContent = 'Brekkie';
    container.appendChild(h1);

    p.textContent = "It's never too late to start your day with a little Brekkie.";
    container.appendChild(p); 

    content.appendChild(container);
}

function renderHome() {
    renderNavbar();
    renderLogo();
}





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


const coffee = new Image();
coffee.src = '../src/coffee.jpg';

const oj = new Image();
oj.src = '../src/oj.jpg';


const eggs = new Image();
eggs.src = '../src/eggs.jpg';


const sando = new Image();
sando.src = '../src/sando.jpg';


const pancakes = new Image();
pancakes.src = '../src/pancakes.jpg';


const frenchToast = new Image();
frenchToast.src = '../src/frenchToast.jpg';

const myMenu = [
    {
        image: coffee,
        name: 'Coffee',
        description: 'Just an honest to god cup of coffee',
        price: '$3',
    },
    {
        image: oj,
        name: 'OJ',
        description: 'Fresh squeezed  orange juice',
        price: '$3',
    },
    {
        image: eggs,
        name: 'Eggs and Things',
        description: 'Eggs, choice of meat, choice of potato',
        price: '$9',
    },
    {
        image: sando,
        name: 'The Sando',
        description: 'Eggs and things between bread',
        price: '$9',
    },
    {
        image: pancakes,
        name: 'Pancakes',
        description: 'Kinda like cake, but for breakfast',
        price: '$9',
    },
    {
        image: frenchToast,
        name: 'French Toast',
        description: 'The French took toast and made it better',
        price: '$9',
    },

]


const background = document.createElement('div');
const menuItems = document.createElement('div');

function renderItem(item) {
    const div = document.createElement('div');
    div.className = 'item';
    menuItems.appendChild(div);
    const itemDiv = document.querySelector('.item:last-of-type');

    for (const prop in item) {
        const div = document.createElement('div');
        div.className = prop;

        if (prop === 'image') {
            itemDiv.appendChild(item[prop]);
        } else {
            div.textContent = item[prop];
            itemDiv.appendChild(div);
        }
    }
}

function renderMenu() {
    while (menuItems.firstChild) {
        menuItems.removeChild(menuItems.firstChild);
    }

    background.setAttribute('id', 'background');
    menuItems.setAttribute('id', 'menuItems');

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';
    h2.setAttribute('id', 'menuTitle');
    background.appendChild(h2);

    background.appendChild(menuItems);

    _home_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(background);

    myMenu.forEach(item => {
        renderItem(item);
    });
}



/***/ }),

/***/ "./src/SemyonSoviet.woff":
/*!*******************************!*\
  !*** ./src/SemyonSoviet.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f17ebf73450674b58de.woff";

/***/ }),

/***/ "./src/SemyonSoviet.woff2":
/*!********************************!*\
  !*** ./src/SemyonSoviet.woff2 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98c361fb17d47d35ae5b.woff2";

/***/ }),

/***/ "./src/home-pancake.jpg":
/*!******************************!*\
  !*** ./src/home-pancake.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dff908b8495427dd6e7.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderHome)();

const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');
const contactLink = document.getElementById('contact');

function clear() {
    
        _home_js__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_home_js__WEBPACK_IMPORTED_MODULE_0__.content.lastChild);
    
}

homeLink.addEventListener('click', () => {
    clear();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.renderLogo)();
});

menuLink.addEventListener('click', () => {
    clear();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();
});

contactLink.addEventListener('click', () => {
    clear();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.renderContact)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMEU7QUFDbkM7QUFDTTtBQUN4Qjs7QUFFckIsb0RBQVU7O0FBRVY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHlEQUFtQixDQUFDLHVEQUFpQjtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1NlbXlvblNvdmlldC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9TZW15b25Tb3ZpZXQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2hvbWUtcGFuY2FrZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdzZW15b25Tb3ZpZXQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiAjZTBhMjFkO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxLCBoMiwgcCwgYm9keSwgI25hdmJhciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiA4MHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNuYXZiYXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdzZW15b25Tb3ZpZXQnO1xcbn1cXG5cXG4jYmFja2dyb3VuZCB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWVudUl0ZW1zIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQ6IDFmciBhdXRvIC8gMWZyIDFmcjtcXG4gICAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4jbWVudVRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLnJvdyBpbnB1dCwgLnJvdyB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJvdyBsYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBjb2xvcjogI2UwYTIxZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBhMjFkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwxKTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCOytEQUMrQztBQUNuRDs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5REFBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnc2VteW9uU292aWV0JztcXG4gICAgc3JjOiB1cmwoJy4vU2VteW9uU292aWV0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnLi9TZW15b25Tb3ZpZXQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBjb2xvcjogI2UwYTIxZDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2hvbWUtcGFuY2FrZS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMSwgaDIsIHAsIGJvZHksICNuYXZiYXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogODBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jbmF2YmFyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnc2VteW9uU292aWV0JztcXG59XFxuXFxuI2JhY2tncm91bmQge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21lbnVJdGVtcyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkOiAxZnIgYXV0byAvIDFmciAxZnI7XFxuICAgIGdhcDogODBweDtcXG59XFxuXFxuI21lbnVUaXRsZSB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi5yb3cgaW5wdXQsIC5yb3cgdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogaW5pdGlhbDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5yb3cgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgY29sb3I6ICNlMGEyMWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwYTIxZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMSk7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y29udGVudCwgcmVuZGVyTmF2YmFyIH0gZnJvbSAnLi9ob21lLmpzJztcblxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgICAvLyByZW5kZXJOYXZiYXIoKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0nKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIGNvbnN0IGZvcm1BcnJheSA9IFsnbmFtZScsICdlbWFpbCcsICdtZXNzYWdlJ107XG5cbiAgICBmb3JtQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgICAgICAgaWYgKGl0ZW0gPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpdGVtICsgJzonXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGl0ZW0pXG4gICAgICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbSlcbiAgICAgICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcbiAgICAgICAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdycpXG5cbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0ZXh0YXJlYSlcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocm93KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpdGVtICsgJzonXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGl0ZW0pXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbSlcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb3cnKVxuXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJvdylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCdNZXNzYWdlIHN1Y2Nlc3NmdWxseSBzZW50JylcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQ29udGFjdCB9O1xuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIHJlbmRlck5hdmJhcigpIHtcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgY29uc3QgbGlua3MgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0J107XG5cbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdpZCcsICduYXZiYXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGxpbmtzW2ldO1xuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bGlua3NbaV19YClcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvZ28oKSB7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIFwibG9nb1wiKTtcblxuICAgIGgxLnRleHRDb250ZW50ID0gJ0JyZWtraWUnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBwLnRleHRDb250ZW50ID0gXCJJdCdzIG5ldmVyIHRvbyBsYXRlIHRvIHN0YXJ0IHlvdXIgZGF5IHdpdGggYSBsaXR0bGUgQnJla2tpZS5cIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocCk7IFxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIHJlbmRlck5hdmJhcigpO1xuICAgIHJlbmRlckxvZ28oKTtcbn1cblxuXG5cbmV4cG9ydCB7IHJlbmRlck5hdmJhciwgcmVuZGVyTG9nbywgcmVuZGVySG9tZSwgY29udGVudCB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmNvbnN0IGNvZmZlZSA9IG5ldyBJbWFnZSgpO1xuY29mZmVlLnNyYyA9ICcuLi9zcmMvY29mZmVlLmpwZyc7XG5cbmNvbnN0IG9qID0gbmV3IEltYWdlKCk7XG5vai5zcmMgPSAnLi4vc3JjL29qLmpwZyc7XG5cblxuY29uc3QgZWdncyA9IG5ldyBJbWFnZSgpO1xuZWdncy5zcmMgPSAnLi4vc3JjL2VnZ3MuanBnJztcblxuXG5jb25zdCBzYW5kbyA9IG5ldyBJbWFnZSgpO1xuc2FuZG8uc3JjID0gJy4uL3NyYy9zYW5kby5qcGcnO1xuXG5cbmNvbnN0IHBhbmNha2VzID0gbmV3IEltYWdlKCk7XG5wYW5jYWtlcy5zcmMgPSAnLi4vc3JjL3BhbmNha2VzLmpwZyc7XG5cblxuY29uc3QgZnJlbmNoVG9hc3QgPSBuZXcgSW1hZ2UoKTtcbmZyZW5jaFRvYXN0LnNyYyA9ICcuLi9zcmMvZnJlbmNoVG9hc3QuanBnJztcblxuY29uc3QgbXlNZW51ID0gW1xuICAgIHtcbiAgICAgICAgaW1hZ2U6IGNvZmZlZSxcbiAgICAgICAgbmFtZTogJ0NvZmZlZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSnVzdCBhbiBob25lc3QgdG8gZ29kIGN1cCBvZiBjb2ZmZWUnLFxuICAgICAgICBwcmljZTogJyQzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IG9qLFxuICAgICAgICBuYW1lOiAnT0onLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZyZXNoIHNxdWVlemVkICBvcmFuZ2UganVpY2UnLFxuICAgICAgICBwcmljZTogJyQzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IGVnZ3MsXG4gICAgICAgIG5hbWU6ICdFZ2dzIGFuZCBUaGluZ3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0VnZ3MsIGNob2ljZSBvZiBtZWF0LCBjaG9pY2Ugb2YgcG90YXRvJyxcbiAgICAgICAgcHJpY2U6ICckOScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBzYW5kbyxcbiAgICAgICAgbmFtZTogJ1RoZSBTYW5kbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRWdncyBhbmQgdGhpbmdzIGJldHdlZW4gYnJlYWQnLFxuICAgICAgICBwcmljZTogJyQ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IHBhbmNha2VzLFxuICAgICAgICBuYW1lOiAnUGFuY2FrZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0tpbmRhIGxpa2UgY2FrZSwgYnV0IGZvciBicmVha2Zhc3QnLFxuICAgICAgICBwcmljZTogJyQ5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6IGZyZW5jaFRvYXN0LFxuICAgICAgICBuYW1lOiAnRnJlbmNoIFRvYXN0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgRnJlbmNoIHRvb2sgdG9hc3QgYW5kIG1hZGUgaXQgYmV0dGVyJyxcbiAgICAgICAgcHJpY2U6ICckOScsXG4gICAgfSxcblxuXVxuXG5cbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5mdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbTpsYXN0LW9mLXR5cGUnKTtcblxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBpdGVtKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gcHJvcDtcblxuICAgICAgICBpZiAocHJvcCA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtW3Byb3BdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGl0ZW1bcHJvcF07XG4gICAgICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gICAgd2hpbGUgKG1lbnVJdGVtcy5maXJzdENoaWxkKSB7XG4gICAgICAgIG1lbnVJdGVtcy5yZW1vdmVDaGlsZChtZW51SXRlbXMuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2tncm91bmQnKTtcbiAgICBtZW51SXRlbXMuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51SXRlbXMnKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBoMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVUaXRsZScpO1xuICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcblxuICAgIG15TWVudS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICByZW5kZXJJdGVtKGl0ZW0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyByZW5kZXJNZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyByZW5kZXJIb21lLCByZW5kZXJMb2dvLCBjb250ZW50LCByZW5kZXJOYXZiYXIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyByZW5kZXJDb250YWN0IH0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5yZW5kZXJIb21lKCk7XG5cbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIFxufVxuXG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcigpO1xuICAgIHJlbmRlckxvZ28oKTtcbn0pO1xuXG5tZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcigpO1xuICAgIHJlbmRlck1lbnUoKTtcbn0pO1xuXG5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcigpO1xuICAgIHJlbmRlckNvbnRhY3QoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==