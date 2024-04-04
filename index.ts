#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        }

    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select any option",
                type: "list",
                choices: ["withdraw","check balance","fast cash"]
                
            }
        ]
    );

    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter you amount",
                    type: "number",
                }
            ]
        );
        // = , += , -= 
        if(amountAns.amount < myBalance) {
        myBalance -= amountAns.amount;

        console.log("your balance is: " + myBalance)
        }
        else{
            console.log("Insufficient balance")
         }
    }


    else if (operationAns.operation === "check balance"){
        console.log(`your balance is ${myBalance}`);
    }
    else if(operationAns.operation === "fast cash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastAmount",
                    message: "Select withdraw amount",
                    type: "list",
                    choices: ["1000","3000","5000","10000"],

                }
            ]
        );
        if(fast.fastAmount === "1000"){
            myBalance -= fast.fastAmount
            console.log(`your reaming balance is ${myBalance}`);
        }
        if(fast.fastAmount === "3000"){
            myBalance -= fast.fastAmount
            console.log(`your reaming balance is ${myBalance}`);
        }
        if(fast.fastAmount === "5000"){
            myBalance -= fast.fastAmount
            console.log(`your reaming balance is ${myBalance}`);
        }
        if(fast.fastAmount === "10000"){
            myBalance -= fast.fastAmount
            console.log(`your reaming balance is ${myBalance}`);
        }
    }   

}



else {
    console.log("Incorrect pin number");
}
