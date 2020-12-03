import { Module } from '@nestjs/common';
import { ExceptionsControllerController } from './exceptions-controller.controller';

@Module({
  controllers: [ExceptionsControllerController],
})
export class ExceptionsModule {}
