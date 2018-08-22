//first set the image and user name on the page
//if user already has data bring it from the backend and put it inside fileds
//next set onclick on the save button and get the info from input fileds
//after getting data validate it and shoe alert of data saved

//getting the image element
var profile_image = document.getElementById('img_id_profile_pic');
//getting the username element
var profile_uname = document.getElementById('p_id_profile_username');




try {
  //checking from the database if user has image and username

  //check if the user has the image or not from the backend
  // store the result in has_image
  var has_image = false; //just for the time being
  if (has_image == true) {
    //get the Image from the backend
    //get the user name from the backend
    var profile_img_backend = 'srcaddress'
    var profile_uname_backend = 'mayur'; // for the timebeing

    profile_image.setAttribute('src', 'profile_img_backend');
    profile_uname.innerText = profile_uname_backend;

  } else {
    //if user does not have an Image set default image and set onclick
    profile_image.onclick = function() {
      console.log('atleast coming to else part');
      var get_image = document.createElement('input');
      get_image.setAttribute('type', 'file');
      get_image.setAttribute('accept', 'image/*');
      profile_image.setAttribute('src', profile_image);
    }

    //setup onclick on the save button and get all the data from inputs
    //make your own validation
    var btn_save = document.getElementById('btn_id_save_info');

    btn_save.onclick = function() {
      var  college_name = document.getElementById('inp_id_college_name').value;

      var semester = document.getElementById('inp_id_semester').value;
      var education = document.getElementById('inp_id_education').value;
      var courses = document.getElementById('inp_id_courses').value;
       send_backend =  {
        'college_name' : college_name,
        'education' :education ,
        'courses' : courses ,
        'semester': semester
      }

      console.log(send_backend);
    }
  }
} catch (e) {

}
