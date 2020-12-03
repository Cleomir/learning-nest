import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionsControllerController } from './exceptions-controller.controller';

describe('ExceptionsControllerController', () => {
  let controller: ExceptionsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExceptionsControllerController],
    }).compile();

    controller = module.get<ExceptionsControllerController>(ExceptionsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
