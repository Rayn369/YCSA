$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

// Smooth Scrolling
$("nav li a, .more").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 10,
      },
      900
    );
  }
});

var zero = 0;
$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".side-menu").toggleClass("hide", $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });
});
