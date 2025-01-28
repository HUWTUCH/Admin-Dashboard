import { getAllProducts } from '../services/products.js';
import { getAllIncomeExpenses } from '../services/income-expenses.js';
import { getAllSuppliers } from '../services/suppliers.js';
import { getAllCustomers } from '../services/customers.js';

export const getDashboardController = async (req, res, next) => {
  const customers = await getAllCustomers({page: 1, perPage: 11});
  const products = await getAllProducts({page: 1, perPage: 10});
  const incomeExpenses = await getAllIncomeExpenses({page: 1, perPage: 4});
  const suppliers = await getAllSuppliers({page: 1, perPage: 2});

  res.status(200).json({
    data: {
      customers: customers,
      products: products,
      income_expenses: incomeExpenses,
      suppliers: suppliers,
    },
  });
};
