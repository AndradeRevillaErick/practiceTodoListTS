import { useTodos } from "../hooks/useTodos";

export const Tittle = () => {
  const { pendingTodos } = useTodos();

  return <h1>Todos: {pendingTodos}</h1>;
};
