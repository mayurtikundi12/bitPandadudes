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
var element1_created = false;
var element2_created = false;

var btn_step_one = document.getElementById('btn_id_form_step1');
var btn_step_two = document.getElementById('btn_id_form_step2');
var btn_step_three = document.getElementById('btn_id_form_step3');

// -------------------------------------------------------------------------


var submitdata = function() {
  // here first store the data to database  code
  console.log(count);
  if (count == 0) {
    if (element1_created == false) {
      form_part1.setAttribute('class', 'div_cls_form animateout');
      setTimeout(() => {
        //setting focus on btn_step_two
        setfocus(btn_step_two);
        removefocus([btn_step_one, btn_step_three]);

        form_part1.style.display = 'none';
        form_part2.setAttribute('class', 'div_cls_form animatein');
        main_form.insertBefore(form_part2, btn_next);
        isFirstClicked = true;
      }, 1000);
    } else {
      // form_part1.setAttribute('class', 'div_cls_form animateout');
      // setTimeout(() => {
      //   console.log("im in else one");
      //   //setting focus on btn_step_two
      //   setfocus(btn_step_two);
      //   removefocus([btn_step_one, btn_step_three]);
      //
      //   form_part1.style.display = 'none';
      //   form_part2.setAttribute('class', 'div_cls_form animatein');
      //   isFirstClicked = true;
      // }, 1000);
      btnTwoClick();
    }
  } else if (count == 1) {
    if (element2_created == false) {
      var work_details = document.getElementById("inp_id_work_details").value
      var upload_file = document.getElementById("inp_id_upload_file").value
      form_part2.setAttribute('class', 'div_cls_form animateout');
      setTimeout(() => {
        // main_form.removeChild(form_part2);
        form_part2.style.display = 'none';
        main_form.insertBefore(form_part3, btn_next);
        form_part3.setAttribute('class', 'div_cls_form animatein');
        //setting focus on btn_step_three
        setfocus(btn_step_three);
        removefocus([btn_step_one, btn_step_two]);
        isSecondClicked = true;
        element1_created = true;
      }, 1000);
    } else {
      var work_details = document.getElementById("inp_id_work_details").value
      // var upload_file = document.getElementById("inp_id_upload_file").value
      // form_part2.setAttribute('class', 'div_cls_form animateout');
      // setTimeout(() => {
      //   form_part2.style.display = 'none';
      //   form_part3.setAttribute('class', 'div_cls_form animatein');
      //   //setting focus on btn_step_three
      //   setfocus(btn_step_three);
      //   removefocus([btn_step_one, btn_step_two]);
      //   isSecondClicked = true;
      // }, 1000);
      btnThreeClick();
    }
  } else {
    var special_request = document.getElementById("inp_id_special_request").value
    form_part2.setAttribute('class', 'div_cls_form animateout');
    setTimeout(() => {
      alert("form completed thanku");
      location.href = "../pages/pay.html";
    }, 1000);
    element1_created = true;

  }
  count++;
  return false;
};

btn_next.onclick = submitdata;


// ----------------------------------------------------------------------


var isFirstClicked = false;
var isSecondClicked = false;


//putting onclick listener on the form step buttons
//getting step buttons one by one


//creating a function to set focus on form step buttons
function setfocus(element_name) {
  element_name.setAttribute('class', 'btn_cls_form_step btnfocus');
}
//creating a function to remove focus from form step btns
function removefocus(element_names) {
  console.log();
  for (var element in element_names) {
    element_names[element].setAttribute('class', 'btn_cls_form_step');
  }
}
//by default the focus will be one btn_step_one so applying btnfocus class
setfocus(btn_step_one);
btn_step_one.onclick = function btnOneClick() {
  console.log('onclick is working1');
  form_part2.style.display = 'none';
  form_part3.style.display = 'none';
  form_part1.style.display = 'block';
  form_part1.setAttribute('class', 'div_cls_form animatein');
  setfocus(btn_step_one);
  removefocus([btn_step_two, btn_step_three])
  count = 0;
  isFirstClicked = true;
}

btn_step_two.onclick = function btnTwoClick() {
  if (isFirstClicked) {
    console.log('onclick is working2');
    form_part1.style.display = 'none';
    form_part3.style.display = 'none';
    form_part2.style.display = 'block';
    form_part2.setAttribute('class', 'div_cls_form animatein');
    btn_step_two.setAttribute('class', 'btn_cls_form_step btnfocus');
    setfocus(btn_step_two);
    removefocus([btn_step_one, btn_step_three]);
    count = 1;
    isSecondClicked = true;
  } else {
    alert("sorry please fill first step")
  }
}

btn_step_three.onclick = function btnThreeClick() {
  if (isSecondClicked) {
    console.log('onclick is working3');
    form_part1.style.display = 'none';
    form_part2.style.display = 'none';
    form_part3.style.display = 'block';
    form_part3.setAttribute('class', 'div_cls_form animatein');
    btn_step_three.setAttribute('class', 'btn_cls_form_step btnfocus');
    setfocus(btn_step_three);
    removefocus([btn_step_one, btn_step_two]);
    count = 2;
  } else {
    alert("sorry please fill previous step")
  }
}
