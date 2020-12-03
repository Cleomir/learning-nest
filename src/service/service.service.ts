import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ExportedService } from 'src/module/exported.service';

@Injectable()
export class ServiceService implements OnModuleInit {
  private service: ExportedService;
  constructor(private moduleRef: ModuleRef) {}
  onModuleInit() {
    this.service = this.moduleRef.get(ExportedService, { strict: false });
  }

  private readonly names: string[] = [];

  create(name: string) {
    this.service.printName('John doe');
    this.names.push(name);
  }

  findAll(): string[] {
    return this.names;
  }
}
