
        // STORING REGISTERATION AND LOGIN FROM DATA IN LOCAL STORAGE


        // LOGIN FORM
        /*let form = document.getElementById("login");

         if(localStorage.getItem("username") && localStorage.getItem("password")) {
            document.getElementById("username").value = localStorage.getItem("username")
            document.getElementById("password").value = localStorage.getItem("password")
         }*/

        if(localStorage.getItem("user")) {
            // parse to JSON Object

            let obj = JSON.parse(localStorage.getItem("user"))

            document.getElementById("username").value = obj.username
            document.getElementById("password").value = obj.password
        }

        document.getElementById("login").addEventListener("submit", (e) => {
            e.preventDefault()
            let username = document.getElementById("username").value
            let password = document.getElementById("password").value

            let user = {
                username:username,
                password:password
            }

            // localStorage
            localStorage.setItem("user", JSON.stringify(user))

            console.log(JSON.stringify(user))
            //localStorage.setItem("username", username)
            //localStorage.setItem("password", password)

            alert("Your login details are saved in localStorage")
        })


        // REGISTRATION FORM

        if(localStorage.getItem("newUser")) {
            // parse to JSON Object

            let obj = JSON.parse(localStorage.getItem("newUser"))

            document.getElementById("User-id").value = obj.User_id
            document.getElementById("Email-id").value = obj.Email_id
            document.getElementById("Password").value = obj.Password
            document.getElementById("Password2").value = obj.Password2
        }

        document.getElementById("register").addEventListener("submit", (f) => {
            f.preventDefault()
            let User_id = document.getElementById("User_id").value
            let Password = document.getElementById("Password").value
            let Email_id = document.getElementById("Email_id").value
            let Password2 = document.getElementById("Password2").value

            let newUser = {
                User_id:User_id,
                Password:Password,
                Email_id:Email_id,
                Password2:Password2


            }

            // localStorage
            localStorage.setItem("newUser", JSON.stringify(newUser))

            console.log(JSON.stringify(newUser))
            //localStorage.setItem("username", username)
            //localStorage.setItem("password", password)

            alert("Your registration details are saved in localStorage")
        })


        // VALIDATE FORM

