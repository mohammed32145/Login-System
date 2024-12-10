
    var emailUser = document.querySelector(`#emailUser`);
    var passwordUser = document.querySelector(`#passwordUser`);
    var btnRe =  document.querySelector(`#buttonRe`);
    var btnLo =  document.querySelector(`#buttonlo`);
    var signUpUser =  document.querySelector(`p a`);
    var alert = document.querySelector(`#alert`);
    var errorMessageElement = document.getElementById('error-message');
    var signUp = document.querySelector('.signUp');
    var logoutbtn = document.querySelector(`#logoutbtn`);
    var loggedInUser = localStorage.getItem("loggedInUser");

    var users = [];
function RegisterUsers() {
    if (validAllData(emailUser) & validAllData(passwordUser)) {
        if (localStorage.getItem(`user`)) {
            users = JSON.parse(localStorage.getItem(`user`));
        }
        for (var i = 0; i < users.length; i++) {
            if (users[i].eUser === emailUser.value) {
                errorMessageElement.textContent = "Sorry, email already registered"; 
                errorMessageElement.classList.remove(`d-none`)
                return; 
            }
        }
        errorMessageElement.classList.add(`d-none`)
        var userName = {
            eUser: emailUser.value,
            passUser: passwordUser.value,
        };

        users.push(userName); 
        localStorage.setItem("user", JSON.stringify(users)); 
        clearInput(); 
        errorMessageElement.textContent = "User added successfully."; 
        errorMessageElement.classList.remove(`d-none`)
        window.location.href = "index.html";
        }
}

function clearInput() {
    emailUser.value = '';
    passwordUser.value = '';
}
function validAllData(e){
    var regexData = {
        emailUser : /^\w+@(gmail|hotmail)\.com$/i,
        passwordUser: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
    }
    if(regexData[e.id].test(e.value)){
        e.classList.remove("is-invalid");
        e.classList.add("is-valid");
      e.nextElementSibling.classList.add(`d-none`);
        return true;
    }else{
        e.classList.remove("is-valid");
        e.classList.add("is-invalid");
         e.nextElementSibling.classList.remove(`d-none`);
        return false;
    }
}

if (emailUser != null){
emailUser.addEventListener("input", function() {
    validAllData(this);
});
}
if (passwordUser != null){
passwordUser.addEventListener("input", function() {
    validAllData(this);
});
}
if (btnRe != null){
btnRe.addEventListener("click" , function(){
    RegisterUsers();
})
}
function loginUser() {
    if (localStorage.getItem('user')) {
        users = JSON.parse(localStorage.getItem('user'));
    } else {
        console.log("No users found in local storage");
        return;
    }
    let emailValidUses = false; 
    let passwordValid = false; 

    for (var i = 0; i < users.length; i++) {
        if (users[i].eUser === emailUser.value) {
            emailValidUses = true; 
            if (users[i].passUser === passwordUser.value) {
                passwordValid = true
                window.location.href = 'home.html'; 
                localStorage.setItem("loggedInUser", emailUser.value);
                return;
        }
    }
}
     if (emailValidUses == false) {
        errorMessageElement.textContent = "Email not registered"; 
        errorMessageElement.classList.remove(`d-none`)
    } if (emailValidUses == true) {
        errorMessageElement.classList.add(`d-none`)
    }

    if (emailValidUses == true && passwordValid == false) {
        console.log("password not true");
        errorMessageElement.textContent ="password not true";
        errorMessageElement.classList.remove(`d-none`)
    }
}

if (btnLo != null){
btnLo.addEventListener("click", function() {
    loginUser(); 
});
}
if (signUp != null){
signUp.addEventListener("click" , function(){
    window.location.href = 'register.html'
})
}
if(logoutbtn != null){
    logoutbtn.addEventListener("click" , function(){
        window.location.href = 'index.html';
    })
    }

    if (loggedInUser != null) {
        document.getElementById("user-name").textContent = loggedInUser;
    } 
















