import { ProductsCollection } from '../db/models/products.js';

export const getAllProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};
