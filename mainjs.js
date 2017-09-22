window.onload = function() {
  $(".headline1").click(function() {
    console.log("hi")
    $(".headline1").toggleClass("headline2");
  });
}
