import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ default: true, select: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  prepareData() {
    this.email = this.email.trim().toLowerCase();
    this.username = this.username.trim();
    this.password = this.password.trim();
  }
}
