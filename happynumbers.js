"use strict"

//write a function that determines if a given number is a "happy number."
//A happy number is one that eventualy simplifies to 1 when you square the digits and add them together.
//unhappy numbers x = 4
//happy number x =1
//if a number appears more than once, original number is unhappy
//1. split number
//2. square the splits
//3. add squared numbers
//4. check if sum is 1
//5. running total - empty array
//6. rerun function function with sum, keep track of totals

//main function
//function startHappyNumbers(number){
// 	let splittedNumber = splitNumber(number);
//  }

// function splitNumber(number){
// let result = number.toString().split('');
// console.log("Starting number ---> " + number);
// console.log()
// }

// function squareTheSplits(){
// }

// function addSquaredNumbers

// function checkIfNumberIsHappy()
//  let integer = ""

//wade's code:


function splitNumber(number){
  let splittedNumber = number.toString().split('');
  return splittedNumber;
}

function squareTheSplits(splittedNumber){
  let resultArr = [];
  for(let i = 0; i < splittedNumber.length; i++){
    resultArr.push(splittedNumber[i] ** 2);
  }
  console.log(resultArr);
  return resultArr;
}

function addSquaredNumbers(squaredArray){
  let sum = 0;
  for(let i = 0; i < squaredArray.length; i++){
    sum += squaredArray[i];
    console.log(sum);
  }
  return sum;
}

function checkIfNumberIsHappy(sum){
  if(sum === 1) {
    return true;
  }
  return false;
}

// main function
function startHappyNumbers(number, runningTotal){
  let splittedNumber = splitNumber(number);
  let squaredArray = squareTheSplits(splittedNumber);
  let sum = addSquaredNumbers(squaredArray);
  let total = checkIfNumberIsHappy(sum);

  if(total === true){
    console.log("Your number is happy!")
  }
  else if(total === false && runningTotal.includes(sum) === false ){
    runningTotal.push(sum);
    startHappyNumbers(sum, runningTotal);
  }
  else{
    console.log("Your number will never be happy....");
  }
}

startHappyNumbers(19, []);
startHappyNumbers(4, []);

