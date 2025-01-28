import { ProductsCollection } from '../db/models/products.js';
import { calculatePaginationData } from '../utils/calculate-pagination-data.js';

/**
 * Отримує всі продукти з бази даних.
 * @returns {Promise<Array>} Масив усіх продуктів, що зберігаються у базі даних.
 */
export const getAllProducts = async ({page, perPage, sortBy, sortOrder}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const productsQuery = ProductsCollection.find();

  const productsCount = await ProductsCollection.find()
    .merge(productsQuery)
    .countDocuments();

  const products = await productsQuery.skip(skip).limit(limit).sort({[sortBy]: sortOrder}).exec();

  const paginationData = calculatePaginationData(productsCount, perPage, page);

  return {
    data: products, // Масив клієнтів
    ...paginationData, // Додаткові дані пагінації
  };
};

/**
 * Створює новий продукт у базі даних.
 * @param {Object} payload - Дані продукту, який потрібно створити.
 * @returns {Promise<Object>} Об'єкт створеного продукту.
 */
export const createProducts = async (payload) => {
  const products = await ProductsCollection.create(payload);
  return products;
};

/**
 * Оновлює існуючий продукт у базі даних або створює новий, якщо його не існує (upsert).
 * @param {string} productId - ID продукту, який потрібно оновити.
 * @param {Object} payload - Дані, якими потрібно оновити продукт.
 * @param {Object} options - Додаткові опції для операції оновлення (наприклад, upsert).
 * @returns {Promise<Object|null>} Об'єкт, що містить оновлений продукт і його статус (новий чи оновлений),
 *                                  або null, якщо продукт не знайдено чи не вдалося оновити.
 */
export const updateProducts = async (productId, payload, options = {}) => {
  const rawResult = await ProductsCollection.findOneAndUpdate(
    { _id: productId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) return null;

  return {
    products: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

/**
 * Видаляє продукт із бази даних за його ID.
 * @param {string} productId - ID продукту, який потрібно видалити.
 * @returns {Promise<Object|null>} Об'єкт видаленого продукту, якщо знайдено, або null, якщо продукт не знайдено.
 */
export const deleteProducts = async (productId) => {
  const product = await ProductsCollection.findOneAndDelete(
    { _id: productId },
  );
  return product;
};
