const validations = (form) => {  
    const errors = {};

    //Email
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)){   
        errors.email = "The email entered is not valid"
    };
    if(!form.email){
        errors.email = "Enter an email"
    };
    if(form.email.length > 35){
        errors.email = 'The email entered must not exceed 35 characters'
    };

    //Password
    if(!/.*\d+.*/.test(form.password)){
        errors.password = 'Password must contain at least one number'
    };
    if(!/^.{6,10}$/.test(form.password)){ 
        errors.password = 'The password must be between 6 and 10 characters in length' 
    };

    return errors;

};


export default validations;