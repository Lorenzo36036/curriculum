import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'username is required' })
  @MinLength(4, { message: 'username required minimum 4 characters' })
  @IsString()
  username: string;

  @IsNotEmpty({ message: 'password is required' })
  @MinLength(6, { message: 'password required minimum 6 characters' })
  @IsString()
  password: string;

  @IsEmail()
  @IsNotEmpty({ message: 'email is required' })
  email: string;
}
