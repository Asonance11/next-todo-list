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
		<div className="max-w-sm mx-auto p-4 bg-white rounded shadow-md">
			<form action={signin} className="text-black">
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
					className="w-full p-2 mb-2 border outline-none rounded focus:border-blue-500"
				/>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					className="w-full p-2 mb-2 border rounded"
				/>
				<button
					type="submit"
					className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Sign in
				</button>
			</form>
		</div>
	);
}
