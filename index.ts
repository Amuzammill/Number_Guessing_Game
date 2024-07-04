#! usr/bin/env node
 import inquirer from "inquirer";

 console.log("Wellcome Muzamil Ahmed cli guessing number game");
 const randomNmuber = Math.floor(Math.random() * 5 + 1)
 const answer = await inquirer.prompt([
    {
        name: "Userguessednumber",
        type : "number",
        messag: "Enter your guess Number(Number limit 5 to 1):",

    },
 ]);
 if (answer.Userguessednumber === randomNmuber){
    console.log("Congratulation ! You guess a correct Number..");
 }
else{
    console.log("sorry, You guess a wrong number");
};