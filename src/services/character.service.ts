import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/entities/character.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private CharacterRepository: Repository<Character>
  ) {}

  async findAll(): Promise<Character[]> {
    return this.CharacterRepository.find();
  }

  async findById(id: number): Promise<Character> {
    return this.CharacterRepository.findOneBy({ id });
  }

  async create(character: Character): Promise<Character> {
    return this.CharacterRepository.save(character);
  }

  async update(id: string, character: Character): Promise<UpdateResult> {
    return this.CharacterRepository.update(id, character);
  }

  async delete(id: number): Promise<Character> {
    const deletedCharacter = await this.CharacterRepository.findOneBy({ id });
    await this.CharacterRepository.delete(id);
    return deletedCharacter;
  }
}
