// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string | number, number>("42", 42)); // ['hello', 42]

// 👇 We define a generic value called T with <T>
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "orange"];

const firstNumber = getFirstElement<string>(numberArray);
console.log({ firstNumber });
const firstString = getFirstElement<string>(stringArray);
console.log({ firstString });

// interface MetaData {
//   sex: string;
//   height: "tall" | "short";
//   favouriteNumber: number;
// }

// 👇 Defining our generic
// interface Person<T> {
//   id: number;
//   name: string;
//   age: number;
//   metadata: T;
// }

// 👇 Using our generic
// const personOne: Person<(number | string)[]> = {
//   id: 1,
//   name: "Jeff",
//   age: 31,
//   metadata: ["male", "tall", 22],
// };

// 👇 Using our generic
// const personTwo: Person<MetaData> = {
//   id: 1,
//   name: "Jeff",
//   age: 31,
//   metadata: {
//     sex: "female",
//     height: "tall",
//     favouriteNumber: 45,
//   },
// };

// Source:  https://prismic.io/blog/typescript-generics
