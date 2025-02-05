document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;


    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");


    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        input.style.borderColor = "red";
        isValid = false;
    }


    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = "";
        input.style.borderColor = "#ccc";
    }

    // Username validation
    if (username.value.trim() === "") {
        showError(username, "Username is required");
    } else {
        clearError(username);
    }

    // Email validation (basic pattern check)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Invalid email address");
    } else {
        clearError(email);
    }

    // Password validation,
    if (password.value.length < 6) {
        showError(password, "Password must be at least 6 characters");
    } else {
        clearError(password);
    }

    // Confirm password validation
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match");
    } else {
        clearError(confirmPassword);
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});
