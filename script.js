// 1.Write a function named setAlarm which receives two parameters.
// The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm).
// It should return false otherwise.

function isAlarmSet(isEmployed, isOnVacation){
    return isEmployed && !isOnVacation;
}

console.log(isAlarmSet(true, false));

// 2. Create a function close_compare that accepts 3 parameters: a, b, and an optional margin.
// The function should return whether 'a' is lower than, close to, or higher than b.
// Please note the following:
// When 'a' is close to b, return 0.
// For this challenge, 'a' is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
// Otherwise...
// When 'a' is less than b, return -1.
// When 'a' is greater than b, return 1.
// If margin is not given, treat it as if it were zero.
// Assume: margin >= 0
// Tip: Some languages have a way to make parameters optional.

function isTheFirstNumberCloseTheToSecondNumber(firstNumber, secondNumber, marginParameter = 0) {
    const absoluteValue = Math.abs(firstNumber - secondNumber);
    if (absoluteValue <= marginParameter) {
        return 0;
    }
    if (firstNumber < secondNumber) {
        return -1;
    }
    if (firstNumber > secondNumber) {
        return 1;
    }
}

console.log(isTheFirstNumberCloseTheToSecondNumber(9,5, 0));