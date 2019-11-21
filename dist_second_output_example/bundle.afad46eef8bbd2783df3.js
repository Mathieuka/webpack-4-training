/*! For license information please see bundle.afad46eef8bbd2783df3.js.LICENSE */
!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="dist_second_output_example/",t(t.s="./src/index.js")}({"./node_modules/process/browser.js":function(module,exports){eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?")},"./src/add-image.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deadpool_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deadpool.jpg */ "./src/deadpool.jpg");\n/* harmony import */ var _deadpool_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deadpool_jpg__WEBPACK_IMPORTED_MODULE_0__);\n // Add an image to the document.\n\nfunction addImage() {\n  var div = document.createElement("div");\n  var img = document.createElement("img");\n  img.alt = "deadpool";\n  img.width = 300;\n  img.src = _deadpool_jpg__WEBPACK_IMPORTED_MODULE_0___default.a;\n  var body = document.querySelector("body");\n  div.appendChild(img);\n  body.appendChild(div);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (addImage);\n\n//# sourceURL=webpack:///./src/add-image.js?')},"./src/components/heading/heading.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ \"./src/components/heading/heading.scss\");\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heading_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar heading = function heading() {\n  var h1 = document.createElement('h1');\n  var body = document.querySelector('body');\n  h1.innerHTML = 'Webpack is yataaa !';\n  body.appendChild(h1);\n  return h1;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (heading);\n\n//# sourceURL=webpack:///./src/components/heading/heading.js?")},"./src/components/heading/heading.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/heading/heading.scss?")},"./src/components/hello-button/hello-button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-button.scss */ "./src/components/hello-button/hello-button.scss");\n/* harmony import */ var _hello_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_button_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar helloButton = function helloButton() {\n  var button = document.createElement("button");\n  button.innerHTML = "Hello button";\n  button.classList.add("hello-button");\n  var body = document.querySelector("body");\n\n  button.onclick = function () {\n    var p = document.createElement("p");\n    p.innerHTML = "Hello button";\n    p.classList.add("hello-button-text");\n    body.appendChild(p);\n  };\n\n  body.appendChild(button);\n  return button;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (helloButton);\n\n//# sourceURL=webpack:///./src/components/hello-button/hello-button.js?')},"./src/components/hello-button/hello-button.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/hello-button/hello-button.scss?")},"./src/deadpool.jpg":function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "e1bfbf72732d2b3ab2c81e10155c9dd7.jpg";\n\n//# sourceURL=webpack:///./src/deadpool.jpg?')},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _components_hello_button_hello_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-button/hello-button */ "./src/components/hello-button/hello-button.js");\n/* harmony import */ var _add_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-image */ "./src/add-image.js");\n/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/heading/heading */ "./src/components/heading/heading.js");\n\n\n\n\nvar prodMode = function prodMode() {\n  process.env.WEBPACK_MODE === \'production\' ? console.log(\'*** production mode ***\') : console.log(\'*** development mode ***\');\n};\n\nconsole.log(process.env);\nprodMode();\nObject(_components_heading_heading__WEBPACK_IMPORTED_MODULE_2__["default"])();\nObject(_components_hello_button_hello_button__WEBPACK_IMPORTED_MODULE_0__["default"])();\nObject(_add_image__WEBPACK_IMPORTED_MODULE_1__["default"])();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))\n\n//# sourceURL=webpack:///./src/index.js?')}});