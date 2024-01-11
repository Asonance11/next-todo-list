'use client';

import { toast } from 'sonner';
import { login } from '../lib/actions';

export default function LoginForm() {
	const signin = async (formData: FormData) => {
		const response = await login(formData);

		if (response?.error) {
			return toast.error(response.error);
		}

		return toast.success('Successfully logged in');
	};

	return (
		<div>
			<form action={signin} className="text-black">
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
				/>
				<button type="submit">Sign in</button>
			</form>
		</div>
	);
}
