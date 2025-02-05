import { getAllOrders } from '../services/orders.js';
import { parsePaginationParams } from '../utils/parse-pagination-params.js';
import { parseSortParams } from '../utils/parse-sort-params.js';
import { parseFilterParamsOrders } from '../utils/parse-filter-params-orders.js';

export const getOrdersController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const { sortBy, sortOrder } = parseSortParams(req.query, 'orders');

  const filter = parseFilterParamsOrders(req.query);

  const orders = await getAllOrders({
    sortBy,
    sortOrder,
    page,
    perPage,
    filter,
  });

  res.status(200).json({
    data: orders,
  });
};
