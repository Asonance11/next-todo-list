import Link from 'next/link';

export default function Dashboard() {
	return (
		<section className="container mx-auto">
			<div className="flex items-center justify-between">
				<h1>Todos</h1>
				<Link href="/dashboard/create-todo" className="hover:underline">
					Create Todo
				</Link>
			</div>
		</section>
	);
}
