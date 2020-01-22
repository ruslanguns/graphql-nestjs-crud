import { Field, Int, ObjectType, ID } from 'type-graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { BudgetTypeEnum } from '../enums';

@ObjectType()
export class BudgetType {
    @Field(() => ID)
    @IsString()
    @IsNotEmpty()
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
    @IsNotEmpty()
    readonly createdAt: Date;

}
