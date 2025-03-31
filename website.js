//VARIABLES
var accordions = document.getElementsByClassName("accordion");
var slideIndex = 0;

function myFunction() {
  var x = document.getElementById("myNavBar");
  var ic = document.getElementById("myIcon");
  ic.classList.toggle('fa-bars');
  ic.classList.toggle('fa-times');
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}


//LIGHTBOX CODE
function openModal() {
  document.getElementById("myLightbox").style.display = "flex";
  var hoverImages = document.getElementsByClassName("gallery-image-hover");
  for (i = 0; i < hoverImages.length; i++) {
    hoverImages[i].classList.remove("hover-active");
  }
}

// Close the lightbox
function closeModal() {
  document.getElementById("myLightbox").style.display = "none";
  var hoverImages = document.getElementsByClassName("gallery-image-hover");
  for (i = 0; i < hoverImages.length; i++) {
    hoverImages[i].classList.add("hover-active");
  }
}

// Next/previous controls
function plusSlides(n, vid=false) {
  if(!vid){
    showSlidesImages(slideIndex += n);
  } else{
    console.log("video)");
    showSlidesVideos(slideIndex += n);
  }
}

// Thumbnail image controls
function currentSlide(n, vid = false) {
  console.log(vid)
  if(!vid){
    showSlidesImages(slideIndex = n);
  } else{
    showSlidesVideos(slideIndex = n);
  }
}

function showSlidesImages(n) {
  var i;
  var mySlides = document.getElementsByClassName("gallery-image");
  if(n>=0 && n < mySlides.length){
    console.log("Showing image")
    var numberText = (n+1).toString() + "/" + mySlides.length.toString();
    var currSlide = document.getElementById("mySlides");
    var downloadLink = document.getElementById("downloadLink");
    currSlide.getElementsByTagName("img")[0].src = mySlides[n].getElementsByTagName("img")[0].src;
    if(mySlides[n].classList.contains("pdf-available")){
      downloadLink.getElementsByTagName("a")[0].href = mySlides[n].getElementsByTagName("a")[0].href;
      downloadLink.style.display = "block";
    } else {
      if(downloadLink){
        downloadLink.style.display = "none";
      }
    }
    console.log(numberText);
    document.getElementById("myNumberText").textContent = numberText;
    document.getElementById("caption").textContent = mySlides[n].getAttribute("alt");
  } else {
    if(n<0){
      slideIndex = 0;
    } else{
      slideIndex = mySlides.length-1;
    }
  }
}

function showSlidesVideos(n) {
  var i;
  var mySlides = document.getElementsByClassName("gallery-image");
  if(n>=0 && n < mySlides.length){
    var numberText = (n+1).toString() + "/" + mySlides.length.toString();
    var currSlide = document.getElementById("mySlides");
    currSlide.getElementsByTagName("source")[0].src = mySlides[n].getElementsByTagName("video")[0].src;
    currSlide.getElementsByTagName("source")[0].type = mySlides[n].getElementsByTagName("video")[0].getAttribute("type");
    console.log(mySlides[n].getElementsByTagName("video")[0]);
    currSlide.querySelector(".slideshow-video").load();
    document.getElementById("myNumberText").textContent = numberText;
    document.getElementById("caption").textContent = mySlides[n].getAttribute("alt");
  } else {
    if(n<0){
      slideIndex = 0;
    } else{
      slideIndex = mySlides.length-1;
    }
  }
}



//Accordion menu code
for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}


document.querySelectorAll(".gallery-video").forEach(function(vid) {
  vid.onmouseover = function() {
    console.log("mouseoer");
    this.querySelector(".video-preview").play();
  }
  vid.onmouseout = function() {
    this.querySelector(".video-preview").load();
  }
})
  