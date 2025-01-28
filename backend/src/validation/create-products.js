import Joi from 'joi';

export const createProductsSchema = Joi.object({
  _id: Joi.string()
    .pattern(/^[a-fA-F0-9]{24}$/)
    .required()
    .messages({
      'string.base': '_id must be a string',
      'string.pattern.base': '_id must be a valid ObjectId (24 hex characters)',
      'any.required': '_id is required',
    }),

  id: Joi.string()
    .required()
    .messages({
      'string.base': 'ID must be a string',
      'any.required': 'ID is required',
    }),

  photo: Joi.string()
    .uri()
    .required()
    .messages({
      'string.base': 'Photo must be a valid URL string',
      'string.uri': 'Photo must be a valid URL',
      'any.required': 'Photo is required',
    }),

  name: Joi.string()
    .min(3)
    .max(255)
    .required()
    .messages({
      'string.base': 'Name must be a string',
      'string.min': 'Name must have at least {#limit} characters',
      'string.max': 'Name must have at most {#limit} characters',
      'any.required': 'Name is required',
    }),

  suppliers: Joi.string()
    .min(3)
    .max(255)
    .required()
    .messages({
      'string.base': 'Suppliers must be a string',
      'string.min': 'Suppliers must have at least {#limit} characters',
      'string.max': 'Suppliers must have at most {#limit} characters',
      'any.required': 'Suppliers are required',
    }),

  stock: Joi.number()
    .integer()
    .positive() // Перевірка на додатнє ціле число
    .required()
    .messages({
      'number.base': 'Stock must be a number',
      'number.integer': 'Stock must be an integer',
      'number.positive': 'Stock must be a positive number',
      'any.required': 'Stock is required',
    }),

  price: Joi.number()
    .positive() // Перевірка на додатнє число
    .precision(2) // Максимум 2 десяткові знаки
    .required()
    .messages({
      'number.base': 'Price must be a number',
      'number.positive': 'Price must be a positive number',
      'number.precision': 'Price must have at most 2 decimal places',
      'any.required': 'Price is required',
    }),

  category: Joi.string()
    .min(1)
    .max(255)
    .required()
    .messages({
      'string.base': 'Category must be a string',
      'string.min': 'Category must have at least {#limit} characters',
      'string.max': 'Category must have at most {#limit} characters',
      'any.required': 'Category is required',
    }),
});
