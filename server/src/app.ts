import fastify, { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

import authRoutes from './app/routes/authRoutes';
import userRoutes from './app/routes/userRoutes';

const app: FastifyInstance = fastify({ logger: true });

//Middlewares
app.register(cors);
app.register(helmet);

// routes register
app.register(authRoutes);
app.register(userRoutes, { prefix: '/users' });

// router test root
app.get('/', async (request, reply) => {
  const dateLocale = new Date().toLocaleString();
  return { 'franxx-finance': dateLocale, version: '1.0.0' };
});

// init server config
const start = async () => {
  try {
    const PORT = Number(process.env.PORT) || 3000;
    app.listen({ port: PORT });
    app.log.info(`Server listening on ${app.server.address()}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
