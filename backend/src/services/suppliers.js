import { SuppliersCollection } from '../db/models/suppliers.js';
import { calculatePaginationData } from '../utils/calculate-pagination-data.js';

export const getAllSuppliers = async ({page,perPage, sortBy, sortOrder}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const suppliersQuery = SuppliersCollection.find();

  const suppliersCount = await SuppliersCollection.find()
    .merge(suppliersQuery)
    .countDocuments();

  const suppliers = await suppliersQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(suppliersCount, perPage, page);
  return {
    data: suppliers,
    ...paginationData,
  };
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
