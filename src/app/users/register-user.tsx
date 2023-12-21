'use client'

import { Button } from '@/componnts/ui/button'
import { Input } from '@/componnts/ui/input'
import { api } from '@/lib/axios'

export const RegisterUser = () => {
	const handleRegisterUser = async (e: any) => {
		e.preventDefault()

		await api.post('/users', {
			email: 'teste@hotmail.com',
			name: 'nome',
			username: 'bozo',
		})
	}

	return (
		<form
			className='flex flex-col gap-4'
			onSubmit={handleRegisterUser}
		>
			<Input
				type='text'
				placeholder='Nome'
			/>
			<Input
				name='email'
				placeholder='E-mail'
			/>
			<Input
				type='text'
				placeholder='Nome de usuário'
			/>

			<Button
				type='submit'
				className='max-w-52'
				variant={'secondary'}
			>
				Cadastrar
			</Button>
		</form>
	)
}
