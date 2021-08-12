
var slideIndex = 1;
  showSlides(slideIndex);


var slideIndexAV = 1;
  showSlidesAV(slideIndexAV);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Next/previous controls
function plusSlidesAV(a) {
  showSlidesAV(slideIndexAV += a);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Thumbnail image controls
function currentSlideAV(a) {
  showSlidesAV(slideIndexAV = a);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlidesAV(a) {
  var i;
  var slides = document.getElementsByClassName("mySlidesAV");
  var dots = document.getElementsByClassName("dotAV");
  if (a > slides.length) {slideIndexAV = 1}
  if (a < 1) {slideIndexAV = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexAV-1].style.display = "block";
  dots[slideIndexAV-1].className += " active";
}



