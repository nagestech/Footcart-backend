import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import User from './user/entity/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'192.168.1.43',
      port:5432,
      username:'postgres',
      password:'postgres',
      database:'postgres',
      entities:[User],
      synchronize:true,
    }),
    UserModule,
    AuthModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}