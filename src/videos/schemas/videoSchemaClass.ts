import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { videoAvailableResolutions } from '../entities/video.entity';

export type VideoDocument = VideoSchemaClass & Document;

@Schema()
export class VideoSchemaClass {
  @Prop({ required: true })
  title: string;

  @Prop()
  author: string;

  @Prop()
  canBeDownloaded: boolean;

  @Prop()
  minAgeRestriction: null | number;

  @Prop()
  createdAt: Date;

  @Prop()
  publicationDate: Date;

  @Prop([String])
  availableResolutions: typeof videoAvailableResolutions;
}

export const VideoSchema = SchemaFactory.createForClass(VideoSchemaClass);
