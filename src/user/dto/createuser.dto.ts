import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
export class CreateUserDto{

 @IsNotEmpty()   
 @IsString()
 @MinLength(5)
   username:string;

 @IsNotEmpty()
 @MinLength(6,{message:'password atleast 6 characters'})
 @MaxLength(20)
    password:string;  

 @IsNotEmpty()
  @IsString()
  @MinLength(10)
      mobileno:string;  

 @IsNotEmpty()  
 @IsEmail(null,{message:'Please enter a valid email'})
    emailid:string;

  @IsNotEmpty()
  @IsString()
     address:string;

}