import {
  getAllCustomers, getCustomerById,
} from '../services/customers.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parse-pagination-params.js';
import { parseSortParams } from '../utils/parse-sort-params.js';

export const getCustomersController  = async (req, res, next) => {
  const {page, perPage} = parsePaginationParams(req.query);

  // const {sortByCostumers, sortOrder} =
  const customers = await getAllCustomers({
    page,
    perPage
  });

  res.status(200).json({
    message: 'Successfully found costumers!',
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
