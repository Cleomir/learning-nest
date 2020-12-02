import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('express-controller')
export class ExpressControllerController {
  @Get()
  findAll(@Res() res: Response): Response<any> {
    return res.status(200).json({ message: 'success' });
  }
}
