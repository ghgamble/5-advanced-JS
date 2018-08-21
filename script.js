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

// var Person = function (name, yearOfBirth, job) {
//       this.name = name;
//       this.yearOfBirth = yearOfBirth;
//       this.job = job;
// }
//
// var john = new Person('John', 1990, 'teacher');
// console.log(john);

// Console will include all of the properties that we assigned to it. We also have the _proto_, which includes the method that we added.
// console.log(Person.prototype);
// Built in methods are included in _proto_:Object. Constructor is the prototype that was used to create a new object.
// Has own property, asks if an object has a property or not.
// console.log(john.hasOwnProperty('job'));
// Will return true
// console.log(john.hasOwnProperty('lastName'));
// Will return false, because it's a property on the object Constructor
// console.log(john instanceof Person);
// Will return true

// Everything IS truly an object
// var x = [2,4,6];
// console.info(x);
// console.log(x.length);



/*

Creating Objects: Object.create

*/

// Create object based on a prototype object
// var personProto = {
//       calculateAge: function () {
//             console.log(2018 - this.yearOfBirth);
//       }
// }
//
// var john = Object.create(personProto);
// Not ideal way to add info
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//       name: {value: 'Jane'},
//       yearOfBirth: {value: 1969},
//       job: {value: 'designer'}
// });



/*

Primitives vs Objects

*/

// Primitives hold data within variables, variables associated with objects do not actually contain the object, but instead contain a reference to the place in memory where the object is stored.

// Primitives
var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);

// Objects
var obj1 = {
      name: 'John',
      age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// obj2 is simply a new reference which points to exact same object in memory

// Functions
var age = 27;
var obj = {
      name: 'Jonas',
      city: 'Lisbon'
};

function change(a, b) {
      a = 30;
      b.city = 'San Francisco';
}

change (age, obj);

console.log(age);
console.log(obj.city);

// Primitive has remained unchanged, function will never affect the exterior. We don't pass an object into a function, just the reference that points to the object, so it is then reflected outside the function.
