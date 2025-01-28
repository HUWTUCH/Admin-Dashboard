import { Router } from 'express';
import {
  getCustomersByIdController,
  getCustomersController,
} from '../controllers/customers.js';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/api/customers/', ctrlWrapper(getCustomersController));

router.get('/api/customers/:customerId', isValidId('customerId'), ctrlWrapper(getCustomersByIdController));

export default router;
