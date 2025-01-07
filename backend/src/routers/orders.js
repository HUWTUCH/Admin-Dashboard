import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import { getOrdersController } from '../controllers/orders.js';

const router = Router();

router.get('/api/orders', ctrlWrapper(getOrdersController));

export default router;
