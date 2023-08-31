let tags=document.querySelectorAll("a")
let text=document.querySelector("#texte")

tags.forEach((a)=>{
    a.addEventListener("click",(e)=>{
        if (e.target.id==="hide" ){
            text.style.display="none"

        }else if(e.target.id==="show" ){
            text.style.display="block"


        }
    })
})
