document.addEventListener("DOMContentLoaded", function() {

    // Subscription modal functionality
    const subscriptionBtn = document.getElementById("subscription-btn");
    const popupModal = document.getElementById("popup-modal");
    const closeBtn = document.querySelector(".close-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    subscriptionBtn.addEventListener("click", function() {
        popupModal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        popupModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });

    // Login functionality
    window.login = function(event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        // Implement login functionality here (e.g., validating user credentials)
        console.log("Logged in with", email);
        popupModal.style.display = "none";
        // Redirect after login (you can change this to your desired page)
        window.location.href = 'subscriber_page.html';
    }

    // Toggle between login and register forms
    window.toggleRegister = function() {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        } else {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        }
    }

    // Subscribe functionality
    window.subscribe = function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password === confirmPassword) {
            // Implement subscription  functionality here (e.g., storing user data)
            console.log("Subscribed with", email);
            popupModal.style.display = "none";
            // Redirect after subscription (you can change this to your desired page)
            window.location.href = 'subscriber_page.html';
        } else {
            alert("Passwords do not match.");
        }
    }

    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});