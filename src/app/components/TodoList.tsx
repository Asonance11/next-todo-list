import { auth } from "@/auth";
import { getTodos } from "../lib/data";
import TodoItem from "./TodoItem";

export default async function TodoList() {
  const session = await auth();
  const todos = await getTodos(session?.user?.id as string);

  return (
    <ul className="px-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
