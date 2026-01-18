import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './entities/skills.entity';
import { Repository } from 'typeorm';
import { AboutMe } from './entities/about-me.entity';
import { PersonalProjects } from './entities/personal-projects.entity';
import { Values } from './entities/values.entity';
import { Services } from './entities/services.entity';

@Injectable()
export class InformationMeService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,

    @InjectRepository(AboutMe)
    private readonly aboutMeRepository: Repository<AboutMe>,

    @InjectRepository(PersonalProjects)
    private readonly personalProjectsRepository: Repository<PersonalProjects>,

    @InjectRepository(Values)
    private readonly valuesRepository: Repository<Values>,

    @InjectRepository(Services)
    private readonly servicesRepository: Repository<Services>,
  ) {}

  async findSkills() {
    return await this.skillRepository.find();
  }

  async findAboutMe() {
    return await this.aboutMeRepository.find();
  }

  async findPersonalProjects() {
    return await this.personalProjectsRepository.find();
  }

  async findValues() {
    return await this.valuesRepository.find();
  }

  async findServices() {
    return await this.servicesRepository.find();
  }
}
