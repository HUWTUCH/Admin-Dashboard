import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import { getOrdersController } from '../controllers/orders.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/api/orders', ctrlWrapper(getOrdersController));

export default router;
