import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}

  async create(createFormDto: CreateFormDto) {
    try {
      await this.formRepository.save(createFormDto);
      return {
        success: true,
        message: 'Se guardó el formulario exitosamente',
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        success: false,
        message: 'Ocurrió un error en el registro del formulario',
      };
    }
  }
}
