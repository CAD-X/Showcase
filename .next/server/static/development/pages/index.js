module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./logo.js":
/*!*****************!*\
  !*** ./logo.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kassandram/Codesmith/pc-showcase/logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("svg", {
  viewBox: "0 -13 511.99989 511",
  width: "50",
  height: "50",
  xmlns: "http://www.w3.org/2000/svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("path", {
  d: "m442.246094 396.496094-185.996094 80v-226l185.996094-79.996094zm0 0",
  fill: "#ff6c6c",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("path", {
  d: "m256.25 90.5 185.996094 80-185.996094 79.996094-186-79.996094zm0 0",
  fill: "#6eba7b",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("path", {
  d: "m70.25 396.496094v-225.996094l186 79.996094v226zm0 0",
  fill: "#a9def8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("path", {
  d: "m352 346.496094c-5.523438 0-10 4.480468-10 10 0 5.519531 4.476562 10 10 10 5.519531 0 10-4.480469 10-10 0-5.519532-4.480469-10-10-10zm0 0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("path", {
  d: "m266 170.5c0-5.523438-4.480469-10-10-10s-10 4.476562-10 10c0 5.519531 4.480469 10 10 10s10-4.480469 10-10zm0 0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("path", {
  d: "m160 366.496094c5.519531 0 10-4.480469 10-10 0-5.519532-4.480469-10-10-10s-10 4.480468-10 10c0 5.519531 4.480469 10 10 10zm0 0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("path", {
  d: "m506.058594 414.015625-54.0625-24.019531v-219.496094c0-3.960938-2.371094-7.628906-6.140625-9.230469l-179.855469-77.355469v-73.414062c0-5.523438-4.480469-10-10-10-5.523438 0-10 4.476562-10 10v73.414062l-179.855469 77.355469c-3.574219 1.484375-6.140625 5.105469-6.140625 9.230469v219.496094l-54.0625 24.019531c-5.046875 2.246094-7.320312 8.152344-5.078125 13.199219 2.226563 5.015625 8.117188 7.335937 13.199219 5.078125l56.003906-24.882813 181.984375 78.269532c2.40625 1.035156 5.347657 1.097656 7.902344 0l181.980469-78.269532 56.003906 24.882813c5.101562 2.265625 10.980469-.082031 13.199219-5.078125 2.242187-5.046875-.03125-10.953125-5.078125-13.199219zm-260.058594-308.328125v24.8125c0 5.519531 4.476562 10 10 10 5.519531 0 10-4.480469 10-10v-24.8125l150.6875 64.8125-160.6875 69.113281-160.6875-69.113281zm-113.410156 262.996094c-2.246094-5.046875-8.15625-7.316406-13.199219-5.078125l-39.390625 17.503906v-195.425781l166 71.398437v204.226563l-151.035156-64.960938 32.546875-14.460937c5.046875-2.246094 7.320312-8.15625 5.078125-13.203125zm133.410156 92.625v-204.226563l165.996094-71.398437v195.425781l-39.386719-17.5c-5.050781-2.242187-10.957031.027344-13.199219 5.078125-2.242187 5.046875.03125 10.953125 5.078125 13.199219l32.546875 14.460937zm0 0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
})));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo.js */ "./logo.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kassandram/Codesmith/pc-showcase/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Work+Sans&display=swap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("script", {
  async: true,
  defer: true,
  src: "https://buttons.github.io/buttons.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), __jsx("div", {
  id: "jumbotron",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "heading-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_logo_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "ProtoCAD"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "The first dedicated project for incorporating components as data"))), __jsx("div", {
  id: "demo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Prototyping Tool"), __jsx("div", {
  id: "githubStar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Star us on Github"), __jsx("div", {
  className: "github-button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("iframe", {
  src: "https://ghbtns.com/github-btn.html?user=cad-x&repo=protocad&type=star&size=large",
  frameBorder: "0",
  scrolling: "0",
  width: "160px",
  height: "30px",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}))), __jsx("div", {
  id: "aboutWrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("div", {
  className: "about-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("div", {
  className: "about-details right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Design UI components structure"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Upload a web design of your choice to begin prototyping.")), __jsx("div", {
  className: "about-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("img", {
  src: "/demo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}))), __jsx("div", {
  className: "about-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("div", {
  className: "about-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("img", {
  src: "/demo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
})), __jsx("div", {
  className: "about-details left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "Convert to a GraphQL schema"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "Upload a web design of your choice to begin prototyping."))), __jsx("div", {
  className: "about-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("div", {
  className: "about-details right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Add resolvers and configure queries"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "Upload a web design of your choice to begin prototyping.")), __jsx("div", {
  className: "about-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("img", {
  src: "/demo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}))), __jsx("div", {
  className: "about-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("div", {
  className: "about-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("img", {
  src: "/demo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
})), __jsx("div", {
  className: "about-details left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "Preview data"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, "Upload a web design of your choice to begin prototyping."))))), __jsx("div", {
  id: "contributors",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, "Contributors"), __jsx("div", {
  className: "bio-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx("div", {
  className: "single-contributor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx("img", {
  src: "/avatar.jpg",
  alt: "jason lee",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/jasonlee1245",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, "Jason Lee"))), __jsx("div", {
  className: "single-contributor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("img", {
  src: "/avatar.jpg",
  alt: "kassandra meyer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/kassanj",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, "Kassandra Meyer"))), __jsx("div", {
  className: "single-contributor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, __jsx("img", {
  src: "/avatar.jpg",
  alt: "benjamin morrison",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/newbenhd",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, "Benjamin Morrison"))), __jsx("div", {
  className: "single-contributor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("img", {
  src: "/avatar.jpg",
  alt: "eric natividad",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/EricNatividad",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, "Eric Natividad"))), __jsx("div", {
  className: "single-contributor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, __jsx("img", {
  src: "/avatar.jpg",
  alt: "suramya sekhri",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/suramyasekhri",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, "Suramya Sekhri"))))), __jsx("footer", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, __jsx(_logo_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "\xA9 2019 ProtoCAD/OSLabs. All rights reserved.")));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kassandram/Codesmith/pc-showcase/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map