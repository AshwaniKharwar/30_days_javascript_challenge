// Arithmetic Operation Script: 


// Feature1:  write a script that performs arithmetic basic operations (sddition, subtraction, multiplication, division, remainder) 
//  on two numbers and logs the result

function performArithmeticOperations(num1, num2){
    // Addition
    const add = num1 + num2;
    console.log(`Addition of ${num1} and ${num2} is : ${add}`);

    // Subtraction
    const sub = num1 - num2;
    console.log(`Subtraction of ${num1} and ${num2} is : ${sub}`);

    // Multiplication
    const mul = num1 * num2;
    console.log(`Multiplication of ${num1} and ${num2} is : ${mul}`);

    // Division
    if(num2 !== 0){
        const div = num1 / num2;
        console.log(`Division of ${num1} and ${num2} is : ${div}`);
    } else {
        console.log('Division by zero is not allowed.');
    }

    // Remainder
    if(num2 !== 0){
        const rem = num1 % num2;
        console.log(`Remainder of ${num1} and ${num2} is : ${rem}`);
    } else {
        console.log('Division by zero is not allowed.');
    }
    
}

// Example
performArithmeticOperations(30, 5);

// Feature2: Create a script that compares two numbers using different comparisons and combine condition using
//  logical operators, logging the results.

function compareNumbers(num1, num2) {
    // Equal to
    console.log(`${num1} == ${num2}: ${num1 == num2}`);

    // Not equal to
    console.log(`${num1} != ${num2}: ${num1 != num2}`);

    // Strictly equal to
    console.log(`${num1} === ${num2}: ${num1 === num2}`);

    // Strictly not equal to
    console.log(`${num1} !== ${num2}: ${num1 !== num2}`);

    // Greater than
    console.log(`${num1} > ${num2}: ${num1 > num2}`);

    // Less than
    console.log(`${num1} < ${num2}: ${num1 < num2}`);

    // Greater than or equal to
    console.log(`${num1} >= ${num2}: ${num1 >= num2}`);

    // Less than or equal to
    console.log(`${num1} <= ${num2}: ${num1 <= num2}`);

    // Combining conditions using logical operators

    // AND operator
    console.log(`(${num1} > 0) && (${num2} > 0): ${(num1 > 0) && (num2 > 0)}`);

    // OR operator
    console.log(`(${num1} > 0) || (${num2} > 0): ${(num1 > 0) || (num2 > 0)}`);

    // NOT operator
    console.log(`!(${num1} === ${num2}): ${!(num1 === num2)}`);
}

// Example
compareNumbers(10, 7);


// Feature3: Write a script that uses the uses the ternary operator to determine
//  if a number is positive or negative adn logs the results.

function isPositiveOrNegative(num){

    const result = (num > 0) ? "positive": (num == 0) ? "zero" : "negative"
    console.log(`Number ${num} is ${result}`);
}

// Example
isPositiveOrNegative(0)
