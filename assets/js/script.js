//Menu burger
function toggleMenu() {
  var menu1 = document.getElementById("menu1");
  var menu2 = document.getElementById("menu2");
  var burger = document.getElementById("burger");
  
  menu1.classList.toggle("active");
  menu2.classList.toggle("active");
  burger.classList.toggle("active");
}
//*Bouton plus 
document.querySelector(".plus").addEventListener("click", apparait);
function apparait(){
  document.querySelector(".plusinfo").style.display = "block";
  this.style.display = "none";
}
//*jauge
var pourcentage = 0;
function progression(){
    if(pourcentage<60){
    const element = document.getElementById("pourcentage");
    pourcentage=parseInt(element.innerHTML);
    pourcentage++;
    element.innerHTML = pourcentage;
    const donspourcentage = document.getElementById("donspourcentage");
    donspourcentage.style.width = pourcentage+"%";
    }
    
}

var derniere_position_de_scroll_connue = 0;
var ticking = false;

function faireQuelqueChose(position_scroll) {
    setInterval(progression, 80);
}

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if(derniere_position_de_scroll_connue > 1100){
      faireQuelqueChose(derniere_position_de_scroll_connue);
      console.log(derniere_position_de_scroll_connue);
        }

      ticking = false;
    });
  }

  ticking = true;
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
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





