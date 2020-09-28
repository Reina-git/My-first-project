/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

$(".plusminus1").click(function () {
  $(".p1").toggle();
  $(".plus1").toggle();
  $(".minus1").toggle();
});

$(".plusminus2").click(function () {
  $(".p2").toggle();
  $(".plus2").toggle();
  $(".minus2").toggle();
});

$(".plusminus3").click(function () {
  $(".p3").toggle();
  $(".plus3").toggle();
  $(".minus3").toggle();
});

$("#Professional").click(function () {
  $("#e-mail-button").html("E-mail Professional Request");
});

$("#Personal").click(function () {
  $("#e-mail-button").html("E-mail Personal Request");
});

$("#e-mail-body").keypress(function () {
  $("#e-mail-button").removeClass("disabled");
});

$("#Not-A-Robot").click(function () {
  $("#Not-A-Robot").removeClass("is-invalid");
});
$("#e-mail-button").click(function () {
  window.open(
    "mailto:reinadu@gmail.com?subject=Hello&body=" +
      $("textarea#e-mail-body").val()
  );
});

$("#Not-A-Robot").click(function () {
  $("#Not-A-Robot").removeClass("text-danger");
});
