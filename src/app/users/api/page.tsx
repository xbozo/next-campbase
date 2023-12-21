import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		return res.status(405).end()
	}

	const { email, username, name } = req.body

	if (!email || !username || !name) {
		return res.status(400).json({ message: 'Missing fields' })
	}

	const userExists = await prisma.user.findUnique({
		where: {
			username,
		},
	})

	if (userExists) {
		return res.status(400).json({ message: 'User already exists' })
	}

	const user = await prisma.user.create({
		data: {
			email,
			username,
			name,
		},
	})

	return res.status(201).json(user)
}

export default handler
