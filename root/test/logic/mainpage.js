console.log('haha works');
//starting with main body contents here
//getting the track work element and placing an onclick listner to it
var track_work =document.getElementById("div_id_track_work");
track_work.onclick= function(){
  console.log('atleast its working');
location.href="../pages/trackwork.html";
}

//getting the new work element and placing an onclick listner to it
var new_work =document.getElementById("div_id_new_work");
new_work.onclick= function(){
location.href="../pages/newwork.html";
}
