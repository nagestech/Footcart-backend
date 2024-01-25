import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
class User{
    @PrimaryGeneratedColumn({primaryKeyConstraintName:'userid'})
       userid:number;
    @Column()
       username:string;
   @Column()
       password:string;   
   @Column()
       mobileno:string; 
   @Column({unique:true})
       emailid:string;
    @Column()
        address:string;   
}  
   
export default User

