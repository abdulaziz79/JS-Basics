document.addEventListener("DOMContentLoaded",()=>{
    let containers = document.querySelectorAll("img")
  
    containers.forEach((img)=>{
      img.addEventListener("mouseover",function(){
        img.setAttribute('src', `./images/${img.id}_2.jpg`)
  
       
      })
    })
  })