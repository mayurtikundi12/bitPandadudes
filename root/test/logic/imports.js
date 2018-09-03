$(document).ready(function(){
  $.get("header_only.html", function(data) {
    $("#header").html(data);
  });
});
