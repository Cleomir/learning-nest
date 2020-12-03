import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('exceptions-controller')
export class ExceptionsControllerController {
  @Get()
  async findAll() {
    throw new HttpException({ message: 'Forbidden' }, HttpStatus.FORBIDDEN);
  }
}
