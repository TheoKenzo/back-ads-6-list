import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/auth/verify-access-key')
  async verifyAccessKey(@Body() body: { accessKey: string }): Promise<boolean> {
    return await this.appService.verifyAccessKey(body);
  }
}
