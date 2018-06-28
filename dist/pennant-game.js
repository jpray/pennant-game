/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pennant-game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-properties.js":
/*!************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-properties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-properties */ \"./node_modules/core-js/library/fn/object/define-properties.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/freeze.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/freeze.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/freeze */ \"./node_modules/core-js/library/fn/object/freeze.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/freeze.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ \"./node_modules/core-js/library/fn/object/get-own-property-descriptor.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"./node_modules/core-js/library/fn/object/get-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/promise */ \"./node_modules/core-js/library/fn/promise.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _promise = __webpack_require__(/*! ../core-js/promise */ \"./node_modules/babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (fn) {\n  return function () {\n    var gen = fn.apply(this, arguments);\n    return new _promise2.default(function (resolve, reject) {\n      function step(key, arg) {\n        try {\n          var info = gen[key](arg);\n          var value = info.value;\n        } catch (error) {\n          reject(error);\n          return;\n        }\n\n        if (info.done) {\n          resolve(value);\n        } else {\n          return _promise2.default.resolve(value).then(function (value) {\n            step(\"next\", value);\n          }, function (err) {\n            step(\"throw\", err);\n          });\n        }\n      }\n\n      return step(\"next\");\n    });\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/get.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/get.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ \"./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js\");\n\nvar _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function get(object, property, receiver) {\n  if (object === null) object = Function.prototype;\n  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);\n\n  if (desc === undefined) {\n    var parent = (0, _getPrototypeOf2.default)(object);\n\n    if (parent === null) {\n      return undefined;\n    } else {\n      return get(parent, property, receiver);\n    }\n  } else if (\"value\" in desc) {\n    return desc.value;\n  } else {\n    var getter = desc.get;\n\n    if (getter === undefined) {\n      return undefined;\n    }\n\n    return getter.call(receiver);\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/get.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js":
/*!*********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperties = __webpack_require__(/*! ../core-js/object/define-properties */ \"./node_modules/babel-runtime/core-js/object/define-properties.js\");\n\nvar _defineProperties2 = _interopRequireDefault(_defineProperties);\n\nvar _freeze = __webpack_require__(/*! ../core-js/object/freeze */ \"./node_modules/babel-runtime/core-js/object/freeze.js\");\n\nvar _freeze2 = _interopRequireDefault(_freeze);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (strings, raw) {\n  return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {\n    raw: {\n      value: (0, _freeze2.default)(raw)\n    }\n  }));\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime-module.js\");\n\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-properties */ \"./node_modules/core-js/library/modules/es6.object.define-properties.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperties(T, D) {\n  return $Object.defineProperties(T, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/freeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.freeze */ \"./node_modules/core-js/library/modules/es6.object.freeze.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.freeze;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function getOwnPropertyDescriptor(it, key) {\n  return $Object.getOwnPropertyDescriptor(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/library/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es7.promise.finally */ \"./node_modules/core-js/library/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ../modules/es7.promise.try */ \"./node_modules/core-js/library/modules/es7.promise.try.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Promise;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.4' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    var promise = Promise.resolve();\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\nmodule.exports = function (key) {\n  return store[key] || (store[key] = {});\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/library/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.freeze.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/library/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/library/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/game/board/board.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/game/board/board.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"p-board {\\n  display:block;\\n  width:20rem;\\n  height:20rem;\\n  border: 1px solid #CCC;\\n  display:flex;\\n  flex-direction: column;\\n  transform: rotate(45deg);\\n  margin: 100px auto;\\n}\\n\\n.b-row {\\n  display:flex;\\n  flex-grow: 0;\\n  flex-shrink: 0;\\n  height:20%;\\n}\\n\\np-cell {\\n  display:flex;\\n  border:1px solid #CCC;\\n  flex-grow: 0;\\n  flex-shrink: 0;\\n  width:20%;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.starting-cell--player-one {\\n  background-color:#E6E6E6;\\n}\\n\\n.starting-cell--player-two {\\n  background-color:#E6E6E6;\\n}\\n\\n.winning-cell {\\n  background-color:gold;\\n}\\n\\n.game--first-player .allowed-move-cell, .game--first-player .allowed-push-cell {\\n  border:2px solid red;\\n}\\n\\n.game--second-player .allowed-move-cell, .game--second-player .allowed-push-cell {\\n  border:2px solid blue;\\n}\\n\\n.game--over {\\n  opacity: 0.3;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/game/board/board.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/game/pieces/pieces.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader!./src/game/pieces/pieces.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"p-sword, p-spear, p-shield {\\n  height: 3.5rem;\\n  width: 3.5rem;\\n  display:block;\\n  border:1px solid #FFF;\\n}\\n\\np-sword:focus, p-spear:focus, p-shield:focus {\\n  border-color:blue;\\n}\\n\\np-sword a, p-spear a, p-shield a {\\n  display: block;\\n    height: 100%;\\n    width: 100%;\\n  }\\n\\n.piece-for-player0 {\\n  border:1px solid red;\\n}\\n\\n.piece-for-player1 {\\n  border:1px solid blue;\\n}\\n\\np-sword.invalid, p-spear.invalid, p-shield.invalid {\\n  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\\n  transform: translate3d(0, 0, 0);\\n  backface-visibility: hidden;\\n  perspective: 1000px;\\n}\\n\\n@keyframes shake {\\n  10%, 90% {\\n    transform: translate3d(-1px, 0, 0);\\n  }\\n\\n  20%, 80% {\\n    transform: translate3d(2px, 0, 0);\\n  }\\n\\n  30%, 50%, 70% {\\n    transform: translate3d(-4px, 0, 0);\\n  }\\n\\n  40%, 60% {\\n    transform: translate3d(4px, 0, 0);\\n  }\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/game/pieces/pieces.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/game/side-line/side-line.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./src/game/side-line/side-line.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"side-line {\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.sideline-pieces {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.sideline--disabled {\\n  pointer-events: none;\\n  opacity: 0.3;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/game/side-line/side-line.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/game/status-board/status-board.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/game/status-board/status-board.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"status-board {\\n  display:block;\\n  text-align: left;\\n  font-size:16px;\\n  position: absolute;\\n  left:12px;\\n  top:12px;\\n}\\n\\nstatus-board > button {\\n  font-size:24px;\\n}\\n\\n.player-swatch {\\n  display:inline-block;\\n  height:20px;\\n  width:20px;\\n  background-color: #E6E6E6;\\n  vertical-align: middle;\\n}\\n\\n.player-one-swatch {\\n  background-color: red;\\n}\\n\\n.player-two-swatch {\\n  background-color:blue;\\n}\\n\\n.player-info {\\n  margin:12px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/game/status-board/status-board.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/pennant-game.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/pennant-game.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"pennant-game {\\n  display:block;\\n  min-height:10rem;\\n  min-width:10rem;\\n}\\n\\n.hide {\\n  display:none;\\n}\\n\\n.show {\\n  display:block;\\n}\\n\\np-game {\\n  display:block;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/pennant-game.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/dom-delegate/lib/delegate.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-delegate/lib/delegate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*jshint browser:true, node:true*/\n\n\n\nmodule.exports = Delegate;\n\n/**\n * DOM event delegator\n *\n * The delegator will listen\n * for events that bubble up\n * to the root node.\n *\n * @constructor\n * @param {Node|string} [root] The root node or a selector string matching the root node\n */\nfunction Delegate(root) {\n\n  /**\n   * Maintain a map of listener\n   * lists, keyed by event name.\n   *\n   * @type Object\n   */\n  this.listenerMap = [{}, {}];\n  if (root) {\n    this.root(root);\n  }\n\n  /** @type function() */\n  this.handle = Delegate.prototype.handle.bind(this);\n}\n\n/**\n * Start listening for events\n * on the provided DOM element\n *\n * @param  {Node|string} [root] The root node or a selector string matching the root node\n * @returns {Delegate} This method is chainable\n */\nDelegate.prototype.root = function(root) {\n  var listenerMap = this.listenerMap;\n  var eventType;\n\n  // Remove master event listeners\n  if (this.rootElement) {\n    for (eventType in listenerMap[1]) {\n      if (listenerMap[1].hasOwnProperty(eventType)) {\n        this.rootElement.removeEventListener(eventType, this.handle, true);\n      }\n    }\n    for (eventType in listenerMap[0]) {\n      if (listenerMap[0].hasOwnProperty(eventType)) {\n        this.rootElement.removeEventListener(eventType, this.handle, false);\n      }\n    }\n  }\n\n  // If no root or root is not\n  // a dom node, then remove internal\n  // root reference and exit here\n  if (!root || !root.addEventListener) {\n    if (this.rootElement) {\n      delete this.rootElement;\n    }\n    return this;\n  }\n\n  /**\n   * The root node at which\n   * listeners are attached.\n   *\n   * @type Node\n   */\n  this.rootElement = root;\n\n  // Set up master event listeners\n  for (eventType in listenerMap[1]) {\n    if (listenerMap[1].hasOwnProperty(eventType)) {\n      this.rootElement.addEventListener(eventType, this.handle, true);\n    }\n  }\n  for (eventType in listenerMap[0]) {\n    if (listenerMap[0].hasOwnProperty(eventType)) {\n      this.rootElement.addEventListener(eventType, this.handle, false);\n    }\n  }\n\n  return this;\n};\n\n/**\n * @param {string} eventType\n * @returns boolean\n */\nDelegate.prototype.captureForType = function(eventType) {\n  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;\n};\n\n/**\n * Attach a handler to one\n * event for all elements\n * that match the selector,\n * now or in the future\n *\n * The handler function receives\n * three arguments: the DOM event\n * object, the node that matched\n * the selector while the event\n * was bubbling and a reference\n * to itself. Within the handler,\n * 'this' is equal to the second\n * argument.\n *\n * The node that actually received\n * the event can be accessed via\n * 'event.target'.\n *\n * @param {string} eventType Listen for these events\n * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element\n * @param {function()} handler Handler function - event data passed here will be in event.data\n * @param {Object} [eventData] Data to pass in event.data\n * @returns {Delegate} This method is chainable\n */\nDelegate.prototype.on = function(eventType, selector, handler, useCapture) {\n  var root, listenerMap, matcher, matcherParam;\n\n  if (!eventType) {\n    throw new TypeError('Invalid event type: ' + eventType);\n  }\n\n  // handler can be passed as\n  // the second or third argument\n  if (typeof selector === 'function') {\n    useCapture = handler;\n    handler = selector;\n    selector = null;\n  }\n\n  // Fallback to sensible defaults\n  // if useCapture not set\n  if (useCapture === undefined) {\n    useCapture = this.captureForType(eventType);\n  }\n\n  if (typeof handler !== 'function') {\n    throw new TypeError('Handler must be a type of Function');\n  }\n\n  root = this.rootElement;\n  listenerMap = this.listenerMap[useCapture ? 1 : 0];\n\n  // Add master handler for type if not created yet\n  if (!listenerMap[eventType]) {\n    if (root) {\n      root.addEventListener(eventType, this.handle, useCapture);\n    }\n    listenerMap[eventType] = [];\n  }\n\n  if (!selector) {\n    matcherParam = null;\n\n    // COMPLEX - matchesRoot needs to have access to\n    // this.rootElement, so bind the function to this.\n    matcher = matchesRoot.bind(this);\n\n  // Compile a matcher for the given selector\n  } else if (/^[a-z]+$/i.test(selector)) {\n    matcherParam = selector;\n    matcher = matchesTag;\n  } else if (/^#[a-z0-9\\-_]+$/i.test(selector)) {\n    matcherParam = selector.slice(1);\n    matcher = matchesId;\n  } else {\n    matcherParam = selector;\n    matcher = matches;\n  }\n\n  // Add to the list of listeners\n  listenerMap[eventType].push({\n    selector: selector,\n    handler: handler,\n    matcher: matcher,\n    matcherParam: matcherParam\n  });\n\n  return this;\n};\n\n/**\n * Remove an event handler\n * for elements that match\n * the selector, forever\n *\n * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters\n * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed\n * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed\n * @returns {Delegate} This method is chainable\n */\nDelegate.prototype.off = function(eventType, selector, handler, useCapture) {\n  var i, listener, listenerMap, listenerList, singleEventType;\n\n  // Handler can be passed as\n  // the second or third argument\n  if (typeof selector === 'function') {\n    useCapture = handler;\n    handler = selector;\n    selector = null;\n  }\n\n  // If useCapture not set, remove\n  // all event listeners\n  if (useCapture === undefined) {\n    this.off(eventType, selector, handler, true);\n    this.off(eventType, selector, handler, false);\n    return this;\n  }\n\n  listenerMap = this.listenerMap[useCapture ? 1 : 0];\n  if (!eventType) {\n    for (singleEventType in listenerMap) {\n      if (listenerMap.hasOwnProperty(singleEventType)) {\n        this.off(singleEventType, selector, handler);\n      }\n    }\n\n    return this;\n  }\n\n  listenerList = listenerMap[eventType];\n  if (!listenerList || !listenerList.length) {\n    return this;\n  }\n\n  // Remove only parameter matches\n  // if specified\n  for (i = listenerList.length - 1; i >= 0; i--) {\n    listener = listenerList[i];\n\n    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {\n      listenerList.splice(i, 1);\n    }\n  }\n\n  // All listeners removed\n  if (!listenerList.length) {\n    delete listenerMap[eventType];\n\n    // Remove the main handler\n    if (this.rootElement) {\n      this.rootElement.removeEventListener(eventType, this.handle, useCapture);\n    }\n  }\n\n  return this;\n};\n\n\n/**\n * Handle an arbitrary event.\n *\n * @param {Event} event\n */\nDelegate.prototype.handle = function(event) {\n  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';\n\n  if (event[EVENTIGNORE] === true) {\n    return;\n  }\n\n  target = event.target;\n\n  // Hardcode value of Node.TEXT_NODE\n  // as not defined in IE8\n  if (target.nodeType === 3) {\n    target = target.parentNode;\n  }\n\n  root = this.rootElement;\n\n  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );\n  \n  switch (phase) {\n    case 1: //Event.CAPTURING_PHASE:\n      listenerList = this.listenerMap[1][type];\n    break;\n    case 2: //Event.AT_TARGET:\n      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);\n      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);\n    break;\n    case 3: //Event.BUBBLING_PHASE:\n      listenerList = this.listenerMap[0][type];\n    break;\n  }\n\n  // Need to continuously check\n  // that the specific list is\n  // still populated in case one\n  // of the callbacks actually\n  // causes the list to be destroyed.\n  l = listenerList.length;\n  while (target && l) {\n    for (i = 0; i < l; i++) {\n      listener = listenerList[i];\n\n      // Bail from this loop if\n      // the length changed and\n      // no more listeners are\n      // defined between i and l.\n      if (!listener) {\n        break;\n      }\n\n      // Check for match and fire\n      // the event if there's one\n      //\n      // TODO:MCG:20120117: Need a way\n      // to check if event#stopImmediatePropagation\n      // was called. If so, break both loops.\n      if (listener.matcher.call(target, listener.matcherParam, target)) {\n        returned = this.fire(event, target, listener);\n      }\n\n      // Stop propagation to subsequent\n      // callbacks if the callback returned\n      // false\n      if (returned === false) {\n        event[EVENTIGNORE] = true;\n        event.preventDefault();\n        return;\n      }\n    }\n\n    // TODO:MCG:20120117: Need a way to\n    // check if event#stopPropagation\n    // was called. If so, break looping\n    // through the DOM. Stop if the\n    // delegation root has been reached\n    if (target === root) {\n      break;\n    }\n\n    l = listenerList.length;\n    target = target.parentElement;\n  }\n};\n\n/**\n * Fire a listener on a target.\n *\n * @param {Event} event\n * @param {Node} target\n * @param {Object} listener\n * @returns {boolean}\n */\nDelegate.prototype.fire = function(event, target, listener) {\n  return listener.handler.call(target, event, target);\n};\n\n/**\n * Check whether an element\n * matches a generic selector.\n *\n * @type function()\n * @param {string} selector A CSS selector\n */\nvar matches = (function(el) {\n  if (!el) return;\n  var p = el.prototype;\n  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);\n}(Element));\n\n/**\n * Check whether an element\n * matches a tag selector.\n *\n * Tags are NOT case-sensitive,\n * except in XML (and XML-based\n * languages such as XHTML).\n *\n * @param {string} tagName The tag name to test against\n * @param {Element} element The element to test with\n * @returns boolean\n */\nfunction matchesTag(tagName, element) {\n  return tagName.toLowerCase() === element.tagName.toLowerCase();\n}\n\n/**\n * Check whether an element\n * matches the root.\n *\n * @param {?String} selector In this case this is always passed through as null and not used\n * @param {Element} element The element to test with\n * @returns boolean\n */\nfunction matchesRoot(selector, element) {\n  /*jshint validthis:true*/\n  if (this.rootElement === window) return element === document;\n  return this.rootElement === element;\n}\n\n/**\n * Check whether the ID of\n * the element in 'this'\n * matches the given ID.\n *\n * IDs are case-sensitive.\n *\n * @param {string} id The ID to test against\n * @param {Element} element The element to test with\n * @returns boolean\n */\nfunction matchesId(id, element) {\n  return id === element.id;\n}\n\n/**\n * Short hand for off()\n * and root(), ie both\n * with no parameters\n *\n * @return void\n */\nDelegate.prototype.destroy = function() {\n  this.off();\n  this.root();\n};\n\n\n//# sourceURL=webpack:///./node_modules/dom-delegate/lib/delegate.js?");

/***/ }),

/***/ "./node_modules/dom-delegate/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/dom-delegate/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*jshint browser:true, node:true*/\n\n\n\n/**\n * @preserve Create and manage a DOM event delegator.\n *\n * @version 0.3.0\n * @codingstandard ftlabs-jsv2\n * @copyright The Financial Times Limited [All Rights Reserved]\n * @license MIT License (see LICENSE.txt)\n */\nvar Delegate = __webpack_require__(/*! ./delegate */ \"./node_modules/dom-delegate/lib/delegate.js\");\n\nmodule.exports = function(root) {\n  return new Delegate(root);\n};\n\nmodule.exports.Delegate = Delegate;\n\n\n//# sourceURL=webpack:///./node_modules/dom-delegate/lib/index.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/classes/Component.js":
/*!*********************************************************!*\
  !*** ./node_modules/hyperhtml/esm/classes/Component.js ***!
  \*********************************************************/
/*! exports provided: default, setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setup\", function() { return setup; });\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/esm/shared/constants.js\");\n/* harmony import */ var _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/esm/shared/poorlyfills.js\");\n\n\n\n// hyperHTML.Component is a very basic class\n// able to create Custom Elements like components\n// including the ability to listen to connect/disconnect\n// events via onconnect/ondisconnect attributes\n// Components can be created imperatively or declaratively.\n// The main difference is that declared components\n// will not automatically render on setState(...)\n// to simplify state handling on render.\nfunction Component() {}\n\n// components will lazily define html or svg properties\n// as soon as these are invoked within the .render() method\n// Such render() method is not provided by the base class\n// but it must be available through the Component extend.\n// Declared components could implement a\n// render(props) method too and use props as needed.\nfunction setup(content) {\n  const children = new _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_1__[\"WeakMap\"];\n  const create = Object.create;\n  const createEntry = (wm, id, component) => {\n    wm.set(id, component);\n    return component;\n  };\n  const get = (Class, info, id) => {\n    switch (typeof id) {\n      case 'object':\n      case 'function':\n        const wm = info.w || (info.w = new _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_1__[\"WeakMap\"]);\n        return wm.get(id) || createEntry(wm, id, new Class);\n      default:\n        const sm = info.p || (info.p = create(null));\n        return sm[id] || (sm[id] = new Class);\n    }\n  };\n  const set = context => {\n    const info = {w: null, p: null};\n    children.set(context, info);\n    return info;\n  };\n  Object.defineProperties(\n    Component,\n    {\n      for: {\n        configurable: true,\n        value(context, id) {\n          const info = children.get(context) || set(context);\n          return get(this, info, id == null ? 'default' : id);\n        }\n      }\n    }\n  );\n  Object.defineProperties(\n    Component.prototype,\n    {\n      handleEvent: {value(e) {\n        const ct = e.currentTarget;\n        this[\n          ('getAttribute' in ct && ct.getAttribute('data-call')) ||\n          ('on' + e.type)\n        ](e);\n      }},\n      html: lazyGetter('html', content),\n      svg: lazyGetter('svg', content),\n      state: lazyGetter('state', function () { return this.defaultState; }),\n      defaultState: {get() { return {}; }},\n      setState: {value(state, render) {\n        const target = this.state;\n        const source = typeof state === 'function' ? state.call(this, target) : state;\n        for (const key in source) target[key] = source[key];\n        if (render !== false) this.render();\n        return this;\n      }}\n    }\n  );\n}\n\n// instead of a secret key I could've used a WeakMap\n// However, attaching a property directly will result\n// into better performance with thousands of components\n// hanging around, and less memory pressure caused by the WeakMap\nconst lazyGetter = (type, fn) => {\n  const secret = '_' + type + '$';\n  return {\n    get() {\n      return this[secret] || (this[type] = fn.call(this, type));\n    },\n    set(value) {\n      Object.defineProperty(this, secret, {configurable: true, value});\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/classes/Component.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/classes/Wire.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/esm/classes/Wire.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wire; });\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/esm/shared/utils.js\");\n/* harmony import */ var _shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/easy-dom.js */ \"./node_modules/hyperhtml/esm/shared/easy-dom.js\");\n\n\n\nfunction Wire(childNodes) {\n  this.childNodes = childNodes;\n  this.length = childNodes.length;\n  this.first = childNodes[0];\n  this.last = childNodes[this.length - 1];\n}\n\n// when a wire is inserted, all its nodes will follow\nWire.prototype.insert = function insert() {\n  const df = Object(_shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"fragment\"])(this.first);\n  Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"append\"])(df, this.childNodes);\n  return df;\n};\n\n// when a wire is removed, all its nodes must be removed as well\nWire.prototype.remove = function remove() {\n  const first = this.first;\n  const last = this.last;\n  if (this.length === 2) {\n    last.parentNode.removeChild(last);\n  } else {\n    const range = Object(_shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_1__[\"doc\"])(first).createRange();\n    range.setStartBefore(this.childNodes[1]);\n    range.setEndAfter(last);\n    range.deleteContents();\n  }\n  return first;\n};\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/classes/Wire.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/hyper/render.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/esm/hyper/render.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/esm/shared/poorlyfills.js\");\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/esm/shared/constants.js\");\n/* harmony import */ var _objects_Updates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/Updates.js */ \"./node_modules/hyperhtml/esm/objects/Updates.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/esm/shared/utils.js\");\n/* harmony import */ var _shared_re_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/re.js */ \"./node_modules/hyperhtml/esm/shared/re.js\");\n\n\n\n\n\n\n\n// a weak collection of contexts that\n// are already known to hyperHTML\nconst bewitched = new _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_0__[\"WeakMap\"];\n\n// the collection of all template literals\n// since these are unique and immutable\n// for the whole application life-cycle\nconst templates = new _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_0__[\"Map\"];\n\n// better known as hyper.bind(node), the render is\n// the main tag function in charge of fully upgrading\n// or simply updating, contexts used as hyperHTML targets.\n// The `this` context is either a regular DOM node or a fragment.\nfunction render(template) {\n  const wicked = bewitched.get(this);\n  if (wicked && wicked.template === Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"unique\"])(template)) {\n    update.apply(wicked.updates, arguments);\n  } else {\n    upgrade.apply(this, arguments);\n  }\n  return this;\n}\n\n// an upgrade is in charge of collecting template info,\n// parse it once, if unknown, to map all interpolations\n// as single DOM callbacks, relate such template\n// to the current context, and render it after cleaning the context up\nfunction upgrade(template) {\n  template = Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"unique\"])(template);\n  const info =  templates.get(template) ||\n                createTemplate.call(this, template);\n  const fragment = Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"importNode\"])(this.ownerDocument, info.fragment);\n  const updates = _objects_Updates_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(fragment, info.paths);\n  bewitched.set(this, {template, updates});\n  update.apply(updates, arguments);\n  this.textContent = '';\n  this.appendChild(fragment);\n}\n\n// an update simply loops over all mapped DOM operations\nfunction update() {\n  const length = arguments.length;\n  for (let i = 1; i < length; i++) {\n    this[i - 1](arguments[i]);\n  }\n}\n\n// a template can be used to create a document fragment\n// aware of all interpolations and with a list\n// of paths used to find once those nodes that need updates,\n// no matter if these are attributes, text nodes, or regular one\nfunction createTemplate(template) {\n  const paths = [];\n  const html = template.join(_shared_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"UIDC\"]).replace(SC_RE, SC_PLACE);\n  const fragment = Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"createFragment\"])(this, html);\n  _objects_Updates_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(fragment, paths, template.slice());\n  const info = {fragment, paths};\n  templates.set(template, info);\n  return info;\n}\n\n// some node could be special though, like a custom element\n// with a self closing tag, which should work through these changes.\nconst SC_RE = _shared_re_js__WEBPACK_IMPORTED_MODULE_4__[\"selfClosing\"];\nconst SC_PLACE = ($0, $1, $2) => {\n  return _shared_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"VOID_ELEMENTS\"].test($1) ? $0 : ('<' + $1 + $2 + '></' + $1 + '>');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/hyper/render.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/hyper/wire.js":
/*!**************************************************!*\
  !*** ./node_modules/hyperhtml/esm/hyper/wire.js ***!
  \**************************************************/
/*! exports provided: content, weakly, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weakly\", function() { return weakly; });\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/esm/shared/constants.js\");\n/* harmony import */ var _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/esm/shared/poorlyfills.js\");\n/* harmony import */ var _shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/easy-dom.js */ \"./node_modules/hyperhtml/esm/shared/easy-dom.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/esm/shared/utils.js\");\n/* harmony import */ var _classes_Wire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/Wire.js */ \"./node_modules/hyperhtml/esm/classes/Wire.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render.js */ \"./node_modules/hyperhtml/esm/hyper/render.js\");\n\n\n\n\n\n\n\n// all wires used per each context\nconst wires = new _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_1__[\"WeakMap\"];\n\n// A wire is a callback used as tag function\n// to lazily relate a generic object to a template literal.\n// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user\n// This provides the ability to have a unique DOM structure\n// related to a unique JS object through a reusable template literal.\n// A wire can specify a type, as svg or html, and also an id\n// via html:id or :id convention. Such :id allows same JS objects\n// to be associated to different DOM structures accordingly with\n// the used template literal without losing previously rendered parts.\nconst wire = (obj, type) => obj == null ?\n  content(type || 'html') :\n  weakly(obj, type || 'html');\n\n// A wire content is a virtual reference to one or more nodes.\n// It's represented by either a DOM node, or an Array.\n// In both cases, the wire content role is to simply update\n// all nodes through the list of related callbacks.\n// In few words, a wire content is like an invisible parent node\n// in charge of updating its content like a bound element would do.\nconst content = type => {\n  let wire, container, content, template, updates;\n  return function (statics) {\n    statics = Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"unique\"])(statics);\n    let setup = template !== statics;\n    if (setup) {\n      template = statics;\n      content = Object(_shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"fragment\"])(document);\n      container = type === 'svg' ?\n        document.createElementNS(_shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"SVG_NAMESPACE\"], 'svg') :\n        content;\n      updates = _render_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bind(container);\n    }\n    updates.apply(null, arguments);\n    if (setup) {\n      if (type === 'svg') {\n        Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"append\"])(content, _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__[\"slice\"].call(container.childNodes));\n      }\n      wire = wireContent(content);\n    }\n    return wire;\n  };\n};\n\n// wires are weakly created through objects.\n// Each object can have multiple wires associated\n// and this is thanks to the type + :id feature.\nconst weakly = (obj, type) => {\n  const i = type.indexOf(':');\n  let wire = wires.get(obj);\n  let id = type;\n  if (-1 < i) {\n    id = type.slice(i + 1);\n    type = type.slice(0, i) || 'html';\n  }\n  try {\n    if (!wire) wires.set(obj, wire = {});\n  } catch(e) {\n    debugger;\n  }\n  return wire[id] || (wire[id] = content(type));\n};\n\n// a document fragment loses its nodes as soon\n// as it's appended into another node.\n// This would easily lose wired content\n// so that on a second render call, the parent\n// node wouldn't know which node was there\n// associated to the interpolation.\n// To prevent hyperHTML to forget about wired nodes,\n// these are either returned as Array or, if there's ony one entry,\n// as single referenced node that won't disappear from the fragment.\n// The initial fragment, at this point, would be used as unique reference.\nconst wireContent = node => {\n  const childNodes = node.childNodes;\n  const length = childNodes.length;\n  const wireNodes = [];\n  for (let i = 0; i < length; i++) {\n    let child = childNodes[i];\n    if (\n      child.nodeType === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"ELEMENT_NODE\"] ||\n      _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_1__[\"trim\"].call(child.textContent).length !== 0\n    ) {\n      wireNodes.push(child);\n    }\n  }\n  return wireNodes.length === 1 ? wireNodes[0] : new _classes_Wire_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](wireNodes);\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (wire);\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/hyper/wire.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/hyperhtml/esm/index.js ***!
  \*********************************************/
/*! exports provided: Component, bind, define, diff, hyper, wire, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"define\", function() { return define; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hyper\", function() { return hyper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hyper; });\n/* harmony import */ var _classes_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Component.js */ \"./node_modules/hyperhtml/esm/classes/Component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _classes_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _objects_Intent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Intent.js */ \"./node_modules/hyperhtml/esm/objects/Intent.js\");\n/* harmony import */ var _hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hyper/wire.js */ \"./node_modules/hyperhtml/esm/hyper/wire.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"wire\", function() { return _hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _hyper_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hyper/render.js */ \"./node_modules/hyperhtml/esm/hyper/render.js\");\n/* harmony import */ var _shared_domdiff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/domdiff.js */ \"./node_modules/hyperhtml/esm/shared/domdiff.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"diff\", function() { return _shared_domdiff_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/*! (c) Andrea Giammarchi (ISC) */\n\n\n\n\n\n\n\n// all functions are self bound to the right context\n// you can do the following\n// const {bind, wire} = hyperHTML;\n// and use them right away: bind(node)`hello!`;\nconst bind = context => _hyper_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].bind(context);\nconst define = _objects_Intent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].define;\n\nhyper.Component = _classes_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nhyper.bind = bind;\nhyper.define = define;\nhyper.diff = _shared_domdiff_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nhyper.hyper = hyper;\nhyper.wire = _hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n// the wire content is the lazy defined\n// html or svg property of each hyper.Component\nObject(_classes_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"setup\"])(_hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__[\"content\"]);\n\n// everything is exported directly or through the\n// hyperHTML callback, when used as top level script\n\n\n// by default, hyperHTML is a smart function\n// that \"magically\" understands what's the best\n// thing to do with passed arguments\nfunction hyper(HTML) {\n  return arguments.length < 2 ?\n    (HTML == null ?\n      Object(_hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__[\"content\"])('html') :\n      (typeof HTML === 'string' ?\n        hyper.wire(null, HTML) :\n        ('raw' in HTML ?\n          Object(_hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__[\"content\"])('html')(HTML) :\n          ('nodeType' in HTML ?\n            hyper.bind(HTML) :\n            Object(_hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__[\"weakly\"])(HTML, 'html')\n          )\n        )\n      )) :\n    ('raw' in HTML ?\n      Object(_hyper_wire_js__WEBPACK_IMPORTED_MODULE_2__[\"content\"])('html') : hyper.wire\n    ).apply(null, arguments);\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/index.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/objects/Intent.js":
/*!******************************************************!*\
  !*** ./node_modules/hyperhtml/esm/objects/Intent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst intents = {};\nconst keys = [];\nconst hasOwnProperty = intents.hasOwnProperty;\n\nlet length = 0;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  // hyperHTML.define('intent', (object, update) => {...})\n  // can be used to define a third parts update mechanism\n  // when every other known mechanism failed.\n  // hyper.define('user', info => info.name);\n  // hyper(node)`<p>${{user}}</p>`;\n  define: (intent, callback) => {\n    if (!(intent in intents)) {\n      length = keys.push(intent);\n    }\n    intents[intent] = callback;\n  },\n\n  // this method is used internally as last resort\n  // to retrieve a value out of an object\n  invoke: (object, callback) => {\n    for (let i = 0; i < length; i++) {\n      let key = keys[i];\n      if (hasOwnProperty.call(object, key)) {\n        return intents[key](object[key], callback);\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/objects/Intent.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/objects/Path.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/esm/objects/Path.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/esm/shared/constants.js\");\n\n\n// every template literal interpolation indicates\n// a precise target in the DOM the template is representing.\n// `<p id=${'attribute'}>some ${'content'}</p>`\n// hyperHTML finds only once per template literal,\n// hence once per entire application life-cycle,\n// all nodes that are related to interpolations.\n// These nodes are stored as indexes used to retrieve,\n// once per upgrade, nodes that will change on each future update.\n// A path example is [2, 0, 1] representing the operation:\n// node.childNodes[2].childNodes[0].childNodes[1]\n// Attributes are addressed via their owner node and their name.\nconst createPath = node => {\n  const path = [];\n  let parentNode;\n  switch (node.nodeType) {\n    case _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"ELEMENT_NODE\"]:\n    case _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOCUMENT_FRAGMENT_NODE\"]:\n      parentNode = node;\n      break;\n    case _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"COMMENT_NODE\"]:\n      parentNode = node.parentNode;\n      prepend(path, parentNode, node);\n      break;\n    default:\n      parentNode = node.ownerElement;\n      break;\n  }\n  for (\n    node = parentNode;\n    (parentNode = parentNode.parentNode);\n    node = parentNode\n  ) {\n    prepend(path, parentNode, node);\n  }\n  return path;\n};\n\nconst prepend = (path, parent, node) => {\n  path.unshift(path.indexOf.call(parent.childNodes, node));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create: (type, node, name) => ({type, name, node, path: createPath(node)}),\n  find: (node, path) => {\n    const length = path.length;\n    for (let i = 0; i < length; i++) {\n      node = node.childNodes[path[i]];\n    }\n    return node;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/objects/Path.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/objects/Style.js":
/*!*****************************************************!*\
  !*** ./node_modules/hyperhtml/esm/objects/Style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/constants.js\nconst IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;\n\n// style is handled as both string and object\n// even if the target is an SVG element (consistency)\n/* harmony default export */ __webpack_exports__[\"default\"] = ((node, original, isSVG) => {\n  if (isSVG) {\n    const style = original.cloneNode(true);\n    style.value = '';\n    node.setAttributeNode(style);\n    return update(style, isSVG);\n  }\n  return update(node.style, isSVG);\n});\n\n// the update takes care or changing/replacing\n// only properties that are different or\n// in case of string, the whole node\nconst update = (style, isSVG) => {\n  let oldType, oldValue;\n  return newValue => {\n    switch (typeof newValue) {\n      case 'object':\n        if (newValue) {\n          if (oldType === 'object') {\n            if (!isSVG) {\n              if (oldValue !== newValue) {\n                for (const key in oldValue) {\n                  if (!(key in newValue)) {\n                    style[key] = '';\n                  }\n                }\n              }\n            }\n          } else {\n            if (isSVG) style.value = '';\n            else style.cssText = '';\n          }\n          const info = isSVG ? {} : style;\n          for (const key in newValue) {\n            const value = newValue[key];\n            info[key] = typeof value === 'number' &&\n                        !IS_NON_DIMENSIONAL.test(key) ?\n                          (value + 'px') : value;\n          }\n          oldType = 'object';\n          if (isSVG) style.value = toStyle((oldValue = info));\n          else oldValue = newValue;\n          break;\n        }\n      default:\n        if (oldValue != newValue) {\n          oldType = 'string';\n          oldValue = newValue;\n          if (isSVG) style.value = newValue || '';\n          else style.cssText = newValue || '';\n        }\n        break;\n    }\n  };\n};\n\nconst hyphen = /([^A-Z])([A-Z]+)/g;\nconst ized = ($0, $1, $2) => $1 + '-' + $2.toLowerCase();\nconst toStyle = object => {\n  const css = [];\n  for (const key in object) {\n    css.push(key.replace(hyphen, ized), ':', object[key], ';');\n  }\n  return css.join('');\n};\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/objects/Style.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/objects/Updates.js":
/*!*******************************************************!*\
  !*** ./node_modules/hyperhtml/esm/objects/Updates.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants.js */ \"./node_modules/hyperhtml/esm/shared/constants.js\");\n/* harmony import */ var _classes_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Component.js */ \"./node_modules/hyperhtml/esm/classes/Component.js\");\n/* harmony import */ var _classes_Wire_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Wire.js */ \"./node_modules/hyperhtml/esm/classes/Wire.js\");\n/* harmony import */ var _Path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path.js */ \"./node_modules/hyperhtml/esm/objects/Path.js\");\n/* harmony import */ var _Style_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style.js */ \"./node_modules/hyperhtml/esm/objects/Style.js\");\n/* harmony import */ var _Intent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Intent.js */ \"./node_modules/hyperhtml/esm/objects/Intent.js\");\n/* harmony import */ var _shared_domdiff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/domdiff.js */ \"./node_modules/hyperhtml/esm/shared/domdiff.js\");\n/* harmony import */ var _shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/easy-dom.js */ \"./node_modules/hyperhtml/esm/shared/easy-dom.js\");\n/* harmony import */ var _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/poorlyfills.js */ \"./node_modules/hyperhtml/esm/shared/poorlyfills.js\");\n/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/utils.js */ \"./node_modules/hyperhtml/esm/shared/utils.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// hyper.Component have a connected/disconnected\n// mechanism provided by MutationObserver\n// This weak set is used to recognize components\n// as DOM node that needs to trigger connected/disconnected events\nconst components = new _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_8__[\"WeakSet\"];\n\n// a basic dictionary used to filter already cached attributes\n// while looking for special hyperHTML values.\nfunction Cache() {}\nCache.prototype = Object.create(null);\n\n// returns an intent to explicitly inject content as html\nconst asHTML = html => ({html});\n\n// returns nodes from wires and components\nconst asNode = (item, i) => {\n  return 'ELEMENT_NODE' in item ?\n    item :\n    (item.constructor === _classes_Wire_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] ?\n      // in the Wire case, the content can be\n      // removed, post-pended, inserted, or pre-pended and\n      // all these cases are handled by domdiff already\n      /* istanbul ignore next */\n      ((1 / i) < 0 ?\n        (i ? item.remove() : item.last) :\n        (i ? item.insert() : item.first)) :\n      asNode(item.render(), i));\n}\n\n// returns true if domdiff can handle the value\nconst canDiff = value =>  'ELEMENT_NODE' in value ||\nvalue instanceof _classes_Wire_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] ||\nvalue instanceof _classes_Component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n// updates are created once per context upgrade\n// within the main render function (../hyper/render.js)\n// These are an Array of callbacks to invoke passing\n// each interpolation value.\n// Updates can be related to any kind of content,\n// attributes, or special text-only cases such <style>\n// elements or <textarea>\nconst create = (root, paths) => {\n  const updates = [];\n  const length = paths.length;\n  for (let i = 0; i < length; i++) {\n    const info = paths[i];\n    const node = _Path_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(root, info.path);\n    switch (info.type) {\n      case 'any':\n        updates.push(setAnyContent(node, []));\n        break;\n      case 'attr':\n        updates.push(setAttribute(node, info.name, info.node));\n        break;\n      case 'text':\n        updates.push(setTextContent(node));\n        break;\n    }\n  }\n  return updates;\n};\n\n// finding all paths is a one-off operation performed\n// when a new template literal is used.\n// The goal is to map all target nodes that will be\n// used to update content/attributes every time\n// the same template literal is used to create content.\n// The result is a list of paths related to the template\n// with all the necessary info to create updates as\n// list of callbacks that target directly affected nodes.\nconst find = (node, paths, parts) => {\n  const childNodes = node.childNodes;\n  const length = childNodes.length;\n  for (let i = 0; i < length; i++) {\n    let child = childNodes[i];\n    switch (child.nodeType) {\n      case _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"ELEMENT_NODE\"]:\n        findAttributes(child, paths, parts);\n        find(child, paths, parts);\n        break;\n      case _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"COMMENT_NODE\"]:\n        if (child.textContent === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"UID\"]) {\n          parts.shift();\n          paths.push(\n            // basicHTML or other non standard engines\n            // might end up having comments in nodes\n            // where they shouldn't, hence this check.\n            _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"SHOULD_USE_TEXT_CONTENT\"].test(node.nodeName) ?\n              _Path_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create('text', node) :\n              _Path_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create('any', child)\n          );\n        }\n        break;\n      case _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"TEXT_NODE\"]:\n        // the following ignore is actually covered by browsers\n        // only basicHTML ends up on previous COMMENT_NODE case\n        // instead of TEXT_NODE because it knows nothing about\n        // special style or textarea behavior\n        /* istanbul ignore if */\n        if (\n          _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"SHOULD_USE_TEXT_CONTENT\"].test(node.nodeName) &&\n          _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_8__[\"trim\"].call(child.textContent) === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"UIDC\"]\n        ) {\n          parts.shift();\n          paths.push(_Path_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create('text', node));\n        }\n        break;\n    }\n  }\n};\n\n// attributes are searched via unique hyperHTML id value.\n// Despite HTML being case insensitive, hyperHTML is able\n// to recognize attributes by name in a caseSensitive way.\n// This plays well with Custom Elements definitions\n// and also with XML-like environments, without trusting\n// the resulting DOM but the template literal as the source of truth.\n// IE/Edge has a funny bug with attributes and these might be duplicated.\n// This is why there is a cache in charge of being sure no duplicated\n// attributes are ever considered in future updates.\nconst findAttributes = (node, paths, parts) => {\n  const cache = new Cache;\n  const attributes = node.attributes;\n  const array = _shared_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"slice\"].call(attributes);\n  const remove = [];\n  const length = array.length;\n  for (let i = 0; i < length; i++) {\n    const attribute = array[i];\n    if (attribute.value === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"UID\"]) {\n      const name = attribute.name;\n      // the following ignore is covered by IE\n      // and the IE9 double viewBox test\n      /* istanbul ignore else */\n      if (!(name in cache)) {\n        const realName = parts.shift().replace(/^(?:|[\\S\\s]*?\\s)(\\S+?)=['\"]?$/, '$1');\n        cache[name] = attributes[realName] ||\n                      // the following ignore is covered by browsers\n                      // while basicHTML is already case-sensitive\n                      /* istanbul ignore next */\n                      attributes[realName.toLowerCase()];\n        paths.push(_Path_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create('attr', cache[name], realName));\n      }\n      remove.push(attribute);\n    }\n  }\n  const len = remove.length;\n  for (let i = 0; i < len; i++) {\n    node.removeAttributeNode(remove[i]);\n  }\n\n  // This is a very specific Firefox/Safari issue\n  // but since it should be a not so common pattern,\n  // it's probably worth patching regardless.\n  // Basically, scripts created through strings are death.\n  // You need to create fresh new scripts instead.\n  // TODO: is there any other node that needs such nonsense ?\n  const nodeName = node.nodeName;\n  if (/^script$/i.test(nodeName)) {\n    const script = Object(_shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_7__[\"create\"])(node, nodeName);\n    for (let i = 0; i < attributes.length; i++) {\n      script.setAttributeNode(attributes[i].cloneNode(true));\n    }\n    script.textContent = node.textContent;\n    node.parentNode.replaceChild(script, node);\n  }\n};\n\n// when a Promise is used as interpolation value\n// its result must be parsed once resolved.\n// This callback is in charge of understanding what to do\n// with a returned value once the promise is resolved.\nconst invokeAtDistance = (value, callback) => {\n  callback(value.placeholder);\n  if ('text' in value) {\n    Promise.resolve(value.text).then(String).then(callback);\n  } else if ('any' in value) {\n    Promise.resolve(value.any).then(callback);\n  } else if ('html' in value) {\n    Promise.resolve(value.html).then(asHTML).then(callback);\n  } else {\n    Promise.resolve(_Intent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].invoke(value, callback)).then(callback);\n  }\n};\n\n// quick and dirty way to check for Promise/ish values\nconst isPromise_ish = value => value != null && 'then' in value;\n\n// in a hyper(node)`<div>${content}</div>` case\n// everything could happen:\n//  * it's a JS primitive, stored as text\n//  * it's null or undefined, the node should be cleaned\n//  * it's a component, update the content by rendering it\n//  * it's a promise, update the content once resolved\n//  * it's an explicit intent, perform the desired operation\n//  * it's an Array, resolve all values if Promises and/or\n//    update the node with the resulting list of content\nconst setAnyContent = (node, childNodes) => {\n  let fastPath = false;\n  let oldValue;\n  const anyContent = value => {\n    switch (typeof value) {\n      case 'string':\n      case 'number':\n      case 'boolean':\n        if (fastPath) {\n          if (oldValue !== value) {\n            oldValue = value;\n            childNodes[0].textContent = value;\n          }\n        } else {\n          fastPath = true;\n          oldValue = value;\n          childNodes = Object(_shared_domdiff_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n            node.parentNode,\n            childNodes,\n            [Object(_shared_easy_dom_js__WEBPACK_IMPORTED_MODULE_7__[\"text\"])(node, value)],\n            asNode,\n            node\n          );\n        }\n        break;\n      case 'object':\n      case 'undefined':\n        if (value == null) {\n          fastPath = false;\n          childNodes = Object(_shared_domdiff_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n            node.parentNode,\n            childNodes,\n            [],\n            asNode,\n            node\n          );\n          break;\n        }\n      default:\n        fastPath = false;\n        oldValue = value;\n        if (Object(_shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_8__[\"isArray\"])(value)) {\n          if (value.length === 0) {\n            if (childNodes.length) {\n              childNodes = Object(_shared_domdiff_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n                node.parentNode,\n                childNodes,\n                [],\n                asNode,\n                node\n              );\n            }\n          } else {\n            switch (typeof value[0]) {\n              case 'string':\n              case 'number':\n              case 'boolean':\n                anyContent({html: value});\n                break;\n              case 'object':\n                if (Object(_shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_8__[\"isArray\"])(value[0])) {\n                  value = value.concat.apply([], value);\n                }\n                if (isPromise_ish(value[0])) {\n                  Promise.all(value).then(anyContent);\n                  break;\n                }\n              default:\n                childNodes = Object(_shared_domdiff_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n                  node.parentNode,\n                  childNodes,\n                  value,\n                  asNode,\n                  node\n                );\n                break;\n            }\n          }\n        } else if (canDiff(value)) {\n          childNodes = Object(_shared_domdiff_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n            node.parentNode,\n            childNodes,\n            value.nodeType === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOCUMENT_FRAGMENT_NODE\"] ?\n              _shared_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"slice\"].call(value.childNodes) :\n              [value],\n            asNode,\n            node\n          );\n        } else if (isPromise_ish(value)) {\n          value.then(anyContent);\n        } else if ('placeholder' in value) {\n          invokeAtDistance(value, anyContent);\n        } else if ('text' in value) {\n          anyContent(String(value.text));\n        } else if ('any' in value) {\n          anyContent(value.any);\n        } else if ('html' in value) {\n          childNodes = Object(_shared_domdiff_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\n            node.parentNode,\n            childNodes,\n            _shared_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"slice\"].call(\n              Object(_shared_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"createFragment\"])(\n                node,\n                [].concat(value.html).join('')\n              ).childNodes\n            ),\n            asNode,\n            node\n          );\n        } else if ('length' in value) {\n          anyContent(_shared_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"slice\"].call(value));\n        } else {\n          anyContent(_Intent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].invoke(value, anyContent));\n        }\n        break;\n    }\n  };\n  return anyContent;\n};\n\n// there are four kind of attributes, and related behavior:\n//  * events, with a name starting with `on`, to add/remove event listeners\n//  * special, with a name present in their inherited prototype, accessed directly\n//  * regular, accessed through get/setAttribute standard DOM methods\n//  * style, the only regular attribute that also accepts an object as value\n//    so that you can style=${{width: 120}}. In this case, the behavior has been\n//    fully inspired by Preact library and its simplicity.\nconst setAttribute = (node, name, original) => {\n  const isSVG = _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"OWNER_SVG_ELEMENT\"] in node;\n  let oldValue;\n  // if the attribute is the style one\n  // handle it differently from others\n  if (name === 'style') {\n    return Object(_Style_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(node, original, isSVG);\n  }\n  // the name is an event one,\n  // add/remove event listeners accordingly\n  else if (/^on/.test(name)) {\n    let type = name.slice(2);\n    if (type === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CONNECTED\"] || type === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DISCONNECTED\"]) {\n      if (notObserving) {\n        notObserving = false;\n        observe();\n      }\n      components.add(node);\n    }\n    else if (name.toLowerCase() in node) {\n      type = type.toLowerCase();\n    }\n    return newValue => {\n      if (oldValue !== newValue) {\n        if (oldValue) node.removeEventListener(type, oldValue, false);\n        oldValue = newValue;\n        if (newValue) node.addEventListener(type, newValue, false);\n      }\n    };\n  }\n  // the attribute is special ('value' in input)\n  // and it's not SVG *or* the name is exactly data,\n  // in this case assign the value directly\n  else if (name === 'data' || (!isSVG && name in node)) {\n    return newValue => {\n      if (oldValue !== newValue) {\n        oldValue = newValue;\n        if (node[name] !== newValue) {\n          node[name] = newValue;\n          if (newValue == null) {\n            node.removeAttribute(name);\n          }\n        }\n      }\n    };\n  }\n  // in every other case, use the attribute node as it is\n  // update only the value, set it as node only when/if needed\n  else {\n    let owner = false;\n    const attribute = original.cloneNode(true);\n    return newValue => {\n      if (oldValue !== newValue) {\n        oldValue = newValue;\n        if (attribute.value !== newValue) {\n          if (newValue == null) {\n            if (owner) {\n              owner = false;\n              node.removeAttributeNode(attribute);\n            }\n            attribute.value = newValue;\n          } else {\n            attribute.value = newValue;\n            if (!owner) {\n              owner = true;\n              node.setAttributeNode(attribute);\n            }\n          }\n        }\n      }\n    };\n  }\n};\n\n// style or textareas don't accept HTML as content\n// it's pointless to transform or analyze anything\n// different from text there but it's worth checking\n// for possible defined intents.\nconst setTextContent = node => {\n  // avoid hyper comments inside textarea/style when value is undefined\n  let oldValue = '';\n  const textContent = value => {\n    if (oldValue !== value) {\n      oldValue = value;\n      if (typeof value === 'object' && value) {\n        if (isPromise_ish(value)) {\n          value.then(textContent);\n        } else if ('placeholder' in value) {\n          invokeAtDistance(value, textContent);\n        } else if ('text' in value) {\n          textContent(String(value.text));\n        } else if ('any' in value) {\n          textContent(value.any);\n        } else if ('html' in value) {\n          textContent([].concat(value.html).join(''));\n        } else if ('length' in value) {\n          textContent(_shared_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"slice\"].call(value).join(''));\n        } else {\n          textContent(_Intent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].invoke(value, textContent));\n        }\n      } else {\n        node.textContent = value == null ? '' : value;\n      }\n    }\n  };\n  return textContent;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({create, find});\n\n// hyper.Components might need connected/disconnected notifications\n// used by components and their onconnect/ondisconnect callbacks.\n// When one of these callbacks is encountered,\n// the document starts being observed.\nlet notObserving = true;\nfunction observe() {\n\n  // when hyper.Component related DOM nodes\n  // are appended or removed from the live tree\n  // these might listen to connected/disconnected events\n  // This utility is in charge of finding all components\n  // involved in the DOM update/change and dispatch\n  // related information to them\n  const dispatchAll = (nodes, type) => {\n    const event = new _shared_poorlyfills_js__WEBPACK_IMPORTED_MODULE_8__[\"Event\"](type);\n    const length = nodes.length;\n    for (let i = 0; i < length; i++) {\n      let node = nodes[i];\n      if (node.nodeType === _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"ELEMENT_NODE\"]) {\n        dispatchTarget(node, event);\n      }\n    }\n  };\n\n  // the way it's done is via the components weak set\n  // and recursively looking for nested components too\n  const dispatchTarget = (node, event) => {\n    if (components.has(node)) {\n      node.dispatchEvent(event);\n    }\n\n    const children = node.children;\n    const length = children.length;\n    for (let i = 0; i < length; i++) {\n      dispatchTarget(children[i], event);\n    }\n  }\n\n  // The MutationObserver is the best way to implement that\n  // but there is a fallback to deprecated DOMNodeInserted/Removed\n  // so that even older browsers/engines can help components life-cycle\n  try {\n    (new MutationObserver(records => {\n      const length = records.length;\n      for (let i = 0; i < length; i++) {\n        let record = records[i];\n        dispatchAll(record.removedNodes, _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DISCONNECTED\"]);\n        dispatchAll(record.addedNodes, _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CONNECTED\"]);\n      }\n    })).observe(document, {subtree: true, childList: true});\n  } catch(o_O) {\n    document.addEventListener('DOMNodeRemoved', event => {\n      dispatchAll([event.target], _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DISCONNECTED\"]);\n    }, false);\n    document.addEventListener('DOMNodeInserted', event => {\n      dispatchAll([event.target], _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CONNECTED\"]);\n    }, false);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/objects/Updates.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/constants.js ***!
  \********************************************************/
/*! exports provided: G, ELEMENT_NODE, ATTRIBUTE_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE, VOID_ELEMENTS, OWNER_SVG_ELEMENT, SVG_NAMESPACE, CONNECTED, DISCONNECTED, EXPANDO, SHOULD_USE_TEXT_CONTENT, UID, UIDC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"G\", function() { return G; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELEMENT_NODE\", function() { return ELEMENT_NODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ATTRIBUTE_NODE\", function() { return ATTRIBUTE_NODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEXT_NODE\", function() { return TEXT_NODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COMMENT_NODE\", function() { return COMMENT_NODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOCUMENT_FRAGMENT_NODE\", function() { return DOCUMENT_FRAGMENT_NODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VOID_ELEMENTS\", function() { return VOID_ELEMENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OWNER_SVG_ELEMENT\", function() { return OWNER_SVG_ELEMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SVG_NAMESPACE\", function() { return SVG_NAMESPACE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONNECTED\", function() { return CONNECTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DISCONNECTED\", function() { return DISCONNECTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXPANDO\", function() { return EXPANDO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOULD_USE_TEXT_CONTENT\", function() { return SHOULD_USE_TEXT_CONTENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UID\", function() { return UID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UIDC\", function() { return UIDC; });\nconst G = document.defaultView;\n\n// Node.CONSTANTS\n// 'cause some engine has no global Node defined\n// (i.e. Node, NativeScript, basicHTML ... )\nconst ELEMENT_NODE = 1;\nconst ATTRIBUTE_NODE = 2;\nconst TEXT_NODE = 3;\nconst COMMENT_NODE = 8;\nconst DOCUMENT_FRAGMENT_NODE = 11;\n\n// HTML related constants\nconst VOID_ELEMENTS = /^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i;\n\n// SVG related constants\nconst OWNER_SVG_ELEMENT = 'ownerSVGElement';\nconst SVG_NAMESPACE = 'http://www.w3.org/2000/svg';\n\n// Custom Elements / MutationObserver constants\nconst CONNECTED = 'connected';\nconst DISCONNECTED = 'dis' + CONNECTED;\n\n// hyperHTML related constants\nconst EXPANDO = '_hyper: ';\nconst SHOULD_USE_TEXT_CONTENT = /^style|textarea$/i;\nconst UID = EXPANDO + ((Math.random() * new Date) | 0) + ';';\nconst UIDC = '<!--' + UID + '-->';\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/shared/constants.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/domdiff.js":
/*!******************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/domdiff.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* AUTOMATICALLY IMPORTED, DO NOT MODIFY */\n/*! (c) 2017 Andrea Giammarchi (ISC) */\n\n/**\n * This code is a revisited port of the snabbdom vDOM diffing logic,\n * the same that fuels as fork Vue.js or other libraries.\n * @credits https://github.com/snabbdom/snabbdom\n */\n\nconst identity = O => O;\n\nconst domdiff = (\n  parentNode,     // where changes happen\n  currentNodes,   // Array of current items/nodes\n  futureNodes,    // Array of future items/nodes\n  getNode,        // optional way to retrieve a node from an item\n  beforeNode      // optional item/node to use as insertBefore delimiter\n) => {\n  const get = getNode || identity;\n  const before = beforeNode == null ? null : get(beforeNode, 0);\n  let currentStart = 0, futureStart = 0;\n  let currentEnd = currentNodes.length - 1;\n  let currentStartNode = currentNodes[0];\n  let currentEndNode = currentNodes[currentEnd];\n  let futureEnd = futureNodes.length - 1;\n  let futureStartNode = futureNodes[0];\n  let futureEndNode = futureNodes[futureEnd];\n  while (currentStart <= currentEnd && futureStart <= futureEnd) {\n    if (currentStartNode == null) {\n      currentStartNode = currentNodes[++currentStart];\n    }\n    else if (currentEndNode == null) {\n      currentEndNode = currentNodes[--currentEnd];\n    }\n    else if (futureStartNode == null) {\n      futureStartNode = futureNodes[++futureStart];\n    }\n    else if (futureEndNode == null) {\n      futureEndNode = futureNodes[--futureEnd];\n    }\n    else if (currentStartNode == futureStartNode) {\n      currentStartNode = currentNodes[++currentStart];\n      futureStartNode = futureNodes[++futureStart];\n    }\n    else if (currentEndNode == futureEndNode) {\n      currentEndNode = currentNodes[--currentEnd];\n      futureEndNode = futureNodes[--futureEnd];\n    }\n    else if (currentStartNode == futureEndNode) {\n      parentNode.insertBefore(\n        get(currentStartNode, 1),\n        get(currentEndNode, -0).nextSibling\n      );\n      currentStartNode = currentNodes[++currentStart];\n      futureEndNode = futureNodes[--futureEnd];\n    }\n    else if (currentEndNode == futureStartNode) {\n      parentNode.insertBefore(\n        get(currentEndNode, 1),\n        get(currentStartNode, 0)\n      );\n      currentEndNode = currentNodes[--currentEnd];\n      futureStartNode = futureNodes[++futureStart];\n    }\n    else {\n      let index = currentNodes.indexOf(futureStartNode);\n      if (index < 0) {\n        parentNode.insertBefore(\n          get(futureStartNode, 1),\n          get(currentStartNode, 0)\n        );\n        futureStartNode = futureNodes[++futureStart];\n      }\n      else {\n        let el = currentNodes[index];\n        currentNodes[index] = null;\n        parentNode.insertBefore(\n          get(el, 1),\n          get(currentStartNode, 0)\n        );\n        futureStartNode = futureNodes[++futureStart];\n      }\n    }\n  }\n  if (currentStart <= currentEnd || futureStart <= futureEnd) {\n    if (currentStart > currentEnd) {\n      const pin = futureNodes[futureEnd + 1];\n      const place = pin == null ? before : get(pin, 0);\n      if (futureStart === futureEnd) {\n        parentNode.insertBefore(get(futureNodes[futureStart], 1), place);\n      }\n      else {\n        const fragment = parentNode.ownerDocument.createDocumentFragment();\n        while (futureStart <= futureEnd) {\n          fragment.appendChild(get(futureNodes[futureStart++], 1));\n        }\n        parentNode.insertBefore(fragment, place);\n      }\n    }\n    else {\n      if (currentNodes[currentStart] == null) currentStart++;\n      if (currentStart === currentEnd) {\n        parentNode.removeChild(get(currentNodes[currentStart], -1));\n      }\n      else {\n        const range = parentNode.ownerDocument.createRange();\n        range.setStartBefore(get(currentNodes[currentStart], -1));\n        range.setEndAfter(get(currentNodes[currentEnd], -1));\n        range.deleteContents();\n      }\n    }\n  }\n  return futureNodes;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domdiff);\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/shared/domdiff.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/easy-dom.js":
/*!*******************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/easy-dom.js ***!
  \*******************************************************/
/*! exports provided: create, doc, fragment, text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doc\", function() { return doc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fragment\", function() { return fragment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n// these are tiny helpers to simplify most common operations needed here\nconst create = (node, type) => doc(node).createElement(type);\nconst doc = node => node.ownerDocument || node;\nconst fragment = node => doc(node).createDocumentFragment();\nconst text = (node, text) => doc(node).createTextNode(text);\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/shared/easy-dom.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/features-detection.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/features-detection.js ***!
  \*****************************************************************/
/*! exports provided: hasAppend, hasContent, hasDoomedCloneNode, hasImportNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasAppend\", function() { return hasAppend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasContent\", function() { return hasContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasDoomedCloneNode\", function() { return hasDoomedCloneNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasImportNode\", function() { return hasImportNode; });\n/* harmony import */ var _easy_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easy-dom.js */ \"./node_modules/hyperhtml/esm/shared/easy-dom.js\");\n\n\nconst testFragment = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"fragment\"])(document);\n\n// DOM4 node.append(...many)\nconst hasAppend = 'append' in testFragment;\n\n// detect old browsers without HTMLTemplateElement content support\nconst hasContent = 'content' in Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"create\"])(document, 'template');\n\n// IE 11 has problems with cloning templates: it \"forgets\" empty childNodes\ntestFragment.appendChild(Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(testFragment, 'g'));\ntestFragment.appendChild(Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"text\"])(testFragment, ''));\nconst hasDoomedCloneNode = testFragment.cloneNode(true).childNodes.length === 1;\n\n// old browsers need to fallback to cloneNode\n// Custom Elements V0 and V1 will work polyfilled\n// but native implementations need importNode instead\n// (specially Chromium and its old V0 implementation)\nconst hasImportNode = 'importNode' in document;\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/shared/features-detection.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/poorlyfills.js":
/*!**********************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/poorlyfills.js ***!
  \**********************************************************/
/*! exports provided: Event, Map, WeakMap, WeakSet, isArray, trim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Event\", function() { return Event; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeakMap\", function() { return WeakMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeakSet\", function() { return WeakSet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trim\", function() { return trim; });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/hyperhtml/esm/shared/constants.js\");\n\n\n// you know that kind of basics you need to cover\n// your use case only but you don't want to bloat the library?\n// There's even a package in here:\n// https://www.npmjs.com/package/poorlyfills\n\n// used to dispatch simple events\nlet Event = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"G\"].Event;\ntry {\n  new Event('Event');\n} catch(o_O) {\n  Event = function (type) {\n    const e = document.createEvent('Event');\n    e.initEvent(type, false, false);\n    return e;\n  };\n}\n\n\n// used to store template literals\nconst Map = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"G\"].Map || function Map() {\n  const keys = [], values = [];\n  return {\n    get(obj) {\n      return values[keys.indexOf(obj)];\n    },\n    set(obj, value) {\n      values[keys.push(obj) - 1] = value;\n    }\n  };\n};\n\n// used to store wired content\nconst WeakMap = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"G\"].WeakMap || function WeakMap() {\n  return {\n    get(obj) { return obj[_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"UID\"]]; },\n    set(obj, value) {\n      Object.defineProperty(obj, _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"UID\"], {\n        configurable: true,\n        value\n      });\n    }\n  };\n};\n\n// used to store hyper.Components\nconst WeakSet = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"G\"].WeakSet || function WeakSet() {\n  const wm = new WeakMap;\n  return {\n    add(obj) { wm.set(obj, true); },\n    has(obj) { return wm.get(obj) === true; }\n  };\n};\n\n// used to be sure IE9 or older Androids work as expected\nconst isArray = Array.isArray || (toString =>\n  arr => toString.call(arr) === '[object Array]'\n)({}.toString);\n\nconst trim = _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"UID\"].trim || function () {\n  return this.replace(/^\\s+|\\s+$/g, '');\n};\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/shared/poorlyfills.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/re.js":
/*!*************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/re.js ***!
  \*************************************************/
/*! exports provided: attrName, attrSeeker, selfClosing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attrName\", function() { return attrName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"attrSeeker\", function() { return attrSeeker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selfClosing\", function() { return selfClosing; });\n// TODO:  I'd love to code-cover RegExp too here\n//        these are fundamental for this library\n\nconst spaces = ' \\\\f\\\\n\\\\r\\\\t';\nconst almostEverything = '[^ ' + spaces + '\\\\/>\"\\'=]+';\nconst attrName = '[ ' + spaces + ']+' + almostEverything;\nconst tagName = '<([A-Za-z]+[A-Za-z0-9:_-]*)((?:';\nconst attrPartials = '(?:=(?:\\'[^\\']*?\\'|\"[^\"]*?\"|<[^>]*?>|' + almostEverything + '))?)';\n\nconst attrSeeker = new RegExp(\n  tagName + attrName + attrPartials + '+)([ ' + spaces + ']*/?>)',\n  'g'\n);\n\nconst selfClosing = new RegExp(\n  tagName + attrName + attrPartials + '*)([ ' + spaces + ']*/>)',\n  'g'\n);\n\n\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/shared/re.js?");

/***/ }),

/***/ "./node_modules/hyperhtml/esm/shared/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/hyperhtml/esm/shared/utils.js ***!
  \****************************************************/
/*! exports provided: append, createFragment, importNode, slice, unique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"append\", function() { return append; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFragment\", function() { return createFragment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importNode\", function() { return importNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique\", function() { return unique; });\n/* harmony import */ var _re_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./re.js */ \"./node_modules/hyperhtml/esm/shared/re.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/hyperhtml/esm/shared/constants.js\");\n/* harmony import */ var _features_detection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-detection.js */ \"./node_modules/hyperhtml/esm/shared/features-detection.js\");\n/* harmony import */ var _easy_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easy-dom.js */ \"./node_modules/hyperhtml/esm/shared/easy-dom.js\");\n\n\n\n\n\n\n\n\n// appends an array of nodes\n// to a generic node/fragment\n// When available, uses append passing all arguments at once\n// hoping that's somehow faster, even if append has more checks on type\nconst append = _features_detection_js__WEBPACK_IMPORTED_MODULE_2__[\"hasAppend\"] ?\n  (node, childNodes) => {\n    node.append.apply(node, childNodes);\n  } :\n  (node, childNodes) => {\n    const length = childNodes.length;\n    for (let i = 0; i < length; i++) {\n      node.appendChild(childNodes[i]);\n    }\n  };\n\nconst findAttributes = new RegExp('(' + _re_js__WEBPACK_IMPORTED_MODULE_0__[\"attrName\"] + '=)([\\'\"]?)' + _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"UIDC\"] + '\\\\2', 'gi');\nconst comments = ($0, $1, $2, $3) =>\n  '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;\nconst replaceAttributes = ($0, $1, $2) => $1 + ($2 || '\"') + _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"UID\"] + ($2 || '\"');\n\n// given a node and a generic HTML content,\n// create either an SVG or an HTML fragment\n// where such content will be injected\nconst createFragment = (node, html) =>\n  (_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"OWNER_SVG_ELEMENT\"] in node ?\n    SVGFragment :\n    HTMLFragment\n  )(node, html.replace(_re_js__WEBPACK_IMPORTED_MODULE_0__[\"attrSeeker\"], comments));\n\n// IE/Edge shenanigans proof cloneNode\n// it goes through all nodes manually\n// instead of relying the engine to suddenly\n// merge nodes together\nconst cloneNode = _features_detection_js__WEBPACK_IMPORTED_MODULE_2__[\"hasDoomedCloneNode\"] ?\n  node => {\n    const clone = node.cloneNode();\n    const childNodes = node.childNodes ||\n                      // this is an excess of caution\n                      // but some node, in IE, might not\n                      // have childNodes property.\n                      // The following fallback ensure working code\n                      // in older IE without compromising performance\n                      // or any other browser/engine involved.\n                      /* istanbul ignore next */\n                      [];\n    const length = childNodes.length;\n    for (let i = 0; i < length; i++) {\n      clone.appendChild(cloneNode(childNodes[i]));\n    }\n    return clone;\n  } :\n  // the following ignore is due code-coverage\n  // combination of not having document.importNode\n  // but having a working node.cloneNode.\n  // This shenario is common on older Android/WebKit browsers\n  // but basicHTML here tests just two major cases:\n  // with document.importNode or with broken cloneNode.\n  /* istanbul ignore next */\n  node => node.cloneNode(true);\n\n// used to import html into fragments\nconst importNode = _features_detection_js__WEBPACK_IMPORTED_MODULE_2__[\"hasImportNode\"] ?\n  (doc, node) => doc.importNode(node, true) :\n  (doc, node) => cloneNode(node)\n\n// just recycling a one-off array to use slice\n// in every needed place\nconst slice = [].slice;\n\n// lazy evaluated, returns the unique identity\n// of a template literal, as tempalte literal itself.\n// By default, ES2015 template literals are unique\n// tag`a${1}z` === tag`a${2}z`\n// even if interpolated values are different\n// the template chunks are in a frozen Array\n// that is identical each time you use the same\n// literal to represent same static content\n// around its own interpolations.\nconst unique = template => TL(template);\n\n// TL returns a unique version of the template\n// it needs lazy feature detection\n// (cannot trust literals with transpiled code)\nlet TL = template => {\n  if (\n    // TypeScript template literals are not standard\n    template.propertyIsEnumerable('raw') ||\n    (\n      // Firefox < 55 has not standard implementation neither\n      /Firefox\\/(\\d+)/.test((_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"G\"].navigator || {}).userAgent) &&\n      parseFloat(RegExp.$1) < 55\n    )\n  ) {\n    // in these cases, address templates once\n    const templateObjects = {};\n    // but always return the same template\n    TL = template => {\n      const key = '_' + template.join(_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"UID\"]);\n      return templateObjects[key] || (\n        templateObjects[key] = template\n      );\n    };\n  }\n  else {\n    // make TL an identity like function\n    TL = template => template;\n  }\n  return TL(template);\n};\n\n// create document fragments via native template\n// with a fallback for browsers that won't be able\n// to deal with some injected element such <td> or others\nconst HTMLFragment = _features_detection_js__WEBPACK_IMPORTED_MODULE_2__[\"hasContent\"] ?\n  (node, html) => {\n    const container = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"create\"])(node, 'template');\n    container.innerHTML = html;\n    return container.content;\n  } :\n  (node, html) => {\n    const container = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"create\"])(node, 'template');\n    const content = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"fragment\"])(node);\n    if (/^[^\\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {\n      const selector = RegExp.$1;\n      container.innerHTML = '<table>' + html + '</table>';\n      append(content, slice.call(container.querySelectorAll(selector)));\n    } else {\n      container.innerHTML = html;\n      append(content, slice.call(container.childNodes));\n    }\n    return content;\n  };\n\n// creates SVG fragment with a fallback for IE that needs SVG\n// within the HTML content\nconst SVGFragment = _features_detection_js__WEBPACK_IMPORTED_MODULE_2__[\"hasContent\"] ?\n  (node, html) => {\n    const content = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"fragment\"])(node);\n    const container = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"doc\"])(node).createElementNS(_constants_js__WEBPACK_IMPORTED_MODULE_1__[\"SVG_NAMESPACE\"], 'svg');\n    container.innerHTML = html;\n    append(content, slice.call(container.childNodes));\n    return content;\n  } :\n  (node, html) => {\n    const content = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"fragment\"])(node);\n    const container = Object(_easy_dom_js__WEBPACK_IMPORTED_MODULE_3__[\"create\"])(node, 'div');\n    container.innerHTML = '<svg xmlns=\"' + _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"SVG_NAMESPACE\"] + '\">' + html + '</svg>';\n    append(content, slice.call(container.firstChild.childNodes));\n    return content;\n  };\n\n\n//# sourceURL=webpack:///./node_modules/hyperhtml/esm/shared/utils.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(/*! ./runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime-module.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/advice.js":
/*!****************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/advice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _before = __webpack_require__(/*! ./advice/before.js */ \"./node_modules/utility-toolkit/lib/advice/before.js\");\n\nObject.defineProperty(exports, 'before', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_before).default;\n  }\n});\n\nvar _around = __webpack_require__(/*! ./advice/around.js */ \"./node_modules/utility-toolkit/lib/advice/around.js\");\n\nObject.defineProperty(exports, 'around', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_around).default;\n  }\n});\n\nvar _after = __webpack_require__(/*! ./advice/after.js */ \"./node_modules/utility-toolkit/lib/advice/after.js\");\n\nObject.defineProperty(exports, 'after', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_after).default;\n  }\n});\n\nvar _afterThrow = __webpack_require__(/*! ./advice/after-throw.js */ \"./node_modules/utility-toolkit/lib/advice/after-throw.js\");\n\nObject.defineProperty(exports, 'afterThrow', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_afterThrow).default;\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/advice.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/advice/after-throw.js":
/*!****************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/advice/after-throw.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*  */\nexports.default = function (behaviour) {\n  for (var _len = arguments.length, methodNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    methodNames[_key - 1] = arguments[_key];\n  }\n\n  return function (klass) {\n    var proto = klass.prototype;\n    var len = methodNames.length;\n    var defineProperty = Object.defineProperty;\n\n    var _loop = function _loop(i) {\n      var methodName = methodNames[i];\n      var method = proto[methodName];\n      defineProperty(proto, methodName, {\n        value: function value() {\n          try {\n            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n              args[_key2] = arguments[_key2];\n            }\n\n            return method.apply(this, args);\n          } catch (err) {\n            behaviour.call(this, err);\n          }\n        },\n        writable: true\n      });\n    };\n\n    for (var i = 0; i < len; i++) {\n      _loop(i);\n    }\n    return klass;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/advice/after-throw.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/advice/after.js":
/*!**********************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/advice/after.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*  */\nexports.default = function (behaviour) {\n  for (var _len = arguments.length, methodNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    methodNames[_key - 1] = arguments[_key];\n  }\n\n  return function (klass) {\n    var proto = klass.prototype;\n    var len = methodNames.length;\n    var defineProperty = Object.defineProperty;\n\n    var _loop = function _loop(i) {\n      var methodName = methodNames[i];\n      var method = proto[methodName];\n      defineProperty(proto, methodName, {\n        value: function value() {\n          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n            args[_key2] = arguments[_key2];\n          }\n\n          var returnValue = method.apply(this, args);\n          behaviour.apply(this, args);\n          return returnValue;\n        },\n        writable: true\n      });\n    };\n\n    for (var i = 0; i < len; i++) {\n      _loop(i);\n    }\n    return klass;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/advice/after.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/advice/around.js":
/*!***********************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/advice/around.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*  */\nexports.default = function (behaviour) {\n  for (var _len = arguments.length, methodNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    methodNames[_key - 1] = arguments[_key];\n  }\n\n  return function (klass) {\n    var proto = klass.prototype;\n    var len = methodNames.length;\n    var defineProperty = Object.defineProperty;\n\n    var _loop = function _loop(i) {\n      var methodName = methodNames[i];\n      var method = proto[methodName];\n      defineProperty(proto, methodName, {\n        value: function value() {\n          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n            args[_key2] = arguments[_key2];\n          }\n\n          args.unshift(method);\n          behaviour.apply(this, args);\n        },\n        writable: true\n      });\n    };\n\n    for (var i = 0; i < len; i++) {\n      _loop(i);\n    }\n    return klass;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/advice/around.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/advice/before.js":
/*!***********************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/advice/before.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*  */\nexports.default = function (behaviour) {\n  for (var _len = arguments.length, methodNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    methodNames[_key - 1] = arguments[_key];\n  }\n\n  return function (klass) {\n    var proto = klass.prototype;\n    var len = methodNames.length;\n    var defineProperty = Object.defineProperty;\n\n    var _loop = function _loop(i) {\n      var methodName = methodNames[i];\n      var method = proto[methodName];\n      defineProperty(proto, methodName, {\n        value: function value() {\n          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n            args[_key2] = arguments[_key2];\n          }\n\n          behaviour.apply(this, args);\n          return method.apply(this, args);\n        },\n        writable: true\n      });\n    };\n\n    for (var i = 0; i < len; i++) {\n      _loop(i);\n    }\n    return klass;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/advice/before.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/array.js":
/*!***************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*  */\nvar all = exports.all = function all(arr) {\n  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;\n  return arr.every(fn);\n};\n\nvar any = exports.any = function any(arr) {\n  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;\n  return arr.some(fn);\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/array.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _documentReady = __webpack_require__(/*! ./browser/document-ready.js */ \"./node_modules/utility-toolkit/lib/browser/document-ready.js\");\n\nObject.defineProperty(exports, 'documentReady', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_documentReady).default;\n  }\n});\n\nvar _createElement = __webpack_require__(/*! ./browser/create-element.js */ \"./node_modules/utility-toolkit/lib/browser/create-element.js\");\n\nObject.defineProperty(exports, 'createElement', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_createElement).default;\n  }\n});\n\nvar _elementSiblings = __webpack_require__(/*! ./browser/element-siblings.js */ \"./node_modules/utility-toolkit/lib/browser/element-siblings.js\");\n\nObject.defineProperty(exports, 'elementSiblings', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_elementSiblings).default;\n  }\n});\n\nvar _removeElement = __webpack_require__(/*! ./browser/remove-element.js */ \"./node_modules/utility-toolkit/lib/browser/remove-element.js\");\n\nObject.defineProperty(exports, 'removeElement', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_removeElement).default;\n  }\n});\n\nvar _isDescendantElement = __webpack_require__(/*! ./browser/is-descendant-element.js */ \"./node_modules/utility-toolkit/lib/browser/is-descendant-element.js\");\n\nObject.defineProperty(exports, 'isDescendantElement', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_isDescendantElement).default;\n  }\n});\n\nvar _elementChildren = __webpack_require__(/*! ./browser/element-children.js */ \"./node_modules/utility-toolkit/lib/browser/element-children.js\");\n\nObject.defineProperty(exports, 'elementChildren', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_elementChildren).default;\n  }\n});\n\nvar _templateContent = __webpack_require__(/*! ./browser/template-content.js */ \"./node_modules/utility-toolkit/lib/browser/template-content.js\");\n\nObject.defineProperty(exports, 'templateContent', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_templateContent).default;\n  }\n});\n\nvar _microtask = __webpack_require__(/*! ./browser/microtask.js */ \"./node_modules/utility-toolkit/lib/browser/microtask.js\");\n\nObject.defineProperty(exports, 'microTask', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_microtask).default;\n  }\n});\n\nvar _listenEvent = __webpack_require__(/*! ./browser/listen-event.js */ \"./node_modules/utility-toolkit/lib/browser/listen-event.js\");\n\nObject.defineProperty(exports, 'listenEvent', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_listenEvent).default;\n  }\n});\n\nvar _listenEventOnce = __webpack_require__(/*! ./browser/listen-event-once.js */ \"./node_modules/utility-toolkit/lib/browser/listen-event-once.js\");\n\nObject.defineProperty(exports, 'listenEventOnce', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_listenEventOnce).default;\n  }\n});\n\nvar _pausableEvent = __webpack_require__(/*! ./browser/pausable-event.js */ \"./node_modules/utility-toolkit/lib/browser/pausable-event.js\");\n\nObject.defineProperty(exports, 'pausableEvent', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_pausableEvent).default;\n  }\n});\n\nvar _stopEvent = __webpack_require__(/*! ./browser/stop-event.js */ \"./node_modules/utility-toolkit/lib/browser/stop-event.js\");\n\nObject.defineProperty(exports, 'stopEvent', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_stopEvent).default;\n  }\n});\n\nvar _webComponents = __webpack_require__(/*! ./browser/web-components */ \"./node_modules/utility-toolkit/lib/browser/web-components.js\");\n\nObject.keys(_webComponents).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _webComponents[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/create-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/create-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _templateContent = __webpack_require__(/*! ./template-content.js */ \"./node_modules/utility-toolkit/lib/browser/template-content.js\");\n\nvar _templateContent2 = babelHelpers.interopRequireDefault(_templateContent);\n\n/*  */\nexports.default = (0, _environment.browser)(function (html) {\n  var template = document.createElement('template');\n  template.innerHTML = html.trim();\n  var frag = (0, _templateContent2.default)(template);\n  if (frag && frag.firstChild) {\n    return frag.firstChild;\n  }\n  throw new Error('Unable to createElement for ' + html);\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/create-element.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/document-ready.js":
/*!********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/document-ready.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (passThrough) {\n  if (document.readyState === 'loading') {\n    return new Promise(function (resolve) {\n      document.addEventListener('DOMContentLoaded', function () {\n        return resolve(passThrough);\n      });\n    });\n  }\n\n  return Promise.resolve(passThrough);\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/document-ready.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/element-children.js":
/*!**********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/element-children.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (element) {\n  var nodeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Node.ELEMENT_NODE;\n\n  var childNodes = element.childNodes;\n  var children = [];\n  if (childNodes && childNodes.length > 0) {\n    var i = childNodes.length;\n    while (i--) {\n      if (childNodes[i].nodeType === nodeType) {\n        children.unshift(childNodes[i]);\n      }\n    }\n  }\n  return children;\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/element-children.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/element-siblings.js":
/*!**********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/element-siblings.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (node) {\n  var siblings = [];\n  if (node.parentNode && node.parentNode.firstChild) {\n    var sibling = node.parentNode.firstChild;\n    do {\n      if (sibling.nodeType === 1 && sibling !== node) {\n        siblings.push(sibling);\n      }\n    } while (sibling.nextSibling && sibling.nextSibling !== null && (sibling = sibling.nextSibling));\n  }\n\n  return siblings;\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/element-siblings.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/is-descendant-element.js":
/*!***************************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/is-descendant-element.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (child, parent) {\n  /* eslint-disable no-empty */\n  while (child.parentNode && (child = child.parentNode) && child !== parent) {}\n  /* eslint-disable no-empty */\n  return Boolean(child);\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/is-descendant-element.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/listen-event-once.js":
/*!***********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/listen-event-once.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _listenEvent = __webpack_require__(/*! ./listen-event.js */ \"./node_modules/utility-toolkit/lib/browser/listen-event.js\");\n\nvar _listenEvent2 = babelHelpers.interopRequireDefault(_listenEvent);\n\n/*  */\nexports.default = (0, _environment.browser)(function (target, type, listener) {\n  var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  var handle = (0, _listenEvent2.default)(target, type, function () {\n    handle.remove();\n    listener.apply(undefined, arguments);\n  }, capture);\n  return handle;\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/listen-event-once.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/listen-event.js":
/*!******************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/listen-event.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (target, type, listener) {\n  var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  return parse(target, type, listener, capture);\n}); /*  */\n\nfunction addListener(target, type, listener, capture) {\n  if (target.addEventListener) {\n    target.addEventListener(type, listener, capture);\n    return {\n      remove: function remove() {\n        this.remove = function () {};\n        target.removeEventListener(type, listener, capture);\n      }\n    };\n  }\n  throw new Error('target must be an event emitter');\n}\n\nfunction parse(target, type, listener, capture) {\n  if (type.indexOf(',') > -1) {\n    var events = type.split(/\\s*,\\s*/);\n    var handles = events.map(function (type) {\n      return addListener(target, type, listener, capture);\n    });\n    return {\n      remove: function remove() {\n        this.remove = function () {};\n        var handle = void 0;\n        while (handle = handles.pop()) {\n          handle.remove();\n        }\n      }\n    };\n  }\n  return addListener(target, type, listener, capture);\n}\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/listen-event.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/microtask.js":
/*!***************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/microtask.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*  */\n\nvar microTaskCurrHandle = 0;\nvar microTaskLastHandle = 0;\nvar microTaskCallbacks = [];\nvar microTaskNodeContent = 0;\nvar microTaskNode = document.createTextNode('');\nnew MutationObserver(microTaskFlush).observe(microTaskNode, {\n  characterData: true\n});\n\n/**\n * Based on Polymer.async\n */\nvar microTask = {\n  /**\n   * Enqueues a function called at microTask timing.\n   *\n   * @param {Function} callback Callback to run\n   * @return {number} Handle used for canceling task\n   */\n  run: function run(callback) {\n    microTaskNode.textContent = String(microTaskNodeContent++);\n    microTaskCallbacks.push(callback);\n    return microTaskCurrHandle++;\n  },\n\n\n  /**\n   * Cancels a previously enqueued `microTask` callback.\n   *\n   * @param {number} handle Handle returned from `run` of callback to cancel\n   */\n  cancel: function cancel(handle) {\n    var idx = handle - microTaskLastHandle;\n    if (idx >= 0) {\n      if (!microTaskCallbacks[idx]) {\n        throw new Error('invalid async handle: ' + handle);\n      }\n      microTaskCallbacks[idx] = null;\n    }\n  }\n};\n\nexports.default = microTask;\n\n\nfunction microTaskFlush() {\n  var len = microTaskCallbacks.length;\n  for (var i = 0; i < len; i++) {\n    var cb = microTaskCallbacks[i];\n    if (cb && typeof cb === 'function') {\n      try {\n        cb();\n      } catch (err) {\n        setTimeout(function () {\n          throw err;\n        });\n      }\n    }\n  }\n  microTaskCallbacks.splice(0, len);\n  microTaskLastHandle += len;\n}\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/microtask.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/pausable-event.js":
/*!********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/pausable-event.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _listenEvent = __webpack_require__(/*! ./listen-event.js */ \"./node_modules/utility-toolkit/lib/browser/listen-event.js\");\n\nvar _listenEvent2 = babelHelpers.interopRequireDefault(_listenEvent);\n\n/*  */\nexports.default = (0, _environment.browser)(function (target, type, listener) {\n  var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  var paused = false;\n  var handle = (0, _listenEvent2.default)(target, type, function () {\n    if (!paused) {\n      listener.apply(undefined, arguments);\n    }\n  }, capture);\n\n  return {\n    remove: function remove() {\n      handle.remove();\n    },\n    pause: function pause() {\n      paused = true;\n    },\n    resume: function resume() {\n      paused = false;\n    }\n  };\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/pausable-event.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/remove-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/remove-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (element) {\n  if (element.parentElement) {\n    element.parentElement.removeChild(element);\n  }\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/remove-element.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/stop-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/stop-event.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (evt) {\n  if (evt.stopPropagation) {\n    evt.stopPropagation();\n  }\n  evt.preventDefault();\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/stop-event.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/template-content.js":
/*!**********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/template-content.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nexports.default = (0, _environment.browser)(function (template) {\n  if ('content' in document.createElement('template')) {\n    return document.importNode(template.content, true);\n  }\n\n  var fragment = document.createDocumentFragment();\n  var children = template.childNodes;\n  for (var i = 0; i < children.length; i++) {\n    fragment.appendChild(children[i].cloneNode(true));\n  }\n  return fragment;\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/template-content.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/web-components.js":
/*!********************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/web-components.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _customElementMixin = __webpack_require__(/*! ./web-components/custom-element-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/custom-element-mixin.js\");\n\nObject.defineProperty(exports, 'customElement', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_customElementMixin).default;\n  }\n});\n\nvar _stateMixin = __webpack_require__(/*! ./web-components/state-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/state-mixin.js\");\n\nObject.defineProperty(exports, 'state', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_stateMixin).default;\n  }\n});\n\nvar _slotsMixin = __webpack_require__(/*! ./web-components/slots-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/slots-mixin.js\");\n\nObject.defineProperty(exports, 'slots', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_slotsMixin).default;\n  }\n});\n\nvar _eventsMixin = __webpack_require__(/*! ./web-components/events-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/events-mixin.js\");\n\nObject.defineProperty(exports, 'events', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_eventsMixin).default;\n  }\n});\n\nvar _propertiesMixin = __webpack_require__(/*! ./web-components/properties-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/properties-mixin.js\");\n\nObject.defineProperty(exports, 'properties', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_propertiesMixin).default;\n  }\n});\n\nvar _componentMixin = __webpack_require__(/*! ./web-components/component-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/component-mixin.js\");\n\nObject.defineProperty(exports, 'component', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_componentMixin).default;\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/web-components.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/web-components/component-mixin.js":
/*!************************************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/web-components/component-mixin.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classBuilder = __webpack_require__(/*! ../../class-builder.js */ \"./node_modules/utility-toolkit/lib/class-builder.js\");\n\nvar _classBuilder2 = babelHelpers.interopRequireDefault(_classBuilder);\n\nvar _environment = __webpack_require__(/*! ../../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _customElementMixin = __webpack_require__(/*! ./custom-element-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/custom-element-mixin.js\");\n\nvar _customElementMixin2 = babelHelpers.interopRequireDefault(_customElementMixin);\n\nvar _propertiesMixin = __webpack_require__(/*! ./properties-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/properties-mixin.js\");\n\nvar _propertiesMixin2 = babelHelpers.interopRequireDefault(_propertiesMixin);\n\nvar _eventsMixin = __webpack_require__(/*! ./events-mixin.js */ \"./node_modules/utility-toolkit/lib/browser/web-components/events-mixin.js\");\n\nvar _eventsMixin2 = babelHelpers.interopRequireDefault(_eventsMixin);\n\nexports.default = (0, _environment.browser)(function () {\n  var baseClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _customElementMixin2.default)();\n\n  return function (_classBuilder$with) {\n    babelHelpers.inherits(Component, _classBuilder$with);\n\n    function Component() {\n      babelHelpers.classCallCheck(this, Component);\n      return babelHelpers.possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));\n    }\n\n    babelHelpers.createClass(Component, [{\n      key: 'propertiesChanged',\n      value: function propertiesChanged(currentProps, changedProps, oldProps // eslint-disable-line no-unused-vars\n      ) {\n        if (this.initialized) {\n          this.render();\n        }\n      }\n    }]);\n    return Component;\n  }((0, _classBuilder2.default)(baseClass).with(_eventsMixin2.default, _propertiesMixin2.default));\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/web-components/component-mixin.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/web-components/custom-element-mixin.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/web-components/custom-element-mixin.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _createStorage = __webpack_require__(/*! ../../create-storage.js */ \"./node_modules/utility-toolkit/lib/create-storage.js\");\n\nvar _createStorage2 = babelHelpers.interopRequireDefault(_createStorage);\n\nvar _around = __webpack_require__(/*! ../../advice/around.js */ \"./node_modules/utility-toolkit/lib/advice/around.js\");\n\nvar _around2 = babelHelpers.interopRequireDefault(_around);\n\nvar _microtask = __webpack_require__(/*! ../microtask.js */ \"./node_modules/utility-toolkit/lib/browser/microtask.js\");\n\nvar _microtask2 = babelHelpers.interopRequireDefault(_microtask);\n\n/*  */\nvar global = document.defaultView;\n\n// https://github.com/google/traceur-compiler/issues/1709\nif (typeof global.HTMLElement !== 'function') {\n  var _HTMLElement = function HTMLElement() {\n    // eslint-disable-line func-names\n  };\n  _HTMLElement.prototype = global.HTMLElement.prototype;\n  global.HTMLElement = _HTMLElement;\n}\n\nexports.default = (0, _environment.browser)(function (baseClass) {\n  var customElementsV1Callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];\n  var defineProperty = Object.defineProperty,\n      hasOwnProperty = Object.hasOwnProperty;\n\n  var privates = (0, _createStorage2.default)();\n\n  if (!baseClass) {\n    baseClass = function (_global$HTMLElement) {\n      babelHelpers.inherits(baseClass, _global$HTMLElement);\n\n      function baseClass() {\n        babelHelpers.classCallCheck(this, baseClass);\n        return babelHelpers.possibleConstructorReturn(this, (baseClass.__proto__ || Object.getPrototypeOf(baseClass)).apply(this, arguments));\n      }\n\n      return baseClass;\n    }(global.HTMLElement);\n  }\n\n  return function (_baseClass) {\n    babelHelpers.inherits(CustomElement, _baseClass);\n    babelHelpers.createClass(CustomElement, [{\n      key: 'initialized',\n      get: function get() {\n        return privates(this).initialized === true;\n      }\n    }], [{\n      key: 'finalizeClass',\n      value: function finalizeClass() {}\n    }, {\n      key: 'define',\n      value: function define(tagName) {\n        var registry = customElements;\n        if (!registry.get(tagName)) {\n          var proto = this.prototype;\n          customElementsV1Callbacks.forEach(function (callbackMethodName) {\n            if (!hasOwnProperty.call(proto, callbackMethodName)) {\n              defineProperty(proto, callbackMethodName, {\n                value: function value() {},\n\n                configurable: true\n              });\n            }\n            var newCallbackName = callbackMethodName.substring(0, callbackMethodName.length - 'callback'.length);\n            var originalMethod = proto[callbackMethodName];\n            defineProperty(proto, callbackMethodName, {\n              value: function value() {\n                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n                  args[_key] = arguments[_key];\n                }\n\n                this[newCallbackName].apply(this, args);\n                originalMethod.apply(this, args);\n              },\n              configurable: true\n            });\n          });\n\n          this.finalizeClass();\n          (0, _around2.default)(createConnectedAdvice(), 'connected')(this);\n          (0, _around2.default)(createDisconnectedAdvice(), 'disconnected')(this);\n          (0, _around2.default)(createRenderAdvice(), 'render')(this);\n          registry.define(tagName, this);\n        }\n      }\n    }, {\n      key: 'observedAttributes',\n      get: function get() {\n        return [];\n      }\n    }]);\n\n    function CustomElement() {\n      var _ref;\n\n      babelHelpers.classCallCheck(this, CustomElement);\n\n      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      var _this2 = babelHelpers.possibleConstructorReturn(this, (_ref = CustomElement.__proto__ || Object.getPrototypeOf(CustomElement)).call.apply(_ref, [this].concat(args)));\n\n      _this2.construct();\n      return _this2;\n    }\n\n    babelHelpers.createClass(CustomElement, [{\n      key: 'construct',\n      value: function construct() {}\n\n      /* eslint-disable no-unused-vars */\n\n    }, {\n      key: 'attributeChanged',\n      value: function attributeChanged(attributeName, oldValue, newValue) {}\n      /* eslint-enable no-unused-vars */\n\n    }, {\n      key: 'connected',\n      value: function connected() {}\n    }, {\n      key: 'disconnected',\n      value: function disconnected() {}\n    }, {\n      key: 'adopted',\n      value: function adopted() {}\n    }, {\n      key: 'render',\n      value: function render() {}\n    }, {\n      key: '_onRender',\n      value: function _onRender() {}\n    }, {\n      key: '_postRender',\n      value: function _postRender() {}\n    }]);\n    return CustomElement;\n  }(baseClass);\n\n  function createConnectedAdvice() {\n    return function (connectedCallback) {\n      var context = this;\n      privates(context).connected = true;\n      if (!privates(context).initialized) {\n        privates(context).initialized = true;\n        connectedCallback.call(context);\n        context.render();\n      }\n    };\n  }\n\n  function createRenderAdvice() {\n    return function (renderCallback) {\n      var context = this;\n      if (!privates(context).rendering) {\n        var firstRender = privates(context).rendering === undefined;\n        privates(context).rendering = true;\n        _microtask2.default.run(function () {\n          if (privates(context).rendering) {\n            privates(context).rendering = false;\n            context._onRender(firstRender);\n            renderCallback.call(context);\n            context._postRender(firstRender);\n          }\n        });\n      }\n    };\n  }\n\n  function createDisconnectedAdvice() {\n    return function (disconnectedCallback) {\n      var context = this;\n      privates(context).connected = false;\n      _microtask2.default.run(function () {\n        if (!privates(context).connected && privates(context).initialized) {\n          privates(context).initialized = false;\n          disconnectedCallback.call(context);\n        }\n      });\n    };\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/web-components/custom-element-mixin.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/web-components/events-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/web-components/events-mixin.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _after = __webpack_require__(/*! ../../advice/after.js */ \"./node_modules/utility-toolkit/lib/advice/after.js\");\n\nvar _after2 = babelHelpers.interopRequireDefault(_after);\n\nvar _createStorage = __webpack_require__(/*! ../../create-storage.js */ \"./node_modules/utility-toolkit/lib/create-storage.js\");\n\nvar _createStorage2 = babelHelpers.interopRequireDefault(_createStorage);\n\nvar _listenEvent = __webpack_require__(/*! ../listen-event.js */ \"./node_modules/utility-toolkit/lib/browser/listen-event.js\");\n\nvar _listenEvent2 = babelHelpers.interopRequireDefault(_listenEvent);\n\n/**\n * Mixin adds CustomEvent handling to an element\n */\n/*  */\nexports.default = (0, _environment.browser)(function (baseClass) {\n  var assign = Object.assign;\n\n  var privates = (0, _createStorage2.default)(function () {\n    return {\n      handlers: []\n    };\n  });\n  var eventDefaultParams = {\n    bubbles: false,\n    cancelable: false\n  };\n\n  return function (_baseClass) {\n    babelHelpers.inherits(Events, _baseClass);\n\n    function Events() {\n      babelHelpers.classCallCheck(this, Events);\n      return babelHelpers.possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).apply(this, arguments));\n    }\n\n    babelHelpers.createClass(Events, [{\n      key: 'handleEvent',\n      value: function handleEvent(event) {\n        var handle = 'on' + event.type;\n        if (typeof this[handle] === 'function') {\n          // $FlowFixMe\n          this[handle](event);\n        }\n      }\n    }, {\n      key: 'on',\n      value: function on(type, listener, capture) {\n        this.own((0, _listenEvent2.default)(this, type, listener, capture));\n      }\n    }, {\n      key: 'dispatch',\n      value: function dispatch(type) {\n        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n        this.dispatchEvent(new CustomEvent(type, assign(eventDefaultParams, { detail: data })));\n      }\n    }, {\n      key: 'off',\n      value: function off() {\n        privates(this).handlers.forEach(function (handler) {\n          handler.remove();\n        });\n      }\n    }, {\n      key: 'own',\n      value: function own() {\n        var _this2 = this;\n\n        for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {\n          handlers[_key] = arguments[_key];\n        }\n\n        handlers.forEach(function (handler) {\n          privates(_this2).handlers.push(handler);\n        });\n      }\n    }], [{\n      key: 'finalizeClass',\n      value: function finalizeClass() {\n        babelHelpers.get(Events.__proto__ || Object.getPrototypeOf(Events), 'finalizeClass', this).call(this);\n        (0, _after2.default)(createDisconnectedAdvice(), 'disconnected')(this);\n      }\n    }]);\n    return Events;\n  }(baseClass);\n\n  function createDisconnectedAdvice() {\n    return function () {\n      var context = this;\n      context.off();\n    };\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/web-components/events-mixin.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/web-components/properties-mixin.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/web-components/properties-mixin.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _before = __webpack_require__(/*! ../../advice/before.js */ \"./node_modules/utility-toolkit/lib/advice/before.js\");\n\nvar _before2 = babelHelpers.interopRequireDefault(_before);\n\nvar _createStorage = __webpack_require__(/*! ../../create-storage.js */ \"./node_modules/utility-toolkit/lib/create-storage.js\");\n\nvar _createStorage2 = babelHelpers.interopRequireDefault(_createStorage);\n\nvar _microtask = __webpack_require__(/*! ../microtask.js */ \"./node_modules/utility-toolkit/lib/browser/microtask.js\");\n\nvar _microtask2 = babelHelpers.interopRequireDefault(_microtask);\n\n/*  */\nexports.default = (0, _environment.browser)(function (baseClass) {\n  var defineProperty = Object.defineProperty,\n      keys = Object.keys,\n      assign = Object.assign;\n\n  var attributeToPropertyNames = {};\n  var propertyNamesToAttributes = {};\n  var privates = (0, _createStorage2.default)();\n\n  var propertiesConfig = void 0;\n  var dataHasAccessor = {};\n  var dataProtoValues = {};\n\n  function enhancePropertyConfig(config) {\n    config.hasObserver = 'observer' in config;\n    config.isObserverString = config.hasObserver && typeof config.observer === 'string';\n    config.isString = config.type === String;\n    config.isNumber = config.type === Number;\n    config.isBoolean = config.type === Boolean;\n    config.isObject = config.type === Object;\n    config.isArray = config.type === Array;\n    config.isDate = config.type === Date;\n    config.notify = 'notify' in config;\n    config.readOnly = 'readOnly' in config ? config.readOnly : false;\n    config.reflectToAttribute = 'reflectToAttribute' in config ? config.reflectToAttribute : config.isString || config.isNumber || config.isBoolean;\n  }\n\n  function normalizeProperties(properties) {\n    var output = {};\n    for (var name in properties) {\n      if (!Object.hasOwnProperty.call(properties, name)) {\n        continue;\n      }\n      var property = properties[name];\n      output[name] = typeof property === 'function' ? { type: property } : property;\n      enhancePropertyConfig(output[name]);\n    }\n    return output;\n  }\n\n  function createConnectedAdvice() {\n    return function () {\n      var context = this;\n      if (Object.keys(privates(context).initializeProperties).length > 0) {\n        assign(context, privates(context).initializeProperties);\n        privates(context).initializeProperties = {};\n      }\n      context._flushProperties();\n    };\n  }\n\n  function createAttributeChangeAdvice() {\n    return function (attribute, oldValue, newValue) {\n      var context = this;\n      if (oldValue !== newValue) {\n        context._attributeToProperty(attribute, newValue);\n      }\n    };\n  }\n\n  function createPropertiesChangedAdvice() {\n    return function (currentProps, changedProps, oldProps) {\n      var _this = this;\n\n      var context = this;\n      Object.keys(changedProps).forEach(function (property) {\n        var _context$constructor$ = context.constructor.classProperties[property],\n            notify = _context$constructor$.notify,\n            hasObserver = _context$constructor$.hasObserver,\n            reflectToAttribute = _context$constructor$.reflectToAttribute,\n            isObserverString = _context$constructor$.isObserverString,\n            observer = _context$constructor$.observer;\n\n        if (reflectToAttribute) {\n          context._propertyToAttribute(property, changedProps[property]);\n        }\n        if (hasObserver && isObserverString) {\n          _this[observer](changedProps[property], oldProps[property]);\n        } else if (hasObserver && typeof observer === 'function') {\n          observer.apply(context, [changedProps[property], oldProps[property]]);\n        }\n        if (notify) {\n          context.dispatchEvent(new CustomEvent(property + '-changed', {\n            detail: {\n              newValue: changedProps[property],\n              oldValue: oldProps[property]\n            }\n          }));\n        }\n      });\n    };\n  }\n\n  return function (_baseClass) {\n    babelHelpers.inherits(Properties, _baseClass);\n\n    function Properties() {\n      babelHelpers.classCallCheck(this, Properties);\n      return babelHelpers.possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));\n    }\n\n    babelHelpers.createClass(Properties, [{\n      key: 'construct',\n      value: function construct() {\n        babelHelpers.get(Properties.prototype.__proto__ || Object.getPrototypeOf(Properties.prototype), 'construct', this).call(this);\n        privates(this).data = {};\n        privates(this).serializing = false;\n        privates(this).initializeProperties = {};\n        privates(this).dataPending = null;\n        privates(this).dataOld = null;\n        privates(this).dataInvalid = false;\n        this._initializeProtoProperties();\n        this._initializeProperties();\n      }\n    }, {\n      key: 'propertiesChanged',\n      value: function propertiesChanged(currentProps, changedProps, oldProps // eslint-disable-line no-unused-vars\n      ) {}\n    }, {\n      key: '_createPropertyAccessor',\n      value: function _createPropertyAccessor(property, readOnly) {\n        if (!dataHasAccessor[property]) {\n          dataHasAccessor[property] = true;\n          defineProperty(this, property, {\n            enumerable: true,\n            configurable: true,\n            get: function get() {\n              return this._getProperty(property);\n            },\n\n            set: readOnly ? function () {} : function (newValue) {\n              this._setProperty(property, newValue);\n            }\n          });\n        }\n      }\n    }, {\n      key: '_getProperty',\n      value: function _getProperty(property) {\n        return privates(this).data[property];\n      }\n    }, {\n      key: '_setProperty',\n      value: function _setProperty(property, newValue) {\n        if (this._isValidPropertyValue(property, newValue)) {\n          if (this._setPendingProperty(property, newValue)) {\n            this._invalidateProperties();\n          }\n        } else {\n          // eslint-disable-next-line no-console\n          console.log('invalid value ' + newValue + ' for property ' + property + ' of\\n\\t\\t\\t\\t\\ttype ' + this.constructor.classProperties[property].type.name);\n        }\n      }\n    }, {\n      key: '_initializeProtoProperties',\n      value: function _initializeProtoProperties() {\n        var _this3 = this;\n\n        Object.keys(dataProtoValues).forEach(function (property) {\n          var value = typeof dataProtoValues[property] === 'function' ? dataProtoValues[property].call(_this3) : dataProtoValues[property];\n          _this3._setProperty(property, value);\n        });\n      }\n    }, {\n      key: '_initializeProperties',\n      value: function _initializeProperties() {\n        var _this4 = this;\n\n        Object.keys(dataHasAccessor).forEach(function (property) {\n          if (Object.hasOwnProperty.call(_this4, property)) {\n            privates(_this4).initializeProperties[property] = _this4[property];\n            delete _this4[property];\n          }\n        });\n      }\n    }, {\n      key: '_attributeToProperty',\n      value: function _attributeToProperty(attribute, value) {\n        if (!privates(this).serializing) {\n          var property = this.constructor.attributeToPropertyName(attribute);\n          this[property] = this._deserializeValue(property, value);\n        }\n      }\n    }, {\n      key: '_isValidPropertyValue',\n      value: function _isValidPropertyValue(property, value) {\n        var propertyType = this.constructor.classProperties[property].type;\n        var isValid = false;\n        if ((typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) === 'object') {\n          isValid = value instanceof propertyType;\n        } else {\n          isValid = '' + (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) === propertyType.name.toLowerCase();\n        }\n        return isValid;\n      }\n    }, {\n      key: '_propertyToAttribute',\n      value: function _propertyToAttribute(property, value) {\n        privates(this).serializing = true;\n        var attribute = this.constructor.propertyNameToAttribute(property);\n        value = this._serializeValue(property, value);\n        if (value === undefined) {\n          this.removeAttribute(attribute);\n        } else if (this.getAttribute(attribute) !== value) {\n          this.setAttribute(attribute, value);\n        }\n        privates(this).serializing = false;\n      }\n    }, {\n      key: '_deserializeValue',\n      value: function _deserializeValue(property, value) {\n        var _constructor$classPro = this.constructor.classProperties[property],\n            isNumber = _constructor$classPro.isNumber,\n            isArray = _constructor$classPro.isArray,\n            isBoolean = _constructor$classPro.isBoolean,\n            isDate = _constructor$classPro.isDate,\n            isString = _constructor$classPro.isString,\n            isObject = _constructor$classPro.isObject;\n\n        if (isBoolean) {\n          value = value !== null && value !== undefined;\n        } else if (isNumber) {\n          value = value === null || value === undefined ? 0 : Number(value);\n        } else if (isString) {\n          value = value === null || value === undefined ? '' : String(value);\n        } else if (isObject || isArray) {\n          value = value === null || value === undefined ? isArray ? null : {} : JSON.parse(value);\n        } else if (isDate) {\n          value = value === null || value === undefined ? '' : new Date(value);\n        }\n        return value;\n      }\n    }, {\n      key: '_serializeValue',\n      value: function _serializeValue(property, value) {\n        var propertyConfig = this.constructor.classProperties[property];\n        var isBoolean = propertyConfig.isBoolean,\n            isObject = propertyConfig.isObject,\n            isArray = propertyConfig.isArray;\n\n\n        if (isBoolean) {\n          return value ? '' : undefined;\n        }\n        if (isObject || isArray) {\n          return JSON.stringify(value);\n        }\n\n        value = value ? value.toString() : undefined;\n        return value;\n      }\n    }, {\n      key: '_setPendingProperty',\n      value: function _setPendingProperty(property, value) {\n        var old = privates(this).data[property];\n        var changed = this._shouldPropertyChange(property, value, old);\n        if (changed) {\n          if (!privates(this).dataPending) {\n            privates(this).dataPending = {};\n            privates(this).dataOld = {};\n          }\n          // Ensure old is captured from the last turn\n          if (privates(this).dataOld && !(property in privates(this).dataOld)) {\n            privates(this).dataOld[property] = old;\n          }\n          privates(this).data[property] = value;\n          privates(this).dataPending[property] = value;\n        }\n        return changed;\n      }\n    }, {\n      key: '_invalidateProperties',\n      value: function _invalidateProperties() {\n        var _this5 = this;\n\n        if (!privates(this).dataInvalid) {\n          privates(this).dataInvalid = true;\n          _microtask2.default.run(function () {\n            if (privates(_this5).dataInvalid) {\n              privates(_this5).dataInvalid = false;\n              _this5._flushProperties();\n            }\n          });\n        }\n      }\n    }, {\n      key: '_flushProperties',\n      value: function _flushProperties() {\n        var props = privates(this).data;\n        var changedProps = privates(this).dataPending;\n        var old = privates(this).dataOld;\n\n        if (this._shouldPropertiesChange(props, changedProps, old)) {\n          privates(this).dataPending = null;\n          privates(this).dataOld = null;\n          this.propertiesChanged(props, changedProps, old);\n        }\n      }\n    }, {\n      key: '_shouldPropertiesChange',\n      value: function _shouldPropertiesChange(currentProps, changedProps, oldProps // eslint-disable-line no-unused-vars\n      ) {\n        return Boolean(changedProps);\n      }\n    }, {\n      key: '_shouldPropertyChange',\n      value: function _shouldPropertyChange(property, value, old) {\n        return (\n          // Strict equality check\n          old !== value && (\n          // This ensures (old==NaN, value==NaN) always returns false\n          old === old || value === value) // eslint-disable-line no-self-compare\n\n        );\n      }\n    }], [{\n      key: 'finalizeClass',\n      value: function finalizeClass() {\n        babelHelpers.get(Properties.__proto__ || Object.getPrototypeOf(Properties), 'finalizeClass', this).call(this);\n        (0, _before2.default)(createConnectedAdvice(), 'connected')(this);\n        (0, _before2.default)(createAttributeChangeAdvice(), 'attributeChanged')(this);\n        (0, _before2.default)(createPropertiesChangedAdvice(), 'propertiesChanged')(this);\n        this.createProperties();\n      }\n    }, {\n      key: 'attributeToPropertyName',\n      value: function attributeToPropertyName(attribute) {\n        var property = attributeToPropertyNames[attribute];\n        if (!property) {\n          // Convert and memoize.\n          var hypenRegEx = /-([a-z])/g;\n          property = attribute.replace(hypenRegEx, function (match) {\n            return match[1].toUpperCase();\n          });\n          attributeToPropertyNames[attribute] = property;\n        }\n        return property;\n      }\n    }, {\n      key: 'propertyNameToAttribute',\n      value: function propertyNameToAttribute(property) {\n        var attribute = propertyNamesToAttributes[property];\n        if (!attribute) {\n          // Convert and memoize.\n          var uppercaseRegEx = /([A-Z])/g;\n          attribute = property.replace(uppercaseRegEx, '-$1').toLowerCase();\n          propertyNamesToAttributes[property] = attribute;\n        }\n        return attribute;\n      }\n    }, {\n      key: 'createProperties',\n      value: function createProperties() {\n        var proto = this.prototype;\n        var properties = this.classProperties;\n        keys(properties).forEach(function (property) {\n          if (Object.hasOwnProperty.call(proto, property)) {\n            throw new Error('Unable to setup property \\'' + property + '\\', property already exists');\n          }\n          var propertyValue = properties[property].value;\n          if (propertyValue !== undefined) {\n            dataProtoValues[property] = propertyValue;\n          }\n          proto._createPropertyAccessor(property, properties[property].readOnly);\n        });\n      }\n    }, {\n      key: 'observedAttributes',\n      get: function get() {\n        var _this6 = this;\n\n        return Object.keys(this.classProperties).map(function (property) {\n          return _this6.propertyNameToAttribute(property);\n        }) || [];\n      }\n    }, {\n      key: 'classProperties',\n      get: function get() {\n        if (!propertiesConfig) {\n          var getPropertiesConfig = function getPropertiesConfig() {\n            return propertiesConfig || {};\n          };\n          var checkObj = null;\n          var loop = true;\n\n          while (loop) {\n            checkObj = Object.getPrototypeOf(checkObj === null ? this : checkObj);\n            if (!checkObj || !checkObj.constructor || checkObj.constructor === HTMLElement || checkObj.constructor === Function || checkObj.constructor === Object || checkObj.constructor === checkObj.constructor.constructor) {\n              loop = false;\n            }\n            if (Object.hasOwnProperty.call(checkObj, 'properties')) {\n              // $FlowFixMe\n              propertiesConfig = assign(getPropertiesConfig(), // $FlowFixMe\n              normalizeProperties(checkObj.properties));\n            }\n          }\n          if (this.properties) {\n            // $FlowFixMe\n            propertiesConfig = assign(getPropertiesConfig(), // $FlowFixMe\n            normalizeProperties(this.properties));\n          }\n        }\n        return propertiesConfig;\n      }\n    }]);\n    return Properties;\n  }(baseClass);\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/web-components/properties-mixin.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/web-components/slots-mixin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/web-components/slots-mixin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _before = __webpack_require__(/*! ../../advice/before.js */ \"./node_modules/utility-toolkit/lib/advice/before.js\");\n\nvar _before2 = babelHelpers.interopRequireDefault(_before);\n\nvar _elementChildren = __webpack_require__(/*! ../element-children.js */ \"./node_modules/utility-toolkit/lib/browser/element-children.js\");\n\nvar _elementChildren2 = babelHelpers.interopRequireDefault(_elementChildren);\n\nexports.default = (0, _environment.browser)(function (baseClass) {\n  return function (_baseClass) {\n    babelHelpers.inherits(Slots, _baseClass);\n\n    function Slots() {\n      babelHelpers.classCallCheck(this, Slots);\n      return babelHelpers.possibleConstructorReturn(this, (Slots.__proto__ || Object.getPrototypeOf(Slots)).apply(this, arguments));\n    }\n\n    babelHelpers.createClass(Slots, [{\n      key: 'construct',\n      value: function construct() {\n        babelHelpers.get(Slots.prototype.__proto__ || Object.getPrototypeOf(Slots.prototype), 'construct', this).call(this);\n        this.slots = { default: [] };\n      }\n    }, {\n      key: 'slotsAssigned',\n      value: function slotsAssigned() {}\n    }], [{\n      key: 'finalizeClass',\n      value: function finalizeClass() {\n        babelHelpers.get(Slots.__proto__ || Object.getPrototypeOf(Slots), 'finalizeClass', this).call(this);\n        (0, _before2.default)(createBeforeRenderAdvice(), '_onRender')(this);\n      }\n    }]);\n    return Slots;\n  }(baseClass);\n\n  function createBeforeRenderAdvice() {\n    var hypenRegEx = /-([a-z])/g;\n\n    return function (firstRender) {\n      var context = this;\n      if (firstRender) {\n        var children = (0, _elementChildren2.default)(context);\n        children.forEach(function (child) {\n          var attribute = child.getAttribute ? child.getAttribute('slot') : null;\n          if (typeof attribute === 'string' && attribute.length > 0) {\n            var slot = attribute.replace(hypenRegEx, function (match) {\n              return match[1].toUpperCase();\n            });\n            context.slots[slot] = child;\n          } else {\n            context.slots.default.push(child);\n          }\n        });\n        context.slotsAssigned();\n      }\n    };\n  }\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/web-components/slots-mixin.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/browser/web-components/state-mixin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/browser/web-components/state-mixin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(/*! ../../environment.js */ \"./node_modules/utility-toolkit/lib/environment.js\");\n\nvar _createStorage = __webpack_require__(/*! ../../create-storage.js */ \"./node_modules/utility-toolkit/lib/create-storage.js\");\n\nvar _createStorage2 = babelHelpers.interopRequireDefault(_createStorage);\n\nvar _after = __webpack_require__(/*! ../../advice/after.js */ \"./node_modules/utility-toolkit/lib/advice/after.js\");\n\nvar _after2 = babelHelpers.interopRequireDefault(_after);\n\nexports.default = (0, _environment.browser)(function (baseClass) {\n  var assign = Object.assign;\n\n  var privates = (0, _createStorage2.default)();\n\n  return function (_baseClass) {\n    babelHelpers.inherits(State, _baseClass);\n\n    function State() {\n      babelHelpers.classCallCheck(this, State);\n      return babelHelpers.possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).apply(this, arguments));\n    }\n\n    babelHelpers.createClass(State, [{\n      key: 'construct',\n      value: function construct() {\n        babelHelpers.get(State.prototype.__proto__ || Object.getPrototypeOf(State.prototype), 'construct', this).call(this);\n        this.setState(this.defaultState);\n      }\n    }, {\n      key: 'shouldComponentUpdate',\n      value: function shouldComponentUpdate(nextState) {\n        for (var key in nextState) {\n          if (nextState[key] !== privates(this).state[key]) {\n            return true;\n          }\n        }\n        return false;\n      }\n    }, {\n      key: 'setState',\n      value: function setState(changes) {\n        var nextState = assign({}, privates(this).state, changes);\n        var previousState = privates(this).state;\n        var changed = previousState === undefined || this.shouldComponentUpdate(nextState);\n\n        if (changed) {\n          privates(this).state = nextState;\n          if (this.initialized) {\n            this.render();\n          }\n        }\n      }\n\n      // eslint-disable-next-line no-unused-vars\n\n    }, {\n      key: 'componentWillRender',\n      value: function componentWillRender(newState) {}\n\n      // eslint-disable-next-line no-unused-vars\n\n    }, {\n      key: 'componentDidRender',\n      value: function componentDidRender(previousState) {}\n\n      // eslint-disable-next-line no-unused-vars\n\n    }, {\n      key: 'componentWillUpdate',\n      value: function componentWillUpdate(newState, previousState) {}\n\n      // eslint-disable-next-line no-unused-vars\n\n    }, {\n      key: 'componentDidUpdate',\n      value: function componentDidUpdate(previousState) {}\n    }, {\n      key: 'defaultState',\n      get: function get() {\n        return {};\n      }\n    }, {\n      key: 'state',\n      get: function get() {\n        return assign({}, privates(this).state);\n      }\n    }], [{\n      key: 'finalizeClass',\n      value: function finalizeClass() {\n        babelHelpers.get(State.__proto__ || Object.getPrototypeOf(State), 'finalizeClass', this).call(this);\n        (0, _after2.default)(createBeforeRenderAdvice(), '_onRender')(this);\n        (0, _after2.default)(createAfterRenderAdvice(), '_postRender')(this);\n      }\n    }]);\n    return State;\n  }(baseClass);\n\n  function createBeforeRenderAdvice() {\n    return function (firstRender) {\n      var context = this;\n      if (firstRender) {\n        context.componentWillRender(this.state);\n      } else {\n        context.componentWillUpdate(this.state, assign({}, privates(context).renderedState));\n      }\n    };\n  }\n\n  function createAfterRenderAdvice() {\n    return function (firstRender) {\n      var context = this;\n      var previousState = privates(context).renderedState;\n      privates(context).renderedState = privates(context).state;\n      if (firstRender) {\n        context.componentDidRender(previousState);\n      } else {\n        context.componentDidUpdate(previousState);\n      }\n    };\n  }\n}); /*  */\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/browser/web-components/state-mixin.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/class-builder.js":
/*!***********************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/class-builder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createMixin = undefined;\n\nvar _uniqueId = __webpack_require__(/*! ./unique-id.js */ \"./node_modules/utility-toolkit/lib/unique-id.js\");\n\nvar _uniqueId2 = babelHelpers.interopRequireDefault(_uniqueId);\n\nvar freeze = Object.freeze,\n    setPrototypeOf = Object.setPrototypeOf,\n    getPrototypeOf = Object.getPrototypeOf,\n    hasOwnProperty = Object.hasOwnProperty; /*  */\n\nvar createMixin = exports.createMixin = function createMixin(mixin) {\n  return dedupeMixin(cacheMixin(declareMixin(mixin)));\n};\n\nexports.default = function () {\n  var Ctor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {\n    function _class() {\n      babelHelpers.classCallCheck(this, _class);\n    }\n\n    return _class;\n  }();\n  return freeze({\n    with: function _with() {\n      for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {\n        mixins[_key] = arguments[_key];\n      }\n\n      return mixins.map(function (mixin) {\n        return createMixin(mixin);\n      }).reduce(function (k, m) {\n        return m(k);\n      }, Ctor);\n    }\n  });\n};\n\n// used by wrap() and unwrap()\n\n\nvar wrappedMixinKey = (0, _uniqueId2.default)('_wrappedMixin');\n\n// used by applyMixin() and isApplicationOf()\nvar appliedMixinKey = (0, _uniqueId2.default)('_appliedMixin');\n\n// used by cache mixin decorator\nvar cachedApplicationKey = (0, _uniqueId2.default)('_cachedApplication');\n\n/**\n * Sets up the function `mixin` to be wrapped by the function `wrapper`, while\n * allowing properties on `mixin` to be available via `wrapper`, and allowing\n * `wrapper` to be unwrapped to get to the original function.\n *\n * `wrap` does two things:\n *   1. Sets the prototype of `mixin` to `wrapper` so that properties set on\n *      `mixin` inherited by `wrapper`.\n *   2. Sets a special property on `mixin` that points back to `mixin` so that\n *      it can be retreived from `wrapper`\n *\n * @function\n * @param {Function} mixin A mixin function\n * @param {Function} wrapper A function that wraps {@link mixin}\n * @return {Function} `wrapper`\n */\nfunction wrap(mixin, wrapper) {\n  setPrototypeOf(wrapper, mixin);\n  if (!mixin[wrappedMixinKey]) {\n    mixin[wrappedMixinKey] = mixin;\n  }\n  return wrapper;\n}\n\n/**\n * Unwraps the function `wrapper` to return the original function wrapped by\n * one or more calls to `wrap`. Returns `wrapper` if it's not a wrapped\n * function.\n *\n * @function\n * @param {Function} wrapper A wrapped mixin produced by {@link wrap}\n * @return {Function} The originally wrapped mixin\n */\nfunction unwrap(wrapper) {\n  return wrapper[wrappedMixinKey] || wrapper;\n}\n\n/**\n * Applies `mixin` to `superclass`.\n *\n * `apply` stores a reference from the mixin application to the unwrapped mixin\n * to make `isApplicationOf` and `hasMixin` work.\n *\n * This function is usefull for mixin wrappers that want to automatically enable\n * {@link hasMixin} support.\n *\n * @function\n * @param {Function} superClass A class or constructor function\n * @param {Function} mixin The mixin to apply\n * @return {Function} A subclass of `superclass` produced by `mixin`\n */\nfunction applyMixin(superClass, mixin) {\n  var application = mixin(superClass);\n  var proto = application.prototype;\n  proto[appliedMixinKey] = unwrap(mixin);\n  return application;\n}\n\n/**\n * Returns `true` iff `proto` is a prototype created by the application of\n * `mixin` to a superclass.\n *\n * `isApplicationOf` works by checking that `proto` has a reference to `mixin`\n * as created by `apply`.\n *\n * @function\n * @param {Object} proto A prototype object created by {@link apply}.\n * @param {Function} mixin A mixin function used with {@link apply}.\n * @return {boolean} whether `proto` is a prototype created by the application of\n * `mixin` to a superclass\n */\nfunction isApplicationOf(proto, mixin) {\n  return hasOwnProperty.call(proto, appliedMixinKey) && proto[appliedMixinKey] === unwrap(mixin);\n}\n\n/**\n * Returns `true` iff `o` has an application of `mixin` on its prototype\n * chain.\n *\n * @function\n * @param {Object} o An object\n * @param {Function} mixin A mixin applied with {@link apply}\n * @return {boolean} whether `o` has an application of `mixin` on its prototype\n * chain\n */\nfunction hasMixin(o, mixin) {\n  while (o !== null) {\n    if (isApplicationOf(o, mixin)) {\n      return true;\n    }\n    o = getPrototypeOf(o);\n  }\n  return false;\n}\n\n/**\n * A basic mixin decorator that applies the mixin with {@link applyMixin} so that it\n * can be used with {@link isApplicationOf}, {@link hasMixin} and the other\n * mixin decorator functions.\n *\n * @function\n * @param {Function} mixin The mixin to wrap\n * @return {Function} a new mixin function\n */\nfunction declareMixin(mixin) {\n  return wrap(mixin, function (superClass) {\n    return applyMixin(superClass, mixin);\n  });\n}\n\n/**\n * Decorates `mixin` so that it only applies if it's not already on the\n * prototype chain.\n *\n * @function\n * @param {Function} mixin The mixin to wrap with deduplication behavior\n * @return {Function} a new mixin function\n */\nfunction dedupeMixin(mixin) {\n  return wrap(mixin, function (superClass) {\n    return hasMixin(superClass.prototype, mixin) ? superClass : mixin(superClass);\n  });\n}\n\n/**\n * Decorate the given mixin class with a \"cached decorator\".\n *\n * Method will ensure that if the given mixin has already been applied,\n * then it will be returned / applied a single time, rather than multiple\n * times.\n *\n * @param {Function} mixin\n *\n * @return {Function}\n */\nfunction cacheMixin(mixin) {\n  return wrap(mixin, function (superClass) {\n    var cachedApplication = superClass[cachedApplicationKey];\n    if (!cachedApplication) {\n      cachedApplication = superClass[cachedApplicationKey] = new Map();\n    }\n\n    // $FlowFixMe\n    var application = cachedApplication.get(mixin);\n    if (!application) {\n      application = mixin(superClass);\n      cachedApplication.set(mixin, application);\n    }\n    return application;\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/class-builder.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/clone.js":
/*!***************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/clone.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _type = __webpack_require__(/*! ./type.js */ \"./node_modules/utility-toolkit/lib/type.js\");\n\nvar _type2 = babelHelpers.interopRequireDefault(_type);\n\nvar clone = function clone(src) {\n  var circulars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var clones = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n\n  // Null/undefined/functions/etc\n  if (!src || !_type2.default.object(src) || _type2.default.function(src)) {\n    return src;\n  }\n\n  // Date\n  if (_type2.default.date(src)) {\n    return new Date(src.getTime());\n  }\n\n  // RegExp\n  if (_type2.default.regexp(src)) {\n    return new RegExp(src);\n  }\n\n  // Arrays\n  if (_type2.default.array(src)) {\n    return src.map(clone);\n  }\n\n  // ES6 Maps\n  if (_type2.default.map(src)) {\n    return new Map(Array.from(src.entries()));\n  }\n\n  // ES6 Sets\n  if (_type2.default.set(src)) {\n    return new Set(Array.from(src.values()));\n  }\n\n  // Object\n  if (_type2.default.object(src)) {\n    circulars.push(src);\n    var obj = Object.create(src);\n    clones.push(obj);\n\n    var _loop = function _loop(key) {\n      var idx = circulars.findIndex(function (i) {\n        return i === src[key];\n      });\n      obj[key] = idx > -1 ? clones[idx] : clone(src[key], circulars, clones);\n    };\n\n    for (var key in src) {\n      _loop(key);\n    }\n    return obj;\n  }\n\n  return src;\n}; /*  */\nexports.default = clone;\n\n\nclone.json = function (value) {\n  var reviver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (k, v) {\n    return v;\n  };\n  return JSON.parse(JSON.stringify(value), reviver);\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/clone.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/create-storage.js":
/*!************************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/create-storage.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n/*  */\nexports.default = function () {\n  var creator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.create.bind(null, null, {});\n\n  var store = new WeakMap();\n  return function (obj) {\n    var value = store.get(obj);\n    if (!value) {\n      store.set(obj, value = creator(obj));\n    }\n    return value;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/create-storage.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/environment.js":
/*!*********************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/environment.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*  */\nvar isBrowser = exports.isBrowser = ![typeof window === 'undefined' ? 'undefined' : babelHelpers.typeof(window), typeof document === 'undefined' ? 'undefined' : babelHelpers.typeof(document)].includes('undefined');\n\nvar browser = exports.browser = function browser(fn) {\n  var raise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  return function () {\n    if (isBrowser) {\n      return fn.apply(undefined, arguments);\n    }\n    if (raise) {\n      throw new Error(fn.name + ' for browser use only');\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/environment.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/event-hub.js":
/*!*******************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/event-hub.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*  */\n\nvar eventHubFactory = function eventHubFactory() {\n  var subscribers = new Map();\n  var subscriberCount = 0;\n\n  //$FlowFixMe\n  return {\n    publish: function publish(event) {\n      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      subscribers.forEach(function (subscriptions) {\n        (subscriptions.get(event) || []).forEach(function (callback) {\n          callback.apply(undefined, args);\n        });\n      });\n      return this;\n    },\n    createSubscriber: function createSubscriber() {\n      var context = subscriberCount++;\n      return {\n        on: function on(event, callback) {\n          if (!subscribers.has(context)) {\n            subscribers.set(context, new Map());\n          }\n          //$FlowFixMe\n          var subscriber = subscribers.get(context);\n          if (!subscriber.has(event)) {\n            subscriber.set(event, []);\n          }\n          //$FlowFixMe\n          subscriber.get(event).push(callback);\n          return this;\n        },\n        off: function off(event) {\n          //$FlowFixMe\n          subscribers.get(context).delete(event);\n          return this;\n        },\n        destroy: function destroy() {\n          subscribers.delete(context);\n        }\n      };\n    }\n  };\n};\n\nexports.default = eventHubFactory;\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/event-hub.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classBuilder = __webpack_require__(/*! ./class-builder.js */ \"./node_modules/utility-toolkit/lib/class-builder.js\");\n\nObject.defineProperty(exports, 'classBuilder', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_classBuilder).default;\n  }\n});\n\nvar _createStorage = __webpack_require__(/*! ./create-storage.js */ \"./node_modules/utility-toolkit/lib/create-storage.js\");\n\nObject.defineProperty(exports, 'createStorage', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_createStorage).default;\n  }\n});\n\nvar _type = __webpack_require__(/*! ./type.js */ \"./node_modules/utility-toolkit/lib/type.js\");\n\nObject.defineProperty(exports, 'type', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_type).default;\n  }\n});\n\nvar _eventHub = __webpack_require__(/*! ./event-hub */ \"./node_modules/utility-toolkit/lib/event-hub.js\");\n\nObject.defineProperty(exports, 'eventHubFactory', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_eventHub).default;\n  }\n});\n\nvar _advice = __webpack_require__(/*! ./advice.js */ \"./node_modules/utility-toolkit/lib/advice.js\");\n\nObject.keys(_advice).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _advice[key];\n    }\n  });\n});\n\nvar _array = __webpack_require__(/*! ./array.js */ \"./node_modules/utility-toolkit/lib/array.js\");\n\nObject.keys(_array).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _array[key];\n    }\n  });\n});\n\nvar _browser = __webpack_require__(/*! ./browser.js */ \"./node_modules/utility-toolkit/lib/browser.js\");\n\nObject.keys(_browser).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _browser[key];\n    }\n  });\n});\n\nvar _object = __webpack_require__(/*! ./object.js */ \"./node_modules/utility-toolkit/lib/object.js\");\n\nObject.keys(_object).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _object[key];\n    }\n  });\n});\n\nvar _model = __webpack_require__(/*! ./model.js */ \"./node_modules/utility-toolkit/lib/model.js\");\n\nObject.defineProperty(exports, 'model', {\n  enumerable: true,\n  get: function get() {\n    return babelHelpers.interopRequireDefault(_model).default;\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/index.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/model.js":
/*!***************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/model.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _object = __webpack_require__(/*! ./object.js */ \"./node_modules/utility-toolkit/lib/object.js\");\n\nvar _clone = __webpack_require__(/*! ./clone.js */ \"./node_modules/utility-toolkit/lib/clone.js\");\n\nvar _clone2 = babelHelpers.interopRequireDefault(_clone);\n\nvar _type = __webpack_require__(/*! ./type.js */ \"./node_modules/utility-toolkit/lib/type.js\");\n\nvar _type2 = babelHelpers.interopRequireDefault(_type);\n\nvar _createStorage = __webpack_require__(/*! ./create-storage.js */ \"./node_modules/utility-toolkit/lib/create-storage.js\");\n\nvar _createStorage2 = babelHelpers.interopRequireDefault(_createStorage);\n\nvar _uniqueId = __webpack_require__(/*! ./unique-id.js */ \"./node_modules/utility-toolkit/lib/unique-id.js\");\n\nvar _uniqueId2 = babelHelpers.interopRequireDefault(_uniqueId);\n\nvar model = function model() {\n  var baseClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {\n    function _class() {\n      babelHelpers.classCallCheck(this, _class);\n    }\n\n    return _class;\n  }();\n\n  var privates = (0, _createStorage2.default)();\n  var subscriberCount = 0;\n\n  return function (_baseClass) {\n    babelHelpers.inherits(Model, _baseClass);\n\n    function Model() {\n      var _ref;\n\n      babelHelpers.classCallCheck(this, Model);\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      var _this = babelHelpers.possibleConstructorReturn(this, (_ref = Model.__proto__ || Object.getPrototypeOf(Model)).call.apply(_ref, [this].concat(args)));\n\n      _this._stateKey = (0, _uniqueId2.default)('_state');\n      _this._subscribers = new Map();\n      _this._setState(_this.defaultState);\n      return _this;\n    }\n\n    babelHelpers.createClass(Model, [{\n      key: 'get',\n      value: function get(accessor) {\n        return this._getState(accessor);\n      }\n    }, {\n      key: 'set',\n      value: function set(arg1, arg2) {\n        //supports (accessor, state) OR (state) arguments for setting the whole thing\n        var accessor = void 0,\n            value = void 0;\n        if (!_type2.default.string(arg1) && _type2.default.undefined(arg2)) {\n          value = arg1;\n        } else {\n          value = arg2;\n          accessor = arg1;\n        }\n        var oldState = this._getState();\n        var newState = _clone2.default.json(oldState);\n\n        if (accessor) {\n          (0, _object.dset)(newState, accessor, value);\n        } else {\n          newState = value;\n        }\n        this._setState(newState);\n        this._notifySubscribers(accessor, newState, oldState);\n        return this;\n      }\n    }, {\n      key: 'createSubscriber',\n      value: function createSubscriber() {\n        var context = subscriberCount++;\n        var self = this;\n        return {\n          on: function on() {\n            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n              args[_key2] = arguments[_key2];\n            }\n\n            self._subscribe.apply(self, [context].concat(args));\n            return this;\n          },\n          //TODO: is off() needed for individual subscription?\n          destroy: this._destroySubscriber.bind(this, context)\n        };\n      }\n    }, {\n      key: 'createPropertyBinder',\n      value: function createPropertyBinder(context) {\n        if (!context) {\n          throw new Error('createPropertyBinder(context) - context must be object');\n        }\n        var self = this;\n        return {\n          addBindings: function addBindings(bindRules) {\n            if (!Array.isArray(bindRules[0])) {\n              bindRules = [bindRules];\n            }\n            bindRules.forEach(function (bindRule) {\n              (0, _object.dset)(context, bindRule[1], self.get(bindRule[0]));\n              self._subscribe(context, bindRule[0], function (value) {\n                (0, _object.dset)(context, bindRule[1], value);\n              });\n            });\n            return this;\n          },\n          destroy: this._destroySubscriber.bind(this, context)\n        };\n      }\n    }, {\n      key: '_getState',\n      value: function _getState(accessor) {\n        return _clone2.default.json(accessor ? (0, _object.dget)(privates[this._stateKey], accessor) : privates[this._stateKey]);\n      }\n    }, {\n      key: '_setState',\n      value: function _setState(newState) {\n        privates[this._stateKey] = newState;\n      }\n    }, {\n      key: '_subscribe',\n      value: function _subscribe(context, accessor, cb) {\n        var subscriptions = this._subscribers.get(context) || [];\n        subscriptions.push({ accessor: accessor, cb: cb });\n        this._subscribers.set(context, subscriptions);\n      }\n    }, {\n      key: '_destroySubscriber',\n      value: function _destroySubscriber(context) {\n        this._subscribers.delete(context);\n      }\n    }, {\n      key: '_notifySubscribers',\n      value: function _notifySubscribers(setAccessor, newState, oldState) {\n        this._subscribers.forEach(function (subscribers) {\n          subscribers.forEach(function (_ref2) {\n            var accessor = _ref2.accessor,\n                cb = _ref2.cb;\n\n            //e.g.  sa='foo.bar.baz', a='foo.bar.baz'\n            //e.g.  sa='foo.bar.baz', a='foo.bar.baz.blaz'\n            if (accessor.indexOf(setAccessor) === 0) {\n              cb((0, _object.dget)(newState, accessor), (0, _object.dget)(oldState, accessor));\n              return;\n            }\n            //e.g. sa='foo.bar.baz', a='foo.*'\n            if (accessor.indexOf('*') > -1) {\n              var deepAccessor = accessor.replace('.*', '').replace('*', '');\n              if (setAccessor.indexOf(deepAccessor) === 0) {\n                cb((0, _object.dget)(newState, deepAccessor), (0, _object.dget)(oldState, deepAccessor));\n                return;\n              }\n            }\n          });\n        });\n      }\n    }, {\n      key: 'defaultState',\n      get: function get() {\n        return {};\n      }\n    }, {\n      key: 'currentState',\n      get: function get() {\n        return Object.freeze(this.get());\n      }\n    }]);\n    return Model;\n  }(baseClass);\n};\nexports.default = model;\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/model.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/object.js":
/*!****************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.toMap = exports.dget = exports.dset = undefined;\n\nvar _type = __webpack_require__(/*! ./type.js */ \"./node_modules/utility-toolkit/lib/type.js\");\n\nvar _type2 = babelHelpers.interopRequireDefault(_type);\n\nvar dset = exports.dset = function dset(obj, key, value) {\n\tif (key.indexOf('.') === -1) {\n\t\tobj[key] = value;\n\t\treturn;\n\t}\n\tvar parts = key.split('.');\n\tvar depth = parts.length - 1;\n\tvar object = obj;\n\n\tfor (var i = 0; i < depth; i++) {\n\t\tif (_type2.default.undefined(object[parts[i]])) {\n\t\t\tobject[parts[i]] = {};\n\t\t}\n\t\tobject = object[parts[i]];\n\t}\n\tobject[parts[depth]] = value;\n}; /*  */\nvar dget = exports.dget = function dget(obj, key) {\n\tvar defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n\n\tif (key.indexOf('.') === -1) {\n\t\treturn typeof obj[key] !== 'undefined' ? obj[key] : defaultValue;\n\t}\n\tvar parts = key.split('.');\n\tvar length = parts.length;\n\tvar object = obj;\n\n\tfor (var i = 0; i < length; i++) {\n\t\tobject = object[parts[i]];\n\t\tif (_type2.default.undefined(object)) {\n\t\t\tobject = defaultValue;\n\t\t\treturn;\n\t\t}\n\t}\n\treturn object;\n};\n\nvar keys = Object.keys;\nvar toMap = exports.toMap = function toMap(o) {\n\treturn keys(o).reduce(function (m, k) {\n\t\treturn m.set(k, o[k]);\n\t}, new Map());\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/object.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/type.js":
/*!**************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/type.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _array = __webpack_require__(/*! ./array.js */ \"./node_modules/utility-toolkit/lib/array.js\");\n\nvar doAllApi = function doAllApi(fn) {\n  return function () {\n    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {\n      params[_key] = arguments[_key];\n    }\n\n    return (0, _array.all)(params, fn);\n  };\n}; /*  */\n\nvar doAnyApi = function doAnyApi(fn) {\n  return function () {\n    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      params[_key2] = arguments[_key2];\n    }\n\n    return (0, _array.any)(params, fn);\n  };\n};\nvar toString = Object.prototype.toString;\nvar types = 'Map Set Symbol Array Object String Date RegExp Function Boolean Number Null Undefined Arguments Error'.split(' ');\nvar len = types.length;\nvar typeCache = {};\nvar typeRegexp = /\\s([a-zA-Z]+)/;\nvar is = setup();\n\nexports.default = is;\n\n\nfunction setup() {\n  var checks = {};\n\n  var _loop = function _loop(i) {\n    var type = types[i].toLowerCase();\n    checks[type] = function (obj) {\n      return getType(obj) === type;\n    };\n    checks[type].all = doAllApi(checks[type]);\n    checks[type].any = doAnyApi(checks[type]);\n  };\n\n  for (var i = len; i--;) {\n    _loop(i);\n  }\n  return checks;\n}\n\nfunction getType(obj) {\n  var type = toString.call(obj);\n  if (!typeCache[type]) {\n    var matches = type.match(typeRegexp);\n    if (Array.isArray(matches) && matches.length > 1) {\n      typeCache[type] = matches[1].toLowerCase();\n    }\n  }\n  return typeCache[type];\n}\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/type.js?");

/***/ }),

/***/ "./node_modules/utility-toolkit/lib/unique-id.js":
/*!*******************************************************!*\
  !*** ./node_modules/utility-toolkit/lib/unique-id.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*  */\n\nvar prevTimeId = 0;\nvar prevUniqueId = 0;\n\nexports.default = function (prefix) {\n  var newUniqueId = Date.now();\n  if (newUniqueId === prevTimeId) {\n    ++prevUniqueId;\n  } else {\n    prevTimeId = newUniqueId;\n    prevUniqueId = 0;\n  }\n\n  var uniqueId = \"\" + String(newUniqueId) + String(prevUniqueId);\n  if (prefix) {\n    uniqueId = prefix + \"_\" + uniqueId;\n  }\n  return uniqueId;\n};\n\n//# sourceURL=webpack:///./node_modules/utility-toolkit/lib/unique-id.js?");

/***/ }),

/***/ "./src/common/actions/move.action.js":
/*!*******************************************!*\
  !*** ./src/common/actions/move.action.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Move = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Move = exports.Move = function Move() {\n  (0, _classCallCheck3.default)(this, Move);\n\n  this.type = 'MOVE';\n  this.playerId = null;\n  this.boardId = null;\n  this.pieceId = null;\n  this.startingCellId = null;\n  this.endingCellId = null;\n};\n\n//# sourceURL=webpack:///./src/common/actions/move.action.js?");

/***/ }),

/***/ "./src/common/actions/push.action.js":
/*!*******************************************!*\
  !*** ./src/common/actions/push.action.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Push = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Push = exports.Push = function Push() {\n  (0, _classCallCheck3.default)(this, Push);\n\n  this.type = 'PUSH';\n  this.playerId = null;\n  this.boardId = null;\n  this.pieceId = null;\n  this.pushedPieceId = null;\n  this.pushedPieceStartingCellId = null;\n  this.pushedPieceEndingCellId = null;\n};\n\n//# sourceURL=webpack:///./src/common/actions/push.action.js?");

/***/ }),

/***/ "./src/common/app-actions.js":
/*!***********************************!*\
  !*** ./src/common/app-actions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _appChannel = __webpack_require__(/*! ./app-channel */ \"./src/common/app-channel.js\");\n\nvar _appChannel2 = _interopRequireDefault(_appChannel);\n\nvar _appModel = __webpack_require__(/*! ./app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nvar _turnModel = __webpack_require__(/*! ./turn-model */ \"./src/common/turn-model.js\");\n\nvar _turnModel2 = _interopRequireDefault(_turnModel);\n\nvar _getCurrentCellForPiece = __webpack_require__(/*! common/tasks/get-current-cell-for-piece */ \"./src/common/tasks/get-current-cell-for-piece.js\");\n\nvar _getCurrentPieceForCell = __webpack_require__(/*! common/tasks/get-current-piece-for-cell */ \"./src/common/tasks/get-current-piece-for-cell.js\");\n\nvar _move = __webpack_require__(/*! ./actions/move.action */ \"./src/common/actions/move.action.js\");\n\nvar _push = __webpack_require__(/*! ./actions/push.action */ \"./src/common/actions/push.action.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar appChSubscriber = _appChannel2.default.createSubscriber();\n\nappChSubscriber.on(_appChannel.TURN_START, function () {\n  _appChannel2.default.publish(_appChannel.UPDATE_POINTS);\n  _appChannel2.default.publish(_appChannel.UPDATE_WINNER);\n});\n\nappChSubscriber.on(_appChannel.TURN_ENDED, function () {\n  _appChannel2.default.publish(_appChannel.UPDATE_CURRENT_PLAYER);\n  _turnModel2.default.reset();\n  _appChannel2.default.publish(_appChannel.TURN_START);\n});\n\nappChSubscriber.on(_appChannel.UPDATE_POINTS, function () {\n  var winningCellId = '22';\n  var pieceInWinningCell = (0, _getCurrentPieceForCell.getCurrentPieceForCell)(winningCellId);\n  if (!pieceInWinningCell || _appModel2.default.get('game.currentPlayer') !== pieceInWinningCell.playerId) {\n    return;\n  }\n  var player = Number(pieceInWinningCell.pieceId[0]);\n\n  setTimeout(function () {\n    var claimPennant = window.confirm('Player ' + (player + 1) + ', would you like to claim your pennant?');\n    if (claimPennant) {\n      var winningPieceState = (0, _getCurrentPieceForCell.getCurrentPieceForCell)(winningCellId);\n      winningPieceState.cellId = 'graveyard';\n      _appModel2.default.setPieceStateById(winningPieceState.pieceId, winningPieceState);\n      _appModel2.default.update('players.' + player + '.points', function (value) {\n        return value + 1;\n      });\n    }\n  }, 0);\n});\n\nappChSubscriber.on(_appChannel.UPDATE_WINNER, function () {\n  var firstPlayerPoints = _appModel2.default.get('players.0.points');\n  var secondPlayerPoints = _appModel2.default.get('players.1.points');\n  if (firstPlayerPoints >= 3) {\n    _appModel2.default.set('game.winningPlayer', 0);\n  } else if (secondPlayerPoints >= 3) {\n    _appModel2.default.set('game.winningPlayer', 1);\n  }\n});\n\nappChSubscriber.on(_appChannel.UPDATE_CURRENT_PLAYER, function () {\n  _appModel2.default.update('game.currentPlayer', function (value) {\n    return value === 0 ? 1 : 0;\n  });\n});\n\nappChSubscriber.on(_appChannel.MOVE_PIECE, function (piece, cell) {\n  var action = new _move.Move();\n  action.playerId = _appModel2.default.get('game.currentPlayer');\n  action.boardId = 'default';\n  action.pieceId = piece.pieceId;\n  action.startingCellId = (0, _getCurrentCellForPiece.getCurrentCellForPiece)(action.pieceId);\n  //action.startingCellId = piece.currentCell.cellId;\n  action.endingCellId = cell.cellId;\n  //validateAction(action);\n  _appModel2.default.update('actions', function (actions) {\n    return actions.concat([action]);\n  });\n  if (action.startingCellId && !action.startingCellId.includes('sideline')) {\n    _appModel2.default.set('board.' + action.startingCellId[0] + '.' + action.startingCellId[1], null);\n  }\n  var pieceState = _appModel2.default.getPieceStateById(action.pieceId);\n  if (pieceState.location !== 'board') {\n    pieceState.location = 'board';\n    _appModel2.default.update('sideline.' + action.playerId, function (value) {\n      return value - 1;\n    });\n  }\n\n  pieceState.cellId = action.endingCellId;\n  _appModel2.default.setPieceStateById(action.pieceId, pieceState);\n  _turnModel2.default.set('activePieceData', _appModel2.default.getPieceStateById(action.pieceId));\n  _appChannel2.default.publish(_appChannel.MOVE_ENDED, action);\n});\n\nappChSubscriber.on(_appChannel.MOVE_ENDED, function (moveAction) {\n  if (!moveAction.startingCellId || moveAction.startingCellId.includes('sideline')) {\n    _appChannel2.default.publish(_appChannel.TURN_ENDED);\n    return;\n  }\n  _turnModel2.default.calculateAllowedPushCells();\n  if (_turnModel2.default.get('allowedPushCells').length === 0) {\n    _appChannel2.default.publish(_appChannel.TURN_ENDED);\n    return;\n  }\n});\n\nappChSubscriber.on(_appChannel.PUSH_PIECE, function (piece, pushedPiece, xChange, yChange) {\n  var action = new _push.Push();\n  action.playerId = _appModel2.default.get('game.currentPlayer');\n  action.boardId = 'default';\n  action.pieceId = piece.pieceId;\n  action.currentCellId = (0, _getCurrentCellForPiece.getCurrentCellForPiece)(action.pieceId);\n  action.pushedPieceId = pushedPiece.pieceId;\n  action.xChange = xChange;\n  action.yChange = yChange;\n  _appModel2.default.update('actions', function (actions) {\n    return actions.concat([action]);\n  });\n\n  function doPush(cellId, xChange, yChange) {\n    var pushedPieceState = (0, _getCurrentPieceForCell.getCurrentPieceForCell)(cellId);\n    var pushedPieceId = pushedPieceState.pieceId;\n    pushedPieceState.cellId = computePushCellId(pushedPieceState.cellId, xChange, yChange);\n\n    var nextPushedPieceId = (0, _getCurrentPieceForCell.getCurrentPieceForCell)(pushedPieceState.cellId);\n    if (nextPushedPieceId) {\n      doPush(pushedPieceState.cellId, xChange, yChange);\n    }\n\n    _appModel2.default.setPieceStateById(pushedPieceId, pushedPieceState);\n  }\n\n  doPush((0, _getCurrentCellForPiece.getCurrentCellForPiece)(action.pushedPieceId), action.xChange, action.yChange);\n\n  _appChannel2.default.publish(_appChannel.TURN_ENDED);\n});\n\nfunction computePushCellId(cellId, xChange, yChange) {\n  var startX = Number(cellId[0]);\n  var startY = Number(cellId[1]);\n  var newX = startX + xChange;\n  var newY = startY + yChange;\n  if (newX < 0 || newX > 4 || newY < 0 || newY > 4) {\n    return 'graveyard';\n  }\n  return '' + newX + newY;\n}\n\n//# sourceURL=webpack:///./src/common/app-actions.js?");

/***/ }),

/***/ "./src/common/app-channel.js":
/*!***********************************!*\
  !*** ./src/common/app-channel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MOVE_ENDED = exports.PUSH_PIECE = exports.MOVE_PIECE = exports.UPDATE_CURRENT_PLAYER = exports.UPDATE_WINNER = exports.UPDATE_POINTS = exports.TURN_ENDED = exports.TURN_START = undefined;\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar appCh = (0, _utilityToolkit.eventHubFactory)();\n\nexports.default = appCh;\nvar TURN_START = exports.TURN_START = 'TURN_START';\nvar TURN_ENDED = exports.TURN_ENDED = 'TURN_ENDED';\nvar UPDATE_POINTS = exports.UPDATE_POINTS = 'UPDATE_POINTS';\nvar UPDATE_WINNER = exports.UPDATE_WINNER = 'UPDATE_WINNER';\nvar UPDATE_CURRENT_PLAYER = exports.UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER';\nvar MOVE_PIECE = exports.MOVE_PIECE = 'MOVE_PIECE';\nvar PUSH_PIECE = exports.PUSH_PIECE = 'PUSH_PIECE';\nvar MOVE_ENDED = exports.MOVE_ENDED = 'MOVE_ENDED';\n\n//# sourceURL=webpack:///./src/common/app-channel.js?");

/***/ }),

/***/ "./src/common/app-model.js":
/*!*********************************!*\
  !*** ./src/common/app-model.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ \"./node_modules/babel-runtime/helpers/get.js\");\n\nvar _get3 = _interopRequireDefault(_get2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar _piecesDefaultState = __webpack_require__(/*! ./tasks/pieces-default-state */ \"./src/common/tasks/pieces-default-state.js\");\n\nvar _getPieceStateById = __webpack_require__(/*! ./tasks/get-piece-state-by-id */ \"./src/common/tasks/get-piece-state-by-id.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AppModel = function (_classBuilder$with) {\n  (0, _inherits3.default)(AppModel, _classBuilder$with);\n\n  function AppModel() {\n    (0, _classCallCheck3.default)(this, AppModel);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (AppModel.__proto__ || Object.getPrototypeOf(AppModel)).call(this));\n\n    _this.accessors = {\n      'board': true,\n      'players': true,\n      'game.currentPlayer': true,\n      'game.winningPlayer': true,\n      'board.N.N.pieceId': true,\n      'players.N.points': true,\n      'sideline.N': true,\n      'pieces': true,\n      //experimental\n      'winningCell': 'board.2.2',\n      'playerInTheLead': {\n        calculateOn: ['players.N.points'],\n        calculate: function calculate() {\n          var prevPoints = -1;\n          return _this.get('players').reduce(function (out, player, i) {\n            if (player.points > prevPoints) {\n              return 'players.' + i;\n            }\n          });\n        }\n      }\n    };\n    return _this;\n  }\n\n  (0, _createClass3.default)(AppModel, [{\n    key: 'get',\n    value: function get(accessor) {\n      if (accessor && this.accessors[accessor.replace(/[0-9]/g, 'N')] === -1) {\n        console.error('I see you are wanting to access \"' + accessor + '\".  That\\'s cool.  Please define it in the accessors array for this model.');\n      }\n      return (0, _get3.default)(AppModel.prototype.__proto__ || Object.getPrototypeOf(AppModel.prototype), 'get', this).call(this, accessor);\n    }\n  }, {\n    key: 'set',\n    value: function set(accessor, value) {\n      if (this.accessors[accessor.replace(/[0-9]/g, 'N')] === -1) {\n        console.error('I see you are wanting to access \"' + accessor + '\".  That\\'s cool.  Please define it in the accessors array for this model.');\n      }\n      return (0, _get3.default)(AppModel.prototype.__proto__ || Object.getPrototypeOf(AppModel.prototype), 'set', this).call(this, accessor, value);\n    }\n  }, {\n    key: 'update',\n\n\n    //TODO add to model\n    value: function update(path, cb) {\n      this.set(path, cb(this.get(path)));\n    }\n  }, {\n    key: 'getPieceStateById',\n    value: function getPieceStateById(pieceId) {\n      var pieces = this.get('pieces');\n      var filteredArray = pieces.filter(function (piece) {\n        return piece.pieceId === pieceId;\n      });\n      return filteredArray[0];\n    }\n  }, {\n    key: 'setPieceStateById',\n    value: function setPieceStateById(pieceId, value) {\n      var _this2 = this;\n\n      this.get('pieces').forEach(function (piece, index) {\n        if (piece.pieceId === pieceId) {\n          _this2.set('pieces.' + index, value);\n        }\n      });\n    }\n  }, {\n    key: 'defaultState',\n    get: function get() {\n      var state = {\n        actions: [],\n        players: [{ points: 0 }, { points: 0 }],\n        pieces: (0, _piecesDefaultState.piecesDefaultState)(),\n        board: Array.apply(null, Array(5)).map(function (ignore, rowIndex) {\n          return Array.apply(null, Array(5)).map(function (ignore, colIndex) {\n            return null;\n          });\n        }),\n        sideline: [9, 9],\n        graveyard: [],\n        game: {\n          currentPlayer: 0,\n          winningPlayer: null,\n          somethingElse: [{ foo: 'bye' }],\n          actions: []\n        }\n      };\n      return state;\n    }\n  }]);\n  return AppModel;\n}((0, _utilityToolkit.classBuilder)(function () {\n  function _class() {\n    (0, _classCallCheck3.default)(this, _class);\n  }\n\n  return _class;\n}()).with(_utilityToolkit.model));\n\nvar appModel = new AppModel();\nexports.default = appModel;\n\n\nwindow.appModel = appModel;\n\n//# sourceURL=webpack:///./src/common/app-model.js?");

/***/ }),

/***/ "./src/common/tasks/get-current-cell-for-piece.js":
/*!********************************************************!*\
  !*** ./src/common/tasks/get-current-cell-for-piece.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getCurrentCellForPiece = getCurrentCellForPiece;\n\nvar _appModel = __webpack_require__(/*! ../app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getCurrentCellForPiece(pieceId) {\n  return _appModel2.default.get('pieces').reduce(function (out, pieceData) {\n    return pieceData.pieceId === pieceId ? pieceData.cellId : out;\n  }, null);\n}\n\n//# sourceURL=webpack:///./src/common/tasks/get-current-cell-for-piece.js?");

/***/ }),

/***/ "./src/common/tasks/get-current-piece-for-cell.js":
/*!********************************************************!*\
  !*** ./src/common/tasks/get-current-piece-for-cell.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getCurrentPieceForCell = getCurrentPieceForCell;\n\nvar _appModel = __webpack_require__(/*! ../app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getCurrentPieceForCell(cellId) {\n  var pieceData = _appModel2.default.get('pieces').reduce(function (out, data) {\n    if (out) {\n      return out;\n    }\n    if (data.cellId === cellId) {\n      return data;\n    }\n    return null;\n  }, null);\n  return pieceData;\n}\n\n//# sourceURL=webpack:///./src/common/tasks/get-current-piece-for-cell.js?");

/***/ }),

/***/ "./src/common/tasks/get-piece-state-by-id.js":
/*!***************************************************!*\
  !*** ./src/common/tasks/get-piece-state-by-id.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getPieceStateById = getPieceStateById;\nexports.setPieceStateById = setPieceStateById;\n\nvar _appModel = __webpack_require__(/*! ../app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getPieceStateById(pieceId) {\n  var pieces = _appModel2.default.get('pieces');\n  var filteredArray = pieces.filter(function (piece) {\n    return piece.pieceId === pieceId;\n  });\n  return filteredArray[0];\n}\n\nfunction setPieceStateById(pieceId, value) {\n  _appModel2.default.get('pieces').forEach(function (piece, index) {\n    if (piece.pieceId === pieceId) {\n      _appModel2.default.set('pieces.' + index, value);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/common/tasks/get-piece-state-by-id.js?");

/***/ }),

/***/ "./src/common/tasks/pieces-default-state.js":
/*!**************************************************!*\
  !*** ./src/common/tasks/pieces-default-state.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.piecesDefaultState = piecesDefaultState;\n\nvar NUM_PLAYERS = 2;\nvar TYPES = ['sword', 'spear', 'shield'];\nvar NUM_EACH_PIECE = 9;\n\nfunction piecesDefaultState() {\n  return Array.apply(null, Array(NUM_PLAYERS)).reduce(function (out, ignore, playerId) {\n    return out.concat(TYPES.reduce(function (out2, type) {\n      return out2.concat(Array.apply(null, Array(NUM_EACH_PIECE)).map(function (ignore, num) {\n        return {\n          type: type,\n          playerId: playerId,\n          pieceId: playerId + '_' + type + '_' + num,\n          location: 'sideline',\n          cellId: null\n        };\n      }));\n    }, []));\n  }, []);\n}\n\n//# sourceURL=webpack:///./src/common/tasks/pieces-default-state.js?");

/***/ }),

/***/ "./src/common/turn-model.js":
/*!**********************************!*\
  !*** ./src/common/turn-model.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar _getCurrentPieceForCell = __webpack_require__(/*! ./tasks/get-current-piece-for-cell */ \"./src/common/tasks/get-current-piece-for-cell.js\");\n\nvar _appModel = __webpack_require__(/*! ./app-model */ \"./src/common/app-model.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction filterOccupiedCells(cells) {\n  return cells.filter(function (cellId) {\n    return !(0, _getCurrentPieceForCell.getCurrentPieceForCell)(cellId);\n  });\n}\n\nfunction filterUnOccupiedCells(cells) {\n  return cells.filter(function (cellId) {\n    return (0, _getCurrentPieceForCell.getCurrentPieceForCell)(cellId);\n  });\n}\n\nvar TurnModel = function (_classBuilder$with) {\n  (0, _inherits3.default)(TurnModel, _classBuilder$with);\n\n  function TurnModel() {\n    (0, _classCallCheck3.default)(this, TurnModel);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (TurnModel.__proto__ || Object.getPrototypeOf(TurnModel)).call(this));\n\n    _this.createSubscriber().on('activePieceData', function (data) {\n      _this.calculateAllowedCells(data);\n    });\n    return _this;\n  }\n\n  (0, _createClass3.default)(TurnModel, [{\n    key: 'reset',\n    value: function reset() {\n      this.set('', this.defaultState);\n    }\n  }, {\n    key: 'calculateAllowedCells',\n    value: function calculateAllowedCells(data) {\n      if (!data || this.get('phase') === 'PUSH') {\n        this.set('allowedCells', []);\n        return;\n      }\n      var type = data.type;\n      var isSideline = data.location === 'sideline';\n      var cellId = data.cellId;\n      var playerId = data.playerId;\n\n      if (isSideline) {\n        if (playerId === 0) {\n          this.set('allowedCells', filterOccupiedCells(['00', '01', '10']));\n        } else {\n          this.set('allowedCells', filterOccupiedCells(['44', '43', '34']));\n        }\n        return;\n      }\n\n      if (!cellId) {\n        return;\n      }\n\n      var allowedCells = [];\n\n      if (type === 'sword') {\n        var x = Number(cellId[0]);\n        var y = Number(cellId[1]);\n\n        //moving one space\n        if (x - 1 > -1) {\n          allowedCells.push('' + (x - 1) + y);\n        }\n        if (x + 1 < 5) {\n          allowedCells.push('' + (x + 1) + y);\n        }\n        if (y - 1 > -1) {\n          allowedCells.push('' + x + (y - 1));\n        }\n        if (y + 1 < 5) {\n          allowedCells.push('' + x + (y + 1));\n        }\n        //moving two spaces\n        if (x - 2 > -1) {\n          allowedCells.push('' + (x - 2) + y);\n        }\n        if (x + 2 < 5) {\n          allowedCells.push('' + (x + 2) + y);\n        }\n        if (y - 2 > -1) {\n          allowedCells.push('' + x + (y - 2));\n        }\n        if (y + 2 < 5) {\n          allowedCells.push('' + x + (y + 2));\n        }\n      }\n\n      if (type === 'spear') {\n        var _x = Number(cellId[0]);\n        var _y = Number(cellId[1]);\n\n        //moving one space\n        if (_x - 1 > -1 && _y - 1 > -1) {\n          allowedCells.push('' + (_x - 1) + (_y - 1));\n        }\n        if (_x + 1 < 5 && _y + 1 < 5) {\n          allowedCells.push('' + (_x + 1) + (_y + 1));\n        }\n        if (_x - 1 > -1 && _y + 1 < 5) {\n          allowedCells.push('' + (_x - 1) + (_y + 1));\n        }\n        if (_x + 1 < 5 && _y - 1 > -1) {\n          allowedCells.push('' + (_x + 1) + (_y - 1));\n        }\n\n        //moving two spaces\n        if (_x - 2 > -1 && _y - 2 > -1) {\n          allowedCells.push('' + (_x - 2) + (_y - 2));\n        }\n        if (_x + 2 < 5 && _y + 2 < 5) {\n          allowedCells.push('' + (_x + 2) + (_y + 2));\n        }\n        if (_x - 2 > -1 && _y + 2 < 5) {\n          allowedCells.push('' + (_x - 2) + (_y + 2));\n        }\n        if (_x + 2 < 5 && _y - 2 > -1) {\n          allowedCells.push('' + (_x + 2) + (_y - 2));\n        }\n      }\n\n      if (type === 'shield') {\n        var _x2 = Number(cellId[0]);\n        var _y2 = Number(cellId[1]);\n\n        //moving one space\n        if (_x2 - 1 > -1) {\n          allowedCells.push('' + (_x2 - 1) + _y2);\n        }\n        if (_x2 + 1 < 5) {\n          allowedCells.push('' + (_x2 + 1) + _y2);\n        }\n        if (_y2 - 1 > -1) {\n          allowedCells.push('' + _x2 + (_y2 - 1));\n        }\n        if (_y2 + 1 < 5) {\n          allowedCells.push('' + _x2 + (_y2 + 1));\n        }\n        if (_x2 - 1 > -1 && _y2 - 1 > -1) {\n          allowedCells.push('' + (_x2 - 1) + (_y2 - 1));\n        }\n        if (_x2 + 1 < 5 && _y2 + 1 < 5) {\n          allowedCells.push('' + (_x2 + 1) + (_y2 + 1));\n        }\n        if (_x2 - 1 > -1 && _y2 + 1 < 5) {\n          allowedCells.push('' + (_x2 - 1) + (_y2 + 1));\n        }\n        if (_x2 + 1 < 5 && _y2 - 1 > -1) {\n          allowedCells.push('' + (_x2 + 1) + (_y2 - 1));\n        }\n      }\n      this.set('allowedCells', filterOccupiedCells(allowedCells));\n    }\n  }, {\n    key: 'calculateAllowedPushCells',\n    value: function calculateAllowedPushCells() {\n      this.set('phase', 'PUSH');\n      this.set('allowedCells', []);\n      var data = this.get('activePieceData');\n\n      if (!data || this.get('phase') === 'MOVE') {\n        this.set('allowedPushCells', []);\n        return;\n      }\n      var type = data.type;\n      var isSideline = data.location === 'sideline';\n      var cellId = data.cellId;\n      var playerId = data.playerId;\n\n      var allowedPushCells = [];\n\n      if (type === 'sword') {\n        var x = Number(cellId[0]);\n        var y = Number(cellId[1]);\n\n        if (x - 1 > -1 && y - 1 > -1) {\n          allowedPushCells.push('' + (x - 1) + (y - 1));\n        }\n        if (x + 1 < 5 && y + 1 < 5) {\n          allowedPushCells.push('' + (x + 1) + (y + 1));\n        }\n        if (x - 1 > -1 && y + 1 < 5) {\n          allowedPushCells.push('' + (x - 1) + (y + 1));\n        }\n        if (x + 1 < 5 && y - 1 > -1) {\n          allowedPushCells.push('' + (x + 1) + (y - 1));\n        }\n      }\n\n      if (type === 'spear') {\n        var _x3 = Number(cellId[0]);\n        var _y3 = Number(cellId[1]);\n\n        if (_x3 - 1 > -1) {\n          allowedPushCells.push('' + (_x3 - 1) + _y3);\n        }\n        if (_x3 + 1 < 5) {\n          allowedPushCells.push('' + (_x3 + 1) + _y3);\n        }\n        if (_y3 - 1 > -1) {\n          allowedPushCells.push('' + _x3 + (_y3 - 1));\n        }\n        if (_y3 + 1 < 5) {\n          allowedPushCells.push('' + _x3 + (_y3 + 1));\n        }\n      }\n\n      if (type === 'shield') {\n        var _x4 = Number(cellId[0]);\n        var _y4 = Number(cellId[1]);\n\n        if (_x4 - 1 > -1 && _y4 - 1 > -1) {\n          allowedPushCells.push('' + (_x4 - 1) + (_y4 - 1));\n        }\n        if (_x4 + 1 < 5 && _y4 + 1 < 5) {\n          allowedPushCells.push('' + (_x4 + 1) + (_y4 + 1));\n        }\n        if (_x4 - 1 > -1 && _y4 + 1 < 5) {\n          allowedPushCells.push('' + (_x4 - 1) + (_y4 + 1));\n        }\n        if (_x4 + 1 < 5 && _y4 - 1 > -1) {\n          allowedPushCells.push('' + (_x4 + 1) + (_y4 - 1));\n        }\n\n        if (_x4 - 1 > -1) {\n          allowedPushCells.push('' + (_x4 - 1) + _y4);\n        }\n        if (_x4 + 1 < 5) {\n          allowedPushCells.push('' + (_x4 + 1) + _y4);\n        }\n        if (_y4 - 1 > -1) {\n          allowedPushCells.push('' + _x4 + (_y4 - 1));\n        }\n        if (_y4 + 1 < 5) {\n          allowedPushCells.push('' + _x4 + (_y4 + 1));\n        }\n      }\n\n      this.set('allowedPushCells', filterUnOccupiedCells(allowedPushCells));\n    }\n  }, {\n    key: 'defaultState',\n    get: function get() {\n      var state = {\n        phase: 'MOVE', //'PUSH'\n        activePieceData: null,\n        allowedCells: [],\n        allowedPushCells: []\n      };\n      return state;\n    }\n  }]);\n  return TurnModel;\n}((0, _utilityToolkit.classBuilder)(function () {\n  function _class() {\n    (0, _classCallCheck3.default)(this, _class);\n  }\n\n  return _class;\n}()).with(_utilityToolkit.model));\n\nvar turnModel = new TurnModel();\n\nexports.default = turnModel;\n\n//# sourceURL=webpack:///./src/common/turn-model.js?");

/***/ }),

/***/ "./src/common/views/base-view.js":
/*!***************************************!*\
  !*** ./src/common/views/base-view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)([''], ['']);\n\nexports.baseView = baseView;\n\nvar _index = __webpack_require__(/*! hyperhtml/esm/index */ \"./node_modules/hyperhtml/esm/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar _domDelegate = __webpack_require__(/*! dom-delegate */ \"./node_modules/dom-delegate/lib/index.js\");\n\nvar _domDelegate2 = _interopRequireDefault(_domDelegate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction baseView() {\n\treturn function (_classBuilder$with) {\n\t\t(0, _inherits3.default)(_class, _classBuilder$with);\n\n\t\tfunction _class() {\n\t\t\t(0, _classCallCheck3.default)(this, _class);\n\n\t\t\tvar _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n\t\t\t_this.html = (0, _index2.default)(_this);\n\t\t\t_this.delegateEl = (0, _domDelegate2.default)(_this);\n\t\t\treturn _this;\n\t\t}\n\n\t\t(0, _createClass3.default)(_class, [{\n\t\t\tkey: 'propertiesChanged',\n\t\t\tvalue: function propertiesChanged() {\n\t\t\t\tthis.render();\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'render',\n\t\t\tvalue: function render() {\n\t\t\t\treturn this.html(_templateObject);\n\t\t\t}\n\t\t}], [{\n\t\t\tkey: 'properties',\n\t\t\tget: function get() {\n\t\t\t\treturn {};\n\t\t\t}\n\t\t}]);\n\t\treturn _class;\n\t}((0, _utilityToolkit.classBuilder)((0, _utilityToolkit.customElement)()).with(_utilityToolkit.events, _utilityToolkit.properties));\n}\n\n//# sourceURL=webpack:///./src/common/views/base-view.js?");

/***/ }),

/***/ "./src/game/board/board.css":
/*!**********************************!*\
  !*** ./src/game/board/board.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./board.css */ \"./node_modules/css-loader/index.js!./src/game/board/board.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/game/board/board.css?");

/***/ }),

/***/ "./src/game/board/board.js":
/*!*********************************!*\
  !*** ./src/game/board/board.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Board = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n      ', '\\n      '], ['\\n      ', '\\n      ']),\n    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['<div class=\"b-row\">\\n        ', '\\n      </div>'], ['<div class=\"b-row\">\\n        ', '\\n      </div>']),\n    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\\n          <p-cell\\n            cell-id=\"', '\"\\n            piece-id=\"', '\"\\n            winning-cell=\"', '\"\\n            starting-cell-for-player=\"', '\"\\n            is-allowed-move=\"', '\"\\n            is-allowed-push=\"', '\"\\n          ></p-cell>\\n          '], ['\\n          <p-cell\\n            cell-id=\"', '\"\\n            piece-id=\"', '\"\\n            winning-cell=\"', '\"\\n            starting-cell-for-player=\"', '\"\\n            is-allowed-move=\"', '\"\\n            is-allowed-push=\"', '\"\\n          ></p-cell>\\n          ']);\n\nvar _index = __webpack_require__(/*! hyperhtml/esm/index */ \"./node_modules/hyperhtml/esm/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar _cell = __webpack_require__(/*! ./cell */ \"./src/game/board/cell.js\");\n\n__webpack_require__(/*! ./board.css */ \"./src/game/board/board.css\");\n\nvar _baseView2 = __webpack_require__(/*! common/views/base-view */ \"./src/common/views/base-view.js\");\n\nvar _getCurrentPieceForCell = __webpack_require__(/*! common/tasks/get-current-piece-for-cell */ \"./src/common/tasks/get-current-piece-for-cell.js\");\n\nvar _appModel = __webpack_require__(/*! common/app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nvar _turnModel = __webpack_require__(/*! common/turn-model */ \"./src/common/turn-model.js\");\n\nvar _turnModel2 = _interopRequireDefault(_turnModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Board = exports.Board = function (_baseView) {\n  (0, _inherits3.default)(Board, _baseView);\n  (0, _createClass3.default)(Board, null, [{\n    key: 'properties',\n    get: function get() {\n      return {\n        allowedCells: {\n          type: Array,\n          value: function value() {\n            return [];\n          }\n        },\n        allowedPushCells: {\n          type: Array,\n          value: function value() {\n            return [];\n          }\n        }\n      };\n    }\n  }]);\n\n  function Board() {\n    (0, _classCallCheck3.default)(this, Board);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this));\n\n    _this.state = Array.apply(null, Array(5)).map(function (ignore, rowIndex) {\n      return Array.apply(null, Array(5)).map(function (ignore, colIndex) {\n        return null;\n      });\n    });\n    _appModel2.default.createSubscriber().on('*', _this.render.bind(_this));\n    _turnModel2.default.createPropertyBinder(_this).addBindings([['allowedCells', 'allowedCells'], ['allowedPushCells', 'allowedPushCells']]);\n    return _this;\n  }\n\n  (0, _createClass3.default)(Board, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return this.html(_templateObject, this.state.map(function (row, x) {\n        return _index2.default.wire(row)(_templateObject2, row.map(function (cell, y) {\n          var cellId = '' + x + y;\n          var pieceData = (0, _getCurrentPieceForCell.getCurrentPieceForCell)(cellId) || {};\n          var isWinningCell = x === 2 && y === 2 ? 'true' : '';\n          var startingCellForPlayer = NaN;\n          if (x === 0 && y === 0 || x === 1 && y === 0 || x === 0 && y === 1) {\n            startingCellForPlayer = 0;\n          }\n          if (x === 4 && y === 4 || x === 4 && y === 3 || x === 3 && y === 4) {\n            startingCellForPlayer = 1;\n          }\n          var isAllowedMove = _this2.allowedCells.includes('' + x + y) ? 'true' : 'false';\n          var isAllowedPush = _this2.allowedPushCells.includes('' + x + y) ? 'true' : 'false';\n\n          return _index2.default.wire()(_templateObject3, cellId, pieceData.pieceId, isWinningCell, startingCellForPlayer, isAllowedMove, isAllowedPush);\n        }));\n      }));\n    }\n  }]);\n  return Board;\n}((0, _baseView2.baseView)());\n\nBoard.define('p-board');\n\n//# sourceURL=webpack:///./src/game/board/board.js?");

/***/ }),

/***/ "./src/game/board/cell.js":
/*!********************************!*\
  !*** ./src/game/board/cell.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Cell = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ \"./node_modules/babel-runtime/helpers/get.js\");\n\nvar _get3 = _interopRequireDefault(_get2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n\\t\\t <p-sword cell-id=\"', '\" player-id=\"', '\" id=\"', '\" class=\"', '\"></p-sword>\\n\\t\\t <p-spear cell-id=\"', '\" player-id=\"', '\" id=\"', '\" class=\"', '\"></p-spear>\\n\\t\\t <p-shield cell-id=\"', '\" player-id=\"', '\" id=\"', '\" class=\"', '\"></p-shield>\\n    '], ['\\n\\t\\t <p-sword cell-id=\"', '\" player-id=\"', '\" id=\"', '\" class=\"', '\"></p-sword>\\n\\t\\t <p-spear cell-id=\"', '\" player-id=\"', '\" id=\"', '\" class=\"', '\"></p-spear>\\n\\t\\t <p-shield cell-id=\"', '\" player-id=\"', '\" id=\"', '\" class=\"', '\"></p-shield>\\n    ']);\n\nvar _index = __webpack_require__(/*! hyperhtml/esm/index */ \"./node_modules/hyperhtml/esm/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar _domDelegate = __webpack_require__(/*! dom-delegate */ \"./node_modules/dom-delegate/lib/index.js\");\n\nvar _domDelegate2 = _interopRequireDefault(_domDelegate);\n\nvar _appChannel = __webpack_require__(/*! common/app-channel */ \"./src/common/app-channel.js\");\n\nvar _appChannel2 = _interopRequireDefault(_appChannel);\n\nvar _turnModel = __webpack_require__(/*! common/turn-model */ \"./src/common/turn-model.js\");\n\nvar _turnModel2 = _interopRequireDefault(_turnModel);\n\nvar _baseView2 = __webpack_require__(/*! common/views/base-view */ \"./src/common/views/base-view.js\");\n\nvar _getPieceStateById = __webpack_require__(/*! common/tasks/get-piece-state-by-id */ \"./src/common/tasks/get-piece-state-by-id.js\");\n\nvar _getCurrentPieceForCell = __webpack_require__(/*! common/tasks/get-current-piece-for-cell */ \"./src/common/tasks/get-current-piece-for-cell.js\");\n\nvar _getCurrentCellForPiece = __webpack_require__(/*! common/tasks/get-current-cell-for-piece */ \"./src/common/tasks/get-current-cell-for-piece.js\");\n\nvar _pieceChannel = __webpack_require__(/*! ../pieces/piece-channel */ \"./src/game/pieces/piece-channel.js\");\n\nvar _pieceChannel2 = _interopRequireDefault(_pieceChannel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Cell = exports.Cell = function (_baseView) {\n  (0, _inherits3.default)(Cell, _baseView);\n\n  function Cell() {\n    (0, _classCallCheck3.default)(this, Cell);\n    return (0, _possibleConstructorReturn3.default)(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(Cell, [{\n    key: 'construct',\n    value: function construct() {\n      this.html = (0, _index2.default)(this);\n      (0, _get3.default)(Cell.prototype.__proto__ || Object.getPrototypeOf(Cell.prototype), 'construct', this).call(this);\n      this.cellId = '';\n      this.delegateEl = (0, _domDelegate2.default)(this);\n    }\n  }, {\n    key: 'connected',\n    value: function connected() {\n      this.addEventListeners();\n    }\n  }, {\n    key: 'addEventListeners',\n    value: function addEventListeners() {\n      // this.addEventListener('dragover', function(e) {\n      // \te.preventDefault();\n      // })\n      // this.addEventListener('drop', this.handleDrop.bind(this));\n      if (this.cellId === '00') {\n        //window.jdp = this;\n        //debugger;\n      }\n      this.addEventListener('click', this.handleDrop.bind(this));\n    }\n  }, {\n    key: 'handleDrop',\n    value: function handleDrop(e) {\n      if (!_turnModel2.default.get('activePieceData')) {\n        return;\n      }\n      console.log(e.target);\n      console.log(e.currentTarget);\n\n      var piece = _turnModel2.default.get('activePieceData');\n      if (piece.cellId === this.cellId) {\n        if (_turnModel2.default.get('phase') === 'PUSH') {\n          _appChannel2.default.publish(_appChannel.TURN_ENDED);\n        }\n        return;\n      }\n      if (!piece.cellId || piece.cellId.includes('sideline')) {\n        if (Number(this.startingCellForPlayer) !== piece.playerId) {\n          _pieceChannel2.default.publish(_pieceChannel.SHAKE, piece.pieceId);\n          return;\n        }\n      }\n\n      if (_turnModel2.default.get('phase') === 'MOVE') {\n        if (!_turnModel2.default.get('allowedCells').includes(this.cellId)) {\n          _pieceChannel2.default.publish(_pieceChannel.SHAKE, piece.pieceId);\n        } else {\n          _appChannel2.default.publish(_appChannel.MOVE_PIECE, piece, this);\n        }\n        return;\n      }\n\n      if (_turnModel2.default.get('phase') === 'PUSH') {\n        if (!_turnModel2.default.get('allowedPushCells').includes(this.cellId)) {\n          _pieceChannel2.default.publish(_pieceChannel.SHAKE, piece.pieceId);\n        } else {\n          var currentCellForPiece = (0, _getCurrentCellForPiece.getCurrentCellForPiece)(piece.pieceId);\n          var pushedPiece = (0, _getCurrentPieceForCell.getCurrentPieceForCell)(this.cellId);\n          var pieceX = Number(currentCellForPiece[0]);\n          var pieceY = Number(currentCellForPiece[1]);\n          var pushedPieceX = Number(this.cellId[0]);\n          var pushedPieceY = Number(this.cellId[1]);\n          var xChange = pushedPieceX - pieceX;\n          var yChange = pushedPieceY - pieceY;\n          _appChannel2.default.publish(_appChannel.PUSH_PIECE, piece, pushedPiece, xChange, yChange);\n        }\n        return;\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.startingCellForPlayer === 0) {\n        this.classList.add('starting-cell');\n        this.classList.add('starting-cell--player-one');\n      } else if (this.startingCellForPlayer === 1) {\n        this.classList.add('starting-cell');\n        this.classList.add('starting-cell--player-two');\n      } else if (this.winningCell) {\n        this.classList.add('winning-cell');\n      }\n\n      this.classList[this.isAllowedMove === 'true' ? 'add' : 'remove']('allowed-move-cell');\n      this.classList[this.isAllowedPush === 'true' ? 'add' : 'remove']('allowed-push-cell');\n\n      var pieceState = (0, _getPieceStateById.getPieceStateById)(this.pieceId);\n      var type = pieceState && pieceState.type;\n      var playerId = pieceState && pieceState.playerId;\n\n      return this.html(_templateObject, this.cellId, playerId, this.pieceId, type === 'sword' ? 'show' : 'hide', this.cellId, playerId, this.pieceId, type === 'spear' ? 'show' : 'hide', this.cellId, playerId, this.pieceId, type === 'shield' ? 'show' : 'hide');\n    }\n  }], [{\n    key: 'properties',\n    get: function get() {\n      return {\n        cellId: {\n          type: String,\n          value: function value() {\n            return '';\n          }\n        },\n        pieceId: {\n          type: String,\n          value: function value() {\n            return '';\n          }\n        },\n        winningCell: {\n          type: String,\n          value: function value() {\n            return '';\n          }\n        },\n        startingCellForPlayer: {\n          type: Number,\n          value: function value() {\n            return NaN;\n          }\n        },\n        isAllowedMove: {\n          type: String,\n          value: function value() {\n            return 'false';\n          }\n        },\n        isAllowedPush: {\n          type: String,\n          value: function value() {\n            return 'false';\n          }\n        }\n      };\n    }\n  }]);\n  return Cell;\n}((0, _baseView2.baseView)());\n\nCell.define('p-cell');\n\n//# sourceURL=webpack:///./src/game/board/cell.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Game = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n\\t\\t\\t\\t<status-board />\\n\\t\\t\\t\\t<side-line player-id=\"0\"/>\\n        <p-board state=\"', '\" />\\n\\t\\t\\t\\t<side-line player-id=\"1\"/>\\n      '], ['\\n\\t\\t\\t\\t<status-board />\\n\\t\\t\\t\\t<side-line player-id=\"0\"/>\\n        <p-board state=\"', '\" />\\n\\t\\t\\t\\t<side-line player-id=\"1\"/>\\n      ']);\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar _board = __webpack_require__(/*! ./board/board */ \"./src/game/board/board.js\");\n\nvar _statusBoard = __webpack_require__(/*! ./status-board/status-board */ \"./src/game/status-board/status-board.js\");\n\n__webpack_require__(/*! ./side-line/side-line */ \"./src/game/side-line/side-line.js\");\n\nvar _player = __webpack_require__(/*! ../player */ \"./src/player.js\");\n\nvar _appModel = __webpack_require__(/*! common/app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nvar _baseView2 = __webpack_require__(/*! common/views/base-view */ \"./src/common/views/base-view.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NUM_POINTS_TO_WIN = 9;\n\nvar Game = exports.Game = function (_baseView) {\n\t(0, _inherits3.default)(Game, _baseView);\n\n\tfunction Game() {\n\t\t(0, _classCallCheck3.default)(this, Game);\n\n\t\tvar _this = (0, _possibleConstructorReturn3.default)(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));\n\n\t\t_this.appModel = _appModel2.default;\n\t\t_this.listenForEvents();\n\t\treturn _this;\n\t}\n\n\t(0, _createClass3.default)(Game, [{\n\t\tkey: 'connected',\n\t\tvalue: function connected() {\n\t\t\tthis.appModelPropBinder = _appModel2.default.createPropertyBinder(this).addBindings([['game.currentPlayer', 'currentPlayer'], ['game.winningPlayer', 'winningPlayer']]);\n\t\t}\n\t}, {\n\t\tkey: 'disconnected',\n\t\tvalue: function disconnected() {\n\t\t\tthis.appModelPropBinder.destroy();\n\t\t}\n\t}, {\n\t\tkey: 'listenForEvents',\n\t\tvalue: function listenForEvents() {\n\t\t\tthis.addEventListener('gameEvent', this.handleGameEvent.bind(this));\n\t\t}\n\t}, {\n\t\tkey: 'handleGameEvent',\n\t\tvalue: function handleGameEvent(e) {\n\t\t\tvar details = e.details;\n\t\t\t//this.appModel.handleEvent(details);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\n\t\t\tif (this.winningPlayer === 0 || this.winningPlayer === 1) {\n\t\t\t\tthis.classList.add('game--over');\n\t\t\t}\n\n\t\t\tthis.classList[this.currentPlayer === 0 ? 'add' : 'remove']('game--first-player');\n\t\t\tthis.classList[this.currentPlayer === 1 ? 'add' : 'remove']('game--second-player');\n\n\t\t\treturn this.html(_templateObject, this.appModel.get('board'));\n\t\t}\n\t}], [{\n\t\tkey: 'properties',\n\t\tget: function get() {\n\t\t\treturn {\n\t\t\t\tcurrentPlayer: {\n\t\t\t\t\ttype: Number,\n\t\t\t\t\tvalue: function value() {\n\t\t\t\t\t\treturn 999;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\twinningPlayer: {\n\t\t\t\t\ttype: Number,\n\t\t\t\t\tvalue: function value() {\n\t\t\t\t\t\treturn NaN;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}]);\n\treturn Game;\n}((0, _baseView2.baseView)());\n\nGame.define('p-game');\n\n//# sourceURL=webpack:///./src/game/game.js?");

/***/ }),

/***/ "./src/game/pieces/piece-channel.js":
/*!******************************************!*\
  !*** ./src/game/pieces/piece-channel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SHAKE = undefined;\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar pieceCh = (0, _utilityToolkit.eventHubFactory)();\n\nexports.default = pieceCh;\nvar SHAKE = exports.SHAKE = 'SHAKE';\n\n//# sourceURL=webpack:///./src/game/pieces/piece-channel.js?");

/***/ }),

/***/ "./src/game/pieces/piece.js":
/*!**********************************!*\
  !*** ./src/game/pieces/piece.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Piece = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _baseView2 = __webpack_require__(/*! common/views/base-view */ \"./src/common/views/base-view.js\");\n\n__webpack_require__(/*! ./pieces.css */ \"./src/game/pieces/pieces.css\");\n\nvar _turnModel = __webpack_require__(/*! common/turn-model */ \"./src/common/turn-model.js\");\n\nvar _turnModel2 = _interopRequireDefault(_turnModel);\n\nvar _getCurrentCellForPiece = __webpack_require__(/*! common/tasks/get-current-cell-for-piece */ \"./src/common/tasks/get-current-cell-for-piece.js\");\n\nvar _appModel = __webpack_require__(/*! common/app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nvar _pieceChannel = __webpack_require__(/*! ./piece-channel */ \"./src/game/pieces/piece-channel.js\");\n\nvar _pieceChannel2 = _interopRequireDefault(_pieceChannel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Piece = exports.Piece = function (_baseView) {\n  (0, _inherits3.default)(Piece, _baseView);\n  (0, _createClass3.default)(Piece, null, [{\n    key: 'properties',\n    get: function get() {\n      return {\n        playerId: {\n          type: Number,\n          value: function value() {\n            return NaN;\n          }\n        },\n        cellId: {\n          type: String,\n          value: function value() {\n            return '';\n          }\n        }\n      };\n    }\n  }]);\n\n  function Piece() {\n    (0, _classCallCheck3.default)(this, Piece);\n    return (0, _possibleConstructorReturn3.default)(this, (Piece.__proto__ || Object.getPrototypeOf(Piece)).call(this));\n  }\n\n  (0, _createClass3.default)(Piece, [{\n    key: 'connected',\n    value: function connected() {\n      var _this2 = this;\n\n      this.addEventListeners();\n      this.pieceChSubscriber = _pieceChannel2.default.createSubscriber().on(_pieceChannel.SHAKE, function (pieceId) {\n        if (_this2.id === pieceId) {\n          _this2.shake();\n        }\n      });\n    }\n  }, {\n    key: 'disconnected',\n    value: function disconnected() {\n      this.pieceChSubscriber.destroy();\n    }\n  }, {\n    key: 'addEventListeners',\n    value: function addEventListeners() {\n      this.addEventListener('click', this.handleClick.bind(this));\n    }\n  }, {\n    key: 'shake',\n    value: function shake() {\n      var _this3 = this;\n\n      this.classList.add('invalid');\n      setTimeout(function () {\n        _this3.classList.remove('invalid');\n      }, 1000);\n    }\n  }, {\n    key: 'handleClick',\n    value: function handleClick(e) {\n      e.preventDefault();\n      var pieceId = e.currentTarget.pieceId || e.currentTarget.id;\n      var currentPlayerId = _appModel2.default.get('game.currentPlayer');\n      var piecePlayerId = e.currentTarget.playerId;\n\n      if (_turnModel2.default.get('phase') === 'PUSH') {\n        return;\n      }\n\n      if (currentPlayerId !== piecePlayerId) {\n        this.shake();\n        _turnModel2.default.set('activePieceData', null);\n        return;\n      }\n\n      if (pieceId) {\n        _turnModel2.default.set('activePieceData', _appModel2.default.getPieceStateById(pieceId));\n      }\n    }\n  }, {\n    key: 'currentCell',\n    get: function get() {\n      return (0, _getCurrentCellForPiece.getCurrentCellForPiece)(this);\n    }\n  }]);\n  return Piece;\n}((0, _baseView2.baseView)());\n\n//# sourceURL=webpack:///./src/game/pieces/piece.js?");

/***/ }),

/***/ "./src/game/pieces/pieces.css":
/*!************************************!*\
  !*** ./src/game/pieces/pieces.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./pieces.css */ \"./node_modules/css-loader/index.js!./src/game/pieces/pieces.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/game/pieces/pieces.css?");

/***/ }),

/***/ "./src/game/pieces/shield.piece.js":
/*!*****************************************!*\
  !*** ./src/game/pieces/shield.piece.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Shield = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ \"./node_modules/babel-runtime/helpers/get.js\");\n\nvar _get3 = _interopRequireDefault(_get2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n      <a href=\"#\" class=\"', '\">\\n        <img width=\"100%\" height=\"100%\" src=\"https://upload.wikimedia.org/wikipedia/commons/5/57/Coa_Illustration_Shield_Heater.svg\">\\n      </a>\\n    '], ['\\n      <a href=\"#\" class=\"', '\">\\n        <img width=\"100%\" height=\"100%\" src=\"https://upload.wikimedia.org/wikipedia/commons/5/57/Coa_Illustration_Shield_Heater.svg\">\\n      </a>\\n    ']);\n\nvar _piece = __webpack_require__(/*! ./piece */ \"./src/game/pieces/piece.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Shield = exports.Shield = function (_Piece) {\n  (0, _inherits3.default)(Shield, _Piece);\n\n  function Shield() {\n    (0, _classCallCheck3.default)(this, Shield);\n    return (0, _possibleConstructorReturn3.default)(this, (Shield.__proto__ || Object.getPrototypeOf(Shield)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(Shield, [{\n    key: 'construct',\n    value: function construct() {\n      (0, _get3.default)(Shield.prototype.__proto__ || Object.getPrototypeOf(Shield.prototype), 'construct', this).call(this);\n      //this.id = '0_shield_0';\n      this.setAttribute('draggable', true);\n      this.classList.add('piece');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return this.html(_templateObject, 'piece-for-player' + this.playerId);\n    }\n  }]);\n  return Shield;\n}(_piece.Piece);\n\nShield.define('p-shield');\n\n//# sourceURL=webpack:///./src/game/pieces/shield.piece.js?");

/***/ }),

/***/ "./src/game/pieces/spear.piece.js":
/*!****************************************!*\
  !*** ./src/game/pieces/spear.piece.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Spear = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ \"./node_modules/babel-runtime/helpers/get.js\");\n\nvar _get3 = _interopRequireDefault(_get2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n      <a href=\"#\" class=\"', '\">\\n        <img width=\"100%\" height=\"100%\" src=\"https://upload.wikimedia.org/wikipedia/commons/0/06/Spear.svg\">\\n      </a>\\n    '], ['\\n      <a href=\"#\" class=\"', '\">\\n        <img width=\"100%\" height=\"100%\" src=\"https://upload.wikimedia.org/wikipedia/commons/0/06/Spear.svg\">\\n      </a>\\n    ']);\n\nvar _piece = __webpack_require__(/*! ./piece */ \"./src/game/pieces/piece.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Spear = exports.Spear = function (_Piece) {\n  (0, _inherits3.default)(Spear, _Piece);\n\n  function Spear() {\n    (0, _classCallCheck3.default)(this, Spear);\n    return (0, _possibleConstructorReturn3.default)(this, (Spear.__proto__ || Object.getPrototypeOf(Spear)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(Spear, [{\n    key: 'construct',\n    value: function construct() {\n      (0, _get3.default)(Spear.prototype.__proto__ || Object.getPrototypeOf(Spear.prototype), 'construct', this).call(this);\n      //this.id = '0_spear_0';\n      this.setAttribute('draggable', true);\n      this.classList.add('piece');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return this.html(_templateObject, 'piece-for-player' + this.playerId);\n    }\n  }]);\n  return Spear;\n}(_piece.Piece);\n\nSpear.define('p-spear');\n\n//# sourceURL=webpack:///./src/game/pieces/spear.piece.js?");

/***/ }),

/***/ "./src/game/pieces/sword.piece.js":
/*!****************************************!*\
  !*** ./src/game/pieces/sword.piece.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Sword = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ \"./node_modules/babel-runtime/helpers/get.js\");\n\nvar _get3 = _interopRequireDefault(_get2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n      <a href=\"#\" draggable=\"false\" class=\"', '\">\\n        <img draggable=\"false\" width=\"100%\" height=\"100%\" src=\"https://upload.wikimedia.org/wikipedia/commons/4/4c/Coa_Illustration_Elements_Arms_Sword.svg\">\\n      </a>\\n    '], ['\\n      <a href=\"#\" draggable=\"false\" class=\"', '\">\\n        <img draggable=\"false\" width=\"100%\" height=\"100%\" src=\"https://upload.wikimedia.org/wikipedia/commons/4/4c/Coa_Illustration_Elements_Arms_Sword.svg\">\\n      </a>\\n    ']);\n\nvar _piece = __webpack_require__(/*! ./piece */ \"./src/game/pieces/piece.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Sword = exports.Sword = function (_Piece) {\n  (0, _inherits3.default)(Sword, _Piece);\n\n  function Sword() {\n    (0, _classCallCheck3.default)(this, Sword);\n    return (0, _possibleConstructorReturn3.default)(this, (Sword.__proto__ || Object.getPrototypeOf(Sword)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(Sword, [{\n    key: 'construct',\n    value: function construct() {\n      (0, _get3.default)(Sword.prototype.__proto__ || Object.getPrototypeOf(Sword.prototype), 'construct', this).call(this);\n      //this.id = '0_sword_0';\n      this.setAttribute('draggable', true);\n      this.classList.add('piece');\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return this.html(_templateObject, 'piece-for-player' + this.playerId);\n    }\n  }]);\n  return Sword;\n}(_piece.Piece);\n\nSword.define('p-sword');\n\n//# sourceURL=webpack:///./src/game/pieces/sword.piece.js?");

/***/ }),

/***/ "./src/game/side-line/side-line.css":
/*!******************************************!*\
  !*** ./src/game/side-line/side-line.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./side-line.css */ \"./node_modules/css-loader/index.js!./src/game/side-line/side-line.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/game/side-line/side-line.css?");

/***/ }),

/***/ "./src/game/side-line/side-line.js":
/*!*****************************************!*\
  !*** ./src/game/side-line/side-line.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SideLine = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ \"./node_modules/babel-runtime/helpers/get.js\");\n\nvar _get3 = _interopRequireDefault(_get2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n       <div>Player ', ': Pieces left: ', '</div>\\n       <div class=\"sideline-pieces\">\\n         <div class=\"sideline_cell\">\\n          <p-sword cell-id=\"', '\" player-id=\"', '\" id=\"', '\"></p-sword>\\n         </div>\\n         <div class=\"sideline_cell\">\\n          <p-spear cell-id=\"', '\" player-id=\"', '\" id=\"', '\"></p-spear>\\n         </div>\\n         <div class=\"sideline_cell\">\\n          <p-shield cell-id=\"', '\" player-id=\"', '\" id=\"', '\"></p-shield>\\n         </div>\\n      </div>\\n    '], ['\\n       <div>Player ', ': Pieces left: ', '</div>\\n       <div class=\"sideline-pieces\">\\n         <div class=\"sideline_cell\">\\n          <p-sword cell-id=\"', '\" player-id=\"', '\" id=\"', '\"></p-sword>\\n         </div>\\n         <div class=\"sideline_cell\">\\n          <p-spear cell-id=\"', '\" player-id=\"', '\" id=\"', '\"></p-spear>\\n         </div>\\n         <div class=\"sideline_cell\">\\n          <p-shield cell-id=\"', '\" player-id=\"', '\" id=\"', '\"></p-shield>\\n         </div>\\n      </div>\\n    ']);\n\nvar _index = __webpack_require__(/*! hyperhtml/esm/index */ \"./node_modules/hyperhtml/esm/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\n__webpack_require__(/*! ./side-line.css */ \"./src/game/side-line/side-line.css\");\n\nvar _domDelegate = __webpack_require__(/*! dom-delegate */ \"./node_modules/dom-delegate/lib/index.js\");\n\nvar _domDelegate2 = _interopRequireDefault(_domDelegate);\n\nvar _appModel = __webpack_require__(/*! common/app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nvar _baseView2 = __webpack_require__(/*! common/views/base-view */ \"./src/common/views/base-view.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SideLine = exports.SideLine = function (_baseView) {\n  (0, _inherits3.default)(SideLine, _baseView);\n\n  // export class SideLine extends classBuilder(customElement()).with(\n  // \tevents,\n  // \tproperties) {\n  function SideLine() {\n    (0, _classCallCheck3.default)(this, SideLine);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (SideLine.__proto__ || Object.getPrototypeOf(SideLine)).call(this));\n\n    _this.html = (0, _index2.default)(_this);\n    _this.appModel = _appModel2.default;\n    return _this;\n  }\n\n  (0, _createClass3.default)(SideLine, [{\n    key: 'construct',\n    value: function construct() {\n      (0, _get3.default)(SideLine.prototype.__proto__ || Object.getPrototypeOf(SideLine.prototype), 'construct', this).call(this);\n    }\n  }, {\n    key: 'connected',\n    value: function connected() {\n      var appModelPropBinder = _appModel2.default.createPropertyBinder(this).addBindings([['sideline.' + this.playerId, 'numSidelinePieces'], ['game.currentPlayer', 'currentPlayer']]);\n    }\n  }, {\n    key: 'propertiesChanged',\n    value: function propertiesChanged(val1, val2, c) {\n      this.render();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      this.classList[this.disabled ? 'add' : 'remove']('sideline--disabled');\n      var nextSwordId = this.currentPlayer + '_sword_' + Math.abs(this.numSidelinePieces - 9);\n      var nextSpearId = this.currentPlayer + '_spear_' + Math.abs(this.numSidelinePieces - 9);\n      var nextShieldId = this.currentPlayer + '_shield_' + Math.abs(this.numSidelinePieces - 9);\n\n      return this.html(_templateObject, this.playerId + 1, this.numSidelinePieces, this.playerId + '_sideline', this.playerId, nextSwordId, this.playerId + '_sideline', this.playerId, nextSpearId, this.playerId + '_sideline', this.playerId, nextShieldId);\n    }\n  }, {\n    key: 'disabled',\n    get: function get() {\n      return this.currentPlayer !== this.playerId;\n    }\n  }], [{\n    key: 'properties',\n    get: function get() {\n      return {\n        numSidelinePieces: {\n          type: Number,\n          value: function value() {\n            return 0;\n          }\n        },\n        playerId: {\n          type: Number,\n          value: function value() {\n            return 999;\n          }\n        },\n        currentPlayer: {\n          type: Number,\n          value: function value() {\n            return 999;\n          }\n        }\n      };\n    }\n  }]);\n  return SideLine;\n}((0, _baseView2.baseView)());\n\nSideLine.define('side-line');\n\n//# sourceURL=webpack:///./src/game/side-line/side-line.js?");

/***/ }),

/***/ "./src/game/status-board/status-board.css":
/*!************************************************!*\
  !*** ./src/game/status-board/status-board.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./status-board.css */ \"./node_modules/css-loader/index.js!./src/game/status-board/status-board.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/game/status-board/status-board.css?");

/***/ }),

/***/ "./src/game/status-board/status-board.js":
/*!***********************************************!*\
  !*** ./src/game/status-board/status-board.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.StatusBoard = undefined;\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n      Scale: <button onclick=\"', '\" id=\"scale-smaller\">-</button>\\n             <button onclick=\"', '\" id=\"scale-bigger\">+</button><br><br>\\n\\n\\n      <div class=\"player-info\"><span class=\"player-swatch player-one-swatch\"></span> Player 1 Pennants: ', ' ', '</div>\\n      <div class=\"player-info\"><span class=\"player-swatch player-two-swatch\"></span> Player 2 Pennants: ', ' ', '</div>\\n    '], ['\\n      Scale: <button onclick=\"', '\" id=\"scale-smaller\">-</button>\\n             <button onclick=\"', '\" id=\"scale-bigger\">+</button><br><br>\\n\\n\\n      <div class=\"player-info\"><span class=\"player-swatch player-one-swatch\"></span> Player 1 Pennants: ', ' ', '</div>\\n      <div class=\"player-info\"><span class=\"player-swatch player-two-swatch\"></span> Player 2 Pennants: ', ' ', '</div>\\n    ']);\n//import {getCurrentPlayer} from 'common/providers/current-player';\n\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\n__webpack_require__(/*! ./status-board.css */ \"./src/game/status-board/status-board.css\");\n\nvar _domDelegate = __webpack_require__(/*! dom-delegate */ \"./node_modules/dom-delegate/lib/index.js\");\n\nvar _domDelegate2 = _interopRequireDefault(_domDelegate);\n\nvar _appModel = __webpack_require__(/*! common/app-model */ \"./src/common/app-model.js\");\n\nvar _appModel2 = _interopRequireDefault(_appModel);\n\nvar _baseView2 = __webpack_require__(/*! common/views/base-view */ \"./src/common/views/base-view.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar StatusBoard = exports.StatusBoard = function (_baseView) {\n  (0, _inherits3.default)(StatusBoard, _baseView);\n\n  function StatusBoard() {\n    (0, _classCallCheck3.default)(this, StatusBoard);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (StatusBoard.__proto__ || Object.getPrototypeOf(StatusBoard)).call(this));\n\n    var appModelPropBinder = _appModel2.default.createPropertyBinder(_this).addBindings([['game.currentPlayer', 'currentPlayer'], ['players.0.points', 'player0Points'], ['players.1.points', 'player1Points'], ['game.winningPlayer', 'winningPlayer']]);\n\n    return _this;\n  }\n\n  (0, _createClass3.default)(StatusBoard, [{\n    key: 'propertiesChanged',\n    value: function propertiesChanged() {\n      this.render();\n    }\n  }, {\n    key: 'makeSmaller',\n    value: function makeSmaller(e) {\n      var currentSize = Number(document.documentElement.style.fontSize.replace('%', '') || 100);\n      document.documentElement.style.fontSize = currentSize * .9 + '%';\n    }\n  }, {\n    key: 'makeBigger',\n    value: function makeBigger(e) {\n      var currentSize = Number(document.documentElement.style.fontSize.replace('%', '') || 100);\n      document.documentElement.style.fontSize = currentSize * 1.1 + '%';\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return this.html(_templateObject, this.makeSmaller, this.makeBigger, this.player0Points, this.winningPlayer === 0 ? 'Winner!' : '', this.player1Points, this.winningPlayer === 1 ? 'Winner!' : '');\n    }\n  }, {\n    key: 'addEventListeners',\n    value: function addEventListeners() {\n      this.delegateEl.on('click', 'p-cell', function (e) {});\n    }\n  }], [{\n    key: 'properties',\n    get: function get() {\n\n      return {\n        currentPlayer: {\n          type: Number,\n          reflectToAttribute: false,\n          value: function value() {\n            return 0;\n          }\n        },\n        winningPlayer: {\n          type: Number,\n          reflectToAttribute: false\n        },\n        player0Points: {\n          type: Number,\n          reflectToAttribute: false,\n          value: function value() {\n            return 0;\n          }\n        },\n        player1Points: {\n          type: Number,\n          reflectToAttribute: false,\n          value: function value() {\n            return 0;\n          }\n        }\n      };\n    }\n  }]);\n  return StatusBoard;\n}((0, _baseView2.baseView)());\n\nStatusBoard.define('status-board');\n\n//# sourceURL=webpack:///./src/game/status-board/status-board.js?");

/***/ }),

/***/ "./src/pennant-game.css":
/*!******************************!*\
  !*** ./src/pennant-game.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./pennant-game.css */ \"./node_modules/css-loader/index.js!./src/pennant-game.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/pennant-game.css?");

/***/ }),

/***/ "./src/pennant-game.js":
/*!*****************************!*\
  !*** ./src/pennant-game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\nexports.PennantGame = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _taggedTemplateLiteral2 = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ \"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js\");\n\nvar _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _templateObject = (0, _taggedTemplateLiteral3.default)(['\\n\\t\\t\\t\\t\\t', '\\n\\t\\t\\t\\t'], ['\\n\\t\\t\\t\\t\\t', '\\n\\t\\t\\t\\t']); /* @flow */\n// eslint-disable-line import/no-unassigned-import, import/extensions\n\n\n__webpack_require__(/*! ./pennant-game.css */ \"./src/pennant-game.css\");\n\nvar _utilityToolkit = __webpack_require__(/*! utility-toolkit */ \"./node_modules/utility-toolkit/lib/index.js\");\n\nvar _game = __webpack_require__(/*! game/game */ \"./src/game/game.js\");\n\nvar _domDelegate = __webpack_require__(/*! dom-delegate */ \"./node_modules/dom-delegate/lib/index.js\");\n\nvar _domDelegate2 = _interopRequireDefault(_domDelegate);\n\nvar _turnModel = __webpack_require__(/*! common/turn-model */ \"./src/common/turn-model.js\");\n\nvar _turnModel2 = _interopRequireDefault(_turnModel);\n\nvar _baseView2 = __webpack_require__(/*! common/views/base-view */ \"./src/common/views/base-view.js\");\n\n__webpack_require__(/*! game/pieces/shield.piece */ \"./src/game/pieces/shield.piece.js\");\n\n__webpack_require__(/*! game/pieces/spear.piece */ \"./src/game/pieces/spear.piece.js\");\n\n__webpack_require__(/*! game/pieces/sword.piece */ \"./src/game/pieces/sword.piece.js\");\n\n__webpack_require__(/*! common/app-actions */ \"./src/common/app-actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NUM_PLAYERS = 2;\n\nvar PennantGame = exports.PennantGame = function (_baseView) {\n\t\t(0, _inherits3.default)(PennantGame, _baseView);\n\n\t\tfunction PennantGame() {\n\t\t\t\t(0, _classCallCheck3.default)(this, PennantGame);\n\n\t\t\t\tvar _this = (0, _possibleConstructorReturn3.default)(this, (PennantGame.__proto__ || Object.getPrototypeOf(PennantGame)).call(this));\n\n\t\t\t\t_this.game = new _game.Game(NUM_PLAYERS);\n\t\t\t\treturn _this;\n\t\t}\n\n\t\t(0, _createClass3.default)(PennantGame, [{\n\t\t\t\tkey: 'addEventListeners',\n\t\t\t\tvalue: function addEventListeners() {\n\t\t\t\t\t\t(0, _domDelegate2.default)(document.body).on('click', 'a', function (e) {\n\t\t\t\t\t\t\t\tvar href = this.getAttribute('href');\n\t\t\t\t\t\t\t\tif (href === '#') {\n\t\t\t\t\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\n\t\t\t\t\t\t// this.delegateEl.on('dragstart', '.piece', function(e) {\n\t\t\t\t\t\t//   turnModel.set('activePieceData', e.target);\n\t\t\t\t\t\t// });\n\t\t\t\t}\n\t\t}, {\n\t\t\t\tkey: 'connected',\n\t\t\t\tvalue: function connected() {\n\t\t\t\t\t\tthis.render();\n\t\t\t\t\t\t//this.addEventListeners();\n\t\t\t\t\t\t//this.play();\n\t\t\t\t}\n\t\t}, {\n\t\t\t\tkey: 'render',\n\t\t\t\tvalue: function render() {\n\t\t\t\t\t\treturn this.html(_templateObject, this.game);\n\t\t\t\t}\n\t\t}, {\n\t\t\t\tkey: 'play',\n\t\t\t\tvalue: function () {\n\t\t\t\t\t\tvar _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {\n\t\t\t\t\t\t\t\treturn _regenerator2.default.wrap(function _callee$(_context) {\n\t\t\t\t\t\t\t\t\t\twhile (1) {\n\t\t\t\t\t\t\t\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tif (!this.game.hasWinner()) {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t_context.next = 2;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context.abrupt('return');\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t_context.next = 4;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn this.game.playTurn();\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthis.play();\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcase 5:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}, _callee, this);\n\t\t\t\t\t\t}));\n\n\t\t\t\t\t\tfunction play() {\n\t\t\t\t\t\t\t\treturn _ref.apply(this, arguments);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn play;\n\t\t\t\t}()\n\t\t}]);\n\t\treturn PennantGame;\n}((0, _baseView2.baseView)());\n\nPennantGame.define('pennant-game');\n\n//# sourceURL=webpack:///./src/pennant-game.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Player = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Player = exports.Player = function () {\n  function Player(id) {\n    (0, _classCallCheck3.default)(this, Player);\n\n    this.id = id;\n    this.points = 0;\n    this.currentMoveResolve = null;\n  }\n\n  (0, _createClass3.default)(Player, [{\n    key: \"playTurn\",\n    value: function () {\n      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(game) {\n        return _regenerator2.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.getMove();\n\n              case 2:\n                return _context.abrupt(\"return\", _context.sent);\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function playTurn(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return playTurn;\n    }()\n  }, {\n    key: \"getMove\",\n    value: function () {\n      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {\n        var _this = this;\n\n        return _regenerator2.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                return _context2.abrupt(\"return\", new Promise(function (resolve) {\n                  _this.currentMoveResolve = resolve;\n                }));\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function getMove() {\n        return _ref2.apply(this, arguments);\n      }\n\n      return getMove;\n    }()\n  }]);\n  return Player;\n}();\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });