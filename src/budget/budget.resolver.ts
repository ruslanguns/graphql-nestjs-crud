import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BudgetService } from './budget.service';
import { BudgetDto } from './dtos/budget.dto';
import { BudgetInput } from './budget.input';

@Resolver('Budget')
export class BudgetResolver {
    constructor(private readonly budgetService: BudgetService) { }

    @Query(() => [BudgetDto])
    async budget(): Promise<BudgetDto[]> {
        return this.budgetService.find();
    }

    @Query(() => BudgetDto)
    async getRecordById(@Args('id') id: string): Promise<BudgetDto> {
        return this.budgetService.findById(id);
    }

    @Mutation(() => BudgetDto)
    async createRecord(@Args('budget') input: BudgetInput): Promise<BudgetInput> {
        return this.budgetService.create(input);
    }

    @Mutation(() => BudgetDto)
    async deleteRecord(@Args('id') id: string): Promise<BudgetInput> {
        return this.budgetService.delete(id);
    }

    @Mutation(() => BudgetDto)
    async updateRecord(
        @Args('id') id: string,
        @Args('budget') input: BudgetInput,
    ): Promise<BudgetInput> {
        return this.budgetService.update(id, input);
    }

}
