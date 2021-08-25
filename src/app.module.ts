import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  // verificar o módulo do mongo
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://joao:Jm%40200413@cluster0.yjal6.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
