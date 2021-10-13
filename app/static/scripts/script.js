window.onload = init;

function init(){
    var email_input = document.getElementById("email");
    var email_message = document.getElementById("email_popup");

    email_input.onfocus = function() {
        email_message.style.display = "block";
    }

    email_input.onkeyup = function() {
        var re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email_input.value.match(re_email)) {
            email_message.style.color = "green";
        } else {
            email_message.style.color = "red";
        }
    }

    var user_input = document.getElementById("username");
    var user_message = document.getElementById("user_popup");

    user_input.onfocus = function() {
        user_message.style.display = "block";
    }

    user_input.onkeyup = function() {
        var re_user = /^[a-zA-Z0-9]+$/;
        if(user_input.value.length >= 6 && user_input.value.match(re_user)) {
            user_message.style.color = "green";
        } else {
            user_message.style.color = "red";
        }
    }

    var pwd_input = document.getElementById("password");
    var pwd_input_confirm = document.getElementById("confirmation");
    var confirmation_message = document.getElementById("cfm_popup");
    var pwd_message = document.getElementById("pwd_popup");

    pwd_input.onfocus = function() {
        pwd_message.style.display = "block";
    }

    pwd_input.onkeyup = function() {
        if(pwd_input.value.length >= 8) {
            pwd_message.style.color = "green";
        } else {
            pwd_message.style.color = "red";
        }
    }

    pwd_input_confirm.onfocus = function() {
        confirmation_message.style.display = "block";
    }

    pwd_input_confirm.onkeyup = function() {
        if(pwd_input.value.localeCompare(pwd_input_confirm.value) == 0) {
            confirmation_message.style.color = "green";
        } else {
            confirmation_message.style.color = "red";
        }
    }

    var card_input = document.getElementById("credit-card");
    var card_message = document.getElementById("card_popup");

    card_input.onfocus = function() {
        card_message.style.display = "block";
    }

    card_input.onkeyup = function() {
        var re_card = /^[0-9]+$/
        if(card_input.value.length == 16 && card_input.value.match(re_card)) {
            card_message.style.color = "green";
        } else {
            card_message.style.color = "red";
        }
    }

    var dir_input = document.getElementById("direction");
    var dir_message = document.getElementById("dir_popup");

    dir_input.onkeyup = function() {
        if(dir_input.value.length <= 50) {
            dir_message.style.display = "none";
        } else {
            dir_message.style.display = "block";
        }
    }
}