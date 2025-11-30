import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Tambien se pueden agregar pipes globales para utilizarlos en toda la aplicacion, no solamente en la carpeta de controlador 'cars'
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Este parametro hace que los datos que no esten el el DTO no se manden
      forbidNonWhitelisted:true, // Este parametro hace que todos los datos que no esten en el DTO manden error
    }),
  )

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
