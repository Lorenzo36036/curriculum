import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from '@/information-me/entities/skills.entity';
import { AboutMe } from '@/information-me/entities/about-me.entity';
import { Repository } from 'typeorm';
import { PersonalProjects } from '@/information-me/entities/personal-projects.entity';
import { Values } from '@/information-me/entities/values.entity';
import { Services } from '@/information-me/entities/services.entity';
import { Data } from './seedData/information';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Skill) private readonly skillRepo: Repository<Skill>,
    @InjectRepository(AboutMe)
    private readonly aboutMeRepo: Repository<AboutMe>,
    @InjectRepository(PersonalProjects)
    private readonly projectRepo: Repository<PersonalProjects>,
    @InjectRepository(Values) private readonly valuesRepo: Repository<Values>,
    @InjectRepository(Services)
    private readonly serviceRepo: Repository<Services>,
  ) {}

  async create() {
    const hasData = await this.aboutMeRepo.count();
    if (hasData > 0) {
      await Promise.all([
        this.aboutMeRepo.clear(),
        this.skillRepo.clear(),
        this.serviceRepo.clear(),
        this.valuesRepo.clear(),
        this.projectRepo.clear(),
      ]);
    }

    try {
      await Promise.all([
        this.aboutMeRepo.save(Data.AboutMeData),
        this.skillRepo.save(Data.SkillsData),
        this.serviceRepo.save(Data.ServicesData),
        this.valuesRepo.save(Data.ValuesData),
        this.projectRepo.save(Data.PersonalProjectsData),
      ]);

      return '✅ ¡Base de datos poblada con éxito!';
    } catch (error) {
      console.error('Error insertando datos:', error);
      throw new Error('Error al poblar la base de datos');
    }
  }
}
