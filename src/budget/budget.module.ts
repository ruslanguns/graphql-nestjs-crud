import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetResolver } from './budget.resolver';
import { BudgetSchema } from './budget.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Budget', schema: BudgetSchema }]),
  ],
  providers: [BudgetService, BudgetResolver],
})
export class BudgetModule { }
