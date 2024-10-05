import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Control-T')
    .setDescription('La documentación de la API')
    .setVersion('1.0')
    .addTag('API')
    .build();
  app.enableCors({
    origin: '*', // Permitir todas las solicitudes (puedes restringir más adelante si es necesario)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
