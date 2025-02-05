
// // document.getElementById("submit").addEventListener("click", function(event) { 
// //     event.preventDefault();
    
// //     if(validate()){
// //         alert("Form Submitted Successfully!")
// //         document.getElementById("myForm").rest()

//     // }

// function validate() {
//     const username = document.getElementById("username");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const confirmPassword = document.getElementById("confirmPassword");

//     let isValid = true;

//     if (username.value === "") {
//         document.querySelector(".userErr").textContent = "Must have a Username";
//         document.form1.username.focus();
//         isValid = false;
//     } else {
//         document.querySelector(".userErr").textContent = ""; 
//        }

//     if (email.value === "") {
//         document.querySelector(".mailErr").textContent = "Enter an email";
//         document.form1.email.focus();
//         isValid = false;
//     } else {
//         document.querySelector(".mailErr").textContent = ""; 
//     }

//     if (password.value === "" || password.value.length < 6) {
//         document.querySelector(".passErr").textContent = "Password Must Contain 6 Characters";
//         document.form1.password.focus();
//         isValid = false;
//     } else {
//         document.querySelector(".passErr").textContent = ""; 
//     }

//     if (confirmPassword.value === "") {
//         document.querySelector(".cmPassErr").textContent = "Enter Your Password";
//         document.form1.confirmPassword.focus();
//         isValid = false;
//     } else if (confirmPassword.value !== password.value) {
//         document.querySelector(".cmPassErr").textContent = "Please Check Your Password";
//         document.form1.confirmPassword.focus();
//         isValid = false;
//     } else {
//         document.querySelector(".cmPassErr").textContent = ""; 
//     }

//     if(isValid){
//         alert("Form Submitted Successfully!");
//         document.getElementById("myForm").reset();
//     }

//     return isValid;
// }
// // })


function validate() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    let isValid = true;

  
    if (username.value === "") {
        document.querySelector(".userErr").textContent = "Must have a Username";
        isValid = false;
    } else {
        document.querySelector(".userErr").textContent = "";
    }

    if (email.value === "") {
        document.querySelector(".mailErr").textContent = "Enter an email";
        isValid = false;
    } else {
        document.querySelector(".mailErr").textContent = "";
    }

    if (password.value === "" || password.value.length < 6) {
        document.querySelector(".passErr").textContent = "Password Must Contain 6 Characters";
        isValid = false;
    } else {
        document.querySelector(".passErr").textContent = "";
    }

    if (confirmPassword.value === "") {
        document.querySelector(".cmPassErr").textContent = "Enter Your Password";
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        document.querySelector(".cmPassErr").textContent = "Please Check Your Password";
        isValid = false;
    } else {
        document.querySelector(".cmPassErr").textContent = "";
    }

    
    if (isValid) {
        alert("Form Submitted Successfully!");
        document.getElementById("myForm").reset();
    }

    return isValid; 
}
