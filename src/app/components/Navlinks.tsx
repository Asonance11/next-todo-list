'use client';

import Link from 'next/link';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { logout } from '../lib/actions';

const Navlinks = () => {
	const user = useCurrentUser();

	if (user) {
		return (
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
		);
	}

	return (
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
	);
};

export default Navlinks;
