
const jumbo = document.querySelector('.jumbotron');
const caption = document.getElementById('caption');
const mask = document.getElementById('mask');
const wash = document.getElementById('wash');
const sport = document.getElementById('sport');


function changeImg1() 
{ 
  caption.innerHTML = "Wajib Pakai Masker Saat Bepergian!"
  caption.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.9s";
  jumbo.style.backgroundImage = "url('assets/image/mask.svg')";
  jumbo.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.9s";
  mask.classList.add("selected");
  wash.classList.remove("selected");
  sport.classList.remove("selected");
}

function changeImg2() 
{
  caption.innerHTML = "Selalu Ingat untuk Cuci Tangan!"
  caption.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.9s";
  jumbo.style.backgroundImage = "url('assets/image/wash.svg')";
  jumbo.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.9s";
  mask.classList.remove("selected");
  wash.classList.add("selected");
  sport.classList.remove("selected");
}

function changeImg3() 
{ 
  caption.innerHTML = "Jaga Kesehatan dengan Rajin Olahraga"
  caption.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.9s";
  jumbo.style.backgroundImage = "url('assets/image/sport.svg')";
  jumbo.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.9s";
  mask.classList.remove("selected");
  wash.classList.remove("selected");
  sport.classList.add("selected");
}

const upButton = document.getElementById("topBtn");

window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    upButton.style.opacity = ".7";
    upButton.style.zIndex = "10";
    upButton.style.marginBottom = "0";
    upButton.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 1s";    
  } else {
    upButton.style.opacity = ".0";
    upButton.style.zIndex = "0";
    upButton.style.marginBottom = "20em";
    upButton.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 1s";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}