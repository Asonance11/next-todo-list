import prisma from '@/app/lib/prisma';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
	providers: [
		Credentials({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.username || !credentials.password) {
					throw new Error('Username and password required');
				}

				const user = await prisma.user.findUnique({
					where: {
						username: credentials.username,
					},
				});

				if (!user || !user.hashedPassword) {
					throw new Error('Username does not exist');
				}

				const isCorrectPassword = await compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error('Incorrect Password');
				}

				return user;
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
	debug: process.env.NODE_ENV === 'development',
	session: {
		strategy: 'jwt',
	},
	jwt: {
		secret: process.env.NEXT_AUTH_JWT_SECRET,
	},
	secret: process.env.NEXT_AUTH_SECRET,
});
