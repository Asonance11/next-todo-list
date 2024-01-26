import Link from 'next/link';
import Navlinks from './Navlinks';

export default function Navbar() {
	return (
		<nav className="sticky top-0 bg-gray-100 shadow-md p-4 flex items-center justify-between">
			<Link href="/" className="text-2xl font-bold">
				Todoist
			</Link>

			<Navlinks />
		</nav>
	);
}
