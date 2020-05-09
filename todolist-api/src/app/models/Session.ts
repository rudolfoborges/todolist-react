import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BaseEntity,
} from 'typeorm';

@Entity({ name: 'sessions' })
export default class Session extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  token: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @BeforeInsert()
  beforeInsert(): void {
    this.createdAt = new Date();
  }
}
