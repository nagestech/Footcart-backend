import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
class User{
    @PrimaryGeneratedColumn()
       id:number;
    @Column()
       name:string;
    @Column()
       email:string;
    @Column()
        address:string;   
    @Column()
       mobilenumber:number;
    @Column()
       alternatenumber:number;   
    @Column()
       password:string;   
  
     
}
export default User

