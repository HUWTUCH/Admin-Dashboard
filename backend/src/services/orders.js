import { OrdersCollection } from '../db/models/orders.js';
import { calculatePaginationData } from '../utils/calculate-pagination-data.js';

export const getAllOrders = async ({page, perPage, sortBy, sortOrder}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const ordersQuery = OrdersCollection.find();

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
