import inquirer from "inquirer";

// Prompting the user for quiz answers
const quiz: {
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
} = await inquirer.prompt([
  {
    name: "question_1",
    type: "list",
    message:
      "Q1. What is the correct way to check if two values are not equal in TypeScript?",
    choices: ["a == b", "a ==! b", "a!==b", "a===b"],
  },
  {
    name: "question_2",
    type: "list",
    message:
      "Q2. Which character is commonly allowed in variable names in TypeScript?",
    choices: ["$", "@", "#", "&"],
  },
  {
    name: "question_3",
    type: "list",
    message:
      "Q3. Which operator is commonly used for string concatenation in TypeScript?",
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "question_4",
    type: "list",
    message:
      "Q4. Which symbol is commonly used to terminate a statement in TypeScript?",
    choices: [";", ",", ".", ".;"],
  },
  {
    name: "question_5",
    type: "list",
    message:
      "Q5. Which method of Inquirer.js is used to start the prompt interface and receive user input?",
    choices: ["start()", "prompt()", "init()", "run()"],
  },
]);

// Score calculation
let score: number = 0;

switch (quiz.question_1) {
  case "a!==b":
    console.log("Correct!");
    score++;
    break;
  default:
    console.log("Incorrect!");
    break;
}

switch (quiz.question_2) {
  case "$":
    console.log("Correct!");
    score++;
    break;
  default:
    console.log("Incorrect!");
    break;
}

switch (quiz.question_3) {
  case "+":
    console.log("Correct!");
    score++;
    break;
  default:
    console.log("Incorrect!");
    break;
}

switch (quiz.question_4) {
  case ";":
    console.log("Correct!");
    score++;
    break;
  default:
    console.log("Incorrect!");
    break;
}

switch (quiz.question_5) {
  case "prompt()":
    console.log("Correct!");
    score++;
    break;
  default:
    console.log("Incorrect!");
    break;
}

// Output result
console.log(`Your score: ${score}`);

if (score <= 2) {
  console.log("You failed the quiz :-( , Better Luck next time!");
} else {
  console.log("You passed the quiz :-) , Congrats!");
}
