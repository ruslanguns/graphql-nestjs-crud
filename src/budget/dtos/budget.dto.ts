import { InputType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

@InputType()
export class BudgetDto {
    @Field(() => ID)
    @IsString()
    readonly id?: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    readonly type: string;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;

    @Field()
    @IsString()
    @IsNotEmpty()
    readonly description: string;
}
