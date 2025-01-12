import { SuppliersCollection } from '../db/models/suppliers.js';

export const getAllSuppliers = async () => {
  const suppliers = await SuppliersCollection.find();
  return suppliers;
};
export const createSuppliers = async (payload) => {
  const suppliers = await SuppliersCollection.create(payload);
  return suppliers;
};
export const updateSuppliers = async (supplierId, payload, options = {}) => {
  const rawResult = await SuppliersCollection.findOneAndUpdate(
    {_id: supplierId},
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    suppliers: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
