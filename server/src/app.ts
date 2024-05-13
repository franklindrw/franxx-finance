import fastify, { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';

const app: FastifyInstance = fastify({ logger: true });

//Middlewares
app.register(cors);
app.register(helmet);

// router test root
app.get('/', async (request, reply) => {
  const dateLocale = new Date().toLocaleString();
  return { 'franxx-finance': dateLocale, version: '1.0.0' };
});

// init server config
const start = async () => {
  try {
    await app.listen({ port: 3333 });
    app.log.info(`Server listening on ${app.server.address()}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
