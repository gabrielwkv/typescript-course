// type data
let message: string = "Hello World";

console.log(message.toUpperCase());

let total: number = 10.515;

console.log(total.toFixed(1));

let isOpen: boolean = false;

// suppose that when the stock runs out it should be null
// let stock: any = 89; # that's why using any, but it's not advisable
let stock: number | null = 89;
stock = null; // # the correct way to use numeric and null

// # void is used for functions that have no return.
function showInformation(name: string = "Gabriel"): void {
  console.log(name);
}

showInformation();

// # never is often used in functions that have infinite loops or exceptions.
function error(): never {
  throw new Error("Error");
}

// error();

// # when you define an array, you need to type it
let items: Array<number> = [1, 2, 3, 4, 5];
// # but the most popular way of typing is this:
let names: string[] = ["Gabriel"];
// # tuples is when we already know the size of the array
let tuple: [number, string, boolean] = [20, "Gabriel", true];
// # enum we use similar to an object but store enumerated information
// # enum applies for example to a form where you have selection fields, and you want to have pre-defined what will be written
enum Colors {
  white = "#FFFFFF",
  black = "#000000",
}

let white: Colors = Colors.white;

console.log(white);

// # we can use the concept of union, to say that a variable can be one or more values
let age: number | string = 1;
age = "one";

console.log(age);

// # the function argument must be dog or cat
function showPet(pet: "dog" | "cat"): void {
  console.log(pet);
}

showPet("dog");
