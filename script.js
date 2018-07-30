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
var Person = function (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
}

Person.prototype.calculateAge = function () {
      console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

// Capital "P," because it's a function
var john = new Person('John', 1990, 'teacher');
// Instantiation because these are "instances" of the Person "constructor"
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName, jane.lastName, mark.lastName);
