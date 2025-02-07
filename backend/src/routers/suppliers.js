import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import {
  createSuppliersController,
  getSuppliersController,
  upsertSuppliersController,
} from '../controllers/suppliers.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get("/api/suppliers", ctrlWrapper(getSuppliersController));

router.post("/api/suppliers", ctrlWrapper(createSuppliersController));

router.put("/api/suppliers/:supplierId", isValidId('supplierId'), ctrlWrapper(upsertSuppliersController));

export default router;
