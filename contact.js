

        
        
        
        
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


        


        // VALIDATE FORM


        /*function validlogin() {
            let username = document.getElementById("username").value
            let password = document.getElementById("password").value

            let obj = JSON.parse(localStorage.getItem("user"))
          
          
          
            for (let i = 0; i < obj.length; i++) {
          
              if (obj[i].username == username && obj[i].password == password)
          
                {

                alert("welcome");
                }
          }
            }*/

