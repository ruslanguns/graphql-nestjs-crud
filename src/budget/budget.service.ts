import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBudget } from './interfaces/budget.interface';
import { BudgetType } from './types/budget.type';
import { BudgetInput } from './budget.input';

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

    async update(id: string, dto: BudgetInput): Promise<BudgetType> {
        return await this.budgetModel.findByIdAndUpdate(id, dto, { new: true });
    }

    async delete(id: string): Promise<BudgetType> {
        return await this.budgetModel.findByIdAndDelete(id);
    }
}
