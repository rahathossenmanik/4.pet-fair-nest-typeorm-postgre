require('dotenv').config({
  path: '.env',
});
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
import { Module } from '@nestjs/common';
import { AuthorsController } from 'src/controllers/authors.controller';
import { AuthorService } from 'src/services/authors.service';
import { BooksController } from 'src/controllers/books.controller';
import { BookService } from 'src/services/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/entities/authors.entity';
import { Book } from 'src/entities/books.entity';
import { DataSource } from 'typeorm';

const url =
  'postgres://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASS +
  '@' +
  process.env.DB_HOST +
  '/' +
  process.env.DB_NAME;
console.log(url);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:admin@localhost/mern-mvc-crud',
      entities: [Author, Book],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Author, Book]),
  ],
  controllers: [AuthorsController, BooksController],
  providers: [AuthorService, BookService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
