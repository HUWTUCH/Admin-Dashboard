import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import {
  createSuppliersController,
  getSuppliersController,
  upsertSuppliersController,
} from '../controllers/suppliers.js';

const router = Router();

router.get("/api/suppliers", ctrlWrapper(getSuppliersController));

router.post("/api/suppliers", ctrlWrapper(createSuppliersController));

router.put("/api/suppliers/:supplierId", ctrlWrapper(upsertSuppliersController));

export default router;
