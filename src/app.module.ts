import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { ExpressControllerController } from './express-controller/express-controller.controller';
import { ServiceController } from './service/service.controller';
import { ServiceService } from './service/service.service';
import { MyLogger } from './service/logger.service';
import { ModuleModule } from './module/module.module';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { PipesController } from './pipes/pipes.controller';
import { PipesService } from './pipes/pipes.service';
import { GuardsController } from './guards/guards.controller';

@Module({
  imports: [ModuleModule, ExceptionsModule],
  controllers: [
    AppController,
    ControllerController,
    ExpressControllerController,
    ServiceController,
    PipesController,
    GuardsController,
  ],
  providers: [AppService, ServiceService, PipesService, MyLogger],
})
export class AppModule {}
