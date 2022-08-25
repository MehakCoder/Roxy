function openNav() {
  document.getElementById("side-nav").style.width = "250px";
  document.getElementById("side-nav-open").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#000000";
}
function closeNav() {
  document.getElementById("side-nav").style.width = "0";
  document.getElementById("side-nav-open").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 
function openSearch() {
  document.getElementById("side-search").style.width = "250px";
  document.getElementById("side-search-open").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#000000";
}
function closeSearch() {
  document.getElementById("side-search").style.width = "0";
  document.getElementById("side-search-open").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$(".Portfolio-filters a").on('click', function () {

  $(".Portfolio-filters a").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr('data-filter');

  $(".product-lists").isotope({
      filter: selector,
  });

});
  