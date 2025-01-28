import { IncomeExpensesCollection } from '../db/models/income-expenses.js';
import { calculatePaginationData } from '../utils/calculate-pagination-data.js';

export const getAllIncomeExpenses = async ({page, perPage}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const incomeExpensesQuery = IncomeExpensesCollection.find();

  const incomeExpensesCount = await IncomeExpensesCollection.find().merge(incomeExpensesQuery).countDocuments();

  const incomeExpenses = await incomeExpensesQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(incomeExpensesCount, perPage, page);

  return {
    data: incomeExpenses,
    ...paginationData,
  };
};
