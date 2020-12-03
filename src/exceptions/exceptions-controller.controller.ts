import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
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
}
