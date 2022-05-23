	//Validtion Code For Inputs
    var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];

    var email_check = document.getElementById("email").value
    var password_check = document.getElementById("password").value
    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');
    
    email.addEventListener('textInput', email_Verify);
    password.addEventListener('textInput', pass_Verify);
    
    

    function validated(){
        var email_check = document.getElementById("email").value
        var password_check = document.getElementById("password").value
        console.log("email",email_check,"password",password_check)

        if (email.value.length < 3) {

       

            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            console.log(email_check ,password_check );
            alert(email_check ,password_check );
            return false;
        }
    }
    
    function validate(){
               if(email=='admin' && password == 'admin'){
            return false;
        }

      
        if (password.value.length < 4) {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            return false;
        }
        else{
            alert('Try again')
        }
        
    

    }
 

    function email_Verify(){
        if (email.value.length >= 8) {
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 5) {
            password.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
    }
    
    