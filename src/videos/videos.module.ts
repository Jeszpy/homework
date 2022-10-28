import { Module } from '@nestjs/common';
import { IVideosRepository, VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { VideosMongodbRepository } from './repositories/videos.mongodb.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoSchema, VideoSchemaClass } from './schemas/videoSchemaClass';

//TODO: как подключать разные репозитории?
const VideosRepository = {
  provide: VideosMongodbRepository,
  useClass:
    process.env.DATABASE_TYPE === 'postgres'
      ? VideosMongodbRepository
      : VideosMongodbRepository,
};

//TODO: 1. сделать подключение mongoose\typeorm .forFeature модуля по .env переменной и с прокидкой schemas\entities 2. делается это динамическим модулем (кастомныим)

const schemas = [{ name: VideoSchemaClass.name, schema: VideoSchema }];

@Module({
  imports: [MongooseModule.forFeature(schemas)],
  controllers: [VideosController],
  providers: [VideosService, VideosMongodbRepository],
})
export class VideosModule {}
