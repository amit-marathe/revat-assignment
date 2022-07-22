let id = (id) => document.getElementById(id);
let classname = (classes) => document.getElementsByClassName(classes);

let fname = id("fname"),
lname = id("lname"),
email = id("email"),
password = id("password"),
messege = id("messege"),
options = id("select"),
errorMsg = classname("error"),
form = id("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    checkInputs(fname, 0, "Please enter your First name");
    checkInputs(lname, 1, "Please enter your Last name");
    checkInputs(email, 2, "Please enter your Email Adress");
    checkInputs(password, 3, "Password must be of min 8 characters");
    checkInputs(options, 4, "Please chose the right option")
    checkInputs(messege, 5, "please fill out this feild");

    
});

let checkInputs = (id, serial, messege) => {
  // Validation for Name, emails, and password feilds.
    if(id.value === "" ) {
        errorMsg[serial].innerHTML = messege;
        errorMsg[serial].style.color = "red";
        id.style.border ="2px solid red";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";
        errorMsg[serial].style.color = "green";
    }
// Validation for messege feild
    if( id == messege){
      if(id.value.length() >= 50){
        errorMsg[serial].innerHTML = messege;
        
      }
    }
// Validation for password feild
    if( id == password){
      if(id.value >= 8){
        errorMsg[serial].innerHTML = messege;
      }
    }

// Validation for Options feild
if(id == options){
  if( options.value == null || options.value == ""){
    id.style.border ="2px solid red";
  } else {
    id.style.border ="2px solid green";
    console.log(options.value)
  }
}
}
