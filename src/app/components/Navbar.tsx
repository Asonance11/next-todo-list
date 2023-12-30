'use client';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="sticky bg-zinc-950 flex items-center justify-between py-4 px-8">
			<Link href="/" className="text-2xl italic">
				Todoist{' '}
			</Link>

			<ul className="flex items-center gap-6 ">
				<li>
					<Link href="/signin" className="hover:underline">
						Sign in
					</Link>
				</li>

				<li>
					<Link href="/register" className="hover:underline">
						Register
					</Link>
				</li>
			</ul>
		</nav>
	);
}
