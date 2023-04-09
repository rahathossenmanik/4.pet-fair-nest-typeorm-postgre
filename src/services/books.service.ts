import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  // constructor(
  //   @InjectModel(Book.name)
  //   private bookModel: Model<BookDocument>
  // ) {}
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

  // async create(book: Book): Promise<Book> {
  //   const createdBook = new this.BooksRepository(book);
  //   return createdBook.save();
  // }

  // async update(id: string, book: Book): Promise<Book> {
  //   await this.BooksRepository.findByIdAndUpdate(id, book);
  //   return this.BooksRepository.findById(id).exec();
  // }

  async delete(id: number): Promise<Book> {
    const deletedBook = await this.BooksRepository.findOneBy({ id });
    await this.BooksRepository.delete(id);
    return deletedBook;
  }
}
