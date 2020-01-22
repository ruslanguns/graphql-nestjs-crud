import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BudgetService } from './budget.service';
import { BudgetType } from './types/budget.type';
import { BudgetInput } from './budget.input';

@Resolver()
export class BudgetResolver {
    constructor(private readonly budgetService: BudgetService) { }

    @Query(() => [BudgetType])
    async budget(): Promise<BudgetType[]> {
        return await this.budgetService.find();
    }

    @Query(() => BudgetType)
    async getRecordById(@Args('id') id: string): Promise<BudgetType> {
        return await this.budgetService.findById(id);
    }

    @Mutation(() => BudgetType)
    async createRecord(@Args('input') input: BudgetInput): Promise<BudgetType> {
        return await this.budgetService.create(input);
    }

    @Mutation(() => BudgetType)
    async deleteRecord(@Args('id') id: string): Promise<BudgetType> {
        return await this.budgetService.delete(id);
    }
    @Mutation(() => BudgetType)
    async updateItem(
        @Args('id') id: string,
        @Args('input') input: BudgetInput,
    ): Promise<BudgetType> {
        return await this.budgetService.update(id, input);
    }

}