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

error();
