#! usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
console.log(chalk_1.default.magentaBright.bold.underline("\n\t\t\tTable Generator\n"));
let userInput = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "num1",
        message: chalk_1.default.green.italic.bold("please enter your number"),
        validate: (input) => {
            const num2 = parseInt(input);
            if (isNaN(num2)) {
                return chalk_1.default.bold.red.italic.underline("please enter the numeric number");
            }
            else {
                return true;
            }
        }
    }
]);
let userNum = userInput.num1;
for (let i = 1; i <= 10; i++) {
    let result = userNum * i;
    console.log(chalk_1.default.yellow.bold(`\t ${userNum} x ${i} = ${result}`));
}
