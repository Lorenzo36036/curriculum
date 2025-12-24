import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnv } from './tools/verificationEnv';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { User } from './module/user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: getEnv<string>(configService, 'POSTGRES_HOST'),
        port: parseInt(getEnv<string>(configService, 'POSTGRES_PORT')),
        username: getEnv<string>(configService, 'POSTGRES_USERNAME'),
        password: getEnv<string>(configService, 'POSTGRES_PASSWORD'),
        database: getEnv<string>(configService, 'POSTGRES_DATABASE'),
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
