import { Controller, Get } from '@nestjs/common';
import { InformationMeService } from './information-me.service';

@Controller('information-me')
export class InformationMeController {
  constructor(private readonly informationMeService: InformationMeService) {}

  @Get('/skills')
  findSkills() {
    return this.informationMeService.findSkills();
  }

  @Get('/about-me')
  findAboutMe() {
    return this.informationMeService.findAboutMe();
  }

  @Get('/personal-projects')
  findPersonalProjects() {
    return this.informationMeService.findPersonalProjects();
  }

  @Get('/values')
  findValues() {
    return this.informationMeService.findValues();
  }
}
