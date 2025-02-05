import { OrdersCollection } from '../db/models/orders.js';
import { calculatePaginationData } from '../utils/calculate-pagination-data.js';

export const getAllOrders = async ({page, perPage, sortBy, sortOrder, filter = {}}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const ordersQuery = OrdersCollection.find();

  if (filter.status) {
    ordersQuery.where('status').equals(filter.status);
  }
  if (filter.maxPrice) {
    ordersQuery.where('price').lte(filter.maxPrice);
  }
  if (filter.minPrice) {
    ordersQuery.where('price').gte(filter.minPrice);
  }
  if (filter.maxProducts) {
    ordersQuery.where('products').lte(filter.maxProducts);
  }
  if (filter.minProducts) {
    ordersQuery.where('products').gte(filter.minProducts);
  }

  const ordersCount = await OrdersCollection.find()
    .merge(ordersQuery)
    .countDocuments();

  const orders = await ordersQuery.skip(skip).limit(limit).sort({[sortBy]: sortOrder}).exec();

  const paginationData = calculatePaginationData(ordersCount, perPage, page);

  return {
    data: orders,
    ...paginationData
  };
}
