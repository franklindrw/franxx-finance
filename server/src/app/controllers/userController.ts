import { FastifyRequest, FastifyReply } from "fastify"

interface User {
  id: number
  name: string
  email: string
}

export const getUsers = async (request: FastifyRequest, reply: FastifyReply) => {
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'jhon.doe@teste.com.br' },
  ]

  reply.send(users)
}

export const createUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const newUser: User = request.body as User

  reply.send(newUser)
}
