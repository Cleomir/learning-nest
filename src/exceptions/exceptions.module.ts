import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsControllerController } from './exceptions-controller.controller';
import { HttpExceptionFilter } from './http-exception.filter';

@Module({
  controllers: [ExceptionsControllerController],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class ExceptionsModule {}
