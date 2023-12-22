import { api } from '@/utils/api'
import { RegisterUser } from './register-user'

type User = {
	id: number
	name: string
	email: string
	username: string
}

const fetchUsers = async () => {
	const response = await api('/users', {
		cache: 'no-store',
		next: {
			tags: ['users'],
		},
	})
	const usersList = await response.json()

	return usersList
}

const UsersPage = async () => {
	const usersList: User[] = await fetchUsers()

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-3xl'>Usuários</h1>

			<section className='mt-10'>
				<RegisterUser />
			</section>

			<main className='flex flex-col gap-4 mt-10'>
				<h2 className='text-3xl'>Lista de usuários:</h2>
				<ul className='flex flex-col gap-8'>
					{usersList.map((user) => (
						<div key={user.id}>
							<li className='flex flex-col gap-2'>
								<strong>Nome: {user.name}</strong>
								<strong>Email: {user.email}</strong>
								<strong>Usuário: {user.username}</strong>
								<strong>ID: {user.id}</strong>
							</li>
							<hr />
						</div>
					))}
				</ul>
			</main>
		</div>
	)
}

export default UsersPage
