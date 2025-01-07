import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import { getSuppliersController } from '../controllers/suppliers.js';

const router = Router();

router.get("/api/suppliers", ctrlWrapper(getSuppliersController));

export default router;
