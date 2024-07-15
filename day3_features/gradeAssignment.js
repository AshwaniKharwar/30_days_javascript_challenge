const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your marks: ", (score) => {
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

  rl.close();
});
