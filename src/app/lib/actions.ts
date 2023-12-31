'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import prisma from './prisma';

const UserSchema = z.object({
	id: z.string().optional(),
	username: z
		.string()
		.trim()
		.min(3, {
			message: 'Username must be at least 3 characters long',
		})
		.max(30, {
			message: 'Username must be at most 30 characters long',
		}),
	hashedPassword: z.string().min(8, {
		message: 'Password must be at least 8 characters long',
	}),
});

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

	await prisma.user.create({
		data: validatedUser.data,
	});

	redirect('/signin');
};
