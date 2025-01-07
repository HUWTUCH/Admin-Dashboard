import { Schema, model } from 'mongoose';

// Схема для клієнта/транзакції
const suppliersSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // Ім'я клієнта
    },
    address: {
      type: String,
      required: true, // Адреса клієнта
    },
    suppliers: {
      type: String,
      required: true, // Постачальник
    },
    date: {
      type: Date,
      required: true, // Дата транзакції
    },
    amount: {
      type: Number,
      required: true, // Сума транзакції
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"], // Статус транзакції
      required: true,
    },
  },
  {
    timestamps: true, // Додає createdAt і updatedAt
  }
);

// Експорт моделі
export const SuppliersCollection = model("suppliers", suppliersSchema, "suppliers");
