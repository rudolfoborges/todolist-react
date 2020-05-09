import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity({ name: 'users' })
class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  comparePassword(comparePassword: string): Promise<boolean> {
    // this.password => password do user => hash
    // comparePassword => password informado pelo user no request = 12345678
    return bcrypt.compare(comparePassword, this.password);
  }
}

export default User;
