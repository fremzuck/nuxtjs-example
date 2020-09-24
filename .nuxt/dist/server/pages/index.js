exports.ids = [1];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=234221ef&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"bv-example-row mb-3"},[_c('div',{staticClass:"football"},[_c('b-row',{attrs:{"cols":"4"}},_vm._l((_vm.photos),function(photo){return _c('b-col',{key:photo.id},[_c('b-img',{attrs:{"src":photo.download_url,"fluid":"","alt":photo.author}}),_vm._v(" "),_c('div',{staticClass:"underimg"},[_vm._v(_vm._s(photo.author))])],1)}),1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=234221ef&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Nuxtjs by FREMZUCK'
    };
  },

  async asyncData({
    $axios
  }) {
    const photos = await $axios.$get('https://picsum.photos/v2/list?limit=24');
    return {
      photos
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d4d5bc0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map