import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop({ required: true })
  givenName: string;

  @Prop()
  lastName: string;

  @Prop()
  country: string;

  @Prop()
  birthdate: Date;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
