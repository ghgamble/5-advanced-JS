EVERYTHING IS AN OBJECT (well, most everything)

Primitives are not. Primitives are numbers, strings, booleans, undefined, null.
Everything else is an object. Arrays, functions, objects, dates, wrapper for numbers strings and booleans.

OBJECT-ORIENTED PROGRAMMING

Objects interacting with one another through methods and properties
Used to store data, structure applications into modules and keeping code clean
Can make a "blueprint" to make new objects with the same properties. We can have a "constructor" and then make as many "instances" as we want.
"Constructor" is the "blueprint"
Inheritance is when one object is based on another one

PROTOTYPE AND PROTOTYPE CHAINS
Inheritance works through prototypes. Each JavaScript object has a prototype property. The prototype property of an object is where we put methods and properties that we want other objects to inherit. The constructor's prototype property is NOT the prototype of the constructor itself, it's the prototype of ALL instances that are created through it. When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.
