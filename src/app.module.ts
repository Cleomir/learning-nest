import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { ExpressControllerController } from './express-controller/express-controller.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ControllerController,
    ExpressControllerController,
  ],
  providers: [AppService],
})
export class AppModule {}
