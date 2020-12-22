
const validationProcess = require('./UserValidationProcess');
const prompt = require('prompt-sync')();

class UserValidation {

    /**
    * @description Takes user input and calls firstNameValidator function
    */
    validateUserInputFirstName = () => {
        var firstName = prompt(`Enter your first name : `, firstName);
        validationProcess.firstNameValidator(firstName);
    }

    validateUserInputLastName = () => {
        var lastName = prompt(`Enter your last name : `, lastName);
        validationProcess.lastNameValidator(lastName);
    }

    validation = () => {
        console.log(`\n ****** welcome to user registration Process \n`);

        while (true) {
            var choice = prompt(`1. First Name  2. Last Name Enter your choice: `, choice);
            switch (choice) {
                case "1":
                    object.validateUserInputFirstName();
                    break;
                case "2":
                    object.validateUserInputLastName();
                    break;
                default:
                    console.log("Please Enter right choice");
                    break;
            }
        }
    }
}

const object = new UserValidation();
object.validation();