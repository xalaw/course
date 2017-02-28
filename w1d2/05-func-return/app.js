function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
}

var englishGreeting = createGreeter('Hello');
var frenchGreeting = createGreeter('Bonjour');

englishGreeting('Anna');
frenchGreeting('Sofia');
