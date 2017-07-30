global.assets = require("./assets.json");
module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(167);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(168);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(169);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Selectors
var upperFirst = __webpack_require__(198);

var req = __webpack_require__(173);

req.keys().forEach(function (key) {
  var storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
  var fromName = 'from' + upperFirst(storeName);
  var selectors = req(key);
  var getState = function getState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state[storeName] || {};
  };

  module.exports[fromName] = {};

  Object.keys(selectors).forEach(function (name) {
    var selector = selectors[name];
    if (typeof selector === 'function') {
      module.exports[fromName][name] = function (state) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return selector.apply(undefined, [getState(state)].concat(args));
      };
    }
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-form-submit");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Link");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export email */
/* unused harmony export url */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return required; });
/* unused harmony export minLength */
/* unused harmony export maxLength */
/* unused harmony export integer */
/* unused harmony export oneOf */
/* unused harmony export match */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL__);





var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

var email = function email(value) {
  return !isEmpty(value) && !__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default()(value) && 'Invalid email address';
};

var url = function url(value) {
  return !isEmpty(value) && !__WEBPACK_IMPORTED_MODULE_3_validator_lib_isURL___default()(value) && 'Invalid URL';
};

var required = function required(value) {
  return isEmpty(value) && 'Required field';
};

var minLength = function minLength(min) {
  return function (value) {
    return !isEmpty(value) && value.length < min && 'Must be at least ' + min + ' characters';
  };
};

var maxLength = function maxLength(max) {
  return function (value) {
    return !isEmpty(value) && value.length > max && 'Must be no more than ' + max + ' characters';
  };
};

var integer = function integer(value) {
  return !__WEBPACK_IMPORTED_MODULE_1_validator_lib_isInt___default()(value) && 'Must be an integer';
};

var oneOf = function oneOf(values) {
  return function (value) {
    return !__WEBPACK_IMPORTED_MODULE_2_validator_lib_isIn___default()(value, values) && 'Must be one of: ' + values.join(', ');
  };
};

var match = function match(field) {
  return function (value, data) {
    return data && value !== data[field] && 'Must match';
  };
};

var createValidator = function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      var rule = join([].concat(rules[key]));
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(58);

var config = {
  all: {
    env: "production" || 'development',
    isDev: "production" !== 'production',
    basename: "",
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'https://trendberry-api.herokuapp.com/api',
    fbAppId: '991453140998882',
    googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
    gtmId: 'GTM-WX5ZNVC'
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://trendberry-api.herokuapp.com/api'
  }
};

module.exports = merge(config.all, config[config.all.env]);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Add");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Delete");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ModeEdit");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Checkbox");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_services_validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var CategoryFormContainer = function CategoryFormContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components__["CategoryForm"], props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceUpdateRequest"])('categories', values._id, values)).then(function () {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["notificationSend"])({
        message: 'Category updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceCreateRequest"])('categories', values)).then(function (id) {
    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["push"])('/categories/' + id));
  });
};

var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_services_validation__["a" /* createValidator */])({
  name: [__WEBPACK_IMPORTED_MODULE_6_services_validation__["b" /* required */]]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromEntities"].getDetail(state, 'categories', id), {
      _csrf: __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromForm"].getCsrfToken(state)
    })
  };
};

var config = {
  fields: ['name', 'description', 'slug', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])(config)(CategoryFormContainer)));

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_services_validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var ProductFormContainer = function ProductFormContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components__["ProductForm"], props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceUpdateRequest"])('products', values._id, values)).then(function () {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["notificationSend"])({
        message: 'Product updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceCreateRequest"])('products', values)).then(function (id) {
    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["push"])('/products/' + id));
  });
};

var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_services_validation__["a" /* createValidator */])({
  name: [__WEBPACK_IMPORTED_MODULE_6_services_validation__["b" /* required */]]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromEntities"].getDetail(state, 'products', id), {
      _csrf: __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromForm"].getCsrfToken(state)
    })
  };
};

var config = {
  fields: ['name', 'description', 'slug', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])(config)(ProductFormContainer)));

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_services_validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










var ShopFormContainer = function ShopFormContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components__["ShopForm"], props);
};

var onSubmit = function onSubmit(data, dispatch) {
  if (data._id) {
    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["resourceUpdateRequest"])('shops', data._id, data));
  }
  return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["resourceCreateRequest"])('shops', data));
};

var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_services_validation__["a" /* createValidator */])({
  name: [__WEBPACK_IMPORTED_MODULE_5_services_validation__["b" /* required */]]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, __WEBPACK_IMPORTED_MODULE_4_store_selectors__["fromEntities"].getDetail(state, 'shops', id), {
      _csrf: __WEBPACK_IMPORTED_MODULE_4_store_selectors__["fromForm"].getCsrfToken(state)
    })
  };
};

var config = {
  form: 'ShopForm',
  fields: ['name', 'description', 'slug', 'feedUrl', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])(config)(ShopFormContainer)));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_services_validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var UserFormContainer = function UserFormContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components__["UserForm"], props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceUpdateRequest"])('users', values._id, values)).then(function () {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["notificationSend"])({
        message: 'User updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceCreateRequest"])('users', values)).then(function (id) {
    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["push"])('/users/' + id));
  });
};

var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_services_validation__["a" /* createValidator */])({});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromEntities"].getDetail(state, 'users', id), {
      _csrf: __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromForm"].getCsrfToken(state)
    })
  };
};

var config = {
  fields: ['displayName', 'firstname', 'lastName', 'email'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])(config)(UserFormContainer)));

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_services_validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var VendorFormContainer = function VendorFormContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components__["VendorForm"], props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceUpdateRequest"])('vendors', values._id, values)).then(function () {
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["notificationSend"])({
        message: 'Vendor updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceCreateRequest"])('vendors', values)).then(function (id) {
    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["push"])('/vendors/' + id));
  });
};

var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_services_validation__["a" /* createValidator */])({
  name: [__WEBPACK_IMPORTED_MODULE_6_services_validation__["b" /* required */]]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromEntities"].getDetail(state, 'vendors', id), {
      _csrf: __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromForm"].getCsrfToken(state)
    })
  };
};

var config = {
  fields: ['name', 'description', 'slug', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])(config)(VendorFormContainer)));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SIGNIN", function() { return AUTH_SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SIGNIN_REQUEST", function() { return AUTH_SIGNIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SIGNIN_SUCCESS", function() { return AUTH_SIGNIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_SIGNIN_FAILURE", function() { return AUTH_SIGNIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSigninRequest", function() { return authSigninRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSigninSuccess", function() { return authSigninSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSigninFailure", function() { return authSigninFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER_READ", function() { return AUTH_USER_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER_READ_REQUEST", function() { return AUTH_USER_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER_READ_SUCCESS", function() { return AUTH_USER_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER_READ_FAILURE", function() { return AUTH_USER_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUserReadRequest", function() { return authUserReadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUserReadSuccess", function() { return authUserReadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUserReadFailure", function() { return authUserReadFailure; });
var AUTH_SIGNIN = 'AUTH_SIGNIN';
var AUTH_SIGNIN_REQUEST = 'AUTH_SIGNIN_REQUEST';
var AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS';
var AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE';

var authSigninRequest = function authSigninRequest(data) {
  return {
    type: AUTH_SIGNIN_REQUEST,
    payload: { data: data },
    meta: {
      thunk: 'AuthSignIn'
    }
  };
};

var authSigninSuccess = function authSigninSuccess(details, request, thunk) {
  return {
    type: AUTH_SIGNIN_SUCCESS,
    payload: details,
    meta: {
      request: request,
      thunk: thunk
    }
  };
};

var authSigninFailure = function authSigninFailure(error, request, thunk) {
  return {
    type: AUTH_SIGNIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk
    }
  };
};

var AUTH_USER_READ = 'AUTH_USER_READ';
var AUTH_USER_READ_REQUEST = 'AUTH_USER_READ_REQUEST';
var AUTH_USER_READ_SUCCESS = 'AUTH_USER_READ_SUCCESS';
var AUTH_USER_READ_FAILURE = 'AUTH_USER_READ_FAILURE';

var authUserReadRequest = function authUserReadRequest() {
  return {
    type: AUTH_USER_READ_REQUEST,
    payload: {},
    meta: {
      thunk: 'AuthUserRead'
    }
  };
};

var authUserReadSuccess = function authUserReadSuccess(user, request, thunk) {
  return {
    type: AUTH_USER_READ_SUCCESS,
    payload: user,
    meta: {
      request: request,
      thunk: thunk
    }
  };
};

var authUserReadFailure = function authUserReadFailure(error, request, thunk) {
  return {
    type: AUTH_USER_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk
    }
  };
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITIES_RECEIVE", function() { return ENTITIES_RECEIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesReceive", function() { return entitiesReceive; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var ENTITIES_RECEIVE = 'ENTITIES_RECEIVE';

var entitiesReceive = function entitiesReceive(entities) {
  return {
    type: ENTITIES_RECEIVE,
    payload: entities
  };
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_SEND", function() { return NOTIFICATION_SEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_DISMISS", function() { return NOTIFICATION_DISMISS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_CLEAR", function() { return NOTIFICATION_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationSend", function() { return notificationSend; });
/* harmony export (immutable) */ __webpack_exports__["notificationDismiss"] = notificationDismiss;
/* harmony export (immutable) */ __webpack_exports__["notificationClear"] = notificationClear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);


var NOTIFICATION_SEND = 'NOTIFICATION_SEND';
var NOTIFICATION_DISMISS = 'NOTIFICATION_DISMISS';
var NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR';

/**
 * Publish a notification,
 * - if `dismissAfter` was set, the notification will be auto dismissed after the given period.
 * - if id wasn't specified, a time based id will be generated.``
 */

var notificationSend = function notificationSend(notification) {
  var payload = __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, notification);
  if (!payload.id) {
    payload.id = new Date().getTime();
  }

  return {
    type: NOTIFICATION_SEND,
    payload: payload
  };
};

// export function notificationSend(notification) {
//   const payload = assign({}, notification)
//   if (!payload.id) {
//     payload.id = new Date().getTime()
//   }
//   return dispatch => {
//     dispatch({ type: NOTIFICATION_SEND, payload })

//     if (payload.dismissAfter) {
//       setTimeout(() => {
//         dispatch({
//           type: NOTIFICATION_DISMISS,
//           payload: payload.id,
//         })
//       }, payload.dismissAfter)
//     }
//   }
// }

/**
 * Dismiss a notification by the given id.
 */
function notificationDismiss(id) {
  return { type: NOTIFICATION_DISMISS, payload: id };
}

/**
 * Clear all notifications
 */
function notificationClear() {
  return { type: NOTIFICATION_CLEAR };
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_CREATE_REQUEST", function() { return RESOURCE_CREATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_CREATE_SUCCESS", function() { return RESOURCE_CREATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_CREATE_FAILURE", function() { return RESOURCE_CREATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceCreateRequest", function() { return resourceCreateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceCreateSuccess", function() { return resourceCreateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceCreateFailure", function() { return resourceCreateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_LIST_READ_REQUEST", function() { return RESOURCE_LIST_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_LIST_READ_SUCCESS", function() { return RESOURCE_LIST_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_LIST_READ_FAILURE", function() { return RESOURCE_LIST_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceListReadRequest", function() { return resourceListReadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceListReadSuccess", function() { return resourceListReadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceListReadFailure", function() { return resourceListReadFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DETAIL_READ_REQUEST", function() { return RESOURCE_DETAIL_READ_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DETAIL_READ_SUCCESS", function() { return RESOURCE_DETAIL_READ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DETAIL_READ_FAILURE", function() { return RESOURCE_DETAIL_READ_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDetailReadRequest", function() { return resourceDetailReadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDetailReadSuccess", function() { return resourceDetailReadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDetailReadFailure", function() { return resourceDetailReadFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_UPDATE_REQUEST", function() { return RESOURCE_UPDATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_UPDATE_SUCCESS", function() { return RESOURCE_UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_UPDATE_FAILURE", function() { return RESOURCE_UPDATE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceUpdateRequest", function() { return resourceUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceUpdateSuccess", function() { return resourceUpdateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceUpdateFailure", function() { return resourceUpdateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DELETE_REQUEST", function() { return RESOURCE_DELETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DELETE_SUCCESS", function() { return RESOURCE_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_DELETE_FAILURE", function() { return RESOURCE_DELETE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDeleteRequest", function() { return resourceDeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDeleteSuccess", function() { return resourceDeleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceDeleteFailure", function() { return resourceDeleteFailure; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST';
var RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS';
var RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE';

var resourceCreateRequest = function resourceCreateRequest(resource, data) {
  return {
    type: RESOURCE_CREATE_REQUEST,
    payload: { data: data },
    meta: {
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: resource + 'Create'
    }
  };
};

var resourceCreateSuccess = function resourceCreateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_CREATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
      entities: resource
    }
  };
};

var resourceCreateFailure = function resourceCreateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_CREATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      resource: resource,
      // https://github.com/diegohaz/arc/wiki/Actions#async-actions
      thunk: thunk
    }
  };
};

var RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST';
var RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS';
var RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE';

var resourceListReadRequest = function resourceListReadRequest(resource, params) {
  return {
    type: RESOURCE_LIST_READ_REQUEST,
    payload: { params: params },
    meta: {
      resource: resource,
      thunk: resource + 'ListRead'
    }
  };
};

var resourceListReadSuccess = function resourceListReadSuccess(resource, _ref, request, thunk) {
  var list = _ref.list,
      count = _ref.count;
  return {
    type: RESOURCE_LIST_READ_SUCCESS,
    payload: list,
    meta: {
      count: count,
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceListReadFailure = function resourceListReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_LIST_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST';
var RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS';
var RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE';

var resourceDetailReadRequest = function resourceDetailReadRequest(resource, needle) {
  return {
    type: RESOURCE_DETAIL_READ_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'DetailRead'
    }
  };
};

var resourceDetailReadSuccess = function resourceDetailReadSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceDetailReadFailure = function resourceDetailReadFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DETAIL_READ_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST';
var RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS';
var RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE';

var resourceUpdateRequest = function resourceUpdateRequest(resource, needle, data) {
  return {
    type: RESOURCE_UPDATE_REQUEST,
    payload: { needle: needle, data: data },
    meta: {
      resource: resource,
      thunk: resource + 'Update'
    }
  };
};

var resourceUpdateSuccess = function resourceUpdateSuccess(resource, detail, request, thunk) {
  return {
    type: RESOURCE_UPDATE_SUCCESS,
    payload: detail,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource,
      entities: resource
    }
  };
};

var resourceUpdateFailure = function resourceUpdateFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_UPDATE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST';
var RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS';
var RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE';

var resourceDeleteRequest = function resourceDeleteRequest(resource, needle) {
  return {
    type: RESOURCE_DELETE_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'Delete'
    }
  };
};

var resourceDeleteSuccess = function resourceDeleteSuccess(resource, request, thunk) {
  return {
    type: RESOURCE_DELETE_SUCCESS,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var resourceDeleteFailure = function resourceDeleteFailure(resource, error, request, thunk) {
  return {
    type: RESOURCE_DELETE_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN", function() { return SOCIAL_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_PREPARE", function() { return SOCIAL_LOGIN_PREPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_REQUEST", function() { return SOCIAL_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_SUCCESS", function() { return SOCIAL_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_FAILURE", function() { return SOCIAL_LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGOUT", function() { return SOCIAL_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginPrepare", function() { return socialLoginPrepare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginRequest", function() { return socialLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginSuccess", function() { return socialLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginFailure", function() { return socialLoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLogout", function() { return socialLogout; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var SOCIAL_LOGIN = 'SOCIAL_LOGIN';
var SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE';
var SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
var SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
var SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
var SOCIAL_LOGOUT = 'SOCIAL_LOGOUT';

var socialLoginPrepare = function socialLoginPrepare(service) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref.clientId,
      options = _objectWithoutProperties(_ref, ['clientId']);

  return {
    type: SOCIAL_LOGIN_PREPARE,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options)
  };
};


var socialLoginRequest = function socialLoginRequest(service) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref2.clientId,
      options = _objectWithoutProperties(_ref2, ['clientId']);

  return {
    type: SOCIAL_LOGIN_REQUEST,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options),
    meta: {
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
      gtm: service
    }
  };
};


var socialLoginSuccess = function socialLoginSuccess(user, request) {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: user,
    meta: {
      request: request
    }
  };
};

var socialLoginFailure = function socialLoginFailure(error, request) {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

var socialLogout = function socialLogout() {
  return { type: SOCIAL_LOGOUT };
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return theme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_theme__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_palette__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_palette___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_palette__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_pink__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_pink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_colors_pink__);






var createStyleManager = function createStyleManager() {
  return __WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider___default.a.createDefaultContext({
    theme: __WEBPACK_IMPORTED_MODULE_1_material_ui_styles_theme___default()({
      palette: __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_palette___default()({
        primary: __WEBPACK_IMPORTED_MODULE_3_material_ui_colors_blue___default.a,
        accent: __WEBPACK_IMPORTED_MODULE_4_material_ui_colors_pink___default.a,
        type: 'light'
      })
    })
  });
};

var _createStyleManager = createStyleManager(),
    styleManager = _createStyleManager.styleManager,
    theme = _createStyleManager.theme;

styleManager.setSheetOrder(__WEBPACK_IMPORTED_MODULE_0_material_ui_styles_MuiThemeProvider__["MUI_SHEET_ORDER"].concat(['AppContent', 'AppFrame', 'AppDrawer']));



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_PrivateRoutes__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);






var routes = [{
  path: '/signin',
  component: __WEBPACK_IMPORTED_MODULE_3_containers__["SigninPage"],
  exact: true
}, {
  component: __WEBPACK_IMPORTED_MODULE_1_components_PrivateRoutes__["a" /* default */],
  routes: [{
    component: __WEBPACK_IMPORTED_MODULE_3_containers__["AppFrame"],
    routes: [{
      path: '/',
      component: __WEBPACK_IMPORTED_MODULE_2_components__["HomePage"],
      exact: true,
      title: 'Trendberry'
    }, {
      path: '/categories',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["CategoryListPage"],
      exact: true,
      title: 'Categories'
    }, {
      path: '/categories/create',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["CategoryCreatePage"],
      exact: true,
      title: 'Create category'
    }, {
      path: '/categories/:id',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["CategoryUpdatePage"],
      exact: true,
      title: 'Edit category'
    }, {
      path: '/shops',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["ShopListPage"],
      exact: true,
      title: 'Shops'
    }, {
      path: '/shops/create',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["ShopCreatePage"],
      exact: true,
      title: 'Create shop'
    }, {
      path: '/shops/:id',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["ShopUpdatePage"],
      exact: true,
      title: 'Edit shop'
    }, {
      path: '/vendors',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["VendorListPage"],
      exact: true,
      title: 'Vendors'
    }, {
      path: '/vendors/create',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["VendorCreatePage"],
      exact: true,
      title: 'Create vendor'
    }, {
      path: '/vendors/:id',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["VendorUpdatePage"],
      exact: true,
      title: 'Update vendor'
    }, {
      path: '/products',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["ProductListPage"],
      exact: true,
      title: 'Products'
    }, {
      path: '/products/create',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["ProductCreatePage"],
      exact: true,
      title: 'Create product'
    }, {
      path: '/products/:id',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["ProductUpdatePage"],
      exact: true,
      title: 'Update product'
    }, {
      path: '/users',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["UserListPage"],
      exact: true,
      title: 'Users'
    }, {
      path: '/users/create',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["UserCreatePage"],
      exact: true,
      title: 'Create user'
    }, {
      path: '/users/:id',
      component: __WEBPACK_IMPORTED_MODULE_3_containers__["UserUpdatePage"],
      exact: true,
      title: 'Update user'
    }, {
      path: '/settings',
      component: function component() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'Settings'
        );
      },
      exact: true,
      title: 'Settings'
    }, {
      component: function component() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          '404 not found'
        );
      }
    }]
  }, {
    path: '/test',
    component: function component() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Link"],
        { to: '/signin' },
        'sgsdfg'
      );
    },
    exact: true
  }, {
    component: function component() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        '404 not found'
      );
    }
  }]
}, {
  component: function component() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      '404 not found'
    );
  }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
var initialState = {
  user: null,
  token: null
};

var getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};
var getToken = function getToken() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.token || initialState.token;
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DEVICE", function() { return SET_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seDevice", function() { return seDevice; });
var SET_DEVICE = 'SET_DEVICE';

var seDevice = function seDevice(device) {
  return {
    type: SET_DEVICE,
    device: device
  };
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevice", function() { return getDevice; });
var initialState = {};

var getDevice = function getDevice() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.device;
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shops", function() { return shops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vendors", function() { return vendors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);


var categories = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('categories', {}, {
  idAttribute: '_id'
});

var shops = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('shops', {}, {
  idAttribute: '_id'
});

var vendors = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('vendors', {}, {
  idAttribute: '_id'
});

var products = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('products', {}, {
  idAttribute: '_id'
});

var users = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('users', {}, {
  idAttribute: '_id'
});

var pages = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["schema"].Entity('pages', {}, {
  idAttribute: '_id'
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDenormalizedDetail", function() { return getDenormalizedDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDenormalizedList", function() { return getDenormalizedList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemas__ = __webpack_require__(48);
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities



var initialState = {};

var getEntity = function getEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  return state[entity] || {};
};

var getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return getEntity(state, entity)[id];
};

var getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (ids || Object.keys(getEntity(state, entity))).map(function (id) {
    return getDetail(state, entity, id);
  });
};

var getDenormalizedDetail = function getDenormalizedDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["denormalize"])(getDetail(state, entity, id), __WEBPACK_IMPORTED_MODULE_1__schemas__[entity], state);
};

var getDenormalizedList = function getDenormalizedList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["denormalize"])(getList(state, entity, ids), [__WEBPACK_IMPORTED_MODULE_1__schemas__[entity]], state);
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_SET_CSRF_TOKEN", function() { return FORM_SET_CSRF_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCsrfToken", function() { return setCsrfToken; });
var FORM_SET_CSRF_TOKEN = 'FORM_SET_CSRF_TOKEN';

var setCsrfToken = function setCsrfToken(token) {
  return {
    type: FORM_SET_CSRF_TOKEN,
    token: token
  };
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForm", function() { return getForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValues", function() { return getValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCsrfToken", function() { return getCsrfToken; });
var initialState = {};

var getForm = function getForm() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var form = arguments[1];
  return state[form] || {};
};
var getValues = function getValues() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var form = arguments[1];
  return getForm(state, form).values || {};
};
var getCsrfToken = function getCsrfToken() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.csrfToken;
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM", function() { return GTM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM_START", function() { return GTM_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTM_FAILURE", function() { return GTM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gtmStart", function() { return gtmStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gtmFailure", function() { return gtmFailure; });
var GTM = 'GTM';
var GTM_START = 'GTM_START';
var GTM_FAILURE = 'GTM_FAILURE';

var gtmStart = function gtmStart(gtmId) {
  return {
    type: GTM_START,
    payload: {
      gtmId: gtmId
    }
  };
};

var gtmFailure = function gtmFailure(error, request) {
  return {
    type: GTM_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_SHOW", function() { return MODAL_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_HIDE", function() { return MODAL_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalShow", function() { return modalShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalHide", function() { return modalHide; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var MODAL_SHOW = 'MODAL_SHOW';
var MODAL_HIDE = 'MODAL_HIDE';

var modalShow = function modalShow(name) {
  return {
    type: MODAL_SHOW,
    payload: {
      name: name
    },
    meta: {
      gtm: name
    }
  };
};

var modalHide = function modalHide(name) {
  return {
    type: MODAL_HIDE,
    payload: {
      name: name
    }
  };
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpen", function() { return isOpen; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = {};

var isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialResourceState", function() { return initialResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceState", function() { return getResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCount", function() { return getCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var initialState = {};

var initialResourceState = {
  list: [],
  count: 0,
  detail: null
};

var getResourceState = function getResourceState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return state[resource] || initialResourceState;
};

var getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).list;
};

var getCount = function getCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).count;
};

var getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).detail;
};

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var initialState = {
  user: null
};

var getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadingState", function() { return getLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorState", function() { return getErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasError", function() { return hasError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pick__);



var initialState = {
  loading: {},
  error: {}
};

var getIn = function getIn(state, prefix) {
  if (typeof prefix === 'undefined') {
    return !!__WEBPACK_IMPORTED_MODULE_0_lodash_find___default()(state, function (value) {
      return !!value;
    });
  } else if (Array.isArray(prefix)) {
    return !!__WEBPACK_IMPORTED_MODULE_0_lodash_find___default()(__WEBPACK_IMPORTED_MODULE_1_lodash_pick___default()(state, prefix), function (value) {
      return !!value;
    });
  } else if (Object.prototype.hasOwnProperty.call(state, prefix)) {
    return !!state[prefix];
  }
  return false;
};

var getLoadingState = function getLoadingState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.loading || {};
};
var getErrorState = function getErrorState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.error || {};
};
var isLoading = function isLoading(state, prefix) {
  return getIn(getLoadingState(state), prefix);
};
var hasError = function hasError(state, prefix) {
  return getIn(getErrorState(state), prefix);
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ArrowDropDown");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu/MenuItem");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("simple-load-script");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_https__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_https__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_device__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_device___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_device__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_force_ssl__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_force_ssl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_force_ssl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie_parser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_compression__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_serve_favicon__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_csurf__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_csurf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_csurf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_append_query__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_append_query___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_append_query__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_router_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_router_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_history_createMemoryHistory__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_serialize_javascript__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_store_configure__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_services_api__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_components_App__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_components_Html__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_components_Error__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__mui__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__routes__ = __webpack_require__(44);
/* eslint-disable no-console */
































var renderApp = function renderApp(_ref) {
  var context = _ref.context,
      location = _ref.location,
      store = _ref.store;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_14_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_15_react_router__["StaticRouter"],
      { basename: __WEBPACK_IMPORTED_MODULE_20_config__["basename"], context: context, location: location },
      __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24_components_App__["a" /* default */], null)
    )
  ));
};

var renderHtml = function renderHtml(_ref2) {
  var initialState = _ref2.initialState,
      content = _ref2.content;

  var styles = __WEBPACK_IMPORTED_MODULE_27__mui__["a" /* styleManager */].sheetsToString();
  var assets = global.assets;
  var state = 'window.__INITIAL_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_19_serialize_javascript___default()(initialState) + ';';
  var html = __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25_components_Html__["a" /* default */], { styles: styles, assets: assets, state: state, content: content });
  return '<!doctype html>\n' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__["renderToStaticMarkup"])(html);
};

var fetchBranchData = function fetchBranchData(routes, store, req, res) {
  return new Promise(function (resolve, reject) {
    var branch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16_react_router_config__["matchRoutes"])(routes, req.path);
    var method = req.method.toLowerCase();

    var authpromise = store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21_store_actions__["authUserReadRequest"])());

    var promises = branch.map(function (_ref3) {
      var route = _ref3.route,
          match = _ref3.match;

      var component = route.component;

      if (component) {
        while (component && !component[method]) {
          // eslint-disable-next-line no-param-reassign
          component = component.WrappedComponent;
        }

        return component && component[method] && component[method]({ req: req, res: res, match: match, store: store, query: req.query });
      }

      return Promise.resolve(null);
    });

    Promise.all([authpromise].concat(promises)).then(resolve).catch(reject);
    // Promise.all(promises).then(resolve).catch(reject)
  });
};

var app = __WEBPACK_IMPORTED_MODULE_3_express___default()();
app.disable('x-powered-by');

if (__WEBPACK_IMPORTED_MODULE_20_config__["env"] === 'production') {
  app.set('forceSSLOptions', {
    enable301Redirects: true,
    trustXFPHeader: true
  });
  app.use(__WEBPACK_IMPORTED_MODULE_5_express_force_ssl___default.a);
}

app.use(__WEBPACK_IMPORTED_MODULE_8_compression___default()());
app.use(__WEBPACK_IMPORTED_MODULE_6_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_20_config__["basename"], __WEBPACK_IMPORTED_MODULE_3_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.resolve(process.cwd(), 'dist/public')));
app.use(__WEBPACK_IMPORTED_MODULE_20_config__["basename"], __WEBPACK_IMPORTED_MODULE_9_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_1_path___default.a.resolve(process.cwd(), 'dist/public', 'favicon.ico')));
app.use(__WEBPACK_IMPORTED_MODULE_4_express_device___default.a.capture());
app.use(__WEBPACK_IMPORTED_MODULE_10_csurf___default()({ cookie: true }));

app.use(function (req, res, next) {
  var apiInstance = __WEBPACK_IMPORTED_MODULE_23_services_api__["a" /* default */].create();
  if (req.cookies.token) {
    apiInstance.setToken(req.cookies.token);
  }

  var location = req.url;
  var history = __WEBPACK_IMPORTED_MODULE_18_history_createMemoryHistory___default()();
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_store_configure__["a" /* default */])({}, { api: apiInstance }, history);
  store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21_store_actions__["seDevice"])({
    name: req.device.name,
    type: req.device.type
  }));
  store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21_store_actions__["setCsrfToken"])(req.csrfToken()));
  store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17_react_router_redux__["push"])(location));

  var context = {};

  return fetchBranchData(__WEBPACK_IMPORTED_MODULE_28__routes__["a" /* default */], store, req, res).then(function () {
    var content = renderApp({
      context: context,
      location: location,
      store: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_store_configure__["a" /* default */])(store.getState(), { api: apiInstance }, history)
    });
    var initialState = store.getState();

    if (initialState.auth.token !== null) {
      res.cookie('token', initialState.auth.token);
    }

    if (context.status) {
      res.status(context.status);
    }
    if (context.url) {
      if (context.url === '/signin') {
        res.redirect(__WEBPACK_IMPORTED_MODULE_11_append_query___default()(context.url, { refferer: req.url }));
      } else {
        res.redirect(context.url);
      }
    } else {
      var _initialState = store.getState();
      res.send(renderHtml({ initialState: _initialState, content: content }));
    }
  }).catch(next);
});

app.use(function (err, req, res, next) {
  var content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26_components_Error__["a" /* default */], null));
  res.status(500).send(renderHtml({ content: content }));
  console.error(err);
  next(err);
});

// keep heroku alive
if (__WEBPACK_IMPORTED_MODULE_20_config__["env"] === 'production') {
  setInterval(function () {
    __WEBPACK_IMPORTED_MODULE_2_https___default.a.get('https://trendberry-admin.herokuapp.com/');
    __WEBPACK_IMPORTED_MODULE_2_https___default.a.get('https://trendberry-api.herokuapp.com/');
  }, 600000); // every 10 minutes (600000)
}

app.listen(__WEBPACK_IMPORTED_MODULE_20_config__["port"], function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + __WEBPACK_IMPORTED_MODULE_20_config__["host"] + ':' + __WEBPACK_IMPORTED_MODULE_20_config__["port"] + __WEBPACK_IMPORTED_MODULE_20_config__["basename"] + '/'));
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PendingNavDataLoader__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mui__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(44);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











// import { HomePage, SamplePage, NotFoundPage } from 'components'
// import { GoogleTagManager } from 'containers'

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a,
          { titleTemplate: 'Trendeberry - %s' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            null,
            'Home'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'Shopping Catalog.' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:site_name', content: 'ARc' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:width', content: '1200' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:height', content: '630' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', href: '/icon.png' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css', rel: 'stylesheet' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,600,600i,700,700i&subset=cyrillic', rel: 'stylesheet' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__PendingNavDataLoader__["a" /* default */],
          { routes: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* default */] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider___default.a,
            { styleManager: __WEBPACK_IMPORTED_MODULE_6__mui__["a" /* styleManager */], theme: __WEBPACK_IMPORTED_MODULE_6__mui__["b" /* theme */] },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
              null,
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_config__["renderRoutes"])(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* default */])
            )
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ErrorPage = function ErrorPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable react/no-danger */




var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = __WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { id: 'jss-server-side', dangerouslySetInnerHTML: { __html: styles } })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'body',
      bodyAttrs,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: path, src: path });
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose_shallowEqual__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose_shallowEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_recompose_shallowEqual__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









__WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.configure({
  showSpinner: false,
  speed: 500,
  trickleSpeed: 200
});

var fetchData = function fetchData(routes, location, store) {
  var branch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["matchRoutes"])(routes, location.pathname);
  var method = 'get';
  var query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_qs__["parse"])(location.search.substr(1));

  var promises = branch.map(function (_ref) {
    var route = _ref.route,
        match = _ref.match;

    var component = route.component;

    if (component) {
      while (component && !component[method]) {
        // eslint-disable-next-line no-param-reassign
        component = component.WrappedComponent;
      }

      return component && component[method] && component[method]({ store: store, match: match, query: query });
    }

    return Promise.resolve(null);
  });

  return Promise.all(promises);
};

// THIS IS JUST SOME THEORETICAL PSEUDO CODE :)

var PendingNavDataLoader = function (_Component) {
  _inherits(PendingNavDataLoader, _Component);

  function PendingNavDataLoader() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, PendingNavDataLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = PendingNavDataLoader.__proto__ || Object.getPrototypeOf(PendingNavDataLoader)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      previousLocation: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PendingNavDataLoader, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var _this2 = this;

      var navigated = !__WEBPACK_IMPORTED_MODULE_6_recompose_shallowEqual___default()(nextProps.location, this.props.location);
      var routes = this.props.routes;


      if (navigated) {
        // save the location so we can render the old screen
        this.setState({
          previousLocation: this.props.location
        });

        __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.start();

        fetchData(routes, nextProps.location, nextContext.store).then(function () {
          __WEBPACK_IMPORTED_MODULE_5_nprogress___default.a.done();

          _this2.setState({
            previousLocation: null
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          location = _props.location;
      var previousLocation = this.state.previousLocation;

      // use a controlled <Route> to trick all descendants into
      // rendering the old location

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Route"], {
        location: previousLocation || location,
        render: function render() {
          return children;
        }
      });
    }
  }]);

  return PendingNavDataLoader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

// wrap in withRouter


PendingNavDataLoader.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(PendingNavDataLoader));

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_store_selectors__);








var PrivateRoutes = function PrivateRoutes(_ref) {
  var location = _ref.location,
      route = _ref.route,
      user = _ref.user;
  return user !== null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["renderRoutes"])(route.routes) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Redirect"], {
    to: {
      pathname: '/signin',
      state: { from: location }
    }
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: __WEBPACK_IMPORTED_MODULE_6_store_selectors__["fromAuth"].getUser(state, __WEBPACK_IMPORTED_MODULE_5_store_actions__["AUTH_USER_READ_REQUEST"])
  };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(PrivateRoutes));

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var actions = _ref.actions,
      title = _ref.title,
      content = _ref.content,
      other = _objectWithoutProperties(_ref, ['actions', 'title', 'content']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog___default.a,
    other,
    title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogTitle"],
      null,
      title
    ),
    content && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogContent"],
      null,
      content
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_Dialog__["DialogActions"],
      null,
      actions
    )
  );
};

ConfirmationDialog.defaultProps = {
  actions: null,
  title: null,
  content: null
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmationDialog);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








// This checks to see if object is immutable and properly access it
var getter = function getter(obj, propName) {
  return obj.get ? obj.get(propName) : obj[propName];
};

var Notifications = function Notifications(props) {
  var notifications = props.notifications;


  var renderedNotifications = notifications.map(function (notification) {
    var options = getter(notification, 'options');
    var id = getter(notification, 'id');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_containers__["Snackbar"], _extends({
      key: id,
      id: id,
      message: getter(notification, 'message')
    }, options));
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    renderedNotifications
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    notifications: state.get ? state.get('notifications') : state.notifications
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dismiss: function dismiss(id) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["notificationDismiss"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Notifications));

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Input_Input__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Input_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Input_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Search__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Close__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Close__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["createStyleSheet"])('SearchWidget', function (theme) {
  return {
    root: {
      display: 'inline-flex',

      // flexDirection: 'row',
      // flexWrap: 'nowrap',
      // justifyContent: 'flex-start',
      // alignContent: 'stretch',
      alignItems: 'center'
    },
    field: {
      height: 48,
      overflow: 'hidden',
      padding: '8px 0 7px',
      transition: 'width ' + theme.transitions.duration.short + 'ms ' + theme.transitions.easing.easeInOut,
      width: 0,
      '&:hover': {
        paddingBottom: 6
      }
    },
    open: {
      width: 240
    },
    input: {
      display: 'block',
      // margin: '0 !important',
      width: 240
      // '&:hover': {
      //   margin: '0 !important',
      // },
    },
    button: {
      verticalAlign: 'middle'
    },
    close: {
      display: 'none',
      marginLeft: -32,
      animation: 'search-widget-appear ' + theme.transitions.duration.short + 'ms ' + theme.transitions.easing.easeInOut
    },
    visible: {
      display: 'inline-flex'
    },
    '@keyframes search-widget-appear': {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    }
  };
});

var searchTimeout = void 0;

var SearchWidget = function (_Component) {
  _inherits(SearchWidget, _Component);

  function SearchWidget(props) {
    _classCallCheck(this, SearchWidget);

    var _this = _possibleConstructorReturn(this, (SearchWidget.__proto__ || Object.getPrototypeOf(SearchWidget)).call(this, props));

    _this.handleSearch = function (value, clear) {
      var _this$props = _this.props,
          history = _this$props.history,
          location = _this$props.location;

      var query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["parse"])(location.search.substr(1));
      delete query._page;
      if (clear) delete query.q;else query.q = value;

      history.push(_extends({}, location, {
        search: '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["stringify"])(_extends({}, query))
      }));
    };

    _this.handleRequestOpen = function () {
      _this.state.open === false && _this.searchInput.input.focus();
      _this.setState({ open: true });
    };

    _this.handleRequestClose = function () {
      clearTimeout(searchTimeout);
      _this.setState({ open: false, q: '' }, function () {
        _this.handleSearch('', true);
      });
    };

    _this.handleInputChange = function (event) {
      var value = event.target.value;

      _this.setState({ q: value }, function () {
        clearTimeout(searchTimeout);
        if (value.length && value.length < 3) return;
        searchTimeout = setTimeout(function () {
          return _this.handleSearch(value);
        }, 500);
      });
    };

    _this.handleInputBlur = function (event) {
      var value = event.target.value;

      if (value === '') {
        _this.setState({ open: false });
      }
    };

    var _parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["parse"])(props.location.search.substr(1)),
        q = _parse.q;

    var searchString = q || '';

    _this.handleRequestOpen = _this.handleRequestOpen.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);

    _this.state = {
      open: searchString.length > 0,
      q: searchString
    };
    return _this;
  }

  _createClass(SearchWidget, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _state = this.state,
          open = _state.open,
          q = _state.q;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classes.root },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default.a,
          { className: classes.button, onClick: this.handleRequestOpen },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons_Search___default.a, null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.field, _defineProperty({}, classes.open, open)) },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Input_Input___default.a, {
            className: classes.input,
            value: q,
            placeholder: 'Search',
            innerRef: function innerRef(input) {
              _this2.searchInput = input;
            },
            onBlur: function onBlur(event) {
              return _this2.handleInputBlur(event);
            },
            onChange: function onChange(event) {
              return _this2.handleInputChange(event);
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default.a,
          { className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.button, classes.close, _defineProperty({}, classes.visible, open)), onClick: this.handleRequestClose },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_icons_Close___default.a, null)
        )
      );
    }
  }]);

  return SearchWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styleSheet)(SearchWidget)));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_transitions__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_transitions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_transitions__);





var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('Name', function (theme) {
  return {
    ancestor: {
      color: theme.palette.text.secondary,
      display: 'inline-block',
      verticalAlign: 'top',
      '&:after': {
        background: theme.palette.text.divider,
        borderRadius: '50%',
        display: 'inline-block',
        content: '""',
        height: 8,
        marginRight: 8,
        verticalAlign: 'baseline',
        width: 8
      },
      '& > span': {
        cursor: 'default',
        display: 'inline-block',
        maxWidth: 0,
        opacity: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        transition: 'all ' + __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_transitions__["duration"].standard + 'ms ' + __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_transitions__["easing"].easeOut,
        verticalAlign: 'top'
      }
    },
    name: {
      display: 'inline-block',
      margin: -12,
      padding: 12,
      verticalAlign: 'top',
      '&:hover $ancestor span': {
        opacity: 1,
        marginRight: 8,
        maxWidth: 150
      }
    },
    actions: {
      opacity: 0
    },
    'tr:hover $actions': {
      opacity: 1
    }
  };
});

var TableRowCategoryName = function TableRowCategoryName(_ref) {
  var item = _ref.item,
      classes = _ref.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { className: classes.name },
    item.ancestors.map(function (ancestor) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { key: ancestor._id, className: classes.ancestor },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          ancestor.name
        )
      );
    }),
    item.name
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(TableRowCategoryName));

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draftjs_utils__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draftjs_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_draftjs_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AlignStyleControls = function (_Component) {
  _inherits(AlignStyleControls, _Component);

  function AlignStyleControls() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AlignStyleControls);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlignStyleControls.__proto__ || Object.getPrototypeOf(AlignStyleControls)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTextAlignment: undefined
    }, _this.addBlockAlignmentData = function (value) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var currentTextAlignment = _this.state.currentTextAlignment;

      if (currentTextAlignment !== value) {
        onChange(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_draftjs_utils__["setBlockData"])(editorState, { 'text-align': value }));
      } else {
        onChange(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_draftjs_utils__["setBlockData"])(editorState, { 'text-align': undefined }));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AlignStyleControls, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState !== this.props.editorState) {
        this.setState({
          currentTextAlignment: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_draftjs_utils__["getSelectedBlocksMetadata"])(properties.editorState).get('text-align')
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var blockTypes = this.props.blockTypes;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'RichEditor-controls' },
        blockTypes.map(function (type) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components__["ToggleButton"], {
            key: type.label,
            active: type.style === _this2.state.currentTextAlignment,
            label: type.label,
            onToggle: _this2.addBlockAlignmentData,
            style: type.style,
            icon: type.icon
          });
        })
      );
    }
  }]);

  return AlignStyleControls;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AlignStyleControls);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);




var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState,
      blockTypes = props.blockTypes;

  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'RichEditor-controls' },
    blockTypes.map(function (type) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["ToggleButton"], {
        key: type.label,
        active: type.style === blockType,
        label: type.label,
        onToggle: props.onToggle,
        style: type.style,
        icon: type.icon
      });
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (BlockStyleControls);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_ArrowDropDown__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons_ArrowDropDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_ArrowDropDown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_ArrowDropUp__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_ArrowDropUp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_icons_ArrowDropUp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu_Menu__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Menu_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('BlockStyleMenuControls', function () {
  return {
    button: {
      fontSize: '16px',
      fontWeight: 400,
      height: 56,
      paddingLeft: 24,
      paddingRight: 16,
      textTransform: 'none'
    }
  };
});

var BlockStyleMenuControls = function (_Component) {
  _inherits(BlockStyleMenuControls, _Component);

  function BlockStyleMenuControls() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BlockStyleMenuControls);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockStyleMenuControls.__proto__ || Object.getPrototypeOf(BlockStyleMenuControls)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false
    }, _this.handleClick = function (event) {
      return _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }, _this.handleRequestClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BlockStyleMenuControls, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          editorState = _props.editorState,
          blockTypes = _props.blockTypes;

      var selection = editorState.getSelection();
      var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

      var currentType = blockTypes.find(function (element) {
        return element.style === blockType;
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'RichEditor-controls' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Button___default.a,
          {
            className: classes.button,
            'aria-haspopup': 'true',
            onClick: this.handleClick
          },
          currentType ? currentType.label : 'Typography',
          !this.state.open ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons_ArrowDropDown___default.a, null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_icons_ArrowDropUp___default.a, null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_Menu_Menu___default.a,
          {
            anchorEl: this.state.anchorEl,
            open: this.state.open,
            onRequestClose: this.handleRequestClose
          },
          blockTypes.map(function (type) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components__["StyleMenuItem"], {
              key: type.style,
              active: type.style === blockType,
              label: type.label,
              onToggle: _this2.props.onToggle,
              onMouseUp: _this2.handleRequestClose,
              style: type.style
            });
          })
        )
      );
    }
  }]);

  return BlockStyleMenuControls;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(BlockStyleMenuControls));

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js_export_html__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js_export_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_draft_js_export_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_FormatBold__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_FormatBold___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_FormatBold__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_FormatItalic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_FormatItalic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_FormatItalic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_FormatUnderlined__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_FormatUnderlined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_icons_FormatUnderlined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_FormatAlignLeft__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_FormatAlignLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_icons_FormatAlignLeft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_FormatAlignRight__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_FormatAlignRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_FormatAlignRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_FormatAlignCenter__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_FormatAlignCenter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_icons_FormatAlignCenter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_icons_FormatAlignJustify__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_icons_FormatAlignJustify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_icons_FormatAlignJustify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_icons_FormatListBulleted__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_icons_FormatListBulleted___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_icons_FormatListBulleted__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_icons_FormatListNumbered__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_icons_FormatListNumbered___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_icons_FormatListNumbered__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import { stateFromHTML } from 'draft-js-import-html'
// import { stateFromElement } from 'draft-js-import-element'

















var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  },
  ALIGNLEFT: {
    display: 'block',
    textAlign: 'left'
  },
  ALIGNRIGHT: {
    display: 'block',
    textAlign: 'right'
  },
  ALIGNCENTER: {
    display: 'block',
    textAlign: 'center'
  },
  ALIGNJUSTIFY: {
    display: 'block',
    textAlign: 'justify'
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

var ALIGN_STYLES = [{ label: 'Align Left', style: 'left', icon: __WEBPACK_IMPORTED_MODULE_9_material_ui_icons_FormatAlignLeft___default.a }, { label: 'Align Center', style: 'center', icon: __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_FormatAlignCenter___default.a }, { label: 'Align Right', style: 'right', icon: __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_FormatAlignRight___default.a }, { label: 'Justify', style: 'justify', icon: __WEBPACK_IMPORTED_MODULE_12_material_ui_icons_FormatAlignJustify___default.a }];

var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD', icon: __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_FormatBold___default.a }, { label: 'Italic', style: 'ITALIC', icon: __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_FormatItalic___default.a }, { label: 'Underline', style: 'UNDERLINE', icon: __WEBPACK_IMPORTED_MODULE_8_material_ui_icons_FormatUnderlined___default.a }];

var BLOCK_TYPES = [{ label: 'Paragraph', style: 'unstyled' }, { label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' },
// { label: 'Unstyled', style: 'unstyled' },
{ label: 'Blockquote', style: 'blockquote' }, { label: 'Code Block', style: 'code-block' }];

var LIST_BLOCK_TYPES = [{ label: 'UL', style: 'unordered-list-item', icon: __WEBPACK_IMPORTED_MODULE_13_material_ui_icons_FormatListBulleted___default.a }, { label: 'OL', style: 'ordered-list-item', icon: __WEBPACK_IMPORTED_MODULE_14_material_ui_icons_FormatListNumbered___default.a }];

var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["createStyleSheet"])('DraftRichEditor', function (theme) {
  return {
    root: {
      border: '1px solid ' + theme.palette.text.divider
    },
    toolabr: {
      backgroundColor: theme.palette.text.lightDivider,
      borderBottom: '1px solid ' + theme.palette.text.divider,
      height: 56
    },
    divider: {
      borderRight: '1px solid ' + theme.palette.text.divider,
      display: 'inline-flex',
      height: 32,
      marginLeft: 12,
      marginRight: 12
    },
    editor: {
      '& .public-DraftEditorPlaceholder-root': {
        margin: '0 0 -51px',
        padding: 16
      },
      '& .public-DraftEditorPlaceholder-hasFocus': {
        color: theme.palette.text.hint
      },
      '& .public-DraftEditor-content': {
        padding: 16,
        position: 'relative',
        zIndex: 2
      },
      '& textarea': {
        display: 'none'
      }
    },
    hidePlaceholder: {
      '& .public-DraftEditorPlaceholder-root': {
        display: 'none'
      }
    }
  };
});

var DraftRichEditor = function (_Component) {
  _inherits(DraftRichEditor, _Component);

  function DraftRichEditor(props) {
    _classCallCheck(this, DraftRichEditor);

    var _this = _possibleConstructorReturn(this, (DraftRichEditor.__proto__ || Object.getPrototypeOf(DraftRichEditor)).call(this, props));

    _this.state = { editorState: __WEBPACK_IMPORTED_MODULE_2_draft_js__["EditorState"].createEmpty() };

    _this.focus = function () {
      return _this.editor.focus();
    };
    _this.onChange = function (editorState) {
      var options = {
        blockStyleFn: function blockStyleFn(block) {
          if (block.getData().get('text-align')) {
            return {
              style: {
                textAlign: block.getData().get('text-align')
              }
            };
          }
          return {};
        }
      };

      var html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_draft_js_export_html__["stateToHTML"])(editorState.getCurrentContent(), options);
      _this.setState({
        editorState: editorState,
        html: html
      });
    };

    _this.onChange = function (editorState) {
      return _this.setState({ editorState: editorState });
    };

    _this.handleKeyCommand = function (command) {
      return _this.triggerHandleKeyCommand(command);
    };
    _this.onTab = function (e) {
      return _this.triggerOnTab(e);
    };
    _this.toggleBlockType = function (type) {
      return _this.triggetToggleBlockType(type);
    };
    _this.toggleInlineStyle = function (style) {
      return _this.triggetToggleInlineStyle(style);
    };
    return _this;
  }

  _createClass(DraftRichEditor, [{
    key: 'triggerOnTab',
    value: function triggerOnTab(e) {
      var maxDepth = 4;
      this.onChange(__WEBPACK_IMPORTED_MODULE_2_draft_js__["RichUtils"].onTab(e, this.state.editorState, maxDepth));
    }
  }, {
    key: 'triggerHandleKeyCommand',
    value: function triggerHandleKeyCommand(command) {
      var editorState = this.state.editorState;

      var newState = __WEBPACK_IMPORTED_MODULE_2_draft_js__["RichUtils"].handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: 'triggetToggleBlockType',
    value: function triggetToggleBlockType(blockType) {
      var editorState = this.state.editorState;

      this.onChange(__WEBPACK_IMPORTED_MODULE_2_draft_js__["RichUtils"].toggleBlockType(editorState, blockType));
    }
  }, {
    key: 'triggetToggleInlineStyle',
    value: function triggetToggleInlineStyle(inlineStyle) {
      var editorState = this.state.editorState;

      this.onChange(__WEBPACK_IMPORTED_MODULE_2_draft_js__["RichUtils"].toggleInlineStyle(editorState, inlineStyle));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _state = this.state,
          editorState = _state.editorState,
          html = _state.html;

      // If the user changes block type before entering any text, we can
      // either style the placeholder or hide it. Let's just hide it now.

      var className = classes.editor;
      var contentState = editorState.getCurrentContent();
      // var contentState = stateFromHTML('<div></div>')
      // var contentState = stateFromElement('<div></div>')
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' ' + classes.hidePlaceholder;
        }
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classes.root },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Toolbar___default.a,
          { className: classes.toolabr, disableGutters: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_components__["BlockStyleMenuControls"], {
            blockTypes: BLOCK_TYPES,
            editorState: editorState,
            onToggle: this.toggleBlockType
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.divider, style: { marginLeft: 0 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_components__["InlineStyleControls"], {
            blockTypes: INLINE_STYLES,
            editorState: editorState,
            onToggle: this.toggleInlineStyle
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.divider }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_components__["AlignStyleControls"], {
            blockTypes: ALIGN_STYLES,
            editorState: editorState,
            onChange: this.onChange
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.divider }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_components__["BlockStyleControls"], {
            blockTypes: LIST_BLOCK_TYPES,
            editorState: editorState,
            onToggle: this.toggleBlockType
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: className, onClick: function onClick() {
              return _this2.focus;
            }, role: 'button', tabIndex: '-1' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_draft_js__["Editor"], {
            blockStyleFn: getBlockStyle,
            customStyleMap: styleMap,
            editorState: editorState,
            handleKeyCommand: this.handleKeyCommand,
            onChange: this.onChange,
            onTab: this.onTab,
            placeholder: 'Description',
            ref: function ref(editor) {
              _this2.editor = editor;
            },
            spellCheck: true
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { value: html })
        )
      );
    }
  }]);

  return DraftRichEditor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styleSheet)(DraftRichEditor));

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);




var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  var blockTypes = props.blockTypes;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'RichEditor-controls' },
    blockTypes.map(function (type) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["ToggleButton"], {
        key: type.label,
        active: currentStyle.has(type.style),
        label: type.label,
        onToggle: props.onToggle,
        style: type.style,
        icon: type.icon
      });
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (InlineStyleControls);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Menu_MenuItem__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Menu_MenuItem__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var StyleMenuItem = function (_Component) {
  _inherits(StyleMenuItem, _Component);

  function StyleMenuItem() {
    _classCallCheck(this, StyleMenuItem);

    var _this = _possibleConstructorReturn(this, (StyleMenuItem.__proto__ || Object.getPrototypeOf(StyleMenuItem)).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
    return _this;
  }

  _createClass(StyleMenuItem, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_material_ui_Menu_MenuItem___default.a,
        { onMouseUp: this.props.onMouseUp, onMouseDown: this.onToggle, selected: this.props.active },
        this.props.label
      );
    }
  }]);

  return StyleMenuItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StyleMenuItem);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('ToggleButton', function (theme) {
  return {
    button: {
      color: theme.palette.text.icon
    },
    active: {
      color: theme.palette.text.secondary
    }
  };
});

var ToggleButton = function (_Component) {
  _inherits(ToggleButton, _Component);

  function ToggleButton() {
    _classCallCheck(this, ToggleButton);

    var _this = _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
    return _this;
  }

  _createClass(ToggleButton, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      var className = classes.button;
      if (this.props.active) {
        className += ' ' + classes.active;
      }

      var Icon = this.props.icon;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_IconButton___default.a,
        { className: className, onMouseDown: this.onToggle },
        this.props.icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, null) : this.props.label
      );
    }
  }]);

  return ToggleButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(ToggleButton));

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_components__);












var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('CategoryForm', {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
});

var CategoryForm = function CategoryForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default.a,
    { component: __WEBPACK_IMPORTED_MODULE_3_redux_form__["Form"], onSubmit: handleSubmit, method: 'POST' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default.a,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' category'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.content },
      id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_id', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_csrf', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
        { container: true, gutter: 24 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'name', label: 'Name', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"], required: true }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'description', label: 'Description', type: 'textarea', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_components__["DraftRichEditor"], null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 4 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'slug', type: 'text', label: 'Slug', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.title', type: 'text', label: 'Meta Title', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.description', label: 'Meta Description', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.actions },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

CategoryForm.defaultProps = {
  id: null
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(CategoryForm));

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Field = function Field(_ref) {
  var error = _ref.error,
      name = _ref.name,
      invalid = _ref.invalid,
      label = _ref.label,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['error', 'name', 'invalid', 'label', 'type']);

  var inputProps = _extends({ id: name, name: name, type: type, invalid: invalid, 'aria-describedby': name + 'Error' }, props);
  var renderInputFirst = type === 'checkbox' || type === 'radio';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    renderInputFirst && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', inputProps),
    label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { htmlFor: inputProps.id },
      label
    ),
    renderInputFirst || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', inputProps),
    invalid && error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: name + 'Error', role: 'alert', palette: 'danger' },
      error
    )
  );
};

Field.defaultProps = {
  type: 'text'
};

/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_components__);












var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('ProductForm', {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
});

var ProductForm = function ProductForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default.a,
    { component: __WEBPACK_IMPORTED_MODULE_3_redux_form__["Form"], onSubmit: handleSubmit, method: 'POST' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default.a,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' product'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.content },
      id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_id', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_csrf', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
        { container: true, gutter: 24 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'name', label: 'Name', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"], required: true }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'description', label: 'Description', type: 'textarea', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_components__["DraftRichEditor"], null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 4 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'slug', type: 'text', label: 'Slug', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.title', type: 'text', label: 'Meta Title', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.description', label: 'Meta Description', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.actions },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

ProductForm.defaultProps = {
  id: null
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(ProductForm));

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var ReduxField = function ReduxField(_ref) {
  var meta = _ref.meta,
      input = _ref.input,
      props = _objectWithoutProperties(_ref, ['meta', 'input']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["Field"], _extends({}, props, input, { invalid: meta.touched && !!meta.error, error: meta.error }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReduxField);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_components__);












var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('ShopForm', {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
});

var ShopForm = function ShopForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default.a,
    { component: __WEBPACK_IMPORTED_MODULE_3_redux_form__["Form"], onSubmit: handleSubmit, method: 'POST' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default.a,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' shop'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.content },
      id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_id', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_csrf', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
        { container: true, gutter: 24 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'name', label: 'Name', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'description', label: 'Description', type: 'textarea', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'feedUrl', label: 'Feed URL', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 4 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'slug', type: 'text', label: 'Slug', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.title', type: 'text', label: 'Meta Title', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.description', label: 'Meta Description', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.actions },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

ShopForm.defaultProps = {
  id: null
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(ShopForm));

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Progress_LinearProgress__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Progress_LinearProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Progress_LinearProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles__["createStyleSheet"])('SigninForm', {
  cardActions: {
    boxSizing: 'border-box'
  },
  cardHeader: {
    paddingBottom: 0
  },
  cardContent: {
    paddingTop: 0
  },
  linearProgress: {
    borderRadius: '2px 2px 0 0',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.38)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1
  }
});

var SigninForm = function SigninForm(_ref) {
  var classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'form',
    { name: 'SigninForm', method: 'POST', onSubmit: handleSubmit },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default.a,
      null,
      submitting && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Progress_LinearProgress___default.a, { className: classes.linearProgress }),
      submitting && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.overlay }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardHeader"], { className: classes.cardHeader, title: 'Sign in', subheader: 'wiht your TrendBerry account' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardContent"],
        { className: classes.cardContent },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'usernameOrEmail', label: 'Email or login', type: 'text', component: __WEBPACK_IMPORTED_MODULE_7_components__["TextField"], required: true }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'password', label: 'Password', type: 'password', component: __WEBPACK_IMPORTED_MODULE_7_components__["TextField"], required: true }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: '_csrf', type: 'hidden', component: 'input' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardActions"],
        { className: classes.cardActions },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { color: 'primary', component: function component(props) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button', _extends({ type: 'submit' }, props));
            }, disabled: submitting },
          'Sign in'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles__["withStyles"])(styleSheet)(SigninForm));

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Input__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Form_FormControl__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Form_FormControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Form_FormControl__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







// import MuiFormHelperText from 'material-ui/Form/FormHelperText'

var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('TextField', function (theme) {
  return {
    root: {
      width: '100%'
    },
    underline: {
      '&:before': {
        backgroundColor: theme.palette.text.divider,
        transition: 'background-color 180ms cubic-bezier(0.4, 0, 0.2, 1), transform 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1)',
        height: 2
      }
    }
  };
});

var TextField = function TextField(props) {
  var classNameProp = props.className,
      classes = props.classes,
      disabled = props.disabled,
      input = props.input,
      label = props.label,
      meta = props.meta,
      multiline = props.multiline,
      required = props.required,
      type = props.type;


  var className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.root, classNameProp);

  var inputProps = {
    name: input.name,
    'aria-describedby': input.name + 'Error',
    autoComplete: 'off'
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5_material_ui_Form_FormControl___default.a,
    { className: className, required: required, disabled: disabled, error: meta.touched && meta.invalid, margin: 'normal' },
    label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_material_ui_Input__["InputLabel"],
      { htmlFor: input.name },
      label
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Input___default.a, _extends({
      id: input.name,
      classes: {
        underline: classes.underline
      },
      multiline: multiline,
      inputProps: inputProps,
      type: type
    }, input))
  );
};

TextField.defaultProps = {
  type: 'text'
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(TextField));

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_components__);












var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('UserForm', {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
});

var UserForm = function UserForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default.a,
    { component: __WEBPACK_IMPORTED_MODULE_3_redux_form__["Form"], onSubmit: handleSubmit, method: 'POST' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default.a,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' user'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.content },
      id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_id', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_csrf', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
        { container: true, gutter: 24 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'displayName', label: 'Display name', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'firstname', label: 'First name', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'lastName', label: 'Last name', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'email', label: 'Email', type: '\u0443\u044C\u0444\u0448\u0434', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a, { item: true, sm: 4 })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.actions },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

UserForm.defaultProps = {
  id: null
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(UserForm));

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_components__);












var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('VendorForm', {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
});

var VendorForm = function VendorForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6_material_ui_Paper___default.a,
    { component: __WEBPACK_IMPORTED_MODULE_3_redux_form__["Form"], onSubmit: handleSubmit, method: 'POST' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_material_ui_Typography___default.a,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' vendor'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.content },
      id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_id', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: '_csrf', type: 'hidden', component: 'input' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
        { container: true, gutter: 24 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'name', label: 'Name', type: 'text', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"], required: true }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'description', label: 'Description', type: 'textarea', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_components__["DraftRichEditor"], null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Grid___default.a,
          { item: true, sm: 4 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'slug', type: 'text', label: 'Slug', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.title', type: 'text', label: 'Meta Title', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_redux_form__["Field"], { name: 'meta.description', label: 'Meta Description', component: __WEBPACK_IMPORTED_MODULE_9_components__["TextField"] })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.actions },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

VendorForm.defaultProps = {
  id: null
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(VendorForm));

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSheet", function() { return styleSheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






// import shallowEqual from 'recompose/shallowEqual'


var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('AppContent', function (theme) {
  return _defineProperty({
    content: theme.mixins.gutters({
      paddingBottom: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 10,
      flex: '1 1 100%',
      maxWidth: 1366,
      margin: '0 auto'
    })
  }, theme.breakpoints.up('sm'), {
    content: {
      paddingTop: theme.spacing.unit * 11
    }
  });
});

var AppContent = function AppContent(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      children = _ref2.children,
      location = _ref2.location;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_react_transition_group_CSSTransitionGroup___default.a,
    {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.content, className),
      component: 'div',
      transitionEnterTimeout: 550,
      transitionLeaveTimeout: 275,
      transitionName: {
        enter: 'enter',
        enterActive: 'enter-active',
        leave: 'leave',
        leaveActive: 'leave-active',
        appear: 'appear',
        appearActive: 'appear-active'
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, {
      location: location,
      key: location.pathname
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(AppContent)));

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSheet", function() { return styleSheet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_NavLink__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_NavLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_NavLink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_utils_withWidth__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_utils_withWidth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_utils_withWidth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Drawer__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Divider__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Folder__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Folder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Folder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_icons_Dashboard__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_icons_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_icons_Dashboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_icons_LocalMall__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_material_ui_icons_LocalMall___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_material_ui_icons_LocalMall__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Settings__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_icons_Store__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_material_ui_icons_Store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_material_ui_icons_Store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_icons_People__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_material_ui_icons_People___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_material_ui_icons_People__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_icons_Stars__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_material_ui_icons_Stars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_material_ui_icons_Stars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_icons_InsertDriveFile__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_material_ui_icons_InsertDriveFile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_material_ui_icons_InsertDriveFile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_icons_LibraryAdd__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_material_ui_icons_LibraryAdd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_material_ui_icons_LibraryAdd__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["createStyleSheet"])('AppDrawer', function (theme) {
  return _defineProperty({
    paper: {
      width: theme.spacing.unit * 30,
      backgroundColor: theme.palette.background.paper,
      '&::-webkit-scrollbar': {
        background: 'transparent',
        width: theme.spacing.unit
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.action.disabled,
        height: theme.spacing.unit * 7,
        border: 'none',
        display: 'none'
      },
      '&:hover::-webkit-scrollbar-thumb': {
        display: 'block'
      }
    },
    title: {
      color: theme.palette.text.secondary,
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.primary[500]
      }
    },
    listItem: {
      color: theme.palette.text.primary,
      '&.active $listItemIcon': {
        color: theme.palette.accent.A200
      }
    },
    listItemIcon: {
      color: theme.palette.text.secondary
    }
  }, theme.breakpoints.up('lg'), {
    listItem: {
      paddingLeft: theme.spacing.unit * 3
    },
    paper: {
      backgroundColor: 'transparent',
      borderRight: '0 !important',
      // flex: '0 0 auto',
      height: 'calc(100vh - ' + theme.spacing.unit * 8 + 'px)',
      top: theme.spacing.unit * 8
      // zIndex: theme.zIndex.menu,
    },
    toolbar: {
      display: 'none'
    }
  });
});

var links = [{
  to: '/',
  label: 'Dashboard',
  exact: true,
  icon: __WEBPACK_IMPORTED_MODULE_12_material_ui_icons_Dashboard___default.a
}, {
  to: '/products',
  label: 'Products',
  icon: __WEBPACK_IMPORTED_MODULE_13_material_ui_icons_LocalMall___default.a
}, {
  to: '/categories',
  label: 'Categories',
  icon: __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_Folder___default.a
}, {
  to: '/vendors',
  label: 'Vendors',
  icon: __WEBPACK_IMPORTED_MODULE_17_material_ui_icons_Stars___default.a
}, {
  to: '/shops',
  label: 'Shops',
  icon: __WEBPACK_IMPORTED_MODULE_15_material_ui_icons_Store___default.a
}, {
  to: '/users',
  label: 'Users',
  icon: __WEBPACK_IMPORTED_MODULE_16_material_ui_icons_People___default.a
}, {
  to: '/pages',
  label: 'Pages',
  icon: __WEBPACK_IMPORTED_MODULE_18_material_ui_icons_InsertDriveFile___default.a
}, {
  to: '/import',
  label: 'Import',
  icon: __WEBPACK_IMPORTED_MODULE_19_material_ui_icons_LibraryAdd___default.a
}];

var AppDrawer = function AppDrawer(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      onRequestClose = _ref2.onRequestClose,
      drawerOpen = _ref2.drawerOpen,
      width = _ref2.width;

  var drawerDocked = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_material_ui_utils_withWidth__["isWidthUp"])('lg', width);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_8_material_ui_Drawer___default.a,
    {
      className: className,
      classes: {
        paper: classes.paper
      },
      docked: drawerDocked,
      open: drawerDocked || drawerOpen,
      onRequestClose: onRequestClose
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.nav },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7_material_ui_Toolbar___default.a,
        { className: classes.toolbar },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router_dom_NavLink___default.a,
          { className: classes.title, to: '/', onClick: onRequestClose },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default.a,
            { type: 'title' },
            'Trendberry'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default.a, { absolute: true })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default.a,
        null,
        links.map(function (link) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_List__["ListItem"],
            { key: link.to, to: link.to, component: __WEBPACK_IMPORTED_MODULE_3_react_router_dom_NavLink___default.a, onClick: onRequestClose, className: classes.listItem, exact: link.exact, button: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_List__["ListItemIcon"],
              { className: classes.listItemIcon },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(link.icon, null)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_List__["ListItemText"], { primary: link.label })
          );
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_Divider___default.a, null),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_List___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_List__["ListItem"],
          { to: '/settings', component: __WEBPACK_IMPORTED_MODULE_3_react_router_dom_NavLink___default.a, onClick: onRequestClose, className: classes.listItem, button: true },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_List__["ListItemIcon"],
            { className: classes.listItemIcon },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_material_ui_icons_Settings___default.a, null)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_List__["ListItemText"], { primary: 'Settings' })
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_6_material_ui_utils_withWidth___default()({ resizeInterval: 16.67 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styleSheet))(AppDrawer));

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Menu__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Avatar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Menu__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Menu_MenuItem__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Menu_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Menu_MenuItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_containers__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

















var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["createStyleSheet"])('AppFrame', function (theme) {
  return {
    '@global': {
      html: {
        boxSizing: 'border-box'
      },
      '*, *:before, *:after': {
        boxSizing: 'inherit'
      },
      body: {
        margin: 0,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
        lineHeight: '1.2',
        overflowX: 'hidden',
        overflowY: 'scroll'
        // WebkitFontSmoothing: 'antialiased', // Antialiasing.
        // MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      },
      '.enter': {
        height: 0,
        opacity: 0,
        transform: 'translateY(100px)',
        pointerEvents: 'none'
      },
      '.enter.enter-active': {
        opacity: 1,
        transition: 'all .275s .275s cubic-bezier(0.0, 0.0, 0.2, 1)',
        transform: 'translateY(0)'
      },
      '.leave': {
        height: 0,
        opacity: 1,
        transform: 'translateY(0)',
        pointerEvents: 'none'
      },
      '.leave.leave-active': {
        opacity: 0,
        transition: 'all .275s cubic-bezier(0.4, 0.0, 0.2, 1)',
        transform: 'translateY(100px)'
      },
      '#nprogress': {
        pointerEvents: 'none'
      },
      '#nprogress .bar': {
        background: theme.palette.accent.A100,
        position: 'fixed',
        zIndex: 9999,
        top: 0,
        left: 0,
        width: '100%',
        height: 2
      },
      '#nprogress .peg': {
        display: 'block',
        position: 'absolute',
        right: 0,
        width: 100,
        height: '100%',
        boxShadow: '0 0 10px ' + theme.palette.accent.A100 + ', 0 0 5px ' + theme.palette.accent.A100,
        opacity: 1,
        transform: 'rotate(3deg) translate(0px, -4px)'
      },
      '#nprogress .spinner': {
        display: 'block',
        position: 'fixed',
        zIndex: 9999,
        top: 15,
        right: 15
      },
      '#nprogress .spinner-icon': {
        width: 18,
        height: 18,
        boxSizing: 'border-box',
        border: 'solid 2px transparent',
        borderTopColor: '#29d',
        borderLeftColor: '#29d',
        borderRadius: '50%',
        animation: 'nprogress-spinner 400ms linear infinite'
      },
      '.nprogress-custom-parent': {
        overflow: 'hidden',
        position: 'relative'
      },
      '.nprogress-custom-parent #nprogress .spinner, .nprogress-custom-parent #nprogress .bar': {
        position: 'absolute'
      },
      '@keyframes nprogress-spinner': {
        '0%': {
          transform: 'rotate(0deg)'
        },
        '100%': {
          transform: 'rotate(360deg)'
        }
      }
    },
    root: {
      alignItems: 'stretch',
      display: 'flex',
      minHeight: '100vh',
      width: '100%'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    grow: {
      flex: '1 1 auto'
    },
    drawer: {
      width: theme.spacing.unit * 30
    },
    userMenuButton: {
      marginRight: -4
    },
    userMenu: {
      marginLeft: 12,
      marginTop: -12
    },
    userName: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      height: 48,
      marginTop: -4,
      outline: 'none',
      padding: '0 16px',
      width: '100%'
    },
    userDisplayName: {
      marginRight: 16
    }
  };
});

var AppFrame = function AppFrame(_ref) {
  var classes = _ref.classes,
      route = _ref.route,
      title = _ref.title,
      drawerOpen = _ref.drawerOpen,
      handleDrawerClose = _ref.handleDrawerClose,
      handleDrawerToggle = _ref.handleDrawerToggle,
      user = _ref.user,
      other = _objectWithoutProperties(_ref, ['classes', 'route', 'title', 'drawerOpen', 'handleDrawerClose', 'handleDrawerToggle', 'user']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes.root },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default.a,
      { position: 'fixed' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default.a,
          { onClick: handleDrawerToggle, className: classes.menuButton, color: 'contrast' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Menu___default.a, null)
        ),
        title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10_material_ui_Typography___default.a,
          { type: 'title', color: 'inherit' },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.grow }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default.a,
          {
            'aria-owns': 'user-menu',
            'aria-haspopup': 'true',
            disableRipple: true,
            onClick: other.handleRequestUserMenuOpen,
            classes: {
              root: classes.userMenuButton
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Avatar___default.a, { alt: user.displayName, src: '/avatar.png' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_material_ui_Menu___default.a,
          {
            id: 'user-menu',
            anchorEl: other.userMenuAnchorEl,
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'top'
            },
            transformOrigin: {
              horizontal: 'right',
              vertical: 'top'
            },
            classes: {
              root: classes.userMenu
            },
            open: other.userMenuOpen,
            onRequestClose: other.handleRequestUserMenuClose
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: classes.userName },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_10_material_ui_Typography___default.a,
              { type: 'menu', color: 'inherit', classes: { root: classes.userDisplayName } },
              user.displayName
            ),
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_material_ui_Avatar___default.a, { alt: user.displayName, src: '/avatar.png' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Menu_MenuItem___default.a,
            { component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a, to: '/users/' + user._id },
            'Profile'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Menu_MenuItem___default.a,
            null,
            'Log out'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_containers__["AppDrawer"], {
      className: classes.drawer,
      onRequestClose: handleDrawerClose,
      drawerOpen: drawerOpen
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_components__["AppContent"],
      null,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["renderRoutes"])(route.routes)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_components__["Notifications"], null)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles__["withStyles"])(styleSheet)(AppFrame));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers__);




var CategoryCreatePage = function CategoryCreatePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_containers__["CategoryForm"], { form: 'CategoryCreateForm' })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryCreatePage);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_components__);
















var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('CategoryListPage', {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    'tr:hover &': {
      display: 'block'
    }
  }
});

var CategoryListPage = function CategoryListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteCategory = _ref.deleteCategory,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_containers__["Table"],
      {
        totalRows: count,
        rows: list,
        title: 'Categories',
        toolbar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["SearchWidget"], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
            { 'aria-label': 'Add category', to: '/categories/create', component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default.a, null)
          )
        )
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true, style: { width: '1%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true, style: { width: '98%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableSortLabel"],
              {
                active: sort === 'name',
                component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        disablePadding: true,
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableRowCategoryName"], { item: list[rowIndex] })
          );
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"], null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { classes: { root: classes.actionsCell }, disablePadding: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: classes.actions },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Edit category ' + list[rowIndex].name, to: '/categories/' + list[rowIndex]._id, component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default.a, null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Detele category ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default.a, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default.a,
      { open: open, onRequestClose: onRequestCloseDialog },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogTitle"],
        null,
        'Delete category?'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogContent"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default.a,
          null,
          'You are about to delete category',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          'Are you sure?'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogActions"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: function onClick() {
              return deleteCategory(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

CategoryListPage.defulatProps = {
  selectedIndex: null
};
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(CategoryListPage));

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers__);





var CategoryUpdatePage = function CategoryUpdatePage(_ref) {
  var id = _ref.id;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_containers__["CategoryForm"], { form: 'CategoryUpdateForm', id: id })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryUpdatePage);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// https://github.com/diegohaz/arc/wiki/Atomic-Design


var HomePage = function HomePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Hello World'
  );
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers__);




var ProductCreatePage = function ProductCreatePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_containers__["ProductForm"], { form: 'ProductCreateForm' })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCreatePage);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_components__);
















var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('ProductListPage', {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    'tr:hover &': {
      display: 'block'
    }
  }
});

var ProductListPage = function ProductListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteProduct = _ref.deleteProduct,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_containers__["Table"],
      {
        totalRows: count,
        rows: list,
        title: 'Products',
        toolbar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["SearchWidget"], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
            { 'aria-label': 'Add product', to: '/products/create', component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default.a, null)
          )
        )
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true, style: { width: '1%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true, style: { width: '98%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableSortLabel"],
              {
                active: sort === 'name',
                component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        disablePadding: true,
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true },
            list[rowIndex].name
          );
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"], null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { classes: { root: classes.actionsCell }, disablePadding: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: classes.actions },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Edit product ' + list[rowIndex].name, to: '/products/' + list[rowIndex]._id, component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default.a, null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Detele product ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default.a, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default.a,
      { open: open, onRequestClose: onRequestCloseDialog },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogTitle"],
        null,
        'Delete product?'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogContent"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default.a,
          null,
          'You are about to delete product',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          'Are you sure?'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogActions"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: function onClick() {
              return deleteProduct(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

ProductListPage.defulatProps = {
  selectedIndex: null
};
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(ProductListPage));

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers__);





var ProductUpdatePage = function ProductUpdatePage(_ref) {
  var id = _ref.id;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_containers__["ProductForm"], { form: 'ProductUpdateForm', id: id })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ProductUpdatePage);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers__);




var ShopCreatePage = function ShopCreatePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_containers__["ShopForm"], { form: 'ShopCreateForm' })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ShopCreatePage);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_components__);
















var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('ShopListPage', {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    'tr:hover &': {
      display: 'block'
    }
  }
});

var ShopListPage = function ShopListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteShop = _ref.deleteShop,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_containers__["Table"],
      {
        totalRows: count,
        rows: list,
        title: 'Shops',
        toolbar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["SearchWidget"], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
            { 'aria-label': 'Add shop', to: '/shops/create', component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default.a, null)
          )
        )
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true, style: { width: '1%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true, style: { width: '98%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableSortLabel"],
              {
                active: sort === 'name',
                component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        disablePadding: true,
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true },
            list[rowIndex].name
          );
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"], null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { classes: { root: classes.actionsCell }, disablePadding: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: classes.actions },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Edit shop ' + list[rowIndex].name, to: '/shops/' + list[rowIndex]._id, component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default.a, null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Detele shop ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default.a, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default.a,
      { open: open, onRequestClose: onRequestCloseDialog },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogTitle"],
        null,
        'Delete shop?'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogContent"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default.a,
          null,
          'You are about to delete shop',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          'Are you sure?'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogActions"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: function onClick() {
              return deleteShop(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

ShopListPage.defulatProps = {
  selectedIndex: null
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(ShopListPage));

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers__);




var ShopUpdatePage = function ShopUpdatePage(_ref) {
  var id = _ref.id;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_containers__["ShopForm"], { id: id })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (ShopUpdatePage);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Grid__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers__);






var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('SigninPage', {
  background: {
    background: '#e0e0e0',
    bottom: 0,
    direction: 'ltr',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    '& > svg': {
      minHeight: '100%',
      minWidth: '100%'
    }
  },
  root: {
    height: '100vh',
    flexGrow: 1,
    margin: 0,
    width: '100%'
  },
  form: {
    maxWidth: 450,
    position: 'relative',
    width: '100%',
    zIndex: 2
  }
});

var SigninPage = function SigninPage(_ref) {
  var classes = _ref.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_Grid___default.a,
    { container: true, align: 'center', justify: 'center', className: classes.root },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.background },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1440 900' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M186,-543L720,-438L1193,-493Z', fill: '#c4c4c4', stroke: '#c4c4c4', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M840,1452L303,1530L1630,1586Z', fill: '#474747', stroke: '#474747', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1193,-493L1419,-516L1887,-663Z', fill: '#999999', stroke: '#999999', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M186,-543L1193,-493L1887,-663Z', fill: '#b1b1b1', stroke: '#b1b1b1', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-203,-586L186,-543L1887,-663Z', fill: '#cbcbcb', stroke: '#cbcbcb', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1826,938L1928,1388L1996,265Z', fill: '#3d3d3d', stroke: '#3d3d3d', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1826,608L1826,938L1996,265Z', fill: '#4c4c4c', stroke: '#4c4c4c', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1487,367L1996,265L2047,-61Z', fill: '#666666', stroke: '#666666', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1512,-286L1487,367L2047,-61Z', fill: '#787878', stroke: '#787878', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1887,-663L1512,-286L2047,-61Z', fill: '#7c7c7c', stroke: '#7c7c7c', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1996,265L1928,1388L2047,-61Z', fill: '#4b4b4b', stroke: '#4b4b4b', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1487,367L1826,608L1996,265Z', fill: '#5d5d5d', stroke: '#5d5d5d', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1419,-516L1512,-286L1887,-663Z', fill: '#909090', stroke: '#909090', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1826,938L1441,1062L1928,1388Z', fill: '#383838', stroke: '#383838', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1441,1062L1630,1586L1928,1388Z', fill: '#2c2c2c', stroke: '#2c2c2c', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1409,563L1441,1062L1826,938Z', fill: '#535353', stroke: '#535353', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1409,563L1826,938L1826,608Z', fill: '#525252', stroke: '#525252', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1487,367L1409,563L1826,608Z', fill: '#656565', stroke: '#656565', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1126,341L1487,367L1512,-286Z', fill: '#888888', stroke: '#888888', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M988,-215L1126,341L1512,-286Z', fill: '#999999', stroke: '#999999', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1067,1344L840,1452L1630,1586Z', fill: '#3f3f3f', stroke: '#3f3f3f', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1441,1062L1067,1344L1630,1586Z', fill: '#3e3e3e', stroke: '#3e3e3e', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1409,563L1106,1023L1441,1062Z', fill: '#5f5f5f', stroke: '#5f5f5f', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1419,-516L1193,-493L1512,-286Z', fill: '#9f9f9f', stroke: '#9f9f9f', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1193,-493L988,-215L1512,-286Z', fill: '#a3a3a3', stroke: '#a3a3a3', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1081,526L1106,1023L1409,563Z', fill: '#6f6f6f', stroke: '#6f6f6f', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1106,1023L1067,1344L1441,1062Z', fill: '#545454', stroke: '#545454', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1126,341L1409,563L1487,367Z', fill: '#787878', stroke: '#787878', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1126,341L1081,526L1409,563Z', fill: '#7c7c7c', stroke: '#7c7c7c', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M1081,526L780,523L1106,1023Z', fill: '#7a7a7a', stroke: '#7a7a7a', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M780,523L737,1018L1106,1023Z', fill: '#767676', stroke: '#767676', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M988,-215L795,-53L1126,341Z', fill: '#a2a2a2', stroke: '#a2a2a2', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M795,-53L766,156L1126,341Z', fill: '#a0a0a0', stroke: '#a0a0a0', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M720,-438L988,-215L1193,-493Z', fill: '#b2b2b2', stroke: '#b2b2b2', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M737,1018L1067,1344L1106,1023Z', fill: '#616161', stroke: '#616161', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M780,523L1081,526L1126,341Z', fill: '#878787', stroke: '#878787', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M766,156L780,523L1126,341Z', fill: '#949494', stroke: '#949494', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M737,1018L840,1452L1067,1344Z', fill: '#595959', stroke: '#595959', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M720,-438L795,-53L988,-215Z', fill: '#b4b4b4', stroke: '#b4b4b4', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M412,949L303,1530L737,1018Z', fill: '#767676', stroke: '#767676', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M412,949L737,1018L780,523Z', fill: '#848484', stroke: '#848484', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M766,156L331,230L780,523Z', fill: '#a4a4a4', stroke: '#a4a4a4', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M720,-438L375,-109L795,-53Z', fill: '#bebebe', stroke: '#bebebe', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M737,1018L303,1530L840,1452Z', fill: '#606060', stroke: '#606060', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M200,545L412,949L780,523Z', fill: '#979797', stroke: '#979797', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M375,-109L766,156L795,-53Z', fill: '#b4b4b4', stroke: '#b4b4b4', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M331,230L200,545L780,523Z', fill: '#a6a6a6', stroke: '#a6a6a6', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M375,-109L331,230L766,156Z', fill: '#b8b8b8', stroke: '#b8b8b8', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M186,-543L375,-109L720,-438Z', fill: '#d0d0d0', stroke: '#d0d0d0', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M186,-543L-168,-219L375,-109Z', fill: '#dadada', stroke: '#dadada', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M200,545L-40,661L412,949Z', fill: '#a0a0a0', stroke: '#a0a0a0', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-40,661L8,1131L412,949Z', fill: '#979797', stroke: '#979797', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M8,1131L303,1530L412,949Z', fill: '#7d7d7d', stroke: '#7d7d7d', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-139,145L331,230L375,-109Z', fill: '#c7c7c7', stroke: '#c7c7c7', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-168,-219L-139,145L375,-109Z', fill: '#d5d5d5', stroke: '#d5d5d5', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M8,1131L-183,1516L303,1530Z', fill: '#757575', stroke: '#757575', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-139,145L200,545L331,230Z', fill: '#bcbcbc', stroke: '#bcbcbc', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-203,-586L-168,-219L186,-543Z', fill: '#e7e7e7', stroke: '#e7e7e7', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-139,145L-40,661L200,545Z', fill: '#b7b7b7', stroke: '#b7b7b7', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-139,145L-494,513L-40,661Z', fill: '#bfbfbf', stroke: '#bfbfbf', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-388,1346L-183,1516L8,1131Z', fill: '#818181', stroke: '#818181', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-40,661L-468,1143L8,1131Z', fill: '#9d9d9d', stroke: '#9d9d9d', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-468,1143L-388,1346L8,1131Z', fill: '#8e8e8e', stroke: '#8e8e8e', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-168,-219L-391,-129L-139,145Z', fill: '#dddddd', stroke: '#dddddd', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-494,513L-468,1143L-40,661Z', fill: '#aeaeae', stroke: '#aeaeae', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-203,-586L-453,-561L-168,-219Z', fill: '#eeeeee', stroke: '#eeeeee', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-453,-561L-391,-129L-168,-219Z', fill: '#eaeaea', stroke: '#eaeaea', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-391,-129L-608,313L-139,145Z', fill: '#d9d9d9', stroke: '#d9d9d9', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-608,313L-494,513L-139,145Z', fill: '#cccccc', stroke: '#cccccc', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-453,-561L-608,313L-391,-129Z', fill: '#e7e7e7', stroke: '#e7e7e7', strokeWidth: '1.51' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M-494,513L-608,313L-468,1143Z', fill: '#b9b9b9', stroke: '#b9b9b9', strokeWidth: '1.51' })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.form },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_containers__["SigninForm"], null)
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(SigninPage));

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers__);




var UserCreatePage = function UserCreatePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_containers__["UserForm"], { form: 'UserCreateForm' })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (UserCreatePage);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_components__);
















var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('UserListPage', {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    'tr:hover &': {
      display: 'block'
    }
  }
});

var UserListPage = function UserListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteUser = _ref.deleteUser,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_containers__["Table"],
      {
        totalRows: count,
        rows: list,
        title: 'Users',
        toolbar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["SearchWidget"], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
            { 'aria-label': 'Add user', to: '/users/create', component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default.a, null)
          )
        )
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true, style: { width: '1%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true, style: { width: '30%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableSortLabel"],
              {
                active: sort === 'displayName',
                component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a,
                direction: order,
                to: getSortLink('displayName')
              },
              'Name'
            )
          );
        },
        disablePadding: true,
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true },
            list[rowIndex].displayName
          );
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref6) {
          var getSortLink = _ref6.getSortLink,
              order = _ref6.order,
              sort = _ref6.sort;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableSortLabel"],
              {
                active: sort === 'email',
                component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a,
                direction: order,
                to: getSortLink('email')
              },
              'Email'
            )
          );
        },
        cell: function cell(_ref7) {
          var rowIndex = _ref7.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            null,
            list[rowIndex].email
          );
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"], null);
        },
        cell: function cell(_ref8) {
          var rowIndex = _ref8.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { classes: { root: classes.actionsCell }, disablePadding: true, style: { width: '1%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: classes.actions },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Edit user ' + list[rowIndex].email, to: '/users/' + list[rowIndex]._id, component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default.a, null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Detele user ' + list[rowIndex].email, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default.a, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default.a,
      { open: open, onRequestClose: onRequestCloseDialog },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogTitle"],
        null,
        'Delete user?'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogContent"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default.a,
          null,
          'You are about to delete user',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].email
          ),
          '.',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          'Are you sure?'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogActions"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: function onClick() {
              return deleteUser(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(UserListPage));

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers__);





var UserUpdatePage = function UserUpdatePage(_ref) {
  var id = _ref.id;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_containers__["UserForm"], { form: 'UserUpdateForm', id: id })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (UserUpdatePage);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers__);




var VendorCreatePage = function VendorCreatePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_containers__["VendorForm"], { form: 'VendorCreateForm' })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (VendorCreatePage);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_containers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_components__);
















var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('VendorListPage', {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    'tr:hover &': {
      display: 'block'
    }
  }
});

var VendorListPage = function VendorListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteVendor = _ref.deleteVendor,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_13_containers__["Table"],
      {
        totalRows: count,
        rows: list,
        title: 'Vendors',
        toolbar: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["SearchWidget"], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
            { 'aria-label': 'Add vendor', to: '/vendors/create', component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_Add___default.a, null)
          )
        )
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true, style: { width: '1%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { checkbox: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Checkbox___default.a, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true, style: { width: '98%' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableSortLabel"],
              {
                active: sort === 'name',
                component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        disablePadding: true,
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { disablePadding: true },
            list[rowIndex].name
          );
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_components__["TableColumn"], {
        header: function header() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"], null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12_material_ui_Table__["TableCell"],
            { classes: { root: classes.actionsCell }, disablePadding: true },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: classes.actions },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Edit vendor ' + list[rowIndex].name, to: '/vendors/' + list[rowIndex]._id, component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_ModeEdit___default.a, null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
                { 'aria-label': 'Detele vendor ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_Delete___default.a, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog___default.a,
      { open: open, onRequestClose: onRequestCloseDialog },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogTitle"],
        null,
        'Delete vendor?'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogContent"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_material_ui_Typography___default.a,
          null,
          'You are about to delete vendor',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          'Are you sure?'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_material_ui_Dialog__["DialogActions"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
          { onClick: function onClick() {
              return deleteVendor(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

VendorListPage.defulatProps = {
  selectedIndex: null
};
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(VendorListPage));

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers__);





var VendorUpdatePage = function VendorUpdatePage(_ref) {
  var id = _ref.id;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_containers__["VendorForm"], { form: 'VendorUpdateForm', id: id })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (VendorUpdatePage);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Table__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('TableBody', {});

var TableHead = function (_Component) {
  _inherits(TableHead, _Component);

  function TableHead() {
    _classCallCheck(this, TableHead);

    return _possibleConstructorReturn(this, (TableHead.__proto__ || Object.getPrototypeOf(TableHead)).apply(this, arguments));
  }

  _createClass(TableHead, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          handleRowClick = _props.handleRowClick,
          isSelected = _props.isSelected,
          rows = _props.rows;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Table__["TableBody"],
        null,
        rows.map(function (row, index) {
          var isRowSelected = isSelected(row._id);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_Table__["TableRow"],
            {
              hover: true,
              key: row._id,
              selected: isRowSelected
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
              if (child.type.muiName === 'TableColumn') {
                var _child$props = child.props,
                    cell = _child$props.cell,
                    header = _child$props.header,
                    other = _objectWithoutProperties(_child$props, ['cell', 'header']);

                var cellProps = _extends({
                  handleRowClick: handleRowClick,
                  isSelected: isSelected,
                  rowIndex: index
                }, other);

                var content = void 0;
                if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child.props.cell)) {
                  content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child.props.cell, cellProps);
                } else if (typeof child.props.cell === 'function') {
                  content = child.props.cell(cellProps);
                } else {
                  content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_material_ui_Table__["TableCell"],
                    other,
                    child.props.cell
                  );
                }
                return content;
              }
              return null;
            })
          );
        })
      );
    }
  }]);

  return TableHead;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(TableHead)));

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
// import React from 'react'


var TableColumn = function TableColumn() {
  return null;
};

TableColumn.propTypes = {
  /**
   * The horizontal alignment of the table cell content.
   */
  align: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(['left', 'center', 'right']),

  /**
   * Controls if the column is fixed when scrolling in the X axis.
   */
  // fixed: PropTypes.bool,

  /**
   * The header cell for this column.
   * This can either be a string a React element, or a function that generates
   * a React Element. Passing in a string will render a default header cell
   * with that string. By default, the React element passed in can expect to
   * receive the following props:
   *
   * ```
   * props: {
   *   columnKey: string // (of the column, if given)
   *   height: number // (supplied from the Table or rowHeightGetter)
   *   width: number // (supplied from the Column)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * If you pass in a function, you will receive the same props object as the
   * first argument.
   */
  header: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func]),

  /**
   * This is the body cell that will be cloned for this column.
   * This can either be a string a React element, or a function that generates
   * a React Element. Passing in a string will render a default header cell
   * with that string. By default, the React element passed in can expect to
   * receive the following props:
   *
   * ```
   * props: {
   *   rowIndex; number // (the row index of the cell)
   *   columnKey: string // (of the column, if given)
   *   height: number // (supplied from the Table or rowHeightGetter)
   *   width: number // (supplied from the Column)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * If you pass in a function, you will receive the same props object as the
   * first argument.
   */
  cell: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func]),

  /**
   * This is the footer cell for this column.
   * This can either be a string a React element, or a function that generates
   * a React Element. Passing in a string will render a default header cell
   * with that string. By default, the React element passed in can expect to
   * receive the following props:
   *
   * ```
   * props: {
   *   columnKey: string // (of the column, if given)
   *   height: number // (supplied from the Table or rowHeightGetter)
   *   width: number // (supplied from the Column)
   * }
   * ```
   *
   * Because you are passing in your own React element, you can feel free to
   * pass in whatever props you may want or need.
   *
   * If you pass in a function, you will receive the same props object as the
   * first argument.
   */
  footer: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func]),

  /**
   * This is used to uniquely identify the column, and is not required unless
   * you a resizing columns. This will be the key given in the
   * `onColumnResizeEndCallback` on the Table.
   */
  columnKey: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),

  /**
   * The pixel width of the column.
   */
  // width: PropTypes.number.isRequired,

  /**
   * If this is a resizable column this is its minimum pixel width.
   */
  minWidth: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,

  /**
   * If this is a resizable column this is its maximum pixel width.
   */
  maxWidth: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,

  /**
   * The grow factor relative to other columns. Same as the flex-grow API
   * from http://www.w3.org/TR/css3-flexbox/. Basically, take any available
   * extra width and distribute it proportionally according to all columns'
   * flexGrow values. Defaults to zero (no-flexing).
   */
  flexGrow: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,

  /**
   * Whether the column can be resized with the
   * FixedDataTableColumnResizeHandle. Please note that if a column
   * has a flex grow, once you resize the column this will be set to 0.
   *
   * This property only provides the UI for the column resizing. If this
   * is set to true, you will need to set the onColumnResizeEndCallback table
   * property and render your columns appropriately.
   */
  isResizable: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool

  /**
   * Whether cells in this column can be removed from document when outside
   * of viewport as a result of horizontal scrolling.
   * Setting this property to true allows the table to not render cells in
   * particular column that are outside of viewport for visible rows. This
   * allows to create table with many columns and not have vertical scrolling
   * performance drop.
   * Setting the property to false will keep previous behaviour and keep
   * cell rendered if the row it belongs to is visible.
   */
  // allowCellsRecycling: PropTypes.bool,


  // TableColumn.defaultProps = {
  //   allowCellsRecycling: false,
  //   fixed: false,
  // }

};TableColumn.muiName = 'TableColumn';

/* harmony default export */ __webpack_exports__["default"] = (TableColumn);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Menu__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_ArrowDropDown__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_icons_ArrowDropDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_ArrowDropDown__);









var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('TableFooterMenu', {
  root: {
    display: 'inline-block'
  },
  pages: {
    position: 'absolute',
    right: 36
  }
});

var TableFooterMenu = function TableFooterMenu(props) {
  var anchorEl = props.anchorEl,
      classes = props.classes,
      handleRequestClose = props.handleRequestClose,
      handleRequestOpen = props.handleRequestOpen,
      limit = props.limit,
      limitLink = props.limitLink,
      limitOptions = props.limitOptions,
      open = props.open;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes.root },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6_material_ui_IconButton___default.a,
      { onClick: handleRequestOpen },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a,
        {
          classes: {
            root: classes.pages
          },
          type: 'caption'
        },
        limit || limitOptions[0]
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_icons_ArrowDropDown___default.a, null)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_material_ui_Menu___default.a,
      {
        anchorEl: anchorEl,
        open: open,
        onRequestClose: handleRequestClose
      },
      limitOptions.map(function (option) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Menu__["MenuItem"],
          {
            component: __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Link___default.a,
            key: option,
            replace: true,
            selected: option === limit,
            to: limitLink(option),
            onClick: handleRequestClose
          },
          option
        );
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(TableFooterMenu));

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_KeyboardArrowLeft__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_material_ui_icons_KeyboardArrowLeft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_KeyboardArrowLeft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_KeyboardArrowRight__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_material_ui_icons_KeyboardArrowRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_material_ui_icons_KeyboardArrowRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_containers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_containers__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















function toInteger(v) {
  return isNaN(v) ? 0 : parseInt(v, 10);
}

function calculateTotalPages(totalItemsInCollection, itemsPerPage) {
  var e = toInteger(totalItemsInCollection);
  var p = toInteger(itemsPerPage);
  return Math.ceil(e / p);
}

function pageLinkPath(location, currentPageNumber) {
  var query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["parse"])(location.search.substr(1));
  currentPageNumber === 1 ? delete query._page : query._page = currentPageNumber;

  return _extends({}, location, {
    search: '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["stringify"])(_extends({}, query))
  });
}

var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__["createStyleSheet"])('TableFooter', function (theme) {
  return {
    toolbar: {
      height: 56,
      paddingRight: 2
    },
    spacer: { flex: '1 1 100%' },
    pagination: {
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      '& > *': {
        verticalAlign: 'top'
      }
    },
    text: {
      display: 'inline-block',
      lineHeight: '24px',
      padding: '12px 20px'
    },
    label: {
      marginRight: 8
    },
    title: { flex: '0 0 auto' }
  };
});

var TableFooter = function (_Component) {
  _inherits(TableFooter, _Component);

  function TableFooter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableFooter.__proto__ || Object.getPrototypeOf(TableFooter)).call.apply(_ref, [this].concat(args))), _this), _this.startIndex = function (limit, pageNumber) {
      return limit * (pageNumber - 1) + 1;
    }, _this.endIndex = function (limit, pageNumber, count) {
      return count >= limit * pageNumber ? limit * pageNumber : count;
    }, _this.hasReversePageLink = function (pageNumber) {
      return pageNumber - 1 > 0;
    }, _this.hasForwardPageLink = function (pageNumber, totalPages) {
      return pageNumber + 1 <= totalPages;
    }, _this.reversePageLinkItem = function (pageNumber) {
      var location = _this.props.location;

      var disabled = !_this.hasReversePageLink(pageNumber);
      var n = pageNumber - 1;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton___default.a,
        {
          component: disabled ? 'span' : __WEBPACK_IMPORTED_MODULE_4_react_router_dom_Link___default.a,
          to: pageLinkPath(location, n),
          disabled: disabled
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_material_ui_icons_KeyboardArrowLeft___default.a, null)
      );
    }, _this.forwardPageLinkItem = function (pageNumber, totalPages) {
      var location = _this.props.location;

      var disabled = !_this.hasForwardPageLink(pageNumber, totalPages);
      var n = pageNumber + 1;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_material_ui_IconButton___default.a,
        {
          component: disabled ? 'span' : __WEBPACK_IMPORTED_MODULE_4_react_router_dom_Link___default.a,
          to: pageLinkPath(location, n),
          disabled: disabled
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_material_ui_icons_KeyboardArrowRight___default.a, null)
      );
    }, _this.limitLink = function (limit) {
      var _this$props = _this.props,
          limitOptions = _this$props.limitOptions,
          location = _this$props.location;

      var query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["parse"])(location.search.substr(1));
      limit === limitOptions[0] ? delete query._limit : query._limit = limit;
      delete query._page;

      return _extends({}, location, {
        search: '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["stringify"])(_extends({}, query))
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          count = _props.count,
          limitOptions = _props.limitOptions,
          location = _props.location;


      var query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_qs__["parse"])(location.search.substr(1));
      var limit = toInteger(query._limit) || limitOptions[0];
      var page = toInteger(query._page) || 1;

      var totalPages = toInteger(calculateTotalPages(count, limit));

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_material_ui_Toolbar___default.a,
        { classes: { root: classes.toolbar } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.spacer }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: classes.pagination },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default.a,
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes.text, classes.label), type: 'caption' },
            'Rows per page'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_containers__["TableFooterMenu"], { limit: limit, limitLink: this.limitLink, limitOptions: limitOptions }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_material_ui_Typography___default.a,
            { className: classes.text, type: 'caption' },
            count && this.startIndex(limit, page) + '-' + this.endIndex(limit, page, count),
            ' of ',
            count
          ),
          this.reversePageLinkItem(page, totalPages),
          this.forwardPageLinkItem(page, totalPages)
        )
      );
    }
  }]);

  return TableFooter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TableFooter.defaultProps = {
  limitOptions: [10, 20, 50]
};


/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_material_ui_styles__["withStyles"])(styleSheet)(TableFooter)));

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Table__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["createStyleSheet"])('TableHead', {
  '@global': {
    th: {
      fontWeight: 500,
      '& a': {
        color: 'inherit'
      }
    }
  },
  head: {
    height: 56
  }
});

var TableHead = function (_Component) {
  _inherits(TableHead, _Component);

  function TableHead() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableHead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableHead.__proto__ || Object.getPrototypeOf(TableHead)).call.apply(_ref, [this].concat(args))), _this), _this.getSortLink = function (key) {
      var location = _this.props.location;

      var query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_qs__["parse"])(location.search.substr(1));
      var order = query._order && query._order.toLowerCase() || 'desc';
      var orderParam = order === 'asc' ? 'DESC' : 'ASC';

      return {
        pathname: location.pathname,
        search: '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_qs__["stringify"])(_extends({}, query, {
          _order: orderParam,
          _sort: key
        }))
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableHead, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          handleSelectAllClick = _props.handleSelectAllClick,
          location = _props.location,
          order = _props.order,
          sort = _props.sort;

      var query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_qs__["parse"])(location.search.substr(1));
      var sortParam = query._sort || sort;
      var orderParam = query._order && query._order.toLowerCase() || order;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Table__["TableHead"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Table__["TableRow"],
          {
            classes: {
              root: classes.head
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
            if (child.type.muiName === 'TableColumn') {
              var _child$props = child.props,
                  cell = _child$props.cell,
                  header = _child$props.header,
                  other = _objectWithoutProperties(_child$props, ['cell', 'header']);

              var headerProps = _extends({}, other, {
                classes: classes,
                getSortLink: _this2.getSortLink,
                handleSelectAllClick: handleSelectAllClick,
                order: orderParam,
                sort: sortParam
              });

              var content = void 0;
              if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(header)) {
                content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(header, headerProps);
              } else if (typeof header === 'function') {
                content = header(headerProps);
              } else {
                content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_material_ui_Table__["TableCell"],
                  headerProps,
                  header
                );
              }
              return content;
            }
            return null;
          })
        )
      );
    }
  }]);

  return TableHead;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styleSheet)(TableHead)));

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Typography__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var styleSheet = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createStyleSheet"])('TableToolbar', function (theme) {
  return {
    root: {
      paddingRight: 2
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.accent[500],
      backgroundColor: theme.palette.accent[50]
    } : {
      color: theme.palette.accent.A100,
      backgroundColor: theme.palette.accent.A700
    },
    spacer: {
      flex: '1 1 100%'
    },
    actions: {
      color: theme.palette.text.secondary,
      display: 'inline-flex'
    },
    title: {
      flex: '0 0 auto'
    }
  };
});

var TableToolbar = function TableToolbar(props) {
  var content = props.content,
      contentAlt = props.contentAlt,
      numSelected = props.numSelected,
      classes = props.classes,
      title = props.title;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default.a,
    {
      className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(classes.root, _defineProperty({}, classes.highlight, numSelected > 0))
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.title },
      numSelected > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a,
        { color: 'inherit', type: 'subheading' },
        numSelected,
        ' selected'
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Typography___default.a,
        { type: 'headline' },
        title
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes.spacer }),
    numSelected > 0 ? contentAlt && __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(contentAlt, { className: classes.actions }) : content && __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(content, { className: classes.actions })
  );
};

TableToolbar.defaultProps = {
  title: null,
  content: null,
  contentAlt: null
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(styleSheet)(TableToolbar));

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var Table = function Table(_ref) {
  var children = _ref.children,
      isSelected = _ref.isSelected,
      numSelected = _ref.numSelected,
      rows = _ref.rows,
      title = _ref.title,
      toolbar = _ref.toolbar,
      toolbarAlt = _ref.toolbarAlt,
      totalRows = _ref.totalRows,
      props = _objectWithoutProperties(_ref, ['children', 'isSelected', 'numSelected', 'rows', 'title', 'toolbar', 'toolbarAlt', 'totalRows']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default.a,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["TableToolbar"], {
      title: title,
      numSelected: numSelected,
      content: toolbar,
      contentAlt: toolbarAlt
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_Table___default.a,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components__["TableHead"],
        { handleSelectAllClick: props.handleSelectAllClick },
        children
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_components__["TableBody"],
        {
          handleRowClick: props.handleRowClick,
          isSelected: isSelected,
          rows: rows,
          handleSelectAllClick: props.handleSelectAllClick
        },
        children
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["TableFooter"], { count: totalRows })
  );
};

Table.defaultProps = {
  title: null,
  toolbar: null,
  totalRows: null
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var PageTemplate = function PageTemplate(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', props);
};

/* harmony default export */ __webpack_exports__["default"] = (PageTemplate);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom_helpers_util_inDOM__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom_helpers_util_inDOM___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_util_inDOM__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AppDrawerContainer = function (_Component) {
  _inherits(AppDrawerContainer, _Component);

  function AppDrawerContainer(props) {
    _classCallCheck(this, AppDrawerContainer);

    var _this = _possibleConstructorReturn(this, (AppDrawerContainer.__proto__ || Object.getPrototypeOf(AppDrawerContainer)).call(this, props));

    var width = null;
    if (props.device) {
      if (props.device.type === 'desktop') width = 'lg';
      if (props.device.type === 'tablet') width = 'sm';
      if (props.device.type === 'phone') width = 'xs';
    }

    _this.state = {
      width: width
    };
    return _this;
  }

  _createClass(AppDrawerContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (__WEBPACK_IMPORTED_MODULE_2_dom_helpers_util_inDOM___default.a) {
        setTimeout(function () {
          return _this2.setState({
            width: null
          });
        }, 167);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          device = _props.device,
          other = _objectWithoutProperties(_props, ['device']);

      var drawerProps = _extends({}, other);
      if (this.state.width !== null) {
        drawerProps.width = this.state.width;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components__["AppDrawer"], drawerProps);
    }
  }]);

  return AppDrawerContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AppDrawerContainer.defaultProps = {
  device: null
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    device: __WEBPACK_IMPORTED_MODULE_5_store_selectors__["fromDevice"].getDevice(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router__["withRouter"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps)(AppDrawerContainer)));

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function getTitle(routes, pathname) {
  var branch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_config__["matchRoutes"])(routes, pathname);
  for (var i = branch.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(branch[i].route, 'title')) {
      return branch[i].route.title;
    }
  }

  return null;
}

var AppFrameContainer = function (_Component) {
  _inherits(AppFrameContainer, _Component);

  function AppFrameContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppFrameContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppFrameContainer.__proto__ || Object.getPrototypeOf(AppFrameContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      drawerOpen: false,
      userMenuAnchorEl: undefined,
      userMenuOpen: false
    }, _this.handleDrawerClose = function () {
      _this.setState({ drawerOpen: false });
    }, _this.handleDrawerToggle = function () {
      _this.setState({ drawerOpen: !_this.state.drawerOpen });
    }, _this.handleToggleShade = function () {
      // this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' })
    }, _this.handleRequestUserMenuOpen = function (event) {
      _this.setState({ userMenuOpen: true, userMenuAnchorEl: event.currentTarget });
    }, _this.handleRequestUserMenuClose = function () {
      _this.setState({ userMenuOpen: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppFrameContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          location = _props.location,
          route = _props.route,
          other = _objectWithoutProperties(_props, ['location', 'route']);

      var title = getTitle(route.routes, location.pathname) || route.title || null;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["AppFrame"], _extends({
        title: title,
        handleDrawerToggle: this.handleDrawerToggle,
        handleDrawerClose: this.handleDrawerClose,
        drawerOpen: this.state.drawerOpen,
        route: route,
        userMenuAnchorEl: this.state.userMenuAnchorEl,
        userMenuOpen: this.state.userMenuOpen,
        handleRequestUserMenuOpen: this.handleRequestUserMenuOpen,
        handleRequestUserMenuClose: this.handleRequestUserMenuClose
      }, other));
    }
  }]);

  return AppFrameContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: __WEBPACK_IMPORTED_MODULE_4_store_selectors__["fromStatus"].isLoading(state),
    user: __WEBPACK_IMPORTED_MODULE_4_store_selectors__["fromAuth"].getUser(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(AppFrameContainer));

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CategoryForm__ = __webpack_require__(32);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var CategoryCreatePageContainer = function (_Component) {
  _inherits(CategoryCreatePageContainer, _Component);

  function CategoryCreatePageContainer() {
    _classCallCheck(this, CategoryCreatePageContainer);

    return _possibleConstructorReturn(this, (CategoryCreatePageContainer.__proto__ || Object.getPrototypeOf(CategoryCreatePageContainer)).apply(this, arguments));
  }

  _createClass(CategoryCreatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["CategoryCreatePage"], null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_3__CategoryForm__["config"], req.body))]);
    }
  }]);

  return CategoryCreatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CategoryCreatePageContainer);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var CategoryListPageContainer = function (_Component) {
  _inherits(CategoryListPageContainer, _Component);

  function CategoryListPageContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CategoryListPageContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CategoryListPageContainer.__proto__ || Object.getPrototypeOf(CategoryListPageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: undefined
    }, _this.handleOpenDeleteDialog = function (rowIndex, event) {
      _this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }, _this.handleDeleteCategory = function (id) {
      _this.handleRequestCloseDialog();
      _this.props.deleteCategoryRequest(id);
      // .then((category) => {
      //   // console.log(category)
      // })
    }, _this.handleRequestCloseDialog = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CategoryListPageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["CategoryListPage"], _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteCategory: this.handleDeleteCategory, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceListReadRequest"])('categories', query));
    }
  }]);

  return CategoryListPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromEntities"].getList(state, 'categories', __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getList(state, 'categories')),
    count: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getCount(state, 'categories')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteCategoryRequest: function deleteCategoryRequest(id) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceDeleteRequest"])('categories', id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(CategoryListPageContainer));

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CategoryForm__ = __webpack_require__(32);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var CategoryUpdatePageContainer = function (_Component) {
  _inherits(CategoryUpdatePageContainer, _Component);

  function CategoryUpdatePageContainer() {
    _classCallCheck(this, CategoryUpdatePageContainer);

    return _possibleConstructorReturn(this, (CategoryUpdatePageContainer.__proto__ || Object.getPrototypeOf(CategoryUpdatePageContainer)).apply(this, arguments));
  }

  _createClass(CategoryUpdatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["CategoryUpdatePage"], { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_5__CategoryForm__["config"], req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["resourceDetailReadRequest"])('categories', match.params.id));
    }
  }]);

  return CategoryUpdatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CategoryUpdatePageContainer);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ConfirmationDialogContainer = function (_Component) {
  _inherits(ConfirmationDialogContainer, _Component);

  function ConfirmationDialogContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ConfirmationDialogContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConfirmationDialogContainer.__proto__ || Object.getPrototypeOf(ConfirmationDialogContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleEntering = function () {
      // this.radioGroup.focus()
    }, _this.handleCancel = function () {
      _this.props.onRequestClose();
    }, _this.handleOk = function () {
      _this.props.onRequestClose();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ConfirmationDialogContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["ConfirmationDialog"], this.props);
    }
  }]);

  return ConfirmationDialogContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmationDialogContainer);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProductForm__ = __webpack_require__(33);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ProductCreatePageContainer = function (_Component) {
  _inherits(ProductCreatePageContainer, _Component);

  function ProductCreatePageContainer() {
    _classCallCheck(this, ProductCreatePageContainer);

    return _possibleConstructorReturn(this, (ProductCreatePageContainer.__proto__ || Object.getPrototypeOf(ProductCreatePageContainer)).apply(this, arguments));
  }

  _createClass(ProductCreatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["ProductCreatePage"], null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_3__ProductForm__["config"], req.body))]);
    }
  }]);

  return ProductCreatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductCreatePageContainer);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ProductListPageContainer = function (_Component) {
  _inherits(ProductListPageContainer, _Component);

  function ProductListPageContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProductListPageContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductListPageContainer.__proto__ || Object.getPrototypeOf(ProductListPageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: undefined
    }, _this.handleOpenDeleteDialog = function (rowIndex, event) {
      _this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }, _this.handleDeleteProduct = function (id) {
      _this.handleRequestCloseDialog();
      _this.props.deleteProductRequest(id);
      // .then((product) => {
      //   // console.log(product)
      // })
    }, _this.handleRequestCloseDialog = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductListPageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["ProductListPage"], _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteProduct: this.handleDeleteProduct, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceListReadRequest"])('products', query));
    }
  }]);

  return ProductListPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromEntities"].getList(state, 'products', __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getList(state, 'products')),
    count: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getCount(state, 'products')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteProductRequest: function deleteProductRequest(id) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceDeleteRequest"])('products', id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProductListPageContainer));

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProductForm__ = __webpack_require__(33);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var ProductUpdatePageContainer = function (_Component) {
  _inherits(ProductUpdatePageContainer, _Component);

  function ProductUpdatePageContainer() {
    _classCallCheck(this, ProductUpdatePageContainer);

    return _possibleConstructorReturn(this, (ProductUpdatePageContainer.__proto__ || Object.getPrototypeOf(ProductUpdatePageContainer)).apply(this, arguments));
  }

  _createClass(ProductUpdatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["ProductUpdatePage"], { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_5__ProductForm__["config"], req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["resourceDetailReadRequest"])('products', match.params.id));
    }
  }]);

  return ProductUpdatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductUpdatePageContainer);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ShopForm__ = __webpack_require__(34);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ShopCreatePageContainer = function (_Component) {
  _inherits(ShopCreatePageContainer, _Component);

  function ShopCreatePageContainer() {
    _classCallCheck(this, ShopCreatePageContainer);

    return _possibleConstructorReturn(this, (ShopCreatePageContainer.__proto__ || Object.getPrototypeOf(ShopCreatePageContainer)).apply(this, arguments));
  }

  _createClass(ShopCreatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["ShopCreatePage"], null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_3__ShopForm__["config"], req.body))]);
    }
  }]);

  return ShopCreatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShopCreatePageContainer);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ShopListPageContainer = function (_Component) {
  _inherits(ShopListPageContainer, _Component);

  function ShopListPageContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShopListPageContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopListPageContainer.__proto__ || Object.getPrototypeOf(ShopListPageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: undefined
    }, _this.handleOpenDeleteDialog = function (rowIndex, event) {
      _this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }, _this.handleDeleteShop = function (id) {
      _this.handleRequestCloseDialog();
      _this.props.deleteShopRequest(id);
      // .then((shop) => {
      //   // console.log(shop)
      // })
    }, _this.handleRequestCloseDialog = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopListPageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["ShopListPage"], _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteShop: this.handleDeleteShop, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceListReadRequest"])('shops', query));
    }
  }]);

  return ShopListPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromEntities"].getList(state, 'shops', __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getList(state, 'shops')),
    count: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getCount(state, 'shops')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteShopRequest: function deleteShopRequest(id) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceDeleteRequest"])('shops', id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ShopListPageContainer));

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ShopForm__ = __webpack_require__(34);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var ShopUpdatePageContainer = function (_Component) {
  _inherits(ShopUpdatePageContainer, _Component);

  function ShopUpdatePageContainer() {
    _classCallCheck(this, ShopUpdatePageContainer);

    return _possibleConstructorReturn(this, (ShopUpdatePageContainer.__proto__ || Object.getPrototypeOf(ShopUpdatePageContainer)).apply(this, arguments));
  }

  _createClass(ShopUpdatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["ShopUpdatePage"], { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_5__ShopForm__["config"], req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["resourceDetailReadRequest"])('shops', match.params.id));
    }
  }]);

  return ShopUpdatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShopUpdatePageContainer);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_services_validation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components__);









var SigninFormContainer = function SigninFormContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components__["SigninForm"], props);
};

var onSubmit = function onSubmit(data, dispatch) {
  return new Promise(function (resolve, reject) {
    dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["authSigninRequest"])(data, resolve, reject));
  });
};

var validate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_services_validation__["a" /* createValidator */])({
  usernameOrEmail: [__WEBPACK_IMPORTED_MODULE_5_services_validation__["b" /* required */]],
  password: [__WEBPACK_IMPORTED_MODULE_5_services_validation__["b" /* required */]]
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    initialValues: {
      _csrf: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromForm"].getCsrfToken(state)
    }
  };
};

var config = {
  form: 'SigninForm',
  fields: ['usernameOrEmail', 'password'],
  destroyOnUnmount: false,
  onSubmit: onSubmit,
  validate: validate
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])(config)(SigninFormContainer)));

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var SigninPageContainer = function (_Component) {
  _inherits(SigninPageContainer, _Component);

  function SigninPageContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SigninPageContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SigninPageContainer.__proto__ || Object.getPrototypeOf(SigninPageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      redirectToReferrer: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SigninPageContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.user !== null) {
        this.setState({ redirectToReferrer: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.user !== null) {
        this.setState({ redirectToReferrer: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _parse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_qs__["parse"])(this.props.location.search.substring(1)),
          refferer = _parse.refferer;

      var _ref2 = refferer && { from: { pathname: refferer } } || this.props.location.state || { from: { pathname: '/' } },
          from = _ref2.from;

      var redirectToReferrer = this.state.redirectToReferrer;


      if (redirectToReferrer) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], { exact: true, to: from });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components__["SigninPage"], null);
    }
  }], [{
    key: 'post',
    value: function post(_ref3) {
      var req = _ref3.req,
          store = _ref3.store;

      return new Promise(function (resolve, reject) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["authSigninRequest"])(req.body, resolve, reject));
      });
    }
  }]);

  return SigninPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: __WEBPACK_IMPORTED_MODULE_6_store_selectors__["fromAuth"].getUser(state, __WEBPACK_IMPORTED_MODULE_5_store_actions__["AUTH_USER_READ_REQUEST"])
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(SigninPageContainer));

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SnackbarContainer = function (_Component) {
  _inherits(SnackbarContainer, _Component);

  function SnackbarContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SnackbarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SnackbarContainer.__proto__ || Object.getPrototypeOf(SnackbarContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: true
    }, _this.handleRequestClose = function (event, reason) {
      if (reason !== 'clickaway') {
        _this.setState({ open: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SnackbarContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default.a, _extends({
        open: this.state.open,
        onRequestClose: this.handleRequestClose
      }, this.props));
    }
  }]);

  return SnackbarContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SnackbarContainer);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TableContainer = function (_Component) {
  _inherits(TableContainer, _Component);

  function TableContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableContainer.__proto__ || Object.getPrototypeOf(TableContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      order: 'asc',
      selected: []
    }, _this.handleSelectAllClick = function (event, checked) {
      if (checked) {
        _this.setState({ selected: _this.props.rows.map(function (n) {
            return n._id;
          }) });
        return;
      }
      _this.setState({ selected: [] });
    }, _this.handleRowClick = function (event, id) {
      var selected = _this.state.selected;

      var selectedIndex = selected.indexOf(id);
      var newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }

      _this.setState({ selected: newSelected });
    }, _this.isSelected = function (id) {
      return _this.state.selected.indexOf(id) !== -1;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // handleKeyDown = (event, id) => {
  //   if (keycode(event) === 'space') {
  //     this.handleRowClick(event, id)
  //   }
  // }

  _createClass(TableContainer, [{
    key: 'render',
    value: function render() {
      var selected = this.state.selected;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["Table"], _extends({
        handleRowClick: this.handleRowClick,
        handleSelectAllClick: this.handleSelectAllClick,
        isSelected: this.isSelected,
        numSelected: selected.length
      }, this.props));
    }
  }]);

  return TableContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TableContainer);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TableFooterMenuContainer = function (_Component) {
  _inherits(TableFooterMenuContainer, _Component);

  function TableFooterMenuContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableFooterMenuContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableFooterMenuContainer.__proto__ || Object.getPrototypeOf(TableFooterMenuContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false
    }, _this.handleRequestOpen = function (event) {
      return _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }, _this.handleRequestClose = function () {
      return _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableFooterMenuContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components__["TableFooterMenu"], _extends({
        anchorEl: this.state.anchorEl,
        handleRequestOpen: this.handleRequestOpen,
        handleRequestClose: this.handleRequestClose,
        open: this.state.open
      }, this.props));
    }
  }]);

  return TableFooterMenuContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TableFooterMenuContainer);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserForm__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var UserCreatePageContainer = function (_Component) {
  _inherits(UserCreatePageContainer, _Component);

  function UserCreatePageContainer() {
    _classCallCheck(this, UserCreatePageContainer);

    return _possibleConstructorReturn(this, (UserCreatePageContainer.__proto__ || Object.getPrototypeOf(UserCreatePageContainer)).apply(this, arguments));
  }

  _createClass(UserCreatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["UserCreatePage"], null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_3__UserForm__["config"], req.body))]);
    }
  }]);

  return UserCreatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserCreatePageContainer);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var UserListPageContainer = function (_Component) {
  _inherits(UserListPageContainer, _Component);

  function UserListPageContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserListPageContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserListPageContainer.__proto__ || Object.getPrototypeOf(UserListPageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: undefined
    }, _this.handleOpenDeleteDialog = function (rowIndex, event) {
      _this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }, _this.handleDeleteUser = function (id) {
      _this.handleRequestCloseDialog();
      _this.setState({
        selectedIndex: undefined
      });
      _this.props.deleteUserRequest(id);
      // .then((user) => {
      //   // console.log(user)
      // })
    }, _this.handleRequestCloseDialog = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserListPageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["UserListPage"], _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteUser: this.handleDeleteUser, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceListReadRequest"])('users', query));
    }
  }]);

  return UserListPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromEntities"].getList(state, 'users', __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getList(state, 'users')),
    count: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getCount(state, 'users')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteUserRequest: function deleteUserRequest(id) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceDeleteRequest"])('users', id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(UserListPageContainer));

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UserForm__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var UserUpdatePageContainer = function (_Component) {
  _inherits(UserUpdatePageContainer, _Component);

  function UserUpdatePageContainer() {
    _classCallCheck(this, UserUpdatePageContainer);

    return _possibleConstructorReturn(this, (UserUpdatePageContainer.__proto__ || Object.getPrototypeOf(UserUpdatePageContainer)).apply(this, arguments));
  }

  _createClass(UserUpdatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["UserUpdatePage"], { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_5__UserForm__["config"], req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["resourceDetailReadRequest"])('users', match.params.id));
    }
  }]);

  return UserUpdatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserUpdatePageContainer);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VendorForm__ = __webpack_require__(36);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var VendorCreatePageContainer = function (_Component) {
  _inherits(VendorCreatePageContainer, _Component);

  function VendorCreatePageContainer() {
    _classCallCheck(this, VendorCreatePageContainer);

    return _possibleConstructorReturn(this, (VendorCreatePageContainer.__proto__ || Object.getPrototypeOf(VendorCreatePageContainer)).apply(this, arguments));
  }

  _createClass(VendorCreatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components__["VendorCreatePage"], null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_1_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_3__VendorForm__["config"], req.body))]);
    }
  }]);

  return VendorCreatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VendorCreatePageContainer);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var VendorListPageContainer = function (_Component) {
  _inherits(VendorListPageContainer, _Component);

  function VendorListPageContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VendorListPageContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VendorListPageContainer.__proto__ || Object.getPrototypeOf(VendorListPageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false,
      selectedIndex: undefined
    }, _this.handleOpenDeleteDialog = function (rowIndex, event) {
      _this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }, _this.handleDeleteVendor = function (id) {
      _this.handleRequestCloseDialog();
      _this.props.deleteVendorRequest(id);
      // .then((vendor) => {
      //   // console.log(vendor)
      // })
    }, _this.handleRequestCloseDialog = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VendorListPageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["VendorListPage"], _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteVendor: this.handleDeleteVendor, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceListReadRequest"])('vendors', query));
    }
  }]);

  return VendorListPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromEntities"].getList(state, 'vendors', __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getList(state, 'vendors')),
    count: __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromResource"].getCount(state, 'vendors')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteVendorRequest: function deleteVendorRequest(id) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["resourceDeleteRequest"])('vendors', id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(VendorListPageContainer));

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VendorForm__ = __webpack_require__(36);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var VendorUpdatePageContainer = function (_Component) {
  _inherits(VendorUpdatePageContainer, _Component);

  function VendorUpdatePageContainer() {
    _classCallCheck(this, VendorUpdatePageContainer);

    return _possibleConstructorReturn(this, (VendorUpdatePageContainer.__proto__ || Object.getPrototypeOf(VendorUpdatePageContainer)).apply(this, arguments));
  }

  _createClass(VendorUpdatePageContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["VendorUpdatePage"], { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch(__WEBPACK_IMPORTED_MODULE_2_redux_form_submit___default()(__WEBPACK_IMPORTED_MODULE_5__VendorForm__["config"], req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["resourceDetailReadRequest"])('vendors', match.params.id));
    }
  }]);

  return VendorUpdatePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VendorUpdatePageContainer);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export checkStatus */
/* unused harmony export parseJSON */
/* unused harmony export parseSettings */
/* unused harmony export parseEndpoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = function parseJSON(response) {
  return response.json();
};

var parseSettings = function parseSettings() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$method = _ref.method,
      method = _ref$method === undefined ? 'get' : _ref$method,
      data = _ref.data,
      locale = _ref.locale,
      otherSettings = _objectWithoutProperties(_ref, ['method', 'data', 'locale']);

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale
  };
  var settings = __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};


var parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : __WEBPACK_IMPORTED_MODULE_3_config__["apiUrl"] + endpoint;
  var querystring = params ? '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_query_string__["stringify"])(params) : '';
  return '' + url + querystring;
};

var api = {};

api.request = function (endpoint) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var params = _ref2.params,
      settings = _objectWithoutProperties(_ref2, ['params']);

  return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus).then(parseJSON);
};['delete', 'get'].forEach(function (method) {
  api[method] = function (endpoint, settings) {
    return api.request(endpoint, _extends({ method: method }, settings));
  };
});['post', 'put', 'patch'].forEach(function (method) {
  api[method] = function (endpoint, data, settings) {
    return api.request(endpoint, _extends({ method: method, data: data }, settings));
  };
});

api.create = function () {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    settings: settings,

    setToken: function setToken(token) {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: 'Bearer ' + token
      });
    },
    unsetToken: function unsetToken() {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: undefined
      });
    },
    request: function request(endpoint, settings) {
      return api.request(endpoint, __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({}, this.settings, settings));
    },
    post: function post(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'post', data: data }, settings));
    },
    get: function get(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'get' }, settings));
    },
    put: function put(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'put', data: data }, settings));
    },
    patch: function patch(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'patch', data: data }, settings));
    },
    delete: function _delete(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'delete' }, settings));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(37);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["AUTH_SIGNIN_SUCCESS"]:
      return _extends({}, state, {
        user: payload.user,
        token: payload.token
      });

    case __WEBPACK_IMPORTED_MODULE_1__actions__["AUTH_USER_READ_SUCCESS"]:
      return _extends({}, state, {
        user: payload
      });

    default:
      return state;
  }
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["signinAuth"] = signinAuth;
/* harmony export (immutable) */ __webpack_exports__["readAuthUser"] = readAuthUser;
/* harmony export (immutable) */ __webpack_exports__["watchAuthSigninRequest"] = watchAuthSigninRequest;
/* harmony export (immutable) */ __webpack_exports__["watchAuthUserReadRequest"] = watchAuthUserReadRequest;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_cookie__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(37);
var _marked = [signinAuth, readAuthUser, watchAuthSigninRequest, watchAuthUserReadRequest, _callee].map(regeneratorRuntime.mark);



// import api from 'services/api'



function signinAuth(api, _ref, _ref2) {
  var data = _ref.data;
  var thunk = _ref2.thunk;
  var details, cookies;
  return regeneratorRuntime.wrap(function signinAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.post], '/auth/signin', data);

        case 3:
          details = _context.sent;


          if (__WEBPACK_IMPORTED_MODULE_2_config__["isBrowser"]) {
            cookies = new __WEBPACK_IMPORTED_MODULE_1_universal_cookie___default.a();

            cookies.set('token', details.token);
          }

          _context.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["authSigninSuccess"](details, { data: data }, thunk));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](0);
          _context.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["authSigninFailure"](_context.t0, { data: data }, thunk));

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 9]]);
}

function readAuthUser(api, payload, _ref3) {
  var thunk = _ref3.thunk;
  var user;
  return regeneratorRuntime.wrap(function readAuthUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.get], '/users/me');

        case 3:
          user = _context2.sent;
          _context2.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["authUserReadSuccess"](user, payload, thunk));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_3__actions__["authUserReadFailure"](_context2.t0, payload, thunk));

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 8]]);
}

function watchAuthSigninRequest(api) {
  var _ref4, payload, meta;

  return regeneratorRuntime.wrap(function watchAuthSigninRequest$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {
            _context3.next = 10;
            break;
          }

          _context3.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_3__actions__["AUTH_SIGNIN_REQUEST"]);

        case 3:
          _ref4 = _context3.sent;
          payload = _ref4.payload;
          meta = _ref4.meta;
          _context3.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(signinAuth, api, payload, meta);

        case 8:
          _context3.next = 0;
          break;

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function watchAuthUserReadRequest(api) {
  var _ref5, payload, meta;

  return regeneratorRuntime.wrap(function watchAuthUserReadRequest$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (false) {
            _context4.next = 10;
            break;
          }

          _context4.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_3__actions__["AUTH_USER_READ_REQUEST"]);

        case 3:
          _ref5 = _context4.sent;
          payload = _ref5.payload;
          meta = _ref5.meta;
          _context4.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(readAuthUser, api, payload, meta);

        case 8:
          _context4.next = 0;
          break;

        case 10:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function _callee(_ref6) {
  var api = _ref6.api;
  return regeneratorRuntime.wrap(function _callee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchAuthSigninRequest, api);

        case 2:
          _context5.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchAuthUserReadRequest, api);

        case 4:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middlewares__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middlewares___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__middlewares__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sagas__ = __webpack_require__(162);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }









var devtools = __WEBPACK_IMPORTED_MODULE_3_config__["isDev"] && __WEBPACK_IMPORTED_MODULE_3_config__["isBrowser"] && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var history = arguments[2];

  var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_1_redux_saga___default()();

  var enhancers = [__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_4__middlewares___default.a).concat([sagaMiddleware, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)])), devtools()];

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_5__reducer__["a" /* default */], initialState, __WEBPACK_IMPORTED_MODULE_0_redux__["compose"].apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_6__sagas__["a" /* default */], services);

  if (false) {
    module.hot.accept('./reducer', function () {
      var nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', function () {
      var nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(function () {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(46);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["SET_DEVICE"]:
      return _extends({}, state, {
        device: action.device
      });
    default:
      return state;
  }
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schemas__ = __webpack_require__(48);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var middleware = function middleware(store) {
  return function (next) {
    return function (action) {
      var payload = action.payload,
          meta = action.meta;


      if (meta && meta.entities) {
        var schema = __WEBPACK_IMPORTED_MODULE_3__schemas__[meta.entities];

        if (schema) {
          var _normalize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_normalizr__["normalize"])(payload, Array.isArray(payload) ? [schema] : schema),
              result = _normalize.result,
              entities = _normalize.entities;

          store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["entitiesReceive"])(entities));
          return next(_extends({}, action, { payload: result }));
        }
        // istanbul ignore next
        if (__WEBPACK_IMPORTED_MODULE_1_config__["env"] === 'development') {
          // eslint-disable-next-line no-console
          console.warn('[entities] There is no ' + meta.entities + ' schema on ' + __dirname + '/schemas.js');
        }
      }
      return next(action);
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (middleware);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(38);
// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  if (type === __WEBPACK_IMPORTED_MODULE_2__actions__["ENTITIES_RECEIVE"]) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_mergeWith___default()({}, state, payload, function (objValue, srcValue) {
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return undefined;
    });
  }
  return state;
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(50);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__selectors__["initialState"];
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__actions__["FORM_SET_CSRF_TOKEN"]:
      return _extends({}, state, {
        csrfToken: action.token
      });
    default:
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_form__["reducer"])(state, action);
  }
});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["track"] = track;
/* harmony export (immutable) */ __webpack_exports__["startGTM"] = startGTM;
/* harmony export (immutable) */ __webpack_exports__["watchAllActions"] = watchAllActions;
/* harmony export (immutable) */ __webpack_exports__["watchGTMStart"] = watchGTMStart;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_load_script__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(52);
var _marked = [track, startGTM, watchAllActions, watchGTMStart, _callee].map(regeneratorRuntime.mark);





function track(type) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      gtm = _ref.gtm;

  var payload;
  return regeneratorRuntime.wrap(function track$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = { event: type, label: gtm };
          _context.prev = 1;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(payload);
          _context.next = 6;
          return payload;

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](1);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["gtmFailure"](_context.t0, payload));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 8]]);
}

function startGTM(_ref2) {
  var gtmId = _ref2.gtmId;
  return regeneratorRuntime.wrap(function startGTM$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          // istanbul ignore next
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'gtm.js',
            'gtm.start': new Date().getTime()
          });
          _context2.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//www.googletagmanager.com/gtm.js?id=' + gtmId);

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["gtmFailure"](_context2.t0, { gtmId: gtmId }));

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 7]]);
}

function watchAllActions() {
  var _ref3, type, meta;

  return regeneratorRuntime.wrap(function watchAllActions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (false) {
            _context3.next = 10;
            break;
          }

          _context3.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])('*');

        case 3:
          _ref3 = _context3.sent;
          type = _ref3.type;
          meta = _ref3.meta;
          _context3.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(track, type, meta);

        case 8:
          _context3.next = 0;
          break;

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function watchGTMStart() {
  var _ref4, payload;

  return regeneratorRuntime.wrap(function watchGTMStart$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__actions__["GTM_START"]);

        case 2:
          _ref4 = _context4.sent;
          payload = _ref4.payload;
          _context4.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(startGTM, payload), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(watchAllActions)]);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchGTMStart);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(66),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(170);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(53);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === undefined ? {} : _ref$payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["MODAL_SHOW"]:
      return _extends({}, state, _defineProperty({}, payload.name, true));
    case __WEBPACK_IMPORTED_MODULE_1__actions__["MODAL_HIDE"]:
      if (payload.name) {
        return _extends({}, state, _defineProperty({}, payload.name, false));
      }
      return __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
    default:
      return state;
  }
});

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(39);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (!action || !action.type) return domain;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["NOTIFICATION_SEND"]:
      return [action.payload].concat(_toConsumableArray(domain.filter(function (_ref) {
        var id = _ref.id;
        return id !== action.payload.id;
      })));
    case __WEBPACK_IMPORTED_MODULE_0__actions__["NOTIFICATION_DISMISS"]:
      return domain.filter(function (notification) {
        return notification.id !== action.payload;
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions__["NOTIFICATION_CLEAR"]:
      return [];
    default:
      return domain;
  }
});

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["notificationSend"] = notificationSend;
/* harmony export (immutable) */ __webpack_exports__["watchNotificationSend"] = watchNotificationSend;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(39);
var _marked = [notificationSend, watchNotificationSend, _callee].map(regeneratorRuntime.mark);





function notificationSend(payload) {
  return regeneratorRuntime.wrap(function notificationSend$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(payload.options && payload.options.autoHideDuration)) {
            _context.next = 3;
            break;
          }

          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga__["delay"])(payload.options.autoHideDuration + 420);

        case 3:
          _context.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["notificationDismiss"](payload.id));

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function watchNotificationSend() {
  var _ref, payload;

  return regeneratorRuntime.wrap(function watchNotificationSend$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {
            _context2.next = 9;
            break;
          }

          _context2.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_2__actions__["NOTIFICATION_SEND"]);

        case 3:
          _ref = _context2.sent;
          payload = _ref.payload;
          _context2.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(notificationSend, payload);

        case 7:
          _context2.next = 0;
          break;

        case 9:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchNotificationSend);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpen", function() { return isOpen; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = {};

var isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__);





var reducers = {
  form: __WEBPACK_IMPORTED_MODULE_2_redux_form__["reducer"],
  thunk: __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__["reducer"]
};

var req = __webpack_require__(171);

req.keys().forEach(function (key) {
  var storeName = __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default()(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(reducers));

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_findIndex__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(40);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource





var updateOrDeleteReducer = function updateOrDeleteReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  var resource = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(meta, 'resource');
  var needle = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(meta, 'request.needle');
  var needleIsObject = (typeof needle === 'undefined' ? 'undefined' : _typeof(needle)) === 'object';
  var list = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getList"])(state, resource);
  var index = needleIsObject ? __WEBPACK_IMPORTED_MODULE_0_lodash_findIndex___default()(list, needle) : list.indexOf(needle);

  if (index < 0) {
    return state;
  }

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_UPDATE_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), [needleIsObject ? _extends({}, list[index], payload) : payload], _toConsumableArray(list.slice(index + 1)))
      })));
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DELETE_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(list.slice(index + 1))),
        count: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getCount"])(__WEBPACK_IMPORTED_MODULE_2__selectors__["initialState"], resource) - 1
      })));
    // istanbul ignore next
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_2__selectors__["initialState"];
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload,
      meta = _ref2.meta;

  var resource = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(meta, 'resource');

  if (!resource) {
    return state;
  }

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_CREATE_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: [payload].concat(_toConsumableArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getList"])(state, resource))),
        count: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getCount"])(__WEBPACK_IMPORTED_MODULE_2__selectors__["initialState"], resource) + 1
      })));

    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_LIST_READ_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        list: payload,
        count: __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(meta, 'count')
      })));

    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DETAIL_READ_REQUEST"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        detail: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getDetail"])(__WEBPACK_IMPORTED_MODULE_2__selectors__["initialState"], resource)
      })));
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DETAIL_READ_SUCCESS"]:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__selectors__["getResourceState"])(state, resource), {
        detail: payload
      })));

    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_UPDATE_SUCCESS"]:
    case __WEBPACK_IMPORTED_MODULE_3__actions__["RESOURCE_DELETE_SUCCESS"]:
      return updateOrDeleteReducer(state, { type: type, payload: payload, meta: meta });

    default:
      return state;
  }
});

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createResource"] = createResource;
/* harmony export (immutable) */ __webpack_exports__["readResourceList"] = readResourceList;
/* harmony export (immutable) */ __webpack_exports__["readResourceDetail"] = readResourceDetail;
/* harmony export (immutable) */ __webpack_exports__["updateResource"] = updateResource;
/* harmony export (immutable) */ __webpack_exports__["deleteResource"] = deleteResource;
/* harmony export (immutable) */ __webpack_exports__["watchResourceCreateRequest"] = watchResourceCreateRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceListReadRequest"] = watchResourceListReadRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceDetailReadRequest"] = watchResourceDetailReadRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceUpdateRequest"] = watchResourceUpdateRequest;
/* harmony export (immutable) */ __webpack_exports__["watchResourceDeleteRequest"] = watchResourceDeleteRequest;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(40);
var _marked = [createResource, readResourceList, readResourceDetail, updateResource, deleteResource, watchResourceCreateRequest, watchResourceListReadRequest, watchResourceDetailReadRequest, watchResourceUpdateRequest, watchResourceDeleteRequest, _callee].map(regeneratorRuntime.mark);

// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource



function createResource(api, _ref, _ref2) {
  var data = _ref.data;
  var resource = _ref2.resource,
      thunk = _ref2.thunk;
  var detail;
  return regeneratorRuntime.wrap(function createResource$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.post], '/' + resource, data);

        case 3:
          detail = _context.sent;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceCreateSuccess"](resource, detail, { data: data }, thunk));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceCreateFailure"](resource, _context.t0, { data: data }, thunk));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 8]]);
}

function readResourceList(api, _ref3, _ref4) {
  var params = _ref3.params;
  var resource = _ref4.resource,
      thunk = _ref4.thunk;

  var _ref5, list, count;

  return regeneratorRuntime.wrap(function readResourceList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.get], '/' + resource, { params: params });

        case 3:
          _ref5 = _context2.sent;
          list = _ref5.items;
          count = _ref5.count;
          _context2.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceListReadSuccess"](resource, { list: list, count: count }, { params: params }, thunk));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceListReadFailure"](resource, _context2.t0, { params: params }, thunk));

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 10]]);
}

function readResourceDetail(api, _ref6, _ref7) {
  var needle = _ref6.needle;
  var resource = _ref7.resource,
      thunk = _ref7.thunk;
  var detail;
  return regeneratorRuntime.wrap(function readResourceDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.get], '/' + resource + '/' + needle);

        case 3:
          detail = _context3.sent;
          _context3.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDetailReadSuccess"](resource, detail, { needle: needle }, thunk));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDetailReadFailure"](resource, _context3.t0, { needle: needle }, thunk));

        case 12:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 8]]);
}

function updateResource(api, _ref8, _ref9) {
  var needle = _ref8.needle,
      data = _ref8.data;
  var resource = _ref9.resource,
      thunk = _ref9.thunk;
  var detail;
  return regeneratorRuntime.wrap(function updateResource$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.put], '/' + resource + '/' + needle, data);

        case 3:
          detail = _context4.sent;
          _context4.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceUpdateSuccess"](resource, detail, { needle: needle, data: data }, thunk));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceUpdateFailure"](resource, _context4.t0, { needle: needle, data: data }, thunk));

        case 12:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[0, 8]]);
}

function deleteResource(api, _ref10, _ref11) {
  var needle = _ref10.needle;
  var resource = _ref11.resource,
      thunk = _ref11.thunk;
  return regeneratorRuntime.wrap(function deleteResource$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])([api, api.delete], '/' + resource + '/' + needle);

        case 3:
          _context5.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDeleteSuccess"](resource, { needle: needle }, thunk));

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_1__actions__["resourceDeleteFailure"](resource, _context5.t0, { needle: needle }, thunk));

        case 11:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[0, 7]]);
}

function watchResourceCreateRequest(api) {
  var _ref12, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceCreateRequest$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (false) {
            _context6.next = 10;
            break;
          }

          _context6.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_CREATE_REQUEST"]);

        case 3:
          _ref12 = _context6.sent;
          payload = _ref12.payload;
          meta = _ref12.meta;
          _context6.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(createResource, api, payload, meta);

        case 8:
          _context6.next = 0;
          break;

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function watchResourceListReadRequest(api) {
  var _ref13, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceListReadRequest$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (false) {
            _context7.next = 10;
            break;
          }

          _context7.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_LIST_READ_REQUEST"]);

        case 3:
          _ref13 = _context7.sent;
          payload = _ref13.payload;
          meta = _ref13.meta;
          _context7.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(readResourceList, api, payload, meta);

        case 8:
          _context7.next = 0;
          break;

        case 10:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

function watchResourceDetailReadRequest(api) {
  var _ref14, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceDetailReadRequest$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (false) {
            _context8.next = 10;
            break;
          }

          _context8.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_DETAIL_READ_REQUEST"]);

        case 3:
          _ref14 = _context8.sent;
          payload = _ref14.payload;
          meta = _ref14.meta;
          _context8.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(readResourceDetail, api, payload, meta);

        case 8:
          _context8.next = 0;
          break;

        case 10:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

function watchResourceUpdateRequest(api) {
  var _ref15, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceUpdateRequest$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (false) {
            _context9.next = 10;
            break;
          }

          _context9.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_UPDATE_REQUEST"]);

        case 3:
          _ref15 = _context9.sent;
          payload = _ref15.payload;
          meta = _ref15.meta;
          _context9.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(updateResource, api, payload, meta);

        case 8:
          _context9.next = 0;
          break;

        case 10:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[8], this);
}

function watchResourceDeleteRequest(api) {
  var _ref16, payload, meta;

  return regeneratorRuntime.wrap(function watchResourceDeleteRequest$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          if (false) {
            _context10.next = 10;
            break;
          }

          _context10.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["take"])(__WEBPACK_IMPORTED_MODULE_1__actions__["RESOURCE_DELETE_REQUEST"]);

        case 3:
          _ref16 = _context10.sent;
          payload = _ref16.payload;
          meta = _ref16.meta;
          _context10.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(deleteResource, api, payload, meta);

        case 8:
          _context10.next = 0;
          break;

        case 10:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked[9], this);
}

function _callee(_ref17) {
  var api = _ref17.api;
  return regeneratorRuntime.wrap(function _callee$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceCreateRequest, api);

        case 2:
          _context11.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceListReadRequest, api);

        case 4:
          _context11.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceDetailReadRequest, api);

        case 6:
          _context11.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceUpdateRequest, api);

        case 8:
          _context11.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(watchResourceDeleteRequest, api);

        case 10:
        case 'end':
          return _context11.stop();
      }
    }
  }, _marked[10], this);
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
var _marked = [_callee].map(regeneratorRuntime.mark);



var req = __webpack_require__(172);

var sagas = req.keys().map(function (key) {
  return req(key).default;
});

function _callee() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])(sagas.map(function (saga) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(41);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["SOCIAL_LOGIN_SUCCESS"]:
      return _extends({}, state, {
        user: payload
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions__["SOCIAL_LOGOUT"]:
      return _extends({}, state, {
        user: __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"].user
      });
    default:
      return state;
  }
});

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promises", function() { return promises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFbRoot", function() { return appendFbRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceAction", function() { return serviceAction; });
/* harmony export (immutable) */ __webpack_exports__["loginFacebook"] = loginFacebook;
/* harmony export (immutable) */ __webpack_exports__["prepareFacebook"] = prepareFacebook;
/* harmony export (immutable) */ __webpack_exports__["watchSocialLoginFacebook"] = watchSocialLoginFacebook;
/* harmony export (immutable) */ __webpack_exports__["loginGoogle"] = loginGoogle;
/* harmony export (immutable) */ __webpack_exports__["prepareGoogle"] = prepareGoogle;
/* harmony export (immutable) */ __webpack_exports__["watchSocialLoginGoogle"] = watchSocialLoginGoogle;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_load_script__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(41);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _marked = [loginFacebook, prepareFacebook, watchSocialLoginFacebook, loginGoogle, prepareGoogle, watchSocialLoginGoogle, _callee].map(regeneratorRuntime.mark);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social




var promises = {
  fbLogin: function fbLogin(options) {
    return new Promise(function (resolve, reject) {
      window.FB.login(function (response) {
        // istanbul ignore else
        if (response.authResponse) {
          resolve(response.authResponse);
        } else {
          reject(response.status);
        }
      }, options);
    });
  },
  fbGetMe: function fbGetMe(options) {
    return new Promise(function (resolve) {
      window.FB.api('/me', options, function (me) {
        return resolve(me);
      });
    });
  },
  loadGoogleAuth2: function loadGoogleAuth2() {
    return new Promise(function (resolve) {
      window.gapi.load('auth2', resolve);
    });
  }
};

var appendFbRoot = function appendFbRoot() {
  var fbRoot = document.createElement('div');
  fbRoot.id = 'fb-root';
  document.body.appendChild(fbRoot);
};

var serviceAction = function serviceAction(suffix, service) {
  return function (_ref) {
    var type = _ref.type,
        payload = _ref.payload;
    return type === 'SOCIAL_LOGIN_' + suffix && payload && payload.service === service;
  };
};

function loginFacebook() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2$scope = _ref2.scope,
      scope = _ref2$scope === undefined ? 'public_profile' : _ref2$scope,
      _ref2$fields = _ref2.fields,
      fields = _ref2$fields === undefined ? 'id,name' : _ref2$fields,
      options = _objectWithoutProperties(_ref2, ['scope', 'fields']);

  var request, data, picture;
  return regeneratorRuntime.wrap(function loginFacebook$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          request = _extends({ service: 'facebook', scope: scope, fields: fields }, options);
          _context.prev = 1;
          _context.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.fbLogin, _extends({ scope: scope }, options));

        case 4:
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.fbGetMe, { fields: fields });

        case 6:
          data = _context.sent;
          picture = 'https://graph.facebook.com/' + data.id + '/picture?type=normal';
          _context.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginSuccess"](_extends({}, data, { picture: picture }), request));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](1);
          _context.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context.t0, request));

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 12]]);
}

function prepareFacebook(_ref3) {
  var clientId = _ref3.clientId,
      _ref3$version = _ref3.version,
      version = _ref3$version === undefined ? 'v2.8' : _ref3$version,
      options = _objectWithoutProperties(_ref3, ['clientId', 'version']);

  var request;
  return regeneratorRuntime.wrap(function prepareFacebook$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          request = _extends({ service: 'facebook', clientId: clientId, version: version }, options);
          _context2.prev = 1;
          _context2.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(appendFbRoot);

        case 4:
          _context2.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//connect.facebook.net/en_US/sdk.js');

        case 6:
          _context2.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([window.FB, window.FB.init], _extends({ appId: clientId, version: version }, options));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](1);
          _context2.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context2.t0, request));

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[1, 10]]);
}

function watchSocialLoginFacebook() {
  var _ref4, payload, _ref5, _payload;

  return regeneratorRuntime.wrap(function watchSocialLoginFacebook$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('PREPARE', 'facebook'));

        case 2:
          _ref4 = _context3.sent;
          payload = _ref4.payload;
          _context3.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(prepareFacebook, payload);

        case 6:
          if (false) {
            _context3.next = 15;
            break;
          }

          _context3.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('REQUEST', 'facebook'));

        case 9:
          _ref5 = _context3.sent;
          _payload = _ref5.payload;
          _context3.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(loginFacebook, _payload);

        case 13:
          _context3.next = 6;
          break;

        case 15:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function loginGoogle() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6$scope = _ref6.scope,
      scope = _ref6$scope === undefined ? 'profile' : _ref6$scope,
      options = _objectWithoutProperties(_ref6, ['scope']);

  var request, auth2, user, profile, name, picture;
  return regeneratorRuntime.wrap(function loginGoogle$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          request = _extends({ service: 'google', scope: scope }, options);
          _context4.prev = 1;
          _context4.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(window.gapi.auth2.getAuthInstance);

        case 4:
          auth2 = _context4.sent;
          _context4.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([auth2, auth2.signIn], _extends({ scope: scope }, options));

        case 7:
          user = _context4.sent;
          _context4.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([user, user.getBasicProfile]);

        case 10:
          profile = _context4.sent;
          _context4.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([profile, profile.getName]);

        case 13:
          name = _context4.sent;
          _context4.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([profile, profile.getImageUrl]);

        case 16:
          picture = _context4.sent;
          _context4.next = 19;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginSuccess"]({ name: name, picture: picture }, request));

        case 19:
          _context4.next = 25;
          break;

        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4['catch'](1);
          _context4.next = 25;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context4.t0, request));

        case 25:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[1, 21]]);
}

function prepareGoogle(_ref7) {
  var clientId = _ref7.clientId,
      options = _objectWithoutProperties(_ref7, ['clientId']);

  var request;
  return regeneratorRuntime.wrap(function prepareGoogle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          request = _extends({ service: 'google', clientId: clientId }, options);
          _context5.prev = 1;
          _context5.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//apis.google.com/js/platform.js');

        case 4:
          _context5.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.loadGoogleAuth2);

        case 6:
          _context5.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(window.gapi.auth2.init, _extends({ client_id: clientId }, options));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](1);
          _context5.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context5.t0, request));

        case 14:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[1, 10]]);
}

function watchSocialLoginGoogle() {
  var _ref8, payload, _ref9, _payload2;

  return regeneratorRuntime.wrap(function watchSocialLoginGoogle$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('PREPARE', 'google'));

        case 2:
          _ref8 = _context6.sent;
          payload = _ref8.payload;
          _context6.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(prepareGoogle, payload);

        case 6:
          if (false) {
            _context6.next = 15;
            break;
          }

          _context6.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('REQUEST', 'google'));

        case 9:
          _ref9 = _context6.sent;
          _payload2 = _ref9.payload;
          _context6.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(loginGoogle, _payload2);

        case 13:
          _context6.next = 6;
          break;

        case 15:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchSocialLoginFacebook);

        case 2:
          _context7.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchSocialLoginGoogle);

        case 4:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(57);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var action = arguments[1];

  if (!action.type) return state;

  var _ref = action.type.match(/^(.+)_([^_]+)$/) || [],
      _ref2 = _slicedToArray(_ref, 3),
      prefix = _ref2[1],
      suffix = _ref2[2];

  switch (suffix) {
    case 'REQUEST':
      return {
        loading: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__selectors__["getLoadingState"])(state), _defineProperty({}, prefix, true)),
        error: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__selectors__["getErrorState"])(state), _defineProperty({}, prefix, false))
      };
    case 'SUCCESS':
      return {
        loading: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__selectors__["getLoadingState"])(state), _defineProperty({}, prefix, false)),
        error: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__selectors__["getErrorState"])(state), _defineProperty({}, prefix, false))
      };
    case 'FAILURE':
      return {
        loading: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__selectors__["getLoadingState"])(state), _defineProperty({}, prefix, false)),
        error: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__selectors__["getErrorState"])(state), _defineProperty({}, prefix, true))
      };
    default:
      return state;
  }
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesRequest", function() { return matchesRequest; });
/* harmony export (immutable) */ __webpack_exports__["resolveOrReject"] = resolveOrReject;
/* harmony export (immutable) */ __webpack_exports__["watchRequestActions"] = watchRequestActions;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_omit__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
var _marked = [resolveOrReject, watchRequestActions, _callee].map(regeneratorRuntime.mark);




var requestPattern = /_REQUEST$/;
var successSuffix = '_SUCCESS';
var failureSuffix = '_FAILURE';

var matchesRequest = function matchesRequest(_ref) {
  var type = _ref.type,
      resolve = _ref.resolve,
      reject = _ref.reject;

  if (typeof resolve !== 'function' && typeof reject !== 'function') {
    return false;
  }
  return requestPattern.test(type);
};

function resolveOrReject(_ref2) {
  var type = _ref2.type,
      resolve = _ref2.resolve,
      reject = _ref2.reject;

  var prefix, _ref3, success, failure;

  return regeneratorRuntime.wrap(function resolveOrReject$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          prefix = type.replace(requestPattern, '');
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["race"])({
            success: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(prefix + successSuffix),
            failure: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(prefix + failureSuffix)
          });

        case 3:
          _ref3 = _context.sent;
          success = _ref3.success;
          failure = _ref3.failure;

          if (!(success && typeof resolve === 'function')) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(resolve, __WEBPACK_IMPORTED_MODULE_0_lodash_omit___default()(success, 'type'));

        case 9:
          _context.next = 14;
          break;

        case 11:
          if (!(failure && typeof reject === 'function')) {
            _context.next = 14;
            break;
          }

          _context.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(reject, __WEBPACK_IMPORTED_MODULE_0_lodash_omit___default()(failure, 'type'));

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function watchRequestActions() {
  return regeneratorRuntime.wrap(function watchRequestActions$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeEvery"])(matchesRequest, resolveOrReject);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchRequestActions);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common/ConfirmationDialog/index.js": 74,
	"./common/Notifications/index.js": 75,
	"./common/SearchWidget/index.js": 76,
	"./common/TableRowCategoryName/index.js": 77,
	"./editor/AlignStyleControls/index.js": 78,
	"./editor/BlockStyleControls/index.js": 79,
	"./editor/BlockStyleMenuControls/index.js": 80,
	"./editor/DraftRichEditor/index.js": 81,
	"./editor/InlineStyleControls/index.js": 82,
	"./editor/StyleMenuItem/index.js": 83,
	"./editor/ToggleButton/index.js": 84,
	"./forms/CategoryForm/index.js": 85,
	"./forms/Field/index.js": 86,
	"./forms/ProductForm/index.js": 87,
	"./forms/ReduxField/index.js": 88,
	"./forms/ShopForm/index.js": 89,
	"./forms/SigninForm/index.js": 90,
	"./forms/TextField/index.js": 91,
	"./forms/UserForm/index.js": 92,
	"./forms/VendorForm/index.js": 93,
	"./layout/AppContent/index.js": 94,
	"./layout/AppDrawer/index.js": 95,
	"./layout/AppFrame/index.js": 96,
	"./pages/CategoryCreatePage/index.js": 97,
	"./pages/CategoryListPage/index.js": 98,
	"./pages/CategoryUpdatePage/index.js": 99,
	"./pages/HomePage/index.js": 100,
	"./pages/ProductCreatePage/index.js": 101,
	"./pages/ProductListPage/index.js": 102,
	"./pages/ProductUpdatePage/index.js": 103,
	"./pages/ShopCreatePage/index.js": 104,
	"./pages/ShopListPage/index.js": 105,
	"./pages/ShopUpdatePage/index.js": 106,
	"./pages/SigninPage/index.js": 107,
	"./pages/UserCreatePage/index.js": 108,
	"./pages/UserListPage/index.js": 109,
	"./pages/UserUpdatePage/index.js": 110,
	"./pages/VendorCreatePage/index.js": 111,
	"./pages/VendorListPage/index.js": 112,
	"./pages/VendorUpdatePage/index.js": 113,
	"./table/Table/index.js": 120,
	"./table/TableBody/index.js": 114,
	"./table/TableColumn/index.js": 115,
	"./table/TableFooter/index.js": 117,
	"./table/TableFooterMenu/index.js": 116,
	"./table/TableHead/index.js": 118,
	"./table/TableToolbar/index.js": 119,
	"./templates/PageTemplate/index.js": 121
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 167;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppDrawer.js": 122,
	"./AppFrame.js": 123,
	"./CategoryCreatePage.js": 124,
	"./CategoryForm.js": 32,
	"./CategoryListPage.js": 125,
	"./CategoryUpdatePage.js": 126,
	"./ConfirmationDialog.js": 127,
	"./ProductCreatePage.js": 128,
	"./ProductForm.js": 33,
	"./ProductListPage.js": 129,
	"./ProductUpdatePage.js": 130,
	"./ShopCreatePage.js": 131,
	"./ShopForm.js": 34,
	"./ShopListPage.js": 132,
	"./ShopUpdatePage.js": 133,
	"./SigninForm.js": 134,
	"./SigninPage.js": 135,
	"./Snackbar.js": 136,
	"./Table.js": 137,
	"./TableFooterMenu.js": 138,
	"./UserCreatePage.js": 139,
	"./UserForm.js": 35,
	"./UserListPage.js": 140,
	"./UserUpdatePage.js": 141,
	"./VendorCreatePage.js": 142,
	"./VendorForm.js": 36,
	"./VendorListPage.js": 143,
	"./VendorUpdatePage.js": 144
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 168;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/actions.js": 37,
	"./device/actions.js": 46,
	"./entities/actions.js": 38,
	"./form/actions.js": 50,
	"./gtm/actions.js": 52,
	"./modal/actions.js": 53,
	"./notifications/actions.js": 39,
	"./resource/actions.js": 40,
	"./social/actions.js": 41
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 169;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/middleware.js": 150
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 170;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/reducer.js": 146,
	"./device/reducer.js": 149,
	"./entities/reducer.js": 151,
	"./form/reducer.js": 152,
	"./modal/reducer.js": 155,
	"./notifications/reducer.js": 156,
	"./resource/reducer.js": 160,
	"./social/reducer.js": 163,
	"./status/reducer.js": 165
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 171;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/sagas.js": 147,
	"./gtm/sagas.js": 153,
	"./notifications/sagas.js": 157,
	"./resource/sagas.js": 161,
	"./social/sagas.js": 164,
	"./status/sagas.js": 166
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 172;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/selectors.js": 45,
	"./device/selectors.js": 47,
	"./entities/selectors.js": 49,
	"./form/selectors.js": 51,
	"./modal/selectors.js": 54,
	"./notifications/selectors.js": 158,
	"./resource/selectors.js": 55,
	"./social/selectors.js": 56,
	"./status/selectors.js": 57
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 173;

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = require("append-query");

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/util/inDOM");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("draftjs-utils");

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("express-device");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("express-force-ssl");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = require("lodash/assign");

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = require("lodash/mergeWith");

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ArrowDropUp");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Close");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Dashboard");

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Folder");

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignCenter");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignJustify");

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignLeft");

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignRight");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatBold");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatItalic");

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatListBulleted");

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatListNumbered");

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatUnderlined");

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/InsertDriveFile");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/KeyboardArrowLeft");

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/KeyboardArrowRight");

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/LibraryAdd");

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/LocalMall");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Menu");

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/People");

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Search");

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Settings");

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Stars");

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Store");

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Form/FormControl");

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input/Input");

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu/Menu");

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Progress/LinearProgress");

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/pink");

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/palette");

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/theme");

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/transitions");

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = require("material-ui/utils/withWidth");

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/NavLink");

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group/CSSTransitionGroup");

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = require("recompose/shallowEqual");

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isIn");

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isInt");

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isURL");

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ })
/******/ ]);