interface Person {
  readonly name: string; // read-only property
  age: number;
  hasKids?: boolean; // the '?' indicates that it is not a mandatory property
}

let person2: Person;

person2 = {
  name: "Nikola",
  age: 23,
  // notice there is no "hasKids" property here because it is optional and the code will compile without errors
};

// person2.name = "Nobody" -> will not work because 'name' is a read-only property
