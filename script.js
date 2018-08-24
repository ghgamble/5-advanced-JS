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
// var a = 23;
// var b = a;
//
// a = 46;
//
// console.log(a);
// console.log(b);

// Objects
// var obj1 = {
//       name: 'John',
//       age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
// obj2 is simply a new reference which points to exact same object in memory

// Functions
// var age = 27;
// var obj = {
//       name: 'Jonas',
//       city: 'Lisbon'
// };
//
// function change(a, b) {
//       a = 30;
//       b.city = 'San Francisco';
// }
//
// change (age, obj);
//
// console.log(age);
// console.log(obj.city);

// Primitive has remained unchanged, function will never affect the exterior. We don't pass an object into a function, just the reference that points to the object, so it is then reflected outside the function.



/*

First Class Functions: Passing Functions as Arguments

*/

// A function is an instance of the Object type
// A function behaves like any other object
// We can store functions in a variable
// We can pass a function as an argument to another function
// We can return a function from a function

// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc (arr, fn) {
//       var arrRes = [];
//       for (var i = 0; i < arr.length; i++) {
//             arrRes.push(fn(arr[i]));
//       }
//       return arrRes;
// }

// Callback function = fn
// function calculateAge (el) {
//       return 2016 - el;
// }
// function isFullAge (el) {
//       return el >= 18;
// }
// function maxHeartRate (el) {
//       if (el >= 18 && el <= 81) {
//             return Math.round(206.9 - (0.67 * el));
//       } else {
//             return -1;
//       }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
//
// console.log(ages);
// console.log(fullAges);
// console.log(rates);



/*

First Class Functions: Functions Returning Functions

*/

// function interviewQuestion (job) {
//       if (job === 'designer') {
//             return function (name) {
//                   console.log(name + ', can you please explain what UX design is?');
//             }
//       } else if (job === 'teacher') {
//             return function (name) {
//                   console.log('What subject do you teach, ' + name + '?');
//             }
//       } else {
//             return function (name) {
//                   console.log('Hello ' + name + ', what do you do?');
//             }
//       }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('John');
// designerQuestion('Mark');
//
// interviewQuestion('teacher')('Jane');



/*

Immediately Invoked Function Expressions (IIFE)

*/

// function game () {
//       var score = Math.random () * 10;
//       console.log (score >=5);
// }
// game ();

// (function (){
//       var score = Math.random () * 10;
//       console.log (score >=5);
// }) ();

// console.log(score);

// (function (goodLuck){
//       var score = Math.random () * 10;
//       console.log (score >= 5 - goodLuck);
// }) (5);



/*

Closures

*/

function retirement (retirementAge) {
      var a = ' years left until retirement.';
      return function (yearOfBirth) {
            var age = 2018 - yearOfBirth;
            console.log((retirementAge - age) + a);
      }
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

// An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.
// Global variables live as long as your application (your window / your web page) lives. Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables. The counter is protected by the scope of the anonymous function, and can only be changed using the retirement function.

// Reusable functions, can be used many times with different contexts

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion (job) {
      return function (name) {
            if (job === 'designer') {
                  console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                  console.log('What subject do you teach, ' + name + '?');
            } else {
                  console.log('Hello ' + name + ', what do you do?');
            }
      }
}

interviewQuestion ('teacher') ('John');
