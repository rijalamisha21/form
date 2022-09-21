const input= ()=>{
    return document.querySelectorAll("input")
}

const getId= (id)=>{
    return document.getElementById(id)
}

getId("register").addEventListener("click", ()=>{
    
    getId("form").addEventListener("submit", (e)=>{
        console.log("hii")
        e.preventDefault();
        NameError();
        passwordError();
        // emailError();

    })
})
const NameError= ()=>{
   const firstName= getId("firstname").value;
   const errorfirstName= getId("firstname-error");
   if(!firstName.length){
    errorfirstName.innerHTML= "First Name is required";
   }
   else{
    console.log("true")
   }
  
}
const passwordError= ()=>{
    const password= getId("password")
    const errorPassword= getId("password-error")
    if (!password.value.length) {
        errorPassword.innerHTML = `Password field is empty`;
      }
}