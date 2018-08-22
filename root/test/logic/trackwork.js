var progress_bar_txt = document.getElementById("p_id_progress_text")
var progress_bar = document.getElementById("progress_id_progress_bar")

//we will get progress data from backend we just need to append it now
//set the progress amount in the progress text + progress bar
progress_bar.setAttribute("value","50")
var progressamount = progress_bar.getAttribute("value");
progress_bar_txt.innerText = "progress is "+progressamount+"%" ;

console.log(progress_bar_txt);
