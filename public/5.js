(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product_service */ "./resources/js/services/product_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: 'product',
  data: function data() {
    return {
      categories: [],
      products: [],
      productData: {
        category_id: '',
        name: '',
        image: ''
      },
      moreExists: false,
      nextPage: 0,
      editProductData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadCategories();
    this.loadProducts();
  },
  methods: {
    loadCategories: function loadCategories() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadCategories$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_product_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]());

            case 3:
              response = _context.sent;
              this.categories = response.data;
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              this.flashMessage.error({
                message: 'Some error occurred, Please refresh!',
                time: 5000
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 7]]);
    },
    loadProducts: function loadProducts() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadProducts$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_product_service__WEBPACK_IMPORTED_MODULE_1__["loadProducts"]());

            case 3:
              response = _context2.sent;
              this.products = response.data.data;

              if (response.data.current_page < response.data.last_page) {
                this.moreExists = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.moreExists = false;
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              this.flashMessage.error({
                message: 'Some error occurred, Please refresh!',
                time: 5000
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 8]]);
    },
    attachImage: function attachImage() {
      this.productData.image = this.$refs.newProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newProductImageDispaly.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.productData.image);
    },
    hideNewProductModal: function hideNewProductModal() {
      this.$refs.newProductModal.hide();
    },
    showNewProductModal: function showNewProductModal() {
      this.$refs.newProductModal.show();
    },
    createProduct: function createProduct() {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createProduct$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              formData = new FormData();
              formData.append('category_id', this.productData.category_id);
              formData.append('name', this.productData.name);
              formData.append('image', this.productData.image);
              _context3.prev = 4;
              _context3.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_product_service__WEBPACK_IMPORTED_MODULE_1__["createProduct"](formData));

            case 7:
              response = _context3.sent;
              this.products.unshift(response.data);
              this.hideNewProductModal();
              this.flashMessage.success({
                message: 'Product stored successfully!',
                time: 5000
              });
              this.productData = {
                category_id: '',
                name: '',
                image: ''
              };
              _context3.next = 23;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](4);
              _context3.t1 = _context3.t0.response.status;
              _context3.next = _context3.t1 === 422 ? 19 : 21;
              break;

            case 19:
              this.errors = _context3.t0.response.data.errors;
              return _context3.abrupt("break", 23);

            case 21:
              this.flashMessage.error({
                message: 'Some error occurred, Please try again!',
                time: 5000
              });
              return _context3.abrupt("break", 23);

            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[4, 14]]);
    },
    deleteProduct: function deleteProduct(product) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteProduct$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (window.confirm("Are you sure you want to delete ".concat(product.name))) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              _context4.prev = 2;
              _context4.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_product_service__WEBPACK_IMPORTED_MODULE_1__["deleteProduct"](product.id));

            case 5:
              this.products = this.products.filter(function (obj) {
                return obj.id != product.id;
              });
              this.flashMessage.success({
                message: 'Product deleted successfully!',
                time: 5000
              });
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](2);
              this.flashMessage.error({
                message: _context4.t0.response.data.message,
                time: 5000
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[2, 9]]);
    },
    hideEditProductModal: function hideEditProductModal() {
      this.$refs.editProductModal.hide();
    },
    showEditProductModal: function showEditProductModal() {
      this.$refs.editProductModal.show();
    },
    editProduct: function editProduct(product) {
      this.editProductData = _objectSpread({}, product);
      this.showEditProductModal();
    },
    editAttachImage: function editAttachImage() {
      this.editProductData.image = this.$refs.editProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editProductImageDispaly.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editProductData.image);
    },
    updateProduct: function updateProduct() {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateProduct$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              formData = new FormData();
              formData.append('category_id', this.editProductData.category_id);
              formData.append('name', this.editProductData.name);
              formData.append('image', this.editProductData.image);
              formData.append('_method', 'put');
              _context5.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_product_service__WEBPACK_IMPORTED_MODULE_1__["updateProduct"](this.editProductData.id, formData));

            case 8:
              response = _context5.sent;
              this.products.map(function (product) {
                if (product.id == response.data.id) {
                  for (var key in response.data) {
                    product[key] = response.data[key];
                  }
                }
              });
              this.hideEditProductModal();
              this.flashMessage.success({
                message: 'Product updated successfully!',
                time: 5000
              });
              _context5.next = 17;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              this.flashMessage.error({
                message: _context5.t0.response.data.message,
                time: 5000
              });

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, [[0, 14]]);
    },
    loadMore: function loadMore() {
      var _this = this;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadMore$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_product_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage));

            case 3:
              response = _context6.sent;

              if (response.data.current_page < response.data.last_page) {
                this.moreExists = true;
                this.nextPage = response.data.current_page + 1;
              } else {
                this.moreExists = false;
              }

              response.data.data.forEach(function (data) {
                _this.products.push(data);
              });
              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              this.flashMessage.error({
                message: 'Some error occurred during loading more products',
                time: 5000
              });

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, [[0, 8]]);
    },
    findCategory: function findCategory(category_id) {
      var category_name = '';
      this.categories.forEach(function (category) {
        if (category.id == category_id) {
          category_name = category.name;
        }
      });
      return category_name;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container-fluid" },
    [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: "/home" } }, [_vm._v("Dashboard")])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v("Products")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header d-flex" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm ml-auto",
              on: { click: _vm.showNewProductModal }
            },
            [_c("span", { staticClass: "fa fa-plus" }), _vm._v(" Create New")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("table", { staticClass: "table" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(product, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(_vm.findCategory(product.category_id)))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.name))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticClass: "table-image",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          product.image,
                        alt: product.name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.editProduct(product)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-edit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.deleteProduct(product)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-trash" })]
                    )
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.moreExists,
                  expression: "moreExists"
                }
              ],
              staticClass: "text-center"
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { type: "button" },
                  on: { click: _vm.loadMore }
                },
                [
                  _c("span", { staticClass: "fa fa-arrow-down" }),
                  _vm._v(" Load More")
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newProductModal",
          attrs: { "hide-footer": "", title: "Add New Product" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createProduct($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "category_id" } }, [
                    _vm._v("Category")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productData.category_id,
                          expression: "productData.category_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "category_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.productData,
                            "category_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Choose Category")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: category.id } },
                          [_vm._v(_vm._s(category.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.category_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.category_id[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Enter Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData.name,
                        expression: "productData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter product name"
                    },
                    domProps: { value: _vm.productData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.productData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Choose an image")
                  ]),
                  _vm._v(" "),
                  _vm.productData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newProductImageDispaly",
                          staticClass: "w-150px",
                          attrs: { src: "" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newProductImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewProductModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Save")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editProductModal",
          attrs: { "hide-footer": "", title: "Update Product" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateProduct($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "category_id" } }, [
                    _vm._v("Category")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editProductData.category_id,
                          expression: "editProductData.category_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "category_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.editProductData,
                            "category_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Choose Category")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: category.id } },
                          [_vm._v(_vm._s(category.name))]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.errors.category_id
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.category_id[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Enter Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editProductData.name,
                        expression: "editProductData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter product name"
                    },
                    domProps: { value: _vm.editProductData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editProductData,
                          "name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Choose an image")
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      ref: "editProductImageDispaly",
                      staticClass: "w-150px",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editProductData.image
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editProductImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.editAttachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditProductModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Update")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v("\n                Products Management\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Category")]),
        _vm._v(" "),
        _c("td", [_vm._v("Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Image")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/product_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/product_service.js ***!
  \**************************************************/
/*! exports provided: createProduct, loadCategories, loadProducts, deleteProduct, updateProduct, loadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProduct", function() { return createProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createProduct(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/products', data);
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-categories');
}
function loadProducts() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/products');
}
function deleteProduct(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("products/".concat(id));
}
function updateProduct(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("products/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("products?page=".concat(nextPage));
}

/***/ }),

/***/ "./resources/js/views/Products.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Products.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=eec6f8fa& */ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=eec6f8fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);