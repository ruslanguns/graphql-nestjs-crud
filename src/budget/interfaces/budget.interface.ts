import { Document } from 'mongoose';
import { BudgetType } from '../enums/budget-type.enum';

export interface IBudget extends Document {
    readonly type: BudgetType;
    readonly amount: number;
    readonly description: string;
    readonly createdAt: Date;
}
