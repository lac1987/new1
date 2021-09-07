webpackHotUpdate_N_E("pages/recipes/[slug]",{

/***/ "./pages/recipes/[slug].js":
/*!*********************************!*\
  !*** ./pages/recipes/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeDetails; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\next-item-listing\\pages\\recipes\\[slug].js";


var __N_SSG = true;
function RecipeDetails(_ref) {
  var _this = this;

  var recipe = _ref.recipe;
  var _recipe$fields = recipe.fields,
      featuredImage = _recipe$fields.featuredImage,
      title = _recipe$fields.title,
      cookingTime = _recipe$fields.cookingTime,
      ingredients = _recipe$fields.ingredients,
      method = _recipe$fields.method;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "banner",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: 'https:' + featuredImage.fields.file.url,
        width: featuredImage.fields.file.details.image.width,
        height: featuredImage.fields.file.details.image.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["take about ", cookingTime, " minutes to cook"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Ingredients:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), ingredients.map(function (ing) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [" ", ing, " "]
        }, ing, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "method",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Method:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [" ", doc, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
_c = RecipeDetails;

var _c;

$RefreshReg$(_c, "RecipeDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInJlY2lwZSIsImZpZWxkcyIsImZlYXR1cmVkSW1hZ2UiLCJ0aXRsZSIsImNvb2tpbmdUaW1lIiwiaW5ncmVkaWVudHMiLCJtZXRob2QiLCJmaWxlIiwidXJsIiwiZGV0YWlscyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJpbmciLCJkb2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBa0NlLFNBQVNBLGFBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFUQyxNQUFTLFFBQVRBLE1BQVM7QUFBQSx1QkFDbUJBLE1BQU0sQ0FBQ0MsTUFEMUI7QUFBQSxNQUN2Q0MsYUFEdUMsa0JBQ3ZDQSxhQUR1QztBQUFBLE1BQ3hCQyxLQUR3QixrQkFDeEJBLEtBRHdCO0FBQUEsTUFDakJDLFdBRGlCLGtCQUNqQkEsV0FEaUI7QUFBQSxNQUNKQyxXQURJLGtCQUNKQSxXQURJO0FBQUEsTUFDU0MsTUFEVCxrQkFDU0EsTUFEVDtBQUU5QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDQSxxRUFBQyxpREFBRDtBQUNBLFdBQUcsRUFBRSxXQUFXSixhQUFhLENBQUNELE1BQWQsQ0FBcUJNLElBQXJCLENBQTBCQyxHQUQxQztBQUVBLGFBQUssRUFBRU4sYUFBYSxDQUFDRCxNQUFkLENBQXFCTSxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDQyxLQUYvQztBQUdBLGNBQU0sRUFBRVQsYUFBYSxDQUFDRCxNQUFkLENBQXFCTSxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDRTtBQUhoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFNQTtBQUFBLGtCQUFLVDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFBLGtDQUFlQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUlHQyxXQUFXLENBQUNRLEdBQVosQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLDRCQUNsQjtBQUFBLDBCQUFrQkEsR0FBbEI7QUFBQSxXQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtCO0FBQUEsT0FBbkIsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQW1CRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsd0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEO0tBNUJ1QmhCLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy9bc2x1Z10uNGJjMGMwYzQzNzJkNTVmMmM0ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ2NvbnRlbnRmdWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IGRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMgfSBmcm9tICdAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXInXG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5UX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVF9BQ0NFU1NfS0VZLFxufSlcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiAncmVjaXBlJ1xuICB9KVxuXG4gIGNvbnN0IHBhdGhzID0gcmVzLml0ZW1zLm1hcChpdGVtID0+e1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtzbHVnOiBpdGVtLmZpZWxkcy5zbHVnfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuICAgY29uc3Qge2l0ZW1zfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgY29udGVudF90eXBlOiAncmVjaXBlJyxcbiAgICAgJ2ZpZWxkcy5zbHVnJzogcGFyYW1zLnNsdWdcbiAgIH0pXG4gICByZXR1cm4ge1xuICAgICBwcm9wczoge3JlY2lwZTogaXRlbXNbMF19XG4gICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVEZXRhaWxzKHtyZWNpcGV9KSB7XG4gIGNvbnN0IHtmZWF0dXJlZEltYWdlLCB0aXRsZSwgY29va2luZ1RpbWUsIGluZ3JlZGllbnRzLCBtZXRob2R9ID0gcmVjaXBlLmZpZWxkc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgPEltYWdlIFxuICAgICAgc3JjPXsnaHR0cHM6JyArIGZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgd2lkdGg9e2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS53aWR0aH1cbiAgICAgIGhlaWdodD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cbiAgICAgIC8+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgIDxwPnRha2UgYWJvdXQge2Nvb2tpbmdUaW1lfSBtaW51dGVzIHRvIGNvb2s8L3A+XG4gICAgICAgIDxoMz5JbmdyZWRpZW50czo8L2gzPlxuXG4gICAgICAgIHtpbmdyZWRpZW50cy5tYXAoaW5nID0+KFxuICAgICAgICAgIDxzcGFuIGtleT17aW5nfT4ge2luZ30gPC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0aG9kXCI+XG4gICAgICAgIDxoMz5NZXRob2Q6PC9oMz5cbiAgICAgICAgPGRpdj4ge2RvY30gPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=