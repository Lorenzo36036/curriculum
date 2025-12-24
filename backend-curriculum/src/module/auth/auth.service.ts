/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  UnauthorizedException,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;

    const user = await this.usersService.findOne(email);

    if (!user) throw new BadRequestException('user not found');
    if (!user.isActive) throw new UnauthorizedException('user not exist');
    if (user.password && !this.verificationLogin(password, user.password))
      throw new UnauthorizedException('password incorrect');
    return {
      uuid: user.uuid,
      username: user.username,
      email: user.email,
      active: user.isActive,
    };
  }

  login(user: CreateUserDto) {
    const payload = { email: user.email, name: user.name };
    return {
      message: 'user logged in successfully',
      access_token: this.jwtService.sign(payload),
    };
  }

  verificationLogin(password: string, hash: string) {
    const isMatch = bcrypt.compareSync(password, hash);
    return isMatch;
  }
}
