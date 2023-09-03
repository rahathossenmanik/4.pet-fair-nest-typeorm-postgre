import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PetType } from './petType.entity';
import { Character } from './character.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  age: number;

  @ManyToOne(() => PetType)
  @JoinColumn()
  petType: PetType;

  @ManyToOne(() => Character)
  @JoinColumn()
  character: Character;

  @Column({ nullable: false })
  about: string;

  @Column({ nullable: false })
  favorite: string;

  @Column({ nullable: false })
  image: string;

  @Column({ default: 0 })
  loveCount: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updateDate: Date;
}
