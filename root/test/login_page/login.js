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
