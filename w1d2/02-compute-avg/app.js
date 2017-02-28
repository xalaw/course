//Redo "Compute the average" exercise but this use a while loop instead of a for loop
//BONUS Tasks: Try the Array.forEach() method.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


function average(numbers) {
  var count = numbers.length;
  var totalnum = numbers[0];
  for (i=1; i<count; i++) {
    totalnum = totalnum+numbers[i];
  }
  return totalnum/count;
}




/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/


// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

(function runTests() {
  var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var correctAns1 = 5.5;
  var numList2 = [0, -1, 1];
  var correctAns2 = 0;

  var testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2)
  ];
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
