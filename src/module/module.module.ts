import { Module } from '@nestjs/common';
import { ExportedService } from './exported.service';

@Module({
  providers: [ExportedService],
  exports: [ExportedService],
})
export class ModuleModule {}
