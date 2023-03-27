import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Author } from 'src/schemas/authors.schema';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop()
  genre: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
  author: Author;

  @Prop()
  publicationDate: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
