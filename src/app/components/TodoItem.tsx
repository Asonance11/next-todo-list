'use client';

import { toggleTodo } from '../lib/data';

interface TodoItemProps {
	id: string;
	title: string;
	completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
	return (
		<li className="flex gap-1 items-center text-white">
			<input
				type="checkbox"
				name="completed"
				id={id}
				className="cursor-pointer peer"
				defaultChecked={completed}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className="cursor-pointer peer-checked:text-gray-400 peer-checked:line-through"
			>
				{title}
			</label>
		</li>
	);
};

export default TodoItem;
