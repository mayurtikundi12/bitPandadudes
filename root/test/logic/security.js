//put the input in the input fields by getting data from the backend
//if user types any new value and saves it update the value in backend

//for changing the password now first take the old Password
//if older password is correct then update the new password to it
//no validation needed for older number
//the new number will be just appended in the db and newest number will be used



//getting the info from input fields in save btn onclick

var btn_save = document.getElementById('btn_id_save_security');
btn_save.onclick = function(){
  var old_password = document.getElementById('inp_id_old_password').value ;
// now validate it here by sending the data
var is_old_pass_correct = true ;
if(is_old_pass_correct){
  var new_password = document.getElementById('inp_id_new_password').value;
//saving the mobileno and checking for the latest one in the backend
  var mobile_no =document.getElementById('inp_id_mobileno').value;
//sending the data
  var send_data = {
    'new_password':new_password,
    'mobile_no':mobile_no
  }
  console.log(send_data);

}
}
