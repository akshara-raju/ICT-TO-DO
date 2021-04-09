function validate() {
    let uname = document.getElementById("uname");
    let error1 = document.getElementById("error1");
    

    return nameValidate(uname,error1);
}

function nameValidate(uname, error1){
    let pwd = document.getElementById("password");
    let error2 = document.getElementById("error2");
    if(uname.value == "admin") {
            return pwdValidate(pwd, error2);
    }

    else {
        error1.innerHTML = "invalid username";
        error1.style.color = "red";
        return false;
    }
}

function pwdValidate(pwd, error2){
    if (pwd.value == "12345"){
        return true;

    }

    else {
        error2.innerHTML = "invalid password";
        error2.style.color = "red";
        return false;
    }
}