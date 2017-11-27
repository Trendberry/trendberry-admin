require("source-map-support").install();
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
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 259);
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

"use strict";


// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(169);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/index.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var req = __webpack_require__(171);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/actions.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var req = __webpack_require__(170);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/index.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Selectors
var upperFirst = __webpack_require__(202);

var req = __webpack_require__(175);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/selectors.js');
}();

;

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

module.exports = require("react-router-redux");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidator = exports.match = exports.oneOf = exports.integer = exports.maxLength = exports.minLength = exports.required = exports.url = exports.email = undefined;

var _isEmail = __webpack_require__(255);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isInt = __webpack_require__(257);

var _isInt2 = _interopRequireDefault(_isInt);

var _isIn = __webpack_require__(256);

var _isIn2 = _interopRequireDefault(_isIn);

var _isURL = __webpack_require__(258);

var _isURL2 = _interopRequireDefault(_isURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var email = exports.email = function email(value) {
  return !isEmpty(value) && !(0, _isEmail2.default)(value) && 'Invalid email address';
};

var url = exports.url = function url(value) {
  return !isEmpty(value) && !(0, _isURL2.default)(value) && 'Invalid URL';
};

var required = exports.required = function required(value) {
  return isEmpty(value) && 'Required field';
};

var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return !isEmpty(value) && value.length < min && 'Must be at least ' + min + ' characters';
  };
};

var maxLength = exports.maxLength = function maxLength(max) {
  return function (value) {
    return !isEmpty(value) && value.length > max && 'Must be no more than ' + max + ' characters';
  };
};

var integer = exports.integer = function integer(value) {
  return !(0, _isInt2.default)(value) && 'Must be an integer';
};

var oneOf = exports.oneOf = function oneOf(values) {
  return function (value) {
    return !(0, _isIn2.default)(value, values) && 'Must be one of: ' + values.join(', ');
  };
};

var match = exports.match = function match(field) {
  return function (value, data) {
    return data && value !== data[field] && 'Must match';
  };
};

var createValidator = exports.createValidator = function createValidator(rules) {
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isEmpty, 'isEmpty', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(join, 'join', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(email, 'email', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(url, 'url', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(required, 'required', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(minLength, 'minLength', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(maxLength, 'maxLength', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(integer, 'integer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(match, 'match', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(createValidator, 'createValidator', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/validation/index.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(57);

var config = {
  all: {
    env: "development" || 'development',
    isDev: "development" !== 'production',
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/config.js');
}();

;

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reduxForm = __webpack_require__(9);

var _reactRouterRedux = __webpack_require__(17);

var _actions = __webpack_require__(4);

var _selectors = __webpack_require__(7);

var _validation = __webpack_require__(19);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryFormContainer = function CategoryFormContainer(props) {
  return _react2.default.createElement(_components.CategoryForm, props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch((0, _actions.resourceUpdateRequest)('categories', values._id, values)).then(function () {
      dispatch((0, _actions.notificationSend)({
        message: 'Category updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch((0, _actions.resourceCreateRequest)('categories', values)).then(function (id) {
    dispatch((0, _reactRouterRedux.push)('/categories/' + id));
  });
};

var validate = (0, _validation.createValidator)({
  name: [_validation.required]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, _selectors.fromEntities.getDetail(state, 'categories', id), {
      _csrf: _selectors.fromForm.getCsrfToken(state)
    })
  };
};

var config = exports.config = {
  fields: ['name', 'description', 'slug', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)(config)(CategoryFormContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CategoryFormContainer, 'CategoryFormContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryForm.js');

  __REACT_HOT_LOADER__.register(config, 'config', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryForm.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reduxForm = __webpack_require__(9);

var _reactRouterRedux = __webpack_require__(17);

var _actions = __webpack_require__(4);

var _selectors = __webpack_require__(7);

var _validation = __webpack_require__(19);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductFormContainer = function ProductFormContainer(props) {
  return _react2.default.createElement(_components.ProductForm, props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch((0, _actions.resourceUpdateRequest)('products', values._id, values)).then(function () {
      dispatch((0, _actions.notificationSend)({
        message: 'Product updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch((0, _actions.resourceCreateRequest)('products', values)).then(function (id) {
    dispatch((0, _reactRouterRedux.push)('/products/' + id));
  });
};

var validate = (0, _validation.createValidator)({
  name: [_validation.required]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, _selectors.fromEntities.getDetail(state, 'products', id), {
      _csrf: _selectors.fromForm.getCsrfToken(state)
    })
  };
};

var config = exports.config = {
  fields: ['name', 'description', 'slug', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)(config)(ProductFormContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductFormContainer, 'ProductFormContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductForm.js');

  __REACT_HOT_LOADER__.register(config, 'config', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductForm.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reduxForm = __webpack_require__(9);

var _actions = __webpack_require__(4);

var _selectors = __webpack_require__(7);

var _validation = __webpack_require__(19);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShopFormContainer = function ShopFormContainer(props) {
  return _react2.default.createElement(_components.ShopForm, props);
};

var onSubmit = function onSubmit(data, dispatch) {
  if (data._id) {
    return dispatch((0, _actions.resourceUpdateRequest)('shops', data._id, data));
  }
  return dispatch((0, _actions.resourceCreateRequest)('shops', data));
};

var validate = (0, _validation.createValidator)({
  name: [_validation.required]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, _selectors.fromEntities.getDetail(state, 'shops', id), {
      _csrf: _selectors.fromForm.getCsrfToken(state)
    })
  };
};

var config = exports.config = {
  form: 'ShopForm',
  fields: ['name', 'description', 'slug', 'feedUrl', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)(config)(ShopFormContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ShopFormContainer, 'ShopFormContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopForm.js');

  __REACT_HOT_LOADER__.register(config, 'config', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopForm.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reduxForm = __webpack_require__(9);

var _reactRouterRedux = __webpack_require__(17);

var _actions = __webpack_require__(4);

var _selectors = __webpack_require__(7);

var _validation = __webpack_require__(19);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserFormContainer = function UserFormContainer(props) {
  return _react2.default.createElement(_components.UserForm, props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch((0, _actions.resourceUpdateRequest)('users', values._id, values)).then(function () {
      dispatch((0, _actions.notificationSend)({
        message: 'User updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch((0, _actions.resourceCreateRequest)('users', values)).then(function (id) {
    dispatch((0, _reactRouterRedux.push)('/users/' + id));
  });
};

var validate = (0, _validation.createValidator)({});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, _selectors.fromEntities.getDetail(state, 'users', id), {
      _csrf: _selectors.fromForm.getCsrfToken(state)
    })
  };
};

var config = exports.config = {
  fields: ['displayName', 'firstname', 'lastName', 'email'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)(config)(UserFormContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserFormContainer, 'UserFormContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserForm.js');

  __REACT_HOT_LOADER__.register(config, 'config', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserForm.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reduxForm = __webpack_require__(9);

var _reactRouterRedux = __webpack_require__(17);

var _actions = __webpack_require__(4);

var _selectors = __webpack_require__(7);

var _validation = __webpack_require__(19);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VendorFormContainer = function VendorFormContainer(props) {
  return _react2.default.createElement(_components.VendorForm, props);
};

var onSubmit = function onSubmit(values, dispatch) {
  if (values._id) {
    return dispatch((0, _actions.resourceUpdateRequest)('vendors', values._id, values)).then(function () {
      dispatch((0, _actions.notificationSend)({
        message: 'Vendor updated',
        options: {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          autoHideDuration: 3000
        }
      }));
    });
  }
  return dispatch((0, _actions.resourceCreateRequest)('vendors', values)).then(function (id) {
    dispatch((0, _reactRouterRedux.push)('/vendors/' + id));
  });
};

var validate = (0, _validation.createValidator)({
  name: [_validation.required]
});

var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  return {
    initialValues: _extends({}, _selectors.fromEntities.getDetail(state, 'vendors', id), {
      _csrf: _selectors.fromForm.getCsrfToken(state)
    })
  };
};

var config = exports.config = {
  fields: ['name', 'description', 'slug', 'meta.title', 'meta.description'],
  enableReinitialize: true,
  destroyOnUnmount: true,
  onSubmit: onSubmit,
  validate: validate
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)(config)(VendorFormContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VendorFormContainer, 'VendorFormContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorForm.js');

  __REACT_HOT_LOADER__.register(config, 'config', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorForm.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH_SIGNIN = exports.AUTH_SIGNIN = 'AUTH_SIGNIN';
var AUTH_SIGNIN_REQUEST = exports.AUTH_SIGNIN_REQUEST = 'AUTH_SIGNIN_REQUEST';
var AUTH_SIGNIN_SUCCESS = exports.AUTH_SIGNIN_SUCCESS = 'AUTH_SIGNIN_SUCCESS';
var AUTH_SIGNIN_FAILURE = exports.AUTH_SIGNIN_FAILURE = 'AUTH_SIGNIN_FAILURE';

var authSigninRequest = exports.authSigninRequest = function authSigninRequest(data) {
  return {
    type: AUTH_SIGNIN_REQUEST,
    payload: { data: data },
    meta: {
      thunk: 'AuthSignIn'
    }
  };
};

var authSigninSuccess = exports.authSigninSuccess = function authSigninSuccess(details, request, thunk) {
  return {
    type: AUTH_SIGNIN_SUCCESS,
    payload: details,
    meta: {
      request: request,
      thunk: thunk
    }
  };
};

var authSigninFailure = exports.authSigninFailure = function authSigninFailure(error, request, thunk) {
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

var AUTH_USER_READ = exports.AUTH_USER_READ = 'AUTH_USER_READ';
var AUTH_USER_READ_REQUEST = exports.AUTH_USER_READ_REQUEST = 'AUTH_USER_READ_REQUEST';
var AUTH_USER_READ_SUCCESS = exports.AUTH_USER_READ_SUCCESS = 'AUTH_USER_READ_SUCCESS';
var AUTH_USER_READ_FAILURE = exports.AUTH_USER_READ_FAILURE = 'AUTH_USER_READ_FAILURE';

var authUserReadRequest = exports.authUserReadRequest = function authUserReadRequest() {
  return {
    type: AUTH_USER_READ_REQUEST,
    payload: {},
    meta: {
      thunk: 'AuthUserRead'
    }
  };
};

var authUserReadSuccess = exports.authUserReadSuccess = function authUserReadSuccess(user, request, thunk) {
  return {
    type: AUTH_USER_READ_SUCCESS,
    payload: user,
    meta: {
      request: request,
      thunk: thunk
    }
  };
};

var authUserReadFailure = exports.authUserReadFailure = function authUserReadFailure(error, request, thunk) {
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

var AUTH_SIGNOUT = exports.AUTH_SIGNOUT = 'AUTH_SIGNOUT';
var AUTH_SIGNOUT_REQUEST = exports.AUTH_SIGNOUT_REQUEST = 'AUTH_SIGNOUT_REQUEST';
var AUTH_SIGNOUT_SUCCESS = exports.AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS';
var AUTH_SIGNOUT_FAILURE = exports.AUTH_SIGNOUT_FAILURE = 'AUTH_SIGNOUT_FAILURE';

var authSignoutRequest = exports.authSignoutRequest = function authSignoutRequest() {
  return {
    type: AUTH_SIGNOUT_REQUEST,
    payload: {},
    meta: {
      thunk: 'AuthSignOut'
    }
  };
};

var authSignoutSuccess = exports.authSignoutSuccess = function authSignoutSuccess(request, thunk) {
  return {
    type: AUTH_SIGNIN_SUCCESS,
    payload: {},
    meta: {
      request: request,
      thunk: thunk
    }
  };
};

var authSignoutFailure = exports.authSignoutFailure = function authSignoutFailure(error, request) {
  return {
    type: AUTH_SIGNOUT_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AUTH_SIGNIN, 'AUTH_SIGNIN', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_SIGNIN_REQUEST, 'AUTH_SIGNIN_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_SIGNIN_SUCCESS, 'AUTH_SIGNIN_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_SIGNIN_FAILURE, 'AUTH_SIGNIN_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authSigninRequest, 'authSigninRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authSigninSuccess, 'authSigninSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authSigninFailure, 'authSigninFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_USER_READ, 'AUTH_USER_READ', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_USER_READ_REQUEST, 'AUTH_USER_READ_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_USER_READ_SUCCESS, 'AUTH_USER_READ_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_USER_READ_FAILURE, 'AUTH_USER_READ_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authUserReadRequest, 'authUserReadRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authUserReadSuccess, 'authUserReadSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authUserReadFailure, 'authUserReadFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_SIGNOUT, 'AUTH_SIGNOUT', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_SIGNOUT_REQUEST, 'AUTH_SIGNOUT_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_SIGNOUT_SUCCESS, 'AUTH_SIGNOUT_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_SIGNOUT_FAILURE, 'AUTH_SIGNOUT_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authSignoutRequest, 'authSignoutRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authSignoutSuccess, 'authSignoutSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authSignoutFailure, 'authSignoutFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/actions.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var ENTITIES_RECEIVE = exports.ENTITIES_RECEIVE = 'ENTITIES_RECEIVE';

var entitiesReceive = exports.entitiesReceive = function entitiesReceive(entities) {
  return {
    type: ENTITIES_RECEIVE,
    payload: entities
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ENTITIES_RECEIVE, 'ENTITIES_RECEIVE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/actions.js');

  __REACT_HOT_LOADER__.register(entitiesReceive, 'entitiesReceive', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/actions.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationSend = exports.NOTIFICATION_CLEAR = exports.NOTIFICATION_DISMISS = exports.NOTIFICATION_SEND = undefined;
exports.notificationDismiss = notificationDismiss;
exports.notificationClear = notificationClear;

var _assign = __webpack_require__(194);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTIFICATION_SEND = exports.NOTIFICATION_SEND = 'NOTIFICATION_SEND';
var NOTIFICATION_DISMISS = exports.NOTIFICATION_DISMISS = 'NOTIFICATION_DISMISS';
var NOTIFICATION_CLEAR = exports.NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR';

/**
 * Publish a notification,
 * - if `dismissAfter` was set, the notification will be auto dismissed after the given period.
 * - if id wasn't specified, a time based id will be generated.``
 */

var notificationSend = exports.notificationSend = function notificationSend(notification) {
  var payload = (0, _assign2.default)({}, notification);
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NOTIFICATION_SEND, 'NOTIFICATION_SEND', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/actions.js');

  __REACT_HOT_LOADER__.register(NOTIFICATION_DISMISS, 'NOTIFICATION_DISMISS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/actions.js');

  __REACT_HOT_LOADER__.register(NOTIFICATION_CLEAR, 'NOTIFICATION_CLEAR', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/actions.js');

  __REACT_HOT_LOADER__.register(notificationSend, 'notificationSend', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/actions.js');

  __REACT_HOT_LOADER__.register(notificationDismiss, 'notificationDismiss', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/actions.js');

  __REACT_HOT_LOADER__.register(notificationClear, 'notificationClear', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/actions.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var RESOURCE_CREATE_REQUEST = exports.RESOURCE_CREATE_REQUEST = 'RESOURCE_CREATE_REQUEST';
var RESOURCE_CREATE_SUCCESS = exports.RESOURCE_CREATE_SUCCESS = 'RESOURCE_CREATE_SUCCESS';
var RESOURCE_CREATE_FAILURE = exports.RESOURCE_CREATE_FAILURE = 'RESOURCE_CREATE_FAILURE';

var resourceCreateRequest = exports.resourceCreateRequest = function resourceCreateRequest(resource, data) {
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

var resourceCreateSuccess = exports.resourceCreateSuccess = function resourceCreateSuccess(resource, detail, request, thunk) {
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

var resourceCreateFailure = exports.resourceCreateFailure = function resourceCreateFailure(resource, error, request, thunk) {
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

var RESOURCE_LIST_READ_REQUEST = exports.RESOURCE_LIST_READ_REQUEST = 'RESOURCE_LIST_READ_REQUEST';
var RESOURCE_LIST_READ_SUCCESS = exports.RESOURCE_LIST_READ_SUCCESS = 'RESOURCE_LIST_READ_SUCCESS';
var RESOURCE_LIST_READ_FAILURE = exports.RESOURCE_LIST_READ_FAILURE = 'RESOURCE_LIST_READ_FAILURE';

var resourceListReadRequest = exports.resourceListReadRequest = function resourceListReadRequest(resource, params) {
  return {
    type: RESOURCE_LIST_READ_REQUEST,
    payload: { params: params },
    meta: {
      resource: resource,
      thunk: resource + 'ListRead'
    }
  };
};

var resourceListReadSuccess = exports.resourceListReadSuccess = function resourceListReadSuccess(resource, _ref, request, thunk) {
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

var resourceListReadFailure = exports.resourceListReadFailure = function resourceListReadFailure(resource, error, request, thunk) {
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

var RESOURCE_DETAIL_READ_REQUEST = exports.RESOURCE_DETAIL_READ_REQUEST = 'RESOURCE_DETAIL_READ_REQUEST';
var RESOURCE_DETAIL_READ_SUCCESS = exports.RESOURCE_DETAIL_READ_SUCCESS = 'RESOURCE_DETAIL_READ_SUCCESS';
var RESOURCE_DETAIL_READ_FAILURE = exports.RESOURCE_DETAIL_READ_FAILURE = 'RESOURCE_DETAIL_READ_FAILURE';

var resourceDetailReadRequest = exports.resourceDetailReadRequest = function resourceDetailReadRequest(resource, needle) {
  return {
    type: RESOURCE_DETAIL_READ_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'DetailRead'
    }
  };
};

var resourceDetailReadSuccess = exports.resourceDetailReadSuccess = function resourceDetailReadSuccess(resource, detail, request, thunk) {
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

var resourceDetailReadFailure = exports.resourceDetailReadFailure = function resourceDetailReadFailure(resource, error, request, thunk) {
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

var RESOURCE_UPDATE_REQUEST = exports.RESOURCE_UPDATE_REQUEST = 'RESOURCE_UPDATE_REQUEST';
var RESOURCE_UPDATE_SUCCESS = exports.RESOURCE_UPDATE_SUCCESS = 'RESOURCE_UPDATE_SUCCESS';
var RESOURCE_UPDATE_FAILURE = exports.RESOURCE_UPDATE_FAILURE = 'RESOURCE_UPDATE_FAILURE';

var resourceUpdateRequest = exports.resourceUpdateRequest = function resourceUpdateRequest(resource, needle, data) {
  return {
    type: RESOURCE_UPDATE_REQUEST,
    payload: { needle: needle, data: data },
    meta: {
      resource: resource,
      thunk: resource + 'Update'
    }
  };
};

var resourceUpdateSuccess = exports.resourceUpdateSuccess = function resourceUpdateSuccess(resource, detail, request, thunk) {
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

var resourceUpdateFailure = exports.resourceUpdateFailure = function resourceUpdateFailure(resource, error, request, thunk) {
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

var RESOURCE_DELETE_REQUEST = exports.RESOURCE_DELETE_REQUEST = 'RESOURCE_DELETE_REQUEST';
var RESOURCE_DELETE_SUCCESS = exports.RESOURCE_DELETE_SUCCESS = 'RESOURCE_DELETE_SUCCESS';
var RESOURCE_DELETE_FAILURE = exports.RESOURCE_DELETE_FAILURE = 'RESOURCE_DELETE_FAILURE';

var resourceDeleteRequest = exports.resourceDeleteRequest = function resourceDeleteRequest(resource, needle) {
  return {
    type: RESOURCE_DELETE_REQUEST,
    payload: { needle: needle },
    meta: {
      resource: resource,
      thunk: resource + 'Delete'
    }
  };
};

var resourceDeleteSuccess = exports.resourceDeleteSuccess = function resourceDeleteSuccess(resource, request, thunk) {
  return {
    type: RESOURCE_DELETE_SUCCESS,
    meta: {
      request: request,
      thunk: thunk,
      resource: resource
    }
  };
};

var resourceDeleteFailure = exports.resourceDeleteFailure = function resourceDeleteFailure(resource, error, request, thunk) {
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_REQUEST, 'RESOURCE_CREATE_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_SUCCESS, 'RESOURCE_CREATE_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_CREATE_FAILURE, 'RESOURCE_CREATE_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateRequest, 'resourceCreateRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateSuccess, 'resourceCreateSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceCreateFailure, 'resourceCreateFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_REQUEST, 'RESOURCE_LIST_READ_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_SUCCESS, 'RESOURCE_LIST_READ_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_LIST_READ_FAILURE, 'RESOURCE_LIST_READ_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadRequest, 'resourceListReadRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadSuccess, 'resourceListReadSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceListReadFailure, 'resourceListReadFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_REQUEST, 'RESOURCE_DETAIL_READ_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_SUCCESS, 'RESOURCE_DETAIL_READ_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DETAIL_READ_FAILURE, 'RESOURCE_DETAIL_READ_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadRequest, 'resourceDetailReadRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadSuccess, 'resourceDetailReadSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDetailReadFailure, 'resourceDetailReadFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_REQUEST, 'RESOURCE_UPDATE_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_SUCCESS, 'RESOURCE_UPDATE_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_UPDATE_FAILURE, 'RESOURCE_UPDATE_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateRequest, 'resourceUpdateRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateSuccess, 'resourceUpdateSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceUpdateFailure, 'resourceUpdateFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_REQUEST, 'RESOURCE_DELETE_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_SUCCESS, 'RESOURCE_DELETE_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(RESOURCE_DELETE_FAILURE, 'RESOURCE_DELETE_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteRequest, 'resourceDeleteRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteSuccess, 'resourceDeleteSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');

  __REACT_HOT_LOADER__.register(resourceDeleteFailure, 'resourceDeleteFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/actions.js');
}();

;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var SOCIAL_LOGIN = exports.SOCIAL_LOGIN = 'SOCIAL_LOGIN';
var SOCIAL_LOGIN_PREPARE = exports.SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE';
var SOCIAL_LOGIN_REQUEST = exports.SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
var SOCIAL_LOGIN_SUCCESS = exports.SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
var SOCIAL_LOGIN_FAILURE = exports.SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
var SOCIAL_LOGOUT = exports.SOCIAL_LOGOUT = 'SOCIAL_LOGOUT';

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

exports.socialLoginPrepare = socialLoginPrepare;
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

exports.socialLoginRequest = socialLoginRequest;
var socialLoginSuccess = exports.socialLoginSuccess = function socialLoginSuccess(user, request) {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: user,
    meta: {
      request: request
    }
  };
};

var socialLoginFailure = exports.socialLoginFailure = function socialLoginFailure(error, request) {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

var socialLogout = exports.socialLogout = function socialLogout() {
  return { type: SOCIAL_LOGOUT };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN, 'SOCIAL_LOGIN', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_PREPARE, 'SOCIAL_LOGIN_PREPARE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_REQUEST, 'SOCIAL_LOGIN_REQUEST', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_SUCCESS, 'SOCIAL_LOGIN_SUCCESS', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGIN_FAILURE, 'SOCIAL_LOGIN_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(SOCIAL_LOGOUT, 'SOCIAL_LOGOUT', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginPrepare, 'socialLoginPrepare', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginRequest, 'socialLoginRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginSuccess, 'socialLoginSuccess', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLoginFailure, 'socialLoginFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');

  __REACT_HOT_LOADER__.register(socialLogout, 'socialLogout', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/actions.js');
}();

;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PrivateRoutes = __webpack_require__(75);

var _PrivateRoutes2 = _interopRequireDefault(_PrivateRoutes);

var _components = __webpack_require__(2);

var _containers = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/signin',
  component: _containers.SigninPage,
  exact: true
}, {
  component: _PrivateRoutes2.default,
  routes: [{
    component: _containers.AppFrame,
    routes: [{
      path: '/',
      component: _components.HomePage,
      exact: true,
      title: 'Trendberry'
    }, {
      path: '/categories',
      component: _containers.CategoryListPage,
      exact: true,
      title: 'Categories'
    }, {
      path: '/categories/create',
      component: _containers.CategoryCreatePage,
      exact: true,
      title: 'Create category'
    }, {
      path: '/categories/:id',
      component: _containers.CategoryUpdatePage,
      exact: true,
      title: 'Edit category'
    }, {
      path: '/shops',
      component: _containers.ShopListPage,
      exact: true,
      title: 'Shops'
    }, {
      path: '/shops/create',
      component: _containers.ShopCreatePage,
      exact: true,
      title: 'Create shop'
    }, {
      path: '/shops/:id',
      component: _containers.ShopUpdatePage,
      exact: true,
      title: 'Edit shop'
    }, {
      path: '/vendors',
      component: _containers.VendorListPage,
      exact: true,
      title: 'Vendors'
    }, {
      path: '/vendors/create',
      component: _containers.VendorCreatePage,
      exact: true,
      title: 'Create vendor'
    }, {
      path: '/vendors/:id',
      component: _containers.VendorUpdatePage,
      exact: true,
      title: 'Update vendor'
    }, {
      path: '/products',
      component: _containers.ProductListPage,
      exact: true,
      title: 'Products'
    }, {
      path: '/products/create',
      component: _containers.ProductCreatePage,
      exact: true,
      title: 'Create product'
    }, {
      path: '/products/:id',
      component: _containers.ProductUpdatePage,
      exact: true,
      title: 'Update product'
    }, {
      path: '/users',
      component: _containers.UserListPage,
      exact: true,
      title: 'Users'
    }, {
      path: '/users/create',
      component: _containers.UserCreatePage,
      exact: true,
      title: 'Create user'
    }, {
      path: '/users/:id',
      component: _containers.UserUpdatePage,
      exact: true,
      title: 'Update user'
    }, {
      path: '/settings',
      component: function component() {
        return _react2.default.createElement(
          'div',
          null,
          'Settings'
        );
      },
      exact: true,
      title: 'Settings'
    }, {
      component: function component() {
        return _react2.default.createElement(
          'div',
          null,
          '404 not found'
        );
      }
    }]
  }, {
    path: '/test',
    component: function component() {
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/signin' },
        'sgsdfg'
      );
    },
    exact: true
  }, {
    component: function component() {
      return _react2.default.createElement(
        'div',
        null,
        '404 not found'
      );
    }
  }]
}, {
  component: function component() {
    return _react2.default.createElement(
      'div',
      null,
      '404 not found'
    );
  }
}];

var _default = routes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/routes.js');
}();

;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {
  user: null,
  token: null
};

var getUser = exports.getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};
var getToken = exports.getToken = function getToken() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.token || initialState.token;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/selectors.js");

  __REACT_HOT_LOADER__.register(getUser, "getUser", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/selectors.js");

  __REACT_HOT_LOADER__.register(getToken, "getToken", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/selectors.js");
}();

;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_DEVICE = exports.SET_DEVICE = 'SET_DEVICE';

var seDevice = exports.seDevice = function seDevice(device) {
  return {
    type: SET_DEVICE,
    device: device
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SET_DEVICE, 'SET_DEVICE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/device/actions.js');

  __REACT_HOT_LOADER__.register(seDevice, 'seDevice', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/device/actions.js');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {};

var getDevice = exports.getDevice = function getDevice() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.device;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/device/selectors.js");

  __REACT_HOT_LOADER__.register(getDevice, "getDevice", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/device/selectors.js");
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pages = exports.users = exports.products = exports.vendors = exports.shops = exports.categories = undefined;

var _normalizr = __webpack_require__(42);

var categories = exports.categories = new _normalizr.schema.Entity('categories', {}, {
  idAttribute: '_id'
});

var shops = exports.shops = new _normalizr.schema.Entity('shops', {}, {
  idAttribute: '_id'
});

var vendors = exports.vendors = new _normalizr.schema.Entity('vendors', {}, {
  idAttribute: '_id'
});

var products = exports.products = new _normalizr.schema.Entity('products', {}, {
  idAttribute: '_id'
});

var users = exports.users = new _normalizr.schema.Entity('users', {}, {
  idAttribute: '_id'
});

var pages = exports.pages = new _normalizr.schema.Entity('pages', {}, {
  idAttribute: '_id'
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(categories, 'categories', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(shops, 'shops', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(vendors, 'vendors', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(products, 'products', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(users, 'users', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/schemas.js');

  __REACT_HOT_LOADER__.register(pages, 'pages', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/schemas.js');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDenormalizedList = exports.getDenormalizedDetail = exports.getList = exports.getDetail = exports.getEntity = exports.initialState = undefined;

var _normalizr = __webpack_require__(42);

var _schemas = __webpack_require__(47);

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
var initialState = exports.initialState = {};

var getEntity = exports.getEntity = function getEntity() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  return state[entity] || {};
};

var getDetail = exports.getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return getEntity(state, entity)[id];
};

var getList = exports.getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (ids || Object.keys(getEntity(state, entity))).map(function (id) {
    return getDetail(state, entity, id);
  });
};

var getDenormalizedDetail = exports.getDenormalizedDetail = function getDenormalizedDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var id = arguments[2];
  return (0, _normalizr.denormalize)(getDetail(state, entity, id), schemas[entity], state);
};

var getDenormalizedList = exports.getDenormalizedList = function getDenormalizedList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var entity = arguments[1];
  var ids = arguments[2];
  return (0, _normalizr.denormalize)(getList(state, entity, ids), [schemas[entity]], state);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getEntity, 'getEntity', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDetail, 'getDetail', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getList, 'getList', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDenormalizedDetail, 'getDenormalizedDetail', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/selectors.js');

  __REACT_HOT_LOADER__.register(getDenormalizedList, 'getDenormalizedList', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/selectors.js');
}();

;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FORM_SET_CSRF_TOKEN = exports.FORM_SET_CSRF_TOKEN = 'FORM_SET_CSRF_TOKEN';

var setCsrfToken = exports.setCsrfToken = function setCsrfToken(token) {
  return {
    type: FORM_SET_CSRF_TOKEN,
    token: token
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FORM_SET_CSRF_TOKEN, 'FORM_SET_CSRF_TOKEN', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/form/actions.js');

  __REACT_HOT_LOADER__.register(setCsrfToken, 'setCsrfToken', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/form/actions.js');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {};

var getForm = exports.getForm = function getForm() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var form = arguments[1];
  return state[form] || {};
};
var getValues = exports.getValues = function getValues() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var form = arguments[1];
  return getForm(state, form).values || {};
};
var getCsrfToken = exports.getCsrfToken = function getCsrfToken() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.csrfToken;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/form/selectors.js");

  __REACT_HOT_LOADER__.register(getForm, "getForm", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/form/selectors.js");

  __REACT_HOT_LOADER__.register(getValues, "getValues", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/form/selectors.js");

  __REACT_HOT_LOADER__.register(getCsrfToken, "getCsrfToken", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/form/selectors.js");
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GTM = exports.GTM = 'GTM';
var GTM_START = exports.GTM_START = 'GTM_START';
var GTM_FAILURE = exports.GTM_FAILURE = 'GTM_FAILURE';

var gtmStart = exports.gtmStart = function gtmStart(gtmId) {
  return {
    type: GTM_START,
    payload: {
      gtmId: gtmId
    }
  };
};

var gtmFailure = exports.gtmFailure = function gtmFailure(error, request) {
  return {
    type: GTM_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GTM, 'GTM', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_START, 'GTM_START', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(GTM_FAILURE, 'GTM_FAILURE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmStart, 'gtmStart', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/actions.js');

  __REACT_HOT_LOADER__.register(gtmFailure, 'gtmFailure', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/actions.js');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var MODAL_SHOW = exports.MODAL_SHOW = 'MODAL_SHOW';
var MODAL_HIDE = exports.MODAL_HIDE = 'MODAL_HIDE';

var modalShow = exports.modalShow = function modalShow(name) {
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

var modalHide = exports.modalHide = function modalHide(name) {
  return {
    type: MODAL_HIDE,
    payload: {
      name: name
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MODAL_SHOW, 'MODAL_SHOW', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(MODAL_HIDE, 'MODAL_HIDE', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalShow, 'modalShow', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalHide, 'modalHide', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/modal/actions.js');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = exports.initialState = {};

var isOpen = exports.isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/modal/selectors.js");

  __REACT_HOT_LOADER__.register(isOpen, "isOpen", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/modal/selectors.js");
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
var initialState = exports.initialState = {};

var initialResourceState = exports.initialResourceState = {
  list: [],
  count: 0,
  detail: null
};

var getResourceState = exports.getResourceState = function getResourceState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return state[resource] || initialResourceState;
};

var getList = exports.getList = function getList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).list;
};

var getCount = exports.getCount = function getCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).count;
};

var getDetail = exports.getDetail = function getDetail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var resource = arguments[1];
  return getResourceState(state, resource).detail;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(initialResourceState, "initialResourceState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getResourceState, "getResourceState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getList, "getList", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getCount, "getCount", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/selectors.js");

  __REACT_HOT_LOADER__.register(getDetail, "getDetail", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/selectors.js");
}();

;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var initialState = exports.initialState = {
  user: null
};

var getUser = exports.getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/selectors.js");

  __REACT_HOT_LOADER__.register(getUser, "getUser", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/selectors.js");
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasError = exports.isLoading = exports.getErrorState = exports.getLoadingState = exports.initialState = undefined;

var _find = __webpack_require__(196);

var _find2 = _interopRequireDefault(_find);

var _pick = __webpack_require__(201);

var _pick2 = _interopRequireDefault(_pick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  loading: {},
  error: {}
};

var getIn = function getIn(state, prefix) {
  if (typeof prefix === 'undefined') {
    return !!(0, _find2.default)(state, function (value) {
      return !!value;
    });
  } else if (Array.isArray(prefix)) {
    return !!(0, _find2.default)((0, _pick2.default)(state, prefix), function (value) {
      return !!value;
    });
  } else if (Object.prototype.hasOwnProperty.call(state, prefix)) {
    return !!state[prefix];
  }
  return false;
};

var getLoadingState = exports.getLoadingState = function getLoadingState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.loading || {};
};
var getErrorState = exports.getErrorState = function getErrorState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.error || {};
};
var isLoading = exports.isLoading = function isLoading(state, prefix) {
  return getIn(getLoadingState(state), prefix);
};
var hasError = exports.hasError = function hasError(state, prefix) {
  return getIn(getErrorState(state), prefix);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/selectors.js');

  __REACT_HOT_LOADER__.register(getIn, 'getIn', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/selectors.js');

  __REACT_HOT_LOADER__.register(getLoadingState, 'getLoadingState', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/selectors.js');

  __REACT_HOT_LOADER__.register(getErrorState, 'getErrorState', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/selectors.js');

  __REACT_HOT_LOADER__.register(isLoading, 'isLoading', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/selectors.js');

  __REACT_HOT_LOADER__.register(hasError, 'hasError', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/selectors.js');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ArrowDropDown");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu/MenuItem");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/blue");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors/pink");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/createMuiTheme");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("simple-load-script");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(177);

var _path = __webpack_require__(243);

var _path2 = _interopRequireDefault(_path);

var _https = __webpack_require__(190);

var _https2 = _interopRequireDefault(_https);

var _express = __webpack_require__(186);

var _express2 = _interopRequireDefault(_express);

var _expressDevice = __webpack_require__(187);

var _expressDevice2 = _interopRequireDefault(_expressDevice);

var _expressForceSsl = __webpack_require__(188);

var _expressForceSsl2 = _interopRequireDefault(_expressForceSsl);

var _cookieParser = __webpack_require__(180);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(178);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = __webpack_require__(179);

var _compression2 = _interopRequireDefault(_compression);

var _serveFavicon = __webpack_require__(253);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _csurf = __webpack_require__(181);

var _csurf2 = _interopRequireDefault(_csurf);

var _appendQuery = __webpack_require__(176);

var _appendQuery2 = _interopRequireDefault(_appendQuery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(245);

var _reactRedux = __webpack_require__(6);

var _reactRouter = __webpack_require__(15);

var _reactRouterConfig = __webpack_require__(23);

var _reactRouterRedux = __webpack_require__(17);

var _createMemoryHistory = __webpack_require__(189);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _serializeJavascript = __webpack_require__(252);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _jss = __webpack_require__(247);

var _JssProvider = __webpack_require__(246);

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _jss2 = __webpack_require__(192);

var _jssPresetDefault = __webpack_require__(193);

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _MuiThemeProvider = __webpack_require__(63);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _createMuiTheme = __webpack_require__(64);

var _createMuiTheme2 = _interopRequireDefault(_createMuiTheme);

var _createGenerateClassName = __webpack_require__(239);

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _blue = __webpack_require__(61);

var _blue2 = _interopRequireDefault(_blue);

var _pink = __webpack_require__(62);

var _pink2 = _interopRequireDefault(_pink);

var _config = __webpack_require__(24);

var _actions = __webpack_require__(4);

var _configure = __webpack_require__(150);

var _configure2 = _interopRequireDefault(_configure);

var _api = __webpack_require__(147);

var _api2 = _interopRequireDefault(_api);

var _App = __webpack_require__(71);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(73);

var _Html2 = _interopRequireDefault(_Html);

var _Error = __webpack_require__(72);

var _Error2 = _interopRequireDefault(_Error);

var _routes = __webpack_require__(43);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp(_ref) {
  var context = _ref.context,
      location = _ref.location,
      store = _ref.store,
      sheetsRegistry = _ref.sheetsRegistry;

  // Configure JSS
  var jss = (0, _jss2.create)((0, _jssPresetDefault2.default)());
  jss.options.createGenerateClassName = _createGenerateClassName2.default;

  // Create a theme instance.
  var theme = (0, _createMuiTheme2.default)({
    palette: {
      primary: _blue2.default,
      accent: _pink2.default,
      type: 'light'
    }
  });

  return (0, _server.renderToString)(_react2.default.createElement(
    _JssProvider2.default,
    { registry: sheetsRegistry, jss: jss },
    _react2.default.createElement(
      _MuiThemeProvider2.default,
      { theme: theme, sheetsManager: new Map() },
      _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouter.StaticRouter,
          { basename: _config.basename, context: context, location: location },
          _react2.default.createElement(_App2.default, null)
        )
      )
    )
  ));
}; /* eslint-disable no-console */


var renderHtml = function renderHtml(_ref2) {
  var initialState = _ref2.initialState,
      content = _ref2.content,
      sheetsRegistry = _ref2.sheetsRegistry;

  var styles = sheetsRegistry ? sheetsRegistry.toString() : '';
  var assets = global.assets;
  var state = 'window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(initialState) + ';';
  var html = _react2.default.createElement(_Html2.default, { styles: styles, assets: assets, state: state, content: content });
  return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(html);
};

var fetchBranchData = function fetchBranchData(routes, store, req, res) {
  return new Promise(function (resolve, reject) {
    var branch = (0, _reactRouterConfig.matchRoutes)(routes, req.path);
    var method = req.method.toLowerCase();

    var authpromise = store.dispatch((0, _actions.authUserReadRequest)());

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

var app = (0, _express2.default)();
app.disable('x-powered-by');

if (_config.env === 'production') {
  app.set('forceSSLOptions', {
    enable301Redirects: true,
    trustXFPHeader: true
  });
  app.use(_expressForceSsl2.default);
}

app.use((0, _compression2.default)());
app.use((0, _cookieParser2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use(_config.basename, _express2.default.static(_path2.default.resolve(process.cwd(), 'dist/public')));
app.use(_config.basename, (0, _serveFavicon2.default)(_path2.default.resolve(process.cwd(), 'dist/public', 'favicon.ico')));
app.use(_expressDevice2.default.capture());
app.use((0, _csurf2.default)({ cookie: true }));

app.use(function (req, res, next) {
  var apiInstance = _api2.default.create();
  if (req.cookies.token) {
    apiInstance.setToken(req.cookies.token);
  }

  var location = req.url;
  var history = (0, _createMemoryHistory2.default)();
  var store = (0, _configure2.default)({}, { api: apiInstance }, history);
  store.dispatch((0, _actions.seDevice)({
    name: req.device.name,
    type: req.device.type
  }));
  store.dispatch((0, _actions.setCsrfToken)(req.csrfToken()));
  store.dispatch((0, _reactRouterRedux.push)(location));

  var context = {};
  var sheetsRegistry = new _jss.SheetsRegistry();

  return fetchBranchData(_routes2.default, store, req, res).then(function () {
    var content = renderApp({
      context: context,
      location: location,
      store: (0, _configure2.default)(store.getState(), { api: apiInstance }, history),
      sheetsRegistry: sheetsRegistry
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
        res.redirect((0, _appendQuery2.default)(context.url, { refferer: req.url }));
      } else {
        res.redirect(context.url);
      }
    } else {
      var _initialState = store.getState();
      res.send(renderHtml({ initialState: _initialState, content: content, sheetsRegistry: sheetsRegistry }));
    }
  }).catch(next);
});

app.use(function (err, req, res, next) {
  var content = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Error2.default, null));
  res.status(500).send(renderHtml({ content: content }));
  console.error(err);
  next(err);
});

// keep heroku alive
// if (env === 'production') {
//   setInterval(() => {
//     https.get('https://trendberry-admin.herokuapp.com/')
//     https.get('https://trendberry-api.herokuapp.com/')
//   }, 600000) // every 10 minutes (600000)
// }

app.listen(_config.port, function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + _config.host + ':' + _config.port + _config.basename + '/'));
  }
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/server.js');

  __REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/server.js');

  __REACT_HOT_LOADER__.register(fetchBranchData, 'fetchBranchData', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/server.js');
}();

;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(31);

var _reactRouterConfig = __webpack_require__(23);

var _reactHelmet = __webpack_require__(65);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _MuiThemeProvider = __webpack_require__(63);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _createMuiTheme = __webpack_require__(64);

var _createMuiTheme2 = _interopRequireDefault(_createMuiTheme);

var _blue = __webpack_require__(61);

var _blue2 = _interopRequireDefault(_blue);

var _pink = __webpack_require__(62);

var _pink2 = _interopRequireDefault(_pink);

var _PendingNavDataLoader = __webpack_require__(74);

var _PendingNavDataLoader2 = _interopRequireDefault(_PendingNavDataLoader);

var _routes = __webpack_require__(43);

var _routes2 = _interopRequireDefault(_routes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Create a theme instance.
var theme = (0, _createMuiTheme2.default)({
  palette: {
    primary: _blue2.default,
    accent: _pink2.default,
    type: 'light'
  }
});

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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          { titleTemplate: 'Trendeberry - %s' },
          _react2.default.createElement(
            'title',
            null,
            'Home'
          ),
          _react2.default.createElement('meta', { name: 'description', content: 'Shopping Catalog.' }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
          _react2.default.createElement('meta', { property: 'og:site_name', content: 'ARc' }),
          _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
          _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
          _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
          _react2.default.createElement('link', { rel: 'icon', href: '/icon.png' }),
          _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css', rel: 'stylesheet' }),
          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,600,600i,700,700i&subset=cyrillic', rel: 'stylesheet' })
        ),
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          { theme: theme },
          _react2.default.createElement(
            _PendingNavDataLoader2.default,
            { routes: _routes2.default },
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              (0, _reactRouterConfig.renderRoutes)(_routes2.default)
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(theme, 'theme', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/App.js');

  __REACT_HOT_LOADER__.register(App, 'App', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/App.js');
}();

;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

var _default = ErrorPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorPage, 'ErrorPage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/Error.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/Error.js');
}();

;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/no-danger */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(65);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = _reactHelmet2.default.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return _react2.default.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    _react2.default.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      _react2.default.createElement('style', { id: 'jss-server-side', dangerouslySetInnerHTML: { __html: styles } })
    ),
    _react2.default.createElement(
      'body',
      bodyAttrs,
      _react2.default.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return _react2.default.createElement('script', { key: path, src: path });
      })
    )
  );
};

Html.propTypes = {
  styles: _propTypes2.default.string.isRequired,
  assets: _propTypes2.default.shape({
    css: _propTypes2.default.array.isRequired,
    js: _propTypes2.default.array.isRequired
  }).isRequired,
  state: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired
};

var _default = Html;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/Html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/Html.js');
}();

;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(15);

var _reactRouterConfig = __webpack_require__(23);

var _qs = __webpack_require__(30);

var _nprogress = __webpack_require__(242);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _shallowEqual = __webpack_require__(251);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_nprogress2.default.configure({
  showSpinner: false,
  speed: 500,
  trickleSpeed: 200
});

var fetchData = function fetchData(routes, location, store) {
  var branch = (0, _reactRouterConfig.matchRoutes)(routes, location.pathname);
  var method = 'get';
  var query = (0, _qs.parse)(location.search.substr(1));

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

      var navigated = !(0, _shallowEqual2.default)(nextProps.location, this.props.location);
      var routes = this.props.routes;


      if (navigated) {
        // save the location so we can render the old screen
        this.setState({
          previousLocation: this.props.location
        });

        _nprogress2.default.start();

        fetchData(routes, nextProps.location, nextContext.store).then(function () {
          _nprogress2.default.done();

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

      return _react2.default.createElement(_reactRouter.Route, {
        location: previousLocation || location,
        render: function render() {
          return children;
        }
      });
    }
  }]);

  return PendingNavDataLoader;
}(_react.Component);

// wrap in withRouter


PendingNavDataLoader.propTypes = {
  children: _propTypes2.default.any.isRequired,
  location: _propTypes2.default.object.isRequired,
  routes: _propTypes2.default.array.isRequired
};
PendingNavDataLoader.contextTypes = {
  store: _propTypes2.default.object.isRequired
};

var _default = (0, _reactRouter.withRouter)(PendingNavDataLoader);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fetchData, 'fetchData', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/PendingNavDataLoader.js');

  __REACT_HOT_LOADER__.register(PendingNavDataLoader, 'PendingNavDataLoader', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/PendingNavDataLoader.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/PendingNavDataLoader.js');
}();

;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(23);

var _reactRouterDom = __webpack_require__(31);

var _actions = __webpack_require__(4);

var _selectors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateRoutes = function PrivateRoutes(_ref) {
  var location = _ref.location,
      route = _ref.route,
      user = _ref.user;
  return user !== null ? (0, _reactRouterConfig.renderRoutes)(route.routes) : _react2.default.createElement(_reactRouterDom.Redirect, {
    to: {
      pathname: '/signin',
      state: { from: location }
    }
  });
};

PrivateRoutes.propTypes = {
  location: _propTypes2.default.object.isRequired,
  route: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _selectors.fromAuth.getUser(state, _actions.AUTH_USER_READ_REQUEST)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoutes);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PrivateRoutes, 'PrivateRoutes', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/PrivateRoutes.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/PrivateRoutes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/PrivateRoutes.js');
}();

;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = __webpack_require__(20);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var actions = _ref.actions,
      title = _ref.title,
      content = _ref.content,
      other = _objectWithoutProperties(_ref, ['actions', 'title', 'content']);

  return _react2.default.createElement(
    _Dialog2.default,
    other,
    title && _react2.default.createElement(
      _Dialog.DialogTitle,
      null,
      title
    ),
    content && _react2.default.createElement(
      _Dialog.DialogContent,
      null,
      content
    ),
    _react2.default.createElement(
      _Dialog.DialogActions,
      null,
      actions
    )
  );
};

ConfirmationDialog.propTypes = {
  actions: _propTypes2.default.any,
  title: _propTypes2.default.any,
  content: _propTypes2.default.any
};

ConfirmationDialog.defaultProps = {
  actions: null,
  title: null,
  content: null
};

var _default = ConfirmationDialog;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ConfirmationDialog, 'ConfirmationDialog', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/ConfirmationDialog/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/ConfirmationDialog/index.js');
}();

;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _containers = __webpack_require__(5);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This checks to see if object is immutable and properly access it
var getter = function getter(obj, propName) {
  return obj.get ? obj.get(propName) : obj[propName];
};

var Notifications = function Notifications(props) {
  var notifications = props.notifications;


  var renderedNotifications = notifications.map(function (notification) {
    var options = getter(notification, 'options');
    var id = getter(notification, 'id');

    return _react2.default.createElement(_containers.Snackbar, _extends({
      key: id,
      id: id,
      message: getter(notification, 'message')
    }, options));
  });

  return _react2.default.createElement(
    'div',
    null,
    renderedNotifications
  );
};

Notifications.propTypes = {
  notifications: _propTypes2.default.array.isRequired,
  dismiss: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    notifications: state.get ? state.get('notifications') : state.notifications
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dismiss: function dismiss(id) {
      return dispatch((0, _actions.notificationDismiss)(id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Notifications);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getter, 'getter', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/Notifications/index.js');

  __REACT_HOT_LOADER__.register(Notifications, 'Notifications', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/Notifications/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/Notifications/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/Notifications/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/Notifications/index.js');
}();

;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(15);

var _qs = __webpack_require__(30);

var _styles = __webpack_require__(3);

var _classnames = __webpack_require__(25);

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Input = __webpack_require__(234);

var _Input2 = _interopRequireDefault(_Input);

var _Search = __webpack_require__(223);

var _Search2 = _interopRequireDefault(_Search);

var _Close = __webpack_require__(204);

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleSheet = function styleSheet(theme) {
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
};

var searchTimeout = void 0;

var SearchWidget = function (_Component) {
  _inherits(SearchWidget, _Component);

  function SearchWidget(props) {
    _classCallCheck(this, SearchWidget);

    var _this = _possibleConstructorReturn(this, (SearchWidget.__proto__ || Object.getPrototypeOf(SearchWidget)).call(this, props));

    _this.handleSearch = function () {
      return _this.__handleSearch__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRequestOpen = function () {
      return _this.__handleRequestOpen__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleRequestClose = function () {
      return _this.__handleRequestClose__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleInputChange = function () {
      return _this.__handleInputChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleInputBlur = function () {
      return _this.__handleInputBlur__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    var _parse = (0, _qs.parse)(props.location.search.substr(1)),
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
    key: '__handleInputBlur__REACT_HOT_LOADER__',
    value: function __handleInputBlur__REACT_HOT_LOADER__() {
      return this.__handleInputBlur__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleInputChange__REACT_HOT_LOADER__',
    value: function __handleInputChange__REACT_HOT_LOADER__() {
      return this.__handleInputChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.__handleRequestClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestOpen__REACT_HOT_LOADER__',
    value: function __handleRequestOpen__REACT_HOT_LOADER__() {
      return this.__handleRequestOpen__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSearch__REACT_HOT_LOADER__',
    value: function __handleSearch__REACT_HOT_LOADER__() {
      return this.__handleSearch__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSearch__REACT_HOT_LOADER__',
    value: function __handleSearch__REACT_HOT_LOADER__(value, clear) {
      var _props = this.props,
          history = _props.history,
          location = _props.location;

      var query = (0, _qs.parse)(location.search.substr(1));
      delete query._page;
      if (clear) delete query.q;else query.q = value;

      history.push(_extends({}, location, {
        search: '?' + (0, _qs.stringify)(_extends({}, query))
      }));
    }
  }, {
    key: '__handleRequestOpen__REACT_HOT_LOADER__',
    value: function __handleRequestOpen__REACT_HOT_LOADER__() {
      this.state.open === false && this.searchInput.input.focus();
      this.setState({ open: true });
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      var _this2 = this;

      clearTimeout(searchTimeout);
      this.setState({ open: false, q: '' }, function () {
        _this2.handleSearch('', true);
      });
    }
  }, {
    key: '__handleInputChange__REACT_HOT_LOADER__',
    value: function __handleInputChange__REACT_HOT_LOADER__(event) {
      var _this3 = this;

      var value = event.target.value;

      this.setState({ q: value }, function () {
        clearTimeout(searchTimeout);
        if (value.length && value.length < 3) return;
        searchTimeout = setTimeout(function () {
          return _this3.handleSearch(value);
        }, 500);
      });
    }
  }, {
    key: '__handleInputBlur__REACT_HOT_LOADER__',
    value: function __handleInputBlur__REACT_HOT_LOADER__(event) {
      var value = event.target.value;

      if (value === '') {
        this.setState({ open: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var classes = this.props.classes;
      var _state = this.state,
          open = _state.open,
          q = _state.q;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _IconButton2.default,
          { className: classes.button, onClick: this.handleRequestOpen },
          _react2.default.createElement(_Search2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.field, _defineProperty({}, classes.open, open)) },
          _react2.default.createElement(_Input2.default, {
            className: classes.input,
            value: q,
            placeholder: 'Search',
            innerRef: function innerRef(input) {
              _this4.searchInput = input;
            },
            onBlur: function onBlur(event) {
              return _this4.handleInputBlur(event);
            },
            onChange: function onChange(event) {
              return _this4.handleInputChange(event);
            }
          })
        ),
        _react2.default.createElement(
          _IconButton2.default,
          { className: (0, _classnames2.default)(classes.button, classes.close, _defineProperty({}, classes.visible, open)), onClick: this.handleRequestClose },
          _react2.default.createElement(_Close2.default, null)
        )
      );
    }
  }]);

  return SearchWidget;
}(_react.Component);

SearchWidget.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired
};

var _default = (0, _reactRouter.withRouter)((0, _styles.withStyles)(styleSheet, { name: 'SearchWidget' })(SearchWidget));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/SearchWidget/index.js');

  __REACT_HOT_LOADER__.register(searchTimeout, 'searchTimeout', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/SearchWidget/index.js');

  __REACT_HOT_LOADER__.register(SearchWidget, 'SearchWidget', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/SearchWidget/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/SearchWidget/index.js');
}();

;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _transitions = __webpack_require__(240);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = function styleSheet(theme) {
  return {
    ancestor: {
      color: theme.palette.text.secondary,
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
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
        transition: 'all ' + _transitions.duration.standard + 'ms ' + _transitions.easing.easeOut,
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
};

var TableRowCategoryName = function TableRowCategoryName(_ref) {
  var item = _ref.item,
      classes = _ref.classes;
  return _react2.default.createElement(
    'span',
    { className: classes.name },
    item.ancestors.map(function (ancestor) {
      return _react2.default.createElement(
        'span',
        { key: ancestor._id, className: classes.ancestor },
        _react2.default.createElement(
          'span',
          null,
          ancestor.name
        )
      );
    }),
    item.name
  );
};

TableRowCategoryName.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  item: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'TableRowCategoryName' })(TableRowCategoryName);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/TableRowCategoryName/index.js');

  __REACT_HOT_LOADER__.register(TableRowCategoryName, 'TableRowCategoryName', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/TableRowCategoryName/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/common/TableRowCategoryName/index.js');
}();

;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftjsUtils = __webpack_require__(185);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.addBlockAlignmentData = function () {
      var _this2;

      return (_this2 = _this).__addBlockAlignmentData__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AlignStyleControls, [{
    key: '__addBlockAlignmentData__REACT_HOT_LOADER__',
    value: function __addBlockAlignmentData__REACT_HOT_LOADER__() {
      return this.__addBlockAlignmentData__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState !== this.props.editorState) {
        this.setState({
          currentTextAlignment: (0, _draftjsUtils.getSelectedBlocksMetadata)(properties.editorState).get('text-align')
        });
      }
    }
  }, {
    key: '__addBlockAlignmentData__REACT_HOT_LOADER__',
    value: function __addBlockAlignmentData__REACT_HOT_LOADER__(value) {
      var _props = this.props,
          editorState = _props.editorState,
          onChange = _props.onChange;
      var currentTextAlignment = this.state.currentTextAlignment;

      if (currentTextAlignment !== value) {
        onChange((0, _draftjsUtils.setBlockData)(editorState, { 'text-align': value }));
      } else {
        onChange((0, _draftjsUtils.setBlockData)(editorState, { 'text-align': undefined }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var blockTypes = this.props.blockTypes;

      return _react2.default.createElement(
        'div',
        { className: 'RichEditor-controls', style: { whiteSpace: 'nowrap' } },
        blockTypes.map(function (type) {
          return _react2.default.createElement(_components.ToggleButton, {
            key: type.label,
            active: type.style === _this3.state.currentTextAlignment,
            label: type.label,
            onToggle: _this3.addBlockAlignmentData,
            style: type.style,
            icon: type.icon
          });
        })
      );
    }
  }]);

  return AlignStyleControls;
}(_react.Component);

AlignStyleControls.propTypes = {
  blockTypes: _propTypes2.default.array.isRequired,
  editorState: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func.isRequired
};

var _default = AlignStyleControls;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AlignStyleControls, 'AlignStyleControls', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/AlignStyleControls/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/AlignStyleControls/index.js');
}();

;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState,
      blockTypes = props.blockTypes;

  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  return _react2.default.createElement(
    'div',
    { className: 'RichEditor-controls' },
    blockTypes.map(function (type) {
      return _react2.default.createElement(_components.ToggleButton, {
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

BlockStyleControls.propTypes = {
  blockTypes: _propTypes2.default.array.isRequired,
  editorState: _propTypes2.default.any.isRequired,
  onToggle: _propTypes2.default.func.isRequired
};

var _default = BlockStyleControls;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BlockStyleControls, 'BlockStyleControls', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/BlockStyleControls/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/BlockStyleControls/index.js');
}();

;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _ArrowDropDown = __webpack_require__(58);

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _ArrowDropUp = __webpack_require__(203);

var _ArrowDropUp2 = _interopRequireDefault(_ArrowDropUp);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Menu = __webpack_require__(236);

var _Menu2 = _interopRequireDefault(_Menu);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleSheet = {
  button: {
    fontSize: '16px',
    fontWeight: 400,
    height: 56,
    paddingLeft: 24,
    paddingRight: 16,
    textTransform: 'none'
  }
};

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
    }, _this.handleClick = function () {
      var _this2;

      return (_this2 = _this).__handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleRequestClose = function () {
      var _this3;

      return (_this3 = _this).__handleRequestClose__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BlockStyleMenuControls, [{
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.__handleRequestClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__() {
      return this.__handleClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleClick__REACT_HOT_LOADER__',
    value: function __handleClick__REACT_HOT_LOADER__(event) {
      return this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          classes = _props.classes,
          editorState = _props.editorState,
          blockTypes = _props.blockTypes;

      var selection = editorState.getSelection();
      var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

      var currentType = blockTypes.find(function (element) {
        return element.style === blockType;
      });

      return _react2.default.createElement(
        'div',
        { className: 'RichEditor-controls' },
        _react2.default.createElement(
          _Button2.default,
          {
            className: classes.button,
            'aria-haspopup': 'true',
            onClick: this.handleClick
          },
          currentType ? currentType.label : 'Typography',
          !this.state.open ? _react2.default.createElement(_ArrowDropDown2.default, null) : _react2.default.createElement(_ArrowDropUp2.default, null)
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            anchorEl: this.state.anchorEl,
            open: this.state.open,
            onRequestClose: this.handleRequestClose
          },
          blockTypes.map(function (type) {
            return _react2.default.createElement(_components.StyleMenuItem, {
              key: type.style,
              active: type.style === blockType,
              label: type.label,
              onToggle: _this4.props.onToggle,
              onMouseUp: _this4.handleRequestClose,
              style: type.style
            });
          })
        )
      );
    }
  }]);

  return BlockStyleMenuControls;
}(_react.Component);

BlockStyleMenuControls.propTypes = {
  blockTypes: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object.isRequired,
  editorState: _propTypes2.default.any.isRequired,
  onToggle: _propTypes2.default.func.isRequired
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'BlockStyleMenuControls' })(BlockStyleMenuControls);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/BlockStyleMenuControls/index.js');

  __REACT_HOT_LOADER__.register(BlockStyleMenuControls, 'BlockStyleMenuControls', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/BlockStyleMenuControls/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/BlockStyleMenuControls/index.js');
}();

;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(183);

var _draftJsExportHtml = __webpack_require__(184);

var _styles = __webpack_require__(3);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _FormatBold = __webpack_require__(211);

var _FormatBold2 = _interopRequireDefault(_FormatBold);

var _FormatItalic = __webpack_require__(212);

var _FormatItalic2 = _interopRequireDefault(_FormatItalic);

var _FormatUnderlined = __webpack_require__(215);

var _FormatUnderlined2 = _interopRequireDefault(_FormatUnderlined);

var _FormatAlignLeft = __webpack_require__(209);

var _FormatAlignLeft2 = _interopRequireDefault(_FormatAlignLeft);

var _FormatAlignRight = __webpack_require__(210);

var _FormatAlignRight2 = _interopRequireDefault(_FormatAlignRight);

var _FormatAlignCenter = __webpack_require__(207);

var _FormatAlignCenter2 = _interopRequireDefault(_FormatAlignCenter);

var _FormatAlignJustify = __webpack_require__(208);

var _FormatAlignJustify2 = _interopRequireDefault(_FormatAlignJustify);

var _FormatListBulleted = __webpack_require__(213);

var _FormatListBulleted2 = _interopRequireDefault(_FormatListBulleted);

var _FormatListNumbered = __webpack_require__(214);

var _FormatListNumbered2 = _interopRequireDefault(_FormatListNumbered);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ALIGN_STYLES = [{ label: 'Align Left', style: 'left', icon: _FormatAlignLeft2.default }, { label: 'Align Center', style: 'center', icon: _FormatAlignCenter2.default }, { label: 'Align Right', style: 'right', icon: _FormatAlignRight2.default }, { label: 'Justify', style: 'justify', icon: _FormatAlignJustify2.default }];

var INLINE_STYLES = [{ label: 'Bold', style: 'BOLD', icon: _FormatBold2.default }, { label: 'Italic', style: 'ITALIC', icon: _FormatItalic2.default }, { label: 'Underline', style: 'UNDERLINE', icon: _FormatUnderlined2.default }];

var BLOCK_TYPES = [{ label: 'Paragraph', style: 'unstyled' }, { label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' },
// { label: 'Unstyled', style: 'unstyled' },
{ label: 'Blockquote', style: 'blockquote' }, { label: 'Code Block', style: 'code-block' }];

var LIST_BLOCK_TYPES = [{ label: 'UL', style: 'unordered-list-item', icon: _FormatListBulleted2.default }, { label: 'OL', style: 'ordered-list-item', icon: _FormatListNumbered2.default }];

var styleSheet = function styleSheet(theme) {
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
};

var DraftRichEditor = function (_Component) {
  _inherits(DraftRichEditor, _Component);

  function DraftRichEditor(props) {
    _classCallCheck(this, DraftRichEditor);

    var _this = _possibleConstructorReturn(this, (DraftRichEditor.__proto__ || Object.getPrototypeOf(DraftRichEditor)).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty() };

    _this.focus = function () {
      return _this.__focus__REACT_HOT_LOADER__.apply(_this, arguments);
    };
    _this.onChange = function () {
      return _this.__onChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onChange = function () {
      return _this.__onChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleKeyCommand = function () {
      return _this.__handleKeyCommand__REACT_HOT_LOADER__.apply(_this, arguments);
    };
    _this.onTab = function () {
      return _this.__onTab__REACT_HOT_LOADER__.apply(_this, arguments);
    };
    _this.toggleBlockType = function () {
      return _this.__toggleBlockType__REACT_HOT_LOADER__.apply(_this, arguments);
    };
    _this.toggleInlineStyle = function () {
      return _this.__toggleInlineStyle__REACT_HOT_LOADER__.apply(_this, arguments);
    };
    return _this;
  }

  _createClass(DraftRichEditor, [{
    key: '__toggleInlineStyle__REACT_HOT_LOADER__',
    value: function __toggleInlineStyle__REACT_HOT_LOADER__(style) {
      return this.triggetToggleInlineStyle(style);
    }
  }, {
    key: '__toggleBlockType__REACT_HOT_LOADER__',
    value: function __toggleBlockType__REACT_HOT_LOADER__(type) {
      return this.triggetToggleBlockType(type);
    }
  }, {
    key: '__onTab__REACT_HOT_LOADER__',
    value: function __onTab__REACT_HOT_LOADER__(e) {
      return this.triggerOnTab(e);
    }
  }, {
    key: '__handleKeyCommand__REACT_HOT_LOADER__',
    value: function __handleKeyCommand__REACT_HOT_LOADER__(command) {
      return this.triggerHandleKeyCommand(command);
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(editorState) {
      return this.setState({ editorState: editorState });
    }
  }, {
    key: '__onChange__REACT_HOT_LOADER__',
    value: function __onChange__REACT_HOT_LOADER__(editorState) {
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

      var html = (0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent(), options);
      this.setState({
        editorState: editorState,
        html: html
      });
    }
  }, {
    key: '__focus__REACT_HOT_LOADER__',
    value: function __focus__REACT_HOT_LOADER__() {
      return this.editor.focus();
    }
  }, {
    key: 'triggerOnTab',
    value: function triggerOnTab(e) {
      var maxDepth = 4;
      this.onChange(_draftJs.RichUtils.onTab(e, this.state.editorState, maxDepth));
    }
  }, {
    key: 'triggerHandleKeyCommand',
    value: function triggerHandleKeyCommand(command) {
      var editorState = this.state.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
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

      this.onChange(_draftJs.RichUtils.toggleBlockType(editorState, blockType));
    }
  }, {
    key: 'triggetToggleInlineStyle',
    value: function triggetToggleInlineStyle(inlineStyle) {
      var editorState = this.state.editorState;

      this.onChange(_draftJs.RichUtils.toggleInlineStyle(editorState, inlineStyle));
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

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _Toolbar2.default,
          { className: classes.toolabr, disableGutters: true },
          _react2.default.createElement(_components.BlockStyleMenuControls, {
            blockTypes: BLOCK_TYPES,
            editorState: editorState,
            onToggle: this.toggleBlockType
          }),
          _react2.default.createElement('div', { className: classes.divider, style: { marginLeft: 0 } }),
          _react2.default.createElement(_components.InlineStyleControls, {
            blockTypes: INLINE_STYLES,
            editorState: editorState,
            onToggle: this.toggleInlineStyle
          }),
          _react2.default.createElement('div', { className: classes.divider }),
          _react2.default.createElement(_components.AlignStyleControls, {
            blockTypes: ALIGN_STYLES,
            editorState: editorState,
            onChange: this.onChange
          }),
          _react2.default.createElement('div', { className: classes.divider }),
          _react2.default.createElement(_components.BlockStyleControls, {
            blockTypes: LIST_BLOCK_TYPES,
            editorState: editorState,
            onToggle: this.toggleBlockType
          })
        ),
        _react2.default.createElement(
          'div',
          { className: className, onClick: function onClick() {
              return _this2.focus;
            }, role: 'button', tabIndex: '-1' },
          _react2.default.createElement(_draftJs.Editor, {
            blockStyleFn: getBlockStyle,
            customStyleMap: styleMap,
            editorState: editorState,
            editorKey: 'foobaz',
            handleKeyCommand: this.handleKeyCommand,
            onChange: this.onChange,
            onTab: this.onTab,
            placeholder: 'Description',
            ref: function ref(editor) {
              _this2.editor = editor;
            },
            spellCheck: true
          }),
          _react2.default.createElement('textarea', { value: html })
        )
      );
    }
  }]);

  return DraftRichEditor;
}(_react.Component);

DraftRichEditor.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'DraftRichEditor' })(DraftRichEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleMap, 'styleMap', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(getBlockStyle, 'getBlockStyle', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(ALIGN_STYLES, 'ALIGN_STYLES', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(INLINE_STYLES, 'INLINE_STYLES', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(BLOCK_TYPES, 'BLOCK_TYPES', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(LIST_BLOCK_TYPES, 'LIST_BLOCK_TYPES', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(DraftRichEditor, 'DraftRichEditor', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/DraftRichEditor/index.js');
}();

;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  var blockTypes = props.blockTypes;

  return _react2.default.createElement(
    'div',
    { className: 'RichEditor-controls' },
    blockTypes.map(function (type) {
      return _react2.default.createElement(_components.ToggleButton, {
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

InlineStyleControls.propTypes = {
  blockTypes: _propTypes2.default.array.isRequired,
  editorState: _propTypes2.default.any.isRequired,
  onToggle: _propTypes2.default.func.isRequired
};

var _default = InlineStyleControls;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InlineStyleControls, 'InlineStyleControls', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/InlineStyleControls/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/InlineStyleControls/index.js');
}();

;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleMenuItem = function (_Component) {
  _inherits(StyleMenuItem, _Component);

  function StyleMenuItem() {
    _classCallCheck(this, StyleMenuItem);

    var _this = _possibleConstructorReturn(this, (StyleMenuItem.__proto__ || Object.getPrototypeOf(StyleMenuItem)).call(this));

    _this.onToggle = function () {
      return _this.__onToggle__REACT_HOT_LOADER__.apply(_this, arguments);
    };
    return _this;
  }

  _createClass(StyleMenuItem, [{
    key: '__onToggle__REACT_HOT_LOADER__',
    value: function __onToggle__REACT_HOT_LOADER__(e) {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MenuItem2.default,
        { onMouseUp: this.props.onMouseUp, onMouseDown: this.onToggle, selected: this.props.active },
        this.props.label
      );
    }
  }]);

  return StyleMenuItem;
}(_react.Component);

StyleMenuItem.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.string.isRequired,
  onMouseUp: _propTypes2.default.func.isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.string.isRequired
};

var _default = StyleMenuItem;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(StyleMenuItem, 'StyleMenuItem', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/StyleMenuItem/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/StyleMenuItem/index.js');
}();

;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleSheet = function styleSheet(theme) {
  return {
    button: {
      color: theme.palette.text.icon
    },
    active: {
      color: theme.palette.text.secondary
    }
  };
};

var ToggleButton = function (_Component) {
  _inherits(ToggleButton, _Component);

  function ToggleButton() {
    _classCallCheck(this, ToggleButton);

    var _this = _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).call(this));

    _this.onToggle = function () {
      return _this.__onToggle__REACT_HOT_LOADER__.apply(_this, arguments);
    };
    return _this;
  }

  _createClass(ToggleButton, [{
    key: '__onToggle__REACT_HOT_LOADER__',
    value: function __onToggle__REACT_HOT_LOADER__(e) {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      var className = classes.button;
      if (this.props.active) {
        className += ' ' + classes.active;
      }

      var Icon = this.props.icon;

      return _react2.default.createElement(
        _IconButton2.default,
        { className: className, onMouseDown: this.onToggle },
        this.props.icon ? _react2.default.createElement(Icon, null) : this.props.label
      );
    }
  }]);

  return ToggleButton;
}(_react.Component);

ToggleButton.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  classes: _propTypes2.default.object.isRequired,
  icon: _propTypes2.default.any.isRequired,
  label: _propTypes2.default.string.isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.string.isRequired
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'ToggleButton' })(ToggleButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/ToggleButton/index.js');

  __REACT_HOT_LOADER__.register(ToggleButton, 'ToggleButton', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/ToggleButton/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/editor/ToggleButton/index.js');
}();

;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _reduxForm = __webpack_require__(9);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(21);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(22);

var _Paper2 = _interopRequireDefault(_Paper);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
};

var CategoryForm = function CategoryForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    _Paper2.default,
    { component: _reduxForm.Form, onSubmit: handleSubmit, method: 'POST' },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' category'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      id && _react2.default.createElement(_reduxForm.Field, { name: '_id', type: 'hidden', component: 'input' }),
      _react2.default.createElement(_reduxForm.Field, { name: '_csrf', type: 'hidden', component: 'input' }),
      _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 24 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 8 },
          _react2.default.createElement(_reduxForm.Field, { name: 'name', label: 'Name', type: 'text', component: _components.TextField, required: true }),
          _react2.default.createElement(_reduxForm.Field, { name: 'description', label: 'Description', type: 'textarea', component: _components.TextField }),
          _react2.default.createElement(_components.DraftRichEditor, null)
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 4 },
          _react2.default.createElement(_reduxForm.Field, { name: 'slug', type: 'text', label: 'Slug', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.title', type: 'text', label: 'Meta Title', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.description', label: 'Meta Description', component: _components.TextField })
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.actions },
      _react2.default.createElement(
        _Button2.default,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

CategoryForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string,
  submitting: _propTypes2.default.bool
};

CategoryForm.defaultProps = {
  id: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'CategoryForm' })(CategoryForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/CategoryForm/index.js');

  __REACT_HOT_LOADER__.register(CategoryForm, 'CategoryForm', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/CategoryForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/CategoryForm/index.js');
}();

;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    'div',
    null,
    renderInputFirst && _react2.default.createElement('input', inputProps),
    label && _react2.default.createElement(
      'label',
      { htmlFor: inputProps.id },
      label
    ),
    renderInputFirst || _react2.default.createElement('input', inputProps),
    invalid && error && _react2.default.createElement(
      'div',
      { id: name + 'Error', role: 'alert', palette: 'danger' },
      error
    )
  );
};

Field.propTypes = {
  name: _propTypes2.default.string.isRequired,
  invalid: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  label: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Field.defaultProps = {
  type: 'text'
};

var _default = Field;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Field, 'Field', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/Field/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/Field/index.js');
}();

;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _reduxForm = __webpack_require__(9);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(21);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(22);

var _Paper2 = _interopRequireDefault(_Paper);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
};

var ProductForm = function ProductForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    _Paper2.default,
    { component: _reduxForm.Form, onSubmit: handleSubmit, method: 'POST' },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' product'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      id && _react2.default.createElement(_reduxForm.Field, { name: '_id', type: 'hidden', component: 'input' }),
      _react2.default.createElement(_reduxForm.Field, { name: '_csrf', type: 'hidden', component: 'input' }),
      _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 24 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 8 },
          _react2.default.createElement(_reduxForm.Field, { name: 'name', label: 'Name', type: 'text', component: _components.TextField, required: true }),
          _react2.default.createElement(_reduxForm.Field, { name: 'description', label: 'Description', type: 'textarea', component: _components.TextField }),
          _react2.default.createElement(_components.DraftRichEditor, null)
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 4 },
          _react2.default.createElement(_reduxForm.Field, { name: 'slug', type: 'text', label: 'Slug', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.title', type: 'text', label: 'Meta Title', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.description', label: 'Meta Description', component: _components.TextField })
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.actions },
      _react2.default.createElement(
        _Button2.default,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

ProductForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string,
  submitting: _propTypes2.default.bool
};

ProductForm.defaultProps = {
  id: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'ProductForm' })(ProductForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ProductForm/index.js');

  __REACT_HOT_LOADER__.register(ProductForm, 'ProductForm', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ProductForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ProductForm/index.js');
}();

;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ReduxField = function ReduxField(_ref) {
  var meta = _ref.meta,
      input = _ref.input,
      props = _objectWithoutProperties(_ref, ['meta', 'input']);

  return _react2.default.createElement(_components.Field, _extends({}, props, input, { invalid: meta.touched && !!meta.error, error: meta.error }));
};

ReduxField.propTypes = {
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool,
    error: _propTypes2.default.string
  }).isRequired,
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired
};

var _default = ReduxField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ReduxField, 'ReduxField', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ReduxField/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ReduxField/index.js');
}();

;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _reduxForm = __webpack_require__(9);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(21);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(22);

var _Paper2 = _interopRequireDefault(_Paper);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
};

var ShopForm = function ShopForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    _Paper2.default,
    { component: _reduxForm.Form, onSubmit: handleSubmit, method: 'POST' },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' shop'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      id && _react2.default.createElement(_reduxForm.Field, { name: '_id', type: 'hidden', component: 'input' }),
      _react2.default.createElement(_reduxForm.Field, { name: '_csrf', type: 'hidden', component: 'input' }),
      _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 24 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 8 },
          _react2.default.createElement(_reduxForm.Field, { name: 'name', label: 'Name', type: 'text', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'description', label: 'Description', type: 'textarea', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'feedUrl', label: 'Feed URL', type: 'text', component: _components.TextField })
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 4 },
          _react2.default.createElement(_reduxForm.Field, { name: 'slug', type: 'text', label: 'Slug', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.title', type: 'text', label: 'Meta Title', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.description', label: 'Meta Description', component: _components.TextField })
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.actions },
      _react2.default.createElement(
        _Button2.default,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

ShopForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string,
  submitting: _propTypes2.default.bool
};

ShopForm.defaultProps = {
  id: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'ShopForm' })(ShopForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ShopForm/index.js');

  __REACT_HOT_LOADER__.register(ShopForm, 'ShopForm', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ShopForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/ShopForm/index.js');
}();

;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(9);

var _Card = __webpack_require__(229);

var _Card2 = _interopRequireDefault(_Card);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _LinearProgress = __webpack_require__(237);

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _styles = __webpack_require__(3);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
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
};

var SigninForm = function SigninForm(_ref) {
  var classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;
  return _react2.default.createElement(
    'form',
    { name: 'SigninForm', method: 'POST', onSubmit: handleSubmit },
    _react2.default.createElement(
      _Card2.default,
      null,
      submitting && _react2.default.createElement(_LinearProgress2.default, { className: classes.linearProgress }),
      submitting && _react2.default.createElement('div', { className: classes.overlay }),
      _react2.default.createElement(_Card.CardHeader, { className: classes.cardHeader, title: 'Sign in', subheader: 'wiht your TrendBerry account' }),
      _react2.default.createElement(
        _Card.CardContent,
        { className: classes.cardContent },
        _react2.default.createElement(_reduxForm.Field, { name: 'usernameOrEmail', label: 'Email or login', type: 'text', component: _components.TextField, required: true }),
        _react2.default.createElement(_reduxForm.Field, { name: 'password', label: 'Password', type: 'password', component: _components.TextField, required: true }),
        _react2.default.createElement(_reduxForm.Field, { name: '_csrf', type: 'hidden', component: 'input' })
      ),
      _react2.default.createElement(
        _Card.CardActions,
        { className: classes.cardActions },
        _react2.default.createElement(
          _Button2.default,
          { color: 'primary', component: function component(props) {
              return _react2.default.createElement('button', _extends({ type: 'submit' }, props));
            }, disabled: submitting },
          'Sign in'
        )
      )
    )
  );
};

SigninForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  submitting: _propTypes2.default.bool
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'SigninForm' })(SigninForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/SigninForm/index.js');

  __REACT_HOT_LOADER__.register(SigninForm, 'SigninForm', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/SigninForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/SigninForm/index.js');
}();

;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(25);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(3);

var _Input = __webpack_require__(233);

var _Input2 = _interopRequireDefault(_Input);

var _FormControl = __webpack_require__(232);

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MuiFormHelperText from 'material-ui/Form/FormHelperText'

var styleSheet = function styleSheet(theme) {
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
};

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


  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var inputProps = {
    name: input.name,
    'aria-describedby': input.name + 'Error',
    autoComplete: 'off'
  };

  return _react2.default.createElement(
    _FormControl2.default,
    { className: className, required: required, disabled: disabled, error: meta.touched && meta.invalid, margin: 'normal' },
    label && _react2.default.createElement(
      _Input.InputLabel,
      { htmlFor: input.name },
      label
    ),
    _react2.default.createElement(_Input2.default, _extends({
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

TextField.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.any,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool,
    error: _propTypes2.default.string
  }).isRequired,
  multiline: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  // invalid: PropTypes.bool,
  required: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  input: _propTypes2.default.any
};

TextField.defaultProps = {
  type: 'text'
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'TextField' })(TextField);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/TextField/index.js');

  __REACT_HOT_LOADER__.register(TextField, 'TextField', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/TextField/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/TextField/index.js');
}();

;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _reduxForm = __webpack_require__(9);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(21);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(22);

var _Paper2 = _interopRequireDefault(_Paper);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
};

var UserForm = function UserForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    _Paper2.default,
    { component: _reduxForm.Form, onSubmit: handleSubmit, method: 'POST' },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' user'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      id && _react2.default.createElement(_reduxForm.Field, { name: '_id', type: 'hidden', component: 'input' }),
      _react2.default.createElement(_reduxForm.Field, { name: '_csrf', type: 'hidden', component: 'input' }),
      _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 24 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 8 },
          _react2.default.createElement(_reduxForm.Field, { name: 'displayName', label: 'Display name', type: 'text', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'firstname', label: 'First name', type: 'text', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'lastName', label: 'Last name', type: 'text', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'email', label: 'Email', type: '\u0443\u044C\u0444\u0448\u0434', component: _components.TextField })
        ),
        _react2.default.createElement(_Grid2.default, { item: true, sm: 4 })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.actions },
      _react2.default.createElement(
        _Button2.default,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

UserForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string,
  submitting: _propTypes2.default.bool
};

UserForm.defaultProps = {
  id: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'UserForm' })(UserForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/UserForm/index.js');

  __REACT_HOT_LOADER__.register(UserForm, 'UserForm', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/UserForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/UserForm/index.js');
}();

;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _reduxForm = __webpack_require__(9);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _Grid = __webpack_require__(21);

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = __webpack_require__(22);

var _Paper2 = _interopRequireDefault(_Paper);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  content: {
    padding: '0 24px 12px'
  },
  actions: {
    padding: '8px 12px'
  }
};

var VendorForm = function VendorForm(_ref) {
  var id = _ref.id,
      classes = _ref.classes,
      handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    _Paper2.default,
    { component: _reduxForm.Form, onSubmit: handleSubmit, method: 'POST' },
    _react2.default.createElement(
      _Toolbar2.default,
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: 'headline' },
        id ? 'Update' : 'Create',
        ' vendor'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      id && _react2.default.createElement(_reduxForm.Field, { name: '_id', type: 'hidden', component: 'input' }),
      _react2.default.createElement(_reduxForm.Field, { name: '_csrf', type: 'hidden', component: 'input' }),
      _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 24 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 8 },
          _react2.default.createElement(_reduxForm.Field, { name: 'name', label: 'Name', type: 'text', component: _components.TextField, required: true }),
          _react2.default.createElement(_reduxForm.Field, { name: 'description', label: 'Description', type: 'textarea', component: _components.TextField }),
          _react2.default.createElement(_components.DraftRichEditor, null)
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, sm: 4 },
          _react2.default.createElement(_reduxForm.Field, { name: 'slug', type: 'text', label: 'Slug', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.title', type: 'text', label: 'Meta Title', component: _components.TextField }),
          _react2.default.createElement(_reduxForm.Field, { name: 'meta.description', label: 'Meta Description', component: _components.TextField })
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.actions },
      _react2.default.createElement(
        _Button2.default,
        { type: 'submit', disabled: submitting },
        id ? 'Update' : 'Create'
      )
    )
  );
};

VendorForm.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string,
  submitting: _propTypes2.default.bool
};

VendorForm.defaultProps = {
  id: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'VendorForm' })(VendorForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/VendorForm/index.js');

  __REACT_HOT_LOADER__.register(VendorForm, 'VendorForm', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/VendorForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/forms/VendorForm/index.js');
}();

;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(25);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(3);

var _CSSTransitionGroup = __webpack_require__(249);

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _reactRouter = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// import shallowEqual from 'recompose/shallowEqual'


var styleSheet = exports.styleSheet = function styleSheet(theme) {
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
};

var AppContent = function AppContent(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      children = _ref2.children,
      location = _ref2.location;
  return _react2.default.createElement(
    _CSSTransitionGroup2.default,
    {
      className: (0, _classnames2.default)(classes.content, className),
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
    _react2.default.cloneElement(children, {
      location: location,
      key: location.pathname
    })
  );
};

AppContent.propTypes = {
  children: _propTypes2.default.node,
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  location: _propTypes2.default.object.isRequired
};

var _default = (0, _reactRouter.withRouter)((0, _styles.withStyles)(styleSheet, { name: 'AppContent' })(AppContent));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppContent/index.js');

  __REACT_HOT_LOADER__.register(AppContent, 'AppContent', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppContent/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppContent/index.js');
}();

;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = __webpack_require__(250);

var _compose2 = _interopRequireDefault(_compose);

var _NavLink = __webpack_require__(248);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _styles = __webpack_require__(3);

var _List = __webpack_require__(235);

var _List2 = _interopRequireDefault(_List);

var _withWidth = __webpack_require__(241);

var _withWidth2 = _interopRequireDefault(_withWidth);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Drawer = __webpack_require__(231);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(230);

var _Divider2 = _interopRequireDefault(_Divider);

var _Folder = __webpack_require__(206);

var _Folder2 = _interopRequireDefault(_Folder);

var _Dashboard = __webpack_require__(205);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _LocalMall = __webpack_require__(220);

var _LocalMall2 = _interopRequireDefault(_LocalMall);

var _Settings = __webpack_require__(224);

var _Settings2 = _interopRequireDefault(_Settings);

var _Store = __webpack_require__(226);

var _Store2 = _interopRequireDefault(_Store);

var _People = __webpack_require__(222);

var _People2 = _interopRequireDefault(_People);

var _Stars = __webpack_require__(225);

var _Stars2 = _interopRequireDefault(_Stars);

var _InsertDriveFile = __webpack_require__(216);

var _InsertDriveFile2 = _interopRequireDefault(_InsertDriveFile);

var _LibraryAdd = __webpack_require__(219);

var _LibraryAdd2 = _interopRequireDefault(_LibraryAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styleSheet = exports.styleSheet = function styleSheet(theme) {
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
      '&:hover': {
        backgroundColor: theme.palette.text.lightDivider
      },
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
};

var links = [{
  to: '/',
  label: 'Dashboard',
  exact: true,
  icon: _Dashboard2.default
}, {
  to: '/products',
  label: 'Products',
  icon: _LocalMall2.default
}, {
  to: '/categories',
  label: 'Categories',
  icon: _Folder2.default
}, {
  to: '/vendors',
  label: 'Vendors',
  icon: _Stars2.default
}, {
  to: '/shops',
  label: 'Shops',
  icon: _Store2.default
}, {
  to: '/users',
  label: 'Users',
  icon: _People2.default
}, {
  to: '/pages',
  label: 'Pages',
  icon: _InsertDriveFile2.default
}, {
  to: '/import',
  label: 'Import',
  icon: _LibraryAdd2.default
}];

var AppDrawer = function AppDrawer(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      onRequestClose = _ref2.onRequestClose,
      drawerOpen = _ref2.drawerOpen,
      width = _ref2.width;

  var drawerDocked = (0, _withWidth.isWidthUp)('lg', width);

  return _react2.default.createElement(
    _Drawer2.default,
    {
      className: className,
      classes: {
        paper: classes.paper
      },
      type: drawerDocked ? 'permanent' : 'temporary',
      open: drawerDocked || drawerOpen
    },
    _react2.default.createElement(
      'div',
      { className: classes.nav },
      _react2.default.createElement(
        _Toolbar2.default,
        { className: classes.toolbar },
        _react2.default.createElement(
          _NavLink2.default,
          { className: classes.title, to: '/', onClick: onRequestClose },
          _react2.default.createElement(
            _Typography2.default,
            { type: 'title' },
            'Trendberry'
          )
        ),
        _react2.default.createElement(_Divider2.default, { absolute: true })
      ),
      _react2.default.createElement(
        _List2.default,
        { component: 'div' },
        links.map(function (link) {
          return _react2.default.createElement(
            _List.ListItem,
            { key: link.to, to: link.to, exact: link.exact, component: _NavLink2.default, onClick: onRequestClose, className: classes.listItem },
            _react2.default.createElement(
              _List.ListItemIcon,
              { className: classes.listItemIcon },
              _react2.default.createElement(link.icon, null)
            ),
            _react2.default.createElement(_List.ListItemText, { primary: link.label })
          );
        })
      ),
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(
        _List2.default,
        { component: 'div' },
        _react2.default.createElement(
          _List.ListItem,
          { to: '/settings', component: _NavLink2.default, onClick: onRequestClose, className: classes.listItem },
          _react2.default.createElement(
            _List.ListItemIcon,
            { className: classes.listItemIcon },
            _react2.default.createElement(_Settings2.default, null)
          ),
          _react2.default.createElement(_List.ListItemText, { primary: 'Settings' })
        )
      )
    )
  );
};

AppDrawer.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  onRequestClose: _propTypes2.default.func.isRequired,
  drawerOpen: _propTypes2.default.bool.isRequired,
  width: _propTypes2.default.string.isRequired
};

var _default = (0, _compose2.default)((0, _withWidth2.default)({ resizeInterval: 16.67 }), (0, _styles.withStyles)(styleSheet, { name: 'AppDrawer' }))(AppDrawer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppDrawer/index.js');

  __REACT_HOT_LOADER__.register(links, 'links', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppDrawer/index.js');

  __REACT_HOT_LOADER__.register(AppDrawer, 'AppDrawer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppDrawer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppDrawer/index.js');
}();

;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _reactRouterConfig = __webpack_require__(23);

var _styles = __webpack_require__(3);

var _AppBar = __webpack_require__(227);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(221);

var _Menu2 = _interopRequireDefault(_Menu);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Avatar = __webpack_require__(228);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Menu3 = __webpack_require__(59);

var _Menu4 = _interopRequireDefault(_Menu3);

var _MenuItem = __webpack_require__(60);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _components = __webpack_require__(2);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styleSheet = function styleSheet(theme) {
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
};

var AppFrame = function AppFrame(_ref) {
  var classes = _ref.classes,
      route = _ref.route,
      title = _ref.title,
      drawerOpen = _ref.drawerOpen,
      handleDrawerClose = _ref.handleDrawerClose,
      handleDrawerToggle = _ref.handleDrawerToggle,
      user = _ref.user,
      other = _objectWithoutProperties(_ref, ['classes', 'route', 'title', 'drawerOpen', 'handleDrawerClose', 'handleDrawerToggle', 'user']);

  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'fixed' },
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(
          _IconButton2.default,
          { onClick: handleDrawerToggle, className: classes.menuButton, color: 'contrast' },
          _react2.default.createElement(_Menu2.default, null)
        ),
        title && _react2.default.createElement(
          _Typography2.default,
          { type: 'title', color: 'inherit' },
          title
        ),
        _react2.default.createElement('div', { className: classes.grow }),
        _react2.default.createElement(
          _IconButton2.default,
          {
            'aria-owns': 'user-menu',
            'aria-haspopup': 'true',
            disableRipple: true,
            onClick: other.handleRequestUserMenuOpen,
            classes: {
              root: classes.userMenuButton
            }
          },
          _react2.default.createElement(_Avatar2.default, { alt: user.displayName, src: '/avatar.png' })
        ),
        _react2.default.createElement(
          _Menu4.default,
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
              paper: classes.userMenu
            },
            open: other.userMenuOpen,
            onRequestClose: other.handleRequestUserMenuClose
          },
          _react2.default.createElement(
            'div',
            { className: classes.userName },
            _react2.default.createElement(
              _Typography2.default,
              { type: 'subheading', color: 'inherit', classes: { root: classes.userDisplayName } },
              user.displayName
            ),
            ' ',
            _react2.default.createElement(_Avatar2.default, { alt: user.displayName, src: '/avatar.png' })
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: other.handleRequestUserMenuClose, component: _Link2.default, to: '/users/' + user._id },
            'Profile'
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { onClick: other.handleSignOut },
            'Log out'
          )
        )
      )
    ),
    _react2.default.createElement(_containers.AppDrawer, {
      className: classes.drawer,
      onRequestClose: handleDrawerClose,
      drawerOpen: drawerOpen
    }),
    _react2.default.createElement(
      _components.AppContent,
      null,
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    ),
    _react2.default.createElement(_components.Notifications, null)
  );
};

AppFrame.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  drawerOpen: _propTypes2.default.bool.isRequired,
  handleDrawerClose: _propTypes2.default.func.isRequired,
  handleDrawerToggle: _propTypes2.default.func.isRequired,
  route: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.string,
  user: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'AppFrame' })(AppFrame);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppFrame/index.js');

  __REACT_HOT_LOADER__.register(AppFrame, 'AppFrame', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppFrame/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/layout/AppFrame/index.js');
}();

;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryCreatePage = function CategoryCreatePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.CategoryForm, { form: 'CategoryCreateForm' })
  );
};

var _default = CategoryCreatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CategoryCreatePage, 'CategoryCreatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/CategoryCreatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/CategoryCreatePage/index.js');
}();

;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(3);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ModeEdit = __webpack_require__(28);

var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _Delete = __webpack_require__(27);

var _Delete2 = _interopRequireDefault(_Delete);

var _Checkbox = __webpack_require__(29);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Add = __webpack_require__(26);

var _Add2 = _interopRequireDefault(_Add);

var _Dialog = __webpack_require__(20);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Table = __webpack_require__(14);

var _containers = __webpack_require__(5);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    whiteSpace: 'nowrap',
    'tr:hover &': {
      display: 'block'
    }
  }
};

var CategoryListPage = function CategoryListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteCategory = _ref.deleteCategory,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _containers.Table,
      {
        totalRows: count,
        rows: list,
        title: 'Categories',
        toolbar: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_components.SearchWidget, null),
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Add category', to: '/categories/create', component: _Link2.default },
            _react2.default.createElement(_Add2.default, null)
          )
        )
      },
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox', style: { width: '1%' } },
            _react2.default.createElement(_Checkbox2.default, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox' },
            _react2.default.createElement(_Checkbox2.default, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none', style: { width: '98%' } },
            _react2.default.createElement(
              _Table.TableSortLabel,
              {
                active: sort === 'name',
                component: _Link2.default,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        padding: 'none',
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none' },
            _react2.default.createElement(_components.TableRowCategoryName, { item: list[rowIndex] })
          );
        }
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header() {
          return _react2.default.createElement(_Table.TableCell, null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { classes: { root: classes.actionsCell }, padding: 'none' },
            _react2.default.createElement(
              'div',
              { className: classes.actions },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Edit category ' + list[rowIndex].name, to: '/categories/' + list[rowIndex]._id, component: _Link2.default },
                _react2.default.createElement(_ModeEdit2.default, null)
              ),
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Detele category ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                _react2.default.createElement(_Delete2.default, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && _react2.default.createElement(
      _Dialog2.default,
      { open: open, onRequestClose: onRequestCloseDialog },
      _react2.default.createElement(
        _Dialog.DialogTitle,
        null,
        'Delete category?'
      ),
      _react2.default.createElement(
        _Dialog.DialogContent,
        null,
        _react2.default.createElement(
          _Typography2.default,
          null,
          'You are about to delete category',
          _react2.default.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          _react2.default.createElement('br', null),
          'Are you sure?'
        )
      ),
      _react2.default.createElement(
        _Dialog.DialogActions,
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick() {
              return deleteCategory(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

CategoryListPage.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  count: _propTypes2.default.number.isRequired,
  deleteCategory: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  onRequestCloseDialog: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  openDeleteDialog: _propTypes2.default.func.isRequired,
  selectedIndex: _propTypes2.default.number
};

CategoryListPage.defulatProps = {
  selectedIndex: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'CategoryListPage' })(CategoryListPage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/CategoryListPage/index.js');

  __REACT_HOT_LOADER__.register(CategoryListPage, 'CategoryListPage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/CategoryListPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/CategoryListPage/index.js');
}();

;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryUpdatePage = function CategoryUpdatePage(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.CategoryForm, { form: 'CategoryUpdateForm', id: id })
  );
};

CategoryUpdatePage.propTypes = {
  id: _propTypes2.default.string.isRequired
};

var _default = CategoryUpdatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CategoryUpdatePage, 'CategoryUpdatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/CategoryUpdatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/CategoryUpdatePage/index.js');
}();

;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    null,
    'Hello World'
  );
}; // https://github.com/diegohaz/arc/wiki/Atomic-Design
var _default = HomePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/HomePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/HomePage/index.js');
}();

;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductCreatePage = function ProductCreatePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.ProductForm, { form: 'ProductCreateForm' })
  );
};

var _default = ProductCreatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductCreatePage, 'ProductCreatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ProductCreatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ProductCreatePage/index.js');
}();

;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(3);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ModeEdit = __webpack_require__(28);

var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _Delete = __webpack_require__(27);

var _Delete2 = _interopRequireDefault(_Delete);

var _Checkbox = __webpack_require__(29);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Add = __webpack_require__(26);

var _Add2 = _interopRequireDefault(_Add);

var _Dialog = __webpack_require__(20);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Table = __webpack_require__(14);

var _containers = __webpack_require__(5);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    whiteSpace: 'nowrap',
    'tr:hover &': {
      display: 'block'
    }
  }
};

var ProductListPage = function ProductListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteProduct = _ref.deleteProduct,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _containers.Table,
      {
        totalRows: count,
        rows: list,
        title: 'Products',
        toolbar: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_components.SearchWidget, null),
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Add product', to: '/products/create', component: _Link2.default },
            _react2.default.createElement(_Add2.default, null)
          )
        )
      },
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox', style: { width: '1%' } },
            _react2.default.createElement(_Checkbox2.default, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox' },
            _react2.default.createElement(_Checkbox2.default, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none', style: { width: '98%' } },
            _react2.default.createElement(
              _Table.TableSortLabel,
              {
                active: sort === 'name',
                component: _Link2.default,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        padding: 'none',
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none' },
            list[rowIndex].name
          );
        }
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header() {
          return _react2.default.createElement(_Table.TableCell, null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { classes: { root: classes.actionsCell }, padding: 'none' },
            _react2.default.createElement(
              'div',
              { className: classes.actions },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Edit product ' + list[rowIndex].name, to: '/products/' + list[rowIndex]._id, component: _Link2.default },
                _react2.default.createElement(_ModeEdit2.default, null)
              ),
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Detele product ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                _react2.default.createElement(_Delete2.default, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && _react2.default.createElement(
      _Dialog2.default,
      { open: open, onRequestClose: onRequestCloseDialog },
      _react2.default.createElement(
        _Dialog.DialogTitle,
        null,
        'Delete product?'
      ),
      _react2.default.createElement(
        _Dialog.DialogContent,
        null,
        _react2.default.createElement(
          _Typography2.default,
          null,
          'You are about to delete product',
          _react2.default.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          _react2.default.createElement('br', null),
          'Are you sure?'
        )
      ),
      _react2.default.createElement(
        _Dialog.DialogActions,
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick() {
              return deleteProduct(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

ProductListPage.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  count: _propTypes2.default.number.isRequired,
  deleteProduct: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  onRequestCloseDialog: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  openDeleteDialog: _propTypes2.default.func.isRequired,
  selectedIndex: _propTypes2.default.number
};

ProductListPage.defulatProps = {
  selectedIndex: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'ProductListPage' })(ProductListPage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ProductListPage/index.js');

  __REACT_HOT_LOADER__.register(ProductListPage, 'ProductListPage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ProductListPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ProductListPage/index.js');
}();

;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductUpdatePage = function ProductUpdatePage(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.ProductForm, { form: 'ProductUpdateForm', id: id })
  );
};

ProductUpdatePage.propTypes = {
  id: _propTypes2.default.string.isRequired
};

var _default = ProductUpdatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductUpdatePage, 'ProductUpdatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ProductUpdatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ProductUpdatePage/index.js');
}();

;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShopCreatePage = function ShopCreatePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.ShopForm, { form: 'ShopCreateForm' })
  );
};

var _default = ShopCreatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ShopCreatePage, 'ShopCreatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ShopCreatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ShopCreatePage/index.js');
}();

;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(3);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ModeEdit = __webpack_require__(28);

var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _Delete = __webpack_require__(27);

var _Delete2 = _interopRequireDefault(_Delete);

var _Checkbox = __webpack_require__(29);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Add = __webpack_require__(26);

var _Add2 = _interopRequireDefault(_Add);

var _Dialog = __webpack_require__(20);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Table = __webpack_require__(14);

var _containers = __webpack_require__(5);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    whiteSpace: 'nowrap',
    'tr:hover &': {
      display: 'block'
    }
  }
};

var ShopListPage = function ShopListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteShop = _ref.deleteShop,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _containers.Table,
      {
        totalRows: count,
        rows: list,
        title: 'Shops',
        toolbar: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_components.SearchWidget, null),
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Add shop', to: '/shops/create', component: _Link2.default },
            _react2.default.createElement(_Add2.default, null)
          )
        )
      },
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox', style: { width: '1%' } },
            _react2.default.createElement(_Checkbox2.default, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox' },
            _react2.default.createElement(_Checkbox2.default, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none', style: { width: '98%' } },
            _react2.default.createElement(
              _Table.TableSortLabel,
              {
                active: sort === 'name',
                component: _Link2.default,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        padding: 'none',
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none' },
            list[rowIndex].name
          );
        }
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header() {
          return _react2.default.createElement(_Table.TableCell, null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { classes: { root: classes.actionsCell }, padding: 'none' },
            _react2.default.createElement(
              'div',
              { className: classes.actions },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Edit shop ' + list[rowIndex].name, to: '/shops/' + list[rowIndex]._id, component: _Link2.default },
                _react2.default.createElement(_ModeEdit2.default, null)
              ),
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Detele shop ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                _react2.default.createElement(_Delete2.default, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && _react2.default.createElement(
      _Dialog2.default,
      { open: open, onRequestClose: onRequestCloseDialog },
      _react2.default.createElement(
        _Dialog.DialogTitle,
        null,
        'Delete shop?'
      ),
      _react2.default.createElement(
        _Dialog.DialogContent,
        null,
        _react2.default.createElement(
          _Typography2.default,
          null,
          'You are about to delete shop',
          _react2.default.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          _react2.default.createElement('br', null),
          'Are you sure?'
        )
      ),
      _react2.default.createElement(
        _Dialog.DialogActions,
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick() {
              return deleteShop(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

ShopListPage.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  count: _propTypes2.default.number.isRequired,
  deleteShop: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  onRequestCloseDialog: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  openDeleteDialog: _propTypes2.default.func.isRequired,
  selectedIndex: _propTypes2.default.number
};

ShopListPage.defulatProps = {
  selectedIndex: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'ShopListPage' })(ShopListPage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ShopListPage/index.js');

  __REACT_HOT_LOADER__.register(ShopListPage, 'ShopListPage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ShopListPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ShopListPage/index.js');
}();

;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShopUpdatePage = function ShopUpdatePage(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.ShopForm, { id: id })
  );
};

ShopUpdatePage.propTypes = {
  id: _propTypes2.default.string.isRequired
};

var _default = ShopUpdatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ShopUpdatePage, 'ShopUpdatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ShopUpdatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/ShopUpdatePage/index.js');
}();

;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _Grid = __webpack_require__(21);

var _Grid2 = _interopRequireDefault(_Grid);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
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
};

var SigninPage = function SigninPage(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    _Grid2.default,
    { container: true, alignItems: 'center', justify: 'center', className: classes.root },
    _react2.default.createElement(
      'div',
      { className: classes.background },
      _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1440 900' },
        _react2.default.createElement('path', { d: 'M186,-543L720,-438L1193,-493Z', fill: '#c4c4c4', stroke: '#c4c4c4', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M840,1452L303,1530L1630,1586Z', fill: '#474747', stroke: '#474747', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1193,-493L1419,-516L1887,-663Z', fill: '#999999', stroke: '#999999', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M186,-543L1193,-493L1887,-663Z', fill: '#b1b1b1', stroke: '#b1b1b1', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-203,-586L186,-543L1887,-663Z', fill: '#cbcbcb', stroke: '#cbcbcb', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1826,938L1928,1388L1996,265Z', fill: '#3d3d3d', stroke: '#3d3d3d', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1826,608L1826,938L1996,265Z', fill: '#4c4c4c', stroke: '#4c4c4c', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1487,367L1996,265L2047,-61Z', fill: '#666666', stroke: '#666666', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1512,-286L1487,367L2047,-61Z', fill: '#787878', stroke: '#787878', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1887,-663L1512,-286L2047,-61Z', fill: '#7c7c7c', stroke: '#7c7c7c', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1996,265L1928,1388L2047,-61Z', fill: '#4b4b4b', stroke: '#4b4b4b', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1487,367L1826,608L1996,265Z', fill: '#5d5d5d', stroke: '#5d5d5d', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1419,-516L1512,-286L1887,-663Z', fill: '#909090', stroke: '#909090', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1826,938L1441,1062L1928,1388Z', fill: '#383838', stroke: '#383838', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1441,1062L1630,1586L1928,1388Z', fill: '#2c2c2c', stroke: '#2c2c2c', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1409,563L1441,1062L1826,938Z', fill: '#535353', stroke: '#535353', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1409,563L1826,938L1826,608Z', fill: '#525252', stroke: '#525252', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1487,367L1409,563L1826,608Z', fill: '#656565', stroke: '#656565', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1126,341L1487,367L1512,-286Z', fill: '#888888', stroke: '#888888', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M988,-215L1126,341L1512,-286Z', fill: '#999999', stroke: '#999999', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1067,1344L840,1452L1630,1586Z', fill: '#3f3f3f', stroke: '#3f3f3f', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1441,1062L1067,1344L1630,1586Z', fill: '#3e3e3e', stroke: '#3e3e3e', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1409,563L1106,1023L1441,1062Z', fill: '#5f5f5f', stroke: '#5f5f5f', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1419,-516L1193,-493L1512,-286Z', fill: '#9f9f9f', stroke: '#9f9f9f', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1193,-493L988,-215L1512,-286Z', fill: '#a3a3a3', stroke: '#a3a3a3', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1081,526L1106,1023L1409,563Z', fill: '#6f6f6f', stroke: '#6f6f6f', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1106,1023L1067,1344L1441,1062Z', fill: '#545454', stroke: '#545454', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1126,341L1409,563L1487,367Z', fill: '#787878', stroke: '#787878', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1126,341L1081,526L1409,563Z', fill: '#7c7c7c', stroke: '#7c7c7c', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M1081,526L780,523L1106,1023Z', fill: '#7a7a7a', stroke: '#7a7a7a', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M780,523L737,1018L1106,1023Z', fill: '#767676', stroke: '#767676', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M988,-215L795,-53L1126,341Z', fill: '#a2a2a2', stroke: '#a2a2a2', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M795,-53L766,156L1126,341Z', fill: '#a0a0a0', stroke: '#a0a0a0', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M720,-438L988,-215L1193,-493Z', fill: '#b2b2b2', stroke: '#b2b2b2', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M737,1018L1067,1344L1106,1023Z', fill: '#616161', stroke: '#616161', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M780,523L1081,526L1126,341Z', fill: '#878787', stroke: '#878787', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M766,156L780,523L1126,341Z', fill: '#949494', stroke: '#949494', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M737,1018L840,1452L1067,1344Z', fill: '#595959', stroke: '#595959', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M720,-438L795,-53L988,-215Z', fill: '#b4b4b4', stroke: '#b4b4b4', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M412,949L303,1530L737,1018Z', fill: '#767676', stroke: '#767676', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M412,949L737,1018L780,523Z', fill: '#848484', stroke: '#848484', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M766,156L331,230L780,523Z', fill: '#a4a4a4', stroke: '#a4a4a4', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M720,-438L375,-109L795,-53Z', fill: '#bebebe', stroke: '#bebebe', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M737,1018L303,1530L840,1452Z', fill: '#606060', stroke: '#606060', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M200,545L412,949L780,523Z', fill: '#979797', stroke: '#979797', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M375,-109L766,156L795,-53Z', fill: '#b4b4b4', stroke: '#b4b4b4', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M331,230L200,545L780,523Z', fill: '#a6a6a6', stroke: '#a6a6a6', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M375,-109L331,230L766,156Z', fill: '#b8b8b8', stroke: '#b8b8b8', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M186,-543L375,-109L720,-438Z', fill: '#d0d0d0', stroke: '#d0d0d0', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M186,-543L-168,-219L375,-109Z', fill: '#dadada', stroke: '#dadada', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M200,545L-40,661L412,949Z', fill: '#a0a0a0', stroke: '#a0a0a0', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-40,661L8,1131L412,949Z', fill: '#979797', stroke: '#979797', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M8,1131L303,1530L412,949Z', fill: '#7d7d7d', stroke: '#7d7d7d', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-139,145L331,230L375,-109Z', fill: '#c7c7c7', stroke: '#c7c7c7', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-168,-219L-139,145L375,-109Z', fill: '#d5d5d5', stroke: '#d5d5d5', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M8,1131L-183,1516L303,1530Z', fill: '#757575', stroke: '#757575', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-139,145L200,545L331,230Z', fill: '#bcbcbc', stroke: '#bcbcbc', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-203,-586L-168,-219L186,-543Z', fill: '#e7e7e7', stroke: '#e7e7e7', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-139,145L-40,661L200,545Z', fill: '#b7b7b7', stroke: '#b7b7b7', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-139,145L-494,513L-40,661Z', fill: '#bfbfbf', stroke: '#bfbfbf', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-388,1346L-183,1516L8,1131Z', fill: '#818181', stroke: '#818181', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-40,661L-468,1143L8,1131Z', fill: '#9d9d9d', stroke: '#9d9d9d', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-468,1143L-388,1346L8,1131Z', fill: '#8e8e8e', stroke: '#8e8e8e', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-168,-219L-391,-129L-139,145Z', fill: '#dddddd', stroke: '#dddddd', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-494,513L-468,1143L-40,661Z', fill: '#aeaeae', stroke: '#aeaeae', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-203,-586L-453,-561L-168,-219Z', fill: '#eeeeee', stroke: '#eeeeee', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-453,-561L-391,-129L-168,-219Z', fill: '#eaeaea', stroke: '#eaeaea', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-391,-129L-608,313L-139,145Z', fill: '#d9d9d9', stroke: '#d9d9d9', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-608,313L-494,513L-139,145Z', fill: '#cccccc', stroke: '#cccccc', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-453,-561L-608,313L-391,-129Z', fill: '#e7e7e7', stroke: '#e7e7e7', strokeWidth: '1.51' }),
        _react2.default.createElement('path', { d: 'M-494,513L-608,313L-468,1143Z', fill: '#b9b9b9', stroke: '#b9b9b9', strokeWidth: '1.51' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: classes.form },
      _react2.default.createElement(_containers.SigninForm, null)
    )
  );
};

SigninPage.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'SigninPage' })(SigninPage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/SigninPage/index.js');

  __REACT_HOT_LOADER__.register(SigninPage, 'SigninPage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/SigninPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/SigninPage/index.js');
}();

;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCreatePage = function UserCreatePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.UserForm, { form: 'UserCreateForm' })
  );
};

var _default = UserCreatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserCreatePage, 'UserCreatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/UserCreatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/UserCreatePage/index.js');
}();

;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(3);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ModeEdit = __webpack_require__(28);

var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _Delete = __webpack_require__(27);

var _Delete2 = _interopRequireDefault(_Delete);

var _Checkbox = __webpack_require__(29);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Add = __webpack_require__(26);

var _Add2 = _interopRequireDefault(_Add);

var _Dialog = __webpack_require__(20);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Table = __webpack_require__(14);

var _containers = __webpack_require__(5);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    whiteSpace: 'nowrap',
    'tr:hover &': {
      display: 'block'
    }
  }
};

var UserListPage = function UserListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteUser = _ref.deleteUser,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _containers.Table,
      {
        totalRows: count,
        rows: list,
        title: 'Users',
        toolbar: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_components.SearchWidget, null),
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Add user', to: '/users/create', component: _Link2.default },
            _react2.default.createElement(_Add2.default, null)
          )
        )
      },
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox', style: { width: '1%' } },
            _react2.default.createElement(_Checkbox2.default, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox' },
            _react2.default.createElement(_Checkbox2.default, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none', style: { width: '30%' } },
            _react2.default.createElement(
              _Table.TableSortLabel,
              {
                active: sort === 'displayName',
                component: _Link2.default,
                direction: order,
                to: getSortLink('displayName')
              },
              'Name'
            )
          );
        },
        padding: 'none',
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none' },
            list[rowIndex].displayName
          );
        }
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref6) {
          var getSortLink = _ref6.getSortLink,
              order = _ref6.order,
              sort = _ref6.sort;
          return _react2.default.createElement(
            _Table.TableCell,
            null,
            _react2.default.createElement(
              _Table.TableSortLabel,
              {
                active: sort === 'email',
                component: _Link2.default,
                direction: order,
                to: getSortLink('email')
              },
              'Email'
            )
          );
        },
        cell: function cell(_ref7) {
          var rowIndex = _ref7.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            null,
            list[rowIndex].email
          );
        }
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header() {
          return _react2.default.createElement(_Table.TableCell, null);
        },
        cell: function cell(_ref8) {
          var rowIndex = _ref8.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { classes: { root: classes.actionsCell }, padding: 'none', style: { width: '1%' } },
            _react2.default.createElement(
              'div',
              { className: classes.actions },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Edit user ' + list[rowIndex].email, to: '/users/' + list[rowIndex]._id, component: _Link2.default },
                _react2.default.createElement(_ModeEdit2.default, null)
              ),
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Detele user ' + list[rowIndex].email, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                _react2.default.createElement(_Delete2.default, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && _react2.default.createElement(
      _Dialog2.default,
      { open: open, onRequestClose: onRequestCloseDialog },
      _react2.default.createElement(
        _Dialog.DialogTitle,
        null,
        'Delete user?'
      ),
      _react2.default.createElement(
        _Dialog.DialogContent,
        null,
        _react2.default.createElement(
          _Typography2.default,
          null,
          'You are about to delete user',
          _react2.default.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].email
          ),
          '.',
          _react2.default.createElement('br', null),
          'Are you sure?'
        )
      ),
      _react2.default.createElement(
        _Dialog.DialogActions,
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick() {
              return deleteUser(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

UserListPage.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  count: _propTypes2.default.number.isRequired,
  deleteUser: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  onRequestCloseDialog: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  openDeleteDialog: _propTypes2.default.func.isRequired,
  selectedIndex: _propTypes2.default.number
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'UserListPage' })(UserListPage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/UserListPage/index.js');

  __REACT_HOT_LOADER__.register(UserListPage, 'UserListPage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/UserListPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/UserListPage/index.js');
}();

;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserUpdatePage = function UserUpdatePage(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.UserForm, { form: 'UserUpdateForm', id: id })
  );
};

UserUpdatePage.propTypes = {
  id: _propTypes2.default.string.isRequired
};

var _default = UserUpdatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserUpdatePage, 'UserUpdatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/UserUpdatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/UserUpdatePage/index.js');
}();

;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VendorCreatePage = function VendorCreatePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.VendorForm, { form: 'VendorCreateForm' })
  );
};

var _default = VendorCreatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VendorCreatePage, 'VendorCreatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/VendorCreatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/VendorCreatePage/index.js');
}();

;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(3);

var _Button = __webpack_require__(10);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ModeEdit = __webpack_require__(28);

var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _Delete = __webpack_require__(27);

var _Delete2 = _interopRequireDefault(_Delete);

var _Checkbox = __webpack_require__(29);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Add = __webpack_require__(26);

var _Add2 = _interopRequireDefault(_Add);

var _Dialog = __webpack_require__(20);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Table = __webpack_require__(14);

var _containers = __webpack_require__(5);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  actionsCell: {
    padding: 0,
    paddingRight: 2
  },
  actions: {
    display: 'none',
    whiteSpace: 'nowrap',
    'tr:hover &': {
      display: 'block'
    }
  }
};

var VendorListPage = function VendorListPage(_ref) {
  var selectedIndex = _ref.selectedIndex,
      classes = _ref.classes,
      count = _ref.count,
      deleteVendor = _ref.deleteVendor,
      list = _ref.list,
      open = _ref.open,
      openDeleteDialog = _ref.openDeleteDialog,
      onRequestCloseDialog = _ref.onRequestCloseDialog;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _containers.Table,
      {
        totalRows: count,
        rows: list,
        title: 'Vendors',
        toolbar: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_components.SearchWidget, null),
          _react2.default.createElement(
            _IconButton2.default,
            { 'aria-label': 'Add vendor', to: '/vendors/create', component: _Link2.default },
            _react2.default.createElement(_Add2.default, null)
          )
        )
      },
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref2) {
          var handleSelectAllClick = _ref2.handleSelectAllClick;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox', style: { width: '1%' } },
            _react2.default.createElement(_Checkbox2.default, { onChange: handleSelectAllClick })
          );
        },
        cell: function cell(_ref3) {
          var handleRowClick = _ref3.handleRowClick,
              isSelected = _ref3.isSelected,
              rowIndex = _ref3.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'checkbox' },
            _react2.default.createElement(_Checkbox2.default, { onClick: function onClick(event) {
                return handleRowClick(event, list[rowIndex]._id);
              }, checked: isSelected(list[rowIndex]._id) })
          );
        },
        checkbox: true
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header(_ref4) {
          var getSortLink = _ref4.getSortLink,
              order = _ref4.order,
              sort = _ref4.sort;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none', style: { width: '98%' } },
            _react2.default.createElement(
              _Table.TableSortLabel,
              {
                active: sort === 'name',
                component: _Link2.default,
                direction: order,
                to: getSortLink('name')
              },
              'Name'
            )
          );
        },
        padding: 'none',
        cell: function cell(_ref5) {
          var rowIndex = _ref5.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { padding: 'none' },
            list[rowIndex].name
          );
        }
      }),
      _react2.default.createElement(_components.TableColumn, {
        header: function header() {
          return _react2.default.createElement(_Table.TableCell, null);
        },
        cell: function cell(_ref6) {
          var rowIndex = _ref6.rowIndex;
          return _react2.default.createElement(
            _Table.TableCell,
            { classes: { root: classes.actionsCell }, padding: 'none' },
            _react2.default.createElement(
              'div',
              { className: classes.actions },
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Edit vendor ' + list[rowIndex].name, to: '/vendors/' + list[rowIndex]._id, component: _Link2.default },
                _react2.default.createElement(_ModeEdit2.default, null)
              ),
              _react2.default.createElement(
                _IconButton2.default,
                { 'aria-label': 'Detele vendor ' + list[rowIndex].name, onClick: function onClick(event) {
                    return openDeleteDialog(rowIndex, event);
                  } },
                _react2.default.createElement(_Delete2.default, null)
              )
            )
          );
        }
      })
    ),
    selectedIndex !== undefined && _react2.default.createElement(
      _Dialog2.default,
      { open: open, onRequestClose: onRequestCloseDialog },
      _react2.default.createElement(
        _Dialog.DialogTitle,
        null,
        'Delete vendor?'
      ),
      _react2.default.createElement(
        _Dialog.DialogContent,
        null,
        _react2.default.createElement(
          _Typography2.default,
          null,
          'You are about to delete vendor',
          _react2.default.createElement(
            'b',
            null,
            ' ',
            list[selectedIndex].name
          ),
          '.',
          _react2.default.createElement('br', null),
          'Are you sure?'
        )
      ),
      _react2.default.createElement(
        _Dialog.DialogActions,
        null,
        _react2.default.createElement(
          _Button2.default,
          { onClick: onRequestCloseDialog, color: 'default' },
          'Cancel'
        ),
        _react2.default.createElement(
          _Button2.default,
          { onClick: function onClick() {
              return deleteVendor(list[selectedIndex]._id);
            }, color: 'primary' },
          'Ok'
        )
      )
    )
  );
};

VendorListPage.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  count: _propTypes2.default.number.isRequired,
  deleteVendor: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  onRequestCloseDialog: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool.isRequired,
  openDeleteDialog: _propTypes2.default.func.isRequired,
  selectedIndex: _propTypes2.default.number
};

VendorListPage.defulatProps = {
  selectedIndex: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'VendorListPage' })(VendorListPage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/VendorListPage/index.js');

  __REACT_HOT_LOADER__.register(VendorListPage, 'VendorListPage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/VendorListPage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/VendorListPage/index.js');
}();

;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VendorUpdatePage = function VendorUpdatePage(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.VendorForm, { form: 'VendorUpdateForm', id: id })
  );
};

VendorUpdatePage.propTypes = {
  id: _propTypes2.default.string.isRequired
};

var _default = VendorUpdatePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VendorUpdatePage, 'VendorUpdatePage', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/VendorUpdatePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/pages/VendorUpdatePage/index.js');
}();

;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(15);

var _Table = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


      return _react2.default.createElement(
        _Table.TableBody,
        null,
        rows.map(function (row, index) {
          var isRowSelected = isSelected(row._id);
          return _react2.default.createElement(
            _Table.TableRow,
            {
              hover: true,
              key: row._id,
              selected: isRowSelected
            },
            _react2.default.Children.map(children, function (child) {
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
                if (_react2.default.isValidElement(child.props.cell)) {
                  content = _react2.default.cloneElement(child.props.cell, cellProps);
                } else if (typeof child.props.cell === 'function') {
                  content = child.props.cell(cellProps);
                } else {
                  content = _react2.default.createElement(
                    _Table.TableCell,
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
}(_react.Component);

TableHead.propTypes = {
  children: _propTypes2.default.array.isRequired,
  handleRowClick: _propTypes2.default.func.isRequired,
  isSelected: _propTypes2.default.func.isRequired,
  rows: _propTypes2.default.array.isRequired
};

var _default = (0, _reactRouter.withRouter)(TableHead);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableHead, 'TableHead', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableBody/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableBody/index.js');
}();

;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableColumn = function TableColumn() {
  return null;
}; // import React from 'react'


TableColumn.propTypes = {
  /**
   * The horizontal alignment of the table cell content.
   */
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),

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
  header: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),

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
  cell: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),

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
  footer: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),

  /**
   * This is used to uniquely identify the column, and is not required unless
   * you a resizing columns. This will be the key given in the
   * `onColumnResizeEndCallback` on the Table.
   */
  columnKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  /**
   * The pixel width of the column.
   */
  // width: PropTypes.number.isRequired,

  /**
   * If this is a resizable column this is its minimum pixel width.
   */
  minWidth: _propTypes2.default.number,

  /**
   * If this is a resizable column this is its maximum pixel width.
   */
  maxWidth: _propTypes2.default.number,

  /**
   * The grow factor relative to other columns. Same as the flex-grow API
   * from http://www.w3.org/TR/css3-flexbox/. Basically, take any available
   * extra width and distribute it proportionally according to all columns'
   * flexGrow values. Defaults to zero (no-flexing).
   */
  flexGrow: _propTypes2.default.number,

  /**
   * Whether the column can be resized with the
   * FixedDataTableColumnResizeHandle. Please note that if a column
   * has a flex grow, once you resize the column this will be set to 0.
   *
   * This property only provides the UI for the column resizing. If this
   * is set to true, you will need to set the onColumnResizeEndCallback table
   * property and render your columns appropriately.
   */
  isResizable: _propTypes2.default.bool

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

var _default = TableColumn;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableColumn, 'TableColumn', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableColumn/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableColumn/index.js');
}();

;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(3);

var _Menu = __webpack_require__(59);

var _Menu2 = _interopRequireDefault(_Menu);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ArrowDropDown = __webpack_require__(58);

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = {
  root: {
    display: 'inline-block'
  },
  pages: {
    position: 'absolute',
    right: 36
  }
};

var TableFooterMenu = function TableFooterMenu(props) {
  var anchorEl = props.anchorEl,
      classes = props.classes,
      handleRequestClose = props.handleRequestClose,
      handleRequestOpen = props.handleRequestOpen,
      limit = props.limit,
      limitLink = props.limitLink,
      limitOptions = props.limitOptions,
      open = props.open;


  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _IconButton2.default,
      { onClick: handleRequestOpen },
      _react2.default.createElement(
        _Typography2.default,
        {
          classes: {
            root: classes.pages
          },
          type: 'caption'
        },
        limit || limitOptions[0]
      ),
      _react2.default.createElement(_ArrowDropDown2.default, null)
    ),
    _react2.default.createElement(
      _Menu2.default,
      {
        anchorEl: anchorEl,
        open: open,
        onRequestClose: handleRequestClose
      },
      limitOptions.map(function (option) {
        return _react2.default.createElement(
          _Menu.MenuItem,
          {
            component: _Link2.default,
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

TableFooterMenu.propTypes = {
  anchorEl: _propTypes2.default.any,
  classes: _propTypes2.default.object.isRequired,
  handleRequestClose: _propTypes2.default.func.isRequired,
  handleRequestOpen: _propTypes2.default.func.isRequired,
  limit: _propTypes2.default.number.isRequired,
  limitLink: _propTypes2.default.func.isRequired,
  limitOptions: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  open: _propTypes2.default.bool.isRequired
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'TableFooterMenu' })(TableFooterMenu);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooterMenu/index.js');

  __REACT_HOT_LOADER__.register(TableFooterMenu, 'TableFooterMenu', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooterMenu/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooterMenu/index.js');
}();

;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(25);

var _classnames2 = _interopRequireDefault(_classnames);

var _qs = __webpack_require__(30);

var _Link = __webpack_require__(16);

var _Link2 = _interopRequireDefault(_Link);

var _styles = __webpack_require__(3);

var _reactRouter = __webpack_require__(15);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = __webpack_require__(11);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _KeyboardArrowLeft = __webpack_require__(217);

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = __webpack_require__(218);

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _containers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var query = (0, _qs.parse)(location.search.substr(1));
  currentPageNumber === 1 ? delete query._page : query._page = currentPageNumber;

  return _extends({}, location, {
    search: '?' + (0, _qs.stringify)(_extends({}, query))
  });
}

var styleSheet = function styleSheet(theme) {
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
};

var TableFooter = function (_Component) {
  _inherits(TableFooter, _Component);

  function TableFooter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableFooter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableFooter.__proto__ || Object.getPrototypeOf(TableFooter)).call.apply(_ref, [this].concat(args))), _this), _this.startIndex = function () {
      var _this2;

      return (_this2 = _this).__startIndex__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.endIndex = function () {
      var _this3;

      return (_this3 = _this).__endIndex__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.hasReversePageLink = function () {
      var _this4;

      return (_this4 = _this).__hasReversePageLink__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.hasForwardPageLink = function () {
      var _this5;

      return (_this5 = _this).__hasForwardPageLink__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.reversePageLinkItem = function () {
      var _this6;

      return (_this6 = _this).__reversePageLinkItem__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.forwardPageLinkItem = function () {
      var _this7;

      return (_this7 = _this).__forwardPageLinkItem__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _this.limitLink = function () {
      var _this8;

      return (_this8 = _this).__limitLink__REACT_HOT_LOADER__.apply(_this8, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableFooter, [{
    key: '__limitLink__REACT_HOT_LOADER__',
    value: function __limitLink__REACT_HOT_LOADER__() {
      return this.__limitLink__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__forwardPageLinkItem__REACT_HOT_LOADER__',
    value: function __forwardPageLinkItem__REACT_HOT_LOADER__() {
      return this.__forwardPageLinkItem__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__reversePageLinkItem__REACT_HOT_LOADER__',
    value: function __reversePageLinkItem__REACT_HOT_LOADER__() {
      return this.__reversePageLinkItem__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__hasForwardPageLink__REACT_HOT_LOADER__',
    value: function __hasForwardPageLink__REACT_HOT_LOADER__() {
      return this.__hasForwardPageLink__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__hasReversePageLink__REACT_HOT_LOADER__',
    value: function __hasReversePageLink__REACT_HOT_LOADER__() {
      return this.__hasReversePageLink__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__endIndex__REACT_HOT_LOADER__',
    value: function __endIndex__REACT_HOT_LOADER__() {
      return this.__endIndex__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__startIndex__REACT_HOT_LOADER__',
    value: function __startIndex__REACT_HOT_LOADER__() {
      return this.__startIndex__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__startIndex__REACT_HOT_LOADER__',
    value: function __startIndex__REACT_HOT_LOADER__(limit, pageNumber) {
      return limit * (pageNumber - 1) + 1;
    }
  }, {
    key: '__endIndex__REACT_HOT_LOADER__',
    value: function __endIndex__REACT_HOT_LOADER__(limit, pageNumber, count) {
      return count >= limit * pageNumber ? limit * pageNumber : count;
    }
  }, {
    key: '__hasReversePageLink__REACT_HOT_LOADER__',
    value: function __hasReversePageLink__REACT_HOT_LOADER__(pageNumber) {
      return pageNumber - 1 > 0;
    }
  }, {
    key: '__hasForwardPageLink__REACT_HOT_LOADER__',
    value: function __hasForwardPageLink__REACT_HOT_LOADER__(pageNumber, totalPages) {
      return pageNumber + 1 <= totalPages;
    }
  }, {
    key: '__reversePageLinkItem__REACT_HOT_LOADER__',
    value: function __reversePageLinkItem__REACT_HOT_LOADER__(pageNumber) {
      var location = this.props.location;

      var disabled = !this.hasReversePageLink(pageNumber);
      var n = pageNumber - 1;
      return _react2.default.createElement(
        _IconButton2.default,
        {
          component: disabled ? 'span' : _Link2.default,
          to: pageLinkPath(location, n),
          disabled: disabled
        },
        _react2.default.createElement(_KeyboardArrowLeft2.default, null)
      );
    }
  }, {
    key: '__forwardPageLinkItem__REACT_HOT_LOADER__',
    value: function __forwardPageLinkItem__REACT_HOT_LOADER__(pageNumber, totalPages) {
      var location = this.props.location;

      var disabled = !this.hasForwardPageLink(pageNumber, totalPages);
      var n = pageNumber + 1;
      return _react2.default.createElement(
        _IconButton2.default,
        {
          component: disabled ? 'span' : _Link2.default,
          to: pageLinkPath(location, n),
          disabled: disabled
        },
        _react2.default.createElement(_KeyboardArrowRight2.default, null)
      );
    }
  }, {
    key: '__limitLink__REACT_HOT_LOADER__',
    value: function __limitLink__REACT_HOT_LOADER__(limit) {
      var _props = this.props,
          limitOptions = _props.limitOptions,
          location = _props.location;

      var query = (0, _qs.parse)(location.search.substr(1));
      limit === limitOptions[0] ? delete query._limit : query._limit = limit;
      delete query._page;

      return _extends({}, location, {
        search: '?' + (0, _qs.stringify)(_extends({}, query))
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          count = _props2.count,
          limitOptions = _props2.limitOptions,
          location = _props2.location;


      var query = (0, _qs.parse)(location.search.substr(1));
      var limit = toInteger(query._limit) || limitOptions[0];
      var page = toInteger(query._page) || 1;

      var totalPages = toInteger(calculateTotalPages(count, limit));

      return _react2.default.createElement(
        _Toolbar2.default,
        { classes: { root: classes.toolbar } },
        _react2.default.createElement('div', { className: classes.spacer }),
        _react2.default.createElement(
          'div',
          { className: classes.pagination },
          _react2.default.createElement(
            _Typography2.default,
            { className: (0, _classnames2.default)(classes.text, classes.label), type: 'caption' },
            'Rows per page'
          ),
          _react2.default.createElement(_containers.TableFooterMenu, { limit: limit, limitLink: this.limitLink, limitOptions: limitOptions }),
          _react2.default.createElement(
            _Typography2.default,
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
}(_react.Component);

TableFooter.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  count: _propTypes2.default.number.isRequired,
  limitOptions: _propTypes2.default.arrayOf(_propTypes2.default.number),
  location: _propTypes2.default.object.isRequired
};
TableFooter.defaultProps = {
  limitOptions: [10, 20, 50]
};

var _default = (0, _reactRouter.withRouter)((0, _styles.withStyles)(styleSheet, { name: 'TableFooter' })(TableFooter));

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toInteger, 'toInteger', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooter/index.js');

  __REACT_HOT_LOADER__.register(calculateTotalPages, 'calculateTotalPages', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooter/index.js');

  __REACT_HOT_LOADER__.register(pageLinkPath, 'pageLinkPath', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooter/index.js');

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooter/index.js');

  __REACT_HOT_LOADER__.register(TableFooter, 'TableFooter', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooter/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableFooter/index.js');
}();

;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _reactRouter = __webpack_require__(15);

var _qs = __webpack_require__(30);

var _Table = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleSheet = {
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
};

var TableHead = function (_Component) {
  _inherits(TableHead, _Component);

  function TableHead() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableHead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableHead.__proto__ || Object.getPrototypeOf(TableHead)).call.apply(_ref, [this].concat(args))), _this), _this.getSortLink = function () {
      var _this2;

      return (_this2 = _this).__getSortLink__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableHead, [{
    key: '__getSortLink__REACT_HOT_LOADER__',
    value: function __getSortLink__REACT_HOT_LOADER__() {
      return this.__getSortLink__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__getSortLink__REACT_HOT_LOADER__',
    value: function __getSortLink__REACT_HOT_LOADER__(key) {
      var location = this.props.location;

      var query = (0, _qs.parse)(location.search.substr(1));
      var order = query._order && query._order.toLowerCase() || 'desc';
      var orderParam = order === 'asc' ? 'DESC' : 'ASC';

      return {
        pathname: location.pathname,
        search: '?' + (0, _qs.stringify)(_extends({}, query, {
          _order: orderParam,
          _sort: key
        }))
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          handleSelectAllClick = _props.handleSelectAllClick,
          location = _props.location,
          order = _props.order,
          sort = _props.sort;

      var query = (0, _qs.parse)(location.search.substr(1));
      var sortParam = query._sort || sort;
      var orderParam = query._order && query._order.toLowerCase() || order;

      return _react2.default.createElement(
        _Table.TableHead,
        null,
        _react2.default.createElement(
          _Table.TableRow,
          {
            classes: {
              root: classes.head
            }
          },
          _react2.default.Children.map(children, function (child) {
            if (child.type.muiName === 'TableColumn') {
              var _child$props = child.props,
                  cell = _child$props.cell,
                  header = _child$props.header,
                  other = _objectWithoutProperties(_child$props, ['cell', 'header']);

              var headerProps = _extends({}, other, {
                classes: classes,
                getSortLink: _this3.getSortLink,
                handleSelectAllClick: handleSelectAllClick,
                order: orderParam,
                sort: sortParam
              });

              var content = void 0;
              if (_react2.default.isValidElement(header)) {
                content = _react2.default.cloneElement(header, headerProps);
              } else if (typeof header === 'function') {
                content = header(headerProps);
              } else {
                content = _react2.default.createElement(
                  _Table.TableCell,
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
}(_react.Component);

TableHead.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.array.isRequired,
  handleSelectAllClick: _propTypes2.default.func.isRequired,
  location: _propTypes2.default.object.isRequired,
  order: _propTypes2.default.string,
  sort: _propTypes2.default.string
};

var _default = (0, _reactRouter.withRouter)((0, _styles.withStyles)(styleSheet, { name: 'TableHead' })(TableHead));

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableHead/index.js');

  __REACT_HOT_LOADER__.register(TableHead, 'TableHead', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableHead/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableHead/index.js');
}();

;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(25);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(3);

var _Toolbar = __webpack_require__(12);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(8);

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styleSheet = function styleSheet(theme) {
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
};

var TableToolbar = function TableToolbar(props) {
  var content = props.content,
      contentAlt = props.contentAlt,
      numSelected = props.numSelected,
      classes = props.classes,
      title = props.title;


  return _react2.default.createElement(
    _Toolbar2.default,
    {
      className: (0, _classnames2.default)(classes.root, _defineProperty({}, classes.highlight, numSelected > 0))
    },
    _react2.default.createElement(
      'div',
      { className: classes.title },
      numSelected > 0 ? _react2.default.createElement(
        _Typography2.default,
        { color: 'inherit', type: 'subheading' },
        numSelected,
        ' selected'
      ) : _react2.default.createElement(
        _Typography2.default,
        { type: 'headline' },
        title
      )
    ),
    _react2.default.createElement('div', { className: classes.spacer }),
    numSelected > 0 ? contentAlt && _react2.default.cloneElement(contentAlt, { className: classes.actions }) : content && _react2.default.cloneElement(content, { className: classes.actions })
  );
};

TableToolbar.propTypes = {
  title: _propTypes2.default.string,
  classes: _propTypes2.default.object.isRequired,
  content: _propTypes2.default.any,
  contentAlt: _propTypes2.default.any,
  numSelected: _propTypes2.default.number.isRequired
};

TableToolbar.defaultProps = {
  title: null,
  content: null,
  contentAlt: null
};

var _default = (0, _styles.withStyles)(styleSheet, { name: 'TableToolbar' })(TableToolbar);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styleSheet, 'styleSheet', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableToolbar/index.js');

  __REACT_HOT_LOADER__.register(TableToolbar, 'TableToolbar', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableToolbar/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/TableToolbar/index.js');
}();

;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Table = __webpack_require__(14);

var _Table2 = _interopRequireDefault(_Table);

var _Paper = __webpack_require__(22);

var _Paper2 = _interopRequireDefault(_Paper);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return _react2.default.createElement(
    _Paper2.default,
    null,
    _react2.default.createElement(_components.TableToolbar, {
      title: title,
      numSelected: numSelected,
      content: toolbar,
      contentAlt: toolbarAlt
    }),
    _react2.default.createElement(
      _Table2.default,
      null,
      _react2.default.createElement(
        _components.TableHead,
        { handleSelectAllClick: props.handleSelectAllClick },
        children
      ),
      _react2.default.createElement(
        _components.TableBody,
        {
          handleRowClick: props.handleRowClick,
          isSelected: isSelected,
          rows: rows,
          handleSelectAllClick: props.handleSelectAllClick
        },
        children
      )
    ),
    _react2.default.createElement(_components.TableFooter, { count: totalRows })
  );
};

Table.propTypes = {
  children: _propTypes2.default.any.isRequired,
  handleRowClick: _propTypes2.default.func.isRequired,
  handleSelectAllClick: _propTypes2.default.func.isRequired,
  isSelected: _propTypes2.default.func.isRequired,
  numSelected: _propTypes2.default.number.isRequired,
  rows: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  title: _propTypes2.default.string.isRequired,
  toolbar: _propTypes2.default.any,
  toolbarAlt: _propTypes2.default.any,
  totalRows: _propTypes2.default.number.isRequired
};

Table.defaultProps = {
  title: null,
  toolbar: null,
  totalRows: null
};

var _default = Table;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Table, 'Table', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/Table/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/table/Table/index.js');
}();

;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageTemplate = function PageTemplate(props) {
  return _react2.default.createElement('div', props);
};

var _default = PageTemplate;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageTemplate, 'PageTemplate', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/templates/PageTemplate/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/components/templates/PageTemplate/index.js');
}();

;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inDOM = __webpack_require__(182);

var _inDOM2 = _interopRequireDefault(_inDOM);

var _reactRedux = __webpack_require__(6);

var _reactRouter = __webpack_require__(15);

var _selectors = __webpack_require__(7);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      if (_inDOM2.default) {
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

      return _react2.default.createElement(_components.AppDrawer, drawerProps);
    }
  }]);

  return AppDrawerContainer;
}(_react.Component);

AppDrawerContainer.propTypes = {
  device: _propTypes2.default.object
};
AppDrawerContainer.defaultProps = {
  device: null
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    device: _selectors.fromDevice.getDevice(state)
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AppDrawerContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AppDrawerContainer, 'AppDrawerContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppDrawer.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppDrawer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppDrawer.js');
}();

;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterRedux = __webpack_require__(17);

var _reactRedux = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(23);

var _selectors = __webpack_require__(7);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getTitle(routes, pathname) {
  var branch = (0, _reactRouterConfig.matchRoutes)(routes, pathname);
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
      var _this2;

      return (_this2 = _this).__handleDrawerClose__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleDrawerToggle = function () {
      var _this3;

      return (_this3 = _this).__handleDrawerToggle__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleToggleShade = function () {
      var _this4;

      return (_this4 = _this).__handleToggleShade__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.handleRequestUserMenuOpen = function () {
      var _this5;

      return (_this5 = _this).__handleRequestUserMenuOpen__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.handleRequestUserMenuClose = function () {
      var _this6;

      return (_this6 = _this).__handleRequestUserMenuClose__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _this.handleSignOut = function () {
      var _this7;

      return (_this7 = _this).__handleSignOut__REACT_HOT_LOADER__.apply(_this7, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppFrameContainer, [{
    key: '__handleSignOut__REACT_HOT_LOADER__',
    value: function __handleSignOut__REACT_HOT_LOADER__() {
      return this.__handleSignOut__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestUserMenuClose__REACT_HOT_LOADER__',
    value: function __handleRequestUserMenuClose__REACT_HOT_LOADER__() {
      return this.__handleRequestUserMenuClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestUserMenuOpen__REACT_HOT_LOADER__',
    value: function __handleRequestUserMenuOpen__REACT_HOT_LOADER__() {
      return this.__handleRequestUserMenuOpen__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleToggleShade__REACT_HOT_LOADER__',
    value: function __handleToggleShade__REACT_HOT_LOADER__() {
      return this.__handleToggleShade__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDrawerToggle__REACT_HOT_LOADER__',
    value: function __handleDrawerToggle__REACT_HOT_LOADER__() {
      return this.__handleDrawerToggle__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDrawerClose__REACT_HOT_LOADER__',
    value: function __handleDrawerClose__REACT_HOT_LOADER__() {
      return this.__handleDrawerClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDrawerClose__REACT_HOT_LOADER__',
    value: function __handleDrawerClose__REACT_HOT_LOADER__() {
      this.setState({ drawerOpen: false });
    }
  }, {
    key: '__handleDrawerToggle__REACT_HOT_LOADER__',
    value: function __handleDrawerToggle__REACT_HOT_LOADER__() {
      this.setState({ drawerOpen: !this.state.drawerOpen });
    }
  }, {
    key: '__handleToggleShade__REACT_HOT_LOADER__',
    value: function __handleToggleShade__REACT_HOT_LOADER__() {
      // this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' })
    }
  }, {
    key: '__handleRequestUserMenuOpen__REACT_HOT_LOADER__',
    value: function __handleRequestUserMenuOpen__REACT_HOT_LOADER__(event) {
      this.setState({ userMenuOpen: true, userMenuAnchorEl: event.currentTarget });
    }
  }, {
    key: '__handleRequestUserMenuClose__REACT_HOT_LOADER__',
    value: function __handleRequestUserMenuClose__REACT_HOT_LOADER__() {
      this.setState({ userMenuOpen: false });
    }
  }, {
    key: '__handleSignOut__REACT_HOT_LOADER__',
    value: function __handleSignOut__REACT_HOT_LOADER__() {
      this.props.signOut();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          location = _props.location,
          route = _props.route,
          other = _objectWithoutProperties(_props, ['location', 'route']);

      var title = getTitle(route.routes, location.pathname) || route.title || null;

      return _react2.default.createElement(_components.AppFrame, _extends({
        title: title,
        handleDrawerToggle: this.handleDrawerToggle,
        handleDrawerClose: this.handleDrawerClose,
        drawerOpen: this.state.drawerOpen,
        route: route,
        userMenuAnchorEl: this.state.userMenuAnchorEl,
        userMenuOpen: this.state.userMenuOpen,
        handleRequestUserMenuOpen: this.handleRequestUserMenuOpen,
        handleRequestUserMenuClose: this.handleRequestUserMenuClose,
        handleSignOut: this.handleSignOut
      }, other));
    }
  }]);

  return AppFrameContainer;
}(_react.Component);

AppFrameContainer.propTypes = {
  location: _propTypes2.default.object.isRequired,
  route: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object,
  signOut: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: _selectors.fromStatus.isLoading(state),
    user: _selectors.fromAuth.getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signOut: function signOut() {
      return dispatch((0, _actions.authSignoutRequest)()).then(function () {
        dispatch((0, _reactRouterRedux.push)('/signin'));
      });
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppFrameContainer);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getTitle, 'getTitle', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppFrame.js');

  __REACT_HOT_LOADER__.register(AppFrameContainer, 'AppFrameContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppFrame.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppFrame.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppFrame.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/AppFrame.js');
}();

;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _components = __webpack_require__(2);

var _CategoryForm = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.CategoryCreatePage, null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_CategoryForm.config, req.body))]);
    }
  }]);

  return CategoryCreatePageContainer;
}(_react.Component);

var _default = CategoryCreatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CategoryCreatePageContainer, 'CategoryCreatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryCreatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryCreatePage.js');
}();

;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(7);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleOpenDeleteDialog = function () {
      var _this2;

      return (_this2 = _this).__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleDeleteCategory = function () {
      var _this3;

      return (_this3 = _this).__handleDeleteCategory__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRequestCloseDialog = function () {
      var _this4;

      return (_this4 = _this).__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CategoryListPageContainer, [{
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      return this.__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDeleteCategory__REACT_HOT_LOADER__',
    value: function __handleDeleteCategory__REACT_HOT_LOADER__() {
      return this.__handleDeleteCategory__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__() {
      return this.__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__(rowIndex, event) {
      this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }
  }, {
    key: '__handleDeleteCategory__REACT_HOT_LOADER__',
    value: function __handleDeleteCategory__REACT_HOT_LOADER__(id) {
      this.handleRequestCloseDialog();
      this.props.deleteCategoryRequest(id);
      // .then((category) => {
      //   // console.log(category)
      // })
    }
  }, {
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.CategoryListPage, _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteCategory: this.handleDeleteCategory, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch((0, _actions.resourceListReadRequest)('categories', query));
    }
  }]);

  return CategoryListPageContainer;
}(_react.Component);

CategoryListPageContainer.propTypes = {
  count: _propTypes2.default.number.isRequired,
  deleteCategoryRequest: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: _selectors.fromEntities.getList(state, 'categories', _selectors.fromResource.getList(state, 'categories')),
    count: _selectors.fromResource.getCount(state, 'categories')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteCategoryRequest: function deleteCategoryRequest(id) {
      return dispatch((0, _actions.resourceDeleteRequest)('categories', id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CategoryListPageContainer);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CategoryListPageContainer, 'CategoryListPageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryListPage.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryListPage.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryListPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryListPage.js');
}();

;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

var _CategoryForm = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.CategoryUpdatePage, { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_CategoryForm.config, req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch((0, _actions.resourceDetailReadRequest)('categories', match.params.id));
    }
  }]);

  return CategoryUpdatePageContainer;
}(_react.Component);

CategoryUpdatePageContainer.propTypes = {
  match: _propTypes2.default.object.isRequired
};
var _default = CategoryUpdatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CategoryUpdatePageContainer, 'CategoryUpdatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryUpdatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/CategoryUpdatePage.js');
}();

;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var _this2;

      return (_this2 = _this).__handleEntering__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleCancel = function () {
      var _this3;

      return (_this3 = _this).__handleCancel__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleOk = function () {
      var _this4;

      return (_this4 = _this).__handleOk__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ConfirmationDialogContainer, [{
    key: '__handleOk__REACT_HOT_LOADER__',
    value: function __handleOk__REACT_HOT_LOADER__() {
      return this.__handleOk__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleCancel__REACT_HOT_LOADER__',
    value: function __handleCancel__REACT_HOT_LOADER__() {
      return this.__handleCancel__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleEntering__REACT_HOT_LOADER__',
    value: function __handleEntering__REACT_HOT_LOADER__() {
      return this.__handleEntering__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleEntering__REACT_HOT_LOADER__',
    value: function __handleEntering__REACT_HOT_LOADER__() {
      // this.radioGroup.focus()
    }
  }, {
    key: '__handleCancel__REACT_HOT_LOADER__',
    value: function __handleCancel__REACT_HOT_LOADER__() {
      this.props.onRequestClose();
    }
  }, {
    key: '__handleOk__REACT_HOT_LOADER__',
    value: function __handleOk__REACT_HOT_LOADER__() {
      this.props.onRequestClose();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.ConfirmationDialog, this.props);
    }
  }]);

  return ConfirmationDialogContainer;
}(_react.Component);

ConfirmationDialogContainer.propTypes = {
  onRequestClose: _propTypes2.default.func
};

var _default = ConfirmationDialogContainer;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ConfirmationDialogContainer, 'ConfirmationDialogContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ConfirmationDialog.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ConfirmationDialog.js');
}();

;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _components = __webpack_require__(2);

var _ProductForm = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.ProductCreatePage, null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_ProductForm.config, req.body))]);
    }
  }]);

  return ProductCreatePageContainer;
}(_react.Component);

var _default = ProductCreatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductCreatePageContainer, 'ProductCreatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductCreatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductCreatePage.js');
}();

;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(7);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleOpenDeleteDialog = function () {
      var _this2;

      return (_this2 = _this).__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleDeleteProduct = function () {
      var _this3;

      return (_this3 = _this).__handleDeleteProduct__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRequestCloseDialog = function () {
      var _this4;

      return (_this4 = _this).__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductListPageContainer, [{
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      return this.__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDeleteProduct__REACT_HOT_LOADER__',
    value: function __handleDeleteProduct__REACT_HOT_LOADER__() {
      return this.__handleDeleteProduct__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__() {
      return this.__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__(rowIndex, event) {
      this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }
  }, {
    key: '__handleDeleteProduct__REACT_HOT_LOADER__',
    value: function __handleDeleteProduct__REACT_HOT_LOADER__(id) {
      this.handleRequestCloseDialog();
      this.props.deleteProductRequest(id);
      // .then((product) => {
      //   // console.log(product)
      // })
    }
  }, {
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.ProductListPage, _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteProduct: this.handleDeleteProduct, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch((0, _actions.resourceListReadRequest)('products', query));
    }
  }]);

  return ProductListPageContainer;
}(_react.Component);

ProductListPageContainer.propTypes = {
  count: _propTypes2.default.number.isRequired,
  deleteProductRequest: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: _selectors.fromEntities.getList(state, 'products', _selectors.fromResource.getList(state, 'products')),
    count: _selectors.fromResource.getCount(state, 'products')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteProductRequest: function deleteProductRequest(id) {
      return dispatch((0, _actions.resourceDeleteRequest)('products', id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListPageContainer);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductListPageContainer, 'ProductListPageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductListPage.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductListPage.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductListPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductListPage.js');
}();

;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

var _ProductForm = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.ProductUpdatePage, { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_ProductForm.config, req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch((0, _actions.resourceDetailReadRequest)('products', match.params.id));
    }
  }]);

  return ProductUpdatePageContainer;
}(_react.Component);

ProductUpdatePageContainer.propTypes = {
  match: _propTypes2.default.object.isRequired
};
var _default = ProductUpdatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductUpdatePageContainer, 'ProductUpdatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductUpdatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ProductUpdatePage.js');
}();

;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _components = __webpack_require__(2);

var _ShopForm = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.ShopCreatePage, null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_ShopForm.config, req.body))]);
    }
  }]);

  return ShopCreatePageContainer;
}(_react.Component);

var _default = ShopCreatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ShopCreatePageContainer, 'ShopCreatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopCreatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopCreatePage.js');
}();

;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(7);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleOpenDeleteDialog = function () {
      var _this2;

      return (_this2 = _this).__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleDeleteShop = function () {
      var _this3;

      return (_this3 = _this).__handleDeleteShop__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRequestCloseDialog = function () {
      var _this4;

      return (_this4 = _this).__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopListPageContainer, [{
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      return this.__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDeleteShop__REACT_HOT_LOADER__',
    value: function __handleDeleteShop__REACT_HOT_LOADER__() {
      return this.__handleDeleteShop__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__() {
      return this.__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__(rowIndex, event) {
      this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }
  }, {
    key: '__handleDeleteShop__REACT_HOT_LOADER__',
    value: function __handleDeleteShop__REACT_HOT_LOADER__(id) {
      this.handleRequestCloseDialog();
      this.props.deleteShopRequest(id);
      // .then((shop) => {
      //   // console.log(shop)
      // })
    }
  }, {
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.ShopListPage, _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteShop: this.handleDeleteShop, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch((0, _actions.resourceListReadRequest)('shops', query));
    }
  }]);

  return ShopListPageContainer;
}(_react.Component);

ShopListPageContainer.propTypes = {
  count: _propTypes2.default.number.isRequired,
  deleteShopRequest: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: _selectors.fromEntities.getList(state, 'shops', _selectors.fromResource.getList(state, 'shops')),
    count: _selectors.fromResource.getCount(state, 'shops')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteShopRequest: function deleteShopRequest(id) {
      return dispatch((0, _actions.resourceDeleteRequest)('shops', id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShopListPageContainer);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ShopListPageContainer, 'ShopListPageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopListPage.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopListPage.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopListPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopListPage.js');
}();

;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

var _ShopForm = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.ShopUpdatePage, { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_ShopForm.config, req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch((0, _actions.resourceDetailReadRequest)('shops', match.params.id));
    }
  }]);

  return ShopUpdatePageContainer;
}(_react.Component);

ShopUpdatePageContainer.propTypes = {
  match: _propTypes2.default.object.isRequired
};
var _default = ShopUpdatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ShopUpdatePageContainer, 'ShopUpdatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopUpdatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/ShopUpdatePage.js');
}();

;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reduxForm = __webpack_require__(9);

var _selectors = __webpack_require__(7);

var _actions = __webpack_require__(4);

var _validation = __webpack_require__(19);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SigninFormContainer = function SigninFormContainer(props) {
  return _react2.default.createElement(_components.SigninForm, props);
};

var onSubmit = function onSubmit(data, dispatch) {
  return new Promise(function (resolve, reject) {
    dispatch((0, _actions.authSigninRequest)(data, resolve, reject));
  });
};

var validate = (0, _validation.createValidator)({
  usernameOrEmail: [_validation.required],
  password: [_validation.required]
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    initialValues: {
      _csrf: _selectors.fromForm.getCsrfToken(state)
    }
  };
};

var config = exports.config = {
  form: 'SigninForm',
  fields: ['usernameOrEmail', 'password'],
  enableReinitialize: true,
  destroyOnUnmount: false,
  onSubmit: onSubmit,
  validate: validate
};

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reduxForm.reduxForm)(config)(SigninFormContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SigninFormContainer, 'SigninFormContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninForm.js');

  __REACT_HOT_LOADER__.register(config, 'config', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninForm.js');
}();

;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(31);

var _qs = __webpack_require__(30);

var _actions = __webpack_require__(4);

var _selectors = __webpack_require__(7);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var _parse = (0, _qs.parse)(this.props.location.search.substring(1)),
          refferer = _parse.refferer;

      var _ref2 = refferer && { from: { pathname: refferer } } || this.props.location.state || { from: { pathname: '/' } },
          from = _ref2.from;

      var redirectToReferrer = this.state.redirectToReferrer;


      if (redirectToReferrer) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, to: from });
      }

      return _react2.default.createElement(_components.SigninPage, null);
    }
  }], [{
    key: 'post',
    value: function post(_ref3) {
      var req = _ref3.req,
          store = _ref3.store;

      return new Promise(function (resolve, reject) {
        store.dispatch((0, _actions.authSigninRequest)(req.body, resolve, reject));
      });
    }
  }]);

  return SigninPageContainer;
}(_react.Component);

SigninPageContainer.propTypes = {
  user: _propTypes2.default.object,
  location: _propTypes2.default.object.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _selectors.fromAuth.getUser(state, _actions.AUTH_USER_READ_REQUEST)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(SigninPageContainer);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SigninPageContainer, 'SigninPageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninPage.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/SigninPage.js');
}();

;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Snackbar = __webpack_require__(238);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleRequestClose = function () {
      var _this2;

      return (_this2 = _this).__handleRequestClose__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SnackbarContainer, [{
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.__handleRequestClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__(event, reason) {
      if (reason !== 'clickaway') {
        this.setState({ open: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Snackbar2.default, _extends({
        open: this.state.open,
        onRequestClose: this.handleRequestClose
      }, this.props));
    }
  }]);

  return SnackbarContainer;
}(_react.Component);

var _default = SnackbarContainer;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SnackbarContainer, 'SnackbarContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/Snackbar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/Snackbar.js');
}();

;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleSelectAllClick = function () {
      var _this2;

      return (_this2 = _this).__handleSelectAllClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleRowClick = function () {
      var _this3;

      return (_this3 = _this).__handleRowClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.isSelected = function () {
      var _this4;

      return (_this4 = _this).__isSelected__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableContainer, [{
    key: '__isSelected__REACT_HOT_LOADER__',
    value: function __isSelected__REACT_HOT_LOADER__() {
      return this.__isSelected__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__() {
      return this.__handleRowClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSelectAllClick__REACT_HOT_LOADER__',
    value: function __handleSelectAllClick__REACT_HOT_LOADER__() {
      return this.__handleSelectAllClick__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleSelectAllClick__REACT_HOT_LOADER__',


    // handleKeyDown = (event, id) => {
    //   if (keycode(event) === 'space') {
    //     this.handleRowClick(event, id)
    //   }
    // }

    value: function __handleSelectAllClick__REACT_HOT_LOADER__(event, checked) {
      if (checked) {
        this.setState({ selected: this.props.rows.map(function (n) {
            return n._id;
          }) });
        return;
      }
      this.setState({ selected: [] });
    }
  }, {
    key: '__handleRowClick__REACT_HOT_LOADER__',
    value: function __handleRowClick__REACT_HOT_LOADER__(event, id) {
      var selected = this.state.selected;

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

      this.setState({ selected: newSelected });
    }
  }, {
    key: '__isSelected__REACT_HOT_LOADER__',
    value: function __isSelected__REACT_HOT_LOADER__(id) {
      return this.state.selected.indexOf(id) !== -1;
    }
  }, {
    key: 'render',
    value: function render() {
      var selected = this.state.selected;


      return _react2.default.createElement(_components.Table, _extends({
        handleRowClick: this.handleRowClick,
        handleSelectAllClick: this.handleSelectAllClick,
        isSelected: this.isSelected,
        numSelected: selected.length
      }, this.props));
    }
  }]);

  return TableContainer;
}(_react.Component);

TableContainer.propTypes = {
  rows: _propTypes2.default.array.isRequired
};
var _default = TableContainer;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableContainer, 'TableContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/Table.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/Table.js');
}();

;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleRequestOpen = function () {
      var _this2;

      return (_this2 = _this).__handleRequestOpen__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleRequestClose = function () {
      var _this3;

      return (_this3 = _this).__handleRequestClose__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableFooterMenuContainer, [{
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.__handleRequestClose__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestOpen__REACT_HOT_LOADER__',
    value: function __handleRequestOpen__REACT_HOT_LOADER__() {
      return this.__handleRequestOpen__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleRequestOpen__REACT_HOT_LOADER__',
    value: function __handleRequestOpen__REACT_HOT_LOADER__(event) {
      return this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    }
  }, {
    key: '__handleRequestClose__REACT_HOT_LOADER__',
    value: function __handleRequestClose__REACT_HOT_LOADER__() {
      return this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.TableFooterMenu, _extends({
        anchorEl: this.state.anchorEl,
        handleRequestOpen: this.handleRequestOpen,
        handleRequestClose: this.handleRequestClose,
        open: this.state.open
      }, this.props));
    }
  }]);

  return TableFooterMenuContainer;
}(_react.Component);

var _default = TableFooterMenuContainer;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableFooterMenuContainer, 'TableFooterMenuContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/TableFooterMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/TableFooterMenu.js');
}();

;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _components = __webpack_require__(2);

var _UserForm = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.UserCreatePage, null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_UserForm.config, req.body))]);
    }
  }]);

  return UserCreatePageContainer;
}(_react.Component);

var _default = UserCreatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserCreatePageContainer, 'UserCreatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserCreatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserCreatePage.js');
}();

;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(7);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleOpenDeleteDialog = function () {
      var _this2;

      return (_this2 = _this).__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleDeleteUser = function () {
      var _this3;

      return (_this3 = _this).__handleDeleteUser__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRequestCloseDialog = function () {
      var _this4;

      return (_this4 = _this).__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserListPageContainer, [{
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      return this.__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDeleteUser__REACT_HOT_LOADER__',
    value: function __handleDeleteUser__REACT_HOT_LOADER__() {
      return this.__handleDeleteUser__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__() {
      return this.__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__(rowIndex, event) {
      this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }
  }, {
    key: '__handleDeleteUser__REACT_HOT_LOADER__',
    value: function __handleDeleteUser__REACT_HOT_LOADER__(id) {
      this.handleRequestCloseDialog();
      this.setState({
        selectedIndex: undefined
      });
      this.props.deleteUserRequest(id);
      // .then((user) => {
      //   // console.log(user)
      // })
    }
  }, {
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.UserListPage, _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteUser: this.handleDeleteUser, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch((0, _actions.resourceListReadRequest)('users', query));
    }
  }]);

  return UserListPageContainer;
}(_react.Component);

UserListPageContainer.propTypes = {
  count: _propTypes2.default.number.isRequired,
  deleteUserRequest: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: _selectors.fromEntities.getList(state, 'users', _selectors.fromResource.getList(state, 'users')),
    count: _selectors.fromResource.getCount(state, 'users')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteUserRequest: function deleteUserRequest(id) {
      return dispatch((0, _actions.resourceDeleteRequest)('users', id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserListPageContainer);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserListPageContainer, 'UserListPageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserListPage.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserListPage.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserListPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserListPage.js');
}();

;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

var _UserForm = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.UserUpdatePage, { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_UserForm.config, req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch((0, _actions.resourceDetailReadRequest)('users', match.params.id));
    }
  }]);

  return UserUpdatePageContainer;
}(_react.Component);

UserUpdatePageContainer.propTypes = {
  match: _propTypes2.default.object.isRequired
};
var _default = UserUpdatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserUpdatePageContainer, 'UserUpdatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserUpdatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/UserUpdatePage.js');
}();

;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _components = __webpack_require__(2);

var _VendorForm = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.VendorCreatePage, null);
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_VendorForm.config, req.body))]);
    }
  }]);

  return VendorCreatePageContainer;
}(_react.Component);

var _default = VendorCreatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VendorCreatePageContainer, 'VendorCreatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorCreatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorCreatePage.js');
}();

;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(7);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    }, _this.handleOpenDeleteDialog = function () {
      var _this2;

      return (_this2 = _this).__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleDeleteVendor = function () {
      var _this3;

      return (_this3 = _this).__handleDeleteVendor__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handleRequestCloseDialog = function () {
      var _this4;

      return (_this4 = _this).__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VendorListPageContainer, [{
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      return this.__handleRequestCloseDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleDeleteVendor__REACT_HOT_LOADER__',
    value: function __handleDeleteVendor__REACT_HOT_LOADER__() {
      return this.__handleDeleteVendor__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__() {
      return this.__handleOpenDeleteDialog__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleOpenDeleteDialog__REACT_HOT_LOADER__',
    value: function __handleOpenDeleteDialog__REACT_HOT_LOADER__(rowIndex, event) {
      this.setState({ open: true, anchorEl: event.currentTarget, selectedIndex: rowIndex });
    }
  }, {
    key: '__handleDeleteVendor__REACT_HOT_LOADER__',
    value: function __handleDeleteVendor__REACT_HOT_LOADER__(id) {
      this.handleRequestCloseDialog();
      this.props.deleteVendorRequest(id);
      // .then((vendor) => {
      //   // console.log(vendor)
      // })
    }
  }, {
    key: '__handleRequestCloseDialog__REACT_HOT_LOADER__',
    value: function __handleRequestCloseDialog__REACT_HOT_LOADER__() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.VendorListPage, _extends({}, this.props, { selectedIndex: this.state.selectedIndex, open: this.state.open, openDeleteDialog: this.handleOpenDeleteDialog, deleteVendor: this.handleDeleteVendor, onRequestCloseDialog: this.handleRequestCloseDialog }));
    }
  }], [{
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          query = _ref2.query;

      return store.dispatch((0, _actions.resourceListReadRequest)('vendors', query));
    }
  }]);

  return VendorListPageContainer;
}(_react.Component);

VendorListPageContainer.propTypes = {
  count: _propTypes2.default.number.isRequired,
  deleteVendorRequest: _propTypes2.default.func.isRequired,
  list: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: _selectors.fromEntities.getList(state, 'vendors', _selectors.fromResource.getList(state, 'vendors')),
    count: _selectors.fromResource.getCount(state, 'vendors')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteVendorRequest: function deleteVendorRequest(id) {
      return dispatch((0, _actions.resourceDeleteRequest)('vendors', id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VendorListPageContainer);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VendorListPageContainer, 'VendorListPageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorListPage.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorListPage.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorListPage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorListPage.js');
}();

;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxFormSubmit = __webpack_require__(13);

var _reduxFormSubmit2 = _interopRequireDefault(_reduxFormSubmit);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

var _VendorForm = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_components.VendorUpdatePage, { id: this.props.match.params.id });
    }
  }], [{
    key: 'post',
    value: function post(_ref) {
      var req = _ref.req,
          store = _ref.store,
          match = _ref.match;

      return Promise.all([store.dispatch((0, _reduxFormSubmit2.default)(_VendorForm.config, req.body)), this.get({ store: store, match: match })]);
    }
  }, {
    key: 'get',
    value: function get(_ref2) {
      var store = _ref2.store,
          match = _ref2.match;

      return store.dispatch((0, _actions.resourceDetailReadRequest)('vendors', match.params.id));
    }
  }]);

  return VendorUpdatePageContainer;
}(_react.Component);

VendorUpdatePageContainer.propTypes = {
  match: _propTypes2.default.object.isRequired
};
var _default = VendorUpdatePageContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VendorUpdatePageContainer, 'VendorUpdatePageContainer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorUpdatePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/containers/VendorUpdatePage.js');
}();

;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(191);

var _queryString = __webpack_require__(244);

var _merge = __webpack_require__(57);

var _merge2 = _interopRequireDefault(_merge);

var _config = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var checkStatus = exports.checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = exports.parseJSON = function parseJSON(response) {
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
  var settings = (0, _merge2.default)({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};

exports.parseSettings = parseSettings;
var parseEndpoint = exports.parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : _config.apiUrl + endpoint;
  var querystring = params ? '?' + (0, _queryString.stringify)(params) : '';
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
      return api.request(endpoint, (0, _merge2.default)({}, this.settings, settings));
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

var _default = api;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkStatus, 'checkStatus', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseJSON, 'parseJSON', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseSettings, 'parseSettings', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseEndpoint, 'parseEndpoint', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(api, 'api', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/services/api/index.js');
}();

;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _selectors = __webpack_require__(44);

var _actions = __webpack_require__(37);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions.AUTH_SIGNIN_SUCCESS:
      return _extends({}, state, {
        user: payload.user,
        token: payload.token
      });

    case _actions.AUTH_USER_READ_SUCCESS:
      return _extends({}, state, {
        user: payload
      });

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/reducer.js');
}();

;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signinAuth = signinAuth;
exports.readAuthUser = readAuthUser;
exports.signoutAuth = signoutAuth;
exports.watchAuthSigninRequest = watchAuthSigninRequest;
exports.watchAuthUserReadRequest = watchAuthUserReadRequest;
exports.watchAuthSignoutRequest = watchAuthSignoutRequest;

var _effects = __webpack_require__(18);

var _universalCookie = __webpack_require__(254);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _config = __webpack_require__(24);

var _actions = __webpack_require__(37);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [signinAuth, readAuthUser, signoutAuth, watchAuthSigninRequest, watchAuthUserReadRequest, watchAuthSignoutRequest].map(regeneratorRuntime.mark);
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
          return (0, _effects.call)([api, api.post], '/auth/signin', data);

        case 3:
          details = _context.sent;


          if (_config.isBrowser) {
            cookies = new _universalCookie2.default();

            cookies.set('token', details.token);
          }

          _context.next = 7;
          return (0, _effects.put)(actions.authSigninSuccess(details, { data: data }, thunk));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](0);
          _context.next = 13;
          return (0, _effects.put)(actions.authSigninFailure(_context.t0, { data: data }, thunk));

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
          return (0, _effects.call)([api, api.get], '/users/me');

        case 3:
          user = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)(actions.authUserReadSuccess(user, payload, thunk));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 12;
          return (0, _effects.put)(actions.authUserReadFailure(_context2.t0, payload, thunk));

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 8]]);
}

function signoutAuth(api, payload, _ref4) {
  var thunk = _ref4.thunk;
  var cookies;
  return regeneratorRuntime.wrap(function signoutAuth$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;

          if (_config.isBrowser) {
            cookies = new _universalCookie2.default();

            cookies.remove('token');
          }
          _context3.next = 4;
          return (0, _effects.put)(actions.authSignoutSuccess(payload, thunk));

        case 4:
          _context3.next = 10;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 10;
          return (0, _effects.put)(actions.authSignoutFailure(_context3.t0, payload, thunk));

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 6]]);
}

function watchAuthSigninRequest(api) {
  var _ref5, payload, meta;

  return regeneratorRuntime.wrap(function watchAuthSigninRequest$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (false) {
            _context4.next = 10;
            break;
          }

          _context4.next = 3;
          return (0, _effects.take)(actions.AUTH_SIGNIN_REQUEST);

        case 3:
          _ref5 = _context4.sent;
          payload = _ref5.payload;
          meta = _ref5.meta;
          _context4.next = 8;
          return (0, _effects.call)(signinAuth, api, payload, meta);

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

function watchAuthUserReadRequest(api) {
  var _ref6, payload, meta;

  return regeneratorRuntime.wrap(function watchAuthUserReadRequest$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (false) {
            _context5.next = 10;
            break;
          }

          _context5.next = 3;
          return (0, _effects.take)(actions.AUTH_USER_READ_REQUEST);

        case 3:
          _ref6 = _context5.sent;
          payload = _ref6.payload;
          meta = _ref6.meta;
          _context5.next = 8;
          return (0, _effects.call)(readAuthUser, api, payload, meta);

        case 8:
          _context5.next = 0;
          break;

        case 10:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

function watchAuthSignoutRequest(api) {
  var _ref7, payload, meta;

  return regeneratorRuntime.wrap(function watchAuthSignoutRequest$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (false) {
            _context6.next = 10;
            break;
          }

          _context6.next = 3;
          return (0, _effects.take)(actions.AUTH_SIGNOUT_REQUEST);

        case 3:
          _ref7 = _context6.sent;
          payload = _ref7.payload;
          meta = _ref7.meta;
          _context6.next = 8;
          return (0, _effects.call)(signoutAuth, api, payload, meta);

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

var _default = regeneratorRuntime.mark(function _default(_ref8) {
  var api = _ref8.api;
  return regeneratorRuntime.wrap(function _default$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.fork)(watchAuthSigninRequest, api);

        case 2:
          _context7.next = 4;
          return (0, _effects.fork)(watchAuthUserReadRequest, api);

        case 4:
          _context7.next = 6;
          return (0, _effects.fork)(watchAuthSignoutRequest, api);

        case 6:
        case 'end':
          return _context7.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(signinAuth, 'signinAuth', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(readAuthUser, 'readAuthUser', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(signoutAuth, 'signoutAuth', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthSigninRequest, 'watchAuthSigninRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthUserReadRequest, 'watchAuthUserReadRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthSignoutRequest, 'watchAuthSignoutRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/auth/sagas.js');
}();

;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(66);

var _reduxSaga = __webpack_require__(67);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reactRouterRedux = __webpack_require__(17);

var _config = __webpack_require__(24);

var _middlewares = __webpack_require__(156);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducer = __webpack_require__(161);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(164);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var devtools = _config.isDev && _config.isBrowser && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var history = arguments[2];

  var sagaMiddleware = (0, _reduxSaga2.default)();

  var enhancers = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(_middlewares2.default).concat([sagaMiddleware, (0, _reactRouterRedux.routerMiddleware)(history)])), devtools()];

  var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.compose.apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(_sagas2.default, services);

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

var _default = configureStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(devtools, 'devtools', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/configure.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/configure.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/configure.js');
}();

;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _selectors = __webpack_require__(46);

var _actions = __webpack_require__(45);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SET_DEVICE:
      return _extends({}, state, {
        device: action.device
      });
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/device/reducer.js');
}();

;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _normalizr = __webpack_require__(42);

var _config = __webpack_require__(24);

var _actions = __webpack_require__(38);

var _schemas = __webpack_require__(47);

var schemas = _interopRequireWildcard(_schemas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var middleware = function middleware(store) {
  return function (next) {
    return function (action) {
      var payload = action.payload,
          meta = action.meta;


      if (meta && meta.entities) {
        var schema = schemas[meta.entities];

        if (schema) {
          var _normalize = (0, _normalizr.normalize)(payload, Array.isArray(payload) ? [schema] : schema),
              result = _normalize.result,
              entities = _normalize.entities;

          store.dispatch((0, _actions.entitiesReceive)(entities));
          return next(_extends({}, action, { payload: result }));
        }
        // istanbul ignore next
        if (_config.env === 'development') {
          // eslint-disable-next-line no-console
          console.warn('[entities] There is no ' + meta.entities + ' schema on ' + __dirname + '/schemas.js');
        }
      }
      return next(action);
    };
  };
};

var _default = middleware;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middleware, 'middleware', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/middleware.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/middleware.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeWith = __webpack_require__(199);

var _mergeWith2 = _interopRequireDefault(_mergeWith);

var _selectors = __webpack_require__(48);

var _actions = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  if (type === _actions.ENTITIES_RECEIVE) {
    return (0, _mergeWith2.default)({}, state, payload, function (objValue, srcValue) {
      if (Array.isArray(srcValue)) {
        return srcValue;
      }
      return undefined;
    });
  }
  return state;
}; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities


exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/entities/reducer.js');
}();

;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxForm = __webpack_require__(9);

var _selectors = __webpack_require__(50);

var _actions = __webpack_require__(49);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FORM_SET_CSRF_TOKEN:
      return _extends({}, state, {
        csrfToken: action.token
      });
    default:
      return (0, _reduxForm.reducer)(state, action);
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/form/reducer.js');
}();

;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;
exports.startGTM = startGTM;
exports.watchAllActions = watchAllActions;
exports.watchGTMStart = watchGTMStart;

var _simpleLoadScript = __webpack_require__(69);

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = __webpack_require__(18);

var _actions = __webpack_require__(51);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [track, startGTM, watchAllActions, watchGTMStart].map(regeneratorRuntime.mark);

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
          return (0, _effects.put)(actions.gtmFailure(_context.t0, payload));

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
          return (0, _effects.call)(_simpleLoadScript2.default, '//www.googletagmanager.com/gtm.js?id=' + gtmId);

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 11;
          return (0, _effects.put)(actions.gtmFailure(_context2.t0, { gtmId: gtmId }));

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
          return (0, _effects.take)('*');

        case 3:
          _ref3 = _context3.sent;
          type = _ref3.type;
          meta = _ref3.meta;
          _context3.next = 8;
          return (0, _effects.call)(track, type, meta);

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
          return (0, _effects.take)(actions.GTM_START);

        case 2:
          _ref4 = _context4.sent;
          payload = _ref4.payload;
          _context4.next = 6;
          return (0, _effects.all)([(0, _effects.call)(startGTM, payload), (0, _effects.call)(watchAllActions)]);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}

var _default = regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.fork)(watchGTMStart);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(track, 'track', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(startGTM, 'startGTM', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchAllActions, 'watchAllActions', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(watchGTMStart, 'watchGTMStart', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/gtm/sagas.js');
}();

;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(68),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(172);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/middlewares.js');
}();

;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal


var _selectors = __webpack_require__(53);

var _actions = __webpack_require__(52);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === undefined ? {} : _ref$payload;

  switch (type) {
    case _actions.MODAL_SHOW:
      return _extends({}, state, _defineProperty({}, payload.name, true));
    case _actions.MODAL_HIDE:
      if (payload.name) {
        return _extends({}, state, _defineProperty({}, payload.name, false));
      }
      return _selectors.initialState;
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/modal/reducer.js');
}();

;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(39);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _default = function _default() {
  var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (!action || !action.type) return domain;

  switch (action.type) {
    case _actions.NOTIFICATION_SEND:
      return [action.payload].concat(_toConsumableArray(domain.filter(function (_ref) {
        var id = _ref.id;
        return id !== action.payload.id;
      })));
    case _actions.NOTIFICATION_DISMISS:
      return domain.filter(function (notification) {
        return notification.id !== action.payload;
      });
    case _actions.NOTIFICATION_CLEAR:
      return [];
    default:
      return domain;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/reducer.js');
}();

;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notificationSend = notificationSend;
exports.watchNotificationSend = watchNotificationSend;

var _reduxSaga = __webpack_require__(67);

var _effects = __webpack_require__(18);

var _actions = __webpack_require__(39);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [notificationSend, watchNotificationSend].map(regeneratorRuntime.mark);

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
          return (0, _reduxSaga.delay)(payload.options.autoHideDuration + 420);

        case 3:
          _context.next = 5;
          return (0, _effects.put)(actions.notificationDismiss(payload.id));

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
          return (0, _effects.take)(actions.NOTIFICATION_SEND);

        case 3:
          _ref = _context2.sent;
          payload = _ref.payload;
          _context2.next = 7;
          return (0, _effects.call)(notificationSend, payload);

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

var _default = regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.fork)(watchNotificationSend);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(notificationSend, 'notificationSend', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/sagas.js');

  __REACT_HOT_LOADER__.register(watchNotificationSend, 'watchNotificationSend', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/sagas.js');
}();

;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = exports.initialState = {};

var isOpen = exports.isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/selectors.js");

  __REACT_HOT_LOADER__.register(isOpen, "isOpen", "C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/notifications/selectors.js");
}();

;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(195);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = __webpack_require__(66);

var _reduxForm = __webpack_require__(9);

var _reduxSagaThunk = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer
};

var req = __webpack_require__(173);

req.keys().forEach(function (key) {
  var storeName = (0, _camelCase2.default)(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

var _default = (0, _redux.combineReducers)(reducers);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(req, 'req', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/reducer.js');
}();

;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource


var _findIndex = __webpack_require__(197);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _get = __webpack_require__(198);

var _get2 = _interopRequireDefault(_get);

var _selectors = __webpack_require__(54);

var _actions = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var updateOrDeleteReducer = function updateOrDeleteReducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  var resource = (0, _get2.default)(meta, 'resource');
  var needle = (0, _get2.default)(meta, 'request.needle');
  var needleIsObject = (typeof needle === 'undefined' ? 'undefined' : _typeof(needle)) === 'object';
  var list = (0, _selectors.getList)(state, resource);
  var index = needleIsObject ? (0, _findIndex2.default)(list, needle) : list.indexOf(needle);

  if (index < 0) {
    return state;
  }

  switch (type) {
    case _actions.RESOURCE_UPDATE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), [needleIsObject ? _extends({}, list[index], payload) : payload], _toConsumableArray(list.slice(index + 1)))
      })));
    case _actions.RESOURCE_DELETE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [].concat(_toConsumableArray(list.slice(0, index)), _toConsumableArray(list.slice(index + 1))),
        count: (0, _selectors.getCount)(_selectors.initialState, resource) - 1
      })));
    // istanbul ignore next
    default:
      return state;
  }
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload,
      meta = _ref2.meta;

  var resource = (0, _get2.default)(meta, 'resource');

  if (!resource) {
    return state;
  }

  switch (type) {
    case _actions.RESOURCE_CREATE_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: [payload].concat(_toConsumableArray((0, _selectors.getList)(state, resource))),
        count: (0, _selectors.getCount)(_selectors.initialState, resource) + 1
      })));

    case _actions.RESOURCE_LIST_READ_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        list: payload,
        count: (0, _get2.default)(meta, 'count')
      })));

    case _actions.RESOURCE_DETAIL_READ_REQUEST:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        detail: (0, _selectors.getDetail)(_selectors.initialState, resource)
      })));
    case _actions.RESOURCE_DETAIL_READ_SUCCESS:
      return _extends({}, state, _defineProperty({}, resource, _extends({}, (0, _selectors.getResourceState)(state, resource), {
        detail: payload
      })));

    case _actions.RESOURCE_UPDATE_SUCCESS:
    case _actions.RESOURCE_DELETE_SUCCESS:
      return updateOrDeleteReducer(state, { type: type, payload: payload, meta: meta });

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateOrDeleteReducer, 'updateOrDeleteReducer', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/reducer.js');
}();

;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResource = createResource;
exports.readResourceList = readResourceList;
exports.readResourceDetail = readResourceDetail;
exports.updateResource = updateResource;
exports.deleteResource = deleteResource;
exports.watchResourceCreateRequest = watchResourceCreateRequest;
exports.watchResourceListReadRequest = watchResourceListReadRequest;
exports.watchResourceDetailReadRequest = watchResourceDetailReadRequest;
exports.watchResourceUpdateRequest = watchResourceUpdateRequest;
exports.watchResourceDeleteRequest = watchResourceDeleteRequest;

var _effects = __webpack_require__(18);

var _actions = __webpack_require__(40);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [createResource, readResourceList, readResourceDetail, updateResource, deleteResource, watchResourceCreateRequest, watchResourceListReadRequest, watchResourceDetailReadRequest, watchResourceUpdateRequest, watchResourceDeleteRequest].map(regeneratorRuntime.mark); // https://github.com/diegohaz/arc/wiki/Sagas
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
          return (0, _effects.call)([api, api.post], '/' + resource, data);

        case 3:
          detail = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(actions.resourceCreateSuccess(resource, detail, { data: data }, thunk));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)(actions.resourceCreateFailure(resource, _context.t0, { data: data }, thunk));

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
          return (0, _effects.call)([api, api.get], '/' + resource, { params: params });

        case 3:
          _ref5 = _context2.sent;
          list = _ref5.items;
          count = _ref5.count;
          _context2.next = 8;
          return (0, _effects.put)(actions.resourceListReadSuccess(resource, { list: list, count: count }, { params: params }, thunk));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](0);
          _context2.next = 14;
          return (0, _effects.put)(actions.resourceListReadFailure(resource, _context2.t0, { params: params }, thunk));

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
          return (0, _effects.call)([api, api.get], '/' + resource + '/' + needle);

        case 3:
          detail = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)(actions.resourceDetailReadSuccess(resource, detail, { needle: needle }, thunk));

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 12;
          return (0, _effects.put)(actions.resourceDetailReadFailure(resource, _context3.t0, { needle: needle }, thunk));

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
          return (0, _effects.call)([api, api.put], '/' + resource + '/' + needle, data);

        case 3:
          detail = _context4.sent;
          _context4.next = 6;
          return (0, _effects.put)(actions.resourceUpdateSuccess(resource, detail, { needle: needle, data: data }, thunk));

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 12;
          return (0, _effects.put)(actions.resourceUpdateFailure(resource, _context4.t0, { needle: needle, data: data }, thunk));

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
          return (0, _effects.call)([api, api.delete], '/' + resource + '/' + needle);

        case 3:
          _context5.next = 5;
          return (0, _effects.put)(actions.resourceDeleteSuccess(resource, { needle: needle }, thunk));

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5['catch'](0);
          _context5.next = 11;
          return (0, _effects.put)(actions.resourceDeleteFailure(resource, _context5.t0, { needle: needle }, thunk));

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
          return (0, _effects.take)(actions.RESOURCE_CREATE_REQUEST);

        case 3:
          _ref12 = _context6.sent;
          payload = _ref12.payload;
          meta = _ref12.meta;
          _context6.next = 8;
          return (0, _effects.call)(createResource, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_LIST_READ_REQUEST);

        case 3:
          _ref13 = _context7.sent;
          payload = _ref13.payload;
          meta = _ref13.meta;
          _context7.next = 8;
          return (0, _effects.call)(readResourceList, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_DETAIL_READ_REQUEST);

        case 3:
          _ref14 = _context8.sent;
          payload = _ref14.payload;
          meta = _ref14.meta;
          _context8.next = 8;
          return (0, _effects.call)(readResourceDetail, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_UPDATE_REQUEST);

        case 3:
          _ref15 = _context9.sent;
          payload = _ref15.payload;
          meta = _ref15.meta;
          _context9.next = 8;
          return (0, _effects.call)(updateResource, api, payload, meta);

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
          return (0, _effects.take)(actions.RESOURCE_DELETE_REQUEST);

        case 3:
          _ref16 = _context10.sent;
          payload = _ref16.payload;
          meta = _ref16.meta;
          _context10.next = 8;
          return (0, _effects.call)(deleteResource, api, payload, meta);

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

var _default = regeneratorRuntime.mark(function _default(_ref17) {
  var api = _ref17.api;
  return regeneratorRuntime.wrap(function _default$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.fork)(watchResourceCreateRequest, api);

        case 2:
          _context11.next = 4;
          return (0, _effects.fork)(watchResourceListReadRequest, api);

        case 4:
          _context11.next = 6;
          return (0, _effects.fork)(watchResourceDetailReadRequest, api);

        case 6:
          _context11.next = 8;
          return (0, _effects.fork)(watchResourceUpdateRequest, api);

        case 8:
          _context11.next = 10;
          return (0, _effects.fork)(watchResourceDeleteRequest, api);

        case 10:
        case 'end':
          return _context11.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createResource, 'createResource', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceList, 'readResourceList', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(readResourceDetail, 'readResourceDetail', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(updateResource, 'updateResource', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(deleteResource, 'deleteResource', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceCreateRequest, 'watchResourceCreateRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceListReadRequest, 'watchResourceListReadRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDetailReadRequest, 'watchResourceDetailReadRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceUpdateRequest, 'watchResourceUpdateRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(watchResourceDeleteRequest, 'watchResourceDeleteRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/resource/sagas.js');
}();

;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = __webpack_require__(18);

var req = __webpack_require__(174);

var sagas = req.keys().map(function (key) {
  return req(key).default;
});

var _default = regeneratorRuntime.mark(function _default() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(sagas.map(function (saga) {
            return (0, _effects.fork)(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(sagas, 'sagas', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/sagas.js');
}();

;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social


var _selectors = __webpack_require__(55);

var _actions = __webpack_require__(41);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions.SOCIAL_LOGIN_SUCCESS:
      return _extends({}, state, {
        user: payload
      });
    case _actions.SOCIAL_LOGOUT:
      return _extends({}, state, {
        user: _selectors.initialState.user
      });
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/reducer.js');
}();

;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceAction = exports.appendFbRoot = exports.promises = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.loginFacebook = loginFacebook;
exports.prepareFacebook = prepareFacebook;
exports.watchSocialLoginFacebook = watchSocialLoginFacebook;
exports.loginGoogle = loginGoogle;
exports.prepareGoogle = prepareGoogle;
exports.watchSocialLoginGoogle = watchSocialLoginGoogle;

var _simpleLoadScript = __webpack_require__(69);

var _simpleLoadScript2 = _interopRequireDefault(_simpleLoadScript);

var _effects = __webpack_require__(18);

var _actions = __webpack_require__(41);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [loginFacebook, prepareFacebook, watchSocialLoginFacebook, loginGoogle, prepareGoogle, watchSocialLoginGoogle].map(regeneratorRuntime.mark);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social


var promises = exports.promises = {
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

var appendFbRoot = exports.appendFbRoot = function appendFbRoot() {
  var fbRoot = document.createElement('div');
  fbRoot.id = 'fb-root';
  document.body.appendChild(fbRoot);
};

var serviceAction = exports.serviceAction = function serviceAction(suffix, service) {
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
          return (0, _effects.call)(promises.fbLogin, _extends({ scope: scope }, options));

        case 4:
          _context.next = 6;
          return (0, _effects.call)(promises.fbGetMe, { fields: fields });

        case 6:
          data = _context.sent;
          picture = 'https://graph.facebook.com/' + data.id + '/picture?type=normal';
          _context.next = 10;
          return (0, _effects.put)(actions.socialLoginSuccess(_extends({}, data, { picture: picture }), request));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](1);
          _context.next = 16;
          return (0, _effects.put)(actions.socialLoginFailure(_context.t0, request));

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
          return (0, _effects.call)(appendFbRoot);

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_simpleLoadScript2.default, '//connect.facebook.net/en_US/sdk.js');

        case 6:
          _context2.next = 8;
          return (0, _effects.call)([window.FB, window.FB.init], _extends({ appId: clientId, version: version }, options));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](1);
          _context2.next = 14;
          return (0, _effects.put)(actions.socialLoginFailure(_context2.t0, request));

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
          return (0, _effects.take)(serviceAction('PREPARE', 'facebook'));

        case 2:
          _ref4 = _context3.sent;
          payload = _ref4.payload;
          _context3.next = 6;
          return (0, _effects.call)(prepareFacebook, payload);

        case 6:
          if (false) {
            _context3.next = 15;
            break;
          }

          _context3.next = 9;
          return (0, _effects.take)(serviceAction('REQUEST', 'facebook'));

        case 9:
          _ref5 = _context3.sent;
          _payload = _ref5.payload;
          _context3.next = 13;
          return (0, _effects.call)(loginFacebook, _payload);

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
          return (0, _effects.call)(window.gapi.auth2.getAuthInstance);

        case 4:
          auth2 = _context4.sent;
          _context4.next = 7;
          return (0, _effects.call)([auth2, auth2.signIn], _extends({ scope: scope }, options));

        case 7:
          user = _context4.sent;
          _context4.next = 10;
          return (0, _effects.call)([user, user.getBasicProfile]);

        case 10:
          profile = _context4.sent;
          _context4.next = 13;
          return (0, _effects.call)([profile, profile.getName]);

        case 13:
          name = _context4.sent;
          _context4.next = 16;
          return (0, _effects.call)([profile, profile.getImageUrl]);

        case 16:
          picture = _context4.sent;
          _context4.next = 19;
          return (0, _effects.put)(actions.socialLoginSuccess({ name: name, picture: picture }, request));

        case 19:
          _context4.next = 25;
          break;

        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4['catch'](1);
          _context4.next = 25;
          return (0, _effects.put)(actions.socialLoginFailure(_context4.t0, request));

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
          return (0, _effects.call)(_simpleLoadScript2.default, '//apis.google.com/js/platform.js');

        case 4:
          _context5.next = 6;
          return (0, _effects.call)(promises.loadGoogleAuth2);

        case 6:
          _context5.next = 8;
          return (0, _effects.call)(window.gapi.auth2.init, _extends({ client_id: clientId }, options));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](1);
          _context5.next = 14;
          return (0, _effects.put)(actions.socialLoginFailure(_context5.t0, request));

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
          return (0, _effects.take)(serviceAction('PREPARE', 'google'));

        case 2:
          _ref8 = _context6.sent;
          payload = _ref8.payload;
          _context6.next = 6;
          return (0, _effects.call)(prepareGoogle, payload);

        case 6:
          if (false) {
            _context6.next = 15;
            break;
          }

          _context6.next = 9;
          return (0, _effects.take)(serviceAction('REQUEST', 'google'));

        case 9:
          _ref9 = _context6.sent;
          _payload2 = _ref9.payload;
          _context6.next = 13;
          return (0, _effects.call)(loginGoogle, _payload2);

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

var _default = regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.fork)(watchSocialLoginFacebook);

        case 2:
          _context7.next = 4;
          return (0, _effects.fork)(watchSocialLoginGoogle);

        case 4:
        case 'end':
          return _context7.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(promises, 'promises', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(appendFbRoot, 'appendFbRoot', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(serviceAction, 'serviceAction', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(loginFacebook, 'loginFacebook', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(prepareFacebook, 'prepareFacebook', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(watchSocialLoginFacebook, 'watchSocialLoginFacebook', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(loginGoogle, 'loginGoogle', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(prepareGoogle, 'prepareGoogle', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(watchSocialLoginGoogle, 'watchSocialLoginGoogle', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/social/sagas.js');
}();

;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _selectors = __webpack_require__(56);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var action = arguments[1];

  if (!action.type) return state;

  var _ref = action.type.match(/^(.+)_([^_]+)$/) || [],
      _ref2 = _slicedToArray(_ref, 3),
      prefix = _ref2[1],
      suffix = _ref2[2];

  switch (suffix) {
    case 'REQUEST':
      return {
        loading: _extends({}, (0, _selectors.getLoadingState)(state), _defineProperty({}, prefix, true)),
        error: _extends({}, (0, _selectors.getErrorState)(state), _defineProperty({}, prefix, false))
      };
    case 'SUCCESS':
      return {
        loading: _extends({}, (0, _selectors.getLoadingState)(state), _defineProperty({}, prefix, false)),
        error: _extends({}, (0, _selectors.getErrorState)(state), _defineProperty({}, prefix, false))
      };
    case 'FAILURE':
      return {
        loading: _extends({}, (0, _selectors.getLoadingState)(state), _defineProperty({}, prefix, false)),
        error: _extends({}, (0, _selectors.getErrorState)(state), _defineProperty({}, prefix, true))
      };
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/reducer.js');
}();

;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesRequest = undefined;
exports.resolveOrReject = resolveOrReject;
exports.watchRequestActions = watchRequestActions;

var _omit = __webpack_require__(200);

var _omit2 = _interopRequireDefault(_omit);

var _effects = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [resolveOrReject, watchRequestActions].map(regeneratorRuntime.mark);

var requestPattern = /_REQUEST$/;
var successSuffix = '_SUCCESS';
var failureSuffix = '_FAILURE';

var matchesRequest = exports.matchesRequest = function matchesRequest(_ref) {
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
          return (0, _effects.race)({
            success: (0, _effects.take)(prefix + successSuffix),
            failure: (0, _effects.take)(prefix + failureSuffix)
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
          return (0, _effects.call)(resolve, (0, _omit2.default)(success, 'type'));

        case 9:
          _context.next = 14;
          break;

        case 11:
          if (!(failure && typeof reject === 'function')) {
            _context.next = 14;
            break;
          }

          _context.next = 14;
          return (0, _effects.call)(reject, (0, _omit2.default)(failure, 'type'));

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
          return (0, _effects.takeEvery)(matchesRequest, resolveOrReject);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

var _default = regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.fork)(watchRequestActions);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(requestPattern, 'requestPattern', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/sagas.js');

  __REACT_HOT_LOADER__.register(successSuffix, 'successSuffix', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/sagas.js');

  __REACT_HOT_LOADER__.register(failureSuffix, 'failureSuffix', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/sagas.js');

  __REACT_HOT_LOADER__.register(matchesRequest, 'matchesRequest', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/sagas.js');

  __REACT_HOT_LOADER__.register(resolveOrReject, 'resolveOrReject', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/sagas.js');

  __REACT_HOT_LOADER__.register(watchRequestActions, 'watchRequestActions', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/kybarg/Documents/GitHub/trendberry-admin/src/store/status/sagas.js');
}();

;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common/ConfirmationDialog/index.js": 76,
	"./common/Notifications/index.js": 77,
	"./common/SearchWidget/index.js": 78,
	"./common/TableRowCategoryName/index.js": 79,
	"./editor/AlignStyleControls/index.js": 80,
	"./editor/BlockStyleControls/index.js": 81,
	"./editor/BlockStyleMenuControls/index.js": 82,
	"./editor/DraftRichEditor/index.js": 83,
	"./editor/InlineStyleControls/index.js": 84,
	"./editor/StyleMenuItem/index.js": 85,
	"./editor/ToggleButton/index.js": 86,
	"./forms/CategoryForm/index.js": 87,
	"./forms/Field/index.js": 88,
	"./forms/ProductForm/index.js": 89,
	"./forms/ReduxField/index.js": 90,
	"./forms/ShopForm/index.js": 91,
	"./forms/SigninForm/index.js": 92,
	"./forms/TextField/index.js": 93,
	"./forms/UserForm/index.js": 94,
	"./forms/VendorForm/index.js": 95,
	"./layout/AppContent/index.js": 96,
	"./layout/AppDrawer/index.js": 97,
	"./layout/AppFrame/index.js": 98,
	"./pages/CategoryCreatePage/index.js": 99,
	"./pages/CategoryListPage/index.js": 100,
	"./pages/CategoryUpdatePage/index.js": 101,
	"./pages/HomePage/index.js": 102,
	"./pages/ProductCreatePage/index.js": 103,
	"./pages/ProductListPage/index.js": 104,
	"./pages/ProductUpdatePage/index.js": 105,
	"./pages/ShopCreatePage/index.js": 106,
	"./pages/ShopListPage/index.js": 107,
	"./pages/ShopUpdatePage/index.js": 108,
	"./pages/SigninPage/index.js": 109,
	"./pages/UserCreatePage/index.js": 110,
	"./pages/UserListPage/index.js": 111,
	"./pages/UserUpdatePage/index.js": 112,
	"./pages/VendorCreatePage/index.js": 113,
	"./pages/VendorListPage/index.js": 114,
	"./pages/VendorUpdatePage/index.js": 115,
	"./table/Table/index.js": 122,
	"./table/TableBody/index.js": 116,
	"./table/TableColumn/index.js": 117,
	"./table/TableFooter/index.js": 119,
	"./table/TableFooterMenu/index.js": 118,
	"./table/TableHead/index.js": 120,
	"./table/TableToolbar/index.js": 121,
	"./templates/PageTemplate/index.js": 123
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
	"./AppDrawer.js": 124,
	"./AppFrame.js": 125,
	"./CategoryCreatePage.js": 126,
	"./CategoryForm.js": 32,
	"./CategoryListPage.js": 127,
	"./CategoryUpdatePage.js": 128,
	"./ConfirmationDialog.js": 129,
	"./ProductCreatePage.js": 130,
	"./ProductForm.js": 33,
	"./ProductListPage.js": 131,
	"./ProductUpdatePage.js": 132,
	"./ShopCreatePage.js": 133,
	"./ShopForm.js": 34,
	"./ShopListPage.js": 134,
	"./ShopUpdatePage.js": 135,
	"./SigninForm.js": 136,
	"./SigninPage.js": 137,
	"./Snackbar.js": 138,
	"./Table.js": 139,
	"./TableFooterMenu.js": 140,
	"./UserCreatePage.js": 141,
	"./UserForm.js": 35,
	"./UserListPage.js": 142,
	"./UserUpdatePage.js": 143,
	"./VendorCreatePage.js": 144,
	"./VendorForm.js": 36,
	"./VendorListPage.js": 145,
	"./VendorUpdatePage.js": 146
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
	"./auth/actions.js": 37,
	"./device/actions.js": 45,
	"./entities/actions.js": 38,
	"./form/actions.js": 49,
	"./gtm/actions.js": 51,
	"./modal/actions.js": 52,
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
webpackContext.id = 171;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./entities/middleware.js": 152
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
	"./auth/reducer.js": 148,
	"./device/reducer.js": 151,
	"./entities/reducer.js": 153,
	"./form/reducer.js": 154,
	"./modal/reducer.js": 157,
	"./notifications/reducer.js": 158,
	"./resource/reducer.js": 162,
	"./social/reducer.js": 165,
	"./status/reducer.js": 167
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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/sagas.js": 149,
	"./gtm/sagas.js": 155,
	"./notifications/sagas.js": 159,
	"./resource/sagas.js": 163,
	"./social/sagas.js": 166,
	"./status/sagas.js": 168
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
webpackContext.id = 174;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/selectors.js": 44,
	"./device/selectors.js": 46,
	"./entities/selectors.js": 48,
	"./form/selectors.js": 50,
	"./modal/selectors.js": 53,
	"./notifications/selectors.js": 160,
	"./resource/selectors.js": 54,
	"./social/selectors.js": 55,
	"./status/selectors.js": 56
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
webpackContext.id = 175;

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = require("append-query");

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/util/inDOM");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("draftjs-utils");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("express-device");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("express-force-ssl");

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("jss-preset-default");

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = require("lodash/assign");

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("lodash/findIndex");

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("lodash/mergeWith");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ArrowDropUp");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Close");

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Dashboard");

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Folder");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignCenter");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignJustify");

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignLeft");

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatAlignRight");

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatBold");

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatItalic");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatListBulleted");

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatListNumbered");

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/FormatUnderlined");

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/InsertDriveFile");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/KeyboardArrowLeft");

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/KeyboardArrowRight");

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/LibraryAdd");

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/LocalMall");

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Menu");

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/People");

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Search");

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Settings");

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Stars");

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Store");

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Form/FormControl");

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input/Input");

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu/Menu");

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Progress/LinearProgress");

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/createGenerateClassName");

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/transitions");

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = require("material-ui/utils/withWidth");

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 243 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/jss");

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/NavLink");

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group/CSSTransitionGroup");

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = require("recompose/shallowEqual");

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isIn");

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isInt");

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isURL");

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map