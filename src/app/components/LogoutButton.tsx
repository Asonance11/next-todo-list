'use client';

import { logout } from '../lib/actions';

const LogoutButton = () => {
	return (
		<button
			onClick={() => {
				logout();
			}}
			className="text-blue-500 hover:underline"
		>
			Logout
		</button>
	);
};

export default LogoutButton;
