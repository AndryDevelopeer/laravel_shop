"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_components_auth_Auth_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-34!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=script&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-34!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=script&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var vuex_1 = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
exports["default"] = {
  name: "Auth",
  computed: (0, vuex_1.mapState)(['auth']),
  data: function data() {
    return {};
  },
  methods: {
    sendForm: function sendForm() {
      this.$store.dispatch('login');
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-34!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-34!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.render = void 0;
var vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var _withScopeId = function _withScopeId(n) {
  return (0, vue_1.pushScopeId)("data-v-03554d37"), n = n(), (0, vue_1.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "login-page pt-120 pb-120 wow fadeInUp animated"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row justify-content-center"
};
var _hoisted_4 = {
  "class": "col-xl-6 col-lg-8 col-md-9"
};
var _hoisted_5 = {
  "class": "login-register-form"
};
var _hoisted_6 = {
  "class": "top-title text-center"
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  /*#__PURE__*/return (0, vue_1.createElementVNode)("h2", null, "Войти", -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "common-form"
};
var _hoisted_9 = {
  "class": "form-group"
};
var _hoisted_10 = {
  "class": "form-group eye"
};
var _hoisted_11 = {
  "class": "icon icon-1"
};
var _hoisted_12 = ["type"];
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  /*#__PURE__*/return (0, vue_1.createElementVNode)("div", {
    "class": "checkk"
  }, [/*#__PURE__*/(0, vue_1.createElementVNode)("div", {
    "class": "form-check p-0 m-0"
  }), /*#__PURE__*/(0, vue_1.createElementVNode)("a", {
    href: "#",
    "class": "forgot"
  }, " Забыли пароль?")], -1 /* HOISTED */);
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0, vue_1.resolveComponent)("router-link");
  return (0, vue_1.openBlock)(), (0, vue_1.createElementBlock)("section", _hoisted_1, [(0, vue_1.createElementVNode)("div", _hoisted_2, [(0, vue_1.createElementVNode)("div", _hoisted_3, [(0, vue_1.createElementVNode)("div", _hoisted_4, [(0, vue_1.createElementVNode)("div", _hoisted_5, [(0, vue_1.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0, vue_1.createElementVNode)("p", null, [(0, vue_1.createTextVNode)("Нет аккаунта? "), (0, vue_1.createVNode)(_component_router_link, {
    to: "/register"
  }, {
    "default": (0, vue_1.withCtx)(function () {
      return [(0, vue_1.createTextVNode)("Зарегистрироваться")];
    }),
    _: 1 /* STABLE */
  })])]), (0, vue_1.createElementVNode)("form", _hoisted_8, [(0, vue_1.createElementVNode)("div", _hoisted_9, [(0, vue_1.withDirectives)((0, vue_1.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.auth.form.email = $event;
    }),
    type: "text",
    "class": (0, vue_1.normalizeClass)([_ctx.auth.errors.email ? 'error-input' : '', "form-control"]),
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.auth.errors.email = null;
    }),
    placeholder: "Ваш емайл"
  }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue_1.vModelText, _ctx.auth.form.email]]), ((0, vue_1.openBlock)(true), (0, vue_1.createElementBlock)(vue_1.Fragment, null, (0, vue_1.renderList)(_ctx.auth.errors.email, function (error, index) {
    return (0, vue_1.openBlock)(), (0, vue_1.createElementBlock)("span", {
      "class": "error",
      key: index
    }, (0, vue_1.toDisplayString)(error) + " ", 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), (0, vue_1.createElementVNode)("div", _hoisted_10, [(0, vue_1.createElementVNode)("div", _hoisted_11, [(0, vue_1.createElementVNode)("i", {
    "class": (0, vue_1.normalizeClass)(!_ctx.auth.passwordVisible ? 'flaticon-hidden' : 'flaticon-visibility'),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.auth.passwordVisible = !_ctx.auth.passwordVisible;
    })
  }, null, 2 /* CLASS */)]), (0, vue_1.withDirectives)((0, vue_1.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.auth.form.password = $event;
    }),
    type: _ctx.auth.passwordVisible ? 'text' : 'password',
    "class": (0, vue_1.normalizeClass)([_ctx.auth.errors.password ? 'error-input' : '', "form-control"]),
    onInput: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.auth.errors.password = null;
    }),
    id: "password-field",
    placeholder: "Пароль"
  }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_12), [[vue_1.vModelDynamic, _ctx.auth.form.password]]), ((0, vue_1.openBlock)(true), (0, vue_1.createElementBlock)(vue_1.Fragment, null, (0, vue_1.renderList)(_ctx.auth.errors.password, function (error, index) {
    return (0, vue_1.openBlock)(), (0, vue_1.createElementBlock)("span", {
      "class": "error",
      key: index
    }, (0, vue_1.toDisplayString)(error) + " ", 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_13, (0, vue_1.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = (0, vue_1.withModifiers)(
    //@ts-ignore
    function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return $options.sendForm && $options.sendForm.apply($options, args);
    }, ["prevent"])),
    type: "submit",
    "class": "style2"
  }, "Войти")])])])])])]);
}
exports.render = render;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-control[data-v-03554d37] {\n  cursor: text;\n}\n.form-control[data-v-03554d37] {\n  height: 50px !important;\n  cursor: text;\n  font-size: 16px !important;\n  background-color: #e5e5e5 !important;\n}\n.style2[data-v-03554d37] {\n  border-radius: 5px;\n  font-size: 16px !important;\n  background-color: #e5e5e5;\n  height: 50px;\n}\n.style2[data-v-03554d37]:hover {\n  background-color: #cdcdcd;\n}\n.style2[data-v-03554d37]:active {\n  background-color: #a8a8a8;\n}\n.error[data-v-03554d37] {\n  color: red;\n  font-size: 13px;\n}\n.error-input[data-v-03554d37] {\n  box-shadow: 0 0 5px red;\n}\n", ""]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_21_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_style_index_0_id_03554d37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_21_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_style_index_0_id_03554d37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_21_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_style_index_0_id_03554d37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/vue/components/auth/Auth.vue":
/*!************************************************!*\
  !*** ./resources/vue/components/auth/Auth.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.__esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth_vue_vue_type_template_id_03554d37_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true */ "./resources/vue/components/auth/Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true");
/* harmony import */ var _Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth.vue?vue&type=script&lang=ts */ "./resources/vue/components/auth/Auth.vue?vue&type=script&lang=ts");
/* harmony import */ var _Auth_vue_vue_type_style_index_0_id_03554d37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css */ "./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css");
/* harmony import */ var _opt_homebrew_var_www_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_opt_homebrew_var_www_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Auth_vue_vue_type_template_id_03554d37_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-03554d37"],['__file',"resources/vue/components/auth/Auth.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/auth/Auth.vue?vue&type=script&lang=ts":
/*!************************************************************************!*\
  !*** ./resources/vue/components/auth/Auth.vue?vue&type=script&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_34_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_34_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_34_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-34!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./Auth.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-34!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/vue/components/auth/Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true":
/*!**************************************************************************************************!*\
  !*** ./resources/vue/components/auth/Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_34_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_template_id_03554d37_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_34_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_template_id_03554d37_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_34_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_template_id_03554d37_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-34!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-34!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=template&id=03554d37&scoped=true&ts=true");


/***/ }),

/***/ "./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_21_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_28_use_0_Auth_vue_vue_type_style_index_0_id_03554d37_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-21.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[28].use[0]!./resources/vue/components/auth/Auth.vue?vue&type=style&index=0&id=03554d37&scoped=true&lang=css");


/***/ })

}]);