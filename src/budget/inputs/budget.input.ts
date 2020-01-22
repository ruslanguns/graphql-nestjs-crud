import { InputType, Field, Int } from 'type-graphql';
import { BudgetTypeEnum } from '../enums';

@InputType()
export class BudgetInput {
    @Field(() => BudgetTypeEnum)
    readonly type: BudgetTypeEnum;

    @Field(() => Int)
    readonly amount: number;

    @Field({ nullable: true })
    readonly description?: string;
}
