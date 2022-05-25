let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  if ($(window).scrollTop() > 300) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});