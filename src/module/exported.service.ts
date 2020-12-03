import { Injectable } from '@nestjs/common';

@Injectable()
export class ExportedService {
  printName(name: string) {
    console.log('Hello', name);
  }
}
