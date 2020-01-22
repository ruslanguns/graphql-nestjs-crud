import { InputType, Field, Int, ID, ObjectType } from 'type-graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { BudgetTypeEnum } from '../enums/budget-type.enum';

@ObjectType()
export class BudgetType {
    @Field(() => ID)
    @IsString()
    readonly _id?: string;

    @Field(() => BudgetTypeEnum)
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

    @Field()
    @IsString()
    readonly createdAt: Date;

}
