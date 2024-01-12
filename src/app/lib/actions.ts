'use server';

import { signIn } from '@/auth';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';
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

export const login = async (formData: FormData) => {
	const validatedFields = UserSchema.safeParse({
		username: formData.get('username'),
		hashedPassword: formData.get('password'),
	});

	if (!validatedFields.success) {
		let errorMessage = '';

		validatedFields.error.issues.forEach((issue) => {
			errorMessage += issue.message + '.';
		});

		return {
			error: errorMessage,
		};
	}

	const { username, hashedPassword } = validatedFields.data;

	try {
		await signIn('credentials', {
			username,
			hashedPassword,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid Credentials' };
				default:
					return { error: 'Something went wrong' };
			}
		}

		throw error;
	}
};
