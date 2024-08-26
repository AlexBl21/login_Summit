
document.addEventListener("DOMContentLoaded",function() {
    var loginForm= document.getElementById("loginForm");
    if (loginForm){
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("userName").value;
        var password = document.getElementById("password").value;

        if (username === "admin" && password === "1234"){
            window.location.href="dashboard.html";
        }
        else{
            alert("Invalid username or password");
        }
    });
    }
    var registroForm= document.getElementById("registroForm");
    if (registroForm){
        registroForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var newUser=document.getElementById("newUser").value;
            var newPass=document.getElementById("newPassword").value;
            alert("Usuario registrado: "+ newuser);
            window.location.href= "index.html";
        });
    }
});

