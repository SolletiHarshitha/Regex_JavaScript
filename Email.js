console.log("-----------Email Validation------------");
function ValidateEmail(email){
    const emailRegex = RegExp('^[a-z]{1,}[a-z0-9]*[-.+]{0,1}[a-z0-9]+@([a-z0-9]+)(\\.[a-z]{2,}){1,2}$');//(\\.[a-z]{2,})?$');
    if(emailRegex.test(email))
    console.log("Email is Valid");
    else
    throw 'Invalid Email';
}

try{
    ValidateEmail("abc.xyz@bridgelabz.co.in");
}
catch(e){
    console.log(e);
}
try{
    ValidateEmail("abc@gmail.com.aa.au");
}
catch(e){
    console.log(e);
}
try{
    ValidateEmail("abc@gmail.com.com");
}
catch(e){
    console.log(e);
}
try{
    ValidateEmail("abc..2002@gmail.com");
}
catch(e){
    console.log(e);
}
try{
    ValidateEmail("abc-100@abc.com.au");
}
catch(e){
    console.log(e);
}