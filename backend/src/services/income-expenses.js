import { IncomeExpensesCollection } from '../db/models/income-expenses.js';

export const getAllIncomeExpenses = async () => {
  const incomeExpenses = await IncomeExpensesCollection.find();
  return incomeExpenses;
};
