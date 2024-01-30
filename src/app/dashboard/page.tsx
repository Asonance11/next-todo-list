import Link from "next/link";
import TodoList from "../components/TodoList";
import { FaPlus } from "react-icons/fa";

export default function Dashboard() {
  return (
    <section className="container mx-auto p-4 xl:px-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Todos</h1>
        <Link
          href="/dashboard/create-todo"
          className="text-black flex items-center"
        >
          <FaPlus className="mr-2 text-blue-800" />
          Create Todo
        </Link>
      </div>
      <TodoList />
    </section>
  );
}
