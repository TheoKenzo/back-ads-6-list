import { Module } from '@nestjs/common';
import { toDoRepositoryProvider } from './repository/to-do.repository';

@Module({
  providers: [toDoRepositoryProvider],
})
export class ToDoDataAccessModule {}
