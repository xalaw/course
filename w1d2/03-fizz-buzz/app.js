//Redo the "Fizz Buzz" drill" if you used if/else last time, then try switch statement this time.

function fizzBuzz(countTo) {
  var myArray = [];
  for(i=1; i<=countTo; i++) {
    switch (true) {
      case (i%3===0 && i%5===0):
      myArray.push('fizzbuzz');
      break;
      case (i%5===0):
      myArray.push('buzz');
      break;
      case (i%3===0):
      myArray.push('fizz');
      break;
      default:
      myArray.push(i);
    }
  }
  console.log(myArray);
  return myArray;
}


/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || [];

  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {

      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }
})();
