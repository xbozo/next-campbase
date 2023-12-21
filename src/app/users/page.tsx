import { api } from '@/lib/axios'
import { RegisterUser } from './register-user'

type User = {
	id: number
	name: string
	email: string
	username: string
}

const Page = async () => {
	const fetchUsers = async () => {
		try {
			const response = await api.get('/users')
			const users = await response.data
			return users
		} catch (error) {
			console.log(error)
		}
	}

	const users: User[] = await fetchUsers()
	console.log(users)

	return (
		<div className='flex flex-col gap-4'>
			<h1 className='text-3xl'>Usuários</h1>

			<div className='mt-10'>
				<RegisterUser />
			</div>

			<div className='flex flex-col gap-4 mt-10'>
				<h2 className='text-3xl'>Lista de usuários:</h2>
				<ul className='list-disc list-inside'>
					{/* {users.map((user) => (
						<li key={user.id}>
							{user.name} - {user.email} - {user.username} - {user.id}
						</li>
					))} */}
				</ul>
			</div>
		</div>
	)
}

export default Page
