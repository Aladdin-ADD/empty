/*! f989ee5 */
webpackJsonp([0],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_css__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lazy_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lazy_css__);


/* harmony default export */ __webpack_exports__["default"] = ('Hello from lazy');

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(373)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./lazy.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./lazy.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(372)(undefined);
// imports


// module
exports.push([module.i, "body {\n  color: blue;\n}", ""]);

// exports


/***/ })

});