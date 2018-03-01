/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"MediaMonks - Frontend Exam // Gonzalo Spota\")\n\n//Arrays used to quickly add or remove css visibility classes, as well as adding event listeners to .nav-items and .arrow\nvar numberOfNavItems = document.querySelectorAll(\".nav-item\");\nvar numberOfSliderItems = document.querySelectorAll(\".slider-container\");\n\nfor (var i = 0; i < numberOfNavItems.length; i++) \n\tnumberOfNavItems[i].addEventListener(\"click\", navItemButtonClicked);\n\n//arrows[0] is the left arrow, arrows[1] the right one.\nvar arrows = document.querySelectorAll(\".arrow\")\narrows[0].addEventListener(\"click\", leftArrowClicked);\narrows[1].addEventListener(\"click\", rightArrowClicked);\n\nvar bgImg = document.querySelector(\".bg\");\n\n//Check current slide and arrange its contents position. If left, right or top.\nfunction arrangeSliderContainer(currentSlide) {\n\tfor (var i = 0; i < numberOfSliderItems.length; i++) {\n\t\tnumberOfSliderItems[i].classList.add(\"hidden\");\n\t\tnumberOfSliderItems[i].classList.remove(\"active\");\n\t}\n\tif (currentSlide == \"0\") {\n\t\tnumberOfSliderItems[currentSlide].style.top = \"0%\";\n\t\tnumberOfSliderItems[currentSlide].classList.add(\"active\");\n\t\tnumberOfSliderItems[currentSlide].classList.remove(\"hidden\");\n\t\treturn;\n\t}\n\tif (currentSlide == \"1\" || currentSlide == \"2\" || currentSlide == \"6\" || currentSlide == \"7\" || currentSlide == \"8\") {\n\t\tnumberOfSliderItems[currentSlide].classList.add(\"active\");\n\t\tnumberOfSliderItems[currentSlide].classList.remove(\"hidden\");\n\t\tnumberOfSliderItems[currentSlide].style.textAlign = \"left\";\n\t}\n\telse {\n\t\tnumberOfSliderItems[currentSlide].classList.add(\"active\");\n\t\tnumberOfSliderItems[currentSlide].classList.remove(\"hidden\");\n\t\tnumberOfSliderItems[currentSlide].style.textAlign = \"right\";\n\t}\n}\n\n//Check current slide and show, or hide, \"In January 2011\" and \"Step X out of 8\" captions.\n//Worth mentioning that the following function makes a call to arrangeSliderContainer.\nfunction checkCaptionsAndUpdate(currentSlide) {\n\tvar introCaption = document.querySelector(\".intro-caption\");\n\tvar captionOf = document.querySelector(\".caption-of\");\n\tvar currentCaption = document.querySelector(\".current-caption\");\n\tarrangeSliderContainer(currentSlide);\n\tif (currentSlide != \"0\" && currentSlide != \"9\") {\n\t\tcaptionOf.classList.remove(\"hidden\");\n\t\tcaptionOf.classList.add(\"active\");\n\t\tcurrentCaption.innerHTML = currentSlide;\n\t\tintroCaption.classList.add(\"hidden\");\n\t\tintroCaption.classList.remove(\"active\");\n\t}\n\telse {\n\t\tcaptionOf.classList.remove(\"active\");\n\t\tcaptionOf.classList.add(\"hidden\");\n\t\tif (currentSlide == \"9\")\n\t\t\treturn;\n\t\tintroCaption.classList.remove(\"hidden\");\n\t\tintroCaption.classList.add(\"active\");\n\t}\n}\n\n//Simple function to add a background-color to navigation items for current slide.\nfunction checkActiveNavItem(currentSlide) {\n\tfor (var i = 0; i < numberOfNavItems.length; i++) {\n\t\tnumberOfNavItems[i].classList.remove(\"active-nav-item\");\n\t}\n\tnumberOfNavItems[currentSlide].classList.add(\"active-nav-item\");\n}\n\n/*///\n\tNOTE: Each of the following functions make calls to checkCaptionsAndUpdate and checkActiveNavItem.\n///*/\n\n//Switch to X slide by clicking on X navigation item. It also refreshes dataset for left and right arrows.\nfunction navItemButtonClicked(e) {\n\tvar captionNumber = e.target.dataset.captionnumber;\n\tcheckCaptionsAndUpdate(captionNumber);\n\tcheckActiveNavItem(captionNumber);\n\tbgImg.setAttribute(\"class\", \"\");\n\tbgImg.classList.add(\"bg\");\n\tbgImg.classList.add(\"bg-caption-\" + captionNumber); //Used to make the background \"slide\" by adding a class. That class uses transform: translateX(X%).\n\tvar leftArrow = Number(captionNumber) - 1;\n\tvar rightArrow = Number(captionNumber) + 1;\n\tarrows[0].dataset.nextslide = leftArrow;\n\tarrows[1].dataset.nextslide = rightArrow;\n\tif (captionNumber == \"9\") {\n\t\tarrows[1].classList.add(\"hidden\");\n\t\tarrows[1].classList.remove(\"active\");\n\t}\n\telse {\n\t\tarrows[1].classList.add(\"active\");\n\t\tarrows[1].classList.remove(\"hidden\");\n\t}\n\tif (captionNumber == \"0\") {\n\t\tarrows[0].classList.add(\"hidden\");\n\t\tarrows[0].classList.remove(\"active\");\n\t}\n\telse {\n\t\tarrows[0].classList.add(\"active\");\n\t\tarrows[0].classList.remove(\"hidden\");\n\t}\n}\n\n//Change to contiguous left slide.\nfunction leftArrowClicked(e) {\n\tvar arrowTarget = e.target.dataset.nextslide;\n\tif (bgImg.classList.contains(\"bg-caption-\" + arrowTarget)) {\n\t\t--arrowTarget;\n\t}\n\tcheckCaptionsAndUpdate(arrowTarget);\n\tcheckActiveNavItem(arrowTarget);\n\tbgImg.setAttribute(\"class\", \"\");\n\tbgImg.classList.add(\"bg\");\n\tbgImg.classList.add(\"bg-caption-\" + arrowTarget);\n\tvar auxStrToInt = parseInt(arrowTarget, 10);\n\tauxStrToInt--;\n\tarrows[1].dataset.nextslide = arrowTarget;\n\tarrows[0].dataset.nextslide = auxStrToInt.toString();\n\tarrows[1].classList.add(\"active\");\n\tarrows[1].classList.remove(\"hidden\");\n\tif (arrowTarget == \"0\") {\n\t\tarrows[0].classList.add(\"hidden\");\n\t\tarrows[0].classList.remove(\"active\");\n\t}\n}\n\n//Right, lol.\nfunction rightArrowClicked(e) {\n\tvar arrowTarget = e.target.dataset.nextslide;\n\tif (bgImg.classList.contains(\"bg-caption-\" + arrowTarget)) {\n\t\t++arrowTarget;\n\t}\n\tcheckCaptionsAndUpdate(arrowTarget);\n\tcheckActiveNavItem(arrowTarget);\n\tbgImg.setAttribute(\"class\", \"\");\n\tbgImg.classList.add(\"bg\");\n\tbgImg.classList.add(\"bg-caption-\" + arrowTarget);\n\tvar auxStrToInt = parseInt(arrowTarget, 10);\n\tauxStrToInt++;\n\tarrows[1].dataset.nextslide = auxStrToInt.toString();\n\tarrows[0].dataset.nextslide = arrowTarget;\n\tarrows[0].classList.add(\"active\");\n\tarrows[0].classList.remove(\"hidden\");\n\tif (arrowTarget == \"9\") {\n\t\tarrows[1].classList.add(\"hidden\");\n\t\tarrows[1].classList.remove(\"active\");\n\t}\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });