class Validator {
    static isEmptyString(input) {
        if (input && input.length) {
            return false;
        }
        return true;
    }

    static isValidEmail(email) {
        if (!email) {
            return false;
        }
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        return pattern.test(email);
    }
}

module.exports = Validator;
