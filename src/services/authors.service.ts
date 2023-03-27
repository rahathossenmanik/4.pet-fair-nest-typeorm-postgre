import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from 'src/schemas/authors.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name)
    private authorModel: Model<AuthorDocument>
  ) {}

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async findById(id: string): Promise<Author> {
    return this.authorModel.findById(id).exec();
  }

  async create(author: Author): Promise<Author> {
    const createdAuthor = new this.authorModel(author);
    return createdAuthor.save();
  }

  async update(id: string, author: Author): Promise<Author> {
    await this.authorModel.findByIdAndUpdate(id, author);
    return this.authorModel.findById(id).exec();
  }

  async delete(id: string): Promise<Author> {
    const deletedAuthor = await this.authorModel.findById(id).exec();
    await this.authorModel.findByIdAndRemove(id).exec();
    return deletedAuthor;
  }
}
