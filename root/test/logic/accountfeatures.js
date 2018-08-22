//starting from the main body


//getting the myorder element and placing an onclick listner to it
var myorder_elem = document.getElementById("div_id_account_feature_order");
myorder_elem.onclick= function open_my_order(){
location.href="../pages/myorders.html";
}


//getting the security element and placing an onclick listner to it
var security = document.getElementById("div_id_account_feature_security");
security.onclick= function open_security(){
location.href="../pages/security.html";
}

//getting the profile info element and placing an onclick listner to it
var my_wallet_elem = document.getElementById("div_id_account_feature_wallet");
my_wallet_elem.onclick= function open_security(){
location.href="../pages/wallet.html";
}


//getting the profile info element and placing an onclick listner to it
var profile_info_elem = document.getElementById("div_id_account_feature_profile");
profile_info_elem.onclick= function open_security(){
location.href="../pages/profile.html";
}
