
// Toggle button
var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");

        function register() {
            x.style.left = "-400px";
            y.style.left = "50px";
            z.style.left = "110px";
        }

        function login() {
            x.style.left = "50px";
            y.style.left = "450px";
            z.style.left = "0px";
        }



        // STORING REGISTERATION AND LOGIN FROM DATA IN LOCAL STORAGE


        // LOGIN FORM
        let form = document.getElementById("login");

         if(localStorage.getItem("username") && localStorage.getItem("password")) {
            document.getElementById("username").value = localStorage.getItem("username")
            document.getElementById("password").value = localStorage.getItem("password")
         }
        

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let username = document.getElementById("username").value
            let password = document.getElementById("password").value

            // localStorage
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)

            alert("Your login details are saved")

        })