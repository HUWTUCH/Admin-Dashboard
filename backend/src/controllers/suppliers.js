import { createSuppliers, getAllSuppliers, updateSuppliers } from '../services/suppliers.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parse-pagination-params.js';
import { parseSortParams } from '../utils/parse-sort-params.js';

export const getSuppliersController = async (req, res, next) => {
  const {page, perPage} = parsePaginationParams(req.query);

  const suppliers = await getAllSuppliers({
    page,
    perPage,
  });

  res.status(200).json({
    data: suppliers,
  });
};
export const createSuppliersController = async (req, res) => {
  const supplier = await createSuppliers(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a suppliers!`,
    data: supplier,
  });
};
export const upsertSuppliersController = async (req, res, next) => {
  const { supplierId } = req.params;

  const result = await updateSuppliers(supplierId, req.body, {
    upsert: true,
  });

  if (!result) {
    next(createHttpError(404, 'Supplier not found'));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a supplier!`,
    data: result.suppliers,
  });
};
