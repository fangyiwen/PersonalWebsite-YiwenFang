$(document).ready(function () {
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
});