import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitService {
  constructor(
    @Inject('notification-module')
    private readonly notificationClient: ClientProxy,
  ) {}

  public send(pattern: string, data: any) {
    console.log('pattern: ', pattern, 'data: ', data);
    return this.notificationClient.send(pattern, data).subscribe();
  }
}
