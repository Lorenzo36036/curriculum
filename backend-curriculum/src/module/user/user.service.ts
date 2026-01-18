import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserData } from '@/common/interfaces/login';
import { handleDBExceptions } from '@/common/utils/handle-db-exception';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createAuthDto: CreateUserDto) {
    try {
      createAuthDto.password = await bcrypt.hash(createAuthDto.password, 10);
      const saveUser = await this.userRepository.save(createAuthDto);
      return {
        message: 'User created successfully',
        user: {
          uuid: saveUser.uuid,
          username: saveUser.username,
          email: saveUser.email,
        },
      };
    } catch (error) {
      return handleDBExceptions(error, this.logger);
    }
  }

  async findOneBy(
    typeSearchData: 'email' | 'uuid',
    searchValue: string,
  ): Promise<UserData> {
    try {
      const selecTypesAttributes =
        typeSearchData === 'email'
          ? {
              uuid: true,
              username: true,
              email: true,
              password: true,
              isActive: true,
            }
          : {
              uuid: true,
              username: true,
              email: true,
              roles: true,
              isActive: true,
            };

      const user = await this.userRepository.findOne({
        where: {
          [typeSearchData]: searchValue,
        },
        select: selecTypesAttributes,
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    } catch (error) {
      return handleDBExceptions(error, this.logger);
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return updateUserDto;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
