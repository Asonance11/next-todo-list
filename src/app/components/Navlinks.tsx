'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { logout } from '../lib/actions';

const Navlinks = () => {
	// const user = useCurrentUser();
	const session = useSession();
	const user = session.data?.user;

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
