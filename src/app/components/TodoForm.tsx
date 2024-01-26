'use client';
import { toast } from 'sonner';
import { createTodo } from '../lib/actions';

const TodoForm = () => {
	const create = async (formdata: FormData) => {
		const response = await createTodo(formdata);

		if (response?.error) {
			return toast.error(response.error);
		}

		return toast.success('Todo successfully created');
	};
	return (
		<form action={createTodo}>
			<input
				type="text"
				name="title"
				id="title"
				placeholder="What do you want to do?"
				className="text-black"
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default TodoForm;
