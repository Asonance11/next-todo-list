import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Todo List',
	description: 'A todo list app built with Next.js and TypeScript.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-zinc-900 text-neutral-50  `}>
				<Navbar />
				<div className="">
					{children}
					<Toaster position="top-right" richColors />
				</div>
			</body>
		</html>
	);
}
