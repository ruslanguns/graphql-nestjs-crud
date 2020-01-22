import { Document } from 'mongoose';

export interface IBudget extends Document {
    readonly _id: string;
    readonly type: string;
    readonly amount: number;
    readonly description: string;
    readonly createdAt: Date;
}
