import { Test, TestingModule } from '@nestjs/testing';
import { InformationMeController } from './information-me.controller';
import { InformationMeService } from './information-me.service';

describe('InformationMeController', () => {
  let controller: InformationMeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformationMeController],
      providers: [InformationMeService],
    }).compile();

    controller = module.get<InformationMeController>(InformationMeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
