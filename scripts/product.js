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

//ster rate systeem samen met chatgpt bron: https://chat.openai.com/

document.addEventListener('DOMContentLoaded', function () {
  const starRating = document.getElementById('star-rating');
  const stars = starRating.querySelectorAll('li');
  console.log("de sterren doen het eindelijk :)");


  stars.forEach(star => {
    star.addEventListener('click', function () {
      const value = this.getAttribute('data-value');
      resetStars();
      highlightStars(value);
    });
  });

  function resetStars() {
    stars.forEach(star => {
      star.classList.remove('selected');
    });
  }

  function highlightStars(value) {
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('selected');
    }
  }
});
