import { FastifyInstance, FastifyPluginOptions } from "fastify"
import AuthController from "../controllers/authController"

const authRoutes = async (app: FastifyInstance, opts: FastifyPluginOptions) => {
  app.post('/login', AuthController.login)
}

export default authRoutes
