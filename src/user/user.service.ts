import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createuser.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
          private userRepository:Repository<User>
    ) {}
    async getAllUser(){
      const users=this.userRepository.find();
      return users;
    }
    async getUser(id){
      const user=this.userRepository.findOne({
        where:{
            id:id,      
        },
      });
      if(user) {
        return user;
      }
      throw new NotFoundException('could not found user')
    }
    async addUser(createUserDto:CreateUserDto){
        return this.userRepository.save(createUserDto);
    }
    async deleteuser(id) {
        const user = await this.userRepository.findOne({
          where: {id: id},
        });
        if (!user) {
          return null;
        }
        await this.userRepository.remove(user);
        return user;
      }
}