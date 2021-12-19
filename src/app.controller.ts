import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitService } from './rabbit/rabbit.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitService: RabbitService,
  ) {}

  @Get()
  getHello(): any {
    const message = this.appService.getMessage();
    this.rabbitService.send('notification', message);
    return message;
  }
}
