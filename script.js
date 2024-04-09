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

function isTheFirstNumberCloseToTheSecondNumber(firstNumber, secondNumber, marginParameter = 0) {
    const absoluteDistanceBetweenNumbers = Math.abs(firstNumber - secondNumber);
    if (absoluteDistanceBetweenNumbers <= marginParameter) {
        return 0;
    }
    if (firstNumber < secondNumber) {
        return -1;
    }
    if (firstNumber > secondNumber) {
        return 1;
    }
}

console.log(isTheFirstNumberCloseToTheSecondNumber(9,5, 0));

// 3.You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:
// xor = Takes 2 values and returns true if, and only if, one of them is truthy.
// or = Takes 2 values and returns true if either one of them is truthy.
// When doing so, you cannot use the or operator: ||.

// Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings and empty arrays]
// There will always be 2 values provided.

function isOnlyOneOfThemTruthy(firstValue, secondValue) {
    if (
        (firstValue && !secondValue) ||
        (!firstValue && secondValue)
    ) {
        return true;
    }
    return false;
}

function isEitherOneOfThemTruthy(firstValue, secondValue) {
    if (!firstValue && !secondValue) {
        return false;
    }
    return true;
}

console.log(isOnlyOneOfThemTruthy("Bye"));
console.log(isEitherOneOfThemTruthy(0, 2));

// 4.Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truthy, func1 should be called, otherwise call the func2.

function firstFunction() {
    console.log('True')
}
function secondFunction() {
    console.log('False')
}

function isBoolTruthy(booleanValue, firstFunction, secondFunction) {
    if (booleanValue) {
        return firstFunction();
    }
    return secondFunction();
}

isBoolTruthy(true, firstFunction, secondFunction);

// 5.After a hard quarter in the office you decide to get some rest on a vacation.
// So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation.
// The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function getTheTotalAmountForCarRental(dayNumber) {
    const costPerDay = 40 * dayNumber;
    const fiftyOff = 50;
    const twentyOff = 20;
    if (dayNumber >= 7) {
        return costPerDay - fiftyOff;
    }
    if (dayNumber >= 3) {
        return costPerDay - twentyOff;
    }
    return costPerDay;
}

console.log(getTheTotalAmountForCarRental(6));

// 6. Americans are odd people: in their buildings, the first floor is actually the first floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the first floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.

function getTheFloorInTheEuropeanSystem(americanFloorNumber) {
    if (americanFloorNumber <= 0) {
        return americanFloorNumber;
    }
    if (americanFloorNumber <= 12) {
        return americanFloorNumber - 1;
    }
    if (americanFloorNumber >= 14) {
        return americanFloorNumber - 2;
    }
}

console.log(getTheFloorInTheEuropeanSystem(14));

// 7. In the rock-paper-scissors.js file.

// 8. Write the isValidPassword function.
// Make sure that the password is at least 8 characters long and contains at least one number and one uppercase letter.

function isLettersNumber(word) {
    return word.length >= 8;

}

function isUppercaseLetter(word) {
    const uppercaseLetters =  /[A-Z]/g;
    const matchingResult = word.match(uppercaseLetters);
    return matchingResult !== null;

}

function isNumber(word) {
    const numbers = /\d/g;
    const matchingResult = word.match(numbers);
    return matchingResult !== null;
}

function isValidPassword(password) {
    return isLettersNumber(password) &&
        isUppercaseLetter(password) &&
        isNumber(password);
}

console.log(isValidPassword('Password123'));

// 9. In the getPasswordStrength.js file.

// 10. Create the getTotalOrderCost function that returns the total cost of the order and accepts the following arguments:
// - the base cost of the items
// - whether the customer is a VIP member - they get a 5% discount
// - how many loyalty points the customer wants to use - each one of them reduces the cost by a cent (the final cost should not be lower than $0)
// - is the package going to be shipped internationally - shipping internationally costs $10 (otherwise, it costs $5)
// Make sure to apply the VIP discount before the loyalty points. The VIP discount does not apply to shipping.

function isVipSubscriptionActive(vipSubscription) {
    if (vipSubscription === 'active') {
        return 0.05;
    }
    return 0;
}

function getLoyaltyPoints(pointAmount) {
    if (pointAmount) {
        return pointAmount;
    }
    return 0;
}

function isShippedInternationally(shippingType) {
    if (shippingType === 'international') {
        return 10;
    }
    return 5;
}

function getTotalOrderCost(baseCost, vipMember, loyaltyPoints, shipping) {
    const fivePercentDiscount = isVipSubscriptionActive(vipMember) * baseCost;
    const costReduceThroughLoyaltyPoints = getLoyaltyPoints(loyaltyPoints) / 100;
    const shippingType = isShippedInternationally(shipping);
    return baseCost - fivePercentDiscount - costReduceThroughLoyaltyPoints + shippingType;
}

console.log(getTotalOrderCost(100,'',5, 'international'));

// 11. Create the getTicketPrice function that returns the ticket price and accepts the following arguments:
// - the base price of the ticket
// - how many days are there until the show - buying tickets more than a month in advance provides a 10% discount
// - is the show on the weekend - weekend shows are $15 more expensive
// The discount applied if the tickets are bought a month in advance should decrease the $15 charged if the show plays on the weekend.

function getDaysUntilTheShow(daysNumber) {
    if (daysNumber > 30) {
        return 0.10;
    }
    return 0;
}

function isTheShowOnTheWeekend(weekendShow) {
    if (weekendShow === "yes") {
        return 15;
    }
    return 0;
}

function getTicketPrice(basePrice, daysUntilTheShow, weekendShows) {
    const tenPercentDiscount = getDaysUntilTheShow(daysUntilTheShow) * basePrice;
    const showOnTheWeekend = basePrice + isTheShowOnTheWeekend(weekendShows);
    return showOnTheWeekend - tenPercentDiscount;
}

console.log(getTicketPrice(100, 31, 'yes'));