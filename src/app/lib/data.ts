import prisma from './prisma';

export const getUserById = async (id: string) => {
	const user = await prisma.user.findUnique({
		where: {
			id: id,
		},
	});

	return user;
};

export const getTodos = async (id: string) => {
	const todos = await prisma.todo.findMany({
		where: {
			userId: id,
		},
	});

	return todos;
};
