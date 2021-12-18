import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitService } from './rabbit.service';

const RABBIT_URL =
  'amqps://empnayyn:1oQzA2-FRc1LFNDvVi6leb_Zmrr7lDnX@poodle.rmq2.cloudamqp.com/empnayyn';
const QUEUE_NAME = 'notification-queue';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'notification-module',
        transport: Transport.RMQ,
        options: {
          urls: [RABBIT_URL],
          queue: QUEUE_NAME,
        },
      },
    ]),
  ],
  controllers: [],
  providers: [RabbitService],
  exports: [RabbitService],
})
export class RabbitModule {}
