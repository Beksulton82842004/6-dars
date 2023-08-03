const elInput = document.querySelector(".input") 
const elBtn = document.querySelector(".btn")
const elCircle = document.querySelector(".circle")
const elCircle2 = document.querySelector(".circle2")


  function aylananone() {
    elCircle.style.border = "none";
  }

  function aylana2none() {
    elCircle2.style.border = "none";
  }
  

elBtn.addEventListener("click", function( evt ){
    evt . preventDefault()
    if(elInput.value < 10){
        aylana2none()
    } else if(elInput.value >= 10){
        aylananone()
    }
})
    
