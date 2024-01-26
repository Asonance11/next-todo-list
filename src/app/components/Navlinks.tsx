import { auth } from '@/auth';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

const Navlinks = async () => {
	// const user = useCurrentUser();
	const session = await auth();
	const user = session?.user;

	if (user) {
		return (
			<ul className="flex items-center gap-6 ">
				<li>
					<LogoutButton />
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
