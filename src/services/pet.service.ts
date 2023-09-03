import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/entities/pet.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private PetRepository: Repository<Pet>
  ) {}

  async findAll(): Promise<Pet[]> {
    return this.PetRepository.find();
  }

  async findById(id: number): Promise<Pet> {
    return this.PetRepository.findOneBy({ id });
  }

  async create(pet: Pet): Promise<Pet> {
    return this.PetRepository.save(pet);
  }

  async update(id: string, pet: Pet): Promise<UpdateResult> {
    return this.PetRepository.update(id, pet);
  }

  async delete(id: number): Promise<Pet> {
    const deletedPet = await this.PetRepository.findOneBy({ id });
    await this.PetRepository.delete(id);
    return deletedPet;
  }

  async findAllDog(): Promise<Pet[]> {
    return this.PetRepository.findBy({ petType: { id: 1 } });
  }

  async findAllCat(): Promise<Pet[]> {
    return this.PetRepository.findBy({ petType: { id: 2 } });
  }

  async findAllBird(): Promise<Pet[]> {
    return this.PetRepository.findBy({ petType: { id: 3 } });
  }

  async findAllReptile(): Promise<Pet[]> {
    return this.PetRepository.findBy({ petType: { id: 4 } });
  }

  async loveReaction(id: number): Promise<UpdateResult> {
    const pet = await this.PetRepository.findOneBy({ id });
    pet.loveCount = pet.loveCount + 1;
    return this.PetRepository.update(id, pet);
  }
}
