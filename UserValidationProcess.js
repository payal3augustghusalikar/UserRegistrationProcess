const FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

class UserValidationProcess {
    firstNameValidator(firstName) {
      
        if (FIRST_NAME_PATTERN.test(firstName)) 
            console.log("valid First Name");
        else 
            console.log("Invalid First Name");
    }
}
module.exports = new UserValidationProcess();