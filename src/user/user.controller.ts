import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import User from './entity/user.entity';
import { CreateUserDto } from './dto/createuser.dto'
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
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
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
      destination: './uploads/files',
      filename: (req, file, cb) => {
         const randomName = Array(32).fill(null).map(() => 
        (Math.round(Math.random() * 16)).toString(16)).join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
          },
        }),
       }))
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