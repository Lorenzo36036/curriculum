import { Module } from '@nestjs/common';
import { InformationMeService } from './information-me.service';
import { InformationMeController } from './information-me.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutMe } from './entities/about-me.entity';
import { PersonalProjects } from './entities/personal-projects.entity';
import { Services } from './entities/services.entity';
import { Skill } from './entities/skills.entity';
import { Values } from './entities/values.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AboutMe,
      PersonalProjects,
      Services,
      Skill,
      Values,
    ]),
  ],
  controllers: [InformationMeController],
  providers: [InformationMeService],
  exports: [TypeOrmModule],
})
export class InformationMeModule {}
