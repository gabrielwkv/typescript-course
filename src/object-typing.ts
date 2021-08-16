// object typing
// # show city of the user

type UF = "PE" | "SP" | "MG";

interface User {
  name: string;
  address?: {
    city: string;
    uf: UF;
  };
  say: () => void;
}

function showCity(user: User) {
  // user.address.uf = "SP";
  user.say = () => console.log("Hello User!");

  return user.address?.city;
}

// # object typing is also possible to pass in array or other variables
let users: User[];

// users[0].address.city # intellisense working

// # as typescript you can also work with optional properties
// # do you enter a ? before the attribute
// # as was done in the example above in function showCity

// # it is possible to leave properties locked for change, so they are just readonly
interface NewUser {
  readonly name: string;
}

let user: NewUser = {
  name: "Gabriel Maciel",
};

// user.name = "João"; # error: cannot assign to 'name' because it is a read-only property

// # working with implements and extends
interface Vehicle {
  wheels: number;
  speed: () => void;
  brake?: () => void;
}

// interface Motorcycle {
//   helmet: boolean;
//   cram: () => void;
// }

// let bross: Motorcycle
class CreateVehicle implements Vehicle {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }

  speed() {
    console.log("speed");
  }
}
