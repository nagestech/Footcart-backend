import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import User from './entity/user.entity';
import { CreateUserDto } from './dto/createuser.dto'
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    
    @Get()
      async getAllUser(): Promise<User[]>{
        const users=await this.userService.getAllUser();
        return users;
      }
      
    @Get(':id')
       async getUser(@Param('id') id:number): Promise<User>{
           const user = await this.userService.getUser(id);
           return user
       }  
    @Post()
       async addUser(@Body() createUserDto:CreateUserDto){
          const newuser=await this.userService.addUser(createUserDto)
          return newuser
       }   
    @Delete(':id')
       async deleteuser(@Param('id') id:number):Promise<User>{
          const user=this.userService.deleteuser(id);
          return user
       }  
    }