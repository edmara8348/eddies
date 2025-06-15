        var counter = 1;
        setInterval(function(){
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if(counter > 4){
        counter = 1;
     }
        }, 5000);
let overlayText = document.querySelector(".overlay-text");
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
        overlayText.style.display = "none";
    }
    else{
        menuList.style.maxHeight = "0px";
        overlayText.style.display = "block";
    }
}  