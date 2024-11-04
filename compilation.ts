interface myCompilationInterface {
  foo: string;
}

// const myThing: myCompilationInterface = {
//   foo: "hello world",
// };

class myCompilationInterfaceClass {
  constructor() {}

  quack() {
    console.log("QUACK");
  }
}

const myThing = new myCompilationInterfaceClass();

// console.log(myThing instanceof myCompilationInterfaceClass);
console.log(typeof myThing);

const myTypeGuard = (
  thing: myCompilationInterface | undefined
): thing is myCompilationInterface => {
  return (thing as myCompilationInterface).foo !== undefined;
};

// console.log(myTypeGuard(myThing));

const myFunction = (thing: myCompilationInterfaceClass) => {
  thing.quack();
};

myFunction(myThing);
