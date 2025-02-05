function validate(){
    const username = document.getElementById("username")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confriPassword")

    if(username.value === ""){
       const errUser = "Must have a Username"
       document.querySelector(".userErr").textContent = errUser
       document.form1.username.focus()
        return false
    }

    if(email.value === ""){
        const errorMsg = "Enter a email"
       document.querySelector(".mailErr").textContent = errorMsg
        document.form1.email.focus()
        return false
    }

    if(password.value === "" || password.value.length < 6){
        const errorMsg = "Password Must Contain 6 Character"
       document.querySelector(".passErr").textContent = errorMsg
        document.form1.password.focus()
        return false
    }

    if(confirmPassword.value === "" ){
        const errorMsg = "Enter Your Password"
       document.querySelector(".cmPassErr").textContent = errorMsg
        document.form1.confirmPassword.focus()
        return false
    }

    if(confirmPassword.value != password ){
        const errorMsg = "Please Check Your Password"
       document.querySelector(".cmPassErr").textContent = errorMsg
        document.form1.confirmPassword.focus()
        return false
    }
    return true 
   
}