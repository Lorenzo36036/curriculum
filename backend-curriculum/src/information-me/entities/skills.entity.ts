import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  type: string;

  @Column('text', { array: true, nullable: true })
  habs: string[];
}
