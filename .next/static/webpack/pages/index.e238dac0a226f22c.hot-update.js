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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Convert the given number into a roman numeral.\n// All roman numerals answers should be provided in upper-case.\nfunction convertToRoman(num) {\n    var romanNumerals = [\n        [\n            1000,\n            \"M\"\n        ],\n        [\n            900,\n            \"CM\"\n        ],\n        [\n            500,\n            \"D\"\n        ],\n        [\n            400,\n            \"CD\"\n        ],\n        [\n            100,\n            \"C\"\n        ],\n        [\n            90,\n            \"XC\"\n        ],\n        [\n            50,\n            \"L\"\n        ],\n        [\n            40,\n            \"XL\"\n        ],\n        [\n            10,\n            \"X\"\n        ],\n        [\n            9,\n            \"IX\"\n        ],\n        [\n            5,\n            \"V\"\n        ],\n        [\n            4,\n            \"IV\"\n        ],\n        [\n            1,\n            \"I\"\n        ]\n    ];\n    if (num === 0) {\n        return \"\";\n    }\n    for(var i = 0; i < romanNumerals.length; i++){\n        // if the number is larger than the condition\n        if (num >= romanNumerals[i][0]) {\n            // return the letter and call the function recursively after subtracting the first letter\n            return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0]);\n        }\n    }\n}\nfunction caesarsCipher(stringToDecode) {\n    // SERR PBQR PNZC\n    var req = stringToDecode.toLowerCase();\n    var alphabet = \"abcdefghijklmnopqrstuvwxyz\";\n    var altAlphabet = \"nopqrstuvwxyzabcdefghijklm\";\n    var altKeys = [];\n    var decodedString = [];\n    var keys = [];\n    // create array of alternate alphabet\n    for(var x = 0; x < altAlphabet.length; x++){\n        altKeys.push(altAlphabet.charAt(x));\n    }\n    for(var x1 = 0; x1 < req.length; x1++){\n        var currentChar = req.charAt(x1);\n        var charIndex = alphabet.indexOf(currentChar);\n        if (currentChar === \"!\") {\n            keys.push(-2);\n        } else if (currentChar === \"?\") {\n            keys.push(-3);\n        } else if (currentChar === \".\") {\n            keys.push(-4);\n        } else {\n            keys.push(charIndex);\n        }\n    }\n    for(var x2 = 0; x2 < keys.length; x2++){\n        var currentIndex = keys[x2];\n        if (keys[x2] === -1) {\n            decodedString.push(\" \");\n        } else if (keys[x2] === -2) {\n            decodedString.push(\"!\");\n        } else if (keys[x2] === -3) {\n            decodedString.push(\"?\");\n        } else if (keys[x2] === -4) {\n            decodedString.push(\".\");\n        } else {\n            decodedString.push(altKeys[currentIndex]);\n        }\n    }\n    console.log(decodedString.join(\"\").toUpperCase());\n    return decodedString.join(\"\").toUpperCase();\n}\nfunction telephoneCheck(str) {\n    var thing = str;\n    var regEx = /\\D+/;\n    var toRemove = str.match(regEx);\n    // console.log(toRemove.index)\n    var newish = thing.replace(/[\\D+]/g, \"\");\n    // console.log(newish)\n    if (newish.charAt[0] == \"1\" && newish.length == 11) {\n        console.log(\"valid\");\n        return true;\n    } else if (newish.length == 10) {\n        console.log(\"valid\");\n        return true;\n    } else {\n        console.log(\"invalid\");\n        return false;\n    }\n// for (let x = 0; x < str.length)\n// for (let x = 0; x < )\n// console.log(regEx.test(str))\n// console.log(check)\n// console.log(str.toString().match(regEx))\n// console.log(toRemove)\n// return \n}\nfunction JavaScriptAlgorithmsAndDataStructuresProjects() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Convert Number To Roman\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 117,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: convertToRoman(777)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 118,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Caesar's Cipher\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 119,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: caesarsCipher(\"SERR PBQR PNZC!!!\")\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 120,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Telephone Check\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 121,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: telephoneCheck(\"613-00d0-0000\")\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n                lineNumber: 123,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xy-leetcode/pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\",\n        lineNumber: 116,\n        columnNumber: 7\n    }, this);\n}\n_c = JavaScriptAlgorithmsAndDataStructuresProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JavaScriptAlgorithmsAndDataStructuresProjects);\nvar _c;\n$RefreshReg$(_c, \"JavaScriptAlgorithmsAndDataStructuresProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mcmVlQ29kZUNhbXAvSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBeUI7QUFFekIsaURBQWlEO0FBQ2pELCtEQUErRDtBQUUvRCxTQUFTQyxjQUFjLENBQUNDLEdBQUcsRUFBRTtJQUN6QixJQUFNQyxhQUFhLEdBQUc7UUFDbEI7QUFBQyxnQkFBSTtZQUFFLEdBQUc7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLElBQUk7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLEdBQUc7U0FBQztRQUNWO0FBQUMsZUFBRztZQUFFLElBQUk7U0FBQztRQUNYO0FBQUMsZUFBRztZQUFFLEdBQUc7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLElBQUk7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLEdBQUc7U0FBQztRQUNUO0FBQUMsY0FBRTtZQUFFLElBQUk7U0FBQztRQUNWO0FBQUMsY0FBRTtZQUFFLEdBQUc7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLElBQUk7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLEdBQUc7U0FBQztRQUNSO0FBQUMsYUFBQztZQUFFLElBQUk7U0FBQztRQUNUO0FBQUMsYUFBQztZQUFFLEdBQUc7U0FBQztLQUNYO0lBQ0QsSUFBSUQsR0FBRyxLQUFLLENBQUMsRUFBRTtRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxJQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsYUFBYSxDQUFDRSxNQUFNLEVBQUVELENBQUMsRUFBRSxDQUFFO1FBQzNDLDZDQUE2QztRQUM3QyxJQUFJRixHQUFHLElBQUlDLGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMseUZBQXlGO1lBQ3JGLE9BQU9ELGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdILGNBQWMsQ0FBQ0MsR0FB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K0RBQWVBLDZDQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mcmVlQ29kZUNhbXAvSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzLmpzPzcxZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBDb252ZXJ0IHRoZSBnaXZlbiBudW1iZXIgaW50byBhIHJvbWFuIG51bWVyYWwuXG4vLyBBbGwgcm9tYW4gbnVtZXJhbHMgYW5zd2VycyBzaG91bGQgYmUgcHJvdmlkZWQgaW4gdXBwZXItY2FzZS5cblxuZnVuY3Rpb24gY29udmVydFRvUm9tYW4obnVtKSB7XG4gICAgY29uc3Qgcm9tYW5OdW1lcmFscyA9IFtcbiAgICAgICAgWzEwMDAsICdNJ10sXG4gICAgICAgIFs5MDAsICdDTSddLFxuICAgICAgICBbNTAwLCAnRCddLFxuICAgICAgICBbNDAwLCAnQ0QnXSxcbiAgICAgICAgWzEwMCwgJ0MnXSxcbiAgICAgICAgWzkwLCAnWEMnXSxcbiAgICAgICAgWzUwLCAnTCddLFxuICAgICAgICBbNDAsICdYTCddLFxuICAgICAgICBbMTAsICdYJ10sXG4gICAgICAgIFs5LCAnSVgnXSxcbiAgICAgICAgWzUsICdWJ10sXG4gICAgICAgIFs0LCAnSVYnXSxcbiAgICAgICAgWzEsICdJJ11cbiAgICBdXG4gICAgaWYgKG51bSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9tYW5OdW1lcmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIGlzIGxhcmdlciB0aGFuIHRoZSBjb25kaXRpb25cbiAgICAgICAgaWYgKG51bSA+PSByb21hbk51bWVyYWxzW2ldWzBdKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGUgbGV0dGVyIGFuZCBjYWxsIHRoZSBmdW5jdGlvbiByZWN1cnNpdmVseSBhZnRlciBzdWJ0cmFjdGluZyB0aGUgZmlyc3QgbGV0dGVyXG4gICAgICAgICAgICByZXR1cm4gcm9tYW5OdW1lcmFsc1tpXVsxXSArIGNvbnZlcnRUb1JvbWFuKG51bSAtIHJvbWFuTnVtZXJhbHNbaV1bMF0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhZXNhcnNDaXBoZXIoc3RyaW5nVG9EZWNvZGUpIHtcblxuICAgIC8vIFNFUlIgUEJRUiBQTlpDXG5cbiAgICBjb25zdCByZXEgPSBzdHJpbmdUb0RlY29kZS50b0xvd2VyQ2FzZSgpXG4gICAgXG4gICAgY29uc3QgYWxwaGFiZXQgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCJcbiAgICBjb25zdCBhbHRBbHBoYWJldCA9IFwibm9wcXJzdHV2d3h5emFiY2RlZmdoaWprbG1cIlxuICAgIGxldCBhbHRLZXlzID0gW11cbiAgICBsZXQgZGVjb2RlZFN0cmluZyA9IFtdXG4gICAgbGV0IGtleXMgPSBbXVxuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIGFsdGVybmF0ZSBhbHBoYWJldFxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgYWx0QWxwaGFiZXQubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgYWx0S2V5cy5wdXNoKGFsdEFscGhhYmV0LmNoYXJBdCh4KSlcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCByZXEubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDaGFyID0gcmVxLmNoYXJBdCh4KVxuICAgICAgICBsZXQgY2hhckluZGV4ID0gYWxwaGFiZXQuaW5kZXhPZihjdXJyZW50Q2hhcilcbiAgICAgICAgaWYgKGN1cnJlbnRDaGFyID09PSAnIScpIHsgLy8gbm90IGlkZWFsLCBidXQgd2l0aGluIHNjb3BlXG4gICAgICAgICAgICBrZXlzLnB1c2goLTIpXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENoYXIgPT09ICc/Jykge1xuICAgICAgICAgICAga2V5cy5wdXNoKC0zKVxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDaGFyID09PSAnLicpIHtcbiAgICAgICAgICAgIGtleXMucHVzaCgtNClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleXMucHVzaChjaGFySW5kZXgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGtleXMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGtleXNbeF1cbiAgICAgICAgaWYgKGtleXNbeF0gPT09IC0xKSB7XG4gICAgICAgICAgICBkZWNvZGVkU3RyaW5nLnB1c2goXCIgXCIpXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1t4XSA9PT0gLTIpIHtcbiAgICAgICAgICAgIGRlY29kZWRTdHJpbmcucHVzaCgnIScpICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1t4XSA9PT0gLTMpIHtcbiAgICAgICAgICAgIGRlY29kZWRTdHJpbmcucHVzaCgnPycpICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5c1t4XSA9PT0gLTQpIHtcbiAgICAgICAgICAgIGRlY29kZWRTdHJpbmcucHVzaCgnLicpICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNvZGVkU3RyaW5nLnB1c2goYWx0S2V5c1tjdXJyZW50SW5kZXhdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRlY29kZWRTdHJpbmcuam9pbihcIlwiKS50b1VwcGVyQ2FzZSgpKVxuICAgIHJldHVybiBkZWNvZGVkU3RyaW5nLmpvaW4oXCJcIikudG9VcHBlckNhc2UoKVxufVxuXG5mdW5jdGlvbiB0ZWxlcGhvbmVDaGVjayhzdHIpIHtcbiAgICBjb25zdCB0aGluZyA9IHN0clxuXG4gICAgY29uc3QgcmVnRXggPSAvXFxEKy9cbiAgICBjb25zdCB0b1JlbW92ZSA9IHN0ci5tYXRjaChyZWdFeClcbiAgICAvLyBjb25zb2xlLmxvZyh0b1JlbW92ZS5pbmRleClcbiAgICBjb25zdCBuZXdpc2ggPSB0aGluZy5yZXBsYWNlKC9bXFxEK10vZywgJycpXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKG5ld2lzaClcbiAgICBpZiAobmV3aXNoLmNoYXJBdFswXSA9PSAnMScgJiYgbmV3aXNoLmxlbmd0aCA9PSAxMSkge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQnKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAobmV3aXNoLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQnKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnZhbGlkJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIChsZXQgeCA9IDA7IHggPCBzdHIubGVuZ3RoKVxuICAgIFxuICAgIC8vIGZvciAobGV0IHggPSAwOyB4IDwgKVxuICAgIC8vIGNvbnNvbGUubG9nKHJlZ0V4LnRlc3Qoc3RyKSlcbiAgICAvLyBjb25zb2xlLmxvZyhjaGVjaylcbiAgICAvLyBjb25zb2xlLmxvZyhzdHIudG9TdHJpbmcoKS5tYXRjaChyZWdFeCkpXG4gICAgLy8gY29uc29sZS5sb2codG9SZW1vdmUpXG4gICAgLy8gcmV0dXJuIFxufVxuXG5mdW5jdGlvbiBKYXZhU2NyaXB0QWxnb3JpdGhtc0FuZERhdGFTdHJ1Y3R1cmVzUHJvamVjdHMoKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5Db252ZXJ0IE51bWJlciBUbyBSb21hbjwvaDE+XG4gICAgICAgICAgPGgxPntjb252ZXJ0VG9Sb21hbig3NzcpfTwvaDE+XG4gICAgICAgICAgPGgxPkNhZXNhcidzIENpcGhlcjwvaDE+XG4gICAgICAgICAgPGgxPntjYWVzYXJzQ2lwaGVyKFwiU0VSUiBQQlFSIFBOWkMhISFcIil9PC9oMT5cbiAgICAgICAgICA8aDE+VGVsZXBob25lIENoZWNrPC9oMT5cbiAgICAgICAgICB7LyogPGgxPnt0ZWxlcGhvbmVDaGVjaygnN2Y3Ny43LTc/NyE3NycpfTwvaDE+ICovfVxuICAgICAgICAgIDxoMT57dGVsZXBob25lQ2hlY2soJzYxMy0wMGQwLTAwMDAnKX08L2gxPlxuICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzXG5cbi8vIGNvbnZlcnRUb1JvbWFuKDIpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBJSS5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMykgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIElJSS5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNCkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIElWLlxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig1KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgVi5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oOSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIElYLlxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigxMikgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFhJSS5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMTYpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBYVkkuXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDI5KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWFhJWC5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNDQpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBYTElWLlxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig0NSkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIFhMVi5cbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNjgpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBMWFZJSUlcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oODMpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBMWFhYSUlJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDk3KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgWENWSUlcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oOTkpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBYQ0lYXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDQwMCkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIENEXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDUwMCkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIERcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNTAxKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgRElcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oNjQ5KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgRENYTElYXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDc5OCkgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIERDQ1hDVklJSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbig4OTEpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBEQ0NDWENJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDEwMDApIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBNXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDEwMDQpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBNSVZcbi8vIFdhaXRpbmc6Y29udmVydFRvUm9tYW4oMTAwNikgc2hvdWxkIHJldHVybiB0aGUgc3RyaW5nIE1WSVxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigxMDIzKSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTVhYSUlJXG4vLyBXYWl0aW5nOmNvbnZlcnRUb1JvbWFuKDIwMTQpIHNob3VsZCByZXR1cm4gdGhlIHN0cmluZyBNTVhJVlxuLy8gV2FpdGluZzpjb252ZXJ0VG9Sb21hbigzOTk5KSBzaG91bGQgcmV0dXJuIHRoZSBzdHJpbmcgTU1NQ01YQ0lYIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29udmVydFRvUm9tYW4iLCJudW0iLCJyb21hbk51bWVyYWxzIiwiaSIsImxlbmd0aCIsImNhZXNhcnNDaXBoZXIiLCJzdHJpbmdUb0RlY29kZSIsInJlcSIsInRvTG93ZXJDYXNlIiwiYWxwaGFiZXQiLCJhbHRBbHBoYWJldCIsImFsdEtleXMiLCJkZWNvZGVkU3RyaW5nIiwia2V5cyIsIngiLCJwdXNoIiwiY2hhckF0IiwiY3VycmVudENoYXIiLCJjaGFySW5kZXgiLCJpbmRleE9mIiwiY3VycmVudEluZGV4IiwiY29uc29sZSIsImxvZyIsImpvaW4iLCJ0b1VwcGVyQ2FzZSIsInRlbGVwaG9uZUNoZWNrIiwic3RyIiwidGhpbmciLCJyZWdFeCIsInRvUmVtb3ZlIiwibWF0Y2giLCJuZXdpc2giLCJyZXBsYWNlIiwiSmF2YVNjcmlwdEFsZ29yaXRobXNBbmREYXRhU3RydWN0dXJlc1Byb2plY3RzIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/freeCodeCamp/JavaScriptAlgorithmsAndDataStructuresProjects.js\n"));

/***/ })

});