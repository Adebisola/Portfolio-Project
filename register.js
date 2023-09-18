// REGISTRATION FORM

window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('register').addEventListener('submit', function() {
        // Get the value of the name field.
        var username = document.getElementById('User_id').value;
        var email = document.getElementById('Email_id').value;
        var Password = document.getElementById('Password').value;
        var Password2 = document.getElementById('Password2').value;
  
        // Save the name in localStorage.
        localStorage.setItem('User_id', username);
        localStorage.setItem('Email_id', email);
        localStorage.setItem('Password', Password);
        localStorage.setItem('Password2', Password2);

      });
  
    }
  
  }

  window.onload = function() {

    // Retrieve the users name.
    var username = localStorage.getItem('User_id');
  
    if (username != "undefined" || username != "null") {
      document.getElementById('welcomeMessage').innerHTML = "Hello " + username + "!";
    } else
      document.getElementById('welcomeMessage').innerHTML = "Hello!";
    }
