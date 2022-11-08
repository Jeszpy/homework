import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { Video } from './entities/video.entity';

@ApiTags('Videos')
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  // @Post()
  // createVideo(@Body() createVideoDto: CreateVideoDto) {
  //   return this.videosService.createNewVideo(createVideoDto);
  // }

  @ApiOkResponse({
    description: 'Success',
    type: Video,
  })
  @ApiOperation({ description: 'Return all videos' })
  @Get()
  getAllVideos() {
    return this.videosService.getAllVideos();
  }

  // @Get(':id')
  // getOneVideo(@Param('id') id: string) {
  //   return this.videosService.getOneVideoById(+id);
  // }
  //
  // @Put(':id')
  // updateOneVideo(
  //   @Param('id') id: string,
  //   @Body() updateVideoDto: UpdateVideoDto,
  // ) {
  //   return this.videosService.updateOneVideoById(+id, updateVideoDto);
  // }
  //
  // @Delete(':id')
  // deleteOneVideo(@Param('id') id: string) {
  //   return this.videosService.deleteOneVideoById(+id);
  // }
}
