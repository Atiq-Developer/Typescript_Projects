import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please Enter a non-empty value";
            }
        },
    },
    {
        name: "Courses",
        type: "list",
        message: "Select the course to enrolled it.",
        choices: [
            "Mern Stack Development",
            "AWS Developer",
            "CIT-learning",
            "Machine Learning",
        ],
    },
]);
const tutionFee = {
    "Mern Stack Development": 5000,
    "AWS Developer": 10000,
    "CIT-learning": 2000,
    "Machine Learning": 6000,
};
console.log(`\n Tution fees: Rs ${tutionFee[answer.Courses]}/-`);
console.log(`\n Balance: Rs ${myBalance}/- \n`);
let paymentType = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: "Slect your payment method",
        choices: ["Bank Tranfer", "EasyPaisa", "JazzCash"],
    },
    {
        name: "Amount",
        type: "input",
        message: "Transfer your money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please Enter a non-empty value";
            }
        },
    },
]);
console.log(`You select the Payment method ${paymentType.Payment}`);
const TutionFees = tutionFee[answer.Courses];
const PaymentAmount = parseFloat(paymentType.Amount);
if (TutionFees === PaymentAmount) {
    console.log(`Congratulation, you have succesfully enrolled in ${answer.Courses} \n`);
    let nextStep = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "What next approach do you like?",
        choices: ["view Status", "Exits"],
    });
    if (nextStep.select === "view Status") {
        console.log("\n***************Status*********************\n");
        console.log(`Student Name: ${answer.Students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.Courses}`);
        console.log(`Tution Fee Paid: ${PaymentAmount}`);
        console.log(`Balance: ${(myBalance += PaymentAmount)}`);
    }
    else {
        console.log("\n Existing Student Mangement System");
    }
}
else {
    console.log(`Invalid Amount due to course. \n`);
}
