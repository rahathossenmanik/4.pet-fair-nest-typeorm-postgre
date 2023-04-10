import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/books.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private BooksRepository: Repository<Book>
  ) {}

  async findAll(): Promise<Book[]> {
    return this.BooksRepository.find();
  }

  async findById(id: number): Promise<Book> {
    return this.BooksRepository.findOneBy({ id });
  }

  async create(book: Book): Promise<Book> {
    return this.BooksRepository.save(book);
  }

  async update(id: string, book: Book): Promise<UpdateResult> {
    return this.BooksRepository.update(id, book);
  }

  async delete(id: number): Promise<Book> {
    const deletedBook = await this.BooksRepository.findOneBy({ id });
    await this.BooksRepository.delete(id);
    return deletedBook;
  }
}
