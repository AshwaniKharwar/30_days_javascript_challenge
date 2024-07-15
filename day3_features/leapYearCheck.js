const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a year: ", (year) => {
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

  rl.close();
});
