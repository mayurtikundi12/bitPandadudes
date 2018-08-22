//starting from the top (header)
//getting the notification element and placing an onclick listner to it
var notification_elem = document.getElementById("div_id_notification");
notification_elem.onclick= function open_notification(){
location.href="../pages/pay.html";
}

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
