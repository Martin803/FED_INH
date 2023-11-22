console.log("js goed gelinkt");

// menu code open en sluiten codepen sanne.

var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;

function openMenu() {  
  var deNav = document.querySelector("nav");
  var carouselContainer = document.querySelector(".carousel-container");

  deNav.classList.add("toonMenu");
  carouselContainer.style.display = "none";
}

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  var carouselContainer = document.querySelector(".carousel-container");

  deNav.classList.remove("toonMenu");
  carouselContainer.style.display = "block";
}

// dit hier onder is alle code voor het carousel dat chatgpt heeft geschreven
// met console.logs voor debuggen

document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentIndex = (index + totalSlides) % totalSlides;
    const transformValue = -50 * currentIndex + '%';
    document.querySelector('.carousel-images').style.transform = 'translateX(' + transformValue + ')';

    console.log("Slide index", currentIndex);
    console.log("transformvalue", transformValue);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
    console.log("Previous", currentIndex);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
    console.log("Next:", currentIndex);
  }

  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  showSlide(currentIndex);
});