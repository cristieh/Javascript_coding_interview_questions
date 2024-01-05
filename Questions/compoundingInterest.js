// A program to calculate compounding interest

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateSimpleInterest(principal, rate, time) {
    return principal * (1 + rate * time);
}

function calculateCompoundInterest(principal, rate, time, n) {
    return principal * Math.pow((1 + rate / n), n * time);
}

function validateInput(value) {
    return !isNaN(value) && value >= 0;
}

function promptForPrincipal() {
    rl.question("Enter the initial principal amount (in $): ", (principalInput) => {
        principalInput = parseFloat(principalInput);
        if (!validateInput(principalInput)) {
            console.log("Invalid input for principal amount. Please enter a positive number.");
            promptForPrincipal();
            return;
        }
        promptForRate(principalInput);
    });
}

function promptForRate(principal) {
    rl.question("Enter the interest rate (in %, decimal form): ", (rateInput) => {
        rateInput = parseFloat(rateInput);
        if (!validateInput(rateInput)) {
            console.log("Invalid input for interest rate. Please enter a non negative number.");
            promptForRate(principal);
            return;
        }
        promptForTime(principal, rateInput);
    });
}

function promptForTime(principal, rate) {
    rl.question("Enter the time period in years: ", (timeInput) => {
        timeInput = parseInt(timeInput);
        if (!validateInput(timeInput)) {
            console.log("Invalid input for time period. Please enter a positive number.");
            promptForTime(principal, rate);
            return;
        }
        promptForCompounding(principal, rate, timeInput);
    });
}

function promptForCompounding(principal, rate, time) {
    rl.question("Enter the number of times interest is compounded per year: ", (nInput) => {
        nInput = parseInt(nInput);
        if (!validateInput(nInput) || nInput < 1) {
            console.log("Invalid input for the number of times interest is compounded. Please enter a positive number.");
            promptForCompounding(principal, rate, time);
            return;
        }
        const n = nInput; // Correctly define n here

        const simpleInterestAmount = calculateSimpleInterest(principal, rate, time);
        const compoundInterestAmount = calculateCompoundInterest(principal, rate, time, n);

        console.log(`The final amount with simple interest after ${time} years is: $${simpleInterestAmount.toFixed(2)}`);
        console.log(`The final amount with compound interest after ${time} years is: $${compoundInterestAmount.toFixed(2)}`);

        rl.close();
    });
}

// Start the prompting process
promptForPrincipal();
