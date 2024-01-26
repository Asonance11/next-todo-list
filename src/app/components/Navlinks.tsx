import { auth } from '@/auth';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

const Navlinks = async () => {
	const session = await auth();
	const user = session?.user;

	return (
		<ul className="flex items-center gap-4">
			{user ? (
				<>
					<li>
						<LogoutButton />
					</li>
					<li className="text-gray-600">{user.username}</li>
				</>
			) : (
				<>
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
				</>
			)}
		</ul>
	);
};

export default Navlinks;
