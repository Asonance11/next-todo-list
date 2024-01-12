import { z } from 'zod';

export const UserSchema = z.object({
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

export const TodoSchema = z.object({
	title: z.string().min(1, {
		message: 'Title must be at least 1 character long',
	}),
});

export type User = z.infer<typeof UserSchema>;
export type Todo = z.infer<typeof TodoSchema>;
