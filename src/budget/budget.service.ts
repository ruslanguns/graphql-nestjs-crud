import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBudget } from './interfaces/budget.interface';
import { BudgetDto } from './dtos/budget.dto';
import { BudgetInput } from './budget.input';

@Injectable()
export class BudgetService {
    constructor(@InjectModel('Budget') private budgetModel: Model<IBudget>) { }

    async find(): Promise<BudgetDto[]> {
        return this.budgetModel.find();
    }

    async findById(id: string): Promise<BudgetDto> {
        return this.budgetModel.findById(id);
    }

    async create(dto: BudgetInput): Promise<BudgetDto> {
        return await this.budgetModel.create(dto);
    }

    async update(id: string, dto: BudgetInput): Promise<BudgetDto> {
        return await this.budgetModel.findByIdAndUpdate(id, dto, { new: true });
    }

    async delete(id: string): Promise<BudgetDto> {
        return await this.budgetModel.findByIdAndDelete(id);
    }
}
