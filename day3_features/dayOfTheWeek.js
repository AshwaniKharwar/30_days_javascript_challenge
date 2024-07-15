const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter day in number: ", (day) => {
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

  rl.close();
});
