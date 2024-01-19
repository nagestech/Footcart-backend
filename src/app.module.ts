import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'',
      password:'',
      database:'',
      entities:[],
      synchronize:true,
    }),
    
  ],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}