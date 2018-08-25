function toggle() {
  var el = document.querySelector('#div_id_menu');
  var real = el.getAttribute("class");
  var right = document.querySelector('#icon_id_arrow');
  if (real == "div_cls_menu_hide") {
    el.setAttribute("class" , "div_cls_menu_show");
    right.setAttribute("class" , "fa fa-chevron-left");

  } else {
    el.setAttribute("class" , "div_cls_menu_hide");
    right.setAttribute("class" , "fa fa-chevron-right");
  }

}
