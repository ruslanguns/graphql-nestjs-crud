import { registerEnumType } from 'type-graphql';

export enum BudgetTypeEnum {
    EXPENSE = 'expense',
    INCOME = 'income',
}

registerEnumType(BudgetTypeEnum, {
    name: 'BudgetTypeEnum',
});
