import { Controller, UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';

@Controller('guards')
@UseGuards(RolesGuard)
export class GuardsController {}
