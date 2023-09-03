import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pet } from 'src/entities/pet.entity';
import { PetService } from 'src/services/pet.service';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private petsService: PetService) {}

  @Get('getall')
  async findAll() {
    return this.petsService.findAll();
  }

  @Get('getbyid/:id')
  async findById(@Param('id') id: number) {
    return this.petsService.findById(id);
  }

  @Post('create')
  async create(@Body() pet: Pet) {
    return this.petsService.create(pet);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() pet: Pet) {
    return this.petsService.update(id, pet);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.petsService.delete(id);
  }

  @Get('getalldog')
  async findAllDog() {
    return this.petsService.findAllDog();
  }

  @Get('getallcat')
  async findAllCat() {
    return this.petsService.findAllCat();
  }

  @Get('getallbird')
  async findAllBird() {
    return this.petsService.findAllBird();
  }

  @Get('getallreptile')
  async findAllReptile() {
    return this.petsService.findAllReptile();
  }

  @Put('love/:id')
  async loveReaction(@Param('id') id: number) {
    return this.petsService.loveReaction(id);
  }
}
