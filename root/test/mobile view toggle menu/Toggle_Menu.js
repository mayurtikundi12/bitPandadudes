// function toggle() {
//   var el = document.querySelector('#menu');
//   var real = el.getAttribute("class");
//   var right = document.querySelector('i');
//   if (real == "hide") {
//     el.setAttribute("class" , "show");
//     right.setAttribute("class" , "fa fa-chevron-left");
//
//   } else {
//     el.setAttribute("class" , "hide");
//     right.setAttribute("class" , "fa fa-chevron-right");
//   }
//
// }


function toggleOut() {
  var menu = document.querySelector('#menu');
  var cls = menu.getAttribute("class");
  var up = document.querySelector('i');
  if (cls == "hideDown") {
    menu.setAttribute("class" , "showUp");
    up.setAttribute("class" , "fa fa-chevron-down");

  } else {
    menu.setAttribute("class" , "hideDown");
    up.setAttribute("class" , "fa fa-chevron-up");
  }

}


// (function Remove_stylesheet() {
//   var menu = document.querySelector('#menu');
//   var arrow = document.querySelector('#arrow');
//   var menu_arrow = document.querySelector('#menu_arrow');
//   var Mobile_view = document.querySelector('#Mobile_view');
//   var Desktop_view = document.querySelector('#Desktop_view');
//   var height = window.innerHeight;
//   console.log(height);
//   var width =window.innerWidth;
//   console.log(width);
//   if (height <= 800 ) {
//        Desktop_view.disabled = true;
//        menu.setAttribute('class' , 'hideDown')
//         menu_arrow.setAttribute('class','fa-chevron-up')
//         arrow.onclick = toggleUp();
//   }else {
//     Mobile_view.disabled=true;
//     menu.setAttribute('class' , 'hide')
//     menu_arrow.setAttribute('class','fa-chevron-right')
//     arrow.onclick = toggleRight();
//   }
// })();
