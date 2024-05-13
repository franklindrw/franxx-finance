import fastify, { type FastifyInstance } from 'fastify';

const app: FastifyInstance = fastify({ logger: true });

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
