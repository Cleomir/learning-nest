import { Controller, Get, Post } from '@nestjs/common';

@Controller('controller')
export class ControllerController {
  @Post()
  create(): string {
    return 'created';
  }

  @Get()
  findAll(): string {
    return 'Hello controller';
  }
}
