import { Test, TestingModule } from '@nestjs/testing';
import { VideosController } from './videos.controller';
import { IVideosRepositoryKey, VideosService } from './videos.service';
import { VideosMongoDbRepository } from './repositories/videos-mongo-db-repository.service';
import { AppModule } from '../app.module';

describe('VideosController', () => {
  let controller: VideosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      // controllers: [],
      // providers: [],
      controllers: [VideosController],
      providers: [
        VideosService,
        {
          provide: IVideosRepositoryKey,
          useClass: (() =>
            process.env.DATABASE_TYPE === 'postgres'
              ? VideosMongoDbRepository
              : VideosMongoDbRepository)(),
        },
      ],
    }).compile();

    controller = module.get<VideosController>(VideosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
