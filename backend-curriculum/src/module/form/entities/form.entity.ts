import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contact_form')
export class Form {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  email: string;

  @Column()
  message: string;

  @Column()
  name: string;

  @Column()
  subject: string;
}
