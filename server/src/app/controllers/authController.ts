import { FastifyRequest, FastifyReply } from 'fastify'

interface Login {
  username: string
  password: string
}

class AuthController {

  public async login(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const login: Login = req.body as Login
    reply.send(login)
  }
}

export default new AuthController()
