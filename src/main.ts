import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Configurar opciones de Swagger
  const options = new DocumentBuilder()
    .setTitle('Nombre de tu API')
    .setDescription('Descripción de tu API')
    .setVersion('1.0')
    .build();

  // Generar el documento Swagger
  const document = SwaggerModule.createDocument(app, options);

  // Configurar la ruta de Swagger
  SwaggerModule.setup('api', app, document);

  await app.listen(3000 , ()=>{
    console.log('Tipo base de datos', process.env.DB_TYPE);
    
  });
}
bootstrap();
