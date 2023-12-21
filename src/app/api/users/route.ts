import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
	const users = await prisma.user.findMany()

	return NextResponse.json(users)
}

export const POST = async (req: NextRequest) => {
	const res = await req.json()
	return NextResponse.json({ res })

	// como diabos acesso o corpo da requisição?
	// const { email, username, name } = await req.body

	// if (!email || !username || !name) {
	// 	return NextResponse.json({ message: 'Missing required fields' })
	// }

	// const userExists = await prisma.user.findUnique({
	// 	where: {
	// 		username,
	// 	},
	// })

	// if (userExists) {
	// 	return NextResponse.json({ message: 'Username already exists' })
	// }

	// const user = await prisma.user.create({
	// 	data: {
	// 		email,
	// 		username,
	// 		name,
	// 	},
	// })

	// return NextResponse.json(data)
}
