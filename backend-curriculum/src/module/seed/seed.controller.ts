import { Controller, Get, Query, UnauthorizedException } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  runSeed(@Query('key') key: string) {
    if (key !== process.env.SEED_KEY) {
      throw new UnauthorizedException('❌ ¡Cini ki cikici! No tienes permiso.');
    }

    return this.seedService.create();
  }
}
