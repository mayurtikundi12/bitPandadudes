// first get data from the search input
// send that data to the backend
//have a default list of cards and change it according to the data from the search


//getting the button and setting onclick to send data to backend
var btn_search = document.getElementById('btn_id_search');
btn_search.onclick = function(){
  //getting the data from the search input
   var search_course = document.getElementById('inp_id_search_course').value
   // send this data to the backend in json
   var send_data = {
     'search_course' :search_course
   }
   console.log(send_data);
}



//now getting the data back from the backend we will get name and image

//getting the data for now lets say an object
var backendobj = {array : [
  {
    name:"webdev",
    img : "for now lets say alt 1"
  },
  {
    name:"android",
    img : "for now lets say alt 2"
  },
  {
    name:"security",
    img : "for now lets say alt 3"
  },
  {
    name:"ios",
    img : "for now lets say alt 4"
  }
]} ;

// now taking the data out and putting it into div

 var maindiv  = document.getElementById('div_id_see_courses');
 console.log(maindiv);
var  array = backendobj['array']
for (var innerobj in array) {
  console.log(array[innerobj]['img']);
  var container_div = document.createElement('div');
  container_div.setAttribute('class','div_cls_course_info');
  container_div.setAttribute('id','div_id_course_info');
  maindiv.appendChild(container_div);
// creating the image tag
  var course_img = document.createElement('img');
  // course_img.setAttribute('alt',array[innerobj]['img']);
  course_img.setAttribute('class','img_cls_service');

  container_div.appendChild(course_img);
//creating the course name
  var course_name = document.createElement('p');
  course_name.innerText = array[innerobj]['name'] ;
  course_name.setAttribute('class','p_cls_service_name');

  container_div.appendChild(course_name);
}
