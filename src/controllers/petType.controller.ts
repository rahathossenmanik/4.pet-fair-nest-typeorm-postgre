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
import { PetType } from 'src/entities/petType.entity';
import { PetTypeService } from 'src/services/petType.service';

@ApiTags('PetTypes')
@Controller('petTypes')
export class PetTypesController {
  constructor(private petTypesService: PetTypeService) {}

  @Get('getall')
  async findAll() {
    return this.petTypesService.findAll();
  }

  @Get('getbyid/:id')
  async findById(@Param('id') id: number) {
    return this.petTypesService.findById(id);
  }

  @Post('create')
  async create(@Body() petType: PetType) {
    return this.petTypesService.create(petType);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() petType: PetType) {
    return this.petTypesService.update(id, petType);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.petTypesService.delete(id);
  }
}
