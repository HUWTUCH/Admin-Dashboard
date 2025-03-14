import { getAllProducts } from '../services/products.js';
import { getAllIncomeExpenses } from '../services/income-expenses.js';
import { getAllSuppliers } from '../services/suppliers.js';
import { getAllCustomers } from '../services/customers.js';
import { parseSortParams } from '../utils/parse-sort-params.js';
import { parsePaginationParams } from '../utils/parse-pagination-params.js';

export const getDashboardController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query, 'dashboard');

  const customers = await getAllCustomers({ page, perPage: 11, sortBy, sortOrder });
  const products = await getAllProducts({ page, perPage: 10, sortBy, sortOrder });
  const incomeExpenses = await getAllIncomeExpenses({ page, perPage: 4 });
  const suppliers = await getAllSuppliers({ page, perPage: 2, sortBy, sortOrder });

  res.status(200).json({
    data: {
      customers: customers,
      products: products,
      income_expenses: incomeExpenses,
      suppliers: suppliers,
    },
  });
};
