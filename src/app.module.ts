import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ToDoPresenterModule } from './lib/core/to-do/presenter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ToDoPresenterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
