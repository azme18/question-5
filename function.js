function checkEvenOrOdd(number) {
    if (typeof number !== 'number') {
        console.log("Please enter a valid number.");
        return;
    }

    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}

// Example usage:
checkEvenOrOdd(5);  // Output: 5 is odd.
checkEvenOrOdd(10); // Output: 10 is even.
