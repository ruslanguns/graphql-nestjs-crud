import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetModule } from './budget/budget.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nestjs-graphql', { useNewUrlParser: true, useUnifiedTopology: true }),
    BudgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
