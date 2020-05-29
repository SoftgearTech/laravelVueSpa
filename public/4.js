(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    document.querySelector('body').style.backgroundColor = '#343a40';
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card card-login mx-auto mt-5" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Reset Password")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center" },
          [
            _c(
              "router-link",
              { staticClass: "d-block small mt-3", attrs: { to: "/register" } },
              [_vm._v("Register an Account")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "d-block small", attrs: { to: "/login" } },
              [_vm._v("Login Page")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("h4", [_vm._v("Forgot your password?")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Enter your email address and we will send you instructions on how to reset your password."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "form-label-group" }, [
          _c("input", {
            staticClass: "form-control",
            attrs: {
              type: "email",
              id: "inputEmail",
              placeholder: "Enter email address",
              required: "required",
              autofocus: "autofocus"
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "inputEmail" } }, [
            _vm._v("Enter email address")
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-primary btn-block",
          attrs: { href: "login.html" }
        },
        [_vm._v("Reset Password")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=41ced692& */ "./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=41ced692& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPassword.vue?vue&type=template&id=41ced692&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_41ced692___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);