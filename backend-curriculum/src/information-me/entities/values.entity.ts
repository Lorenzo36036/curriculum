import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('values')
export class Values {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
