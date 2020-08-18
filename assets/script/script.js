
const jumbo = document.querySelector('.jumbotron');
const caption = document.getElementById('caption');
const mask = document.getElementById('mask');
const wash = document.getElementById('wash');
const sport = document.getElementById('sport');
const foot = document.getElementById('footer');


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
    var body = document.body,
    html = document.documentElement;
console.log(Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight ))
function scroll() {
  if (document.documentElement.scrollTop > 500) {
    upButton.style.opacity = ".7";
    upButton.style.zIndex = "10";
    upButton.style.marginBottom = "0";
    upButton.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 1s";    
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - foot.offsetHeight + 10) {
      upButton.style.bottom = "5em";
      upButton.style.transition = "cubic-bezier(0.18, 0.89, 0.32, 1.28) 1s";  
    }
    else
    {
      upButton.style.bottom = "1.5em";
    }
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

       $.getJSON('https://coronavirus-19-api.herokuapp.com/countries/Indonesia', function(data) {
        
        const kasusTotal = `${data.cases}`
        const kasusHari = `${data.todayCases}`
        const kasusJuta = `${data.casesPerOneMillion}`
        const korbanTotal = `${data.deaths}`
        const korbanHari = `${data.todayDeaths}`
        const korbanJuta = `${data.deathsPerOneMillion}`
        const tesTotal = `${data.totalTests}`
        const tesJuta = `${data.testsPerOneMillion}`
        const sembuh = `${data.recovered}`
        const aktif = `${data.active}`
        
        $(".totalCases").html(Intl.NumberFormat('de-DE').format(kasusTotal));
        $(".todayCases").html(Intl.NumberFormat('de-DE').format(kasusHari));
        $(".casesPerMillion").html(Intl.NumberFormat('de-DE').format(kasusJuta));
        $(".deaths").html(Intl.NumberFormat('de-DE').format(korbanTotal));
        $(".todayDeaths").html(Intl.NumberFormat('de-DE').format(korbanHari));
        $(".deathsPerMillion").html(Intl.NumberFormat('de-DE').format(korbanJuta));
        $(".totalTests").html(Intl.NumberFormat('de-DE').format(tesTotal));
        $(".testsPerMillion").html(Intl.NumberFormat('de-DE').format(tesJuta));
        $(".recovered").html(Intl.NumberFormat('de-DE').format(sembuh));
        $(".active").html(Intl.NumberFormat('de-DE').format(aktif));

        const tanggal = new Date();

        const thn = tanggal.getFullYear();
        const bln = tanggal.getMonth() + 1;
        const tgl = tanggal.getDate();

        const tglformat = `Per tanggal ${tgl}-${bln}-${thn}` 

        $(".tanggal").html(tglformat);

      });