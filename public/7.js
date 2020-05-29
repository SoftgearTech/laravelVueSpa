(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");

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
  name: 'Register',
  created: function created() {
    document.querySelector('body').style.backgroundColor = '#343a40';
  },
  data: function data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },
  methods: {
    register: function register() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["register"](this.user));

            case 3:
              this.error = {};
              this.$router.push('/login');
              _context.next = 18;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _context.t1 = _context.t0.response.status;
              _context.next = _context.t1 === 422 ? 12 : _context.t1 === 500 ? 14 : 16;
              break;

            case 12:
              this.errors = _context.t0.response.data.errors;
              return _context.abrupt("break", 18);

            case 14:
              this.flashMessage.error({
                message: _context.t0.response.data.message,
                time: 5000
              });
              return _context.abrupt("break", 18);

            case 16:
              this.flashMessage.error({
                message: 'Some error occurred, Please try again!',
                time: 5000
              });
              return _context.abrupt("break", 18);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card card-register mx-auto mt-5" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("Register an Account")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.register($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group mb-0" }, [
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-label-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.name,
                          expression: "user.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: "Enter Full Name",
                        autofocus: "autofocus"
                      },
                      domProps: { value: _vm.user.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Enter Full Name")
                    ]),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "form-label-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          id: "email",
                          placeholder: "Email address"
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Email address")
                      ]),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(_vm._s(_vm.errors.email[0]))
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-label-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.password,
                          expression: "user.password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password",
                        placeholder: "Password"
                      },
                      domProps: { value: _vm.user.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "password", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "password" } }, [
                      _vm._v("Password")
                    ]),
                    _vm._v(" "),
                    _vm.errors.password
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.password[0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-label-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.password_confirmation,
                          expression: "user.password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password_confirmation",
                        placeholder: "Confirm password"
                      },
                      domProps: { value: _vm.user.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.user,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "password_confirmation" } }, [
                      _vm._v("Confirm password")
                    ]),
                    _vm._v(" "),
                    _vm.errors.password_confirmation
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.password_confirmation[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-block",
                attrs: { type: "submit" }
              },
              [_vm._v("Register")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center" },
          [
            _c(
              "router-link",
              { staticClass: "d-block small mt-3", attrs: { to: "/login" } },
              [_vm._v("Login Page")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "d-block small",
                attrs: { to: "/reset-password" }
              },
              [_vm._v("Forgot Password?")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/authentication/Register.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=4aa4e5cb& */ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=4aa4e5cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);