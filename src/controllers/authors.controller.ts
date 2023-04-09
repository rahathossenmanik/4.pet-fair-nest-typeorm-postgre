import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Author } from 'src/entities/authors.entity';
import { AuthorService } from 'src/services/authors.service';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorService) {}

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.authorsService.findById(id);
  }

  // @Post()
  // create(@Body() author: Author) {
  //   return this.authorsService.create(author);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() author: Author) {
  //   return this.authorsService.update(id, author);
  // }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.authorsService.delete(id);
  }
}
