// object typing
// # show city of the user

type UF = "PE" | "SP" | "MG";

interface User {
  name: string;
  address: {
    city: string;
    uf: UF;
  };
  say: () => void;
}

function showCity(user: User) {
  // user.address.uf = "SP";
  user.say = () => console.log("Hello User!");

  return user.address.city;
}

// # object typing is also possible to pass in array or other variables
let users: User[];

// users[0].address.city # intellisense working
