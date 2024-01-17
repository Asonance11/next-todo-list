import prisma from './prisma';

export const getUserById = async (id: string) => {
	const user = await prisma.user.findUnique({
		where: {
			id: id,
		},
	});

	return user;
};
