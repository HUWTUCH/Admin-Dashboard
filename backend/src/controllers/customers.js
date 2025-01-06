import {
  getAllCustomers, getCustomerById,
} from '../services/customers.js';
import createHttpError from 'http-errors';

export const getCustomersController  = async (req, res, next) => {
  const customers = await getAllCustomers();

  res.status(200).json({
    data: customers,
  });
};
export const getCustomersByIdController  = async (req, res, next) => {
  const { customerId } = req.params;
  const customer = await getCustomerById(customerId);

  if (!customer) {
    createHttpError(404, 'Customer not found')
  }

  // Відповідь, якщо контакт знайдено
  res.status(200).json({
    message: `Successfully found customer with id ${customerId}!`,
    data: customer,
  });
};
