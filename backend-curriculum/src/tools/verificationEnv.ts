import { ConfigService } from '@nestjs/config';

export function getEnv<T>(configService: ConfigService, nameEnv: string): T {
  const value = configService.get<T>(nameEnv);
  if (!value) {
    throw new Error(` Missing environment variable: ${nameEnv}`);
  }
  return value;
}
