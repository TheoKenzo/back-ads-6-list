import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FormattedToDoResponse } from './interfaces/responses/formatted-to-do.response';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyAccessKey(dto: { accessKey: string }): Promise<boolean> {
    const accessKey = await this.prisma.accessKey.findUnique({
      where: { key: dto.accessKey },
    });

    return !!accessKey;
  }

  async getTodoList(): Promise<FormattedToDoResponse[]> {
    const toDos = await this.prisma.toDoItem.findMany();

    const formattedToDos: FormattedToDoResponse[] = [];

    for (const toDo of toDos) {
      // const owner = await this.prisma.user.findUnique({
      //   where: { id: toDo.userId },
      // });

      formattedToDos.push({
        id: toDo.id,
        title: toDo.title,
        ownerName: 'Em desenvolvimento',
        isChecked: toDo.isChecked,
      });
    }

    return formattedToDos;
  }
}
