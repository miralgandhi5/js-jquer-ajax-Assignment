 
        $(document).ready(function () {
            $("#validateform").validate({

                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    firstName: {
                        required: true,
                        minlength: 5
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    confirmEmail: {
                        required: true,
                        equalTo: "#email"
                    },
                    phone: {
                        required: true,
                        minlength: 10,
                        maxlength: 10
                    },
                    gender: {
                        required: true
                    }

                },
                messages: {
                    email:{
                        require: "email required",
                        email:"not a valid email",

                    },
                    firstName: {
                        require: "Dont Forget your Username",
                        minlength: "You minlength is not right",


                    },
                    password: {
                        require: "Dont Forget your password",
                        minlength: "You minlength is not right in password",
                        
                    },
                    confirmEmail: {
                        require: "You Forgot to confirm your email",
                        equalTo: "Email does Not match"
                    },
                    phone: {
                        require:"phone no. is required",
                        minlength:"number not valid",
                        maxlength:"number not valid"
                    },
                    gender: {
                        require:"gender is required"
                    }
                }

            });

           
       
        });