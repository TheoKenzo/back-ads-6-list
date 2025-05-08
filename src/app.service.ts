import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyAccessKey(dto: { accessKey: string }): Promise<boolean> {
    const accessKey = await this.prisma.accessKey.findUnique({
      where: { key: dto.accessKey },
    });

    return !!accessKey;
  }
}
