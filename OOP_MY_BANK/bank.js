import inquirer from "inquirer";
// Now we are making Bank account class
class Bank_Account_class {
    accountNumber;
    Balance;
    constructor(accountNumber, Balance) {
        this.accountNumber = accountNumber;
        this.Balance = Balance;
    }
    // Debit money
    withdraw(amount) {
        if (this.Balance >= amount) {
            this.Balance -= amount;
            console.log(`Widrawal of ${amount} is successful. Remaing balacne is ${this.Balance}`);
        }
        else {
            console.log("Insufficient Balance.");
        }
    }
    // credit money
    Deposit(amount) {
        if (amount > 100) {
            amount -= 1; // $1 fee charged if balance is greater than $100
        }
        this.Balance += amount;
        console.log(`Deposit of ${amount} Succesful. Remaining Balance is ${this.Balance}`);
    }
    checkBalance() {
        console.log(`Current Balance: ${this.Balance}`);
    }
}
class Customers {
    firstName;
    lastName;
    Gender;
    Age;
    Contact_N0;
    account;
    constructor(firstName, lastName, Gender, Age, Contact_N0, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Gender = Gender;
        this.Age = Age;
        this.Contact_N0 = Contact_N0;
        this.account = account;
    }
}
// Create Bank Accounts
const Accounts = [
    new Bank_Account_class(1001, 500),
    new Bank_Account_class(1201, 1000),
    new Bank_Account_class(1511, 5000),
];
// create Customers
const Customer = [
    new Customers("Ali", "Raza", "Male", 22, 3234565748, Accounts[0]),
    new Customers("Hamza", "Alvi", "Male", 30, 3174834565, Accounts[1]),
    new Customers("Ayesha", "Farooq", "Female", 32, 3474823648, Accounts[2]),
];
// Creating a function which interacts with bank accounts.
async function service() {
    do {
        const accountUserInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: "Enter your account number: ",
        });
        const findcustomer = Customer.find((find) => find.account.accountNumber === accountUserInput.accountNumber);
        if (findcustomer) {
            console.log(`Welcome, ${findcustomer.firstName} ${findcustomer.lastName}!\n`);
            const ans = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "Select",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
                },
            ]);
            switch (ans["select"]) {
                case "Deposit":
                    const depositammount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to deposit",
                    });
                    findcustomer.account.Deposit(depositammount.amount);
                    break;
                case "Withdraw":
                    const WithdrawAmmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to withdraw",
                    });
                    findcustomer.account.withdraw(WithdrawAmmount.amount);
                    break;
                case "Check Balance":
                    findcustomer.account.checkBalance();
                    break;
                case "Exit":
                    console.log("Exiting Bank Program...");
                    console.log("\nThank you for using our bank services. Have a nice day :-)");
                    return;
            }
        }
        else {
            console.log("Invalid Account Number, Please Try Again.");
        }
    } while (true);
}
service();