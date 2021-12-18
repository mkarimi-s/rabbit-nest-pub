import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): any {
    const code = Date.now().toString().substring(7);
    const notificationResponse = {
      to: '+989124109855',
      type: this.getNotificationType(),
      message: 'your activation code is: ' + code,
      correlation_id: code,
    };

    return notificationResponse;
  }

  getNotificationType(): string {
    const typeArray = ['sms', 'mail'];
    return typeArray[Math.floor(Math.random() * 2)];
  }
}
