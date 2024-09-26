import inquirer from "inquirer";
class Student {
    name;
    constructor(names) {
        this.name = names;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programStart = async (person) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"],
        });
        if (ans.select == "staff") {
            console.log("You approach the staff room. Please feel free to ask any questions.");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you want to engage with:",
            });
            const student = person.students.find((val) => val.name == ans.student);
            if (!student) {
                // If student is not found, add a new student
                const newStudent = new Student(ans.student);
                person.addStudent(newStudent);
                console.log(`Hello I am ${newStudent.name}, Nice to meet you!`);
                console.log("New Student added.");
                console.log("Current student list:");
                console.log(person.students);
            }
            else {
                // If student is found, greet the existing student
                console.log(`Hello I am ${student.name}, Nice to see you again :-)`);
                console.log("Existing student list:");
                console.log(person.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting program!");
            process.exit();
        }
    } while (true);
};
programStart(person);
