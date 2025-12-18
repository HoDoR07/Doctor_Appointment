//Verify user credentials

//Email validator
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function testMail(email){
    email = email.trim();
    return regex.test(email);
}

//Password validator
/**
 * Password must be 8 characters Long.
 * Password must contain atleast one letter.
 * Password must contain atleast one digit.
 * Password must contain atleast one symbol.
 */
const passRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{5,}$/

function testPass(password){
    return typeof password === "string" && regex.test(password);
}

module.exports = {
    testMail,
    testPass
}
