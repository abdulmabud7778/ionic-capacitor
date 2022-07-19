import { Injectable } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { Capacitor } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor() { }

  initPush() {
    if (Capacitor.getPlatform() !== 'web') {
      this.registerPush();
    }
  }
  private registerPush() {
    PushNotifications.requestPermissions().then(permission => {
      if (permission.receive === 'granted') {
        PushNotifications.register();
      }
      else {
        // If permission is not granted
      }
    });
    PushNotifications.addListener('registration', (token) => {
      console.log(28);
      console.log(token);
    });
    PushNotifications.addListener('registrationError', (err) => {
      console.log(err);
    }); 
    PushNotifications.addListener('pushNotificationReceived', (notifications) =>
    {
      console.log(notifications);
    });

  }
}
