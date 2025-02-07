import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import { getDashboardController } from '../controllers/dashboard.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/api/dashboard', ctrlWrapper(getDashboardController));

export default router;
