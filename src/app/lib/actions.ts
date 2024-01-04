'use server';

import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import prisma from './prisma';
import { UserSchema } from './zod.types';

export const register = async (formData: FormData) => {
	const validatedUser = UserSchema.safeParse({
		username: formData.get('username'),
		hashedPassword: formData.get('password'),
	});

	if (!validatedUser.success) {
		let errorMessage = '';

		validatedUser.error.issues.forEach((issue) => {
			errorMessage += issue.message + '.';
		});

		return {
			error: errorMessage,
		};
	}

	const userExist = await prisma.user.findUnique({
		where: {
			username: validatedUser.data.username,
		},
	});

	if (userExist) {
		return {
			error: 'Username already exists',
		};
	}

	const hashedPassword = await bcrypt.hash(
		validatedUser.data.hashedPassword,
		10
	);

	await prisma.user.create({
		data: {
			username: validatedUser.data.username,
			hashedPassword,
		},
	});

	redirect('/signin');
};
