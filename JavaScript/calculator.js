//Basic Arithmetic Calculator

alert('Basic arithmetic calculator')

var firstOperand = parseFloat(prompt('Enter the first operand'));
var secondOperand = parseFloat(prompt('Enter the second operand'));

var action = parseInt(prompt('Enter 1 for addition, 2 for substraction, 3 for multiplication, 4 for division and 5 for remainder'));

let answer;
let redo=1;

while(redo){
    if (action == 1){
        answer = firstOperand + secondOperand;
        redo=0;
    } else if (action == 2){
        answer = firstOperand - secondOperand;
        redo=0;
    } else if (action == 3){
        answer = firstOperand * secondOperand;
        redo=0;
    } else if (action == 4){
        answer = firstOperand / secondOperand;
        redo=0;
    } else if (action == 5){
        answer = firstOperand % secondOperand;
        redo=0;
    } else{
        action= parseInt(prompt("Enter 1 for addition, 2 for substraction, 3 for multiplication, 4 for division and 5 for remainder"));
        redo=1;
    }
}

console.log(`The answer for the selected operation is ${answer}`);