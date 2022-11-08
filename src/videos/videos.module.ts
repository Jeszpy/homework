import { Module } from '@nestjs/common';
import {
  IVideosRepository,
  IVideosRepositoryKey,
  VideosService,
} from './videos.service';
import { VideosController } from './videos.controller';
import { VideosMongoDbRepository } from './repositories/videos-mongo-db-repository.service';
import { MongooseModule } from '@nestjs/mongoose';
import { videoSchema, VideoSchema } from './schemas/videoSchema';

const VideosRepository = {
  provide: IVideosRepositoryKey,
  useClass: (() =>
    process.env.DATABASE_TYPE === 'postgres'
      ? VideosMongoDbRepository
      : VideosMongoDbRepository)(),
};

//TODO: 1. сделать подключение mongoose\typeorm .forFeature модуля по .env переменной и с прокидкой schemas\entities 2. делается это динамическим модулем (кастомныим)
const schemas = [{ name: VideoSchema.name, schema: videoSchema }];

@Module({
  imports: [MongooseModule.forFeature(schemas)],
  controllers: [VideosController],
  providers: [VideosService, VideosRepository],
})
export class VideosModule {}
