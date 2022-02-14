let todoID = 10;

const createTodo = (label) => {
  return {
    label,
    done: false,
    id: todoID++,
  };
};

export const addTodos = (name) => {
  return {
    type: "ADD_TODO",
    payload: createTodo(name),
  };
};
