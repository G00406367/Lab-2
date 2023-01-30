//boolean
var flag = true;
console.log("Value assgined to flag is: " + flag);
//number
var decimal = 6;
console.log("The decimal value is: " + decimal);
var hex = 0xf00d;
console.log("The hex value is: " + hex);
var binary = 10;
console.log("The binary value is: " + binary);
var octal = 484;
console.log("The octal value is: " + octal);
//string
var color = "blue";
color = 'red';
console.log("the real color is:" + color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is ".concat(fullName, ".\n\nI'll be ").concat(age + 1, " years old next month.");
var sentence = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//array
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
