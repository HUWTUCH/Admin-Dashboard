import { OrdersCollection } from '../db/models/orders.js';

export const getAllOrders = async () => {
  const orders = await OrdersCollection.find();
  return orders;
}
