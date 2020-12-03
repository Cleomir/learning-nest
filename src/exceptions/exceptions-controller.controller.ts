import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('exceptions-controller')
export class ExceptionsControllerController {
  @Get()
  @UseFilters(new HttpExceptionFilter())
  async findAll() {
    throw new HttpException({ message: 'Forbidden' }, HttpStatus.FORBIDDEN);
  }
}
