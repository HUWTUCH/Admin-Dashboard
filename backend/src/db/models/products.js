import { Schema, model } from 'mongoose';

// Схема для продуктів
const productsSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    suppliers: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Додає поля createdAt та updatedAt
  }
);

// Експорт моделі
export const ProductsCollection = model("products", productsSchema, "products");
