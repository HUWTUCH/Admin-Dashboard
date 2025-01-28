import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import {
  deleteProductsController,
  getProductsController,
  postProductsController,
  upsertProductsController,
} from '../controllers/products.js';
import { validateProduct } from '../middlewares/validate-body-products.js';
import { createProductsSchema } from '../validation/create-products.js';
import { updateProductsSchema } from '../validation/update-products.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get("/api/products", ctrlWrapper(getProductsController));

router.post("/api/products", ctrlWrapper(postProductsController), validateProduct(createProductsSchema));

router.put("/api/products/:productId", isValidId('productId'), ctrlWrapper(upsertProductsController), validateProduct(updateProductsSchema));

router.delete("/api/products/:productId", isValidId('productId'), ctrlWrapper(deleteProductsController));

export default router;
