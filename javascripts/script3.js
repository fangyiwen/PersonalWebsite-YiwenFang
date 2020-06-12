$(document).ready(function () {
  $(".publication").hover(function () {
    $(this).css({"background-color": "#3479b2", "color": "white"});
  }, function () {
    $(this).css({"background-color": "white", "color": "black"});
  });

  $(".side_menu li").not("#menu_current").hover(function () {
    $(this).css("background-color", "#3479b2");
  }, function () {
    $(this).css("background-color", "#c7c2bc");
  });

  $("#menu_current").hover(function () {
    $(this).css("background-color", "#3479b2");
  }, function () {
    $(this).css("background-color", "#002147");
  });

  // Fixed side menu on scroll
  window.onscroll = function () {
    const side_menu = document.getElementById("side_menu");
    (function sticky_side_menu() {
      if (window.pageYOffset > side_menu.offsetTop) {
        side_menu.classList.add("sticky");
      } else {
        side_menu.classList.remove("sticky");
      }
    })();
  };
});