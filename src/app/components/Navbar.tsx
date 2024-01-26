import Link from 'next/link';
import Navlinks from './Navlinks';

export default async function Navbar() {
	// const user = useCurrentUser();

	return (
		<nav className="sticky bg-zinc-950 flex items-center justify-between py-4 px-8">
			<Link href="/" className="text-2xl italic">
				Todoist{' '}
			</Link>

			{/* {user ? (
				<ul className="flex items-center gap-6 ">
					<li>
						<button
							onClick={() => {
								logout();
							}}
						>
							Logout
						</button>
					</li>
					<li>{user.username}</li>
				</ul>
			) : (
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
			)} */}
			<Navlinks />
		</nav>
	);
}
