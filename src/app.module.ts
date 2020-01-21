import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-graphql', { useNewUrlParser: true, useUnifiedTopology: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
