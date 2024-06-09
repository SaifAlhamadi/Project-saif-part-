import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  currentMessage: any = null;

  constructor(private afMessaging: AngularFireMessaging, private afs: AngularFirestore) {
    this.afMessaging.messages.subscribe(
      (message) => { this.currentMessage = message; }
    );
  }

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token: string | null) => {
        if (token) {
          console.log(token);
          this.saveToken(token);
        } else {
          console.error('Token is null or undefined');
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  private saveToken(token: string) {
    const devicesRef = this.afs.collection('devices');
    const docData = { token };
    devicesRef.add(docData);
  }
}
