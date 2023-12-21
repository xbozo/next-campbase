import { Button } from '@/componnts/ui/button'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1 className='text-3xl mb-4'>Hello World</h1>
			<Link href='/users'>
				<Button>Cadastrar novo usuário</Button>
			</Link>
		</div>
	)
}
