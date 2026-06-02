import Fastify from 'fastify';

const app = Fastify({
  logger: true,
});

app.get('/', async () => {
  return {
    service: 'api',
    status: 'running',
  };
});

try {
  await app.listen({
    host: '0.0.0.0',
    port: 3000,
  });

  console.log('🚀 API running on http://localhost:3000');
} catch (error) {
  app.log.error(error);
  process.exit(1);
}