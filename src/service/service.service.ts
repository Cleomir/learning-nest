import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ExportedService } from 'src/module/exported.service';

@Injectable()
export class ServiceService implements OnModuleInit {
  private service: ExportedService;
  private readonly logger = new Logger(ServiceService.name);
  constructor(private moduleRef: ModuleRef) {}
  onModuleInit() {
    this.service = this.moduleRef.get(ExportedService, { strict: false });
  }

  private readonly names: string[] = [];

  create(name: string) {
    this.logger.log(name, 'Service.create');
    this.service.printName('John doe');
    this.names.push(name);
  }

  findAll(): string[] {
    return this.names;
  }
}
