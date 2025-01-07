import { model, Schema } from 'mongoose';

const incomeExpensesSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // Назва транзакції
    },
    amount: {
      type: Number,
      required: true, // Сума транзакції
    },
    type: {
      type: String,
      enum: ["Expense", "Income", "Error"], // Тип транзакції
      required: true,
    },
  },
  {
    timestamps: true, // Додає createdAt та updatedAt
  }
);
export const IncomeExpensesCollection = model('Income-Expenses', incomeExpensesSchema, "Income-Expenses")
