import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { videoAvailableResolutions } from '../entities/video.entity';

export type VideoDocument = VideoSchema & Document;

@Schema()
export class VideoSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ default: false })
  canBeDownloaded: boolean;

  @Prop({ default: null })
  minAgeRestriction: null | number;

  @Prop({})
  createdAt: Date;

  @Prop()
  publicationDate: Date;

  @Prop([String])
  availableResolutions: typeof videoAvailableResolutions;
}

export const videoSchema = SchemaFactory.createForClass(VideoSchema);
