function validateForm() {
const alertbox1 = document.getElementById('alertbox1');
const alertbox2 = document.getElementById('alertbox2');
let name = document.forms["myForm"]["name"].value;
let surname = document.forms["myForm"]["surname"].value;
let number = document.forms["myForm"]["number"].value;
let email = document.forms["myForm"]["email"].value;
let message = document.forms["myForm"]["message"].value;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (name.trim() == "" || surname.trim() == "" || number.trim() =="" || email.trim() =="" || message.trim() =="" ) {
    alertbox1.style.display = "block";
    return false;
  }
if (!emailPattern.test(email)) {
    alertbox2.style.display = "block";
    return false;
}

};

function toggle() {
if(alertbox1.style.display === "block"){
alertbox1.style.display = "none";
}
if(alertbox2.style.display === "block"){
alertbox2.style.display = "none";
}
};

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}


