import { ApiProperty } from '@nestjs/swagger';

export const videoAvailableResolutions: string[] = [
  'P144',
  'P240',
  'P360',
  'P480',
  'P720',
  'P1080',
  'P1440',
  'P2160',
];

export class Video {
  // @ApiProperty({ required: false })
  id: number;
  // @ApiProperty({ minLength: 1, maxLength: 40 })
  title: string;
  // @ApiProperty({ minLength: 1, maxLength: 20 })
  author: string;
  // @ApiProperty({ default: false })
  canBeDownloaded: boolean;
  // @ApiProperty({ nullable: true, default: null, minimum: 1, maximum: 18 })
  minAgeRestriction: number | null;
  createdAt: Date;
  publicationDate: Date;
  // @ApiProperty({ enum: videoAvailableResolutions })
  availableResolutions: typeof videoAvailableResolutions;
}
