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
