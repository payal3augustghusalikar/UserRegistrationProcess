/**
 * @description constants variable is used to store regex pattern
 * @constant {RegExp} NAME_PATTERN
 */
const NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
//const EMAIL_PATTERN = new RegExp("^([a-z]{3,})([.]{0,1}[a-z]*)@([a-z]{2}).([a-z]{2})([.]{1}[a-z]{2}){0,1}$");
const EMAIL_PATTERN = new RegExp(`^([A-Za-z\\d-_\\+]+)(\\.[A-Za-z\\d-_]+)?@([a-zA-Z\\d]+)\\.([a-zA-Z]{2,4})(\\.[A-Za-z]{2,4})?$`);
const MOBILE_NO_PATTERN = new RegExp("^([0-9]{2})[ ]([1-9]{1}[0-9]{9})$");
const PASSWORD_PATTERN = new RegExp("^((.*[A-Z]{1,})(.*[0-9]{1,})(.*[\\~\\!\\@\\#\\$\\%\\^\\&\\*])(.*[A-Za-z0-9]{5,}))$");

/**
 * @description Class UserValidationProcess
 */
class UserValidationProcess {

    /**
     * @description checks the user input with regex pattern
     * @param {string} firstName 
     */
    firstNameValidator(firstName) {

        if (NAME_PATTERN.test(firstName))
            console.log("valid First Name \n");
        else
            console.log("Invalid First Name \n");
    }

    /**
     * @description checks the user input with regex pattern
     * @param {string} lastName 
     */
    lastNameValidator(lastName) {
        if (NAME_PATTERN.test(lastName))
            console.log("valid Last Name \n");
        else
            console.log("Invalid Last Name \n");
    }

    /**
         * @description checks the user input with regex pattern
         * @param {string} email
         */
    emailValidator(email) {
        if (EMAIL_PATTERN.test(email))
            console.log("valid email \n");
        else
            console.log("Invalid email \n");
    }

    /**
         * @description checks the user input with regex pattern
         * @param {Number} mobileNo 
         */
    mobileNoValidator(mobileNo) {
        if (MOBILE_NO_PATTERN.test(mobileNo))
            console.log("valid mobile No \n");
        else
            console.log("Invalid mobile No \n");
    }

    /**
         * @description checks the user input with regex pattern
         * @param {string} password
         */
    passwordValidator(password) {
        if (PASSWORD_PATTERN.test(password))
            console.log("valid Password  \n");
        else
            console.log("Invalid Password  \n");
    }


    /**
         * @description checks email with emailregex pattern
         * @param {string} sampleEmail
         */
    validSamplesEmailValidator = (sampleEmail) => {
        if (EMAIL_PATTERN.test(sampleEmail))
            console.log(`sample valid Email is passed`);
        else
            console.log(`sample valid Email is not passed`);
    }

    /**
         * @description checks email with emailregex pattern
         * @param {string} sampleEmail
         */
    invalidSamplesEmailValidator = (sampleEmail) => {
        return (EMAIL_PATTERN.test(sampleEmail)) ? `sample invalid Email is not passed` : `sample invalid Email is passed`
    }
}

module.exports = new UserValidationProcess();