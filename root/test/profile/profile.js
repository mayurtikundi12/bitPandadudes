var personal_details_form = document.querySelector('.personal_details_form');
var education_details_form = document.querySelector('.education_details_form');
var next_btn = document.querySelector('.next_btn')
var save_btn = document.querySelector('.save_btn')
var back_btn = document.querySelector('.back_btn')

next_btn.onclick = function() {
  personal_details_form.style.display = 'none';
  education_details_form.style.display = 'block';
}

back_btn.onclick = function () {
  education_details_form.style.display = 'none';
  personal_details_form.style.display = 'block';

}
