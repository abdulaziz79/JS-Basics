let colors=document.querySelectorAll(".color")
let text=document.querySelector("#text")

colors.forEach((colors)=>{
    colors.addEventListener("click",(e)=>{
        if(e.target.classList[1]==="green"){
            text.style.color="green"
        }else if(e.target.classList[1]==="red"){
            text.style.color="red"
        }else if(e.target.classList[1]==="blue"){
            text.style.color="blue"
        }
    })
})