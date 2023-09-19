
// Retrieve the user input (e.g., from a login form)
const usernameInput = document.getElementById('username').value;
const passwordInput = document.getElementById('password').value;

// Retrieve the stored login data from local storage
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

// Check if the stored data matches the user's input
if (username === storedUsername && password === storedPassword) {
  // Successful login
  alert('Login successful!');
  window.location.href = "index.html"
  // Redirect to the authenticated area or perform other actions as needed.
} else {
  // Failed login
  alert('Invalid username or password.');
  // You might want to clear the input fields or take other actions here.
}










// Retrieve the user input (e.g., from a registration form)
const usernameRegister = document.getElementById('username-input').value;
const passwordRegister = document.getElementById('password-input').value;

// Retrieve the stored registration data from local storage
const storedUserData = JSON.parse(localStorage.getItem('registeredUser'));

// Check if the stored data matches the user's input
if (storedUserData && usernameInput === storedUserData.username && passwordInput === storedUserData.password) {
  // Successful validation
  alert('Registration data is valid!');
  // You can proceed with whatever action you need, such as pre-filling a form.
} else {
  // Failed validation
  alert('Invalid registration data.');
  // You might want to clear the input fields or take other actions here.
}
