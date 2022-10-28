import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

const textToResponse = 'Hello World!';

export class App {
  @ApiProperty({ maxLength: textToResponse.length })
  response: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return textToResponse;
  }
}
