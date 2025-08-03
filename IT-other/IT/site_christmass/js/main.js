document.addEventListener("mousemove",(event)=>{

       let circle = document.querySelector(".circle");
       circle.style.backgroundPositionX = `${event.clientX}px`
       circle.style.backgroundPositionY = `${event.clientY}px`

       let body = document.querySelector(".body");
       body.style.backgroundPositionX = `${event.clientX/15}px`
       body.style.backgroundPositionY = `${event.clientY/5}px`
       
       document.querySelectorAll(".shar img").forEach((el)=>{
           el.style.transform = `rotateZ(${event.clientX/100-6}deg)`
           console.log(event.clientX)
       })
       let number = document.querySelectorAll(".wrap-number")
       number.style.bottom = `${event.clientY/10}px`
       number.style.left = `${event.clientX/10}px`
})