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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Convert the given number into a roman numeral.\n// All roman numerals answers should be provided in upper-case.\nfunction convertToRoman(num) {\n    var romanNumerals = [\n        [\n            1000,\n            \"M\"\n        ],\n        [\n            900,\n            \"CM\"\n        ],\n        [\n            500,\n            \"D\"\n        ],\n        [\n            400,\n            \"CD\"\n        ],\n        [\n            100,\n            \"C\"\n        ],\n        [\n            90,\n            \"XC\"\n        ],\n        [\n            50,\n            \"L\"\n        ],\n        [\n            40,\n            \"XL\"\n        ],\n        [\n            10,\n            \"X\"\n        ],\n        [\n            9,\n            \"IX\"\n        ],\n        [\n            5,\n            \"V\"\n        ],\n        [\n            4,\n            \"IV\"\n        ],\n        [\n            1,\n            \"I\"\n        ]\n    ];\n    if (num === 0) {\n        return \"\";\n    }\n    for(var i = 0; i < romanNumerals.length; i++){\n        // if the number is larger than the condition\n        if (num >= romanNumerals[i][0]) {\n            // return the letter and call the function recursively after subtracting the first letter\n            return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0]);\n        }\n    }\n}\nfunction caesarsCipher(stringToDecode) {\n    // SERR PBQR PNZC\n    var req = stringToDecode.toLowerCase();\n    var alphabet = \"abcdefghijklmnopqrstuvwxyz\";\n    var altAlphabet = \"nopqrstuvwxyzabcdefghijklm\";\n    var altKeys = [];\n    var decodedString = [];\n    var keys = [];\n    // create array of alternate alphabet\n    for(var x = 0; x < altAlphabet.length; x++){\n        altKeys.push(altAlphabet.charAt(x));\n    }\n    for(var x1 = 0; x1 < req.length; x1++){\n        var currentChar = req.charAt(x1);\n        var charIndex = alphabet.indexOf(currentChar);\n        if (currentChar === \"!\") {\n            keys.push(-2);\n        } else if (currentChar === \"?\") {\n            keys.push(-3);\n        } else if (currentChar === \".\") {\n            keys.push(-4);\n        } else {\n            keys.push(charIndex);\n        }\n    }\n    for(var x2 = 0; x2 < keys.length; x2++){\n        var currentIndex = keys[x2];\n        if (keys[x2] === -1) {\n            decodedString.push(\" \");\n        } else if (keys[x2] === -2) {\n            decodedString.push(\"!\");\n        } else if (keys[x2] === -3) {\n            decodedString.push(\"?\");\n        } else if (keys[x2] === -4) {\n            decodedString.push(\".\");\n        } else {\n            decodedString.push(altKeys[currentIndex]);\n        }\n    }\n    console.log(decodedString.join(\"\").toUpperCase());\n    return decodedString.join(\"\").toUpperCase();\n}\nfunction telephoneCheck(str) {\n    // const regEx = /\\D+/\n    var regEx = /[0-9]/g;\n    // const regEx = /^[0-9]{10}$|^-$/\n    // const regExHyphen = /-/\n    if (regEx.test(str) == false) {\n        console.log(\"logged\");\n    }\n    var thing = str;\n    var toRemove = str.match(regEx);\n    // console.log(toRemove.index)\n    var newish = thing.replace(/[\\D+]/g, \"\");\n    // console.log(newish)\n    if (newish.charAt[0] == \"1\" && newish.length == 11) {\n        console.log(\"valid\");\n        return true;\n    } else if (newish.length == 10) {\n        console.log(\"valid\");\n        return true;\n    } else {\n        console.log(\"invalid\");\n        return false;\n    }\n}\nfunction JavaScriptAlgorithmsAndDataStructuresProjects() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Convert Number To Roman\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 120,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: convertToRoman(777)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 121,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Caesar's Cipher\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 122,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: caesarsCipher(\"SERR PBQR PNZC!!!\")\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 123,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Telephone Check\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 124,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: telephoneCheck(6130000000)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 126,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n        lineNumber: 119,\n        columnNumber: 7\n    }, this);\n}\n_c = JavaScriptAlgorithmsAndDataStructuresProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JavaScriptAlgorithmsAndDataStructuresProjects);\nvar _c;\n$RefreshReg$(_c, \"JavaScriptAlgorithmsAndDataStructuresProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mcmVlQ29kZUNhbXAvSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBeUI7QUFFekIsaURBQWlEO0FBQ2pELCtEQUErRDtBQUUvRCxTQUFTQyxjQUFjLENBQUNDLEdBQUcsRUFBRTtJQUN6QixJQUFNQyxhQUFhLEdBQUc7UUFDbEI7QUFBQyxnQkFBSTtZQUFFLEdBQUc7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLElBQUk7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLEdBQUc7U0FBQztRQUNWO0FBQUMsZUFBRztZQUFFLElBQUk7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLEdBQUc7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLElBQUk7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLEdBQUc7U0FBQztRQUNUO0FBQUMsY0FBRTtZQUFFLElBQUk7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLEdBQUc7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLElBQUk7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLEdBQUc7U0FBQztRQUNSO0FBQUMsYUFBQztZQUFFLElBQUk7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLEdBQUc7U0FBQztLQUNYO0lBQ0QsSUFBSUQsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxJQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsYUFBYSxDQUFDRSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1FBQzNDLDZDQUE2QztRQUM3QyxJQUFJRixHQUFHLElBQUlDLGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMseUZBQXlGO1lBQ3JGLE9BQU9ELGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdILGNBQWMsQ0FBQ0MsR0FB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Ozs7b0JBQU07Ozs7OztZQUNuQyxDQUNUO0NBQ0Y7QUFaUVMsS0FBQUEsNkNBQTZDO0FBY3RELCtEQUFlQSw2Q0FBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnJlZUNvZGVDYW1wL0phdmFTY3JpcHRBbGdvcml0aG1zQW5kRGF0YVN0cnVjdHVyZXNQcm9qZWN0cy5qcz83MWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gQ29udmVydCB0aGUgZ2l2ZW4gbnVtYmVyIGludG8gYSByb21hbiBudW1lcmFsLlxuLy8gQWxsIHJvbWFuIG51bWVyYWxzIGFuc3dlcnMgc2hvdWxkIGJlIHByb3ZpZGVkIGluIHVwcGVyLWNhc2UuXG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1JvbWFuKG51bSkge1xuICAgIGNvbnN0IHJvbWFuTnVtZXJhbHMgPSBbXG4gICAgICAgIFsxMDAwLCAnTSddLFxuICAgICAgICBbOTAwLCAnQ00nXSxcbiAgICAgICAgWzUwMCwgJ0QnXSxcbiAgICAgICAgWzQwMCwgJ0NEJ10sXG4gICAgICAgIFsxMDAsICdDJ10sXG4gICAgICAgIFs5MCwgJ1hDJ10sXG4gICAgICAgIFs1MCwgJ0wnXSxcbiAgICAgICAgWzQwLCAnWEwnXSxcbiAgICAgICAgWzEwLCAnWCddLFxuICAgICAgICBbOSwgJ0lYJ10sXG4gICAgICAgIFs1LCAnViddLFxuICAgICAgICBbNCwgJ0lWJ10sXG4gICAgICAgIFsxLCAnSSddXG4gICAgXVxuICAgIGlmIChudW0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvbWFuTnVtZXJhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBpcyBsYXJnZXIgdGhhbiB0aGUgY29uZGl0aW9uXG4gICAgICAgIGlmIChudW0gPj0gcm9tYW5OdW1lcmFsc1tpXVswXSkge1xuICAgICAgICAvLyByZXR1cm4gdGhlIGxldHRlciBhbmQgY2FsbCB0aGUgZnVuY3Rpb24gcmVjdXJzaXZlbHkgYWZ0ZXIgc3VidHJhY3RpbmcgdGhlIGZpcnN0IGxldHRlclxuICAgICAgICAgICAgcmV0dXJuIHJvbWFuTnVtZXJhbHNbaV1bMV0gKyBjb252ZXJ0VG9Sb21hbihudW0gLSByb21hbk51bWVyYWxzW2ldWzBdKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYWVzYXJzQ2lwaGVyKHN0cmluZ1RvRGVjb2RlKSB7XG5cbiAgICAvLyBTRVJSIFBCUVIgUE5aQ1xuXG4gICAgY29uc3QgcmVxID0gc3RyaW5nVG9EZWNvZGUudG9Mb3dlckNhc2UoKVxuICAgIFxuICAgIGNvbnN0IGFscGhhYmV0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiXG4gICAgY29uc3QgYWx0QWxwaGFiZXQgPSBcIm5vcHFyc3R1dnd4eXphYmNkZWZnaGlqa2xtXCJcbiAgICBsZXQgYWx0S2V5cyA9IFtdXG4gICAgbGV0IGRlY29kZWRTdHJpbmcgPSBbXVxuICAgIGxldCBrZXlzID0gW11cblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBhbHRlcm5hdGUgYWxwaGFiZXRcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGFsdEFscGhhYmV0Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGFsdEtleXMucHVzaChhbHRBbHBoYWJldC5jaGFyQXQoeCkpXG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgcmVxLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q2hhciA9IHJlcS5jaGFyQXQoeClcbiAgICAgICAgbGV0IGNoYXJJbmRleCA9IGFscGhhYmV0LmluZGV4T2YoY3VycmVudENoYXIpXG4gICAgICAgIGlmIChjdXJyZW50Q2hhciA9PT0gJyEnKSB7IC8vIG5vdCBpZGVhbCwgYnV0IHdpdGhpbiBzY29wZVxuICAgICAgICAgICAga2V5cy5wdXNoKC0yKVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDaGFyID09PSAnPycpIHtcbiAgICAgICAgICAgIGtleXMucHVzaCgtMylcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Q2hhciA9PT0gJy4nKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goLTQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goY2hhckluZGV4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBrZXlzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBrZXlzW3hdXG4gICAgICAgIGlmIChrZXlzW3hdID09PSAtMSkge1xuICAgICAgICAgICAgZGVjb2RlZFN0cmluZy5wdXNoKFwiIFwiKVxuICAgICAgICB9IGVsc2UgaWYgKGtleXNbeF0gPT09IC0yKSB7XG4gICAgICAgICAgICBkZWNvZGVkU3RyaW5nLnB1c2goJyEnKSAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGtleXNbeF0gPT09IC0zKSB7XG4gICAgICAgICAgICBkZWNvZGVkU3RyaW5nLnB1c2goJz8nKSAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGtleXNbeF0gPT09IC00KSB7XG4gICAgICAgICAgICBkZWNvZGVkU3RyaW5nLnB1c2goJy4nKSAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjb2RlZFN0cmluZy5wdXNoKGFsdEtleXNbY3VycmVudEluZGV4XSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkZWNvZGVkU3RyaW5nLmpvaW4oXCJcIikudG9VcHBlckNhc2UoKSlcbiAgICByZXR1cm4gZGVjb2RlZFN0cmluZy5qb2luKFwiXCIpLnRvVXBwZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gdGVsZXBob25lQ2hlY2soc3RyKSB7XG5cbiAgICAvLyBjb25zdCByZWdFeCA9IC9cXEQrL1xuICAgIGNvbnN0IHJlZ0V4ID0gL1swLTldL2dcbiAgICAvLyBjb25zdCByZWdFeCA9IC9eWzAtOV17MTB9JHxeLSQvXG4gICAgLy8gY29uc3QgcmVnRXhIeXBoZW4gPSAvLS9cblxuICAgIGlmIChyZWdFeC50ZXN0KHN0cikgPT0gZmFsc2Upe1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkJylcbiAgICB9XG4gICAgY29uc3QgdGhpbmcgPSBzdHJcblxuICAgIGNvbnN0IHRvUmVtb3ZlID0gc3RyLm1hdGNoKHJlZ0V4KVxuICAgIC8vIGNvbnNvbGUubG9nKHRvUmVtb3ZlLmluZGV4KVxuICAgIGNvbnN0IG5ld2lzaCA9IHRoaW5nLnJlcGxhY2UoL1tcXEQrXS9nLCAnJylcblxuICAgIFxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhuZXdpc2gpXG4gICAgaWYgKG5ld2lzaC5jaGFyQXRbMF0gPT0gJzEnICYmIG5ld2lzaC5sZW5ndGggPT0gMTEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJylcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKG5ld2lzaC5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJylcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIFxufVxuXG5mdW5jdGlvbiBKYXZhU2NyaXB0QWxnb3JpdGhtc0FuZERhdGFTdHJ1Y3R1cmVzUHJvamVjdHMoKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5Db252ZXJ0IE51bWJlciBUbyBSb21hbjwvaDE+XG4gICAgICAgICAgPGgxPntjb252ZXJ0VG9Sb21hbig3NzcpfTwvaDE+XG4gICAgICAgICAgPGgxPkNhZXNhcidzIENpcGhlcjwvaDE+XG4gICAgICAgICAgPGgxPntjYWVzYXJzQ2lwaGVyKFwiU0VSUiBQQlFSIFBOWkMhISFcIil9PC9oMT5cbiAgICAgICAgICA8aDE+VGVsZXBob25lIENoZWNrPC9oMT5cbiAgICAgICAgICB7LyogPGgxPnt0ZWxlcGhvbmVDaGVjaygnN2Y3Ny43LTc/NyE3NycpfTwvaDE+ICovfVxuICAgICAgICAgIDxoMT57dGVsZXBob25lQ2hlY2soNjEzMDAwMDAwMCl9PC9oMT5cbiAgICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEphdmFTY3JpcHRBbGdvcml0aG1zQW5kRGF0YVN0cnVjdHVyZXNQcm9qZWN0c1xuXG4vLyBjb252ZXJ0VG9Sb21hbigyKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgSUkuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDMpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBJSUkuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDQpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBJVi5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFYuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDkpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBJWC5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMTIpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBYSUkuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDE2KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWFZJLlxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigyOSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFhYSVguXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDQ0KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWExJVi5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNDUpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBYTFYuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDY4KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTFhWSUlJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDgzKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTFhYWElJSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig5Nykgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFhDVklJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDk5KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWENJWFxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig0MDApIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBDRFxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig1MDApIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBEXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDUwMSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIERJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDY0OSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIERDWExJWFxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig3OTgpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBEQ0NYQ1ZJSUlcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oODkxKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgRENDQ1hDSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigxMDAwKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigxMDA0KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTUlWXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDEwMDYpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBNVklcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMTAyMykgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIE1YWElJSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigyMDE0KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTU1YSVZcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMzk5OSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIE1NTUNNWENJWCJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbnZlcnRUb1JvbWFuIiwibnVtIiwicm9tYW5OdW1lcmFscyIsImkiLCJsZW5ndGgiLCJjYWVzYXJzQ2lwaGVyIiwic3RyaW5nVG9EZWNvZGUiLCJyZXEiLCJ0b0xvd2VyQ2FzZSIsImFscGhhYmV0IiwiYWx0QWxwaGFiZXQiLCJhbHRLZXlzIiwiZGVjb2RlZFN0cmluZyIsImtleXMiLCJ4IiwicHVzaCIsImNoYXJBdCIsImN1cnJlbnRDaGFyIiwiY2hhckluZGV4IiwiaW5kZXhPZiIsImN1cnJlbnRJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJqb2luIiwidG9VcHBlckNhc2UiLCJ0ZWxlcGhvbmVDaGVjayIsInN0ciIsInJlZ0V4IiwidGVzdCIsInRoaW5nIiwidG9SZW1vdmUiLCJtYXRjaCIsIm5ld2lzaCIsInJlcGxhY2UiLCJKYXZhU2NyaXB0QWxnb3JpdGhtc0FuZERhdGFTdHJ1Y3R1cmVzUHJvamVjdHMiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\n"));

/***/ })

});