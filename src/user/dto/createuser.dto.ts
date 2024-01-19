import { IsEmail, IsEmpty, IsInt, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";


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
  @IsNumber()
    mobilenumber:number;  
    
  @IsNumber()
  @IsEmpty()
    alternatenumber:number;   

 @IsNotEmpty()
 @MinLength(6,{message:'password atleast 6 characters'})
   password:string;     
}