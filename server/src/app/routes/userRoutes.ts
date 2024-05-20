import { FastifyInstance, FastifyPluginOptions } from "fastify"
import { createUser, getUsers } from "../controllers/userController"

const userRoutes = async (app: FastifyInstance, opts: FastifyPluginOptions) => {
  app.get('/', getUsers)
  app.post('/', createUser)
}

export default userRoutes
