import { auth } from '@/auth';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Todo List',
	description: 'A todo list app built with Next.js and TypeScript.',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	return (
		<SessionProvider session={session}>
			<html lang="en">
				<body className={`${inter.className} bg-white text-black`}>
					<Navbar />
					<div className="container mx-auto p-4">{children}</div>
					<Toaster position="top-right" richColors />
				</body>
			</html>
		</SessionProvider>
	);
}
