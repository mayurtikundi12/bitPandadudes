function toggle() {
  var el = document.querySelector('#menu');
  var real = el.getAttribute("class");
  var right = document.querySelector('i');
  if (real == "hide") {
    el.setAttribute("class" , "show");
    right.setAttribute("class" , "fa fa-chevron-left");

  } else {
    el.setAttribute("class" , "hide");
    right.setAttribute("class" , "fa fa-chevron-right");
  }

}
