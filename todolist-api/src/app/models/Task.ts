import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';

@Entity({ name: 'tasks' })
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'completed_at' })
  completedAt: Date;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @BeforeInsert()
  beforeInsert(): void {
    this.createdAt = new Date();
  }
}
