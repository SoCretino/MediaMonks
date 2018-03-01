console.log("MediaMonks - Frontend Exam // Gonzalo Spota")

//Arrays used to quickly add or remove css visibility classes, as well as adding event listeners to .nav-items and .arrow
var numberOfNavItems = document.querySelectorAll(".nav-item");
var numberOfSliderItems = document.querySelectorAll(".slider-container");

for (var i = 0; i < numberOfNavItems.length; i++) 
	numberOfNavItems[i].addEventListener("click", navItemButtonClicked);

//arrows[0] is the left arrow, arrows[1] the right one.
var arrows = document.querySelectorAll(".arrow")
arrows[0].addEventListener("click", leftArrowClicked);
arrows[1].addEventListener("click", rightArrowClicked);

var bgImg = document.querySelector(".bg");

//Check current slide and arrange its contents position. If left, right or top.
function arrangeSliderContainer(currentSlide) {
	for (var i = 0; i < numberOfSliderItems.length; i++) {
		numberOfSliderItems[i].classList.add("hidden");
		numberOfSliderItems[i].classList.remove("active");
	}
	if (currentSlide == "0") {
		numberOfSliderItems[currentSlide].style.top = "0%";
		numberOfSliderItems[currentSlide].classList.add("active");
		numberOfSliderItems[currentSlide].classList.remove("hidden");
		return;
	}
	if (currentSlide == "1" || currentSlide == "2" || currentSlide == "6" || currentSlide == "7" || currentSlide == "8") {
		numberOfSliderItems[currentSlide].classList.add("active");
		numberOfSliderItems[currentSlide].classList.remove("hidden");
		numberOfSliderItems[currentSlide].style.textAlign = "left";
	}
	else {
		numberOfSliderItems[currentSlide].classList.add("active");
		numberOfSliderItems[currentSlide].classList.remove("hidden");
		numberOfSliderItems[currentSlide].style.textAlign = "right";
	}
}

//Check current slide and show, or hide, "In January 2011" and "Step X out of 8" captions.
//Worth mentioning that the following function makes a call to arrangeSliderContainer.
function checkCaptionsAndUpdate(currentSlide) {
	var introCaption = document.querySelector(".intro-caption");
	var captionOf = document.querySelector(".caption-of");
	var currentCaption = document.querySelector(".current-caption");
	arrangeSliderContainer(currentSlide);
	if (currentSlide != "0" && currentSlide != "9") {
		captionOf.classList.remove("hidden");
		captionOf.classList.add("active");
		currentCaption.innerHTML = currentSlide;
		introCaption.classList.add("hidden");
		introCaption.classList.remove("active");
	}
	else {
		captionOf.classList.remove("active");
		captionOf.classList.add("hidden");
		if (currentSlide == "9")
			return;
		introCaption.classList.remove("hidden");
		introCaption.classList.add("active");
	}
}

//Simple function to add a background-color to navigation items for current slide.
function checkActiveNavItem(currentSlide) {
	for (var i = 0; i < numberOfNavItems.length; i++) {
		numberOfNavItems[i].classList.remove("active-nav-item");
	}
	numberOfNavItems[currentSlide].classList.add("active-nav-item");
}

/*///
	NOTE: Each of the following functions make calls to checkCaptionsAndUpdate and checkActiveNavItem.
///*/

//Switch to X slide by clicking on X navigation item. It also refreshes dataset for left and right arrows.
function navItemButtonClicked(e) {
	var captionNumber = e.target.dataset.captionnumber;
	checkCaptionsAndUpdate(captionNumber);
	checkActiveNavItem(captionNumber);
	bgImg.setAttribute("class", "");
	bgImg.classList.add("bg");
	bgImg.classList.add("bg-caption-" + captionNumber); //Used to make the background "slide" by adding a class. That class uses transform: translateX(X%).
	var leftArrow = Number(captionNumber) - 1;
	var rightArrow = Number(captionNumber) + 1;
	arrows[0].dataset.nextslide = leftArrow;
	arrows[1].dataset.nextslide = rightArrow;
	if (captionNumber == "9") {
		arrows[1].classList.add("hidden");
		arrows[1].classList.remove("active");
	}
	else {
		arrows[1].classList.add("active");
		arrows[1].classList.remove("hidden");
	}
	if (captionNumber == "0") {
		arrows[0].classList.add("hidden");
		arrows[0].classList.remove("active");
	}
	else {
		arrows[0].classList.add("active");
		arrows[0].classList.remove("hidden");
	}
}

//Change to contiguous left slide.
function leftArrowClicked(e) {
	var arrowTarget = e.target.dataset.nextslide;
	if (bgImg.classList.contains("bg-caption-" + arrowTarget)) {
		--arrowTarget;
	}
	checkCaptionsAndUpdate(arrowTarget);
	checkActiveNavItem(arrowTarget);
	bgImg.setAttribute("class", "");
	bgImg.classList.add("bg");
	bgImg.classList.add("bg-caption-" + arrowTarget);
	var auxStrToInt = parseInt(arrowTarget, 10);
	auxStrToInt--;
	arrows[1].dataset.nextslide = arrowTarget;
	arrows[0].dataset.nextslide = auxStrToInt.toString();
	arrows[1].classList.add("active");
	arrows[1].classList.remove("hidden");
	if (arrowTarget == "0") {
		arrows[0].classList.add("hidden");
		arrows[0].classList.remove("active");
	}
}

//Right, lol.
function rightArrowClicked(e) {
	var arrowTarget = e.target.dataset.nextslide;
	if (bgImg.classList.contains("bg-caption-" + arrowTarget)) {
		++arrowTarget;
	}
	checkCaptionsAndUpdate(arrowTarget);
	checkActiveNavItem(arrowTarget);
	bgImg.setAttribute("class", "");
	bgImg.classList.add("bg");
	bgImg.classList.add("bg-caption-" + arrowTarget);
	var auxStrToInt = parseInt(arrowTarget, 10);
	auxStrToInt++;
	arrows[1].dataset.nextslide = auxStrToInt.toString();
	arrows[0].dataset.nextslide = arrowTarget;
	arrows[0].classList.add("active");
	arrows[0].classList.remove("hidden");
	if (arrowTarget == "9") {
		arrows[1].classList.add("hidden");
		arrows[1].classList.remove("active");
	}
}