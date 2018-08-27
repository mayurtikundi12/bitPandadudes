// //get the data from the inputs
// //if he is already a user he will click on login
// //if he is not a user and he clicks on email input
// //the login button should disappear and only register should remain
//
// var useroremail = document.getElementById('inp_id_username');
// var password = document.getElementById('inp_id_password');
// var email = document.getElementById('inp_id_email') ;
//
// //getting the input fields when clicked on login btn
// var btnlogin = document.getElementById('btn_id_login') ;
// btnlogin.onclick = function(){
//
//   //send the data in the backend
//   var send_data = {
//     'username':useroremail.value ,
//     'password':password.value
//   }
//   console.log(send_data);
//   //do some validation in the backend
//   //and if true take him to the mainpage
//   var isusercorrect = true ; // for now true
//   if (isusercorrect) {
//     alert('success') ;
//     //navigate to the main page
//     location.href = '../pages/mainpage.html'
//   }else{
//     alert("wrong password");
//     useroremail.value = "";
//     password.value = "";
//       }
//
// }
//
// //
// email.onfocus = function(){
//   console.log('onfocus is working');
//   var btn_div = document.getElementById('div_id_form_btn_login');
//   var form = document.getElementById('form_id_login_reg').removeChild(btn_div) ;
// }
//
//
// //getting the input from the email field also and saving it to the backend and opening
// //the profile details page to get the further information
// var btn_register = document.getElementById("btn_id_register") ;
// btn_register.onclick = function(){
//   //as soon as user focuses on the email field remove login btn
//
//   // get the details of all the fields and send it to the backend
//   //open the profile page this time
//   var send_data = {
//     'username':useroremail.value ,
//     'password':password.value ,
//     'email':email.value
//   }
//   console.log(send_data);
//   //navigate to the the profile page
//   location.href = "../pages/profile.html" ;
//   }


// Logic for Login and signup page...................

var signup_form = document.querySelector('.signup_form');
var login_form = document.querySelector('.login_form');
var signup_txt2 = document.querySelector('.signup_txt2');
var login_txt2 = document.querySelector('.login_txt2');

login_txt2.onclick = function() {
  signup_form.style.display = 'none';
  login_form.style.display = 'block';


}

signup_txt2.onclick = function() {
  login_form.style.display = 'none';
  signup_form.style.display = 'block'

}
