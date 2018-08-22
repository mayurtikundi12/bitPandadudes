var work_title = document.getElementById("inp_id_work_title").value
var work_deadline = document.getElementById("inp_id_work_deadline").value
var work_submission_url = document.getElementById("inp_id_work_submission_url").value

var btn_next = document.getElementById("btn_id_submit_newwork");
var main_form = document.getElementById("form_id_newwork");
var form_part1 = document.getElementById("div_id_form_step1")
var form_part2 = document.getElementById("div_id_form_step2")
var form_part3 = document.getElementById("div_id_form_step3")
main_form.removeChild(form_part2);
main_form.removeChild(form_part3);

var count = 0;



btn_next.onclick = function submitdata() {
  // here first store the data to database  code
  console.log("inside the onclick");
  if (count == 0) {
    main_form.removeChild(form_part1);
    main_form.insertBefore(form_part2, btn_next);
  } else if (count == 1) {
    var work_details = document.getElementById("inp_id_work_details").value
    var upload_file = document.getElementById("inp_id_upload_file").value

    main_form.removeChild(form_part2);
    main_form.insertBefore(form_part3, btn_next);
  } else {
    var special_request = document.getElementById("inp_id_special_request").value
    alert("form completed thanku")
    location.href = "../pages/pay.html";



  }
  count++;
  return false;
};
