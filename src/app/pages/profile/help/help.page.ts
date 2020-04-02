import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-help",
  templateUrl: "./help.page.html",
  styleUrls: ["./help.page.scss"]
})
export class HelpPage implements OnInit {
  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {}

  async developing() {
      const alert = await this.alertCtrl.create({
        header: 'Em desenvolvimento',
        message: 'Esta função está desativada no momento.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
  
}
