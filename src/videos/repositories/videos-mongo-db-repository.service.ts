import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from '../dto/create-video.dto';
import { UpdateVideoDto } from '../dto/update-video.dto';
import { IVideosRepository } from '../videos.service';
import { InjectModel } from '@nestjs/mongoose';
import { VideoDocument, VideoSchema } from '../schemas/videoSchema';
import { Model } from 'mongoose';

@Injectable()
export class VideosMongoDbRepository implements IVideosRepository {
  constructor(
    @InjectModel(VideoSchema.name) private videoModel: Model<VideoDocument>,
  ) {}

  // createNewVideo(createVideoDto: CreateVideoDto) {
  //   return this.videoModel.create({ ...createVideoDto });
  // }

  getAllVideos() {
    // return this.videoModel.find({});
    return 'mongo repo';
  }

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
