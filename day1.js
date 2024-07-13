// Day1: Variables and Data Types 

// Activity1: Variable Declaration 

// Task1: Declare a variable using var, assign it a number, and log the value to the console.
var age = 45
console.log(age);

// Task2: Declare a variable using let, assign it a string, and log the value to the console.
let name = "ashwani kharwar"
console.log(name);

// Activity2: Constant Declaration 

// Task3: Declare a variable using const, assign it a boolean, and log the value to the console.
const isMale = true
console.log(isMale);

// Activity3: Data Types

// Task4: Create variables of diffrent data types (number, string, boolean, object, array) add
//     log each variables's type using "typeof" operator.
const number = 7
const str = "ashwanikharwar"
const isDeveloper = true
const skills = {
    "programming language" : ["react.js", "javascript", "node.js", "tailwindCSS", "Next.js", "mongoDB", "postgres"]
}
const tags = ["web developer", "frontend developer", "backend developer", "full stack dev developer"]

console.log(typeof(number))
console.log(typeof(str))
console.log(typeof(isDeveloper))
console.log(typeof(skills))
console.log(typeof(tags))

// Activity3: Reassigning Variable

// Task5: Declare a variable using let, assign it an initial value, reassign a new value,
// and log values to the console.
let header = "ashwani"
console.log(header)
// reassigning value
header = "ashwani kharwar"
console.log(header);

// Activity3: Understanding const

// Task5: Try reassigning a variable declare with const and observe the error.
const theme = "dark"
theme = "white"
console.log(theme) // TypeError: Assignment to constant variable.