let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function goodMoves(movement) {
  if (movement[0] >= 0 && movement[1] >= 0){
    return movement;
  }
}
function sumMoves(arrayMoves) {
  return arrayMoves[0]+arrayMoves[1];
}
function displayTotal(stepTotal) {
  console.log(`${stepTotal} Steps`);
}

let allGoodMoves = turtleMoves.filter(goodMoves);
console.log(allGoodMoves);
let totalSteps = allGoodMoves.map(sumMoves);
console.log(totalSteps);

totalSteps.forEach(displayTotal);
