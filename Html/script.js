$(document).ready(function(){
    $("#signupForm").validate({
        rules:{
            firstname:{
                required:true,
                minlength:4
            },
            lastname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6
                
            }

        }
    })
})