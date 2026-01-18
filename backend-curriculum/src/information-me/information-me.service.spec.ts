import { Test, TestingModule } from '@nestjs/testing';
import { InformationMeService } from './information-me.service';

describe('InformationMeService', () => {
  let service: InformationMeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InformationMeService],
    }).compile();

    service = module.get<InformationMeService>(InformationMeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
