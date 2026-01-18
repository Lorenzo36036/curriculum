import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { InformationMeModule } from '@/information-me/information-me.module';

@Module({
  imports: [InformationMeModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
