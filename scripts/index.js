// nav-bar
let toggled = false;
const nav = document.getElementsByClassName('nav')[0];
const btn = document.getElementsByClassName('nav-tgl')[0];
const navUl = document.getElementsByClassName('nav-toggle')[0];

$(document).ready(function(){
  $("#landing").click(function() {
    hideNav();
    $('html,body').animate({
        scrollTop: $("#landingSection").offset().top},
        1000);
  });

  $("#aboutUs").click(function() {
    hideNav();
    $('html,body').animate({
        scrollTop: $("#aboutUsSection").offset().top},
        1000);
  });

  $("#problemStatements").click(function() {
    hideNav();
    $('html,body').animate({
        scrollTop: $("#problemStatementsSection").offset().top},
        1000);
  });

  $("#eventFormat").click(function() {
    hideNav();
    $('html,body').animate({
        scrollTop: $("#eventFormatSection").offset().top},
        1000);
  });

  $("#gallery").click(function() {
    hideNav();
    $('html,body').animate({
        scrollTop: $("#gallerySection").offset().top},
        1000);
  });

  $("#timeline").click(function() {
    hideNav();
    $('html,body').animate({
        scrollTop: $("#timelineSection").offset().top},
        1000);
  });

  $("#contact").click(function() {
    hideNav();
    $('html,body').animate({
        scrollTop: $("#contactSection").offset().top},
        1000);
  });

  //dots in aboutpage
  for (var i=0;i<16;i++) { 
      $("#matrix").append("<div class='dot' style='width:"+ 7+"px; height:"+7+"px'></div>");
 
 }

});


btn.onclick = function(evt) {
  if (!toggled) {
    showNav();
  } else {
    hideNav();
  }
}

function showNav() {
  toggled = true;
  btn.classList.add('toggled');
  nav.classList.add('active');
  setTimeout(function() {
    navUl.classList.remove('nav-toggle');
  },400)
}

function hideNav() {
  toggled = false;
  btn.classList.remove('toggled');
  nav.classList.remove('active');
  navUl.classList.add('nav-toggle');
}


