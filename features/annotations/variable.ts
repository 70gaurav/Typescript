let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];

let number: number[] = [1, 2, 5, 7];
let truths: boolean[] = [true, true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// Type inference
const color = "red";
// if declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us.

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later 
let words = ['red', 'green', 'blue']
let foundWord:boolean 
for(let i=0; i<words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

// 3) Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for(let i=0; i<numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}

//Type annotations for functions
//Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

//Type inference for functions 
//Typescript tries to figure out what type of value a function will return

