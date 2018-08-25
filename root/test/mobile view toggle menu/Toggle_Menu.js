

function toggleOut() {
  var menu = document.querySelector('#div_id_menu');
  var cls = menu.getAttribute("class");
  var up = document.querySelector('#icon_id_arrow');
  if (cls == "div_cls_menu_hide") {
    menu.setAttribute("class" , "div_cls_menu_show");
    up.setAttribute("class" , "fa fa-chevron-down");

  } else {
    menu.setAttribute("class" , "div_cls_menu_hide");
    up.setAttribute("class" , "fa fa-chevron-up");
  }
}
