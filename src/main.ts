import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Homework API')
  .setDescription('Top API in the world')
  .setVersion('0.0.1')
  // .addTag('Homework')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // --- Pipes ---
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      stopAtFirstError: true,
    }),
  );
  // --- Swagger ---
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  // --- ConfigService & port ---
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
}

bootstrap();
