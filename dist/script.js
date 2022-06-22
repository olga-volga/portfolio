/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modalImage.js":
/*!**************************************!*\
  !*** ./src/js/modules/modalImage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modalImage = () => {
  const imagesParent = document.querySelector('.portfolio__body'),
        images = document.querySelectorAll('.portfolio__img'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.modal__close');
  imagesParent.addEventListener('click', e => {
    if (e.target && e.target.nodeName === 'IMG') {
      images.forEach(item => {
        if (e.target === item) {
          let srcPath = e.target.src.slice(e.target.src.indexOf('img'));
          const imageBig = document.createElement('img');
          imageBig.setAttribute('alt', e.target.alt);
          imageBig.setAttribute('src', srcPath);
          imageBig.classList.add('appear');
          modal.append(imageBig);
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      });
    }
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target === close && modal.style.display !== 'none') {
      modal.style.display = '';
      modal.removeChild(modal.lastElementChild);
      document.body.style.overflow = '';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalImage);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tabs = () => {
  const tabHeadersParent = document.querySelector('.portfolio__tabs'),
        tabHeaders = document.querySelectorAll('.portfolio__tab'),
        tabContentItems = document.querySelectorAll('.portfolio__item'),
        tabActiveClass = 'portfolio__tab_active';

  function hideTabContent() {
    tabContentItems.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('appear');
    });
    tabHeaders.forEach(item => {
      item.classList.remove(tabActiveClass);
    });
  }

  function showTabContent(type) {
    tabContentItems.forEach(item => {
      if (item.classList.contains(type)) {
        item.classList.add('appear');
        item.style.display = 'block';
      }
    });
    tabHeaders.forEach(item => {
      if (item.getAttribute('data-tab') === type) {
        item.classList.add(tabActiveClass);
      }
    });
  }

  tabHeadersParent.addEventListener('click', e => {
    if (e.target && e.target.classList.contains('portfolio__tab')) {
      tabHeaders.forEach(item => {
        if (e.target === item) {
          let contentType = e.target.getAttribute('data-tab');
          hideTabContent();
          showTabContent(contentType);
        }
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_modalImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalImage */ "./src/js/modules/modalImage.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_modalImage__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map