import { getAllOrders } from '../services/orders.js';
import { parsePaginationParams } from '../utils/parse-pagination-params.js';
import { parseSortParams } from '../utils/parse-sort-params.js';

export const getOrdersController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const { sortBy, sortOrder } = parseSortParams(req.query, 'orders');

  const orders = await getAllOrders({
    sortBy,
    sortOrder,
    page,
    perPage,
  });

  res.status(200).json({
    data: orders,
  });
};
