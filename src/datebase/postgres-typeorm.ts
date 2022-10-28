import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log('Postgres DB client');
    return {
      type: 'postgres',
      url: this.configService.get<string>('POSTGRES_URI'),
      autoLoadEntities: true,
      // entities: ['dist/**/*.entity.{ts,js}'],
      // migrations: ['dist/migrations/*.{ts,js}'],
      // migrationsTableName: 'typeorm_migrations',
      // logger: 'file',
      synchronize: true, // never use TRUE in production!
      ssl: true,
    };
  }
}
