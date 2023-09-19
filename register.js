// REGISTRATION FORM

// STORE CONTACT FROM DATA IN LOCAL STORAGE
if(localStorage.getItem("Register")) {
    // parse to JSON Object

    let registerUser = JSON.parse(localStorage.getItem("Register"))

    document.getElementById("User_id").value = registerUser.User_id
    document.getElementById("Email_id").value = registerUser.Email_id
    document.getElementById("Password").value = registerUser.Password
    document.getElementById("Password2").value = registerUser.Password2
}

document.getElementById("register").addEventListener("submit", (a) => {
    a.preventDefault()
    let User_id = document.getElementById("User_id").value
    let Email_id = document.getElementById("Email_id").value
    let Password = document.getElementById("Password").value
    let Password2 = document.getElementById("Password2").value

    let registerInfo = {
        User_id:User_id,
        Email_id:Email_id,
        Password:Password,
        Password2:Password2
    }

    // Store registration data in local storage
    localStorage.setItem("registerInfo", JSON.stringify(registerInfo))

    console.log(JSON.stringify(registerInfo))
    //localStorage.setItem("username", username)
    //localStorage.setItem("password", password)

    alert("Welcome!")
    // on a successful signup, redirect user to the home page
    window.location.href = 'contact.html'
})