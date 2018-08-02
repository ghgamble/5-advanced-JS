/*

Creating Objects:
Function Constructors

*/

// Function Constructors
// Object Literal
// var john = {
//       name: 'John',
//       yearOfBirth: 1990,
//       job: 'teacher'
// };

// "Blueprint," or function constructor
// First, the function is created, then it is called when we make a new one
// var Person = function (name, yearOfBirth, job) {
//       this.name = name;
//       this.yearOfBirth = yearOfBirth;
//       this.job = job;
// }
//
// Person.prototype.calculateAge = function () {
//       console.log(2018 - this.yearOfBirth);
// }
//
// Person.prototype.lastName = 'Smith';

// Capital "P," because it's a function
// var john = new Person('John', 1990, 'teacher');
// Instantiation because these are "instances" of the Person "constructor"
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
//
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// console.log(john.lastName, jane.lastName, mark.lastName);

/*

The Prototype Chain in the Console

*/

var Person = function (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
}

var john = new Person('John', 1990, 'teacher');
console.log(john);

// Console will include all of the properties that we assigned to it. We also have the _proto_, which includes the method that we added.
console.log(Person.prototype);
// Built in methods are included in _proto_:Object. Constructor is the prototype that was used to create a new object.
// Has own property, asks if an object has a property or not.
console.log(john.hasOwnProperty('job'));
// Will return true
console.log(john.hasOwnProperty('lastName'));
// Will return false, because it's a property on the object Constructor
console.log(john instanceof Person);
// Will return true

// Everything IS truly an object
var x = [2,4,6];
console.info(x);
console.log(x.length);
