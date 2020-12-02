import { Controller, Get } from '@nestjs/common';

@Controller('controller')
export class ControllerController {
  @Get()
  findAll(): string {
    return 'Hello controller';
  }
}
