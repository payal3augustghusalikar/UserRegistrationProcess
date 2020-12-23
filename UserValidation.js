
const validationProcess = require('./UserValidationProcess');
const emailSamples = require('./EmailSamples.json');
const prompt = require('prompt-sync')();

class UserValidation {

    /**
    * @description Takes user input and calls firstNameValidator function
    */
    validateUserInputFirstName = () => {
        var firstName = prompt(`Enter your first name : `, firstName);
        validationProcess.firstNameValidator(firstName);
    }

    /**
        * @description Takes user input and calls lastNameValidator function
        */
    validateUserInputLastName = () => {
        var lastName = prompt(`Enter your last name : `, lastName);
        validationProcess.lastNameValidator(lastName);
    }


    /**
        * @description Takes user input and calls emailValidator function
        */
    validateUserInputEmail = () => {
        var email = prompt(`Enter your Email : `, email);
        validationProcess.emailValidator(email);
    }

    /**
        * @description Takes user input and calls mobileNoValidator function
        */
    validateUserInputMobileNo = () => {
        var mobileNo = prompt(`Enter your mobile number : `, mobileNo);
        validationProcess.mobileNoValidator(mobileNo);
    }

    /**
        * @description Takes user input and calls passwordValidator function
        */
    validateUserInputPassword = () => {
        var password = prompt(`Enter your password : `, password);
        validationProcess.passwordValidator(password);
    }

    /**
        * @description fetch email from jsom file and calls validSamplesEmailValidator function
        */
    validateValidEmailSamples = () => {
        console.log("-----Check for Valid Email Samples-----");

        for (let i = 0; i < emailSamples.validEmailSamples.length; i++) {
            let sampleEmail = emailSamples.validEmailSamples[i];
            validationProcess.validSamplesEmailValidator(sampleEmail);
        }
    }

    /**
        * @description fetch email from jsom file and calls invalidSamplesEmailValidator function
        */
    validateInvalidEmailSamples = () => {
        console.log("-----Check for invalid Email Samples-----");

        for (let i = 0; i < emailSamples.invalidEmailSamples.length; i++) {
            let sampleEmail = emailSamples.invalidEmailSamples[i];
            validationProcess.invalidSamplesEmailValidator(sampleEmail);
        }
    }

    validation = () => {
        console.log(`\n ****** welcome to user registration Process ********\n`);
 
      var choice = prompt(`1. First Name   2. Last Name  3. Email  4. Mobile No.  5. Password  6. check valid email samples  7. check invalid email samples -> Enter your choice: `, choice);
      var a = parseInt(choice) 
        switch (a) {
            case 1:
                object.validateUserInputFirstName();
                break;
            case 2:
                object.validateUserInputLastName();
                break;
            case 3:
                object.validateUserInputEmail();
                break;
            case 4:
                object.validateUserInputMobileNo();
                break;
            case 5:
                object.validateUserInputPassword();
                break;
            case 6:
                object.validateValidEmailSamples();
            case 7:
                object.validateInvalidEmailSamples();
            default:
                console.log("Please Enter right choice");
                break;
        }
    }
}

const object = new UserValidation();
object.validation();