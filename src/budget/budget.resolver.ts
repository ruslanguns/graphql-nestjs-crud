import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BudgetService } from './budget.service';
import { BudgetDto } from './dtos/budget.dto';
import { BudgetInput } from './budget.input';

@Resolver()
export class BudgetResolver {
    constructor(private readonly budgetService: BudgetService) { }

    @Query(() => [BudgetDto])
    async budget(): Promise<BudgetDto[]> {
        return await this.budgetService.find();
    }

    @Query(() => BudgetDto)
    async getRecordById(@Args('id') id: string): Promise<BudgetDto> {
        return await this.budgetService.findById(id);
    }

    @Mutation(() => BudgetDto)
    async createRecord(@Args('input') input: BudgetInput): Promise<BudgetInput> {
        return await this.budgetService.create(input);
    }

    @Mutation(() => BudgetDto)
    async deleteRecord(@Args('id') id: string): Promise<BudgetInput> {
        return await this.budgetService.delete(id);
    }
    @Mutation(() => BudgetDto)
    async updateItem(
        @Args('id') id: string,
        @Args('input') input: BudgetInput,
    ): Promise<BudgetInput> {
        return await this.budgetService.update(id, input);
    }

}
