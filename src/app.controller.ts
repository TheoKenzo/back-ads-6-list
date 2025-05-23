import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FormattedToDoResponse } from './interfaces/responses/formatted-to-do.response';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/auth/verify-access-key')
  async verifyAccessKey(@Body() body: { accessKey: string }): Promise<boolean> {
    return await this.appService.verifyAccessKey(body);
  }

  @Get('/todo/list')
  async getTodoList(): Promise<FormattedToDoResponse[]> {
    return await this.appService.getTodoList();
  }
}
