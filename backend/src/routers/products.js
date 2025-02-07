import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import {
  deleteProductsController,
  getProductsController,
  postProductsController,
  upsertProductsController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validate-body-products.js';
import { createProductsSchema } from '../validation/create-products.js';
import { updateProductsSchema } from '../validation/update-products.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get("/api/products", ctrlWrapper(getProductsController));

router.post("/api/products", ctrlWrapper(postProductsController), validateBody(createProductsSchema));

router.put("/api/products/:productId", isValidId('productId'), ctrlWrapper(upsertProductsController), validateBody(updateProductsSchema));

router.delete("/api/products/:productId", isValidId('productId'), ctrlWrapper(deleteProductsController));

export default router;
