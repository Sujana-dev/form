let inputBox = document.querySelector(".input_box")

let button = document.querySelector(".btn")

let getOutput = document.querySelector(".output")

button.addEventListener("click",function(){
    // getOutput.innerHTML = inputBox.value 

    if(inputBox.value == ""){
        getOutput.innerHTML = "Please enter your name"
    }
      else{
        getOutput.innerHTML = inputBox.value 
      }
})