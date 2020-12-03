import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

// @UseFilters(HttpExceptionFilter)
@Controller('exceptions-controller')
export class ExceptionsControllerController {
  @Get()
  async findAll() {
    throw new HttpException({ message: 'Forbidden' }, HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return `Your id is : ${id}`;
  }
}
