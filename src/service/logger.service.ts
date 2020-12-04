import { Injectable, Logger } from '@nestjs/common';
import { inspect } from 'util';

import logger from './logger';

@Injectable()
export class MyLogger extends Logger {
  log(message: any, context?: string) {
    logger.info(`[${context}] ${this.formatObject(message)}`);
    super.log(message, context);
  }

  formatObject(message: any) {
    if (typeof message === 'object') {
      return inspect(message, { depth: null });
    }

    return message;
  }
}
