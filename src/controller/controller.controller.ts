import { Controller, Get, Header, HttpCode, Param, Post } from '@nestjs/common';

@Controller('controller')
export class ControllerController {
  @HttpCode(204)
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'created';
  }

  @Get()
  findAll(): string {
    return 'Hello controller';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `Hello id : ${params.id}`;
  }
}
