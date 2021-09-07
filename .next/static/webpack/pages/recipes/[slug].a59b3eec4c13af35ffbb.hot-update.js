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
        children: [" ", d, " "]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInJlY2lwZSIsImZpZWxkcyIsImZlYXR1cmVkSW1hZ2UiLCJ0aXRsZSIsImNvb2tpbmdUaW1lIiwiaW5ncmVkaWVudHMiLCJtZXRob2QiLCJmaWxlIiwidXJsIiwiZGV0YWlscyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJpbmciLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQWtDZSxTQUFTQSxhQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTO0FBQUEsdUJBQ21CQSxNQUFNLENBQUNDLE1BRDFCO0FBQUEsTUFDdkNDLGFBRHVDLGtCQUN2Q0EsYUFEdUM7QUFBQSxNQUN4QkMsS0FEd0Isa0JBQ3hCQSxLQUR3QjtBQUFBLE1BQ2pCQyxXQURpQixrQkFDakJBLFdBRGlCO0FBQUEsTUFDSkMsV0FESSxrQkFDSkEsV0FESTtBQUFBLE1BQ1NDLE1BRFQsa0JBQ1NBLE1BRFQ7QUFFOUMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0EscUVBQUMsaURBQUQ7QUFDQSxXQUFHLEVBQUUsV0FBV0osYUFBYSxDQUFDRCxNQUFkLENBQXFCTSxJQUFyQixDQUEwQkMsR0FEMUM7QUFFQSxhQUFLLEVBQUVOLGFBQWEsQ0FBQ0QsTUFBZCxDQUFxQk0sSUFBckIsQ0FBMEJFLE9BQTFCLENBQWtDQyxLQUFsQyxDQUF3Q0MsS0FGL0M7QUFHQSxjQUFNLEVBQUVULGFBQWEsQ0FBQ0QsTUFBZCxDQUFxQk0sSUFBckIsQ0FBMEJFLE9BQTFCLENBQWtDQyxLQUFsQyxDQUF3Q0U7QUFIaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBTUE7QUFBQSxrQkFBS1Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBQSxrQ0FBZUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFJR0MsV0FBVyxDQUFDUSxHQUFaLENBQWdCLFVBQUFDLEdBQUc7QUFBQSw0QkFDbEI7QUFBQSwwQkFBa0JBLEdBQWxCO0FBQUEsV0FBV0EsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURrQjtBQUFBLE9BQW5CLENBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFtQkU7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLHdCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDtLQTVCdUJoQixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZXMvW3NsdWddLmE1OWIzZWVjNGMxM2FmMzVmZmJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdjb250ZW50ZnVsJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJ1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBzcGFjZTogcHJvY2Vzcy5lbnYuQ09OVEVOVF9TUEFDRV9JRCxcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTlRfQUNDRVNTX0tFWSxcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogJ3JlY2lwZSdcbiAgfSlcblxuICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoaXRlbSA9PntcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7c2x1ZzogaXRlbS5maWVsZHMuc2x1Z31cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcbiAgIGNvbnN0IHtpdGVtc30gPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgIGNvbnRlbnRfdHlwZTogJ3JlY2lwZScsXG4gICAgICdmaWVsZHMuc2x1Zyc6IHBhcmFtcy5zbHVnXG4gICB9KVxuICAgcmV0dXJuIHtcbiAgICAgcHJvcHM6IHtyZWNpcGU6IGl0ZW1zWzBdfVxuICAgfSBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlRGV0YWlscyh7cmVjaXBlfSkge1xuICBjb25zdCB7ZmVhdHVyZWRJbWFnZSwgdGl0bGUsIGNvb2tpbmdUaW1lLCBpbmdyZWRpZW50cywgbWV0aG9kfSA9IHJlY2lwZS5maWVsZHNcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cbiAgICAgIDxJbWFnZSBcbiAgICAgIHNyYz17J2h0dHBzOicgKyBmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgIHdpZHRoPXtmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2Uud2lkdGh9XG4gICAgICBoZWlnaHQ9e2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS5oZWlnaHR9XG4gICAgICAvPlxuICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICA8cD50YWtlIGFib3V0IHtjb29raW5nVGltZX0gbWludXRlcyB0byBjb29rPC9wPlxuICAgICAgICA8aDM+SW5ncmVkaWVudHM6PC9oMz5cblxuICAgICAgICB7aW5ncmVkaWVudHMubWFwKGluZyA9PihcbiAgICAgICAgICA8c3BhbiBrZXk9e2luZ30+IHtpbmd9IDwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGhvZFwiPlxuICAgICAgICA8aDM+TWV0aG9kOjwvaDM+XG4gICAgICAgIDxkaXY+IHtkfSA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==