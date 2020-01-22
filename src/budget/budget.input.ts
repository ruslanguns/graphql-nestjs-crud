import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class BudgetInput {
    @Field()
    readonly type: string;
    @Field(() => Int)
    readonly amount: number;
    @Field()
    readonly description: string;
}
