const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your age: ", (age) => {
  if (age >= 18) {
    console.log(`You are Eligible for vote`);
  } else {
    console.log(`You are Not Eligible for vote`);
  }

  rl.close();
});
