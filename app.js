let nameInput = document.querySelector(".name_input")
let nameOutPut = document.querySelector(".name_output")

let idInput = document.querySelector(".id_input")
let idOutPut = document.querySelector(".id_output")

let emailInput = document.querySelector(".email_input")
let emailOutPut = document.querySelector(".email_output")

let no_input = document.querySelector(".no_input")
let no_output = document.querySelector(".no_output")

let button = document.querySelector(".btn")

button.addEventListener("click",function(){ 

    if(nameInput.value == ""){
        nameOutPut.innerHTML = "Please enter your name"
    }
    else if(idInput.value == ""){
        idOutPut.innerHTML = "Please enter your id"
    }
    else if(emailInput.value == ""){
        emailOutPut.innerHTML = "Please enter your email"
    }
    else if(no_input.value == ""){
        no_output.innerHTML = "Please enter your phone number"
    }

      else{
        nameOutPut.innerHTML = nameInput.value 
        idOutPut.innerHTML = idInput.value
        emailOutPut.innerHTML = emailInput.value
        no_output.innerHTML = no_input.value
      }
})
