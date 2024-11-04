interface Todo {
  title: string | undefined;
  description: string;
}

const todo1 = {
  id: 1,
  title: "do a FAC talk",
  description: "find gifs",
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
  console.log(todo1 instanceof Object);
};

main();
