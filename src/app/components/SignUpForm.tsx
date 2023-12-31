'use client';

import { toast } from 'sonner';
import { register } from '../lib/actions';

export default function SignUpForm() {
	const clientAction = async (formData: FormData) => {
		const response = await register(formData);

		if (response?.error) {
			toast.error(response.error);
		}

		toast.success('Account successfully created');
	};

	return (
		<>
			<form action={clientAction} className="text-black">
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
		</>
	);
}
