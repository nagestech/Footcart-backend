import { IsEmail, IsEmpty, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateUserDto{

 @IsNotEmpty()   
 @IsString()
   name:string;

 @IsNotEmpty()  
 @IsEmail(null,{message:'Please enter a valid email'})
    email:string;

  @IsNotEmpty()
  @IsString()
     address:string;

  @IsNotEmpty()
  @IsString()
    mobilenumber:string;  
    
  @IsString()
  @IsEmpty()
    alternatenumber:string;   

  @IsNotEmpty()
  @MinLength(6,{message:'password atleast 6 characters'})
    password:string; 

  @IsEmpty() 
    image:string;   

}