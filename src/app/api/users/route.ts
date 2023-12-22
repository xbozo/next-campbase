import { prisma } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
	const users = await prisma.user.findMany()

	return NextResponse.json(users)
}

export const POST = async (req: NextRequest) => {
	const { email, username, name } = await req.json()

	if (!email || !username || !name) {
		return NextResponse.json({ message: 'Missing required fields' })
	}

	const userAlreadyExists = await prisma.user.findUnique({
		where: {
			username: username,
		},
	})

	if (userAlreadyExists) {
		return NextResponse.json({ message: 'Username already exists' })
	}

	const user = await prisma.user.create({
		data: {
			email,
			username,
			name,
		},
	})

	revalidateTag('users')

	return NextResponse.json(user)
}
