import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBudget } from './interfaces';
import { BudgetType } from './types';
import { BudgetInput, EditBudgetInput } from './inputs';

@Injectable()
export class BudgetService {
    constructor(@InjectModel('Budget') private budgetModel: Model<IBudget>) { }

    async find(): Promise<BudgetType[]> {
        return this.budgetModel.find();
    }

    async findById(id: string): Promise<BudgetType> {
        return this.budgetModel.findById(id);
    }

    async create(dto: BudgetInput): Promise<BudgetType> {
        return await this.budgetModel.create(dto);
    }

    async update(id: string, dto: EditBudgetInput): Promise<BudgetType> {
        return await this.budgetModel.findByIdAndUpdate(id, dto, { new: true });
    }

    async delete(id: string): Promise<BudgetType> {
        return await this.budgetModel.findByIdAndDelete(id);
    }
}
