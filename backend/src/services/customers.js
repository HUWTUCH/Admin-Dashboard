// src/services/customers.js
import { CustomersCollection} from '../db/models/customers.js';
import { calculatePaginationData } from '../utils/calculate-pagination-data.js';

export const getAllCustomers = async ({ page, perPage, sortBy, sortOrder }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const customersQuery = CustomersCollection.find();

  const customersCount = await CustomersCollection.find()
    .merge(customersQuery)
    .countDocuments();

  const customers = await customersQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(customersCount, perPage, page);

  return {
    data: customers, // Масив клієнтів
    ...paginationData, // Додаткові дані пагінації
  };
};

export const getCustomerById = async (customerId) => {
  const customer = await CustomersCollection.findById(customerId);
  return customer;
};
