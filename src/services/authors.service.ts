import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/entities/authors.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  // constructor(
  //   @InjectModel(Author.name)
  //   private authorModel: Model<AuthorDocument>
  // ) {}
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
    // const createdAuthor = this.AuthorsRepository();
    return this.AuthorsRepository.save(author);
  }

  // async update(id: string, author: Author): Promise<Author> {
  //   await this.AuthorsRepository.findByIdAndUpdate(id, author);
  //   return this.AuthorsRepository.findById(id).exec();
  // }

  async delete(id: number): Promise<Author> {
    const deletedAuthor = await this.AuthorsRepository.findOneBy({ id });
    await this.AuthorsRepository.delete(id);
    return deletedAuthor;
  }
}
