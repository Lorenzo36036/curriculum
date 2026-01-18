import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('services')
export class Services {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
