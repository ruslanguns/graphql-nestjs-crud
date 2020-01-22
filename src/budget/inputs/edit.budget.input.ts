import { InputType, Field, Int } from 'type-graphql';
import { BudgetTypeEnum } from '../enums';

@InputType()
export class EditBudgetInput {
    @Field(() => BudgetTypeEnum, { nullable: true })
    readonly type?: BudgetTypeEnum;

    @Field(() => Int, { nullable: true })
    readonly amount?: number;

    @Field({ nullable: true })
    readonly description?: string;
}
