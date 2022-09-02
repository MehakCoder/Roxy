// 1. side-nav
function openNav() {
  document.getElementById("side-nav").style.width = "300px";
  document.body.style.backgroundColor = "#000000";
}
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
  document.body.style.backgroundColor = "white";
}
//2.side-search
function openSearch() {
  document.getElementById("side-search").style.width = "300px";
  document.body.style.backgroundColor = "#000000";
}
function closeSearch() {
  document.getElementById("side-search").style.width = "0";
  document.body.style.backgroundColor = "white";
}
//3.testimonial-silder 
$('#Testimonial-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
// 4. Portfolio

$(".Portfolio-filters a").on('click', function () {

  $(".Portfolio-filters a").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr('data-filter');

  $(".grid-portfolio").isotope({
    filter: selector,
  });

});

//5. client-holder
$('.client-holder ').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
})
//6. AOS
$(function () {

  AOS.init();

});
//7. progress bar
const skillsSection = document.getElementById('skill-item');

const progressBars = document.querySelectorAll('.progress-bar');

function  showProgress(){
   progressBars.forEach(progressBar=>{
        const value = progressBar.dataPercent.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width='${value}%';  
   });
}
function hideProgress(){
  progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener('scroll',() =>{
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos  = window.innerHeight;

  if(sectionPos < screenPos){
    showProgress();
  }else{
    hideProgress();
  } 

  }
);