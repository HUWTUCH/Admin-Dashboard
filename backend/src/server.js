import express from 'express';
import cors from 'cors'
import pino from 'pino-http';
import { getEnvVar } from './utils/get-env-var.js';
import customerRouter from './routers/customers.js'
import dashboardRouter from './routers/dashboard.js';
import ordersRouter from './routers/orders.js';
import productsRouter from './routers/products.js';
import suppliersRouter from './routers/suppliers.js';
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

  app.use(customerRouter);
  app.use(dashboardRouter);
  app.use(ordersRouter);
  app.use(productsRouter);
  app.use(suppliersRouter);

// Middleware для обробких помилок не визначеного маршруту
  app.use('*', notFoundHandler);

// Middleware для обробких помилок (приймає 4 аргументи)
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

};
