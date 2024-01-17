import prisma from '@/app/lib/prisma';
import { UserSchema } from '@/app/lib/zod.types';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { getUserById } from './app/lib/data';
import authConfig from './auth.config';

export const { auth, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	...authConfig,

	callbacks: {
		async session({ session, token }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			if (token.username && session.user) {
				session.user.username = token.username as string;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			token.username = existingUser.username;

			return token;
		},
	},

	providers: [
		credentials({
			async authorize(credentials) {
				const validatedFields = UserSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { username, hashedPassword } = validatedFields.data;

					const user = await prisma.user.findUnique({
						where: {
							username: username,
						},
					});

					if (!user) {
						return null;
					}

					const passwordsMatch = await bcrypt.compare(
						hashedPassword,
						user.hashedPassword
					);

					if (passwordsMatch) {
						return user;
					}

					return user;
				}

				return null;
			},
		}),
	],
});
