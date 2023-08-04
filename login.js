function checkData(){

    let enterusername = document.getElementById("user").value;
    let enterpassword = document.getElementById("pass").value;
    let enteremail = document.getElementById("email").value;

    // get data from local storage
    let getusername = localStorage.getItem('username');
    let getpassword = localStorage.getItem('password');
    let getemail = localStorage.getItem('email');

    // check if data stored in local storage
    if (enterusername == getusername &&  enterpassword == getpassword && enteremail == getemail){
        alert("You are currently logged in to the site");
        window.open("Home.htm")
    }else{
        alert("You are not registered on the site ");
    }
}

