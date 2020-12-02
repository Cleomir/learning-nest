import { Body, Controller, Get, Post } from '@nestjs/common';

import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private service: ServiceService) {}

  @Post()
  async create(@Body() name: string) {
    this.service.create(name);
  }

  @Get()
  async findAll(): Promise<string[]> {
    return this.service.findAll();
  }
}
