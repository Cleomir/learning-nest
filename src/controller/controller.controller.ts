import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDto } from './controller.dto';

@Controller('controller')
export class ControllerController {
  //   @HttpCode(204)
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createDto: CreateDto): string {
    console.log(createDto.name);
    return createDto.name;
  }

  @Get()
  async findAll(): Promise<string> {
    return 'Hello controller';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `Get id : ${params.id}`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `Update id ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Delete id ${id}`;
  }
}
