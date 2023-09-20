// STORE LOGIN DATA IN LOCAL STORAGE
// Add an event listener to the login form
document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Retrieve the user's input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Create an object to store login data
    let loginData = {
        username: username,
        password: password
    };

    // Save login data in local storage
    localStorage.setItem("loginData", JSON.stringify(loginData));

    alert("Login data saved in local storage.");
});




// STORE REGISTRATION FORM DATA IN LOCAL STORAGE
// Add an event listener to the registration form
document.getElementById("register").addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Retrieve the user's input
    let User_id = document.getElementById("User_id").value;
    let Email_id = document.getElementById("Email_id").value;
    let Password = document.getElementById("Password").value;


    // Create an object to store registration data
    let registrationData = {
        User_id: User_id,
        Email_id: Email_id,
        Password: Password
    };

    // Save registration data in local storage
    localStorage.setItem("registrationData", JSON.stringify(registrationData));

    alert("Registration data saved in local storage.");
    window.location.href = window.location.href;
});




// USER VALIDATION

// Add an event listener to the login form
document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Retrieve the user's input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Retrieve stored registration data from local storage
    let storedRegistrationData = JSON.parse(localStorage.getItem("registrationData"));


    // Check if registration data is found
    if (storedRegistrationData) {
        // Compare the user's input with the stored registration data
        if (username === storedRegistrationData.User_id && password === storedRegistrationData.Password) {
            // Successful login
            alert("Welcome " + username + " !" );
            // You can redirect the user to another page or perform other actions here.
            window.location.href = "/courses.html"
        } else {
            // Invalid login
            alert("Invalid username or password.");
        }
    } else {
        // No registration data found
        alert("No registration data found. Please sign up first.");
    }
});








// CHECK USER SIGNIN STATUS
// Check if login data is stored in local storage
let storedLoginData = JSON.parse(localStorage.getItem("loginData"));

// Check if the user is already logged in
if (storedLoginData && storedLoginData.username) {
    // Get the username from the stored login data
    let username = storedLoginData.username;

    // Display the username in the greeting
    document.getElementById("userGreeting").textContent = username;

    // Optionally, you can hide the login form or provide a logout option
    // Hide the login form (assuming the form has an id of "loginForm")
    document.getElementById("login").style.display = "none";
}







// Check if the username or email address has already been used
/*const usernameExists = storedRegistrationData.some(data => data.User_id === User_id);
const emailExists = storedRegistrationData.some(data => data.Email_id === Email_id);

if (usernameExists) {
    alert("This username has already been used. Please choose a different username.");
    return; // Exit the function and prevent form submission
}

if (emailExists) {
    alert("This email address has already been used. Please use a different email address.");
    return; // Exit the function and prevent form submission
}*/