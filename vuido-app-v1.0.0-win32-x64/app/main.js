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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/MainWindow.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/MainWindow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    exit() {
      this.$exit();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/MainWindow.vue?vue&type=template&id=63d7a97c&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/MainWindow.vue?vue&type=template&id=63d7a97c& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Window",
    {
      attrs: { title: "vuido-app", width: "400", height: "100", margined: "" },
      on: { close: _vm.exit }
    },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("Box", [
      _c("Text", [_vm._v("Welcome to your Vuido application11221!")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuido/dist/vuido.js":
/*!******************************************!*\
  !*** ./node_modules/vuido/dist/vuido.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vuido v0.2.0
 * Copyright (C) 2018 Michał Męciński
 * License: MIT
 */
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_instance_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_global_api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);










Object(core_global_api_index__WEBPACK_IMPORTED_MODULE_2__["initGlobalAPI"])(core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].version = '2.5.17';

core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].config.mustUseProp = _util__WEBPACK_IMPORTED_MODULE_5__["mustUseProp"];
core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].config.isReservedTag = _util__WEBPACK_IMPORTED_MODULE_5__["isReservedTag"];
core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].config.getTagNamespace = _util__WEBPACK_IMPORTED_MODULE_5__["getTagNamespace"];
core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].config.isUnknownElement = _util__WEBPACK_IMPORTED_MODULE_5__["isUnknownElement"];

core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.__patch__ = _patch__WEBPACK_IMPORTED_MODULE_4__["patch"];

const mountedWindows = [];

core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$mount = function (el, hydrating) {
  if (el != null) throw new Error('Mount element is not supported');

  Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_3__["mountComponent"])(this, el, hydrating);

  if (this.$parent == null && this.$el.widget == null) {
    if (this.$el.tagName != 'Window') throw new Error('Top level element must be a Window');

    this.$el._mountWindow();

    mountedWindows.push(this);

    this.$on('hook:destroyed', () => {
      this.$el._destroyWindow();

      const index = mountedWindows.indexOf(this);
      if (index >= 0) mountedWindows.splice(index, 1);
    });
  }

  return this;
};

core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$libui = libui_node__WEBPACK_IMPORTED_MODULE_0___default.a;

core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$start = function () {
  if (mountedWindows.indexOf(this) < 0) this.$mount();

  libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.startLoop();
};

core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$exit = function () {
  for (let i = mountedWindows.length - 1; i >= 0; i--) mountedWindows[i].$destroy();

  libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.stopLoop();
};

class DialogsHelper {
  constructor(vm) {
    this.vm = vm;
  }

  msgBox(title, description) {
    libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiDialogs.msgBox(this.vm.$root.$el.window, title, description);
  }

  msgBoxError(title, description) {
    libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiDialogs.msgBoxError(this.vm.$root.$el.window, title, description);
  }

  openFile() {
    return libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiDialogs.openFile(this.vm.$root.$el.window);
  }

  saveFile() {
    return libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiDialogs.saveFile(this.vm.$root.$el.window);
  }
};

Object.defineProperty(core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"].prototype, '$dialogs', {
  get() {
    if (this._dialogsHelper == null) this._dialogsHelper = new DialogsHelper(this);
    return this._dialogsHelper;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (core_instance_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! libui-node */ "libui-node");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);







function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

Object(_init__WEBPACK_IMPORTED_MODULE_0__["initMixin"])(Vue);
Object(_state__WEBPACK_IMPORTED_MODULE_1__["stateMixin"])(Vue);
Object(_events__WEBPACK_IMPORTED_MODULE_3__["eventsMixin"])(Vue);
Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["lifecycleMixin"])(Vue);
Object(_render__WEBPACK_IMPORTED_MODULE_2__["renderMixin"])(Vue);

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMixin", function() { return initMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInternalComponent", function() { return initInternalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveConstructorOptions", function() { return resolveConstructorOptions; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _util_perf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _inject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);












let uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;

    vm._uid = uid++;

    let startTag, endTag;

    if ( true && _config__WEBPACK_IMPORTED_MODULE_0__["default"].performance && _util_perf__WEBPACK_IMPORTED_MODULE_5__["mark"]) {
      startTag = `vue-perf-start:${vm._uid}`;
      endTag = `vue-perf-end:${vm._uid}`;
      Object(_util_perf__WEBPACK_IMPORTED_MODULE_5__["mark"])(startTag);
    }

    vm._isVue = true;

    if (options && options._isComponent) {
      initInternalComponent(vm, options);
    } else {
      vm.$options = Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["mergeOptions"])(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }

    if (true) {
      Object(_proxy__WEBPACK_IMPORTED_MODULE_1__["initProxy"])(vm);
    } else {}

    vm._self = vm;
    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_6__["initLifecycle"])(vm);
    Object(_events__WEBPACK_IMPORTED_MODULE_4__["initEvents"])(vm);
    Object(_render__WEBPACK_IMPORTED_MODULE_3__["initRender"])(vm);
    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_6__["callHook"])(vm, 'beforeCreate');
    Object(_inject__WEBPACK_IMPORTED_MODULE_7__["initInjections"])(vm);
    Object(_state__WEBPACK_IMPORTED_MODULE_2__["initState"])(vm);
    Object(_inject__WEBPACK_IMPORTED_MODULE_7__["initProvide"])(vm);
    Object(_lifecycle__WEBPACK_IMPORTED_MODULE_6__["callHook"])(vm, 'created');

    if ( true && _config__WEBPACK_IMPORTED_MODULE_0__["default"].performance && _util_perf__WEBPACK_IMPORTED_MODULE_5__["mark"]) {
      vm._name = Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["formatComponentName"])(vm, false);
      Object(_util_perf__WEBPACK_IMPORTED_MODULE_5__["mark"])(endTag);
      Object(_util_perf__WEBPACK_IMPORTED_MODULE_5__["measure"])(`vue ${vm._name} init`, startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  const opts = vm.$options = Object.create(vm.constructor.options);

  const parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  const vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  let options = Ctor.options;
  if (Ctor.super) {
    const superOptions = resolveConstructorOptions(Ctor.super);
    const cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions;

      const modifiedOptions = resolveModifiedOptions(Ctor);

      if (modifiedOptions) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["extend"])(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["mergeOptions"])(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  let modified;
  const latest = Ctor.options;
  const extended = Ctor.extendOptions;
  const sealed = Ctor.sealedOptions;
  for (const key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) modified = {};
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  if (Array.isArray(latest)) {
    const res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (let i = 0; i < latest.length; i++) {
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);






/* harmony default export */ __webpack_exports__["default"] = ({
  optionMergeStrategies: Object.create(null),

  silent: false,

  productionTip: "none" !== 'production',

  devtools: "none" !== 'production',

  performance: false,

  errorHandler: null,

  warnHandler: null,

  ignoredElements: [],

  keyCodes: Object.create(null),

  isReservedTag: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  isReservedAttr: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  isUnknownElement: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  getTagNamespace: shared_util__WEBPACK_IMPORTED_MODULE_0__["noop"],

  parsePlatformTagName: shared_util__WEBPACK_IMPORTED_MODULE_0__["identity"],

  mustUseProp: shared_util__WEBPACK_IMPORTED_MODULE_0__["no"],

  _lifecycleHooks: shared_constants__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_HOOKS"]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyObject", function() { return emptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndef", function() { return isUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalse", function() { return isFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRawType", function() { return toRawType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidArrayIndex", function() { return isValidArrayIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuiltInTag", function() { return isBuiltInTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservedAttribute", function() { return isReservedAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cached", function() { return cached; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "no", function() { return no; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genStaticKeys", function() { return genStaticKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseEqual", function() { return looseEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "looseIndexOf", function() { return looseIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });


const emptyObject = Object.freeze({});

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean';
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

const _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

function isValidArrayIndex(val) {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

function toNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}

function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val];
}

const isBuiltInTag = makeMap('slot,component', true);

const isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

const camelizeRE = /-(\w)/g;
const camelize = cached(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
});

const capitalize = cached(str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached(str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    const l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

const bind = Function.prototype.bind ? nativeBind : polyfillBind;

function toArray(list, start) {
  start = start || 0;
  let i = list.length - start;
  const ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}

function toObject(arr) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

function noop(a, b, c) {}

const no = (a, b, c) => false;

const identity = _ => _;

function genStaticKeys(modules) {
  return modules.reduce((keys, m) => {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

function looseEqual(a, b) {
  if (a === b) return true;
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a);
      const isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) return i;
  }
  return -1;
}

function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSR_ATTR", function() { return SSR_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSET_TYPES", function() { return ASSET_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIFECYCLE_HOOKS", function() { return LIFECYCLE_HOOKS; });
const SSR_ATTR = 'data-server-rendered';

const ASSET_TYPES = ['component', 'directive', 'filter'];

const LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProxy", function() { return initProxy; });
/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);





let initProxy;

if (true) {
  const allowedGlobals = Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require');

  const warnNonPresent = (target, key) => {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Property or method "${key}" is not defined on the instance but ` + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  const hasProxy = typeof Proxy !== 'undefined' && Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["isNative"])(Proxy);

  if (hasProxy) {
    const isBuiltInModifier = Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('stop,prevent,self,ctrl,shift,alt,meta,exact');
    core_config__WEBPACK_IMPORTED_MODULE_0__["default"].keyCodes = new Proxy(core_config__WEBPACK_IMPORTED_MODULE_0__["default"].keyCodes, {
      set(target, key, value) {
        if (isBuiltInModifier(key)) {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Avoid overwriting built-in modifier in config.keyCodes: .${key}`);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  const hasHandler = {
    has(target, key) {
      const has = key in target;
      const isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  const getHandler = {
    get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      const options = vm.$options;
      const handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["emptyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndef", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isUndef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFalse", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isFalse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRawType", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["toRawType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidArrayIndex", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isValidArrayIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["toString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["makeMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBuiltInTag", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isBuiltInTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReservedAttribute", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["isReservedAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["hasOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cached", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["cached"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["capitalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["hyphenate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["toArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["toObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "no", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["no"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genStaticKeys", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["genStaticKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "looseEqual", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["looseEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "looseIndexOf", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["looseIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return shared_util__WEBPACK_IMPORTED_MODULE_0__["once"]; });

/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReserved", function() { return _lang__WEBPACK_IMPORTED_MODULE_1__["isReserved"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _lang__WEBPACK_IMPORTED_MODULE_1__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _lang__WEBPACK_IMPORTED_MODULE_1__["parsePath"]; });

/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProto", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["hasProto"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inBrowser", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["inBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inWeex", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["inWeex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "weexPlatform", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["weexPlatform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UA", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["UA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIE9", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isIE9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isAndroid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isIOS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isChrome"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nativeWatch", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["nativeWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsPassive", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["supportsPassive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isServerRendering", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isServerRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "devtools", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["devtools"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNative", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["isNative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasSymbol", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["hasSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Set", function() { return _env__WEBPACK_IMPORTED_MODULE_2__["_Set"]; });

/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDataOrFn", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["mergeDataOrFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateComponentName", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["validateComponentName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["mergeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveAsset", function() { return _options__WEBPACK_IMPORTED_MODULE_3__["resolveAsset"]; });

/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _debug__WEBPACK_IMPORTED_MODULE_4__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tip", function() { return _debug__WEBPACK_IMPORTED_MODULE_4__["tip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateComponentTrace", function() { return _debug__WEBPACK_IMPORTED_MODULE_4__["generateComponentTrace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatComponentName", function() { return _debug__WEBPACK_IMPORTED_MODULE_4__["formatComponentName"]; });

/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateProp", function() { return _props__WEBPACK_IMPORTED_MODULE_5__["validateProp"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return _error__WEBPACK_IMPORTED_MODULE_6__["handleError"]; });

/* harmony import */ var _next_tick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMacroTask", function() { return _next_tick__WEBPACK_IMPORTED_MODULE_7__["withMacroTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _next_tick__WEBPACK_IMPORTED_MODULE_7__["nextTick"]; });

/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineReactive", function() { return _observer_index__WEBPACK_IMPORTED_MODULE_8__["defineReactive"]; });













/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReserved", function() { return isReserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });

function isReserved(str) {
  const c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

const bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  const segments = path.split('.');
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProto", function() { return hasProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBrowser", function() { return inBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inWeex", function() { return inWeex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlatform", function() { return weexPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UA", function() { return UA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE9", function() { return isIE9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return isEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return isChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeWatch", function() { return nativeWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassive", function() { return supportsPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServerRendering", function() { return isServerRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devtools", function() { return devtools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNative", function() { return isNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSymbol", function() { return hasSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Set", function() { return _Set; });

const hasProto = '__proto__' in {};

const inBrowser = typeof window !== 'undefined';
const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
const isEdge = UA && UA.indexOf('edge/') > 0;
const isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

const nativeWatch = {}.watch;

let supportsPassive = false;
if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

let _isServer;
const isServerRendering = () => {
  if (_isServer === undefined) {
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

const devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

const hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

let _Set;

if (typeof Set !== 'undefined' && isNative(Set)) {
  _Set = Set;
} else {
  _Set = class Set {
    constructor() {
      this.set = Object.create(null);
    }
    has(key) {
      return this.set[key] === true;
    }
    add(key) {
      this.set[key] = true;
    }
    clear() {
      this.set = Object.create(null);
    }
  };
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDataOrFn", function() { return mergeDataOrFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateComponentName", function() { return validateComponentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAsset", function() { return resolveAsset; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);











const strats = _config__WEBPACK_IMPORTED_MODULE_0__["default"].optionMergeStrategies;

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])(`option "${key}" can only be used during instance ` + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

function mergeData(to, from) {
  if (!from) return to;
  let key, toVal, fromVal;
  const keys = Object.keys(from);
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(to, key)) {
      Object(_observer_index__WEBPACK_IMPORTED_MODULE_3__["set"])(to, key, fromVal);
    } else if (Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(toVal) && Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }

    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      const instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      const defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

shared_constants__WEBPACK_IMPORTED_MODULE_4__["LIFECYCLE_HOOKS"].forEach(hook => {
  strats[hook] = mergeHook;
});

function mergeAssets(parentVal, childVal, vm, key) {
  const res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(res, childVal);
  } else {
    return res;
  }
}

shared_constants__WEBPACK_IMPORTED_MODULE_4__["ASSET_TYPES"].forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

strats.watch = function (parentVal, childVal, vm, key) {
  if (parentVal === _env__WEBPACK_IMPORTED_MODULE_2__["nativeWatch"]) parentVal = undefined;
  if (childVal === _env__WEBPACK_IMPORTED_MODULE_2__["nativeWatch"]) childVal = undefined;

  if (!childVal) return Object.create(parentVal || null);
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) return childVal;
  const ret = {};
  Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(ret, parentVal);
  for (const key in childVal) {
    let parent = ret[key];
    const child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "none" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) return childVal;
  const ret = Object.create(null);
  Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(ret, parentVal);
  if (childVal) Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["extend"])(ret, childVal);
  return ret;
};
strats.provide = mergeDataOrFn;

const defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

function checkComponents(options) {
  for (const key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
  }
  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isBuiltInTag"])(name) || _config__WEBPACK_IMPORTED_MODULE_0__["default"].isReservedTag(name)) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}

function normalizeProps(options, vm) {
  const props = options.props;
  if (!props) return;
  const res = {};
  let i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["camelize"])(val);
        res[name] = { type: null };
      } else if (true) {
        Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])('props must be strings when using array syntax.');
      }
    }
  } else if (Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(props)) {
    for (const key in props) {
      val = props[key];
      name = Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["camelize"])(key);
      res[name] = Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(val) ? val : { type: val };
    }
  } else if (true) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Invalid value for option "props": expected an Array or an Object, ` + `but got ${Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["toRawType"])(props)}.`, vm);
  }
  options.props = res;
}

function normalizeInject(options, vm) {
  const inject = options.inject;
  if (!inject) return;
  const normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (let i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(inject)) {
    for (const key in inject) {
      const val = inject[key];
      normalized[key] = Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(val) ? Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["extend"])({ from: key }, val) : { from: val };
    }
  } else if (true) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Invalid value for option "inject": expected an Array or an Object, ` + `but got ${Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["toRawType"])(inject)}.`, vm);
  }
}

function normalizeDirectives(options) {
  const dirs = options.directives;
  if (dirs) {
    for (const key in dirs) {
      const def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(value)) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Invalid value for option "${name}": expected an Object, ` + `but got ${Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["toRawType"])(value)}.`, vm);
  }
}

function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  const extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (let i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  const options = {};
  let key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    const strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

function resolveAsset(options, type, id, warnMissing) {
  if (typeof id !== 'string') {
    return;
  }
  const assets = options[type];

  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(assets, id)) return assets[id];
  const camelizedId = Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["camelize"])(id);
  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(assets, camelizedId)) return assets[camelizedId];
  const PascalCaseId = Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(camelizedId);
  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(assets, PascalCaseId)) return assets[PascalCaseId];

  const res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tip", function() { return tip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComponentTrace", function() { return generateComponentTrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatComponentName", function() { return formatComponentName; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);





let warn = shared_util__WEBPACK_IMPORTED_MODULE_1__["noop"];
let tip = shared_util__WEBPACK_IMPORTED_MODULE_1__["noop"];
let generateComponentTrace = shared_util__WEBPACK_IMPORTED_MODULE_1__["noop"];
let formatComponentName = shared_util__WEBPACK_IMPORTED_MODULE_1__["noop"];

if (true) {
  const hasConsole = typeof console !== 'undefined';
  const classifyRE = /(?:^|[-_])(\w)/g;
  const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

  warn = (msg, vm) => {
    const trace = vm ? generateComponentTrace(vm) : '';

    if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].warnHandler) {
      _config__WEBPACK_IMPORTED_MODULE_0__["default"].warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !_config__WEBPACK_IMPORTED_MODULE_0__["default"].silent) {
      console.error(`[Vue warn]: ${msg}${trace}`);
    }
  };

  tip = (msg, vm) => {
    if (hasConsole && !_config__WEBPACK_IMPORTED_MODULE_0__["default"].silent) {
      console.warn(`[Vue tip]: ${msg}` + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = (vm, includeFile) => {
    if (vm.$root === vm) {
      return '<Root>';
    }
    const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    let name = options.name || options._componentTag;
    const file = options.__file;
    if (!name && file) {
      const match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
  };

  const repeat = (str, n) => {
    let res = '';
    while (n) {
      if (n % 2 === 1) res += str;
      if (n > 1) str += str;
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = vm => {
    if (vm._isVue && vm.$parent) {
      const tree = [];
      let currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          const last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : repeat(' ', 5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
    } else {
      return `\n\n(found in ${formatComponentName(vm)})`;
    }
  };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldObserve", function() { return shouldObserve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleObserving", function() { return toggleObserving; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineReactive", function() { return defineReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);







const arrayKeys = Object.getOwnPropertyNames(_array__WEBPACK_IMPORTED_MODULE_2__["arrayMethods"]);

let shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}

class Observer {

  constructor(value) {
    this.value = value;
    this.dep = new _dep__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.vmCount = 0;
    Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["def"])(value, '__ob__', this);
    if (Array.isArray(value)) {
      const augment = _util_index__WEBPACK_IMPORTED_MODULE_3__["hasProto"] ? protoAugment : copyAugment;
      augment(value, _array__WEBPACK_IMPORTED_MODULE_2__["arrayMethods"], arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }

  observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}

function protoAugment(target, src, keys) {
  target.__proto__ = src;
}

function copyAugment(target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["def"])(target, key, src[key]);
  }
}

function observe(value, asRootData) {
  if (!Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value) || value instanceof _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    return;
  }
  let ob;
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isServerRendering"])() && (Array.isArray(value) || Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

function defineReactive(obj, key, val, customSetter, shallow) {
  const dep = new _dep__WEBPACK_IMPORTED_MODULE_0__["default"]();

  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  const getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  const setter = property && property.set;

  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (_dep__WEBPACK_IMPORTED_MODULE_0__["default"].target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }

      if ( true && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

function set(target, key, val) {
  if ( true && (Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isUndef"])(target) || Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(target))) {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Cannot set reactive property on undefined, null, or primitive value: ${target}`);
  }
  if (Array.isArray(target) && Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isValidArrayIndex"])(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  const ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
     true && Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["warn"])('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

function del(target, key) {
  if ( true && (Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isUndef"])(target) || Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(target))) {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Cannot delete reactive property on undefined, null, or primitive value: ${target}`);
  }
  if (Array.isArray(target) && Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["isValidArrayIndex"])(key)) {
    target.splice(key, 1);
    return;
  }
  const ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
     true && Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["warn"])('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

function dependArray(value) {
  for (let e, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushTarget", function() { return pushTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popTarget", function() { return popTarget; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);



let uid = 0;

class Dep {

  constructor() {
    this.id = uid++;
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["remove"])(this.subs, sub);
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

Dep.target = null;
const targetStack = [];

function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyVNode", function() { return createEmptyVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneVNode", function() { return cloneVNode; });


class VNode {

  constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  }

  get child() {
    return this.componentInstance;
  }
}

const createEmptyVNode = (text = '') => {
  const node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

function cloneVNode(vnode) {
  const cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMethods", function() { return arrayMethods; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

methodsToPatch.forEach(function (method) {
  const original = arrayProto[method];
  Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["def"])(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);

    ob.dep.notify();
    return result;
  });
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateProp", function() { return validateProp; });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);






function validateProp(key, propOptions, propsData, vm) {
  const prop = propOptions[key];
  const absent = !Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(propsData, key);
  let value = propsData[key];

  const booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(prop, 'default')) {
      value = false;
    } else if (value === '' || value === Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hyphenate"])(key)) {
      const stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }

  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);

    const prevShouldObserve = _observer_index__WEBPACK_IMPORTED_MODULE_1__["shouldObserve"];
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_1__["toggleObserving"])(true);
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_1__["observe"])(value);
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_1__["toggleObserving"])(prevShouldObserve);
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

function getPropDefaultValue(vm, prop, key) {
  if (!Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(prop, 'default')) {
    return undefined;
  }
  const def = prop.default;

  if ( true && Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(def)) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_0__["warn"])('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }

  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }

  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_0__["warn"])('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  let type = prop.type;
  let valid = !type || type === true;
  const expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (let i = 0; i < type.length && !valid; i++) {
      const assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(shared_util__WEBPACK_IMPORTED_MODULE_2__["capitalize"]).join(', ')}` + `, got ${Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["toRawType"])(value)}.`, vm);
    return;
  }
  const validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      Object(_debug__WEBPACK_IMPORTED_MODULE_0__["warn"])('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

const simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}

function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  for (let i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }
  return -1;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);






function handleError(err, vm, info) {
  if (vm) {
    let cur = vm;
    while (cur = cur.$parent) {
      const hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (let i = 0; i < hooks.length; i++) {
          try {
            const capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) return;
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError(err, vm, info) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].errorHandler) {
    try {
      return _config__WEBPACK_IMPORTED_MODULE_0__["default"].errorHandler.call(null, err, vm, info);
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    Object(_debug__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Error in ${info}: "${err.toString()}"`, vm);
  }

  if ((_env__WEBPACK_IMPORTED_MODULE_2__["inBrowser"] || _env__WEBPACK_IMPORTED_MODULE_2__["inWeex"]) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMacroTask", function() { return withMacroTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);






const callbacks = [];
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

let microTimerFunc;
let macroTimerFunc;
let useMacroTask = false;

if (typeof setImmediate !== 'undefined' && Object(_env__WEBPACK_IMPORTED_MODULE_2__["isNative"])(setImmediate)) {
  macroTimerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (Object(_env__WEBPACK_IMPORTED_MODULE_2__["isNative"])(MessageChannel) || MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = () => {
    port.postMessage(1);
  };
} else {
  macroTimerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

if (typeof Promise !== 'undefined' && Object(_env__WEBPACK_IMPORTED_MODULE_2__["isNative"])(Promise)) {
  const p = Promise.resolve();
  microTimerFunc = () => {
    p.then(flushCallbacks);

    if (_env__WEBPACK_IMPORTED_MODULE_2__["isIOS"]) setTimeout(shared_util__WEBPACK_IMPORTED_MODULE_0__["noop"]);
  };
} else {
  microTimerFunc = macroTimerFunc;
}

function withMacroTask(fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    const res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  });
}

function nextTick(cb, ctx) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        Object(_error__WEBPACK_IMPORTED_MODULE_1__["handleError"])(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }

  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve;
    });
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineComputed", function() { return defineComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateMixin", function() { return stateMixin; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _observer_dep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);











const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"],
  set: _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"]
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);
  if (opts.methods) initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_4__["observe"])(vm._data = {}, true);
  }
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== _util_index__WEBPACK_IMPORTED_MODULE_5__["nativeWatch"]) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  const propsData = vm.$options.propsData || {};
  const props = vm._props = {};

  const keys = vm.$options._propKeys = [];
  const isRoot = !vm.$parent;

  if (!isRoot) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_4__["toggleObserving"])(false);
  }
  for (const key in propsOptions) {
    keys.push(key);
    const value = Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["validateProp"])(key, propsOptions, propsData, vm);

    if (true) {
      const hyphenatedKey = Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["hyphenate"])(key);
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isReservedAttribute"])(hyphenatedKey) || _config__WEBPACK_IMPORTED_MODULE_0__["default"].isReservedAttr(hyphenatedKey)) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`, vm);
      }
      Object(_observer_index__WEBPACK_IMPORTED_MODULE_4__["defineReactive"])(props, key, value, () => {
        if (vm.$parent && !_lifecycle__WEBPACK_IMPORTED_MODULE_3__["isUpdatingChildComponent"]) {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`Avoid mutating a prop directly since the value will be ` + `overwritten whenever the parent component re-renders. ` + `Instead, use a data or computed property based on the prop's ` + `value. Prop being mutated: "${key}"`, vm);
        }
      });
    } else {}

    if (!(key in vm)) {
      proxy(vm, `_props`, key);
    }
  }
  Object(_observer_index__WEBPACK_IMPORTED_MODULE_4__["toggleObserving"])(true);
}

function initData(vm) {
  let data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(data)) {
    data = {};
     true && Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }

  const keys = Object.keys(data);
  const props = vm.$options.props;
  const methods = vm.$options.methods;
  let i = keys.length;
  while (i--) {
    const key = keys[i];
    if (true) {
      if (methods && Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(methods, key)) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`Method "${key}" has already been defined as a data property.`, vm);
      }
    }
    if (props && Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(props, key)) {
       true && Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`The data property "${key}" is already declared as a prop. ` + `Use prop default value instead.`, vm);
    } else if (!Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isReserved"])(key)) {
      proxy(vm, `_data`, key);
    }
  }

  Object(_observer_index__WEBPACK_IMPORTED_MODULE_4__["observe"])(data, true);
}

function getData(data, vm) {
  Object(_observer_dep__WEBPACK_IMPORTED_MODULE_2__["pushTarget"])();
  try {
    return data.call(vm, vm);
  } catch (e) {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["handleError"])(e, vm, `data()`);
    return {};
  } finally {
    Object(_observer_dep__WEBPACK_IMPORTED_MODULE_2__["popTarget"])();
  }
}

const computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  const watchers = vm._computedWatchers = Object.create(null);

  const isSSR = Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isServerRendering"])();

  for (const key in computed) {
    const userDef = computed[key];
    const getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`Getter is missing for computed property "${key}".`, vm);
    }

    if (!isSSR) {
      watchers[key] = new _observer_watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, getter || _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"], _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"], computedWatcherOptions);
    }

    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`The computed property "${key}" is already defined in data.`, vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`The computed property "${key}" is already defined as a prop.`, vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  const shouldCache = !Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isServerRendering"])();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
    sharedPropertyDefinition.set = _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"];
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"];
    sharedPropertyDefinition.set = userDef.set ? userDef.set : _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"];
  }
  if ( true && sharedPropertyDefinition.set === _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"]) {
    sharedPropertyDefinition.set = function () {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`Computed property "${key}" was assigned to but it has no setter.`, this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    const watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (_observer_dep__WEBPACK_IMPORTED_MODULE_2__["default"].target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  const props = vm.$options.props;
  for (const key in methods) {
    if (true) {
      if (methods[key] == null) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`Method "${key}" has an undefined value in the component definition. ` + `Did you reference the function correctly?`, vm);
      }
      if (props && Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(props, key)) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`Method "${key}" has already been defined as a prop.`, vm);
      }
      if (key in vm && Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isReserved"])(key)) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`Method "${key}" conflicts with an existing Vue instance method. ` + `Avoid defining component methods that start with _ or $.`);
      }
    }
    vm[key] = methods[key] == null ? _util_index__WEBPACK_IMPORTED_MODULE_5__["noop"] : Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["bind"])(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (const key in watch) {
    const handler = watch[key];
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  const dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  const propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (true) {
    dataDef.set = function (newData) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["warn"])(`$props is readonly.`, this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = _observer_index__WEBPACK_IMPORTED_MODULE_4__["set"];
  Vue.prototype.$delete = _observer_index__WEBPACK_IMPORTED_MODULE_4__["del"];

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    const vm = this;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    const watcher = new _observer_watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);








let uid = 0;

class Watcher {

  constructor(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);

    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid;
    this.active = true;
    this.dirty = this.lazy;
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _util_index__WEBPACK_IMPORTED_MODULE_0__["_Set"]();
    this.newDepIds = new _util_index__WEBPACK_IMPORTED_MODULE_0__["_Set"]();
    this.expression =  true ? expOrFn.toString() : undefined;

    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["parsePath"])(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
         true && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Failed watching path: "${expOrFn}" ` + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  }

  get() {
    Object(_dep__WEBPACK_IMPORTED_MODULE_3__["pushTarget"])(this);
    let value;
    const vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["handleError"])(e, vm, `getter for watcher "${this.expression}"`);
      } else {
        throw e;
      }
    } finally {
      if (this.deep) {
        Object(_traverse__WEBPACK_IMPORTED_MODULE_1__["traverse"])(value);
      }
      Object(_dep__WEBPACK_IMPORTED_MODULE_3__["popTarget"])();
      this.cleanupDeps();
    }
    return value;
  }

  addDep(dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  }

  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    let tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  }

  update() {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__["queueWatcher"])(this);
    }
  }

  run() {
    if (this.active) {
      const value = this.get();
      if (value !== this.value || Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) || this.deep) {
        const oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["handleError"])(e, this.vm, `callback for watcher "${this.expression}"`);
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  }

  evaluate() {
    this.value = this.get();
    this.dirty = false;
  }

  depend() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  }

  teardown() {
    if (this.active) {
      if (!this.vm._isBeingDestroyed) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["remove"])(this.vm._watchers, this);
      }
      let i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);






const seenObjects = new _util_index__WEBPACK_IMPORTED_MODULE_0__["_Set"]();

function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  let i, keys;
  const isA = Array.isArray(val);
  if (!isA && !Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(val) || Object.isFrozen(val) || val instanceof _vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    return;
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) _traverse(val[i], seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) _traverse(val[keys[i]], seen);
  }
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_UPDATE_COUNT", function() { return MAX_UPDATE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueActivatedComponent", function() { return queueActivatedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueWatcher", function() { return queueWatcher; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);






const MAX_UPDATE_COUNT = 100;

const queue = [];
const activatedChildren = [];
let has = {};
let circular = {};
let waiting = false;
let flushing = false;
let index = 0;

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

function flushSchedulerQueue() {
  flushing = true;
  let watcher, id;

  queue.sort((a, b) => a.id - b.id);

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_2__["warn"])('You may have an infinite update loop ' + (watcher.user ? `in watcher with expression "${watcher.expression}"` : `in a component render function.`), watcher.vm);
        break;
      }
    }
  }

  const activatedQueue = activatedChildren.slice();
  const updatedQueue = queue.slice();

  resetSchedulerState();

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  if (_util_index__WEBPACK_IMPORTED_MODULE_2__["devtools"] && _config__WEBPACK_IMPORTED_MODULE_0__["default"].devtools) {
    _util_index__WEBPACK_IMPORTED_MODULE_2__["devtools"].emit('flush');
  }
}

function callUpdatedHooks(queue) {
  let i = queue.length;
  while (i--) {
    const watcher = queue[i];
    const vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__["callHook"])(vm, 'updated');
    }
  }
}

function queueActivatedComponent(vm) {
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (let i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_1__["activateChildComponent"])(queue[i], true);
  }
}

function queueWatcher(watcher) {
  const id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      let i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }

    if (!waiting) {
      waiting = true;
      Object(_util_index__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(flushSchedulerQueue);
    }
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeInstance", function() { return activeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUpdatingChildComponent", function() { return isUpdatingChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLifecycle", function() { return initLifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycleMixin", function() { return lifecycleMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountComponent", function() { return mountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChildComponent", function() { return updateChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateChildComponent", function() { return activateChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateChildComponent", function() { return deactivateChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callHook", function() { return callHook; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _observer_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _util_perf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _render_helpers_resolve_slots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _observer_dep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);













let activeInstance = null;
let isUpdatingChildComponent = false;

function initLifecycle(vm) {
  const options = vm.$options;

  let parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    const vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    const prevEl = vm.$el;
    const prevVnode = vm._vnode;
    const prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;

    if (!prevVnode) {
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false, vm.$options._parentElm, vm.$options._refElm);

      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;

    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }

    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
  };

  Vue.prototype.$forceUpdate = function () {
    const vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    const vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;

    const parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["remove"])(parent.$children, vm);
    }

    if (vm._watcher) {
      vm._watcher.teardown();
    }
    let i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }

    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }

    vm._isDestroyed = true;

    vm.__patch__(vm._vnode, null);

    callHook(vm, 'destroyed');

    vm.$off();

    if (vm.$el) {
      vm.$el.__vue__ = null;
    }

    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = _vdom_vnode__WEBPACK_IMPORTED_MODULE_3__["createEmptyVNode"];
    if (true) {
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["warn"])('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["warn"])('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  let updateComponent;

  if ( true && _config__WEBPACK_IMPORTED_MODULE_0__["default"].performance && _util_perf__WEBPACK_IMPORTED_MODULE_2__["mark"]) {
    updateComponent = () => {
      const name = vm._name;
      const id = vm._uid;
      const startTag = `vue-perf-start:${id}`;
      const endTag = `vue-perf-end:${id}`;

      Object(_util_perf__WEBPACK_IMPORTED_MODULE_2__["mark"])(startTag);
      const vnode = vm._render();
      Object(_util_perf__WEBPACK_IMPORTED_MODULE_2__["mark"])(endTag);
      Object(_util_perf__WEBPACK_IMPORTED_MODULE_2__["measure"])(`vue ${name} render`, startTag, endTag);

      Object(_util_perf__WEBPACK_IMPORTED_MODULE_2__["mark"])(startTag);
      vm._update(vnode, hydrating);
      Object(_util_perf__WEBPACK_IMPORTED_MODULE_2__["mark"])(endTag);
      Object(_util_perf__WEBPACK_IMPORTED_MODULE_2__["measure"])(`vue ${name} patch`, startTag, endTag);
    };
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating);
    };
  }

  new _observer_watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, updateComponent, _util_index__WEBPACK_IMPORTED_MODULE_8__["noop"], null, true);
  hydrating = false;

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  const hasChildren = !!(renderChildren || vm.$options._renderChildren || parentVnode.data.scopedSlots || vm.$scopedSlots !== _util_index__WEBPACK_IMPORTED_MODULE_8__["emptyObject"]);

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode;

  if (vm._vnode) {
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  vm.$attrs = parentVnode.data.attrs || _util_index__WEBPACK_IMPORTED_MODULE_8__["emptyObject"];
  vm.$listeners = listeners || _util_index__WEBPACK_IMPORTED_MODULE_8__["emptyObject"];

  if (propsData && vm.$options.props) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_6__["toggleObserving"])(false);
    const props = vm._props;
    const propKeys = vm.$options._propKeys || [];
    for (let i = 0; i < propKeys.length; i++) {
      const key = propKeys[i];
      const propOptions = vm.$options.props;
      props[key] = Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["validateProp"])(key, propOptions, propsData, vm);
    }
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_6__["toggleObserving"])(true);

    vm.$options.propsData = propsData;
  }

  listeners = listeners || _util_index__WEBPACK_IMPORTED_MODULE_8__["emptyObject"];
  const oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  Object(_events__WEBPACK_IMPORTED_MODULE_4__["updateComponentListeners"])(vm, listeners, oldListeners);

  if (hasChildren) {
    vm.$slots = Object(_render_helpers_resolve_slots__WEBPACK_IMPORTED_MODULE_5__["resolveSlots"])(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) return true;
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (let i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (let i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  Object(_observer_dep__WEBPACK_IMPORTED_MODULE_7__["pushTarget"])();
  const handlers = vm.$options[hook];
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["handleError"])(e, vm, `${hook} hook`);
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  Object(_observer_dep__WEBPACK_IMPORTED_MODULE_7__["popTarget"])();
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


let mark;
let measure;

if (true) {
  const perf = _env__WEBPACK_IMPORTED_MODULE_0__["inBrowser"] && window.performance;

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = tag => perf.mark(tag);
    measure = (name, startTag, endTag) => {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEvents", function() { return initEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateComponentListeners", function() { return updateComponentListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsMixin", function() { return eventsMixin; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _vdom_helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);





function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;

  const listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

let target;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  Object(_vdom_helpers_index__WEBPACK_IMPORTED_MODULE_1__["updateListeners"])(listeners, oldListeners || {}, add, remove, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  const hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    const vm = this;
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    const vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    const vm = this;

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }

    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        this.$off(event[i], fn);
      }
      return vm;
    }

    const cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    if (fn) {
      let cb;
      let i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    const vm = this;
    if (true) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["tip"])(`Event "${lowerCaseEvent}" is emitted in component ` + `${Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["formatComponentName"])(vm)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["hyphenate"])(event)}" instead of "${event}".`);
      }
    }
    let cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["toArray"])(cbs) : cbs;
      const args = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["toArray"])(arguments, 1);
      for (let i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["handleError"])(e, vm, `event handler for "${event}"`);
        }
      }
    }
    return vm;
  };
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _merge_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeVNodeHook", function() { return _merge_hook__WEBPACK_IMPORTED_MODULE_0__["mergeVNodeHook"]; });

/* harmony import */ var _extract_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractPropsFromVNodeData", function() { return _extract_props__WEBPACK_IMPORTED_MODULE_1__["extractPropsFromVNodeData"]; });

/* harmony import */ var _update_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFnInvoker", function() { return _update_listeners__WEBPACK_IMPORTED_MODULE_2__["createFnInvoker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateListeners", function() { return _update_listeners__WEBPACK_IMPORTED_MODULE_2__["updateListeners"]; });

/* harmony import */ var _normalize_children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simpleNormalizeChildren", function() { return _normalize_children__WEBPACK_IMPORTED_MODULE_3__["simpleNormalizeChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeChildren", function() { return _normalize_children__WEBPACK_IMPORTED_MODULE_3__["normalizeChildren"]; });

/* harmony import */ var _resolve_async_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncPlaceholder", function() { return _resolve_async_component__WEBPACK_IMPORTED_MODULE_4__["createAsyncPlaceholder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveAsyncComponent", function() { return _resolve_async_component__WEBPACK_IMPORTED_MODULE_4__["resolveAsyncComponent"]; });

/* harmony import */ var _get_first_component_child__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstComponentChild", function() { return _get_first_component_child__WEBPACK_IMPORTED_MODULE_5__["getFirstComponentChild"]; });

/* harmony import */ var _is_async_placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAsyncPlaceholder", function() { return _is_async_placeholder__WEBPACK_IMPORTED_MODULE_6__["isAsyncPlaceholder"]; });











/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeVNodeHook", function() { return mergeVNodeHook; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _update_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);






function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof _vnode__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    def = def.data.hook || (def.data.hook = {});
  }
  let invoker;
  const oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);

    Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["remove"])(invoker.fns, wrappedHook);
  }

  if (Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["isUndef"])(oldHook)) {
    invoker = Object(_update_listeners__WEBPACK_IMPORTED_MODULE_1__["createFnInvoker"])([wrappedHook]);
  } else {
    if (Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["isDef"])(oldHook.fns) && Object(shared_util__WEBPACK_IMPORTED_MODULE_2__["isTrue"])(oldHook.merged)) {
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      invoker = Object(_update_listeners__WEBPACK_IMPORTED_MODULE_1__["createFnInvoker"])([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFnInvoker", function() { return createFnInvoker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateListeners", function() { return updateListeners; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);





const normalizeEvent = Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["cached"])(name => {
  const passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  const once = name.charAt(0) === '~';
  name = once ? name.slice(1) : name;
  const capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name,
    once,
    capture,
    passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    const fns = invoker.fns;
    if (Array.isArray(fns)) {
      const cloned = fns.slice();
      for (let i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments);
      }
    } else {
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove, vm) {
  let name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (false) {}
    if (Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(cur)) {
       true && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Invalid handler for event "${event.name}": got ` + String(cur), vm);
    } else if (Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(old)) {
      if (Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(on[name])) {
      event = normalizeEvent(name);
      remove(event.name, oldOn[name], event.capture);
    }
  }
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractPropsFromVNodeData", function() { return extractPropsFromVNodeData; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




function extractPropsFromVNodeData(data, Ctor, tag) {
  const propOptions = Ctor.options.props;
  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isUndef"])(propOptions)) {
    return;
  }
  const res = {};
  const { attrs, props } = data;
  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(attrs) || Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(props)) {
    for (const key in propOptions) {
      const altKey = Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hyphenate"])(key);
      if (true) {
        const keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(attrs, keyInLowerCase)) {
          Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["tip"])(`Prop "${keyInLowerCase}" is passed to component ` + `${Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["formatComponentName"])(tag || Ctor)}, but the declared prop name is` + ` "${key}". ` + `Note that HTML attributes are case-insensitive and camelCased ` + `props need to use their kebab-case equivalents when using in-DOM ` + `templates. You should probably use "${altKey}" instead of "${key}".`);
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(hash)) {
    if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleNormalizeChildren", function() { return simpleNormalizeChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeChildren", function() { return normalizeChildren; });
/* harmony import */ var core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);





function simpleNormalizeChildren(children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

function normalizeChildren(children) {
  return Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(children) ? [Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(node) && Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(node.text) && Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isFalse"])(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  const res = [];
  let i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(c) || typeof c === 'boolean') continue;
    lastIndex = res.length - 1;
    last = res[lastIndex];

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, `${nestedIndex || ''}_${i}`);

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(c)) {
      if (isTextNode(last)) {
        res[lastIndex] = Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(last.text + c);
      } else if (c !== '') {
        res.push(Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        res[lastIndex] = Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(last.text + c.text);
      } else {
        if (Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isTrue"])(children._isVList) && Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(c.tag) && Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isUndef"])(c.key) && Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["isDef"])(nestedIndex)) {
          c.key = `__vlist${nestedIndex}_${i}__`;
        }
        res.push(c);
      }
    }
  }
  return res;
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncPlaceholder", function() { return createAsyncPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveAsyncComponent", function() { return resolveAsyncComponent; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);






function ensureCtor(comp, base) {
  if (comp.__esModule || core_util_index__WEBPACK_IMPORTED_MODULE_0__["hasSymbol"] && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }
  return Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  const node = Object(core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["createEmptyVNode"])();
  node.asyncFactory = factory;
  node.asyncMeta = { data, context, children, tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isTrue"])(factory.error) && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(factory.errorComp)) {
    return factory.errorComp;
  }

  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(factory.resolved)) {
    return factory.resolved;
  }

  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isTrue"])(factory.loading) && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(factory.contexts)) {
    factory.contexts.push(context);
  } else {
    const contexts = factory.contexts = [context];
    let sync = true;

    const forceRender = () => {
      for (let i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    const resolve = Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["once"])(res => {
      factory.resolved = ensureCtor(res, baseCtor);

      if (!sync) {
        forceRender();
      }
    });

    const reject = Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["once"])(reason => {
       true && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Failed to resolve async component: ${String(factory)}` + (reason ? `\nReason: ${reason}` : ''));
      if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    const res = factory(resolve, reject);

    if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(res)) {
      if (typeof res.then === 'function') {
        if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isUndef"])(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(() => {
              if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isUndef"])(factory.resolved) && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isUndef"])(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(res.timeout)) {
          setTimeout(() => {
            if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isUndef"])(factory.resolved)) {
              reject( true ? `timeout (${res.timeout}ms)` : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstComponentChild", function() { return getFirstComponentChild; });
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _is_async_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);





function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["isDef"])(c) && (Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["isDef"])(c.componentOptions) || Object(_is_async_placeholder__WEBPACK_IMPORTED_MODULE_1__["isAsyncPlaceholder"])(c))) {
        return c;
      }
    }
  }
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncPlaceholder", function() { return isAsyncPlaceholder; });


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSlots", function() { return resolveSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveScopedSlots", function() { return resolveScopedSlots; });

function resolveSlots(children, context) {
  const slots = {};
  if (!children) {
    return slots;
  }
  for (let i = 0, l = children.length; i < l; i++) {
    const child = children[i];
    const data = child.data;

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }

    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      const name = data.slot;
      const slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }

  for (const name in slots) {
    if (slots[name].every(isWhitespace)) {
      delete slots[name];
    }
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}

function resolveScopedSlots(fns, res) {
  res = res || {};
  for (let i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRender", function() { return initRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMixin", function() { return renderMixin; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _vdom_create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _render_helpers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _render_helpers_resolve_slots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _vdom_vnode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);











function initRender(vm) {
  vm._vnode = null;
  vm._staticTrees = null;
  const options = vm.$options;
  const parentVnode = vm.$vnode = options._parentVnode;
  const renderContext = parentVnode && parentVnode.context;
  vm.$slots = Object(_render_helpers_resolve_slots__WEBPACK_IMPORTED_MODULE_3__["resolveSlots"])(options._renderChildren, renderContext);
  vm.$scopedSlots = _util_index__WEBPACK_IMPORTED_MODULE_0__["emptyObject"];

  vm._c = (a, b, c, d) => Object(_vdom_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(vm, a, b, c, d, false);

  vm.$createElement = (a, b, c, d) => Object(_vdom_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(vm, a, b, c, d, true);

  const parentData = parentVnode && parentVnode.data;

  if (true) {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["defineReactive"])(vm, '$attrs', parentData && parentData.attrs || _util_index__WEBPACK_IMPORTED_MODULE_0__["emptyObject"], () => {
      !_lifecycle__WEBPACK_IMPORTED_MODULE_5__["isUpdatingChildComponent"] && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`$attrs is readonly.`, vm);
    }, true);
    Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["defineReactive"])(vm, '$listeners', options._parentListeners || _util_index__WEBPACK_IMPORTED_MODULE_0__["emptyObject"], () => {
      !_lifecycle__WEBPACK_IMPORTED_MODULE_5__["isUpdatingChildComponent"] && Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`$listeners is readonly.`, vm);
    }, true);
  } else {}
}

function renderMixin(Vue) {
  Object(_render_helpers_index__WEBPACK_IMPORTED_MODULE_2__["installRenderHelpers"])(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(fn, this);
  };

  Vue.prototype._render = function () {
    const vm = this;
    const { render, _parentVnode } = vm.$options;

    if (true) {
      for (const key in vm.$slots) {
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || _util_index__WEBPACK_IMPORTED_MODULE_0__["emptyObject"];
    }

    vm.$vnode = _parentVnode;

    let vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["handleError"])(e, vm, `render`);

      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["handleError"])(e, vm, `renderError`);
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {}
    }

    if (!(vnode instanceof _vdom_vnode__WEBPACK_IMPORTED_MODULE_4__["default"])) {
      if ( true && Array.isArray(vnode)) {
        Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = Object(_vdom_vnode__WEBPACK_IMPORTED_MODULE_4__["createEmptyVNode"])();
    }

    vnode.parent = _parentVnode;
    return vnode;
  };
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createElement", function() { return _createElement; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _observer_traverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);











const SIMPLE_NORMALIZE = 1;
const ALWAYS_NORMALIZE = 2;

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isPrimitive"])(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isTrue"])(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data.__ob__)) {
     true && Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["warn"])(`Avoid using observed data object as vnode data: ${JSON.stringify(data)}\n` + 'Always create fresh vnode data objects in each render!', context);
    return Object(_vnode__WEBPACK_IMPORTED_MODULE_1__["createEmptyVNode"])();
  }

  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    return Object(_vnode__WEBPACK_IMPORTED_MODULE_1__["createEmptyVNode"])();
  }

  if ( true && Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data.key) && !Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isPrimitive"])(data.key)) {
    if (true) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["warn"])('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  }

  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_5__["normalizeChildren"])(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_5__["simpleNormalizeChildren"])(children);
  }
  let vnode, ns;
  if (typeof tag === 'string') {
    let Ctor;
    ns = context.$vnode && context.$vnode.ns || _config__WEBPACK_IMPORTED_MODULE_0__["default"].getTagNamespace(tag);
    if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].isReservedTag(tag)) {
      vnode = new _vnode__WEBPACK_IMPORTED_MODULE_1__["default"](_config__WEBPACK_IMPORTED_MODULE_0__["default"].parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(Ctor = Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["resolveAsset"])(context.$options, 'components', tag))) {
      vnode = Object(_create_component__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(Ctor, data, context, children, tag);
    } else {
      vnode = new _vnode__WEBPACK_IMPORTED_MODULE_1__["default"](tag, data, children, undefined, undefined, context);
    }
  } else {
    vnode = Object(_create_component__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode;
  } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(vnode)) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(ns)) applyNS(vnode, ns);
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data)) registerDeepBindings(data);
    return vnode;
  } else {
    return Object(_vnode__WEBPACK_IMPORTED_MODULE_1__["createEmptyVNode"])();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    ns = undefined;
    force = true;
  }
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(vnode.children)) {
    for (let i = 0, l = vnode.children.length; i < l; i++) {
      const child = vnode.children[i];
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(child.tag) && (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isUndef"])(child.ns) || Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isTrue"])(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
}

function registerDeepBindings(data) {
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isObject"])(data.style)) {
    Object(_observer_traverse__WEBPACK_IMPORTED_MODULE_3__["traverse"])(data.style);
  }
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isObject"])(data.class)) {
    Object(_observer_traverse__WEBPACK_IMPORTED_MODULE_3__["traverse"])(data.class);
  }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentInstanceForVnode", function() { return createComponentInstanceForVnode; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var core_instance_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var core_observer_scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _create_functional_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var weex_runtime_recycle_list_render_component_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);















const componentVNodeHooks = {
  init(vnode, hydrating, parentElm, refElm) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      const mountedNode = vnode;
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      const child = vnode.componentInstance = createComponentInstanceForVnode(vnode, _instance_lifecycle__WEBPACK_IMPORTED_MODULE_6__["activeInstance"], parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch(oldVnode, vnode) {
    const options = vnode.componentOptions;
    const child = vnode.componentInstance = oldVnode.componentInstance;
    Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_6__["updateChildComponent"])(child, options.propsData, options.listeners, vnode, options.children);
  },

  insert(vnode) {
    const { context, componentInstance } = vnode;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_6__["callHook"])(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        Object(core_observer_scheduler__WEBPACK_IMPORTED_MODULE_2__["queueActivatedComponent"])(componentInstance);
      } else {
        Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_6__["activateChildComponent"])(componentInstance, true);
      }
    }
  },

  destroy(vnode) {
    const { componentInstance } = vnode;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        Object(_instance_lifecycle__WEBPACK_IMPORTED_MODULE_6__["deactivateChildComponent"])(componentInstance, true);
      }
    }
  }
};

const hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isUndef"])(Ctor)) {
    return;
  }

  const baseCtor = context.$options._base;

  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isObject"])(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (true) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["warn"])(`Invalid Component definition: ${String(Ctor)}`, context);
    }
    return;
  }

  let asyncFactory;
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isUndef"])(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_5__["resolveAsyncComponent"])(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      return Object(_helpers_index__WEBPACK_IMPORTED_MODULE_5__["createAsyncPlaceholder"])(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  Object(core_instance_init__WEBPACK_IMPORTED_MODULE_1__["resolveConstructorOptions"])(Ctor);

  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(data.model)) {
    transformModel(Ctor.options, data);
  }

  const propsData = Object(_helpers_index__WEBPACK_IMPORTED_MODULE_5__["extractPropsFromVNodeData"])(data, Ctor, tag);

  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isTrue"])(Ctor.options.functional)) {
    return Object(_create_functional_component__WEBPACK_IMPORTED_MODULE_3__["createFunctionalComponent"])(Ctor, propsData, data, context, children);
  }

  const listeners = data.on;

  data.on = data.nativeOn;

  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isTrue"])(Ctor.options.abstract)) {
    const slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  installComponentHooks(data);

  const name = Ctor.options.name || tag;
  const vnode = new _vnode__WEBPACK_IMPORTED_MODULE_0__["default"](`vue-component-${Ctor.cid}${name ? `-${name}` : ''}`, data, undefined, undefined, undefined, context, { Ctor, propsData, listeners, tag, children }, asyncFactory);

  if (false) {}

  return vnode;
}

function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
  const options = {
    _isComponent: true,
    parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };

  const inlineTemplate = vnode.data.inlineTemplate;
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  const hooks = data.hook || (data.hook = {});
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

function transformModel(options, data) {
  const prop = options.model && options.model.prop || 'value';
  const event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  const on = data.on || (data.on = {});
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["isDef"])(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalRenderContext", function() { return FunctionalRenderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFunctionalComponent", function() { return createFunctionalComponent; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _instance_inject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _vdom_helpers_normalize_children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _instance_render_helpers_resolve_slots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _instance_render_helpers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);











function FunctionalRenderContext(data, props, children, parent, Ctor) {
  const options = Ctor.options;

  let contextVm;
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_6__["hasOwn"])(parent, '_uid')) {
    contextVm = Object.create(parent);

    contextVm._original = parent;
  } else {
    contextVm = parent;

    parent = parent._original;
  }
  const isCompiled = Object(_util_index__WEBPACK_IMPORTED_MODULE_6__["isTrue"])(options._compiled);
  const needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || _util_index__WEBPACK_IMPORTED_MODULE_6__["emptyObject"];
  this.injections = Object(_instance_inject__WEBPACK_IMPORTED_MODULE_2__["resolveInject"])(options.inject, parent);
  this.slots = () => Object(_instance_render_helpers_resolve_slots__WEBPACK_IMPORTED_MODULE_4__["resolveSlots"])(children, parent);

  if (isCompiled) {
    this.$options = options;

    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || _util_index__WEBPACK_IMPORTED_MODULE_6__["emptyObject"];
  }

  if (options._scopeId) {
    this._c = (a, b, c, d) => {
      const vnode = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = (a, b, c, d) => Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(contextVm, a, b, c, d, needNormalization);
  }
}

Object(_instance_render_helpers_index__WEBPACK_IMPORTED_MODULE_5__["installRenderHelpers"])(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  const options = Ctor.options;
  const props = {};
  const propOptions = options.props;
  if (Object(_util_index__WEBPACK_IMPORTED_MODULE_6__["isDef"])(propOptions)) {
    for (const key in propOptions) {
      props[key] = Object(_util_index__WEBPACK_IMPORTED_MODULE_6__["validateProp"])(key, propOptions, propsData || _util_index__WEBPACK_IMPORTED_MODULE_6__["emptyObject"]);
    }
  } else {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_6__["isDef"])(data.attrs)) mergeProps(props, data.attrs);
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_6__["isDef"])(data.props)) mergeProps(props, data.props);
  }

  const renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

  const vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof _vnode__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
  } else if (Array.isArray(vnode)) {
    const vnodes = Object(_vdom_helpers_normalize_children__WEBPACK_IMPORTED_MODULE_3__["normalizeChildren"])(vnode) || [];
    const res = new Array(vnodes.length);
    for (let i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
  const clone = Object(_vnode__WEBPACK_IMPORTED_MODULE_0__["cloneVNode"])(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone;
}

function mergeProps(to, from) {
  for (const key in from) {
    to[Object(_util_index__WEBPACK_IMPORTED_MODULE_6__["camelize"])(key)] = from[key];
  }
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProvide", function() { return initProvide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInjections", function() { return initInjections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveInject", function() { return resolveInject; });
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);






function initProvide(vm) {
  const provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  const result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_2__["toggleObserving"])(false);
    Object.keys(result).forEach(key => {
      if (true) {
        Object(_observer_index__WEBPACK_IMPORTED_MODULE_2__["defineReactive"])(vm, key, result[key], () => {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Avoid mutating an injected value directly since the changes will be ` + `overwritten whenever the provided component re-renders. ` + `injection being mutated: "${key}"`, vm);
        });
      } else {}
    });
    Object(_observer_index__WEBPACK_IMPORTED_MODULE_2__["toggleObserving"])(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    const result = Object.create(null);
    const keys = _util_index__WEBPACK_IMPORTED_MODULE_1__["hasSymbol"] ? Reflect.ownKeys(inject).filter(key => {
      return Object.getOwnPropertyDescriptor(inject, key).enumerable;
    }) : Object.keys(inject);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const provideKey = inject[key].from;
      let source = vm;
      while (source) {
        if (source._provided && Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          const provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["warn"])(`Injection "${key}" not found`, vm);
        }
      }
    }
    return result;
  }
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installRenderHelpers", function() { return installRenderHelpers; });
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _render_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _render_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _resolve_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _check_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var _bind_object_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var _render_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _bind_object_listeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48);
/* harmony import */ var _resolve_slots__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);













function installRenderHelpers(target) {
  target._o = _render_static__WEBPACK_IMPORTED_MODULE_7__["markOnce"];
  target._n = shared_util__WEBPACK_IMPORTED_MODULE_0__["toNumber"];
  target._s = shared_util__WEBPACK_IMPORTED_MODULE_0__["toString"];
  target._l = _render_list__WEBPACK_IMPORTED_MODULE_2__["renderList"];
  target._t = _render_slot__WEBPACK_IMPORTED_MODULE_3__["renderSlot"];
  target._q = shared_util__WEBPACK_IMPORTED_MODULE_0__["looseEqual"];
  target._i = shared_util__WEBPACK_IMPORTED_MODULE_0__["looseIndexOf"];
  target._m = _render_static__WEBPACK_IMPORTED_MODULE_7__["renderStatic"];
  target._f = _resolve_filter__WEBPACK_IMPORTED_MODULE_4__["resolveFilter"];
  target._k = _check_keycodes__WEBPACK_IMPORTED_MODULE_5__["checkKeyCodes"];
  target._b = _bind_object_props__WEBPACK_IMPORTED_MODULE_6__["bindObjectProps"];
  target._v = core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"];
  target._e = core_vdom_vnode__WEBPACK_IMPORTED_MODULE_1__["createEmptyVNode"];
  target._u = _resolve_slots__WEBPACK_IMPORTED_MODULE_9__["resolveScopedSlots"];
  target._g = _bind_object_listeners__WEBPACK_IMPORTED_MODULE_8__["bindObjectListeners"];
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderList", function() { return renderList; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




function renderList(val, render) {
  let ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isDef"])(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSlot", function() { return renderSlot; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




function renderSlot(name, fallback, props, bindObject) {
  const scopedSlotFn = this.$scopedSlots[name];
  let nodes;
  if (scopedSlotFn) {
    props = props || {};
    if (bindObject) {
      if ( true && !Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(bindObject)) {
        Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])('slot v-bind without argument expects an Object', this);
      }
      props = Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["extend"])(Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    const slotNodes = this.$slots[name];

    if (slotNodes) {
      if ( true && slotNodes._rendered) {
        Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Duplicate presence of slot "${name}" found in the same render tree ` + `- this will likely cause render errors.`, this);
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  const target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes);
  } else {
    return nodes;
  }
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFilter", function() { return resolveFilter; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




function resolveFilter(id) {
  return Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["resolveAsset"])(this.$options, 'filters', id, true) || core_util_index__WEBPACK_IMPORTED_MODULE_0__["identity"];
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkKeyCodes", function() { return checkKeyCodes; });
/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);





function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}

function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  const mappedKeyCode = core_config__WEBPACK_IMPORTED_MODULE_0__["default"].keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !core_config__WEBPACK_IMPORTED_MODULE_0__["default"].keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["hyphenate"])(eventKeyName) !== key;
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindObjectProps", function() { return bindObjectProps; });
/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);






function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!Object(core_util_index__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value)) {
       true && Object(core_util_index__WEBPACK_IMPORTED_MODULE_1__["warn"])('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = Object(core_util_index__WEBPACK_IMPORTED_MODULE_1__["toObject"])(value);
      }
      let hash;
      for (const key in value) {
        if (key === 'class' || key === 'style' || Object(core_util_index__WEBPACK_IMPORTED_MODULE_1__["isReservedAttribute"])(key)) {
          hash = data;
        } else {
          const type = data.attrs && data.attrs.type;
          hash = asProp || core_config__WEBPACK_IMPORTED_MODULE_0__["default"].mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            const on = data.on || (data.on = {});
            on[`update:${key}`] = function ($event) {
              value[key] = $event;
            };
          }
        }
      }
    }
  }
  return data;
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStatic", function() { return renderStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markOnce", function() { return markOnce; });

function renderStatic(index, isInFor) {
  const cached = this._staticTrees || (this._staticTrees = []);
  let tree = cached[index];

  if (tree && !isInFor) {
    return tree;
  }

  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, `__static__${index}`, false);
  return tree;
}

function markOnce(tree, index, key) {
  markStatic(tree, `__once__${index}${key ? `_${key}` : ``}`, true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], `${key}_${i}`, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindObjectListeners", function() { return bindObjectListeners; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




function bindObjectListeners(data, value) {
  if (value) {
    if (!Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(value)) {
       true && Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])('v-on without argument expects an Object value', this);
    } else {
      const on = data.on = data.on ? Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, data.on) : {};
      for (const key in value) {
        const existing = on[key];
        const ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRecyclableComponent", function() { return isRecyclableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRecyclableComponentTemplate", function() { return renderRecyclableComponentTemplate; });
/* harmony import */ var core_util_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_util_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var weex_util_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var core_vdom_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _virtual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);








function isRecyclableComponent(vnode) {
  return vnode.data.attrs ? weex_util_index__WEBPACK_IMPORTED_MODULE_2__["RECYCLE_LIST_MARKER"] in vnode.data.attrs : false;
}

function renderRecyclableComponentTemplate(vnode) {
  delete vnode.data.attrs[weex_util_index__WEBPACK_IMPORTED_MODULE_2__["RECYCLE_LIST_MARKER"]];
  Object(_virtual_component__WEBPACK_IMPORTED_MODULE_4__["resolveVirtualComponent"])(vnode);
  const vm = Object(core_vdom_create_component__WEBPACK_IMPORTED_MODULE_3__["createComponentInstanceForVnode"])(vnode);
  const render = vm.$options['@render'];
  if (render) {
    try {
      return render.call(vm);
    } catch (err) {
      Object(core_util_error__WEBPACK_IMPORTED_MODULE_1__["handleError"])(err, vm, `@render`);
    }
  } else {
    Object(core_util_debug__WEBPACK_IMPORTED_MODULE_0__["warn"])(`@render function not defined on component used in <recycle-list>. ` + `Make sure to declare \`recyclable="true"\` on the component's template.`, vm);
  }
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECYCLE_LIST_MARKER", function() { return RECYCLE_LIST_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerComponentHook", function() { return registerComponentHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateComponentData", function() { return updateComponentData; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




const RECYCLE_LIST_MARKER = '@inRecycleList';

function registerComponentHook(componentId, type, hook, fn) {
  if (!document || !document.taskCenter) {
    Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Can't find available "document" or "taskCenter".`);
    return;
  }
  if (typeof document.taskCenter.registerHook === 'function') {
    return document.taskCenter.registerHook(componentId, type, hook, fn);
  }
  Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Failed to register component hook "${type}@${hook}#${componentId}".`);
}

function updateComponentData(componentId, newData, callback) {
  if (!document || !document.taskCenter) {
    Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Can't find available "document" or "taskCenter".`);
    return;
  }
  if (typeof document.taskCenter.updateData === 'function') {
    return document.taskCenter.updateData(componentId, newData, callback);
  }
  Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Failed to update component data (${componentId}).`);
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVirtualComponent", function() { return resolveVirtualComponent; });
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var core_observer_watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var core_instance_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var core_instance_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var core_instance_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var core_instance_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var core_instance_inject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
/* harmony import */ var core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);
/* harmony import */ var core_instance_init__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50);













let uid = 0;

function initVirtualComponent(options = {}) {
  const vm = this;
  const componentId = options.componentId;

  vm._uid = `virtual-component-${uid++}`;

  vm._isVue = true;

  if (options && options._isComponent) {
    Object(core_instance_init__WEBPACK_IMPORTED_MODULE_8__["initInternalComponent"])(vm, options);
  } else {
    vm.$options = Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(Object(core_instance_init__WEBPACK_IMPORTED_MODULE_8__["resolveConstructorOptions"])(vm.constructor), options || {}, vm);
  }

  if (true) {
    Object(core_instance_proxy__WEBPACK_IMPORTED_MODULE_2__["initProxy"])(vm);
  } else {}

  vm._self = vm;
  Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__["initLifecycle"])(vm);
  Object(core_instance_events__WEBPACK_IMPORTED_MODULE_5__["initEvents"])(vm);
  Object(core_instance_render__WEBPACK_IMPORTED_MODULE_4__["initRender"])(vm);
  Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__["callHook"])(vm, 'beforeCreate');
  Object(core_instance_inject__WEBPACK_IMPORTED_MODULE_6__["initInjections"])(vm);
  Object(core_instance_state__WEBPACK_IMPORTED_MODULE_3__["initState"])(vm);
  Object(core_instance_inject__WEBPACK_IMPORTED_MODULE_6__["initProvide"])(vm);
  Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__["callHook"])(vm, 'created');

  const data = vm.$options.data;
  const params = typeof data === 'function' ? Object(core_instance_state__WEBPACK_IMPORTED_MODULE_3__["getData"])(data, vm) : data || {};
  if (Object(core_util_index__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(params)) {
    Object(_util_index__WEBPACK_IMPORTED_MODULE_9__["updateComponentData"])(componentId, params);
  }

  Object(_util_index__WEBPACK_IMPORTED_MODULE_9__["registerComponentHook"])(componentId, 'lifecycle', 'attach', () => {
    Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__["callHook"])(vm, 'beforeMount');

    const updateComponent = () => {
      vm._update(vm._vnode, false);
    };
    new core_observer_watcher__WEBPACK_IMPORTED_MODULE_1__["default"](vm, updateComponent, core_util_index__WEBPACK_IMPORTED_MODULE_0__["noop"], null, true);

    vm._isMounted = true;
    Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__["callHook"])(vm, 'mounted');
  });

  Object(_util_index__WEBPACK_IMPORTED_MODULE_9__["registerComponentHook"])(componentId, 'lifecycle', 'detach', () => {
    vm.$destroy();
  });
}

function updateVirtualComponent(vnode) {
  const vm = this;
  const componentId = vm.$options.componentId;
  if (vm._isMounted) {
    Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__["callHook"])(vm, 'beforeUpdate');
  }
  vm._vnode = vnode;
  if (vm._isMounted && componentId) {
    const data = Object.assign({}, vm._data);
    Object(_util_index__WEBPACK_IMPORTED_MODULE_9__["updateComponentData"])(componentId, data, () => {
      Object(core_instance_lifecycle__WEBPACK_IMPORTED_MODULE_7__["callHook"])(vm, 'updated');
    });
  }
}

function resolveVirtualComponent(vnode) {
  const BaseCtor = vnode.componentOptions.Ctor;
  const VirtualComponent = BaseCtor.extend({});
  const cid = VirtualComponent.cid;
  VirtualComponent.prototype._init = initVirtualComponent;
  VirtualComponent.prototype._update = updateVirtualComponent;

  vnode.componentOptions.Ctor = BaseCtor.extend({
    beforeCreate() {
      const createVirtualComponent = (componentId, propsData) => {
        new VirtualComponent({
          componentId,
          propsData
        });
      };

      Object(_util_index__WEBPACK_IMPORTED_MODULE_9__["registerComponentHook"])(cid, 'lifecycle', 'create', createVirtualComponent);
    },
    beforeDestroy() {
      delete this._virtualComponents;
    }
  });
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGlobalAPI", function() { return initGlobalAPI; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _observer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);













function initGlobalAPI(Vue) {
  const configDef = {};
  configDef.get = () => _config__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (true) {
    configDef.set = () => {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["warn"])('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  Vue.util = {
    warn: _util_index__WEBPACK_IMPORTED_MODULE_8__["warn"],
    extend: _util_index__WEBPACK_IMPORTED_MODULE_8__["extend"],
    mergeOptions: _util_index__WEBPACK_IMPORTED_MODULE_8__["mergeOptions"],
    defineReactive: _util_index__WEBPACK_IMPORTED_MODULE_8__["defineReactive"]
  };

  Vue.set = _observer_index__WEBPACK_IMPORTED_MODULE_5__["set"];
  Vue.delete = _observer_index__WEBPACK_IMPORTED_MODULE_5__["del"];
  Vue.nextTick = _util_index__WEBPACK_IMPORTED_MODULE_8__["nextTick"];

  Vue.options = Object.create(null);
  shared_constants__WEBPACK_IMPORTED_MODULE_6__["ASSET_TYPES"].forEach(type => {
    Vue.options[type + 's'] = Object.create(null);
  });

  Vue.options._base = Vue;

  Object(_util_index__WEBPACK_IMPORTED_MODULE_8__["extend"])(Vue.options.components, _components_index__WEBPACK_IMPORTED_MODULE_7__["default"]);

  Object(_use__WEBPACK_IMPORTED_MODULE_1__["initUse"])(Vue);
  Object(_mixin__WEBPACK_IMPORTED_MODULE_2__["initMixin"])(Vue);
  Object(_extend__WEBPACK_IMPORTED_MODULE_3__["initExtend"])(Vue);
  Object(_assets__WEBPACK_IMPORTED_MODULE_4__["initAssetRegisters"])(Vue);
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUse", function() { return initUse; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




function initUse(Vue) {
  Vue.use = function (plugin) {
    const installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    const args = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["toArray"])(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMixin", function() { return initMixin; });
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);




function initMixin(Vue) {
  Vue.mixin = function (mixin) {
    this.options = Object(_util_index__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(this.options, mixin);
    return this;
  };
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initExtend", function() { return initExtend; });
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _instance_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);






function initExtend(Vue) {
  Vue.cid = 0;
  let cid = 1;

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    const Super = this;
    const SuperId = Super.cid;
    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    const name = extendOptions.name || Super.options.name;
    if ( true && name) {
      Object(_util_index__WEBPACK_IMPORTED_MODULE_2__["validateComponentName"])(name);
    }

    const Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = Object(_util_index__WEBPACK_IMPORTED_MODULE_2__["mergeOptions"])(Super.options, extendOptions);
    Sub['super'] = Super;

    if (Sub.options.props) {
      initProps(Sub);
    }
    if (Sub.options.computed) {
      initComputed(Sub);
    }

    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    shared_constants__WEBPACK_IMPORTED_MODULE_0__["ASSET_TYPES"].forEach(function (type) {
      Sub[type] = Super[type];
    });

    if (name) {
      Sub.options.components[name] = Sub;
    }

    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = Object(_util_index__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, Sub.options);

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps(Comp) {
  const props = Comp.options.props;
  for (const key in props) {
    Object(_instance_state__WEBPACK_IMPORTED_MODULE_1__["proxy"])(Comp.prototype, `_props`, key);
  }
}

function initComputed(Comp) {
  const computed = Comp.options.computed;
  for (const key in computed) {
    Object(_instance_state__WEBPACK_IMPORTED_MODULE_1__["defineComputed"])(Comp.prototype, key, computed[key]);
  }
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAssetRegisters", function() { return initAssetRegisters; });
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);





function initAssetRegisters(Vue) {
  shared_constants__WEBPACK_IMPORTED_MODULE_0__["ASSET_TYPES"].forEach(type => {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        if ( true && type === 'component') {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["validateComponentName"])(id);
        }
        if (type === 'component' && Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keep_alive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);


/* harmony default export */ __webpack_exports__["default"] = ({
  KeepAlive: _keep_alive__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var core_vdom_helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);





function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(pattern)) {
    return pattern.test(name);
  }

  return false;
}

function pruneCache(keepAliveInstance, filter) {
  const { cache, keys, _vnode } = keepAliveInstance;
  for (const key in cache) {
    const cachedNode = cache[key];
    if (cachedNode) {
      const name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  const cached = cache[key];
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy();
  }
  cache[key] = null;
  Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["remove"])(keys, key);
}

const patternTypes = [String, RegExp, Array];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed() {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted() {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name));
    });
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name));
    });
  },

  render() {
    const slot = this.$slots.default;
    const vnode = Object(core_vdom_helpers_index__WEBPACK_IMPORTED_MODULE_1__["getFirstComponentChild"])(slot);
    const componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      const name = getComponentName(componentOptions);
      const { include, exclude } = this;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        return vnode;
      }

      const { cache, keys } = this;
      const key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '') : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;

        Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["remove"])(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony import */ var core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var core_vdom_modules_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _node_ops__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);






const modules = _modules_index__WEBPACK_IMPORTED_MODULE_2__["default"].concat(core_vdom_modules_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

const patch = Object(core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__["createPatchFunction"])({ nodeOps: _node_ops__WEBPACK_IMPORTED_MODULE_3__, modules });

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyNode", function() { return emptyNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPatchFunction", function() { return createPatchFunction; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _modules_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _observer_traverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _instance_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var web_util_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);












const emptyNode = new _vnode__WEBPACK_IMPORTED_MODULE_0__["default"]('', {}, []);

const hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(a.data) === Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(b.data) && sameInputType(a, b) || Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') return true;
  let i;
  const typeA = Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = a.data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.attrs) && i.type;
  const typeB = Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = b.data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.attrs) && i.type;
  return typeA === typeB || Object(web_util_element__WEBPACK_IMPORTED_MODULE_6__["isTextInputType"])(typeA) && Object(web_util_element__WEBPACK_IMPORTED_MODULE_6__["isTextInputType"])(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  let i, key;
  const map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(key)) map[key] = i;
  }
  return map;
}

function createPatchFunction(backend) {
  let i, j;
  const cbs = {};

  const { modules, nodeOps } = backend;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new _vnode__WEBPACK_IMPORTED_MODULE_0__["default"](nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeNode(el) {
    const parent = nodeOps.parentNode(el);

    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(_config__WEBPACK_IMPORTED_MODULE_1__["default"].ignoredElements.length && _config__WEBPACK_IMPORTED_MODULE_1__["default"].ignoredElements.some(ignore => {
      return Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isRegExp"])(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && _config__WEBPACK_IMPORTED_MODULE_1__["default"].isUnknownElement(vnode.tag);
  }

  let creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.elm) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(ownerArray)) {
      vnode = ownerArray[index] = Object(_vnode__WEBPACK_IMPORTED_MODULE_0__["cloneVNode"])(vnode);
    }

    vnode.isRootInsert = !nested;
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    const data = vnode.data;
    const children = vnode.children;
    const tag = vnode.tag;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement(vnode, creatingElmInVPre)) {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["warn"])('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      if (false) {} else {
        createChildren(vnode, children, insertedVnodeQueue);
        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    let i = vnode.data;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i)) {
      const isReactivated = Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.componentInstance) && i.keepAlive;
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.init)) {
        i(vnode, false, parentElm, refElm);
      }

      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      Object(_modules_ref__WEBPACK_IMPORTED_MODULE_3__["registerRef"])(vnode);

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    let i;

    let innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = innerNode.data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }

    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(parent)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (let i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isPrimitive"])(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (let i = 0; i < cbs.create.length; ++i) {
      cbs.create[i](emptyNode, vnode);
    }
    i = vnode.data.hook;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i.create)) i.create(emptyNode, vnode);
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i.insert)) insertedVnodeQueue.push(vnode);
    }
  }

  function setScope(vnode) {
    let i;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      let ancestor = vnode;
      while (ancestor) {
        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = ancestor.context) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }

    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = _instance_lifecycle__WEBPACK_IMPORTED_MODULE_5__["activeInstance"]) && i !== vnode.context && i !== vnode.fnContext && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    let i, j;
    const data = vnode.data;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(data)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = data.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
    }
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      const ch = vnodes[startIdx];
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(ch)) {
        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(rm) || Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.data)) {
      let i;
      const listeners = cbs.remove.length + 1;
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(rm)) {
        rm.listeners += listeners;
      } else {
        rm = createRmCb(vnode.elm, listeners);
      }

      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = vnode.componentInstance) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i._vnode) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = vnode.data.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    const canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(idxInOld)) {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    const seenKeys = {};
    for (let i = 0; i < children.length; i++) {
      const vnode = children[i];
      const key = vnode.key;
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(key)) {
        if (seenKeys[key]) {
          Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["warn"])(`Duplicate keys detected: '${key}'. This may cause an update error.`, vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (let i = start; i < end; i++) {
      const c = oldCh[i];
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(c) && sameVnode(node, c)) return i;
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    const elm = vnode.elm = oldVnode.elm;

    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(oldVnode.isAsyncPlaceholder)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(vnode.isStatic) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(oldVnode.isStatic) && vnode.key === oldVnode.key && (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(vnode.isCloned) || Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    let i;
    const data = vnode.data;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = data.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    const oldCh = oldVnode.children;
    const ch = vnode.children;
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = data.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.update)) i(oldVnode, vnode);
    }
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(vnode.text)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(oldCh) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(ch)) {
        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(oldVnode.text)) nodeOps.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(data)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = data.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.postpatch)) i(oldVnode, vnode);
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(initial) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (let i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  let hydrationBailed = false;

  const isRenderedModule = Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["makeMap"])('attrs,class,staticClass,staticStyle,key');

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    let i;
    const { tag, data, children } = vnode;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(vnode.isComment) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }

    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(data)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = data.hook) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.init)) i(vnode, true);
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(tag)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(children)) {
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = data) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.domProps) && Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false;
            }
          } else {
            let childrenMatch = true;
            let childNode = elm.firstChild;
            for (let i = 0; i < children.length; i++) {
              if (!childNode || !hydrate(childNode, children[i], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }

            if (!childrenMatch || childNode) {
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
      }
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(data)) {
        let fullInvoke = false;
        for (const key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data['class']) {
          Object(_observer_traverse__WEBPACK_IMPORTED_MODULE_4__["traverse"])(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(vnode)) {
      if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(oldVnode)) invokeDestroyHook(oldVnode);
      return;
    }

    let isInitialPatch = false;
    const insertedVnodeQueue = [];

    if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isUndef"])(oldVnode)) {
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      const isRealElement = Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(shared_constants__WEBPACK_IMPORTED_MODULE_2__["SSR_ATTR"])) {
            oldVnode.removeAttribute(shared_constants__WEBPACK_IMPORTED_MODULE_2__["SSR_ATTR"]);
            hydrating = true;
          }
          if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isTrue"])(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["warn"])('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }

          oldVnode = emptyNodeAt(oldVnode);
        }

        const oldElm = oldVnode.elm;
        const parentElm = nodeOps.parentNode(oldElm);

        createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));

        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(vnode.parent)) {
          let ancestor = vnode.parent;
          const patchable = isPatchable(vnode);
          while (ancestor) {
            for (let i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (let i = 0; i < cbs.create.length; ++i) {
                cbs.create[i](emptyNode, ancestor);
              }

              const insert = ancestor.data.hook.insert;
              if (insert.merged) {
                for (let i = 1; i < insert.fns.length; i++) {
                  insert.fns[i]();
                }
              }
            } else {
              Object(_modules_ref__WEBPACK_IMPORTED_MODULE_3__["registerRef"])(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (Object(_util_index__WEBPACK_IMPORTED_MODULE_7__["isDef"])(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRef", function() { return registerRef; });
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);




/* harmony default export */ __webpack_exports__["default"] = ({
  create(_, vnode) {
    registerRef(vnode);
  },
  update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy(vnode) {
    registerRef(vnode, true);
  }
});

function registerRef(vnode, isRemoval) {
  const key = vnode.data.ref;
  if (!Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["isDef"])(key)) return;

  const vm = vnode.context;
  const ref = vnode.componentInstance || vnode.elm;
  const refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["remove"])(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaceMap", function() { return namespaceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLTag", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPreTag", function() { return isPreTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservedTag", function() { return isReservedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagNamespace", function() { return getTagNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnknownElement", function() { return isUnknownElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextInputType", function() { return isTextInputType; });
/* harmony import */ var core_util_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);





const namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

const isHTMLTag = Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

const isSVG = Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

const isPreTag = tag => tag === 'pre';

const isReservedTag = tag => {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }

  if (tag === 'math') {
    return 'math';
  }
}

const unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  if (!core_util_env__WEBPACK_IMPORTED_MODULE_0__["inBrowser"]) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  const el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

const isTextInputType = Object(shared_util__WEBPACK_IMPORTED_MODULE_1__["makeMap"])('text,number,password,search,email,tel,url');

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);



/* harmony default export */ __webpack_exports__["default"] = ([_ref__WEBPACK_IMPORTED_MODULE_1__["default"], _directives__WEBPACK_IMPORTED_MODULE_0__["default"]]);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var core_util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var core_vdom_helpers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);






/* harmony default export */ __webpack_exports__["default"] = ({
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__["emptyNode"]);
  }
});

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  const isCreate = oldVnode === core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__["emptyNode"];
  const isDestroy = vnode === core_vdom_patch__WEBPACK_IMPORTED_MODULE_0__["emptyNode"];
  const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context);
  const newDirs = normalizeDirectives(vnode.data.directives, vnode.context);

  const dirsWithInsert = [];
  const dirsWithPostpatch = [];

  let key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      callHook(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      dir.oldValue = oldDir.value;
      callHook(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    const callInsert = () => {
      for (let i = 0; i < dirsWithInsert.length; i++) {
        callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      Object(core_vdom_helpers_index__WEBPACK_IMPORTED_MODULE_2__["mergeVNodeHook"])(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    Object(core_vdom_helpers_index__WEBPACK_IMPORTED_MODULE_2__["mergeVNodeHook"])(vnode, 'postpatch', () => {
      for (let i = 0; i < dirsWithPostpatch.length; i++) {
        callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

const emptyModifiers = Object.create(null);

function normalizeDirectives(dirs, vm) {
  const res = Object.create(null);
  if (!dirs) {
    return res;
  }
  let i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = Object(core_util_index__WEBPACK_IMPORTED_MODULE_1__["resolveAsset"])(vm.$options, 'directives', dir.name, true);
  }

  return res;
}

function getRawDirName(dir) {
  return dir.rawName || `${dir.name}.${Object.keys(dir.modifiers || {}).join('.')}`;
}

function callHook(dir, hook, vnode, oldVnode, isDestroy) {
  const fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      Object(core_util_index__WEBPACK_IMPORTED_MODULE_1__["handleError"])(e, vnode.context, `directive ${dir.name} ${hook} hook`);
    }
  }
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);



/* harmony default export */ __webpack_exports__["default"] = ([_attrs__WEBPACK_IMPORTED_MODULE_0__["default"], _events__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);



function updateAttrs(oldVnode, vnode) {
  if (oldVnode.data.attrs == null && vnode.data.attrs == null) return;

  const elm = vnode.elm;
  const oldAttrs = oldVnode.data.attrs || {};
  let attrs = vnode.data.attrs || {};

  if (attrs.__ob__ != null) attrs = vnode.data.attrs = Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, attrs);

  for (let key in attrs) {
    let cur = attrs[key];
    let old = oldAttrs[key];
    if (old !== cur) setAttr(elm, key, cur);
  }

  for (let key in oldAttrs) {
    if (attrs[key] == null) elm.setAttribute(key, null);
  }
}

function setAttr(elm, key, value) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_1__["isBooleanAttr"])(key)) {
    if (value == null || value === false) elm.setAttribute(key, false);else elm.setAttribute(key, true);
  } else {
    elm.setAttribute(key, value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: updateAttrs,
  update: updateAttrs
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnaryTag", function() { return isUnaryTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeLeftOpenTag", function() { return canBeLeftOpenTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustUseProp", function() { return mustUseProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReservedTag", function() { return isReservedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTagNamespace", function() { return getTagNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnknownElement", function() { return isUnknownElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBooleanAttr", function() { return isBooleanAttr; });
/* harmony import */ var shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


function isUnaryTag(el) {
  return false;
}

function canBeLeftOpenTag(el) {
  return false;
}

function mustUseProp(tag, type, name) {
  return false;
}

const isReservedTag = Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["makeMap"])('template,script,style,area,areagroup,areapath,areatext,box,button,checkbox,colorbutton,combobox,datepicker,datetimepicker,' + 'dropdownlist,fontbutton,form,group,progressbar,radiobuttons,separator,slider,spinbox,tab,text,textarea,textinput,timepicker,window', true);

function getTagNamespace(tag) {}

function isUnknownElement(tag) {
  return false;
}

const isBooleanAttr = Object(shared_util__WEBPACK_IMPORTED_MODULE_0__["makeMap"])('visible,enabled,stretchy,margined,padded,checked,horizontal,readonly,fullscreen,borderless,scrollable');

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_vdom_helpers_update_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);


let target = null;

function add(event, handler, once, capture) {
  if (capture) throw new Error('Bubble phase events are not supported');

  if (once) {
    const oldHandler = handler;
    const _target = target;

    handler = function (ev) {
      const res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      if (res !== null) remove(event, null, null, _target);
    };
  }

  target.addEventListener(event, handler);
}

function remove(event, handler, capture, _target) {
  (_target || target).removeEventListener(event);
}

function updateDOMListeners(oldVnode, vnode) {
  if (oldVnode.data.on == null && vnode.data.on == null) return;

  const on = vnode.data.on || {};
  const oldOn = oldVnode.data.on || {};

  target = vnode.elm;
  Object(core_vdom_helpers_update_listeners__WEBPACK_IMPORTED_MODULE_0__["updateListeners"])(on, oldOn, add, remove, vnode.context);
  target = null;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: updateDOMListeners,
  update: updateDOMListeners
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementNS", function() { return createElementNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentNode", function() { return parentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSibling", function() { return nextSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagName", function() { return tagName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTextContent", function() { return setTextContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyleScope", function() { return setStyleScope; });
/* harmony import */ var _nodes_textnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _nodes_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);




function createElement(tagName, vnode) {
  const element = _elements__WEBPACK_IMPORTED_MODULE_2__[tagName];
  if (element == null) throw new Error('Unknown element ' + tagName);
  return new element(tagName);
}

function createElementNS(namespace, tagName) {
  throw new Error('Namespaced elements are not supported');
}

function createTextNode(text) {
  return new _nodes_textnode__WEBPACK_IMPORTED_MODULE_0__["TextNode"](text);
}

function createComment(text) {
  return new _nodes_comment__WEBPACK_IMPORTED_MODULE_1__["Comment"](text);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.setText(text);
}

function setAttribute(node, key, value) {
  node.setAttribute(key, value);
}

function setStyleScope(node, scopeId) {
  throw new Error('Scoped styles are not supported');
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextNode", function() { return TextNode; });
class TextNode {
  constructor(text) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = '';

    this.text = text;
  }

  setText(text) {
    this.text = text;

    if (this.parentNode != null) this.parentNode._setContentText(text);
  }
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
class Comment {
  constructor(text) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = '';

    this.text = text;
  }

  setText(text) {
    this.text = text;
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return _area__WEBPACK_IMPORTED_MODULE_0__["Area"]; });

/* harmony import */ var _areagroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaGroup", function() { return _areagroup__WEBPACK_IMPORTED_MODULE_1__["AreaGroup"]; });

/* harmony import */ var _areapath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaPath", function() { return _areapath__WEBPACK_IMPORTED_MODULE_2__["AreaPath"]; });

/* harmony import */ var _areatext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AreaText", function() { return _areatext__WEBPACK_IMPORTED_MODULE_3__["AreaText"]; });

/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _box__WEBPACK_IMPORTED_MODULE_4__["Box"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_5__["Button"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]; });

/* harmony import */ var _colorbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorButton", function() { return _colorbutton__WEBPACK_IMPORTED_MODULE_7__["ColorButton"]; });

/* harmony import */ var _combobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Combobox", function() { return _combobox__WEBPACK_IMPORTED_MODULE_8__["Combobox"]; });

/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _datepicker__WEBPACK_IMPORTED_MODULE_9__["DatePicker"]; });

/* harmony import */ var _datetimepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return _datetimepicker__WEBPACK_IMPORTED_MODULE_10__["DateTimePicker"]; });

/* harmony import */ var _dropdownlist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownList", function() { return _dropdownlist__WEBPACK_IMPORTED_MODULE_11__["DropdownList"]; });

/* harmony import */ var _fontbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontButton", function() { return _fontbutton__WEBPACK_IMPORTED_MODULE_12__["FontButton"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_13__["Form"]; });

/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_14__["Group"]; });

/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressBar"]; });

/* harmony import */ var _radiobuttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtons", function() { return _radiobuttons__WEBPACK_IMPORTED_MODULE_16__["RadioButtons"]; });

/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Separator", function() { return _separator__WEBPACK_IMPORTED_MODULE_17__["Separator"]; });

/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _slider__WEBPACK_IMPORTED_MODULE_18__["Slider"]; });

/* harmony import */ var _spinbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinbox", function() { return _spinbox__WEBPACK_IMPORTED_MODULE_19__["Spinbox"]; });

/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tab__WEBPACK_IMPORTED_MODULE_20__["Tab"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_21__["Text"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_22__["TextArea"]; });

/* harmony import */ var _textinput__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _textinput__WEBPACK_IMPORTED_MODULE_23__["TextInput"]; });

/* harmony import */ var _timepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return _timepicker__WEBPACK_IMPORTED_MODULE_24__["TimePicker"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(101);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return _window__WEBPACK_IMPORTED_MODULE_25__["Window"]; });




























/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _areaitem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class Area extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  constructor(tagName) {
    super(tagName);

    this.areaHandlers = {
      draw: null,
      mousedown: null,
      mouseup: null,
      mousemove: null,
      mouseenter: null,
      mouseleave: null,
      dragbroken: null,
      keydown: null,
      keyup: null
    };
  }

  redraw() {
    if (this.widget != null) this.widget.queueRedrawAll();
  }

  _appendElement(childNode) {
    if (!(childNode instanceof _areaitem__WEBPACK_IMPORTED_MODULE_2__["AreaItem"])) throw new Error('Area can only contain child area items');

    childNode._attach(this);

    this.redraw();
  }

  _insertElement(childNode, prevIndex) {
    if (!(childNode instanceof _areaitem__WEBPACK_IMPORTED_MODULE_2__["AreaItem"])) throw new Error('Area can only contain child area items');

    if (prevIndex < 0) childNode._attach(this);

    this.redraw();
  }

  _removeElement(childNode) {
    childNode._detach();

    this.redraw();
  }

  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      scrollable: false,
      width: 0,
      height: 0
    });
  }

  _createWidget() {
    const draw = (area, params) => {
      if (this.childNodes.length > 0) this._drawChildItems(params);

      if (this.areaHandlers.draw != null) this.areaHandlers.draw(params);
    };

    const mouseEvent = (area, event) => {
      if (event.getDown() != 0) {
        if (this.areaHandlers.mousedown != null) this.areaHandlers.mousedown(event);
      } else if (event.getUp() != 0) {
        if (this.areaHandlers.mouseup != null) this.areaHandlers.mouseup(event);
      } else {
        if (this.areaHandlers.mousemove != null) this.areaHandlers.mousemove(event);
      }
    };

    const mouseCrossed = (area, didLeave) => {
      if (!didLeave) {
        if (this.areaHandlers.mouseenter != null) this.areaHandlers.mouseenter();
      } else {
        if (this.areaHandlers.mouseleave != null) this.areaHandlers.mouseleave();
      }
    };

    const dragBroken = area => {
      if (this.areaHandlers.dragbroken != null) this.areaHandlers.dragbroken();
    };

    const keyEvent = (area, event) => {
      if (!event.getUp()) {
        if (this.areaHandlers.keydown != null) return this.areaHandlers.keydown(event);
      } else {
        if (this.areaHandlers.keyup != null) return this.areaHandlers.keyup(event);
      }
    };

    if (this.attributes.scrollable) this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiArea(draw, mouseEvent, mouseCrossed, dragBroken, keyEvent, this.attributes.width, this.attributes.height);else this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiArea(draw, mouseEvent, mouseCrossed, dragBroken, keyEvent);
  }

  _setWidgetAttribute(key, value) {
    if (key == 'width') this.widget.setSize(value, this.attributes.height);else if (key == 'height') this.widget.setSize(this.attributes.width, value);else super._setWidgetAttribute(key, value);
  }

  _setWidgetHandler(event, handler) {
    if (this.areaHandlers.hasOwnProperty(event)) this.areaHandlers[event] = handler;else super._setWidgetHandler(event, handler);
  }

  _drawChildItems(params) {
    const context = params.getContext();

    const line = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.DrawStrokeParams();
    line.thickness = 1;

    const style = {
      fill: null,
      stroke: null,
      line
    };

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof _areaitem__WEBPACK_IMPORTED_MODULE_2__["AreaItem"]) childNode._drawItem(context, style);
    }
  }
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _nodes_textnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);



class Widget extends _element__WEBPACK_IMPORTED_MODULE_0__["Element"] {
  constructor(tagName) {
    super(tagName);

    this.widget = null;
    this.widgetIndex = null;
  }

  appendChild(childNode) {
    super.appendChild(childNode);

    if (this.widget != null) {
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._appendElement(childNode);else if (childNode instanceof _nodes_textnode__WEBPACK_IMPORTED_MODULE_1__["TextNode"]) this._setWidgetText(childNode.text);
    }
  }

  insertBefore(childNode, referenceNode) {
    const prevIndex = childNode.parentNode == this ? this.childNodes.indexOf(childNode) : -1;

    super.insertBefore(childNode, referenceNode);

    if (this.widget != null) {
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._insertElement(childNode, prevIndex);
    }
  }

  removeChild(childNode) {
    super.removeChild(childNode);

    if (this.widget != null) {
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._removeElement(childNode);
    }
  }

  setAttribute(key, value) {
    super.setAttribute(key, value);

    if (this.widget != null) this._setWidgetAttribute(key, value);
  }

  addEventListener(event, handler) {
    super.addEventListener(event, handler);

    if (this.widget != null) this._setWidgetHandler(event, handler);
  }

  removeEventListener(event) {
    super.removeEventListener(event);

    if (this.widget != null) this._setWidgetHandler(event, null);
  }

  _mountWidget() {
    this._createWidget();
    this._initializeWidgetAttributes();

    for (let key in this.handlers) this._setWidgetHandler(key, this.handlers[key]);

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._appendElement(childNode);else if (childNode instanceof _nodes_textnode__WEBPACK_IMPORTED_MODULE_1__["TextNode"]) this._setWidgetText(childNode.text);
    }
  }

  _getDefaultAttributes() {
    return {
      visible: true,
      enabled: true,
      stretchy: false,
      label: ''
    };
  }

  _createWidget() {
    throw new Error(this.tagName + ' cannot be created');
  }

  _destroyWidget() {
    this.widget.destroy();

    this._clearWidget();
  }

  _clearWidget() {
    this.widget = null;

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof Widget) childNode._clearWidget();
    }
  }

  _appendElement(childNode) {
    if (!(childNode instanceof Widget)) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    childNode._mountWidget();
    this._appendWidget(childNode);

    this._reindexChildWidgets();
  }

  _insertElement(childNode, prevIndex) {
    if (!(childNode instanceof Widget)) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    const index = this.childNodes.indexOf(childNode);

    for (let i = this.childNodes.length - 1; i > index; i--) {
      const tailNode = this.childNodes[i];
      if (tailNode instanceof Widget) this._removeWidget(tailNode);
    }

    if (prevIndex < 0) {
      childNode._mountWidget();
      this._appendWidget(childNode);
    } else if (prevIndex < index) {
      this._removeWidget(childNode);
      this._appendWidget(childNode);
    }

    for (let i = index + 1; i < this.childNodes.length; i++) {
      const tailNode = this.childNodes[i];
      if (tailNode instanceof Widget) this._appendWidget(tailNode);
    }

    this._reindexChildWidgets();
  }

  _removeElement(childNode) {
    this._removeWidget(childNode);
    childNode._destroyWidget();

    this._reindexChildWidgets();
  }

  _appendWidget(childNode) {
    throw new Error(this.tagName + ' cannot contain child widgets');
  }

  _removeWidget(childNode) {
    throw new Error(this.tagName + ' cannot contain child widgets');
  }

  _setContentText(text) {
    if (this.widget != null) this._setWidgetText(text);
  }

  _setWidgetText(text) {
    throw new Error(this.tagName + ' cannot contain text nodes');
  }

  _initializeWidgetAttributes() {
    if (!this.attributes.visible) this.widget.visible = false;
    if (!this.attributes.enabled) this.widget.enabled = false;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'visible') this.widget.visible = value;else if (key == 'enabled') this.widget.enabled = value;else throw new Error(this.tagName + ' does not have attribute ' + key);
  }

  _setWidgetHandler(event, handler) {
    throw new Error(this.tagName + ' does not have event ' + event);
  }

  _reindexChildWidgets() {
    let index = 0;
    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof Widget) childNode.widgetIndex = index++;
    }
  }
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony import */ var _nodes_textnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);


class Element {
  constructor(tagName) {
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null;

    this.tagName = tagName;

    this.childNodes = [];

    this.attributes = this._getDefaultAttributes();
    this.handlers = {};
  }

  appendChild(childNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (childNode.parentNode != null) throw new Error('Child node already has a parent');

    if (childNode instanceof _nodes_textnode__WEBPACK_IMPORTED_MODULE_0__["TextNode"] && this.childNodes.length > 0) throw new Error('Element cannot contian multiple text nodes');

    childNode.parentNode = this;

    if (this.childNodes.length > 0) {
      const lastChild = this.childNodes[this.childNodes.length - 1];
      childNode.prevSibling = lastChild;
      lastChild.nextSibling = childNode;
    }

    this.childNodes.push(childNode);
  }

  insertBefore(childNode, referenceNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (referenceNode != null && referenceNode.parentNode != this) throw new Error('Reference node has invalid parent');

    if (childNode.parentNode != null && childNode.parentNode != this) throw new Error('Child node has invalid parent');

    if (childNode instanceof _nodes_textnode__WEBPACK_IMPORTED_MODULE_0__["TextNode"]) throw new Error('Text node cannot be inserted dynamically');

    if (childNode.parentNode != null) {
      if (childNode.prevSibling != null) childNode.prevSibling.nextSibling = childNode.nextSibling;

      if (childNode.nextSibling != null) childNode.nextSibling.prevSibling = childNode.prevSibling;

      const prevIndex = this.childNodes.indexOf(childNode);
      this.childNodes.splice(prevIndex, 1);
    }

    const index = referenceNode != null ? this.childNodes.indexOf(referenceNode) : this.childNodes.length;

    childNode.parentNode = this;

    childNode.nextSibling = referenceNode;
    if (referenceNode != null) referenceNode.prevSibling = childNode;

    if (index > 0) {
      childNode.prevSibling = this.childNodes[index - 1];
      this.childNodes[index - 1].nextSibling = childNode;
    } else {
      childNode.prevSibling = null;
    }

    this.childNodes.splice(index, 0, childNode);
  }

  removeChild(childNode) {
    if (childNode == null) throw new Error('Child node cannot be empty');

    if (childNode.parentNode != this) throw new Error('Child node has invalid parent');

    if (childNode instanceof _nodes_textnode__WEBPACK_IMPORTED_MODULE_0__["TextNode"]) throw new Error('Text node cannot be removed dynamically');

    childNode.parentNode = null;

    if (childNode.prevSibling != null) childNode.prevSibling.nextSibling = childNode.nextSibling;

    if (childNode.nextSibling != null) childNode.nextSibling.prevSibling = childNode.prevSibling;

    childNode.prevSibling = null;
    childNode.nextSibling = null;

    const index = this.childNodes.indexOf(childNode);
    this.childNodes.splice(index, 1);
  }

  setAttribute(key, value) {
    this.attributes[key] = value;
  }

  addEventListener(event, handler) {
    this.handlers[event] = handler;
  }

  removeEventListener(event) {
    delete this.handlers[event];
  }

  _getDefaultAttributes() {
    return {};
  }

  _setContentText(text) {
    throw new Error(this.tagName + ' cannot contain text nodes');
  }
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaItem", function() { return AreaItem; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _nodes_textnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);



class AreaItem extends _element__WEBPACK_IMPORTED_MODULE_0__["Element"] {
  constructor(tagName) {
    super(tagName);

    this.area = null;
  }

  appendChild(childNode) {
    super.appendChild(childNode);

    if (this.area != null) {
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._addElement(childNode);else if (childNode instanceof _nodes_textnode__WEBPACK_IMPORTED_MODULE_1__["TextNode"]) throw new Error(this.tagName + ' cannot contain text nodes');
    }
  }

  insertBefore(childNode, referenceNode) {
    const prevIndex = childNode.parentNode == this ? this.childNodes.indexOf(childNode) : -1;

    super.insertBefore(childNode, referenceNode);

    if (this.area != null) {
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._insertElement(childNode, prevIndex);
    }
  }

  removeChild(childNode) {
    super.removeChild(childNode);

    if (this.area != null) {
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._removeElement(childNode);
    }
  }

  setAttribute(key, value) {
    super.setAttribute(key, value);

    if (this.area != null) this._setItemAttribute(key, value);
  }

  addEventListener(event, handler) {
    throw new Error(this.tagName + ' does not have event ' + event);
  }

  removeEventListener(event) {
    throw new Error(this.tagName + ' does not have event ' + event);
  }

  _attach(area) {
    this.area = area;

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) this._addElement(childNode);else if (childNode instanceof _nodes_textnode__WEBPACK_IMPORTED_MODULE_1__["TextNode"]) throw new Error(this.tagName + ' cannot contain text nodes');
    }
  }

  _detach() {
    this.area = null;

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof _element__WEBPACK_IMPORTED_MODULE_0__["Element"]) childNode._detach();
    }
  }

  _drawItem(context, style) {
    throw new Error(this.tagName + ' does not have a draw method');
  }

  _addElement(childNode) {
    throw new Error(this.tagName + ' cannot contain child elements');
  }

  _insertElement(childNode, prevIndex) {
    throw new Error(this.tagName + ' cannot contain child elements');
  }

  _removeElement(childNode) {
    throw new Error(this.tagName + ' cannot contain child elements');
  }

  _setItemAttribute(key, value) {
    throw new Error(this.tagName + ' does not have attribute ' + key);
  }

  _redrawArea() {
    if (this.area != null) this.area.redraw();
  }
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaGroup", function() { return AreaGroup; });
/* harmony import */ var _areaitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);


class AreaGroup extends _areaitem__WEBPACK_IMPORTED_MODULE_0__["AreaItem"] {
  _getDefaultAttributes() {
    return {
      transform: null,
      fill: null,
      stroke: null,
      line: null
    };
  }

  _drawItem(context, style) {
    const transform = this.attributes.transform;

    if (transform != null) {
      context.save();
      context.transform(transform);
    }

    const fill = this.attributes.fill || style.fill;
    const stroke = this.attributes.stroke || style.stroke;
    const line = this.attributes.line || style.line;

    const childStyle = { fill, stroke, line };

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof _areaitem__WEBPACK_IMPORTED_MODULE_0__["AreaItem"]) childNode._drawItem(context, childStyle);
    }

    if (transform != null) context.restore();
  }

  _addElement(childNode) {
    if (!(childNode instanceof _areaitem__WEBPACK_IMPORTED_MODULE_0__["AreaItem"])) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    childNode._attach(this.area);

    this._redrawArea();
  }

  _insertElement(childNode, prevIndex) {
    if (!(childNode instanceof _areaitem__WEBPACK_IMPORTED_MODULE_0__["AreaItem"])) throw new Error(this.tagName + ' cannot contain ' + childNode.tagName + ' elements');

    if (prevIndex < 0) childNode._attach(this.area);

    this._redrawArea();
  }

  _removeElement(childNode) {
    childNode._detach();

    this._redrawArea();
  }

  _setItemAttribute(key, value) {
    switch (key) {
      case 'transform':
      case 'fill':
      case 'stroke':
      case 'line':
        this._redrawArea();
        break;

      default:
        this._setItemAttribute(key, value);
        break;
    }
  }
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPath", function() { return AreaPath; });
/* harmony import */ var _areaitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);


class AreaPath extends _areaitem__WEBPACK_IMPORTED_MODULE_0__["AreaItem"] {
  _getDefaultAttributes() {
    return {
      path: null,
      fill: null,
      stroke: null,
      line: null
    };
  }

  _drawItem(context, style) {
    const path = this.attributes.path;
    if (path != null) {
      const fill = this.attributes.fill || style.fill;
      const stroke = this.attributes.stroke || style.stroke;
      const line = this.attributes.line || style.line;
      if (fill != null) context.fill(path, fill);
      if (stroke != null) context.stroke(path, stroke, line);
    }
  }

  _setItemAttribute(key, value) {
    switch (key) {
      case 'path':
      case 'fill':
      case 'stroke':
      case 'line':
        this._redrawArea();
        break;

      default:
        this._setItemAttribute(key, value);
        break;
    }
  }
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaText", function() { return AreaText; });
/* harmony import */ var _areaitem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);


class AreaText extends _areaitem__WEBPACK_IMPORTED_MODULE_0__["AreaItem"] {
  _getDefaultAttributes() {
    return {
      x: 0,
      y: 0,
      layout: null
    };
  }

  _drawItem(context, style) {
    if (this.attributes.layout != null) context.text(this.attributes.x, this.attributes.y, this.attributes.layout);
  }

  _setItemAttribute(key, value) {
    switch (key) {
      case 'x':
      case 'y':
      case 'layout':
        this._redrawArea();
        break;

      default:
        this._setItemAttribute(key, value);
        break;
    }
  }
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Box extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      horizontal: false,
      padded: false
    });
  }

  _createWidget() {
    if (this.attributes.horizontal) this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiHorizontalBox();else this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiVerticalBox();
  }

  _appendWidget(childNode) {
    this.widget.append(childNode.widget, childNode.attributes.stretchy);
  }

  _removeWidget(childNode) {
    this.widget.deleteAt(childNode.widgetIndex);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.padded) this.widget.padded = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'padded') this.widget.padded = value;else super._setWidgetAttribute(key, value);
  }
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);




class Button extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiButton();
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }

  _setWidgetHandler(event, handler) {
    if (event == 'click') this.widget.onClicked(handler);else super._setWidgetHandler(event, handler);
  }
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Checkbox extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      checked: false
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiCheckbox();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.checked) this.widget.checked = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'checked') {
      if (this.widget.checked != value) this.widget.checked = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'toggle') {
      this.widget.onToggled(() => {
        handler(this.widget.checked);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorButton", function() { return ColorButton; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class ColorButton extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.Color(0, 0, 0, 1)
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiColorButton();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.color = this.attributes.value;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      const oldValue = this.widget.color;
      if (oldValue.r != value.r || oldValue.g != value.g || oldValue.b != value.b || oldValue.a != value.a) this.widget.color = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.color);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Combobox", function() { return Combobox; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Combobox extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      items: [],
      value: ''
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiEditableCombobox();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (!Array.isArray(this.attributes.items)) throw new Error('Combobox items must be an array');

    this.attributes.items.forEach(item => {
      this.widget.append(item);
    });

    if (this.attributes.value != '' && this.attributes.value != null) this.widget.text = this.attributes.value;

    this.items = this.attributes.items;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'items') {
      if (!Array.isArray(value)) throw new Error('Combobox items must be an array');
      if (value.length != this.items.length) throw new Error('Combobox items cannot be changed dynamically');
      value.forEach((item, index) => {
        if (item != this.items[index]) throw new Error('Combobox items cannot be changed dynamically');
      });
    } else if (key == 'value') {
      if (value == null) value = '';
      if (this.widget.text != value) this.widget.text = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);




class DatePicker extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiDatePicker();
  }
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return DateTimePicker; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);




class DateTimePicker extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiDateTimePicker();
  }
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownList", function() { return DropdownList; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class DropdownList extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      items: [],
      selected: 0
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiCombobox();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (!Array.isArray(this.attributes.items)) throw new Error('DropdownList items must be an array');

    this.attributes.items.forEach(item => {
      this.widget.append(item);
    });

    this.widget.selected = this.attributes.selected;

    this.items = this.attributes.items;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'items') {
      if (!Array.isArray(value)) throw new Error('DropdownList items must be an array');
      if (value.length != this.items.length) throw new Error('DropdownList items cannot be changed dynamically');
      value.forEach((item, index) => {
        if (item != this.items[index]) throw new Error('DropdownList items cannot be changed dynamically');
      });
    } else if (key == 'selected') {
      if (this.widget.selected != value) this.widget.selected = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onSelected(() => {
        handler(this.widget.selected);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontButton", function() { return FontButton; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);




class FontButton extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiFontButton();
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.font);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }

  get font() {
    if (this.widget != null) return this.widget.font;
  }
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Form extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      padded: false
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiForm();
  }

  _appendWidget(childNode) {
    this.widget.append(childNode.attributes.label, childNode.widget, childNode.attributes.stretchy);
  }

  _removeWidget(childNode) {
    this.widget.deleteAt(childNode.widgetIndex);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.padded) this.widget.padded = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'padded') this.widget.padded = value;else super._setWidgetAttribute(key, value);
  }
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class Group extends _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      title: '',
      margined: false
    });
  }

  appendChild(childNode) {
    _element__WEBPACK_IMPORTED_MODULE_1__["Element"].prototype.appendChild.call(this, childNode);

    if (!(childNode instanceof _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"])) throw new Error('Group can only contain child widget');

    if (this.childNodes.length > 1) throw new Error('Group can only contain one child element');

    if (this.widget != null) throw new Error('Group child element cannot be inserted dynamically');
  }

  insertBefore(childNode, referenceNode) {
    throw new Error('Group child element cannot be inserted dynamically');
  }

  removeChild(childNode) {
    throw new Error('Group child element cannot be removed dynamically');
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiGroup();
  }

  _appendWidget(childNode) {
    this.widget.setChild(childNode.widget);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.title = this.attributes.title;
    if (this.attributes.margined) this.widget.margined = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'title') this.widget.title = value;else if (key == 'margined') this.widget.margined = value;else super._setWidgetAttribute(key, value);
  }
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class ProgressBar extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: 0
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiProgressBar();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != 0) this.widget.value = this.attributes.value;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.value != value) this.widget.value = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtons", function() { return RadioButtons; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class RadioButtons extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      items: [],
      selected: 0
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiRadioButtons();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (!Array.isArray(this.attributes.items)) throw new Error('RadioButtons items must be an array');

    if (this.attributes.items.length == 0) throw new Error('RadioButtons items cannot be empty');

    this.attributes.items.forEach(item => {
      this.widget.append(item);
    });

    this.widget.selected = this.attributes.selected;

    this.items = this.attributes.items;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'items') {
      if (!Array.isArray(value)) throw new Error('RadioButtons items must be an array');
      if (value.length != this.items.length) throw new Error('RadioButtons items cannot be changed dynamically');
      value.forEach((item, index) => {
        if (item != this.items[index]) throw new Error('RadioButtons items cannot be changed dynamically');
      });
    } else if (key == 'selected') {
      if (this.widget.selected != value) this.widget.selected = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onSelected(() => {
        handler(this.widget.selected);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Separator", function() { return Separator; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Separator extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      horizontal: false
    });
  }

  _createWidget() {
    if (this.attributes.horizontal) this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiHorizontalSeparator();else this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiVerticalSeparator();
  }
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Slider extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: 0,
      min: 0,
      max: 100
    });
  }

  _createWidget() {
    if (this.attributes.min >= this.attributes.max) throw new Error('Slider min value must be less than max value');

    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiSlider(this.attributes.min, this.attributes.max);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.value = this.attributes.value;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.value != value) this.widget.value = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.value);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinbox", function() { return Spinbox; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Spinbox extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: 0,
      min: 0,
      max: 100
    });
  }

  _createWidget() {
    if (this.attributes.min >= this.attributes.max) throw new Error('Spinbox min value must be less than max value');

    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiSpinbox(this.attributes.min, this.attributes.max);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    this.widget.value = this.attributes.value;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (this.widget.value != value) this.widget.value = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'change') {
      this.widget.onChanged(() => {
        handler(this.widget.value);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class Tab extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      margined: false
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiTab();
  }

  _appendWidget(childNode) {
    this.widget.append(childNode.attributes.label, childNode.widget);

    if (this.attributes.margined) this.widget.setMargined(this.widget.numPages() - 1, true);
  }

  _removeWidget(childNode) {
    this.widget.deleteAt(childNode.widgetIndex);
  }
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);




class Text extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiLabel();
  }

  _setWidgetText(text) {
    this.widget.text = text;
  }
}

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class TextArea extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      value: '',
      readonly: false
    });
  }

  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiMultilineEntry();
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != '' && this.attributes.value != null) this.widget.text = this.attributes.value;
    if (this.attributes.readonly) this.widget.readOnly = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (value == null) value = '';
      if (this.widget.text != value) this.widget.text = value;
    } else if (key == 'readonly') {
      this.widget.readOnly = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class TextInput extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _getDefaultAttributes() {
    return _extends({}, super._getDefaultAttributes(), {
      type: 'text',
      value: '',
      readonly: false
    });
  }

  _createWidget() {
    if (this.attributes.type == 'text') this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiEntry();else if (this.attributes.type == 'password') this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiPasswordEntry();else if (this.attributes.type == 'search') this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiSearchEntry();else throw new Error('Invalid TextInput type ' + this.attributes.type);
  }

  _initializeWidgetAttributes() {
    super._initializeWidgetAttributes();

    if (this.attributes.value != '' && this.attributes.value != null) this.widget.text = this.attributes.value;
    if (this.attributes.readonly) this.widget.readOnly = true;
  }

  _setWidgetAttribute(key, value) {
    if (key == 'value') {
      if (value == null) value = '';
      if (this.widget.text != value) this.widget.text = value;
    } else if (key == 'readonly') {
      this.widget.readOnly = value;
    } else {
      super._setWidgetAttribute(key, value);
    }
  }

  _setWidgetHandler(event, handler) {
    if (event == 'input') {
      this.widget.onChanged(() => {
        handler(this.widget.text);
      });
    } else {
      super._setWidgetHandler(event, handler);
    }
  }
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return TimePicker; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);




class TimePicker extends _widget__WEBPACK_IMPORTED_MODULE_1__["Widget"] {
  _createWidget() {
    this.widget = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiTimePicker();
  }
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return Window; });
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var libui_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(libui_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);





class Window extends _element__WEBPACK_IMPORTED_MODULE_1__["Element"] {
  constructor(tagName) {
    super(tagName);

    this.window = null;

    this.showHandler = null;
  }

  appendChild(childNode) {
    super.appendChild(childNode);

    if (!(childNode instanceof _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"])) throw new Error('Window can only contain child widgets');

    if (this.childNodes.length > 1) throw new Error('Window can only contain one child element');

    if (this.window != null) throw new Error('Window child element cannot be inserted dynamically');
  }

  insertBefore(childNode, referenceNode) {
    throw new Error('Window child element cannot be inserted dynamically');
  }

  removeChild(childNode) {
    throw new Error('Window child element cannot be removed dynamically');
  }

  setAttribute(key, value) {
    super.setAttribute(key, value);

    if (this.window != null) this._setWindowAttribute(key, value);
  }

  addEventListener(event, handler) {
    super.addEventListener(event, handler);

    if (this.window != null) this._setWindowHandler(event, handler);
  }

  removeEventListener(event) {
    super.removeEventListener(event);

    if (this.window != null) this._setWindowHandler(event, null);
  }

  _getDefaultAttributes() {
    return {
      title: 'Vuido',
      width: 400,
      height: 300,
      menu: false,
      margined: false,
      fullscreen: false,
      borderless: false
    };
  }

  _mountWindow() {
    this.window = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.UiWindow(this.attributes.title, this.attributes.width, this.attributes.height, this.attributes.menu);

    if (this.attributes.margined) this.window.margined = true;
    if (this.attributes.fullscreen) this.window.fullscreen = true;
    if (this.attributes.borderless) this.window.borderless = true;

    for (let key in this.handlers) this._setWindowHandler(key, this.handlers[key]);

    if (this.childNodes.length > 0) {
      this.childNodes[0]._mountWidget();
      this.window.setChild(this.childNodes[0].widget);
    }

    if (this.showHandler != null) this.showHandler();

    this.window.show();
  }

  _destroyWindow() {
    this.window.close();
    this.window = null;

    for (let i = 0; i < this.childNodes.length; i++) {
      const childNode = this.childNodes[i];
      if (childNode instanceof _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"]) childNode._clearWidget();
    }
  }

  _setWindowAttribute(key, value) {
    if (key == 'title') {
      if (value == null) value = '';
      this.window.title = value;
    } else if (key == 'width') {
      if (this.window.contentSize.w != value) this.window.contentSize = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.Size(value, this.window.contentSize.h);
    } else if (key == 'height') {
      if (this.window.contentSize.h != value) this.window.contentSize = new libui_node__WEBPACK_IMPORTED_MODULE_0___default.a.Size(this.window.contentSize.w, value);
    } else if (key == 'fullscreen') {
      this.window.fullscreen = value;
    } else if (key == 'borderless') {
      this.window.borderless = value;
    } else {
      throw new Error('Window does not have attribute ' + key);
    }
  }

  _setWindowHandler(event, handler) {
    if (event == 'close') {
      this.window.onClosing(handler);
    } else if (event == 'resize') {
      this.window.onContentSizeChanged(() => {
        handler(this.window.contentSize);
      });
    } else if (event == 'show') {
      this.showHandler = handler;
    } else {
      throw new Error('Window does not have event ' + event);
    }
  }
}

/***/ })
/******/ ])["default"];

/***/ }),

/***/ "./src/MainWindow.vue":
/*!****************************!*\
  !*** ./src/MainWindow.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainWindow_vue_vue_type_template_id_63d7a97c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainWindow.vue?vue&type=template&id=63d7a97c& */ "./src/MainWindow.vue?vue&type=template&id=63d7a97c&");
/* harmony import */ var _MainWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainWindow.vue?vue&type=script&lang=js& */ "./src/MainWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainWindow_vue_vue_type_template_id_63d7a97c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainWindow_vue_vue_type_template_id_63d7a97c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "77be9a0d"
  
)

component.options.__file = "src/MainWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/MainWindow.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/MainWindow.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./MainWindow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/MainWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/MainWindow.vue?vue&type=template&id=63d7a97c&":
/*!***********************************************************!*\
  !*** ./src/MainWindow.vue?vue&type=template&id=63d7a97c& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_template_id_63d7a97c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./MainWindow.vue?vue&type=template&id=63d7a97c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/MainWindow.vue?vue&type=template&id=63d7a97c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_template_id_63d7a97c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWindow_vue_vue_type_template_id_63d7a97c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuido__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuido */ "./node_modules/vuido/dist/vuido.js");
/* harmony import */ var vuido__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuido__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainWindow */ "./src/MainWindow.vue");




const window = new vuido__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h(_MainWindow__WEBPACK_IMPORTED_MODULE_1__["default"])
});

window.$start();

/***/ }),

/***/ "libui-node":
/*!*****************************!*\
  !*** external "libui-node" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("libui-node");

/***/ })

/******/ });