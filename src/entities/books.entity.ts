import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Author } from 'src/entities/authors.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column()
  genre: string;

  @OneToOne(() => Author)
  @JoinColumn()
  author: Author;

  @Column()
  publicationDate: Date;
}
