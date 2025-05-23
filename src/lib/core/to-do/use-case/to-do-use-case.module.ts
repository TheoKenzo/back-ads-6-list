import { Module } from '@nestjs/common';
import { ToDoDataAccessModule } from '../data-access';

@Module({
  imports: [ToDoDataAccessModule],
  providers: [],
})
export class ToDoUseCaseModule {}
