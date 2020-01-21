import { InputType, Field, Int } from 'type-graphql';
import { BudgetType } from './enums/budget-type.enum';

@InputType()
export class BudgetInput {
    @Field(() => BudgetType)
    readonly type: BudgetType;

    @Field(() => Int)
    readonly amount: number;

    @Field()
    readonly description: string;

    @Field()
    readonly createdAt: Date;
}
