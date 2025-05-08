import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnvVariable } from './lib/utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = getEnvVariable(process.env.API_PORT, 'API_PORT');

  console.log(`API_PORT: ${port}`);

  await app.listen(port);
}
bootstrap();
