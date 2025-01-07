import { SuppliersCollection } from '../db/models/suppliers.js';

export const getAllSuppliers = async () => {
  const suppliers = await SuppliersCollection.find();
  return suppliers;
};
