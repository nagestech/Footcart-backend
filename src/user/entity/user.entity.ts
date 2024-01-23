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
       mobilenumber:string;
    @Column()
       alternatenumber:string;   
    @Column()
       password:string;   
    @Column({ type: 'varchar', length: 300, nullable: true })
       image: string;   
}
export default User

