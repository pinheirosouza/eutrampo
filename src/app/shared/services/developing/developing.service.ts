import { AlertController } from "@ionic/angular";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DevelopingService {
  constructor(public alertCtrl: AlertController) {}

  async developing() {
    const alert = await this.alertCtrl.create({
      header: "Em desenvolvimento",
      message: "Esta função está desativada no momento.",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
