import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceService {
  private readonly names: string[] = [];

  create(name: string) {
    this.names.push(name);
  }

  findAll(): string[] {
    return this.names;
  }
}
