import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

const envFilePath = process.env.NODE_ENV
  ? `.env.${process.env.NODE_ENV}`
  : '.env.production';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
