// STORE CONTACT FROM DATA IN LOCAL STORAGE
/*if(localStorage.getItem("userInfo")) {
    // parse to JSON Object

    let objInfo = JSON.parse(localStorage.getItem("userInfo"))

    document.getElementById("txtName").value = objInfo.name
    document.getElementById("txtEmail").value = objInfo.email
    document.getElementById("txtMessage").value = objInfo.message
}

document.getElementById("contact_form").addEventListener("submit", (f) => {
    f.preventDefault()
    let name = document.getElementById("txtName").value
    let email = document.getElementById("txtEmail").value
    let message = document.getElementById("txtMessage").value

    let userInfo = {
        name:name,
        email:email,
        message:message
    }

    // localStorage
    localStorage.setItem("userInfo", JSON.stringify(userInfo))

    console.log(JSON.stringify(userInfo))
    
   alert("Thank you for your messsage")
})
function myFunction() {
    document.getElementById("contact").reset();
  }*/



  // Get references to the form elements
const form = document.getElementById("contact_form");
const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtMessage = document.getElementById("txtMessage");

// Add an event listener to the form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the values entered by the user
    const name = txtName.value;
    const email = txtEmail.value;
    const message = txtMessage.value;



 

    // Create an object to store the form data
    const formData = {
        name: name,
        email: email,
        message: message,
    };

    // Check if there's already stored data in local storage
    let storedData = JSON.parse(localStorage.getItem("formData")) || [];


    // Check if the email address has already been used
 const emailExists = storedData.some(data => data.email === email);

 if (emailExists) {
     alert("This email address has already been used. Please use a different email address.");
     return; // Exit the function and prevent form submission
 }


// Check if the username has already been used
const username = name.trim(); // Trim the username to remove leading/trailing whitespace
const usernameExists = storedData.some(data => data.name.trim() === username);

if (usernameExists) {
    alert("This username has already been used. Please choose a different username.");
    return; // Exit the function and prevent form submission
}



    // Add the new form data to the existing data
    storedData.push(formData);

    // Store the updated data back in local storage
    localStorage.setItem("formData", JSON.stringify(storedData));

    // Clear the form fields
    txtName.value = "";
    txtEmail.value = "";
    txtMessage.value = "";

    alert("Message received.Thank you for contacting us.");
});
