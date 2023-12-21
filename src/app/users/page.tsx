import { Button } from '@/componnts/ui/button'
import { Input } from '@/componnts/ui/input'

const Page = () => {
	return (
		<div className='flex flex-col'>
			<h1 className='text-3xl'>Adição de novo usuário</h1>

			<div className='mt-10'>
				<form className='flex flex-col gap-4'>
					<Input
						type='email'
						placeholder='Nome'
					/>
					<Input
						name='email'
						placeholder='E-mail'
					/>
					<Input
						name='password'
						placeholder='Senha'
					/>

					<Button
						type='submit'
						className='max-w-52'
						variant={'secondary'}
					>
						Cadastrar
					</Button>
				</form>
			</div>
		</div>
	)
}

export default Page
