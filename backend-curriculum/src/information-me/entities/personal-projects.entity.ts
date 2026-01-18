import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personal_projects')
export class PersonalProjects {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('text', { array: true, nullable: true })
  tags: string[];
}
