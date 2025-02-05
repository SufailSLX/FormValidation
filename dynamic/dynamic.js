
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");

// Validate Name
function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.textContent = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+$/)) {
        nameError.textContent = "Name should contain only alphabets";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check-double"></i>';
    return true;
}

// Validate Phone
function validatePhone() {
    var phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.textContent = "Phone is required";
        return false;
    }
    if (phone.length != 10) {
        phoneError.textContent = "Phone should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]+$/)) {
        phoneError.textContent = "Phone should contain only digits";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

// Validate Email
function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.textContent = "Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.textContent = "Email is invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

// Validate Message
function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 3;
    var left = required - message.length;

    if (left > 0) {
        messageError.textContent = left + " characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

// Final form validation
function validateForm(event) {
    event.preventDefault();  

    var nameValid = validateName();
    var phoneValid = validatePhone();
    var emailValid = validateEmail();
    var messageValid = validateMessage();

    if (nameValid && phoneValid && emailValid && messageValid) {
        alert("Form submitted successfully!");
        submitError.style.display = "none"; 
        location.reload(); 
    } else {
        submitError.style.display = "block";
        submitError.textContent = "The form is not filled properly.";  
    }
}

// Add event listener to the submit button
var submitButton = document.querySelector("button");
submitButton.addEventListener("click", validateForm);

// Clear error messages when the user starts typing
document.getElementById("contact-name").addEventListener("input", function() {
    nameError.textContent = "";
});
document.getElementById("contact-phone").addEventListener("input", function() {
    phoneError.textContent = "";
});
document.getElementById("contact-email").addEventListener("input", function() {
    emailError.textContent = "";
});
document.getElementById("contact-message").addEventListener("input", function() {
    messageError.textContent = "";
});
