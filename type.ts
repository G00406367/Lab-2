//boolean
let flag: boolean = true;
console.log("Value assgined to flag is: "+flag);

//number
let decimal: number = 6;
console.log("The decimal value is: "+decimal);
let hex: number = 0xf00d;
console.log("The hex value is: "+hex);
let binary: number = 0b1010;
console.log("The binary value is: "+binary);
let octal: number = 0o744;
console.log("The octal value is: "+octal);



//string
let color: string = "blue";
color = 'red';
console.log("the real color is:" +color);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string ="Hello, my name is " + fullName + ".\n\n" + "I'll be " +(age + 1) +" years old next month.";
console.log(sentence);

//array
let myArray: number[] = [1, 2, 3];
for(let i: number = 0; i <myArray.length; i++){
    console.log(myArray[i]);
}





