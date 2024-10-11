import { Test, TestingModule } from '@nestjs/testing';
import { RegionalController } from './regional.controller';
import { RegionalService } from './regional.service';

describe('RegionalController', () => {
  let controller: RegionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegionalController],
      providers: [RegionalService],
    }).compile();

    controller = module.get<RegionalController>(RegionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
