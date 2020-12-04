import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { logger } from './logger.middleware';
import { MyLogger } from './service/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
bootstrap();
