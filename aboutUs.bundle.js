/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });


function aboutUs(content) {

    const contentTitle = document.createElement(`h2`);
    contentTitle.textContent = "Contact";

    const telephoneContact=document.createElement(`div`);
    telephoneContact.textContent="0101-101010";
    const emailContact=document.createElement(`div`);
    emailContact.textContent="igetmail@thismailbox.com";
    const openTimesHeading=document.createElement(`h3`);
    openTimesHeading.textContent="Opening Times";
    const monFri=document.createElement(`div`);
    monFri.textContent="Mon-Fri: 10:00-23:30";
    const satSun=document.createElement(`div`);
    satSun.textContent="Sat-Sun:  9:00-22:30";

    content.appendChild(contentTitle);
    content.appendChild(telephoneContact);
    content.appendChild(emailContact);
    content.appendChild(openTimesHeading);
    content.appendChild(monFri);
    content.appendChild(satSun);

    return 2;

}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dFVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDSmU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQyIsImZpbGUiOiJhYm91dFVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0VXMoY29udGVudCkge1xuXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDJgKTtcbiAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IHRlbGVwaG9uZUNvbnRhY3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgdGVsZXBob25lQ29udGFjdC50ZXh0Q29udGVudD1cIjAxMDEtMTAxMDEwXCI7XG4gICAgY29uc3QgZW1haWxDb250YWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIGVtYWlsQ29udGFjdC50ZXh0Q29udGVudD1cImlnZXRtYWlsQHRoaXNtYWlsYm94LmNvbVwiO1xuICAgIGNvbnN0IG9wZW5UaW1lc0hlYWRpbmc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDNgKTtcbiAgICBvcGVuVGltZXNIZWFkaW5nLnRleHRDb250ZW50PVwiT3BlbmluZyBUaW1lc1wiO1xuICAgIGNvbnN0IG1vbkZyaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBtb25GcmkudGV4dENvbnRlbnQ9XCJNb24tRnJpOiAxMDowMC0yMzozMFwiO1xuICAgIGNvbnN0IHNhdFN1bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBzYXRTdW4udGV4dENvbnRlbnQ9XCJTYXQtU3VuOiAgOTowMC0yMjozMFwiO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGVsZXBob25lQ29udGFjdCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbWFpbENvbnRhY3QpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3BlblRpbWVzSGVhZGluZyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb25GcmkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2F0U3VuKTtcblxuICAgIHJldHVybiAyO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==