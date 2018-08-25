
//------------------------------------------------------------------------------

//starting from the top (header)
//getting the notification element and placing an onclick listner to it

var notification_elem = document.getElementById("div_id_notification");
//getting the msg list div
var msg_container = document.getElementById("div_id_notification_wrapper");


//get the notifications from the backend is present show it else show default
//lets say we get the notification in a json object
var notification_msg  = {
  'notification_msg': ['message1','message2','message3','message4','hello mahesh how are you bro']
}

//getting the number of notification messages and placing it in badge
var notification_badge  = document.getElementById('span_id_badge_notification');
notification_badge.innerText = notification_msg['notification_msg'].length ;

//setting class to the msg list container
msg_container.setAttribute('class','div_cls_msg_container');

var isout = true ;
notification_elem.onclick = function() {
console.log(isout);
if(isout){
  // notification_elem.appendChild(msg_container);
  if(notification_msg['notification_msg'].length==0){
    var notification_list = document.createElement("a");
    notification_list.setAttribute('class','a_cls_notf_msg');
    notification_list.innerHTML ="you have one notification" ;
    msg_container.appendChild(notification_list);

  }else{
    for (var msg in notification_msg['notification_msg']) {
      var notification_list = document.createElement("a");
      notification_list.setAttribute('class','a_cls_notf_msg');
      notification_list.innerHTML =notification_msg['notification_msg'][msg] ;
      msg_container.appendChild(notification_list);
    }
    isout = false ;
  }
}else{
        var notification_list = document.querySelectorAll('.a_cls_notf_msg');
              for(var link=0;link<=notification_list.length-1;link++){
              msg_container.removeChild(notification_list[link]);
            }
    isout = true ;
  }
};







// ----------------------------------------------------------
//getting the brandheader element and placing an onclick listner to it
var brandheader =document.getElementById("div_id_brandheader");
brandheader.onclick= function open_main_brand(){
location.href="../pages/mainpage.html";
}

//getting the share element and placing an onclick listner to it
var share_elem =document.getElementById("div_id_share");
share_elem.onclick= function open_share_brand(){
location.href="../pages/mainpage.html";
}
//ending with header part









//------------------------------------------------------------------------------



//menu bar logic starts here

//getting the menu arrow div  element
var menu_div = document.getElementById('div_id_arrow')
menu_div.onclick = function() {
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
