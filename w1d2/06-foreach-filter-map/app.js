//here are the moves the turte made.
let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

//return only the good arrays.
//check that numbers for first 2 index to be greater than 0.
function goodMoves(movement) {
  if (movement[0] >= 0 && movement[1] >= 0){
    return movement;
  }
}

//return the sum of array at first 2 index.
function sumMoves(arrayMoves) {
  return arrayMoves[0]+arrayMoves[1];
}

//console log total of steps for each move.
function displayTotal(stepTotal) {
  console.log(`${stepTotal} Steps`);
}

//filter method to remove any items where turtle moved backwards (negative values)
//filter turtleMoves with goodMoves filter on line 6
let allGoodMoves = turtleMoves.filter(goodMoves);
//console.log(allGoodMoves);

//add first and second number in array using sumMoves().
let totalSteps = allGoodMoves.map(sumMoves);
//console.log(totalSteps);

//display how many steps the turtle took in each case.
totalSteps.forEach(displayTotal);
