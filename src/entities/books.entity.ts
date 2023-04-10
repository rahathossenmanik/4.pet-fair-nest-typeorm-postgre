import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Author } from 'src/entities/authors.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column()
  genre: string;

  @ManyToOne(() => Author)
  @JoinColumn()
  author: Author;

  @Column()
  publicationDate: Date;
}
