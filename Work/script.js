var para = document.getElementById("par");
var button = document.getElementById("button1");
var abutton = document.getElementById("button2");
function sure (){
    para.innerHTML = "Ok";
}
button.addEventListener("click", sure)
abutton.addEventListener("click", sure)
