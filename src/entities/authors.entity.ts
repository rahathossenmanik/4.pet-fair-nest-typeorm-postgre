import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  givenName: string;

  @Column()
  lastName: string;

  @Column()
  country: string;

  @Column()
  birthdate: Date;
}
