import { startServer } from './server.js';
import { initMongoDB } from './db/init-mongo-db.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};
bootstrap();
