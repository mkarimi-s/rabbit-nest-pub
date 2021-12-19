import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): any {
    const correlation_id = Date.now().toString().substring(7);
    const code = Date.now().toString().substring(9);
    const type = this.getNotificationType();
    const notificationResponse = {
      to: type === 'mail' ? 'mohamad.karimisalim@gmail.com' : '+989124109855',
      type: type,
      message: 'your activation code is: ' + code,
      correlation_id: correlation_id,
    };

    return notificationResponse;
  }

  getNotificationType(): string {
    const typeArray = ['sms', 'mail'];
    return typeArray[Math.floor(Math.random() * 2)];
  }
}
