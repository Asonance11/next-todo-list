'use client';

import { toast } from 'sonner';
import { createTodo } from '../lib/actions';

const TodoForm = () => {
	const create = async (formData: FormData) => {
		const response = await createTodo(formData);

		if (response?.error) {
			return toast.error(response.error);
		}

		return toast.success('Todo successfully created');
	};

	return (
		<form
			action={create}
			className="max-w-sm mx-auto p-4 bg-white rounded shadow-md"
		>
			<input
				type="text"
				name="title"
				id="title"
				placeholder="What do you want to do?"
				className="w-full p-2 mb-2 border rounded"
			/>
			<button
				type="submit"
				className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
			>
				Submit
			</button>
		</form>
	);
};

export default TodoForm;
