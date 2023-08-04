let form = document.getElementById("form");
      
/// save  login data  in local storage

form.addEventListener("submit" , (e) => {
  e.preventDefault()
  let username = document.getElementById("user").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let confirmpassword = document.getElementById("confirmpass").value; 
  let mobile = document.getElementById("mobile").value;


  localStorage.setItem('username' , username );
  localStorage.setItem('email' , email);
  localStorage.setItem('password' , password);
  localStorage.setItem('confirmpassword' , confirmpassword);
  localStorage.setItem('mobile' , mobile);

  alert("Your data has been successfully saved, go to the login page")
});

// username Validation
var userinp = document.getElementById("user");
userinp.onblur = function() {

    var userName = /^[A-Z a-z]{3,15}$/
    var user = document.getElementById("user").value;
    var res1 = userName.test(user)
    if (res1 == true ) {
        console.log("valid");
        document.getElementById("userName").innerHTML =  "<p style='color: black;'> Valid</p>"
    } 
    else if(user == "") {
        document.getElementById("userName").innerHTML =  "<p style='color: black;'> Please enter your username</p>"
}
    
    else {
        console.log("not-valid");
        document.getElementById("userName").innerHTML = "<p style='color: black;'>It must be between 3 to 15 chars</p>"
    }
}








// Email Validation
var emailinp = document.getElementById("email");
emailinp.onblur = function () {
    var email = /^[A-Z a-z]+@[A-Z a-z]+.com$/
    var sur = document.getElementById("email").value;
    var res2 = email.test(sur)
    if (res2 == true ) {
        console.log("valid");
        document.getElementById("Email").innerHTML =  "<p style='color: black;'> Valid</p>"
    }

     else if(sur == "") {
            document.getElementById("Email").innerHTML =  "<p style='color: black;'> Please enter your Email</p>"
    }

     
    else {
        console.log("not-valid");
        document.getElementById("Email").innerHTML = "<p style='color: black;'>Email Must be abc@dfg.com</p>"
    }
}



// confirm password 
let password1 = document.getElementById("pass");
let password2 = document.getElementById("confirmpass");


  
  password2.onblur = function () {
      if (password1.value != password2.value ) {
          let validPassword = document.getElementById("validPassword");
          validPassword.innerHTML = "password and Confirm password should be the same";
      }
      else if(password2.value  == "") {
        document.getElementById("validPassword").innerHTML =  "<p style='color: black;'> Please enter your password </p>"
}
      
      
      else {
          validPassword.remove();
      }
}
  

