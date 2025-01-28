import Joi from 'joi';
export const updateProductsSchema = Joi.object({
  _id: Joi.string()
    .pattern(/^[a-fA-F0-9]{24}$/)
    .optional()  // робимо поле необов'язковим
    .messages({
      'string.base': '_id must be a string',
      'string.pattern.base': '_id must be a valid ObjectId (24 hex characters)',
    }),

  id: Joi.string()
    .optional()  // робимо поле необов'язковим
    .messages({
      'string.base': 'ID must be a string',
    }),

  photo: Joi.string()
    .uri()
    .optional()  // робимо поле необов'язковим
    .messages({
      'string.base': 'Photo must be a valid URL string',
      'string.uri': 'Photo must be a valid URL',
    }),

  name: Joi.string()
    .min(3)
    .max(255)
    .optional()  // робимо поле необов'язковим
    .messages({
      'string.base': 'Name must be a string',
      'string.min': 'Name must have at least {#limit} characters',
      'string.max': 'Name must have at most {#limit} characters',
    }),

  suppliers: Joi.string()
    .min(3)
    .max(255)
    .optional()  // робимо поле необов'язковим
    .messages({
      'string.base': 'Suppliers must be a string',
      'string.min': 'Suppliers must have at least {#limit} characters',
      'string.max': 'Suppliers must have at most {#limit} characters',
    }),

  stock: Joi.number()
    .integer()
    .positive()
    .optional()  // робимо поле необов'язковим
    .messages({
      'number.base': 'Stock must be a number',
      'number.integer': 'Stock must be an integer',
      'number.positive': 'Stock must be a positive number',
    }),

  price: Joi.number()
    .positive()
    .precision(2)
    .optional()  // робимо поле необов'язковим
    .messages({
      'number.base': 'Price must be a number',
      'number.positive': 'Price must be a positive number',
      'number.precision': 'Price must have at most 2 decimal places',
    }),

  category: Joi.string()
    .min(1)
    .max(255)
    .optional()  // робимо поле необов'язковим
    .messages({
      'string.base': 'Category must be a string',
      'string.min': 'Category must have at least {#limit} characters',
      'string.max': 'Category must have at most {#limit} characters',
    }),
});
