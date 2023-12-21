import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: {
		template: 'Home | %s',
		default: 'Home',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-br'>
			<body className='bg-neutral-950 text-neutral-100'>
				<div className='min-h-screen max-w-5xl mx-auto p-5'>{children}</div>
			</body>
		</html>
	)
}
