import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body-products.js';
import { loginUserSchema, registerUserSchema } from '../validation/create-user.js';
import { ctrlWrapper } from '../utils/ctrl-wrapper.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();

router.post('/api/user/register', validateBody(registerUserSchema), ctrlWrapper(registerUserController));

router.post('/api/user/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController));

router.get('/api/user/logout', ctrlWrapper(logoutUserController));

router.post('/api/user/refresh', ctrlWrapper(refreshUserSessionController));

export default router;
