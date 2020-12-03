import { Injectable } from '@nestjs/common';

@Injectable()
export class PipesService {
  printData(name: string, age: number): string {
    return `Hello ${name} you are ${age}`;
  }
}
