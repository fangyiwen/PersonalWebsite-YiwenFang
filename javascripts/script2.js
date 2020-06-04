$(document).ready(function () {
  $("tbody tr").hover(function () {
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
});