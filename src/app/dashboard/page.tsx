import Link from 'next/link';
import TodoList from '../components/TodoList';

export default function Dashboard() {
	return (
		<section className="container mx-auto p-4">
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-xl font-bold">Todos</h1>
				<Link
					href="/dashboard/create-todo"
					className="text-blue-500 hover:underline"
				>
					Create Todo
				</Link>
			</div>
			<TodoList />
		</section>
	);
}
