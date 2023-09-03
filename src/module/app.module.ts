require('dotenv').config({ path: '.env' });
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CharactersController } from 'src/controllers/character.controller';
import { PetTypesController } from 'src/controllers/petType.controller';
import { PetsController } from 'src/controllers/pet.controller';
import { CharacterService } from 'src/services/character.service';
import { PetTypeService } from 'src/services/petType.service';
import { PetService } from 'src/services/pet.service';
import { Character } from 'src/entities/character.entity';
import { PetType } from 'src/entities/petType.entity';
import { Pet } from 'src/entities/pet.entity';

const DB_URL = process.env.DATABASE_URL;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: DB_URL,
      entities: [Character, PetType, Pet],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Character, PetType, Pet]),
  ],
  controllers: [CharactersController, PetTypesController, PetsController],
  providers: [CharacterService, PetTypeService, PetService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
