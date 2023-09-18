// STORE CONTACT FROM DATA IN LOCAL STORAGE
if(localStorage.getItem("userInfo")) {
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
    //localStorage.setItem("username", username)
    //localStorage.setItem("password", password)

    alert("Thank you for your messsage")
})