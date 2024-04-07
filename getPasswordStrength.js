// 9. Create the getPasswordStrength function that returns a strength rating from 1 (weakest) to 4 (strongest).
// Meeting each one of the requirements causes the password to gain one point
// - at least 8 characters
// - at least one uppercase character
// - at least one lowercase character
// - at least one special character

function getLettersAmount(word) {
    return word.length;
}

function getLowercaseLetter(word) {
    const lowercaseLetters = /[a-z]/g;
    const matchingResult = word.match(lowercaseLetters);
    return matchingResult.length;
}

function getUppercaseLetter(word) {
    const uppercaseLetters =  /[A-Z]/g;
    const matchingResult = word.match(uppercaseLetters);
    if (matchingResult === null) {
        return 0;
    }
    return matchingResult.length;
}

function getSpecialCharacter(word) {
    const specialCharacters = /\W/g;
    const matchingResult = word.match(specialCharacters);
    if (matchingResult === null) {
        return 0;
    }
    return matchingResult.length;
}

function getPasswordStrength (password) {
    let passwordStrength = 0;
    if (getLettersAmount(password) >= 8) {
        passwordStrength++;
    }
    if (getLowercaseLetter(password) >= 1) {
        passwordStrength++;
    }
    if (getUppercaseLetter(password) >= 1) {
        passwordStrength++;
    }
    if (getSpecialCharacter(password) >= 1) {
        passwordStrength++;
    }
    return passwordStrength;
}

console.log(getPasswordStrength('Password123'));