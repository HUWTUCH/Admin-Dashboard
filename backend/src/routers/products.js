import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import { getProductsController } from '../controllers/products.js';

const router = Router();

router.get("/api/products", ctrlWrapper(getProductsController));

export default router;
