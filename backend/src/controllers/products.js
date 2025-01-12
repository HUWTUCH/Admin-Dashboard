import { createProducts, deleteProducts, getAllProducts, updateProducts } from '../services/products.js';
import createHttpError from 'http-errors';

export const getProductsController = async (req, res, next) => {
  const products = await getAllProducts();

  res.status(200).json({
    data: products,
  });
};
export const postProductsController = async (req, res, next) => {
  const products = await createProducts(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a products!`,
    data: products,
  });
};
export const upsertProductsController = async (req, res, next) => {
  const {productId} = req.params;

  const result = await updateProducts(productId, req.body, { upsert: true });
  console.log('Result of upsert:', result);

  if (!result) {
    next(createHttpError(404, 'Product not found'));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a product!`,
    data: result.product,
  });
};
export const deleteProductsController = async (req, res, next) => {
  const {productId} = req.params;

  const product = await deleteProducts(productId);

  if (!product) {
    next(createHttpError(404, 'Student not found'));
    return;
  };

  res.status(204).send();
};
