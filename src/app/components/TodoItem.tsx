'use client';

import { toggleTodo } from '../lib/data';

interface TodoItemProps {
	id: string;
	title: string;
	completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
	return (
		<li className="flex items-center text-gray-800">
			<input
				type="checkbox"
				name="completed"
				id={id}
				className="mr-2 cursor-pointer"
				defaultChecked={completed}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className={`cursor-pointer ${
					completed ? 'line-through text-gray-400' : ''
				}`}
			>
				{title}
			</label>
		</li>
	);
};

export default TodoItem;
