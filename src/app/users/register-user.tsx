'use client'

import { Button } from '@/componnts/ui/button'
import { Input } from '@/componnts/ui/input'
import { api } from '@/utils/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const registerUserFormSchema = z.object({
	name: z
		.string({ required_error: 'Preencha este campo.' })
		.min(3, { message: 'O nome deve ter ao menos 3 caracteres.' }),
	email: z
		.string({ required_error: 'Preencha este campo.' })
		.email({ message: 'Insira um e-mail válido.' }),
	username: z
		.string({ required_error: 'Preencha este campo.' })
		.min(2, { message: 'O nome de usuário deve ter ao menos 2 caracteres.' }),
})

type RegisterUserForm = z.infer<typeof registerUserFormSchema>

export const RegisterUser = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<RegisterUserForm>({
		resolver: zodResolver(registerUserFormSchema),
	})

	const router = useRouter()

	const handleRegisterUser = async (data: RegisterUserForm) => {
		const { name, email, username } = data

		try {
			await api('/users', {
				method: 'POST',
				body: JSON.stringify({
					email,
					name,
					username,
				}),
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			router.refresh()
			toast.success('Usuário adicionado com sucesso!')
		} catch (error) {
			toast.error('Houve um erro ao se comunicar com o servidor.')
			console.error(error)
		}
	}

	return (
		<form
			className='flex flex-col gap-4'
			onSubmit={handleSubmit(handleRegisterUser)}
		>
			<div className='flex flex-col gap-2'>
				<Controller
					name='name'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<Input
							type='text'
							placeholder='Nome'
							{...field}
						/>
					)}
				/>
				{errors.name && <p className='text-red-500'>{errors.name.message}</p>}
			</div>

			<div className='flex flex-col gap-2'>
				<Controller
					name='email'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<Input
							type='email'
							placeholder='E-mail'
							{...field}
						/>
					)}
				/>
				{errors?.email && <p className='text-red-500'>{errors.email.message}</p>}
			</div>

			<div className='flex flex-col gap-2'>
				<Controller
					name='username'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<Input
							type='text'
							placeholder='Usuário'
							{...field}
						/>
					)}
				/>
				{errors?.username && <p className='text-red-500'>{errors.username.message}</p>}
			</div>

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
