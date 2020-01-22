import { InputType, Field, Int, ID } from 'type-graphql';
import { BudgetTypeEnum } from './enums/budget-type.enum';

@InputType()
export class BudgetInput {
    @Field({ nullable: true })
    readonly _id?: string;

    @Field(() => BudgetTypeEnum)
    readonly type: BudgetInput;

    @Field(() => Int)
    readonly amount: number;

    @Field({ nullable: true })
    readonly description: string;
}
