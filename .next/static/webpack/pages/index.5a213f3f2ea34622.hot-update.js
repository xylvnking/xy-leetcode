"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js":
/*!*****************************************************************************!*\
  !*** ./pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Convert the given number into a roman numeral.\n// All roman numerals answers should be provided in upper-case.\nfunction convertToRoman(num) {\n    var romanNumerals = [\n        [\n            1000,\n            \"M\"\n        ],\n        [\n            900,\n            \"CM\"\n        ],\n        [\n            500,\n            \"D\"\n        ],\n        [\n            400,\n            \"CD\"\n        ],\n        [\n            100,\n            \"C\"\n        ],\n        [\n            90,\n            \"XC\"\n        ],\n        [\n            50,\n            \"L\"\n        ],\n        [\n            40,\n            \"XL\"\n        ],\n        [\n            10,\n            \"X\"\n        ],\n        [\n            9,\n            \"IX\"\n        ],\n        [\n            5,\n            \"V\"\n        ],\n        [\n            4,\n            \"IV\"\n        ],\n        [\n            1,\n            \"I\"\n        ]\n    ];\n    if (num === 0) {\n        return \"\";\n    }\n    for(var i = 0; i < romanNumerals.length; i++){\n        // if the number is larger than the condition\n        if (num >= romanNumerals[i][0]) {\n            // return the letter and call the function recursively after subtracting the first letter\n            return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0]);\n        }\n    }\n}\nfunction caesarsCipher(stringToDecode) {\n    // SERR PBQR PNZC\n    var req = stringToDecode.toLowerCase();\n    var alphabet = \"abcdefghijklmnopqrstuvwxyz\";\n    var altAlphabet = \"nopqrstuvwxyzabcdefghijklm\";\n    var altKeys = [];\n    var decodedString = [];\n    var keys = [];\n    // create array of alternate alphabet\n    for(var x = 0; x < altAlphabet.length; x++){\n        altKeys.push(altAlphabet.charAt(x));\n    }\n    for(var x1 = 0; x1 < req.length; x1++){\n        var currentChar = req.charAt(x1);\n        var charIndex = alphabet.indexOf(currentChar);\n        if (currentChar === \"!\") {\n            keys.push(-2);\n        } else if (currentChar === \"?\") {\n            keys.push(-3);\n        } else if (currentChar === \".\") {\n            keys.push(-4);\n        } else {\n            keys.push(charIndex);\n        }\n    }\n    for(var x2 = 0; x2 < keys.length; x2++){\n        var currentIndex = keys[x2];\n        if (keys[x2] === -1) {\n            decodedString.push(\" \");\n        } else if (keys[x2] === -2) {\n            decodedString.push(\"!\");\n        } else if (keys[x2] === -3) {\n            decodedString.push(\"?\");\n        } else if (keys[x2] === -4) {\n            decodedString.push(\".\");\n        } else {\n            decodedString.push(altKeys[currentIndex]);\n        }\n    }\n    console.log(decodedString.join(\"\").toUpperCase());\n    return decodedString.join(\"\").toUpperCase();\n}\nfunction telephoneCheck(str) {\n    var regEx = /\\D+/;\n    var toRemove = str.match(regEx);\n    // console.log(toRemove.index)\n    var newish = str.replace(/[^a-z]/g, \"\");\n    console.log(newish);\n// for (let x = 0; x < str.length)\n// for (let x = 0; x < )\n// console.log(regEx.test(str))\n// console.log(check)\n// console.log(str.toString().match(regEx))\n// console.log(toRemove)\n// return \n}\nfunction JavaScriptAlgorithmsAndDataStructuresProjects() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Convert Number To Roman\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 105,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: convertToRoman(777)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 106,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Caesar's Cipher\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 107,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: caesarsCipher(\"SERR PBQR PNZC!!!\")\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 108,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Telephone Check\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 109,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: telephoneCheck(\"777.7-7?7!77\")\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 110,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n        lineNumber: 104,\n        columnNumber: 7\n    }, this);\n}\n_c = JavaScriptAlgorithmsAndDataStructuresProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JavaScriptAlgorithmsAndDataStructuresProjects);\nvar _c;\n$RefreshReg$(_c, \"JavaScriptAlgorithmsAndDataStructuresProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mcmVlQ29kZUNhbXAvSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBeUI7QUFFekIsaURBQWlEO0FBQ2pELCtEQUErRDtBQUUvRCxTQUFTQyxjQUFjLENBQUNDLEdBQUcsRUFBRTtJQUN6QixJQUFNQyxhQUFhLEdBQUc7UUFDbEI7QUFBQyxnQkFBSTtZQUFFLEdBQUc7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLElBQUk7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLEdBQUc7U0FBQztRQUNWO0FBQUMsZUFBRztZQUFFLElBQUk7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLEdBQUc7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLElBQUk7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLEdBQUc7U0FBQztRQUNUO0FBQUMsY0FBRTtZQUFFLElBQUk7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLEdBQUc7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLElBQUk7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLEdBQUc7U0FBQztRQUNSO0FBQUMsYUFBQztZQUFFLElBQUk7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLEdBQUc7U0FBQztLQUNYO0lBQ0QsSUFBSUQsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxJQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsYUFBYSxDQUFDRSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1FBQzNDLDZDQUE2QztRQUM3QyxJQUFJRixHQUFHLElBQUlDLGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMseUZBQXlGO1lBQ3JGLE9BQU9ELGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdILGNBQWMsQ0FBQ0MsR0FB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QThCO0lBQzlCLElBQU1HLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxPQUFPLFlBQVksRUFBRSxDQUFDO0lBRXpDVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDO0FBRW5CLGtDQUFrQztBQUVsQyx3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLHFCQUFxQjtBQUNyQiwyQ0FBMkM7QUFDM0Msd0JBQXdCO0FBQ3hCLFVBQVU7Q0FDYjtBQUVELFNBQVNFLDZDQUE2QyxHQUFHO0lBQ3ZELHFCQUNJLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyx5QkFBdUI7Ozs7O29CQUFLOzBCQUNoQyw4REFBQ0EsSUFBRTswQkFBRWxDLGNBQWMsQ0FBQyxHQUFHLENBQUM7Ozs7O29CQUFNOzBCQUM5Qiw4REFBQ2tDLElBQUU7MEJBQUMsaUJBQWU7Ozs7O29CQUFLOzBCQUN4Qiw4REFBQ0EsSUFBRTswQkFBRTdCLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7b0JBQU07MEJBQzdDLDhEQUFDNkIsSUFBRTswQkFBQyxpQkFBZTs7Ozs7b0JBQUs7MEJBQ3hCLDhEQUFDQSxJQUFFOzBCQUFFVCxjQUFjLENBQUMsY0FBYyxDQUFDOzs7OztvQkFBTTs7Ozs7O1lBQ3ZDLENBQ1Q7Q0FDRjtBQVhRTyxLQUFBQSw2Q0FBNkM7QUFhdEQsK0RBQWVBLDZDQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mcmVlQ29kZUNhbXAvSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzLmpzPzcxZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBDb252ZXJ0IHRoZSBnaXZlbiBudW1iZXIgaW50byBhIHJvbWFuIG51bWVyYWwuXG4vLyBBbGwgcm9tYW4gbnVtZXJhbHMgYW5zd2VycyBzaG91bGQgYmUgcHJvdmlkZWQgaW4gdXBwZXItY2FzZS5cblxuZnVuY3Rpb24gY29udmVydFRvUm9tYW4obnVtKSB7XG4gICAgY29uc3Qgcm9tYW5OdW1lcmFscyA9IFtcbiAgICAgICAgWzEwMDAsICdNJ10sXG4gICAgICAgIFs5MDAsICdDTSddLFxuICAgICAgICBbNTAwLCAnRCddLFxuICAgICAgICBbNDAwLCAnQ0QnXSxcbiAgICAgICAgWzEwMCwgJ0MnXSxcbiAgICAgICAgWzkwLCAnWEMnXSxcbiAgICAgICAgWzUwLCAnTCddLFxuICAgICAgICBbNDAsICdYTCddLFxuICAgICAgICBbMTAsICdYJ10sXG4gICAgICAgIFs5LCAnSVgnXSxcbiAgICAgICAgWzUsICdWJ10sXG4gICAgICAgIFs0LCAnSVYnXSxcbiAgICAgICAgWzEsICdJJ11cbiAgICBdXG4gICAgaWYgKG51bSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9tYW5OdW1lcmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIGlzIGxhcmdlciB0aGFuIHRoZSBjb25kaXRpb25cbiAgICAgICAgaWYgKG51bSA+PSByb21hbk51bWVyYWxzW2ldWzBdKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGUgbGV0dGVyIGFuZCBjYWxsIHRoZSBmdW5jdGlvbiByZWN1cnNpdmVseSBhZnRlciBzdWJ0cmFjdGluZyB0aGUgZmlyc3QgbGV0dGVyXG4gICAgICAgICAgICByZXR1cm4gcm9tYW5OdW1lcmFsc1tpXVsxXSArIGNvbnZlcnRUb1JvbWFuKG51bSAtIHJvbWFuTnVtZXJhbHNbaV1bMF0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhZXNhcnNDaXBoZXIoc3RyaW5nVG9EZWNvZGUpIHtcblxuICAgIC8vIFNFUlIgUEJRUiBQTlpDXG5cbiAgICBjb25zdCByZXEgPSBzdHJpbmdUb0RlY29kZS50b0xvd2VyQ2FzZSgpXG4gICAgXG4gICAgY29uc3QgYWxwaGFiZXQgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCJcbiAgICBjb25zdCBhbHRBbHBoYWJldCA9IFwibm9wcXJzdHV2d3h5emFiY2RlZmdoaWprbG1cIlxuICAgIGxldCBhbHRLZXlzID0gW11cbiAgICBsZXQgZGVjb2RlZFN0cmluZyA9IFtdXG4gICAgbGV0IGtleXMgPSBbXVxuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIGFsdGVybmF0ZSBhbHBoYWJldFxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgYWx0QWxwaGFiZXQubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgYWx0S2V5cy5wdXNoKGFsdEFscGhhYmV0LmNoYXJBdCh4KSlcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCByZXEubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDaGFyID0gcmVxLmNoYXJBdCh4KVxuICAgICAgICBsZXQgY2hhckluZGV4ID0gYWxwaGFiZXQuaW5kZXhPZihjdXJyZW50Q2hhcilcbiAgICAgICAgaWYgKGN1cnJlbnRDaGFyID09PSAnIScpIHsgLy8gbm90IGlkZWFsLCBidXQgd2l0aGluIHNjb3BlXG4gICAgICAgICAgICBrZXlzLnB1c2goLTIpXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENoYXIgPT09ICc/Jykge1xuICAgICAgICAgICAga2V5cy5wdXNoKC0zKVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDaGFyID09PSAnLicpIHtcbiAgICAgICAgICAgIGtleXMucHVzaCgtNClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleXMucHVzaChjaGFySW5kZXgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGtleXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGtleXNbeF1cbiAgICAgICAgaWYgKGtleXNbeF0gPT09IC0xKSB7XG4gICAgICAgICAgICBkZWNvZGVkU3RyaW5nLnB1c2goXCIgXCIpXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1t4XSA9PT0gLTIpIHtcbiAgICAgICAgICAgIGRlY29kZWRTdHJpbmcucHVzaCgnIScpICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1t4XSA9PT0gLTMpIHtcbiAgICAgICAgICAgIGRlY29kZWRTdHJpbmcucHVzaCgnPycpICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1t4XSA9PT0gLTQpIHtcbiAgICAgICAgICAgIGRlY29kZWRTdHJpbmcucHVzaCgnLicpICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNvZGVkU3RyaW5nLnB1c2goYWx0S2V5c1tjdXJyZW50SW5kZXhdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRlY29kZWRTdHJpbmcuam9pbihcIlwiKS50b1VwcGVyQ2FzZSgpKVxuICAgIHJldHVybiBkZWNvZGVkU3RyaW5nLmpvaW4oXCJcIikudG9VcHBlckNhc2UoKVxufVxuXG5mdW5jdGlvbiB0ZWxlcGhvbmVDaGVjayhzdHIpIHtcblxuICAgIGNvbnN0IHJlZ0V4ID0gL1xcRCsvXG4gICAgY29uc3QgdG9SZW1vdmUgPSBzdHIubWF0Y2gocmVnRXgpXG4gICAgLy8gY29uc29sZS5sb2codG9SZW1vdmUuaW5kZXgpXG4gICAgY29uc3QgbmV3aXNoID0gc3RyLnJlcGxhY2UoL1teYS16XS9nLCAnJylcblxuICAgIGNvbnNvbGUubG9nKG5ld2lzaClcblxuICAgIC8vIGZvciAobGV0IHggPSAwOyB4IDwgc3RyLmxlbmd0aClcbiAgICBcbiAgICAvLyBmb3IgKGxldCB4ID0gMDsgeCA8IClcbiAgICAvLyBjb25zb2xlLmxvZyhyZWdFeC50ZXN0KHN0cikpXG4gICAgLy8gY29uc29sZS5sb2coY2hlY2spXG4gICAgLy8gY29uc29sZS5sb2coc3RyLnRvU3RyaW5nKCkubWF0Y2gocmVnRXgpKVxuICAgIC8vIGNvbnNvbGUubG9nKHRvUmVtb3ZlKVxuICAgIC8vIHJldHVybiBcbn1cblxuZnVuY3Rpb24gSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzKCkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+Q29udmVydCBOdW1iZXIgVG8gUm9tYW48L2gxPlxuICAgICAgICAgIDxoMT57Y29udmVydFRvUm9tYW4oNzc3KX08L2gxPlxuICAgICAgICAgIDxoMT5DYWVzYXIncyBDaXBoZXI8L2gxPlxuICAgICAgICAgIDxoMT57Y2Flc2Fyc0NpcGhlcihcIlNFUlIgUEJRUiBQTlpDISEhXCIpfTwvaDE+XG4gICAgICAgICAgPGgxPlRlbGVwaG9uZSBDaGVjazwvaDE+XG4gICAgICAgICAgPGgxPnt0ZWxlcGhvbmVDaGVjaygnNzc3LjctNz83ITc3Jyl9PC9oMT5cbiAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEphdmFTY3JpcHRBbGdvcml0aG1zQW5kRGF0YVN0cnVjdHVyZXNQcm9qZWN0c1xuXG4vLyBjb252ZXJ0VG9Sb21hbigyKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgSUkuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDMpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBJSUkuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDQpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBJVi5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFYuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDkpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBJWC5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMTIpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBYSUkuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDE2KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWFZJLlxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigyOSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFhYSVguXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDQ0KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWExJVi5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNDUpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBYTFYuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDY4KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTFhWSUlJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDgzKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTFhYWElJSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig5Nykgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFhDVklJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDk5KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWENJWFxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig0MDApIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBDRFxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig1MDApIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBEXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDUwMSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIERJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDY0OSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIERDWExJWFxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig3OTgpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBEQ0NYQ1ZJSUlcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oODkxKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgRENDQ1hDSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigxMDAwKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigxMDA0KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTUlWXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDEwMDYpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBNVklcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMTAyMykgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIE1YWElJSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigyMDE0KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTU1YSVZcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMzk5OSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIE1NTUNNWENJWCJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbnZlcnRUb1JvbWFuIiwibnVtIiwicm9tYW5OdW1lcmFscyIsImkiLCJsZW5ndGgiLCJjYWVzYXJzQ2lwaGVyIiwic3RyaW5nVG9EZWNvZGUiLCJyZXEiLCJ0b0xvd2VyQ2FzZSIsImFscGhhYmV0IiwiYWx0QWxwaGFiZXQiLCJhbHRLZXlzIiwiZGVjb2RlZFN0cmluZyIsImtleXMiLCJ4IiwicHVzaCIsImNoYXJBdCIsImN1cnJlbnRDaGFyIiwiY2hhckluZGV4IiwiaW5kZXhPZiIsImN1cnJlbnRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwidG9VcHBlckNhc2UiLCJ0ZWxlcGhvbmVDaGVjayIsInN0ciIsInJlZ0V4IiwidG9SZW1vdmUiLCJtYXRjaCIsIm5ld2lzaCIsInJlcGxhY2UiLCJKYXZhU2NyaXB0QWxnb3JpdGhtc0FuZERhdGFTdHJ1Y3R1cmVzUHJvamVjdHMiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\n"));

/***/ })

});