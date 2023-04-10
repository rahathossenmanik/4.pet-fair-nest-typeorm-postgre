import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/entities/authors.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private AuthorsRepository: Repository<Author>
  ) {}

  async findAll(): Promise<Author[]> {
    return this.AuthorsRepository.find();
  }

  async findById(id: number): Promise<Author> {
    return this.AuthorsRepository.findOneBy({ id });
  }

  async create(author: Author): Promise<Author> {
    return this.AuthorsRepository.save(author);
  }

  async update(id: string, author: Author): Promise<UpdateResult> {
    return this.AuthorsRepository.update(id, author);
  }

  async delete(id: number): Promise<Author> {
    const deletedAuthor = await this.AuthorsRepository.findOneBy({ id });
    await this.AuthorsRepository.delete(id);
    return deletedAuthor;
  }
}
