import { getAllProducts } from '../services/products.js';
import { getAllIncomeExpenses } from '../services/income-expenses.js';
import { getAllSuppliers } from '../services/suppliers.js';
import { getAllCustomers } from '../services/customers.js';

export const getDashboardController = async (req, res, next) => {
  const customers = await getAllCustomers();
  const products = await getAllProducts();
  const incomeExpenses = await getAllIncomeExpenses();
  const suppliers = await getAllSuppliers();

  res.status(200).json({
    data: {
      customers: customers,
      products: products,
      income_expenses: incomeExpenses,
      suppliers: suppliers,
    },
  });
};
