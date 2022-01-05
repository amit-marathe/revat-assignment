let id = (id) =>document.getElementById(id);
let classname = (classes) =>document.getElementsByClassName(classes);

let fname = id("fname"),
lname = id("lname"),
email = id("email"),
password = id("password"),
message = id("message"),
options = id("select"),
errorMsg = classname("error"),
form = id("form");

form.addEventListener("submit",(e) => {

    e.preventDefult();

    checkInputs(fname, 0, "Please enter your First Name");
    checkInputs(lname, 1, "Please enter your Last Name");
    checkInputs(email, 2, "Please enter your Email Address");
    checkInputs(password, 3, "Password must be of min 8 characters");
    checkInputs(options, 4, "Please choose the rigth option");
    checkInputs(message, 5, "Please fill out this feild");


});

let checkInputs =(id, serial, message) => {
  //Validation for Name , emails, and password feilds.
     if(id.value === "" ) {
        errorMsg[serial].innerHTML = message;
        errorMsg[serial].style.color = "red";
        id.style.border ="2px solid red";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";
        errorMsg[serial].style.color ="green";
    }
  //Validation for message felid
     if( id == message){
        if(id.value.length() >=50){
            errorMsg[serial].innerHTML = message;

        }
    }
  //Validation for password felid
     if( id == password){
         if(id.value >= 8){
             errorMsg[serial].innerHTML =message;
         }
     }
     
 //Validation for options felid
     if(id == options){
         if( options.value ==  null || options.value ==""){
             id.style.border ="2px solid red";
         } else{
             id.style.border ="2px solid green";
             console.log(options.value)
         }
     }
}