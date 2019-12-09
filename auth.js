$(document).ready(function () {
   $('#reg-switch').click(function () {
       event.preventDefault();
       $('#loginForm').hide();
       $('#registerForm').fadeIn();
       $('#card-title').text("Create New Account");
   });

    $('#login-switch').click(function () {
        event.preventDefault();
        $('#registerForm').hide();
        $('#loginForm').fadeIn();
        $('#card-title').text("Login");
    });
    $('#keep-login').click(function () {
        document.getElementById("keep-login-input").checked = !document.getElementById("keep-login-input").checked;
    });
    $('#show').click(function () {
        event.preventDefault();
        document.getElementById("show-pass-input").checked = !document.getElementById("show-pass-input").checked;
        let passField = document.getElementById("pass-field");
        if(passField.type === "password"){
            passField.type = "text";
        }else{
            passField.type = "password";
        }
    });
});
