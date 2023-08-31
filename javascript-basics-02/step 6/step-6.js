document.addEventListener("DOMContentLoaded",()=>{
  let containers = document.querySelectorAll("img")

  containers.forEach((img)=>{
    img.addEventListener("mouseover",()=>{
      img.setAttribute('src', `./images/${img.id}_2.jpg`)

      img.addEventListener("mouseout",()=>{
        img.setAttribute('src',`./images/${img.id}.jpg`)
      })

    })
  })
})