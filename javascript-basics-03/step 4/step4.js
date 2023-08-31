let password=document.querySelector("#password")
let confirm=document.querySelector("#confirmation")
let btn=document.querySelector("button")
let pass_value=password.value;

let change_border=function(){
    if(pass_value!==null || pass_value!=="s1234"){
        password.style.border="2px solid red";
        confirm.style.border="2px solid red"
    }
}
btn.addEventListener("click",change_border)