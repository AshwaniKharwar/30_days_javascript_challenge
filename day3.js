// Day3 : Control Structures

// Activites:

// Activity1: If-Else Statements

// Task1: WAP to check if a number is positive, negative, or zero, and
//     log the result.
let num1 = 0;

if (num1 > 0) {
  console.log(`Number ${num1} is positive`);
} else if (num1 < 0) {
  console.log(`Number ${num1} is negative`);
} else {
  console.log(`Zero`);
}

// Task2: WAP to check if a person is eligible to vote (age >= 18) and
// log the result.
let age = 18;

if (age >= 18) {
  console.log(`Person is Eligible for vote`);
} else {
  console.log(`Person is Not Eligible for vote`);
}

// Activity2: Nested If-Else Statements

// Task3: WAP to find the largest of three numbers using nested if-else statements.
let num2 = 23;
let num3 = 100;
let num4 = 15;

if (num2 > num3) {
  if (num2 > num4) {
    console.log(`Number ${num2} is largest`);
  } else {
    console.log(`Number ${num4} is largest`);
  }
} else if (num3 > num2) {
  if (num3 > num4) {
    console.log(`Number ${num3} is largest`);
  } else {
    console.log(`Number ${num4} is largest`);
  }
}

// Activity3: Switch Case

// Task4: WAP that uses a switch case to determine the day of the week based on a
// Number(1-7) and log the day name to the console.

let day = new Date().getDay();

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Pls enter number within range (1-7)");
    break;
}

// Task5: WAP that uses a switch case to assign a grade ("A", "B", "C", "D", "F") based on
// a score and log the grade to the console.

let score = 55;

switch (true) {
  case score >= 91:
    console.log("A+");
    break;
  case score >= 81:
    console.log("A");
    break;
  case score >= 71:
    console.log("B+");
    break;
  case score >= 61:
    console.log("B");
    break;
  case score >= 51:
    console.log("C+");
    break;
  case score >= 41:
    console.log("C");
    break;
  case score >= 31:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// Activity4: Conditional (Ternary) Operator

// Task6: WAP that uses the ternary operator to check if a number is even or odd
//  log the result to the console.

let num5 = -41;
const result = num5 % 2 == 0 ? "Even" : "Odd";
console.log(`Number ${num5} is ${result}`);

// Task7: WAP to check if a year is a leap year using multiple conditions (division
//  by 4, but not 100 unless also division by 400) and log the result to the console.

let year = 1900;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`Year ${year} is Leap year.`);
    } else {
        console.log(`Year ${year} is Not Leap year.`);
    }
  } else if (year % 400 !== 0) {
    console.log(`Year ${year} is Leap year.`);
  } else {
    console.log(`Year ${year} is Not Leap year.`);
  }
} else {
    console.log(`Year ${year} is Not Leap year.`);
}
