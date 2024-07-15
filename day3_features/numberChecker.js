const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (num) => {
  if (num > 0) {
    console.log(`Number ${num} is positive`);
  } else if (num < 0) {
    console.log(`Number ${num} is negative`);
  } else {
    console.log(`Zero`);
  }

  rl.close();
});
