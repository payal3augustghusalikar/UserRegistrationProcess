/**
 * @description constants variable is used to store regex pattern
 * @constant {RegExp} NAME_PATTERN
 */
const NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
const EMAIL_PATTERN = new RegExp("^([a-z]{3,})([.]{0,1}[a-z]*)@([a-z]{2}).([a-z]{2})([.]{1}[a-z]{2}){0,1}$");

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

    emailValidator(email) {
        if (NAME_PATTERN.test(email))
            console.log("valid email \n");
        else
            console.log("Invalid email \n");
    }
}
module.exports = new UserValidationProcess();