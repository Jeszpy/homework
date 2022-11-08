import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { App, AppService } from './app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('App')
  @ApiOkResponse({
    description: 'Get standard "Hello World!" string',
    type: App,
  })
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
