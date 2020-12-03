import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { PipesDto } from './pipes.dto';
import { PipesService } from './pipes.service';

@Controller('pipes')
export class PipesController {
  constructor(private pipesService: PipesService) {}

  @Post()
  create(@Body(new ValidationPipe()) pipesDto: PipesDto): string {
    return this.pipesService.printData(pipesDto.name, pipesDto.age);
  }
}
