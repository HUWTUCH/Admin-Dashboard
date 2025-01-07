import { model, Schema } from 'mongoose';

const ordersScheme = new Schema({
  photo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  products: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: ["Processing", "Delivered", "Completed", "Pending", "Shipped", "Confirmed", "Cancelled"]
});

export const OrdersCollection = model('orders', ordersScheme, 'orders');
