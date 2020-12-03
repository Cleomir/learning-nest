import { Test, TestingModule } from '@nestjs/testing';
import { ExportedService } from './exported.service';

describe('ExportedService', () => {
  let service: ExportedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExportedService],
    }).compile();

    service = module.get<ExportedService>(ExportedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
