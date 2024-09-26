import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

// Prompt user for input with validation
const response = await inquirer.prompt({
  type: "input", // 'input' type to ensure string input that can be parsed
  name: "userInput",
  message: "Please enter the amount of seconds",
  validate: (input) => {
    const parsedInput = Number(input);
    if (isNaN(parsedInput)) {
      return "Please enter a valid number";
    } else if (parsedInput > 60 || parsedInput <= 0) {
      return "Seconds must be between 1 and 60";
    } else {
      return true;
    }
  },
});

// Safely parse and check the user's input
let input = Number(response.userInput);

if (isNaN(input)) {
  console.error("Invalid input, exiting.");
  process.exit(1);
}

// Countdown timer logic
const startTime = (val: number) => {
  const intTime = new Date().setSeconds(new Date().getSeconds() + val);
  const intervalTime = new Date(intTime);

  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const TimeDiff = differenceInSeconds(intervalTime, currentTime);

    if (TimeDiff <= 0) {
      console.log("Timer has expired!");
      clearInterval(intervalId); // Stop the interval
      return;
    }

    const minutes = Math.floor(TimeDiff / 60);
    const seconds = TimeDiff % 60;

    console.log(
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    );
  }, 1000);
};

startTime(input);
