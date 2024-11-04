type myInterface = {
  foo: string;
  otherFoo: number;
};

const myCoolObject = {
  foo: "hello world",
  otherFoo: 30,
  id: 5678,
};

const doThing = (myObject: myInterface) => {
  console.log({ myObject });
};

doThing(myCoolObject);
