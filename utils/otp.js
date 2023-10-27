const otpGenerator =  require("otp-generator") ; 

const otp = otpGenerator.generate(6, 
    {   
        digits: true , 
        upperCaseAlphabets: true ,
        specialChars: false
    }); 

module.exports = otp 