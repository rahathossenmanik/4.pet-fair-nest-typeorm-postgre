require('dotenv').config({
  path: '.env'
});
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
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

const DB_URL = process.env.DATABASE_URL;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: DB_URL,
      entities: [Author, Book],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Author, Book])
  ],
  controllers: [AuthorsController, BooksController],
  providers: [AuthorService, BookService]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
