import { Inject, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideosMongoDbRepository } from './repositories/videos-mongo-db-repository.service';

export interface IVideosRepository {
  getAllVideos(): string;
}

export const IVideosRepositoryKey = 'IVideosRepository';

@Injectable()
export class VideosService {
  constructor(
    @Inject(IVideosRepositoryKey)
    private readonly videosRepository: IVideosRepository,
  ) {}

  //TODO: как сделать универсальную схему\энтити? что бы работать с "одним" классом
  // createNewVideo(createVideoDto: CreateVideoDto) {
  //   const newVideo = {
  //     id: new Date().getMilliseconds(),
  //     ...createVideoDto,
  //   };
  //   return this.videosRepository.createNewVideo(createVideoDto);
  // }

  getAllVideos() {
    return this.videosRepository.getAllVideos();
  }
  //
  // getOneVideoById(id: number) {
  //   return `This action returns a #${id} video`;
  // }
  //
  // updateOneVideoById(id: number, updateVideoDto: UpdateVideoDto) {
  //   return `This action updates a #${id} video`;
  // }
  //
  // deleteOneVideoById(id: number) {
  //   return `This action removes a #${id} video`;
  // }
}
