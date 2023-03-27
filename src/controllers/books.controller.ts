import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Book } from 'src/schemas/books.schema';
import { BookService } from 'src/services/books.service';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.booksService.findById(id);
  }

  @Post()
  create(@Body() book: Book) {
    return this.booksService.create(book);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() book: Book) {
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.booksService.delete(id);
  }
}
