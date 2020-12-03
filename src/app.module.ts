import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { ExpressControllerController } from './express-controller/express-controller.controller';
import { ServiceController } from './service/service.controller';
import { ServiceService } from './service/service.service';
import { ModuleModule } from './module/module.module';

@Module({
  imports: [ModuleModule],
  controllers: [
    AppController,
    ControllerController,
    ExpressControllerController,
    ServiceController,
  ],
  providers: [AppService, ServiceService],
})
export class AppModule {}
