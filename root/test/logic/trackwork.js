var progress_bar_txt = document.getElementById("p_id_progress_text")
var progress_bar = document.getElementById("progress_id_progress_bar")

//we will get progress data from backend we just need to append it now
//set the progress amount in the progress text + progress bar
progress_bar.setAttribute("value","50")
var progressamount = progress_bar.getAttribute("value");
progress_bar_txt.innerText = "progress is "+progressamount+"%" ;

//placing onclick on the show details btn
btnShow = document.getElementById('btn_id_show_details');
//getting the inner details div
divInnerDetails = document.getElementById('div_id_progress_inner_details')
var isClicked = false ;
divInnerDetails.style.visibility = 'hidden' ;
console.log(divInnerDetails);
btnShow.onclick = function(){
  if(!isClicked){
    divInnerDetails.style.visibility = 'visible' ;
    isClicked = true ;
    console.log('inside the if part');
  }else{
    divInnerDetails.style.visibility = 'hidden' ;
    console.log('inside else part');
isClicked = false ;
  }

}
