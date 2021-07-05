/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/burger-menu.jpg":
/*!************************************!*\
  !*** ./src/images/burger-menu.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c047a0bab9253895ad42.jpg";

/***/ }),

/***/ "./src/images/pizza-menu.jpg":
/*!***********************************!*\
  !*** ./src/images/pizza-menu.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45b8fe90ff3da81160a7.jpg";

/***/ }),

/***/ "./src/images/soda-menu.jpg":
/*!**********************************!*\
  !*** ./src/images/soda-menu.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b73e4e3da9f6d72650f2.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_soda_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/soda-menu.jpg */ "./src/images/soda-menu.jpg");
/* harmony import */ var _images_burger_menu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/burger-menu.jpg */ "./src/images/burger-menu.jpg");
/* harmony import */ var _images_pizza_menu_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizza-menu.jpg */ "./src/images/pizza-menu.jpg");






function menu(content) {

    const menuHolder = document.createElement(`div`);
    
    const pizzaDiv = document.createElement(`div`);
    const pizzaImg = new Image();
    pizzaImg.src=_images_pizza_menu_jpg__WEBPACK_IMPORTED_MODULE_2__;
    pizzaImg.classList.add(`menu-image`);
    const pizzaNameDescDiv = document.createElement(`div`);
    pizzaNameDescDiv.classList.add(`name-desc`);
    const pizzaNameText = document.createElement(`div`);
    pizzaNameText.textContent = "Pizza";
    const pizzaInfoText = document.createElement(`div`);
    pizzaInfoText.textContent = "Delicious freshly made pizza";
    const pizzaPriceText = document.createElement(`div`);
    pizzaPriceText.textContent = "£17.95";

    pizzaNameDescDiv.appendChild(pizzaNameText);
    pizzaNameDescDiv.appendChild(pizzaInfoText);

    pizzaDiv.appendChild(pizzaImg);
    pizzaDiv.appendChild(pizzaNameDescDiv);
    pizzaDiv.appendChild(pizzaPriceText);

    const burgerDiv = document.createElement(`div`);
    const burgerImg = new Image();
    burgerImg.src=_images_burger_menu_jpg__WEBPACK_IMPORTED_MODULE_1__;
    burgerImg.classList.add(`menu-image`);
    const burgerNameDescDiv = document.createElement(`div`);
    burgerNameDescDiv.classList.add(`name-desc`);
    const burgerNameText = document.createElement(`div`);
    burgerNameText.textContent = "Burger";
    const burgerInfoText = document.createElement(`div`);
    burgerInfoText.textContent = "Delicious freshly made burger";
    const burgerPriceText = document.createElement(`div`);
    burgerPriceText.textContent = "£13.95";
    
    burgerNameDescDiv.appendChild(burgerNameText);
    burgerNameDescDiv.appendChild(burgerInfoText);

    burgerDiv.appendChild(burgerImg);
    burgerDiv.appendChild(burgerNameDescDiv);
    burgerDiv.appendChild(burgerPriceText);

    const sodaDiv = document.createElement(`div`);
    const sodaImg = new Image();
    sodaImg.src=_images_soda_menu_jpg__WEBPACK_IMPORTED_MODULE_0__;
    sodaImg.classList.add(`menu-image`);
    const sodaNameDescDiv = document.createElement(`div`);
    sodaNameDescDiv.classList.add(`name-desc`);
    const sodaNameText = document.createElement(`div`);
    sodaNameText.textContent = "Soda";
    const sodaInfoText = document.createElement(`div`);
    sodaInfoText.textContent = "Delicious freshly poured soda";
    const sodaPriceText = document.createElement(`div`);
    sodaPriceText.textContent = "£1.95";

    sodaNameDescDiv.appendChild(sodaNameText);
    sodaNameDescDiv.appendChild(sodaInfoText);

    sodaDiv.appendChild(sodaImg);
    sodaDiv.appendChild(sodaNameDescDiv);
    sodaDiv.appendChild(sodaPriceText);

    menuHolder.append(pizzaDiv);
    menuHolder.append(burgerDiv);
    menuHolder.appendChild(sodaDiv);

    pizzaDiv.classList.add(`menu-item`);
    burgerDiv.classList.add(`menu-item`);
    sodaDiv.classList.add(`menu-item`);

    content.appendChild(menuHolder);
    return 1;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YwQztBQUNJO0FBQ0g7Ozs7QUFJNUI7O0FBRWY7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixtREFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvREFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrREFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJtZW51LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBTb2RhIGZyb20gJy4vaW1hZ2VzL3NvZGEtbWVudS5qcGcnO1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2ltYWdlcy9idXJnZXItbWVudS5qcGcnO1xuaW1wb3J0IFBpenphIGZyb20gJy4vaW1hZ2VzL3BpenphLW1lbnUuanBnJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShjb250ZW50KSB7XG5cbiAgICBjb25zdCBtZW51SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgXG4gICAgY29uc3QgcGl6emFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBjb25zdCBwaXp6YUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphSW1nLnNyYz1QaXp6YTtcbiAgICBwaXp6YUltZy5jbGFzc0xpc3QuYWRkKGBtZW51LWltYWdlYCk7XG4gICAgY29uc3QgcGl6emFOYW1lRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIHBpenphTmFtZURlc2NEaXYuY2xhc3NMaXN0LmFkZChgbmFtZS1kZXNjYCk7XG4gICAgY29uc3QgcGl6emFOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIHBpenphTmFtZVRleHQudGV4dENvbnRlbnQgPSBcIlBpenphXCI7XG4gICAgY29uc3QgcGl6emFJbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIHBpenphSW5mb1RleHQudGV4dENvbnRlbnQgPSBcIkRlbGljaW91cyBmcmVzaGx5IG1hZGUgcGl6emFcIjtcbiAgICBjb25zdCBwaXp6YVByaWNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIHBpenphUHJpY2VUZXh0LnRleHRDb250ZW50ID0gXCLCozE3Ljk1XCI7XG5cbiAgICBwaXp6YU5hbWVEZXNjRGl2LmFwcGVuZENoaWxkKHBpenphTmFtZVRleHQpO1xuICAgIHBpenphTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQocGl6emFJbmZvVGV4dCk7XG5cbiAgICBwaXp6YURpdi5hcHBlbmRDaGlsZChwaXp6YUltZyk7XG4gICAgcGl6emFEaXYuYXBwZW5kQ2hpbGQocGl6emFOYW1lRGVzY0Rpdik7XG4gICAgcGl6emFEaXYuYXBwZW5kQ2hpbGQocGl6emFQcmljZVRleHQpO1xuXG4gICAgY29uc3QgYnVyZ2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29uc3QgYnVyZ2VySW1nID0gbmV3IEltYWdlKCk7XG4gICAgYnVyZ2VySW1nLnNyYz1CdXJnZXI7XG4gICAgYnVyZ2VySW1nLmNsYXNzTGlzdC5hZGQoYG1lbnUtaW1hZ2VgKTtcbiAgICBjb25zdCBidXJnZXJOYW1lRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGJ1cmdlck5hbWVEZXNjRGl2LmNsYXNzTGlzdC5hZGQoYG5hbWUtZGVzY2ApO1xuICAgIGNvbnN0IGJ1cmdlck5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgYnVyZ2VyTmFtZVRleHQudGV4dENvbnRlbnQgPSBcIkJ1cmdlclwiO1xuICAgIGNvbnN0IGJ1cmdlckluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgYnVyZ2VySW5mb1RleHQudGV4dENvbnRlbnQgPSBcIkRlbGljaW91cyBmcmVzaGx5IG1hZGUgYnVyZ2VyXCI7XG4gICAgY29uc3QgYnVyZ2VyUHJpY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgYnVyZ2VyUHJpY2VUZXh0LnRleHRDb250ZW50ID0gXCLCozEzLjk1XCI7XG4gICAgXG4gICAgYnVyZ2VyTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoYnVyZ2VyTmFtZVRleHQpO1xuICAgIGJ1cmdlck5hbWVEZXNjRGl2LmFwcGVuZENoaWxkKGJ1cmdlckluZm9UZXh0KTtcblxuICAgIGJ1cmdlckRpdi5hcHBlbmRDaGlsZChidXJnZXJJbWcpO1xuICAgIGJ1cmdlckRpdi5hcHBlbmRDaGlsZChidXJnZXJOYW1lRGVzY0Rpdik7XG4gICAgYnVyZ2VyRGl2LmFwcGVuZENoaWxkKGJ1cmdlclByaWNlVGV4dCk7XG5cbiAgICBjb25zdCBzb2RhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgY29uc3Qgc29kYUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHNvZGFJbWcuc3JjPVNvZGE7XG4gICAgc29kYUltZy5jbGFzc0xpc3QuYWRkKGBtZW51LWltYWdlYCk7XG4gICAgY29uc3Qgc29kYU5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgc29kYU5hbWVEZXNjRGl2LmNsYXNzTGlzdC5hZGQoYG5hbWUtZGVzY2ApO1xuICAgIGNvbnN0IHNvZGFOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIHNvZGFOYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiU29kYVwiO1xuICAgIGNvbnN0IHNvZGFJbmZvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIHNvZGFJbmZvVGV4dC50ZXh0Q29udGVudCA9IFwiRGVsaWNpb3VzIGZyZXNobHkgcG91cmVkIHNvZGFcIjtcbiAgICBjb25zdCBzb2RhUHJpY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgc29kYVByaWNlVGV4dC50ZXh0Q29udGVudCA9IFwiwqMxLjk1XCI7XG5cbiAgICBzb2RhTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoc29kYU5hbWVUZXh0KTtcbiAgICBzb2RhTmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQoc29kYUluZm9UZXh0KTtcblxuICAgIHNvZGFEaXYuYXBwZW5kQ2hpbGQoc29kYUltZyk7XG4gICAgc29kYURpdi5hcHBlbmRDaGlsZChzb2RhTmFtZURlc2NEaXYpO1xuICAgIHNvZGFEaXYuYXBwZW5kQ2hpbGQoc29kYVByaWNlVGV4dCk7XG5cbiAgICBtZW51SG9sZGVyLmFwcGVuZChwaXp6YURpdik7XG4gICAgbWVudUhvbGRlci5hcHBlbmQoYnVyZ2VyRGl2KTtcbiAgICBtZW51SG9sZGVyLmFwcGVuZENoaWxkKHNvZGFEaXYpO1xuXG4gICAgcGl6emFEaXYuY2xhc3NMaXN0LmFkZChgbWVudS1pdGVtYCk7XG4gICAgYnVyZ2VyRGl2LmNsYXNzTGlzdC5hZGQoYG1lbnUtaXRlbWApO1xuICAgIHNvZGFEaXYuY2xhc3NMaXN0LmFkZChgbWVudS1pdGVtYCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVIb2xkZXIpO1xuICAgIHJldHVybiAxO1xufSJdLCJzb3VyY2VSb290IjoiIn0=