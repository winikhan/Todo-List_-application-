#! /usr/bin/env node

import  inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition : boolean = true;

console.log(chalk.magenta("\n \t Welcome to the Todo List Application by Waniza Khan"));

while(condition){
    let addTask = await inquirer.prompt([{
        name:"tasks",
        type:"input",
        message:chalk.bgRed("Enter Your New Task")
    }
]
);
todoList.push(addTask.tasks)
console.log(`${addTask.tasks}, Task added in Todo-List`);

let addmoreTasks = await inquirer.prompt(
    [
        { name : "moretasks",
        type: "confirm",
        message:chalk.bgCyan("Do you want to add more tasks?"),
        default:"false"
    }
]);
condition = addmoreTasks.moretasks

console.log(chalk.bold(`Your Updated Todo-list ${todoList}`));

}
