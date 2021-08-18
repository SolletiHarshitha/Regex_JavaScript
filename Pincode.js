console.log("Pincode Validation");
function ValidatePincode(pincode){
    const pinRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    if(pinRegex.test(pincode))
    console.log("Pin is Valid");
    else
    throw 'Invalid Pin';
}

try{
    console.log("UC1");
    ValidatePincode("400088");
}
catch(e){
    console.log(e);
}
try{
    console.log("UC2");
    ValidatePincode("A400088");
}
catch(e){
    console.log(e);
}
try{
    console.log("UC3");
    ValidatePincode("400088B");
}
catch(e){
    console.log(e);
}
try{
    console.log("UC4");
    ValidatePincode("400 088");
}
catch(e){
    console.log(e);
}