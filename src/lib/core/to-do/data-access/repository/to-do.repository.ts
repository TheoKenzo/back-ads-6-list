import { Provider } from '@nestjs/common';
import { IToDoRepository } from '../../shared/interface';

export class ToDoRepository implements IToDoRepository {}

export const toDoRepositoryProvider: Provider<IToDoRepository> = {
  provide: IToDoRepository,
  useClass: ToDoRepository,
};
