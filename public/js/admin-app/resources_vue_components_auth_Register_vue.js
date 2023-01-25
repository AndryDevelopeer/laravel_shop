"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_components_auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-28!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-28!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var vuex_1 = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
exports["default"] = {
  name: "Register",
  computed: (0, vuex_1.mapState)(['auth']),
  data: function data() {
    return {
      passwordHide: true,
      confirmHide: true
    };
  },
  methods: {
    clearErrors: function clearErrors(field) {
      this.$store.dispatch('clearErrors', {
        form: 'registration',
        field: field
      });
    },
    sendForm: function sendForm() {
      this.$store.dispatch('registration');
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-28!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-28!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.render = void 0;
var vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var _withScopeId = function _withScopeId(n) {
  return (0, vue_1.pushScopeId)("data-v-6d5d5532"), n = n(), (0, vue_1.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "register-form container-fluid d-flex justify-content-center align-items-center mb-3"
};
var _hoisted_2 = {
  "class": "vm-100"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  /*#__PURE__*/return (0, vue_1.createElementVNode)("h1", {
    "class": "mb-3 text-center"
  }, "Зарегистрироваться", -1 /* HOISTED */);
});
var _hoisted_4 = {
  "class": "text-center mb-2"
};
var _hoisted_5 = {
  "class": "mb-3"
};
var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  /*#__PURE__*/return (0, vue_1.createElementVNode)("label", {
    "for": "inputEmail1",
    "class": "form-label"
  }, "Емайл", -1 /* HOISTED */);
});
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  /*#__PURE__*/return (0, vue_1.createElementVNode)("label", {
    "for": "inputPassword1",
    "class": "form-label"
  }, "Пароль", -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "input-group mb-3"
};
var _hoisted_9 = ["type"];
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  /*#__PURE__*/return (0, vue_1.createElementVNode)("label", {
    "for": "inputConfirm1",
    "class": "form-label"
  }, "Подтверждение пароля", -1 /* HOISTED */);
});
var _hoisted_11 = {
  "class": "input-group mb-3"
};
var _hoisted_12 = ["type"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0, vue_1.resolveComponent)("router-link");
  return (0, vue_1.openBlock)(), (0, vue_1.createElementBlock)("div", _hoisted_1, [(0, vue_1.createElementVNode)("form", _hoisted_2, [_hoisted_3, (0, vue_1.createElementVNode)("div", _hoisted_4, [(0, vue_1.createTextVNode)(" У вас уже есть аккаунт? "), (0, vue_1.createVNode)(_component_router_link, {
    to: "/auth"
  }, {
    "default": (0, vue_1.withCtx)(function () {
      return [(0, vue_1.createTextVNode)("войти")];
    }),
    _: 1 /* STABLE */
  })]), (0, vue_1.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0, vue_1.withDirectives)((0, vue_1.createElementVNode)("input", {
    "class": (0, vue_1.normalizeClass)([_ctx.auth.registration.errors.login ? 'is-invalid' : '', "form-control"]),
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return $options.clearErrors('login');
    }),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.auth.registration.form.login = $event;
    }),
    "aria-describedby": "emailHelp",
    id: "inputEmail1",
    type: "email"
  }, null, 34 /* CLASS, HYDRATE_EVENTS */), [[vue_1.vModelText, _ctx.auth.registration.form.login]]), ((0, vue_1.openBlock)(true), (0, vue_1.createElementBlock)(vue_1.Fragment, null, (0, vue_1.renderList)(_ctx.auth.registration.errors.login, function (error, inx) {
    return (0, vue_1.openBlock)(), (0, vue_1.createElementBlock)("div", {
      key: inx,
      "class": "invalid-feedback"
    }, (0, vue_1.toDisplayString)(error), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_7, (0, vue_1.createElementVNode)("div", _hoisted_8, [(0, vue_1.withDirectives)((0, vue_1.createElementVNode)("input", {
    "class": (0, vue_1.normalizeClass)([_ctx.auth.registration.errors.password ? 'is-invalid' : '', "form-control"]),
    type: $data.passwordHide ? 'password' : 'text',
    onInput: _cache[2] || (_cache[2] = function ($event) {
      return $options.clearErrors('password');
    }),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.auth.registration.form.password = $event;
    }),
    id: "inputPassword1"
  }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_9), [[vue_1.vModelDynamic, _ctx.auth.registration.form.password]]), (0, vue_1.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = (0, vue_1.withModifiers)(function ($event) {
      return $data.passwordHide = !$data.passwordHide;
    }, ["prevent"])),
    "class": "btn btn-outline-secondary",
    type: "button",
    id: "button-addon2"
  }, (0, vue_1.toDisplayString)($data.passwordHide ? 'Показать' : 'Скрыть'), 1 /* TEXT */), ((0, vue_1.openBlock)(true), (0, vue_1.createElementBlock)(vue_1.Fragment, null, (0, vue_1.renderList)(_ctx.auth.registration.errors.password, function (error, inx) {
    return (0, vue_1.openBlock)(), (0, vue_1.createElementBlock)("div", {
      key: inx,
      "class": "invalid-feedback"
    }, (0, vue_1.toDisplayString)(error), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_10, (0, vue_1.createElementVNode)("div", _hoisted_11, [(0, vue_1.withDirectives)((0, vue_1.createElementVNode)("input", {
    "class": (0, vue_1.normalizeClass)([_ctx.auth.registration.errors.confirm ? 'is-invalid' : '', "form-control"]),
    type: $data.confirmHide ? 'password' : 'text',
    onInput: _cache[5] || (_cache[5] = function ($event) {
      return $options.clearErrors('confirm');
    }),
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.auth.registration.form.confirm = $event;
    }),
    id: "inputConfirm1"
  }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_12), [[vue_1.vModelDynamic, _ctx.auth.registration.form.confirm]]), (0, vue_1.createElementVNode)("button", {
    onClick: _cache[7] || (_cache[7] = (0, vue_1.withModifiers)(function ($event) {
      return $data.confirmHide = !$data.confirmHide;
    }, ["prevent"])),
    "class": "btn btn-outline-secondary",
    type: "button",
    id: "button-addon3"
  }, (0, vue_1.toDisplayString)($data.confirmHide ? 'Показать' : 'Скрыть'), 1 /* TEXT */), ((0, vue_1.openBlock)(true), (0, vue_1.createElementBlock)(vue_1.Fragment, null, (0, vue_1.renderList)(_ctx.auth.registration.errors.confirm, function (error, inx) {
    return (0, vue_1.openBlock)(), (0, vue_1.createElementBlock)("div", {
      key: inx,
      "class": "invalid-feedback"
    }, (0, vue_1.toDisplayString)(error), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), (0, vue_1.createElementVNode)("button", {
    onClick: _cache[8] || (_cache[8] = (0, vue_1.withModifiers)(
    //@ts-ignore
    function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return $options.sendForm && $options.sendForm.apply($options, args);
    }, ["prevent"])),
    type: "submit",
    "class": "btn btn-primary"
  }, "Зарегистрироватся")])]);
}
exports.render = render;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-outline-secondary[data-v-6d5d5532]:focus {\n  box-shadow: none;\n}\n.register-form[data-v-6d5d5532] {\n  height: 75vh !important;\n  max-width: 360px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_style_index_0_id_6d5d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_style_index_0_id_6d5d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_style_index_0_id_6d5d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/vue/components/auth/Register.vue":
/*!****************************************************!*\
  !*** ./resources/vue/components/auth/Register.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.__esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_6d5d5532_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true */ "./resources/vue/components/auth/Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true");
/* harmony import */ var _Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=ts */ "./resources/vue/components/auth/Register.vue?vue&type=script&lang=ts");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_6d5d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css */ "./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css");
/* harmony import */ var _opt_homebrew_var_www_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_opt_homebrew_var_www_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_6d5d5532_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6d5d5532"],['__file',"resources/vue/components/auth/Register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/vue/components/auth/Register.vue?vue&type=script&lang=ts":
/*!****************************************************************************!*\
  !*** ./resources/vue/components/auth/Register.vue?vue&type=script&lang=ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_28_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_28_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_28_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-28!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./Register.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-28!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/vue/components/auth/Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true":
/*!******************************************************************************************************!*\
  !*** ./resources/vue/components/auth/Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__esModule": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_28_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_template_id_6d5d5532_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.__esModule),
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_28_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_template_id_6d5d5532_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_28_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_template_id_6d5d5532_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-28!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-28!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=template&id=6d5d5532&scoped=true&ts=true");


/***/ }),

/***/ "./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_22_use_0_Register_vue_vue_type_style_index_0_id_6d5d5532_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[22].use[0]!./resources/vue/components/auth/Register.vue?vue&type=style&index=0&id=6d5d5532&scoped=true&lang=css");


/***/ })

}]);