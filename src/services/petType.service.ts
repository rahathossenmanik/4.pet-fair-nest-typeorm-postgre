import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetType } from 'src/entities/petType.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PetTypeService {
  constructor(
    @InjectRepository(PetType)
    private PetTypeRepository: Repository<PetType>
  ) {}

  async findAll(): Promise<PetType[]> {
    return this.PetTypeRepository.find();
  }

  async findById(id: number): Promise<PetType> {
    return this.PetTypeRepository.findOneBy({ id });
  }

  async create(petType: PetType): Promise<PetType> {
    return this.PetTypeRepository.save(petType);
  }

  async update(id: string, petType: PetType): Promise<UpdateResult> {
    return this.PetTypeRepository.update(id, petType);
  }

  async delete(id: number): Promise<PetType> {
    const deletedPetType = await this.PetTypeRepository.findOneBy({ id });
    await this.PetTypeRepository.delete(id);
    return deletedPetType;
  }
}
