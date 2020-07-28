/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/


/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
function validate(){
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  var confirmPassword=document.getElementById("confirmPassword").value;
  if(username==""){
    document.getElementById("username-span").innerHTML="**Please enter the valid name";
    return false;
  } 
 if((username.length <= 2) || (username.length>20))  {
    document.getElementById("username-span").innerHTML="**Username must  be between 2 to 20 chararcter";
    return false;
  }


  if(!isNaN(username)){
    document.getElementById("username-span").innerHTML="**Only Characters are allowed";
    return false;
  }

  if(password==""){
      document.getElementById("password-span").innerHTML="**Please enter the valid password";
      return false;
  }
  if((password.length < 6) ||(password.length > 20)){
    document.getElementById("password-span").innerHTML="**Length of Password should be between 8 to 20";
    return false;
  }
  if(password!=confirmPassword){
    document.getElementById("confirmPassword-span").innerHTML="**Password did not matched";
    return false;
  } else  if(password==confirmPassword){
    document.getElementById("confirmPassword-span").innerHTML=" ";
  }


  if(confirmPassword==""){
  document.getElementById("confirmPassword-span").innerHTML="** Password not match";
  return false;
  }
}

/*registrationForm.addEventListener('input',()=>{
  if((username.value.length >0) && (password.value.length >0 ) && (confirmPassword.value.length>0)){
    button.removeAttribute('disabled')

  }else {
    button.setAttribute('disabled', 'disabled')
  }*/
  var register=document.getElementById("register");

  function Message(){
    if((username.value.length !==0) && (password.value.length !==0 ) && (confirmPassword.value.length!==0)){
      alert("Successfully Registered #128516");}
      };
  register.addEventListener("Click",Message)
  
  
  register.addEventListener("mouseenter",EnablesSend) 
  function EnablesSend(){
      if((username.value.length =="") && (password.value.length =="") && (confirmPassword.value.length=="")){
       document.getElementById("register").disabled=true
      } else if((username.value.length !=="") && (password.value.length!=="") && (confirmPassword.value.length !=="")){
        document.getElementById("register").disabled=false;
      }
      setTimeout(EnablesSend,500)
    };
  

