/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin:0;\\r\\n    padding:0;\\r\\n}\\r\\n\\r\\nhtml, body {\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\nheader, main, footer {\\r\\n    display: flex;\\r\\n    min-width: 100%;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    border-bottom: 3px solid rgb(255, 123, 0);\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n    font-size: 24px;\\r\\n    padding: 10px 0px 10px 10px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n    justify-content: flex-start;\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n.buttons-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 200px;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n    padding-top: 25px;\\r\\n}\\r\\n\\r\\n.add-todo-button-container {\\r\\n    padding-top: 15px;\\r\\n}\\r\\n\\r\\n#add-todo {\\r\\n    height: 50px;\\r\\n    width: 100px;\\r\\n    border: none;\\r\\n    background: rgb(187, 138, 46);\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n#add-todo:hover {\\r\\n    cursor: pointer;\\r\\n    transform: scale(1.01);\\r\\n    background: rgb(157, 114, 34);\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n    display: flex;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.task-list {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 33.3%;\\r\\n    height: 100%;\\r\\n    border-left: 1px dotted rgb(172, 171, 171);\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n    text-align: center;\\r\\n    margin-top: 20px;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.task-container {\\r\\n    font-size: 18px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background: white;\\r\\n    padding: 25px;\\r\\n    border: 2px solid rgb(55, 32, 32);\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n#priority-one, #priority-two, #priority-three {\\r\\n    display: flex; gap: 30px;\\r\\n    flex-wrap: wrap;\\r\\n    padding: 20px 20px;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    visibility: hidden;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background: rgba(135, 133, 133, 0.3);\\r\\n    position: absolute;\\r\\n    min-height: 100%;\\r\\n    width: 100%;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    height: 300px;\\r\\n    max-width: 600px;\\r\\n    min-width: 320px;\\r\\n    background: white;\\r\\n    width: 100%;\\r\\n    border-radius: 5px;\\r\\n    border: 5px solid rgba(55, 41, 41, 0.8);\\r\\n}\\r\\n\\r\\n.modal-header {\\r\\n    text-align: center;\\r\\n    width: 100%;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.modal-inputs {\\r\\n    display: grid;\\r\\n    justify-content: center;\\r\\n    grid-template-columns: 2;\\r\\n    grid-auto-flow: column;\\r\\n    grid-gap: 2%;\\r\\n    margin-right: 50px;\\r\\n}\\r\\n\\r\\n.close-modal {\\r\\n    float: right;\\r\\n    position: relative;\\r\\n    top: -25px;\\r\\n    left: -5px;\\r\\n    font-size: 15px;\\r\\n}\\r\\n\\r\\n.close-modal:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"], input[type=\\\"date\\\"] {\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid rgb(131, 129, 129);\\r\\n    padding: 8px;\\r\\n    height: 10px;\\r\\n    width: 180px;\\r\\n}\\r\\n\\r\\ninput[type=submit] {\\r\\n    margin-top: 15px;\\r\\n    grid-row: 4;\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid #d1d1d1;\\r\\n    height: 25px;\\r\\n    width: 70px;\\r\\n}\\r\\n\\r\\ninput  {\\r\\n    grid-column: 2;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n    font-size: 14px;\\r\\n    display: flex;\\r\\n    justify-content: flex-end;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    padding: 4px 0px;\\r\\n    justify-content: center;\\r\\n    font-size: 18px;\\r\\n    font-weight: bolder;\\r\\n    border-top: 1px solid rgb(255, 102, 0);\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n    cursor: pointer;\\r\\n    color: rgb(175, 194, 0);\\r\\n}\\r\\n\\r\\n@media (max-width: 1000px) {\\r\\n    main {\\r\\n        align-items: center;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n\\r\\n    .buttons-container {\\r\\n        padding: 15px 0px 15px 0px;\\r\\n        width: 100%;\\r\\n        border-bottom: 2px solid black;\\r\\n    }\\r\\n\\r\\n    .main-content {\\r\\n        flex-direction: column;\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    .task-list {\\r\\n        width: 100%;\\r\\n        border: none;\\r\\n    }\\r\\n\\r\\n    #task-list-two, #task-list-three {\\r\\n        border-top: 1px dotted black;\\r\\n    }\\r\\n\\r\\n    .task-container {\\r\\n        font-size: 18px;\\r\\n        border: 2px solid black;\\r\\n        padding: 15px;\\r\\n    }\\r\\n\\r\\n    .modal-content {\\r\\n        width: 300px;\\r\\n        min-width: 300px;\\r\\n    }\\r\\n\\r\\n    .modal-inputs {\\r\\n        margin: 0px;\\r\\n    }\\r\\n    footer {\\r\\n        visibility: hidden;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\r\n\r\nif (false) {}\r\n\r\nif (true) {\r\n    console.log('Development mode!');\r\n}\r\n\r\nfunction init() {\r\n    displayTasks(true);\r\n    document.getElementById(\"add-todo\").addEventListener(\"click\", addToDo);\r\n}\r\n\r\nfunction addToDo() {\r\n    enableModalWindow();\r\n    if(!document.getElementsByClassName(\"modal-input\")[0]) {\r\n        setUpModalContent();\r\n    }\r\n        \r\n\r\n    function enableModalWindow() {\r\n        setModalVisibility(\"visible\");\r\n        addModalListeners();\r\n    }\r\n\r\n    function disableModal() {\r\n        setModalVisibility(\"hidden\");\r\n        removeModalListeners();\r\n    }\r\n\r\n    function setModalVisibility(visibility) {\r\n        document.getElementById(\"modal\").style.visibility = visibility;\r\n    }\r\n\r\n    function addModalListeners() {\r\n        window.addEventListener(\"click\", function (e) {(e.target.id == \"modal\") ? disableModal() : null;});\r\n        document.getElementById(\"close-modal\").addEventListener(\"click\", disableModal);\r\n    }\r\n\r\n    function removeModalListeners() {\r\n        window.removeEventListener(\"click\", function (e) {(e.target.id == \"modal\") ? disableModal() : null;});\r\n        document.getElementById(\"close-modal\").removeEventListener(\"click\", disableModal);\r\n    }\r\n\r\n    function setUpModalContent() {\r\n        setHeaderText(\"Add To-Do\");\r\n        setupInputs();\r\n    }\r\n\r\n    function setHeaderText(text) {\r\n        document.getElementById(\"modal-title\").textContent = text;\r\n    }\r\n\r\n\r\n    //Create input boxes in modal\r\n    function setupInputs() {\r\n        const modal = document.getElementById(\"modal-content\");\r\n        const form = createInputForm(modal);\r\n        appendInputsToForm([[\"Name\",\"text\"], [\"Date\", \"date\"], [\"Description\", \"text\"]], form);\r\n        appendSubmitToForm(form)\r\n    }\r\n\r\n    function createInput(buttonName, type) {\r\n        const input = document.createElement(\"input\");\r\n        const label = document.createElement(\"label\");\r\n        input.type = type;\r\n        input.required = true;\r\n        input.id = buttonName.toLowerCase();\r\n        input.className = \"modal-input\";\r\n        label.setAttribute(\"for\", buttonName.toLowerCase());\r\n        let capitalizedLetter = buttonName.charAt(0).toUpperCase();\r\n        label.textContent = buttonName.replace(buttonName.charAt(0), capitalizedLetter);\r\n        return [label, input];\r\n    }\r\n\r\n    function createInputForm(modal) {\r\n        let inputsContainer = document.createElement(\"form\");\r\n        inputsContainer.className = \"modal-inputs\"\r\n        modal.appendChild(inputsContainer);\r\n        return inputsContainer;\r\n    }\r\n\r\n    function appendInputsToForm(inputList, inputsContainer) {\r\n        inputList.forEach(button => {\r\n            let inputName = button[0];\r\n            let type = button[1];\r\n            const inputAndLabel = createInput(inputName, type);\r\n            const label = inputAndLabel[0];\r\n            const input = inputAndLabel[1];\r\n            inputsContainer.appendChild(label);\r\n            inputsContainer.appendChild(input);\r\n        });\r\n    }\r\n\r\n    function appendSubmitToForm(form) {\r\n        const submit = document.createElement(\"input\");\r\n        submit.type = \"submit\";\r\n        submit.addEventListener(\"click\", createToDo);\r\n        form.appendChild(submit);\r\n    }\r\n\r\n    function createToDo(e) {\r\n        e.preventDefault();\r\n        let [name, duedate, description] = getInputValues();\r\n        let taskElement = todoFactory(name, duedate, description);\r\n        localStorage.setItem(\"id\"+localStorage.length, JSON.stringify(taskElement));\r\n        displayTasks();\r\n        cleanInputs();\r\n    }\r\n\r\n    function getInputValues() {\r\n        let name = document.getElementById(\"name\").value;\r\n        console.log(name);\r\n        let date = document.getElementById(\"date\").value;\r\n        console.log(date);\r\n        let description = document.getElementById(\"description\").value;\r\n        console.log(description);\r\n        return [name, date, description];\r\n    }\r\n\r\n    function cleanInputs() {\r\n        document.getElementById(\"name\").value = \"\";\r\n        document.getElementById(\"date\").value  = \"\";\r\n        document.getElementById(\"description\").value  = \"\";\r\n    }\r\n}\r\n\r\nfunction displayTasks(bypass=false) {\r\n    for (let i=0; i<localStorage.length; i++) {\r\n        let taskElement = JSON.parse(localStorage.getItem(\"id\"+i));\r\n        console.log(taskElement);\r\n        if (taskElement.displayed == false || bypass == true) {\r\n            let taskDiv = document.createElement(\"div\");\r\n            taskDiv.className = \"task-container\";\r\n            let name = document.createElement(\"h3\");\r\n            let dueDate = document.createElement(\"p\");\r\n            let description = document.createElement(\"p\");\r\n            name.textContent = taskElement.name\r\n            dueDate.textContent = taskElement.dueDate\r\n            description.textContent = taskElement.name\r\n            taskDiv.appendChild(name);\r\n            taskDiv.appendChild(dueDate);\r\n            taskDiv.appendChild(description);\r\n            let taskPriority = checkDate(taskElement.dueDate);\r\n            console.log(taskPriority);\r\n            displayTaskByPriority(taskPriority, taskDiv);\r\n            taskElement.displayed = true;\r\n            localStorage.removeItem(\"id\"+i);\r\n            localStorage.setItem(\"id\"+i, JSON.stringify(taskElement));\r\n        }\r\n    }\r\n}\r\n\r\nfunction checkDate(taskElementDate) {\r\n    const msPerDay = (1000*60*60*24);\r\n    const currentDate = new Date().toISOString().split('T')[0];\r\n    const currentTimeDifference = (new Date(taskElementDate) - new Date(currentDate))/msPerDay;\r\n    console.log(currentTimeDifference)\r\n    return (currentTimeDifference<-3) ? \"priority-one\" :\r\n    (currentTimeDifference<5) ? \"priority-two\" :\r\n    \"priority-three\"\r\n}\r\n\r\n\r\nfunction displayTaskByPriority(taskPriority, taskDiv) {\r\n        let priorityList = document.getElementById(taskPriority);\r\n\r\n        (taskPriority == \"priority-one\") ? taskDiv.style.background = \"rgb(255 230 230)\" :\r\n        (taskPriority == \"priority-two\") ? taskDiv.style.background = \"rgb(255 244 219)\" :\r\n        taskDiv.style.background = \"rgb(222 222 249)\";\r\n\r\n        priorityList.appendChild(taskDiv);\r\n}\r\n\r\nconst todoFactory = function(name, dueDate, description) {\r\n    let task = {};\r\n    task.name = name;\r\n    task.dueDate = dueDate;\r\n    task.description = description;\r\n    task.displayed = false;\r\n    task.createdDate = new Date(Date.now()).toString();\r\n\r\n    return task;\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;