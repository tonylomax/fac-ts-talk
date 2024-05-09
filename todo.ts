// type Todo = {
//   title: string;
//   description: string;
//   id?: number;
// };

interface Todo {
  title: string | undefined;
  description: string;
  id?: number;
}

const todo1 = {
  title: "do a FAC talk",
  description: "find gifs",
  foo: "bar",
};

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToUpdate };
};

export const main = () => {
  const newTodo = updateTodo(todo1, {
    title: "Update fac ts talk for next time",
    id: 7,
  });

  console.log({ todo1 });
  console.log({ newTodo });
  console.log(todo1 instanceof String);
};

// const name = "tony" as unknown as number;
// Excess Property Checks
// In this case, Typescript won’t check for excess properties as type Person is a subset of the type inferred for variable x, which is inferred to include all properties in Person plus age. This is known as duck-typing or structural typing
// "If it walks like a duck and it quacks like a duck, then it must be a duck"

// const todo2 = {
//   title: "learn python",
//   description: "🐍",
//   id: 2,
// };
