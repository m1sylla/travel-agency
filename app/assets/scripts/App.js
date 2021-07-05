var $ = require('jquery');
var Person = require('./modules/Person');


var john = new Person("John Doe", "blue");
var jane = new Person("Jane Smith", "green");
john.greet();
jane.greet();

//$("h1").remove();