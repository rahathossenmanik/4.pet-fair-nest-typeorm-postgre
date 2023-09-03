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
import { Character } from 'src/entities/character.entity';
import { CharacterService } from 'src/services/character.service';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharacterService) {}

  @Get('getall')
  async findAll() {
    return this.charactersService.findAll();
  }

  @Get('getbyid/:id')
  async findById(@Param('id') id: number) {
    return this.charactersService.findById(id);
  }

  @Post('create')
  async create(@Body() character: Character) {
    return this.charactersService.create(character);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() character: Character) {
    return this.charactersService.update(id, character);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.charactersService.delete(id);
  }
}
