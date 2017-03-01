//return a function that console logs a greeting and name.
function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
}
//create function variables for different types of greeting.
var englishGreeting = createGreeter('Hello');
var frenchGreeting = createGreeter('Bonjour');

//run english and french greeting.
englishGreeting('Anna');
frenchGreeting('Sofia');
