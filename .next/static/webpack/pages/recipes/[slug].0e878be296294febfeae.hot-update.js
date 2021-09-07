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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__);

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
    className: "jsx-770384549",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-770384549" + " " + "banner",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: 'https:' + featuredImage.fields.file.url,
        width: featuredImage.fields.file.details.image.width,
        height: featuredImage.fields.file.details.image.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "jsx-770384549",
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
      className: "jsx-770384549" + " " + "info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "jsx-770384549",
        children: ["take about ", cookingTime, " minutes to cook"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-770384549",
        children: "Ingredients:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), ingredients.map(function (ing) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "jsx-770384549",
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
      className: "jsx-770384549" + " " + "method",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-770384549",
        children: "Method:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-770384549",
        children: [" ", Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__["documentToReactComponents"])(method), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "770384549",
      children: "h2.jsx-770384549,h3.jsx-770384549{text-transform:uppercase;}.banner.jsx-770384549 h2.jsx-770384549{margin:0;background:#fff;display:inline-block;padding:20px;position:relative;top:-60px;left:-10px;-webkit-transform:rotateZ(-1deg);-ms-transform:rotateZ(-1deg);transform:rotateZ(-1deg);box-shadow:1px 3px 5px rgba(0,0,0,0.1);}.info.jsx-770384549 p.jsx-770384549{margin:0;}.info.jsx-770384549 span.jsx-770384549::after{content:\", \";}.info.jsx-770384549 span.jsx-770384549:last-child.jsx-770384549::after{content:\".\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxuZXh0LWl0ZW0tbGlzdGluZ1xccGFnZXNcXHJlY2lwZXNcXFtzbHVnXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBR29DLEFBR2hCLEFBV0EsQUFHSSxBQUdELFNBaEJJLEFBV2xCLEdBTUEsQ0FIQSxZQWpCQSxBQUl1QixxQkFDUixhQUNLLGtCQUNSLFVBQ0MsV0FDYyx1RkFDYyx1Q0FDekMiLCJmaWxlIjoiRTpcXG5leHQtaXRlbS1saXN0aW5nXFxwYWdlc1xccmVjaXBlc1xcW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnY29udGVudGZ1bCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlcidcblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52LkNPTlRFTlRfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5UX0FDQ0VTU19LRVksXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6ICdyZWNpcGUnXG4gIH0pXG5cbiAgY29uc3QgcGF0aHMgPSByZXMuaXRlbXMubWFwKGl0ZW0gPT57XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge3NsdWc6IGl0ZW0uZmllbGRzLnNsdWd9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XG4gICBjb25zdCB7aXRlbXN9ID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICBjb250ZW50X3R5cGU6ICdyZWNpcGUnLFxuICAgICAnZmllbGRzLnNsdWcnOiBwYXJhbXMuc2x1Z1xuICAgfSlcbiAgIHJldHVybiB7XG4gICAgIHByb3BzOiB7cmVjaXBlOiBpdGVtc1swXX1cbiAgIH0gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZURldGFpbHMoe3JlY2lwZX0pIHtcbiAgY29uc3Qge2ZlYXR1cmVkSW1hZ2UsIHRpdGxlLCBjb29raW5nVGltZSwgaW5ncmVkaWVudHMsIG1ldGhvZH0gPSByZWNpcGUuZmllbGRzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICA8SW1hZ2UgXG4gICAgICBzcmM9eydodHRwczonICsgZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICB3aWR0aD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuICAgICAgaGVpZ2h0PXtmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2UuaGVpZ2h0fVxuICAgICAgLz5cbiAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgPHA+dGFrZSBhYm91dCB7Y29va2luZ1RpbWV9IG1pbnV0ZXMgdG8gY29vazwvcD5cbiAgICAgICAgPGgzPkluZ3JlZGllbnRzOjwvaDM+XG5cbiAgICAgICAge2luZ3JlZGllbnRzLm1hcChpbmcgPT4oXG4gICAgICAgICAgPHNwYW4ga2V5PXtpbmd9PiB7aW5nfSA8L3NwYW4+XG4gICAgICAgICkpfVxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRob2RcIj5cbiAgICAgICAgPGgzPk1ldGhvZDo8L2gzPlxuICAgICAgICA8ZGl2PiB7ZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyhtZXRob2QpfSA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgyLGgzIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXIgaDIge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC02MHB4O1xuICAgICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMWRlZyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyBzcGFuOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCIsIFwiO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHNwYW46bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiLlwiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=E:\\\\next-item-listing\\\\pages\\\\recipes\\\\[slug].js */"
    }, void 0, false, void 0, this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInJlY2lwZSIsImZpZWxkcyIsImZlYXR1cmVkSW1hZ2UiLCJ0aXRsZSIsImNvb2tpbmdUaW1lIiwiaW5ncmVkaWVudHMiLCJtZXRob2QiLCJmaWxlIiwidXJsIiwiZGV0YWlscyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJpbmciLCJkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQWtDZSxTQUFTQSxhQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTO0FBQUEsdUJBQ21CQSxNQUFNLENBQUNDLE1BRDFCO0FBQUEsTUFDdkNDLGFBRHVDLGtCQUN2Q0EsYUFEdUM7QUFBQSxNQUN4QkMsS0FEd0Isa0JBQ3hCQSxLQUR3QjtBQUFBLE1BQ2pCQyxXQURpQixrQkFDakJBLFdBRGlCO0FBQUEsTUFDSkMsV0FESSxrQkFDSkEsV0FESTtBQUFBLE1BQ1NDLE1BRFQsa0JBQ1NBLE1BRFQ7QUFFOUMsc0JBQ0U7QUFBQTtBQUFBLDRCQUNFO0FBQUEseUNBQWUsUUFBZjtBQUFBLDhCQUNBLHFFQUFDLGlEQUFEO0FBQ0EsV0FBRyxFQUFFLFdBQVdKLGFBQWEsQ0FBQ0QsTUFBZCxDQUFxQk0sSUFBckIsQ0FBMEJDLEdBRDFDO0FBRUEsYUFBSyxFQUFFTixhQUFhLENBQUNELE1BQWQsQ0FBcUJNLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NDLEtBRi9DO0FBR0EsY0FBTSxFQUFFVCxhQUFhLENBQUNELE1BQWQsQ0FBcUJNLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NFO0FBSGhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQU1BO0FBQUE7QUFBQSxrQkFBS1Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRTtBQUFBLHlDQUFlLE1BQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUEsa0NBQWVDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFJR0MsV0FBVyxDQUFDUSxHQUFaLENBQWdCLFVBQUFDLEdBQUc7QUFBQSw0QkFDbEI7QUFBQTtBQUFBLDBCQUFrQkEsR0FBbEI7QUFBQSxXQUFXQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtCO0FBQUEsT0FBbkIsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQW1CRTtBQUFBLHlDQUFlLFFBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUEsd0JBQU9DLHNHQUF5QixDQUFDVCxNQUFELENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFERDtLQXZEdUJQLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy9bc2x1Z10uMGU4NzhiZTI5NjI5NGZlYmZlYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ2NvbnRlbnRmdWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IGRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMgfSBmcm9tICdAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXInXG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5UX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVF9BQ0NFU1NfS0VZLFxufSlcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiAncmVjaXBlJ1xuICB9KVxuXG4gIGNvbnN0IHBhdGhzID0gcmVzLml0ZW1zLm1hcChpdGVtID0+e1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtzbHVnOiBpdGVtLmZpZWxkcy5zbHVnfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuICAgY29uc3Qge2l0ZW1zfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgY29udGVudF90eXBlOiAncmVjaXBlJyxcbiAgICAgJ2ZpZWxkcy5zbHVnJzogcGFyYW1zLnNsdWdcbiAgIH0pXG4gICByZXR1cm4ge1xuICAgICBwcm9wczoge3JlY2lwZTogaXRlbXNbMF19XG4gICB9IFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVEZXRhaWxzKHtyZWNpcGV9KSB7XG4gIGNvbnN0IHtmZWF0dXJlZEltYWdlLCB0aXRsZSwgY29va2luZ1RpbWUsIGluZ3JlZGllbnRzLCBtZXRob2R9ID0gcmVjaXBlLmZpZWxkc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgPEltYWdlIFxuICAgICAgc3JjPXsnaHR0cHM6JyArIGZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgd2lkdGg9e2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS53aWR0aH1cbiAgICAgIGhlaWdodD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cbiAgICAgIC8+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgIDxwPnRha2UgYWJvdXQge2Nvb2tpbmdUaW1lfSBtaW51dGVzIHRvIGNvb2s8L3A+XG4gICAgICAgIDxoMz5JbmdyZWRpZW50czo8L2gzPlxuXG4gICAgICAgIHtpbmdyZWRpZW50cy5tYXAoaW5nID0+KFxuICAgICAgICAgIDxzcGFuIGtleT17aW5nfT4ge2luZ30gPC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0aG9kXCI+XG4gICAgICAgIDxoMz5NZXRob2Q6PC9oMz5cbiAgICAgICAgPGRpdj4ge2RvY3VtZW50VG9SZWFjdENvbXBvbmVudHMobWV0aG9kKX0gPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMixoMyB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyIGgyIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNjBweDtcbiAgICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTFkZWcpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8gc3Bhbjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiLCBcIjtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyBzcGFuOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIi5cIjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9