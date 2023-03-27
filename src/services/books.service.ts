import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'src/schemas/books.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async create(book: Book): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async update(id: string, book: Book): Promise<Book> {
    await this.bookModel.findByIdAndUpdate(id, book);
    return this.bookModel.findById(id).exec();
  }

  async delete(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findById(id).exec();
    await this.bookModel.findByIdAndRemove(id).exec();
    return deletedBook;
  }
}
