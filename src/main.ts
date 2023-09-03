import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './module/app.module';

const corsOption = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'https://zzkvcp-3000.csb.app',
    'https://*.csb.app'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

async function bookstore() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pet Fair')
    .setDescription('Node JS + Express + Mongoose + MongoDB')
    .setVersion('1.0.0')
    .setContact('Email', 'mailto:rahathossenmanik@gmail.com', 'rahathossenmanik@gmail.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors(corsOption);

  await app.listen(process.env.PORT || 3000);
}
bookstore();
