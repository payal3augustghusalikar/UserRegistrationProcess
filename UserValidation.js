
const print  = require('./UserValidationProcess');
const prompt = require('prompt-sync')();

class UserValidation {
    validateUserInputFirstName = () => {
        var firstName = prompt(`Enter your first name : `, firstName);
        print.firstNameValidator(firstName);    
    }
}
const object = new UserValidation();
object.validateUserInputFirstName();