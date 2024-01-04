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

export type User = z.infer<typeof UserSchema>;
