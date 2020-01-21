import { InputType, Field, Int, ID } from 'type-graphql';
import { IsString, IsEnum, IsNumber, IsOptional, IsNotEmpty, IsDate } from 'class-validator';
import { BudgetType } from '../enums/budget-type.enum';

@InputType()
export class BudgetDto {
    @Field(() => ID)
    @IsString()
    readonly id?: string;

    @Field(() => BudgetType)
    @IsEnum(BudgetType)
    readonly type: BudgetType;

    @Field(() => Int)
    @IsNumber()
    readonly amount: number;

    @Field()
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @Field()
    @IsDate()
    @IsOptional()
    readonly createdAt: Date;
}
