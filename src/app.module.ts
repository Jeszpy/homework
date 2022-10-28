import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { VideosModule } from './videos/videos.module';
import configuration from './configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './datebase/postgres-typeorm';
import { MongooseConfigService } from './datebase/mongodb-mongoose';
import { MongooseModule } from '@nestjs/mongoose';

const chooseEnvFilePath = (): string => {
  return process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : '.env.production';
};

//TODO: 1. как переделать в "настоящий" модулль? с imports и inject. 2. делается это динамическим модулем (кастомныим)
const DatabaseModule = () => {
  const dbType = process.env.DATABASE_TYPE;
  // let dbModule;
  // if (dbType === 'postgres') {
  //   dbModule = TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService });
  // }
  // if (dbType === 'mongodb') {
  //   dbModule = MongooseModule.forRootAsync({
  //     useClass: MongooseConfigService,
  //   });
  // }
  // return dbModule;
  return dbType === 'postgres'
    ? TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService })
    : MongooseModule.forRootAsync({
        useClass: MongooseConfigService,
      });
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: chooseEnvFilePath(),
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule(),
    VideosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
