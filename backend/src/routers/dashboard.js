import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import { getDashboardController } from '../controllers/dashboard.js';

const router = Router();

router.get('/api/dashboard', ctrlWrapper(getDashboardController));

export default router;
