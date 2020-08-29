// Simple Calculator

// readline-sync requirements 


const readline = require("readline-sync");


// Functions for Operations 



function adding(number1, number2){
    return 'Calculating Addition: ' + (number1 + number2);
};

function subtracting(number1, number2){
    return 'Calculating Subtraction: ' + (number1 - number2);
};

function multiplying(number1, number2){
    return 'Calculating Multiplication: ' + (number1 * number2);
};

function dividing(number1, number2){
    return 'Calculating Division: ' + (number1 / number2).toFixed(2);

};


// asking for operation 

let quiting = false;

while(quiting === false) {
    let enteredOperator = readline.question('What Operation Do You Want To Perform? add/sub/mul/div/quit:');
if(enteredOperator === 'quit'){
    console.log('You have just used a Javascript calculator.');
    quiting = true;
} else {
    let number1 = readline.questionInt('First Number: ');
    let number2 = readline.questionInt('Second Number: ');
switch(enteredOperator) {

// Calculating Operations

    case 'add':
        console.log('Calculating Addition: ' + (number1 + number2))
    break;
    case 'sub':
        console.log('Calculating Subtraction: ' + (number1 - number2))
    break;
    case 'mul':
        console.log('Calculating Multiplication: ' + (number1 * number2))
    break;
    case 'div': 
        console.log('Calculating Division: ' + (number1 / number2))
    break;
    default:
        console.log('Error');
}
}
}