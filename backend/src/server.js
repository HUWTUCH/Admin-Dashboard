import express from 'express';
import cors from 'cors'
import pino from 'pino-http';
import { getEnvVar } from './utils/get-env-var.js';
import customerRouter from './routers/customers.js'
import { errorHandler } from './middlewares/error-handler.js';
import { notFoundHandler } from './middlewares/not-found-handler.js';


const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();
  // Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
  // наприклад, у запитах POST або PATCH
  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

// Middleware для логування часу запиту
  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
  });

// Маршрут для обробки GET-запитів на '/'
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello, World!',
    });
  });

  app.use(customerRouter);

// Middleware для обробких помилок не визначеного маршруту
  app.use('*', notFoundHandler);

// Middleware для обробких помилок (приймає 4 аргументи)
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

};
