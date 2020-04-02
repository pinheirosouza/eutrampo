import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseAlertService {

  constructor(public alertCtrl: AlertController) { }

  async response(header?, message?) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
