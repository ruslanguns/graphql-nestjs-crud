import { Schema } from 'mongoose';

export const BudgetSchema = new Schema({
    type: { type: String, enum: ['expense', 'income'] },
    amount: Number,
    description: String,
    createdAt: { type: Date, default: new Date() },
});
