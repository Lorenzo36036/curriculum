import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('about_me')
export class AboutMe {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  description: string;
}
