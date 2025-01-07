import { getAllSuppliers } from '../services/suppliers.js';

export const getSuppliersController = async (req, res, next) => {
  const suppliers = await getAllSuppliers();

  res.status(200).json({
    data: suppliers,
  });
};
