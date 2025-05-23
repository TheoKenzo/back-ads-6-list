import { Module } from '@nestjs/common';
import { ToDoUseCaseModule } from '../use-case';
import { ToDoController } from './controller/to-do.controller';

@Module({
  imports: [ToDoUseCaseModule],
  controllers: [ToDoController],
})
export class ToDoPresenterModule {}
