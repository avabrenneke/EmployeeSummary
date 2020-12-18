//Dependencies
const inquirer = require("inquirer");
const fs = require("fs");

//Library folders 
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

//Start Prompt
function startPrompt() {
    const userArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "Input ID",
        name: "id"
    }, {
        type: "input",
        message: "Input Email",
        name: "email"
    }, {
        type: "list",
        message: "What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return inquirer
        .prompt(userArray);
}
//Manager
function managerPrompt() {
    const userArray = [{
        type: "input",
        message: "Input Office Number",
        name: "office number"
    }];

    return inquirer
        .prompt(userArray);
}
//Engineer
function engineerPrompt() {
    const userArray = [{
        type: "input",
        message: "Input Github",
        name: "github"
    }];

    return inquirer
        .prompt(userArray);
}
//Intern
function internPrompt() {
    const userArray = [{
        type: "input",
        message: "Input School",
        name: "school"
    }];

    return inquirer
        .prompt(userArray);
}
//Employee Array Function
async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            startPrompt()
                .then(function ({ name, id, email, title }) {

                    if (title === "Manager") {
                        managerPrompt().then(function (officeNumber) {
                            this.employee = new Manager(name, id, email, officeNumber);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        engineerPrompt().then(function ({ github }) {
                            this.employee = new Engineer(name, id, email, github);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        internPrompt().then(function ({ school }) {
                            this.employee = new Intern(name, id, email, school);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("ERROR");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

//HTML
let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Team Profile Generator</title>
    <style>
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .card {
            padding: 15px;
            border-radius: 5px;
            background-color: white;
            color: pink;
            margin: 15px;
        }
        .text {
            padding: 15px;
            border-radius: 5px;
            background-color: white;
            color: grey;
            margin: 15px;
        }
        .col {
            flex: 1;
            text-align: center;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-light bg-light justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1"><h1>Team Profile</h1></span>
    </nav>
    <div class="row">
        <div class="card bg-light justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Ava</h4>
            </div>
            <div class="col card-header">
                <h4>Manager</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: ava@gmail.com</li>
                <li class="list-group-item">Office Number: 1</li>
            </ul>
        </div>
        <div class="card bg-light justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Omar</h4>
            </div>
            <div class="col card-header">
                <h4>Engineer</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: omar@gmail.com</li>
                <li class="list-group-item">GitHub: omar1234</li>
            </ul>
        </div>
        <div class="card bg-light justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Peter</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">Email: peter@gmail.com</li>
                <li class="list-group-item">School: Oregon</li>
            </ul>
        </div>
        <div class="card bg-light justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Matt</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 4</li>
                <li class="list-group-item">Email: matt@gmail.com</li>
                <li class="list-group-item">School: Oregon</li>
            </ul>
        </div>
    </div>
</body>
</html>`
//Employee Array Loop
    for (let i in employeeArray) {
        employee = employeeArray[i];
        let cardInput = {
            name: employee.getName(),
            role: employee.getRole(),
            id: employee.getId(),
            email: employee.getEmail()
        }

        if (employee.getRole() == "Engineer") {
            cardInput.github = employee.getGithub();
        } else if (employee.getRole() == "Manager") {
            cardInput.officeNumber = employee.getOfficeNumber();
        } else if (employee.getRole() == "Intern") {
            cardInput.school = employee.getSchool();
        }

        html += getCardHtml(cardInput);
    }
//Write the file
    const fs = require("fs");
    fs.writeFile('newfile.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}
run()
//Put info into cards
function getCardHtml(cardInput) {
    let html = "<div>";
    html += cardInput;
    return html;
}