$(document).ready(function () {
  $("#open").click(function () {
      var targetcolor = "#fad0ca";

      $(".color-transition")
          .css({ "background-color": targetcolor, "height": "100%" })
          .on("transitionend", function () {
              $("body").css("background-color", targetcolor);
          });
  });
});
