import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import {
  deleteProductsController,
  getProductsController,
  postProductsController,
  upsertProductsController,
} from '../controllers/products.js';

const router = Router();

router.get("/api/products", ctrlWrapper(getProductsController));

router.post("/api/products", ctrlWrapper(postProductsController));

router.put("/api/products/:productId", ctrlWrapper(upsertProductsController));

router.delete("/api/products/:productId", ctrlWrapper(deleteProductsController));

export default router;
