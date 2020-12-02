import { Test, TestingModule } from '@nestjs/testing';
import { ExpressControllerController } from './express-controller.controller';

describe('ExpressControllerController', () => {
  let controller: ExpressControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpressControllerController],
    }).compile();

    controller = module.get<ExpressControllerController>(
      ExpressControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
