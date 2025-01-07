import { getAllOrders } from '../services/orders.js';

export const getOrdersController = async (req, res, next) => {
  const orders = await getAllOrders();

  res.status(200).json({
    data: orders,
  })
}
